# Agency prototype verification

Verified in the in-app browser against local previews:

- Empty required intake fields block progression with an actionable message.
- Four-step intake creates a client, primary contact, brand strategy, and first campaign; onboarding starts pending acceptance.
- Intake acceptance updates the client to Active and clears the agency attention count.
- Adding a Forma contact and assigning that contact to its campaign does not add them to Solune.
- A separate Forma campaign progresses through direction approval, twelve creative approvals, website assembly, and website approval.
- Forma's preview contains its architecture positioning, brand colors, campaign headline, and original concept illustration.
- Agency website registry reports each client/campaign's independent preview status.
- Updating Forma's strategy invalidates Forma's approvals; Solune's approval counts stay unchanged.
- Strategy edits persist after reload.
- JavaScript syntax checks pass for the production prototype and agency layer.

The prior single-campaign prototype also verified headline dependency invalidation, microsite CTA behavior, and a nine-file ZIP with valid CRCs. Client exports now add client/campaign IDs and use client-specific filenames and artwork.

Limitations: state is local to a browser origin, production is simulated, filename intake does not upload bytes, contacts do not grant access, and domains are demonstrative. This verification does not establish production authorization or multi-tenant security.
