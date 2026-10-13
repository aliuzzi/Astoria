# Astoria — brand story production workspace

## Purpose

Astoria is a home for brand stories. Help a small creative agency move a product-launch campaign from client brief to approved storyboard, static graphics, and a responsive campaign microsite. Demonstrate customer discovery, creative-tool integration, dependable job execution, and traceable revisions in an FDE portfolio.

## Agency abstraction

Astoria supports an agency portfolio of client brands, each with its own positioning, audience, voice, story pillars, guardrails, colors, contacts, and agency owner. A client can have multiple campaigns. Each campaign has a scoped brief, target date, budget, assigned approver, production state, and website preview. Agency-wide views summarize clients, intake requests, campaign progress, and websites.

The interactive prototype includes Solune, Forma, and Kinfolk Coffee. A four-step intake captures client identity and contacts, brand strategy, campaign scope, and final review. Intake acceptance gates simulated production. Editing a strategy invalidates the affected client's campaign approvals; headline revisions affect only their campaign dependencies. Exports identify client and campaign IDs.

These records are browser-local. Production implementation will require shared persistence, authenticated agency/client roles, enforced authorization, durable uploads, and separately managed website deployments. Contact records in the mockup do not grant access or send invitations.

## Demonstration customer

Northline Studio is a fictional three-person creative agency using Astoria. Its client, Solune, is a fictional skincare brand launching a daily moisturizer. All brand materials, product details, and customer feedback in the initial demo are synthetic and must be labeled as such. Use supplied product photography and approved factual copy; do not invent clinical or efficacy claims.

Campaign: “Make room for your daily ritual.” Audience: adults interested in a simple skincare routine. Objective: introduce the product and collect launch interest. CTA: “Join the launch list.” The website signup is a labeled demo interaction and collects no personal information in version one.

## People and workflow

- Producer: creates campaigns, resolves missing inputs, selects creative direction, starts production, and prepares delivery.
- Reviewer: comments on deliverables and approves specific versions. In the prototype, these are explicit demo personas rather than production authentication.

1. Producer creates a campaign and uploads a structured brief, product images, logo, brand colors, font choices, and approved product facts. Intake identifies missing requirements before production begins.
2. System proposes two creative directions, each containing a rationale, headline, palette, visual treatment, and sample scene. Producer selects one and reviewer approves that version.
3. System proposes six storyboard scenes for a 20-second social video. Each scene has an image or placeholder, duration, on-screen copy, optional narration, production notes, and references to source facts. Durations total 20 seconds. This deliverable is a storyboard, not a rendered video.
4. Reviewer comments on specific scenes. Producer revises and submits a new version. Approved storyboard remains available in history.
5. Producer starts static production: two fixed layouts in square, portrait, and vertical sizes, producing six graphics. PhotoCraft performs verified image and template operations through MCP. Generated concept imagery can use an ArtCraft adapter once the exact service and capabilities have been verified.
6. System validates dimensions, formats, required text, and missing assets. Visual concerns are presented as review suggestions, not guaranteed judgments. Reviewer approves individual graphics.
7. Producer builds a microsite preview from approved campaign materials. One configurable template supports hero, product introduction, approved benefits, campaign story, graphic gallery, and CTA. Storyboard concept imagery is labeled when shown as a concept.
8. Reviewer approves the website version. Producer downloads a delivery bundle containing graphics, storyboard, static website, and provenance manifest.

## Critical revision demonstration

Reviewer requests: change the approved headline from “Make room for your daily ritual” to “A simple moment, every day.”

The system records a new copy version, identifies storyboard scenes, graphics, and website sections that reference the old headline, and marks affected approvals stale. It proposes a revision plan, rebuilds affected outputs on producer action, and preserves unaffected outputs and their approvals. Delivery is blocked until required current versions are approved.

## Version-one scope

- One fictional agency, client, and campaign; persistent data supports additional campaigns.
- Structured brief and file upload, with a seeded example campaign.
- Two creative directions and one selected direction.
- Six storyboard scenes; no final video rendering, audio generation, or timeline editing.
- Two graphic templates, each exported at 1080×1080, 1080×1350, and 1080×1920.
- One responsive microsite template with configurable brand styling and section order.
- Comments, immutable deliverable versions, explicit approvals, and dependency-based approval invalidation.
- Saved production jobs, bounded retries, cancellation, and resume after interruption.
- Downloadable deliverables and a local website preview; public hosting is a separate step.
- Demo role switching; production accounts, billing, multi-tenant isolation, and external publishing are future work.

## Data and execution model

Campaign → brief versions → creative-direction versions → storyboard/graphic/site versions → approvals → delivery bundle.

Source assets and approved copy have stable IDs and immutable versions. Every generated output records its input versions, template version, tool/runtime version, generation parameters, and job ID. Dependency records connect outputs to their actual inputs; changes invalidate affected descendants. An approval always refers to an exact output version.

The application owns workflow state and job records. A worker invokes creative tools through adapters. Persist execution steps and outputs before advancing; retries must avoid duplicating completed work. Keep deterministic layout/export operations explicit. AI proposes creative direction, scenes, and interpretation of feedback; schema validation and people control the accepted plan.

Local PhotoCraft execution implies a local worker. Start with a locally runnable application and local filesystem artifacts. A remotely hosted application would need a separate authenticated worker connection; defer that complexity.

## First integration gate

Before building the complete interface, pin a PhotoCraft version and prove these operations against its actual MCP schemas: open one template, substitute one image and headline, render a preview, export the result, and recover from an invalid input. Confirm font availability and output fidelity. Record supported operations and limitations. Verify the specific ArtCraft product, adapter provenance, authentication, costs, and image retrieval before adding concept generation.

## Acceptance criteria

- A fresh installation can load the seeded campaign and complete intake through delivery using documented setup.
- Missing product imagery or approved headline produces an actionable intake error.
- Storyboard contains six scenes with durations totaling 20 seconds.
- Static production exports six graphics at the specified dimensions.
- A failed production step can resume without recreating successful outputs; exhausted retries expose an actionable error.
- Revision demonstration invalidates all dependent approvals and preserves unaffected versions.
- Only approved, current materials enter a delivery bundle.
- Microsite renders without horizontal overflow at 375px and 1440px viewport widths; assets load, navigation works, and the demo CTA responds.
- Exported website runs independently of the agency workspace and includes necessary assets.
- Manifest identifies exact input and output versions for every delivered item.

## Build sequence

1. Prove creative-tool integration and create one reproducible template/export fixture.
2. Implement campaign data, brief validation, versioning, dependency tracking, and persistent jobs.
3. Build direction and storyboard review with a seeded path; add model generation behind validated schemas.
4. Connect graphic production and quality checks.
5. Build the microsite template, preview, and export from approved materials.
6. Complete change propagation, delivery gating, failure recovery, and demo documentation.

## Portfolio evidence

Produce a short walkthrough showing intake, approval, a failed job recovery, the headline revision, and final delivery. Include architecture and tradeoff notes, setup instructions, and an evaluation report. Measure active production time, revision effort, formatting errors, and reviewer acceptance against a manual baseline using the same inputs. Report observed results only. Clearly distinguish synthetic customer assumptions from interview findings and real pilot feedback.

Before expanding scope, interview agency practitioners about brief handoff, approval ownership, common revisions, and delivery formats. Revise the workflow based on evidence.
