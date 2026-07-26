---
version: alpha
name: 素墨 / Quiet Ink
description: >-
  A quiet, text-forward visual system for a Chinese-language Nuxt showcase of
  AI-assisted tools — soft ink typography on paper-like surfaces, an indigo
  interaction accent, and lightweight browser-chrome metaphors. Light and dark
  are the same gallery with the lamps changed. Extracted from the toybox
  codebase (assets/css/global.css + components); values mirror shipped code.
colors:
  primary: "#2C2C2C"
  primary-hover: "rgba(44, 44, 44, 0.9)"
  secondary: "#71717A"
  neutral: "#F7F7F8"
  surface: "#FFFFFF"
  on-surface: "#2C2C2C"
  border: "#E4E4E7"
  overlay: "rgba(247, 247, 248, 0.8)"
  accent: "#6366F1"
  accent-bar: "#818CF8"
  accent-text: "#4338CA"
  accent-wash: "#EEF2FF"
  rating: "#FACC15"
  featured: "#92400E"
  featured-wash: "#FFFBEB"
  warning: "#EA580C"
  warning-bar: "#FB923C"
  warning-text: "#9A3412"
  warning-wash: "#FFF7ED"
  error: "#EF4444"
colors-dark:
  primary: "#E4E4E7"
  primary-hover: "rgba(228, 228, 231, 0.9)"
  secondary: "#A1A1AA"
  neutral: "#121214"
  surface: "#18181B"
  on-surface: "#E4E4E7"
  border: "#27272A"
  overlay: "rgba(18, 18, 20, 0.8)"
  accent: "#818CF8"
  accent-bar: "#818CF8"
  accent-text: "#818CF8"
  accent-wash: "rgba(49, 46, 129, 0.1)"
  rating: "#FACC15"
  featured: "#FDE68A"
  featured-wash: "rgba(69, 26, 3, 0.3)"
  warning: "#FB923C"
  warning-bar: "#FB923C"
  warning-text: "#FED7AA"
  warning-wash: "rgba(124, 45, 18, 0.2)"
  error: "#EF4444"
typography:
  headline-xl:
    fontFamily: "LXGW WenKai Screen, LXGW WenKai, serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0em"
  headline-lg:
    fontFamily: "LXGW WenKai Screen, LXGW WenKai, serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0em"
  headline-md:
    fontFamily: "LXGW WenKai Screen, LXGW WenKai, serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0em"
  title-md:
    fontFamily: "LXGW WenKai Screen, LXGW WenKai, serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0em"
  body-md:
    fontFamily: "LXGW WenKai Screen, LXGW WenKai, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0em"
  body-sm:
    fontFamily: "LXGW WenKai Screen, LXGW WenKai, serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label-md:
    fontFamily: "Fira Code, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0em"
  label-sm:
    fontFamily: "Fira Code, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0em"
  label-xs:
    fontFamily: "Fira Code, ui-monospace, monospace"
    fontSize: "0.625rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0em"
rounded:
  none: "0px"
  sm: "4px"
  md: "8px"
  DEFAULT: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "6": "1.5rem"
  "8": "2rem"
  "12": "3rem"
  "16": "4rem"
  container: "64rem"
