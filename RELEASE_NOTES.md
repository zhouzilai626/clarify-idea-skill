# Release Notes

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

- No demo GIF or terminal recording yet.
- GitHub API has not yet reported license detection as MIT, even though `LICENSE` exists.
- GitHub README rendering should still be checked visually in a browser before broad announcement.
