# Release Notes Draft

## v0.1.0 - Publish-ready draft

### Why This Release

`clarify-idea` started as a reusable prompt for turning vague ideas into clear requirements. This release turns it into a publish-ready cross-agent skill package with visible examples, safety boundaries, and replayable validation prompts.

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

### Validation

- Local working tree was clean after commit and push.
- Latest pushed commit: `c8ac016 Polish clarify-idea skill for publish readiness`.
- Six `SKILL.md` copies were verified to have matching SHA-256 hashes.
- `test-prompts.json` parses successfully and contains 3 prompts.
- Recorded outputs cover all expected keywords in `test-prompts.json`.
- Secret scan found no token, API key, cookie, password, secret, or private user path.
- Remote GitHub API confirmed README, `test-prompts.json`, `LICENSE`, and `examples/outputs/` exist.

### Known Gaps Before Public Announcement

- Repository is still private.
- GitHub repository description is empty.
- GitHub repository topics are empty.
- Public raw URL checks cannot pass until repository visibility is public.
- No demo GIF or terminal recording yet.
- No registry install verification yet.

### Suggested Tag

```text
v0.1.0
```

### Suggested GitHub Release Title

```text
v0.1.0 - Publish-ready clarify-idea skill
```
