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
  src: url('iconfont.eot?t=1569598074313'); /* IE9 */
  src: url('iconfont.eot?t=1569598074313#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAUUAAsAAAAACdwAAATIAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDXgqGIIUiATYCJAMcCxAABCAFhG0HaRuDCMgekiTFrzigIB0cZoYDBM//7+/b5/r/P3AkkiMcAYU0iUhsedYkqIJNJb4hPPMecp7yiks+X+SXJgPTkfUIFYNdguq293dT4xFmcSAVeEkaZwHhS3/cO63Ngc1nWS5/rMYYtJd1YRR2cUAB7Q2UTuASCwOj3IMA2tklLYiv+TQExOWKYrCWVDUBc4Y3SYDcOMYC5jULMyISQe96VtaFnGKFdqyeAOAkfb/8ICHMQbGJd1bPWcwFed3shbsREzEmUsnefi5AXQcaVAMYyNfr2QI6j1czErc/0xgASBEorps9930e+Lz8ee0Ld70egHqt1ypS/D944BiWpghkAE2SxB9JOPyZhXip9cWEQRuICYu2HBMabS0KKPy7k89Q4+MVKSAV/AAgG/B01Wk8EOpJeGU3EZ8lz9rVwcHUdHW65hlGPSCRGch25Z4zj1c6EbfuSJCdLQ46Pa1Itl6btTX+KGA0l+eu69d6S1ZO2++p2u/qOk0ilbq4SNeFByr37Zru5gYYiatWK+LX1wm5TCINjoThOybLV0tWpYpXMmtSZSula0Y2abUDanXQ49agRjfcpGhSBpXBx0NaLcjDpXsyn7F0FRrNoFo923JD+Yba50PqpwOaZ4M6XX+zdPoG8cjhI+XT1zHOwyTTXEfIxBumtzd+E1YLhrbCkc1c2IQiRqlDz9H0uaGz1zzbjfx0NzEs7aZRlrDKrSK+6Fjhkq+7+dU9g2smXm92/7qk8FhRvGt5tTDLqLFl567gMu1c1+1LrffKsISEk2O7urkZk0OOHeu1uvt5fOSapyfD6LPnVpS004qUVTkJ6+GG5MJZqzfvLLqrfNvt4lIV3GiO2CJWJhneTqD0aPe+3W13MKPbtNV4cU12gWBCj8XGEtxBbYHbGS97GpbHsWZZ7wabshEzPHLNYufxDlPhfX7TavGfWuqI5UZvN/VyH4nRiC5nrMJdO6PTFGCwTpub38IYSyjMGRD2aAaKtOs7d10oVAYAk5lM3HYoqHhXdj70XorBnXTCu+Rtd77LbofYsnu5FyR/Q/4mL0NqWaDj3bK+yUPi6l96ED4VqKSRIOx88BhCAIju5h7dqP8cjaohRsqIYZ+8jxEDEZNDafJwVhsV/OtG0bQ0yHvtsr6ZW/0SQ+87K0eI2Hp0nUcJfx0ts4n/mGmcNcLS0w7lWX1Z1ZhH/9kAmKXXt10IvcAKc3wvJuJ+E/yzAhnu72fI/o6SIsguQ4p3ZlILimEbfjVYCXXgBE0QV6V0fUImkhGpGFBpogAizRZQUlyBluYS2/DvgZXjHThpYQRxQ+G0Y0Jp4JaFJGRRkIuwhyM4hxCigZ2yzEobIEbzWWSVSsUtkBThISQ+Jq6ZKoVCSO4xRzQES6AoFEFJQoCUCOdBPp9ABkiiH3KomD6KGsiIjUX7LhTDIQTAUhsSxEKBuBBswyFwHAQhNG5PsWy9vgGEofGxkCN1beUWEEkE7x4RL0bcDHapRjir7l36iwyBSUChoNI4FIkggCjBBfH9OAEx0D+sH8RBidG3IjogQ6zYCJ2riTlfJ3idO4A479o+lGgxYsWJl4C7cKqPZlsW1vRyRFyhEFKmIoIW0YRNP84awcIxKMS4NGHKIkliaLRZ4o4HAA==') format('woff2'),
  url('iconfont.woff?t=1569598074313') format('woff'),
  url('iconfont.ttf?t=1569598074313') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1569598074313#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`


