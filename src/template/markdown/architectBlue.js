export default `/* 架构师蓝主题
 * 灵感：工程蓝图，专业沉稳的视觉语言
 * 主色：#0354FF（架构师蓝）
 * 底色：白底，淡蓝底统一用 rgba(3,84,255,0.10)
 * 记忆点：h2 蓝色填充块 + 白字
 * 层级语言（四形态互不撞）：h1 底线 / h2 色块 / h3 下划线 / 引用 竖条
 */

:root {
  --ab-bg: #FFFFFF;
  --ab-text: #2C3E50;
  --ab-heading: #0A2540;
  --ab-accent: #0354FF;
  --ab-accent-10: rgba(3, 84, 255, 0.10);
  --ab-border: #E3E8EF;
  --ab-muted: #5B7A99;
  --ab-quote-text: #3D5878;
  --ab-code-bg: #0A2540;
  --ab-code-text: #DCE8FF;
  --ab-font-sans: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  --ab-font-mono: Menlo, Monaco, "SF Mono", Consolas, monospace;
}

/* 全局属性 */
#nice {
  font-family: var(--ab-font-sans);
  font-size: 13px;
  line-height: 1.6;
  color: var(--ab-text);
  background-color: var(--ab-bg);
  -webkit-font-smoothing: antialiased;
}

/* 段落 */
#nice p {
  margin: 8px 0;
  color: var(--ab-text);
}

/* 一级标题：底部蓝色实线 */
#nice h1 {
  font-size: 18px;
  font-weight: 700;
  color: var(--ab-heading);
  margin: 6px 0 16px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--ab-accent);
  line-height: 1.4;
}

/* 一级标题内容 */
#nice h1 .content {
}

/* 一级标题修饰 */
#nice h1:after {
}

/* 二级标题 */
#nice h2 {
  font-size: 16px;
  margin: 26px 0 12px;
  line-height: 1.4;
}

/* 二级标题内容：蓝色填充块 + 白字（记忆点） */
#nice h2 .content {
  display: inline-block;
  background-color: var(--ab-accent);
  color: #FFFFFF;
  padding: 4px 12px;
  border-radius: 3px;
  font-weight: 700;
}

/* 二级标题修饰 */
#nice h2:after {
}

/* 三级标题 */
#nice h3 {
  font-size: 14px;
  margin: 20px 0 10px;
  line-height: 1.4;
}

/* 三级标题内容：蓝字 + 底部短蓝线 */
#nice h3 .content {
  display: inline-block;
  color: var(--ab-accent);
  font-weight: 700;
  border-bottom: 2px solid var(--ab-accent);
  padding-bottom: 2px;
}

/* 三级标题修饰 */
#nice h3:after {
}

/* 四级标题 */
#nice h4 {
  font-size: 13px;
  font-weight: 700;
  color: var(--ab-heading);
  margin: 16px 0 8px;
}

/* 五级标题 */
#nice h5 {
  font-size: 13px;
  font-weight: 600;
  color: var(--ab-heading);
  margin: 14px 0 6px;
}

/* 六级标题 */
#nice h6 {
  font-size: 13px;
  font-weight: 600;
  color: var(--ab-muted);
  margin: 14px 0 6px;
}

/* 无序列表整体样式 */
#nice ul {
  padding-left: 1.4em;
  margin: 10px 0;
}

/* 有序列表整体样式 */
#nice ol {
  padding-left: 1.5em;
  margin: 10px 0;
}

/* 列表内容 */
#nice li section {
  margin: 5px 0;
  line-height: 1.7;
  color: var(--ab-text);
}

/* 引用：左竖条 + 淡蓝底 */
#nice blockquote {
  border-left: 4px solid var(--ab-accent);
  background-color: var(--ab-accent-10);
  padding: 10px 14px;
  margin: 14px 0;
  color: var(--ab-quote-text);
  border-radius: 0 4px 4px 0;
}

/* 引用文字 */
#nice blockquote p {
  margin: 0;
  color: var(--ab-quote-text);
}

/* 链接 */
#nice a span {
  color: var(--ab-accent);
  border-bottom: 1px solid var(--ab-accent);
}

/* 加粗 */
#nice strong {
  color: var(--ab-accent);
  font-weight: 700;
}

/* 斜体 */
#nice em {
  color: var(--ab-quote-text);
}

/* 加粗斜体 */
#nice em strong {
  color: var(--ab-accent);
}

/* 删除线 */
#nice del {
  color: var(--ab-muted);
}

/* 分隔线 */
#nice hr {
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--ab-accent), transparent);
  margin: 22px 0;
}

/* 图片 */
#nice img {
  max-width: 100%;
  border-radius: 4px;
  display: block;
  margin: 12px auto;
}

/* 图片描述文字 */
#nice figcaption {
  text-align: center;
  color: var(--ab-muted);
  font-size: 12px;
  margin-top: 6px;
}

/* 行内代码 */
#nice p code, #nice li code {
  font-family: var(--ab-font-mono);
  color: var(--ab-accent);
  background-color: var(--ab-accent-10);
  padding: 1px 6px;
  border-radius: 3px;
  font-size: 0.92em;
}

/* 非微信代码块容器：深蓝底 */
#nice pre {
  background-color: var(--ab-code-bg);
  padding: 12px 14px;
  border-radius: 4px;
  overflow-x: auto;
  margin: 14px 0;
}

/* 非微信代码块文字 */
#nice pre code {
  font-family: var(--ab-font-mono);
  font-size: 12.5px;
  color: var(--ab-code-text);
  background: transparent;
  line-height: 1.6;
}

/* 表格 */
#nice table {
  border-collapse: collapse;
  width: 100%;
  margin: 14px 0;
  font-size: 13px;
}

/* 表格内的单元格 */
#nice table tr th,
#nice table tr td {
  border: 1px solid var(--ab-border);
  padding: 7px 10px;
  color: var(--ab-text);
}

/* 表头：淡蓝底 + 蓝字 */
#nice table tr th {
  background-color: var(--ab-accent-10);
  color: var(--ab-accent);
  font-weight: 700;
}

/* 微信代码块：统一深蓝底 */
#nice .code-snippet__fix {
  background-color: var(--ab-code-bg) !important;
  border-color: var(--ab-border) !important;
}

#nice .code-snippet__fix .code-snippet__line-index li,
#nice .code-snippet__fix .code-snippet__line-index li::before {
  color: var(--ab-muted) !important;
}

/* 脚注文字 */
#nice .footnote-word {
  color: var(--ab-accent);
}

/* 脚注上标 */
#nice .footnote-ref {
  color: var(--ab-accent);
}

/* "参考资料"四个字 */
#nice .footnotes-sep:before {
  color: var(--ab-heading);
}

/* 参考资料编号 */
#nice .footnote-num {
  color: var(--ab-muted);
}

/* 参考资料文字 */
#nice .footnote-item p {
  color: var(--ab-muted);
  font-size: 12px;
}

/* 参考资料解释 */
#nice .footnote-item p em {
  color: var(--ab-quote-text);
}

/* 行间公式 */
#nice .block-equation svg {
}

/* 行内公式 */
#nice .inline-equation svg {
}`;
