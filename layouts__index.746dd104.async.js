(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"+ego":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));a("cIOH"),a("1GLa");var n=a("qrJ5"),l=n["a"],r=a("/kpp"),i=r["a"],c=(a("/zsF"),a("PArb")),s=(a("+L6B"),a("2/Rp")),o=a("cDcd"),p=a.n(o),u=a("55Ip"),m=a("9kvl"),d=a("H4Hi"),k=a.n(d),y=[{name:"2\u53f7\u672c",key:"1",url:"/p2"},{name:"\u53e3\u7b97\u89c6\u9891\u7ec3\u4e60",key:"2",url:"/p1"}];class h extends o["Component"]{constructor(){super(...arguments),this.state={active:"1"},this.setActive=e=>{this.setState({active:e})}}componentDidMount(){var e=y.findIndex(e=>e.url===this.props.location.pathname);this.setActive(e>-1?String(e+1):"1")}render(){var e=this.props,t=e.children,a=e.location,n=a.pathname,r=this.state.active;return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:k.a.layouts+" noprint"},!n.includes("/V0")&&!n.includes("/test")&&y.map((e,t)=>p.a.createElement(o["Fragment"],{key:e.key},p.a.createElement(u["a"],{to:e.url},p.a.createElement(s["a"],{type:e.key===r?"primary":"default",size:"large",onClick:()=>this.setActive(e.key)},e.name)),t<y.length-1&&p.a.createElement(c["a"],{type:"vertical"}))),n.includes("/V0")&&p.a.createElement(l,{justify:"space-between",align:"middle"},p.a.createElement(i,{className:"f18 b"},"\u5386\u53f2\u7248\u672c"),p.a.createElement(i,null,p.a.createElement(s["a"],{type:"primary",size:"large",onClick:m["a"].goBack},"\u8fd4\u56de")))),p.a.createElement("div",null,t))}}},H4Hi:function(e,t,a){e.exports={layouts:"layouts___2GuUf",link:"link___1URrI",selected:"selected___FK54G"}}}]);