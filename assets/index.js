import{r as I,a as Pn,b as X}from"./vendor.js";import{H as In,u as Rn,R as Tn,a as Fe}from"./router.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var Gt={exports:{}},Ie={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var On=I,$n=Symbol.for("react.element"),Nn=Symbol.for("react.fragment"),_n=Object.prototype.hasOwnProperty,Dn=On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ln={key:!0,ref:!0,__self:!0,__source:!0};function Vt(e,t,n){var r,o={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)_n.call(t,r)&&!Ln.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:$n,type:e,key:a,ref:s,props:o,_owner:Dn.current}}Ie.Fragment=Nn;Ie.jsx=Vt;Ie.jsxs=Vt;Gt.exports=Ie;var i=Gt.exports,Je={},ft=Pn;Je.createRoot=ft.createRoot,Je.hydrateRoot=ft.hydrateRoot;var T=function(){return T=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},T.apply(this,arguments)};function Ae(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var v="-ms-",ae="-moz-",x="-webkit-",Xt="comm",Re="rule",ct="decl",Mn="@import",Kt="@keyframes",Fn="@layer",Zt=Math.abs,lt=String.fromCharCode,et=Object.assign;function Bn(e,t){return P(e,0)^45?(((t<<2^P(e,0))<<2^P(e,1))<<2^P(e,2))<<2^P(e,3):0}function Qt(e){return e.trim()}function L(e,t){return(e=t.exec(e))?e[0]:e}function h(e,t,n){return e.replace(t,n)}function we(e,t,n){return e.indexOf(t,n)}function P(e,t){return e.charCodeAt(t)|0}function K(e,t,n){return e.slice(t,n)}function _(e){return e.length}function Jt(e){return e.length}function oe(e,t){return t.push(e),e}function Yn(e,t){return e.map(t).join("")}function mt(e,t){return e.filter(function(n){return!L(n,t)})}var Te=1,Z=1,en=0,$=0,z=0,te="";function Oe(e,t,n,r,o,a,s,c){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:Te,column:Z,length:s,return:"",siblings:c}}function B(e,t){return et(Oe("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function G(e){for(;e.root;)e=B(e.root,{children:[e]});oe(e,e.siblings)}function Wn(){return z}function Hn(){return z=$>0?P(te,--$):0,Z--,z===10&&(Z=1,Te--),z}function N(){return z=$<en?P(te,$++):0,Z++,z===10&&(Z=1,Te++),z}function H(){return P(te,$)}function ke(){return $}function $e(e,t){return K(te,e,t)}function tt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Un(e){return Te=Z=1,en=_(te=e),$=0,[]}function qn(e){return te="",e}function Be(e){return Qt($e($-1,nt(e===91?e+2:e===40?e+1:e)))}function Gn(e){for(;(z=H())&&z<33;)N();return tt(e)>2||tt(z)>3?"":" "}function Vn(e,t){for(;--t&&N()&&!(z<48||z>102||z>57&&z<65||z>70&&z<97););return $e(e,ke()+(t<6&&H()==32&&N()==32))}function nt(e){for(;N();)switch(z){case e:return $;case 34:case 39:e!==34&&e!==39&&nt(z);break;case 40:e===41&&nt(e);break;case 92:N();break}return $}function Xn(e,t){for(;N()&&e+z!==47+10;)if(e+z===42+42&&H()===47)break;return"/*"+$e(t,$-1)+"*"+lt(e===47?e:N())}function Kn(e){for(;!tt(H());)N();return $e(e,$)}function Zn(e){return qn(je("",null,null,null,[""],e=Un(e),0,[0],e))}function je(e,t,n,r,o,a,s,c,p){for(var d=0,u=0,f=s,b=0,m=0,k=0,C=1,O=1,A=1,j=0,w="",S=o,E=a,y=r,g=w;O;)switch(k=j,j=N()){case 40:if(k!=108&&P(g,f-1)==58){we(g+=h(Be(j),"&","&\f"),"&\f",Zt(d?c[d-1]:0))!=-1&&(A=-1);break}case 34:case 39:case 91:g+=Be(j);break;case 9:case 10:case 13:case 32:g+=Gn(k);break;case 92:g+=Vn(ke()-1,7);continue;case 47:switch(H()){case 42:case 47:oe(Qn(Xn(N(),ke()),t,n,p),p);break;default:g+="/"}break;case 123*C:c[d++]=_(g)*A;case 125*C:case 59:case 0:switch(j){case 0:case 125:O=0;case 59+u:A==-1&&(g=h(g,/\f/g,"")),m>0&&_(g)-f&&oe(m>32?bt(g+";",r,n,f-1,p):bt(h(g," ","")+";",r,n,f-2,p),p);break;case 59:g+=";";default:if(oe(y=xt(g,t,n,d,u,o,c,w,S=[],E=[],f,a),a),j===123)if(u===0)je(g,t,y,y,S,a,f,c,E);else switch(b===99&&P(g,3)===110?100:b){case 100:case 108:case 109:case 115:je(e,y,y,r&&oe(xt(e,y,y,0,0,o,c,w,o,S=[],f,E),E),o,E,f,c,r?S:E);break;default:je(g,y,y,y,[""],E,0,c,E)}}d=u=m=0,C=A=1,w=g="",f=s;break;case 58:f=1+_(g),m=k;default:if(C<1){if(j==123)--C;else if(j==125&&C++==0&&Hn()==125)continue}switch(g+=lt(j),j*C){case 38:A=u>0?1:(g+="\f",-1);break;case 44:c[d++]=(_(g)-1)*A,A=1;break;case 64:H()===45&&(g+=Be(N())),b=H(),u=f=_(w=g+=Kn(ke())),j++;break;case 45:k===45&&_(g)==2&&(C=0)}}return a}function xt(e,t,n,r,o,a,s,c,p,d,u,f){for(var b=o-1,m=o===0?a:[""],k=Jt(m),C=0,O=0,A=0;C<r;++C)for(var j=0,w=K(e,b+1,b=Zt(O=s[C])),S=e;j<k;++j)(S=Qt(O>0?m[j]+" "+w:h(w,/&\f/g,m[j])))&&(p[A++]=S);return Oe(e,t,n,o===0?Re:c,p,d,u,f)}function Qn(e,t,n,r){return Oe(e,t,n,Xt,lt(Wn()),K(e,2,-2),0,r)}function bt(e,t,n,r,o){return Oe(e,t,n,ct,K(e,0,r),K(e,r+1,-1),r,o)}function tn(e,t,n){switch(Bn(e,t)){case 5103:return x+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return x+e+e;case 4789:return ae+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return x+e+ae+e+v+e+e;case 5936:switch(P(e,t+11)){case 114:return x+e+v+h(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return x+e+v+h(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return x+e+v+h(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return x+e+v+e+e;case 6165:return x+e+v+"flex-"+e+e;case 5187:return x+e+h(e,/(\w+).+(:[^]+)/,x+"box-$1$2"+v+"flex-$1$2")+e;case 5443:return x+e+v+"flex-item-"+h(e,/flex-|-self/g,"")+(L(e,/flex-|baseline/)?"":v+"grid-row-"+h(e,/flex-|-self/g,""))+e;case 4675:return x+e+v+"flex-line-pack"+h(e,/align-content|flex-|-self/g,"")+e;case 5548:return x+e+v+h(e,"shrink","negative")+e;case 5292:return x+e+v+h(e,"basis","preferred-size")+e;case 6060:return x+"box-"+h(e,"-grow","")+x+e+v+h(e,"grow","positive")+e;case 4554:return x+h(e,/([^-])(transform)/g,"$1"+x+"$2")+e;case 6187:return h(h(h(e,/(zoom-|grab)/,x+"$1"),/(image-set)/,x+"$1"),e,"")+e;case 5495:case 3959:return h(e,/(image-set\([^]*)/,x+"$1$`$1");case 4968:return h(h(e,/(.+:)(flex-)?(.*)/,x+"box-pack:$3"+v+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+x+e+e;case 4200:if(!L(e,/flex-|baseline/))return v+"grid-column-align"+K(e,t)+e;break;case 2592:case 3360:return v+h(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,L(r.props,/grid-\w+-end/)})?~we(e+(n=n[t].value),"span",0)?e:v+h(e,"-start","")+e+v+"grid-row-span:"+(~we(n,"span",0)?L(n,/\d+/):+L(n,/\d+/)-+L(e,/\d+/))+";":v+h(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return L(r.props,/grid-\w+-start/)})?e:v+h(h(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return h(e,/(.+)-inline(.+)/,x+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_(e)-1-t>6)switch(P(e,t+1)){case 109:if(P(e,t+4)!==45)break;case 102:return h(e,/(.+:)(.+)-([^]+)/,"$1"+x+"$2-$3$1"+ae+(P(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~we(e,"stretch",0)?tn(h(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return h(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,a,s,c,p,d){return v+o+":"+a+d+(s?v+o+"-span:"+(c?p:+p-+a)+d:"")+e});case 4949:if(P(e,t+6)===121)return h(e,":",":"+x)+e;break;case 6444:switch(P(e,P(e,14)===45?18:11)){case 120:return h(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+x+(P(e,14)===45?"inline-":"")+"box$3$1"+x+"$2$3$1"+v+"$2box$3")+e;case 100:return h(e,":",":"+v)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return h(e,"scroll-","scroll-snap-")+e}return e}function ze(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Jn(e,t,n,r){switch(e.type){case Fn:if(e.children.length)break;case Mn:case ct:return e.return=e.return||e.value;case Xt:return"";case Kt:return e.return=e.value+"{"+ze(e.children,r)+"}";case Re:if(!_(e.value=e.props.join(",")))return""}return _(n=ze(e.children,r))?e.return=e.value+"{"+n+"}":""}function er(e){var t=Jt(e);return function(n,r,o,a){for(var s="",c=0;c<t;c++)s+=e[c](n,r,o,a)||"";return s}}function tr(e){return function(t){t.root||(t=t.return)&&e(t)}}function nr(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ct:e.return=tn(e.value,e.length,n);return;case Kt:return ze([B(e,{value:h(e.value,"@","@"+x)})],r);case Re:if(e.length)return Yn(n=e.props,function(o){switch(L(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":G(B(e,{props:[h(o,/:(read-\w+)/,":"+ae+"$1")]})),G(B(e,{props:[o]})),et(e,{props:mt(n,r)});break;case"::placeholder":G(B(e,{props:[h(o,/:(plac\w+)/,":"+x+"input-$1")]})),G(B(e,{props:[h(o,/:(plac\w+)/,":"+ae+"$1")]})),G(B(e,{props:[h(o,/:(plac\w+)/,v+"input-$1")]})),G(B(e,{props:[o]})),et(e,{props:mt(n,r)});break}return""})}}var rr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Q=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",nn="active",rn="data-styled-version",Ne="6.1.19",dt=`/*!sc*/
`,Ee=typeof window<"u"&&typeof document<"u",ir=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),_e=Object.freeze([]),J=Object.freeze({});function or(e,t,n){return n===void 0&&(n=J),e.theme!==n.theme&&e.theme||t||n.theme}var on=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ar=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,sr=/(^-|-$)/g;function yt(e){return e.replace(ar,"-").replace(sr,"")}var cr=/(a)(d)/gi,ge=52,vt=function(e){return String.fromCharCode(e+(e>25?39:97))};function rt(e){var t,n="";for(t=Math.abs(e);t>ge;t=t/ge|0)n=vt(t%ge)+n;return(vt(t%ge)+n).replace(cr,"$1-$2")}var Ye,an=5381,V=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},sn=function(e){return V(an,e)};function lr(e){return rt(sn(e)>>>0)}function dr(e){return e.displayName||e.name||"Component"}function We(e){return typeof e=="string"&&!0}var cn=typeof Symbol=="function"&&Symbol.for,ln=cn?Symbol.for("react.memo"):60115,pr=cn?Symbol.for("react.forward_ref"):60112,ur={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},hr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gr=((Ye={})[pr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ye[ln]=dn,Ye);function wt(e){return("type"in(t=e)&&t.type.$$typeof)===ln?dn:"$$typeof"in e?gr[e.$$typeof]:ur;var t}var fr=Object.defineProperty,mr=Object.getOwnPropertyNames,kt=Object.getOwnPropertySymbols,xr=Object.getOwnPropertyDescriptor,br=Object.getPrototypeOf,jt=Object.prototype;function pn(e,t,n){if(typeof t!="string"){if(jt){var r=br(t);r&&r!==jt&&pn(e,r,n)}var o=mr(t);kt&&(o=o.concat(kt(t)));for(var a=wt(e),s=wt(t),c=0;c<o.length;++c){var p=o[c];if(!(p in hr||n&&n[p]||s&&p in s||a&&p in a)){var d=xr(t,p);try{fr(e,p,d)}catch{}}}}return e}function ee(e){return typeof e=="function"}function pt(e){return typeof e=="object"&&"styledComponentId"in e}function W(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function St(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function se(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function it(e,t,n){if(n===void 0&&(n=!1),!n&&!se(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=it(e[r],t[r]);else if(se(t))for(var r in t)e[r]=it(e[r],t[r]);return e}function ut(e,t){Object.defineProperty(e,"toString",{value:t})}function ce(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var yr=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,a=o;t>=a;)if((a<<=1)<0)throw ce(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var s=o;s<a;s++)this.groupSizes[s]=0}for(var c=this.indexOfGroup(t+1),p=(s=0,n.length);s<p;s++)this.tag.insertRule(c,n[s])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var a=r;a<o;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),a=o+r,s=o;s<a;s++)n+="".concat(this.tag.getRule(s)).concat(dt);return n},e}(),Se=new Map,Pe=new Map,Ce=1,fe=function(e){if(Se.has(e))return Se.get(e);for(;Pe.has(Ce);)Ce++;var t=Ce++;return Se.set(e,t),Pe.set(t,e),t},vr=function(e,t){Ce=t+1,Se.set(e,t),Pe.set(t,e)},wr="style[".concat(Q,"][").concat(rn,'="').concat(Ne,'"]'),kr=new RegExp("^".concat(Q,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),jr=function(e,t,n){for(var r,o=n.split(","),a=0,s=o.length;a<s;a++)(r=o[a])&&e.registerName(t,r)},Sr=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(dt),o=[],a=0,s=r.length;a<s;a++){var c=r[a].trim();if(c){var p=c.match(kr);if(p){var d=0|parseInt(p[1],10),u=p[2];d!==0&&(vr(u,d),jr(e,u,p[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(c)}}},Ct=function(e){for(var t=document.querySelectorAll(wr),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Q)!==nn&&(Sr(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Cr(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var un=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(c){var p=Array.from(c.querySelectorAll("style[".concat(Q,"]")));return p[p.length-1]}(n),a=o!==void 0?o.nextSibling:null;r.setAttribute(Q,nn),r.setAttribute(rn,Ne);var s=Cr();return s&&r.setAttribute("nonce",s),n.insertBefore(r,a),r},Ar=function(){function e(t){this.element=un(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,a=r.length;o<a;o++){var s=r[o];if(s.ownerNode===n)return s}throw ce(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),zr=function(){function e(t){this.element=un(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Er=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),At=Ee,Pr={isServer:!Ee,useCSSOMInjection:!ir},hn=function(){function e(t,n,r){t===void 0&&(t=J),n===void 0&&(n={});var o=this;this.options=T(T({},Pr),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ee&&At&&(At=!1,Ct(this)),ut(this,function(){return function(a){for(var s=a.getTag(),c=s.length,p="",d=function(f){var b=function(A){return Pe.get(A)}(f);if(b===void 0)return"continue";var m=a.names.get(b),k=s.getGroup(f);if(m===void 0||!m.size||k.length===0)return"continue";var C="".concat(Q,".g").concat(f,'[id="').concat(b,'"]'),O="";m!==void 0&&m.forEach(function(A){A.length>0&&(O+="".concat(A,","))}),p+="".concat(k).concat(C,'{content:"').concat(O,'"}').concat(dt)},u=0;u<c;u++)d(u);return p}(o)})}return e.registerId=function(t){return fe(t)},e.prototype.rehydrate=function(){!this.server&&Ee&&Ct(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(T(T({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Er(o):r?new Ar(o):new zr(o)}(this.options),new yr(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(fe(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(fe(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(fe(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ir=/&/g,Rr=/^\s*\/\/.*$/gm;function gn(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=gn(n.children,t)),n})}function Tr(e){var t,n,r,o=e===void 0?J:e,a=o.options,s=a===void 0?J:a,c=o.plugins,p=c===void 0?_e:c,d=function(b,m,k){return k.startsWith(n)&&k.endsWith(n)&&k.replaceAll(n,"").length>0?".".concat(t):b},u=p.slice();u.push(function(b){b.type===Re&&b.value.includes("&")&&(b.props[0]=b.props[0].replace(Ir,n).replace(r,d))}),s.prefix&&u.push(nr),u.push(Jn);var f=function(b,m,k,C){m===void 0&&(m=""),k===void 0&&(k=""),C===void 0&&(C="&"),t=C,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var O=b.replace(Rr,""),A=Zn(k||m?"".concat(k," ").concat(m," { ").concat(O," }"):O);s.namespace&&(A=gn(A,s.namespace));var j=[];return ze(A,er(u.concat(tr(function(w){return j.push(w)})))),j};return f.hash=p.length?p.reduce(function(b,m){return m.name||ce(15),V(b,m.name)},an).toString():"",f}var Or=new hn,ot=Tr(),fn=X.createContext({shouldForwardProp:void 0,styleSheet:Or,stylis:ot});fn.Consumer;X.createContext(void 0);function zt(){return I.useContext(fn)}var $r=function(){function e(t,n){var r=this;this.inject=function(o,a){a===void 0&&(a=ot);var s=r.name+a.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,a(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ut(this,function(){throw ce(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ot),this.name+t.hash},e}(),Nr=function(e){return e>="A"&&e<="Z"};function Et(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Nr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var mn=function(e){return e==null||e===!1||e===""},xn=function(e){var t,n,r=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!mn(a)&&(Array.isArray(a)&&a.isCss||ee(a)?r.push("".concat(Et(o),":"),a,";"):se(a)?r.push.apply(r,Ae(Ae(["".concat(o," {")],xn(a),!1),["}"],!1)):r.push("".concat(Et(o),": ").concat((t=o,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in rr||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function U(e,t,n,r){if(mn(e))return[];if(pt(e))return[".".concat(e.styledComponentId)];if(ee(e)){if(!ee(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var o=e(t);return U(o,t,n,r)}var a;return e instanceof $r?n?(e.inject(n,r),[e.getName(r)]):[e]:se(e)?xn(e):Array.isArray(e)?Array.prototype.concat.apply(_e,e.map(function(s){return U(s,t,n,r)})):[e.toString()]}function _r(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ee(n)&&!pt(n))return!1}return!0}var Dr=sn(Ne),Lr=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&_r(t),this.componentId=n,this.baseHash=V(Dr,n),this.baseStyle=r,hn.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=W(o,this.staticRulesId);else{var a=St(U(this.rules,t,n,r)),s=rt(V(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,s)){var c=r(a,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,c)}o=W(o,s),this.staticRulesId=s}else{for(var p=V(this.baseHash,r.hash),d="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")d+=f;else if(f){var b=St(U(f,t,n,r));p=V(p,b+u),d+=b}}if(d){var m=rt(p>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(d,".".concat(m),void 0,this.componentId)),o=W(o,m)}}return o},e}(),bn=X.createContext(void 0);bn.Consumer;var He={};function Mr(e,t,n){var r=pt(e),o=e,a=!We(e),s=t.attrs,c=s===void 0?_e:s,p=t.componentId,d=p===void 0?function(S,E){var y=typeof S!="string"?"sc":yt(S);He[y]=(He[y]||0)+1;var g="".concat(y,"-").concat(lr(Ne+y+He[y]));return E?"".concat(E,"-").concat(g):g}(t.displayName,t.parentComponentId):p,u=t.displayName,f=u===void 0?function(S){return We(S)?"styled.".concat(S):"Styled(".concat(dr(S),")")}(e):u,b=t.displayName&&t.componentId?"".concat(yt(t.displayName),"-").concat(t.componentId):t.componentId||d,m=r&&o.attrs?o.attrs.concat(c).filter(Boolean):c,k=t.shouldForwardProp;if(r&&o.shouldForwardProp){var C=o.shouldForwardProp;if(t.shouldForwardProp){var O=t.shouldForwardProp;k=function(S,E){return C(S,E)&&O(S,E)}}else k=C}var A=new Lr(n,b,r?o.componentStyle:void 0);function j(S,E){return function(y,g,q){var le=y.attrs,kn=y.componentStyle,jn=y.defaultProps,Sn=y.foldedComponentIds,Cn=y.styledComponentId,An=y.target,zn=X.useContext(bn),En=zt(),De=y.shouldForwardProp||En.shouldForwardProp,ht=or(g,zn,jn)||J,D=function(pe,re,ue){for(var ie,Y=T(T({},re),{className:void 0,theme:ue}),Me=0;Me<pe.length;Me+=1){var he=ee(ie=pe[Me])?ie(Y):ie;for(var F in he)Y[F]=F==="className"?W(Y[F],he[F]):F==="style"?T(T({},Y[F]),he[F]):he[F]}return re.className&&(Y.className=W(Y.className,re.className)),Y}(le,g,ht),de=D.as||An,ne={};for(var M in D)D[M]===void 0||M[0]==="$"||M==="as"||M==="theme"&&D.theme===ht||(M==="forwardedAs"?ne.as=D.forwardedAs:De&&!De(M,de)||(ne[M]=D[M]));var gt=function(pe,re){var ue=zt(),ie=pe.generateAndInjectStyles(re,ue.styleSheet,ue.stylis);return ie}(kn,D),Le=W(Sn,Cn);return gt&&(Le+=" "+gt),D.className&&(Le+=" "+D.className),ne[We(de)&&!on.has(de)?"class":"className"]=Le,q&&(ne.ref=q),I.createElement(de,ne)}(w,S,E)}j.displayName=f;var w=X.forwardRef(j);return w.attrs=m,w.componentStyle=A,w.displayName=f,w.shouldForwardProp=k,w.foldedComponentIds=r?W(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=b,w.target=r?o.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(E){for(var y=[],g=1;g<arguments.length;g++)y[g-1]=arguments[g];for(var q=0,le=y;q<le.length;q++)it(E,le[q],!0);return E}({},o.defaultProps,S):S}}),ut(w,function(){return".".concat(w.styledComponentId)}),a&&pn(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Pt(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var It=function(e){return Object.assign(e,{isCss:!0})};function Fr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ee(e)||se(e))return It(U(Pt(_e,Ae([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?U(r):It(U(Pt(r,t)))}function at(e,t,n){if(n===void 0&&(n=J),!t)throw ce(1,t);var r=function(o){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return e(t,n,Fr.apply(void 0,Ae([o],a,!1)))};return r.attrs=function(o){return at(e,t,T(T({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return at(e,t,T(T({},n),o))},r}var yn=function(e){return at(Mr,e)},l=yn;on.forEach(function(e){l[e]=yn(e)});var Br={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Yr=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wr=(e,t)=>{const n=I.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:s,children:c,...p},d)=>I.createElement("svg",{ref:d,...Br,width:o,height:o,stroke:r,strokeWidth:s?Number(a)*24/Number(o):a,className:`lucide lucide-${Yr(e)}`,...p},[...t.map(([u,f])=>I.createElement(u,f)),...(Array.isArray(c)?c:[c])||[]]));return n.displayName=`${e}`,n};var R=Wr;const Hr=R("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),me=R("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Rt=R("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),vn=R("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),st=R("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),Ur=R("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),qr=R("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),Gr=R("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Vr=R("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]),Tt=R("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}]]),Xr=R("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),Ue=R("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),Kr=R("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]),Ot=R("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),Zr=R("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),$t=R("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Qr=l.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`,Nt=l.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  transition: transform 0.5s ease;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    transform: translateX(${e=>e.currentSlide*-100}%);
  }
`,Jr=l.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    overflow: hidden;
    width: 100%;
  }
`,ei=l.div`
  @media (max-width: 768px) {
    display: none;
  }
`,_t=l.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  height: 100%;
  transition: all 0.4s ease;
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(102, 126, 234, 0.2);
  }
  
  ${e=>e.isActive&&`
    border-color: #667eea;
    box-shadow: 0 12px 35px rgba(102, 126, 234, 0.2);
  `}
`,Dt=l.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,Lt=l.span`
  font-size: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
`,Mt=l.h4`
  font-size: 1rem;
  font-weight: 700;
  color: #2C3E50;
  margin: 0;
`,Ft=l.p`
  color: #5D6D7E;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Bt=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #28A745;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 8px 12px;
  background: rgba(40, 167, 69, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(40, 167, 69, 0.2);
`,ti=l.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`,Yt=l.button`
  background: ${e=>e.disabled?"#E0E0E0":"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  color: white;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }
  
  &:disabled {
    opacity: 0.5;
  }
`,ni=l.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,ri=l.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${e=>e.active?"#667eea":"#E0E0E0"};
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`,ii=l.span`
  font-size: 0.9rem;
  color: #5D6D7E;
  font-weight: 600;
  min-width: 60px;
  text-align: center;
`,oi=l.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding: 0 20px;
`,ai=l.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 18px 36px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
    background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    padding: 16px 32px;
    font-size: 1rem;
  }
`,si=({testimonials:e})=>{const[t,n]=I.useState(0),r=Math.ceil(e.length/3);I.useEffect(()=>{if(window.innerWidth<=768){const d=setInterval(()=>{n(u=>(u+1)%r)},5e3);return()=>clearInterval(d)}},[r]);const o=()=>{n(d=>(d+1)%r)},a=()=>{n(d=>(d-1+r)%r)},s=d=>{n(d)},c=()=>{window.open("https://wa.me/+34671310850","_blank")},p=[];for(let d=0;d<e.length;d+=3)p.push(e.slice(d,d+3));return i.jsxs(Qr,{children:[i.jsx(ei,{children:i.jsx(Nt,{currentSlide:0,children:e.map((d,u)=>i.jsxs(_t,{isActive:u<3,children:[i.jsxs(Dt,{children:[i.jsx(Lt,{children:d.flag}),i.jsx(Mt,{children:d.origin})]}),i.jsx(Ft,{children:d.content}),i.jsxs(Bt,{children:[i.jsx(st,{size:16}),d.savings]})]},u))})}),i.jsx(Jr,{children:i.jsx(Nt,{currentSlide:t,children:p[t]?.map((d,u)=>i.jsxs(_t,{isActive:!0,children:[i.jsxs(Dt,{children:[i.jsx(Lt,{children:d.flag}),i.jsx(Mt,{children:d.origin})]}),i.jsx(Ft,{children:d.content}),i.jsxs(Bt,{children:[i.jsx(st,{size:16}),d.savings]})]},u))})}),i.jsxs(ti,{children:[i.jsx(Yt,{onClick:a,disabled:t===0,children:i.jsx(qr,{size:20})}),i.jsx(ni,{children:Array.from({length:r},(d,u)=>i.jsx(ri,{active:u===t,onClick:()=>s(u),style:{cursor:"pointer"}},u))}),i.jsxs(ii,{children:[t+1," / ",r]}),i.jsx(Yt,{onClick:o,disabled:t===r-1,children:i.jsx(Gr,{size:20})})]}),i.jsx(oi,{children:i.jsxs(ai,{onClick:c,children:[i.jsx(vn,{size:24}),"Schedule Free Meeting"]})})]})},ci=l.div`
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`,li=l.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`,di=l.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  width: 100%;
  height: 100%;
  z-index: 1;
`,qe=l.div`
  position: absolute;
  top: ${e=>e.top};
  left: ${e=>e.left};
  font-size: 2rem;
  opacity: 0.6;
  animation: float 6s ease-in-out infinite;
  animation-delay: ${e=>e.animationDelay};
  z-index: 2;

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
  }
`,Ge=l.div`
  position: absolute;
  top: ${e=>e.top};
  right: ${e=>e.right};
  font-size: 2rem;
  opacity: 0.6;
  animation: float 6s ease-in-out infinite;
  animation-delay: ${e=>e.animationDelay};
  z-index: 2;

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
  }
`,pi=l.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 40px 20px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`,ui=l.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #28A745 0%, #20C997 100%);
  border: none;
  color: white;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(40, 167, 69, 0.4);
  transition: all 0.3s ease;
  z-index: 1000;
  opacity: ${e=>e.isVisible?1:0};
  transform: ${e=>e.isVisible?"scale(1)":"scale(0.8)"};
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 35px rgba(40, 167, 69, 0.6);
  }
  
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
  }
`,hi=l.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-align: center;
  z-index: 2;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`,gi=l.p`
  font-size: 0.9rem;
  margin-bottom: 8px;
  opacity: 0.8;
`,fi=l.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: white;
  position: relative;
  
  &::after {
    content: '|';
    animation: blink 1s infinite;
    margin-left: 4px;
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,mi=l.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 3rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,xi=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 15px;
  }
`,Ve=l.div`
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
`,Xe=l.div`
  font-size: 3rem;
  margin-bottom: 16px;
`,Ke=l.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 16px;
`,Ze=l.p`
  font-size: 1rem;
  color: #5D6D7E;
  line-height: 1.6;
  margin-bottom: 24px;
`,Qe=l.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }
`,bi=l.section`
  padding: 80px 20px;
  background: white;
  text-align: center;
  width: 100%;
`,yi=l.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`,vi=l.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 24px;
`,wi=l.a`
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  color: white;
  border: none;
  padding: 20px 40px;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(255, 107, 53, 0.4);
    color: white;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s;
  }

  &:hover::before {
    left: 100%;
  }
`,ki=l.section`
  padding: 80px 20px;
  background: #F8F9FA;
  width: 100%;
`,ji=l.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`,Si=l.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2C3E50;
  text-align: center;
  margin-bottom: 3rem;
`,Ci=[{flag:"🇵🇱",origin:"Polonia",content:"Doctoralia colleague from Poland saved 400€/year after a 15min call and a personalized document.",savings:"400€/año"},{flag:"🇮🇹",origin:"Italia",content:"Italian friend reduced bill by 25% by switching provider.",savings:"25% reducción"},{flag:"🇧🇷",origin:"Brasil",content:"Brazilian customer saved 500€/year by changing potencia.",savings:"500€/año"},{flag:"🇪🇸",origin:"España",content:"Spanish family reduced electricity bill by 30% after understanding their consumption patterns.",savings:"30% reducción"},{flag:"🇦🇷",origin:"Argentina",content:"Argentinian expat saved 200€/month by optimizing their energy contract.",savings:"200€/mes"},{flag:"🇬🇧",origin:"UK",content:"British colleague discovered hidden fees and saved 350€/year.",savings:"350€/año"},{flag:"🇦🇷",origin:"Argentina",content:"Now it's much easier to understand my bills! Loved the 50€ discount on my next bill after the changes.",savings:"50€ descuento"},{flag:"🇪🇸",origin:"España",content:"Finally I understand my electricity bill! The 50€ discount on my next bill was amazing after the changes.",savings:"50€ descuento"},{flag:"🇧🇷",origin:"Brasil",content:"Everything is so clear now! Got a 50€ discount on my next bill after implementing the recommendations.",savings:"50€ descuento"}],Wt=({onLanguageSelect:e})=>{const[t,n]=I.useState(!1);I.useEffect(()=>{const s=()=>{const c=window.scrollY;n(c>300)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const r=s=>{e(s)},o=()=>{window.open("https://wa.me/+34671310850","_blank")},a=()=>{const s=document.querySelector('[data-section="testimonials"]');s&&s.scrollIntoView({behavior:"smooth"})};return i.jsxs(ci,{children:[i.jsxs(li,{children:[i.jsx(di,{}),i.jsx(qe,{top:"10%",left:"10%",animationDelay:"0s",children:"⚡"}),i.jsx(Ge,{top:"20%",right:"15%",animationDelay:"1s",children:"💸"}),i.jsx(qe,{top:"60%",left:"5%",animationDelay:"2s",children:"⚡"}),i.jsx(Ge,{top:"70%",right:"10%",animationDelay:"3s",children:"💸"}),i.jsx(qe,{top:"40%",left:"20%",animationDelay:"4s",children:"⚡"}),i.jsx(Ge,{top:"30%",right:"25%",animationDelay:"5s",children:"💸"}),i.jsxs(pi,{children:[i.jsx(fi,{children:"BillWise"}),i.jsx(mi,{children:"¿No sabes qué significa 'valle, punta, llano'? ¿También te sorprende cuánto pagas en tu factura de electricidad? No te preocupes, no estás solo. +85% de los clientes de electricidad no saben cómo funciona o si están pagando un precio justo."}),i.jsxs(xi,{children:[i.jsxs(Ve,{isHovered:!1,onClick:()=>r("portuguese"),children:[i.jsx(Xe,{children:"🇵🇹"}),i.jsx(Ke,{children:"Português"}),i.jsx(Ze,{children:"Entenda sua fatura de eletricidade e água em português. Economize dinheiro com nossa análise personalizada."}),i.jsxs(Qe,{children:["Quero entender minha fatura agora",i.jsx(me,{size:20})]})]}),i.jsxs(Ve,{isHovered:!1,onClick:()=>r("spanish"),children:[i.jsx(Xe,{children:"🇪🇸"}),i.jsx(Ke,{children:"Español"}),i.jsx(Ze,{children:"Entiende tu factura de electricidad y agua en español. Ahorra dinero con nuestro análisis personalizado."}),i.jsxs(Qe,{children:["Quiero entender mi factura ahora",i.jsx(me,{size:20})]})]}),i.jsxs(Ve,{isHovered:!1,onClick:()=>r("english"),children:[i.jsx(Xe,{children:"🇬🇧"}),i.jsx(Ke,{children:"English"}),i.jsx(Ze,{children:"Understand your electricity and water bill in English. Save money with our personalized analysis."}),i.jsxs(Qe,{children:["I want to understand my bill now",i.jsx(me,{size:20})]})]})]})]}),i.jsxs(hi,{onClick:a,children:[i.jsx(gi,{children:"Ver testimonios"}),i.jsx(Ur,{size:24})]})]}),i.jsx(bi,{children:i.jsxs(yi,{children:[i.jsx(vi,{children:"¿No tienes tiempo? Solo quieres 50-80€ de descuento"}),i.jsxs(wi,{href:"https://share.octopusenergy.es/jolly-gull-677",target:"_blank",rel:"noopener noreferrer",children:[i.jsx(Kr,{size:24}),"Cambiar al mejor proveedor ahora",i.jsx(me,{size:24})]})]})}),i.jsx(ki,{"data-section":"testimonials",children:i.jsxs(ji,{children:[i.jsx(Si,{children:"Resultados reales de personas alrededor del mundo"}),i.jsx(si,{testimonials:Ci})]})}),i.jsx(ui,{isVisible:t,onClick:o,children:i.jsx(Vr,{size:24})})]})},Ai=l.div`
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`,zi=l.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 40px;
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(102, 126, 234, 0.1);
  backdrop-filter: blur(10px);
  padding: 16px 20px;
  border-radius: 16px;
  margin: -20px -20px 40px -20px;
`,Ei=l.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 12px 20px;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`,Pi=l.div`
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  overflow: hidden;
  margin: 0 20px;
`,Ii=l.div`
  height: 100%;
  background: linear-gradient(90deg, #28A745, #20C997);
  border-radius: 3px;
  transition: width 0.5s ease;
  width: ${e=>e.progress}%;
`,Ri=l.span`
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  min-width: 60px;
  text-align: center;
`,Ti=l.div`
  max-width: 1200px;
  margin: 0 auto;
  color: white;
`,Oi=l.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  animation: fadeInUp 0.8s ease;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,$i=l.section`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
  animation: fadeInUp 0.8s ease 0.2s both;
`,xe=l.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 16px;
`,Ni=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 32px;
`,_i=l.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease ${e=>.4+e.index*.1}s both;
  
  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
  }
`,Di=l.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: white;
  font-size: 1.5rem;
`,Li=l.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: white;
`,Mi=l.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
`,Fi=l.section`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
  animation: fadeInUp 0.8s ease 0.4s both;
`,Bi=l.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 2rem;
  width: 100%;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`,Yi=l.div`
  grid-column: 1 / -1;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
  width: 100%;
  animation: fadeInUp 0.8s ease 0.8s both;
  
  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`,Wi=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,Hi=l.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`,Ui=l.button`
  background: linear-gradient(135deg, #28A745 0%, #20C997 100%);
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(40, 167, 69, 0.4);
  }
`,qi=l.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease ${e=>.6+e.index*.1}s both;
  
  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.2);
  }
`,Ht=l.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  color: white;
  font-size: 1.5rem;
`,Ut=l.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 12px;
`,qt=l.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
`,Gi=l.section`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
  text-align: center;
  animation: fadeInUp 0.8s ease 1s both;
`,Vi=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin: 32px 0;
`,Xi=l.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  text-align: center;
  animation: fadeInUp 0.6s ease ${e=>1.2+e.index*.1}s both;
  
  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
  }
`,Ki=l.div`
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #28A745 0%, #20C997 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  color: white;
  font-size: 1.8rem;
`,Zi=l.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: white;
`,Qi=l.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
`,Ji=l.button`
  background: linear-gradient(135deg, #28A745 0%, #20C997 100%);
  color: white;
  border: none;
  padding: 20px 40px;
  border-radius: 50px;
  font-size: 1.3rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(40, 167, 69, 0.4);
  }
`,eo=l.section`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
  text-align: center;
  animation: fadeInUp 0.8s ease 1.4s both;
`,to=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-top: 32px;
`,be=l.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
`,ye=l.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #FFD700;
  margin-bottom: 8px;
`,ve=l.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
`,no={spanish:{title:"¿Por qué las personas en España no entienden sus facturas?",problem:{title:"El Problema Real",items:["85% de los clientes no saben qué significa 'valle', 'punta', 'llano'","No entienden por qué pagan tanto en su factura mensual","No saben identificar oportunidades de ahorro","No conocen las mejores tarifas disponibles","No entienden los conceptos de su factura"]},solution:{title:"Nuestra Solución",items:[{icon:"📊",title:"Análisis Personalizado",description:"Revisamos tu factura línea por línea y te explicamos cada concepto"},{icon:"💰",title:"Identificación de Ahorros",description:"Encontramos oportunidades específicas para reducir tus costos"},{icon:"⚡",title:"Optimización de Consumo",description:"Te enseñamos cuándo usar más energía para pagar menos"}],bottomCard:{title:"Análisis Personalizado Completo",description:"Recibe un análisis detallado con recomendaciones específicas para tu caso",cta:"Quiero entender mi factura ahora"}},chart:{title:"Análisis de Costos y Ahorros",description:"Recibirás un análisis detallado con gráficos como este, mostrando tus costos actuales vs. potenciales ahorros"},meeting:{title:"Reunión Online Personalizada (15-30 min)",description:"Agenda una sesión individual donde te explicaremos:",benefits:["Análisis completo de tu factura actual","Planilla detallada con todos los costos","Opciones de optimización disponibles","Cálculo exacto de ahorro anual","Recomendaciones específicas para tu caso"],cta:"Agendar Reunión"}},portuguese:{title:"Por que as pessoas na Espanha não entendem suas faturas?",problem:{title:"O Problema Real",items:["85% dos clientes não sabem o que significa 'valle', 'punta', 'llano'","Não entendem por que pagam tanto na fatura mensal","Não sabem identificar oportunidades de economia","Não conhecem as melhores tarifas disponíveis","Não entendem os conceitos da sua fatura"]},solution:{title:"Nossa Solução",items:[{icon:"📊",title:"Análise Personalizada",description:"Revisamos sua fatura linha por linha e explicamos cada conceito"},{icon:"💰",title:"Identificação de Economias",description:"Encontramos oportunidades específicas para reduzir seus custos"},{icon:"⚡",title:"Otimização de Consumo",description:"Ensinamos quando usar mais energia para pagar menos"}],bottomCard:{title:"Análise Personalizada Completa",description:"Receba uma análise detalhada com recomendações específicas para seu caso",cta:"Quero entender minha fatura agora"}},chart:{title:"Análise de Custos e Economias",description:"Receberá uma análise detalhada com gráficos como este, mostrando seus custos atuais vs. economias potenciais"},meeting:{title:"Reunião Online Personalizada (15-30 min)",description:"Agende uma sessão individual onde explicaremos:",benefits:["Análise completa da sua fatura atual","Planilha detalhada com todos os custos","Opções de otimização disponíveis","Cálculo exato de economia anual","Recomendações específicas para seu caso"],cta:"Agendar Reunião"}},english:{title:"Why don't people in Spain understand their bills?",problem:{title:"The Real Problem",items:["85% of customers don't know what 'valle', 'punta', 'llano' means","They don't understand why they pay so much monthly","They can't identify savings opportunities","They don't know the best available rates","They don't understand bill concepts"]},solution:{title:"Our Solution",items:[{icon:"📊",title:"Personalized Analysis",description:"We review your bill line by line and explain each concept"},{icon:"💰",title:"Savings Identification",description:"We find specific opportunities to reduce your costs"},{icon:"⚡",title:"Consumption Optimization",description:"We teach you when to use more energy to pay less"}],bottomCard:{title:"Complete Personalized Analysis",description:"Receive a detailed analysis with specific recommendations for your case",cta:"I want to understand my bill now"}},chart:{title:"Cost Analysis and Savings",description:"You'll receive a detailed analysis with charts like this, showing your current costs vs. potential savings"},meeting:{title:"Personalized Online Meeting (15-30 min)",description:"Schedule an individual session where we'll explain:",benefits:["Complete analysis of your current bill","Detailed spreadsheet with all costs","Available optimization options","Exact annual savings calculation","Specific recommendations for your case"],cta:"Schedule Meeting"}}},ro=({language:e,onBack:t})=>{const[n,r]=I.useState(0),o=no[e];I.useEffect(()=>{const s=()=>{const c=window.scrollY,p=document.documentElement.scrollHeight-window.innerHeight,d=c/p*100;r(Math.min(d,100))};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const a=()=>{window.open("https://wa.me/+34671310850","_blank")};return i.jsxs(Ai,{children:[i.jsxs(zi,{children:[i.jsxs(Ei,{onClick:t,children:[i.jsx(Hr,{size:20}),"Volver"]}),i.jsx(Pi,{children:i.jsx(Ii,{progress:n})}),i.jsxs(Ri,{children:[Math.round(n),"%"]})]}),i.jsxs(Ti,{children:[i.jsx(Oi,{children:o.title}),i.jsxs($i,{children:[i.jsxs(xe,{children:[i.jsx(Ue,{size:32}),o.problem.title]}),i.jsx(Ni,{children:o.problem.items.map((s,c)=>i.jsxs(_i,{index:c,children:[i.jsxs(Di,{children:[c===0&&i.jsx(Rt,{size:24}),c===1&&i.jsx(Ot,{size:24}),c===2&&i.jsx($t,{size:24}),c===3&&i.jsx(Tt,{size:24}),c===4&&i.jsx(Ue,{size:24})]}),i.jsxs(Li,{children:[c===0&&"Confusión en Terminología",c===1&&"Costos Inesperados",c===2&&"Oportunidades Perdidas",c===3&&"Tarifas Desconocidas",c===4&&"Conceptos Incomprensibles"]}),i.jsx(Mi,{children:s})]},c))})]}),i.jsxs(Fi,{children:[i.jsxs(xe,{children:[i.jsx(st,{size:32}),o.solution.title]}),i.jsxs(Bi,{children:[o.solution.items.map((s,c)=>i.jsxs(qi,{index:c,children:[i.jsx(Ht,{children:s.icon}),i.jsx(Ut,{children:s.title}),i.jsx(qt,{children:s.description})]},c)),i.jsx(Yi,{children:i.jsxs(Wi,{children:[i.jsxs(Hi,{children:[i.jsx(Ht,{children:"🎯"}),i.jsxs("div",{children:[i.jsx(Ut,{style:{textAlign:"left",marginBottom:"8px"},children:o.solution.bottomCard?.title||"Análisis Personalizado Completo"}),i.jsx(qt,{style:{textAlign:"left"},children:o.solution.bottomCard?.description||"Recibe un análisis detallado con recomendaciones específicas para tu caso"})]})]}),i.jsx(Ui,{onClick:a,children:o.solution.bottomCard?.cta||"Agendar Análisis"})]})})]})]}),i.jsxs(eo,{children:[i.jsxs(xe,{children:[i.jsx(Xr,{size:32}),"Nuestros Resultados"]}),i.jsxs(to,{children:[i.jsxs(be,{children:[i.jsx(ye,{children:"85%"}),i.jsx(ve,{children:"Clientes que no entienden sus facturas"})]}),i.jsxs(be,{children:[i.jsx(ye,{children:"50-80€"}),i.jsx(ve,{children:"Ahorro mensual promedio"})]}),i.jsxs(be,{children:[i.jsx(ye,{children:"15-30"}),i.jsx(ve,{children:"Minutos de análisis gratuito"})]}),i.jsxs(be,{children:[i.jsx(ye,{children:"100%"}),i.jsx(ve,{children:"Gratis y sin compromiso"})]})]})]}),i.jsxs(Gi,{children:[i.jsxs(xe,{children:[i.jsx(Zr,{size:32}),o.meeting.title]}),i.jsx("p",{style:{fontSize:"1.2rem",marginBottom:"1rem"},children:o.meeting.description}),i.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.15)",borderRadius:"16px",padding:"24px",margin:"32px auto",maxWidth:"400px",textAlign:"center",border:"2px solid rgba(255, 255, 255, 0.2)",backdropFilter:"blur(10px)"},children:[i.jsx("div",{style:{fontSize:"2rem",fontWeight:"700",color:"#FFD700",marginBottom:"8px"},children:"💰"}),i.jsxs("div",{style:{fontSize:"1.5rem",fontWeight:"700",color:"white",marginBottom:"8px"},children:[e==="spanish"&&"Inversión 15 euros para aprender sobre ello",e==="portuguese"&&"Investimento 15 euros para aprender sobre isso",e==="english"&&"Investment 15 euros to learn about it"]}),i.jsxs("div",{style:{fontSize:"1rem",color:"rgba(255, 255, 255, 0.8)",lineHeight:"1.5"},children:[e==="spanish"&&"Pequeña inversión para grandes ahorros",e==="portuguese"&&"Pequeno investimento para grandes economias",e==="english"&&"Small investment for big savings"]})]}),i.jsx(Vi,{children:o.meeting.benefits.map((s,c)=>i.jsxs(Xi,{index:c,children:[i.jsxs(Ki,{children:[c===0&&i.jsx(Rt,{size:24}),c===1&&i.jsx(Ot,{size:24}),c===2&&i.jsx($t,{size:24}),c===3&&i.jsx(Tt,{size:24}),c===4&&i.jsx(Ue,{size:24})]}),i.jsxs(Zi,{children:[c===0&&"Análisis Completo",c===1&&"Planilla Detallada",c===2&&"Opciones de Optimización",c===3&&"Cálculo de Ahorros",c===4&&"Recomendaciones Específicas"]}),i.jsx(Qi,{children:s})]},c))}),i.jsxs(Ji,{onClick:a,children:[i.jsx(vn,{size:24}),o.meeting.cta]})]})]})]})},wn=()=>i.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",fontSize:"1.2rem"},children:[i.jsxs("div",{style:{textAlign:"center"},children:[i.jsx("div",{style:{width:"40px",height:"40px",border:"4px solid rgba(255,255,255,0.3)",borderTop:"4px solid white",borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto 16px"}}),i.jsx("p",{children:"Cargando BillWise..."})]}),i.jsx("style",{children:`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `})]}),io=()=>{const[e,t]=I.useState(null),[n,r]=I.useState(!1),o=Rn(),a=async c=>{r(!0);try{t(c),await new Promise(p=>setTimeout(p,300)),o(`/explanation/${c}`)}catch(p){console.error("Navigation error:",p)}finally{r(!1)}},s=()=>{t(null),o("/")};return n?i.jsx(wn,{}):i.jsxs(Tn,{children:[i.jsx(Fe,{path:"/",element:i.jsx(Wt,{onLanguageSelect:a})}),i.jsx(Fe,{path:"/explanation/:language",element:i.jsx(ro,{language:e||"spanish",onBack:s})}),i.jsx(Fe,{path:"*",element:i.jsx(Wt,{onLanguageSelect:a})})]})};function oo(){const[e,t]=I.useState(!0);return I.useEffect(()=>{const n=setTimeout(()=>{t(!1)},1e3);return()=>clearTimeout(n)},[]),e?i.jsx(wn,{}):i.jsx(In,{children:i.jsx("div",{className:"App",children:i.jsx(io,{})})})}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("SW registered: ",e)}).catch(e=>{console.log("SW registration failed: ",e)})});Je.createRoot(document.getElementById("root")).render(i.jsx(X.StrictMode,{children:i.jsx(oo,{})}));
