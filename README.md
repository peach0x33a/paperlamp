# 素墨 / Quiet Ink

「素墨 / Quiet Ink」设计系统的文档仓库，服务于「幻觉产物 / AI Toybox」应用。
设计以文本为先、以留白和边框建立秩序，亮暗双主题共享同一层级结构。全部样式值从
toybox 仓库（Nuxt 3 + Tailwind）的 `assets/css/global.css` 与组件源码中提取，
忠实于已上线的实现。

## 文件结构

| 路径 | 说明 |
| --- | --- |
| `DESIGN.md` | 设计系统的唯一事实源，遵循 Google 开源的 [design.md 格式](https://github.com/google-labs-code/design.md)：YAML frontmatter 存放机器可读 token，正文 prose 说明设计意图（含 Known Drift 一节记录代码中的已知漂移）。AI 编码工具（Claude Code、Cursor 等）会直接读取此文件。 |
| `STYLE.md` | 中文风格手册，与 `DESIGN.md` 内容保持同步，面向人工查阅。 |
| `spec/` | design.md 官方规范副本：`spec.md`（格式规范）、`PHILOSOPHY.md`（设计哲学）、`README.md`（CLI 参考）、`examples/`（三个官方示例）。Apache 2.0 许可，见 `spec/LICENSE`。 |
| `.claude/skills/` | Google 官方 [stitch-skills](https://github.com/google-labs-code/stitch-skills) 中与 DESIGN.md 相关的四个 agent skills：`design-md`（从项目合成 DESIGN.md）、`extract-design-md`（从既有代码库提取）、`taste-design`（反套路品味规范）、`enhance-prompt`（设计提示词增强）。Claude Code 会自动发现并按需调用。 |
| `site/` | 组件示例站（纯静态 HTML/CSS/JS）。`tokens.css` 由 `scripts/build-tokens.ts` 从 DESIGN.md frontmatter 生成（含 `html.dark` 暗色映射），组件样式只消费变量，页面无一处写死色值。 |
| `scripts/` | bun 脚本：`build-tokens.ts`（DESIGN.md → tokens.css）、`serve.ts`（静态服务）。 |

## 工具链（bun）

官方 CLI `@google/design.md` 已作为 devDependency 安装：

```bash
bun install              # 安装依赖
bun run lint             # 校验 DESIGN.md（断引用、WCAG 对比度、章节顺序等九条规则）
bun run site             # 重建 tokens.css 并启动组件示例站（默认 http://localhost:8787，可用 PORT 覆盖）
bun run build:tokens     # 仅重建 site/tokens.css
bun run export:css       # 导出 Tailwind v4 @theme CSS 变量
bun run export:tailwind  # 导出 Tailwind v3 theme.extend JSON
bun run export:dtcg      # 导出 W3C Design Tokens (tokens.json)
bun run spec             # 输出规范全文 + lint 规则表
bun run diff A.md B.md   # 对比两个版本，检测 token 回归
```

修改 `DESIGN.md` 后务必重新 `bun run lint`；同时更新 `STYLE.md` 保持两份文档一致。

## 设计要点速览

- **色彩**：墨 `#2C2C2C` / 纸灰 `#F7F7F8` 中性为骨架；indigo 管交互与 AI 面板，
  星金管评分，琥珀管精选，橙管警告，红全站仅两处。遮罩为纸色 80%，绝不使用纯黑。
- **字体**：霞鹜文楷屏幕版为正文与标题；Fira Code 负责标签、日期、评分等元数据。
- **形状**：圆角双档工作制 —— 控件 4px、容器 8px；Toast 专属 12px；药丸胶囊形。
- **深度**：边框优先；四档阴影（sm 面板 / lg 下拉 / xl 卡片 hover / 2xl 弹窗与 Toast）。
- **动效**：150ms 微交互、220ms 网格淡换、300ms 卡片 hover 与主题切换、400ms 入场淡入。
- **暗色**：`html.dark` 切换共享 CSS 变量（唯一入口 `useTheme()`），同一层级换深色纸，
  禁止组件级暗色逻辑。
