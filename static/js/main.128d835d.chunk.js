(this["webpackJsonpkulpaitpro-frontend"]=this["webpackJsonpkulpaitpro-frontend"]||[]).push([[0],{28:function(e,a,t){e.exports=t(58)},33:function(e,a,t){},34:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),c=t.n(r),o=(t(33),t(34),t(1)),m=t(7),s=t.n(m),i="http://localhost:5000/",u=t(5),d=Object(n.memo)((function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(u.b)();return Object(n.useEffect)((function(){c({type:"UPDATE_LOADER",payload:{header:!0}}),s.a.get("".concat(i,"header")).then((function(e){r(e.data),c({type:"UPDATE_LOADER",payload:{header:!1}})}))}),[c]),l.a.createElement("section",{id:"topbar",className:"d-none d-lg-block"},l.a.createElement("div",{className:"container clearfix"},l.a.createElement("div",{className:"contact-info float-left"},t&&t.map((function(e,a){return l.a.createElement("span",{key:a},"contact"===e.name?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fa fa-envelope-o"}),l.a.createElement("a",{href:"mailto:contact@example.com"},e.src)):l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fa fa-phone"}),e.src))}))),l.a.createElement("div",{className:"social-links float-right"},l.a.createElement("a",{href:"#",className:"twitter"},l.a.createElement("i",{className:"fa fa-twitter"})),l.a.createElement("a",{href:"#",className:"facebook"},l.a.createElement("i",{className:"fa fa-facebook"})),l.a.createElement("a",{href:"#",className:"instagram"},l.a.createElement("i",{className:"fa fa-instagram"})),l.a.createElement("a",{href:"#",className:"google-plus"},l.a.createElement("i",{className:"fa fa-google-plus"})),l.a.createElement("a",{href:"#",className:"linkedin"},l.a.createElement("i",{className:"fa fa-linkedin"})))))})),E=function(e){var a=e.area,t=void 0===a?"":a,r=Object(n.useState)([]),c=Object(o.a)(r,2),m=c[0],d=c[1],E=Object(n.useState)(0),f=Object(o.a)(E,2),p=f[0],g=f[1],b=Object(u.b)();return Object(n.useEffect)((function(){b({type:"UPDATE_LOADER",payload:{header:!1}}),s.a.get("".concat(i,"menu")).then((function(e){d(e.data),b({type:"UPDATE_LOADER",payload:{header:!1}})}))}),[b]),l.a.createElement("nav",{id:"mobile"===t?"mobile-nav":"nav-menu-container"},l.a.createElement("ul",{className:"mobile"===t?"":"nav-menu"},m&&m.map((function(e,a){return l.a.createElement(l.a.Fragment,{key:a},l.a.createElement("li",{className:p===a?"menu-active":void 0,onClick:function(){return function(e){g(e)}(a)}},l.a.createElement("a",{href:"#".concat(e.slug)},e.name)))}))))},f=Object(n.memo)((function(){return l.a.createElement("header",{id:"header"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"logo",className:"pull-left"},l.a.createElement("h1",null,l.a.createElement("a",{href:"#body",className:"scrollto"},"Kulpa",l.a.createElement("span",null,"ItPro")))),l.a.createElement(E,null)))})),p=Object(n.memo)((function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(u.b)();return Object(n.useEffect)((function(){c({type:"UPDATE_LOADER",payload:{banner:!0}}),s.a.get("".concat(i,"baner")).then((function(e){r(e.data),c({type:"UPDATE_LOADER",payload:{banner:!1}})}))}),[c]),l.a.createElement("section",{id:"intro"},l.a.createElement("div",{className:"intro-content"},l.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:t&&t[0]&&t[0].content}}),l.a.createElement("div",null,l.a.createElement("a",{href:"#about",className:"btn-get-started scrollto"},"Zacznij z Nami"),l.a.createElement("a",{href:"#portfolio",className:"btn-projects scrollto"},"Nasze projekty"))),l.a.createElement("div",{id:"intro-carousel",className:"owl-carousel"},l.a.createElement("div",{className:"item",style:{backgroundImage:'url("img/intro-carousel/1.jpg")'}}),l.a.createElement("div",{className:"item",style:{backgroundImage:'url("img/intro-carousel/2.jpg")'}}),l.a.createElement("div",{className:"item",style:{backgroundImage:'url("img/intro-carousel/3.jpg")'}}),l.a.createElement("div",{className:"item",style:{backgroundImage:'url("img/intro-carousel/4.jpg")'}}),l.a.createElement("div",{className:"item",style:{backgroundImage:'url("img/intro-carousel/5.jpg")'}})))})),g=Object(n.memo)((function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(u.b)();return Object(n.useEffect)((function(){c({type:"UPDATE_LOADER",payload:{portfolio:!0}}),s.a.get("".concat(i,"portfolio-gallery")).then((function(e){r(e.data),c({type:"UPDATE_LOADER",payload:{portfolio:!1}})}))}),[c]),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row no-gutters"},t&&t.map((function(e,a){var t=e||{},n=t.attachments,r=void 0===n?[]:n,c=t.description,o=r&&r[0].thumbnails.large.url;return l.a.createElement("div",{key:a,className:"col-lg-3 col-md-4"},l.a.createElement("div",{className:"portfolio-item wow fadeInUp"},l.a.createElement("a",{href:o,className:"portfolio-popup"},l.a.createElement("img",{src:o,alt:"portfolio image"}),l.a.createElement("div",{className:"portfolio-overlay"},l.a.createElement("div",{className:"portfolio-info"},l.a.createElement("h2",{className:"wow fadeInUp"},c))))))}))))})),b=t(26),v=t(27),h=Object(n.memo)((function(){var e=Object(b.a)(),a=e.register,t=e.handleSubmit,r=e.errors,c=e.formState.isValid,m=Object(n.useState)(!1),u=Object(o.a)(m,2),d=u[0],E=u[1],f=Object(n.useState)(!1),p=Object(o.a)(f,2),g=p[0],h=p[1],N=Object(n.useState)(null),j=Object(o.a)(N,2),y=j[0],O=j[1];return l.a.createElement("div",{className:"container",id:"contact-form"},l.a.createElement("div",{className:"form"},l.a.createElement("div",{id:"sendmessage"},"Your message has been sent. Thank you!"),l.a.createElement("form",{role:"form",className:"contactForm",onSubmit:t((function(e){null!==y&&s.a.post("".concat(i,"contactform"),e).then((function(e){E(!0),setTimeout((function(){return E(!1)}),5e3)})).catch((function(e){console.log(e),h(!0),setTimeout((function(){return h(!1)}),5e3)}))}))},l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("input",{ref:a({required:!0}),type:"text",name:"name",className:"form-control",id:"name",placeholder:"Imi\u0119","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"}),l.a.createElement("div",{className:"validation"})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("input",{ref:a({required:!0}),type:"email",className:"form-control",name:"email",id:"email",placeholder:"Email"}),l.a.createElement("div",{className:"validation"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{ref:a({required:!0}),type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Temat","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"}),l.a.createElement("div",{className:"validation"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{ref:a({required:!0}),className:"form-control",name:"message",rows:5,"data-rule":"required","data-msg":"Please write something for us",placeholder:"Wiadomo\u015b\u0107",defaultValue:""}),l.a.createElement("div",{className:"validation"})),r.name&&l.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Pole Imi\u0119 jest wymagane "),r.email&&l.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Pole Email jest wymagane "),r.subject&&l.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Pole Temat jest wymagane "),r.message&&l.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Pole Wiadomo\u015b\u0107 jest wymagane "),d&&l.a.createElement("div",{className:"alert alert-success",role:"alert"},"Wiadomo\u015b\u0107 zosta\u0142a wys\u0142ana"),g&&l.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Przepraszamy.Wiadomo\u015b\u0107 nie zosta\u0142a wys\u0142ana. Spr\xf3buj ponownie p\xf3\u017aniej"),l.a.createElement("div",{className:"text-center"},l.a.createElement(v.a,{onChange:function(e){O(e)},sitekey:"6LfTLP8UAAAAAHHruZcSLWZaNFbBTDjk4fMRl-y1"}),l.a.createElement("button",{style:c&&null!==y?{cursor:"default"}:{cursor:"not-allowed"},type:"submit"},"Send Message")))))})),N=Object(n.memo)((function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(u.b)();return Object(n.useEffect)((function(){c({type:"UPDATE_LOADER",payload:{cms:!0}}),s.a.get("".concat(i,"cms")).then((function(e){r(e.data),c({type:"UPDATE_LOADER",payload:{cms:!1}})}))}),[c]),l.a.createElement("main",{id:"main"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t&&t[0]&&t[0].content}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t&&t[1]&&t[1].content}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t&&t[2]&&t[2].content}}),l.a.createElement("section",{id:"portfolio",className:"wow fadeInUp"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t&&t[3]&&t[3].content}}),l.a.createElement(g,null)),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t&&t[4]&&t[4].content}}),l.a.createElement("section",{id:"contact",className:"wow fadeInUp"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t&&t[5]&&t[5].content}}),l.a.createElement(h,null)))})),j=function(){return l.a.createElement("footer",{id:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"copyright"},"\xa9 Copyright ",l.a.createElement("strong",null,"KulpaItPro"),". All Rights Reserved"),l.a.createElement("div",{className:"credits"},"Design ",l.a.createElement("a",{href:"https://bootstrapmade.com/"},"BootstrapMade"))))};var y=function(){var e=Object(u.c)((function(e){return e.showLoaderReducer.loaders})),a=Object(n.useMemo)((function(){return e&&Object.values(e).includes(!0)}),[e]);return l.a.createElement(l.a.Fragment,null,a&&l.a.createElement("div",{className:"loader"},l.a.createElement("p",{className:"loading-content"},l.a.createElement("img",{src:"/img/preloader.gif"}))),l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement(f,null),l.a.createElement(p,null),l.a.createElement(N,null),l.a.createElement(j,null),l.a.createElement("a",{href:"#",className:"back-to-top"},l.a.createElement("i",{className:"fa fa-chevron-up"})),l.a.createElement(E,{area:"mobile"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=t(9),w=t(12),A={loaders:{banner:!1,cms:!1,header:!1,menu:!1,portfolio:!1}},k=Object(O.b)({showLoaderReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,a=arguments.length>1?arguments[1]:void 0,t=a.payload;switch(a.type){case"UPDATE_LOADER":return Object(w.a)(Object(w.a)({},e),{},{loaders:Object(w.a)(Object(w.a)({},e.loaders),t)});default:return e}}}),T=Object(O.c)(k);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u.a,{store:T},l.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.128d835d.chunk.js.map