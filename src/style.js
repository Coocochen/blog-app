import { createGlobalStyle } from 'styled-components'

export const GlobalStyle =createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        box-sizing: border-box;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    code[class*="language-"],
    pre[class*="language-"] {
        color: black;
        background: none;
        text-shadow: 0 1px white;
        font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        font-size: 1em;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.5;

        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;

        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
    }

    pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
    code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
        text-shadow: none;
        background: #b3d4fc;
    }

    pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
    code[class*="language-"]::selection, code[class*="language-"] ::selection {
        text-shadow: none;
        background: #b3d4fc;
    }

    @media print {
        code[class*="language-"],
        pre[class*="language-"] {
            text-shadow: none;
        }
    }

    /* Code blocks */
    pre[class*="language-"] {
        padding: 1em;
        margin: .5em 0;
        overflow: auto;
    }

    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
        background: #f5f2f0;
    }

    /* Inline code */
    :not(pre) > code[class*="language-"] {
        padding: .1em;
        border-radius: .3em;
        white-space: normal;
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        color: slategray;
    }

    .token.punctuation {
        color: #999;
    }

    .namespace {
        opacity: .7;
    }

    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted {
        color: #905;
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
        color: #690;
    }

    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
        color: #9a6e3a;
        background: hsla(0, 0%, 100%, .5);
    }

    .token.atrule,
    .token.attr-value,
    .token.keyword {
        color: #07a;
    }

    .token.function,
    .token.class-name {
        color: #DD4A68;
    }

    .token.regex,
    .token.important,
    .token.variable {
        color: #e90;
    }

    .token.important,
    .token.bold {
        font-weight: bold;
    }
    .token.italic {
        font-style: italic;
    }

    .token.entity {
        cursor: help;
    }


@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1566106022448'); /* IE9 */
  src: url('iconfont.eot?t=1566106022448#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAS4AAsAAAAACTgAAARpAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDSAqFJIQ9ATYCJAMYCw4ABCAFhG0HYBv7B1GUDk6a7GMx3fqAHEU6RdCk8U0ET/u1eX/37x2mkSTaoHsyDRFPmixEYrTSCMUz+X4eT3sZxAzUkbnuoOIny+o0GZge2fYotwc7B5fT5gSbZ1kuY07aSx+jOA4ooDEGSDqBCywM0GLOAexu2ccJtBuRDFvt0I0AB5k+LhCXNCUGh4RNrmCHprEULM3rsGlgq1mNtzoP4Nl7f/xBZjiASp1AP2nnuL0Myj/tXwRY8wJvcJoDo4bzgF1FwiyQiftC3x3rIDnLWrv8DTbWgE5Nlfxp/zzsedTzni8CBAEgodJDodP4y6OWZJUgCkDXSeE3UjWf9pZM1ofBIkEfBYsMfU8IqfgKUFyWqQw4pAvvANFPp83yNcXR+2PPFs8R3udpZze5ceKNG8BfJwwmDNMn7jp17pAF07fZlmk6HR19ckI701qzz+aMw8DfOHDmRM7qEMPyCXuD5u7185tgMBp9fY1rrD3n7Nkx0d8feIOf2YzpLZbBs0wGY4xNTNgyZ9ZKw4o8/XJ+VZ5puXFVI2E2E9evm11u9bthqSRmE3Oio/BjkdkMsfaRlieN9Y2zJq7hfeoME/waTPp1Ewdwv4hYRJGVqLGfDBEkbp1Xe4bjztROXfVsZNKnu851+Teti1Xd/LtktDvSdtHXnYruQ7U9Rl8tD/i6qO2Rdhl+nburiq37irbviOlknu63dbHLqDgqM/N46+AhssKxsUeO9Ha++3lk0qqnU+u402e4OZz3stwVpZlr0bqctlNWbtze7u6ct518fbvF9HXA3XBnW68Qb+jYd0CIXW4Pcd/vNcSu0mZhZkkb5aihjutjaM/rjrS7DRVk1TldPMVlpIOtW0tqfdKqhT4jPcej+wpipf5PT7ZzV1lbDpA17+LOxt3Lxe54Y97lbLlzL+52rJukEHuO+zf2b84ScSIPBj5tWkvoYqf+lwAJA23mGpMgxtb7j0ATQOtu2mWd1/osNNnUWM8RMOiTfWjiAVp8Ennpgyk5tflxznPfP33pMPfifwdnG4CPVquVkHaXdPPNAXj7eo3lv4mlMaUCJagUpW4vWYrLt8LnBkYhOUCguOWgxCu0G038HKF+94cyDd3vdGgaiiKVhunSSdMo0Bk/C7UO81A0LUC7GR1XdxjAsBbZEZg2moDQaxNUur1A0usCOuPvQW3YOyh6wxraHYX3lh3Gg3ZqyyAxi2S4pB6npWoVaTpZJ7+yD6I4hZiJKz2OCDE6OoJnpKanMx2RCjFDzNDVUJksS+Iko1biHYjTkEKhxjWMuhpJ2dQqltUUpqWRRRdKlaqV4GQFAxFjITI4iXo4mpSaCum0ZjllXt8HQuEoiDEViLKoCMLQoTvHZUiV3gDdUadqhLiU3jo1KJlYLJIaRWKoKeE6wIMojKQaTlM8qBoixUpV1SGuUSiNbEQ21aVOb1De5TZop1+phBVmjdlgtpgdZg/lhGarOIlT2x7DpDqZSoVY12pa3CCmKaSiZJzaTsww6toUe9ebAQAAAAA=') format('woff2'),
  url('iconfont.woff?t=1566106022448') format('woff'),
  url('iconfont.ttf?t=1566106022448') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1566106022448#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`


