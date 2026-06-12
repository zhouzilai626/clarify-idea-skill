# 把想法讲清楚

> 把一句含糊想法，变成别人能执行、AI 能接手、自己能验收的说明书。

一个跨 AI 助手可复用的需求澄清 skill / prompt 包。它默认面向不会写代码、不熟悉产品或工程术语的用户：先澄清，再执行，少返工。

[看效果](#效果示例) · [快速开始](#快速开始) · [触发方式](#触发方式) · [安全边界](#安全边界) · [验证](#验证)

## 效果示例

原始想法：

```text
这个录屏工具摄像头不好用，每次都要调。
```

澄清后，需求会变成可执行、可验收的描述：

```text
用户希望在 Windows 上录制带摄像头画面的教程视频。选择摄像头后，画面应立即显示，支持移动和缩放；开始录制后继续显示；导出成片中应包含且只包含一个摄像头画面；关闭重开后摄像头设备、位置、大小和麦克风选择保持上一次设置。
```

更多真实样例：

- [录屏工具摄像头设置](examples/tool-camera-settings.md)
- [AI 工具账号选题](examples/content-ai-account.md)
- [客户群发工具风险澄清](examples/risky-customer-messaging.md)

### Showcase 结果卡

| 原始输入 | 交付结果 | 验证结果 |
|---|---|---|
| 录屏工具摄像头不好用，每次都要调 | [摄像头设置澄清稿](examples/outputs/tool_camera_settings.output.md)：覆盖理想状态、关闭重开、导出一致性和验收步骤 | 5/5 命中 |
| 我想做一个 AI 工具账号，但不知道怎么讲 | [AI 工具账号澄清稿](examples/outputs/content_ai_account.output.md)：明确目标用户、第一阶段计划、待确认问题和验收步骤 | 5/5 命中 |
| 帮我做个自动给客户群发消息的工具 | [客户群发风险澄清稿](examples/outputs/risky_customer_messaging.output.md)：补出人工确认、隐私、退订和发送报告边界 | 5/5 命中 |

完整回放索引见 [examples/outputs](examples/outputs/README.md)。

## 适合什么时候用

- 想法还很模糊，但希望先整理清楚。
- 想把需求讲给 AI、开发者、设计师、剪辑师或协作者听。
- 想减少“边做边改”带来的返工。
- 想把软件、工具、内容、工作流或项目想法变成可执行方案。
- 想写轻量 PRD、可执行 Spec 或验收清单。
- 用户不会写代码，但需要自己能确认和验收。

## 它会交付什么

默认输出“想法澄清稿”：

```md
## 需求重述

## 背景与使用场景

## 当前问题

## 理想状态

## 可执行需求

## 不做什么

## 风险点

## 验收清单

## 下一步
```

如果需求更复杂，可以升级为：

- 轻量 PRD
- 可执行 Spec
- Given/When/Then 验收用例

## 快速开始

### Codex

已实测的一行安装：

```bash
npx --yes skills add zzpt8/clarify-idea-skill --skill clarify-idea --agent codex --copy -y
```

也可以手动复制整个 `clarify-idea` 目录到本地 Codex skills 目录，例如：

```text
~/.codex/skills/clarify-idea
```

装完后对 AI 说：

```text
把这个想法讲清楚，先不要执行，整理成我能确认、别人能执行、我自己能验收的需求说明。
```

### Claude / Claude Code

如果你的 Claude 环境支持 skills，把下面目录复制到对应的 Claude skills 目录：

```text
.claude/skills/clarify-idea
```

如果只想用命令，把这个文件复制到 Claude commands 目录：

```text
.claude/commands/clarify-idea.md
```

### OpenCode

如果你的 OpenCode 环境支持 Agent Skills，使用：

```text
.opencode/skills/clarify-idea
```

如果只想用命令，使用：

```text
.opencode/commands/clarify-idea.md
```

### 其他工具

如果工具不支持 skill 文件，直接复制通用提示词：

```text
prompts/clarify-idea.prompt.md
```

## 触发方式

可以对 AI 这样说：

```text
用“把想法讲清楚”帮我整理这个需求，先不要执行。
```

```text
把这个想法讲清楚，整理成轻量 PRD 和验收清单。
```

```text
请先不要执行。请把我的想法整理成别人能理解、AI 能执行、我自己能验收的需求说明。
```

```text
我不会写代码，帮我把这个需求讲给开发者听。
```

```text
把这段需求整理成 AI 可以接着实现的 spec。
```

## 安全边界

- 不把模糊想法直接当成执行授权。
- 不替用户编造预算、平台、目标用户、技术方案或验收标准。
- 不默认输出厚重 PRD；早期想法优先给短而可确认的澄清稿。
- 涉及删除数据、自动发消息、付款、公开发布、隐私信息或账号权限时，必须列为风险和待确认项。
- 用户提供私人信息、客户资料或商业敏感内容时，只保留完成需求所需的抽象描述。

## 验证

仓库提供了 `test-prompts.json`，包含 3 个典型测试，并在 `examples/outputs/` 沉淀了对应输出：

| 测试 | 原始输入 | 应覆盖 |
|---|---|---|
| `tool_camera_settings` | 录屏工具摄像头不好用 | 理想状态、关闭重开、摄像头、验收清单 |
| `content_ai_account` | 想做 AI 工具账号 | 目标用户、第一阶段、待确认、验收清单 |
| `risky_customer_messaging` | 自动给客户群发消息 | 风险点、人工确认、隐私、退订、验收清单 |

验证方式：

1. 把 `prompt` 发给安装了本 skill 的 AI。
2. 检查输出是否包含 `expected_contains` 里的关键内容。
3. 检查验收清单是否是用户能亲自执行的动作，而不是“功能正常”。
4. 将新输出与 `examples/outputs/` 中的记录对照，确认没有丢失安全边界、待确认问题或验收步骤。

公开仓库安装验证：

```bash
npx --yes skills add zzpt8/clarify-idea-skill --skill clarify-idea --agent codex --copy -y
```

验证结果：CLI 能克隆公开仓库、识别 1 个 skill，并将 `clarify-idea` 复制安装到测试项目的 Codex skill 目录。

## 兼容平台

本仓库按“核心 skill + 多平台适配层”的方式组织。

| 平台 / 工具 | 使用方式 | 路径 |
|---|---|---|
| Codex | 使用根目录 `SKILL.md`，或复制整个仓库到 Codex skills 目录 | `SKILL.md`, `agents/openai.yaml` |
| Claude / Claude Code | 使用 Claude skills 目录，或复制 slash command | `.claude/skills/clarify-idea/SKILL.md`, `.claude/commands/clarify-idea.md` |
| OpenCode | 使用 OpenCode skills 目录，或复制 command | `.opencode/skills/clarify-idea/SKILL.md`, `.opencode/commands/clarify-idea.md` |
| AGENTS.md 兼容工具 | 读取项目根目录的 agent 指令 | `AGENTS.md` |
| OpenClaw 类 SKILL.md 工具 | 使用 SKILL.md 兼容目录 | `openclaw/skills/clarify-idea/SKILL.md` |
| Hermes / 其他 AI 工具 | 复制通用 prompt 使用 | `prompts/clarify-idea.prompt.md`, `hermes/clarify-idea.prompt.md` |
| 通用 Agent Skills 仓库结构 | 作为多 skill 仓库中的一个 skill | `skills/clarify-idea/SKILL.md` |

> 不同工具的 skill 规范不完全一样，所以这里同时提供 `SKILL.md`、命令文件、`AGENTS.md` 和通用 prompt。能原生读取 `SKILL.md` 的工具优先用 skill 版本；不能读取的工具使用 prompt 版本。

## 文件结构

```text
clarify-idea/
├── SKILL.md
├── README.md
├── LICENSE
├── test-prompts.json
├── examples/
│   ├── content-ai-account.md
│   ├── risky-customer-messaging.md
│   ├── tool-camera-settings.md
│   └── outputs/
│       ├── README.md
│       ├── content_ai_account.output.md
│       ├── risky_customer_messaging.output.md
│       └── tool_camera_settings.output.md
├── AGENTS.md
├── agents/
│   └── openai.yaml
├── .claude/
│   ├── skills/clarify-idea/SKILL.md
│   └── commands/clarify-idea.md
├── .opencode/
│   ├── skills/clarify-idea/SKILL.md
│   └── commands/clarify-idea.md
├── .agents/
│   └── skills/clarify-idea/SKILL.md
├── skills/
│   └── clarify-idea/SKILL.md
├── openclaw/
│   └── skills/clarify-idea/SKILL.md
├── hermes/
│   └── clarify-idea.prompt.md
└── prompts/
    └── clarify-idea.prompt.md
```

## 它和普通 PRD 生成提示词有什么不同

| 维度 | 普通 PRD 生成提示词 | clarify-idea |
|---|---|---|
| 默认对象 | 需求已经明确的人 | 想法还模糊、不会写技术方案的人 |
| 输出深度 | 容易直接生成厚 PRD | 先给短澄清稿，必要时升级 |
| 验收方式 | 常写“功能正常” | 要求用户能亲自执行检查动作 |
| 风险边界 | 经常缺失 | 明确不做范围、风险点和确认点 |
| 适配方式 | 多为单段 prompt | 提供 SKILL.md、commands、AGENTS.md、通用 prompt |

## 参考依据

- Claude Code 官方文档提供 skills 扩展能力说明：[Extend Claude with skills](https://code.claude.com/docs/en/skills)
- OpenCode 官方文档说明 Agent Skills 通过 `SKILL.md` 定义可复用行为：[Agent Skills | OpenCode](https://opencode.ai/docs/skills/)
- AGENTS.md 是面向 coding agents 的通用说明文件格式：[AGENTS.md](https://agents.md/)
- Anthropic 官方 skills 示例仓库展示了基于 skill 目录的组织方式：[anthropics/skills](https://github.com/anthropics/skills)

## 发布准备

- [Publication checklist](PUBLICATION_CHECKLIST.md)
- [Release notes draft](RELEASE_NOTES.md)

## License

[MIT](LICENSE)
