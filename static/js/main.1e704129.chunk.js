(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,a){},14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(3),c=a.n(n),s=a(4),i=a(5),d=a(7),b=a(6),l=a(1),o=a.n(l),r=(a(12),a(0)),u=function(t){var e=t.tabsAll,a=t.selectedTabId,n=t.onSelectedTabId;return Object(r.jsx)("div",{className:"tabs app__tabs",children:e.map((function(t){return Object(r.jsx)("button",{type:"button",className:t.id===a?"tabs__tab--active":"tabs__tab",onClick:function(){t.id!==a&&n(t)},children:t.title},t.id)}))})},j=(a(14),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),p=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={selectedTabId:j[0].id},t.onSelectedTabId=function(e){t.setState({selectedTabId:e.id})},t}return Object(i.a)(a,[{key:"render",value:function(){var t=this.state.selectedTabId,e=j.findIndex((function(e){return e.id===t}));return Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)("h1",{className:"app__title",children:"Selected tab is ".concat(t)}),Object(r.jsxs)("div",{className:"app__tabs",children:[Object(r.jsx)(u,{selectedTabId:t,tabsAll:j,onSelectedTabId:this.onSelectedTabId}),Object(r.jsx)("div",{className:"app__content",children:j[e].content})]})]})}}]),a}(o.a.Component),h=p;c.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1e704129.chunk.js.map