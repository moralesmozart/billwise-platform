import{r as zn,a as An,g as In}from"./vendor.js";import{R as X,r as T,H as En,u as Rn,a as Tn,b as Le}from"./router.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var Fe={exports:{}},se={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ft;function Pn(){if(ft)return se;ft=1;var e=zn(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(l,c,f){var p,m={},x=null,g=null;f!==void 0&&(x=""+f),c.key!==void 0&&(x=""+c.key),c.ref!==void 0&&(g=c.ref);for(p in c)r.call(c,p)&&!a.hasOwnProperty(p)&&(m[p]=c[p]);if(l&&l.defaultProps)for(p in c=l.defaultProps,c)m[p]===void 0&&(m[p]=c[p]);return{$$typeof:t,type:l,key:x,ref:g,props:m,_owner:i.current}}return se.Fragment=n,se.jsx=s,se.jsxs=s,se}var mt;function _n(){return mt||(mt=1,Fe.exports=Pn()),Fe.exports}var o=_n(),xe={},gt;function On(){if(gt)return xe;gt=1;var e=An();return xe.createRoot=e.createRoot,xe.hydrateRoot=e.hydrateRoot,xe}var $n=On();const Nn=In($n);var R=function(){return R=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},R.apply(this,arguments)};function Ce(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var v="-ms-",de="-moz-",y="-webkit-",Ht="comm",Ee="rule",st="decl",Dn="@import",Vt="@keyframes",Ln="@layer",Kt=Math.abs,ct=String.fromCharCode,Ze=Object.assign;function Fn(e,t){return E(e,0)^45?(((t<<2^E(e,0))<<2^E(e,1))<<2^E(e,2))<<2^E(e,3):0}function Jt(e){return e.trim()}function F(e,t){return(e=t.exec(e))?e[0]:e}function u(e,t,n){return e.replace(t,n)}function ve(e,t,n){return e.indexOf(t,n)}function E(e,t){return e.charCodeAt(t)|0}function Z(e,t,n){return e.slice(t,n)}function D(e){return e.length}function Xt(e){return e.length}function ce(e,t){return t.push(e),e}function Bn(e,t){return e.map(t).join("")}function xt(e,t){return e.filter(function(n){return!F(n,t)})}var Re=1,Q=1,Zt=0,O=0,A=0,re="";function Te(e,t,n,r,i,a,s,l){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Re,column:Q,length:s,return:"",siblings:l}}function Y(e,t){return Ze(Te("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function V(e){for(;e.root;)e=Y(e.root,{children:[e]});ce(e,e.siblings)}function Mn(){return A}function Yn(){return A=O>0?E(re,--O):0,Q--,A===10&&(Q=1,Re--),A}function $(){return A=O<Zt?E(re,O++):0,Q++,A===10&&(Q=1,Re++),A}function U(){return E(re,O)}function we(){return O}function Pe(e,t){return Z(re,e,t)}function Qe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qn(e){return Re=Q=1,Zt=D(re=e),O=0,[]}function Gn(e){return re="",e}function Be(e){return Jt(Pe(O-1,et(e===91?e+2:e===40?e+1:e)))}function Un(e){for(;(A=U())&&A<33;)$();return Qe(e)>2||Qe(A)>3?"":" "}function Wn(e,t){for(;--t&&$()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return Pe(e,we()+(t<6&&U()==32&&$()==32))}function et(e){for(;$();)switch(A){case e:return O;case 34:case 39:e!==34&&e!==39&&et(A);break;case 40:e===41&&et(e);break;case 92:$();break}return O}function Hn(e,t){for(;$()&&e+A!==57;)if(e+A===84&&U()===47)break;return"/*"+Pe(t,O-1)+"*"+ct(e===47?e:$())}function Vn(e){for(;!Qe(U());)$();return Pe(e,O)}function Kn(e){return Gn(je("",null,null,null,[""],e=qn(e),0,[0],e))}function je(e,t,n,r,i,a,s,l,c){for(var f=0,p=0,m=s,x=0,g=0,j=0,C=1,P=1,z=1,S=0,w="",k=i,I=a,b=r,h=w;P;)switch(j=S,S=$()){case 40:if(j!=108&&E(h,m-1)==58){ve(h+=u(Be(S),"&","&\f"),"&\f",Kt(f?l[f-1]:0))!=-1&&(z=-1);break}case 34:case 39:case 91:h+=Be(S);break;case 9:case 10:case 13:case 32:h+=Un(j);break;case 92:h+=Wn(we()-1,7);continue;case 47:switch(U()){case 42:case 47:ce(Jn(Hn($(),we()),t,n,c),c);break;default:h+="/"}break;case 123*C:l[f++]=D(h)*z;case 125*C:case 59:case 0:switch(S){case 0:case 125:P=0;case 59+p:z==-1&&(h=u(h,/\f/g,"")),g>0&&D(h)-m&&ce(g>32?bt(h+";",r,n,m-1,c):bt(u(h," ","")+";",r,n,m-2,c),c);break;case 59:h+=";";default:if(ce(b=yt(h,t,n,f,p,i,l,w,k=[],I=[],m,a),a),S===123)if(p===0)je(h,t,b,b,k,a,m,l,I);else switch(x===99&&E(h,3)===110?100:x){case 100:case 108:case 109:case 115:je(e,b,b,r&&ce(yt(e,b,b,0,0,i,l,w,i,k=[],m,I),I),i,I,m,l,r?k:I);break;default:je(h,b,b,b,[""],I,0,l,I)}}f=p=g=0,C=z=1,w=h="",m=s;break;case 58:m=1+D(h),g=j;default:if(C<1){if(S==123)--C;else if(S==125&&C++==0&&Yn()==125)continue}switch(h+=ct(S),S*C){case 38:z=p>0?1:(h+="\f",-1);break;case 44:l[f++]=(D(h)-1)*z,z=1;break;case 64:U()===45&&(h+=Be($())),x=U(),p=m=D(w=h+=Vn(we())),S++;break;case 45:j===45&&D(h)==2&&(C=0)}}return a}function yt(e,t,n,r,i,a,s,l,c,f,p,m){for(var x=i-1,g=i===0?a:[""],j=Xt(g),C=0,P=0,z=0;C<r;++C)for(var S=0,w=Z(e,x+1,x=Kt(P=s[C])),k=e;S<j;++S)(k=Jt(P>0?g[S]+" "+w:u(w,/&\f/g,g[S])))&&(c[z++]=k);return Te(e,t,n,i===0?Ee:l,c,f,p,m)}function Jn(e,t,n,r){return Te(e,t,n,Ht,ct(Mn()),Z(e,2,-2),0,r)}function bt(e,t,n,r,i){return Te(e,t,n,st,Z(e,0,r),Z(e,r+1,-1),r,i)}function Qt(e,t,n){switch(Fn(e,t)){case 5103:return y+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return y+e+e;case 4789:return de+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return y+e+de+e+v+e+e;case 5936:switch(E(e,t+11)){case 114:return y+e+v+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return y+e+v+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return y+e+v+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return y+e+v+e+e;case 6165:return y+e+v+"flex-"+e+e;case 5187:return y+e+u(e,/(\w+).+(:[^]+)/,y+"box-$1$2"+v+"flex-$1$2")+e;case 5443:return y+e+v+"flex-item-"+u(e,/flex-|-self/g,"")+(F(e,/flex-|baseline/)?"":v+"grid-row-"+u(e,/flex-|-self/g,""))+e;case 4675:return y+e+v+"flex-line-pack"+u(e,/align-content|flex-|-self/g,"")+e;case 5548:return y+e+v+u(e,"shrink","negative")+e;case 5292:return y+e+v+u(e,"basis","preferred-size")+e;case 6060:return y+"box-"+u(e,"-grow","")+y+e+v+u(e,"grow","positive")+e;case 4554:return y+u(e,/([^-])(transform)/g,"$1"+y+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,y+"$1"),/(image-set)/,y+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,y+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,y+"box-pack:$3"+v+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+y+e+e;case 4200:if(!F(e,/flex-|baseline/))return v+"grid-column-align"+Z(e,t)+e;break;case 2592:case 3360:return v+u(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,F(r.props,/grid-\w+-end/)})?~ve(e+(n=n[t].value),"span",0)?e:v+u(e,"-start","")+e+v+"grid-row-span:"+(~ve(n,"span",0)?F(n,/\d+/):+F(n,/\d+/)-+F(e,/\d+/))+";":v+u(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return F(r.props,/grid-\w+-start/)})?e:v+u(u(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,y+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(D(e)-1-t>6)switch(E(e,t+1)){case 109:if(E(e,t+4)!==45)break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+y+"$2-$3$1"+de+(E(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ve(e,"stretch",0)?Qt(u(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return u(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,s,l,c,f){return v+i+":"+a+f+(s?v+i+"-span:"+(l?c:+c-+a)+f:"")+e});case 4949:if(E(e,t+6)===121)return u(e,":",":"+y)+e;break;case 6444:switch(E(e,E(e,14)===45?18:11)){case 120:return u(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+y+(E(e,14)===45?"inline-":"")+"box$3$1"+y+"$2$3$1"+v+"$2box$3")+e;case 100:return u(e,":",":"+v)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return u(e,"scroll-","scroll-snap-")+e}return e}function ze(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Xn(e,t,n,r){switch(e.type){case Ln:if(e.children.length)break;case Dn:case st:return e.return=e.return||e.value;case Ht:return"";case Vt:return e.return=e.value+"{"+ze(e.children,r)+"}";case Ee:if(!D(e.value=e.props.join(",")))return""}return D(n=ze(e.children,r))?e.return=e.value+"{"+n+"}":""}function Zn(e){var t=Xt(e);return function(n,r,i,a){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,a)||"";return s}}function Qn(e){return function(t){t.root||(t=t.return)&&e(t)}}function er(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case st:e.return=Qt(e.value,e.length,n);return;case Vt:return ze([Y(e,{value:u(e.value,"@","@"+y)})],r);case Ee:if(e.length)return Bn(n=e.props,function(i){switch(F(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":V(Y(e,{props:[u(i,/:(read-\w+)/,":"+de+"$1")]})),V(Y(e,{props:[i]})),Ze(e,{props:xt(n,r)});break;case"::placeholder":V(Y(e,{props:[u(i,/:(plac\w+)/,":"+y+"input-$1")]})),V(Y(e,{props:[u(i,/:(plac\w+)/,":"+de+"$1")]})),V(Y(e,{props:[u(i,/:(plac\w+)/,v+"input-$1")]})),V(Y(e,{props:[i]})),Ze(e,{props:xt(n,r)});break}return""})}}var tr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_={},ee=typeof process<"u"&&_!==void 0&&(_.REACT_APP_SC_ATTR||_.SC_ATTR)||"data-styled",en="active",tn="data-styled-version",_e="6.1.19",dt=`/*!sc*/
`,Ae=typeof window<"u"&&typeof document<"u",nr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&_!==void 0&&_.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_.REACT_APP_SC_DISABLE_SPEEDY!==""?_.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&_!==void 0&&_.SC_DISABLE_SPEEDY!==void 0&&_.SC_DISABLE_SPEEDY!==""&&_.SC_DISABLE_SPEEDY!=="false"&&_.SC_DISABLE_SPEEDY),Oe=Object.freeze([]),te=Object.freeze({});function rr(e,t,n){return n===void 0&&(n=te),e.theme!==n.theme&&e.theme||t||n.theme}var nn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ir=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,or=/(^-|-$)/g;function vt(e){return e.replace(ir,"-").replace(or,"")}var ar=/(a)(d)/gi,ye=52,wt=function(e){return String.fromCharCode(e+(e>25?39:97))};function tt(e){var t,n="";for(t=Math.abs(e);t>ye;t=t/ye|0)n=wt(t%ye)+n;return(wt(t%ye)+n).replace(ar,"$1-$2")}var Me,rn=5381,J=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},on=function(e){return J(rn,e)};function sr(e){return tt(on(e)>>>0)}function cr(e){return e.displayName||e.name||"Component"}function Ye(e){return typeof e=="string"&&!0}var an=typeof Symbol=="function"&&Symbol.for,sn=an?Symbol.for("react.memo"):60115,dr=an?Symbol.for("react.forward_ref"):60112,lr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ur=((Me={})[dr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Me[sn]=cn,Me);function jt(e){return("type"in(t=e)&&t.type.$$typeof)===sn?cn:"$$typeof"in e?ur[e.$$typeof]:lr;var t}var hr=Object.defineProperty,fr=Object.getOwnPropertyNames,St=Object.getOwnPropertySymbols,mr=Object.getOwnPropertyDescriptor,gr=Object.getPrototypeOf,kt=Object.prototype;function dn(e,t,n){if(typeof t!="string"){if(kt){var r=gr(t);r&&r!==kt&&dn(e,r,n)}var i=fr(t);St&&(i=i.concat(St(t)));for(var a=jt(e),s=jt(t),l=0;l<i.length;++l){var c=i[l];if(!(c in pr||n&&n[c]||s&&c in s||a&&c in a)){var f=mr(t,c);try{hr(e,c,f)}catch{}}}}return e}function ne(e){return typeof e=="function"}function lt(e){return typeof e=="object"&&"styledComponentId"in e}function G(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ct(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function le(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function nt(e,t,n){if(n===void 0&&(n=!1),!n&&!le(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=nt(e[r],t[r]);else if(le(t))for(var r in t)e[r]=nt(e[r],t[r]);return e}function pt(e,t){Object.defineProperty(e,"toString",{value:t})}function pe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var xr=(function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw pe(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var s=i;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),c=(s=0,n.length);s<c;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,s=i;s<a;s++)n+="".concat(this.tag.getRule(s)).concat(dt);return n},e})(),Se=new Map,Ie=new Map,ke=1,be=function(e){if(Se.has(e))return Se.get(e);for(;Ie.has(ke);)ke++;var t=ke++;return Se.set(e,t),Ie.set(t,e),t},yr=function(e,t){ke=t+1,Se.set(e,t),Ie.set(t,e)},br="style[".concat(ee,"][").concat(tn,'="').concat(_e,'"]'),vr=new RegExp("^".concat(ee,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),wr=function(e,t,n){for(var r,i=n.split(","),a=0,s=i.length;a<s;a++)(r=i[a])&&e.registerName(t,r)},jr=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(dt),i=[],a=0,s=r.length;a<s;a++){var l=r[a].trim();if(l){var c=l.match(vr);if(c){var f=0|parseInt(c[1],10),p=c[2];f!==0&&(yr(p,f),wr(e,p,c[3]),e.getTag().insertRules(f,i)),i.length=0}else i.push(l)}}},zt=function(e){for(var t=document.querySelectorAll(br),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(ee)!==en&&(jr(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Sr(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ln=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=(function(l){var c=Array.from(l.querySelectorAll("style[".concat(ee,"]")));return c[c.length-1]})(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(ee,en),r.setAttribute(tn,_e);var s=Sr();return s&&r.setAttribute("nonce",s),n.insertBefore(r,a),r},kr=(function(){function e(t){this.element=ln(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var s=r[i];if(s.ownerNode===n)return s}throw pe(17)})(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e})(),Cr=(function(){function e(t){this.element=ln(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e})(),zr=(function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e})(),At=Ae,Ar={isServer:!Ae,useCSSOMInjection:!nr},pn=(function(){function e(t,n,r){t===void 0&&(t=te),n===void 0&&(n={});var i=this;this.options=R(R({},Ar),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ae&&At&&(At=!1,zt(this)),pt(this,function(){return(function(a){for(var s=a.getTag(),l=s.length,c="",f=function(m){var x=(function(z){return Ie.get(z)})(m);if(x===void 0)return"continue";var g=a.names.get(x),j=s.getGroup(m);if(g===void 0||!g.size||j.length===0)return"continue";var C="".concat(ee,".g").concat(m,'[id="').concat(x,'"]'),P="";g!==void 0&&g.forEach(function(z){z.length>0&&(P+="".concat(z,","))}),c+="".concat(j).concat(C,'{content:"').concat(P,'"}').concat(dt)},p=0;p<l;p++)f(p);return c})(i)})}return e.registerId=function(t){return be(t)},e.prototype.rehydrate=function(){!this.server&&Ae&&zt(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(R(R({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new zr(i):r?new kr(i):new Cr(i)})(this.options),new xr(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(be(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(be(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(be(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e})(),Ir=/&/g,Er=/^\s*\/\/.*$/gm;function un(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=un(n.children,t)),n})}function Rr(e){var t,n,r,i=te,a=i.options,s=a===void 0?te:a,l=i.plugins,c=l===void 0?Oe:l,f=function(x,g,j){return j.startsWith(n)&&j.endsWith(n)&&j.replaceAll(n,"").length>0?".".concat(t):x},p=c.slice();p.push(function(x){x.type===Ee&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(Ir,n).replace(r,f))}),s.prefix&&p.push(er),p.push(Xn);var m=function(x,g,j,C){g===void 0&&(g=""),j===void 0&&(j=""),C===void 0&&(C="&"),t=C,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var P=x.replace(Er,""),z=Kn(j||g?"".concat(j," ").concat(g," { ").concat(P," }"):P);s.namespace&&(z=un(z,s.namespace));var S=[];return ze(z,Zn(p.concat(Qn(function(w){return S.push(w)})))),S};return m.hash=c.length?c.reduce(function(x,g){return g.name||pe(15),J(x,g.name)},rn).toString():"",m}var Tr=new pn,rt=Rr(),hn=X.createContext({shouldForwardProp:void 0,styleSheet:Tr,stylis:rt});hn.Consumer;X.createContext(void 0);function It(){return T.useContext(hn)}var Pr=(function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=rt);var s=r.name+a.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,a(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,pt(this,function(){throw pe(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=rt),this.name+t.hash},e})(),_r=function(e){return e>="A"&&e<="Z"};function Et(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;_r(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var fn=function(e){return e==null||e===!1||e===""},mn=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!fn(a)&&(Array.isArray(a)&&a.isCss||ne(a)?r.push("".concat(Et(i),":"),a,";"):le(a)?r.push.apply(r,Ce(Ce(["".concat(i," {")],mn(a),!1),["}"],!1)):r.push("".concat(Et(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in tr||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function W(e,t,n,r){if(fn(e))return[];if(lt(e))return[".".concat(e.styledComponentId)];if(ne(e)){if(!ne(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return W(i,t,n,r)}var a;return e instanceof Pr?n?(e.inject(n,r),[e.getName(r)]):[e]:le(e)?mn(e):Array.isArray(e)?Array.prototype.concat.apply(Oe,e.map(function(s){return W(s,t,n,r)})):[e.toString()]}function Or(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ne(n)&&!lt(n))return!1}return!0}var $r=on(_e),Nr=(function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Or(t),this.componentId=n,this.baseHash=J($r,n),this.baseStyle=r,pn.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=G(i,this.staticRulesId);else{var a=Ct(W(this.rules,t,n,r)),s=tt(J(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(a,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}i=G(i,s),this.staticRulesId=s}else{for(var c=J(this.baseHash,r.hash),f="",p=0;p<this.rules.length;p++){var m=this.rules[p];if(typeof m=="string")f+=m;else if(m){var x=Ct(W(m,t,n,r));c=J(c,x+p),f+=x}}if(f){var g=tt(c>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(f,".".concat(g),void 0,this.componentId)),i=G(i,g)}}return i},e})(),gn=X.createContext(void 0);gn.Consumer;var qe={};function Dr(e,t,n){var r=lt(e),i=e,a=!Ye(e),s=t.attrs,l=s===void 0?Oe:s,c=t.componentId,f=c===void 0?(function(k,I){var b=typeof k!="string"?"sc":vt(k);qe[b]=(qe[b]||0)+1;var h="".concat(b,"-").concat(sr(_e+b+qe[b]));return I?"".concat(I,"-").concat(h):h})(t.displayName,t.parentComponentId):c,p=t.displayName,m=p===void 0?(function(k){return Ye(k)?"styled.".concat(k):"Styled(".concat(cr(k),")")})(e):p,x=t.displayName&&t.componentId?"".concat(vt(t.displayName),"-").concat(t.componentId):t.componentId||f,g=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,j=t.shouldForwardProp;if(r&&i.shouldForwardProp){var C=i.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;j=function(k,I){return C(k,I)&&P(k,I)}}else j=C}var z=new Nr(n,x,r?i.componentStyle:void 0);function S(k,I){return(function(b,h,H){var ue=b.attrs,bn=b.componentStyle,vn=b.defaultProps,wn=b.foldedComponentIds,jn=b.styledComponentId,Sn=b.target,kn=X.useContext(gn),Cn=It(),$e=b.shouldForwardProp||Cn.shouldForwardProp,ut=rr(h,kn,vn)||te,L=(function(fe,oe,me){for(var ae,q=R(R({},oe),{className:void 0,theme:me}),De=0;De<fe.length;De+=1){var ge=ne(ae=fe[De])?ae(q):ae;for(var M in ge)q[M]=M==="className"?G(q[M],ge[M]):M==="style"?R(R({},q[M]),ge[M]):ge[M]}return oe.className&&(q.className=G(q.className,oe.className)),q})(ue,h,ut),he=L.as||Sn,ie={};for(var B in L)L[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&L.theme===ut||(B==="forwardedAs"?ie.as=L.forwardedAs:$e&&!$e(B,he)||(ie[B]=L[B]));var ht=(function(fe,oe){var me=It(),ae=fe.generateAndInjectStyles(oe,me.styleSheet,me.stylis);return ae})(bn,L),Ne=G(wn,jn);return ht&&(Ne+=" "+ht),L.className&&(Ne+=" "+L.className),ie[Ye(he)&&!nn.has(he)?"class":"className"]=Ne,H&&(ie.ref=H),T.createElement(he,ie)})(w,k,I)}S.displayName=m;var w=X.forwardRef(S);return w.attrs=g,w.componentStyle=z,w.displayName=m,w.shouldForwardProp=j,w.foldedComponentIds=r?G(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=x,w.target=r?i.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?(function(I){for(var b=[],h=1;h<arguments.length;h++)b[h-1]=arguments[h];for(var H=0,ue=b;H<ue.length;H++)nt(I,ue[H],!0);return I})({},i.defaultProps,k):k}}),pt(w,function(){return".".concat(w.styledComponentId)}),a&&dn(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Rt(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Tt=function(e){return Object.assign(e,{isCss:!0})};function Lr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ne(e)||le(e))return Tt(W(Rt(Oe,Ce([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?W(r):Tt(W(Rt(r,t)))}function it(e,t,n){if(n===void 0&&(n=te),!t)throw pe(1,t);var r=function(i){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return e(t,n,Lr.apply(void 0,Ce([i],a,!1)))};return r.attrs=function(i){return it(e,t,R(R({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return it(e,t,R(R({},n),i))},r}var xn=function(e){return it(Dr,e)},d=xn;nn.forEach(function(e){d[e]=xn(e)});var Fr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Br=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Mr=(e,t)=>{const n=T.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:s,children:l,...c},f)=>T.createElement("svg",{ref:f,...Fr,width:i,height:i,stroke:r,strokeWidth:s?Number(a)*24/Number(i):a,className:`lucide lucide-${Br(e)}`,...c},[...t.map(([p,m])=>T.createElement(p,m)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${e}`,n};var N=Mr;const Yr=N("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),K=N("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Pt=N("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),ot=N("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),qr=N("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),Gr=N("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]),Ur=N("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),at=N("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]),_t=N("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),Wr=N("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),Ot=N("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Hr=d.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`,$t=d.div`
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
`,Vr=d.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    overflow: hidden;
    width: 100%;
  }
`,Kr=d.div`
  @media (max-width: 768px) {
    display: none;
  }
`,Nt=d.div`
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
`,Dt=d.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,Lt=d.span`
  font-size: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
`,Ft=d.h4`
  font-size: 1rem;
  font-weight: 700;
  color: #2C3E50;
  margin: 0;
`,Bt=d.p`
  color: #5D6D7E;
  line-height: 1.6;
  margin-bottom: 16px;
  font-size: 0.95rem;
`,Mt=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #28A745;
  font-weight: 600;
  font-size: 0.9rem;
`,Jr=({testimonials:e})=>{const[t,n]=T.useState(0),r=Math.ceil(e.length/3);T.useEffect(()=>{const a=setInterval(()=>{n(s=>(s+1)%r)},5e3);return()=>clearInterval(a)},[r]);const i=[];for(let a=0;a<e.length;a+=3)i.push(e.slice(a,a+3));return o.jsxs(Hr,{children:[o.jsx(Kr,{children:o.jsx($t,{currentSlide:0,children:e.map((a,s)=>o.jsxs(Nt,{isActive:s<3,children:[o.jsxs(Dt,{children:[o.jsx(Lt,{children:a.flag}),o.jsx(Ft,{children:a.origin})]}),o.jsx(Bt,{children:a.content}),o.jsxs(Mt,{children:[o.jsx(ot,{size:16}),a.savings]})]},s))})}),o.jsx(Vr,{children:o.jsx($t,{currentSlide:t,children:i[t]?.map((a,s)=>o.jsxs(Nt,{isActive:!0,children:[o.jsxs(Dt,{children:[o.jsx(Lt,{children:a.flag}),o.jsx(Ft,{children:a.origin})]}),o.jsx(Bt,{children:a.content}),o.jsxs(Mt,{children:[o.jsx(ot,{size:16}),a.savings]})]},s))})})]})},Xr=d.div`
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`,Zr=d.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  
  @media (max-width: 768px) {
    min-height: 90vh;
    padding: 20px 0;
  }
`,Qr=d.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  width: 100%;
  height: 100%;
  z-index: 1;
`,Ge=d.div`
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
`,Ue=d.div`
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
`,ei=d.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 40px 20px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`,ti=d.button`
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
`,ni=d.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  z-index: 2;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
  }
`,ri=d.h1`
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
`,ii=d.h2`
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
`,oi=d.div`
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
    margin: 30px auto 0;
  }
`,We=d.div`
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 16px;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
  }
`,He=d.div`
  font-size: 3rem;
  margin-bottom: 16px;
`,Ve=d.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 16px;
`,Ke=d.p`
  font-size: 1rem;
  color: #5D6D7E;
  line-height: 1.6;
  margin-bottom: 24px;
`,Je=d.button`
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
`,Yt=d.section`
  padding: 80px 20px;
  background: white;
  text-align: center;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 60px 15px;
    background: #F8F9FA;
  }
`,qt=d.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 10px;
  }
`,Gt=d.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
    line-height: 1.3;
  }
`,Ut=d.a`
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
  
  @media (max-width: 768px) {
    padding: 16px 30px;
    font-size: 1rem;
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
  
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
`,ai=d.section`
  padding: 80px 20px;
  background: #F8F9FA;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 60px 15px;
  }
`,si=d.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`,ci=d.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2C3E50;
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
    line-height: 1.3;
  }
`,di=[{flag:"🇵🇱",origin:"Polonia",content:"Doctoralia colleague from Poland saved 400€/year after a 15min call and a personalized document.",savings:"400€/año"},{flag:"🇮🇹",origin:"Italia",content:"Italian friend reduced bill by 25% by switching provider.",savings:"25% reducción"},{flag:"🇧🇷",origin:"Brasil",content:"Brazilian customer saved 500€/year by changing potencia.",savings:"500€/año"},{flag:"🇪🇸",origin:"España",content:"Spanish family reduced electricity bill by 30% after understanding their consumption patterns.",savings:"30% reducción"},{flag:"🇦🇷",origin:"Argentina",content:"Argentinian expat saved 200€/month by optimizing their energy contract.",savings:"200€/mes"},{flag:"🇬🇧",origin:"UK",content:"British colleague discovered hidden fees and saved 350€/year.",savings:"350€/año"},{flag:"🇦🇷",origin:"Argentina",content:"Now it's much easier to understand my bills! Loved the 50€ discount on my next bill after the changes.",savings:"50€ descuento"},{flag:"🇪🇸",origin:"España",content:"Finally I understand my electricity bill! The 50€ discount on my next bill was amazing after the changes.",savings:"50€ descuento"},{flag:"🇧🇷",origin:"Brasil",content:"Everything is so clear now! Got a 50€ discount on my next bill after implementing the recommendations.",savings:"50€ descuento"}],Wt=({onLanguageSelect:e})=>{const[t,n]=T.useState(!1),[r,i]=T.useState("spanish");T.useEffect(()=>{const c=()=>{const f=window.scrollY;n(f>300)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const a=c=>{i(c),e(c)},s=()=>{window.open("https://wa.me/+34671310850","_blank")},l=()=>{const c=document.querySelector('[data-section="testimonials"]');c&&c.scrollIntoView({behavior:"smooth"})};return o.jsxs(Xr,{children:[o.jsxs(Zr,{children:[o.jsx(Qr,{}),o.jsx(Ge,{top:"10%",left:"10%",animationDelay:"0s",children:"⚡"}),o.jsx(Ue,{top:"20%",right:"15%",animationDelay:"1s",children:"💸"}),o.jsx(Ge,{top:"60%",left:"5%",animationDelay:"2s",children:"⚡"}),o.jsx(Ue,{top:"70%",right:"10%",animationDelay:"3s",children:"💸"}),o.jsx(Ge,{top:"40%",left:"20%",animationDelay:"4s",children:"⚡"}),o.jsx(Ue,{top:"30%",right:"25%",animationDelay:"5s",children:"💸"}),o.jsxs(ei,{children:[o.jsx(ri,{children:"BillWise"}),o.jsx(ii,{children:"¿También te sorprende cuánto pagas en tu factura de electricidad? No te preocupes, no estás solo. +85% de los clientes de electricidad no saben cómo funciona o si están pagando un precio justo."}),o.jsxs(oi,{children:[o.jsxs(We,{isHovered:!1,onClick:()=>a("portuguese"),children:[o.jsx(He,{children:"🇧🇷"}),o.jsx(Ve,{children:"Português"}),o.jsx(Ke,{children:"Entenda sua fatura de eletricidade e água em português. Economize dinheiro com nossa análise personalizada."}),o.jsxs(Je,{children:["Quero entender minha fatura agora",o.jsx(K,{size:20})]})]}),o.jsxs(We,{isHovered:!1,onClick:()=>a("spanish"),children:[o.jsx(He,{children:"🇪🇸"}),o.jsx(Ve,{children:"Español"}),o.jsx(Ke,{children:"Entiende tu factura de electricidad y agua en español. Ahorra dinero con nuestro análisis personalizado."}),o.jsxs(Je,{children:["Quiero entender mi factura ahora",o.jsx(K,{size:20})]})]}),o.jsxs(We,{isHovered:!1,onClick:()=>a("english"),children:[o.jsx(He,{children:"🇬🇧"}),o.jsx(Ve,{children:"English"}),o.jsx(Ke,{children:"Understand your electricity and water bill in English. Save money with our personalized analysis."}),o.jsxs(Je,{children:["I want to understand my bill now",o.jsx(K,{size:20})]})]})]})]}),o.jsx(ni,{onClick:l,children:o.jsx(qr,{size:24})})]}),o.jsx(Yt,{children:o.jsxs(qt,{children:[o.jsx(Gt,{children:"¿No tienes tiempo? Solo quieres 50-80€ de descuento"}),o.jsxs(Ut,{href:"https://share.octopusenergy.es/jolly-gull-677",target:"_blank",rel:"noopener noreferrer",children:[o.jsx(at,{size:24}),"Cambiar al mejor proveedor ahora",o.jsx(K,{size:24})]})]})}),o.jsx(ai,{"data-section":"testimonials",children:o.jsxs(si,{children:[o.jsx(ci,{children:"Resultados reales de personas alrededor del mundo"}),o.jsx(Jr,{testimonials:di})]})}),o.jsx(Yt,{children:o.jsxs(qt,{children:[o.jsxs(Gt,{children:[r==="spanish"&&"Inversión de 15€ para aprender todo",r==="portuguese"&&"Investimento de 15€ para aprender tudo",r==="english"&&"Investment of 15€ to learn everything"]}),o.jsxs(Ut,{onClick:()=>window.open("https://wa.me/+34671310850","_blank"),children:[o.jsx(at,{size:24}),r==="spanish"&&"Agendar reunión",r==="portuguese"&&"Agendar reunião",r==="english"&&"Schedule meeting",o.jsx(K,{size:24})]})]})}),o.jsx(ti,{isVisible:t,onClick:s,children:o.jsx(Gr,{size:24})})]})},li=d.div`
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`,pi=d.header`
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
`,ui=d.button`
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
`,hi=d.div`
  max-width: 1200px;
  margin: 0 auto;
  color: white;
`,fi=d.h1`
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
`,mi=d.section`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
  animation: fadeInUp 0.8s ease 0.2s both;
`,Xe=d.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 16px;
`,gi=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 32px;
`,xi=d.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease ${e=>.4+e.index*.1}s both;
  
  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
  }
`,yi=d.div`
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
`,bi=d.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: white;
`,vi=d.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
`,wi=d.section`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
  animation: fadeInUp 0.8s ease 0.4s both;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 16px;
    margin-bottom: 30px;
  }
`,ji=d.div`
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
    margin-top: 1.5rem;
  }
`,Si=d.div`
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
`,ki=d.div`
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
`,Ci=d.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 12px;
`,zi=d.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
`,Ai=d.section`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
  text-align: center;
  animation: fadeInUp 0.8s ease 1s both;
`,Ii=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin: 32px 0;
`,Ei=d.div`
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
`,Ri=d.div`
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
`,Ti=d.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: white;
`,Pi=d.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
`,_i=d.section`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  margin-top: 40px;
  backdrop-filter: blur(10px);
  text-align: center;
  animation: fadeInUp 0.8s ease 1.2s both;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 16px;
    margin-top: 30px;
  }
`,Oi=d.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`,$i=d.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: white;
  animation: fadeInUp 0.8s ease 1.2s both;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 16px;
    line-height: 1.3;
  }
`,Ni=d.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 16px 32px;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 14px 24px;
    font-size: 1rem;
    width: 100%;
    max-width: 280px;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`,Di={spanish:{title:"¿Por qué las personas en España no entienden sus facturas?",problem:{title:"El Problema Real",items:["85% de los clientes no saben qué significa 'valle', 'punta', 'llano'","No entienden por qué pagan tanto en su factura mensual","No saben identificar oportunidades de ahorro"]},solution:{title:"Nuestra Solución",items:[{icon:"📊",title:"Análisis Personalizado",description:"Revisamos tu factura línea por línea y te explicamos cada concepto"},{icon:"💰",title:"Identificación de Ahorros",description:"Encontramos oportunidades específicas para reducir tus costos"},{icon:"⚡",title:"Optimización de Consumo",description:"Te enseñamos cuándo usar más energía para pagar menos"}]},chart:{title:"Análisis de Costos y Ahorros",description:"Recibirás un análisis detallado con gráficos como este, mostrando tus costos actuales vs. potenciales ahorros"},meeting:{title:"Reunión Online Personalizada (15-30 min)",description:"Agenda una sesión individual donde te explicaremos:",benefits:["Análisis completo de tu factura actual","Planilla detallada con todos los costos","Opciones de optimización disponibles"],cta:"Agendar Reunión"}},portuguese:{title:"Por que as pessoas na Espanha não entendem suas faturas?",problem:{title:"O Problema Real",items:["85% dos clientes não sabem o que significa 'valle', 'punta', 'llano'","Não entendem por que pagam tanto na fatura mensal","Não sabem identificar oportunidades de economia"]},solution:{title:"Nossa Solução",items:[{icon:"📊",title:"Análise Personalizada",description:"Revisamos sua fatura linha por linha e explicamos cada conceito"},{icon:"💰",title:"Identificação de Economias",description:"Encontramos oportunidades específicas para reduzir seus custos"},{icon:"⚡",title:"Otimização de Consumo",description:"Ensinamos quando usar mais energia para pagar menos"}]},chart:{title:"Análise de Custos e Economias",description:"Receberá uma análise detalhada com gráficos como este, mostrando seus custos atuais vs. economias potenciais"},meeting:{title:"Reunião Online Personalizada (15-30 min)",description:"Agende uma sessão individual onde explicaremos:",benefits:["Análise completa da sua fatura atual","Planilha detalhada com todos os custos","Opções de otimização disponíveis"],cta:"Agendar Reunião"}},english:{title:"Why don't people in Spain understand their bills?",problem:{title:"The Real Problem",items:["85% of customers don't know what 'valle', 'punta', 'llano' means","They don't understand why they pay so much monthly","They can't identify savings opportunities"]},solution:{title:"Our Solution",items:[{icon:"📊",title:"Personalized Analysis",description:"We review your bill line by line and explain each concept"},{icon:"💰",title:"Savings Identification",description:"We find specific opportunities to reduce your costs"},{icon:"⚡",title:"Consumption Optimization",description:"We teach you when to use more energy to pay less"}]},chart:{title:"Cost Analysis and Savings",description:"You'll receive a detailed analysis with charts like this, showing your current costs vs. potential savings"},meeting:{title:"Personalized Online Meeting (15-30 min)",description:"Schedule an individual session where we'll explain:",benefits:["Complete analysis of your current bill","Detailed spreadsheet with all costs","Available optimization options"],cta:"Schedule Meeting"}}},Li=({language:e,onBack:t})=>{const n=Di[e];return o.jsxs(li,{children:[o.jsx(pi,{children:o.jsxs(ui,{onClick:t,children:[o.jsx(Yr,{size:20}),"Volver"]})}),o.jsxs(hi,{children:[o.jsx(fi,{children:n.title}),o.jsxs(mi,{children:[o.jsxs(Xe,{children:[o.jsx(Ur,{size:32}),n.problem.title]}),o.jsx(gi,{children:n.problem.items.map((r,i)=>o.jsxs(xi,{index:i,children:[o.jsxs(yi,{children:[i===0&&o.jsx(Pt,{size:24}),i===1&&o.jsx(_t,{size:24}),i===2&&o.jsx(Ot,{size:24})]}),o.jsxs(bi,{children:[i===0&&(e==="spanish"?"Confusión en Terminología":e==="portuguese"?"Confusão na Terminologia":"Terminology Confusion"),i===1&&(e==="spanish"?"Costes Inesperados":e==="portuguese"?"Custos Inesperados":"Unexpected Costs"),i===2&&(e==="spanish"||e==="portuguese"?"Oportunidades Perdidas":"Lost Opportunities")]}),o.jsx(vi,{children:r})]},i))})]}),o.jsxs(wi,{children:[o.jsxs(Xe,{children:[o.jsx(ot,{size:32}),n.solution.title]}),o.jsx(ji,{children:n.solution.items.map((r,i)=>o.jsxs(Si,{index:i,children:[o.jsx(ki,{children:r.icon}),o.jsx(Ci,{children:r.title}),o.jsx(zi,{children:r.description})]},i))})]}),o.jsxs(Ai,{children:[o.jsxs(Xe,{children:[o.jsx(Wr,{size:32}),n.meeting.title]}),o.jsx("p",{style:{fontSize:"1.2rem",marginBottom:"1rem"},children:n.meeting.description}),o.jsx(Ii,{children:n.meeting.benefits.map((r,i)=>o.jsxs(Ei,{index:i,children:[o.jsxs(Ri,{children:[i===0&&o.jsx(Pt,{size:24}),i===1&&o.jsx(_t,{size:24}),i===2&&o.jsx(Ot,{size:24})]}),o.jsxs(Ti,{children:[i===0&&(e==="spanish"?"Análisis Completo":e==="portuguese"?"Análise Completa":"Complete Analysis"),i===1&&(e==="spanish"?"Planilla Detallada":e==="portuguese"?"Planilha Detalhada":"Detailed Spreadsheet"),i===2&&(e==="spanish"?"Opciones de Optimización":e==="portuguese"?"Opções de Otimização":"Optimization Options")]}),o.jsx(Pi,{children:r})]},i))})]}),o.jsx(_i,{children:o.jsxs(Oi,{children:[o.jsxs($i,{children:[e==="spanish"&&"Inversión de 15€ para aprender todo",e==="portuguese"&&"Investimento de 15€ para aprender tudo",e==="english"&&"Investment of 15€ to learn everything"]}),o.jsxs(Ni,{onClick:()=>window.open("https://wa.me/+34671310850","_blank"),children:[o.jsx(at,{size:24}),e==="spanish"&&"Agendar reunión",e==="portuguese"&&"Agendar reunião",e==="english"&&"Schedule meeting",o.jsx(K,{size:24})]})]})})]})]})},yn=()=>o.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",fontSize:"1.2rem"},children:[o.jsxs("div",{style:{textAlign:"center"},children:[o.jsx("div",{style:{width:"40px",height:"40px",border:"4px solid rgba(255,255,255,0.3)",borderTop:"4px solid white",borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto 16px"}}),o.jsx("p",{children:"Cargando BillWise..."})]}),o.jsx("style",{children:`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `})]}),Fi=()=>{const[e,t]=T.useState(null),[n,r]=T.useState(!1),i=Rn(),a=async l=>{r(!0);try{t(l),await new Promise(c=>setTimeout(c,300)),i(`/explanation/${l}`)}catch(c){typeof window<"u"&&window.location.hostname==="localhost"&&console.error("Navigation error:",c)}finally{r(!1)}},s=()=>{t(null),i("/")};return n?o.jsx(yn,{}):o.jsxs(Tn,{children:[o.jsx(Le,{path:"/",element:o.jsx(Wt,{onLanguageSelect:a})}),o.jsx(Le,{path:"/explanation/:language",element:o.jsx(Li,{language:e||"spanish",onBack:s})}),o.jsx(Le,{path:"*",element:o.jsx(Wt,{onLanguageSelect:a})})]})};function Bi(){const[e,t]=T.useState(!0);return T.useEffect(()=>{const n=setTimeout(()=>{t(!1)},1e3);return()=>clearTimeout(n)},[]),e?o.jsx(yn,{}):o.jsx(En,{children:o.jsx("div",{className:"App",children:o.jsx(Fi,{})})})}Nn.createRoot(document.getElementById("root")).render(o.jsx(X.StrictMode,{children:o.jsx(Bi,{})}));
