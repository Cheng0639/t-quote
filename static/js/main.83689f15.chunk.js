(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,r){e.exports=r(25)},16:function(e,t,r){},18:function(e,t,r){e.exports=r.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,r){},25:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),l=r(8),a=r.n(l),c=(r(16),r(2)),o=r(3),d=r(5),h=r(4),s=r(6),u=(r(18),r(19),r(1)),f=r(9),m=r.n(f),b=function(e){function t(){var e,r;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),a=0;a<n;a++)l[a]=arguments[a];return(r=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).left=i.a.createRef(),r.leftHeader=i.a.createRef(),r.middle=i.a.createRef(),r.right=i.a.createRef(),r.rightHeader=i.a.createRef(),r.cellWidth=60,r.state={x:0,y:0},r.renderHeaderColumn=function(){return Object(u.a)(Array(10).keys()).map(function(e){return i.a.createElement("div",{key:e,style:{display:"inline-block",width:"".concat(r.cellWidth,"px"),border:"1px solid black",boxSizing:"border-box"}},"Column ",e.toString().padStart(2,"0"))})},r}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.left.current.scrollLeft=10*this.cellWidth-this.left.current.clientWidth,this.leftHeader.current.scrollLeft=10*this.cellWidth-this.leftHeader.current.clientWidth}},{key:"renderData",value:function(){var e=this;return Object(u.a)(Array(222).keys()).map(function(t){return i.a.createElement("div",{key:t},Object(u.a)(Array(10).keys()).map(function(r){return i.a.createElement("div",{key:r,style:{display:"inline-block",width:"".concat(e.cellWidth,"px"),border:"1px solid black",boxSizing:"border-box"}},t,",",r)}))})}},{key:"render",value:function(){var e=this;return i.a.createElement(m.a,{onSwiping:function(t,r,n){var i=e.state,l=i.x,a=i.y;0!==n&&(e.left.current.scrollTop=a+n,e.right.current.scrollTop=a+n,e.middle.current.scrollTop=a+n),e.left.current.scrollLeft=10*e.cellWidth-e.left.current.clientWidth-l-r,e.right.current.scrollLeft=l+r,e.leftHeader.current.scrollLeft=10*e.cellWidth-e.leftHeader.current.clientWidth-l-r,e.rightHeader.current.scrollLeft=l+r},onSwiped:function(){var t=e.right.current.scrollLeft,r=e.right.current.scrollTop;e.setState({x:t,y:r})},style:{width:"100vw",height:"100vh",background:"#3e3e3e",margin:"0 auto",display:"flex"}},i.a.createElement("div",{style:{width:"43%"}},i.a.createElement("div",{ref:this.leftHeader,style:{overflow:"hidden",backgroundColor:"bisque",textAlign:"center"}},i.a.createElement("div",{style:{width:"".concat(10*this.cellWidth,"px"),direction:"rtl"}},this.renderHeaderColumn())),i.a.createElement("div",{ref:this.left,style:{height:"100%",overflow:"hidden",textAlign:"center"}},i.a.createElement("div",{style:{width:"".concat(10*this.cellWidth,"px"),backgroundColor:"pink",direction:"rtl"}},this.renderData()))),i.a.createElement("div",{style:{width:"14%"}},i.a.createElement("div",{ref:this.middle,style:{height:"100%",overflow:"hidden",textAlign:"center"}},i.a.createElement("div",{style:{height:"38px",lineHeight:"38px",backgroundColor:"#FCF3CF",textAlign:"center",border:"1px solid black",boxSizing:"border-box"}},i.a.createElement("div",null,"201901")),i.a.createElement("div",{style:{width:"100%",backgroundImage:"linear-gradient(to bottom , white , black)"}},Object(u.a)(Array(222).keys()).map(function(e){return i.a.createElement("div",{key:e},e)})))),i.a.createElement("div",{style:{width:"43%"}},i.a.createElement("div",{ref:this.rightHeader,style:{overflow:"hidden",backgroundColor:"bisque",textAlign:"center"}},i.a.createElement("div",{style:{width:"".concat(10*this.cellWidth,"px")}},this.renderHeaderColumn())),i.a.createElement("div",{ref:this.right,style:{height:"100%",overflow:"hidden",textAlign:"center"}},i.a.createElement("div",{style:{width:"".concat(10*this.cellWidth,"px"),backgroundColor:"orange"}},this.renderData()))))}}]),t}(n.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(b,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.83689f15.chunk.js.map