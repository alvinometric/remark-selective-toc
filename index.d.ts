export interface RemarkSelectiveTocOptions {
  /** Class name on the wrapping `<div>`. Defaults to `toc`. */
  className?: string;
  /** Any other option is forwarded to `mdast-util-toc`. */
  [key: string]: unknown;
}

declare function selectiveTOC(
  options?: RemarkSelectiveTocOptions
): (tree: any, file: any) => any;

export default selectiveTOC;
