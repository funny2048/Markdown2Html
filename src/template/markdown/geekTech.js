export default `/* 极客技术主题
 * 灵感：终端 / 代码注释风，技术博客标注感
 * 主色：#FF6B00（信号橙）
 * 记忆点：标题终端提示符 + 加粗黄色高亮 + 深色代码块
 */

:root {
  --gt-bg: #FFFFFF;
  --gt-text: #333333;
  --gt-heading: #1A1A1A;
  --gt-accent: #FF6B00;
  --gt-accent-bg: #FFEDD5;
  --gt-highlight: #FFE082;
  --gt-border: #E8E8E8;
  --gt-muted: #999999;
  --gt-quote-bg: #FAFAFA;
  --gt-quote-text: #555555;
  --gt-code-bg: #1E1E1E;
  --gt-code-text: #D4D4D4;
  --gt-font-sans: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  --gt-font-mono: Menlo, Monaco, "SF Mono", Consolas, monospace;
}

/* 全局属性 */
#nice {
  font-family: var(--gt-font-sans);
  font-size: 13px;
  line-height: 1.6;
  color: var(--gt-text);
  background-color: var(--gt-bg);
  -webkit-font-smoothing: antialiased;
}

/* 段落 */
#nice p {
  margin: 8px 0;
  color: var(--gt-text);
}

/* 一级标题 */
#nice h1 {
  font-size: 18px;
  font-weight: 800;
  color: var(--gt-heading);
  margin: 6px 0 16px;
  letter-spacing: -0.01em;
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
  font-weight: 700;
  color: var(--gt-heading);
  margin: 26px 0 12px;
  line-height: 1.4;
}

/* 二级标题内容 */
#nice h2 .content {
  display: inline-block;
}

/* 二级标题前缀：终端提示符（替代易误解的 ##） */
#nice h2 .content:before {
  content: "❯ ";
  color: var(--gt-accent);
  font-family: var(--gt-font-mono);
  font-weight: 700;
}

/* 二级标题修饰 */
#nice h2:after {
}

/* 三级标题 */
#nice h3 {
  font-size: 14px;
  font-weight: 700;
  color: var(--gt-heading);
  margin: 20px 0 10px;
  line-height: 1.4;
}

/* 三级标题内容 */
#nice h3 .content {
  display: inline-block;
}

/* 三级标题前缀：单角提示符 */
#nice h3 .content:before {
  content: "› ";
  color: var(--gt-accent);
  font-family: var(--gt-font-mono);
}

/* 三级标题修饰 */
#nice h3:after {
}

/* 四级标题 */
#nice h4 {
  font-size: 13px;
  font-weight: 700;
  color: var(--gt-heading);
  margin: 16px 0 8px;
}

/* 五级标题 */
#nice h5 {
  font-size: 13px;
  font-weight: 600;
  color: var(--gt-heading);
  margin: 14px 0 6px;
}

/* 六级标题 */
#nice h6 {
  font-size: 13px;
  font-weight: 600;
  color: var(--gt-muted);
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
  line-height: 1.65;
  color: var(--gt-text);
}

/* 引用：左橙条 + 浅灰底 */
#nice blockquote {
  border-left: 3px solid var(--gt-accent);
  background-color: var(--gt-quote-bg);
  padding: 10px 14px;
  margin: 14px 0;
  color: var(--gt-quote-text);
  border-radius: 0 4px 4px 0;
}

/* 引用文字 */
#nice blockquote p {
  margin: 0;
  color: var(--gt-quote-text);
}

/* 链接 */
#nice a span {
  color: var(--gt-accent);
  border-bottom: 1px solid var(--gt-accent);
}

/* 加粗：黄色高亮（mark 风格） */
#nice strong {
  color: var(--gt-heading);
  font-weight: 700;
  background: linear-gradient(transparent 58%, var(--gt-highlight) 58%);
  padding: 0 2px;
}

/* 斜体 */
#nice em {
  color: var(--gt-quote-text);
}

/* 加粗斜体 */
#nice em strong {
  color: var(--gt-heading);
}

/* 删除线 */
#nice del {
  color: var(--gt-muted);
}

/* 分隔线 */
#nice hr {
  border: none;
  border-top: 2px dashed var(--gt-accent);
  margin: 22px 0;
  opacity: 0.5;
}

/* 图片 */
#nice img {
  max-width: 100%;
  border-radius: 6px;
  display: block;
  margin: 12px auto;
}

/* 图片描述文字 */
#nice figcaption {
  text-align: center;
  color: var(--gt-muted);
  font-size: 12px;
  margin-top: 6px;
}

/* 行内代码：橙底药丸 */
#nice p code, #nice li code {
  font-family: var(--gt-font-mono);
  color: var(--gt-accent);
  background-color: var(--gt-accent-bg);
  padding: 1px 6px;
  border-radius: 3px;
  font-size: 0.9em;
  font-weight: 600;
}

/* 非微信代码块容器：深色终端 */
#nice pre {
  background-color: var(--gt-code-bg);
  border-radius: 6px;
  overflow-x: auto;
  margin: 14px 0;
}

/* 非微信代码块文字 */
#nice pre code {
  font-family: var(--gt-font-mono);
  font-size: 12.5px;
  color: var(--gt-code-text);
  background: transparent;
  line-height: 1.6;
  display: block;
  padding: 12px 14px;
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
  border: 1px solid var(--gt-border);
  padding: 7px 10px;
  color: var(--gt-text);
}

/* 表头：黑底橙字 */
#nice table tr th {
  background-color: var(--gt-heading);
  color: var(--gt-accent);
  font-weight: 700;
}

/* 微信代码块：统一深色底 */
#nice .code-snippet__fix {
  background-color: var(--gt-code-bg) !important;
  border-color: var(--gt-border) !important;
}

#nice .code-snippet__fix .code-snippet__line-index li,
#nice .code-snippet__fix .code-snippet__line-index li::before {
  color: var(--gt-muted) !important;
}

/* 脚注文字 */
#nice .footnote-word {
  color: var(--gt-accent);
}

/* 脚注上标 */
#nice .footnote-ref {
  color: var(--gt-accent);
}

/* "参考资料"四个字 */
#nice .footnotes-sep:before {
  color: var(--gt-heading);
}

/* 参考资料编号 */
#nice .footnote-num {
  color: var(--gt-muted);
}

/* 参考资料文字 */
#nice .footnote-item p {
  color: var(--gt-muted);
  font-size: 12px;
}

/* 参考资料解释 */
#nice .footnote-item p em {
  color: var(--gt-quote-text);
}

/* 行间公式 */
#nice .block-equation svg {
}

/* 行内公式 */
#nice .inline-equation svg {
}`;
