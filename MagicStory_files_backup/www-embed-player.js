(function(){'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ca(this);function u(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(aa(this))}})}return a});
function ia(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ja(a){return a.raw=a}
function la(a,b){a.raw=b;return a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ma(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function na(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var oa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)na(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||oa});
var qa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ra=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=qa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),sa;
if("function"==typeof Object.setPrototypeOf)sa=Object.setPrototypeOf;else{var ta;a:{var ua={a:!0},va={};try{va.__proto__=ua;ta=va.a;break a}catch(a){}ta=!1}sa=ta?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var wa=sa;
function w(a,b){a.prototype=qa(b.prototype);a.prototype.constructor=a;if(wa)wa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function xa(){this.A=!1;this.m=null;this.i=void 0;this.h=1;this.v=this.l=0;this.R=this.j=null}
function ya(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
xa.prototype.D=function(a){this.i=a};
function za(a,b){a.j={exception:b,nd:!0};a.h=a.l||a.v}
xa.prototype.return=function(a){this.j={return:a};this.h=this.v};
xa.prototype.yield=function(a,b){this.h=b;return{value:a}};
xa.prototype.B=function(a){this.h=a};
function Aa(a,b,c){a.l=b;void 0!=c&&(a.v=c)}
function Ba(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Da(a){var b=a.R.splice(0)[0];(b=a.j=a.j||b)?b.nd?a.h=a.l||a.v:void 0!=b.B&&a.v<b.B?(a.h=b.B,a.j=null):a.h=a.v:a.h=0}
function Ea(a){this.h=new xa;this.i=a}
function Fa(a,b){ya(a.h);var c=a.h.m;if(c)return Ha(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ia(a)}
function Ha(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.A=!1,e;var f=e.value}catch(g){return a.h.m=null,za(a.h,g),Ia(a)}a.h.m=null;d.call(a.h,f);return Ia(a)}
function Ia(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.A=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,za(a.h,c)}a.h.A=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.nd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ja(a){this.next=function(b){ya(a.h);a.h.m?b=Ha(a,a.h.m.next,b,a.h.D):(a.h.D(b),b=Ia(a));return b};
this.throw=function(b){ya(a.h);a.h.m?b=Ha(a,a.h.m["throw"],b,a.h.D):(za(a.h,b),b=Ia(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ka(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ka(new Ja(new Ea(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ra});
u("Reflect.setPrototypeOf",function(a){return a?a:wa?function(b,c){try{return wa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.A=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.v()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.v=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.ba),reject:g(this.v)}};
b.prototype.ba=function(g){if(g===this)this.v(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ga(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Y(g):this.m(g)}};
b.prototype.Y=function(g){var h=void 0;try{h=g.then}catch(k){this.v(k);return}"function"==typeof h?this.ta(h,g):this.m(g)};
b.prototype.v=function(g){this.D(2,g)};
b.prototype.m=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.ea();this.R()};
b.prototype.ea=function(){var g=this;e(function(){if(g.W()){var h=fa.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.W=function(){if(this.A)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.R=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ga=function(g){var h=this.l();g.Wb(h.resolve,h.reject)};
b.prototype.ta=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return"function"==typeof r?function(y){try{l(r(y))}catch(z){n(z)}}:t}
var l,n,p=new b(function(r,t){l=r;n=t});
this.Wb(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Wb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.A=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),n=l.next();!n.done;n=l.next())d(n.value).Wb(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(y){return function(z){r[y]=z;t--;0==t&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).Wb(p(r.length-1),n),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||wa});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!na(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!na(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&na(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&na(k,g)&&na(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&na(k,g)&&na(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ia(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&na(h[0],l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)na(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)na(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||fa});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Na=Na||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Oa(a){var b=E("CLOSURE_FLAGS");a=b&&b[a];return null!=a?a:!1}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Pa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(1E9*Math.random()>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va:Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(){return Date.now()}
function $a(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function ab(a){return a}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
$a(bb,Error);bb.prototype.name="CustomError";function cb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;var db=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var eb;function fb(){if(void 0===eb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ab,createScript:ab,createScriptURL:ab})}catch(c){C.console&&C.console.error(c.message)}eb=a}else eb=a}return eb}
;function gb(a,b){this.h=a===hb&&b||""}
gb.prototype.toString=function(){return this.h};
function ib(a){return new gb(hb,a)}
var hb={};ib("");function jb(a){this.h=a}
jb.prototype.toString=function(){return this.h+""};
function kb(a){if(a instanceof jb&&a.constructor===jb)return a.h;Pa(a);return"type_error:TrustedResourceUrl"}
var lb={};function mb(a){var b=fb();a=b?b.createScriptURL(a):a;return new jb(a,lb)}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
var nb=ja([""]),ob=la(["\x00"],["\\0"]),pb=la(["\n"],["\\n"]),qb=la(["\x00"],["\\u0000"]);function rb(a){return-1===a.toString().indexOf("`")}
rb(function(a){return a(nb)})||rb(function(a){return a(ob)})||rb(function(a){return a(pb)})||rb(function(a){return a(qb)});function sb(a){this.h=a}
sb.prototype.toString=function(){return this.h.toString()};
var tb={};var ub=new sb("about:invalid#zClosurez",tb);function vb(a){this.ue=a}
function wb(a){return new vb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var xb=[wb("data"),wb("http"),wb("https"),wb("mailto"),wb("ftp"),new vb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],yb=/^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;
function zb(a){a instanceof sb?a instanceof sb&&a.constructor===sb?a=a.h:(Pa(a),a="type_error:SafeUrl"):a=yb.test(a)?a:void 0;return a}
;function Ab(a,b){b=zb(b);void 0!==b&&(a.href=b)}
;var Bb={};function Cb(){}
function Db(a){this.h=a}
w(Db,Cb);Db.prototype.toString=function(){return this.h};var Eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Fb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Gb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Hb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ib=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Fb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Jb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function Kb(a,b){b=Eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function Lb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Mb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Nb(a){var b=Ob,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Pb(a){for(var b in a)return!1;return!0}
function Qb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Rb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function Sb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Tb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Ub(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Ub(a[c]);return b}
var Vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Vb.length;f++)c=Vb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Xb=Oa(610401301),Yb=Oa(188588736);function Zb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var $b,ac=C.navigator;$b=ac?ac.userAgentData||null:null;function bc(a){return Xb?$b?$b.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Zb().indexOf(a)}
;function cc(){return Xb?!!$b&&0<$b.brands.length:!1}
function dc(){return cc()?!1:F("Opera")}
function ec(){return cc()?!1:F("Trident")||F("MSIE")}
function fc(){return F("Firefox")||F("FxiOS")}
function hc(){return cc()?bc("Chromium"):(F("Chrome")||F("CriOS"))&&!(cc()?0:F("Edge"))||F("Silk")}
;function ic(a){this.h=a}
ic.prototype.toString=function(){return this.h.toString()};function jc(a){var b="true".toString(),c=[new Db(kc[0].toLowerCase(),Bb)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof Db)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function lc(){throw Error("unknown trace type");}
;var mc="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function nc(a,b){if(b instanceof jb)a.href=kb(b).toString();else{if(-1===mc.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=zb(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function oc(a){var b,c;return(a=null==(c=(b=a.document).querySelector)?void 0:c.call(b,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}
;function pc(){}
pc.prototype.toString=function(){return this.ud.toString()};function qc(a){var b=oc(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function rc(a,b){if(b instanceof pc)b=b.ud;else throw Error("");a.textContent=b;qc(a)}
function sc(a,b){a.src=kb(b);qc(a)}
;function tc(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function uc(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=vc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,wc[c])c=wc[c];else{c=String(c);if(!wc[c]){var f=/function\s+([^\(]+)/m.exec(c);wc[c]=f?f[1]:"[Anonymous]"}c=wc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function vc(a,b){b||(b={});b[xc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[xc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=vc(a,b));return c}
function xc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var wc={};function yc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var zc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ac(a){return a?decodeURI(a):a}
function Bc(a,b){return b.match(zc)[a]||null}
function Cc(a){return Ac(Bc(3,a))}
function Dc(a){var b=a.match(zc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Ec(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function Fc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Fc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Gc(a){var b=[],c;for(c in a)Fc(c,a[c],b);return b.join("&")}
function Hc(a,b){b=Gc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function Ic(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var Jc=/#|$/,Kc=/[?&]($|#)/;function Lc(a,b){for(var c=a.search(Jc),d=0,e,f=[];0<=(e=Ic(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Kc,"$1")}
;function Mc(a){this.h=a}
;function Nc(a,b,c){this.l=a;this.j=b;this.fields=c||[];this.h=new Map}
m=Nc.prototype;m.Qd=function(a){var b=B.apply(1,arguments),c=this.yc(b);c?c.push(new Mc(a)):this.Cd(a,b)};
m.Cd=function(a){var b=this.Vc(B.apply(1,arguments));this.h.set(b,[new Mc(a)])};
m.yc=function(){var a=this.Vc(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
m.je=function(){var a=this.yc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.h.clear()};
m.Vc=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Oc(a,b){Nc.call(this,a,3,b)}
w(Oc,Nc);Oc.prototype.i=function(a){var b=B.apply(1,arguments),c=0,d=this.je(b);d&&(c=d.h);this.Cd(c+a,b)};function Pc(a,b){Nc.call(this,a,2,b)}
w(Pc,Nc);Pc.prototype.record=function(a){this.Qd(a,B.apply(1,arguments))};function Qc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Rc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?Rc.apply(null,d):Qc(d)}}
;function H(){this.ob=this.ob;this.v=this.v}
m=H.prototype;m.ob=!1;m.Z=function(){return this.ob};
m.dispose=function(){this.ob||(this.ob=!0,this.S())};
function Sc(a,b){a.addOnDisposeCallback(Ya(Qc,b))}
m.addOnDisposeCallback=function(a,b){this.ob?void 0!==b?a.call(b):a():(this.v||(this.v=[]),this.v.push(void 0!==b?Xa(a,b):a))};
m.S=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function Tc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Tc.prototype.stopPropagation=function(){this.j=!0};
Tc.prototype.preventDefault=function(){this.defaultPrevented=!0};var Uc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Vc(){return Xb?!!$b&&!!$b.platform:!1}
function Wc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function Xc(a){Xc[" "](a);return a}
Xc[" "]=function(){};var Yc=dc(),Zc=ec(),$c=F("Edge"),ad=F("Gecko")&&!(-1!=Zb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),bd=-1!=Zb().toLowerCase().indexOf("webkit")&&!F("Edge");bd&&F("Mobile");Vc()||F("Macintosh");Vc()||F("Windows");(Vc()?"Linux"===$b.platform:F("Linux"))||Vc()||F("CrOS");var cd=Vc()?"Android"===$b.platform:F("Android");Wc();F("iPad");F("iPod");Wc()||F("iPad")||F("iPod");Zb().toLowerCase().indexOf("kaios");
function dd(){var a=C.document;return a?a.documentMode:void 0}
var ed;a:{var fd="",gd=function(){var a=Zb();if(ad)return/rv:([^\);]+)(\)|;)/.exec(a);if($c)return/Edge\/([\d\.]+)/.exec(a);if(Zc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(bd)return/WebKit\/(\S+)/.exec(a);if(Yc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
gd&&(fd=gd?gd[1]:"");if(Zc){var hd=dd();if(null!=hd&&hd>parseFloat(fd)){ed=String(hd);break a}}ed=fd}var id=ed,jd;if(C.document&&Zc){var kd=dd();jd=kd?kd:parseInt(id,10)||void 0}else jd=void 0;var ld=jd;function md(a,b){Tc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
$a(md,Tc);var nd={2:"touch",3:"pen",4:"mouse"};
md.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(ad){a:{try{Xc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:nd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&md.Aa.preventDefault.call(this)};
md.prototype.stopPropagation=function(){md.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
md.prototype.preventDefault=function(){md.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var od="closure_listenable_"+(1E6*Math.random()|0);var pd=0;function qd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.cc=e;this.key=++pd;this.Mb=this.Vb=!1}
function rd(a){a.Mb=!0;a.listener=null;a.proxy=null;a.src=null;a.cc=null}
;function sd(a){this.src=a;this.listeners={};this.h=0}
sd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=td(a,b,d,e);-1<g?(b=a[g],c||(b.Vb=!1)):(b=new qd(b,this.src,f,!!d,e),b.Vb=c,a.push(b));return b};
sd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=td(e,b,c,d);return-1<b?(rd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ud(a,b){var c=b.type;c in a.listeners&&Kb(a.listeners[c],b)&&(rd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function td(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Mb&&f.listener==b&&f.capture==!!c&&f.cc==d)return e}return-1}
;var vd="closure_lm_"+(1E6*Math.random()|0),wd={},xd=0;function yd(a,b,c,d,e){if(d&&d.once)zd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)yd(a,b[f],c,d,e);else c=Ad(c),a&&a[od]?a.listen(b,c,Ra(d)?!!d.capture:!!d,e):Bd(a,b,c,!1,d,e)}
function Bd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=Cd(a);h||(a[vd]=h=new sd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Dd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Uc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ed(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");xd++}}
function Dd(){function a(c){return b.call(a.src,a.listener,c)}
var b=Fd;return a}
function zd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)zd(a,b[f],c,d,e);else c=Ad(c),a&&a[od]?a.h.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):Bd(a,b,c,!0,d,e)}
function Gd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Gd(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=Ad(c),a&&a[od])?a.h.remove(String(b),c,d,e):a&&(a=Cd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=td(b,c,d,e)),(c=-1<a?b[a]:null)&&Hd(c))}
function Hd(a){if("number"!==typeof a&&a&&!a.Mb){var b=a.src;if(b&&b[od])ud(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ed(c),d):b.addListener&&b.removeListener&&b.removeListener(d);xd--;(c=Cd(b))?(ud(c,a),0==c.h&&(c.src=null,b[vd]=null)):rd(a)}}}
function Ed(a){return a in wd?wd[a]:wd[a]="on"+a}
function Fd(a,b){if(a.Mb)a=!0;else{b=new md(b,this);var c=a.listener,d=a.cc||a.src;a.Vb&&Hd(a);a=c.call(d,b)}return a}
function Cd(a){a=a[vd];return a instanceof sd?a:null}
var Id="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ad(a){if("function"===typeof a)return a;a[Id]||(a[Id]=function(b){return a.handleEvent(b)});
return a[Id]}
;function Jd(){H.call(this);this.h=new sd(this);this.Za=this;this.ea=null}
$a(Jd,H);Jd.prototype[od]=!0;m=Jd.prototype;m.addEventListener=function(a,b,c,d){yd(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){Gd(this,a,b,c,d)};
function Kd(a,b){var c=a.ea;if(c){var d=[];for(var e=1;c;c=c.ea)d.push(c),++e}a=a.Za;c=b.type||b;"string"===typeof b?b=new Tc(b,a):b instanceof Tc?b.target=b.target||a:(e=b,b=new Tc(c,a),Wb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Ld(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Ld(g,c,!0,b)&&e,b.j||(e=Ld(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Ld(g,c,!1,b)&&e}
m.S=function(){Jd.Aa.S.call(this);this.removeAllListeners();this.ea=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,rd(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Ld(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Mb&&g.capture==c){var h=g.listener,k=g.cc||g.src;g.Vb&&ud(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Md(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Md.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Nd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function Od(){}
function Pd(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Qd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Qd.prototype;m.clone=function(){return new Qd(this.x,this.y)};
m.equals=function(a){return a instanceof Qd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Rd(a,b){this.width=a;this.height=b}
m=Rd.prototype;m.clone=function(){return new Rd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Sd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Td(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Ud(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Vd;function Wd(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Td("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!ec()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.bd;c.bd=null;e()}};
return function(e){d.next={bd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Xd(a){C.setTimeout(function(){throw a;},0)}
;function Yd(){this.i=this.h=null}
Yd.prototype.add=function(a,b){var c=Zd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Yd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Zd=new Md(function(){return new $d},function(a){return a.reset()});
function $d(){this.next=this.scope=this.h=null}
$d.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
$d.prototype.reset=function(){this.next=this.scope=this.h=null};var ae,be=!1,ce=new Yd;function de(a,b){ae||ee();be||(ae(),be=!0);ce.add(a,b)}
function ee(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);ae=function(){a.then(fe)}}else ae=function(){var b=fe;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(cc()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Vd||(Vd=Wd()),Vd(b)):C.setImmediate(b)}}
function fe(){for(var a;a=ce.remove();){try{a.h.call(a.scope)}catch(b){Xd(b)}Nd(Zd,a)}be=!1}
;function ge(a){this.h=0;this.A=void 0;this.l=this.i=this.j=null;this.v=this.m=!1;if(a!=Od)try{var b=this;a.call(void 0,function(c){he(b,2,c)},function(c){he(b,3,c)})}catch(c){he(this,3,c)}}
function ie(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
ie.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var je=new Md(function(){return new ie},function(a){a.reset()});
function ke(a,b,c){var d=je.get();d.i=a;d.h=b;d.context=c;return d}
function le(a){return new ge(function(b,c){c(a)})}
ge.prototype.then=function(a,b,c){return me(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
ge.prototype.$goog_Thenable=!0;m=ge.prototype;m.oc=function(a,b){return me(this,null,a,b)};
m.catch=ge.prototype.oc;m.cancel=function(a){if(0==this.h){var b=new ne(a);de(function(){oe(this,b)},this)}};
function oe(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?oe(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):pe(c),qe(c,e,3,b)))}a.j=null}else he(a,3,b)}
function re(a,b){a.i||2!=a.h&&3!=a.h||se(a);a.l?a.l.next=b:a.i=b;a.l=b}
function me(a,b,c,d){var e=ke(null,null,null);e.child=new ge(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ne?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;re(a,e);return e.child}
m.kf=function(a){this.h=0;he(this,2,a)};
m.lf=function(a){this.h=0;he(this,3,a)};
function he(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.kf,f=a.lf;if(d instanceof ge){re(d,ke(e||Od,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if("function"===typeof k){te(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.A=c,a.h=b,a.j=null,se(a),3!=b||c instanceof ne||ue(a,c))}}
function te(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function se(a){a.m||(a.m=!0,de(a.be,a))}
function pe(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.be=function(){for(var a;a=pe(this);)qe(this,a,this.h,this.A);this.m=!1};
function qe(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.v;a=a.j)a.v=!1;if(b.child)b.child.j=null,ve(b,c,d);else try{b.j?b.i.call(b.context):ve(b,c,d)}catch(e){we.call(null,e)}Nd(je,b)}
function ve(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function ue(a,b){a.v=!0;de(function(){a.v&&we.call(null,b)})}
var we=Xd;function ne(a){bb.call(this,a)}
$a(ne,bb);ne.prototype.name="cancel";function xe(a,b){Jd.call(this);this.j=a||1;this.i=b||C;this.l=Xa(this.hf,this);this.m=Za()}
$a(xe,Jd);m=xe.prototype;m.enabled=!1;m.Da=null;m.setInterval=function(a){this.j=a;this.Da&&this.enabled?(this.stop(),this.start()):this.Da&&this.stop()};
m.hf=function(){if(this.enabled){var a=Za()-this.m;0<a&&a<.8*this.j?this.Da=this.i.setTimeout(this.l,this.j-a):(this.Da&&(this.i.clearTimeout(this.Da),this.Da=null),Kd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Da||(this.Da=this.i.setTimeout(this.l,this.j),this.m=Za())};
m.stop=function(){this.enabled=!1;this.Da&&(this.i.clearTimeout(this.Da),this.Da=null)};
m.S=function(){xe.Aa.S.call(this);this.stop();delete this.i};
function ye(a,b,c){if("function"===typeof a)c&&(a=Xa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Xa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function ze(a){H.call(this);this.D=a;this.j=0;this.l=100;this.m=!1;this.i=new Map;this.A=new Set;this.flushInterval=3E4;this.h=new xe(this.flushInterval);this.h.listen("tick",this.Oa,!1,this);Sc(this,this.h)}
w(ze,H);m=ze.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function Ae(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.Oa()}
m.Oa=function(){var a=this.i.values();a=[].concat(ma(a)).filter(function(b){return b.h.size});
a.length&&this.D.flush(a,this.m);Be(a);this.j=0;this.h.enabled&&this.h.stop()};
m.Rb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Oc(a,b))};
m.uc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Pc(a,b))};
function Ce(a,b){return a.A.has(b)?void 0:a.i.get(b)}
m.pc=function(a){this.Od(a,1,B.apply(1,arguments))};
m.Od=function(a,b){var c=B.apply(2,arguments),d=Ce(this,a);d&&d instanceof Oc&&(d.i(b,c),Ae(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=Ce(this,a);d&&d instanceof Pc&&(d.record(b,c),Ae(this))};
function Be(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function De(a){this.h=a;this.h.Rb("/client_streamz/bg/fic",{na:3,ma:"ke"})}
function Ee(a){this.h=a;this.h.Rb("/client_streamz/bg/fiec",{na:3,ma:"rk"},{na:3,ma:"ke"},{na:2,ma:"ec"},{na:3,ma:"em"})}
function Fe(a){this.h=a;this.h.uc("/client_streamz/bg/fil",{na:3,ma:"rk"},{na:3,ma:"ke"})}
Fe.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function Ge(a){this.h=a;this.h.Rb("/client_streamz/bg/fcc",{na:2,ma:"ph"},{na:3,ma:"ke"})}
function He(a){this.h=a;this.h.uc("/client_streamz/bg/fcd",{na:2,ma:"ph"},{na:3,ma:"ke"})}
He.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fcd",a,b,c)};
function Ie(a){this.h=a;this.h.Rb("/client_streamz/bg/fsc",{na:3,ma:"rk"},{na:3,ma:"ke"})}
function Je(a){this.h=a;this.h.uc("/client_streamz/bg/fsl",{na:3,ma:"rk"},{na:3,ma:"ke"})}
Je.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fsl",a,b,c)};var Ke={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function Le(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=Me(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=Ne(a,h),d+=Ne(a,h+4),e+=Ne(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return Ke.toString(e)}
function Me(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function Ne(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;fc();var Oe=Wc()||F("iPod"),Pe=F("iPad");!F("Android")||hc()||fc()||dc()||F("Silk");hc();var Qe=F("Safari")&&!(hc()||(cc()?0:F("Coast"))||dc()||(cc()?0:F("Edge"))||(cc()?bc("Microsoft Edge"):F("Edg/"))||(cc()?bc("Opera"):F("OPR"))||fc()||F("Silk")||F("Android"))&&!(Wc()||F("iPad")||F("iPod"));var Re={},Se=null;function Te(a,b){Qa(a);void 0===b&&(b=0);Ue();b=Re[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Ve(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;We(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function We(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=Se[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Ue();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Ue(){if(!Se){Se={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Re[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Se[f]&&(Se[f]=e)}}}}
;var Xe="undefined"!==typeof Uint8Array,Ye=!Zc&&"function"===typeof btoa;function Ze(a){if(!Ye)return Te(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var $e=/[-_.]/g,af={"-":"+",_:"/",".":"="};function bf(a){return af[a]||""}
function cf(a){return Xe&&null!=a&&a instanceof Uint8Array}
var df={};var ef;function ff(a){if(a!==df)throw Error("illegal external caller");}
function gf(a,b){ff(b);this.h=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
gf.prototype.sizeBytes=function(){ff(df);var a=this.h;if(null!=a&&!cf(a))if("string"===typeof a)if(Ye){$e.test(a)&&(a=a.replace($e,bf));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Ve(a);else Pa(a),a=null;return(a=null==a?a:this.h=a)?a.length:0};function hf(){return"function"===typeof BigInt}
;function jf(a){return Array.prototype.slice.call(a)}
;function kf(a){return"function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():a}
var lf=kf(),mf=kf("2ex");Math.max.apply(Math,ma(Object.values({Nf:1,Lf:2,Kf:4,Qf:8,Pf:16,Of:32,Bf:64,Sf:128,Jf:256,If:512,Mf:1024,Gf:2048,Rf:4096,Hf:8192})));var nf=lf?function(a,b){a[lf]|=b}:function(a,b){void 0!==a.Sa?a.Sa|=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function of(a,b,c){return c?a|b:a&~b}
var pf=lf?function(a){return a[lf]|0}:function(a){return a.Sa|0},qf=lf?function(a){return a[lf]}:function(a){return a.Sa},rf=lf?function(a,b){a[lf]=b;
return a}:function(a,b){void 0!==a.Sa?a.Sa=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}});return a};
function sf(a,b){rf(b,(a|0)&-14591)}
function tf(a,b){rf(b,(a|34)&-14557)}
function uf(a){a=a>>14&1023;return 0===a?536870912:a}
;var vf={},wf={};function xf(a){return!(!a||"object"!==typeof a||a.h!==wf)}
function yf(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var zf;function Af(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=pf(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;rf(a,d|1);return!0}
var Bf,Cf=[];rf(Cf,55);Bf=Object.freeze(Cf);function Df(a){if(a&2)throw Error();}
Object.freeze(new function(){});
Object.freeze(new function(){});var Ef=0,Ff=0;function Gf(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=v(Hf(c,a)),b=c.next().value,a=c.next().value,c=b);Ef=c>>>0;Ff=a>>>0}
function If(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else hf()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+Jf(c)+Jf(a));return c}
function Jf(a){a=String(a);return"0000000".slice(a.length)+a}
function Kf(){var a=Ef,b=Ff;b&2147483648?hf()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=v(Hf(a,b)),a=b.next().value,b=b.next().value,a="-"+If(a,b)):a=If(a,b);return a}
function Hf(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;var Lf;function Mf(a){a=Error(a);tc(a,"warning");return a}
;function Nf(a){return a.displayName||a.name||"unknown type name"}
function Of(a){if(null!=a&&"boolean"!==typeof a)throw Error("Expected boolean but got "+Pa(a)+": "+a);return a}
var Pf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Qf(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:Pf.test(a)}
function Rf(a){if(null!=a){if("number"!==typeof a)throw Mf("int32");if(!Number.isFinite(a))throw Mf("int32");a|=0}return a}
function Sf(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return Number.isFinite(a)?a|0:void 0}
function Tf(a){if(null!=a){var b=!!b;if(!Qf(a))throw Mf("int64");a="string"===typeof a?Uf(a):b?Vf(a):Wf(a)}return a}
function Xf(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function Wf(a){Qf(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){Gf(a);var b=Ef,c=Ff;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function Vf(a){Qf(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);Xf(b)?a=b:(Gf(a),a=Kf())}return a}
function Uf(a){Qf(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");-1!==b&&(a=a.substring(0,b));a.indexOf(".");if(!Xf(a)){if(16>a.length)Gf(Number(a));else if(hf())a=BigInt(a),Ef=Number(a&BigInt(4294967295))>>>0,Ff=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);Ff=Ef=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Ff*=1E6,Ef=1E6*Ef+d,4294967296<=Ef&&(Ff+=Math.trunc(Ef/4294967296),Ff>>>=0,Ef>>>=0);b&&(b=v(Hf(Ef,Ff)),
a=b.next().value,b=b.next().value,Ef=a,Ff=b)}a=Kf()}return a}
function Yf(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Zf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Nf(b)+" but got "+(a&&Nf(a.constructor)));}
function $f(a,b,c){if(null!=a&&"object"===typeof a&&a.Jc===vf)return a;if(Array.isArray(a)){var d=pf(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&rf(a,e);return new b(a)}}
;var ag;function bg(a,b){pf(b);ag=b;a=new a(b);ag=void 0;return a}
function I(a,b,c){null==a&&(a=ag);ag=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=pf(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(yf(c[f])){d|=256;b=f-(+!!(d&512)-1);if(1024<=b)throw Error("pvtlmt");d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error("spvt");d=d&-16760833|(b&1023)<<
14}}}rf(a,d);return a}
;function cg(a,b){return dg(b)}
function dg(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Af(a,void 0,0))return}else{if(cf(a))return Ze(a);if(a instanceof gf){var b=a.h;return null==b?"":"string"===typeof b?b:a.h=Ze(b)}}}return a}
;function eg(a,b,c){a=jf(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function fg(a,b,c,d,e){if(null!=a){if(Array.isArray(a))a=Af(a,void 0,0)?void 0:e&&pf(a)&2?a:gg(a,b,c,void 0!==d,e);else if(yf(a)){var f={},g;for(g in a)f[g]=fg(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function gg(a,b,c,d,e){var f=d||c?pf(a):0;d=d?!!(f&32):void 0;a=jf(a);for(var g=0;g<a.length;g++)a[g]=fg(a[g],b,c,d,e);c&&c(f,a);return a}
function hg(a){return a.Jc===vf?a.toJSON():dg(a)}
;function ig(a,b,c){c=void 0===c?tf:c;if(null!=a){if(Xe&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=pf(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?rf(a,(d|34)&-12293):gg(a,ig,d&4?tf:c,!0,!0)}a.Jc===vf&&(c=a.F,d=qf(c),a=d&2?a:bg(a.constructor,jg(c,d,!0)));return a}}
function jg(a,b,c){var d=c||b&2?tf:sf,e=!!(b&32);a=eg(a,b,function(f){return ig(f,e,d)});
nf(a,32|(c?2:0));return a}
function kg(a){var b=a.F,c=qf(b);return c&2?bg(a.constructor,jg(b,c,!1)):a}
;function lg(a,b){a=a.F;return mg(a,qf(a),b)}
function ng(a,b,c,d){b=d+(+!!(b&512)-1);if(!(0>b||b>=a.length||b>=c))return a[b]}
function mg(a,b,c,d){if(-1===c)return null;var e=uf(b);if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],null!=d)){if(ng(a,b,e,c)&&null!=mf){var g;a=null!=(g=Lf)?g:Lf={};g=a[mf]||0;4<=g||(a[mf]=g+1,g=Error(),tc(g,"incident"),Xd(g))}return d}return ng(a,b,e,c)}}
function og(a,b,c){var d=a.F,e=qf(d);Df(e);pg(d,e,b,c);return a}
function pg(a,b,c,d,e){yf(d);var f=uf(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&rf(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function qg(a){return void 0!==rg(a,sg,11,!1)}
function tg(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function ug(a,b,c,d){a=a.F;var e=qf(a);Df(e);for(var f=e,g=0,h=0;h<c.length;h++){var k=c[h];null!=mg(a,f,k)&&(0!==g&&(f=pg(a,f,g)),g=k)}(c=g)&&c!==b&&null!=d&&(e=pg(a,e,c));pg(a,e,b,d)}
function rg(a,b,c,d){a=a.F;var e=qf(a),f=mg(a,e,c,d);b=$f(f,b,e);b!==f&&null!=b&&pg(a,e,c,b,d);return b}
function vg(a,b,c,d){d=void 0===d?!1:d;b=rg(a,b,c,d);if(null==b)return b;a=a.F;var e=qf(a);if(!(e&2)){var f=kg(b);f!==b&&(b=f,pg(a,e,c,b,d))}return b}
function wg(a,b,c,d){null!=d?Zf(d,b):d=void 0;return og(a,c,d)}
function xg(a,b,c,d){var e=a.F,f=qf(e);Df(f);if(null==d)return pg(e,f,c),a;if(!Array.isArray(d))throw Mf();for(var g=pf(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),n=!l&&!1,p=!0,r=!0,t=0;t<d.length;t++){var y=d[t];Zf(y,b);k||(y=!!(pf(y.F)&2),p&&(p=!y),r&&(r=y))}k||(g=of(g,5,!0),g=of(g,8,p),g=of(g,16,r));if(n||l&&g!==h)d=jf(d),h=0,g=yg(g,f,!0);g!==h&&rf(d,g);pg(e,f,c,d);return a}
function yg(a,b,c){a=of(a,2,!!(2&b));a=of(a,32,!!(32&b)&&c);return a=of(a,2048,!1)}
function zg(a,b){a=lg(a,b);var c;null==a?c=a:Qf(a)?"number"===typeof a?c=Wf(a):c=Uf(a):c=void 0;return c}
function Ag(a){a=lg(a,1);var b=void 0===b?!1:b;b=null==a?a:Qf(a)?"string"===typeof a?Uf(a):b?Vf(a):Wf(a):void 0;return b}
function Bg(a){a=lg(a,1);return null==a?a:Number.isFinite(a)?a|0:void 0}
function Cg(a,b,c){return og(a,b,Yf(c))}
function Dg(a,b,c){if(null!=c){if(!Number.isFinite(c))throw Mf("enum");c|=0}return og(a,b,c)}
;function K(a,b,c){this.F=I(a,b,c)}
m=K.prototype;m.toJSON=function(){if(zf)var a=Eg(this,this.F,!1);else a=gg(this.F,hg,void 0,void 0,!1),a=Eg(this,a,!0);return a};
m.serialize=function(){zf=!0;try{return JSON.stringify(this.toJSON(),cg)}finally{zf=!1}};
function Fg(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");nf(b,32);return bg(a,b)}
m.clone=function(){var a=this.F,b=qf(a);return bg(this.constructor,jg(a,b,!1))};
m.Jc=vf;m.toString=function(){return Eg(this,this.F,!1).toString()};
function Eg(a,b,c){var d=Yb?void 0:a.constructor.Ua;var e=qf(c?a.F:b);a=b.length;if(!a)return b;var f;if(yf(c=b[a-1])){a:{var g=c;var h={},k=!1,l;for(l in g){var n=g[l];if(Array.isArray(n)){var p=n;if(Af(n,d,+l)||xf(n)&&0===n.size)n=null;n!=p&&(k=!0)}null!=n?h[l]=n:k=!0}if(k){for(var r in h){g=h;break a}g=null}}g!=c&&(f=!0);a--}for(l=+!!(e&512)-1;0<a;a--){r=a-1;c=b[r];r-=l;if(!(null==c||Af(c,d,r)||xf(c)&&0===c.size))break;var t=!0}if(!f&&!t)return b;b=Array.prototype.slice.call(b,0,a);g&&b.push(g);
return b}
;function Gg(a){this.F=I(a)}
w(Gg,K);var Hg=[1,2,3];function Ig(a){this.F=I(a)}
w(Ig,K);var Jg=[1,2,3];function Kg(a){this.F=I(a)}
w(Kg,K);Kg.Ua=[1];function Lg(a){this.F=I(a)}
w(Lg,K);Lg.Ua=[3,6,4];function Mg(a){this.F=I(a)}
w(Mg,K);Mg.Ua=[1];function Ng(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";0===a.indexOf("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Og(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var r=g,t=0;64>t;t+=4)r[t/4]=p[t]<<24|p[t+1]<<16|p[t+2]<<8|p[t+3];for(t=16;80>t;t++)p=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(p<<1|p>>>31)&4294967295;p=e[0];var y=e[1],z=e[2],x=e[3],J=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var G=x^y&(z^x);var R=1518500249}else G=y^z^x,R=1859775393;else 60>t?(G=y&z|x&(y|z),R=2400959708):(G=y^z^x,R=3395469782);G=((p<<5|p>>>27)&4294967295)+G+J+R+r[t]&4294967295;J=x;x=z;z=(y<<30|y>>>2)&4294967295;y=p;p=G}e[0]=e[0]+p&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+x&4294967295;e[4]=e[4]+J&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var t=[],y=0,z=p.length;y<z;++y)t.push(p.charCodeAt(y));p=t}r||(r=p.length);t=0;if(0==l)for(;t+64<r;)b(p.slice(t,t+64)),t+=64,n+=64;for(;t<r;)if(f[l++]=p[t++],n++,64==l)for(l=0,b(f);t+64<r;)b(p.slice(t,t+64)),t+=64,n+=64}
function d(){var p=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var t=63;56<=t;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;5>t;t++)for(var y=24;0<=y;y-=8)p[r++]=e[t]>>y&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Xd:function(){for(var p=d(),r="",t=0;t<p.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(p[t]/16))+"0123456789ABCDEF".charAt(p[t]%16);return r}}}
;function Pg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Qg(Ng(d),a,c||null)].join(" "):null}
function Qg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],Fb(d,function(h){e.push(h)}),Rg(e.join(" "));
var f=[],g=[];Fb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];Fb(d,function(h){e.push(h)});
a=Rg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Rg(a){var b=Og();b.update(a);return b.Xd().toLowerCase()}
;var Ug={};function Vg(a){this.h=a||{cookie:""}}
m=Vg.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Kb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Qe;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Kb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=db(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Kb:0,path:b,domain:c});return d};
m.Bc=function(){return Wg(this).keys};
m.clear=function(){for(var a=Wg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Wg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=db(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Xg=new Vg("undefined"==typeof document?null:document);function Yg(a){return!!Ug.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Zg(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Yg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new Vg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Yg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function $g(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new Vg(document)).get(b));return a?Pg(a,c,d):null}
function ah(a,b){b=void 0===b?!1:b;var c=Ng(String(C.location.href)),d=[];if(Zg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new Vg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Pg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Yg(b)&&((b=$g("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=$g("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function bh(a){this.F=I(a)}
w(bh,K);bh.Ua=[2];function ch(a){Jd.call(this);this.intervalMs=a;this.enabled=!1;this.i=function(){return Za()};
this.j=this.i()}
w(ch,Jd);ch.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
ch.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.j=this.i())};
ch.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
ch.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.i()-this.j,0);b<.8*this.intervalMs?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),Kd(this,"tick"),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function dh(a){this.F=I(a)}
w(dh,K);function eh(a){this.F=I(a)}
w(eh,K);function fh(a){this.h=this.i=this.j=a}
fh.prototype.reset=function(){this.h=this.i=this.j};
fh.prototype.getValue=function(){return this.i};function gh(a){this.F=I(a)}
w(gh,K);gh.prototype.ac=function(){return Bg(this)};function hh(a){this.F=I(a)}
w(hh,K);function ih(a){this.F=I(a)}
w(ih,K);function jh(a,b){xg(a,hh,1,b)}
ih.Ua=[1];function sg(a){this.F=I(a)}
w(sg,K);var kh=["platform","platformVersion","architecture","model","uaFullVersion"],lh=new ih,mh=null;function nh(a,b){b=void 0===b?kh:b;if(!mh){var c;a=null==(c=a.navigator)?void 0:c.userAgentData;if(!a||"function"!==typeof a.getHighEntropyValues||a.brands&&"function"!==typeof a.brands.map)return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new hh;f=Cg(f,1,e.brand);return Cg(f,2,e.version)});
jh(og(lh,2,Of(a.mobile)),c);mh=a.getHighEntropyValues(b)}var d=new Set(b);return mh.then(function(e){var f=lh.clone();d.has("platform")&&Cg(f,3,e.platform);d.has("platformVersion")&&Cg(f,4,e.platformVersion);d.has("architecture")&&Cg(f,5,e.architecture);d.has("model")&&Cg(f,6,e.model);d.has("uaFullVersion")&&Cg(f,7,e.uaFullVersion);return f}).catch(function(){return lh.clone()})}
;function oh(a){this.F=I(a)}
w(oh,K);function ph(a){this.F=I(a,4)}
w(ph,K);function qh(a){this.F=I(a,35)}
w(qh,K);qh.Ua=[3,20,27];function rh(a){this.F=I(a,19)}
w(rh,K);rh.prototype.Nb=function(a){return Dg(this,2,a)};
rh.Ua=[3,5];function sh(a){this.F=I(a,8)}
w(sh,K);var th=function(a){return function(b){return Fg(a,b)}}(sh);
sh.Ua=[5,6,7];function uh(a){this.F=I(a)}
w(uh,K);var vh=new function(a,b){this.h=a;this.ctor=b;this.isRepeated=0;this.i=vg;this.defaultValue=void 0}(175237375,uh);function wh(a){H.call(this);var b=this;this.componentId="";this.j=[];this.ba="";this.pageId=null;this.ea=this.Y=-1;this.experimentIds=null;this.W=this.m=0;this.ga=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Gb=a.Gb||function(){};
this.i=new xh(a.logSource,a.eb);this.network=a.network;this.yb=a.yb||null;this.bufferSize=1E3;this.A=a.mf||null;this.sessionIndex=a.sessionIndex||null;this.Eb=a.Eb||!1;this.logger=null;this.withCredentials=!a.ed;this.eb=a.eb||!1;this.R="undefined"!==typeof URLSearchParams&&!!(new URL(yh())).searchParams&&!!(new URL(yh())).searchParams.set;var c=Dg(new oh,1,1);zh(this.i,c);this.l=new fh(1E4);this.h=new ch(this.l.getValue());a=Ah(this,a.Xc);yd(this.h,"tick",a,!1,this);this.D=new ch(6E5);yd(this.D,"tick",
a,!1,this);this.Eb||this.D.start();this.eb||(yd(document,"visibilitychange",function(){"hidden"===document.visibilityState&&b.wc()}),yd(document,"pagehide",this.wc,!1,this))}
w(wh,H);function Ah(a,b){return a.R?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
m=wh.prototype;m.S=function(){this.wc();this.h.stop();this.D.stop();H.prototype.S.call(this)};
m.log=function(a){if(this.R){a=a.clone();var b=this.ga++;a=og(a,21,Tf(b));this.componentId&&Cg(a,26,this.componentId);if(!Ag(a)){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";og(b,1,Tf(c))}null==zg(a,15)&&og(a,15,Tf(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=a,c=this.experimentIds.clone(),wg(b,bh,16,c));b=this.j.length-this.bufferSize+1;0<b&&(this.j.splice(0,b),this.m+=b);this.j.push(a);this.Eb||this.h.enabled||this.h.start()}};
m.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else{var d=Date.now();if(this.ea>d&&this.Y<d)b&&b("throttled");else{this.network&&("function"===typeof this.network.ac?Bh(this.i,this.network.ac()):Bh(this.i,0));var e=Ch(this.i,this.j,this.m,this.W,this.yb);d={};var f=this.Gb();f&&(d.Authorization=f);this.A||(this.A=yh());try{var g=(new URL(this.A)).toString()}catch(k){g=(new URL(this.A,window.location.origin)).toString()}g=new URL(g);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,
g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:this.pageId}),g.searchParams.set("pageId",this.pageId));if(f&&this.ba===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.m=0;var h=e.serialize();d={url:g.toString(),body:h,Vf:1,yd:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis};g=function(k){c.l.reset();c.h.setInterval(c.l.getValue());if(k){var l=null;try{var n=JSON.stringify(JSON.parse(k.replace(")]}'\n",
"")));l=th(n)}catch(r){}if(l){k=Number;n="-1";n=void 0===n?"0":n;var p=Ag(l);k=k(null!=p?p:n);0<k&&(c.Y=Date.now(),c.ea=c.Y+k);l=vh.ctor?vh.i(l,vh.ctor,vh.h,!0):vh.i(l,vh.h,null,!0);if(k=null===l?void 0:l)l=-1,l=void 0===l?0:l,k=Sf(lg(k,1)),l=null!=k?k:l,-1!==l&&(c.l=new fh(1>l?1:l),c.h.setInterval(c.l.getValue()))}}a&&a();c.W=0};
h=function(k,l){var n=e.F;var p=qf(n),r=p,t=!(2&p),y=!!(2&r),z=y?1:2;p=1===z;z=2===z;t&&(t=!y);y=mg(n,r,3);y=Array.isArray(y)?y:Bf;var x=pf(y),J=!!(4&x);if(!J){var G=x;0===G&&(G=yg(G,r,!1));G=of(G,1,!0);x=y;var R=r,N=!!(2&G);N&&(R=of(R,2,!0));for(var da=!N,Ca=!0,O=0,ea=0;O<x.length;O++){var ka=$f(x[O],qh,R);if(ka instanceof qh){if(!N){var pa=!!(pf(ka.F)&2);da&&(da=!pa);Ca&&(Ca=pa)}x[ea++]=ka}}ea<O&&(x.length=ea);G=of(G,4,!0);G=of(G,16,Ca);G=of(G,8,da);rf(x,G);N&&Object.freeze(x);x=G}G=!!(8&x)||p&&
!y.length;if(t&&!G){tg(x)&&(y=jf(y),x=yg(x,r,!1),r=pg(n,r,3,y));t=y;for(G=0;G<t.length;G++)R=t[G],N=kg(R),R!==N&&(t[G]=N);x=of(x,8,!0);x=of(x,16,!t.length);rf(t,x)}tg(x)||(t=x,p?x=of(x,!y.length||16&x&&(!J||32&x)?2:2048,!0):x=of(x,32,!1),x!==t&&rf(y,x),p&&Object.freeze(y));z&&tg(x)&&(y=jf(y),x=yg(x,r,!1),rf(y,x),pg(n,r,3,y));n=y;r=zg(e,14);p=c.l;p.h=Math.min(3E5,2*p.h);p.i=Math.min(3E5,p.h+Math.round(.2*(Math.random()-.5)*p.h));c.h.setInterval(c.l.getValue());401===k&&f&&(c.ba=f);r&&(c.m+=r);void 0===
l&&(l=c.isRetryable(k));l&&(c.j=n.concat(c.j),c.Eb||c.h.enabled||c.h.start());b&&b("net-send-failed",k);++c.W};
c.network&&c.network.send(d,g,h)}}}};
m.wc=function(){Dh(this.i,!0);this.flush();Dh(this.i,!1)};
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function yh(){return"https://play.google.com/log?format=json&hasfast=true"}
function xh(a,b){this.eb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new rh;Number.isInteger(a)&&this.h.Nb(a);b||(this.locale=document.documentElement.getAttribute("lang"));zh(this,new oh)}
xh.prototype.Nb=function(a){this.h.Nb(a);return this};
function zh(a,b){wg(a.h,oh,1,b);Bg(b)||Dg(b,1,1);if(!a.eb){b=Eh(a);var c=lg(b,5);(null==c||"string"===typeof c)&&c||Cg(b,5,a.locale)}a.uach&&(b=Eh(a),vg(b,ih,9)||wg(b,ih,9,a.uach))}
function Bh(a,b){qg(Fh(a))&&(a=Gh(a),Dg(a,1,b))}
function Dh(a,b){qg(Fh(a))&&(a=Gh(a),og(a,2,Of(b)))}
function Fh(a){return vg(a.h,oh,1)}
function Hh(a){var b=void 0===b?kh:b;var c=a.eb?void 0:window;c?nh(c,b).then(function(d){a.uach=d;d=Eh(a);wg(d,ih,9,a.uach);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function Eh(a){a=Fh(a);var b=vg(a,sg,11);b||(b=new sg,wg(a,sg,11,b));return b}
function Gh(a){a=Eh(a);var b=vg(a,gh,10);b||(b=new gh,og(b,2,Of(!1)),wg(a,gh,10,b));return b}
function Ch(a,b,c,d,e){var f=0,g=0;c=void 0===c?0:c;f=void 0===f?0:f;g=void 0===g?0:g;d=void 0===d?0:d;if(qg(Fh(a))){var h=Gh(a);og(h,3,Rf(d))}qg(Fh(a))&&(d=Gh(a),og(d,4,Rf(f)));qg(Fh(a))&&(f=Gh(a),og(f,5,Rf(g)));a=a.h.clone();g=Date.now().toString();a=og(a,4,Tf(g));b=xg(a,qh,3,b);e&&(a=new dh,e=og(a,13,Rf(e)),a=new eh,e=wg(a,dh,2,e),a=new ph,e=wg(a,eh,1,e),e=Dg(e,2,9),wg(b,ph,18,e));c&&og(b,14,Tf(c));return b}
;function Ih(){this.Pd="undefined"!==typeof AbortController}
Ih.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,n,p,r,t,y,z;return A(function(x){switch(x.h){case 1:return f=(e=d.Pd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,Aa(x,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.yd)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),x.yield(fetch(a.url,g),5);case 5:h=x.i;if(200!==h.status){null==(k=c)||k(h.status);x.B(3);break}if(null==(l=b)){x.B(7);break}p=n=l;return x.yield(h.text(),8);case 8:p(x.i);case 7:case 3:x.R=[x.j];x.l=0;x.v=0;clearTimeout(f);Da(x);break;case 2:r=Ba(x);switch(null==(t=r)?void 0:t.name){case "AbortError":null==(y=c)||y(408);break;default:null==(z=c)||z(400)}x.B(3)}})};
Ih.prototype.ac=function(){return 4};function Jh(){}
Jh.prototype.serialize=function(a){var b=[];Kh(this,a,b);return b.join("")};
function Kh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Kh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Lh(d,c),c.push(":"),Kh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Lh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Mh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Nh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Lh(a,b){b.push('"',a.replace(Nh,function(c){var d=Mh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Mh[c]=d);return d}),'"')}
;function Oh(){}
Oh.prototype.h=null;Oh.prototype.getOptions=function(){var a;(a=this.h)||(a=this.h={});return a};var Ph;function Qh(){}
$a(Qh,Oh);Ph=new Qh;function Rh(a){Jd.call(this);this.headers=new Map;this.Pa=a||null;this.i=!1;this.R=this.J=null;this.l=this.ba="";this.j=this.Y=this.A=this.W=!1;this.m=0;this.D=null;this.Ea="";this.ga=this.ta=!1}
$a(Rh,Jd);var Sh=/^https?$/i,Th=["POST","PUT"],Uh=[];function Vh(a,b,c,d,e,f,g){var h=new Rh;Uh.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Vd,!0,void 0,void 0);f&&(h.m=Math.max(0,f));g&&(h.ta=g);h.send(a,c,d,e)}
m=Rh.prototype;m.Vd=function(){this.dispose();Kb(Uh,this)};
m.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ba+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ba=a;this.l="";this.W=!1;this.i=!0;this.J=new XMLHttpRequest;this.R=this.Pa?this.Pa.getOptions():Ph.getOptions();this.J.onreadystatechange=Xa(this.rd,this);try{this.getStatus(),this.Y=!0,this.J.open(b,String(a),!0),this.Y=!1}catch(g){this.getStatus();Wh(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=Eb(Th,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.J.setRequestHeader(d,c);this.Ea&&(this.J.responseType=this.Ea);"withCredentials"in this.J&&this.J.withCredentials!==this.ta&&(this.J.withCredentials=this.ta);try{Xh(this),0<this.m&&(this.ga=Yh(this.J),this.getStatus(),this.ga?(this.J.timeout=this.m,this.J.ontimeout=Xa(this.Hd,
this)):this.D=ye(this.Hd,this.m,this)),this.getStatus(),this.A=!0,this.J.send(a),this.A=!1}catch(g){this.getStatus(),Wh(this,g)}};
function Yh(a){return Zc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Hd=function(){"undefined"!=typeof Na&&this.J&&(this.l="Timed out after "+this.m+"ms, aborting",this.getStatus(),Kd(this,"timeout"),this.abort(8))};
function Wh(a,b){a.i=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.l=b;Zh(a);$h(a)}
function Zh(a){a.W||(a.W=!0,Kd(a,"complete"),Kd(a,"error"))}
m.abort=function(){this.J&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.J.abort(),this.j=!1,Kd(this,"complete"),Kd(this,"abort"),$h(this))};
m.S=function(){this.J&&(this.i&&(this.i=!1,this.j=!0,this.J.abort(),this.j=!1),$h(this,!0));Rh.Aa.S.call(this)};
m.rd=function(){this.Z()||(this.Y||this.A||this.j?ai(this):this.Ee())};
m.Ee=function(){ai(this)};
function ai(a){if(a.i&&"undefined"!=typeof Na)if(a.R[1]&&4==bi(a)&&2==a.getStatus())a.getStatus();else if(a.A&&4==bi(a))ye(a.rd,0,a);else if(Kd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(ci(a))Kd(a,"complete"),Kd(a,"success");else{try{var b=2<bi(a)?a.J.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";Zh(a)}}finally{$h(a)}}}
function $h(a,b){if(a.J){Xh(a);var c=a.J,d=a.R[0]?function(){}:null;
a.J=null;a.R=null;b||Kd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Xh(a){a.J&&a.ga&&(a.J.ontimeout=null);a.D&&(C.clearTimeout(a.D),a.D=null)}
m.isActive=function(){return!!this.J};
m.isComplete=function(){return 4==bi(this)};
function ci(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=Bc(1,String(a.ba)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Sh.test(a?a.toLowerCase():"");c=b}return c}
function bi(a){return a.J?a.J.readyState:0}
m.getStatus=function(){try{return 2<bi(this)?this.J.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function di(){}
di.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
Vh(a.url,function(d){d=d.target;if(ci(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.yd,a.timeoutMillis,a.withCredentials)};
di.prototype.ac=function(){return 1};function ei(a,b){H.call(this);this.logSource=a;this.sessionIndex=b;this.i="https://play.google.com/log?format=json&hasfast=true";this.h=null;this.j=!1;this.network=null;this.componentId="";this.pageId=this.yb=null}
w(ei,H);ei.prototype.ed=function(){this.l=!0;return this};function fi(a,b,c,d,e,f,g){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;H.call(this);this.logSource=a;this.componentId=b;f?a=f:(a=new ei(a,"0"),a.componentId=b,Sc(this,a),""!==c&&(a.i=c),d&&(a.j=!0),e&&(a.h=e),g&&(a.network=g),a.network||(a.network=.1>Math.random()?new Ih:new di),b=new wh({logSource:a.logSource,Gb:a.Gb?a.Gb:ah,sessionIndex:a.sessionIndex,mf:a.i,eb:a.j,Eb:!1,ed:a.l,Xc:a.Xc,network:a.network?a.network:void 0}),Sc(a,b),a.h&&(c=a.h,d=Eh(b.i),
Cg(d,7,c)),a.componentId&&(b.componentId=a.componentId),a.yb&&(b.yb=a.yb),a.pageId&&(b.pageId=a.pageId),Hh(b.i),a.network.Nb&&a.network.Nb(a.logSource),a.network.Ze&&a.network.Ze(b),a=b);this.h=a}
w(fi,H);
fi.prototype.flush=function(a){var b=a||[];if(b.length){a=new Mg;for(var c=[],d=0;d<b.length;d++){var e=b[d];var f=new Lg;f=Cg(f,1,e.l);for(var g=[],h=0;h<e.fields.length;h++)g.push(e.fields[h].ma);h=f.F;var k=qf(h);Df(k);if(null==g)pg(h,k,3);else{if(!Array.isArray(g))throw Mf();var l=pf(g),n=l,p=!!(2&l)||Object.isFrozen(g),r=!p&&!1;var t=4&l?!1:!0;if(t)for(l=21,p&&(g=jf(g),n=0,l=yg(l,k,!0)),t=0;t<g.length;t++){p=g;var y=t,z=g[t];if("string"!==typeof z)throw Error();p[y]=z}r&&(g=jf(g),n=0,l=yg(l,
k,!0));l!==n&&rf(g,l);pg(h,k,3,g)}g=[];h=[];k=v(e.h.keys());for(l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];n=e.j;r=e.yc(l)||[];t=[];for(p=0;p<r.length;p++){z=(y=r[p])&&y.h;y=new Ig;switch(n){case 3:z=Number(z);Number.isFinite(z)&&ug(y,1,Jg,Tf(z));break;case 2:z=Number(z);if(null!=z&&"number"!==typeof z)throw Error("Value of float/double field must be a number, found "+typeof z+": "+z);ug(y,2,Jg,z)}t.push(y)}n=t;for(r=0;r<n.length;r++){t=n[r];p=new Kg;t=
wg(p,Ig,2,t);p=l;y=[];z=[];for(var x=0;x<e.fields.length;x++)z.push(e.fields[x].na);for(x=0;x<z.length;x++){var J=z[x],G=p[x],R=new Gg;switch(J){case 3:ug(R,1,Hg,Yf(String(G)));break;case 2:J=Number(G);Number.isFinite(J)&&ug(R,2,Hg,Rf(J));break;case 1:ug(R,3,Hg,Of("true"===G))}y.push(R)}xg(t,Gg,1,y);g.push(t)}}xg(f,Kg,4,g);c.push(f);e.clear()}xg(a,Lg,1,c);b=this.h;b.R&&(a instanceof qh?b.log(a):(c=new qh,a=a.serialize(),a=Cg(c,8,a),b.log(a)));this.h.flush()}};function gi(a,b,c){this.logger=a;this.event=b;if(void 0===c||c)this.h=hi()}
gi.prototype.start=function(){this.h=hi()};
gi.prototype.done=function(){null!=this.h&&this.logger.od(this.event,hi()-this.h)};
function ii(){}
ii.prototype.Gc=function(){};
ii.prototype.od=function(){};
ii.prototype.fc=function(){};
ii.prototype.Oa=function(){};
function ji(a,b){this.i=b;this.l=new fi(1828,"","",!1,"",void 0,new di);this.h=new ze(this.l);this.m=new Fe(this.h);this.A=new Ie(this.h);this.D=new Je(this.h);this.v=new Ee(this.h);new Ge(this.h);new He(this.h);this.j=Le(a);(new De(this.h)).h.pc("/client_streamz/bg/fic",this.i)}
ji.prototype.Gc=function(){this.A.h.pc("/client_streamz/bg/fsc",this.j,this.i)};
ji.prototype.od=function(a,b){0===a?this.m.record(b,this.j,this.i):1===a&&this.D.record(b,this.j,this.i)};
ji.prototype.fc=function(a,b){this.v.h.pc("/client_streamz/bg/fiec",this.j,this.i,a,b)};
ji.prototype.Oa=function(){this.h.Oa()};
function hi(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function ki(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function li(a){function b(n,p,r){Promise.resolve().then(function(){k.done();h.resolve({Sd:n,cf:p,ig:r})})}
function c(){}
this.h=!1;var d=a.program;var e=a.le;if(!1!==a.Ke){var f,g;this.qa=null!=(g=a.qa)?g:new ji(e,null!=(f=a.Be)?f:"_")}else this.qa=new ii;var h=new ki;this.i=h.promise;var k=new gi(this.qa,0,!1);C[e]?C[e].a||(this.qa.fc(2,""),this.qa.Oa()):(this.qa.fc(1,""),this.qa.Oa());try{var l=C[e].a;k.start();this.j=v(l(d,b,!0,a.rg,c)).next().value;this.bf=h.promise.then(function(){})}catch(n){throw this.qa.fc(4,n.message),this.qa.Oa(),n;
}}
li.prototype.snapshot=function(a){var b=this;if(this.h)throw Error("Already disposed");this.qa.Gc();return this.i.then(function(c){var d=c.Sd;return new Promise(function(e){var f=new gi(b.qa,1);d(function(g){f.done();e(g)},[a.dd,
a.df,a.pf,a.ef])})})};
li.prototype.Ed=function(a){if(this.h)throw Error("Already disposed");this.qa.Gc();var b=new gi(this.qa,1);a=this.j([a.dd,a.df,a.pf,a.ef]);b.done();return a};
li.prototype.dispose=function(){this.qa.Oa();this.h=!0;this.i.then(function(a){(a=a.cf)&&a()})};
li.prototype.Z=function(){return this.h};var mi=window;ib("csi.gstatic.com");ib("googleads.g.doubleclick.net");ib("partner.googleadservices.com");ib("pubads.g.doubleclick.net");ib("securepubads.g.doubleclick.net");ib("tpc.googlesyndication.com");function ni(a){var b=oi;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function pi(){var a=[];ni(function(b){a.push(b)});
return a}
var oi={qf:"allow-forms",rf:"allow-modals",sf:"allow-orientation-lock",tf:"allow-pointer-lock",uf:"allow-popups",vf:"allow-popups-to-escape-sandbox",wf:"allow-presentation",xf:"allow-same-origin",yf:"allow-scripts",zf:"allow-top-navigation",Af:"allow-top-navigation-by-user-activation"},qi=Pd(function(){return pi()});
function ri(){var a=si(),b={};Fb(qi(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function si(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function ti(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var ui=(new Date).getTime();function vi(a){Jd.call(this);var b=this;this.A=this.j=0;this.Ca=null!=a?a:{oa:function(e,f){return setTimeout(e,f)},
pa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return A(function(e){return e.yield(wi(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.A||xi(this)}
w(vi,Jd);function yi(){var a=zi;vi.h||(vi.h=new vi(a));return vi.h}
vi.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Ca.pa(this.A);delete vi.h};
vi.prototype.wa=function(){return this.i};
function xi(a){a.A=a.Ca.oa(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.B(3):c.yield(wi(a),3):c.yield(wi(a),3);xi(a);c.h=0})},3E4)}
function wi(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,Aa(h,2,3),d&&(a.j=a.Ca.oa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.R=[h.j];h.l=0;h.v=0;a.m=void 0;a.j&&(a.Ca.pa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?Kd(a,"networkstatus-online"):Kd(a,"networkstatus-offline"));c(g);Da(h);break;case 2:Ba(h),g=!1,h.B(3)}})})}
;function Ai(){this.data=[];this.h=-1}
Ai.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Ai.prototype.get=function(a){return!!this.data[a]};
function Bi(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Ci(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
Ci.prototype[Symbol.iterator]=function(){return this};
Ci.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Di(a,b){return new Ci(a,b)}
;function Ei(){this.blockSize=-1}
;function Fi(){this.blockSize=-1;this.blockSize=64;this.h=[];this.v=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
$a(Fi,Ei);Fi.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Gi(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Fi.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.v,f=this.i;d<b;){if(0==f)for(;d<=c;)Gi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Gi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Gi(this,e);f=0;break}}this.i=f;this.l+=b}};
Fi.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.v[c]=b&255,b/=256;Gi(this,this.v);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Hi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Ii(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Ji(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Hi(a).match(/\S+/g)||[],b=0<=Eb(a,b));return b}
function Ki(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Ji(a,"inverted-hdpi")&&Ii(a,Array.prototype.filter.call(a.classList?a.classList:Hi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Li(){}
Li.prototype.next=function(){return Mi};
var Mi={done:!0,value:void 0};function Ni(a){return{value:a,done:!1}}
Li.prototype.Fa=function(){return this};function Oi(a){if(a instanceof Pi||a instanceof Qi||a instanceof Ri)return a;if("function"==typeof a.next)return new Pi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Pi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Fa)return new Pi(function(){return a.Fa()});
throw Error("Not an iterator or iterable.");}
function Pi(a){this.i=a}
Pi.prototype.Fa=function(){return new Qi(this.i())};
Pi.prototype[Symbol.iterator]=function(){return new Ri(this.i())};
Pi.prototype.h=function(){return new Ri(this.i())};
function Qi(a){this.i=a}
w(Qi,Li);Qi.prototype.next=function(){return this.i.next()};
Qi.prototype[Symbol.iterator]=function(){return new Ri(this.i)};
Qi.prototype.h=function(){return new Ri(this.i)};
function Ri(a){Pi.call(this,function(){return a});
this.j=a}
w(Ri,Pi);Ri.prototype.next=function(){return this.j.next()};function L(a){H.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.A=!!a}
$a(L,H);m=L.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Ab(a)}return!1};
m.Ab=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&Kb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.Ya=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Si(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.Z();e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.Ab(c)}}return 0!=e}return!1};
function Si(a,b,c){de(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Ab,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.S=function(){L.Aa.S.call(this);this.clear();this.j.length=0};function Ti(a){this.h=a}
Ti.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new Jh).serialize(b))};
Ti.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ti.prototype.remove=function(a){this.h.remove(a)};function Ui(a){this.h=a}
$a(Ui,Ti);function Vi(a){this.data=a}
function Wi(a){return void 0===a||a instanceof Vi?a:new Vi(a)}
Ui.prototype.set=function(a,b){Ui.Aa.set.call(this,a,Wi(b))};
Ui.prototype.i=function(a){a=Ui.Aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ui.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Xi(a){this.h=a}
$a(Xi,Ui);Xi.prototype.set=function(a,b,c){if(b=Wi(b)){if(c){if(c<Za()){Xi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Za()}Xi.Aa.set.call(this,a,b)};
Xi.prototype.i=function(a){var b=Xi.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Za()||c&&c>Za())Xi.prototype.remove.call(this,a);else return b}};function Yi(){}
;function Zi(){}
$a(Zi,Yi);Zi.prototype[Symbol.iterator]=function(){return Oi(this.Fa(!0)).h()};
Zi.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function $i(a){this.h=a;this.i=null}
$a($i,Zi);m=$i.prototype;m.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&("QuotaExceededError"===c.name||22===c.code||1014===c.code||"NS_ERROR_DOM_QUOTA_REACHED"===c.name)&&a&&0!==a.length}else b=!1;return this.i=b};
m.set=function(a,b){aj(this);try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){aj(this);a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){aj(this);this.h.removeItem(a)};
m.Fa=function(a){aj(this);var b=0,c=this.h,d=new Li;d.next=function(){if(b>=c.length)return Mi;var e=c.key(b++);if(a)return Ni(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ni(e)};
return d};
m.clear=function(){aj(this);this.h.clear()};
m.key=function(a){aj(this);return this.h.key(a)};
function aj(a){if(null==a.h)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.i)?b:a.isAvailable())||Xd(Error("Storage mechanism: Storage unavailable"))}
;function bj(){var a=null;try{a=C.localStorage||null}catch(b){}$i.call(this,a)}
$a(bj,$i);function cj(a,b){this.i={};this.h=[];this.Wa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof cj)for(c=a.Bc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=cj.prototype;m.Bc=function(){dj(this);return this.h.concat()};
m.has=function(a){return ej(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||fj;dj(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function fj(a,b){return a===b}
m.clear=function(){this.i={};this.Wa=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return ej(this.i,a)?(delete this.i[a],--this.size,this.Wa++,this.h.length>2*this.size&&dj(this),!0):!1};
function dj(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];ej(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],ej(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return ej(this.i,a)?this.i[a]:b};
m.set=function(a,b){ej(this.i,a)||(this.size+=1,this.h.push(a),this.Wa++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Bc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new cj(this)};
m.keys=function(){return Oi(this.Fa(!0)).h()};
m.values=function(){return Oi(this.Fa(!1)).h()};
m.entries=function(){var a=this;return Di(this.keys(),function(b){return[b,a.get(b)]})};
m.Fa=function(a){dj(this);var b=0,c=this.Wa,d=this,e=new Li;e.next=function(){if(c!=d.Wa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Mi;var f=d.h[b++];return Ni(a?f:d.i[f])};
return e};
function ej(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function gj(a,b){this.i=a;this.h=null;var c;if(c=Zc)c=!(9<=Number(ld));if(c){hj||(hj=new cj);this.h=hj.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),hj.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
$a(gj,Zi);var ij={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},hj=null;function jj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ij[b]})}
m=gj.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(jj(a),b);kj(this)};
m.get=function(a){a=this.h.getAttribute(jj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(jj(a));kj(this)};
m.Fa=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Li;d.next=function(){if(b>=c.length)return Mi;var e=c[b++];if(a)return Ni(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ni(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);kj(this)};
function kj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function lj(a,b){this.i=a;this.h=b+"::"}
$a(lj,Zi);lj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
lj.prototype.get=function(a){return this.i.get(this.h+a)};
lj.prototype.remove=function(a){this.i.remove(this.h+a)};
lj.prototype.Fa=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Li;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Ni(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var M={},mj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;M.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
M.Rc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var nj={mb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},oj={mb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hd:function(a){return[].concat.apply([],a)}};
M.af=function(){mj?(M.lb=Uint8Array,M.Ha=Uint16Array,M.Nd=Int32Array,M.assign(M,nj)):(M.lb=Array,M.Ha=Array,M.Nd=Array,M.assign(M,oj))};
M.af();var pj=!0;try{new Uint8Array(1)}catch(a){pj=!1}
function qj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new M.lb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var rj={};rj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var sj={},tj,uj=[],vj=0;256>vj;vj++){tj=vj;for(var wj=0;8>wj;wj++)tj=tj&1?3988292384^tj>>>1:tj>>>1;uj[vj]=tj}sj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^uj[(a^b[d])&255];return a^-1};var xj={};xj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function yj(a){for(var b=a.length;0<=--b;)a[b]=0}
var zj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Aj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Bj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Cj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Dj=Array(576);yj(Dj);var Ej=Array(60);yj(Ej);var Fj=Array(512);yj(Fj);var Gj=Array(256);yj(Gj);var Hj=Array(29);yj(Hj);var Ij=Array(30);yj(Ij);function Jj(a,b,c,d,e){this.Fd=a;this.ee=b;this.de=c;this.Yd=d;this.Ae=e;this.ld=a&&a.length}
var Kj,Lj,Mj;function Nj(a,b){this.gd=a;this.vb=0;this.Va=b}
function Oj(a,b){a.V[a.pending++]=b&255;a.V[a.pending++]=b>>>8&255}
function Pj(a,b,c){a.fa>16-c?(a.la|=b<<a.fa&65535,Oj(a,a.la),a.la=b>>16-a.fa,a.fa+=c-16):(a.la|=b<<a.fa&65535,a.fa+=c)}
function Qj(a,b,c){Pj(a,c[2*b],c[2*b+1])}
function Rj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Sj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Rj(d[e]++,e))}
function Tj(a){var b;for(b=0;286>b;b++)a.ra[2*b]=0;for(b=0;30>b;b++)a.bb[2*b]=0;for(b=0;19>b;b++)a.ha[2*b]=0;a.ra[512]=1;a.Na=a.zb=0;a.ya=a.matches=0}
function Uj(a){8<a.fa?Oj(a,a.la):0<a.fa&&(a.V[a.pending++]=a.la);a.la=0;a.fa=0}
function Vj(a,b,c){Uj(a);Oj(a,c);Oj(a,~c);M.mb(a.V,a.window,b,c,a.pending);a.pending+=c}
function Wj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Xj(a,b,c){for(var d=a.X[c],e=c<<1;e<=a.La;){e<a.La&&Wj(b,a.X[e+1],a.X[e],a.depth)&&e++;if(Wj(b,d,a.X[e],a.depth))break;a.X[c]=a.X[e];c=e;e<<=1}a.X[c]=d}
function Yj(a,b,c){var d=0;if(0!==a.ya){do{var e=a.V[a.Db+2*d]<<8|a.V[a.Db+2*d+1];var f=a.V[a.Fc+d];d++;if(0===e)Qj(a,f,b);else{var g=Gj[f];Qj(a,g+256+1,b);var h=zj[g];0!==h&&(f-=Hj[g],Pj(a,f,h));e--;g=256>e?Fj[e]:Fj[256+(e>>>7)];Qj(a,g,c);h=Aj[g];0!==h&&(e-=Ij[g],Pj(a,e,h))}}while(d<a.ya)}Qj(a,256,b)}
function Zj(a,b){var c=b.gd,d=b.Va.Fd,e=b.Va.ld,f=b.Va.Yd,g,h=-1;a.La=0;a.qb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.X[++a.La]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.La;){var k=a.X[++a.La]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Na--;e&&(a.zb-=d[2*k+1])}b.vb=h;for(g=a.La>>1;1<=g;g--)Xj(a,c,g);k=f;do g=a.X[1],a.X[1]=a.X[a.La--],Xj(a,c,1),d=a.X[1],a.X[--a.qb]=g,a.X[--a.qb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.X[1]=k++,Xj(a,c,1);while(2<=a.La);a.X[--a.qb]=
a.X[1];g=b.gd;k=b.vb;d=b.Va.Fd;e=b.Va.ld;f=b.Va.ee;var l=b.Va.de,n=b.Va.Ae,p,r=0;for(p=0;15>=p;p++)a.Ia[p]=0;g[2*a.X[a.qb]+1]=0;for(b=a.qb+1;573>b;b++){var t=a.X[b];p=g[2*g[2*t+1]+1]+1;p>n&&(p=n,r++);g[2*t+1]=p;if(!(t>k)){a.Ia[p]++;var y=0;t>=l&&(y=f[t-l]);var z=g[2*t];a.Na+=z*(p+y);e&&(a.zb+=z*(d[2*t+1]+y))}}if(0!==r){do{for(p=n-1;0===a.Ia[p];)p--;a.Ia[p]--;a.Ia[p+1]+=2;a.Ia[n]--;r-=2}while(0<r);for(p=n;0!==p;p--)for(t=a.Ia[p];0!==t;)d=a.X[--b],d>k||(g[2*d+1]!==p&&(a.Na+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),t--)}Sj(c,h,a.Ia)}
function ak(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ha[2*l]+=g:0!==l?(l!==e&&a.ha[2*l]++,a.ha[32]++):10>=g?a.ha[34]++:a.ha[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function bk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Qj(a,l,a.ha);while(0!==--g)}else 0!==l?(l!==e&&(Qj(a,l,a.ha),g--),Qj(a,16,a.ha),Pj(a,g-3,2)):10>=g?(Qj(a,17,a.ha),Pj(a,g-3,3)):(Qj(a,18,a.ha),Pj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function ck(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ra[2*c])return 0;if(0!==a.ra[18]||0!==a.ra[20]||0!==a.ra[26])return 1;for(c=32;256>c;c++)if(0!==a.ra[2*c])return 1;return 0}
var dk=!1;function ek(a,b,c){a.V[a.Db+2*a.ya]=b>>>8&255;a.V[a.Db+2*a.ya+1]=b&255;a.V[a.Fc+a.ya]=c&255;a.ya++;0===b?a.ra[2*c]++:(a.matches++,b--,a.ra[2*(Gj[c]+256+1)]++,a.bb[2*(256>b?Fj[b]:Fj[256+(b>>>7)])]++);return a.ya===a.Ib-1}
;function fk(a,b){a.msg=xj[b];return b}
function gk(a){for(var b=a.length;0<=--b;)a[b]=0}
function hk(a){var b=a.state,c=b.pending;c>a.M&&(c=a.M);0!==c&&(M.mb(a.output,b.V,b.Lb,c,a.wb),a.wb+=c,b.Lb+=c,a.Sc+=c,a.M-=c,b.pending-=c,0===b.pending&&(b.Lb=0))}
function ik(a,b){var c=0<=a.va?a.va:-1,d=a.o-a.va,e=0;if(0<a.level){2===a.I.vc&&(a.I.vc=ck(a));Zj(a,a.ec);Zj(a,a.Yb);ak(a,a.ra,a.ec.vb);ak(a,a.bb,a.Yb.vb);Zj(a,a.Yc);for(e=18;3<=e&&0===a.ha[2*Cj[e]+1];e--);a.Na+=3*(e+1)+14;var f=a.Na+3+7>>>3;var g=a.zb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Pj(a,b?1:0,3),Vj(a,c,d);else if(4===a.strategy||g===f)Pj(a,2+(b?1:0),3),Yj(a,Dj,Ej);else{Pj(a,4+(b?1:0),3);c=a.ec.vb+1;d=a.Yb.vb+1;e+=1;Pj(a,c-257,5);Pj(a,d-1,5);Pj(a,e-4,4);for(f=0;f<e;f++)Pj(a,a.ha[2*
Cj[f]+1],3);bk(a,a.ra,c-1);bk(a,a.bb,d-1);Yj(a,a.ra,a.bb)}Tj(a);b&&Uj(a);a.va=a.o;hk(a.I)}
function P(a,b){a.V[a.pending++]=b}
function jk(a,b){a.V[a.pending++]=b>>>8&255;a.V[a.pending++]=b&255}
function kk(a,b){var c=a.pd,d=a.o,e=a.xa,f=a.qd,g=a.o>a.ja-262?a.o-(a.ja-262):0,h=a.window,k=a.Xa,l=a.Ga,n=a.o+258,p=h[d+e-1],r=h[d+e];a.xa>=a.kd&&(c>>=2);f>a.u&&(f=a.u);do{var t=b;if(h[t+e]===r&&h[t+e-1]===p&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<n;);t=258-(n-d);d=n-258;if(t>e){a.ub=b;e=t;if(t>=f)break;p=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function lk(a){var b=a.ja,c;do{var d=a.Ld-a.u-a.o;if(a.o>=b+(b-262)){M.mb(a.window,a.window,b,b,0);a.ub-=b;a.o-=b;a.va-=b;var e=c=a.dc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ga[--e],a.Ga[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.I.ka)break;e=a.I;c=a.window;f=a.o+a.u;var g=e.ka;g>d&&(g=d);0===g?c=0:(e.ka-=g,M.mb(c,e.input,e.hb,g,f),1===e.state.wrap?e.H=rj(e.H,c,g,f):2===e.state.wrap&&(e.H=sj(e.H,c,g,f)),e.hb+=g,e.kb+=g,c=g);a.u+=c;if(3<=a.u+a.sa)for(d=a.o-a.sa,a.K=a.window[d],
a.K=(a.K<<a.Ka^a.window[d+1])&a.Ja;a.sa&&!(a.K=(a.K<<a.Ka^a.window[d+3-1])&a.Ja,a.Ga[d&a.Xa]=a.head[a.K],a.head[a.K]=d,d++,a.sa--,3>a.u+a.sa););}while(262>a.u&&0!==a.I.ka)}
function mk(a,b){for(var c;;){if(262>a.u){lk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.K=(a.K<<a.Ka^a.window[a.o+3-1])&a.Ja,c=a.Ga[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o);0!==c&&a.o-c<=a.ja-262&&(a.P=kk(a,c));if(3<=a.P)if(c=ek(a,a.o-a.ub,a.P-3),a.u-=a.P,a.P<=a.Hc&&3<=a.u){a.P--;do a.o++,a.K=(a.K<<a.Ka^a.window[a.o+3-1])&a.Ja,a.Ga[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o;while(0!==--a.P);a.o++}else a.o+=a.P,a.P=0,a.K=a.window[a.o],a.K=(a.K<<a.Ka^a.window[a.o+1])&a.Ja;else c=ek(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(ik(a,!1),0===a.I.M))return 1}a.sa=2>a.o?a.o:2;return 4===b?(ik(a,!0),0===a.I.M?3:4):a.ya&&(ik(a,!1),0===a.I.M)?1:2}
function nk(a,b){for(var c,d;;){if(262>a.u){lk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.K=(a.K<<a.Ka^a.window[a.o+3-1])&a.Ja,c=a.Ga[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o);a.xa=a.P;a.td=a.ub;a.P=2;0!==c&&a.xa<a.Hc&&a.o-c<=a.ja-262&&(a.P=kk(a,c),5>=a.P&&(1===a.strategy||3===a.P&&4096<a.o-a.ub)&&(a.P=2));if(3<=a.xa&&a.P<=a.xa){d=a.o+a.u-3;c=ek(a,a.o-1-a.td,a.xa-3);a.u-=a.xa-1;a.xa-=2;do++a.o<=d&&(a.K=(a.K<<a.Ka^a.window[a.o+3-1])&a.Ja,a.Ga[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o);
while(0!==--a.xa);a.fb=0;a.P=2;a.o++;if(c&&(ik(a,!1),0===a.I.M))return 1}else if(a.fb){if((c=ek(a,0,a.window[a.o-1]))&&ik(a,!1),a.o++,a.u--,0===a.I.M)return 1}else a.fb=1,a.o++,a.u--}a.fb&&(ek(a,0,a.window[a.o-1]),a.fb=0);a.sa=2>a.o?a.o:2;return 4===b?(ik(a,!0),0===a.I.M?3:4):a.ya&&(ik(a,!1),0===a.I.M)?1:2}
function ok(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){lk(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.P=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.P=258-(e-d);a.P>a.u&&(a.P=a.u)}3<=a.P?(c=ek(a,1,a.P-3),a.u-=a.P,a.o+=a.P,a.P=0):(c=ek(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(ik(a,!1),0===a.I.M))return 1}a.sa=0;return 4===b?(ik(a,!0),0===a.I.M?3:4):
a.ya&&(ik(a,!1),0===a.I.M)?1:2}
function pk(a,b){for(var c;;){if(0===a.u&&(lk(a),0===a.u)){if(0===b)return 1;break}a.P=0;c=ek(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(ik(a,!1),0===a.I.M))return 1}a.sa=0;return 4===b?(ik(a,!0),0===a.I.M?3:4):a.ya&&(ik(a,!1),0===a.I.M)?1:2}
function qk(a,b,c,d,e){this.me=a;this.ze=b;this.De=c;this.ye=d;this.he=e}
var rk;rk=[new qk(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(1>=a.u){lk(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.va+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,ik(a,!1),0===a.I.M)return 1;if(a.o-a.va>=a.ja-262&&(ik(a,!1),0===a.I.M))return 1}a.sa=0;if(4===b)return ik(a,!0),0===a.I.M?3:4;a.o>a.va&&ik(a,!1);return 1}),
new qk(4,4,8,4,mk),new qk(4,5,16,8,mk),new qk(4,6,32,32,mk),new qk(4,4,16,16,nk),new qk(8,16,32,32,nk),new qk(8,16,128,128,nk),new qk(8,32,128,256,nk),new qk(32,128,258,1024,nk),new qk(32,258,258,4096,nk)];
function sk(){this.I=null;this.status=0;this.V=null;this.wrap=this.pending=this.Lb=this.za=0;this.G=null;this.Ba=0;this.method=8;this.sb=-1;this.Xa=this.Uc=this.ja=0;this.window=null;this.Ld=0;this.head=this.Ga=null;this.qd=this.kd=this.strategy=this.level=this.Hc=this.pd=this.xa=this.u=this.ub=this.o=this.fb=this.td=this.P=this.va=this.Ka=this.Ja=this.Cc=this.dc=this.K=0;this.ra=new M.Ha(1146);this.bb=new M.Ha(122);this.ha=new M.Ha(78);gk(this.ra);gk(this.bb);gk(this.ha);this.Yc=this.Yb=this.ec=
null;this.Ia=new M.Ha(16);this.X=new M.Ha(573);gk(this.X);this.qb=this.La=0;this.depth=new M.Ha(573);gk(this.depth);this.fa=this.la=this.sa=this.matches=this.zb=this.Na=this.Db=this.ya=this.Ib=this.Fc=0}
function tk(a,b){if(!a||!a.state||5<b||0>b)return a?fk(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.ka||666===c.status&&4!==b)return fk(a,0===a.M?-5:-2);c.I=a;var d=c.sb;c.sb=b;if(42===c.status)if(2===c.wrap)a.H=0,P(c,31),P(c,139),P(c,8),c.G?(P(c,(c.G.text?1:0)+(c.G.Ra?2:0)+(c.G.extra?4:0)+(c.G.name?8:0)+(c.G.comment?16:0)),P(c,c.G.time&255),P(c,c.G.time>>8&255),P(c,c.G.time>>16&255),P(c,c.G.time>>24&255),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,c.G.os&255),c.G.extra&&c.G.extra.length&&
(P(c,c.G.extra.length&255),P(c,c.G.extra.length>>8&255)),c.G.Ra&&(a.H=sj(a.H,c.V,c.pending,0)),c.Ba=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,3),c.status=113);else{var e=8+(c.Uc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;jk(c,e+(31-e%31));0!==c.o&&(jk(c,a.H>>>16),jk(c,a.H&65535));a.H=1}if(69===c.status)if(c.G.extra){for(e=c.pending;c.Ba<(c.G.extra.length&65535)&&(c.pending!==c.za||
(c.G.Ra&&c.pending>e&&(a.H=sj(a.H,c.V,c.pending-e,e)),hk(a),e=c.pending,c.pending!==c.za));)P(c,c.G.extra[c.Ba]&255),c.Ba++;c.G.Ra&&c.pending>e&&(a.H=sj(a.H,c.V,c.pending-e,e));c.Ba===c.G.extra.length&&(c.Ba=0,c.status=73)}else c.status=73;if(73===c.status)if(c.G.name){e=c.pending;do{if(c.pending===c.za&&(c.G.Ra&&c.pending>e&&(a.H=sj(a.H,c.V,c.pending-e,e)),hk(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ba<c.G.name.length?c.G.name.charCodeAt(c.Ba++)&255:0;P(c,f)}while(0!==f);c.G.Ra&&c.pending>
e&&(a.H=sj(a.H,c.V,c.pending-e,e));0===f&&(c.Ba=0,c.status=91)}else c.status=91;if(91===c.status)if(c.G.comment){e=c.pending;do{if(c.pending===c.za&&(c.G.Ra&&c.pending>e&&(a.H=sj(a.H,c.V,c.pending-e,e)),hk(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ba<c.G.comment.length?c.G.comment.charCodeAt(c.Ba++)&255:0;P(c,f)}while(0!==f);c.G.Ra&&c.pending>e&&(a.H=sj(a.H,c.V,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.G.Ra?(c.pending+2>c.za&&hk(a),c.pending+2<=c.za&&(P(c,a.H&
255),P(c,a.H>>8&255),a.H=0,c.status=113)):c.status=113);if(0!==c.pending){if(hk(a),0===a.M)return c.sb=-1,0}else if(0===a.ka&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return fk(a,-5);if(666===c.status&&0!==a.ka)return fk(a,-5);if(0!==a.ka||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?pk(c,b):3===c.strategy?ok(c,b):rk[c.level].he(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.M&&(c.sb=-1),0;if(2===d&&(1===b?(Pj(c,2,3),Qj(c,256,Dj),16===c.fa?(Oj(c,c.la),c.la=0,c.fa=0):8<=c.fa&&
(c.V[c.pending++]=c.la&255,c.la>>=8,c.fa-=8)):5!==b&&(Pj(c,0,3),Vj(c,0,0),3===b&&(gk(c.head),0===c.u&&(c.o=0,c.va=0,c.sa=0))),hk(a),0===a.M))return c.sb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(P(c,a.H&255),P(c,a.H>>8&255),P(c,a.H>>16&255),P(c,a.H>>24&255),P(c,a.kb&255),P(c,a.kb>>8&255),P(c,a.kb>>16&255),P(c,a.kb>>24&255)):(jk(c,a.H>>>16),jk(c,a.H&65535));hk(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var uk={};uk=function(){this.input=null;this.kb=this.ka=this.hb=0;this.output=null;this.Sc=this.M=this.wb=0;this.msg="";this.state=null;this.vc=2;this.H=0};var vk=Object.prototype.toString;
function wk(a){if(!(this instanceof wk))return new wk(a);a=this.options=M.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.I=new uk;this.I.M=0;var b=this.I;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=fk(b,-2);else{8===e&&(e=9);var k=new sk;b.state=k;k.I=b;k.wrap=h;k.G=null;k.Uc=e;k.ja=1<<k.Uc;k.Xa=k.ja-1;k.Cc=f+7;k.dc=1<<k.Cc;k.Ja=k.dc-1;k.Ka=~~((k.Cc+3-1)/3);k.window=new M.lb(2*k.ja);k.head=new M.Ha(k.dc);k.Ga=new M.Ha(k.ja);k.Ib=1<<f+6;k.za=4*k.Ib;k.V=new M.lb(k.za);k.Db=1*k.Ib;k.Fc=3*k.Ib;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.kb=b.Sc=0;b.vc=2;c=b.state;c.pending=0;c.Lb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.H=2===c.wrap?
0:1;c.sb=0;if(!dk){d=Array(16);for(f=g=0;28>f;f++)for(Hj[f]=g,e=0;e<1<<zj[f];e++)Gj[g++]=f;Gj[g-1]=f;for(f=g=0;16>f;f++)for(Ij[f]=g,e=0;e<1<<Aj[f];e++)Fj[g++]=f;for(g>>=7;30>f;f++)for(Ij[f]=g<<7,e=0;e<1<<Aj[f]-7;e++)Fj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Dj[2*e+1]=8,e++,d[8]++;for(;255>=e;)Dj[2*e+1]=9,e++,d[9]++;for(;279>=e;)Dj[2*e+1]=7,e++,d[7]++;for(;287>=e;)Dj[2*e+1]=8,e++,d[8]++;Sj(Dj,287,d);for(e=0;30>e;e++)Ej[2*e+1]=5,Ej[2*e]=Rj(e,5);Kj=new Jj(Dj,zj,257,286,15);Lj=new Jj(Ej,
Aj,0,30,15);Mj=new Jj([],Bj,0,19,7);dk=!0}c.ec=new Nj(c.ra,Kj);c.Yb=new Nj(c.bb,Lj);c.Yc=new Nj(c.ha,Mj);c.la=0;c.fa=0;Tj(c);c=0}else c=fk(b,-2);0===c&&(b=b.state,b.Ld=2*b.ja,gk(b.head),b.Hc=rk[b.level].ze,b.kd=rk[b.level].me,b.qd=rk[b.level].De,b.pd=rk[b.level].ye,b.o=0,b.va=0,b.u=0,b.sa=0,b.P=b.xa=2,b.fb=0,b.K=0);b=c}}else b=-2;if(0!==b)throw Error(xj[b]);a.header&&(b=this.I)&&b.state&&2===b.state.wrap&&(b.state.G=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=qj(a.dictionary):
"[object ArrayBuffer]"===vk.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.I;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.H=rj(a.H,f,g,0));l.wrap=0;g>=l.ja&&(0===b&&(gk(l.head),l.o=0,l.va=0,l.sa=0),c=new M.lb(l.ja),M.mb(c,f,g-l.ja,l.ja,0),f=c,g=l.ja);c=a.ka;d=a.hb;e=a.input;a.ka=g;a.hb=0;a.input=f;for(lk(l);3<=l.u;){f=l.o;g=l.u-2;do l.K=(l.K<<l.Ka^l.window[f+3-1])&l.Ja,l.Ga[f&l.Xa]=l.head[l.K],l.head[l.K]=f,f++;while(--g);
l.o=f;l.u=2;lk(l)}l.o+=l.u;l.va=l.o;l.sa=l.u;l.u=0;l.P=l.xa=2;l.fb=0;a.hb=d;a.input=e;a.ka=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(xj[b]);this.Tf=!0}}
wk.prototype.push=function(a,b){var c=this.I,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=qj(a):"[object ArrayBuffer]"===vk.call(a)?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.ka=c.input.length;do{0===c.M&&(c.output=new M.lb(d),c.wb=0,c.M=d);a=tk(c,e);if(1!==a&&0!==a)return xk(this,a),this.ended=!0,!1;if(0===c.M||0===c.ka&&(4===e||2===e))if("string"===this.options.to){var f=M.Rc(c.output,c.wb);b=f;f=f.length;if(65537>f&&(b.subarray&&pj||!b.subarray))b=
String.fromCharCode.apply(null,M.Rc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=M.Rc(c.output,c.wb),this.chunks.push(b)}while((0<c.ka||0===c.M)&&1!==a);if(4===e)return(c=this.I)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=fk(c,-2):(c.state=null,a=113===d?fk(c,-3):0)):a=-2,xk(this,a),this.ended=!0,0===a;2===e&&(xk(this,0),c.M=0);return!0};
function xk(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):M.hd(a.chunks));a.chunks=[];a.err=b;a.msg=a.I.msg}
function yk(a,b){b=b||{};b.gzip=!0;b=new wk(b);b.push(a,!0);if(b.err)throw b.msg||xj[b.err];return b.result}
;function zk(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=mb(a):b=null;return b}
;function Ak(a){return mb(null===a?"null":void 0===a?"undefined":a)}
;function Bk(a){this.name=a}
;var Ck=new Bk("rawColdConfigGroup");var Dk=new Bk("rawHotConfigGroup");function Ek(a){this.F=I(a)}
w(Ek,K);var Fk=new Bk("continuationCommand");var Gk=new Bk("webCommandMetadata");var Hk=new Bk("signalServiceEndpoint");var Ik={Ff:"EMBEDDED_PLAYER_MODE_UNKNOWN",Cf:"EMBEDDED_PLAYER_MODE_DEFAULT",Ef:"EMBEDDED_PLAYER_MODE_PFP",Df:"EMBEDDED_PLAYER_MODE_PFL"};var Jk=new Bk("feedbackEndpoint");function Kk(a){this.F=I(a)}
w(Kk,K);Kk.prototype.setTrackingParams=function(a){if(null!=a)if("string"===typeof a)a=a?new gf(a,df):ef||(ef=new gf(null,df));else if(a.constructor!==gf)if(cf(a))a=a.length?new gf(new Uint8Array(a),df):ef||(ef=new gf(null,df));else throw Error();return og(this,1,a)};var Lk=new Bk("webPlayerShareEntityServiceEndpoint");var Mk=new Bk("playlistEditEndpoint");var Nk=new Bk("modifyChannelNotificationPreferenceEndpoint");var Ok=new Bk("unsubscribeEndpoint");var Pk=new Bk("subscribeEndpoint");function Qk(){var a=Rk;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Sk(a){D("yt.ads.biscotti.lastId_",a)}
;function Tk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Uk=C.window,Vk,Wk,Xk=(null==Uk?void 0:null==(Vk=Uk.yt)?void 0:Vk.config_)||(null==Uk?void 0:null==(Wk=Uk.ytcfg)?void 0:Wk.data_)||{};D("yt.config_",Xk);function Yk(){Tk(Xk,arguments)}
function S(a,b){return a in Xk?Xk[a]:b}
function Zk(a){var b=Xk.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var $k=[];function al(a){$k.forEach(function(b){return b(a)})}
function bl(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){cl(b)}}:a}
function cl(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Yk("ERRORS",b));al(a)}
function dl(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Yk("ERRORS",f))}
;var el=/^[\w.]*$/,fl={q:!0,search_query:!0};function gl(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1===f.length&&f[0]||2===f.length)try{var g=hl(f[0]||""),h=hl(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Lb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,n=f[0],p=String(gl);l.args=[{key:n,value:f[1],query:a,method:il===p?"unchanged":p}];fl.hasOwnProperty(n)||dl(l)}}return c}
var il=String(gl);function jl(a){var b=[];Mb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Fb(c,function(f){""==f?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function kl(a){"?"===a.charAt(0)&&(a=a.substring(1));return gl(a,"&")}
function ll(a){return-1!==a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),kl(1<a.length?a[1]:a[0])):{}}
function ml(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=kl(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Hc(a,e)+d}
function nl(a){if(!b)var b=window.location.href;var c=Bc(1,a),d=Cc(a);c&&d?(a=a.match(zc),b=b.match(zc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Cc(b)===d&&(Number(Bc(4,b))||null)===(Number(Bc(4,a))||null):!0;return a}
function hl(a){return a&&a.match(el)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function ol(a){var b=pl;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=ui;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ga){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?mi:g;try{var h=g.history.length}catch(Ga){h=0}e.u_his=h;var k;e.u_h=null==(k=mi.screen)?void 0:k.height;var l;e.u_w=null==(l=mi.screen)?void 0:l.width;var n;e.u_ah=null==(n=mi.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=mi.screen)?void 0:p.availWidth;var r;e.u_cd=null==(r=mi.screen)?void 0:r.colorDepth}catch(Ga){}h=b.h;try{var t=h.screenX;var y=h.screenY}catch(Ga){}try{var z=h.outerWidth;var x=h.outerHeight}catch(Ga){}try{var J=h.innerWidth;var G=h.innerHeight}catch(Ga){}try{var R=h.screenLeft;var N=h.screenTop}catch(Ga){}try{J=h.innerWidth,G=h.innerHeight}catch(Ga){}try{var da=h.screen.availWidth;var Ca=h.screen.availTop}catch(Ga){}t=[R,N,t,y,da,Ca,z,x,J,G];try{var O=(b.h.top||window).document,ea="CSS1Compat"==
O.compatMode?O.documentElement:O.body;var ka=(new Rd(ea.clientWidth,ea.clientHeight)).round()}catch(Ga){ka=new Rd(-12245933,-12245933)}O=ka;ka={};var pa=void 0===pa?C:pa;ea=new Ai;"SVGElement"in pa&&"createElementNS"in pa.document&&ea.set(0);y=ri();y["allow-top-navigation-by-user-activation"]&&ea.set(1);y["allow-popups-to-escape-sandbox"]&&ea.set(2);pa.crypto&&pa.crypto.subtle&&ea.set(3);"TextDecoder"in pa&&"TextEncoder"in pa&&ea.set(4);pa=Bi(ea);ka.bc=pa;ka.bih=O.height;ka.biw=O.width;ka.brdim=t.join();
b=b.i;b=(ka.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ka.wgl=!!mi.WebGLRenderingContext,ka);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var pl=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return jl(ol(a))});Za();navigator.userAgent.indexOf(" (CrKey ");var ql="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function rl(){if(!ql)return null;var a=ql();return"open"in a?a:null}
function sl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function tl(a,b){"function"===typeof a&&(a=bl(a));return window.setTimeout(a,b)}
;var ul="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ma(ul),["client_dev_set_cookie"]);function T(a){a=vl(a);return"string"===typeof a&&"false"===a?!1:!!a}
function U(a,b){a=vl(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function vl(a){return S("EXPERIMENT_FLAGS",{})[a]}
function wl(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});d=v(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&void 0===b[e]&&a.push({key:e,value:String(c[e])});return a}
;var xl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},yl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ma(ul)),zl=!1;
function Al(a,b,c,d,e,f,g,h){function k(){4===(l&&"readyState"in l?l.readyState:0)&&b&&bl(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=rl();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;T("debug_forward_web_query_parameters")&&(a=Bl(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"===c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Cl(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"===n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(p){dl(p)}}l.send(d);return l}
function Cl(a,b){b=void 0===b?{}:b;var c=nl(a),d=T("web_ajax_ignore_global_headers_if_set"),e;for(e in xl){var f=S(xl[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=S("VISITOR_DATA"));!f||!c&&Cc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===S("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Cc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Cc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&
(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Cc(a)||(b["X-YouTube-Ad-Signals"]=jl(ol()));return b}
function Dl(a,b){b.method="POST";b.postParams||(b.postParams={});return El(a,b)}
function El(a,b){var c=b.format||"JSON";a=Fl(a,b);var d=Gl(a,b),e=!1,f=Hl(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=sl(k),n=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)n=Il(a,c,k,b.convertToSafeHtml);l&&(l=Jl(c,k,n));n=n||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=tl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Fl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=ml(a,b||{},!0);return a}
function Gl(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Cc(a)&&!b.withCredentials&&Cc(a)!==document.location.hostname||"POST"!==b.method||h&&"application/x-www-form-urlencoded"!==h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=kl(e),Wb(e,f),e=b.postBodyFormat&&"JSON"===b.postBodyFormat?
JSON.stringify(e):Gc(e));f=e||f&&!Pb(f);!zl&&f&&"POST"!==b.method&&(zl=!0,cl(Error("AJAX request with postData should use POST")));return e}
function Il(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,dl(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Kl(a):null)e={},Fb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Ll(g)})}d&&Ml(e);
return e}
function Ml(a){if(Ra(a))for(var b in a){var c;(c="html_content"===b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=fb();d=e?e.createHTML(d):d;a[c]=new ic(d)}else Ml(a[b])}}
function Jl(a,b,c){if(b&&204===b.status)return!0;switch(a){case "JSON":return!!c;case "XML":return 0===Number(c&&c.return_code);case "RAW":return!0;default:return!!c}}
function Kl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ll(a){var b="";Fb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Bl(a){var b=window.location.search,c=Cc(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&nl(a)&&(c=document.location.hostname);var d=Ac(Bc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=kl(b),f={};Fb(yl,function(g){e[g]&&(f[g]=e[g])});
return ml(a,f||{},!1)}
var Hl=Al;var Nl=[{Ic:function(a){return"Cannot read property '"+a.key+"'"},
hc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ic:function(a){return"Cannot call '"+a.key+"'"},
hc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ic:function(a){return a.key+" is not defined"},
hc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Pl={Ta:[],Qa:[{callback:Ol,weight:500}]};function Ol(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Ql(){this.Qa=[];this.Ta=[]}
var Rl;function Sl(){if(!Rl){var a=Rl=new Ql;a.Ta.length=0;a.Qa.length=0;Pl.Ta&&a.Ta.push.apply(a.Ta,Pl.Ta);Pl.Qa&&a.Qa.push.apply(a.Qa,Pl.Qa)}return Rl}
;var Tl=new L;function Ul(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Vl(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Vl(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Vl(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Vl(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Wl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Xl(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Ul(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Xl(f+".ve",g,h,k):0;d+=f;d+=Xl(e,a[e],b,c);if(500<d)break}}else c[b]=Yl(a),d+=c[b].length;else c[b]=Yl(a),d+=c[b].length;return d}
function Xl(a,b,c,d){c+="."+a;a=Yl(b);d[c]=a;return c.length+a.length}
function Yl(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Zl(){this.ff=!0}
function $l(){Zl.h||(Zl.h=new Zl);return Zl.h}
function am(a,b){a={};var c=ah([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Xk||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Xk&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID")));return a}
;var bm={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function cm(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function dm(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function em(a,b,c,d,e){Xg.set(""+a,b,{Kb:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function fm(a){return Xg.get(""+a,void 0)}
function gm(a,b,c){Xg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function hm(){if(T("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!Xg.isEnabled())return!1;if(Xg.h.cookie)return!0;T("embeds_web_enable_cookie_detection_fix")?Xg.set("TESTCOOKIESENABLED","1",{Kb:60,Qe:"none",secure:!0}):Xg.set("TESTCOOKIESENABLED","1",{Kb:60});if("1"!==Xg.get("TESTCOOKIESENABLED"))return!1;Xg.remove("TESTCOOKIESENABLED");return!0}
;var im=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",im);function jm(){this.h=S("ALT_PREF_COOKIE_NAME","PREF");this.i=S("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=fm(this.h);a&&this.parse(a)}
var km;function lm(){km||(km=new jm);return km}
m=jm.prototype;m.get=function(a,b){mm(a);nm(a);a=void 0!==im[a]?im[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){mm(a);nm(a);if(null==b)throw Error("ExpectedNotNull");im[a]=b.toString()};
function om(a){return!!((pm("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){mm(a);nm(a);delete im[a]};
m.clear=function(){for(var a in im)delete im[a]};
function nm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function mm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function pm(a){a=void 0!==im[a]?im[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(im[d]=c.toString())}};var qm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},rm={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function sm(){var a=C.navigator;return a?a.connection:void 0}
function tm(){var a=sm();if(a){var b=qm[a.type||"unknown"]||"CONN_UNKNOWN";a=qm[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function um(){var a=sm();if(null!=a&&a.effectiveType)return rm.hasOwnProperty(a.effectiveType)?rm[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function V(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ma(b))}
w(V,Error);function wm(){try{return xm(),!0}catch(a){return!1}}
function xm(a){if(void 0!==S("DATASYNC_ID"))return S("DATASYNC_ID");throw new V("Datasync ID not set",void 0===a?"unknown":a);}
;function ym(){}
function zm(a,b){return zi.ab(a,0,b)}
ym.prototype.oa=function(a,b){return this.ab(a,1,b)};
ym.prototype.Bb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Am=U("web_emulated_idle_callback_delay",300),Bm=1E3/60-3,Cm=[8,5,4,3,2,1,0];
function Dm(a){a=void 0===a?{}:a;H.call(this);this.i=[];this.j={};this.ba=this.h=0;this.Y=this.m=!1;this.R=[];this.W=this.ea=!1;for(var b=v(Cm),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.sc=a.timeout||1;this.D=Bm;this.A=0;this.ta=this.Fe.bind(this);this.qc=this.jf.bind(this);this.Pa=this.Rd.bind(this);this.Za=this.ne.bind(this);this.Qb=this.Ie.bind(this);this.Ea=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.ga=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ta)}
w(Dm,H);m=Dm.prototype;m.Bb=function(a){var b=Za();Em(this,a);a=Za()-b;this.m||(this.D-=a)};
m.ab=function(a,b,c){++this.ba;if(10===b)return this.Bb(a),this.ba;var d=this.ba;this.j[d]=a;this.m&&!c?this.R.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.m||(0!==this.h&&Fm(this)!==this.A&&this.stop(),this.start()));return d};
m.pa=function(a){delete this.j[a]};
function Gm(a){a.R.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function Hm(a){return!a.isHidden()&&a.ga}
function Fm(a){if(a.i[8].length){if(a.W)return 4;if(Hm(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?Hm(a)?3:2:1;return 0}
m.Jb=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Em(a,b){try{b()}catch(c){a.Jb(c)}}
function Im(a){for(var b=v(Cm),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.ne=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ea=!0;Jm(this,b);this.ea=!1};
m.jf=function(){Jm(this)};
m.Rd=function(){Km(this)};
m.Ie=function(a){this.W=!0;var b=Fm(this);4===b&&b!==this.A&&(this.stop(),this.start());Jm(this,void 0,a);this.W=!1};
m.Fe=function(){this.isHidden()||Km(this);this.h&&(this.stop(),this.start())};
function Km(a){a.stop();a.m=!0;for(var b=Za(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Em(a,e)}Lm(a);a.m=!1;Im(a)&&a.start();b=Za()-b;a.D-=b}
function Lm(a){for(var b=0,c=a.R.length;b<c;b++){var d=a.R[b];a.i[d.priority].push(d.id)}a.R.length=0}
function Jm(a,b,c){a.W&&4===a.A&&a.h||a.stop();a.m=!0;b=Za()+(b||a.D);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Jb(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Em(a,f);d=a.ea?0:1;d=a.l>d?a.l:d;if(!(Za()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Em(a,c)}while(c&&Za()<b)}a.m=!1;Lm(a);a.D=Bm;Im(a)&&a.start()}
m.start=function(){this.Y=!1;if(0===this.h)switch(this.A=Fm(this),this.A){case 1:var a=this.Za;this.h=this.Ea?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Am);break;case 2:this.h=window.setTimeout(this.qc,this.sc);break;case 3:this.h=window.requestAnimationFrame(this.Qb);break;case 4:this.h=window.setTimeout(this.Pa,0)}};
m.pause=function(){this.stop();this.Y=!0};
m.stop=function(){if(this.h){switch(this.A){case 1:var a=this.h;this.Ea?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.S=function(){Gm(this);this.stop();this.ga&&document.removeEventListener("visibilitychange",this.ta);H.prototype.S.call(this)};var Mm=E("yt.scheduler.instance.timerIdMap_")||{},Nm=U("kevlar_tuner_scheduler_soft_state_timer_ms",800),Om=0,Pm=0;function Qm(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.Z())a=new Dm(S("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Rm(){Sm();var a=E("ytglobal.schedulerInstanceInstance_");a&&(Qc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Sm(){Gm(Qm());for(var a in Mm)Mm.hasOwnProperty(a)&&delete Mm[Number(a)]}
function Tm(a,b,c){if(!c)return c=void 0===c,-Qm().ab(a,b,c);var d=window.setTimeout(function(){var e=Qm().ab(a,b);Mm[d]=e},c);
return d}
function Um(a){Qm().Bb(a)}
function Vm(a){var b=Qm();if(0>a)b.pa(-a);else{var c=Mm[a];c?(b.pa(c),delete Mm[a]):window.clearTimeout(a)}}
function Wm(){Xm()}
function Xm(){window.clearTimeout(Om);Qm().start()}
function Ym(){Qm().pause();window.clearTimeout(Om);Om=window.setTimeout(Wm,Nm)}
function Zm(){window.clearTimeout(Pm);Pm=window.setTimeout(function(){$m(0)},Nm)}
function $m(a){Zm();var b=Qm();b.l=a;b.start()}
function an(a){Zm();var b=Qm();b.l>a&&(b.l=a,b.start())}
function bn(){window.clearTimeout(Pm);var a=Qm();a.l=0;a.start()}
function cn(){E("yt.scheduler.initialized")||(D("yt.scheduler.instance.dispose",Rm),D("yt.scheduler.instance.addJob",Tm),D("yt.scheduler.instance.addImmediateJob",Um),D("yt.scheduler.instance.cancelJob",Vm),D("yt.scheduler.instance.cancelAllJobs",Sm),D("yt.scheduler.instance.start",Xm),D("yt.scheduler.instance.pause",Ym),D("yt.scheduler.instance.setPriorityThreshold",$m),D("yt.scheduler.instance.enablePriorityThreshold",an),D("yt.scheduler.instance.clearPriorityThreshold",bn),D("yt.scheduler.initialized",
!0))}
;function dn(){ym.apply(this,arguments)}
w(dn,ym);function en(){dn.h||(dn.h=new dn);return dn.h}
dn.prototype.ab=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):tl(a,c||0)};
dn.prototype.pa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
dn.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
dn.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var zi=en();T("web_scheduler_auto_init")&&cn();function fn(a){var b=new bj;(b=b.isAvailable()?a?new lj(b,a):b:null)||(a=new gj(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Xi(a):null;this.i=document.domain||window.location.hostname}
fn.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new Jh).serialize(b))}catch(f){return}else e=escape(b);em(a,e,c,this.i)};
fn.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=fm(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
fn.prototype.remove=function(a){this.h&&this.h.remove(a);gm(a,"/",this.i)};var gn=function(){var a;return function(){a||(a=new fn("ytidb"));return a}}();
function hn(){var a;return null==(a=gn())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var jn=[],kn,ln=!1;function mn(){var a={};for(kn=new nn(void 0===a.handleError?on:a.handleError,void 0===a.logEvent?pn:a.logEvent);0<jn.length;)switch(a=jn.shift(),a.type){case "ERROR":kn.Jb(a.payload);break;case "EVENT":kn.logEvent(a.eventType,a.payload)}}
function qn(a){ln||(kn?kn.Jb(a):(jn.push({type:"ERROR",payload:a}),10<jn.length&&jn.shift()))}
function rn(a,b){ln||(kn?kn.logEvent(a,b):(jn.push({type:"EVENT",eventType:a,payload:b}),10<jn.length&&jn.shift()))}
;function sn(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function tn(a){return a.substr(0,a.indexOf(":"))||a}
;var un=Oe||Pe;function vn(a){var b=Zb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var wn={},xn=(wn.AUTH_INVALID="No user identifier specified.",wn.EXPLICIT_ABORT="Transaction was explicitly aborted.",wn.IDB_NOT_SUPPORTED="IndexedDB is not supported.",wn.MISSING_INDEX="Index not created.",wn.MISSING_OBJECT_STORES="Object stores not created.",wn.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",wn.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",wn.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
wn.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",wn.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",wn.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",wn.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",wn),yn={},zn=(yn.AUTH_INVALID="ERROR",yn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",yn.EXPLICIT_ABORT="IGNORED",yn.IDB_NOT_SUPPORTED="ERROR",yn.MISSING_INDEX=
"WARNING",yn.MISSING_OBJECT_STORES="ERROR",yn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",yn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",yn.QUOTA_EXCEEDED="WARNING",yn.QUOTA_MAYBE_EXCEEDED="WARNING",yn.UNKNOWN_ABORT="WARNING",yn.INCOMPATIBLE_DB_VERSION="WARNING",yn),An={},Bn=(An.AUTH_INVALID=!1,An.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,An.EXPLICIT_ABORT=!1,An.IDB_NOT_SUPPORTED=!1,An.MISSING_INDEX=!1,An.MISSING_OBJECT_STORES=!1,An.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,An.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,An.QUOTA_EXCEEDED=!1,An.QUOTA_MAYBE_EXCEEDED=!0,An.UNKNOWN_ABORT=!0,An.INCOMPATIBLE_DB_VERSION=!1,An);function Cn(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?xn[a]:c;d=void 0===d?zn[a]:d;e=void 0===e?Bn[a]:e;V.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Cn.prototype)}
w(Cn,V);function Dn(a,b){Cn.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},xn.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Dn.prototype)}
w(Dn,Cn);function En(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,En.prototype)}
w(En,Error);var Fn=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Gn(a,b,c,d){b=tn(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Cn)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Cn("QUOTA_EXCEEDED",a);if(Qe&&"UnknownError"===e.name)return new Cn("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof En)return new Cn("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Fn.some(function(f){return e.message.includes(f)}))return new Cn("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Cn("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",sd:e.name})];e.level="WARNING";return e}
function Hn(a,b,c){var d=hn();return new Cn("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function In(a){if(!a)throw Error();throw a;}
function Jn(a){return a}
function Kn(a){this.h=a}
function Ln(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Ln.all=function(a){return new Ln(new Kn(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={rb:0};f.rb<a.length;f={rb:f.rb},++f.rb)Ln.resolve(a[f.rb]).then(function(g){return function(h){d[g.rb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Ln.resolve=function(a){return new Ln(new Kn(function(b,c){a instanceof Ln?a.then(b,c):b(a)}))};
Ln.reject=function(a){return new Ln(new Kn(function(b,c){c(a)}))};
Ln.prototype.then=function(a,b){var c=this,d=null!=a?a:Jn,e=null!=b?b:In;return new Ln(new Kn(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Mn(c,c,d,f,g)}),c.i.push(function(){Nn(c,c,e,f,g)})):"FULFILLED"===c.state.status?Mn(c,c,d,f,g):"REJECTED"===c.state.status&&Nn(c,c,e,f,g)}))};
Ln.prototype.catch=function(a){return this.then(void 0,a)};
function Mn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Ln?On(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Nn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Ln?On(a,b,f,d,e):d(f)}catch(g){e(g)}}
function On(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Ln?On(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Pn(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Qn(a){return new Promise(function(b,c){Pn(a,b,c)})}
function Rn(a){return new Ln(new Kn(function(b,c){Pn(a,b,c)}))}
;function Sn(a,b){return new Ln(new Kn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Tn=window,W=Tn.ytcsi&&Tn.ytcsi.now?Tn.ytcsi.now:Tn.performance&&Tn.performance.timing&&Tn.performance.now&&Tn.performance.timing.navigationStart?function(){return Tn.performance.timing.navigationStart+Tn.performance.now()}:function(){return(new Date).getTime()};function Un(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}
m=Un.prototype;m.add=function(a,b,c){return Vn(this,[a],{mode:"readwrite",ia:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return Vn(this,[a],{mode:"readwrite",ia:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Vn(this,[a],{mode:"readonly",ia:!0},function(c){return c.objectStore(a).count(b)})};
function Wn(a,b,c){a=a.h.createObjectStore(b,c);return new Xn(a)}
m.delete=function(a,b){return Vn(this,[a],{mode:"readwrite",ia:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return Vn(this,[a],{mode:"readonly",ia:!0},function(c){return c.objectStore(a).get(b)})};
function Yn(a,b,c){return Vn(a,[b],{mode:"readwrite",ia:!0},function(d){d=d.objectStore(b);return Rn(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Vn(a,b,c,d){var e,f,g,h,k,l,n,p,r,t,y,z;return A(function(x){switch(x.h){case 1:var J={mode:"readonly",ia:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?J.mode=c:Object.assign(J,c);e=J;a.transactionCount++;f=e.ia?3:1;g=0;case 2:if(h){x.B(4);break}g++;k=Math.round(W());Aa(x,5);l=a.h.transaction(b,e.mode);J=x.yield;var G=new Zn(l);G=$n(G,d);return J.call(x,G,7);case 7:return n=x.i,p=Math.round(W()),ao(a,k,p,g,void 0,b.join(),e),x.return(n);case 5:r=Ba(x);t=Math.round(W());y=Gn(r,
a.h.name,b.join(),a.h.version);if((z=y instanceof Cn&&!y.h)||g>=f)ao(a,k,t,g,y,b.join(),e),h=y;x.B(2);break;case 4:return x.return(Promise.reject(h))}})}
function ao(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Cn&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&rn("QUOTA_EXCEEDED",{dbName:tn(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Cn&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),rn("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),bo(a,!1,d,f,b,g.tag),qn(e)):bo(a,!0,d,f,b,g.tag)}
function bo(a,b,c,d,e,f){rn("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function Xn(a){this.h=a}
m=Xn.prototype;m.add=function(a,b){return Rn(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Rn(this.h.clear()).then(function(){})};
function co(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return Rn(this.h.count(a))};
function eo(a,b){return fo(a,{query:b},function(c){return c.delete().then(function(){return go(c)})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?eo(this,a):Rn(this.h.delete(a))};
m.get=function(a){return Rn(this.h.get(a))};
m.index=function(a){try{return new ho(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new En(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function fo(a,b,c){a=a.h.openCursor(b.query,b.direction);return io(a).then(function(d){return Sn(d,c)})}
function Zn(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Cn;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function $n(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
Zn.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Cn("EXPLICIT_ABORT");};
Zn.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Xn(a),this.i.set(a,b));return b};
function ho(a){this.h=a}
m=ho.prototype;m.count=function(a){return Rn(this.h.count(a))};
m.delete=function(a){return jo(this,{query:a},function(b){return b.delete().then(function(){return go(b)})})};
m.get=function(a){return Rn(this.h.get(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function jo(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return io(a).then(function(d){return Sn(d,c)})}
function ko(a,b){this.request=a;this.cursor=b}
function io(a){return Rn(a).then(function(b){return b?new ko(a,b):null})}
function go(a){a.cursor.continue(void 0);return io(a.request)}
ko.prototype.delete=function(){return Rn(this.cursor.delete()).then(function(){})};
ko.prototype.getValue=function(){return this.cursor.value};
ko.prototype.update=function(a){return Rn(this.cursor.update(a))};function lo(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Un(g.result,{closed:p}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Td,k=c.blocking,l=c.gf,n=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(null===t.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&"none"!==t.dataLoss&&rn("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:tn(a)});var y=f(),z=new Zn(g.transaction);
n&&n(y,function(x){return t.oldVersion<x&&t.newVersion>=x},z);
z.done.catch(function(x){e(x)})}catch(x){e(x)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){rn("IDB_UNEXPECTEDLY_CLOSED",{dbName:tn(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function mo(a,b,c){c=void 0===c?{}:c;return lo(a,b,c)}
function no(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return Aa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Td)&&c.addEventListener("blocked",function(){e()}),g.yield(Qn(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=Ba(g),Gn(f,a,"",-1);})}
;function oo(a,b){this.name=a;this.options=b;this.j=!0;this.v=this.l=0}
oo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return mo(a,b,c)};
oo.prototype.delete=function(a){a=void 0===a?{}:a;return no(this.name,a)};
function po(a,b){return new Cn("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function qo(a,b){if(!b)throw Hn("openWithToken",tn(a.name));return a.open()}
oo.prototype.open=function(){function a(){var f,g,h,k,l,n,p,r,t,y;return A(function(z){switch(z.h){case 1:return g=null!=(f=Error().stack)?f:"",Aa(z,2),z.yield(c.i(c.name,c.options.version,e),4);case 4:for(var x=h=z.i,J=c.options,G=[],R=v(Object.keys(J.xb)),N=R.next();!N.done;N=R.next()){N=N.value;var da=J.xb[N],Ca=void 0===da.Le?Number.MAX_VALUE:da.Le;!(x.h.version>=da.Cb)||x.h.version>=Ca||x.h.objectStoreNames.contains(N)||G.push(N)}k=G;if(0===k.length){z.B(5);break}l=Object.keys(c.options.xb);
n=h.objectStoreNames();if(c.v<U("ytidb_reopen_db_retries",0))return c.v++,h.close(),qn(new Cn("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),z.return(a());if(!(c.l<U("ytidb_remake_db_retries",1))){z.B(6);break}c.l++;return z.yield(c.delete(),7);case 7:return qn(new Cn("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),z.return(a());case 6:throw new Dn(n,l);case 5:return z.return(h);case 2:p=Ba(z);
if(p instanceof DOMException?"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){z.B(8);break}return z.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=z.i;t=r.h.version;if(void 0!==c.options.version&&t>c.options.version+1)throw r.close(),c.j=!1,po(c,t);return z.return(r);case 8:throw b(),p instanceof
Error&&!T("ytidb_async_stack_killswitch")&&(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Gn(p,c.name,"",null!=(y=c.options.version)?y:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw po(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,gf:b,upgrade:this.options.upgrade};return this.h=d=a()};var ro=new oo("YtIdbMeta",{xb:{databases:{Cb:1}},upgrade:function(a,b){b(1)&&Wn(a,"databases",{keyPath:"actualName"})}});
function so(a,b){var c;return A(function(d){if(1==d.h)return d.yield(qo(ro,b),2);c=d.i;return d.return(Vn(c,["databases"],{ia:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Rn(f.h.put(a,void 0)).then(function(){})})}))})}
function to(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(qo(ro,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function uo(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(qo(ro,b),2)):3!=e.h?(d=e.i,e.yield(Vn(d,["databases"],{ia:!0,mode:"readonly"},function(f){c.length=0;return fo(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return go(g)})}),3)):e.return(c)})}
function vo(a){return uo(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function wo(a,b,c){return uo(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function xo(a){var b,c;return A(function(d){if(1==d.h)return b=xm("YtIdbMeta hasAnyMeta other"),d.yield(uo(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var yo,zo=new function(){}(new function(){});
function Ao(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=hn();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=un)f=/WebKit\/([0-9]+)/.exec(Zb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Zb()),f=!(f&&602<=parseInt(f[1],10)));if(f||$c)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
Aa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(so(d,zo),4);case 4:return e.yield(to("yt-idb-test-do-not-use",zo),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Bo(){if(void 0!==yo)return yo;ln=!0;return yo=Ao().then(function(a){ln=!1;var b;if(null!=(b=gn())&&b.h){var c;b={hasSucceededOnce:(null==(c=hn())?void 0:c.hasSucceededOnce)||a};var d;null==(d=gn())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Co(){return E("ytglobal.idbToken_")||void 0}
function Do(){var a=Co();return a?Promise.resolve(a):Bo().then(function(b){(b=b?zo:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Eo=0;function Fo(a,b){Eo||(Eo=zi.oa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Do(),2);case 2:c=h.i;if(!c)return h.return();d=!0;Aa(h,3);return h.yield(wo(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.B(6);break}f=e[0];return h.yield(no(f.actualName),7);case 7:return h.yield(to(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=Ba(h),qn(g),d=!1;case 4:zi.pa(Eo),Eo=0,d&&Fo(a,b),h.h=0}})}))}
function Go(){var a;return A(function(b){return 1==b.h?b.yield(Do(),2):(a=b.i)?b.return(xo(a)):b.return(!1)})}
new ki;function Ho(a){if(!wm())throw a=new Cn("AUTH_INVALID",{dbName:a}),qn(a),a;var b=xm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Io(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(Do(),2);case 2:g=n.i;if(!g)throw h=Hn("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),qn(h),h;sn(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Ho(a);Aa(n,3);return n.yield(so(k,g),5);case 5:return n.yield(mo(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Ba(n),Aa(n,7),n.yield(to(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:Ba(n);case 8:throw l;}})}
function Jo(a,b,c){c=void 0===c?{}:c;return Io(a,b,!1,c)}
function Ko(a,b,c){c=void 0===c?{}:c;return Io(a,b,!0,c)}
function Lo(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(Do(),2);if(3!=e.h){c=e.i;if(!c)return e.return();sn(a);d=Ho(a);return e.yield(no(d.actualName,b),3)}return e.yield(to(d.actualName,c),0)})}
function Mo(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(no(d.actualName,b),2):e.yield(to(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function No(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(Do(),2);if(3!=d.h){b=d.i;if(!b)return d.return();sn("LogsDatabaseV2");return d.yield(vo(b),3)}c=d.i;return d.yield(Mo(c,a,b),0)})}
function Oo(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(Do(),2);if(3!=d.h){c=d.i;if(!c)return d.return();sn(a);return d.yield(no(a,b),3)}return d.yield(to(a,c),0)})}
;function Po(a,b){oo.call(this,a,b);this.options=b;sn(a)}
w(Po,oo);function Qo(a,b){var c;return function(){c||(c=new Po(a,b));return c}}
Po.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.nc?Ko:Jo)(a,b,Object.assign({},c))};
Po.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.nc?Oo:Lo)(this.name,a)};
function Ro(a,b){return Qo(a,b)}
;var So={},To=Ro("ytGcfConfig",{xb:(So.coldConfigStore={Cb:1},So.hotConfigStore={Cb:1},So),nc:!1,upgrade:function(a,b){b(1)&&(co(Wn(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),co(Wn(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Uo(a){return qo(To(),a)}
function Vo(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:W()},g.yield(Uo(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Yn(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Wo(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:W()},h.yield(Uo(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Yn(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Xo(a){var b,c;return A(function(d){return 1==d.h?d.yield(Uo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Vn(b,["coldConfigStore"],{mode:"readwrite",ia:!0},function(e){return jo(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Yo(a){var b,c;return A(function(d){return 1==d.h?d.yield(Uo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Vn(b,["hotConfigStore"],{mode:"readwrite",ia:!0},function(e){return jo(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Zo(){H.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ma(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(Zo,H);Zo.prototype.S=function(){for(var a=v(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.i.length=0;H.prototype.S.call(this)};function $o(){this.h=0;this.i=new Zo}
function ap(){var a;return null!=(a=E("yt.gcf.config.hotConfigGroup"))?a:S("RAW_HOT_CONFIG_GROUP")}
function bp(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!T("start_client_gcf")){g.B(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=Co();if(!d){g.B(3);break}if(c){g.B(4);break}return g.yield(Yo(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(Vo(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function cp(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!T("start_client_gcf"))return h.B(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Co())?c?h.B(4):h.yield(Xo(d),5):h.B(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return h.yield(Wo(c,b,g,d),0)})}
function dp(){if(!$o.h){var a=new $o;$o.h=a}a=$o.h;var b=W()-a.h;if(!(0!==a.h&&b<U("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=W());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
$o.prototype.l=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function ep(){return"INNERTUBE_API_KEY"in Xk&&"INNERTUBE_API_VERSION"in Xk}
function fp(){return{innertubeApiKey:S("INNERTUBE_API_KEY"),innertubeApiVersion:S("INNERTUBE_API_VERSION"),oe:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),md:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),cg:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),qe:S("INNERTUBE_CONTEXT_HL"),pe:S("INNERTUBE_CONTEXT_GL"),re:S("INNERTUBE_HOST_OVERRIDE")||"",te:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),se:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function gp(a){var b={client:{hl:a.qe,gl:a.pe,clientName:a.md,clientVersion:a.innertubeContextClientVersion,configInfo:a.oe}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=wl();0<c.length&&(b.request={internalExperimentFlags:c});c=a.md;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=dm()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(T("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=tm())&&b&&(b.client.connectionType=a);T("web_log_effective_connection_type")&&(a=um())&&
b&&(b.client.effectiveConnectionType=a);T("start_client_gcf")&&(e=dp())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=f,b.client.configInfo.hotHashData=e));S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(kl(S("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function hp(a,b,c){c=void 0===c?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||S("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Uf:(a=am($l()),T("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var ip="undefined"!==typeof TextEncoder?new TextEncoder:null,jp=ip?function(a){return ip.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function kp(a,b){this.version=a;this.args=b}
kp.prototype.serialize=function(){return{version:this.version,args:this.args}};function lp(a,b){this.topic=a;this.h=b}
lp.prototype.toString=function(){return this.topic};var mp=E("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Ab;L.prototype.publish=L.prototype.Ya;L.prototype.clear=L.prototype.clear;D("ytPubsub2Pubsub2Instance",mp);var np=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",np);var op=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",op);var pp=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",pp);
D("ytPubsub2Pubsub2SkipSubKey",null);function qp(a,b){var c=rp();c&&c.publish.call(c,a.toString(),a,b)}
function sp(a){var b=tp,c=rp();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(np[d])try{if(f&&b instanceof lp&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Wa){var l=new h;h.Wa=l.version}var n=h.Wa}catch(x){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var r=k.args,t=r.length;if(0<t){var y=Array(t);for(k=0;k<t;k++)y[k]=r[k];var z=y}else z=[];f=p.call(n,h,z)}catch(x){throw x.message="yt.pubsub2.Data.deserialize(): "+x.message,x;}}catch(x){throw x.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+x.message,x;}a.call(window,f)}catch(x){cl(x)}},pp[b.toString()]?E("yt.scheduler.instance")?zi.oa(g):tl(g,0):g())});
np[d]=!0;op[b.toString()]||(op[b.toString()]=[]);op[b.toString()].push(d);return d}
function up(){var a=vp,b=sp(function(c){a.apply(void 0,arguments);wp(b)});
return b}
function wp(a){var b=rp();b&&("number"===typeof a&&(a=[a]),Fb(a,function(c){b.unsubscribeByKey(c);delete np[c]}))}
function rp(){return E("ytPubsub2Pubsub2Instance")}
;function xp(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&qp("meta_logging_csi_event",{timerName:a,qg:b})}
;var yp=void 0,zp=void 0;function Ap(){zp||(zp=zk(S("WORKER_SERIALIZATION_URL")));return zp||void 0}
function Bp(){var a=Ap();yp||void 0===a||(yp=new Worker(kb(a),void 0));return yp}
;var Cp=U("max_body_size_to_compress",5E5),Dp=U("min_body_size_to_compress",500),Ep=!0,Fp=0,Gp=0,Hp=U("compression_performance_threshold_lr",250),Ip=U("slow_compressions_before_abandon_count",4),Jp=!1,Kp=new Map,Lp=1,Mp=!0;function Np(){if("function"===typeof Worker&&Ap()&&!Jp){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=Kp.get(c.key);d&&(Op(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Kp.delete(c.key))}},b=Bp();
b&&(b.addEventListener("message",a),b.onerror=function(){Kp.clear()},Jp=!0)}}
function Pp(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:W(),ticks:{},infos:{}};if(Ep)try{var g=Qp(b);if(null!=g&&(g>Cp||g<Dp))d(a,c);else{if(T("gzip_gel_with_worker")&&(T("initial_gzip_use_main_thread")&&!Mp||!T("initial_gzip_use_main_thread"))){Jp||Np();var h=Bp();if(h&&!e){Kp.set(Lp,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Lp});Lp++;return}}var k=yk(jp(b));Op(k,f,a,c,d)}}catch(l){dl(l),d(a,c)}else d(a,c)}
function Op(a,b,c,d,e){Mp=!1;var f=W();b.ticks.gelc=f;Gp++;T("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Hp&&(Fp++,T("abandon_compression_after_N_slow_zips")?Gp===U("compression_disable_point")&&Fp>Ip&&(Ep=!1):Ep=!1);Rp(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Sp(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=W(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Ep&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=Qp(g);if(null!=h&&(h>Cp||h<Dp))return a;c=b?{level:1}:void 0;f=yk(jp(g),c);var k=W();e.ticks.gelc=k;if(b){Gp++;if((T("disable_compression_due_to_performance_degredation")||T("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Hp)if(Fp++,T("abandon_compression_after_N_slow_zips")||T("abandon_compression_after_N_slow_zips_lr")){b=Fp/Gp;var l=Ip/U("compression_disable_point");0<Gp&&0===Gp%U("compression_disable_point")&&b>=l&&(Ep=!1)}else Ep=!1;Rp(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return dl(n),a}}else return a}
function Qp(a){try{return(new Blob(a.split(""))).size}catch(b){return dl(b),null}}
function Rp(a){T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||xp("gel_compression",a,{sampleRate:.1})}
;function Tp(a){a=Object.assign({},a);delete a.Authorization;var b=ah();if(b){var c=new Fi;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=Te(c.digest(),3)}return a}
;var Up;function Vp(){Up||(Up=new fn("yt.innertube"));return Up}
function Wp(a,b,c,d){if(d)return null;d=Vp().get("nextId",!0)||1;var e=Vp().get("requests",!0)||{};e[d]={method:a,request:b,authState:Tp(c),requestTime:Math.round(W())};Vp().set("nextId",d+1,86400,!0);Vp().set("requests",e,86400,!0);return d}
function Xp(a){var b=Vp().get("requests",!0)||{};delete b[a];Vp().set("requests",b,86400,!0)}
function Yp(a){var b=Vp().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(W())-d.requestTime)){var e=d.authState,f=Tp(hp(!1));Sb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),Zp(a,d.method,e,{}));delete b[c]}}Vp().set("requests",b,86400,!0)}}
;function $p(a){this.Ub=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.pb=function(){};
this.now=Date.now;this.Fb=!1;var b;this.Gd=null!=(b=a.Gd)?b:100;var c;this.Ad=null!=(c=a.Ad)?c:1;var d;this.xd=null!=(d=a.xd)?d:2592E6;var e;this.vd=null!=(e=a.vd)?e:12E4;var f;this.zd=null!=(f=a.zd)?f:5E3;var g;this.T=null!=(g=a.T)?g:void 0;this.Zb=!!a.Zb;var h;this.Xb=null!=(h=a.Xb)?h:.1;var k;this.jc=null!=(k=a.jc)?k:10;a.handleError&&(this.handleError=a.handleError);a.pb&&(this.pb=a.pb);a.Fb&&(this.Fb=a.Fb);a.Ub&&(this.Ub=a.Ub);this.U=a.U;this.Ca=a.Ca;this.da=a.da;this.aa=a.aa;this.sendFn=a.sendFn;
this.Oc=a.Oc;this.Lc=a.Lc;aq(this)&&(!this.U||this.U("networkless_logging"))&&bq(this)}
function bq(a){aq(a)&&!a.Fb&&(a.h=!0,a.Zb&&Math.random()<=a.Xb&&a.da.Ud(a.T),cq(a),a.aa.wa()&&a.Pb(),a.aa.listen(a.Oc,a.Pb.bind(a)),a.aa.listen(a.Lc,a.Zc.bind(a)))}
m=$p.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(aq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.da.set(d,this.T).then(function(e){d.id=e;c.aa.wa()&&dq(c,d)}).catch(function(e){dq(c,d);
eq(c,e)})}else this.sendFn(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(aq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.U&&this.U("nwl_skip_retry")&&(e.skipRetry=c);if(this.aa.wa()||this.U&&this.U("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.da.set(e,d.T).catch(function(l){eq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.da.set(e,this.T).catch(function(g){d.sendFn(a,b,e.skipRetry);
eq(d,g)})}else this.sendFn(a,b,this.U&&this.U("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(aq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.da.nb(d.id,c.T):e=!0;c.aa.gb&&c.U&&c.U("vss_network_hint")&&c.aa.gb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.da.set(d,this.T).then(function(g){d.id=g;e&&c.da.nb(d.id,c.T)}).catch(function(g){eq(c,g)})}else this.sendFn(a,b,void 0,!0)};
m.Pb=function(){var a=this;if(!aq(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ca.oa(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.da.jd("NEW",a.T),2);if(3!=c.h)return b=c.i,b?c.yield(dq(a,b),3):(a.Zc(),c.return());a.i&&(a.i=0,a.Pb());c.h=0})},this.Gd))};
m.Zc=function(){this.Ca.pa(this.i);this.i=0};
function dq(a,b){var c;return A(function(d){switch(d.h){case 1:if(!aq(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return d.yield(a.da.xe(b.id,a.T),3);case 3:(c=d.i)||a.pb(Error("The request cannot be found in the database."));case 2:if(fq(a,b,a.xd)){d.B(4);break}a.pb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return d.yield(a.da.nb(b.id,a.T),5);case 5:return d.return();case 4:b.skipRetry||(b=gq(a,
b));if(!b){d.B(0);break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return d.yield(a.da.nb(b.id,a.T),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function gq(a,b){if(!aq(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=hq(f);(h=iq(f))&&a.U&&a.U("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.U&&a.U("nwl_consider_error_code")&&g||a.U&&!a.U("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.jc)){n.B(2);break}if(!a.aa.mc){n.B(3);break}return n.yield(a.aa.mc(),3);case 3:if(a.aa.wa()){n.B(2);break}c(e,f);if(!a.U||!a.U("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.B(6);
break}return n.yield(a.da.Pc(b.id,a.T,!1),6);case 6:return n.return();case 2:if(a.U&&a.U("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.jc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.B(8);break}return b.sendCount<a.Ad?n.yield(a.da.Pc(b.id,a.T,!0,h?!1:void 0),12):n.yield(a.da.nb(b.id,a.T),8);case 12:a.Ca.oa(function(){a.aa.wa()&&a.Pb()},a.zd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):h.yield(a.da.nb(b.id,a.T),2);a.aa.gb&&a.U&&a.U("vss_network_hint")&&a.aa.gb(!0);d(e,f);h.h=0})};
return b}
function fq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function cq(a){if(!aq(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.da.jd("QUEUED",a.T).then(function(b){b&&!fq(a,b,a.vd)?a.Ca.oa(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.B(2):c.yield(a.da.Pc(b.id,a.T),2);cq(a);c.h=0})}):a.aa.wa()&&a.Pb()})}
function eq(a,b){a.Md&&!a.aa.wa()?a.Md(b):a.handleError(b)}
function aq(a){return!!a.T||a.Ub}
function hq(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function iq(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var jq;
function kq(){if(jq)return jq();var a={};jq=Ro("LogsDatabaseV2",{xb:(a.LogsRequestsStore={Cb:2},a),nc:!1,upgrade:function(b,c,d){c(2)&&Wn(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),co(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return jq()}
;function lq(a){return qo(kq(),a)}
function mq(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(lq(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Yn(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=W();nq(c);return g.return(f)})}
function oq(a,b){var c,d,e,f,g,h,k,l;return A(function(n){if(1==n.h)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},n.yield(lq(b),2);if(3!=n.h)return d=n.i,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,W()],h=IDBKeyRange.bound(f,g),k="prev",T("use_fifo_for_networkless")&&(k="next"),l=void 0,n.yield(Vn(d,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(p){return jo(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(r){r.getValue()&&(l=r.getValue(),"NEW"===a&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=W();nq(c);return n.return(l)})}
function pq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(lq(b),2);c=d.i;return d.return(Vn(c,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Rn(f.h.put(g,void 0)).then(function(){return g})})}))})}
function qq(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(lq(b),2);e=f.i;return f.return(Vn(e,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Rn(h.h.put(k,void 0)).then(function(){return k})):Ln.resolve(void 0)})}))})}
function rq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(lq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function sq(a){var b,c;return A(function(d){if(1==d.h)return d.yield(lq(a),2);b=d.i;c=W()-2592E6;return d.yield(Vn(b,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(e){return fo(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return go(f)})})}),0)})}
function tq(){A(function(a){return a.yield(No(),0)})}
function nq(a){T("nwl_csi_killswitch")||xp("networkless_performance",a,{sampleRate:1})}
;var uq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496};var vq={},wq=Ro("ServiceWorkerLogsDatabase",{xb:(vq.SWHealthLog={Cb:1},vq),nc:!0,upgrade:function(a,b){b(1)&&co(Wn(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function xq(a){return qo(wq(),a)}
function yq(a){var b,c;A(function(d){if(1==d.h)return d.yield(xq(a),2);b=d.i;c=W()-2592E6;return d.yield(Vn(b,["SWHealthLog"],{mode:"readwrite",ia:!0},function(e){return fo(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return go(f)})})}),0)})}
function zq(a){var b;return A(function(c){if(1==c.h)return c.yield(xq(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Aq={},Bq=0;function Cq(a){var b=new Image,c=""+Bq++;Aq[c]=b;b.onload=b.onerror=function(){delete Aq[c]};
b.src=a}
;function Dq(){this.h=new Map;this.i=!1}
function Eq(){if(!Dq.h){var a=E("yt.networkRequestMonitor.instance")||new Dq;D("yt.networkRequestMonitor.instance",a);Dq.h=a}return Dq.h}
Dq.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Dq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Dq.prototype.removeParams=function(a){return a.split("?")[0]};
Dq.prototype.removeParams=Dq.prototype.removeParams;Dq.prototype.isEndpointCFR=Dq.prototype.isEndpointCFR;Dq.prototype.requestComplete=Dq.prototype.requestComplete;Dq.getInstance=Eq;var Fq;function Gq(){Fq||(Fq=new fn("yt.offline"));return Fq}
function Hq(a){if(T("offline_error_handling")){var b=Gq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Gq().set("errors",b,2592E3,!0)}}
;function Iq(){Jd.call(this);var a=this;this.j=!1;this.i=yi();this.i.listen("networkstatus-online",function(){if(a.j&&T("offline_error_handling")){var b=Gq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new V(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;cl(d)}Gq().set("errors",{},2592E3,!0)}}})}
w(Iq,Jd);function Jq(){if(!Iq.h){var a=E("yt.networkStatusManager.instance")||new Iq;D("yt.networkStatusManager.instance",a);Iq.h=a}return Iq.h}
m=Iq.prototype;m.wa=function(){return this.i.wa()};
m.gb=function(a){this.i.i=a};
m.ke=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Zd=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.mc=function(a){a=wi(this.i,a);a.then(function(b){T("use_cfr_monitor")&&Eq().requestComplete("generate_204",b)});
return a};
Iq.prototype.sendNetworkCheckRequest=Iq.prototype.mc;Iq.prototype.listen=Iq.prototype.listen;Iq.prototype.enableErrorFlushing=Iq.prototype.Zd;Iq.prototype.getWindowStatus=Iq.prototype.ke;Iq.prototype.networkStatusHint=Iq.prototype.gb;Iq.prototype.isNetworkAvailable=Iq.prototype.wa;Iq.getInstance=Jq;function Kq(a){a=void 0===a?{}:a;Jd.call(this);var b=this;this.i=this.m=0;this.j=Jq();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Lq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Lq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Kd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Kd(b,"publicytnetworkstatus-offline")})))}
w(Kq,Jd);Kq.prototype.wa=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Kq.prototype.gb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Kq.prototype.mc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return T("skip_network_check_if_cfr")&&Eq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.wa())})):c?d.return(c(a)):d.return(!0)})};
function Lq(a,b){a.rateLimit?a.i?(zi.pa(a.m),a.m=zi.oa(function(){a.l!==b&&(Kd(a,b),a.l=b,a.i=W())},a.rateLimit-(W()-a.i))):(Kd(a,b),a.l=b,a.i=W()):Kd(a,b)}
;var Mq;function Nq(){var a=$p.call;Mq||(Mq=new Kq({gg:!0,Zf:!0}));a.call($p,this,{da:{Ud:sq,nb:rq,jd:oq,xe:pq,Pc:qq,set:mq},aa:Mq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;dl(new V(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else cl(b)},
pb:dl,sendFn:Oq,now:W,Md:Hq,Ca:en(),Oc:"publicytnetworkstatus-online",Lc:"publicytnetworkstatus-offline",Zb:!0,Xb:.1,jc:U("potential_esf_error_limit",10),U:T,Fb:!(wm()&&Pq())});this.j=new ki;T("networkless_immediately_drop_all_requests")&&tq();Oo("LogsDatabaseV2")}
w(Nq,$p);function Qq(){var a=E("yt.networklessRequestController.instance");a||(a=new Nq,D("yt.networklessRequestController.instance",a),T("networkless_logging")&&Do().then(function(b){a.T=b;bq(a);a.j.resolve();a.Zb&&Math.random()<=a.Xb&&a.T&&yq(a.T);T("networkless_immediately_drop_sw_health_store")&&Rq(a)}));
return a}
Nq.prototype.writeThenSend=function(a,b){b||(b={});b=Sq(a,b);wm()||(this.h=!1);$p.prototype.writeThenSend.call(this,a,b)};
Nq.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Sq(a,b);wm()||(this.h=!1);$p.prototype.sendThenWrite.call(this,a,b,c)};
Nq.prototype.sendAndWrite=function(a,b){b||(b={});b=Sq(a,b);wm()||(this.h=!1);$p.prototype.sendAndWrite.call(this,a,b)};
Nq.prototype.awaitInitialization=function(){return this.j.promise};
function Rq(a){var b;A(function(c){if(!a.T)throw b=Hn("clearSWHealthLogsDb"),b;return c.return(zq(a.T).catch(function(d){a.handleError(d)}))})}
function Oq(a,b,c,d){d=void 0===d?!1:d;b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&Tq(a,b);if(T("use_request_time_ms_header"))b.headers&&nl(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(W())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)Al(a,void 0,"POST",f,void 0);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Al(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new cb({url:a});if(k.j&&k.i||k.l){var l=Ac(Bc(5,a)),n;if(!(n=!l||!l.endsWith("/aclk"))){var p=a.search(Jc),r=Ic(a,0,"ri",p);if(0>r)var t=null;else{var y=a.indexOf("&",r);if(0>y||y>p)y=p;t=decodeURIComponent(a.slice(r+3,-1!==y?y:0).replace(/\+/g," "))}n="1"!==t}var z=!n;break b}}catch(J){}z=!1}if(z){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var x=!0;break b}}catch(J){}x=!1}c=x?!0:!1}else c=
!1;c||Cq(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Pp(a,b.postBody,b,El,d)):Pp(a,JSON.stringify(b.postParams),b,Dl,d):El(a,b)}
function Sq(a,b){T("use_event_time_ms_header")&&nl(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(W())));return b}
function Tq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Eq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Eq().requestComplete(a,!0);d(e,f)}}
function Pq(){return"www.youtube-nocookie.com"!==Cc(document.location.toString())}
;var Uq=!1,Vq=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Uq};D("ytNetworklessLoggingInitializationOptions",Vq);function Wq(){var a;A(function(b){if(1==b.h)return b.yield(Do(),2);a=b.i;if(!a||!wm()&&!T("nwl_init_require_datasync_id_killswitch")||!Pq())return b.B(0);Uq=!0;Vq.isNwlInitialized=Uq;return b.yield(Qq().awaitInitialization(),0)})}
;function Xq(a){var b=this;this.config_=null;a?this.config_=a:ep()&&(this.config_=fp());zm(function(){Yp(b)},5E3)}
Xq.prototype.isReady=function(){!this.config_&&ep()&&(this.config_=fp());return!!this.config_};
function Zp(a,b,c,d){function e(y){y=void 0===y?!1:y;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(y||T("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(z=Wp(b,c,l,k)),z)){var x=g.onSuccess,J=g.onFetchSuccess;g.onSuccess=function(N,da){Xp(z);x(N,da)};
c.onFetchSuccess=function(N,da){Xp(z);J(N,da)}}try{if(y&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Qq().writeThenSend(t,g):Qq().sendAndWrite(t,g);
else if(d.compress){var G=!d.networklessOptions.writeThenSend;if(g.postBody){var R=g.postBody;"string"!==typeof R&&(R=JSON.stringify(g.postBody));Pp(t,R,g,El,G)}else Pp(t,JSON.stringify(g.postParams),g,Dl,G)}else T("web_all_payloads_via_jspb")?El(t,g):Dl(t,g)}catch(N){if("InvalidAccessError"===N.name)z&&(Xp(z),z=0),dl(Error("An extension is blocking network request."));else throw N;}z&&zm(function(){Yp(a)},5E3)}
!S("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&dl(new V("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new V("innertube xhrclient not ready",b,c,d);cl(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(y,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(y){if(d.onSuccess)d.onSuccess(y)},
onError:function(y,z){if(d.onError)d.onError(z)},
onFetchError:function(y){if(d.onError)d.onError(y)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.re)&&(h=f);var k=a.config_.te||!1,l=hp(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},r=a.config_.se&&f;r=r&&f.startsWith("Bearer");r||(p.key=a.config_.innertubeApiKey);var t=ml(""+h+n,p||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
Vq.isNwlInitialized:Uq)?Bo().then(function(y){e(y)}):e(!1)}
;var Yq=0,Zq=bd?"webkit":ad?"moz":Zc?"ms":Yc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++Yq});var $q={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function ar(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in $q||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function br(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
ar.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ar.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ar.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ob=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",Ob);var cr=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",cr);
function dr(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Nb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&Sb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function er(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=dr(a,b,c,d);if(e)return e;e=++cr.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new ar(h);if(!Ud(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new ar(h);
h.currentTarget=a;return c.call(a,h)};
g=bl(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),fr()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Ob[e]=[a,b,c,g,d];return e}
function gr(a){a&&("string"==typeof a&&(a=[a]),Fb(a,function(b){if(b in Ob){var c=Ob[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?fr()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Ob[b]}}))}
var fr=Pd(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function hr(a){this.D=a;this.h=null;this.l=0;this.A=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.W=er(window,"mousemove",Xa(this.Y,this));a=Xa(this.R,this);"function"===typeof a&&(a=bl(a));this.ba=window.setInterval(a,25)}
$a(hr,H);hr.prototype.Y=function(a){void 0===a.h&&br(a);var b=a.h;void 0===a.i&&br(a);this.h=new Qd(b,a.i)};
hr.prototype.R=function(){if(this.h){var a=W();if(0!=this.l){var b=this.A,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.D();this.m=d}this.l=a;this.A=this.h;this.j=(this.j+1)%4}};
hr.prototype.S=function(){window.clearInterval(this.ba);gr(this.W)};var ir={};
function jr(a){var b=void 0===a?{}:a;a=void 0===b.He?!1:b.He;b=void 0===b.ae?!0:b.ae;if(null==E("_lact",window)){var c=parseInt(S("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&kr();er(document,"keydown",kr);er(document,"keyup",kr);er(document,"mousedown",kr);er(document,"mouseup",kr);a?er(window,"touchmove",function(){lr("touchmove",200)},{passive:!0}):(er(window,"resize",function(){lr("resize",200)}),b&&er(window,"scroll",function(){lr("scroll",200)}));
new hr(function(){lr("mouse",100)});
er(document,"touchstart",kr,{passive:!0});er(document,"touchend",kr,{passive:!0})}}
function lr(a,b){ir[a]||(ir[a]=!0,zi.oa(function(){kr();ir[a]=!1},b))}
function kr(){null==E("_lact",window)&&jr();var a=Date.now();D("_lact",a,window);-1==E("_fact",window)&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function mr(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var nr=C.ytPubsubPubsubInstance||new L,or=C.ytPubsubPubsubSubscribedKeys||{},pr=C.ytPubsubPubsubTopicToKeys||{},qr=C.ytPubsubPubsubIsSynchronous||{};function rr(a,b){var c=vr();if(c&&b){var d=c.subscribe(a,function(){function e(){or[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,f)}
var f=arguments;try{qr[a]?e():tl(e,0)}catch(g){cl(g)}},void 0);
or[d]=!0;pr[a]||(pr[a]=[]);pr[a].push(d);return d}return 0}
function wr(a){var b=vr();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),Fb(a,function(c){b.unsubscribeByKey(c);delete or[c]}))}
function xr(a,b){var c=vr();c&&c.publish.apply(c,arguments)}
function yr(a){var b=vr();if(b)if(b.clear(a),a)zr(a);else for(var c in pr)zr(c)}
function vr(){return C.ytPubsubPubsubInstance}
function zr(a){pr[a]&&(a=pr[a],Fb(a,function(b){or[b]&&delete or[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Ab;L.prototype.publish=L.prototype.Ya;L.prototype.clear=L.prototype.clear;D("ytPubsubPubsubInstance",nr);D("ytPubsubPubsubTopicToKeys",pr);D("ytPubsubPubsubIsSynchronous",qr);D("ytPubsubPubsubSubscribedKeys",or);var Ar=Symbol("injectionDeps");function Br(a){this.name=a}
Br.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Cr(a){this.key=a}
function Dr(){this.i=new Map;this.j=new Map;this.h=new Map}
function Er(a,b){a.i.set(b.lc,b);var c=a.j.get(b.lc);c&&c.mg(a.resolve(b.lc))}
Dr.prototype.resolve=function(a){return a instanceof Cr?Fr(this,a.key,[],!0):Fr(this,a,[])};
function Fr(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(void 0!==d.Jd)var e=d.Jd;else if(d.nf)e=d[Ar]?Gr(a,d[Ar],c):[],e=d.nf.apply(d,ma(e));else if(d.Id){e=d.Id;var f=e[Ar]?Gr(a,e[Ar],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ma(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.pg||a.h.set(b,e);return e}
function Gr(a,b,c){return b?b.map(function(d){return d instanceof Cr?Fr(a,d.key,c,!0):Fr(a,d,c)}):[]}
;var Hr;function Ir(){Hr||(Hr=new Dr);return Hr}
;var Jr=window;function Kr(){var a,b;return"h5vcc"in Jr&&(null==(a=Jr.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Jr.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Jr&&Jr.performance.mark&&Jr.performance.measure?2:0}
function Lr(a){switch(Kr()){case 1:Jr.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Jr.performance.mark(a+"-start");break;case 0:break;default:lc()}}
function Mr(a){switch(Kr()){case 1:Jr.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Jr.performance.mark(c);Jr.performance.measure(a,b,c);break;case 0:break;default:lc()}}
;var Nr=T("web_enable_lifecycle_monitoring")&&0!==Kr(),Or=T("web_enable_lifecycle_monitoring");function Pr(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?en():d;this.j=c;this.scheduler=d;this.i=new ki;this.h=a;for(a={cb:0};a.cb<this.h.length;a={ic:void 0,cb:a.cb},a.cb++)a.ic=this.h[a.cb],c=function(e){return function(){e.ic.Ec();b.h[e.cb].kc=!0;b.h.every(function(f){return!0===f.kc})&&b.i.resolve()}}(a),d=this.getPriority(a.ic),d=this.scheduler.ab(c,d),this.h[a.cb]=Object.assign({},a.ic,{Ec:c,
jobId:d})}
function Qr(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.kc||(a.scheduler.pa(c.jobId),a.scheduler.ab(c.Ec,10))}
Pr.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.kc||this.scheduler.pa(b.jobId),b.kc=!0;this.i.resolve()};
Pr.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function Rr(a){this.state=a;this.plugins=[];this.l=void 0;this.A={};Nr&&Lr(this.state)}
m=Rr.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;Nr&&Mr(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Qr(this.j),this.j=void 0);Sr(this,a,b);this.state=a;Nr&&Lr(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Tr(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Tr(a,b){var c=b.filter(function(e){return 10===Ur(a,e)}),d=b.filter(function(e){return 10!==Ur(a,e)});
return a.A.og?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Oe.apply(a,[c].concat(ma(e))),2);a.Dd.apply(a,[d].concat(ma(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Pe.apply(a,[c].concat(ma(e)));a.Dd.apply(a,[d].concat(ma(e)))}}
m.Pe=function(a){for(var b=B.apply(1,arguments),c=en(),d=v(a),e=d.next(),f={};!e.done;f={Hb:void 0},e=d.next())f.Hb=e.value,c.Bb(function(g){return function(){Vr(g.Hb.name);g.Hb.callback.apply(g.Hb,ma(b));Wr(g.Hb.name)}}(f))};
m.Oe=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){1==h.h&&(c=en(),d=v(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.B(0);f.tb=e.value;f.Sb=void 0;g=function(k){return function(){Vr(k.tb.name);var l=k.tb.callback.apply(k.tb,ma(b));"function"===typeof(null==l?void 0:l.then)?k.Sb=l.then(function(){Wr(k.tb.name)}):Wr(k.tb.name)}}(f);
c.Bb(g);return f.Sb?h.yield(f.Sb,3):h.B(3)}f={tb:void 0,Sb:void 0};e=d.next();return h.B(2)})};
m.Dd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Ec:function(){Vr(e.name);e.callback.apply(e,ma(b));Wr(e.name)},
priority:Ur(c,e)}});
d.length&&(this.j=new Pr(d))};
function Ur(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function Vr(a){Nr&&a&&Lr(a)}
function Wr(a){Nr&&a&&Mr(a)}
function Sr(a,b,c){Or&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
fa.Object.defineProperties(Rr.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Xr(a){Rr.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.v},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Yr;w(Xr,Rr);Xr.prototype.i=function(a,b){var c=this;this.h=zm(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
Xr.prototype.v=function(a,b){this.h&&(zi.pa(this.h),this.h=null);a(null==b?void 0:b.event)};
function Zr(){Yr||(Yr=new Xr);return Yr}
;var $r=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return $r});function as(){this.store={};this.h={}}
as.prototype.storePayload=function(a,b){a=bs(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
as.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=cs(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ma(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ma(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ma(this.smartExtractMatchingEntries(a))));return c};
as.prototype.extractMatchingEntries=function(a){a=cs(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ma(this.store[a[c]])),delete this.store[a[c]]);return b};
as.prototype.getSequenceCount=function(a){a=cs(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function cs(a,b){var c=bs(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&bs(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(ds(b.auth,g[0])){var h=b.isJspb;ds(void 0===h?"undefined":h?"true":"false",g[1])&&ds(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),ds(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function ds(a,b){return void 0===a||"undefined"===a?!0:a===b}
as.prototype.getSequenceCount=as.prototype.getSequenceCount;as.prototype.extractMatchingEntries=as.prototype.extractMatchingEntries;as.prototype.smartExtractMatchingEntries=as.prototype.smartExtractMatchingEntries;as.prototype.storePayload=as.prototype.storePayload;function bs(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function es(a,b){if(a)return a[b.name]}
;var gs=U("initial_gel_batch_timeout",2E3),hs=U("gel_queue_timeout_max_ms",6E4),is=Math.pow(2,16)-1,js=U("gel_min_batch_size",5),ks=void 0;function ls(){this.l=this.h=this.i=0;this.j=!1}
var ms=new ls,ns=new ls,ps=new ls,qs=new ls,rs,ss=!0,ts=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",ts);var us={};function vs(){var a=E("yt.logging.ims");a||(a=new as,D("yt.logging.ims",a));return a}
function ws(a,b){if("log_event"===a.endpoint){xs();var c=ys(a),d=zs(a.payload)||"";a:{if(T("enable_web_tiered_gel")){var e=uq[d||""];var f,g,h,k=null==Ir().resolve(new Cr($o))?void 0:null==(f=ap())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(!1===e.enabled&&!T("web_payload_policy_disabled_killswitch"))return;k=As(e.tier);if(400===k){Bs(a,b);return}}us[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};vs().storePayload(e,a.payload);Cs(b,c,e,"gelDebuggingEvent"===d)}}
function Cs(a,b,c,d){function e(){Ds({writeThenSend:!0},T("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;a&&(ks=new a);a=U("tvhtml5_logging_max_batch_ads_fork")||U("web_logging_max_batch")||100;var g=W(),h=Es(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=vs().getSequenceCount(c));1E3<=d?e():d>=a?rs||(rs=Fs(function(){e();rs=void 0},0)):10<=g-k&&(Gs(f,c.tier),h.l=g)}
function Bs(a,b){if("log_event"===a.endpoint){xs();var c=ys(a),d=new Map;d.set(c,[a.payload]);var e=zs(a.payload)||"";b&&(ks=new b);return new ge(function(f,g){ks&&ks.isReady()?Hs(d,ks,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function ys(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);ts[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Ds(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new ge(function(e,f){var g=Es(c,d),h=g.j;g.j=!1;Is(g.i);Is(g.h);g.h=0;ks&&ks.isReady()?void 0===d&&T("enable_web_tiered_gel")?Js(e,f,a,b,c,300,h):Js(e,f,a,b,c,d,h):(Gs(c,d),e())})}
function Js(a,b,c,d,e,f,g){var h=ks;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=T("enable_web_tiered_gel")?vs().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):vs().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys(us)),l=d.next();!l.done;l=d.next())l=l.value,e=T("enable_web_tiered_gel")?vs().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):vs().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete us[l];Hs(k,h,a,b,c,!1,g)}
function Gs(a,b){function c(){Ds({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Es(a,b),e=d===qs||d===ps?5E3:hs;T("web_gel_timeout_cap")&&!d.h&&(e=Fs(function(){c()},e),d.h=e);
Is(d.i);e=S("LOGGING_BATCH_TIMEOUT",U("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&ss&&(e=gs);e=Fs(function(){0<U("gel_min_batch_size")?vs().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=js&&c():c()},e);
d.i=e}
function Hs(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(W()),k=a.size,l=(void 0===g?0:g)&&T("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var n=a.next();for(g={};!n.done;g={Kc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Nc:void 0,Mc:void 0},n=a.next()){var p=v(n.value);n=p.next().value;p=p.next().value;g.batchRequest=Ub({context:gp(b.config_||fp())});if(!Qa(p)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=ts[n])&&
Ks(g.batchRequest,n,p);delete ts[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;Ls(g.batchRequest,h,g.dangerousLogToVisitorSession);T("always_send_and_write")&&(e.writeThenSend=!1);g.Nc=function(r){T("start_client_gcf")&&zi.oa(function(){return A(function(t){return t.yield(Ms(r),0)})});
k--;k||c()};
g.Kc=0;g.Mc=function(r){return function(){r.Kc++;if(e.bypassNetworkless&&1===r.Kc)try{Zp(b,l,r.batchRequest,Ns({writeThenSend:!0},r.dangerousLogToVisitorSession,r.Nc,r.Mc,f)),ss=!1}catch(t){cl(t),d()}k--;k||c()}}(g);
try{Zp(b,l,g.batchRequest,Ns(e,g.dangerousLogToVisitorSession,g.Nc,g.Mc,f)),ss=!1}catch(r){cl(r),d()}}}
function Ns(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Wf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};Os()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function Ls(a,b,c){Os()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&((c=S("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*is/2)),c++,c>is&&(c=1),Yk("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Ks(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function xs(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=vl("il_payload_scraping"),a="enable_il_payload_scraping"!==(void 0!==a?String(a):""));a||($r=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",$r),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function Os(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function Fs(a,b){return!1===T("embeds_transport_use_scheduler")?tl(a,b):T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?zm(function(){if("none"===Zr().currentState)a();else{var c={};Zr().install((c.none={callback:a},c))}},b):zm(a,b)}
function Is(a){T("transport_use_scheduler")?zi.pa(a):window.clearTimeout(a)}
function Ms(a){var b,c,d,e,f,g,h,k,l,n;return A(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=es(d,Dk),g=null==(f=d)?void 0:f.hotHashData,h=es(d,Ck),l=null==(k=d)?void 0:k.coldHashData,(n=Ir().resolve(new Cr($o)))?g?e?p.yield(bp(n,g,e),2):p.yield(bp(n,g),2):p.B(2):p.return()):l?h?p.yield(cp(n,l,h),0):p.yield(cp(n,l),0):p.B(0)})}
function Es(a,b){b=void 0===b?200:b;return a?300===b?qs:ns:300===b?ps:ms}
function zs(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,uq[b])return b}
function As(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Ps=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Ps);
function Qs(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=mr();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Ps[b]=b in Ps?Ps[b]+1:0,a.sequence={index:Ps[b],groupKey:b},d.endOfSequence&&delete Ps[d.sequenceGroup]);(d.sendIsolatedPayload?Bs:ws)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function pn(a,b,c){c=void 0===c?{}:c;var d=Xq;S("ytLoggingEventsDefaultDisabled",!1)&&Xq===Xq&&(d=null);T("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=mr(),c.timestamp=W());Qs(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var Rs=new Set,Ss=0,Ts=0,Us=0,Vs=[],Ws=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function on(a){Xs(a)}
function Ys(a){Xs(a,"WARNING")}
function Zs(a){a instanceof Error?Xs(a):(a=Ra(a)?JSON.stringify(a):String(a),a=new V(a),a.name="RejectedPromiseError",Ys(a))}
function Xs(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||S("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||S("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=Ss))){d=Vs;var k=uc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var r=0;r<a.args.length&&!(p=Wl(a.args[r],"params."+r,c,p),
500<=p);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if("object"===typeof a.params)for(r in t){if(t[r]){var y="params."+r,z=Yl(t[r]);c[y]=z;p+=y.length+z.length;if(500<p)break}}else c.params=Yl(t)}if(d.length)for(r=0;r<d.length&&!(p=Wl(d[r],"params.context."+r,c,p),500<=p);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=
r.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Sl();c=v(a.Ta);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.hg)){a=d.weight;break a}a=v(a.Qa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=v(Nl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.hc[r.name])for(e=v(c.hc[r.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],r.params["params.error."+e[n]]=d[n+1];r.message=c.Ic(f);break}r.params||(r.params={});a=Sl();r.params["params.errorServiceSignature"]="msg="+a.Ta.length+"&cb="+a.Qa.length;r.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));ib("sample").constructor!==gb&&(r.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(r);
if(0!==r.sampleWeight&&!Rs.has(r.message)){if(g&&T("web_enable_error_204"))$s(void 0===b?"ERROR":b,r);else{b=void 0===b?"ERROR":b;"ERROR"===b?(Tl.Ya("handleError",r),T("record_app_crashed_web")&&0===Us&&1===r.sampleWeight&&(Us++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},T("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),pn("appCrashed",g)),Ts++):"WARNING"===b&&Tl.Ya("handleWarning",r);if(T("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=v(Ws);for(c=a.next();!c.done;c=a.next())if(vn(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,sampleWeight:r.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];S("FEXP_EXPERIMENTS")&&(h.experimentIds=S("FEXP_EXPERIMENTS"));d=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Zk("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=S("SERVER_NAME");e=S("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(pn("clientError",h),("ERROR"===g||T("errors_flush_gel_always_killswitch"))&&Ds(void 0,void 0,!1))}T("suppress_error_204_logging")||$s(b,r)}try{Rs.add(r.message)}catch(x){}Ss++}}}
function $s(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}El(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function at(){this.register=new Map}
function bt(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.kg("ABORTED")}
at.prototype.clear=function(){bt(this);this.register.clear()};
var ct=new at;var dt=Date.now().toString();
function et(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(dt)for(a=1,b=0;b<dt.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^dt.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var ft,gt=C.ytLoggingDocDocumentNonce_;gt||(gt=et(),D("ytLoggingDocDocumentNonce_",gt));ft=gt;function ht(a){this.h=a}
m=ht.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new Kk;void 0!==this.h.trackingParams?a.setTrackingParams(this.h.trackingParams):(void 0!==this.h.veType&&og(a,2,Rf(this.h.veType)),void 0!==this.h.veCounter&&og(a,6,Rf(this.h.veCounter)),void 0!==this.h.elementIndex&&og(a,3,Rf(this.h.elementIndex)),this.h.isCounterfactual&&og(a,5,Of(!0)));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();wg(a,Kk,7,b)}void 0!==this.h.youtubeData&&wg(a,Ek,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function jt(a){return S("client-screen-nonce-store",{})[void 0===a?0:a]}
function kt(a,b){b=void 0===b?0:b;var c=S("client-screen-nonce-store");c||(c={},Yk("client-screen-nonce-store",c));c[b]=a}
function lt(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function mt(a){return S(lt(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",mt);function nt(){var a=S("csn-to-ctt-auth-info");a||(a={},Yk("csn-to-ctt-auth-info",a));return a}
function ot(){return Object.values(S("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function pt(a){a=jt(void 0===a?0:a);if(!a&&!S("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",pt);function qt(a,b,c){var d=nt();(c=pt(c))&&delete d[c];b&&(d[a]=b)}
function rt(a){return nt()[a]}
D("yt_logging_screen.getCttAuthInfo",rt);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==jt(c)||b!==S(lt(c)))if(qt(a,d,c),kt(a,c),Yk(lt(c),b),b=function(){setTimeout(function(){a&&pn("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ft,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function st(){var a=Tb(tt),b;return(new ge(function(c,d){a.onSuccess=function(e){sl(e)?c(new ut(e)):d(new vt("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new vt("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new vt("Request timed out","net.timeout",e))};
b=El("//googleads.g.doubleclick.net/pagead/id",a)})).oc(function(c){if(c instanceof ne){var d;
null==(d=b)||d.abort()}return le(c)})}
function vt(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(vt,bb);function ut(a){this.xhr=a}
;function wt(){this.h=0;this.i=null}
wt.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.i))&&"function"===typeof a.then?a:xt(a):2===this.h&&b?(a=b.call(c,this.i))&&"function"===typeof a.then?a:zt(a):this};
wt.prototype.getValue=function(){return this.i};
wt.prototype.isRejected=function(){return 2==this.h};
wt.prototype.$goog_Thenable=!0;function zt(a){var b=new wt;a=void 0===a?null:a;b.h=2;b.i=void 0===a?null:a;return b}
function xt(a){var b=new wt;a=void 0===a?null:a;b.h=1;b.i=void 0===a?null:a;return b}
;function At(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:nl(a)?"same-origin":"cors",credentials:nl(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Bt(){return Zg()||(Oe||Pe)&&vn("applewebkit")&&!vn("version")&&(!vn("safari")||vn("gsa/"))||cd&&vn("version/")?!0:S("EOM_VISITOR_DATA")?!1:!0}
;function Ct(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Ik)if(Ik[d]==c.embeddedPlayerMode){b=Ik[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Dt(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Et;this.isTimeout=a instanceof vt&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ne}
w(Dt,bb);Dt.prototype.name="BiscottiError";function Et(){bb.call(this,"Biscotti ID is missing from server")}
w(Et,bb);Et.prototype.name="BiscottiMissingError";var tt={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Ft=null;function Gt(){if(T("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Bt())return Error("User has not consented - not fetching biscotti id.");var a=S("PLAYER_VARS",{});if("1"==Rb(a))return Error("Biscotti ID is not available in private embed mode");if(Ct(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Rk(){var a=Gt();if(void 0!==a)return le(a);Ft||(Ft=st().then(Ht).oc(function(b){return It(2,b)}));
return Ft}
function Ht(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Et;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Et;a=a.id;Sk(a);Ft=xt(a);Jt(18E5,2);return a}
function It(a,b){b=new Dt(b);Sk("");Ft=zt(b);0<a&&Jt(12E4,a-1);throw b;}
function Jt(a,b){tl(function(){st().then(Ht,function(c){return It(b,c)}).oc(Od)},a)}
function Kt(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Rk()}catch(b){return le(b)}}
;var kc=ja(["data-"]);function Lt(a){a&&(a.dataset?a.dataset[Mt()]="true":jc(a))}
function Nt(a){return a?a.dataset?a.dataset[Mt()]:a.getAttribute("data-loaded"):null}
var Ot={};function Mt(){return Ot.loaded||(Ot.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Pt(a,b,c){H.call(this);var d=this;c=c||S("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.D=!!a;this.A=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.D&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=Eb(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.A)}
w(Pt,H);Pt.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){dl(d)}}};
Pt.prototype.S=function(){window.removeEventListener("message",this.A);H.prototype.S.call(this)};function Qt(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Tb(b);this.assets=a.assets||{};this.attrs=a.attrs||Tb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Qt.prototype.clone=function(){var a=new Qt,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Pa(c)?a[b]=Tb(c):a[b]=c}return a};var Rt=["share/get_web_player_share_panel"],St=["feedback"],Tt=["notification/modify_channel_preference"],Ut=["browse/edit_playlist"],Vt=["subscription/subscribe"],Wt=["subscription/unsubscribe"];var Xt=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",Xt);function Yt(a){Tk(Xt,arguments)}
;function Zt(a,b,c){$t(a,b,void 0===c?null:c)}
function au(a){a=bu(a);var b=document.getElementById(a);b&&(yr(a),b.parentNode.removeChild(b))}
function cu(a,b){a&&b&&(a=""+Sa(b),(a=du[a])&&wr(a))}
function $t(a,b,c){c=void 0===c?null:c;var d=bu(a),e=document.getElementById(d),f=e&&Nt(e),g=e&&!f;f?b&&b():(b&&(f=rr(d,b),b=""+Sa(b),du[b]=f),g||(e=eu(a,d,function(){Nt(e)||(Lt(e),xr(d),tl(function(){yr(d)},0))},c)))}
function eu(a,b,c,d){d=void 0===d?null:d;var e=Td("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);sc(e,Ak(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function bu(a){var b=document.createElement("a");Ab(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+yc(a)}
var du={};function fu(a){var b=gu(a),c=document.getElementById(b),d=c&&Nt(c);d||c&&!d||(c=hu(a,b,function(){if(!Nt(c)){Lt(c);xr(b);var e=Ya(yr,b);tl(e,0)}}))}
function hu(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ak(a);nc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function gu(a){var b=Td("A");Ab(b,new sb(a,tb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+yc(a)}
;function iu(a){var b=B.apply(1,arguments);if(!ju(a)||b.some(function(d){return!ju(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())ku(a,c.value)}
function ku(a,b){for(var c in b)if(ju(b[c])){if(c in a&&!ju(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});ku(a[c],b[c])}else if(lu(b[c])){if(c in a&&!lu(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);mu(a[c],b[c])}else a[c]=b[c];return a}
function mu(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,ju(c)?a.push(ku({},c)):lu(c)?a.push(mu([],c)):a.push(c);return a}
function ju(a){return"object"===typeof a&&!Array.isArray(a)}
function lu(a){return"object"===typeof a&&Array.isArray(a)}
;function nu(a){a=void 0===a?!1:a;H.call(this);this.h=new L(a);Sc(this,this.h)}
$a(nu,H);nu.prototype.subscribe=function(a,b,c){return this.Z()?0:this.h.subscribe(a,b,c)};
nu.prototype.unsubscribe=function(a,b,c){return this.Z()?!1:this.h.unsubscribe(a,b,c)};
nu.prototype.l=function(a,b){this.Z()||this.h.Ya.apply(this.h,arguments)};var ou="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function pu(a,b){var c=void 0===c?!0:c;var d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Cc(window.location.href);e&&d.push(e);e=Cc(a);if(0<=Eb(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),Ab(d,a),a=d.href)if(a=Dc(a),a=Ec(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:pt()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&qu(a,b,f)}else qu(a,b)}
function qu(a,b,c){a=ru(a);b=b?Gc(b):"";c=c||5;Bt()&&em(a,b,c)}
function ru(a){for(var b=v(ou),c=b.next();!c.done;c=b.next())a=Lc(a,c.value);return"ST-"+yc(a).toString(36)}
;function su(a){kp.call(this,1,arguments);this.csn=a}
w(su,kp);var tp=new lp("screen-created",su),tu=[],uu=0,vu=new Map,wu=new Map,xu=new Map;
function yu(a,b,c,d,e){e=void 0===e?!1:e;for(var f=zu({cttAuthInfo:rt(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(Pb(k)||!k.trackingParams&&!k.veType)&&Ys(Error("Child VE logged with no data"));if(T("no_client_ve_attach_unless_shown")){var l=Au(h,b);if(k.veType&&!wu.has(l)&&!xu.has(l)&&!e){if(!T("il_attach_cache_limit")||1E3>vu.size){vu.set(l,[a,b,c,h]);return}T("il_attach_cache_limit")&&1E3<vu.size&&Ys(new V("IL Attach cache exceeded limit"))}h=Au(c,b);vu.has(h)?
Bu(c,b):xu.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:Hb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?Cu("visualElementAttached",f,c):a?Qs("visualElementAttached",c,a,f):pn("visualElementAttached",c,f)}
function Cu(a,b,c){tu.push({Ge:a,payload:c,dg:void 0,options:b});uu||(uu=up())}
function vp(a){if(tu){for(var b=v(tu),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,pn(c.Ge,c.payload,c.options));tu.length=0}uu=0}
function Au(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Bu(a,b){a=Au(a,b);vu.has(a)&&(b=vu.get(a)||[],yu(b[0],b[1],b[2],[b[3]],!0),vu.delete(a))}
function zu(a,b){T("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Du(){try{return!!self.localStorage}catch(a){return!1}}
;function Eu(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Fu(a){if(Du()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Eu(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Gu(){if(!Du())return!1;var a=xm(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=Eu(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Hu(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return T("copy_login_info_to_st_cookie")&&("WEB"===S("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===S("INNERTUBE_CLIENT_NAME"))&&a}
function Iu(a){if(S("LOGGED_IN",!0)&&Hu()){var b=S("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=Cc(window.location.href);c&&b.push(c);c=Cc(a);0<=Eb(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=Dc(a),(b=Ec(b))?(b=ru(b),b=(b=fm(b)||null)?kl(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;Hu()?(d||(d=S("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&pu(a,b)}}
;function Ju(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=S("EVENT_ID");d&&(b.ei||(b.ei=d));b&&pu(a,b);if(c)return!1;Iu(a);var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=Hc(a,e);Iu(a);f=a+f;var h=void 0===h?xb:h;a:if(h=void 0===h?xb:h,f instanceof sb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof vb&&b.ue(f)){h=new sb(f,tb);break a}h=void 0}g=g.location;h=zb(h||ub);void 0!==h&&(g.href=h);return!0}
;function Ku(a){if("1"!=Rb(S("PLAYER_VARS",{}))){a&&Qk();try{Kt().then(function(){},function(){}),tl(Ku,18E5)}catch(b){cl(b)}}}
;var Lu=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Mu(){var a=void 0===a?window.location.href:a;if(T("kevlar_disable_theme_param"))return null;Ac(Bc(5,a));try{var b=ll(a).theme;return Lu.get(b)||null}catch(c){}return null}
;function Nu(){this.h={};if(this.i=hm()){var a=fm("CONSISTENCY");a&&Ou(this,{encryptedTokenJarContents:a})}}
Nu.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Ma.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Ou(this,a)}};
function Ou(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&em("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Pu=window.location.hostname.split(".").slice(-2).join(".");function Qu(){var a=S("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===S("INNERTUBE_CLIENT_NAME")&&(this.h=Ru(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Su;function Tu(){Su=E("yt.clientLocationService.instance");Su||(Su=new Qu,D("yt.clientLocationService.instance",Su));return Su}
m=Qu.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===S("INNERTUBE_CLIENT_NAME")?(this.h=Ru(this))&&this.h.set("yt-location-playability-token",a,15552E3):em("YT_CL",JSON.stringify({loctok:a}),15552E3,Pu,!0))};
function Ru(a){return void 0===a.h?new fn("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Ru(this))&&this.h.remove("yt-location-playability-token"):gm("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===S("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
m.createLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);return b};function Uu(a){var b={"Content-Type":"application/json"};S("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=S("EOM_VISITOR_DATA"):S("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=S("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=S("LOGGED_IN",!1);S("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=S("DEBUG_SETTINGS_METADATA"));"cors"!==a&&((a=S("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=S("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=S("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=S("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;function Vu(a){return function(){return new a}}
;var Wu={},Xu=(Wu.WEB_UNPLUGGED="^unplugged/",Wu.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Wu.WEB_UNPLUGGED_OPS="^unplugged/",Wu.WEB_UNPLUGGED_PUBLIC="^unplugged/",Wu.WEB_CREATOR="^creator/",Wu.WEB_KIDS="^kids/",Wu.WEB_EXPERIMENTS="^experiments/",Wu.WEB_MUSIC="^music/",Wu.WEB_REMIX="^music/",Wu.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Wu.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Wu);
function Yu(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Xu[b];if(c){c=new RegExp(c);for(var d=v(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(Xu).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=v(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function Zu(){}
Zu.prototype.v=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?bm:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=S("INNERTUBE_CONTEXT");if(g){g=Ub(g);T("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&"AUTOMOTIVE_FORM_FACTOR"!==h.clientFormFactor&&(h.clientFormFactor=S("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;lm();var l="USER_INTERFACE_THEME_LIGHT";om(165)?l="USER_INTERFACE_THEME_DARK":om(174)?l="USER_INTERFACE_THEME_LIGHT":!T("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:Mu()||l;h.userInterfaceTheme=k;if(!f){if(k=tm())h.connectionType=k;T("web_log_effective_connection_type")&&(k=um())&&(g.client.effectiveConnectionType=k)}var n;if(T("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var p;n=null==(p=C.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}T("web_gcf_hashes_innertube")&&(k=dp())&&(p=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},g.client.configInfo.coldConfigData=
p,g.client.configInfo.coldHashData=n,g.client.configInfo.hotHashData=k);p=ll(C.location.href);!T("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},T("kevlar_woffle")&&cm.h&&(p=cm.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=dm(),h.mainAppWebInfo.isWebNativeShareAvailable=
navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!T("web_lr_app_quality_killswitch")&&(p=S("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=S("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));if(!T("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var r=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(ea){}r=void 0}r&&(h.timeZone=r)}(r=S("EXPERIMENTS_TOKEN",
""))?h.experimentsToken=r:delete h.experimentsToken;r=wl();Nu.h||(Nu.h=new Nu);h=Nu.h.h;p=[];n=0;for(var t in h)p[n++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:r,consistencyTokenJars:p});!T("web_prequest_context_killswitch")&&(t=S("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);r=lm();t=om(58);r=r.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);r&&(g.user.lockedSafetyMode=!0);T("warm_op_csn_cleanup")?e&&(f=pt())&&
(g.clientScreenNonce=f):!f&&(f=pt())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Tu().setLocationOnInnerTubeContext(g);try{var y=ol(),z=y.bid;delete y.bid;g.adSignalsInfo={params:[],bid:z};var x=v(Object.entries(y));for(var J=x.next();!J.done;J=x.next()){var G=v(J.value),R=G.next().value,N=G.next().value;y=R;z=N;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:y,value:""+z})}var da;if(T("add_ifa_to_tvh5_requests")&&
"TVHTML5"===(null==(da=g.client)?void 0:da.clientName)){var Ca=S("INNERTUBE_CONTEXT");Ca.adSignalsInfo&&(g.adSignalsInfo.advertisingId=Ca.adSignalsInfo.advertisingId,g.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",g.adSignalsInfo.limitAdTracking=Ca.adSignalsInfo.limitAdTracking)}}catch(ea){Xs(ea)}x=g}else Xs(Error("Error: No InnerTubeContext shell provided in ytconfig.")),x={};x={context:x};if(J=this.i(a)){this.h(x,J,b);var O;b="/youtubei/v1/"+Yu(this.j());(J=null==(O=es(a.commandMetadata,
Gk))?void 0:O.apiUrl)&&(b=J);O=b;(b=S("INNERTUBE_HOST_OVERRIDE"))&&(O=String(b)+String(Dc(O)));b={};T("web_api_key_killswitch")&&(b.key=S("INNERTUBE_API_KEY"));T("json_condensed_response")&&(b.prettyPrint="false");O=ml(O,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:O,ib:At(O),Ma:x,config:a};a.config.Tb?a.config.Tb.identity=c:a.config.Tb={identity:c};return a}Xs(new V("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(Zu.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function $u(){}
w($u,Zu);function av(){}
w(av,$u);av.prototype.v=function(){return{input:"/getDatasyncIdsEndpoint",ib:At("/getDatasyncIdsEndpoint","GET"),Ma:{}}};
av.prototype.j=function(){return[]};
av.prototype.i=function(){};
av.prototype.h=function(){};var bv={},cv=(bv.GET_DATASYNC_IDS=Vu(av),bv);function dv(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function ev(){var a=dv();a.info||(a.info={});return a.info}
function fv(a){a=dv(a);a.metadata||(a.metadata={});return a.metadata}
function gv(a){a=dv(a);a.tick||(a.tick={});return a.tick}
function hv(a){a=dv(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function iv(a){a=hv(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function jv(a){var b=dv(a).nonce;b||(b=et(),dv(a).nonce=b);return b}
;function kv(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function lv(a){a=a||"";var b=E("ytcsi.reference");b||(kv(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=kv(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var X={},mv=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
X["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",X["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",X["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",X["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",X["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",X["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",X["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",X["asset.metadata"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",X["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",X["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",X["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",X["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",X["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",X["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",X["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
X["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",X["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",X["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",X["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",
X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.onboarding="LATENCY_ACTION_ONBOARDING",X.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",X["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",X["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",X["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",X["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",X["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",X["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",X["owner.campaigns"]=
"LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",X["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",X["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",X["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",X["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",X["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",
X["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",X["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",X["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",X["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",X["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",X["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",X["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",
X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",
X.results="LATENCY_ACTION_RESULTS",X["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",
X.store="LATENCY_ACTION_STORE",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",
X["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",
X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",X["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",
X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X);function nv(a,b){kp.call(this,1,arguments);this.timer=b}
w(nv,kp);var ov=new lp("aft-recorded",nv);var pv=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",pv);function qv(){this.h=0}
function rv(){qv.h||(qv.h=new qv);return qv.h}
qv.prototype.tick=function(a,b,c,d){sv(this,"tick_"+a+"_"+b)||pn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
qv.prototype.info=function(a,b,c){var d=Object.keys(a).join("");sv(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,pn("latencyActionInfo",a,{cttAuthInfo:c}))};
qv.prototype.jspbInfo=function(){};
qv.prototype.span=function(a,b,c){var d=Object.keys(a).join("");sv(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,pn("latencyActionSpan",a,{cttAuthInfo:c}))};
function sv(a,b){pv[b]=pv[b]||{count:0};var c=pv[b];c.count++;c.time=W();a.h||(a.h=zm(function(){var d=W(),e;for(e in pv)pv[e]&&6E4<d-pv[e].time&&delete pv[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new V("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Ys(c)),!0):!1}
;var tv=window;function uv(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function vv(){var a;if(T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Y?void 0:null==(a=Y.getEntriesByType)?void 0:null==(b=a.call(Y,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=wv(e.requestStart),e.responseEnd=wv(e.responseEnd),e.redirectStart=wv(e.redirectStart),e.redirectEnd=wv(e.redirectEnd),e.domainLookupEnd=wv(e.domainLookupEnd),e.connectStart=wv(e.connectStart),e.connectEnd=
wv(e.connectEnd),e.responseStart=wv(e.responseStart),e.secureConnectionStart=wv(e.secureConnectionStart),e.domainLookupStart=wv(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=Y.timing;return a}
function wv(a){return Math.round(xv()+a)}
function xv(){return(T("csi_use_time_origin")||T("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=tv.performance||tv.mozPerformance||tv.msPerformance||tv.webkitPerformance||new uv;var yv=!1,zv=!1,Av={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Xa(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||Od,Y);function Bv(a,b){if(!T("web_csi_action_sampling_enabled")||!dv(b).actionDisabled){var c=lv(b||"");iu(c.info,a);a.loadType&&(c=a.loadType,fv(b).loadType=c);iu(iv(b),a);c=jv(b);b=dv(b).cttAuthInfo;rv().info(a,c,b)}}
function Cv(){var a,b,c,d;return(null!=(d=null==Ir().resolve(new Cr($o))?void 0:null==(a=ap())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!T("web_csi_action_sampling_enabled")||!dv(c).actionDisabled){var d=jv(c),e;if(e=T("web_csi_debug_sample_enabled")&&d){(null==Ir().resolve(new Cr($o))?0:ap())&&!zv&&(zv=!0,Z("gcfl",W(),c));var f,g,h;e=(null==Ir().resolve(new Cr($o))?void 0:null==(f=ap())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=Cv();if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=31*f+d.charCodeAt(g),
g<d.length-1&&(f%=Math.pow(2,47));e=0!==f%1E5%e;dv(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Bv(f,c));dv(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,Y.mark&&(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),Y.mark(e)));e=lv(c||"");e.tick[a]=b||W();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=hv(c);e.gelTicks&&(e.gelTicks[a]=!0);f=gv(c);e=b||W();T("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;
f=dv(c).cttAuthInfo;"_start"===a?(a=rv(),sv(a,"baseline_"+d)||pn("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):rv().tick(a,d,b,f);Dv(c);return e}}}
function Ev(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Zq+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Fv(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;"number"===typeof h&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=v(Object.entries(S("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=v(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Gv(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);oc(window)&&a.setAttribute("nonce",oc(window));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=xv(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Hv(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Gb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=Ib(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",wv(b.startTime)),Z("wffe",wv(b.responseEnd)))}
function Iv(a){var b=Jv("aft",a);if(b)return b;b=S((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Jv(b[d],a);if(e)return e}return NaN}
function Jv(a,b){if(a=gv(b)[a])return"number"===typeof a?a:a[a.length-1]}
function Dv(a){var b=Jv("_start",a),c=Iv(a);b&&c&&!yv&&(qp(ov,new nv(Math.round(c-b),a)),yv=!0)}
function Kv(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Jb(a,function(b){return"first-paint"===b.name}))return wv(a.startTime)}a=Y.timing;
return a.Ce?Math.max(0,a.Ce):0}
;function Lv(a,b){bl(function(){lv("").info.actionType=a;b&&Yk("TIMING_AFT_KEYS",b);Yk("TIMING_ACTION",a);var c=Fv();0<Object.keys(c).length&&Bv(c);c={isNavigation:!0,actionType:mv[S("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=S("PREVIOUS_ACTION");d&&(c.previousAction=mv[d]||"LATENCY_ACTION_UNKNOWN");if(d=S("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=S("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=pt())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=Ev();if(1===d||-1===d)c.isVisible=!0;fv();ev();
c.loadType="cold";d=ev();var e=vv(),f=xv(),g=S("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!T("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),1!==d.prerender&&Z("_start",f,void 0));d=Kv();0<d&&Z("fpt",d);d=vv();d.isPerformanceNavigationTiming&&Bv({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=xv()&&0<d.connectEnd-d.secureConnectionStart&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&Hv();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in Av)Av.hasOwnProperty(h)&&(e=Av[h],
Gv(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Bv(c);c=hv();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=iv();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if("cold"===fv().loadType&&("cold"===c.loadType||"cold"===d)){d=gv();e=hv();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])Z(k,Jv(k));else if(T("log_repeated_ytcsi_ticks"))for(f=
v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=v(h);for(e=h.next();!e.done;e=h.next())d=e.value,iu(c,d),iu(k,d),d=!0;d&&Bv(k)}D("ytglobal.timingready_",!0);k=S("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Mv()&&Iv()&&Dv()})()}
function Nv(a,b,c){bl(Bv)(a,b,void 0===c?!1:c)}
function Ov(a,b,c){return bl(Z)(a,b,c)}
function Mv(){return bl(function(){return"_start"in gv()})()}
function Pv(){bl(function(){var a=jv();requestAnimationFrame(function(){setTimeout(function(){a===jv()&&Ov("ol",void 0,void 0)},0)})})()}
var Qv=window;Qv.ytcsi&&(Qv.ytcsi.infoGel=Nv,Qv.ytcsi.tick=Ov);var Rv="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),Sv=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function Tv(a,b,c,d){this.v=a;this.aa=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Ob||(a.Ob={});a.Ob=Object.assign({},cv,a.Ob)}
function Uv(a,b,c,d){if(void 0!==Tv.h){if(d=Tv.h,a=[a!==d.v,b!==d.aa,c!==d.l,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new V("InnerTubeTransportService is already initialized",a);
}else Tv.h=new Tv(a,b,c,d)}
function Vv(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?bm:c;var d=Wv(a,b);return d?new ge(function(e,f){var g,h,k,l,n;return A(function(p){switch(p.h){case 1:return p.yield(d,2);case 2:g=p.i;h=g.v(b,void 0,c);if(!h){f(new V("Error: Failed to build request for command.",b));p.B(0);break}Iu(h.input);l="cors"===(null==(k=h.ib)?void 0:k.mode)?"cors":void 0;if(a.l.ff){var r=h.config,t;r=null==r?void 0:null==(t=r.Tb)?void 0:t.sessionIndex;t=am(0,{sessionIndex:r});n=Object.assign({},
Uu(l),t);p.B(4);break}return p.yield(Xv(h.config,l),5);case 5:n=p.i;case 4:e(Yv(a,h,n)),p.h=0}})}):le(new V("Error: No request builder found for command.",b))}
function Zv(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.sequenceMetaData)?0:d.skipProcessing)&&a.j){d=v(Rv);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Yv(a,b,c){var d=void 0===d?function(){}:d;
var e,f,g,h,k,l,n,p,r,t,y,z,x,J,G,R,N,da,Ca,O,ea,ka,pa,Ga,Sg,Tg,sr,tr,ur;return A(function(ha){switch(ha.h){case 1:ha.B(2);break;case 3:if((e=ha.i)&&!e.isExpired())return ha.return(Promise.resolve(e.h()));case 2:if(!(null==(f=b)?0:null==(g=f.Ma)?0:g.context)){ha.B(4);break}h=b.Ma.context;ha.B(5);break;case 5:k=v([]),l=k.next();case 7:if(l.done){ha.B(4);break}n=l.value;return ha.yield(n.jg(h),8);case 8:l=k.next();ha.B(7);break;case 4:if(null==(p=a.i)||!p.ng(b.input,b.Ma)){ha.B(11);break}return ha.yield(a.i.fg(b.input,
b.Ma),12);case 12:return r=ha.i,T("kevlar_process_local_innertube_responses_killswitch")||Zv(a,r,b),ha.return(r);case 11:return(z=null==(y=b.config)?void 0:y.lg)&&a.h.has(z)?t=a.h.get(z):(x=JSON.stringify(b.Ma),R=null!=(G=null==(J=b.ib)?void 0:J.headers)?G:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},R,c)}),N=Object.assign({},b.ib),"POST"===b.ib.method&&(N=Object.assign({},N,{body:x})),(null==(da=b.config)?0:da.Me)&&Ov(b.config.Me),Ca=function(){return a.aa.fetch(b.input,N,b.config)},t=
Ca(),z&&a.h.set(z,t)),ha.yield(t,13);
case 13:if((O=ha.i)&&"error"in O&&(null==(ea=O)?0:null==(ka=ea.error)?0:ka.details))for(pa=O.error.details,Ga=v(pa),Sg=Ga.next();!Sg.done;Sg=Ga.next())Tg=Sg.value,(sr=Tg["@type"])&&-1<Sv.indexOf(sr)&&(delete Tg["@type"],O=Tg);z&&a.h.has(z)&&a.h.delete(z);(null==(tr=b.config)?0:tr.Ne)&&Ov(b.config.Ne);if(O||null==(ur=a.i)||!ur.Xf(b.input,b.Ma)){ha.B(14);break}return ha.yield(a.i.eg(b.input,b.Ma),15);case 15:O=ha.i;case 14:return Zv(a,O,b),d(),ha.return(O||void 0)}})}
function Wv(a,b){a:{a=a.v;var c,d=null==(c=es(b,Hk))?void 0:c.signal;if(d&&a.Ob&&(c=a.Ob[d])){var e=c();break a}var f;if((c=null==(f=es(b,Fk))?void 0:f.request)&&a.Wd&&(f=a.Wd[c])){e=f();break a}for(e in b)if(a.cd[e]&&(b=a.cd[e])){e=b();break a}e=void 0}if(void 0!==e)return Promise.resolve(e)}
function Xv(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Tb)?void 0:d.sessionIndex;var h=g.yield;var k=am(0,{sessionIndex:e});if(!(k instanceof ge)){var l=new ge(Od);he(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Uu(b),f)))})}
;var $v=new Br("INNERTUBE_TRANSPORT_TOKEN");function aw(){}
w(aw,$u);aw.prototype.j=function(){return Vt};
aw.prototype.i=function(a){return es(a,Pk)||void 0};
aw.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(aw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function bw(){}
w(bw,$u);bw.prototype.j=function(){return Wt};
bw.prototype.i=function(a){return es(a,Ok)||void 0};
bw.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(bw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function cw(){}
w(cw,$u);cw.prototype.j=function(){return St};
cw.prototype.i=function(a){return es(a,Jk)||void 0};
cw.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(cw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function dw(){}
w(dw,$u);dw.prototype.j=function(){return Tt};
dw.prototype.i=function(a){return es(a,Nk)||void 0};
dw.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function ew(){}
w(ew,$u);ew.prototype.j=function(){return Ut};
ew.prototype.i=function(a){return es(a,Mk)||void 0};
ew.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function fw(){}
w(fw,$u);fw.prototype.j=function(){return Rt};
fw.prototype.i=function(a){return es(a,Lk)};
fw.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};function gw(a,b){var c=B.apply(2,arguments);a=void 0===a?0:a;V.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
w(gw,V);var hw=new Br("NETWORK_SLI_TOKEN");function iw(a){this.h=a}
iw.prototype.fetch=function(a,b,c){var d=this,e;return A(function(f){e=jw(d,a,b);return f.return(fetch(e).then(function(g){return d.handleResponse(g,c)}).catch(function(g){Ys(g);
if((null==c?0:c.ce)&&g instanceof gw&&1===g.errorType)return Promise.reject(g)}))})};
function jw(a,b,c){if(a.h){var d=Ac(Bc(5,Lc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;T("wug_networking_gzip_request")&&(a=Sp(c));return new window.Request(b,a)}
iw.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){if((null==b?0:b.we)&&a.ok)return Fg(b.we,d);d=d.replace(")]}'","");if((null==b?0:b.ce)&&d)try{var e=JSON.parse(d)}catch(g){throw new gw(1,"JSON parsing failed after fetch");}var f;return null!=(f=e)?f:JSON.parse(d)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.ag(),c=c.then(function(d){Ys(new V("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
iw[Ar]=[new Cr(hw)];var kw=new Br("NETWORK_MANAGER_TOKEN");var lw;function mw(){var a,b,c;return A(function(d){if(1==d.h)return a=Ir().resolve($v),a?d.yield(Vv(a),2):(Ys(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Ys(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Yf;return d.return(c)}Ys(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var nw=C.caches,ow;function pw(a){var b=a.indexOf(":");return-1===b?{sd:a}:{sd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function qw(){return A(function(a){if(void 0!==ow)return a.return(ow);ow=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return Aa(d,2),d.yield(nw.open("test-only"),4);case 4:return d.yield(nw.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(ow)})}
function rw(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(qw(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(nw.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=pw(f),h=g.datasyncId,!h||a.includes(h)||b.push(nw.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function sw(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(qw(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=xm("cache contains other");return h.yield(nw.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=pw(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function tw(){mw().then(function(a){a&&(Fo(a),rw(a),Fu(a))})}
function uw(){var a=new Kq;zi.oa(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(T("ytidb_clear_optimizations_killswitch")){f.B(2);break}b=xm("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];Fo(g);rw(g);Fu(g);return f.return()}c=Gu();return f.yield(sw(),3);case 3:return d=f.i,f.yield(Go(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.wa()?tw():a.h.add("publicytnetworkstatus-online",tw,!0,void 0,void 0),f.h=0}})})}
;function vw(){this.state=1;this.h=null}
m=vw.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(f=(d=fb())?d.createScript(f):f,d=new pc,d.ud=f,f=d):f=null,d=f):d=null}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=zk(a.interpreterSafeUrl).toString());ww(this,d,e,a.program,b,c)}else Ys(Error("Cannot initialize botguard without program"))};
function ww(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Zt(c,function(){window[g]?xw(a,d,g,e):(a.state=3,au(c),Ys(new V("Unable to load Botguard","from "+c)))},f)):b?(f=Td("SCRIPT"),b instanceof pc?rc(f,b):f.textContent=b,f.nonce=oc(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?xw(a,d,g,e):(a.state=4,Ys(new V("Unable to load Botguard from JS")))):Ys(new V("Unable to load VM; no url or JS provided"))}
m.isLoading=function(){return 2===this.state};
function xw(a,b,c,d){a.state=5;try{var e=new li({program:b,le:c,Ke:T("att_web_record_metrics"),Be:"aGIf"});e.bf.then(function(){a.state=6;d&&d(b)});
a.Qc(e)}catch(f){a.state=7,f instanceof Error&&Ys(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Tc()?this.Kd({dd:a}):null};
m.dispose=function(){this.Qc(null);this.state=8};
m.Tc=function(){return!!this.h};
m.Kd=function(a){return this.h.Ed(a)};
m.Qc=function(a){Qc(this.h);this.h=a};var yw=[],zw=!1;function Aw(){if(!T("disable_biscotti_fetch_for_ad_blocker_detection")&&!T("disable_biscotti_fetch_entirely_for_all_web_clients")&&Bt()){var a=S("PLAYER_VARS",{});if("1"!=Rb(a)&&!Ct(a)){var b=function(){zw=!0;"google_ad_status"in window?Yk("DCLKSTAT",1):Yk("DCLKSTAT",2)};
try{Zt("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}yw.push(zi.oa(function(){if(!(zw||"google_ad_status"in window)){try{cu("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}zw=!0;Yk("DCLKSTAT",3)}},5E3))}}}
function Bw(){var a=Number(S("DCLKSTAT",0));return isNaN(a)?0:a}
;function Cw(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Dw(){vw.apply(this,arguments)}
w(Dw,vw);Dw.prototype.Qc=function(a){var b;null==(b=Cw())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Ed.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Dw.prototype.Tc=function(){return!!Cw()};
Dw.prototype.Kd=function(a){return Cw().bgvmc(a)};function Ew(a){Rr.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.D},{from:"document_active",to:"document_disposed",action:this.v},{from:"document_disposed_preventable",to:"document_disposed",action:this.v},{from:"document_disposed_preventable",to:"flush_logs",action:this.m},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.m},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(Ew,Rr);Ew.prototype.D=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Ew.prototype.v=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Ew.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Ew.prototype.i=function(){this.h=new Map};function Fw(a){Rr.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.v},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.m},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.m},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.v},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.v},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
T("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(Fw,Rr);Fw.prototype.i=function(a,b){a(null==b?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Fw.prototype.h=function(a,b){a(null==b?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Fw.prototype.v=function(a,b){a(null==b?void 0:b.event)};
Fw.prototype.m=function(a,b){a(null==b?void 0:b.event)};function Gw(){this.l=new Ew;this.v=new Fw}
Gw.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.v.install(c)})};function Hw(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
Hw.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=pt(void 0===c?0:c)){a=this.client;d=new ht({trackingParams:d});var e=void 0;if(T("no_client_ve_attach_unless_shown")){var f=Au(d,c);wu.set(f,!0);Bu(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=zu({cttAuthInfo:rt(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?Cu("visualElementGestured",f,d):a?Qs("visualElementGestured",d,a,f):pn("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Hw.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new ht({trackingParams:a}),b,void 0===c?0:c)};
Hw.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=pt(d);a||(a=(a=mt(void 0===d?0:d))?new ht({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=zu({cttAuthInfo:rt(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?Cu("visualElementStateChanged",d,b):a?Qs("visualElementStateChanged",b,a,d):pn("visualElementStateChanged",b,d))}};
function Iw(a,b){if(void 0===b)for(var c=ot(),d=0;d<c.length;d++)void 0!==c[d]&&Iw(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&yu(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Jw(){Gw.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));T("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
w(Jw,Gw);Jw.prototype.j=function(){pn("finalPayload",{csn:pt()})};
Jw.prototype.h=function(){bt(ct)};
Jw.prototype.i=function(){var a=Iw;Hw.h||(Hw.h=new Hw);a(Hw.h)};function Kw(){}
function Lw(){var a=E("ytglobal.storage_");a||(a=new Kw,D("ytglobal.storage_",a));return a}
Kw.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Mw()):d.return()})};
function Mw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Kw);function nn(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=U("ytidb_transaction_ended_event_rate_limit_session",.2)}
nn.prototype.Jb=function(a){this.handleError(a)};
nn.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":T("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":T("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Nw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=U("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Nw(a,b){Lw().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Ow(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Ow(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Ow(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Pw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Pt(!!S("WIDGET_ID_ENFORCE")),b=this.Je.bind(this);a.l=b;a.m=null;this.h.channel="widget";if(a=S("WIDGET_ID"))this.h.sessionId=a}
m=Pw.prototype;m.Je=function(a,b,c){"addEventListener"===a&&b?this.Dc(b[0],c):this.Wc(a,b,c)};
m.Wc=function(){};
m.xc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Dc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.xc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.ge=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Ac());this.sendMessage("onReady");Fb(this.i,this.Bd,this);this.i=[]};
m.Ac=function(){return null};
function Qw(a,b){a.sendMessage("infoDelivery",b)}
m.Bd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Bd({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var Rw={},Sw=(Rw["api.invalidparam"]=2,Rw.auth=150,Rw["drm.auth"]=150,Rw["heartbeat.net"]=150,Rw["heartbeat.servererror"]=150,Rw["heartbeat.stop"]=150,Rw["html5.unsupportedads"]=5,Rw["fmt.noneavailable"]=5,Rw["fmt.decode"]=5,Rw["fmt.unplayable"]=5,Rw["html5.missingapi"]=5,Rw["html5.unsupportedlive"]=5,Rw["drm.unavailable"]=5,Rw["mrm.blocked"]=151,Rw);var Tw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Uw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Vw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(Tw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Ww(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Xw(a){Pw.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.We.bind(this));this.addEventListener("onVolumeChange",this.Xe.bind(this));this.addEventListener("onApiChange",this.Re.bind(this));this.addEventListener("onPlaybackQualityChange",this.Te.bind(this));this.addEventListener("onPlaybackRateChange",this.Ue.bind(this));this.addEventListener("onStateChange",this.Ve.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Ye.bind(this))}
w(Xw,Pw);m=Xw.prototype;
m.Wc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Uw(a)){var d=b;if(Ra(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Vw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Vw(e);break;case "loadPlaylist":case "cuePlaylist":e=Ww(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Uw(a)&&Qw(this,this.Ac())}};
m.Dc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Pw.prototype.Dc.call(this,a,b)};
m.xc=function(a,b){var c=this,d=Pw.prototype.xc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.h,b=this.ge.bind(this);a.h=b;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var c=void 0===c?5:c;this.errorCode=a?Sw[a]||c:c;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Ac=function(){if(!this.api)return null;var a=this.api.getApiInterface();Kb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Ve=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Qw(this,a)};
m.Te=function(a){Qw(this,{playbackQuality:a})};
m.Ue=function(a){Qw(this,{playbackRate:a})};
m.Re=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Xe=function(){Qw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.We=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Qw(this,a)};
m.Ye=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Qw(this,a)};
m.dispose=function(){Pw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Yw(a){H.call(this);this.h={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.wd,this)}
w(Yw,H);m=Yw.prototype;m.start=function(){this.started||this.Z()||(this.started=!0,this.connection.jb("RECEIVING"))};
m.jb=function(a,b){this.started&&!this.Z()&&this.connection.jb(a,b)};
m.wd=function(a,b,c){if(this.started&&!this.Z()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Zw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=$w(a,c))&&this.jb(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Se.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Se=function(a,b){this.started&&!this.Z()&&this.connection.jb(a,this.zc(a,b))};
m.zc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.S=function(){this.connection.unsubscribe("command",this.wd,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);H.prototype.S.call(this)};function ax(a,b){Yw.call(this,b);this.api=a;this.start()}
w(ax,Yw);ax.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
ax.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Zw(a,b){switch(a){case "loadVideoById":return a=Vw(b),[a];case "cueVideoById":return a=Vw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Ww(b),[a];case "cuePlaylist":return a=Ww(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function $w(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
ax.prototype.zc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Yw.prototype.zc.call(this,a,b)};
ax.prototype.S=function(){Yw.prototype.S.call(this);delete this.api};function bx(a,b,c){nu.call(this);this.j=a;this.i=b;this.id=c}
w(bx,nu);bx.prototype.jb=function(a,b){this.Z()||this.j.jb(this.i,this.id,a,b)};
bx.prototype.S=function(){this.i=this.j=null;nu.prototype.S.call(this)};function cx(a,b,c){H.call(this);this.h=a;this.origin=c;this.i=er(window,"message",this.j.bind(this));this.connection=new bx(this,a,b);Sc(this,this.connection)}
w(cx,H);cx.prototype.jb=function(a,b,c,d){this.Z()||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
cx.prototype.j=function(a){if(!this.Z()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.Z()||c.l("command",b.command,b.data,a.origin)}}}};
cx.prototype.S=function(){gr(this.i);this.h=null;H.prototype.S.call(this)};var dx=new Dw;function ex(){return dx.Tc()}
function fx(a){a=void 0===a?{}:a;return dx.invoke(a)}
;function gx(a,b,c,d,e){H.call(this);var f=this;this.A=b;this.webPlayerContextConfig=d;this.qc=e;this.Pa=!1;this.api={};this.ga=this.m=null;this.W=new L;this.h={};this.ba=this.ta=this.elementId=this.Za=this.config=null;this.Y=!1;this.j=this.D=null;this.Ea={};this.sc=["onReady"];this.lastError=null;this.Qb=NaN;this.R={};this.ea=0;this.i=this.l=a;Sc(this,this.W);hx(this);c?this.ea=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(ix(this),jx(this))}
w(gx,H);m=gx.prototype;m.getId=function(){return this.A};
m.loadNewVideoConfig=function(a){if(!this.Z()){this.ea&&(clearTimeout(this.ea),this.ea=0);var b=a||{};b instanceof Qt||(b=new Qt(b));this.config=b;this.setConfig(a);jx(this);this.isReady()&&kx(this)}};
function ix(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Za=a;this.config=lx(a);ix(this);if(!this.ta){var b;this.ta=mx(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=ti(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=ti(Number(a)||a))};
function kx(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function nx(a){var b=!0,c=ox(a);c&&a.config&&(b=c.dataset.version===px(a));return b&&!!E("yt.player.Application.create")}
function jx(a){if(!a.Z()&&!a.Y){var b=nx(a);if(b&&"html5"===(ox(a)?"html5":null))a.ba="html5",a.isReady()||qx(a);else if(rx(a),a.ba="html5",b&&a.j&&a.l)a.l.appendChild(a.j),qx(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.D=function(){c=!0;var d=sx(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?lx(a.config):void 0;d&&d(a.l,e,a.webPlayerContextConfig,a.qc);qx(a)};
a.Y=!0;b?a.D():(Zt(px(a),a.D),(b=tx(a))&&fu(b||""),ux(a)&&!c&&D("yt.player.Application.create",null))}}}
function ox(a){var b=Sd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function qx(a){if(!a.Z()){var b=ox(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!sx(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}vx(a)}else a.Qb=setTimeout(function(){qx(a)},50)}}
function vx(a){hx(a);a.Pa=!0;var b=ox(a);if(b){a.m=wx(a,b,"addEventListener");a.ga=wx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=wx(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.m&&a.m(g,a.h[g]);kx(a);a.ta&&a.ta(a.api);a.W.Ya("onReady",a.api)}
function wx(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if("sendAbandonmentPing"!==c)throw f.params=c,a.lastError=f,e=new V("PlayerProxy error in method call",{error:f,method:c,playerId:a.A}),e.level="WARNING",e;}}}
function hx(a){a.Pa=!1;if(a.ga)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ga(b,a.h[b]);for(var c in a.R)a.R.hasOwnProperty(c)&&clearTimeout(Number(c));a.R={};a.m=null;a.ga=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Za};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Pa};
m.addEventListener=function(a,b){var c=this,d=mx(this,b);d&&(0<=Eb(this.sc,a)||this.h[a]||(b=xx(this,a),this.m&&this.m(a,b)),this.W.subscribe(a,d),"onReady"===a&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.Z()||(b=mx(this,b))&&this.W.unsubscribe(a,b)};
function mx(a,b){var c=b;if("string"===typeof b){if(a.Ea[b])return a.Ea[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new V("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Ea[b]=c}return c?c:null}
function xx(a,b){function c(d){var e=setTimeout(function(){if(!a.Z()){try{a.W.Ya(b,null!=d?d:void 0)}catch(h){var f=new V("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.A,data:d,originalStack:h.stack});f.level="WARNING";throw f;}f=a.R;var g=String(e);g in f&&delete f[g]}},0);
Qb(a.R,String(e))}
return a.h[b]=c}
m.getPlayerType=function(){return this.ba||(ox(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function rx(a){a.cancel();hx(a);a.ba=null;a.config&&(a.config.loaded=!1);var b=ox(a);b&&(nx(a)||!ux(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.l)for(a=a.l;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.D&&cu(px(this),this.D);clearTimeout(this.Qb);this.Y=!1};
m.S=function(){rx(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new V("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Ea=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Za=this.config=this.api=null;delete this.l;delete this.i;H.prototype.S.call(this)};
function ux(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function px(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function tx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function sx(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function lx(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?Tb(e):e}return b}
;var yx={},zx="player_uid_"+(1E9*Math.random()>>>0);function Ax(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Sd(c):c;var e=zx+"_"+Sa(c),f=yx[e];if(f&&d)return Bx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new gx(c,e,a,b,void 0);yx[e]=f;f.addOnDisposeCallback(function(){delete yx[f.getId()]});
return f.api}
function Bx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Cx=null,Dx=null,Ex=null;
function Fx(){Pv();var a=lm(),b=om(119),c=1<window.devicePixelRatio;if(document.body&&Ji(document.body,"exp-invert-logo"))if(c&&!Ji(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Ji(d,"inverted-hdpi")){var e=Hi(d);Ii(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Ji(document.body,"inverted-hdpi")&&Ki();if(b!=c){b="f"+(Math.floor(119/31)+1);d=pm(b)||0;d=c?d|67108864:d&-67108865;0===d?delete im[b]:(c=d.toString(16),im[b]=c.toString());
c=!0;T("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in im)im.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(im[f])));var f=d.join("&");em(b,f,63072E3,a.i,c)}}
function Gx(){Hx()}
function Ix(){Ov("ep_init_pr");Hx()}
function Hx(){var a=Cx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Jx(){Cx&&Cx.sendAbandonmentPing&&Cx.sendAbandonmentPing();S("PL_ATT")&&dx.dispose();for(var a=zi,b=0,c=yw.length;b<c;b++)a.pa(yw[b]);yw.length=0;au("//static.doubleclick.net/instream/ad_status.js");zw=!1;Yk("DCLKSTAT",0);Rc(Ex,Dx);Cx&&(Cx.removeEventListener("onVideoDataChange",Gx),Cx.destroy())}
;D("yt.setConfig",Yk);D("yt.config.set",Yk);D("yt.setMsg",Yt);D("yt.msgs.set",Yt);D("yt.logging.errors.log",Xs);
D("writeEmbed",function(){var a=S("PLAYER_CONFIG");if(!a){var b=S("PLAYER_VARS");b&&(a={args:b})}Ku(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=S("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Lv("embed",["ol"]);c=S("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=ll(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&Lv("watch",["pbs","pbu","pbp"]);Cx=Ax(a,c);Cx.addEventListener("onVideoDataChange",Gx);Cx.addEventListener("onReady",Ix);a=S("POST_MESSAGE_ID","player");S("ENABLE_JS_API")?Ex=new Xw(Cx):S("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Dx=new cx(window.parent,a,b),Ex=new ax(Cx,Dx.connection));Aw();T("ytidb_create_logger_embed_killswitch")||mn();a={};Jw.h||(Jw.h=new Jw);
Jw.h.install((a.flush_logs={callback:function(){Ds()}},a));
Wq();T("ytidb_clear_embedded_player")&&zi.oa(function(){var f,g;if(!lw){var h=Ir();Er(h,{lc:kw,Id:iw});var k={cd:{feedbackEndpoint:Vu(cw),modifyChannelNotificationPreferenceEndpoint:Vu(dw),playlistEditEndpoint:Vu(ew),subscribeEndpoint:Vu(aw),unsubscribeEndpoint:Vu(bw),webPlayerShareEntityServiceEndpoint:Vu(fw)}},l=Tu(),n={};l&&(n.client_location=l);void 0===f&&(f=$l());void 0===g&&(g=h.resolve(kw));Uv(k,g,f,n);Er(h,{lc:$v,Jd:Tv.h});lw=h.resolve($v)}uw()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||ex);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||fx);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||Bw);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Ju);D("yt.util.activity.init",E("yt.util.activity.init")||jr);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||mr);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||kr);window.addEventListener("load",bl(function(){Fx()}));
window.addEventListener("pageshow",bl(function(a){a.persisted||Fx()}));
window.addEventListener("pagehide",bl(function(a){T("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Jx():a.persisted||Jx()}));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=Zk("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new V(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Xs(e):Ys(e))};
we=Zs;window.addEventListener("unhandledrejection",function(a){Zs(a.reason)});
Fb(S("ERRORS")||[],function(a){Xs.apply(null,a)});
Yk("ERRORS",[]);T("embeds_web_enable_scheduler_to_player_binary")&&cn();}).call(this);
