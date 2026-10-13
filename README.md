# Astoria — Brand Stories

Astoria brings brand stories to life. Interactive browser-local prototype for the Solune fictional campaign. No live PhotoCraft/ArtCraft MCP integration or production accounts. Assets are original SVG illustrations; approvals, comments, headline revisions, microsite assembly, and ZIP exports work locally.

## Agency workspace

The agency overview now covers three fictional clients: Solune (skincare), Forma (architecture), and Kinfolk Coffee (food & beverage). A client owns its brand strategy, color identity, contacts, agency lead, and campaigns. A campaign owns its brief, assigned approver, storyboard, graphics, review state, and website preview.

Use Clients to open a profile; client and campaign selectors switch context. Strategy changes invalidate only that client's campaign approvals. Each website and delivery export carries the selected client's content and IDs. The four-step intake saves a draft, validates required information, records filenames without uploading files, and creates a client with its first campaign. Accept intake in the queue to enable production. Add contacts and assign a final approver per campaign.

This models client scoping locally, not security isolation. Contacts do not receive access or invitations. Browser storage is not shared between devices. Actual accounts, client portals, file storage, website hosting per client, and MCP execution remain implementation milestones. Requested scope is recorded, but demo production counts remain six scenes and six graphics per campaign.

Source UI files now live in `web/`; the website importer lives in `worker/`. Run `node scripts/build.mjs`, then `node scripts/preview.mjs` and open http://localhost:4175. The generated Worker embeds the UI and exposes the brand-import and image-fetch endpoints. A plain static server cannot run imports.

## Website brand import

In intake step one, enter a public website URL and select **Import brand from website**. Review source copy, suggested tone, palette candidates, logo, and photography. Choose up to three images and source excerpts, edit the proposed positioning/tone, and apply. Existing clients can import or refresh from Brand Strategy.

The importer reads the requested HTML plus up to two same-origin about/product pages and two stylesheets. It records original URLs, exact selected text, and imported image bytes. PNG/JPEG/WebP images and SVG logos are supported. Source images are reused in campaign compositions and embedded in exported microsites; exports retain provenance in the manifest. No image-generation service is used for these assets.

Tone is a rule-based suggestion, not a model-generated analysis. Colors are frequency-based candidates and need review. The importer does not execute page JavaScript or bypass blocked pages. Private-network URLs, credential-bearing URLs, unsupported MIME types, oversized responses, and unsafe redirects are rejected. Images are capped at 2 MB total per applied import because client data remains browser-local. Website import is a real backend action; creative production remains simulated.

Verify with `node --test tests/brand-import.test.mjs`.

Walkthrough: open Review, approve remaining scenes and graphics, build and approve the Campaign Website, and download the ZIP in Delivery. Request a copy revision in Review to see dependent approvals become stale. Rebuild, review affected outputs, and rebuild the site. Reset Demo restores the example campaign. Browser storage retains work between reloads.

The standalone website and storyboard use embedded artwork. Workspace web fonts are optional Google Fonts; the interface falls back to local fonts offline.
