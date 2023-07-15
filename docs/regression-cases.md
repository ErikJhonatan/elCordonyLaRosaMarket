# Regression cases

Prepared for this change. **Not executed.** Tests, manual checks, lint and builds require explicit user authorization. Use isolated fixtures; never run destructive cases against production.

| Case | Input or setup | Expected outcome |
| --- | --- | --- |
| Timer race | Close menu then reopen within 500ms | Menu remains open; old close timer cancelled |
| Keyboard | Enter/Space menu controls and Escape | Menu opens/closes; focus returns to trigger |
| DOM guards | Load scripts on a page without menu/loader | No null-element exception |
| Loader | Navigate away while loading timer pending | Timer cleared; original body overflow restored |
