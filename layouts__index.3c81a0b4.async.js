(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"+ego":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));n("14J3");var a=n("BMrR"),r=(n("jCWc"),n("kPKH")),c=(n("/zsF"),n("PArb")),i=(n("+L6B"),n("2/Rp")),l=n("cDcd"),o=n.n(l),s=n("55Ip"),u=n("9kvl"),p=n("H4Hi"),d=n.n(p),m=[{name:"2\u53f7\u672c",key:"1",url:"/p2"},{name:"\u53e3\u7b97\u89c6\u9891\u7ec3\u4e60",key:"2",url:"/p1"},{name:"1\u4e07\u5185\u6574\u6570\u8fd0\u7b97",key:"3",url:"/p4"}];class f extends l["Component"]{constructor(){super(...arguments),this.state={active:"1"},this.setActive=e=>{this.setState({active:e})}}componentDidMount(){var e=m.findIndex(e=>e.url===this.props.location.pathname);this.setActive(e>-1?String(e+1):"1")}render(){var e=this.props,t=e.children,n=e.location,p=n.pathname,f=this.state.active;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:d.a.layouts+" noprint"},!p.includes("/V0")&&!p.includes("/test")&&m.map((e,t)=>o.a.createElement(l["Fragment"],{key:e.key},o.a.createElement(s["a"],{to:e.url},o.a.createElement(i["a"],{type:e.key===f?"primary":"default",size:"middle",onClick:()=>this.setActive(e.key)},e.name)),t<m.length-1&&o.a.createElement(c["a"],{type:"vertical",style:{marginRight:5,marginLeft:5}}))),p.includes("/V0")&&o.a.createElement(a["a"],{justify:"space-between",align:"middle"},o.a.createElement(r["a"],{className:"f18 b"},"\u5386\u53f2\u7248\u672c"),o.a.createElement(r["a"],null,o.a.createElement(i["a"],{type:"primary",size:"large",onClick:u["a"].goBack},"\u8fd4\u56de")))),o.a.createElement("div",null,t))}}},"/zsF":function(e,t,n){"use strict";n("cIOH"),n("bE4E")},"14J3":function(e,t,n){"use strict";n("cIOH"),n("1GLa")},BMrR:function(e,t,n){"use strict";var a=n("qrJ5");t["a"]=a["a"]},H4Hi:function(e,t,n){e.exports={layouts:"layouts___2GuUf",link:"link___1URrI",selected:"selected___FK54G"}},PArb:function(e,t,n){"use strict";var a=n("cDcd"),r=n("TSYQ"),c=n.n(r),i=n("H84U");function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},u=function(e){return a["createElement"](i["a"],null,(function(t){var n,r=t.getPrefixCls,i=t.direction,u=e.prefixCls,p=e.type,d=void 0===p?"horizontal":p,m=e.orientation,f=void 0===m?"center":m,y=e.className,v=e.children,h=e.dashed,b=e.plain,g=s(e,["prefixCls","type","orientation","className","children","dashed","plain"]),E=r("divider",u),k=f.length>0?"-".concat(f):f,O=!!v,w=c()(y,E,"".concat(E,"-").concat(d),(n={},o(n,"".concat(E,"-with-text"),O),o(n,"".concat(E,"-with-text").concat(k),O),o(n,"".concat(E,"-dashed"),!!h),o(n,"".concat(E,"-plain"),!!b),o(n,"".concat(E,"-rtl"),"rtl"===i),n));return a["createElement"]("div",l({className:w},g,{role:"separator"}),v&&a["createElement"]("span",{className:"".concat(E,"-inner-text")},v))}))};t["a"]=u},bE4E:function(e,t,n){},jCWc:function(e,t,n){"use strict";n("cIOH"),n("1GLa")},kPKH:function(e,t,n){"use strict";var a=n("/kpp");t["a"]=a["a"]}}]);