shadow:
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)"
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
motion:
  micro: "150ms"
  grid: "220ms"
  hover: "300ms"
  theme: "300ms"
  entrance: "400ms"
  easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  easing-entrance: "ease-out"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: "{spacing.2} {spacing.4}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: "{spacing.2} {spacing.4}"
  button-secondary-hover:
    backgroundColor: "{colors.neutral}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.6}"
  tag-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.1} {spacing.4}"
  tag-chip-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
  badge-status:
    textColor: "{colors.secondary}"
    typography: "{typography.label-xs}"
    rounded: "{rounded.sm}"
    padding: "0.125rem {spacing.2}"
  badge-featured:
    backgroundColor: "{colors.featured-wash}"
    textColor: "{colors.featured}"
    typography: "{typography.label-xs}"
    rounded: "{rounded.sm}"
    padding: "0.125rem {spacing.2}"
  rating-star:
    textColor: "{colors.rating}"
    size: "0.75rem"
  rating-trigger:
    textColor: "{colors.accent-text}"
    typography: "{typography.body-sm}"
  rating-trigger-hover:
    textColor: "{colors.accent}"
  input:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.2} {spacing.3}"
  modal:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: "{spacing.8}"
    width: "24rem"
  notice-panel:
    backgroundColor: "{colors.accent-wash}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.4}"
  notice-panel-bar:
    backgroundColor: "{colors.accent-bar}"
    width: "4px"
  notice-panel-title:
    textColor: "{colors.accent-text}"
  warning-banner:
    backgroundColor: "{colors.warning-wash}"
    textColor: "{colors.warning-text}"
    rounded: "{rounded.none}"
    padding: "{spacing.3}"
  warning-banner-bar:
    backgroundColor: "{colors.warning-bar}"
    width: "4px"
  warning-banner-icon:
    textColor: "{colors.warning}"
    size: "1rem"
  toast:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.lg}"
    padding: "{spacing.3} 1.25rem"
  navbar:
    backgroundColor: "{colors.overlay}"
    height: "4rem"
  avatar:
    backgroundColor: "{colors.border}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    size: "2.5rem"
  divider:
    backgroundColor: "{colors.border}"
    height: "1px"
  meta-label:
    textColor: "{colors.secondary}"
    typography: "{typography.label-sm}"
---

# 素墨 · Quiet Ink

## Overview

素墨 (Quiet Ink) is the visual language of the 幻觉产物 / AI Toybox showcase —
a calm, slightly playful exhibition space for AI-made tools: a well-kept
reading notebook hung with the hush of a gallery, never a glossy startup
dashboard. The interface is text-forward and lightweight: generous
whitespace, subtle borders, restrained color, and Chinese copy that is direct
instead of promotional.

The product has two primary modes:

- **Exhibition mode** for browsing tools, tags, rankings, AI summaries, and
  discussion.
- **Payload mode** for actually using a tool inside an iframe shell dressed
  as lightweight browser chrome, with maintenance, warning, and focus-state
  overlays.

When the system must choose between "more decoration" and "more readability,"
choose readability. Emphasis comes from typography, spacing, and borders
before it ever comes from saturated color. The theme ships in three modes —
`light` / `dark` / `auto` — and both palettes are the same hierarchy on
different paper.

## Colors

The core palette is neutral and contrast-led, sourced from the CSS variables
in `assets/css/global.css` — the shared source of truth every component must
route through:

- **Ink** {colors.primary} (`--text`) is the main foreground: headings,
  primary buttons, active chips. A soft near-black, never pure `#000000`.
  Its hover companion {colors.primary-hover} is the same ink at 90% opacity.
- **Paper** {colors.neutral} (`--bg`) is the app background; **Surface**
  {colors.surface} (`--surface`) is the card/modal/table layer above it.
- **Muted** {colors.secondary} (`--text-muted`) carries metadata, inactive
  navigation, and helper labels. On white it measures 4.83:1 — treat 4.5:1
  as a hard floor when adjusting.
- **Border** {colors.border} (`--border`) draws the hairlines that do most of
  the separating work. Quiet neutral fills are built from it at fractional
  opacity: 20% for empty-state boxes, 40% for mini tags and status pills,
  30–60% for hovers.
- **Overlay** {colors.overlay} is paper at 80% opacity — modal scrims and
  the sticky navbar pair it with backdrop blur, so overlays stay theme-aware
  instead of dropping to black. (The shipped build currently renders these
  blur-only — see Known Drift.)

Status and accent colors are deliberately scarce, used only where the product
already encodes meaning:

- **Indigo** {colors.accent} is the sole interaction accent: hover text and
  card hover borders, admin affordances, and AI-summary emphasis. Panels use
  the family as a wash {colors.accent-wash}, a 4px edge bar
  {colors.accent-bar}, and title text {colors.accent-text}. Note: indigo-500
  on white measures 4.47:1 — keep it for hover states, bold labels, and
  large text; persistent text rests on {colors.accent-text} or ink.
- **Star gold** {colors.rating} fills rating stars and leaderboard dots —
  always beside a mono numeric score, because the gold alone measures only
  1.53:1 on white and cannot carry meaning by itself.
