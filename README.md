# 把想法讲清楚

一个跨 AI 助手可复用的需求澄清 skill / prompt 包，用来把模糊想法整理成别人能理解、AI 能执行、自己能验收的需求说明。

它默认面向不会写代码的用户：不要求用户先讲技术方案，而是帮助用户把自然语言想法变成可确认、可执行、可验收的需求。

## 适合什么时候用

- 想法还很模糊，但希望先整理清楚
- 想把需求讲给 AI、开发者、设计师、剪辑师或协作者听
- 想减少“边做边改”带来的返工
- 想把一个软件、工具、内容、工作流或项目想法变成可执行方案
- 想写轻量 PRD、Spec 或验收清单

## 核心能力

这个 skill 会帮助用户整理：

- 背景
- 使用场景
- 当前问题
- 理想状态
- 约束条件
- 可执行需求
- 不做范围
- 风险点
- 验收清单
- 下一步行动

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

## 兼容平台

本仓库现在按“核心 skill + 多平台适配层”的方式组织。

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

## 触发方式

可以对 AI 这样说：

```text
用“把想法讲清楚”帮我整理这个需求，先不要执行。
```

或者：

```text
把这个想法讲清楚，整理成轻量 PRD 和验收清单。
```

也可以直接粘贴：

```text
请先不要执行。请把我的想法整理成别人能理解、AI 能执行、我自己能验收的需求说明。
```

## 安装建议

### Codex

复制整个 `clarify-idea` 目录到本地 Codex skills 目录，例如：

```text
~/.codex/skills/clarify-idea
```

Windows 常见位置：

```text
C:\Users\<你的用户名>\.codex\skills\clarify-idea
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

## 一个例子

原始想法：

```text
这个录屏工具摄像头不好用，每次都要调。
```

澄清后：

```text
用户希望在 Windows 上录制带摄像头画面的教程视频。选择摄像头后，画面应立即显示，支持移动和缩放；开始录制后继续显示；导出成片中应包含且只包含一个摄像头画面；关闭重开后摄像头设备、位置、大小和麦克风选择保持上一次设置。
```

## 文件结构

```text
clarify-idea/
├── SKILL.md
├── README.md
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

## 参考依据

- Claude Code 官方文档提供 skills 扩展能力说明：[Extend Claude with skills](https://code.claude.com/docs/en/skills)
- OpenCode 官方文档说明 Agent Skills 通过 `SKILL.md` 定义可复用行为：[Agent Skills | OpenCode](https://opencode.ai/docs/skills/)
- AGENTS.md 是面向 coding agents 的通用说明文件格式：[AGENTS.md](https://agents.md/)
- Anthropic 官方 skills 示例仓库展示了基于 skill 目录的组织方式：[anthropics/skills](https://github.com/anthropics/skills)
