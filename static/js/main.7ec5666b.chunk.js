(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{28:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(17),o=n.n(r),i=(n(28),n(8)),s=n(4),l=n(18),u=n.n(l),j=n.p+"static/media/default.2e01288c.jpeg",b=n(1),d=function(e){var t=e.src,n=e.dataUrl,c=e.alt,a=e.onClick;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("img",{src:t,alt:c,"data-url":n,className:"ImageGalleryItem-image",onClick:function(){return a(n)}})})};d.defaultProps={alt:"\u0424\u043e\u0442\u043e",webformatURL:j,largeImageURL:j};var h=d,m=function(e){var t=e.images,n=e.onClick;return Object(b.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(b.jsx)("li",{className:"ImageGalleryItem",children:Object(b.jsx)(h,{src:e.webformatURL,alt:e.tags,onClick:n,dataUrl:e.largeImageURL})},e.id)}))})},f=function(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],o=a[1];return Object(b.jsx)("header",{className:"Searchbar",children:Object(b.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),t(r),o("")},children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(b.jsx)("input",{className:"SearchForm-input",type:"text",value:r,onChange:function(e){o(e.currentTarget.value)},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},O=n(19),p=n(20),g=n(23),v=n(22),x=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(O.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(b.jsx)("div",{className:"Modal",children:this.props.children})})}}]),n}(c.Component),y=function(e){var t=e.onClick;return Object(b.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})},k=n(21),w=n.n(k),S=function(e){var t=e.searchQuery,n=void 0===t?"":t,c=e.currentPage,a=void 0===c?1:c;return w.a.get("".concat("https://pixabay.com/api/","?key=").concat("20391200-b9e8acd71c8c6c300b0440642","&q=").concat(n,"&image_type=photo&orientation=horizontal&per_page=12&page=").concat(a)).then((function(e){return e.data.hits}))},C=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),l=o[0],j=o[1],d=Object(c.useState)(1),h=Object(s.a)(d,2),O=h[0],p=h[1],g=Object(c.useState)(""),v=Object(s.a)(g,2),k=v[0],w=v[1],C=Object(c.useState)(!1),N=Object(s.a)(C,2),F=N[0],I=N[1],L=Object(c.useState)(!1),U=Object(s.a)(L,2),D=U[0],E=U[1],B=Object(c.useState)(null),R=Object(s.a)(B,2),T=R[0],G=R[1];Object(c.useEffect)((function(){if(l){E(!0),S({searchQuery:l,currentPage:O}).then((function(e){a((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e))})),1!==O&&K()})).catch((function(e){return G(e.message)})).finally((function(){return E(!1)}))}}),[l,O]);var K=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},M=n.length>0&&!D;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(f,{onSubmit:function(e){j(e),w(""),p(1),a([]),I(!1),E(!1),G(null)}}),T&&Object(b.jsxs)("p",{children:["Something went wrong: ",T.message]}),Object(b.jsx)(m,{images:n,onClick:function(e){w(e),I(!0)}}),F&&Object(b.jsx)(x,{onClose:function(){I((function(e){return!e}))},children:Object(b.jsx)("img",{src:k,alt:""})}),D&&Object(b.jsx)(u.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80,className:"Loader"}),M&&Object(b.jsx)(y,{onClick:function(){p((function(e){return e+1}))}})]})};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.7ec5666b.chunk.js.map