- **Amber** marks featured/pinned content: {colors.featured} is the badge
  ink, {colors.featured-wash} its ground, with an amber-500 `#F59E0B`
  hairline (dark: `#FBBF24`). The fixed database notice banner runs its own
  amber recipe — amber-50 ground, amber-300 `#FCD34D` border, amber-900
  `#78350F` ink, amber-700 dismiss — unchanged in dark mode.
- **Orange** owns safety: content-warning banners pair the
  {colors.warning-wash} wash with a 4px {colors.warning-bar} left bar; the
  icon takes {colors.warning} (a 3:1 non-text pair), while banner text uses
  {colors.warning-text} (6.9:1) at weight 500.
- **Red** {colors.error} appears exactly twice — auth error text and the
  comment delete hover. Never as backgrounds or borders.

Rating tiers (1–5: 拉 / NPC / 人上人 / 顶级 / 夯) carry a config-driven color
scale — gray `#6B7280`, green `#22C55E`, blue `#3B82F6`, purple `#A855F7`,
gold `#CA8A04` — treated as product data, not design tokens.

## Typography

Typography is the personality layer; everything else stays quiet so it can be.

- The **display and body face** is `LXGW WenKai Screen` (霞鹜文楷屏幕阅读版,
  falling back to `LXGW WenKai`, then `serif`) — a literate, humanist face
  that fits a Chinese-language toybox better than a sterile sans.
- The **monospace face** is `Fira Code` (then `ui-monospace`) for metadata,
  tags, build hashes, URLs, ratings, dates, and system-like affordances.
  Numeric/metadata = mono, prose/headings = WenKai is the consistent split.

Roles:

- **`headline-xl`**: the tool-detail page title.
- **`headline-lg`**: page welcomes and leaderboard/admin headers.
- **`headline-md`**: section titles and primary modal/overlay headings
  (compact modals drop to `title-md`).
- **`title-md`**: card titles and secondary anchors.
- **`body-md` / `body-sm`**: descriptive copy; long text keeps relaxed
  line-height and a comfortable measure (intro paragraphs cap at ~42rem).
- **`label-md` / `label-sm` / `label-xs`**: chips, metadata, stats, URLs,
  status badges — always small, often mono, bold at the smallest size.

Headings and buttons are bold; body text is calm. Emphasize with weight, not
size inflation. No all-caps styling, no letterspacing — the sanctioned
exceptions are the navbar brand's `tracking-wide` (0.025em), the toast's
0.01em tracking, and the browser-chrome status pill's uppercase
`tracking-tighter` (chrome vernacular, never content).

## Layout

Layout is centered, readable, and content-first.

- Standard pages use a {spacing.container} (max-w-5xl) container with
  {spacing.4} side padding at every breakpoint; main content pads
  {spacing.8} vertically. The navbar is a fixed 4rem tall.
- Tool grids run 1 column on mobile, 2 at ≥768px, 3 at ≥1024px, with
  {spacing.6} gaps — airy enough that each tool reads as a distinct exhibit.
- Major sections separate with {spacing.8}–{spacing.16} rhythm; the footer
  sits 5rem below content. Empty states breathe with {spacing.12} padding.
- Dashed hairlines mark soft boundaries — card footers, the tag filter bar,
  the featured-section divider. Solid 1px {colors.border} everywhere else;
  stronger separators are a last resort.
- **Focus mode** (`?view=full`) removes navbar, footer, and page chrome
  entirely; the payload fills the viewport under a slim 48px toolbar.

## Elevation & Depth

The system is mostly flat: borders and background contrast first, four shadow
tiers reserved for genuine layering:

- **{shadow.sm}** — tinted panels, leaderboard/admin cards, pinned badges.
- **{shadow.lg}** — the theme dropdown, notice banners, the iframe stage.
- **{shadow.xl}** — the card hover lift, nothing else.
- **{shadow.2xl}** — modals and the toast.

Backdrop blur has exactly two strengths: 4px behind modal scrims ({colors.overlay}
+ `backdrop-blur-sm`), 12px for the sticky navbar and the warning-consent
overlay. Z-layering is fixed: navbar 40, dropdown 50, modals/banners 60,
toast 80 (in-frame overlays: 20 warning, 30 maintenance/404).

