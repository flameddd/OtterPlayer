!function(e){function t(t){for(var n,r,o=t[0],u=t[1],l=0,c=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(a&&a(t);c.length;)c.shift()()}function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0},i={0:0};n.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{2:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var i=({2:"route-home"}[e]||e)+".chunk."+{2:"1b81f"}[e]+".css",u=n.p+i,l=document.getElementsByTagName("link"),c=0;c<l.length;c++){var a=(p=l[c]).getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(a===i||a===u))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){var p;if((a=(p=s[c]).getAttribute("data-href"))===i||a===u)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||u,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],f.parentNode.removeChild(f),r(i)},f.href=u,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=u);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=function(e){return n.p+""+({2:"route-home"}[e]||e)+".chunk."+{2:"c499b"}[e]+".js"}(e);var a=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",a.name="ChunkLoadError",a.type=r,a.request=o,n[1](a)}i[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/OtterPlayer/",n.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var a=l;n(n.s="mdyV")}({"3br2":function(e,t,n){"use strict";var r=n("hosL");t.a=function(e){function t(){var t,n,o=this;r.Component.call(this),this.componentWillMount=function(){t=o.base=o.nextBase||o.__b,e((function(e){o.setState({child:e.default||e})}))},this.shouldComponentUpdate=function(e,o){return n=(o=void 0===o.child)&&void 0===n&&t?3===t.nodeType?t.data:Object(r.h)(t.nodeName,{dangerouslySetInnerHTML:{__html:t.innerHTML}}):"",!o},this.render=function(e,t){return t.child?Object(r.h)(t.child,e):n}}return(t.prototype=new r.Component).constructor=t,t}((function(e){n.e(2).then(function(){e(n("+1Jk"))}.bind(null,n)).catch(n.oe)}))},DYHW:function(e){e.exports=JSON.parse('{"name":"OtterPlayer","short_name":"OtterPlayer","start_url":"/","display":"standalone","orientation":"portrait","background_color":"#fff","theme_color":"#673ab8","icons":[{"src":"./assets/icons/videojsFavicon.png","type":"image/png","sizes":"75x75"},{"src":"./assets/icons/videojsFavicon-192x192.png","type":"image/png","sizes":"192x192"},{"src":"./assets/icons/videojsFavicon-512x512.png","type":"image/png","sizes":"512x512"}]}')},ETxl:function(e){e.exports={app:"app__-4egw"}},GFNa:function(){},QfWi:function(e,t,n){"use strict";n.r(t);n("GFNa");var r=n("ugae");t.default=r.a},"QyV/":function(e,t,n){"use strict";(function(e){var r=n("ySiU"),o=n.n(r);t.a=function(t){var n=t.name,r=void 0===n?"":n,i=t.onInput,u=t.onInputSubTitle;return e("header",{class:o.a.header},e("h1",null,"OtterPlayer"),e("label",{for:"video",class:"btn"},"Select video"),e("input",{type:"file",id:"video",accept:"video/mp4,video/x-m4v,video/*,audio/*",style:{visibility:"hidden",width:"0px"},onchange:i}),e("label",{for:"subTitle",class:"btn"},"subtitle"),e("input",{type:"file",id:"subTitle",accept:".vtt,.srt",style:{visibility:"hidden",width:"0px"},onchange:u}),e("title",{class:o.a.title},r),e("nav",null,e("a",{href:"https://github.com/flameddd/OtterPlayer",target:"_blank",rel:"noopener noreferrer"},"about")))}}).call(this,n("hosL").h)},Y3FI:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function i(e,t){return e.index=t,e.rank=function(e){return e.props.default?0:(t=e.props.path,u(t).map(l).join(""));var t}(e),e.props}function u(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function l(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}function c(){var e;return""+((e=v&&v.location?v.location:v&&v.getCurrentLocation?v.getCurrentLocation():"undefined"!=typeof location?location:b).pathname||"")+(e.search||"")}function a(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=y.length;t--;)if(y[t].canRoute(e))return!0;return!1}(e)&&function(e,t){void 0===t&&(t="push"),v&&v[t]?v[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}(e,t?"replace":"push"),s(e)}function s(e){for(var t=!1,n=0;n<y.length;n++)!0===y[n].routeTo(e)&&(t=!0);for(var r=g.length;r--;)g[r](e);return t}function p(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return a(t)}}function f(e){if(0==e.button)return p(e.currentTarget||e.target||this),d(e)}function d(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function _(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")){if(t.hasAttribute("native"))return;if(p(t))return d(e)}}while(t=t.parentNode)}}n.d(t,"a",(function(){return w}));var h=n("hosL"),m={},v=null,y=[],g=[],b={},k=!1,w=function(e){function t(t){e.call(this,t),t.history&&(v=t.history),this.state={url:t.url||c()},k||("function"==typeof addEventListener&&(v||addEventListener("popstate",(function(){s(c())})),addEventListener("click",_)),k=!0)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){var t=Object(h.toChildArray)(this.props.children);return this.getMatchingChildren(t,e,!1).length>0},t.prototype.routeTo=function(e){this.setState({url:e});var t=this.canRoute(e);return this.updating||this.forceUpdate(),t},t.prototype.componentWillMount=function(){y.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;v&&(this.unlisten=v.listen((function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))}))),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),y.splice(y.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.filter(i).sort(o).map((function(e){var o=function(e,t,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=e.match(o),l={};if(i&&i[1])for(var c=i[1].split("&"),a=0;a<c.length;a++){var s=c[a].split("=");l[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}e=u(e.replace(o,"")),t=u(t||"");for(var p=Math.max(e.length,t.length),f=0;f<p;f++)if(t[f]&&":"===t[f].charAt(0)){var d=t[f].replace(/(^:|[+*?]+$)/g,""),_=(t[f].match(/[+*?]+$/)||m)[0]||"",h=~_.indexOf("+"),v=~_.indexOf("*"),y=e[f]||"";if(!y&&!v&&(_.indexOf("?")<0||h)){r=!1;break}if(l[d]=decodeURIComponent(y),h||v){l[d]=e.slice(f).map(decodeURIComponent).join("/");break}}else if(t[f]!==e[f]){r=!1;break}return(!0===n.default||!1!==r)&&l}(t,e.props.path,e.props);if(o){if(!1!==n){var i={url:t,matches:o};return r(i,o),delete i.ref,delete i.key,Object(h.cloneElement)(e,i)}return e}})).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,r=e.onChange,o=t.url,i=this.getMatchingChildren(Object(h.toChildArray)(n),o,!0),u=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:u})),u},t}(h.Component);w.subscribers=g,w.getCurrentUrl=c,w.route=a,w.Router=w,w.Route=function(e){return Object(h.createElement)(e.component,e)},w.Link=function(e){return Object(h.createElement)("a",r({onClick:f},e))}},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var o,i,l,c,a=arguments;if(t=r({},t),arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(a[o]);if(null!=n&&(t.children=n),null!=e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===t[i]&&(t[i]=e.defaultProps[i]);return c=t.key,null!=(l=t.ref)&&delete t.ref,null!=c&&delete t.key,u(e,t,c,l)}function u(e,t,n,r){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return L.vnode&&L.vnode(o),o}function l(){return{}}function c(e){return e.children}function a(e,t){this.props=e,this.context=t}function s(e,t){if(null==t)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?s(e):null}function p(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return p(e)}}function f(e){(!e.__d&&(e.__d=!0)&&1===P.push(e)||A!==L.debounceRendering)&&((A=L.debounceRendering)||U)(d)}function d(){var e,t,n,o,i,u,l;for(P.sort((function(e,t){return t.__v.__b-e.__v.__b}));e=P.pop();)e.__d&&(n=void 0,o=void 0,u=(i=(t=e).__v).__e,(l=t.__P)&&(n=[],o=g(l,i,r({},i),t.__n,void 0!==l.ownerSVGElement,null,n,null==u?s(i):u),b(n,i),o!=u&&p(i)))}function _(e,t,n,r,i,u,l,c,a){var p,f,d,_,m,v,y,b=n&&n.__k||D,k=b.length;if(c==I&&(c=null!=u?u[0]:k?s(n,0):null),p=0,t.__k=h(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(d=b[p])||d&&n.key==d.key&&n.type===d.type)b[p]=void 0;else for(f=0;f<k;f++){if((d=b[f])&&n.key==d.key&&n.type===d.type){b[f]=void 0;break}d=null}if(_=g(e,n,d=d||I,r,i,u,l,c,a),(f=n.ref)&&d.ref!=f&&(y||(y=[]),d.ref&&y.push(d.ref,null,n),y.push(f,n.__c||_,n)),null!=_){if(null==v&&(v=_),null!=n.__d)_=n.__d,n.__d=null;else if(u==d||_!=c||null==_.parentNode){e:if(null==c||c.parentNode!==e)e.appendChild(_);else{for(m=c,f=0;(m=m.nextSibling)&&f<k;f+=2)if(m==_)break e;e.insertBefore(_,c)}"option"==t.type&&(e.value="")}c=_.nextSibling,"function"==typeof t.type&&(t.__d=_)}}return p++,n})),t.__e=v,null!=u&&"function"!=typeof t.type)for(p=u.length;p--;)null!=u[p]&&o(u[p]);for(p=k;p--;)null!=b[p]&&C(b[p],b[p]);if(y)for(p=0;p<y.length;p++)w(y[p],y[++p],y[++p])}function h(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)h(e[r],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?u(null,e,null,null):null!=e.__e||null!=e.__c?u(e.type,e.props,e.key,null):e):e);return n}function m(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===W.test(t)?n+"px":null==n?"":n}function v(e,t,n,r,o){var i,u,l,c,a;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(i=e.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(u in r)n&&u in n||m(i,u,"");if(n)for(l in n)r&&n[l]===r[l]||m(i,l,n[l])}else"o"===t[0]&&"n"===t[1]?(c=t!==(t=t.replace(/Capture$/,"")),a=t.toLowerCase(),t=(a in e?a:t).slice(2),n?(r||e.addEventListener(t,y,c),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,y,c)):"list"!==t&&"tagName"!==t&&"form"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n?e.removeAttribute(t):e.setAttribute(t,n))}function y(e){this.l[e.type](L.event?L.event(e):e)}function g(e,t,n,o,i,u,l,s,p){var f,d,m,v,y,g,b,w,C,T,O=t.type;if(void 0!==t.constructor)return null;(f=L.__b)&&f(t);try{e:if("function"==typeof O){if(w=t.props,C=(f=O.contextType)&&o[f.__c],T=f?C?C.props.value:f.__:o,n.__c?b=(d=t.__c=n.__c).__=d.__E:("prototype"in O&&O.prototype.render?t.__c=d=new O(w,T):(t.__c=d=new a(w,T),d.constructor=O,d.render=x),C&&C.sub(d),d.props=w,d.state||(d.state={}),d.context=T,d.__n=o,m=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=O.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=r({},d.__s)),r(d.__s,O.getDerivedStateFromProps(w,d.__s))),v=d.props,y=d.state,m)null==O.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==O.getDerivedStateFromProps&&null==d.__e&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(w,T),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(w,d.__s,T)){for(d.props=w,d.state=d.__s,d.__d=!1,d.__v=t,t.__e=n.__e,t.__k=n.__k,d.__h.length&&l.push(d),f=0;f<t.__k.length;f++)t.__k[f]&&(t.__k[f].__=t);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(w,d.__s,T),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(v,y,g)}))}d.context=T,d.props=w,d.state=d.__s,(f=L.__r)&&f(t),d.__d=!1,d.__v=t,d.__P=e,f=d.render(d.props,d.state,d.context),t.__k=h(null!=f&&f.type==c&&null==f.key?f.props.children:f),null!=d.getChildContext&&(o=r(r({},o),d.getChildContext())),m||null==d.getSnapshotBeforeUpdate||(g=d.getSnapshotBeforeUpdate(v,y)),_(e,t,n,o,i,u,l,s,p),d.base=t.__e,d.__h.length&&l.push(d),b&&(d.__E=d.__=null),d.__e=null}else t.__e=k(n.__e,t,n,o,i,u,l,p);(f=L.diffed)&&f(t)}catch(e){L.__e(e,t,n)}return t.__e}function b(e,t){L.__c&&L.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){L.__e(e,t.__v)}}))}function k(e,t,n,r,o,i,u,l){var c,a,s,p,f,d=n.props,h=t.props;if(o="svg"===t.type||o,null==e&&null!=i)for(c=0;c<i.length;c++)if(null!=(a=i[c])&&(null===t.type?3===a.nodeType:a.localName===t.type)){e=a,i[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(h);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type),i=null}if(null===t.type)null!=i&&(i[i.indexOf(e)]=null),d!==h&&(e.data=h);else if(t!==n){if(null!=i&&(i=D.slice.call(e.childNodes)),s=(d=n.props||I).dangerouslySetInnerHTML,p=h.dangerouslySetInnerHTML,!l){if(d===I)for(d={},f=0;f<e.attributes.length;f++)d[e.attributes[f].name]=e.attributes[f].value;(p||s)&&(p&&s&&p.__html==s.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,r,o){var i;for(i in n)i in t||v(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"value"===i||"checked"===i||n[i]===t[i]||v(e,i,t[i],n[i],r)})(e,h,d,o,l),t.__k=t.props.children,p||_(e,t,n,r,"foreignObject"!==t.type&&o,i,u,I,l),l||("value"in h&&void 0!==h.value&&h.value!==e.value&&(e.value=null==h.value?"":h.value),"checked"in h&&void 0!==h.checked&&h.checked!==e.checked&&(e.checked=h.checked))}return e}function w(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){L.__e(e,n)}}function C(e,t,n){var r,i,u;if(L.unmount&&L.unmount(e),(r=e.ref)&&w(r,null,t),n||"function"==typeof e.type||(n=null!=(i=e.__e)),e.__e=e.__d=null,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){L.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(u=0;u<r.length;u++)r[u]&&C(r[u],t,n);null!=i&&o(i)}function x(e,t,n){return this.constructor(e,n)}function T(e,t,n){var r,o,u;L.__&&L.__(e,t),o=(r=n===M)?null:n&&n.__k||t.__k,e=i(c,null,[e]),u=[],g(t,(r?t:n||t).__k=e,o||I,I,void 0!==t.ownerSVGElement,n&&!r?[n]:o?null:D.slice.call(t.childNodes),u,n||I,r),b(u,e)}function O(e,t){T(e,t,M)}function S(e,t){return t=r(r({},e.props),t),arguments.length>2&&(t.children=D.slice.call(arguments,2)),u(e.type,t,t.key||e.key,t.ref||e.ref)}function E(e){var t={},n={__c:"__cC"+N++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return t[n.__c]=o,t},this.shouldComponentUpdate=function(t){e.value!==t.value&&r.some((function(e){e.context=t.value,f(e)}))},this.sub=function(e){r.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n}n.r(t),n.d(t,"render",(function(){return T})),n.d(t,"hydrate",(function(){return O})),n.d(t,"createElement",(function(){return i})),n.d(t,"h",(function(){return i})),n.d(t,"Fragment",(function(){return c})),n.d(t,"createRef",(function(){return l})),n.d(t,"isValidElement",(function(){return j})),n.d(t,"Component",(function(){return a})),n.d(t,"cloneElement",(function(){return S})),n.d(t,"createContext",(function(){return E})),n.d(t,"toChildArray",(function(){return h})),n.d(t,"_unmount",(function(){return C})),n.d(t,"options",(function(){return L}));var L,j,P,U,A,M,N,I={},D=[],W=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;L={__e:function(e,t){for(var n;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError)n.setState(n.constructor.getDerivedStateFromError(e));else{if(null==n.componentDidCatch)continue;n.componentDidCatch(e)}return f(n.__E=n)}catch(t){e=t}throw e}},j=function(e){return null!=e&&void 0===e.constructor},a.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&r(n,e),null!=e&&this.__v&&(this.__e=!1,t&&this.__h.push(t),f(this))},a.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},a.prototype.render=c,P=[],U="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,M=I,N=0},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL"),o=function(e){return e&&e.default?e.default:e};if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw.js"),"function"==typeof o(n("QfWi"))){var i=document.body.firstElementChild;0,function(){var e=o(n("QfWi")),t={},u=document.querySelector('[type="__PREACT_CLI_DATA__"]');u&&(t=JSON.parse(u.innerHTML).preRenderData);var l={preRenderData:t};i=Object(r.render)(Object(r.h)(e,{CLI_DATA:l}),document.body,i)}()}},ugae:function(e,t,n){"use strict";(function(e){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return h}));var o=n("hosL"),i=n("Y3FI"),u=n("ETxl"),l=n.n(u),c=n("QyV/"),a=n("DYHW"),s=n("3br2"),p="";p="/OtterPlayer";var f=function(e){var t=e.target;if("VIDEO"!==t.tagName||"vjs-tech"!==t.className){var n=document.getElementsByClassName("vjs-tech")[0];if(n.duration){if(75!==e.which&&32!==e.which||(n.paused?n.play():n.pause()),76===e.which||39===e.which){var r=Math.floor(n.duration-n.currentTime);n.currentTime=r>15?n.currentTime+15:n.currentTime+r}74!==e.which&&37!==e.which||(n.currentTime=Math.floor(n.currentTime)>15?n.currentTime-15:n.currentTime-Math.floor(n.currentTime)),38===e.which&&n.volume<1&&(n.volume=(10*n.volume+1)/10),40===e.which&&n.volume>0&&(n.volume=(10*n.volume-1)/10)}}},d=function(e){document.getElementById("subtitles").src=e},_=function(){document.getElementById("subtitles").src=""},h=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state={objectURL:"",name:"",type:""},e.handleRoute=function(t){e.currentUrl=t.url},e.onInput=function(t){var n=t.target.files[0],r=n.name,o=n.type,i=URL.createObjectURL(t.target.files[0]);e.setState({objectURL:i,type:o,name:r}),_()},e.onInputSubTitle=function(e){d(URL.createObjectURL(e.target.files[0]))},e}var o,u;u=t,(o=n).prototype=Object.create(u.prototype),o.prototype.constructor=o,o.__proto__=u;var h=n.prototype;return h.componentDidMount=function(){window.addEventListener("keyup",f);var e=document.createElement("script"),t=document.createElement("noscript");e.innerHTML="(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-WG3W59C');",t.innerHTML='<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WG3W59C"\nheight="0" width="0" style="display:none;visibility:hidden"></iframe>',document.head.appendChild(e),document.body.appendChild(t);var n=document.createElement("link");n.rel="apple-touch-icon",n.sizes="75x75",n.href=a.icons[0].src,document.head.appendChild(n)},h.componentWillUnmount=function(){window.removeEventListener("keyup",f)},h.render=function(){return e("div",{id:"app",class:l.a.app},e(c.a,{name:this.state.name,onInput:this.onInput,onInputSubTitle:this.onInputSubTitle}),e(i.a,{onChange:this.handleRoute},e(s.a,r({path:p+"/"},this.state))))},n}(o.Component)}).call(this,n("hosL").h)},ySiU:function(e){e.exports={header:"header__3QGkI",active:"active__3gItZ"}}});
//# sourceMappingURL=bundle.acebc.js.map