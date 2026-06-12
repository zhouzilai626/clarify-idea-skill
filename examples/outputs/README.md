# Recorded Outputs

These files are replayable sample outputs for `test-prompts.json`.

| Test | Prompt | Output |
|---|---|---|
| `tool_camera_settings` | 这个录屏工具摄像头不好用，每次都要调。 | [tool_camera_settings.output.md](tool_camera_settings.output.md) |
| `content_ai_account` | 我想做一个 AI 工具账号，但不知道怎么讲。 | [content_ai_account.output.md](content_ai_account.output.md) |
| `risky_customer_messaging` | 帮我做个自动给客户群发消息的工具。 | [risky_customer_messaging.output.md](risky_customer_messaging.output.md) |

## Verification Rule

For each output, check that every item in `expected_contains` from `test-prompts.json` appears in the generated answer and that the acceptance checklist contains concrete user actions.
