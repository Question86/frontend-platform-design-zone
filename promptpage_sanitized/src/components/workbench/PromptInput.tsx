'use client';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function PromptInput({ value, onChange, disabled }: PromptInputProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <label className="block text-cyan-accent-400 text-sm font-medium mb-2">
          What do you want to achieve?
        </label>
        <p className="text-gray-400 text-xs mb-4">
          Describe your task. The platform will suggest relevant prompt snippets.
        </p>
      </div>
      
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder="e.g., design a dashboard flow, improve UX copy, plan production rollout..."
        className="flex-1 w-full p-4 bg-dark-surface border border-dark-border rounded-lg 
                   text-white placeholder-gray-500 resize-none
                   focus:outline-none focus:border-cyan-accent-500 focus:ring-1 focus:ring-cyan-accent-500
                   disabled:opacity-50 disabled:cursor-not-allowed
                   font-mono text-sm"
      />
      
      <div className="mt-4 text-xs text-gray-500">
        {value.trim().length > 0 && (
          <span>{value.trim().split(/\s+/).length} words</span>
        )}
      </div>
    </div>
  );
}

