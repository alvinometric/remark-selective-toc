import { toc } from "mdast-util-toc";
import { filter } from "unist-util-filter";
import { modifyChildren } from "unist-util-modify-children";
import { load } from "js-yaml";

const defaultOptions = {
  className: "toc",
};

// Default options for mdast-util-toc
const defaultTOCOptions = {
  ordered: false,
  tight: true,
};

const modify = (options) =>
  modifyChildren(function (node, index, parent) {
    // we have a TOC
    if (node.type === "code" && node.lang === "toc") {
      const config = load(node.value);

      // For XSS safety, we only allow basic css names
      // this is taken from `gatsby-remark-table-of-contents`
      if (!options?.className?.match(/^[ a-zA-Z0-9_-]*$/)) {
        options.className = defaultOptions.className;
      }

      // support both 'from-heading' and 'from'
      let from = config["from-heading"] || config.from;
      let to = config["to-heading"] || config.to;

      // only keep the headings whose depth is greater than our minimum
      // removes the headings < (from +1), so never include h1
      const treeWithoutHeadings = filter(
        parent,
        (node) => node.type !== "heading" || node.depth >= from + 1
      );

      const result = toc(treeWithoutHeadings, {
        maxDepth: to,
        ...defaultTOCOptions,
        ...options,
      });

      parent.children.splice(
        index,
        1,
        {
          type: "html",
          value: `<div class="${options.className}">`,
        },
        result.map,
        {
          type: "html",
          value: "</div>",
        }
      );
      return index + result.map.length + 2;
    }
  });

export default function selectiveTOC(options = defaultOptions) {
  return function (tree, file) {
    modify(options)(tree);
    return tree;
  };
}
