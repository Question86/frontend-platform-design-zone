'use client';

interface MasterPromptPreviewProps {
  masterPromptSkeleton: string; // Structure-only before unlock
  masterPromptFull: string | null; // Full content after unlock
  isLocked: boolean;
  isUnlocked: boolean;
}

export function MasterPromptPreview({ 
  masterPromptSkeleton, 
  masterPromptFull, 
  isLocked,
  isUnlocked 
}: MasterPromptPreviewProps) {
  // Determine what to display
  const displayContent = isUnlocked && masterPromptFull 
    ? masterPromptFull 
    : masterPromptSkeleton;
  
  const contentType = isUnlocked && masterPromptFull ? 'FULL CONTENT' : 'STRUCTURE PREVIEW';

  return (
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-cyan-accent-400 font-medium">
            Master Prompt Preview
          </h3>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 text-xs rounded ${
              isUnlocked 
                ? 'bg-ok/20 text-ok border border-ok'
                : isLocked
                ? 'bg-petrol-900/40 text-petrol-400 border border-petrol-700'
                : 'bg-dark-border text-gray-400'
            }`}>
              {isUnlocked ? '✓ UNLOCKED' : isLocked ? '🔒 LOCKED' : 'DRAFT'}
            </span>
            <span className="px-2 py-1 text-xs rounded bg-dark-border text-gray-400">
              {contentType}
            </span>
          </div>
        </div>
        <p className="text-gray-400 text-xs mt-2">
          {isUnlocked 
            ? 'Full content unlocked. Ready to use.'
            : isLocked
            ? 'Structure preview only. Snippet content will be revealed after unlock.'
            : 'Select snippets and enter a prompt to preview the composition structure.'
          }
        </p>
      </div>

      <div className="flex-1 relative">
        <textarea
          value={displayContent}
          readOnly
          placeholder="Select snippets and enter a prompt to preview the composition structure..."
          className="w-full h-full p-4 bg-dark-surface border border-dark-border rounded-lg 
                     text-gray-300 placeholder-gray-600 resize-none
                     font-mono text-sm leading-relaxed
                     focus:outline-none focus:border-cyan-accent-500/50
                     cursor-default"
        />
        
        {/* Overlay lock indicator */}
        {isLocked && !isUnlocked && (
          <div className="absolute inset-0 bg-gradient-to-t from-petrol-900/20 to-transparent 
                          pointer-events-none rounded-lg" />
        )}
      </div>

      <div className="mt-4 text-xs text-gray-500">
        {displayContent.trim().length > 0 && (
          <div className="flex justify-between">
            <span>{displayContent.trim().split(/\s+/).length} words</span>
            <span>{displayContent.length} characters</span>
          </div>
        )}
        {isLocked && !isUnlocked && (
          <div className="mt-2 text-warning text-xs">
            ⚠️ Content preview is structure-only. Full snippet content requires unlock confirmation.
          </div>
        )}
      </div>
    </div>
  );
}

