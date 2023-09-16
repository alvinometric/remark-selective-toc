# remark-selective-toc

<!-- prettier-ignore-start -->
[![Downloads](https://img.shields.io/npm/dm/remark-selective-toc.svg?style=flat-square)](https://www.npmjs.com/package/remark-selective-toc)
[![Install size](https://packagephobia.com/badge?p=remark-selective-toc)](https://packagephobia.com/result?p=remark-selective-toc)
[![version](https://img.shields.io/npm/v/remark-selective-toc.svg?style=flat-square)](https://www.npmjs.com/package/remark-selective-toc)
[![MIT License](https://img.shields.io/npm/l/remark-selective-toc.svg?style=flat-square)](https://github.com/alvinometric/remark-selective-toc/blob/main/LICENSE)
<!-- prettier-ignore-end -->

A remark plugin to selectively add a table of contents and configure it for each markdown file. Ported and updated from [`gatsby-remark-table-of-contents`](https://github.com/signalwerk/gatsby-remark-table-of-contents).

````markdown
# 👇 This code block gets replaced with a TOC of h2 headings only

```toc
from: 1
to: 2
```
````

## Installation

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).
In Node.js (version 16.0+, or 18.0+), install with [npm](https://npmjs.com):

```bash
npm install remark-selective-toc
```

## When should I use this?

- You need more specific control over the TOC, such as excluding certain heading levels.
- You're working with multiple markdown files that each require different TOC configurations
- Some of your markdown files don't warrant a TOC at all.

## Options

### `from`

- Type: `number`
- Default: `2`

Sets the minimum heading depth to include.

### `to`

- Type: `number`
- Default: `6`

Sets the maximum heading depth to include.

### `className`

- Type: `string`
- Default: `toc`

Sets the class name of the div wrapping your table of contents.

### `tight`

- Type: `boolean`
- Default: `false`

`tight` lets you specify whether or not you want spaces before and between the list items.

```markdown
<!-- tight: true -->

- [Here's an h2](#heres-an-h2)

- [Another h2](#another-h2)

  - [and H3](#and-h3)

<!-- tight: false -->

- [Here's an h2](#heres-an-h2)
- [Another h2](#another-h2)
  - [and H3](#and-h3)
```

### `exclude`

- Type: `string` or `array`
- Default: `''`

Excludes titles matching this regex pattern.

### `ordered`

- Type: `boolean`
- Default: `false`

Chooses between ordered and unordered list.

## Differences with `gatsby-remark-table-of-contents`

`tight` is true by default.

## Contributing

Feel free to open issues and pull requests.

## License

MIT License. See `LICENSE` for more information.
