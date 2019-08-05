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
  src: url('iconfont.eot?t=1564317120812'); /* IE9 */
  src: url('iconfont.eot?t=1564317120812#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAWEAAsAAAAACpgAAAU4AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDXgqHZIYmATYCJAMcCxAABCAFhG0HYhsACRFVpCuR/UiwwWXU6dDHeVnYoUjkCJe07Jt4+H6/3699zrmCWYTEkF7jhYJMFy3BQ1NrRFJnKEl/9PRDese/Z81L6iwApgsgPTLY3SOU9qA/6BPu1Vw+s171RJLYQ+uvyebmQvsB9Kb/c03eWgeWH2gukWVRiUfDvfGABhZRWJrANwKcijojuwR4dXiYQL8Z6EAsJ2UUgEThjQrEbrO8FiQ1nTJCCa2y7llYZqEVINSmhdhdAE/p7+Mf+CEJSKoM3lErZGIDxLwTv9uEU2oKKnAKqP0sUJaR0QEKcdlrOwY8D3Qg67e6C2wAGNZK6r3Q1Xln9c7+3fS7TWo1qFd7zWHY/4NHrcgqSRA1QDbIhJ1gzU9xyCvlOtAokFtBI0NuD40K8mloJMg3QfCEsiZeMIwRYg7EHXiKbhoIjfTQV4wFRw0zcw2pVFdXR0dfJBpVqKK4LX5rVEU8b3pwk+FZHvhLxov3cGuiKxgarrtkuPUk0Hyh8qkxwSiLn6qMFKeduCvWxhzBTDO7RNcrvSxrzG1x280HHM0uUSWp+BieNySUysKnT/0RZ7xmg9n6+w0qVVFVUtzh4/lyhpC7oPWPgxY50DTDbOPdtsuUMigkZQ3/1PQ24x0r8ygTetqQIRbPY+MGDVd5i3XKxBtPrderChbtVuxZvIvaWUzTLMtxDDM6PMpxrMEQvchohB1ALMWXjWodfWiBrXsUqH3iiTW+/nEFvVOmtWg3whV7CO3FuwwLaurYrVPThrUMQSw2rufWzGyvLZKTxY2jhQ2NBWSIrqbAUR5ts+Fxd+3/O7o+O75S9+MNNtGOcoFWoTMl1F12Sg83NP43qPMqAutFSeVa9eI+ez0DvUhdL658F0rqxSJe6Qz+MzbE9U4t0xVSzvA2b8XpsrHe4r48YbXmKbMsyGjNxjYqyn3yNepskCTronwZGoIjWf9Rm6ePhfznEbBpRPNKUBxHzStthAZgNRYHdusb3lbYCg6WdetLCil9457MamXPVqJL3RBpzpXBmO2HI1vkaYdJk0RUWYkSTcnwrUd8hNJPocvsUNXExHB1TnKUtVUoyUnJWtox1cf1Fzgt5C0WxGQnXT3uOcEf94Jqvsf/0Lkg66vzbefXQegljfgaeOjla+cXTlp1vbg7tL/9v4Gb2LWu0LXbQ9XYC3eI7GtogmiH0B7BSFeH0k7Q2RHurk3pBGjlB+rs0d7DJFxJYCyP1kuQuN7qKMVA2eSB3QUeO8791eOqHzfDuIONjc9eggkA9M7gK/AYAPIzdkeNXf43ljgFQH7B9gD0KLyontI7j3vgcf/bQV4vtWyt1o74JiF+y+73+uMXU856wrGjlb4YuX9phXiZWg2aaVXo6Zti8kLujJp6iUDj/Nv0JfT7Dfw3XePwYz/V1LccCq2p0p00zgxlrVlgCqEDlQFdqLUcRyiZSF5e1tYjLVn6JBJjcwUkNRyAlJp/SGu4h8kQXkNWz1fIaUQaSn6jvWFZP0TpaiNzUYa6CJolMpXA6Jay9BdyT2d2VZhSf9F2hBt8vXya4SeaaO8xpdfn6z5XAdImA5LEcajrBF02qSi58ybX/W68vcm+B83ryUiUXNkQ40IyUCcCmkmISYlbu0ot9F8Q59Ex9khdi/UXsjlE58CXF58ZmKfMnFX3Lrm9fNxaH/kUgFRSiQEkkQXpfoCArv5+KiRxzTWt8H1teBMSOVc2P19hvM5tJBIl3tPykSJHiSrqaKKVOrKyAYo/qqqCxUxwNLnsUSEiLxTM5Dlm2xTMxInVFwA=') format('woff2'),
  url('iconfont.woff?t=1564317120812') format('woff'),
  url('iconfont.ttf?t=1564317120812') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1564317120812#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`