Selection is inverted ink-on-paper (`::selection` swaps `--text`/`--bg`);
scrollbars are 8px, border-colored, muted on hover — chrome follows the
same quiet vocabulary.

## Shapes

The radius language has two working tiers plus pills:

- **{rounded.sm} (4px)** for controls: buttons, inputs, badges, avatars,
  modal panels, and small chrome hits.
- **{rounded.md} (8px, the `--radius` variable, exported as `DEFAULT`)** for
  containers: tool cards, table shells, notice banners, and the
  browser-chrome frame (whose top/bottom corners hardcode the same 8px).
- **{rounded.lg} (12px)** appears only on the toast pill cluster.
- **{rounded.full}** is reserved for pills: tag chips, the address bar,
  traffic lights, rating dots, and the warning icon circle.
- **Hard corners** ({rounded.none}) are for embed surfaces — the iframe
  canvas itself — mirroring the browser-chrome metaphor.

## Components

### Actions

- `button-primary` is an ink fill with paper text (`bg-text text-bg`), bold,
  {rounded.sm}, padded {spacing.2} vertical / {spacing.4} horizontal
  (full-width modal variant pads {spacing.3} vertical). Hover drops to 90%
  opacity; disabled drops to 50%.
- `button-secondary` is a bordered surface; hover swaps the background to
  paper. Icon buttons hover with a 30–50% border-color wash.
- **Bracketed text buttons** — `[登录]` `[登出]` — are a signature register:
  mono, muted, hover to ink with underline. No background, no border. The
  `[评分]` trigger shares the bracket form but takes the indigo accent
  (`rating-trigger`): resting on {colors.accent-text}, brightening to
  {colors.accent} on hover.
- Button motion is opacity only; scale is sanctioned in exactly two places —
  the warning consent CTA (`hover:scale-[1.02]`) and the RatingModal star
  pickers (1.1 selected, 1.25 hovered).

### Cards

- `card` (ToolCard) anatomy, in order: title row (`title-md` + status
  icons/badges) → two-line clamped description (`body-sm` muted) → mini tag
  row → dashed divider → mono footer meta (date left, star + score right).
- Card hover is the system's one composite gesture: border shifts to
  {colors.accent}, the card lifts 4px, and {shadow.xl} appears — over
  {motion.hover} with {motion.easing}.
- Card mini-tags are quieter than TagChips: {colors.border} at 40% fill,
  `label-xs` mono, 60% on hover.

### Chips & Badges

- `tag-chip` is a mono pill: {spacing.1} vertical / {spacing.4} horizontal
  padding, hairline border, muted text on surface. Hover, focus-visible, and
  active all invert hard to an ink fill with paper text (`tag-chip-active`);
  there is no in-between tint. (The keyboard focus inversion is specified
  but currently inert — see Known Drift.)
- `badge-status` (维护中) is muted `label-xs` text over a muted 20% wash —
  but that pair measures 3.76:1, so whenever the wash actually renders the
  text must darken to ≥4.5:1 (zinc-600 `#52525B` works); the shipped build
  renders the text alone. The
  hidden badge uses the indigo family (light `#E0E7FF`/`#4338CA`, dark
  indigo-900/`#A5B4FC`); the pinned 精选 badge (`badge-featured`) sets
  {colors.featured} ink on {colors.featured-wash} with an amber-500 hairline
  and a 12px Sparkles icon; `[admin]` is bare indigo text.

### Inputs & Forms

- `input` fields are paper wells on surface containers — no inner shadows.
  {rounded.sm}, {spacing.2}/{spacing.3} padding, `body-sm`. Focus swaps the
  border to ink (`focus:border-text`), no glow ring. Labels sit above in
  `label-sm` muted; error text is {colors.error} `body-sm`. The comment
  textarea inverts the figure/ground — a surface well on the page background
  with {spacing.4} padding.
- `avatar` is a {colors.border} square ({rounded.sm}, 2.5rem) holding the
  user's first character in bold.

### Overlays & Modals

