export interface Tool {
  name: string
  tag: string
  rating: number
  status: "正常" | "维护中"
  updated: string
}

/** 示例数据：虚构的工具与日期，不代表任何真实统计。 */
export const tools: Tool[] = [
  { name: "像素小镇生成器", tag: "图像", rating: 4.6, status: "正常", updated: "2026-10-18" },
  { name: "古诗接龙", tag: "文字", rating: 4.2, status: "正常", updated: "2026-09-21" },
  { name: "会议废话检测", tag: "办公", rating: 3.8, status: "正常", updated: "2026-09-30" },
  { name: "猫名字典", tag: "宠物", rating: 3.1, status: "维护中", updated: "2026-10-12" },
  { name: "伪造天气预报", tag: "娱乐", rating: 3.5, status: "正常", updated: "2026-08-02" },
  { name: "五行运势机", tag: "娱乐", rating: 2.9, status: "维护中", updated: "2026-07-15" },
  { name: "周报语气转换", tag: "办公", rating: 4.0, status: "正常", updated: "2026-10-05" },
  { name: "梗图标题生成", tag: "图像", rating: 3.7, status: "正常", updated: "2026-10-20" },
  { name: "食谱幻想家", tag: "生活", rating: 2.4, status: "正常", updated: "2026-06-11" },
  { name: "假书评写手", tag: "文字", rating: 3.3, status: "维护中", updated: "2026-09-09" },
  { name: "诗歌语速调节", tag: "声音", rating: 4.4, status: "正常", updated: "2026-10-14" },
  { name: "夜班路线规划员", tag: "生活", rating: 3.9, status: "正常", updated: "2026-10-01" },
]
