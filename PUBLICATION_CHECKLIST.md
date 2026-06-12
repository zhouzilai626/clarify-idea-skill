# Publication Checklist

This checklist tracks what is ready before making `zzpt8/clarify-idea-skill` public.

## Repository Status

| Item | Status | Evidence |
|---|---|---|
| Latest commit pushed | Done | `1525dd0 Document public install verification` is on `origin/main` |
| Working tree clean | Done | `git status` reports `main...origin/main` |
| Repository visibility | Done | GitHub reports `PUBLIC` |
| Repository description | Done | `Cross-agent skill that turns vague ideas into clear, executable, and verifiable requirements.` |
| Repository topics | Done | `agent-skills`, `claude-code`, `codex`, `opencode`, `prd`, `prompt-engineering`, `requirements` |
| License file | Done | `LICENSE` exists |
| GitHub license detection | Pending | GitHub API currently reports `license: null`; may update after public indexing or need repository metadata refresh |

## Skill Package

| Item | Status | Evidence |
|---|---|---|
| Rich `SKILL.md` frontmatter | Done | Includes name, purpose, triggers, and negative triggers |
| Cross-runtime adapters | Done | Codex, Claude, OpenCode, AGENTS.md, OpenClaw, Hermes, generic prompt |
| Adapter sync check | Done | Six `SKILL.md` copies have matching SHA-256 hashes |
| Safety boundaries | Done | README and SKILL include execution, privacy, and high-risk action boundaries |
| No secret scan hits | Done | Local scan found no token, API key, cookie, password, secret, or private user path |
| Test prompts | Done | `test-prompts.json` contains 3 replayable prompts |
| Recorded outputs | Done | `examples/outputs/` contains 3 outputs and an index |
| Showcase | Done | README includes a Showcase result card with 5/5 checks |
| Public install check | Done | `npx --yes skills add zzpt8/clarify-idea-skill --skill clarify-idea --agent codex --copy -y` cloned the public repo, found 1 skill, and installed `clarify-idea` into a temporary Codex test project |

## Public Release Blockers

These items should be completed before making the repository public or announcing it.

1. After the repository is public, verify raw public access:

   ```bash
   curl -L https://raw.githubusercontent.com/zzpt8/clarify-idea-skill/main/README.md
   curl -L https://raw.githubusercontent.com/zzpt8/clarify-idea-skill/main/test-prompts.json
   ```

   Status: Done. Public raw README and `test-prompts.json` are accessible.

2. After the repository is public, verify GitHub README rendering in a browser.

## Optional Before Public Announcement

- Add a demo GIF or terminal recording showing one prompt turning into a clarification draft.
- Add `README.en.md` if targeting non-Chinese users.
- Add skills.sh badge only after confirming the repository is public and supported by the registry.
- Add `.claude-plugin/marketplace.json` only if publishing through a Claude plugin marketplace path.

## Actions Requiring Explicit Authorization

Each of these needs a separate clear instruction before execution:

- Change repository visibility from private to public.
- Create a tag or GitHub release.
- Publish to any registry or marketplace.
