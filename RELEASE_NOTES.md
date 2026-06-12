# Release Notes

## v0.1.1 - Demo GIF and English README

### Why This Release

`v0.1.0` made the skill public and installable. This patch release improves the public-facing package so first-time visitors can see the workflow quickly and non-Chinese users can evaluate the skill without translating the main README.

### What Changed

- Added `assets/demo.gif` to show a vague idea becoming a clear, verifiable brief.
- Added `scripts/render-demo-gif.mjs` so the demo GIF can be regenerated from source.
- Added `README.en.md` with English install instructions, examples, safety boundaries, validation flow, and file structure.
- Added language switch links between `README.md` and `README.en.md`.
- Embedded the demo GIF in both Chinese and English READMEs.
- Updated the publication checklist to mark demo GIF and English README as complete.

### Validation

- GitHub Chinese README renders correctly and loads `assets/demo.gif`.
- GitHub English README renders correctly, links back to Chinese, and loads `assets/demo.gif`.
- `node scripts/render-demo-gif.mjs` regenerates the GIF.
- `test-prompts.json` parses successfully.
- Local Markdown links in `README.md` and `README.en.md` resolve.
- `git diff --check` reports no whitespace errors.
- Public raw `README.en.md` and `assets/demo.gif` return `200 OK`.
- `npx --yes skills add zzpt8/clarify-idea-skill --skill clarify-idea --agent codex --copy -y` installs the public skill successfully.

## v0.1.0 - Public clarify-idea skill

### Why This Release

`clarify-idea` started as a reusable prompt for turning vague ideas into clear requirements. This release turns it into a public cross-agent skill package with visible examples, safety boundaries, replayable validation prompts, and a verified `skills` CLI install path.

### What Changed

- Added rich `SKILL.md` frontmatter with clear triggers and negative triggers.
- Added safety boundaries for high-risk requests such as deleting data, sending messages, payments, publishing, privacy, and account access.
- Added common failure modes so agents avoid over-questioning, inventing requirements, or executing too early.
- Added cross-runtime consistency across Codex, Claude, OpenCode, AGENTS.md, OpenClaw, Hermes, and generic prompt entry points.
- Reworked README around a clear hook, effect-first examples, install paths, trigger phrases, safety boundaries, and validation.
- Added 3 real examples and 3 recorded outputs:
  - recording tool camera settings
  - AI tools content account planning
  - risky customer messaging workflow
- Added `test-prompts.json` for replayable checks.
- Added MIT license.
- Published the repository publicly with Chinese description and discovery topics.
- Verified one-line install through the `skills` CLI.

### Validation

- Local working tree was clean before release.
- Release tag points to the latest verified `main` commit at release time.
- Six `SKILL.md` copies were verified to have matching SHA-256 hashes.
- `test-prompts.json` parses successfully and contains 3 prompts.
- Recorded outputs cover all expected keywords in `test-prompts.json`.
- Secret scan found no token, API key, cookie, password, secret, or private user path.
- Remote GitHub API confirmed README, `test-prompts.json`, `LICENSE`, and `examples/outputs/` exist.
- Public raw README and `test-prompts.json` are accessible.
- `npx --yes skills add zzpt8/clarify-idea-skill --skill clarify-idea --agent codex --copy -y` cloned the public repository, found 1 skill, and installed `clarify-idea` into a temporary Codex test project.

### Known Gaps Before Public Announcement

- GitHub API has not yet reported license detection as MIT, even though `LICENSE` exists.
- Marketplace / skills.sh registration is intentionally deferred.
