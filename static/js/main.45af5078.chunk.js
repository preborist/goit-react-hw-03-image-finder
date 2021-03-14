(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},48:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(18),o=n.n(c),i=n(4),s=n(5),u=n(7),l=n(6),h=(n(25),n(9)),g=(n(26),n(27),n(0)),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.query;return Object(g.jsx)("header",{className:"Searchbar",children:Object(g.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(g.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(g.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleChange})]})})}}]),n}(a.Component),m=(n(29),function(e){var t=e.id,n=e.webformatURL,a=e.toggleModal,r=e.setCurrentLargeImageURL;return Object(g.jsx)("li",{index:t,className:"ImageGalleryItem",onClick:function(){a(),r(t)},children:Object(g.jsx)("img",{src:n,alt:"",className:"ImageGalleryItem-image"})})}),j=n(19),b=n.n(j),f=function(e){var t=e.searchQuery,n=void 0===t?"":t,a=e.currentPage,r=void 0===a?1:a,c=e.pageSize,o=void 0===c?12:c;return b.a.get("https://pixabay.com/api/?q=".concat(n,"&page=").concat(r,"\n          &key=").concat("12798852-7489cd1b3c3d687fea55036ed","&image_type=photo&orientation=horizontal&per_page=").concat(o)).then((function(e){return e.data.hits}))},p=(n(48),function(e){var t=e.onClick;return Object(g.jsx)("button",{onClick:function(){t()},type:"button",className:"Button",children:"Load more"})}),y=n(20),O=n.n(y),v=(n(69),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"Overlay",onClick:this.props.onClose,children:Object(g.jsx)("div",{className:"Modal",children:Object(g.jsx)("img",{src:this.props.largeImageURL,alt:""})})})}}]),n}(a.Component)),L=(n(70),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,searchQuery:"",isLoading:!1,error:null,showModal:!1,currentLargeImageURL:""},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.setCurrentLargeImageURL=function(t){var n=e.state.images.find((function(e){return e.id===t}));e.setState({currentLargeImageURL:n.largeImageURL})},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,images:[],error:null})},e.fetchImages=function(){var t=e.state,n=t.searchQuery,a=t.currentPage,r={searchQuery:n,currentPage:a};e.setState({isLoading:!0}),f(r).then((function(t){e.setState((function(e){return{images:[].concat(Object(h.a)(e.images),Object(h.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({isLoading:!1}),a>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this,t=this.state,n=t.images,a=t.isLoading,r=t.error,c=t.showModal,o=t.currentLargeImageURL,i=n.length>0&&!a;return Object(g.jsxs)(g.Fragment,{children:[c&&Object(g.jsx)(v,{onClose:this.toggleModal,largeImageURL:o}),Object(g.jsx)(d,{onSubmit:this.onChangeQuery}),Object(g.jsx)("ul",{className:"ImageGallery",children:n.map((function(t){var n=t.id,a=t.webformatURL;return Object(g.jsx)(m,{id:n,webformatURL:a,toggleModal:e.toggleModal,setCurrentLargeImageURL:e.setCurrentLargeImageURL},n)}))}),r&&Object(g.jsx)("h2",{children:"\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"}),a&&Object(g.jsx)(O.a,{type:"Puff",color:"#00BFFF",height:100,width:100}),i&&Object(g.jsx)(p,{onClick:this.fetchImages})]})}}]),n}(a.Component)),w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(L,{})})}}]),n}(a.Component);o.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.45af5078.chunk.js.map