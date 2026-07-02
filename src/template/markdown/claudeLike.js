export default `/* Claude 风格（浅色）
 * 灵感：Anthropic Claude 暖色浅底，陶土橙衬温暖阅读感
 * 主色：#C75B25（陶土橙）
 * 底色：#FFFBF5（暖白，非纯白）
 * 记忆点：二级标题自动中文序号 + 双线斜体引用
 */

:root {
  --cl-bg: #FFFBF5;
  --cl-text: #3F352C;
  --cl-heading: #2A211B;
  --cl-accent: #C75B25;
  --cl-border: #E8D9C8;
  --cl-muted: #A89580;
  --cl-quote-bg: #F7EFE6;
  --cl-quote-text: #6B5B4A;
  --cl-code-bg: #2E251C;
  --cl-code-text: #E8DCC8;
  --cl-inline-bg: #F7EADF;
  --cl-font-sans: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  --cl-font-mono: Menlo, Monaco, "SF Mono", Consolas, monospace;
}

/* 全局属性 */
#nice {
  counter-reset: h2cnt;
  font-family: var(--cl-font-sans);
  font-size: 13px;
  line-height: 1.6;
  color: var(--cl-text);
  background-color: var(--cl-bg);
  letter-spacing: 0.02em;
  -webkit-font-smoothing: antialiased;
}

/* 段落 */
#nice p {
  margin: 8px 0;
  color: var(--cl-text);
}

/* 一级标题 */
#nice h1 {
  font-size: 18px;
  font-weight: 700;
  color: var(--cl-heading);
  margin: 6px 0 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--cl-border);
  line-height: 1.4;
}

/* 一级标题内容 */
#nice h1 .content {
}

/* 一级标题修饰 */
#nice h1:after {
}

/* 二级标题：自动中文序号 */
#nice h2 {
  font-size: 16px;
  font-weight: 700;
  color: var(--cl-heading);
  margin: 26px 0 12px;
  counter-increment: h2cnt;
  line-height: 1.4;
}

/* 二级标题内容 */
#nice h2 .content {
  display: inline-block;
}

/* 二级标题序号前缀 */
#nice h2 .content:before {
  content: counter(h2cnt, cjk-ideographic) "、";
  color: var(--cl-accent);
  font-weight: 700;
  margin-right: 2px;
}

/* 二级标题修饰 */
#nice h2:after {
}

/* 三级标题 */
#nice h3 {
  font-size: 14px;
  font-weight: 700;
  color: var(--cl-accent);
  margin: 20px 0 10px;
  line-height: 1.4;
}

/* 三级标题内容 */
#nice h3 .content {
}

/* 三级标题修饰 */
#nice h3:after {
}

/* 四级标题 */
#nice h4 {
  font-size: 13px;
  font-weight: 700;
  color: var(--cl-heading);
  margin: 16px 0 8px;
}

/* 五级标题 */
#nice h5 {
  font-size: 13px;
  font-weight: 600;
  color: var(--cl-heading);
  margin: 14px 0 6px;
}

/* 六级标题 */
#nice h6 {
  font-size: 13px;
  font-weight: 600;
  color: var(--cl-muted);
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
  color: var(--cl-text);
}

/* 引用：双线 + 斜体 */
#nice blockquote {
  border-left: 3px double var(--cl-accent);
  background-color: var(--cl-quote-bg);
  padding: 10px 14px;
  margin: 14px 0;
  color: var(--cl-quote-text);
  font-style: italic;
  border-radius: 0 4px 4px 0;
}

/* 引用文字 */
#nice blockquote p {
  margin: 0;
  color: var(--cl-quote-text);
}

/* 链接 */
#nice a span {
  color: var(--cl-accent);
  border-bottom: 1px solid var(--cl-accent);
}

/* 加粗 */
#nice strong {
  color: var(--cl-accent);
  font-weight: 700;
}

/* 斜体 */
#nice em {
  color: var(--cl-quote-text);
}

/* 加粗斜体 */
#nice em strong {
  color: var(--cl-accent);
}

/* 删除线 */
#nice del {
  color: var(--cl-muted);
}

/* 分隔线 */
#nice hr {
  border: none;
  border-top: 1px dashed var(--cl-border);
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
  color: var(--cl-muted);
  font-size: 12px;
  margin-top: 6px;
}

/* 行内代码 */
#nice p code, #nice li code {
  font-family: var(--cl-font-mono);
  color: var(--cl-accent);
  background-color: var(--cl-inline-bg);
  padding: 1px 6px;
  border-radius: 3px;
  font-size: 0.92em;
}

/* 非微信代码块容器：深色暖棕底 */
#nice pre {
  background-color: var(--cl-code-bg);
  padding: 12px 14px;
  border-radius: 4px;
  overflow-x: auto;
  margin: 14px 0;
}

/* 非微信代码块文字 */
#nice pre code {
  font-family: var(--cl-font-mono);
  font-size: 12.5px;
  color: var(--cl-code-text);
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
  border-bottom: 1px solid var(--cl-border);
  padding: 7px 10px;
  color: var(--cl-text);
}

/* 表头 */
#nice table tr th {
  color: var(--cl-accent);
  font-weight: 700;
  border-bottom: 2px solid var(--cl-accent);
}

/* 微信代码块：统一深色暖棕底 */
#nice .code-snippet__fix {
  background-color: var(--cl-code-bg) !important;
  border-color: var(--cl-border) !important;
}

#nice .code-snippet__fix .code-snippet__line-index li,
#nice .code-snippet__fix .code-snippet__line-index li::before {
  color: var(--cl-muted) !important;
}

/* 脚注文字 */
#nice .footnote-word {
  color: var(--cl-accent);
}

/* 脚注上标 */
#nice .footnote-ref {
  color: var(--cl-accent);
}

/* "参考资料"四个字 */
#nice .footnotes-sep:before {
  color: var(--cl-heading);
}

/* 参考资料编号 */
#nice .footnote-num {
  color: var(--cl-muted);
}

/* 参考资料文字 */
#nice .footnote-item p {
  color: var(--cl-muted);
  font-size: 12px;
}

/* 参考资料解释 */
#nice .footnote-item p em {
  color: var(--cl-quote-text);
}

/* 行间公式 */
#nice .block-equation svg {
}

/* 行内公式 */
#nice .inline-equation svg {
}`;
