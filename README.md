# Northline Campaign Studio

Interactive browser-local prototype for the Solune fictional campaign. No live PhotoCraft/ArtCraft MCP integration or production accounts. Assets are original SVG illustrations; approvals, comments, headline revisions, microsite assembly, and ZIP exports work locally.

Run `python3 -m http.server 4173 --directory dist` from this directory, then open http://localhost:4173.

Walkthrough: open Review, approve remaining scenes and graphics, build and approve the Campaign Website, and download the ZIP in Delivery. Request a copy revision in Review to see dependent approvals become stale. Rebuild, review affected outputs, and rebuild the site. Reset Demo restores the example campaign. Browser storage retains work between reloads.

The standalone website and storyboard use embedded artwork. Workspace web fonts are optional Google Fonts; the interface falls back to local fonts offline.