The modal recipe is fixed: full-viewport scrim in {colors.overlay} +
`backdrop-blur-sm`, click-to-close; a `modal` panel (max-w-sm, {spacing.8}
padding, {rounded.sm}, hairline border, {shadow.2xl}) entering with the
standard fade; a muted 20px X top-right. The share modal widens to 28rem.
In-frame overlays are opaque paper (maintenance/404) or surface at 90% +
12px blur (warning consent).

### Content Panels

- `notice-panel` (CollapsiblePanel) pairs a 4px left edge bar with a soft
  wash, radius on the right corners only, and {shadow.sm}. Variants: indigo
  (AI 总结, via {colors.accent-wash}/{colors.accent-bar}/{colors.accent-text}),
  teal, and gray — accent appears only as edge tint, icon color, or wash.
- `warning-banner` stacks safety notices: {colors.warning-wash} +
  {colors.warning-bar} left bar, a 16px {colors.warning} icon, and
  `label-sm`-scale text in {colors.warning-text} at weight 500. Six warning
  types share one visual treatment.

### Iframe Shell

The payload container resembles lightweight browser chrome: a surface header
with macOS traffic lights (`#FF5F56` `#FFBD2E` `#27C93F`), a pill address
bar (paper fill, hover border indigo at 50%, copy-on-click), and utility
icon buttons. The canvas below is pure white / pure black — the one place
theme surfaces don't apply — with 8px bottom radius and {shadow.lg} at
desktop widths. Overlays prioritize clarity and safety over aesthetics.

### Navigation

- `navbar` is sticky: {colors.overlay} + 12px blur + bottom hairline, 4rem
  tall, brand (24px Box icon + bold `tracking-wide` wordmark) left, mono
  utilities right. Inactive links are muted; the active route is ink.
- The theme switcher is a 20px icon trigger (Sun/Moon/Monitor) opening a
  surface dropdown ({shadow.lg}) of three menu items; selection routes
  through `useTheme()` exclusively.
- `toast` is an inverted pill — ink fill, paper text, a white/10 hairline,
  {rounded.lg}, {shadow.2xl} — fixed top-center at z-80, fading 200ms with
  a 5px rise.

### Leaderboard

The ranking table lives in a card shell: paper-tinted mono thead, rows
divided by 50% hairlines, hover tinting rows with 50% paper. Ranks 1–3 are
emoji medals (🥇🥈🥉); scores render as five {colors.rating} dots plus a
mono average; maintenance rows dim to 60%.

## Motion

Motion is quick and restrained, in five fixed durations:

- **{motion.micro}** with {motion.easing} — all hovers: color, opacity, and
  border transitions, chip inversions, group-hover reveals.
- **{motion.grid}** — the tool-grid crossfade when switching tag filters
  (8px rise), and the toast's 200ms fade (5px rise).
- **{motion.hover}** — the card hover composite and the theme crossfade
  ({motion.theme}).
- **{motion.entrance}** with {motion.easing-entrance} — the single entrance
  animation: fade in with a 10px rise, applied to page roots, modals,
  overlays, comment rows, and empty states.
- The AI-summary typewriter runs 18ms/char (35ms after punctuation).

No springs, no bounce easing, no staggered showcases. The codebase does not
yet honor `prefers-reduced-motion` — treat adding it as a standing Do when
touching motion code.

## Iconography

One library only: **Lucide** (lucide-vue-next), sized via `w-*/h-*` classes
on a fixed ladder — 12px (inline badges, footer stars), 14px (chrome
buttons), 16px (action buttons, warning icons), 20px (theme toggle,
chevrons, modal close), 24px (brand mark), 32px (warning circle, rating
stars), 48px (overlay states, empty-state Ghost at 20% opacity).

Icons inherit `currentColor` or take the contextual status hue. Emoji are a
sanctioned playful garnish in headings and ranks (🏆 🔧 🥇🥈🥉) — never as
functional icons.

## Dark Mode

Dark mode is the same hierarchy on darker paper, applied by `html.dark`
swapping the shared CSS variables (plus `color-scheme: dark`). Theme state
lives in `useTheme()` — three modes `light` / `dark` / `auto` — and nothing
else may write theme logic; iframes sync via the `THEME_REQUEST`
postMessage handshake.

