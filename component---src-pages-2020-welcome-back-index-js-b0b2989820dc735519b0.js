(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),o=r(a("VbXa")),l=r(a("8OQS")),s=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),m=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=N([].concat(t.fluid))),t.fixed&&(t.fixed=N([].concat(t.fixed))),t},u=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(u);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=m(e),a=f(t);return g[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function N(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function C(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+d+o+l+a+r+t+i+n+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},_=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,l=d.default.createElement(z,(0,s.default)({ref:t,src:a},i,{ariaHidden:o}));return r.length>1?d.default.createElement("picture",null,n(r),l):l})),z=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,c=e.onError,m=e.loading,u=e.draggable,f=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,s.default)({"aria-hidden":f,sizes:a,srcSet:r,src:n},p,{onLoad:o,onError:c,ref:t,loading:m,draggable:u,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var B=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=m(e),(a=f(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=m(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,l=void 0===o?{}:o,c=e.placeholderStyle,u=void 0===c?{}:c,f=e.placeholderClassName,g=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,E=e.itemProp,N=e.loading,C=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,B=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,s.default)({opacity:I?1:0,transition:B?"opacity "+b+"ms":"none"},l),L="boolean"==typeof y?"lightgray":y,R={transitionDelay:b+"ms"},F=(0,s.default)({opacity:this.state.imgLoaded?0:1},B&&R,l,u),P={title:t,alt:this.state.isVisible?"":a,style:F,className:f,itemProp:E};if(g){var A=g,O=p(g);return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:O.maxWidth?O.maxWidth+"px":null,maxHeight:O.maxHeight?O.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),L&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},B&&R)}),O.base64&&d.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:O.base64,spreadProps:P,imageVariants:A,generateSources:x}),O.tracedSVG&&d.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:O.tracedSVG,spreadProps:P,imageVariants:A,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,w(A),d.default.createElement(z,{alt:a,title:t,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:N,draggable:C})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,s.default)({alt:a,title:t,loading:N},O,{imageVariants:A}))}}))}if(h){var D=h,W=p(h),q=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},i);return"inherit"===i.display&&delete q.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},L&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:L,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},B&&R)}),W.base64&&d.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:P,imageVariants:D,generateSources:x}),W.tracedSVG&&d.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:P,imageVariants:D,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,w(D),d.default.createElement(z,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:N,draggable:C})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,s.default)({alt:a,title:t,loading:N},W,{imageVariants:D}))}}))}return null},t}(d.default.Component);B.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function R(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}B.propTypes={resolutions:T,sizes:L,fixed:R(c.default.oneOfType([T,c.default.arrayOf(T)])),fluid:R(c.default.oneOfType([L,c.default.arrayOf(L)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var F=B;t.default=F},Yb3R:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("2UAH"),o=a("vOnD"),l=a("vrFN"),s="\n  font-family: 'Playfair Display', serif;\n  font-weight: 400;\n",d="\n  font-family: 'Karla', sans-serif;\n  font-weight: 400;\n",c="\nfont-family: 'Karla', sans-serif;\nfont-weight: 700;\n",m="\n  font-family: 'Fjalla One', sans-serif;\n  font-weight: 400;\n",u=(o.a.a.withConfig({displayName:"Typograph__StyledLink",componentId:"sc-17lgnry-0"})(["color:#000000 !important;text-decoration:none !important;"]),o.a.text.withConfig({displayName:"Typograph__NavText",componentId:"sc-17lgnry-1"})(["font-size:80%;font-family:'Libre Franklin',sans-serif;color:#283033;transition:0.3s;:hover{color:#B5B4B4;transition:0.3s;}"])),f=(o.a.div.withConfig({displayName:"Typograph__HeadlineText",componentId:"sc-17lgnry-2"})(["margin-top:",";color:",";"," font-size:",";line-height:1.2;"],(function(e){var t=e.topMargin;return void 0===t?"1.5rem":t}),(function(e){var t=e.color;return void 0===t?"#283033":t}),"\n  font-family: 'Playfair Display', serif;\n  font-weight: 700;\n",(function(e){return e.sideArticle?"100%":"150%"})),o.a.div.withConfig({displayName:"Typograph__AbstractText",componentId:"sc-17lgnry-3"})(["margin-top:0.5rem;color:",";"," @media (max-width:768px){","}"],(function(e){var t=e.color;return void 0===t?"#707070":t}),"font-family: 'Georgia', serif;",(function(e){return e.multimedia?"display: none":""})),o.a.div.withConfig({displayName:"Typograph__TimestampText",componentId:"sc-17lgnry-4"})(["margin-top:0.5rem;color:",";font-family:'Roboto',sans-serif;font-size:85%;"],(function(e){var t=e.color;return void 0===t?"#696969":t})),o.a.div.withConfig({displayName:"Typograph__Title",componentId:"sc-17lgnry-5"})(["border-left:12px solid #D12D4A;padding:0rem 1rem;text-align:left;font-size:30px;font-family:'Libre Franklin',sans-serif;font-weight:900;letter-spacing:0px;color:#283033;opacity:1;"]),o.a.div.withConfig({displayName:"Typograph__TagText",componentId:"sc-17lgnry-6"})(["margin-top:",";color:",";font-family:'Roboto',sans-serif;font-size:",";",""],(function(e){var t=e.topMargin;return void 0===t?"0.5rem":t}),(function(e){var t=e.color;return void 0===t?"#B5B4B4":t}),(function(e){var t=e.fontSize;return void 0===t?"100%":t}),(function(e){return e.weightLight?"font-weight: 300;":""})),o.a.div.withConfig({displayName:"Wrapper__ArticleWrapper",componentId:"sc-1xahrw0-0"})(["margin-top:1rem;margin-bottom:2rem;"," img{text-align:center}"],(function(e){return e.centerText?"text-align: center;":""})),o.a.div.withConfig({displayName:"Wrapper__MultimediaArticleWrapper",componentId:"sc-1xahrw0-1"})(["margin-top:1rem;margin-bottom:1rem;margin-left:1rem;margin-right:1rem;position:relative;"]),o.a.nav.withConfig({displayName:"Wrapper__NavbarWrapper",componentId:"sc-1xahrw0-2"})(["font-size:80%;font-family:'Libre Franklin',sans-serif;position:fixed;z-index:1;"]),o.a.img.withConfig({displayName:"Nav__Image",componentId:"sc-1owbcvf-0"})(["max-height:90px;@media (max-width:768px){max-height:30px;}"])),p=o.a.ul.withConfig({displayName:"Nav__LeftUL",componentId:"sc-1owbcvf-1"})(["margin-right:1rem;@media (max-width:768px){margin-right:0;}"]),g=o.a.ul.withConfig({displayName:"Nav__RightUL",componentId:"sc-1owbcvf-2"})(["margin-left:1rem;@media (max-width:768px){margin-left:0;}"]),h=function(){return n.a.createElement("nav",{className:"navbar sticky-top navbar-expand-lg",style:{fontFamily:"Libre Franklin",backgroundColor:"#FFFFFF",boxShadow:"0px 5px 6px #00000029",opacity:1}},n.a.createElement("div",{className:"navbar-collapse w-100 dual-collapse2 order-1 order-md-0 collapse"},n.a.createElement(p,{className:"navbar-nav ml-auto text-center"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement("a",{className:"nav-link",href:"#featured"}," ",n.a.createElement(u,null," Featured "))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#news"}," ",n.a.createElement(u,null," News")," ")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#opinion"}," ",n.a.createElement(u,null," Opinion ")," ")))),n.a.createElement("div",{className:"mx-auto my-2 order-0 order-md-1 position-relative",style:{textAlign:"center"}},n.a.createElement("a",{className:"mx-auto",href:"https://www.thedp.com/"},n.a.createElement(f,{src:"/img/DP-Logo-Full.png",className:"img-fluid"})),n.a.createElement("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":".dual-collapse2","aria-expanded":"false"},n.a.createElement("span",{className:"navbar-toggler-icon"},n.a.createElement("img",{src:"/icons/menu.svg",style:{transform:"translate(0, 0.2rem)"}})))),n.a.createElement("div",{className:"navbar-collapse w-100 dual-collapse2 order-2 order-md-2 collapse"},n.a.createElement(g,{className:"navbar-nav mr-auto text-center"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#34st"}," ",n.a.createElement(u,null," 34th Street ")," ")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#sports"}," ",n.a.createElement(u,null," Sports ")," ")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#utb"}," ",n.a.createElement(u,null," UTB "))))))},y=o.a.h2.withConfig({displayName:"WordWithLine__H2",componentId:"fwns6k-0"})(["  text-align:center;border-bottom:4px solid #283033;line-height:0.1em;margin:3rem 5rem;span{background:#fff;padding:0 10px;}"]),b=function(e){var t=e.word;return n.a.createElement(y,null,n.a.createElement("span",null,t))},v=a("Wbzz"),E=a("9eSz"),w=a.n(E),N=o.a.div.withConfig({displayName:"BracketsText__Brackets",componentId:"sc-16okn8q-0"})(["color:",";font-size:80%;"," background-image:linear-gradient(",",","),linear-gradient(",",","),linear-gradient(",",","),linear-gradient(",",",");background-repeat:no-repeat;background-size:8px 2px;background-position:top left,top right,bottom left,bottom right;border:solid ",";text-align:center;border-width:0 2px;display:inline-block;vertical-align:top;padding:5px 2rem;margin:20px;"],"#707070",d,(function(e){return e.bracketColor}),(function(e){return e.bracketColor}),(function(e){return e.bracketColor}),(function(e){return e.bracketColor}),(function(e){return e.bracketColor}),(function(e){return e.bracketColor}),(function(e){return e.bracketColor}),(function(e){return e.bracketColor}),(function(e){return e.bracketColor})),S=o.a.text.withConfig({displayName:"BracketsText__HereLink",componentId:"sc-16okn8q-1"})(["color:",";",""],(function(e){return e.bracketColor}),c),x=function(e){var t=e.text,a=e.bracketColor;return n.a.createElement(N,{bracketColor:a},t,n.a.createElement("br",null),n.a.createElement("br",null),"Let us know you're interested in joining ",n.a.createElement(S,{bracketColor:a}," here. "))},C=o.a.div.withConfig({displayName:"UTB__Wrapper",componentId:"wwcydr-0"})(["  text-align:center;border-top:2px solid #456CB3;background:#F6F7F7;margin:0 5rem;margin-top:10rem;img{left:40%;background-color:#fff;padding:1rem 2rem;border-top:2px solid ",";border-bottom:2px solid ",";}"],"#456CB3","#456CB3"),I=o.a.div.withConfig({displayName:"UTB__Title",componentId:"wwcydr-1"})(["color:",";font-size:85%;",""],"#707070",d),k=o.a.div.withConfig({displayName:"UTB__Subtitle",componentId:"wwcydr-2"})(["color:",";font-size:110%;",""],"#456CB3",m),_=o.a.div.withConfig({displayName:"UTB__ArticleTag",componentId:"wwcydr-3"})(["margin-top:0.5rem;font-size:120%;color:",";",""],"#456CB3",c),z=o.a.div.withConfig({displayName:"UTB__ArticleHeadline",componentId:"wwcydr-4"})(["margin-top:0.3rem;font-size:150%;color:",";line-height:97%;",""],"#283033",c),B=o.a.div.withConfig({displayName:"UTB__ByLine",componentId:"wwcydr-5"})(["margin-top:1rem;font-size:80%;color:",";",""],"#707070",d),T=o.a.div.withConfig({displayName:"UTB__MoreLink",componentId:"wwcydr-6"})(["font-size:130%;color:",";",""],"#456CB3",c),L=function(){return n.a.createElement("div",{style:{color:"#456CB3",fontSize:"120%"}}," ⟶ ")},R=function(){return n.a.createElement(v.StaticQuery,{query:"3124606504",render:function(e){var t=e.allFile.edges[0].node.childrenUtbJson;return n.a.createElement(C,null,n.a.createElement("img",{src:"/img/utb-logo-with-text.png",height:"110px",style:{transform:"translate(0, -3.5rem)"}}),n.a.createElement(I,null,"Under the Button is the University of Pennsylvania's ",n.a.createElement("i",null,"truly")," independent satire publication"),n.a.createElement(k,null,"Think the Onion, but better (or worse, if you ask the DP)."),n.a.createElement("div",{className:"row",style:{margin:"2rem 0",padding:"0 2rem"}},t.map((function(e){return n.a.createElement("div",{className:"col"},n.a.createElement(w.a,{fluid:e.image.src.childImageSharp.fluid}),n.a.createElement(_,null," ",e.tag," "),n.a.createElement(z,null," ",e.headline," "),n.a.createElement(B,null," ",e.byLine," "),n.a.createElement(L,null))}))),n.a.createElement(T,null," More shenainigans this way "),n.a.createElement("div",{style:{padding:"0 15rem",marginTop:"2rem"}},n.a.createElement(x,{bracketColor:"#456CB3",text:"We publish new articles everyday directly to our website, as well as to Facebook and Twitter. We’re accepting applications now, so if you’re interested in comedy, satire, or just want to subject the rest of campus to your sense of humor, we’re the club for you."})))}})},F=o.a.div.withConfig({displayName:"Street__Wrapper",componentId:"sc-1oqf2zu-0"})(["  text-align:center;border-top:2px solid ",";background:#F6F7F7;margin:0 5rem;margin-top:10rem;.logo{left:40%;background-color:#fff;padding:1rem 2rem;border-top:2px solid ",";border-bottom:2px solid ",";}"],"#3CB4B2","#3CB4B2","#3CB4B2"),P=o.a.div.withConfig({displayName:"Street__Title",componentId:"sc-1oqf2zu-1"})(["color:",";font-size:90%;",""],"#707070",d),A=o.a.div.withConfig({displayName:"Street__Subtitle",componentId:"sc-1oqf2zu-2"})(["color:",";font-size:110%;",""],"#3CB4B2",m),O=o.a.div.withConfig({displayName:"Street__ArticleHeadline",componentId:"sc-1oqf2zu-3"})(["margin-top:0.3rem;font-size:150%;color:",";line-height:97%;",""],"#283033",s),D=o.a.div.withConfig({displayName:"Street__ByLine",componentId:"sc-1oqf2zu-4"})(["margin-top:1rem;font-size:80%;color:",";",""],"#707070",d),W=o.a.div.withConfig({displayName:"Street__PHeader",componentId:"sc-1oqf2zu-5"})(["font-size:120%;color:",";margin-bottom:0.5rem;",""],"#283033",d),q=o.a.div.withConfig({displayName:"Street__PContent",componentId:"sc-1oqf2zu-6"})(["font-size:90%;color:",";",""],"#707070",d),H=[{header:"Life, Interrupted",content:"Coping with the present while longing for the past— when will things be “normal” again?",byline:"BY EVA INGBER"},{header:"Paintru: The Startup That Immortalizes Memories",content:"Paintru is revolutionizing the way to get custom artwork— all the while fostering community in Wharton and beyond.",byline:"BY FERNANDA BRIZUELA"},{header:"A Love Letter to Philadelphia in an Unexpected Place",content:"Why Queer Eye Season 5 is way more than a makeover",byline:"BY DENALI SAGNER"}],U=o.a.div.withConfig({displayName:"Street__MoreLink",componentId:"sc-1oqf2zu-7"})(["font-size:130%;color:",";",""],"#3CB4B2",c),V=function(){return n.a.createElement("div",{style:{color:"#3CB4B2",fontSize:"120%"}}," ⟶ ")},M=function(){return H.map((function(e,t){return n.a.createElement(n.a.Fragment,null,n.a.createElement(W,null," ",e.header," "),n.a.createElement(q,{style:{marginBottom:"1rem"}}," ",e.content," "),n.a.createElement(q,null," ",e.byline," "),t<H.length-1&&n.a.createElement("img",{src:"/img/black-squiggle.png",width:"50px",style:{margin:"3rem 0"}}))}))},j=function(){return n.a.createElement(v.StaticQuery,{query:"3168347874",render:function(e){var t=e.streetApp,a=e.streetCovid,r=e.streetWharton;return n.a.createElement(F,null,n.a.createElement("img",{className:"logo",src:"/img/street-logo-with-text.png",height:"110px",style:{transform:"translate(0, -3.5rem)"}}),n.a.createElement(P,null,"34th Street is the arts and culture maganize of the Daily Pennsylvanian"),n.a.createElement(A,null,"–basically the DP's coller, sexier twin."),n.a.createElement("div",{className:"row",style:{margin:"2rem 0",padding:"0 2rem"}},n.a.createElement("div",{className:"col-3"},n.a.createElement("div",null,n.a.createElement(w.a,{fluid:t.childImageSharp.fluid}),n.a.createElement(O,{style:{marginTop:"2rem"}}," Must Have Apps For An Online Semester "),n.a.createElement(D,null," BY EVA INGBER "),n.a.createElement(V,null)),n.a.createElement("div",{style:{marginTop:"2rem"}},n.a.createElement(w.a,{fluid:a.childImageSharp.fluid}),n.a.createElement(O,{style:{marginTop:"2rem"}}," On the Road Again: Crossing Int'l Borders During the Coronavirus Pandemic "),n.a.createElement(D,null," BY DENALI SAGNER "),n.a.createElement(V,null))),n.a.createElement("div",{className:"col"},n.a.createElement(w.a,{fluid:r.childImageSharp.fluid}),n.a.createElement(O,{style:{marginTop:"4rem"}}," Wharton alum Evan Thomas reconciles faith and identity on his debut album, ‘Foundations’ "),n.a.createElement(D,null," Though Evan Thomas just graduated Penn, he's already in the midst of a new phase of his life: making music. "),n.a.createElement(D,{style:{marginTop:"2rem"}}," BY CHARDONNAY NEEDLER "),n.a.createElement(V,null)),n.a.createElement("div",{className:"col-3",style:{border:"1px solid #3CB4B2",background:"#fff"}},n.a.createElement("div",{style:{padding:"2rem 1.5rem"}},n.a.createElement("img",{src:"/img/must-read-full-text.png",className:"img-fluid",style:{marginBottom:"3rem"}}),n.a.createElement(M,null)))),n.a.createElement(U,null," — More content this way →"),n.a.createElement("div",{style:{padding:"0 15rem",marginTop:"2rem"}},n.a.createElement(x,{bracketColor:"#3CB4B2",text:"Entirely student–run, we update our website daily with student life pieces, humor, current events coverage, food reviews, movie recs, and in–depth features. Street is for witty and media–savvy creators who are in-the-know, on– and off–campus."})))}})},G=o.a.div.withConfig({displayName:"Section__Title",componentId:"fy5csa-0"})(["font-size:150%;margin-top:",";color:",";",""],(function(e){return e.noMarginTop?"0":"1.5rem"}),"#283033",s),Y=o.a.div.withConfig({displayName:"Section__Description",componentId:"fy5csa-1"})(["font-size:100%;margin-top:1.5rem;color:",";",""],"#707070",d),J=o.a.div.withConfig({displayName:"Section__ByLine",componentId:"fy5csa-2"})(["font-size:80%;margin-top:1.5rem;color:#B5B4B4;",""],c),Q=function(e){var t=e.articles;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row",style:{margin:"2rem 0",padding:"0 6rem"}},t.slice(0,2).map((function(e){return n.a.createElement("div",{className:"col-4",style:{borderRight:"1px solid #D8D2D2"}},n.a.createElement(w.a,{fluid:e.image.src.childImageSharp.fluid}),n.a.createElement(G,null," ",e.title," "),n.a.createElement(Y,null," ",e.description," "),n.a.createElement(J,null," ",e.byline.toUpperCase()," "))})),n.a.createElement("div",{className:"col"},t.slice(2).map((function(e,t){return n.a.createElement("div",{className:"row",style:{borderBottom:0===t?"1px solid #D8D2D2":"",marginBottom:"2rem",paddingBottom:"2rem"}},n.a.createElement("div",{className:"col mb-3"},n.a.createElement(G,{noMarginTop:!0}," ",e.title," "),n.a.createElement(J,null," ",e.byline.toUpperCase()," ")),n.a.createElement("div",{className:"col-5"},n.a.createElement(w.a,{fluid:e.image.src.childImageSharp.fluid})))})))))},K=function(){return n.a.createElement(v.StaticQuery,{query:"4168042066",render:function(e){var t=e.allFile.edges[0].node.childrenSportsJson;return n.a.createElement(Q,{articles:t})}})},Z=(a("hpC0"),o.a.div.withConfig({displayName:"welcome-back__Credit",componentId:"sc-1qiv5bg-0"})(["background:#000000;color:#FFFFFF;"," padding:1rem;font-size:80%;margin-top:2rem;text-align:center;"],"\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n")),X=o.a.div.withConfig({displayName:"welcome-back__DesktopAd",componentId:"sc-1qiv5bg-1"})(["display:flex;justify-content:center;margin:20px 0;padding:0;@media(max-width:849px){display:none!important;}"]),$=o.a.div.withConfig({displayName:"welcome-back__MobileAd",componentId:"sc-1qiv5bg-2"})(["display:flex;justify-content:center;margin:20px 0;padding:0;@media(min-width:850px){display:none!important;}"]);t.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{title:"Home"}),n.a.createElement(h,null),n.a.createElement(b,{word:"NEWS"}),n.a.createElement(X,null,n.a.createElement(i.DFPSlotsProvider,{dfpNetworkId:"12234093"},n.a.createElement(i.AdSlot,{adUnit:"DP.com-Leaderboard",sizes:[[728,90]]}))),n.a.createElement($,null,n.a.createElement(i.DFPSlotsProvider,{dfpNetworkId:"12234093"},n.a.createElement(i.AdSlot,{adUnit:"DP.com-mobile-leaderboard",sizes:[[320,50]]}))),n.a.createElement(b,{word:"OPINION"}),n.a.createElement(j,null),n.a.createElement(X,null,n.a.createElement(i.DFPSlotsProvider,{dfpNetworkId:"12234093"},n.a.createElement(i.AdSlot,{adUnit:"DP.com-Leaderboard",sizes:[[728,90]]}))),n.a.createElement($,null,n.a.createElement(i.DFPSlotsProvider,{dfpNetworkId:"12234093"},n.a.createElement(i.AdSlot,{adUnit:"DP.com-mobile-leaderboard",sizes:[[320,50]]}))),n.a.createElement(b,{word:"SPORTS"}),n.a.createElement(K,null),n.a.createElement(R,null),n.a.createElement(Z,null," Made with ",n.a.createElement("span",{role:"img"}," 🎒")," by The Daily Pennsylvanian © 2020. All rights reserved.  "))}},hpC0:function(e,t,a){},vrFN:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("qhky"),o=a("Wbzz");function l(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,s=Object(o.useStaticQuery)("63159454").site,d=t||s.siteMetadata.description;return n.a.createElement(i.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l}}]);
//# sourceMappingURL=component---src-pages-2020-welcome-back-index-js-b0b2989820dc735519b0.js.map