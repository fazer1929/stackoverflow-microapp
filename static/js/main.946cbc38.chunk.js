(this["webpackJsonpstackoverflow-microapp"]=this["webpackJsonpstackoverflow-microapp"]||[]).push([[0],{1:function(e,a,t){e.exports={mainContent:"ModalContent_mainContent__1PDew",modalImage:"ModalContent_modalImage__DR_Dm",userName:"ModalContent_userName__JHLPX",buttonLink:"ModalContent_buttonLink__K6eVm",buttonClose:"ModalContent_buttonClose__1FAqP",modalContent:"ModalContent_modalContent__2KFeb",modalTitle:"ModalContent_modalTitle__3nLcJ",button:"ModalContent_button__LXT12",cross:"ModalContent_cross__1MYbm",tags:"ModalContent_tags__xYPIq"}},15:function(e,a,t){e.exports={mainContainer:"Home_mainContainer__2I6GP"}},17:function(e,a,t){e.exports=t(36)},22:function(e,a,t){},23:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},24:function(e,a,t){},3:function(e,a,t){e.exports={cardContainer:"Card_cardContainer__3wFPr",cardAvatar:"Card_cardAvatar__34O3D",cardAuthor:"Card_cardAuthor__2FmNf",cardAvatarImage:"Card_cardAvatarImage__3hdEn",cardContent:"Card_cardContent__ZBVFg",cardHeading:"Card_cardHeading__3oP5a",cardContentTags:"Card_cardContentTags__28vG7",tag:"Card_tag__2p0wV"}},36:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(9),c=t.n(r),s=(t(22),t(23),t(24),t(2)),l=t(3),i=t.n(l);var m=function(e){var a=e.lastQuestion,t=e.id,r=(e.link,e.title),c=e.tags,l=e.ownerName,m=e.profileImage,d=Object(n.useState)(1),u=Object(s.a)(d,2);return u[0],u[1],o.a.createElement("div",{onClick:function(){return a(t)},className:i.a.cardContainer},o.a.createElement("div",{className:i.a.cardAvatar},o.a.createElement("img",{className:i.a.cardAvatarImage,src:m,alt:"User Avatar"}),o.a.createElement("div",{className:i.a.cardAuthor},l," ")),o.a.createElement("div",{className:i.a.cardContent},o.a.createElement("h3",{className:i.a.cardHeading},"Q. ",r),o.a.createElement("div",{className:i.a.cardContentTags},null===c||void 0===c?void 0:c.map((function(e,a){return o.a.createElement("span",{key:a,className:i.a.tag},e)})))))},d=t(15),u=t.n(d),_=t(4),g=Object(n.createContext)(),v=function(e){var a=e.reducer,t=e.initialState,r=e.children;return o.a.createElement(g.Provider,{value:Object(n.useReducer)(a,t)},r)},C=function(){return Object(n.useContext)(g)};var b=t(16),E=t.n(b),f=t(1),p=t.n(f);var N=function(e){var a,t=e.itemId,n=e.onClose,r=C(),c=Object(s.a)(r,2),l=c[0].items,i=(c[1],l[t]);return o.a.createElement("div",{className:p.a.container},o.a.createElement("div",{className:p.a.cross,onClick:n},"X"),o.a.createElement("div",{className:p.a.mainContent},o.a.createElement("div",{className:p.a.modalHeader},o.a.createElement("img",{className:p.a.modalImage,src:i.owner.profile_image}),o.a.createElement("div",{className:p.a.userName},i.owner.display_name)),o.a.createElement("div",{className:p.a.modalContent},o.a.createElement("div",{className:p.a.modalTitle},"Q. ",i.title),o.a.createElement("div",{className:p.a.tags},o.a.createElement("span",{className:p.a.bodyTags},"Tags : "),null===(a=i.tags)||void 0===a?void 0:a.map((function(e,a){return o.a.createElement("span",{key:a,className:p.a.tag},e)}))),o.a.createElement("div",{className:p.a.tags}," ",o.a.createElement("span",{className:p.a.bodyTags},"Answer Count : ")," ",i.answer_count),o.a.createElement("div",{className:p.a.tags},o.a.createElement("span",{className:p.a.bodyTags},"View Count : "),i.view_count)),o.a.createElement("a",{href:i.link,target:"_blank"}," ",o.a.createElement("button",{className:p.a.buttonLink},"See the question")," "),o.a.createElement("button",{className:p.a.buttonClose,onClick:n},"Close")))};var w=function(){var e=C(),a=Object(s.a)(e,2),t=a[0],r=t.items,c=t.pageNumber,l=a[1],i=Object(n.useState)(!1),d=Object(s.a)(i,2),g=d[0],v=d[1],b=Object(n.useState)(0),f=Object(s.a)(b,2),p=f[0],w=f[1],h=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],o=a[1],r=C(),c=Object(s.a)(r,2),l=c[0],i=l.items,m=l.pageNumber,d=c[1];return Object(n.useEffect)((function(){o(!0),fetch("https://api.stackexchange.com/2.2/questions?page=".concat(m,"&pagesize=30&order=desc&sort=hot&site=stackoverflow")).then((function(e){return e.json()})).then((function(e){d({type:"ADD_ITEMS",item:[].concat(Object(_.a)(i),Object(_.a)(e.items))}),o(!1)}))}),[m]),{loading:t}}().loading;Object(n.useEffect)((function(){document.addEventListener("scroll",O)}),[]);var O=function(){console.log(Math.floor(document.body.scrollHeight-window.scrollY),"HI   "+window.innerHeight),Math.floor(document.body.scrollHeight-window.scrollY)===window.innerHeight&&l({type:"CHANGE_PAGE",page:c+1})},j=function(){v(!1)},k=function(e){v(!0),w(e)};return o.a.createElement("div",{className:u.a.mainContainer},null===r||void 0===r?void 0:r.map((function(e,a){return o.a.createElement(m,{id:a,lastQuestion:k,key:a,link:e.link,title:e.title,tags:e.tags,ownerName:e.owner.display_name,profileImage:e.owner.profile_image})})),o.a.createElement(E.a,{isOpen:g,onRequestClose:j},o.a.createElement(N,{itemId:p,onClose:j})),h?o.a.createElement("h3",null,"Loading...."):"")};var h=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=t(6),j=function(e,a){switch(a.type){case"ADD_ITEMS":return Object(O.a)(Object(O.a)({},e),{},{items:[].concat(Object(_.a)(e.items),Object(_.a)(a.item))});case"CHNAGE_PAGE":return Object(O.a)(Object(O.a)({},e),{},{pageNumber:a.page});default:return e}};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,{reducer:j,initialState:{items:[],pageNumber:1}},o.a.createElement(h,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.946cbc38.chunk.js.map