- Explicit `dark:` classes are reserved for hardcoded accent tints only:
  indigo washes deepen to indigo-900 at 10–50%, amber to amber-950/30,
  orange to orange-900/20–30; accent text lightens one to two steps
  ({colors-dark.accent-text}).
- Stars ({colors-dark.rating}), red ({colors-dark.error}), and the amber
  database notice keep their light values — highlights, not surfaces.
- The iframe canvas flips pure white → pure black; everything else rides
  the variables. Component-local dark logic that bypasses the tokens is
  forbidden.

## Known Drift

Real divergences that ship today, recorded so they get cleaned up rather
than copied:

- **The token-named opacity utilities never compile.** `tailwind.config.ts`
  defines no colors, so `bg-bg/80`, `bg-surface/90`, `bg-muted/20`,
  `bg-border/20`–`/60`, `border-border/50`, `border-text/30`, and
  `text-muted/80` generate zero CSS. Shipped fallout: the navbar and all
  modal scrims are blur-only with no tint, the consent overlay has no
  surface fill, 维护中 badges / card mini-tags / the chrome status pill
  render fill-less, icon-button hover washes do nothing, and leaderboard
  hairlines fall back to preflight gray. Adding the CSS-var colors (with
  `<alpha-value>`) to the Tailwind config makes this document's overlay and
  wash system real. The same root cause leaves `rounded` at stock 4px —
  recorded as the control radius above.
- `.input` in global.css focuses to Tailwind `gray-400` `#9CA3AF` — outside
  the zinc ramp; component inputs correctly use `focus:border-text`.
- Star gold renders three ways: {colors.rating} (canonical), `#EAB308`
  (featured-section header), and inline `#FBBF24` with a glow drop-shadow
  (detail header). Converge on the token.
- The theme trigger uses stray 6px (`rounded-md`) and the dropdown stock 8px
  (`rounded-lg`) — harmonize on the token scale.
- The `fadeIn` keyframes are copy-pasted into 8 scoped style blocks; the
  `.list-*` transition classes in global.css are orphaned (no
  TransitionGroup uses them); several Lucide imports in `[slug].vue` are
  unused; the comment-summary panel hand-duplicates CollapsiblePanel and
  carries a dead `rounded-r-DEFAULT` class.
- The warning banner's dismiss X is black even in dark mode; the toast's
  white/10 hairline is hardcoded outside the variable system.
- The TagChip `:focus-visible` inversion is inert — chips are `<span>`s
  inside plain wrapper buttons, so keyboard focus never reaches the rule.
- The index welcome heading ships without `font-bold`, contradicting the
  headline-lg weight (likely an app bug).
- The `[评分]` trigger rests on indigo-500 (4.47:1 at `body-sm` bold) — this
  document prescribes resting on {colors.accent-text} instead.

## Do's and Don'ts

- **Do** preserve the neutral-first palette; reach for spacing, weight, or a
  hairline before reaching for color.
- **Do** route all theme behavior through `useTheme()` and the shared CSS
  variables; the DESIGN.md tokens and `--bg`/`--surface`/`--text`/
  `--text-muted`/`--border`/`--radius` must never drift apart.
- **Do** keep Chinese copy direct, calm, and slightly playful.
- **Do** keep metadata quieter than titles and primary actions — mono,
  muted, small.
- **Do** keep iframe overlays readable, decisive, and safety-oriented, and
  maintain consistency between browsing mode and focus mode.
- **Don't** turn the UI into a saturated dashboard or introduce unrelated
  brand colors as large backgrounds — indigo, gold, amber, orange, and red
  already have jobs.
- **Don't** replace the WenKai + Fira Code pairing without a strong product
  reason.
- **Don't** use pure black for text or pure white for the page background;
  {colors.surface} is the single permitted white and the iframe canvas the
  single permitted black.
- **Don't** add heavy shadows, glassmorphism, gradients, or high-motion
  effects as defaults — blur belongs to the navbar and overlay scrims only.
- **Don't** create component-local dark-mode logic that diverges from the
  shared tokens, and don't hardcode theme colors outside
  `assets/css/global.css`.
- **Don't** use all-caps styling or letterspaced labels (the three chrome
  exceptions above excepted), don't exceed the two family stacks on any
  screen, and don't let sample copy drift into filler microcopy or invented
  statistics.
