(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{25:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(8),o=a.n(c),s=(a(25),a(10)),i=a(4),l=a(5),u=a(7),h=a(6),d=a(19),m=a.n(d),g=a.p+"static/media/default.2e01288c.jpeg",j=a(0),b=function(e){var t=e.src,a=e.dataUrl,n=e.alt;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("img",{src:t,alt:n,"data-url":a,className:"ImageGalleryItem-image"})})};b.defaultProps={alt:"\u0424\u043e\u0442\u043e",webformatURL:g,largeImageURL:g};var p=b,f=function(e){var t=e.images,a=e.onClick;return Object(j.jsx)("ul",{className:"ImageGallery",onClick:a,children:t.map((function(e){return Object(j.jsx)("li",{className:"ImageGalleryItem",children:Object(j.jsx)(p,{src:e.webformatURL,alt:e.tags,dataUrl:e.largeImageURL})},e.id)}))})},y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{className:"SearchForm-input",type:"text",value:this.state.query,onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),O=document.querySelector("#modal-root"),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(j.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(j.jsx)("div",{className:"Modal",children:this.props.children})}),O)}}]),a}(n.Component),w=function(e){var t=e.onClick;return Object(j.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})},x=a(20),S=a.n(x),k=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n;return S.a.get("".concat("https://pixabay.com/api/","?key=").concat("20391200-b9e8acd71c8c6c300b0440642","&q=").concat(a,"&image_type=photo&orientation=horizontal&per_page=12&page=").concat(r)).then((function(e){return e.data.hits}))},C=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,searchQuery:"",isLoading:!1,error:null,modalImgUrl:"",showModal:!1},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,images:[],isLoading:!1,error:null})},e.fetchImages=function(){var t=e.state,a=t.currentPage,n={searchQuery:t.searchQuery,currentPage:a};e.setState({isLoading:!0}),k(n).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),currentPage:e.currentPage+1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.openModal=function(t){e.setState({modalImgUrl:t.target.dataset.url,showModal:!0})},e.closeModal=function(){e.setState({modalImgUrl:"",showModal:!1})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.error,r=e.showModal,c=e.modalImgUrl,o=t.length>0&&!a;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(y,{onSubmit:this.onChangeQuery}),n&&Object(j.jsxs)("p",{children:["Something went wrong: ",n.message]}),Object(j.jsx)(f,{images:t,onClick:this.openModal}),r&&Object(j.jsx)(v,{onClose:this.closeModal,children:Object(j.jsx)("img",{src:c,alt:""})}),a&&Object(j.jsx)(m.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80,className:"Loader"}),o&&Object(j.jsx)(w,{onClick:this.fetchImages})]})}}]),a}(n.PureComponent);o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.d6b6af55.chunk.js.map