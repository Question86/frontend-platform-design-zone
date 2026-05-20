# PromptPage Sanitized Export

This folder contains a security-sanitized frontend design extract from `D:\Ergo\promptpage`.

Included:
- UI shell and style primitives (`src/app/layout.tsx`, `src/app/globals.css`, `src/app/not-found.tsx`)
- design-oriented workbench components (`MasterPromptPreview`, `PromptInput`)
- visual architecture asset (`blueprint.png`)

Excluded intentionally:
- all `.env*` files and any key/token material
- all wallet/payment/checkout/payout/transaction code paths
- API routes, blockchain helpers, and payment test pages
- build artifacts (`.next`), dependencies (`node_modules`), logs, DB dumps

See `SECURITY_REVIEW.md` for findings and exclusion rules.
