/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */

!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
!function(e,t){"use strict";function n(t){e.fn.cycle.debug&&i(t)}function i(){window.console&&console.log&&console.log("[cycle] "+Array.prototype.join.call(arguments," "))}function c(t,n,i){var c=e(t).data("cycle.opts");if(c){var s=!!t.cyclePause;s&&c.paused?c.paused(t,c,n,i):!s&&c.resumed&&c.resumed(t,c,n,i)}}function s(n,s,o){function l(t,n,c){if(!t&&n===!0){var s=e(c).data("cycle.opts");if(!s)return i("options not found, can not resume"),!1;c.cycleTimeout&&(clearTimeout(c.cycleTimeout),c.cycleTimeout=0),d(s.elements,s,1,!s.backwards)}}if(n.cycleStop===t&&(n.cycleStop=0),(s===t||null===s)&&(s={}),s.constructor==String){switch(s){case"destroy":case"stop":var a=e(n).data("cycle.opts");return a?(n.cycleStop++,n.cycleTimeout&&clearTimeout(n.cycleTimeout),n.cycleTimeout=0,a.elements&&e(a.elements).stop(),e(n).removeData("cycle.opts"),"destroy"==s&&r(n,a),!1):!1;case"toggle":return n.cyclePause=1===n.cyclePause?0:1,l(n.cyclePause,o,n),c(n),!1;case"pause":return n.cyclePause=1,c(n),!1;case"resume":return n.cyclePause=0,l(!1,o,n),c(n),!1;case"prev":case"next":return(a=e(n).data("cycle.opts"))?("string"==typeof o&&(a.oneTimeFx=o),e.fn.cycle[s](a),!1):(i('options not found, "prev/next" ignored'),!1);default:s={fx:s}}return s}if(s.constructor==Number){var f=s;return(s=e(n).data("cycle.opts"))?0>f||f>=s.elements.length?(i("invalid slide index: "+f),!1):(s.nextSlide=f,n.cycleTimeout&&(clearTimeout(n.cycleTimeout),n.cycleTimeout=0),"string"==typeof o&&(s.oneTimeFx=o),d(s.elements,s,1,f>=s.currSlide),!1):(i("options not found, can not advance slide"),!1)}return s}function o(t,n){if(!e.support.opacity&&n.cleartype&&t.style.filter)try{t.style.removeAttribute("filter")}catch(i){}}function r(t,n){n.next&&e(n.next).unbind(n.prevNextEvent),n.prev&&e(n.prev).unbind(n.prevNextEvent),(n.pager||n.pagerAnchorBuilder)&&e.each(n.pagerAnchors||[],function(){this.unbind().remove()}),n.pagerAnchors=null,e(t).unbind("mouseenter.cycle mouseleave.cycle"),n.destroy&&n.destroy(n)}function l(n,s,r,l,h){var g,x=e.extend({},e.fn.cycle.defaults,l||{},e.metadata?n.metadata():e.meta?n.data():{}),v=e.isFunction(n.data)?n.data(x.metaAttr):null;v&&(x=e.extend(x,v)),x.autostop&&(x.countdown=x.autostopCount||r.length);var w=n[0];if(n.data("cycle.opts",x),x.$cont=n,x.stopCount=w.cycleStop,x.elements=r,x.before=x.before?[x.before]:[],x.after=x.after?[x.after]:[],!e.support.opacity&&x.cleartype&&x.after.push(function(){o(this,x)}),x.continuous&&x.after.push(function(){d(r,x,0,!x.backwards)}),a(x),e.support.opacity||!x.cleartype||x.cleartypeNoBg||y(s),"static"==n.css("position")&&n.css("position","relative"),x.width&&n.width(x.width),x.height&&"auto"!=x.height&&n.height(x.height),x.startingSlide!==t?(x.startingSlide=parseInt(x.startingSlide,10),x.startingSlide>=r.length||x.startSlide<0?x.startingSlide=0:g=!0):x.startingSlide=x.backwards?r.length-1:0,x.random){x.randomMap=[];for(var S=0;S<r.length;S++)x.randomMap.push(S);if(x.randomMap.sort(function(){return Math.random()-.5}),g)for(var b=0;b<r.length;b++)x.startingSlide==x.randomMap[b]&&(x.randomIndex=b);else x.randomIndex=1,x.startingSlide=x.randomMap[1]}else x.startingSlide>=r.length&&(x.startingSlide=0);x.currSlide=x.startingSlide||0;var B=x.startingSlide;s.css({position:"absolute",top:0,left:0}).hide().each(function(t){var n;n=x.backwards?B?B>=t?r.length+(t-B):B-t:r.length-t:B?t>=B?r.length-(t-B):B-t:r.length-t,e(this).css("z-index",n)}),e(r[B]).css("opacity",1).show(),o(r[B],x),x.fit&&(x.aspect?s.each(function(){var t=e(this),n=x.aspect===!0?t.width()/t.height():x.aspect;x.width&&t.width()!=x.width&&(t.width(x.width),t.height(x.width/n)),x.height&&t.height()<x.height&&(t.height(x.height),t.width(x.height*n))}):(x.width&&s.width(x.width),x.height&&"auto"!=x.height&&s.height(x.height))),!x.center||x.fit&&!x.aspect||s.each(function(){var t=e(this);t.css({"margin-left":x.width?(x.width-t.width())/2+"px":0,"margin-top":x.height?(x.height-t.height())/2+"px":0})}),!x.center||x.fit||x.slideResize||s.each(function(){var t=e(this);t.css({"margin-left":x.width?(x.width-t.width())/2+"px":0,"margin-top":x.height?(x.height-t.height())/2+"px":0})});var I=(x.containerResize||x.containerResizeHeight)&&n.innerHeight()<1;if(I){for(var O=0,F=0,A=0;A<r.length;A++){var k=e(r[A]),T=k[0],H=k.outerWidth(),R=k.outerHeight();H||(H=T.offsetWidth||T.width||k.attr("width")),R||(R=T.offsetHeight||T.height||k.attr("height")),O=H>O?H:O,F=R>F?R:F}x.containerResize&&O>0&&F>0&&n.css({width:O+"px",height:F+"px"}),x.containerResizeHeight&&F>0&&n.css({height:F+"px"})}var P=!1;if(x.pause&&n.bind("mouseenter.cycle",function(){P=!0,this.cyclePause++,c(w,!0)}).bind("mouseleave.cycle",function(){P&&this.cyclePause--,c(w,!0)}),f(x)===!1)return!1;var W=!1;if(l.requeueAttempts=l.requeueAttempts||0,s.each(function(){var t=e(this);if(this.cycleH=x.fit&&x.height?x.height:t.height()||this.offsetHeight||this.height||t.attr("height")||0,this.cycleW=x.fit&&x.width?x.width:t.width()||this.offsetWidth||this.width||t.attr("width")||0,t.is("img")){var n=0===this.cycleH&&0===this.cycleW&&!this.complete;if(n){if(h.s&&x.requeueOnImageNotLoaded&&++l.requeueAttempts<100)return i(l.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH),setTimeout(function(){e(h.s,h.c).cycle(l)},x.requeueTimeout),W=!0,!1;i("could not determine size of image: "+this.src,this.cycleW,this.cycleH)}}return!0}),W)return!1;if(x.cssBefore=x.cssBefore||{},x.cssAfter=x.cssAfter||{},x.cssFirst=x.cssFirst||{},x.animIn=x.animIn||{},x.animOut=x.animOut||{},s.not(":eq("+B+")").css(x.cssBefore),e(s[B]).css(x.cssFirst),x.timeout){x.timeout=parseInt(x.timeout,10),x.speed.constructor==String&&(x.speed=e.fx.speeds[x.speed]||parseInt(x.speed,10)),x.sync||(x.speed=x.speed/2);for(var C="none"==x.fx?0:"shuffle"==x.fx?500:250;x.timeout-x.speed<C;)x.timeout+=x.speed}if(x.easing&&(x.easeIn=x.easeOut=x.easing),x.speedIn||(x.speedIn=x.speed),x.speedOut||(x.speedOut=x.speed),x.slideCount=r.length,x.currSlide=x.lastSlide=B,x.random?(++x.randomIndex==r.length&&(x.randomIndex=0),x.nextSlide=x.randomMap[x.randomIndex]):x.nextSlide=x.backwards?0===x.startingSlide?r.length-1:x.startingSlide-1:x.startingSlide>=r.length-1?0:x.startingSlide+1,!x.multiFx){var z=e.fn.cycle.transitions[x.fx];if(e.isFunction(z))z(n,s,x);else if("custom"!=x.fx&&!x.multiFx)return i("unknown transition: "+x.fx,"; slideshow terminating"),!1}var E=s[B];return x.skipInitializationCallbacks||(x.before.length&&x.before[0].apply(E,[E,E,x,!0]),x.after.length&&x.after[0].apply(E,[E,E,x,!0])),x.next&&e(x.next).bind(x.prevNextEvent,function(){return p(x,1)}),x.prev&&e(x.prev).bind(x.prevNextEvent,function(){return p(x,0)}),(x.pager||x.pagerAnchorBuilder)&&m(r,x),u(x,r),x}function a(t){t.original={before:[],after:[]},t.original.cssBefore=e.extend({},t.cssBefore),t.original.cssAfter=e.extend({},t.cssAfter),t.original.animIn=e.extend({},t.animIn),t.original.animOut=e.extend({},t.animOut),e.each(t.before,function(){t.original.before.push(this)}),e.each(t.after,function(){t.original.after.push(this)})}function f(t){var c,s,o=e.fn.cycle.transitions;if(t.fx.indexOf(",")>0){for(t.multiFx=!0,t.fxs=t.fx.replace(/\s*/g,"").split(","),c=0;c<t.fxs.length;c++){var r=t.fxs[c];s=o[r],s&&o.hasOwnProperty(r)&&e.isFunction(s)||(i("discarding unknown transition: ",r),t.fxs.splice(c,1),c--)}if(!t.fxs.length)return i("No valid transitions named; slideshow terminating."),!1}else if("all"==t.fx){t.multiFx=!0,t.fxs=[];for(var l in o)o.hasOwnProperty(l)&&(s=o[l],o.hasOwnProperty(l)&&e.isFunction(s)&&t.fxs.push(l))}if(t.multiFx&&t.randomizeEffects){var a=Math.floor(20*Math.random())+30;for(c=0;a>c;c++){var f=Math.floor(Math.random()*t.fxs.length);t.fxs.push(t.fxs.splice(f,1)[0])}n("randomized fx sequence: ",t.fxs)}return!0}function u(t,n){t.addSlide=function(i,c){var s=e(i),o=s[0];t.autostopCount||t.countdown++,n[c?"unshift":"push"](o),t.els&&t.els[c?"unshift":"push"](o),t.slideCount=n.length,t.random&&(t.randomMap.push(t.slideCount-1),t.randomMap.sort(function(){return Math.random()-.5})),s.css("position","absolute"),s[c?"prependTo":"appendTo"](t.$cont),c&&(t.currSlide++,t.nextSlide++),e.support.opacity||!t.cleartype||t.cleartypeNoBg||y(s),t.fit&&t.width&&s.width(t.width),t.fit&&t.height&&"auto"!=t.height&&s.height(t.height),o.cycleH=t.fit&&t.height?t.height:s.height(),o.cycleW=t.fit&&t.width?t.width:s.width(),s.css(t.cssBefore),(t.pager||t.pagerAnchorBuilder)&&e.fn.cycle.createPagerAnchor(n.length-1,o,e(t.pager),n,t),e.isFunction(t.onAddSlide)?t.onAddSlide(s):s.hide()}}function d(i,c,s,o){function r(){{var e=0;c.timeout}c.timeout&&!c.continuous?(e=h(i[c.currSlide],i[c.nextSlide],c,o),"shuffle"==c.fx&&(e-=c.speedOut)):c.continuous&&l.cyclePause&&(e=10),e>0&&(l.cycleTimeout=setTimeout(function(){d(i,c,0,!c.backwards)},e))}var l=c.$cont[0],a=i[c.currSlide],f=i[c.nextSlide];if(s&&c.busy&&c.manualTrump&&(n("manualTrump in go(), stopping active transition"),e(i).stop(!0,!0),c.busy=0,clearTimeout(l.cycleTimeout)),c.busy)return void n("transition active, ignoring new tx request");if(l.cycleStop==c.stopCount&&(0!==l.cycleTimeout||s)){if(!s&&!l.cyclePause&&!c.bounce&&(c.autostop&&--c.countdown<=0||c.nowrap&&!c.random&&c.nextSlide<c.currSlide))return void(c.end&&c.end(c));var u=!1;if(!s&&l.cyclePause||c.nextSlide==c.currSlide)r();else{u=!0;var p=c.fx;a.cycleH=a.cycleH||e(a).height(),a.cycleW=a.cycleW||e(a).width(),f.cycleH=f.cycleH||e(f).height(),f.cycleW=f.cycleW||e(f).width(),c.multiFx&&(o&&(c.lastFx===t||++c.lastFx>=c.fxs.length)?c.lastFx=0:!o&&(c.lastFx===t||--c.lastFx<0)&&(c.lastFx=c.fxs.length-1),p=c.fxs[c.lastFx]),c.oneTimeFx&&(p=c.oneTimeFx,c.oneTimeFx=null),e.fn.cycle.resetState(c,p),c.before.length&&e.each(c.before,function(e,t){l.cycleStop==c.stopCount&&t.apply(f,[a,f,c,o])});var m=function(){c.busy=0,e.each(c.after,function(e,t){l.cycleStop==c.stopCount&&t.apply(f,[a,f,c,o])}),l.cycleStop||r()};n("tx firing("+p+"); currSlide: "+c.currSlide+"; nextSlide: "+c.nextSlide),c.busy=1,c.fxFn?c.fxFn(a,f,c,m,o,s&&c.fastOnEvent):e.isFunction(e.fn.cycle[c.fx])?e.fn.cycle[c.fx](a,f,c,m,o,s&&c.fastOnEvent):e.fn.cycle.custom(a,f,c,m,o,s&&c.fastOnEvent)}if(u||c.nextSlide==c.currSlide){var y;c.lastSlide=c.currSlide,c.random?(c.currSlide=c.nextSlide,++c.randomIndex==i.length&&(c.randomIndex=0,c.randomMap.sort(function(){return Math.random()-.5})),c.nextSlide=c.randomMap[c.randomIndex],c.nextSlide==c.currSlide&&(c.nextSlide=c.currSlide==c.slideCount-1?0:c.currSlide+1)):c.backwards?(y=c.nextSlide-1<0,y&&c.bounce?(c.backwards=!c.backwards,c.nextSlide=1,c.currSlide=0):(c.nextSlide=y?i.length-1:c.nextSlide-1,c.currSlide=y?0:c.nextSlide+1)):(y=c.nextSlide+1==i.length,y&&c.bounce?(c.backwards=!c.backwards,c.nextSlide=i.length-2,c.currSlide=i.length-1):(c.nextSlide=y?0:c.nextSlide+1,c.currSlide=y?i.length-1:c.nextSlide-1))}u&&c.pager&&c.updateActivePagerLink(c.pager,c.currSlide,c.activePagerClass)}}function h(e,t,i,c){if(i.timeoutFn){for(var s=i.timeoutFn.call(e,e,t,i,c);"none"!=i.fx&&s-i.speed<250;)s+=i.speed;if(n("calculated timeout: "+s+"; speed: "+i.speed),s!==!1)return s}return i.timeout}function p(t,n){var i=n?1:-1,c=t.elements,s=t.$cont[0],o=s.cycleTimeout;if(o&&(clearTimeout(o),s.cycleTimeout=0),t.random&&0>i)t.randomIndex--,-2==--t.randomIndex?t.randomIndex=c.length-2:-1==t.randomIndex&&(t.randomIndex=c.length-1),t.nextSlide=t.randomMap[t.randomIndex];else if(t.random)t.nextSlide=t.randomMap[t.randomIndex];else if(t.nextSlide=t.currSlide+i,t.nextSlide<0){if(t.nowrap)return!1;t.nextSlide=c.length-1}else if(t.nextSlide>=c.length){if(t.nowrap)return!1;t.nextSlide=0}var r=t.onPrevNextEvent||t.prevNextClick;return e.isFunction(r)&&r(i>0,t.nextSlide,c[t.nextSlide]),d(c,t,1,n),!1}function m(t,n){var i=e(n.pager);e.each(t,function(c,s){e.fn.cycle.createPagerAnchor(c,s,i,t,n)}),n.updateActivePagerLink(n.pager,n.startingSlide,n.activePagerClass)}function y(t){function i(e){return e=parseInt(e,10).toString(16),e.length<2?"0"+e:e}function c(t){for(;t&&"html"!=t.nodeName.toLowerCase();t=t.parentNode){var n=e.css(t,"background-color");if(n&&n.indexOf("rgb")>=0){var c=n.match(/\d+/g);return"#"+i(c[0])+i(c[1])+i(c[2])}if(n&&"transparent"!=n)return n}return"#ffffff"}n("applying clearType background-color hack"),t.each(function(){e(this).css("background-color",c(this))})}var g="3.0.3";e.expr[":"].paused=function(e){return e.cyclePause},e.fn.cycle=function(t,c){var o={s:this.selector,c:this.context};return 0===this.length&&"stop"!=t?!e.isReady&&o.s?(i("DOM not ready, queuing slideshow"),e(function(){e(o.s,o.c).cycle(t,c)}),this):(i("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this):this.each(function(){var r=s(this,t,c);if(r!==!1){r.updateActivePagerLink=r.updateActivePagerLink||e.fn.cycle.updateActivePagerLink,this.cycleTimeout&&clearTimeout(this.cycleTimeout),this.cycleTimeout=this.cyclePause=0,this.cycleStop=0;var a=e(this),f=r.slideExpr?e(r.slideExpr,this):a.children(),u=f.get();if(u.length<2)return void i("terminating; too few slides: "+u.length);var p=l(a,f,u,r,o);if(p!==!1){var m=p.continuous?10:h(u[p.currSlide],u[p.nextSlide],p,!p.backwards);m&&(m+=p.delay||0,10>m&&(m=10),n("first timeout: "+m),this.cycleTimeout=setTimeout(function(){d(u,p,0,!r.backwards)},m))}}})},e.fn.cycle.resetState=function(t,n){n=n||t.fx,t.before=[],t.after=[],t.cssBefore=e.extend({},t.original.cssBefore),t.cssAfter=e.extend({},t.original.cssAfter),t.animIn=e.extend({},t.original.animIn),t.animOut=e.extend({},t.original.animOut),t.fxFn=null,e.each(t.original.before,function(){t.before.push(this)}),e.each(t.original.after,function(){t.after.push(this)});var i=e.fn.cycle.transitions[n];e.isFunction(i)&&i(t.$cont,e(t.elements),t)},e.fn.cycle.updateActivePagerLink=function(t,n,i){e(t).each(function(){e(this).children().removeClass(i).eq(n).addClass(i)})},e.fn.cycle.next=function(e){p(e,1)},e.fn.cycle.prev=function(e){p(e,0)},e.fn.cycle.createPagerAnchor=function(t,i,s,o,r){var l;if(e.isFunction(r.pagerAnchorBuilder)?(l=r.pagerAnchorBuilder(t,i),n("pagerAnchorBuilder("+t+", el) returned: "+l)):l='<a href="#">'+(t+1)+"</a>",l){var a=e(l);if(0===a.parents("body").length){var f=[];s.length>1?(s.each(function(){var t=a.clone(!0);e(this).append(t),f.push(t[0])}),a=e(f)):a.appendTo(s)}r.pagerAnchors=r.pagerAnchors||[],r.pagerAnchors.push(a);var u=function(n){n.preventDefault(),r.nextSlide=t;var i=r.$cont[0],c=i.cycleTimeout;c&&(clearTimeout(c),i.cycleTimeout=0);var s=r.onPagerEvent||r.pagerClick;e.isFunction(s)&&s(r.nextSlide,o[r.nextSlide]),d(o,r,1,r.currSlide<t)};/mouseenter|mouseover/i.test(r.pagerEvent)?a.hover(u,function(){}):a.bind(r.pagerEvent,u),/^click/.test(r.pagerEvent)||r.allowPagerClickBubble||a.bind("click.cycle",function(){return!1});var h=r.$cont[0],p=!1;r.pauseOnPagerHover&&a.hover(function(){p=!0,h.cyclePause++,c(h,!0,!0)},function(){p&&h.cyclePause--,c(h,!0,!0)})}},e.fn.cycle.hopsFromLast=function(e,t){var n,i=e.lastSlide,c=e.currSlide;return n=t?c>i?c-i:e.slideCount-i:i>c?i-c:i+e.slideCount-c},e.fn.cycle.commonReset=function(t,n,i,c,s,o){e(i.elements).not(t).hide(),"undefined"==typeof i.cssBefore.opacity&&(i.cssBefore.opacity=1),i.cssBefore.display="block",i.slideResize&&c!==!1&&n.cycleW>0&&(i.cssBefore.width=n.cycleW),i.slideResize&&s!==!1&&n.cycleH>0&&(i.cssBefore.height=n.cycleH),i.cssAfter=i.cssAfter||{},i.cssAfter.display="none",e(t).css("zIndex",i.slideCount+(o===!0?1:0)),e(n).css("zIndex",i.slideCount+(o===!0?0:1))},e.fn.cycle.custom=function(t,n,i,c,s,o){var r=e(t),l=e(n),a=i.speedIn,f=i.speedOut,u=i.easeIn,d=i.easeOut,h=i.animInDelay,p=i.animOutDelay;l.css(i.cssBefore),o&&(a=f="number"==typeof o?o:1,u=d=null);var m=function(){l.delay(h).animate(i.animIn,a,u,function(){c()})};r.delay(p).animate(i.animOut,f,d,function(){r.css(i.cssAfter),i.sync||m()}),i.sync&&m()},e.fn.cycle.transitions={fade:function(t,n,i){n.not(":eq("+i.currSlide+")").css("opacity",0),i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i),i.cssBefore.opacity=0}),i.animIn={opacity:1},i.animOut={opacity:0},i.cssBefore={top:0,left:0}}},e.fn.cycle.ver=function(){return g},e.fn.cycle.defaults={activePagerClass:"activeSlide",after:null,allowPagerClickBubble:!1,animIn:null,animInDelay:0,animOut:null,animOutDelay:0,aspect:!1,autostop:0,autostopCount:0,backwards:!1,before:null,center:null,cleartype:!e.support.opacity,cleartypeNoBg:!1,containerResize:1,containerResizeHeight:0,continuous:0,cssAfter:null,cssBefore:null,delay:0,easeIn:null,easeOut:null,easing:null,end:null,fastOnEvent:0,fit:0,fx:"fade",fxFn:null,height:"auto",manualTrump:!0,metaAttr:"cycle",next:null,nowrap:0,onPagerEvent:null,onPrevNextEvent:null,pager:null,pagerAnchorBuilder:null,pagerEvent:"click.cycle",pause:0,pauseOnPagerHover:0,prev:null,prevNextEvent:"click.cycle",random:0,randomizeEffects:1,requeueOnImageNotLoaded:!0,requeueTimeout:250,rev:0,shuffle:null,skipInitializationCallbacks:!1,slideExpr:null,slideResize:1,speed:1e3,speedIn:null,speedOut:null,startingSlide:t,sync:1,timeout:4e3,timeoutFn:null,updateActivePagerLink:null,width:null}}(jQuery),function(e){"use strict";e.fn.cycle.transitions.none=function(t,n,i){i.fxFn=function(t,n,i,c){e(n).show(),e(t).hide(),c()}},e.fn.cycle.transitions.fadeout=function(t,n,i){n.not(":eq("+i.currSlide+")").css({display:"block",opacity:1}),i.before.push(function(t,n,i,c,s,o){e(t).css("zIndex",i.slideCount+(o!==!0?1:0)),e(n).css("zIndex",i.slideCount+(o!==!0?0:1))}),i.animIn.opacity=1,i.animOut.opacity=0,i.cssBefore.opacity=1,i.cssBefore.display="block",i.cssAfter.zIndex=0},e.fn.cycle.transitions.scrollUp=function(t,n,i){t.css("overflow","hidden"),i.before.push(e.fn.cycle.commonReset);var c=t.height();i.cssBefore.top=c,i.cssBefore.left=0,i.cssFirst.top=0,i.animIn.top=0,i.animOut.top=-c},e.fn.cycle.transitions.scrollDown=function(t,n,i){t.css("overflow","hidden"),i.before.push(e.fn.cycle.commonReset);var c=t.height();i.cssFirst.top=0,i.cssBefore.top=-c,i.cssBefore.left=0,i.animIn.top=0,i.animOut.top=c},e.fn.cycle.transitions.scrollLeft=function(t,n,i){t.css("overflow","hidden"),i.before.push(e.fn.cycle.commonReset);var c=t.width();i.cssFirst.left=0,i.cssBefore.left=c,i.cssBefore.top=0,i.animIn.left=0,i.animOut.left=0-c},e.fn.cycle.transitions.scrollRight=function(t,n,i){t.css("overflow","hidden"),i.before.push(e.fn.cycle.commonReset);var c=t.width();i.cssFirst.left=0,i.cssBefore.left=-c,i.cssBefore.top=0,i.animIn.left=0,i.animOut.left=c},e.fn.cycle.transitions.scrollHorz=function(t,n,i){t.css("overflow","hidden").width(),i.before.push(function(t,n,i,c){i.rev&&(c=!c),e.fn.cycle.commonReset(t,n,i),i.cssBefore.left=c?n.cycleW-1:1-n.cycleW,i.animOut.left=c?-t.cycleW:t.cycleW}),i.cssFirst.left=0,i.cssBefore.top=0,i.animIn.left=0,i.animOut.top=0},e.fn.cycle.transitions.scrollVert=function(t,n,i){t.css("overflow","hidden"),i.before.push(function(t,n,i,c){i.rev&&(c=!c),e.fn.cycle.commonReset(t,n,i),i.cssBefore.top=c?1-n.cycleH:n.cycleH-1,i.animOut.top=c?t.cycleH:-t.cycleH}),i.cssFirst.top=0,i.cssBefore.left=0,i.animIn.top=0,i.animOut.left=0},e.fn.cycle.transitions.slideX=function(t,n,i){i.before.push(function(t,n,i){e(i.elements).not(t).hide(),e.fn.cycle.commonReset(t,n,i,!1,!0),i.animIn.width=n.cycleW}),i.cssBefore.left=0,i.cssBefore.top=0,i.cssBefore.width=0,i.animIn.width="show",i.animOut.width=0},e.fn.cycle.transitions.slideY=function(t,n,i){i.before.push(function(t,n,i){e(i.elements).not(t).hide(),e.fn.cycle.commonReset(t,n,i,!0,!1),i.animIn.height=n.cycleH}),i.cssBefore.left=0,i.cssBefore.top=0,i.cssBefore.height=0,i.animIn.height="show",i.animOut.height=0},e.fn.cycle.transitions.shuffle=function(t,n,i){var c,s=t.css("overflow","visible").width();for(n.css({left:0,top:0}),i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!0,!0)}),i.speedAdjusted||(i.speed=i.speed/2,i.speedAdjusted=!0),i.random=0,i.shuffle=i.shuffle||{left:-s,top:15},i.els=[],c=0;c<n.length;c++)i.els.push(n[c]);for(c=0;c<i.currSlide;c++)i.els.push(i.els.shift());i.fxFn=function(t,n,i,c,s){i.rev&&(s=!s);var o=e(s?t:n);e(n).css(i.cssBefore);var r=i.slideCount;o.animate(i.shuffle,i.speedIn,i.easeIn,function(){for(var n=e.fn.cycle.hopsFromLast(i,s),l=0;n>l;l++)s?i.els.push(i.els.shift()):i.els.unshift(i.els.pop());if(s)for(var a=0,f=i.els.length;f>a;a++)e(i.els[a]).css("z-index",f-a+r);else{var u=e(t).css("z-index");o.css("z-index",parseInt(u,10)+1+r)}o.animate({left:0,top:0},i.speedOut,i.easeOut,function(){e(s?this:t).hide(),c&&c()})})},e.extend(i.cssBefore,{display:"block",opacity:1,top:0,left:0})},e.fn.cycle.transitions.turnUp=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!1),i.cssBefore.top=n.cycleH,i.animIn.height=n.cycleH,i.animOut.width=n.cycleW}),i.cssFirst.top=0,i.cssBefore.left=0,i.cssBefore.height=0,i.animIn.top=0,i.animOut.height=0},e.fn.cycle.transitions.turnDown=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!1),i.animIn.height=n.cycleH,i.animOut.top=t.cycleH}),i.cssFirst.top=0,i.cssBefore.left=0,i.cssBefore.top=0,i.cssBefore.height=0,i.animOut.height=0},e.fn.cycle.transitions.turnLeft=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!1,!0),i.cssBefore.left=n.cycleW,i.animIn.width=n.cycleW}),i.cssBefore.top=0,i.cssBefore.width=0,i.animIn.left=0,i.animOut.width=0},e.fn.cycle.transitions.turnRight=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!1,!0),i.animIn.width=n.cycleW,i.animOut.left=t.cycleW}),e.extend(i.cssBefore,{top:0,left:0,width:0}),i.animIn.left=0,i.animOut.width=0},e.fn.cycle.transitions.zoom=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!1,!1,!0),i.cssBefore.top=n.cycleH/2,i.cssBefore.left=n.cycleW/2,e.extend(i.animIn,{top:0,left:0,width:n.cycleW,height:n.cycleH}),e.extend(i.animOut,{width:0,height:0,top:t.cycleH/2,left:t.cycleW/2})}),i.cssFirst.top=0,i.cssFirst.left=0,i.cssBefore.width=0,i.cssBefore.height=0},e.fn.cycle.transitions.fadeZoom=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!1,!1),i.cssBefore.left=n.cycleW/2,i.cssBefore.top=n.cycleH/2,e.extend(i.animIn,{top:0,left:0,width:n.cycleW,height:n.cycleH})}),i.cssBefore.width=0,i.cssBefore.height=0,i.animOut.opacity=0},e.fn.cycle.transitions.blindX=function(t,n,i){var c=t.css("overflow","hidden").width();i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i),i.animIn.width=n.cycleW,i.animOut.left=t.cycleW}),i.cssBefore.left=c,i.cssBefore.top=0,i.animIn.left=0,i.animOut.left=c},e.fn.cycle.transitions.blindY=function(t,n,i){var c=t.css("overflow","hidden").height();i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i),i.animIn.height=n.cycleH,i.animOut.top=t.cycleH}),i.cssBefore.top=c,i.cssBefore.left=0,i.animIn.top=0,i.animOut.top=c},e.fn.cycle.transitions.blindZ=function(t,n,i){var c=t.css("overflow","hidden").height(),s=t.width();i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i),i.animIn.height=n.cycleH,i.animOut.top=t.cycleH}),i.cssBefore.top=c,i.cssBefore.left=s,i.animIn.top=0,i.animIn.left=0,i.animOut.top=c,i.animOut.left=s},e.fn.cycle.transitions.growX=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!1,!0),i.cssBefore.left=this.cycleW/2,i.animIn.left=0,i.animIn.width=this.cycleW,i.animOut.left=0}),i.cssBefore.top=0,i.cssBefore.width=0},e.fn.cycle.transitions.growY=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!1),i.cssBefore.top=this.cycleH/2,i.animIn.top=0,i.animIn.height=this.cycleH,i.animOut.top=0}),i.cssBefore.height=0,i.cssBefore.left=0},e.fn.cycle.transitions.curtainX=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!1,!0,!0),i.cssBefore.left=n.cycleW/2,i.animIn.left=0,i.animIn.width=this.cycleW,i.animOut.left=t.cycleW/2,i.animOut.width=0}),i.cssBefore.top=0,i.cssBefore.width=0},e.fn.cycle.transitions.curtainY=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!1,!0),i.cssBefore.top=n.cycleH/2,i.animIn.top=0,i.animIn.height=n.cycleH,i.animOut.top=t.cycleH/2,i.animOut.height=0}),i.cssBefore.height=0,i.cssBefore.left=0},e.fn.cycle.transitions.cover=function(t,n,i){var c=i.direction||"left",s=t.css("overflow","hidden").width(),o=t.height();i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i),i.cssAfter.display="","right"==c?i.cssBefore.left=-s:"up"==c?i.cssBefore.top=o:"down"==c?i.cssBefore.top=-o:i.cssBefore.left=s}),i.animIn.left=0,i.animIn.top=0,i.cssBefore.top=0,i.cssBefore.left=0},e.fn.cycle.transitions.uncover=function(t,n,i){var c=i.direction||"left",s=t.css("overflow","hidden").width(),o=t.height();i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!0,!0),"right"==c?i.animOut.left=s:"up"==c?i.animOut.top=-o:"down"==c?i.animOut.top=o:i.animOut.left=-s}),i.animIn.left=0,i.animIn.top=0,i.cssBefore.top=0,i.cssBefore.left=0},e.fn.cycle.transitions.toss=function(t,n,i){var c=t.css("overflow","visible").width(),s=t.height();i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!0,!0),i.animOut.left||i.animOut.top?i.animOut.opacity=0:e.extend(i.animOut,{left:2*c,top:-s/2,opacity:0})}),i.cssBefore.left=0,i.cssBefore.top=0,i.animIn.left=0},e.fn.cycle.transitions.wipe=function(t,n,i){var c=t.css("overflow","hidden").width(),s=t.height();i.cssBefore=i.cssBefore||{};var o;if(i.clip)if(/l2r/.test(i.clip))o="rect(0px 0px "+s+"px 0px)";else if(/r2l/.test(i.clip))o="rect(0px "+c+"px "+s+"px "+c+"px)";else if(/t2b/.test(i.clip))o="rect(0px "+c+"px 0px 0px)";else if(/b2t/.test(i.clip))o="rect("+s+"px "+c+"px "+s+"px 0px)";else if(/zoom/.test(i.clip)){var r=parseInt(s/2,10),l=parseInt(c/2,10);o="rect("+r+"px "+l+"px "+r+"px "+l+"px)"}i.cssBefore.clip=i.cssBefore.clip||o||"rect(0px 0px 0px 0px)";var a=i.cssBefore.clip.match(/(\d+)/g),f=parseInt(a[0],10),u=parseInt(a[1],10),d=parseInt(a[2],10),h=parseInt(a[3],10);i.before.push(function(t,n,i){if(t!=n){var o=e(t),r=e(n);e.fn.cycle.commonReset(t,n,i,!0,!0,!1),i.cssAfter.display="block";var l=1,a=parseInt(i.speedIn/13,10)-1;!function p(){var e=f?f-parseInt(l*(f/a),10):0,t=h?h-parseInt(l*(h/a),10):0,n=s>d?d+parseInt(l*((s-d)/a||1),10):s,i=c>u?u+parseInt(l*((c-u)/a||1),10):c;r.css({clip:"rect("+e+"px "+i+"px "+n+"px "+t+"px)"}),l++<=a?setTimeout(p,13):o.css("display","none")}()}}),e.extend(i.cssBefore,{display:"block",opacity:1,top:0,left:0}),i.animIn={left:0},i.animOut={left:0}}}(jQuery);
/*! WOW - v1.1.2 - 2015-08-19
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);
function equalHeight(t){tallest=0,t.each(function(){thisHeight=jQuery(this).height(),thisHeight>tallest&&(tallest=thisHeight)}),t.height(tallest)}jQuery(document).ready(function(){equalHeight(jQuery(".eq_hight"))}),(new WOW).init();
wow = new WOW({
  boxClass: 'freesia-animation'
});
wow.init();
// Unite Gallery, Version: 1.7.45, released 27 Feb 2017 



/**
 * write something to debug line
 */

function debugLine(html,addRandom, addHtml){
	
	if(html === true)
		html = "true";
	
	if(html === false)
		html = "false";		
	
	var output = html;
	
	if(typeof html == "object"){
		output = "";
		for(name in html){
			var value = html[name];
			output += " " + name + ": " + value;
		}
	}
	
	if(addRandom == true && !addHtml)
		output += " " + Math.random();	
	
	if(addHtml == true){
		var objLine = jQuery("#debug_line");
		objLine.width(200);
		
		if(objLine.height() >= 500)
			objLine.html("");
		
		var currentHtml = objLine.html();
		output = currentHtml + "<br> -------------- <br>" + output;		
	}
	
	jQuery("#debug_line").show().html(output);		
		
}

/**
 * 
 * debug side some object
 */
function debugSide(obj){
	
	var html = "";
	for(name in obj){
		var value = obj[name];
		html += name+" : " + value + "<br>";		
	}
	
	jQuery("#debug_side").show().html(html);

}


/**
 * output some string to console
 */
function trace(str){
	
	if(typeof console != "undefined")
		console.log(str);

}




/** -------------- UgFunctions class ---------------------*/

function UGFunctions(){
	
	var g_browserPrefix = null;	
	var t = this;
	var g_temp = {
		starTime:0,
		arrThemes:[],
		isTouchDevice:-1,
		isRgbaSupported: -1,
		timeCache:{},
		dataCache:{},
		lastEventType:"",		//for validate touchstart click
		lastEventTime:0,
		lastTouchStartElement:null,
		touchThreshold:700,
		handle: null			//interval handle
	};
	
	this.debugVar = "";

	this.z__________FULL_SCREEN___________ = function(){}
	
	
	
	/**
	 * move to full screen mode
	 * fullscreen ID - the ID of current fullscreen
	 */
	this.toFullscreen = function(element, fullscreenID) {
		  	  
		  if(element.requestFullscreen) {
		    element.requestFullscreen();
		  } else if(element.mozRequestFullScreen) {
		    element.mozRequestFullScreen();
		  } else if(element.webkitRequestFullscreen) {
		    element.webkitRequestFullscreen(); 
		  } else if(element.msRequestFullscreen) {
			    element.msRequestFullscreen(); 
		  } else{
			  return(false);
		  }
		  
		  return(true);
	}	
	
	
	/**
	 * exit full screen mode
	 * return if operation success (or if fullscreen mode supported)
	 */
	this.exitFullscreen = function() {
		  if(t.isFullScreen() == false)
			  return(false);
			  
		  if(document.exitFullscreen) {
		    document.exitFullscreen();

		  } else if(document.cancelFullScreen) {
			    document.cancelFullScreen();
		    
		  } else if(document.mozCancelFullScreen) {
		    document.mozCancelFullScreen();
		    
		  } else if(document.webkitExitFullscreen) {
		    document.webkitExitFullscreen();
		    
		  } else if(document.msExitFullscreen) {
			    document.msExitFullscreen();
			    
		  }else{
			  return(false);
		  }
		  
		  return(true);
	}	

	/**
	 * cross browser attach even function
	 */
	function addEvent(evnt, elem, func) {
		   if (elem.addEventListener)  // W3C DOM
		      elem.addEventListener(evnt,func,false);
		   else if (elem.attachEvent) { // IE DOM
		      elem.attachEvent("on"+evnt, func);
		   }
		   else { // No much to do
		      elem[evnt] = func;
		   }
	}
	
	
	/**
	 * add fullscreen event to some function
	 */
	this.addFullScreenChangeEvent = function(func){
		
		if(document["webkitCancelFullScreen"])
			addEvent("webkitfullscreenchange",document,func);
		else if(document["msExitFullscreen"])
			addEvent("MSFullscreenChange",document,func);
		else if(document["mozCancelFullScreen"])
			addEvent("mozfullscreenchange",document,func);
		else
			addEvent("fullscreenchange",document,func);
	}
	
	
	/**
	 * destroy the full screen change event
	 */
	this.destroyFullScreenChangeEvent = function(){
		
		jQuery(document).unbind("fullscreenChange");
		jQuery(document).unbind("mozfullscreenchange");
		jQuery(document).unbind("webkitfullscreenchange");
		jQuery(document).unbind("MSFullscreenChange");
	}
	
	
	/**
	 * get the fullscreen element
	 */
	this.getFullScreenElement = function(){
		
		var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
		
		return(fullscreenElement);
	}

	/**
	 * return if fullscreen enabled
	 */
	this.isFullScreen = function(){
		
		var isFullScreen = document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement;
		
		if(!isFullScreen)
			isFullScreen = false;
		else
			isFullScreen = true;
		
		return(isFullScreen);
	}
	
	
	
	this.z__________GET_PROPS___________ = function(){}
	
	/**
	 * get browser prefix, can be empty if not detected.
	 */
	this.getBrowserPrefix = function(){
		
	   if(g_browserPrefix !== null)
		   return g_browserPrefix;
				
	   var arrayOfPrefixes = ['webkit','Moz','ms','O'];
	   
	   var div = document.createElement("div");
	   
	   for(var index in arrayOfPrefixes){
		   var prefix = arrayOfPrefixes[index];
		   
		   if(prefix+"Transform" in div.style){
			   prefix = prefix.toLowerCase();
			   g_browserPrefix = prefix;
			   return(prefix);
		   }
	   }
	   
	   g_browserPrefix = "";
	   return "";
	}
	
	/**
	 * get image inside parent data by image (find parent and size)
	 * scaleMode: fit, down, fill, fitvert
	 */
	this.getImageInsideParentDataByImage = function(objImage, scaleMode, objPadding){
		
		var objParent = objImage.parent();
		
		var objOrgSize = t.getImageOriginalSize(objImage);
		
		var objData = t.getImageInsideParentData(objParent, objOrgSize.width, objOrgSize.height, scaleMode, objPadding);
		
		return(objData);
	}
	
	
	/**
	 * get data of image inside parent
	 * scaleMode: fit, down, fill, fitvert
	 */
	this.getImageInsideParentData = function(objParent, originalWidth, originalHeight, scaleMode, objPadding, maxWidth, maxHeight){
		
		if(!objPadding)
			var objPadding = {};
		
		var objOutput = {};
		
		if(typeof maxWidth === "undefined")
			var maxWidth = objParent.width();
		
		if(typeof maxHeight === "undefined")
			var maxHeight = objParent.height();
		
		if(objPadding.padding_left)
			maxWidth -= objPadding.padding_left;
		
		if(objPadding.padding_right)
			maxWidth -= objPadding.padding_right;
		
		if(objPadding.padding_top)
			maxHeight -= objPadding.padding_top;
		
		if(objPadding.padding_bottom)
			maxHeight -= objPadding.padding_bottom;
		
		var imageWidth = null;
		var imageHeight = "100%";
		var imageTop = null;
		var imageLeft = null;		
		var style = "display:block;margin:0px auto;";
		
		if(originalWidth > 0 && originalHeight > 0){
			
			//get image size and position
			
			if(scaleMode == "down" && originalWidth < maxWidth && originalHeight < maxHeight){
			
				imageHeight = originalHeight;
				imageWidth = originalWidth;
				imageLeft = (maxWidth - imageWidth) / 2;
				imageTop = (maxHeight - imageHeight) / 2;
				
			}else if(scaleMode == "fill"){
				var ratio = originalWidth / originalHeight;
				
				imageHeight = maxHeight;
				imageWidth = imageHeight * ratio;
								
				if(imageWidth < maxWidth){
					imageWidth = maxWidth;
					imageHeight = imageWidth / ratio;
					
					//center y position
					imageLeft = 0;
					imageTop = Math.round((imageHeight - maxHeight) / 2 * -1);
				}else{	//center x position
					imageTop = 0;
					imageLeft = Math.round((imageWidth - maxWidth) / 2 * -1);
				}
								
			}
			else{		//fit to borders
				var ratio = originalWidth / originalHeight;
				imageHeight = maxHeight;
				imageWidth = imageHeight * ratio;
				imageTop = 0;
				imageLeft = (maxWidth - imageWidth) / 2;
				
				if(scaleMode != "fitvert" && imageWidth > maxWidth){
					imageWidth = maxWidth;
					imageHeight = imageWidth / ratio;
					imageLeft = 0;
					imageTop = (maxHeight - imageHeight) / 2;
				}
			
			}
			
			imageWidth = Math.floor(imageWidth);
			imageHeight = Math.floor(imageHeight);
			
			imageTop = Math.floor(imageTop);
			imageLeft = Math.floor(imageLeft);
			
			style="position:absolute;";
		}
		
		//set padding
		if(objPadding.padding_top)
			imageTop += objPadding.padding_top;
		
		if(objPadding.padding_left)
			imageLeft += objPadding.padding_left;
		
		objOutput.imageWidth = imageWidth;
		objOutput.imageHeight = imageHeight;
		objOutput.imageTop = imageTop;
		objOutput.imageLeft = imageLeft;
		objOutput.imageRight = imageLeft + imageWidth;
		if(imageTop == 0 || imageHeight == "100%")
			objOutput.imageBottom = null;
		else
			objOutput.imageBottom = imageTop + imageHeight;
		
		objOutput.style = style;
		
		return(objOutput);		
	}
	
	
	/**
	 * get element center position inside parent 
	 * even if the object bigger than the parent
	 */
	this.getElementCenterPosition = function(element, objPadding){
		
		var parent = element.parent();
		var objSize = t.getElementSize(element);
		var objSizeParent = t.getElementSize(parent);
		
		var parentWidth = objSizeParent.width;
		var parentHeight = objSizeParent.height;
		
		if(objPadding && objPadding.padding_top !== undefined)
			parentHeight -= objPadding.padding_top;
		
		if(objPadding && objPadding.padding_bottom !== undefined)
			parentHeight -= objPadding.padding_bottom;
		
		if(objPadding && objPadding.padding_left !== undefined)
			parentWidth -= objPadding.padding_left;
		
		if(objPadding && objPadding.padding_right !== undefined)
			parentWidth -= objPadding.padding_right;
		
		
		var output = {};
		output.left = Math.round((parentWidth - objSize.width) / 2);
		output.top = Math.round((parentHeight - objSize.height) / 2);
		
		if(objPadding && objPadding.padding_top !== undefined)
			output.top += objPadding.padding_top;
		
		if(objPadding && objPadding.padding_left !== undefined)
			output.left += objPadding.padding_left;
		
		
		return(output);
	}
	
	
	/**
	 * get the center of the element 
	 * includeParent - including left / right related to the parent
	 */
	this.getElementCenterPoint = function(element, includeParent){
		
		if(!includeParent)
			var includeParent = false;
		
		var objSize = t.getElementSize(element);
		var output = {};
		
		output.x =  objSize.width / 2;
		output.y =  objSize.height / 2;
		
		if(includeParent == true){
			output.x += objSize.left;
			output.y += objSize.top;
		}
		
		output.x = Math.round(output.x);
		output.y = Math.round(output.y);
		
		return(output);
	}
	
	
	/**
	 * 
	 * get mouse position from the event
	 * optimised to every device
	 */
	this.getMousePosition = function(event, element){
		
		var output = {
			pageX: 	event.pageX,
			pageY: 	event.pageY,
			clientX: 	event.clientX,
			clientY: 	event.clientY
		};
		
		if(event.originalEvent && event.originalEvent.touches && event.originalEvent.touches.length > 0){
			output.pageX = event.originalEvent.touches[0].pageX;
			output.pageY = event.originalEvent.touches[0].pageY;
			output.clientX = event.originalEvent.touches[0].clientX;
			output.clientY = event.originalEvent.touches[0].clientY;
		}
		
		/**
		 * get element's mouse position
		 */
		if(element){
			var elementPos = element.offset();
			output.mouseX = output.pageX - elementPos.left;
			output.mouseY = output.pageY - elementPos.top;
		}
		
		return(output);
	}
	
	/**
	 * get mouse element related point from page related point
	 */
	this.getMouseElementPoint = function(point, element){
		
		//rename the input and output
		var newPoint = {x: point.pageX, y: point.pageY};
		
		var elementPoint = t.getElementLocalPoint(newPoint, element);
		
		return(elementPoint);
	}
	
	
	/**
	 * get element local point from global point position
	 */
	this.getElementLocalPoint = function(point, element){
		
		var elementPoint = {};
		var elementPos = element.offset();
		
		elementPoint.x = Math.round(point.x - elementPos.left);
		elementPoint.y = Math.round(point.y - elementPos.top);
		
		return(elementPoint);
	}

	
	/**
	 * get image oritinal size
	 * if originalWidth, originalHeight is set, just return them.
	 */		
	this.getImageOriginalSize = function(objImage, originalWidth, originalHeight){
		
		if(typeof originalWidth != "undefined" && typeof originalHeight != "undefined")
			return({width:originalWidth, height:originalHeight});
		
		var htmlImage = objImage[0];
		
		if(typeof htmlImage == "undefined")
			throw new Error("getImageOriginalSize error - Image not found");
		
		var output = {};
		
		if(typeof htmlImage.naturalWidth == "undefined"){

			//check from cache
			if(typeof objImage.data("naturalWidth") == "number"){
				var output = {};
				output.width = objImage.data("naturalWidth");
				output.height = objImage.data("naturalHeight");
				return(output);
			}
			
		   //load new image
		   var newImg = new Image();
	       newImg.src = htmlImage.src;
	        
	       if (newImg.complete) {
	        	output.width = newImg.width;
	        	output.height = newImg.height;

	        	//caching
				objImage.data("naturalWidth", output.width);
				objImage.data("naturalHeight", output.height);
	        	return(output);
	        	
	       }
	    
	       return({width:0,height:0});
		        
		}else{
			
			output.width = htmlImage.naturalWidth;
			output.height = htmlImage.naturalHeight;
			
			return(output);
		}
		
	}

	
	/**
	 * get current image ratio from original size
	 */
	this.getimageRatio = function(objImage){
		
		var originalSize = t.getImageOriginalSize(objImage);
		var size = t.getElementSize(objImage);
		var ratio = size.width / originalSize.width;
		
		return(ratio);
	}
	
	/**
	 * tells if the image fit the parent (smaller then the parent)
	 */
	this.isImageFitParent = function(objImage){
		var objParent = objImage.parent();
		var sizeImage = t.getElementSize(objImage);
		var sizeParent = t.getElementSize(objParent);
		
		if(sizeImage.width <= sizeParent.width && sizeImage.height <= sizeParent.height)
			return(true);
		
		return(false);
	}
	
	/**
	 * get size and position of some object
	 */
	this.getElementSize = function(element){

		if(element === undefined){
			throw new Error("Can't get size, empty element");
		}
				
		var obj = element.position();
				
		obj.height = element.outerHeight();
		obj.width = element.outerWidth();
		
		obj.left = Math.round(obj.left);
		obj.top = Math.round(obj.top);
		
		obj.right = obj.left + obj.width;
		obj.bottom = obj.top + obj.height;
		
		return(obj);		
	}
	
	
	
	/**
	 * return true if the element is bigger then it's parent
	 */
	this.isElementBiggerThenParent = function(element){
		
		var objParent = element.parent();
		var objSizeElement = t.getElementSize(element);
		var objSizeParent = t.getElementSize(objParent);
		
		if(objSizeElement.width > objSizeParent.width || objSizeElement.height > objSizeParent.height)
			return(true);
		
		return(false);
	}
	
	
	/**
	 * tells if the mouse point inside image
	 * the mouse point is related to image pos
	 */
	this.isPointInsideElement = function(point, objSize){
		
		var isMouseXInside = (point.x >= 0 && point.x < objSize.width);
		if(isMouseXInside == false)
			return(false);
		
		var isMouseYInside = (point.y >= 0 && point.y < objSize.height);
		if(isMouseYInside == false)
			return(false);
		
		return(true);
	}
	
	
	/**
	 * get element relative position according the parent
	 * if the left / top is offset text (left , center, right / top, middle , bottom)
	 * the element can be number size as well
	 */
	this.getElementRelativePos = function(element, pos, offset, objParent){
		
		if(!objParent)
			var objParent = element.parent();
		
		if(typeof element == "number"){
			var elementSize = {
					width: element,
					height: element
			};
		}else
			var elementSize = t.getElementSize(element);
		
		var parentSize = t.getElementSize(objParent);
		
		
		switch(pos){
			case "top":
			case "left":
				pos = 0;
				if(offset)
					pos += offset;
			break;
			case "center":
				pos = Math.round((parentSize.width - elementSize.width) / 2);
				if(offset)
					pos += offset;
				
			break;
			case "right":
				pos = parentSize.width - elementSize.width;
				if(offset)
					pos -= offset;
			break;
			case "middle":
				pos = Math.round((parentSize.height - elementSize.height) / 2);
				if(offset)
					pos += offset;
			break;
			case "bottom":
				pos = parentSize.height - elementSize.height;
				if(offset)
					pos -= offset;
			break;
		}
		
		return(pos);
	}
	
		
	
	this.z_________SET_ELEMENT_PROPS_______ = function(){}
		
	
	/**
	 * 
	 * zoom image inside parent
	 * the mouse point is page offset position, can be null
	 * return true if zoomed and false if not zoomed
	 */
	this.zoomImageInsideParent = function(objImage, zoomIn, step, point, scaleMode, maxZoomRatio, objPadding){
		
		if(!step)
			var step = 1.2;
		
		if(!scaleMode)
			var scaleMode = "fit";
		
		var zoomRatio = step;
		
		var objParent = objImage.parent();		
		
		var objSize = t.getElementSize(objImage);
		var objOriginalSize = t.getImageOriginalSize(objImage);
		
		
		var isMouseInside = false;
		var newHeight,newWidth, panX = 0, panY = 0, newX, newY,panOrientX = 0, panOrientY = 0;
		
		if(!point){
			isMouseInside = false;
		}else{
			var pointImg = t.getMouseElementPoint(point, objImage);				
			isMouseInside = t.isPointInsideElement(pointImg, objSize);
			
			//if mouse point outside image, set orient to image center
			panOrientX = pointImg.x;
			panOrientY = pointImg.y;
		}
				
		if(isMouseInside == false){
			var imgCenterPoint = t.getElementCenterPoint(objImage);
			panOrientX = imgCenterPoint.x;
			panOrientY = imgCenterPoint.y;
		}
						
		//zoom:
		if(zoomIn == true){		//zoom in
			
			newHeight = objSize.height * zoomRatio;
			newWidth =  objSize.width * zoomRatio;
			
			if(panOrientX != 0)
				panX = -(panOrientX * zoomRatio - panOrientX);
			
			if(panOrientY != 0)
				panY = -(panOrientY * zoomRatio - panOrientY);
			
			
		}else{		//zoom out
			
			newHeight = objSize.height / zoomRatio;
			newWidth =  objSize.width / zoomRatio;
			
			var objScaleData = t.getImageInsideParentData(objParent, objOriginalSize.width, objOriginalSize.height, scaleMode, objPadding);
			
			//go back to original size
			if(newWidth < objScaleData.imageWidth){
				
				t.scaleImageFitParent(objImage, objOriginalSize.width, objOriginalSize.height, scaleMode, objPadding);
				return(true);
			}
			
			if(isMouseInside == true){
				if(panOrientX != 0)
					panX = -(panOrientX / zoomRatio - panOrientX);
				
				if(panOrientY != 0)			
					panY = -(panOrientY / zoomRatio - panOrientY);
			}
			
		}
		
		//check max zoom ratio, ix exeeded, abort
		if(maxZoomRatio){
			var expectedZoomRatio = 1;
			if(objOriginalSize.width != 0)
				expectedZoomRatio = newWidth / objOriginalSize.width;
			
			if(expectedZoomRatio > maxZoomRatio)
				return(false);
		}
		
		//resize the element
		t.setElementSize(objImage, newWidth, newHeight);
		
		//set position:
		
		//if zoom out and mouse point not inside image, 
		//get the image to center
		if(zoomIn == false && isMouseInside == false){
			var posCenter = t.getElementCenterPosition(objImage);
			newX = posCenter.left;
			newY = posCenter.top;
		}else{
			
			newX = objSize.left + panX;
			newY = objSize.top + panY;
		}
		
		t.placeElement(objImage, newX, newY);
		
		return(true);
	}
	

	
	/**
	 * place some element to some position
	 * if the left / top is offset text (left , center, right / top, middle , bottom)
	 * then put it in parent by the offset.
	 */
	this.placeElement = function(element, left, top, offsetLeft, offsetTop, objParent){
		
		
		if(jQuery.isNumeric(left) == false || jQuery.isNumeric(top) == false){
			
			if(!objParent)
				var objParent = element.parent();
			
			var elementSize = t.getElementSize(element);
			var parentSize = t.getElementSize(objParent);
		}
		
		//select left position
		if(jQuery.isNumeric(left) == false){
			
			switch(left){
				case "left":
					left = 0;
					if(offsetLeft)
						left += offsetLeft;
				break;
				case "center":
					left = Math.round((parentSize.width - elementSize.width) / 2);
					if(offsetLeft)
						left += offsetLeft;
				break;
				case "right":
					left = parentSize.width - elementSize.width;
					if(offsetLeft)
						left -= offsetLeft;
				break;
			}
		}
		
		//select top position
		if(jQuery.isNumeric(top) == false){
			
			switch(top){
				case "top":
					top = 0;
					if(offsetTop)
						top += offsetTop;
				break;
				case "middle":
				case "center":
					top = Math.round((parentSize.height - elementSize.height) / 2);
					if(offsetTop)
						top += offsetTop;
				break;
				case "bottom":
					top = parentSize.height - elementSize.height;
					if(offsetTop)
						top -= offsetTop;
				break;
			}
			
		}
		
		
		var objCss = {
				"position":"absolute",
				"margin":"0px"				
		};
		
		if(left !== null)
			objCss.left = left;
		
		if(top !== null)
			objCss.top = top;
				
		element.css(objCss);		
	}
	
	
	/**
	 * place element inside parent center.
	 * the element should be absolute position
	 */
	this.placeElementInParentCenter = function(element){
				
		t.placeElement(element, "center", "middle");
	}
	
	
	/**
	 * set element size and position
	 */
	this.setElementSizeAndPosition = function(element,left,top,width,height){
		
		var objCss = {
			"width":width+"px",
			"height":height+"px",
			"left":left+"px",
			"top":top+"px",
			"position":"absolute",
			"margin":"0px"
		}
		
		element.css(objCss);
	}
	
	/**
	 * set widht and height of the element
	 */
	this.setElementSize = function(element, width, height){
		
	    var objCss = {
			"width":width+"px"
		}
	    
	    if(height !== null && typeof height != "undefined")
	    	objCss["height"] = height+"px"
	    
		element.css(objCss);	
	}
	
	
	/**
	 * clone element size and position
	 */
	this.cloneElementSizeAndPos = function(objSource, objTarget, isOuter, offsetX, offsetY){
		
		var objSize = objSource.position();
		
		if(objSize == undefined){
			throw new Error("Can't get size, empty element");
		}
		
		if(isOuter === true){
			objSize.height = objSource.outerHeight();
			objSize.width = objSource.outerWidth();
		}else{
			objSize.height = objSource.height();
			objSize.width = objSource.width();
		}
		
		objSize.left = Math.round(objSize.left);
		objSize.top = Math.round(objSize.top);
		
		if(offsetX)
			objSize.left += offsetX;
		
		if(offsetY)
			objSize.top += offsetY;
		
		t.setElementSizeAndPosition(objTarget, objSize.left, objSize.top, objSize.width, objSize.height);
	}

	
	/**
	 * place image inside parent, scale it by the options
	 * and scale it to fit the parent.
	 * scaleMode: fit, down, fill
	 */
	this.placeImageInsideParent = function(urlImage, objParent, originalWidth, originalHeight, scaleMode, objPadding){
		var obj = t.getImageInsideParentData(objParent, originalWidth, originalHeight, scaleMode, objPadding);
		
		//set html image:
		var htmlImage = "<img";
		
		if(obj.imageWidth !== null){
			htmlImage += " width = '" + obj.imageWidth + "'";
			obj.style += "width:" + obj.imageWidth + ";";
		}
		
		if(obj.imageHeight != null){
			
			if(obj.imageHeight == "100%"){
				htmlImage += " height = '" + obj.imageHeight+"'";
				obj.style += "height:" + obj.imageHeight+";";				
			}else{
				htmlImage += " height = '" + obj.imageHeight + "'";
				obj.style += "height:" + obj.imageHeight + "px;";				
			}
			
		}
		
		if(obj.imageTop !== null)
			obj.style += "top:"+obj.imageTop+"px;";
		
		if(obj.imageLeft !== null){
			obj.style += "left:"+obj.imageLeft+"px;";
		}
		
		urlImage = t.escapeDoubleSlash(urlImage);
		
		htmlImage += " style='"+obj.style+"'";
		htmlImage += " src=\""+urlImage+"\"";
		htmlImage += ">";
				
		objParent.html(htmlImage);
		
		//return the image just created
		var objImage = objParent.children("img");
		
		return(objImage);
	}
	
	
	/**
	 * scale image to fit parent, and place it into parent
	 * parent can be width , height, or object
	 */	
	this.scaleImageCoverParent = function(objImage, objParent, pHeight){
		
		if(typeof objParent == "number"){
			var parentWidth = objParent;
			var parentHeight = pHeight;
		}else{
			var parentWidth = objParent.outerWidth();
			var parentHeight = objParent.outerHeight();
		}
		
		var objOriginalSize = t.getImageOriginalSize(objImage);

		var imageWidth = objOriginalSize.width;
		var imageHeight = objOriginalSize.height;
		
		var ratio = imageWidth / imageHeight;
		
		var fitHeight = parentHeight;
		var fitWidth = fitHeight * ratio;
		var posy = 0, posx = 0;
		
		if(fitWidth < parentWidth){
			fitWidth = parentWidth;
			fitHeight = fitWidth / ratio;
			
			//center y position
			posx = 0;
			posy = Math.round((fitHeight - parentHeight) / 2 * -1);
		}else{	//center x position
			posy = 0;
			posx = Math.round((fitWidth - parentWidth) / 2 * -1);
		}
		
		fitWidth = Math.round(fitWidth);
		fitHeight = Math.round(fitHeight);
		
		objImage.css({"width":fitWidth+"px",
					  "height":fitHeight+"px",
					  "left":posx+"px",
					  "top":posy+"px"});		
	}


	
	
	/**
	 * resize image to fit the parent, scale it by the options
	 * scaleMode: fit, down, fill
	 */
	this.scaleImageFitParent = function(objImage, originalWidth, originalHeight, scaleMode, objPadding){
		
		var objParent = objImage.parent();
		
		var obj = t.getImageInsideParentData(objParent, originalWidth, originalHeight, scaleMode, objPadding);
		
		var updateCss = false;
		
		var objCss = {};
		
		if(obj.imageWidth !== null){
			updateCss = true
			objImage.removeAttr("width");
			objCss["width"] = obj.imageWidth+"px";
		}
		
		if(obj.imageHeight != null){
			updateCss = true
			objImage.removeAttr("height");
			objCss["height"] = obj.imageHeight+"px";
		}
		
		if(obj.imageTop !== null){
			updateCss = true;			
			objCss.top = obj.imageTop+"px";
		}
		
		if(obj.imageLeft !== null){
			updateCss = true;		
			objCss.left = obj.imageLeft+"px";
		}
			
		if(updateCss == true){
			
			objCss.position = "absolute";
			objCss.margin = "0px 0px";
			
			objImage.css(objCss);			
		}
		
		
		return(obj);
	}
	
	
	/**
	 * scale image by height
	 */
	this.scaleImageByHeight = function(objImage, height, originalWidth, originalHeight){
		
		var objOriginalSize = t.getImageOriginalSize(objImage, originalWidth, originalHeight);
		
		var ratio = objOriginalSize.width / objOriginalSize.height;
		var width = Math.round(height * ratio);
		height = Math.round(height);
		
		t.setElementSize(objImage, width, height);
	}

	
	/**
	 * scale image by height
	 */
	this.scaleImageByWidth = function(objImage, width, originalWidth, originalHeight){
		
		var objOriginalSize = t.getImageOriginalSize(objImage, originalWidth, originalHeight);
		
		var ratio = objOriginalSize.width / objOriginalSize.height;
		
		var height = Math.round(width / ratio);
		width = Math.round(width);
		
		t.setElementSize(objImage, width, height);
		
	}
	
	
	/**
	 * scale image to exact size in parent, by setting image size and padding
	 */
	this.scaleImageExactSizeInParent = function(objImage, originalWidth, originalHeight, exactWidth, exactHeight, scaleMode){
		
		var objParent = objImage.parent();
		var parentSize = t.getElementSize(objParent);
		
		if(parentSize.width < exactWidth)
			exactWidth = parentSize.width;
		
		if(parentSize.height < exactHeight)
			exactHeight = parentSize.height;
		
		var obj = t.getImageInsideParentData(null, originalWidth, originalHeight, scaleMode, null, exactWidth, exactHeight);
		
		var imageWidth = exactWidth;
		var imageHeight = exactHeight;
		
		var paddingLeft = obj.imageLeft;
		var paddingRight = obj.imageLeft;
		var paddingTop = obj.imageTop;
		var paddingBottom = obj.imageTop;
		var imageLeft = Math.round((parentSize.width - exactWidth) / 2);
		var imageTop = Math.round((parentSize.height - exactHeight) / 2);
		
		var totalWidth = obj.imageWidth + paddingLeft + paddingRight;
		var diff = exactWidth - totalWidth;
		if(diff != 0)
			paddingRight += diff;
		
		var totalHeight = obj.imageHeight + paddingTop + paddingBottom;
		
		var diff = exactHeight - totalHeight;
		if(diff != 0)
			paddingBottom += diff;
		
		//update css:
		objImage.removeAttr("width");
		objImage.removeAttr("height");

		var objCss = {
				position: "absolute",
				margin: "0px 0px"
		};
		
		objCss["width"] = imageWidth+"px";
		objCss["height"] = imageHeight+"px";
		objCss["left"] = imageLeft+"px";
		objCss["top"] = imageTop+"px";
		objCss["padding-left"] = paddingLeft+"px";
		objCss["padding-top"] = paddingTop+"px";
		objCss["padding-right"] = paddingRight+"px";
		objCss["padding-bottom"] = paddingBottom+"px";
				
		objImage.css(objCss);
		
		//return size object
		
		var objReturn = {};
		objReturn["imageWidth"] = imageWidth;
		objReturn["imageHeight"] = imageHeight;
		return(objReturn);
	}
	
	
	/**
	 * show some element and make opacity:1
	 */
	this.showElement = function(element, element2, element3){
		
		element.show().fadeTo(0,1);
		
		if(element2)
			element2.show().fadeTo(0,1);
			
		if(element3)
				element3.show().fadeTo(0,1);
			
	}
	
		
	this.z_________GALLERY_RELATED_FUNCTIONS_______ = function(){}
	
	/**
	 * disable button
	 */
	this.disableButton = function(objButton, className){
		if(!className)
			var className = "ug-button-disabled";
		
		if(t.isButtonDisabled(objButton, className) == false)		
			objButton.addClass(className);		
	}

	
	/**
	 * convert custom prefix options
	 * prefix - the prefix.
	 * base - after the prefix text. example lightbox_slider_option (lightbox - prefix, slider - base)
	 */
	this.convertCustomPrefixOptions = function(objOptions, prefix, base){
			
		if(!prefix)
			return(objOptions);
		
		var modifiedOptions = {};
		
		jQuery.each(objOptions, function(key, option){
			
			if(key.indexOf(prefix + "_"+base+"_") === 0){
				var newKey = key.replace(prefix+"_"+base+"_", base+"_");
				modifiedOptions[newKey] = option;
			}else{
				modifiedOptions[key] = option;
			}
			
		});
		
		return(modifiedOptions);
	}
	
	
	/**
	 * enable button
	 */
	this.enableButton = function(objButton, className){
		if(!className)
			var className = "ug-button-disabled";
		
		if(t.isButtonDisabled(objButton, className) == true)		
			objButton.removeClass(className);
	}
	
	
	/**
	 * check if some buggon disabled
	 */
	this.isButtonDisabled = function(objButton, className){
		if(!className)
			var className = "ug-button-disabled";
		
		if(objButton.hasClass(className))
			return(true);
		
		return(false);
	}
	
	

	this.z_________MATH_FUNCTIONS_______ = function(){}
	
	/**
	 * 
	 * normalize the value for readable "human" setting value.
	 */
	this.normalizeSetting = function(realMin, realMax, settingMin, settingMax, value, fixBounds){
		if(!fixBounds)
			var fixBounds = false;
		
		var ratio = (value - settingMin)  / (settingMax - settingMin);
		value = realMin + (realMax - realMin) * ratio;
		
		if(fixBounds == true){
			if(value < realMin)
				value = realMin;
			
			if(value > realMax)
				value = realMax;
		}
		
		return(value);
	}

	
	/**
	 * 
	 * get "real" setting from normalized setting
	 */
	this.getNormalizedValue = function(realMin, realMax, settingMin, settingMax, realValue){
		
		var ratio = (realValue - realMin)  / (realMax - realMin);
		realValue = realMin + (settingMax - settingMin) * ratio;
		
		return(realValue);
	}
	
	
	/**
	 * get distance between 2 points
	 */
	this.getDistance = function(x1,y1,x2,y2) {
		
		var distance = Math.round(Math.sqrt(Math.abs(((x2-x1)*(x2-x1)) + ((y2-y1)*(y2-y1)))));
		
		return distance;
	}
	
	
	/**
	 * get center point of the 2 points
	 */
	this.getMiddlePoint = function(x1,y1,x2,y2){
		var output = {}
		output.x = x1 + Math.round((x2 - x1) / 2);
		output.y = y1 + Math.round((y2 - y1) / 2);
		
		return(output);
	}
	
	
	/**
	 * get number of items in space width gap
	 * even item sizes
	 * by lowest
	 */
	this.getNumItemsInSpace = function(spaceSize, itemsSize, gapSize){
		var numItems = Math.floor((spaceSize + gapSize) / (itemsSize + gapSize));
		return(numItems);
	}

	/**
	 * get number of items in space width gap
	 * even item sizes
	 * by Math.round
	 */
	this.getNumItemsInSpaceRound = function(spaceSize, itemsSize, gapSize){
		var numItems = Math.round((spaceSize + gapSize) / (itemsSize + gapSize));
		return(numItems);
	}

	/**
	 * get space (width in carousel for example) by num items, item size, and gap size
	 */
	this.getSpaceByNumItems = function(numItems, itemSize, gapSize){
		var space = numItems * itemSize + (numItems-1) * gapSize;
		return(space);
	}
	

	/**
	 * get item size by space and gap
	 */
	this.getItemSizeInSpace = function(spaceSize, numItems, gapSize){
		var itemSize = Math.floor((spaceSize - (numItems-1) * gapSize) / numItems);
		
		return(itemSize);
	}
	
	
	/**
	 * get column x pos with even column sizes, start from 0
	 */
	this.getColX = function(col, colWidth, colGap){
		
		var posx = col * (colWidth + colGap);
		
		return posx;
	}
	

	/**
	 * get column number by index
	 */
	this.getColByIndex = function(numCols, index){
		var col = index % numCols;
		return(col);
	}
	
	
	/**
	 * get col and row by index
	 */
	this.getColRowByIndex = function(index, numCols){
		
		var row = Math.floor(index / numCols);
		var col = Math.floor(index % numCols);
		
		return({col:col,row:row});
	}
	
	
	/**
	 * get index by row, col, numcols
	 */
	this.getIndexByRowCol = function(row, col, numCols){
		
		if(row < 0)
			return(-1);
		
		if(col < 0)
			return(-1);
		
		var index = row * numCols + col;
		return(index);
	}
	
	/**
	 * get previous row item in the same column
	 */
	this.getPrevRowSameColIndex = function(index, numCols){
		var obj = t.getColRowByIndex(index, numCols);
		var prevIndex = t.getIndexByRowCol(obj.row-1, obj.col, numCols);
		return(prevIndex);
	}
	
	/**
	 * get next row item in the same column
	 */
	this.getNextRowSameColIndex = function(index, numCols){
		var obj = t.getColRowByIndex(index, numCols);
		var nextIndex = t.getIndexByRowCol(obj.row+1, obj.col, numCols);
		return(nextIndex);
	}
	
	
	this.z_________DATA_FUNCTIONS_______ = function(){}
	
	/**
	 * set data value
	 */
	this.setGlobalData = function(key, value){
		
		jQuery.data(document.body, key, value);
		
	}
	
	/**
	 * get global data
	 */
	this.getGlobalData = function(key){
		
		var value = jQuery.data(document.body, key);
		
		return(value);
	}
	
	this.z_________EVENT_DATA_FUNCTIONS_______ = function(){}

	
	/**
	 * handle scroll top, return if scroll mode or not
	 */
	this.handleScrollTop = function(storedEventID){
		
		if(t.isTouchDevice() == false)
			return(null);
		
		var objData = t.getStoredEventData(storedEventID);
		
		var horPass = 15;
		var vertPass = 15;
		
		//check if need to set some movement
		if(objData.scrollDir === null){
			
			if(Math.abs(objData.diffMouseX) > horPass)
				objData.scrollDir = "hor";
			else
				if(Math.abs(objData.diffMouseY) > vertPass && Math.abs(objData.diffMouseY) > Math.abs(objData.diffMouseX) ){
					objData.scrollDir = "vert";
					objData.scrollStartY = objData.lastMouseClientY;
					objData.scrollOrigin = jQuery(document).scrollTop();
					
					g_temp.dataCache[storedEventID].scrollStartY = objData.lastMouseClientY;
					g_temp.dataCache[storedEventID].scrollOrigin = objData.scrollOrigin;
				}
			
			//update scrollDir
			g_temp.dataCache[storedEventID].scrollDir = objData.scrollDir;
		}
				
		if(objData.scrollDir !== "vert")
			return(objData.scrollDir);
		
		
		var currentScroll = jQuery(document).scrollTop();
		
		var scrollPos = objData.scrollOrigin - (objData.lastMouseClientY - objData.scrollStartY);
		
		if(scrollPos >= 0)
			jQuery(document).scrollTop(scrollPos);
		
		return(objData.scrollDir);
	}

	
	/**
	 * return true / false if was vertical scrolling
	 */
	this.wasVerticalScroll = function(storedEventID){
		var objData = t.getStoredEventData(storedEventID);
		
		if(objData.scrollDir === "vert")
			return(true);
		
		return(false);
	}
	
	
	/**
	 * store event data
	 */
	this.storeEventData = function(event, id, addData){
				
		var mousePos = t.getMousePosition(event);
		var time = jQuery.now();
		
		var obj = {
				startTime: time,
				lastTime: time,
				startMouseX: mousePos.pageX,
				startMouseY: mousePos.pageY,
				lastMouseX: mousePos.pageX,
				lastMouseY: mousePos.pageY,
				
				startMouseClientY: mousePos.clientY,
				lastMouseClientY: mousePos.clientY,
				
				scrollTop: jQuery(document).scrollTop(),
				scrollDir: null
		};
		
		if(addData)
			obj = jQuery.extend(obj, addData);
		
		g_temp.dataCache[id] = obj;
		
	}
	
	
	/**
	 * update event data with last position
	 */
	this.updateStoredEventData = function(event, id, addData){
		
		if(!g_temp.dataCache[id])
			throw new Error("updateEventData error: must have stored cache object");
		
		var obj = g_temp.dataCache[id];
		
		var mousePos = t.getMousePosition(event);
		obj.lastTime = jQuery.now();
		
		if(mousePos.pageX !== undefined){
			obj.lastMouseX = mousePos.pageX;
			obj.lastMouseY = mousePos.pageY;
			obj.lastMouseClientY = mousePos.clientY;
		}
		
		if(addData)
			obj = jQuery.extend(obj, addData);
		
		g_temp.dataCache[id] = obj;
	}
	
	/**
	 * get stored event data
	 */
	this.getStoredEventData = function(id, isVertical){
		if(!g_temp.dataCache[id])
			throw new Error("updateEventData error: must have stored cache object");
		
		var obj = g_temp.dataCache[id];
		
		obj.diffMouseX = obj.lastMouseX - obj.startMouseX;
		obj.diffMouseY = obj.lastMouseY - obj.startMouseY;
		
		obj.diffMouseClientY = obj.lastMouseClientY - obj.startMouseClientY;
		
		obj.diffTime = obj.lastTime - obj.startTime;
		
		//get mouse position according orientation
		if(isVertical === true){
			obj.startMousePos = obj.lastMouseY;
			obj.lastMousePos = obj.lastMouseY;
			obj.diffMousePos = obj.diffMouseY;
		}else{
			obj.startMousePos = obj.lastMouseX;
			obj.lastMousePos = obj.lastMouseX;
			obj.diffMousePos = obj.diffMouseX;			
		}
		
		return(obj);
	}
	
	/**
	 * return if click event approved according the done motion
	 */
	this.isApproveStoredEventClick = function(id, isVertical){
		
		if(!g_temp.dataCache[id])
			return(true);
		
		var objData = t.getStoredEventData(id, isVertical);
		
		var passedDistanceAbs = Math.abs(objData.diffMousePos);
		
		if(objData.diffTime > 400)
			return(false);
		
		if(passedDistanceAbs > 30)
			return(false);
		
		return(true);
		
	}
	
	
	/**
	 * clear stored event data
	 */
	this.clearStoredEventData = function(id){
		g_temp.dataCache[id] = null;
	}

	this.z_________CHECK_SUPPORT_FUNCTIONS_______ = function(){}
	
	
	
	/**
	 * is canvas exists in the browser
	 */
	this.isCanvasExists = function(){
		
		var canvas = jQuery('<canvas width="500" height="500" > </canvas>')[0];
		
		if(typeof canvas.getContext == "function")
			return(true);
		
		return(false);
	}
	
	/**
	 * tells if vertical scrollbar exists
	 */
	this.isScrollbarExists = function(){
		var hasScrollbar = window.innerWidth > document.documentElement.clientWidth;
		return(hasScrollbar);
	}
	
	/**
	 * check if this device are touch enabled
	 */
	this.isTouchDevice = function(){
		
		  //get from cache
		  if(g_temp.isTouchDevice !== -1)
			  return(g_temp.isTouchDevice);
		  
		  try{ 
			  document.createEvent("TouchEvent"); 
			  g_temp.isTouchDevice = true; 
		  }
		  catch(e){ 
			  g_temp.isTouchDevice = false; 
		  }
		  
		  return(g_temp.isTouchDevice);
	}
	
	
	
	/**
	 * check if 
	 */
	this.isRgbaSupported = function(){
		
		if(g_temp.isRgbaSupported !== -1)
			return(g_temp.isRgbaSupported);
		
		var scriptElement = document.getElementsByTagName('script')[0];
		var prevColor = scriptElement.style.color;
		try {
			scriptElement.style.color = 'rgba(1,5,13,0.44)';
		} catch(e) {}
		var result = scriptElement.style.color != prevColor;
		scriptElement.style.color = prevColor;
		
		g_temp.isRgbaSupported = result;
		
		return result;
	}
	
	this.z_________GENERAL_FUNCTIONS_______ = function(){}
	
	
	/**
	 * check if current jquery version is more then minimal version
	 * version can be "1.8.0" for example
	 */
	this.checkMinJqueryVersion = function(version){

	   var arrCurrent = jQuery.fn.jquery.split('.');
       var arrMin = version.split('.');
	  
	  for (var i=0, len=arrCurrent.length; i<len; i++) {
		  
		  var numCurrent = parseInt(arrCurrent[i]);
	      var numMin = parseInt(arrMin[i]);

	      if(typeof arrMin[i] == "undefined")
	    	  return(true);
	      
	      if(numMin > numCurrent)
	    	  return(false);
	      
	      if(numCurrent > numMin)
	    	  return(true);
	  }
	  
	  
	  //if all equal then all ok
	  return true;
	}

	
	/**
	 * get css size parameter, like width. if % given, leave it, if number without px - add px.
	 */
	this.getCssSizeParam = function(sizeParam){
		if(jQuery.isNumeric(sizeParam))
			return(sizeParam + "px");
			
		return(sizeParam);
	}
	
	/**
	 * convert hex color to rgb color
	 */
	this.convertHexToRGB = function(hexInput, opacity){
	    
		var hex = hexInput.replace('#','');
	    if(hex === hexInput)
	    	return(hexInput);
	    
	    r = parseInt(hex.substring(0,2), 16);
	    g = parseInt(hex.substring(2,4), 16);
	    b = parseInt(hex.substring(4,6), 16);
	    result = 'rgba('+r+','+g+','+b+','+opacity+')';
	    return result;
	}	
	
	/**
	 * get timestamp to string
	 */
	this.timestampToString = function(stamp){
		
		var d = new Date(stamp);
		var str = d.getDate() + "/" + d.getMonth();
		str += " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds();
		
		return(str);
	}
	
	/**
	 * get touches array (if exists) from the event
	 */
	this.getArrTouches = function(event){
		
		var arrTouches = [];
				
		if(event.originalEvent && event.originalEvent.touches && event.originalEvent.touches.length > 0){			
			arrTouches = event.originalEvent.touches;
		}
		
		return(arrTouches);
	}
	
	/**
	 * extract touch positions from arrTouches
	 */
	this.getArrTouchPositions = function(arrTouches){
		
		var arrOutput = [];
		
		for(var i=0;i<arrTouches.length;i++){
			
			var point = {
				pageX:arrTouches[i].pageX,
				pageY:arrTouches[i].pageY
			};
			
			arrOutput.push(point);
		}
		
		return(arrOutput);
	}
	
	
	/**
	 * start time debug
	 */
	this.startTimeDebug = function(){
		g_temp.starTime = jQuery.now();
	}
	
	/**
	 * show time debug
	 */
	this.showTimeDebug = function(){
		
		var endTime = jQuery.now();
		var diffTime = endTime - g_temp.starTime;
		
		debugLine({"Time Passed": diffTime},true);
	}
	
		
	/**
	 * put progress indicator to some parent by type
	 * return the progress indicator object
	 */
	this.initProgressIndicator = function(type, options, objParent){
		
		//check canvas compatability
		if(type != "bar" && t.isCanvasExists() == false)
			type = "bar";
		
		//put the progress indicator
		switch(type){
			case "bar":
				var g_objProgress = new UGProgressBar();		
				g_objProgress.putHidden(objParent, options);
			break;
			default:
			case "pie":
				var g_objProgress = new UGProgressPie();		
				g_objProgress.putHidden(objParent, options);
			break;			
			case "pie2":
				options.type_fill = true;
				
				var g_objProgress = new UGProgressPie();				
				g_objProgress.putHidden(objParent, options);
			break;			
		}
		
		return(g_objProgress);
	}
	
	
	/**
	 * add to button ug-nohover class on ipad
	 * need to be processed in css
	 */
	this.setButtonMobileReady = function(objButton){
		
		objButton.on("touchstart",function(event){
			//event.preventDefault();
			jQuery(this).addClass("ug-nohover");
		});
		
		objButton.on("mousedown touchend",function(event){
			
			//debugLine("button touchend",true,true);
			//event.preventDefault();
			event.stopPropagation();
			event.stopImmediatePropagation();
			
			//debugLine(event.type, true, true);
			
			return(false);
		});
		
	}
	
	
	/**
	 * register gallery theme
	 */
	this.registerTheme = function(themeName){
		
		g_temp.arrThemes.push(themeName);
	}
	
	/**
	 * get themes array
	 */
	this.getArrThemes = function(){
		
		return(g_temp.arrThemes);
	}
	
	
	/**
	 * check if theme exists
	 */
	this.isThemeRegistered = function(theme){
	
		if(jQuery.inArray(theme, g_temp.arrThemes) !== -1)
			return(true);
		
		return(false);
	}
	
	/**
	 * get first registered theme name
	 */
	this.getFirstRegisteredTheme = function(){
		if(g_temp.arrThemes.length == 0)
			return("");
		var themeName = g_temp.arrThemes[0];
		
		return(themeName);
	}

	
	
	
	/**
	 * function checks if enought time passsed between function calls.
	 * good for filtering same time events
	 */
	this.isTimePassed = function(handlerName, timeLimit){
		
		if(!timeLimit)
			var timeLimit = 100;
		
		var currentTime = jQuery.now();
		if(g_temp.timeCache.hasOwnProperty(handlerName) == false)
			lastTime = 0;
		else
			lastTime = g_temp.timeCache[handlerName];
		
		var diffTime = currentTime - lastTime;
		
		g_temp.timeCache[handlerName] = currentTime;
		
		//debugLine(diffTime,true,true);
		
		if(diffTime <= timeLimit)
			return(false);
				
		return(true);
	}
	
	
	/**
	 * check if continious event is over like resize
	 */
	this.whenContiniousEventOver = function(handlerName, onEventOver, timeLimit){
		
		if(!timeLimit)
			var timeLimit = 300;
		
		
		if(g_temp.timeCache.hasOwnProperty(handlerName) == true && g_temp.timeCache[handlerName] != null){
			clearTimeout(g_temp.timeCache[handlerName]);
			g_temp.timeCache[handlerName] = null;			
		}
		
		g_temp.timeCache[handlerName] = setTimeout(onEventOver, timeLimit);
	}
	
	
	/**
	 * validate click and touchstart events. 
	 * if click comes after touchstart, return false.
	 */
	this.validateClickTouchstartEvent = function(eventType){
		
		var returnVal = true;
		
		var diff = jQuery.now() - g_temp.lastEventTime;
		
		//debugLine({lastType:g_temp.lastEventType, diff:diff},true, true);
		
		if(eventType == "click" && g_temp.lastEventType == "touchstart" && diff < 1000)
			returnVal = false;
		
		g_temp.lastEventTime = jQuery.now();
		g_temp.lastEventType = eventType;
		
		return(returnVal);
	}
	
	/**
	 * add some class on hover (hover event)
	 */
	this.addClassOnHover = function(element,className){
		if(!className)
			var className = "ug-button-hover";
		
		element.hover(function(){
			jQuery(this).addClass(className);
		},function(){				
			jQuery(this).removeClass(className);
		});
		
	}
	
	/**
	 * destroy hover effect on elements
	 */
	this.destroyButton = function(element){
		element.off("mouseenter");
		element.off("mouseleave");
		element.off("click");
		element.off("touchstart");
		element.off("touchend");
		element.off("mousedown");
		element.off("tap");
	}
	
	/**
	 * set button on click event, advanced
	 */
	this.setButtonOnClick = function(objButton, onClickFunction){
		
		t.setButtonMobileReady(objButton);
		
		objButton.on("click touchstart", function(event){
			
			objThis = jQuery(this);
						
			event.stopPropagation();
			event.stopImmediatePropagation();
			
			if(t.validateClickTouchstartEvent(event.type) == false)
				return(true);
			
			onClickFunction(objThis, event);
		});
		
	}
	
	
	/**
	 * set button on tap
	 */
	this.setButtonOnTap = function(objButton, onClickFunction){
		
		//set the event
		objButton.on("tap",onClickFunction);
		
		//set tap event trigger
		if(t.isTouchDevice() == false){
			
			objButton.on("click", function(event){
				var objElement = jQuery(this);
				
				if(t.validateClickTouchstartEvent(event.type) == false)
					return(true);
				
				objElement.trigger("tap");
			});
			
		}else{
			
			//set tap event
			objButton.on("touchstart",function(event){
				
				var objElement = jQuery(this);
				
				objElement.addClass("ug-nohover");
							
				g_temp.lastTouchStartElement = jQuery(this);
				g_temp.lastEventTime = jQuery.now();
			});
			
			objButton.on("touchend", function(event){
				var objElement = jQuery(this);
				
				//validate same element
				if(objElement.is(g_temp.lastTouchStartElement) == false)
					return(true);
				
				//validate time passed
				if(!g_temp.lastEventTime)
					return(true);
				
				var timePassed = jQuery.now() - g_temp.lastEventTime;
				if(timePassed > g_temp.touchThreshold)
					return(true);
				
				objElement.trigger("tap");
			});
			
		}
		
		
	}
	
	
	/**
	 * load javascript dynamically
	 */
	this.loadJs = function(url, addProtocol){
		
		if(addProtocol === true)
			url = location.protocol + "//" + url;
		
		var tag = document.createElement('script');
		tag.src = url;
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);		
	}
	
	/**
	 * load css dymanically
	 */
	this.loadCss = function(url, addProtocol){
		if(addProtocol === true)
			url = location.protocol + "//" + url;
		
		var tag=document.createElement("link");
		  tag.setAttribute("rel", "stylesheet");
		  tag.setAttribute("type", "text/css");
		  tag.setAttribute("href", url);
		  
		document.getElementsByTagName("head")[0].appendChild(tag);
	}
	
	/**
	 * add event listener with old browsers fallback
	 */
	 this.addEvent = function(elem, event, func ) {
		 
		 if (typeof (elem.addEventListener) != "undefined") {
			 elem.addEventListener(event, func, false);
		    } else if (elem.attachEvent) {
		    	elem.attachEvent('on' + event, func);
		  }
		 
	  }




	/**
	 * fire event where all images are loaded
	 */
	this.checkImagesLoaded = function(objImages, onComplete, onProgress){
		
		var arrImages = [];
		var counter = 0;
		var numImages = objImages.length;
		
		//if no images - exit
		if(numImages == 0 && onComplete){
			onComplete();
			return(false);
		}
		
		//nested function
		function checkComplete(image, isError){
			counter++;
						
			if(typeof onProgress == "function"){
				
				setTimeout(function(){
					onProgress(image, isError);
				});
			}
			
			if(counter == numImages && typeof onComplete == "function"){
				setTimeout(function(){
					onComplete();
				});
			}
			
		}


		//start a little later
		setTimeout(function(){
			
			//start the function
			for(var index=0;index < numImages; index++){
				var image = objImages[index];
				
				//arrImages.push(jQuery(image));
				if(image.naturalWidth !== undefined && image.naturalWidth !== 0){
					checkComplete(objImages[index], false);
				}
				else{
					var proxyImage = jQuery('<img/>');
					proxyImage.data("index", index);
					
					proxyImage.on("load", function(){
						var index = jQuery(this).data("index");
						checkComplete(objImages[index], false);
					});
					proxyImage.on("error", function(){
						var index = jQuery(this).data("index");
						checkComplete(objImages[index], true);
					});
					proxyImage.attr("src", image.src);			
				}
			}
			
		});
		
		
	}
	
	
	/**
	 * run the function when the element size will be not 0
	 */
	this.waitForWidth = function(element, func){
		var width = element.width();
		if(width != 0){
			func();
			return(false);
		}

		g_temp.handle = setInterval(function(){
			width = element.width();
			if(width != 0){
				clearInterval(g_temp.handle);
				func();				
			}

		}, 300);
		
	}
	
	/**
	 * shuffle (randomise) array
	 */
	this.arrayShuffle = function(arr){
		
		if(typeof arr != "object")
			return(arr);
			
	    for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
	    return arr;
	}

	
	/**
	 * get object length
	 */
	this.getObjectLength = function(object){
		var num = 0;
		for(var item in object)
			num++;
		return num;
	}

	/**
	 * normalize the percent, return always between 0 and 1
	 */
	this.normalizePercent = function(percent){
		
		if(percent < 0)
			percent = 0;
		
		if(percent > 1)
			percent = 1;
		
		return(percent);
	}
	
	
	/**
	 * strip tags from string
	 */
	this.stripTags = function(html){
		
		var text = html.replace(/(<([^>]+)>)/ig,"");
		
		return(text);
	}
	
	
	/**
	 * escape double slash
	 */
	this.escapeDoubleSlash = function(str){
		
		return str.replace('"','\"');
	}
	
	
	/**
	 * html entitles
	 */
	this.htmlentitles = function(html){
		var text = jQuery('<div/>').text(html).html();
		return(text);
	}
	
	
	this.z_________END_GENERAL_FUNCTIONS_______ = function(){}
	
}



var g_ugFunctions = new UGFunctions();


/** -------------- END UgFunctions class ---------------------*/



/** -------------- MouseWheel ---------------------*/

!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var s=t||window.event,a=h.call(arguments,1),u=0,r=0,d=0,f=0;if(t=e.event.fix(s),t.type="mousewheel","detail"in s&&(d=-1*s.detail),"wheelDelta"in s&&(d=s.wheelDelta),"wheelDeltaY"in s&&(d=s.wheelDeltaY),"wheelDeltaX"in s&&(r=-1*s.wheelDeltaX),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(r=-1*d,d=0),u=0===d?r:d,"deltaY"in s&&(d=-1*s.deltaY,u=d),"deltaX"in s&&(r=s.deltaX,0===d&&(u=-1*r)),0!==d||0!==r){if(1===s.deltaMode){var c=e.data(this,"mousewheel-line-height");u*=c,d*=c,r*=c}else if(2===s.deltaMode){var m=e.data(this,"mousewheel-page-height");u*=m,d*=m,r*=m}return f=Math.max(Math.abs(d),Math.abs(r)),(!l||l>f)&&(l=f,i(s,f)&&(l/=40)),i(s,f)&&(u/=40,r/=40,d/=40),u=Math[u>=1?"floor":"ceil"](u/l),r=Math[r>=1?"floor":"ceil"](r/l),d=Math[d>=1?"floor":"ceil"](d/l),t.deltaX=r,t.deltaY=d,t.deltaFactor=l,t.deltaMode=0,a.unshift(t,u,r,d),o&&clearTimeout(o),o=setTimeout(n,200),(e.event.dispatch||e.event.handle).apply(this,a)}}function n(){l=null}function i(e,t){return r.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120===0}var o,l,s=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],a="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],h=Array.prototype.slice;if(e.event.fixHooks)for(var u=s.length;u;)e.event.fixHooks[s[--u]]=e.event.mouseHooks;var r=e.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener)for(var n=a.length;n;)this.addEventListener(a[--n],t,!1);else this.onmousewheel=t;e.data(this,"mousewheel-line-height",r.getLineHeight(this)),e.data(this,"mousewheel-page-height",r.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=a.length;e;)this.removeEventListener(a[--e],t,!1);else this.onmousewheel=null},getLineHeight:function(t){return parseInt(e(t)["offsetParent"in e.fn?"offsetParent":"parent"]().css("fontSize"),10)},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});

/** -------------- EASING FUNCTIONS ---------------------*/

(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],function($){return factory($)})}else if(typeof module==="object"&&typeof module.exports==="object"){exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){$.easing["jswing"]=$.easing["swing"];var pow=Math.pow,sqrt=Math.sqrt,sin=Math.sin,cos=Math.cos,PI=Math.PI,c1=1.70158,c2=c1*1.525,c3=c1+1,c4=2*PI/3,c5=2*PI/4.5;function bounceOut(x){var n1=7.5625,d1=2.75;if(x<1/d1){return n1*x*x}else if(x<2/d1){return n1*(x-=1.5/d1)*x+.75}else if(x<2.5/d1){return n1*(x-=2.25/d1)*x+.9375}else{return n1*(x-=2.625/d1)*x+.984375}}$.extend($.easing,{def:"easeOutQuad",swing:function(x){return $.easing[$.easing.def](x)},easeInQuad:function(x){return x*x},easeOutQuad:function(x){return 1-(1-x)*(1-x)},easeInOutQuad:function(x){return x<.5?2*x*x:1-pow(-2*x+2,2)/2},easeInCubic:function(x){return x*x*x},easeOutCubic:function(x){return 1-pow(1-x,3)},easeInOutCubic:function(x){return x<.5?4*x*x*x:1-pow(-2*x+2,3)/2},easeInQuart:function(x){return x*x*x*x},easeOutQuart:function(x){return 1-pow(1-x,4)},easeInOutQuart:function(x){return x<.5?8*x*x*x*x:1-pow(-2*x+2,4)/2},easeInQuint:function(x){return x*x*x*x*x},easeOutQuint:function(x){return 1-pow(1-x,5)},easeInOutQuint:function(x){return x<.5?16*x*x*x*x*x:1-pow(-2*x+2,5)/2},easeInSine:function(x){return 1-cos(x*PI/2)},easeOutSine:function(x){return sin(x*PI/2)},easeInOutSine:function(x){return-(cos(PI*x)-1)/2},easeInExpo:function(x){return x===0?0:pow(2,10*x-10)},easeOutExpo:function(x){return x===1?1:1-pow(2,-10*x)},easeInOutExpo:function(x){return x===0?0:x===1?1:x<.5?pow(2,20*x-10)/2:(2-pow(2,-20*x+10))/2},easeInCirc:function(x){return 1-sqrt(1-pow(x,2))},easeOutCirc:function(x){return sqrt(1-pow(x-1,2))},easeInOutCirc:function(x){return x<.5?(1-sqrt(1-pow(2*x,2)))/2:(sqrt(1-pow(-2*x+2,2))+1)/2},easeInElastic:function(x){return x===0?0:x===1?1:-pow(2,10*x-10)*sin((x*10-10.75)*c4)},easeOutElastic:function(x){return x===0?0:x===1?1:pow(2,-10*x)*sin((x*10-.75)*c4)+1},easeInOutElastic:function(x){return x===0?0:x===1?1:x<.5?-(pow(2,20*x-10)*sin((20*x-11.125)*c5))/2:pow(2,-20*x+10)*sin((20*x-11.125)*c5)/2+1},easeInBack:function(x){return c3*x*x*x-c1*x*x},easeOutBack:function(x){return 1+c3*pow(x-1,3)+c1*pow(x-1,2)},easeInOutBack:function(x){return x<.5?pow(2*x,2)*((c2+1)*2*x-c2)/2:(pow(2*x-2,2)*((c2+1)*(x*2-2)+c2)+2)/2},easeInBounce:function(x){return 1-bounceOut(1-x)},easeOutBounce:bounceOut,easeInOutBounce:function(x){return x<.5?(1-bounceOut(1-2*x))/2:(1+bounceOut(2*x-1))/2}})});

/** -------------- JQuery Color Animations ---------------------*/

!function(r,n){
	if(typeof r.cssHooks == "undefined")		//error protection
		return(false);
	function t(r,n,t){var e=f[n.type]||{};return null==r?t||!n.def?null:n.def:(r=e.floor?~~r:parseFloat(r),isNaN(r)?n.def:e.mod?(r+e.mod)%e.mod:0>r?0:e.max<r?e.max:r)}function e(n){var t=l(),e=t._rgba=[];return n=n.toLowerCase(),h(u,function(r,o){var a,s=o.re.exec(n),i=s&&o.parse(s),u=o.space||"rgba";return i?(a=t[u](i),t[c[u].cache]=a[c[u].cache],e=t._rgba=a._rgba,!1):void 0}),e.length?("0,0,0,0"===e.join()&&r.extend(e,a.transparent),t):a[n]}function o(r,n,t){return t=(t+1)%1,1>6*t?r+(n-r)*t*6:1>2*t?n:2>3*t?r+(n-r)*(2/3-t)*6:r}var a,s="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",i=/^([\-+])=\s*(\d+\.?\d*)/,u=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(r){return[r[1],r[2],r[3],r[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(r){return[2.55*r[1],2.55*r[2],2.55*r[3],r[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(r){return[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(r){return[parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16),parseInt(r[3]+r[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(r){return[r[1],r[2]/100,r[3]/100,r[4]]}}],l=r.Color=function(n,t,e,o){return new r.Color.fn.parse(n,t,e,o)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},f={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},p=l.support={},d=r("<p>")[0],h=r.each;d.style.cssText="background-color:rgba(1,1,1,.5)",p.rgba=d.style.backgroundColor.indexOf("rgba")>-1,h(c,function(r,n){n.cache="_"+r,n.props.alpha={idx:3,type:"percent",def:1}}),l.fn=r.extend(l.prototype,{parse:function(o,s,i,u){if(o===n)return this._rgba=[null,null,null,null],this;(o.jquery||o.nodeType)&&(o=r(o).css(s),s=n);var f=this,p=r.type(o),d=this._rgba=[];return s!==n&&(o=[o,s,i,u],p="array"),"string"===p?this.parse(e(o)||a._default):"array"===p?(h(c.rgba.props,function(r,n){d[n.idx]=t(o[n.idx],n)}),this):"object"===p?(o instanceof l?h(c,function(r,n){o[n.cache]&&(f[n.cache]=o[n.cache].slice())}):h(c,function(n,e){var a=e.cache;h(e.props,function(r,n){if(!f[a]&&e.to){if("alpha"===r||null==o[r])return;f[a]=e.to(f._rgba)}f[a][n.idx]=t(o[r],n,!0)}),f[a]&&r.inArray(null,f[a].slice(0,3))<0&&(f[a][3]=1,e.from&&(f._rgba=e.from(f[a])))}),this):void 0},is:function(r){var n=l(r),t=!0,e=this;return h(c,function(r,o){var a,s=n[o.cache];return s&&(a=e[o.cache]||o.to&&o.to(e._rgba)||[],h(o.props,function(r,n){return null!=s[n.idx]?t=s[n.idx]===a[n.idx]:void 0})),t}),t},_space:function(){var r=[],n=this;return h(c,function(t,e){n[e.cache]&&r.push(t)}),r.pop()},transition:function(r,n){var e=l(r),o=e._space(),a=c[o],s=0===this.alpha()?l("transparent"):this,i=s[a.cache]||a.to(s._rgba),u=i.slice();return e=e[a.cache],h(a.props,function(r,o){var a=o.idx,s=i[a],l=e[a],c=f[o.type]||{};null!==l&&(null===s?u[a]=l:(c.mod&&(l-s>c.mod/2?s+=c.mod:s-l>c.mod/2&&(s-=c.mod)),u[a]=t((l-s)*n+s,o)))}),this[o](u)},blend:function(n){if(1===this._rgba[3])return this;var t=this._rgba.slice(),e=t.pop(),o=l(n)._rgba;return l(r.map(t,function(r,n){return(1-e)*o[n]+e*r}))},toRgbaString:function(){var n="rgba(",t=r.map(this._rgba,function(r,n){return null==r?n>2?1:0:r});return 1===t[3]&&(t.pop(),n="rgb("),n+t.join()+")"},toHslaString:function(){var n="hsla(",t=r.map(this.hsla(),function(r,n){return null==r&&(r=n>2?1:0),n&&3>n&&(r=Math.round(100*r)+"%"),r});return 1===t[3]&&(t.pop(),n="hsl("),n+t.join()+")"},toHexString:function(n){var t=this._rgba.slice(),e=t.pop();return n&&t.push(~~(255*e)),"#"+r.map(t,function(r){return r=(r||0).toString(16),1===r.length?"0"+r:r}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(r){if(null==r[0]||null==r[1]||null==r[2])return[null,null,null,r[3]];var n,t,e=r[0]/255,o=r[1]/255,a=r[2]/255,s=r[3],i=Math.max(e,o,a),u=Math.min(e,o,a),l=i-u,c=i+u,f=.5*c;return n=u===i?0:e===i?60*(o-a)/l+360:o===i?60*(a-e)/l+120:60*(e-o)/l+240,t=0===l?0:.5>=f?l/c:l/(2-c),[Math.round(n)%360,t,f,null==s?1:s]},c.hsla.from=function(r){if(null==r[0]||null==r[1]||null==r[2])return[null,null,null,r[3]];var n=r[0]/360,t=r[1],e=r[2],a=r[3],s=.5>=e?e*(1+t):e+t-e*t,i=2*e-s;return[Math.round(255*o(i,s,n+1/3)),Math.round(255*o(i,s,n)),Math.round(255*o(i,s,n-1/3)),a]},h(c,function(e,o){var a=o.props,s=o.cache,u=o.to,c=o.from;l.fn[e]=function(e){if(u&&!this[s]&&(this[s]=u(this._rgba)),e===n)return this[s].slice();var o,i=r.type(e),f="array"===i||"object"===i?e:arguments,p=this[s].slice();return h(a,function(r,n){var e=f["object"===i?r:n.idx];null==e&&(e=p[n.idx]),p[n.idx]=t(e,n)}),c?(o=l(c(p)),o[s]=p,o):l(p)},h(a,function(n,t){l.fn[n]||(l.fn[n]=function(o){var a,s=r.type(o),u="alpha"===n?this._hsla?"hsla":"rgba":e,l=this[u](),c=l[t.idx];return"undefined"===s?c:("function"===s&&(o=o.call(this,c),s=r.type(o)),null==o&&t.empty?this:("string"===s&&(a=i.exec(o),a&&(o=c+parseFloat(a[2])*("+"===a[1]?1:-1))),l[t.idx]=o,this[u](l)))})})}),l.hook=function(n){var t=n.split(" ");h(t,function(n,t){r.cssHooks[t]={set:function(n,o){var a,s,i="";if("transparent"!==o&&("string"!==r.type(o)||(a=e(o)))){if(o=l(a||o),!p.rgba&&1!==o._rgba[3]){for(s="backgroundColor"===t?n.parentNode:n;(""===i||"transparent"===i)&&s&&s.style;)try{i=r.css(s,"backgroundColor"),s=s.parentNode}catch(u){}o=o.blend(i&&"transparent"!==i?i:"_default")}o=o.toRgbaString()}try{n.style[t]=o}catch(u){}}},r.fx.step[t]=function(n){n.colorInit||(n.start=l(n.elem,t),n.end=l(n.end),n.colorInit=!0),r.cssHooks[t].set(n.elem,n.start.transition(n.end,n.pos))}})},l.hook(s),r.cssHooks.borderColor={expand:function(r){var n={};return h(["Top","Right","Bottom","Left"],function(t,e){n["border"+e+"Color"]=r}),n}},a=r.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery);


/** -------------- SOME GENERAL FUNCTIONS ---------------------*/

/**
 * ismouseover function - check if the mouse over some object
 */
!function(t){function e(){try{var i=this===document?t(this):t(this).contents();}catch(error){return(false);}i.mousemove(function(e){t.mlp={x:e.pageX,y:e.pageY}}),i.find("iframe").on("load",e)}t.mlp={x:0,y:0},t(e),t.fn.ismouseover=function(){var e=!1;return this.eq(0).each(function(){var i=t(this).is("iframe")?t(this).contents().find("body"):t(this),n=i.offset();e=n.left<=t.mlp.x&&n.left+i.outerWidth()>t.mlp.x&&n.top<=t.mlp.y&&n.top+i.outerHeight()>t.mlp.y}),e}}(jQuery);



function UGThumbsGeneral(){
	
	var t = this, g_objThis = jQuery(t);
	
	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objects, g_objWrapper; 
	var g_arrItems, g_objStrip, g_objParent;
	var g_functions = new UGFunctions();
	var g_strip;
	var outer_options;
	
	this.type = {
			GET_THUMBS_ALL: "all",
			GET_THUMBS_RATIO: "ratio",
			GET_THUMBS_NO_RATIO: "no_ratio",
			GET_THUMBS_NEW:"new"
	};
	
	this.events = {		
		SETOVERSTYLE: "thumbmouseover",
		SETNORMALSTYLE: "thumbmouseout",
		SETSELECTEDSTYLE: "thumbsetselected",
		
		PLACEIMAGE: "thumbplaceimage",
		AFTERPLACEIMAGE: "thumb_after_place_image",
		IMAGELOADERROR: "thumbimageloaderror",
		THUMB_IMAGE_LOADED: "thumb_image_loaded"
	};
	
	var g_options = {
			thumb_width:88,								//thumb width
			thumb_height:50,							//thumb height
			thumb_fixed_size: true,						//true,false - fixed/dynamic thumbnail width
			thumb_resize_by: "height",					//set resize by width or height of the image in case of non fixed size, 
			
			thumb_border_effect:true,					//true, false - specify if the thumb has border
			thumb_border_width: 0,						//thumb border width
			thumb_border_color: "#000000",				//thumb border color
			thumb_over_border_width: 0,					//thumb border width in mouseover state
			thumb_over_border_color: "#d9d9d9",			//thumb border color in mouseover state
			thumb_selected_border_width: 1,				//thumb width in selected state
			thumb_selected_border_color: "#d9d9d9",		//thumb border color in selected state
			
			thumb_round_corners_radius:0,				//thumb border radius
			
			thumb_color_overlay_effect: true,			//true,false - thumb color overlay effect, release the overlay on mouseover and selected states
			thumb_overlay_color: "#000000",				//thumb overlay color
			thumb_overlay_opacity: 0.4,					//thumb overlay color opacity
			thumb_overlay_reverse:false,				//true,false - reverse the overlay, will be shown on selected state only
			
			thumb_image_overlay_effect: false,			//true,false - images orverlay effect on normal state only
			thumb_image_overlay_type: "bw",				//bw , blur, sepia - the type of image effect overlay, black and white, sepia and blur.
			
			thumb_transition_duration: 200,				//thumb effect transition duration
			thumb_transition_easing: "easeOutQuad",		//thumb effect transition easing
			
			thumb_show_loader: true,					//show thumb loader while loading the thumb
			thumb_loader_type: "dark",					//dark, light - thumb loader type
			
			thumb_wrapper_as_link: false,				//set thumb as link
			thumb_link_newpage: false					//set the link to open newpage
		}
	
		var g_temp = {
			touchEnabled: false,
			num_thumbs_checking:0,
			customThumbs:false,
			funcSetCustomThumbHtml:null,
			isEffectBorder: false,
			isEffectOverlay: false,
			isEffectImage: false,
			colorOverlayOpacity: 1,
			thumbInnerReduce: 0,
			allowOnResize: true,		//allow onresize event
			classNewThumb: "ug-new-thumb"
		};
		
	
		var g_serviceParams = {			//service variables	
			timeout_thumb_check:100,
			thumb_max_check_times:600,	//60 seconds
			eventSizeChange: "thumb_size_change"
		};

		/**
		 * init the thumbs object
		 */
		this.init = function(gallery, customOptions){
			g_objects = gallery.getObjects();
			g_gallery = gallery;
			g_objGallery = jQuery(gallery);
			g_objWrapper = g_objects.g_objWrapper;
			g_arrItems = g_objects.g_arrItems;

			g_options = jQuery.extend(g_options, customOptions);

			//set effects vars:
			g_temp.isEffectBorder = g_options.thumb_border_effect;
			g_temp.isEffectOverlay = g_options.thumb_color_overlay_effect;
			g_temp.isEffectImage = g_options.thumb_image_overlay_effect;
		
		}
		
		this._____________EXTERNAL_SETTERS__________ = function(){};
		
		
		/**
		 * append html from item
		 */
		function appendHtmlThumbFromItem(itemIndex, imageEffectClass){
			
			var objItem = g_arrItems[itemIndex];
			 
			 var classAddition = "";
			 if(g_temp.customThumbs == false)
				 classAddition = " ug-thumb-generated";
			
			var zIndex = objItem.index + 1;
			var thumbStyle = "style='z-index:"+zIndex+";'";
			
		 	var htmlThumb = "<div class='ug-thumb-wrapper"+classAddition+"' " + thumbStyle + "></div>";

			 if(g_options.thumb_wrapper_as_link == true){
				 var urlLink = objItem.link;
				 if(objItem.link == "")
					 urlLink = "javascript:void(0)";
				
				 var linkTarget = "";
					if(g_options.thumb_link_newpage == true && objItem.link)
						linkTarget = " target='_blank'";
				 
				 var htmlThumb = "<a href='" + urlLink + "'"+linkTarget+" class='ug-thumb-wrapper"+classAddition+"'></a>";
			 }
			 
			 var objThumbWrapper = jQuery(htmlThumb);
			 
			 var objImage = objItem.objThumbImage;
			
			 if(g_temp.customThumbs == false){
				 
				 if(g_options.thumb_show_loader == true && objImage){
					 
					 var loaderClass = "ug-thumb-loader-dark";
					 if(g_options.thumb_loader_type == "bright")
						 loaderClass = "ug-thumb-loader-bright";
					 
					 objThumbWrapper.append("<div class='ug-thumb-loader " + loaderClass + "'></div>");
					 objThumbWrapper.append("<div class='ug-thumb-error' style='display:none'></div>");
				 }
				 					 
				 if(objImage){
					 objImage.addClass("ug-thumb-image");
					 
					 //if image overlay effects active, clone the image, and set the effects class on it
					 if(g_options.thumb_image_overlay_effect == true){
						var objImageOverlay = objImage.clone().appendTo(objThumbWrapper);
						
						objImageOverlay.addClass("ug-thumb-image-overlay " + imageEffectClass).removeClass("ug-thumb-image");
						objImageOverlay.fadeTo(0,0);
						objItem.objImageOverlay = objImageOverlay;
					 }
							 
					 objThumbWrapper.append(objImage);
				 }
				 
			 }//end if not custom thumb
			 
			 if(g_temp.isEffectBorder)
				 objThumbWrapper.append("<div class='ug-thumb-border-overlay'></div>");
			 
			 if(g_temp.isEffectOverlay)
				 objThumbWrapper.append("<div class='ug-thumb-overlay'></div>");
			 
			 g_objParent.append(objThumbWrapper);

			 //only custom thumbs function
			 if(g_temp.customThumbs){
				 
				 g_temp.funcSetCustomThumbHtml(objThumbWrapper, objItem);
				 
			 }
			 
			 //add thumb wrapper object to items array
			 g_arrItems[itemIndex].objThumbWrapper = objThumbWrapper;
			
			 return(objThumbWrapper);
		}
		
		
		/**
		 * append the thumbs html to some parent
		 */
		this.setHtmlThumbs = function(objParent, isAppend){
			
			g_objParent = objParent;
			
			//set image effect class
			if(g_temp.isEffectImage == true){
				var imageEffectClass = getImageEffectsClass();
			}
			
			if(isAppend !== true){		//set all thumbs
				var numItems = g_gallery.getNumItems();
				
				 //append thumbs to strip
				 for(var i=0;i<numItems;i++){
					 appendHtmlThumbFromItem(i, imageEffectClass);
				 }
				
			}else{		//append only new items, mark only new added thumbs as new thumbs
				
				var objThumbs = t.getThumbs();
				
				objThumbs.removeClass(g_temp.classNewThumb);
				
				var arrNewIndexes = g_gallery.getNewAddedItemsIndexes();
				
				 jQuery.each(arrNewIndexes,function(i,itemIndex){
					 
					 var objThumbWrapper = appendHtmlThumbFromItem(itemIndex, imageEffectClass);
					 objThumbWrapper.addClass(g_temp.classNewThumb);
					 
				 });
				 					
			}
			
			 
		}

		
		function _______________SETTERS______________(){};

		
		/**
		 * set thumb size with all the inside components (without the image).
		 * else, set to all the thumbs
		 */
		function setThumbSize(width, height, objThumb, innerOnly){
			
			var objCss = {
				width: width+"px",
				height: height+"px"
			};
			
			var objCssInner = {
					width: width-g_temp.thumbInnerReduce+"px",
					height: height-g_temp.thumbInnerReduce+"px"
				};
			
			var selectorsString = ".ug-thumb-loader, .ug-thumb-error, .ug-thumb-border-overlay, .ug-thumb-overlay";
			
			//set thumb size
			if(objThumb){
				if(innerOnly !== true)
					objThumb.css(objCss);
				
				objThumb.find(selectorsString).css(objCssInner);
			}
			else{	//set to all items
				g_objParent.children(".ug-thumb-wrapper").css(objCss);
				g_objParent.find(selectorsString).css(objCssInner);
			}
			
		}

		
		/**
		 * set thumb border effect
		 */
		function setThumbBorderEffect(objThumb, borderWidth, borderColor, noAnimation){
						
			if(!noAnimation)
				var noAnimation = false;
			
			if(g_gallery.isFakeFullscreen())
				noAnimation = true;
			
			var objBorderOverlay = objThumb.children(".ug-thumb-border-overlay");
			
			//set the border to thumb and not to overlay if no border size transition
			/*
			if(g_options.thumb_border_width == g_options.thumb_over_border_width
				&& g_options.thumb_border_width == g_options.thumb_selected_border_width)
				objBorderOverlay = objThumb;
			*/
			
			var objCss = {};
			
			objCss["border-width"] = borderWidth + "px";
			
			if(borderWidth != 0)
				objCss["border-color"] = borderColor;
			
			if(noAnimation && noAnimation === true){
				objBorderOverlay.css(objCss);
				
				if(borderWidth == 0)
					objBorderOverlay.hide();
				else
					objBorderOverlay.show();
			}
			else{
				
				if(borderWidth == 0)
					objBorderOverlay.stop().fadeOut(g_options.thumb_transition_duration);
				else
					objBorderOverlay.show().stop().fadeIn(g_options.thumb_transition_duration);
				
				animateThumb(objBorderOverlay, objCss);
			}
		
		}
		
		
		/**
		 * set thumb border effect
		 */
		function setThumbColorOverlayEffect(objThumb, isActive, noAnimation){
			
			var objOverlay = objThumb.children(".ug-thumb-overlay");
			
			var animationDuration = g_options.thumb_transition_duration;
			if(noAnimation && noAnimation === true)
				animationDuration = 0;
			
			if(isActive){
				objOverlay.stop(true).fadeTo(animationDuration, g_temp.colorOverlayOpacity);
			}else{
				objOverlay.stop(true).fadeTo(animationDuration, 0);
			}
			
		}
		
		
		/**
		 * set thumbnail bw effect
		 */
		function setThumbImageOverlayEffect(objThumb, isActive, noAnimation){
			
			var objImage = objThumb.children("img.ug-thumb-image");
			var objImageOverlay = objThumb.children("img.ug-thumb-image-overlay");
					
			var animationDuration = g_options.thumb_transition_duration;
			if(noAnimation && noAnimation === true)
				animationDuration = 0;
						
			if(isActive){
				objImageOverlay.stop(true).fadeTo(animationDuration,1);
			}else{
				//show the image, hide the overlay
				objImage.fadeTo(0,1);
				objImageOverlay.stop(true).fadeTo(animationDuration,0);
			}
			
		}
		
		
		/**
		 * on thumb mouse out - return the thumb style to original
		 */
		this.setThumbNormalStyle = function(objThumb, noAnimation, fromWhere){
			
			if(g_temp.customThumbs == true){
				objThumb.removeClass("ug-thumb-over");
			}
			
			if(g_temp.isEffectBorder)
			  setThumbBorderEffect(objThumb, g_options.thumb_border_width, g_options.thumb_border_color, noAnimation);
			
			if(g_temp.isEffectOverlay){
				var isSet = (g_options.thumb_overlay_reverse == true)?false:true;
				setThumbColorOverlayEffect(objThumb, isSet, noAnimation);
			}
						
			if(g_temp.isEffectImage){
				setThumbImageOverlayEffect(objThumb, true, noAnimation);
			}
			
			g_objThis.trigger(t.events.SETNORMALSTYLE, objThumb);
		}
		
		
		/**
		 * on thumb mouse over - turn thumb style to over position
		 */
		this.setThumbOverStyle = function(objThumb){
			
			if(g_temp.customThumbs == true){
				objThumb.addClass("ug-thumb-over");
			}
			
			//border effect
			if(g_temp.isEffectBorder)
				setThumbBorderEffect(objThumb, g_options.thumb_over_border_width, g_options.thumb_over_border_color);
			
			//color overlay effect 
			if(g_temp.isEffectOverlay){
				var isSet = (g_options.thumb_overlay_reverse == true)?true:false;
				setThumbColorOverlayEffect(objThumb, isSet);
			}
			
			//image overlay effect
			if(g_temp.isEffectImage == true){
				setThumbImageOverlayEffect(objThumb, false);
			}
			
			//trigger event for parent classes
			g_objThis.trigger(t.events.SETOVERSTYLE, objThumb);
		}
		
		
		/**
		 * set thumb selected style
		 */
		function setThumbSelectedStyle(objThumb, noAnimation){
						
			if(g_temp.isEffectBorder)			
				setThumbBorderEffect(objThumb, g_options.thumb_selected_border_width, g_options.thumb_selected_border_color, noAnimation);
			
			if(g_temp.isEffectOverlay){
				var isSet = (g_options.thumb_overlay_reverse == true)?true:false;
				setThumbColorOverlayEffect(objThumb, isSet, noAnimation);
			}
			
			//image overlay effect
			if(g_temp.isEffectImage)
				setThumbImageOverlayEffect(objThumb, false, noAnimation);

			
			g_objThis.trigger(t.events.SETSELECTEDSTYLE, objThumb);

		}
		
		
		/**
		 * set loading error of the thumb
		 */
		function setItemThumbLoadedError(objThumb){
			
			var objItem = t.getItemByThumb(objThumb);
			
			objItem.isLoaded = true;
			objItem.isThumbImageLoaded = false;		
			
			if(g_temp.customThumbs == true){
				
				g_objThis.trigger(t.events.IMAGELOADERROR, objThumb);
				return(true);
			
			}
			
			objThumb.children(".ug-thumb-loader").hide();
			objThumb.children(".ug-thumb-error").show();		
		}
		
		
		/**
		 * set border radius of all the thmbs
		 */
		function setThumbsBorderRadius(objThumbs){
						
			if(g_options.thumb_round_corners_radius <= 0)
				return(false);
			
			//set radius:
			var objCss = {
				"border-radius":g_options.thumb_round_corners_radius + "px"
			};
			
			if(objThumbs){
				objThumbs.css(objCss);
				objThumbs.find(".ug-thumb-border-overlay").css(objCss);
			}else{
				g_objParent.find(".ug-thumb-wrapper, .ug-thumb-wrapper .ug-thumb-border-overlay").css(objCss);
			}
			
		}
		
		
		/**
		 * animate thumb transitions
		 */
		function animateThumb(objThumb, objThumbCss){
			
			objThumb.stop(true).animate(objThumbCss ,{
				duration: g_options.thumb_transition_duration,
				easing: g_options.thumb_transition_easing,
				queue: false
			});
					
		}
		
		
		/**
		 * redraw the thumb style according the state
		 */
		function redrawThumbStyle(objThumb){

			if(isThumbSelected(objThumb) == true)
				setThumbSelectedStyle(objThumb, true, "redraw");
			else
				t.setThumbNormalStyle(objThumb, true, "redraw");
		}
		
		
		
		
		/**
		 * place thumb image
		 * retrun - false, if already loaded
		 * return true - if was set on this function
		 * isForce - set the image anyway
		 */
		function placeThumbImage(objThumb, objImage, objItem){
			
			//scale the image
			if(g_options.thumb_fixed_size == true){
				g_functions.scaleImageCoverParent(objImage, objThumb);
			}
			else{
				
				//variant size
				
				if(g_options.thumb_resize_by == "height")	//horizontal strip
					g_functions.scaleImageByHeight(objImage, g_options.thumb_height);
				else		//vertical strip
					g_functions.scaleImageByWidth(objImage, g_options.thumb_width);
				
				var imageSize = g_functions.getElementSize(objImage);
				g_functions.placeElement(objImage, 0, 0);
				setThumbSize(imageSize.width, imageSize.height, objThumb);
				
			}
			
			//hide loader
			objThumb.children(".ug-thumb-loader").hide();
			
			//show image
			objImage.show();
			
			//if overlay effect exists
			if(g_options.thumb_image_overlay_effect == false){
				objImage.fadeTo(0,1);
			}
			else{

				//place bw image also if exists
				if(g_options.thumb_image_overlay_effect == true){
					copyPositionToThumbOverlayImage(objImage);
				}

				//hide the original image (avoid blinking at start)
				objImage.fadeTo(0,0);

				//redraw the style, because this function can overwrite it
				redrawThumbStyle(objThumb);
			}
			
			g_objThis.trigger(t.events.AFTERPLACEIMAGE, objThumb);
			
		}


		
		/**
		 * copy image position to bw image (if exists)
		 */
		function copyPositionToThumbOverlayImage(objImage){
						
			var objImageBW = objImage.siblings(".ug-thumb-image-overlay");
			if(objImageBW.length == 0)
				return(false);
			
			var objSize = g_functions.getElementSize(objImage);
				
			var objCss = {
					"width":objSize.width+"px",
					"height":objSize.height+"px",
					"left":objSize.left+"px",
					"top":objSize.top+"px"
				}
				
			objImageBW.css(objCss);
			
			//show the image
			if(g_temp.customThumbs == false)
				objImageBW.fadeTo(0,1);
			
		}
		
		
		
		
		function _______________GETTERS______________(){};
		
		
		/**
		 * get the image effects class from the options
		 */
		function getImageEffectsClass(){
			
			var imageEffectClass = "";
			var arrEffects = g_options.thumb_image_overlay_type.split(",");
			
			for(var index in arrEffects){
				var effect = arrEffects[index];
				
				switch(effect){
					case "bw":
						imageEffectClass += " ug-bw-effect";
					break;
					case "blur":
						imageEffectClass += " ug-blur-effect";
					break; 
					case "sepia":
						imageEffectClass += " ug-sepia-effect";
					break;
				}
			}
					
			return(imageEffectClass);
		}

		/**
		 * get if the thumb is selected
		 */
		function isThumbSelected(objThumbWrapper){
			
			if(objThumbWrapper.hasClass("ug-thumb-selected"))
				return(true);
			
			return(false);
		}

		
		function _______________EVENTS______________(){};
		
		/**
		 * on thumb size change - triggered by parent on custom thumbs type
		 */
		function onThumbSizeChange(temp, objThumb){
			
			objThumb = jQuery(objThumb);
			var objItem = t.getItemByThumb(objThumb);
			
			var objSize = g_functions.getElementSize(objThumb);
			
			setThumbSize(objSize.width, objSize.height, objThumb, true);
			
			redrawThumbStyle(objThumb);
		}
		
		
		/**
		 * on thumb mouse over
		 */
		function onMouseOver(objThumb){
			
			
			//if touch enabled unbind event
			if(g_temp.touchEnabled == true){
				objThumbs.off("mouseenter").off("mouseleave");
				return(true);
			}
			
			if(isThumbSelected(objThumb) == false)
				t.setThumbOverStyle(objThumb);
			
		}
		
		
		/**
		 * on thumb mouse out
		 */
		function onMouseOut(objThumb){
			
			if(g_temp.touchEnabled == true)
				return(true);
							
			if(isThumbSelected(objThumb) == false)
				t.setThumbNormalStyle(objThumb, false);
		}
		
		
		/**
		 * on image loaded event
		 */
		function onImageLoaded(image, isForce){

			if(!isForce)
				var isForce = false;
			
			var objImage = jQuery(image);
			var objThumb = objImage.parents(".ug-thumb-wrapper");
			
			if(objThumb.parent().length == 0)		//don't treat detached thumbs
				return(false);
						
			objItem = t.getItemByThumb(objThumb);
			
			if(objItem.isLoaded == true && isForce === false)
				return(false);
			
			t.triggerImageLoadedEvent(objThumb, objImage);
			
			if(g_temp.customThumbs == true){
				
				g_objThis.trigger(t.events.PLACEIMAGE, [objThumb, objImage]);
			
			}else{
				
				placeThumbImage(objThumb, objImage, objItem);
				
			}
			
		}
		
		
		/**
		 * on image loaded - set appropriete item vars
		 */
		function onThumbImageLoaded(data, objThumb, objImage){
						
			objItem = t.getItemByThumb(objThumb);
						
			objItem.isLoaded = true;
			objItem.isThumbImageLoaded = true;
			
			var objSize = g_functions.getImageOriginalSize(objImage);
						
			objItem.thumbWidth = objSize.width;
			objItem.thumbHeight = objSize.height;
			objItem.thumbRatioByWidth = objSize.width / objSize.height;
			objItem.thumbRatioByHeight = objSize.height / objSize.width;
			
			objThumb.addClass("ug-thumb-ratio-set");
			
		}

		
		/**
		 * set thumbnails html properties
		 */
		this.setHtmlProperties = function(objThumbs){
			
			if(!objThumbs)
				var objThumbs = t.getThumbs();
			
			//set thumb params
			if(g_temp.customThumbs == false){
				var objThumbCss = {};
			
				//set thumb fixed size
				if(g_options.thumb_fixed_size == true)
					setThumbSize(g_options.thumb_width, g_options.thumb_height, objThumbs);
				
				 setThumbsBorderRadius(objThumbs);
			}
			 
			 //set normal style to all the thumbs
			objThumbs.each(function(){
				 var objThumb = jQuery(this);
				 redrawThumbStyle(objThumb);
			 });
			

			//set color. if empty set from css
			if(g_temp.isEffectOverlay){
				
				if(g_options.thumb_overlay_color){
										
					var objCss = {};
					if(g_functions.isRgbaSupported()){
						var colorRGB = g_functions.convertHexToRGB(g_options.thumb_overlay_color, g_options.thumb_overlay_opacity);
						objCss["background-color"] = colorRGB;										
					}else{
						objCss["background-color"] = g_options.thumb_overlay_color;
						g_temp.colorOverlayOpacity = g_options.thumb_overlay_opacity;
					}
					
					objThumbs.find(".ug-thumb-overlay").css(objCss);
				}
				
			}
			
		}

				
		/**
		 * set the thumb on selected state
		 */
		this.setThumbSelected = function(objThumbWrapper){
			
			if(g_temp.customThumbs == true)
				objThumbWrapper.removeClass("ug-thumb-over");
			
			if(isThumbSelected(objThumbWrapper) == true)
				return(true);
			
			objThumbWrapper.addClass("ug-thumb-selected");
			
			//set thumb selected style
			setThumbSelectedStyle(objThumbWrapper);
		}
		
		/**
		 * set the thumb unselected state
		 */
		this.setThumbUnselected = function(objThumbWrapper){
			
			//remove the selected class
			objThumbWrapper.removeClass("ug-thumb-selected");
			
			t.setThumbNormalStyle(objThumbWrapper, false, "set unselected");
		}
		
		
		/**
		 * set the options of the strip
		 */
		this.setOptions = function(objOptions){
			
			g_options = jQuery.extend(g_options, objOptions);
			
		}
		
		
		/**
		 * set thumb inner reduce - reduce this number when resizing thumb inner
		 */
		this.setThumbInnerReduce = function(innerReduce){
			
			g_temp.thumbInnerReduce = innerReduce;
			
		}
		
		/**
		 * set custom thumbs
		 * allowedEffects - border, overlay, image
		 */
		this.setCustomThumbs = function(funcSetHtml, arrAlowedEffects, customOptions){
			
			g_temp.customThumbs = true;
						
			if(typeof funcSetHtml != "function")
				throw new Error("The argument should be function");
			
			
			g_temp.funcSetCustomThumbHtml = funcSetHtml;
			
			//enable effects:
			if(jQuery.inArray("overlay", arrAlowedEffects) == -1)
				g_temp.isEffectOverlay = false;				
			
			if(jQuery.inArray("border", arrAlowedEffects) == -1)
				g_temp.isEffectBorder = false;
			
			g_temp.isEffectImage = false;		//for custom effects the image is always off

			//check for dissalow onresize
			if(customOptions && customOptions.allow_onresize === false){
				g_temp.allowOnResize = false;
			}
		
		}
		
		
		
		
		
		
		this._____________EXTERNAL_GETTERS__________ = function(){};

		/**
		 * get the options object
		 */
		this.getOptions = function(){
			
			return(g_options);
		}
		
		
		/**
		 * get num thumbs
		 */
		this.getNumThumbs = function(){
			var numThumbs = g_arrItems.length;
			return(numThumbs);
		}

		
		/**
		 * get thumb image
		 */
		this.getThumbImage = function(objThumb){
			
			var objImage = objThumb.find(".ug-thumb-image");
			return(objImage);
		}
		
		
		/**
		 * get thumbs by index
		 */
		this.getThumbByIndex = function(index){
			var objThumbs = t.getThumbs();
			
			if(index >= objThumbs.length || index < 0)
				throw new Error("Wrong thumb index");
			
			var objThumb = jQuery(objThumbs[index]);
			
			return(objThumb);
		}
		
		
		/**
		 * get all thumbs jquery object
		 */
		this.getThumbs = function(mode){
			
			var thumbClass = ".ug-thumb-wrapper";
			var classRatio = ".ug-thumb-ratio-set";
			
			switch(mode){
				default:
				case t.type.GET_THUMBS_ALL:
					var objThumbs = g_objParent.children(thumbClass)
				break;
				case t.type.GET_THUMBS_NO_RATIO:
					var objThumbs = g_objParent.children(thumbClass).not(classRatio);
				break;
				case t.type.GET_THUMBS_RATIO:
					var objThumbs = g_objParent.children(thumbClass + classRatio);
				break;
				case t.type.GET_THUMBS_NEW:
					var objThumbs = g_objParent.children("."+g_temp.classNewThumb);
				break;
			}
			
			return(objThumbs);
		}
		
		
		/**
		 * get item by thumb object
		 */
		this.getItemByThumb = function(objThumb){
			
			var index = objThumb.data("index");
			
			if(index === undefined)
				index = objThumb.index();
			
			var arrItem = g_arrItems[index];
			return(arrItem);
		}
		
		
		/**
		 * is thumb loaded
		 */
		this.isThumbLoaded = function(objThumb){
			
			var objItem = t.getItemByThumb(objThumb);
			
			return(objItem.isLoaded);			
		}
		
		
		/**
		 * get global thumb size
		 */
		this.getGlobalThumbSize = function(){
			
			var objSize = {
				width:g_options.thumb_width,
				height: g_options.thumb_height
			};
			
			return(objSize);
		}
		
		
		this._____________EXTERNAL_OTHERS__________ = function(){};


		/**
		 * init events
		 */
		this.initEvents = function(){
			
			var selectorThumb = ".ug-thumb-wrapper";
			
			//one time event
			if(g_temp.allowOnResize == true)
				g_objWrapper.on(g_serviceParams.eventSizeChange, onThumbSizeChange);
			
			//on image loaded event - for setting the image sizes
			g_objThis.on(t.events.THUMB_IMAGE_LOADED, onThumbImageLoaded);
									
			//thumbs events						
			g_objParent.on("touchstart",selectorThumb,function(){
				g_temp.touchEnabled = true;
				g_objParent.off("mouseenter").off("mouseleave");
			});
			
			g_objParent.on("mouseenter",selectorThumb,function(event){				
				var objThumb = jQuery(this);
				onMouseOver(objThumb);
			});

			g_objParent.on("mouseleave",selectorThumb,function(event){
				var objThumb = jQuery(this);
				onMouseOut(objThumb);
			});
			
			
		}
		
		
		/**
		 * destroy the thumb element
		 */
		this.destroy = function(){
			
			var selectorThumb = ".ug-thumb-wrapper";
			
			g_objParent.off("touchstart",selectorThumb);
			g_objWrapper.off(g_serviceParams.eventSizeChange);
			g_objParent.off("mouseenter",selectorThumb);
			g_objParent.off("mouseleave",selectorThumb);
			g_objThis.off(t.events.THUMB_IMAGE_LOADED);
		}
		
		
		/**
		 * preload thumbs images and put them into the thumbnails
		 */
		this.loadThumbsImages = function(){

			var objImages = g_objParent.find(".ug-thumb-image");
			g_functions.checkImagesLoaded(objImages, null, function(objImage,isError){
				
				if(isError == false){
					onImageLoaded(objImage, true);
				}
				else{
					var objItem = jQuery(objImage).parent();
					setItemThumbLoadedError(objItem);										
				}
			});
		}
		
		
		/**
		 * trigger image loaded event
		 */
		this.triggerImageLoadedEvent = function(objThumb, objImage){

			g_objThis.trigger(t.events.THUMB_IMAGE_LOADED, [objThumb, objImage]);
			
		}
		
		
		/**
		 * hide thumbs
		 */
		this.hideThumbs = function(){
			
			g_objParent.find(".ug-thumb-wrapper").hide();
			
		}
		
}

/**
 * thumbs class
 * addon to strip gallery
 */
function UGThumbsStrip(){

	var t = this;
	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objects, g_objWrapper; 
	var g_arrItems, g_objStrip, g_objStripInner;
	var g_aviaControl, g_touchThumbsControl, g_functions = new UGFunctions();	
	var g_isVertical = false, g_thumbs = new UGThumbsGeneral();
	var g_functions = new UGFunctions();
	
	var g_options = {
		strip_vertical_type: false,
		strip_thumbs_align: "left",					//left, center, right, top, middle, bottom - the align of the thumbs when they smaller then the strip size.
		strip_space_between_thumbs:6,				//space between thumbs
		strip_thumb_touch_sensetivity:15,  			//from 1-100, 1 - most sensetive, 100 - most unsensetive
		strip_scroll_to_thumb_duration:500,			//duration of scrolling to thumb
		strip_scroll_to_thumb_easing:"easeOutCubic",		//easing of scrolling to thumb animation
		strip_control_avia:true,					//avia control - move the strip according strip moseover position
		strip_control_touch:true,					//touch control - move the strip by dragging it
		strip_padding_top: 0,						//add some space from the top					
		strip_padding_bottom: 0,					//add some space from the bottom
		strip_padding_left: 0,						//add some space from left
		strip_padding_right: 0						//add some space from right
	}
	
	var g_temp = {
		isRunOnce:false,
		is_placed:false,
		isNotFixedThumbs: false,
		handle: null
	};
	
	var g_sizes = {
		stripSize:0,		//set after position thumbs
		stripActiveSize:0,	//strip size without the padding
		stripInnerSize:0,	
		thumbSize:0,
		thumbSecondSize:0	//size of the height and width of the strip
	}
	
	this.events = {		//events variables
			STRIP_MOVE:"stripmove",
			INNER_SIZE_CHANGE:"size_change"
	}	
	
	//the defaults for vertical align
	var g_defaultsVertical = {
		strip_thumbs_align: "top",
		thumb_resize_by: "width"
	}
	
	
	/**
	 * set the thumbs strip html
	 */	
	this.setHtml = function(objParent){
		
		if(!objParent){
			var objParent = g_objWrapper;
			if(g_options.parent_container != null)
				objParent = g_options.parent_container;			
		}
				
		objParent.append("<div class='ug-thumbs-strip'><div class='ug-thumbs-strip-inner'></div></div>");		 
		g_objStrip = objParent.children(".ug-thumbs-strip");
		
		g_objStripInner = g_objStrip.children(".ug-thumbs-strip-inner");		
				
		//put the thumbs to inner strip
		g_thumbs.setHtmlThumbs(g_objStripInner);
		
		//hide thumbs on not fixed mode
		if(g_temp.isNotFixedThumbs == true)
			g_thumbs.hideThumbs();
		
	}

	
	function ___________GENERAL___________(){};
	
	
	/**
	 * init the strip
	 */
	function initStrip(gallery, customOptions){
		
		g_objects = gallery.getObjects();
		g_gallery = gallery;
		
		g_gallery.attachThumbsPanel("strip", t);
		
		g_objGallery = jQuery(gallery);
		g_objWrapper = g_objects.g_objWrapper;
		g_arrItems = g_objects.g_arrItems;

		g_options = jQuery.extend(g_options, customOptions);
		g_isVertical = g_options.strip_vertical_type;
		
		//set vertical defaults
		if(g_isVertical == true){
			g_options = jQuery.extend(g_options, g_defaultsVertical);
			g_options = jQuery.extend(g_options, customOptions);
			
			customOptions.thumb_resize_by = "width";
		}
		
		g_thumbs.init(gallery, customOptions);
		
		onAfterSetOptions();
	}
	
	
	/**
	 * run this funcion after set options.
	 */
	function onAfterSetOptions(){

		var thumbsOptions = g_thumbs.getOptions();
		
		g_temp.isNotFixedThumbs = (thumbsOptions.thumb_fixed_size === false);
		g_isVertical = g_options.strip_vertical_type;
	}
	
	
	/**
	 * run the strip
	 */
	function runStrip(){
		
		g_thumbs.setHtmlProperties();
		
		initSizeParams();

		fixSize();

		positionThumbs();
		
		//run only once
		if(g_temp.isRunOnce == false){

			//init thumbs strip touch
			if(g_options.strip_control_touch == true){
				g_touchThumbsControl = new UGTouchThumbsControl();
				g_touchThumbsControl.init(t);
			}

			//init thumbs strip avia control
			if(g_options.strip_control_avia == true){
				g_aviaControl = new UGAviaControl();
				g_aviaControl.init(t);
			}

			checkControlsEnableDisable();

			g_thumbs.loadThumbsImages();
			
			initEvents();
		}
		
						
		g_temp.isRunOnce = true;

	}
	
	
	/**
	 * store strip size and strip active size in vars
	 * do after all strip size change
	 */
	function storeStripSize(size){
		
		g_sizes.stripSize = size;

		if(g_isVertical == false)
			g_sizes.stripActiveSize = g_sizes.stripSize - g_options.strip_padding_left - g_options.strip_padding_right;
		else
			g_sizes.stripActiveSize = g_sizes.stripSize - g_options.strip_padding_top - g_options.strip_padding_bottom;
			
		if(g_sizes.stripActiveSize < 0)
			g_sizes.stripActiveSize = 0;

	}
	
	
	/**
	 * init some size parameters, before size init and after position thumbs
	 */
	function initSizeParams(){
		
		//set thumb outer size:
		var arrThumbs = g_objStripInner.children(".ug-thumb-wrapper");
		var firstThumb = jQuery(arrThumbs[0]);
		var thumbsRealWidth = firstThumb.outerWidth();
		var thumbsRealHeight = firstThumb.outerHeight();
		var thumbs_options = g_thumbs.getOptions();
		
		if(g_isVertical == false){			//horizontal
			
			g_sizes.thumbSize = thumbsRealWidth;
		
			if(thumbs_options.thumb_fixed_size == true){
				g_sizes.thumbSecondSize = thumbsRealHeight;
			} else {
				g_sizes.thumbSecondSize = thumbs_options.thumb_height;
			}
			
			storeStripSize(g_objStrip.width());
			g_sizes.stripInnerSize = g_objStripInner.width();
		
		}else{		//vertical
			g_sizes.thumbSize = thumbsRealHeight;
			
			if(thumbs_options.thumb_fixed_size == true){
				g_sizes.thumbSecondSize = thumbsRealWidth;
			} else {
				g_sizes.thumbSecondSize = thumbs_options.thumb_width;
			}
			
			storeStripSize(g_objStrip.height());

			g_sizes.stripInnerSize = g_objStripInner.height();			
		}

		
	}
	
	

	
	/**
	 * set size of inner strip according the orientation
	 */
	function setInnerStripSize(innerSize){

		if(g_isVertical == false)
			g_objStripInner.width(innerSize);
		else
			g_objStripInner.height(innerSize);
			
		g_sizes.stripInnerSize = innerSize;
		
		checkControlsEnableDisable();
		
		jQuery(t).trigger(t.events.INNER_SIZE_CHANGE);
	}
	
	
	/**
	 * position thumbnails in the thumbs panel
	 */
	function positionThumbs(){
		
		var arrThumbs = g_objStripInner.children(".ug-thumb-wrapper");
		
		var posx = 0;
		var posy = 0;
		
		if(g_isVertical == false)
			posy = g_options.strip_padding_top;
		
		for (i = 0; i < arrThumbs.length; i++) {
			
			var objThumb = jQuery(arrThumbs[i]);
			
			//skip from placing if not loaded yet on non fixed mode
			if(g_temp.isNotFixedThumbs == true){
				objItem = g_thumbs.getItemByThumb(objThumb);
				if(objItem.isLoaded == false)
					continue;
				
				//the thumb is hidden if not placed
				objThumb.show();
			}
			
			g_functions.placeElement(objThumb, posx, posy);
			
			if(g_isVertical == false)
				posx += objThumb.outerWidth() + g_options.strip_space_between_thumbs;
			else
				posy += objThumb.outerHeight() + g_options.strip_space_between_thumbs;
		}
		
		//set strip size, width or height
		if(g_isVertical == false)
			var innerStripSize = posx - g_options.strip_space_between_thumbs;
		else
			var innerStripSize = posy - g_options.strip_space_between_thumbs;
			
		setInnerStripSize(innerStripSize);
	}

	
	
	/**
	 * fix strip and inner size
	 */
	function fixSize(){
		
		if(g_isVertical == false){		//fix horizontal
			
			var height = g_sizes.thumbSecondSize;
			
			 var objCssStrip = {};
			 objCssStrip["height"] = height+"px";
			 		 
			 //set inner strip params
			 var objCssInner = {};
			 objCssInner["height"] = height+"px";

		}else{	//fix vertical
			
			var width = g_sizes.thumbSecondSize;
			
			 var objCssStrip = {};
			 objCssStrip["width"] = width+"px";
			 		 
			 //set inner strip params
			 var objCssInner = {};
			 objCssInner["width"] = width+"px";
			 
		}
		 
		g_objStrip.css(objCssStrip);
		g_objStripInner.css(objCssInner);				
	}
	
	
	
	/**
	 * scroll by some number
	 * .
	 */
	function scrollBy(scrollStep){
		
		var innerPos = t.getInnerStripPos();
		var finalPos = innerPos + scrollStep;
		
		finalPos = t.fixInnerStripLimits(finalPos);
		
		t.positionInnerStrip(finalPos, true);		
	}
	

	/**
	 * scroll to thumb from min. (left or top) position
	 */
	function scrollToThumbMin(objThumb){
		
		var objThumbPos = getThumbPos(objThumb);
		
		var scrollPos = objThumbPos.min * -1;
		scrollPos = t.fixInnerStripLimits(scrollPos);

		t.positionInnerStrip(scrollPos, true);
	}
	
	
	/**
	 * scroll to thumb from max. (right or bottom) position
	 */
	function scrollToThumbMax(objThumb){
		
		var objThumbPos = getThumbPos(objThumb);		
		
		var scrollPos = objThumbPos.max * -1 + g_sizes.stripSize;
		scrollPos = t.fixInnerStripLimits(scrollPos);
		
		t.positionInnerStrip(scrollPos, true);
	}

	
	/**
	 * scroll to some thumbnail
	 */
	function scrollToThumb(objThumb){
		
		if(isStripMovingEnabled() == false)
			return(false);
		
		var objBounds = getThumbsInsideBounds();
		
		var objThumbPos = getThumbPos(objThumb);
		
		if(objThumbPos.min < objBounds.minPosThumbs){			
			
			var prevThumb = objThumb.prev();
			if(prevThumb.length)
				scrollToThumbMin(prevThumb);
			else 
				scrollToThumbMin(objThumb);				
			
		}else if(objThumbPos.max > objBounds.maxPosThumbs){			
			
			var nextThumb = objThumb.next();
			if(nextThumb.length)
				scrollToThumbMax(nextThumb);
			else
				scrollToThumbMax(objThumb);
				
		}
		
	}
	
	/**
	 * scroll to selected thumb
	 */
	function scrollToSelectedThumb(){
		
		var selectedItem = g_gallery.getSelectedItem();
		if(selectedItem == null)
			return(true);
		
		var objThumb = selectedItem.objThumbWrapper;
		if(objThumb)
			scrollToThumb(objThumb);
		
	}
	
	
	
	/**
	 * check that the inner strip off the limits position, and reposition it if there is a need
	 */
	function checkAndRepositionInnerStrip(){
		if(isStripMovingEnabled() == false)
			return(false);
		
		var pos = t.getInnerStripPos();
		
		var posFixed = t.fixInnerStripLimits(pos);
				
		if(pos != posFixed)
			t.positionInnerStrip(posFixed, true);
	}
	
	
	/**
	 * enable / disable controls according inner width (move enabled).
	 */
	function checkControlsEnableDisable(){
		
		var isMovingEndbled = isStripMovingEnabled();
		
		if(isMovingEndbled == true){
			
			if(g_aviaControl)
				g_aviaControl.enable();
			
			if(g_touchThumbsControl)
				g_touchThumbsControl.enable();
			
		}else{
			
			if(g_aviaControl)
				g_aviaControl.disable();
			
			if(g_touchThumbsControl)
				g_touchThumbsControl.disable();
			
		}
		
	}
	
	/**
	 * align inner strip according the options
	 */
	function alignInnerStrip(){
		
		if(isStripMovingEnabled())
			return(false);
		
		if(g_isVertical == false)
			g_functions.placeElement(g_objStripInner, g_options.strip_thumbs_align, 0);
		else
			g_functions.placeElement(g_objStripInner, 0, g_options.strip_thumbs_align);
			
	}
	
	
	function ___________EVENTS___________(){};
	
	/**
	 * on thumb click event. Select the thumb
	 */
	function onThumbClick(objThumb){

		//cancel click event only if passed significant movement
		if(t.isTouchMotionActive()){

			var isSignificantPassed = g_touchThumbsControl.isSignificantPassed();
			if(isSignificantPassed == true)
				return(true);
		}

		//run select item operation
		var objItem = g_thumbs.getItemByThumb(objThumb);

		g_gallery.selectItem(objItem);
	}
	
	
	/**
	 * on some thumb placed, run the resize, but with time passed
	 */
	function onThumbPlaced(){
		
		clearTimeout(g_temp.handle);
		
		g_temp.handle = setTimeout(function(){
			
			positionThumbs();
			
		},50);
			
		
	}
	
	/**
	 * on item change
	 */
	function onItemChange(){

		var objItem = g_gallery.getSelectedItem();
		g_thumbs.setThumbSelected(objItem.objThumbWrapper);
		scrollToThumb(objItem.objThumbWrapper);
	}
	
	
	/**
	 * init panel events
	 */
	function initEvents(){
		
		g_thumbs.initEvents();

		var objThumbs = g_objStrip.find(".ug-thumb-wrapper");
				
		objThumbs.on("click touchend", function(event){
			
			var clickedThumb = jQuery(this);
			onThumbClick(clickedThumb);
		});
		
		//on item change, make the thumb selected
		g_objGallery.on(g_gallery.events.ITEM_CHANGE, onItemChange);

		
		//position thumbs after each load on non fixed mode
		if(g_temp.isNotFixedThumbs){
			
			jQuery(g_thumbs).on(g_thumbs.events.AFTERPLACEIMAGE, onThumbPlaced);
			
		}
		
	}
	
	
	/**
	 * destroy the strip panel events
	 */
	this.destroy = function(){
		
		var objThumbs = g_objStrip.find(".ug-thumb-wrapper");
		
		objThumbs.off("click");
		objThumbs.off("touchend");
		g_objGallery.off(g_gallery.events.ITEM_CHANGE);

		jQuery(g_thumbs).off(g_thumbs.events.AFTERPLACEIMAGE);
		
		if(g_touchThumbsControl)
			g_touchThumbsControl.destroy();
		
		if(g_aviaControl)
			g_aviaControl.destroy();
		
		g_thumbs.destroy();
	}
	
	
	function ____________GETTERS___________(){};
		

	/**
	 * check if the inner width is more then strip width
	 */
	function isStripMovingEnabled(){
		
		if(g_sizes.stripInnerSize > g_sizes.stripActiveSize)
			return(true);
		else
			return(false);
		
	}
	
	
	/**
	 * get bounds, if the thumb not in them, it need to be scrolled
	 * minPosThumbs, maxPosThumbs - the min and max position that the thumbs should be located to be visible
	 */
	function getThumbsInsideBounds(){
		var obj = {};
		var innerPos = t.getInnerStripPos();
		
		//the 1 is gap that avoid exact bounds
		obj.minPosThumbs = innerPos * -1 + 1;				
		obj.maxPosThumbs = innerPos * -1 + g_sizes.stripSize - 1;		
		
		return(obj);
	}
	
	
	/**
	 * get thumb position according the orientation in the inner strip
	 */
	function getThumbPos(objThumb){
		
		var objReturn = {};
		
		var objPos = objThumb.position();
		
		if(g_isVertical == false){
			objReturn.min = objPos.left;
			objReturn.max = objPos.left + g_sizes.thumbSize;
		}else{
			objReturn.min = objPos.top;
			objReturn.max = objPos.top + g_sizes.thumbSize;
		}

		
		return(objReturn);
	}
	
	
	
	
	this.________EXTERNAL_GENERAL___________ = function(){};

	/**
	 * init function for avia controls
	 */
	this.init = function(gallery, customOptions){
		
		initStrip(gallery, customOptions);
	}
	
	
	/**
	 * set html and properties
	 */	
	this.run = function(){
		runStrip();
	}
	
	
	
	
	/**
	* position inner strip on some pos according the orientation
	*/
	this.positionInnerStrip = function(pos, isAnimate){
		
		if(isAnimate === undefined)
			var isAnimate = false;
		
		if(g_isVertical == false)
			var objPosition = {"left": pos + "px"};
		else
			var objPosition = {"top": pos + "px"};
		
		if(isAnimate == false){		//normal position
			
			g_objStripInner.css(objPosition);
			t.triggerStripMoveEvent();
		}
		else{		//position with animation
			
			t.triggerStripMoveEvent();
			
			g_objStripInner.stop(true).animate(objPosition ,{
				duration: g_options.strip_scroll_to_thumb_duration,
				easing: g_options.strip_scroll_to_thumb_easing,
				queue: false,
				progress:function(){t.triggerStripMoveEvent()},
				always: function(){t.triggerStripMoveEvent()}
			});					
			
		}
		
	}

	/**
	 * trigger event - on strip move
	 */
	this.triggerStripMoveEvent = function(){
		
		//trigger onstripmove event
		jQuery(t).trigger(t.events.STRIP_MOVE);
		
	}
	
		
	
	/**
	 * return true if the touch animation or dragging is active
	 */
	this.isTouchMotionActive = function(){
		if(!g_touchThumbsControl)
			return(false);
		
		var isActive = g_touchThumbsControl.isTouchActive();
		
		return(isActive);
	}
	
	
	/**
	 * check if thmb item visible, means inside the visible part of the inner strip
	 */
	this.isItemThumbVisible = function(objItem){
		
		var objThumb = objItem.objThumbWrapper;
		var thumbPos = objThumb.position();
		
		var posMin = t.getInnerStripPos() * -1;
		
		if(g_isVertical == false){
			var posMax = posMin + g_sizes.stripSize;
			var thumbPosMin = thumbPos.left;
			var thumbPosMax = thumbPos.left + objThumb.width();			
		}else{
			var posMax = posMin + g_sizes.stripSize;
			var thumbPosMin = thumbPos.top;
			var thumbPosMax = thumbPos.top + objThumb.height();			
		}
				
		var isVisible = false;
		if(thumbPosMax >= posMin && thumbPosMin <= posMax)
			isVisible = true;
		
		return(isVisible);
	}
	
	/**
	 * get inner strip position according the orientation
	 */
	this.getInnerStripPos = function(){
		
		if(g_isVertical == false)			
			return g_objStripInner.position().left;
		else
			return g_objStripInner.position().top;
	}
	
	
	/**
	 * get inner strip limits
	 */
	this.getInnerStripLimits = function(){
		
		var output = {};
		
		if(g_isVertical == false)
			output.maxPos = g_options.strip_padding_left;
		else
			output.maxPos = g_options.strip_padding_top;
		
		//debugLine(g_sizes.stripActiveSize);
		
		output.minPos = -(g_sizes.stripInnerSize - g_sizes.stripActiveSize);
		
		return(output);
	}

	
	/**
	 * fix inner position by check boundaries limit
	 */
	this.fixInnerStripLimits = function(distPos){
		
		var minPos;
		
		var objLimits = t.getInnerStripLimits();
		
		if(distPos > objLimits.maxPos)
			distPos = objLimits.maxPos;
		
		if(distPos < objLimits.minPos)
			distPos = objLimits.minPos;
		
		return(distPos);
	}
	
	
	
	/**
	 * scroll left or down
	 */
	this.scrollForeward = function(){
		scrollBy(-g_sizes.stripSize);
	}
	
	
	/**
	 * scroll left or down
	 */
	this.scrollBack = function(){
				
		scrollBy(g_sizes.stripSize);
	}
	
	
	this.________EXTERNAL_SETTERS___________ = function(){};

	
	/**
	 * set the options of the strip
	 */
	this.setOptions = function(objOptions){
		
		g_options = jQuery.extend(g_options, objOptions);
		
		g_thumbs.setOptions(objOptions);
		
		onAfterSetOptions();
	}
	
	
	/**
	 * set size of the strip
	 * the height size is set automatically from options
	 */
	this.setSizeVertical = function(height){
		
		 if(g_isVertical == false){
			 throw new Error("setSizeVertical error, the strip size is not vertical");
			 return(false);
		 }
		
		 var width = g_sizes.thumbSecondSize;
		
		 var objCssStrip = {};
		 objCssStrip["width"] = width+"px";
		 objCssStrip["height"] = height+"px";
		 
		 g_objStrip.css(objCssStrip);

		 storeStripSize(height);
		 
		 //set inner strip params
		 var objCssInner = {};
		 objCssInner["width"] = width+"px";
		 objCssInner["left"] = "0px";
		 objCssInner["top"] = "0px";
		 
		 g_objStripInner.css(objCssInner);
		 
		 g_temp.is_placed = true;
		 
		 checkControlsEnableDisable();
	}

	
	/**
	 * set size of the strip
	 * the height size is set automatically from options
	 */
	this.setSizeHorizontal = function(width){
				
		 if(g_isVertical == true){
			 throw new Error("setSizeHorizontal error, the strip size is not horizontal");
			 return(false);
		 }
		
		var height = g_sizes.thumbSecondSize + g_options.strip_padding_top + g_options.strip_padding_bottom;
		
		var objCssStrip = {};
		objCssStrip["width"] = width+"px";
		objCssStrip["height"] = height+"px";
		 
		g_objStrip.css(objCssStrip);
		
		storeStripSize(width);
		
		var innerLeft = g_options.strip_padding_left;
		
		 //set inner strip params
		 var objCssInner = {};
		 objCssInner["height"] = height+"px";
		 objCssInner["left"] = innerLeft + "px";
		 objCssInner["top"] = "0px";
		 
		 g_objStripInner.css(objCssInner);
		 
		 g_temp.is_placed = true;
		
		 checkControlsEnableDisable();
	}
	
	
	/**
	 * set position of the strip
	 */
	this.setPosition = function(left, top, offsetLeft, offsetTop){
		g_functions.placeElement(g_objStrip, left, top, offsetLeft, offsetTop);		
	}
	
	
	/**
	 * resize the panel according the orientation
	 */
	this.resize = function(newSize){
		
		if(g_isVertical == false){
			
			g_objStrip.width(newSize);
			g_sizes.stripActiveSize = newSize - g_options.strip_padding_left - g_options.strip_padding_right;

		}else{
			g_objStrip.height(newSize);
			g_sizes.stripActiveSize = newSize - g_options.strip_padding_top - g_options.strip_padding_bottom;
		}
		
		storeStripSize(newSize);
		
		checkControlsEnableDisable();
		
		checkAndRepositionInnerStrip();
		
		alignInnerStrip();
		
		scrollToSelectedThumb();
	}
	
	
	/**
	 * set the thumb unselected state
	 */
	this.setThumbUnselected = function(objThumbWrapper){
		
		g_thumbs.setThumbUnselected(objThumbWrapper);
		
	}
	
	
	/**
	 * set custom thumbs
	 */
	this.setCustomThumbs = function(funcSetHtml){
		
		g_thumbs.setCustomThumbs(funcSetHtml);
		
	}
	
	
	
	
	this.________EXTERNAL_GETTERS___________ = function(){};
	
	/**
	 * get objects
	 */	
	this.getObjects = function(){
		
		var thumbsOptions = g_thumbs.getOptions();
		var commonOpitions = jQuery.extend(g_options, thumbsOptions);
		
		var obj = {
			g_gallery: g_gallery,
			g_objGallery: g_objGallery,
			g_objWrapper:g_objWrapper,
			g_arrItems:g_arrItems,
			g_objStrip : g_objStrip,
			g_objStripInner : g_objStripInner,
			g_aviaControl:g_aviaControl,
			g_touchThumbsControl:g_touchThumbsControl,
			isVertical: g_isVertical,
			g_options: commonOpitions,
			g_thumbs: g_thumbs
		};
		
		return(obj);
	}
	
	
	/**
	 * get thumbs onject
	 */
	this.getObjThumbs = function(){
		
		return(g_thumbs);
	}
	
	
	/**
	 * get selected thumb
	 */
	this.getSelectedThumb = function(){
		
		var selectedIndex = g_gallery.getSelectedItemIndex();
		if(selectedIndex == -1)
			return(null);
		
		return g_thumbs.getThumbByIndex(selectedIndex);
	}
	
	
	/**
	 * get strip size and position object
	 */
	this.getSizeAndPosition = function(){
		
		var obj = g_functions.getElementSize(g_objStrip);
		
		return(obj);
	}
	
	/**
	 * get thumbs strip height
	 */
	this.getHeight = function(){
		
		var stripHeight = g_objStrip.outerHeight();
		
		return(stripHeight)
	}
	
	
	/**
	 * get thumbs strip width
	 */
	this.getWidth = function(){
		
		var stripWidth = g_objStrip.outerWidth();
		
		return(stripWidth);
	}
	
	
	
	/**
	 * get all stored sizes object
	 */
	this.getSizes = function(){
		
		return(g_sizes);
	}
	
	
	/**
	 * return if vertical orientation or not
	 */
	this.isVertical = function(){
		return(g_isVertical);
	}
	
	
	/**
	 * return if the strip is placed or not
	 */
	this.isPlaced = function(){
		
		return(g_temp.is_placed);
	}
	
	/**
	 * return if the strip moving enabled or not
	 */
	this.isMoveEnabled = function(){
		var isEnabled = isStripMovingEnabled();
		return(isEnabled);
	}

}


/**
 * touch thumbs control class
 * addon to strip gallery
 */
function UGTouchThumbsControl(){
	
	var g_parent, g_gallery, g_objGallery, g_objects;
	var g_objStrip, g_objStripInner, g_options, g_isVertical;
	var g_functions = new UGFunctions();
	
	//service variables	
	var g_serviceParams = {			
		touch_portion_time:200,					//the time in ms that the potion is counts for continue touch movement
		thumb_touch_slowFactor:0,				//set from user
		minDeltaTime: 70,						//don't alow portion less then the minTime
		minPath: 10,							//if less then this path, dont' continue motion
		limitsBreakAddition: 30,				//the limits break addition for second return animation
		returnAnimateSpeed: 500,				//the speed of return animation
		animationEasing: "easeOutCubic",		//animation easing function
		returnAnimationEasing: "easeOutCubic"	//return animation easing function
	};
	
	
	var g_temp = {					//temp variables
		touch_active:false,
		loop_active:false,
		mousePos:0,
		innerPos:0,
		startPos:0,
		startTime:0,		
		lastTime:0,
		buttonReleaseTime:0,
		lastPos:0,
		lastPortionPos:0,
		lastDeltaTime:0,
		lastDeltaPos:0,
		speed:0,
		handle:"",
		touchEnabled: false, 
		isControlEnabled: true
	};


	/**
	 * enable the control
	 */
	this.enable = function(){
		g_temp.isControlEnabled = true;
	}
	
	
	/**
	 * disable the control
	 */
	this.disable = function(){
		g_temp.isControlEnabled = false;		
	}
	
	/**
	 * init function for avia controls
	 */
	this.init = function(objStrip){
		
		g_parent = objStrip;
		g_objects = objStrip.getObjects();
		
		g_gallery = g_objects.g_gallery;
		g_objGallery = g_objects.g_objGallery;	//jquery object
				
		g_objStrip = g_objects.g_objStrip;
		g_objStripInner = g_objects.g_objStripInner;
		g_options = g_objects.g_options;
		g_isVertical = g_objects.isVertical;
		
		setServiceParams();
		
		initEvents();
	}
	
	/**
	 * get action related variables
	 */
	function getActionVars(){
		
		var currentTime = jQuery.now();

		var obj = {};
		obj.passedTime = g_temp.lastTime - g_temp.startTime;
		obj.lastActiveTime = currentTime - g_temp.buttonReleaseTime;
		obj.passedDistance = g_temp.lastPos - g_temp.startPos;
		obj.passedDistanceAbs = Math.abs(obj.passedDistance);
				
		return(obj);
	}
	
	/**
	 * return if passed some significant movement
	 */
	this.isSignificantPassed = function(){
		var objVars = getActionVars();
		if(objVars.passedTime > 300)
			return(true);
		
		if(objVars.passedDistanceAbs > 30)
			return(true);
		
		return(false);		
	}
	
	
	/**
	 * return true if the touch dragging or animate motion is active
	 */
	this.isTouchActive = function(){
		
		if(g_temp.touch_active == true)
			return(true);
			
		//check if still animating
		if(g_objStripInner.is(":animated") == true)
			return(true);
		
		//check if just ended, the touch active continue for a few moments.
		var objVars = getActionVars();
		if(objVars.lastActiveTime < 50) 
			return(true);
				
		return(false);
	}
	
	/**
	 * set service parameters from user parameters
	 */
	function setServiceParams(){
				
		//set slow factor by sensetivity of touch motion		
		g_serviceParams.thumb_touch_slowFactor = g_functions.normalizeSetting(0.00005, 0.01, 1, 100, g_options.strip_thumb_touch_sensetivity, true);
				
		//debugLine("slowfactor "+ g_serviceParams.thumb_touch_slowFactor);
	}
	
	
	/**
	 * get mouse position based on orientation
	 */
	function getMouseOrientPosition(event){
		
		if(g_isVertical == false)
			return(g_functions.getMousePosition(event).pageX);
		else
			return(g_functions.getMousePosition(event).pageY);			
	}
	
	/**
	 * position the strip according the touch drag diff
	 */
	function handleStripDrag(mousePos){
		var diff = g_temp.mousePos - mousePos;
		var distPos = g_temp.innerPos - diff;
		
		//make harder to drag the limits
		var objLimits = g_parent.getInnerStripLimits();
		
		if(distPos > objLimits.maxPos){
			var path = distPos - objLimits.maxPos;
			distPos = objLimits.maxPos + path/3;			
		}
		
		if(distPos < objLimits.minPos){
			var path = objLimits.minPos - distPos;
			distPos = objLimits.minPos - path/3;						
		}
		
		g_parent.positionInnerStrip(distPos);
	}
	
	
	/**
	 * store initial touch values
	 */
	function storeInitTouchValues(pagePos){
		var currentInnerPos = g_parent.getInnerStripPos();
		
		//remember current mouse position and inner strip position
		g_temp.mousePos = pagePos;
		g_temp.innerPos = currentInnerPos;
		g_temp.lastPortionPos = currentInnerPos;
		g_temp.lastDeltaTime = 0;
		g_temp.lastDeltaPos = 0;
		
		//init position and time related variables
		g_temp.startTime = jQuery.now();
		g_temp.startPos = g_temp.innerPos;
		
		g_temp.lastTime = g_temp.startTime;
		g_temp.lastPos = g_temp.startPos;
		g_temp.speed = 0;
	}
	
	
	/**
	 * store touch portion data
	 */
	function storeTouchPortionData(){
				
		//calc speed
		var currentTime = jQuery.now();
		var deltaTime = currentTime - g_temp.lastTime;
		
		if(deltaTime >= g_serviceParams.touch_portion_time){
			g_temp.lastDeltaTime = currentTime - g_temp.lastTime;
			if(g_temp.lastDeltaTime > g_serviceParams.touch_portion_time)
				g_temp.lastDeltaTime = g_serviceParams.touch_portion_time;
				
			g_temp.lastDeltaPos = g_temp.lastPos - g_temp.lastPortionPos;
						
			g_temp.lastPortionPos = g_temp.lastPos;
			g_temp.lastTime = currentTime;
			
		}
		
	}
	
	
	/**
	 * continue touch motion - touch motion ending.
	 */
	function continueTouchMotion(){
				
		var slowFactor = g_serviceParams.thumb_touch_slowFactor;
		
		//don't alow portion less then the minTime
		var minDeltaTime = g_serviceParams.minDeltaTime;
		
		//if less then this path, dont' continue motion
		var minPath = g_serviceParams.minPath;	
		
		var currentInnerPos = g_parent.getInnerStripPos();
		
		var currentTime = jQuery.now();
		var deltaTime = currentTime - g_temp.lastTime;
		var deltaPos = currentInnerPos - g_temp.lastPortionPos;
		
		//if time too fast, take last portion values
		if(deltaTime < minDeltaTime && g_temp.lastDeltaTime > 0){
			deltaTime = g_temp.lastDeltaTime;
			deltaPos = g_temp.lastDeltaPos + deltaPos;
		}
		
		//fix delta time
		if(deltaTime < minDeltaTime)
			deltaTime = minDeltaTime;
					
		var dir = (deltaPos > 0)?1:-1;
		
		var speed = 0;
		if(deltaTime > 0)
			speed = deltaPos / deltaTime;	
		
		var path = (speed * speed) / (slowFactor * 2) * dir;
		
		//disable path for very slow motions
		if(Math.abs(path) <= minPath)
			path = 0;
		
		
		var innerStripPos = g_parent.getInnerStripPos();
		var newPos = innerStripPos + path;	
		
		var correctPos = g_parent.fixInnerStripLimits(newPos);
		var objLimits = g_parent.getInnerStripLimits();
		
		//check the off the limits and return (second animation)
		var limitsBreakAddition = g_serviceParams.limitsBreakAddition;
		var doQueue = false;
		var returnPos = correctPos;
		
		//fix the first animation position (off the limits)
		if(newPos > objLimits.maxPos){
			doQueue = true;
			correctPos = limitsBreakAddition;
			if(newPos < limitsBreakAddition)
				correctPos = newPos;			
		}
				
		if(newPos < objLimits.minPos){
			doQueue = true;
			var maxStopPos = objLimits.minPos - limitsBreakAddition;
			correctPos = maxStopPos;
			if(newPos > maxStopPos)
				correctPos = newPos;
		}
				
		var correctPath = correctPos - innerStripPos;
		
		//set animation speed		
		var animateSpeed =  Math.abs(Math.round(speed / slowFactor));
		
		//fix animation speed according the paths difference
		if(path != 0)
			animateSpeed = animateSpeed * correctPath / path;		
		
		
		//Do first animation
		if(innerStripPos != correctPos){
			
			var animateProps = {"left":correctPos+"px"};
			if(g_isVertical == true)
				animateProps = {"top":correctPos+"px"};		
			
			g_objStripInner.animate(animateProps ,{
					duration: animateSpeed,
					easing: g_serviceParams.animationEasing,
					queue: true,
					progress:onAnimateProgress 
			});
						
		}
		
				
		//do second animation if off limits
		if(doQueue == true){
			var returnAnimateSpeed = g_serviceParams.returnAnimateSpeed;
			
			var returnAnimateProps = {"left":returnPos+"px"};
			if(g_isVertical == true)
				returnAnimateProps = {"top":returnPos+"px"};		
			
			
			g_objStripInner.animate(returnAnimateProps,{				
				duration: returnAnimateSpeed,
				easing: g_serviceParams.returnAnimationEasing,
				queue: true,
				progress:onAnimateProgress 
			});
		}
		
	}
	
	/**
	 * on animate progress event. store position and trigger event to gallery
	 */
	function onAnimateProgress(){
		g_temp.lastPos = g_parent.getInnerStripPos();
		g_parent.triggerStripMoveEvent();
	}
	
	/**
	 * start loop while touching strip
	 */
	function startStripTouchLoop(){
		
		if(g_temp.loop_active == true)
			return(true);
			
		g_temp.loop_active = true;
		g_temp.handle = setInterval(storeTouchPortionData,10);
	}
	
	
	/**
	 * end loop when not touching
	 */
	function endStripTouchLoop(event){
		
		if(g_temp.loop_active == false)
			return(true);
		
		if(event){
			var pagePos = getMouseOrientPosition(event);
			continueTouchMotion(pagePos);
		}
		
		g_temp.loop_active = false;
		g_temp.handle = clearInterval(g_temp.handle);
	}
	
	
	/**
	 * on tuch end event
	 */
	function onTouchEnd(event){
		
		if(g_temp.isControlEnabled == false)
			return(true);
				
		g_temp.buttonReleaseTime = jQuery.now();
		
		if(g_temp.touch_active == false){
			endStripTouchLoop(event);
			return(true);
		}
		
		event.preventDefault();
			
		g_temp.touch_active = false;
		
		endStripTouchLoop(event);
		
		g_objStrip.removeClass("ug-dragging");
		
	}
	
	
	/**
	 * on touch start - start the motion
	 * @param event
	 */
	function onTouchStart(event){
		
		if(g_temp.isControlEnabled == false)
			return(true);
		
		event.preventDefault();
		
		g_temp.touch_active = true;		//don't move this up
		
		var pagePos = getMouseOrientPosition(event);
					
		//stop inner animation if exist
		g_objStripInner.stop(true);
		
		//store initial touch values
		storeInitTouchValues(pagePos);
		startStripTouchLoop();
		
		g_objStrip.addClass("ug-dragging");
	}
	
	
	/**
	 * on touch move event, move the strip
	 */
	function onTouchMove(event){
		
		if(g_temp.isControlEnabled == false)
			return(true);		
		
		if(g_temp.touch_active == false)
			return(true);
		
		event.preventDefault();
		
		//detect moving without button press
		if(event.buttons == 0){
			g_temp.touch_active = false;
			
			endStripTouchLoop(event);
			return(true);
		}
	
		//store current position
		var pagePos = getMouseOrientPosition(event);
		g_temp.lastPos = g_parent.getInnerStripPos();
		
		handleStripDrag(pagePos);
		
		storeTouchPortionData();
		
	}
	
	
	/**
	 * init strip touch events
	 */
	function initEvents(){
		
		//strip mouse down - drag start
		g_objStrip.bind("mousedown touchstart",onTouchStart);

		
		//on body mouse up - drag end
		jQuery(window).add("body").bind("mouseup touchend",onTouchEnd);
				
		//on body move
		jQuery("body").bind("mousemove touchmove", onTouchMove);
		
	}
	
	
	/**
	 * destroy the touch events
	 */
	this.destroy = function(){
		g_objStrip.unbind("mousedown");
		g_objStrip.unbind("touchstart");
		jQuery(window).add("body").unbind("mouseup").unbind("touchend");
		jQuery("body").unbind("mousemove").unbind("touchmove");
	}
}


/** -------------- Panel Base Functions ---------------------*/

function UGPanelsBase(){
	
	var g_temp, g_panel, g_objPanel, g_options, g_objThis;
	var g_gallery = new UniteGalleryMain();
	var t = this, g_objHandle, g_objGallery;
	var g_functions = new UGFunctions();
	
	
	/**
	 * init the base panel
	 */
	this.init = function(gallery, g_tempArg, g_panelArg, options, g_objThisArg){
		g_temp = g_tempArg; 
		g_panel = g_panelArg;
		g_gallery = gallery;
		g_options = options;
		g_objThis = g_objThisArg;
		
		g_objGallery = jQuery(g_gallery);
	}

	/**
	 * set common panels html
	 */
	this.setHtml = function(g_objPanelArg){
		
		g_objPanel = g_objPanelArg;
		
		if(g_temp.panelType == "strip")
			var enable_handle = g_options.strippanel_enable_handle;
		else
			var enable_handle = g_options.gridpanel_enable_handle;
		
		// add handle
		if (enable_handle == true) {
			g_objHandle = new UGPanelHandle();
			g_objHandle.init(g_panel, g_objPanel, g_options, g_temp.panelType, g_gallery);
			g_objHandle.setHtml();
		}
		
		
		//set disabled at start if exists
		if(g_temp.isDisabledAtStart === true){
			var html = "<div class='ug-overlay-disabled'></div>";
			g_objPanel.append(html);
			
			setTimeout(function(){
				g_objPanel.children(".ug-overlay-disabled").hide();
			}, g_temp.disabledAtStartTimeout);
		
		}
		
	}
	
	
	/**
	 * place common elements
	 */
	this.placeElements = function(){
		
		// place handle
		if (g_objHandle)
			g_objHandle.placeHandle();		
	}
	
	
	/**
	 * init common events
	 */
	this.initEvents = function(){
		
		// set handle events
		if (g_objHandle){
			g_objHandle.initEvents();
			
			//set on slider action events
			g_objGallery.on(g_gallery.events.SLIDER_ACTION_START, function(){			
				g_objHandle.hideHandle();
			});
			
			g_objGallery.on(g_gallery.events.SLIDER_ACTION_END, function(){			
				g_objHandle.showHandle();
			});
			
		}
		
	}
	
	/**
	 * destroy the panel events
	 */
	this.destroy = function(){
		
		if(g_objHandle){
			g_objHandle.destroy();
			g_objGallery.off(g_gallery.events.SLIDER_ACTION_START);
			g_objGallery.off(g_gallery.events.SLIDER_ACTION_END);
		}
		
	}
	
	/**
	 * place panel with some animation
	 */
	function placePanelAnimation(panelDest, functionOnComplete) {

		switch (g_temp.orientation) {
		case "right": // vertical
		case "left":
			var objCss = {
				left : panelDest + "px"
			};
			break;
		case "top":
		case "bottom":
			var objCss = {
				top : panelDest + "px"
			};
			break;
		}

		g_objPanel.stop(true).animate(objCss, {
			duration : 300,
			easing : "easeInOutQuad",
			queue : false,
			complete : function() {
				if (functionOnComplete)
					functionOnComplete();
			}
		});

	}
	
	
	/**
	 * place the panel without animation
	 * 
	 * @param panelDest
	 */
	function placePanelNoAnimation(panelDest) {

		switch (g_temp.orientation) {
		case "right": // vertical
		case "left":
			g_functions.placeElement(g_objPanel, panelDest, null);
			break;
		case "top":
		case "bottom":
			g_functions.placeElement(g_objPanel, null, panelDest);
			break;
		}
	}
	
	/**
	 * event on panel slide finish
	 */
	function onPanelSlideFinish() {

		g_objThis.trigger(g_panel.events.FINISH_MOVE);

	}
	
	
	/**
	 * open the panel
	 */
	this.openPanel = function(noAnimation) {

		if (!noAnimation)
			var noAnimation = false;

		if (g_objPanel.is(":animated"))
			return (false);

		if (g_temp.isClosed == false)
			return (false);

		g_temp.isClosed = false;

		g_objThis.trigger(g_panel.events.OPEN_PANEL);

		if (noAnimation === false)
			placePanelAnimation(g_temp.originalPos, onPanelSlideFinish);
		else {

			placePanelNoAnimation(g_temp.originalPos);
			onPanelSlideFinish();
		}

	}

	
	/**
	 * close the panel (slide in)
	 */
	this.closePanel = function(noAnimation) {

		if (!noAnimation)
			var noAnimation = false;

		if (g_objPanel.is(":animated"))
			return (false);

		if (g_temp.isClosed == true)
			return (false);

		var panelDest = t.getClosedPanelDest();

		g_temp.isClosed = true;

		g_objThis.trigger(g_panel.events.CLOSE_PANEL);

		if (noAnimation === false)
			placePanelAnimation(panelDest, onPanelSlideFinish);
		else {
			placePanelNoAnimation(panelDest);
			onPanelSlideFinish();
		}

	}
	
	/**
	 * set the panel that it's in closed state, and set original pos for opening
	 * later
	 */
	this.setClosedState = function(originalPos) {
		
		g_temp.originalPos = originalPos;
		g_objThis.trigger(g_panel.events.CLOSE_PANEL);

		g_temp.isClosed = true;
	}

	/**
	 * set the panel opened state
	 */
	this.setOpenedState = function(originalPos) {
		g_objThis.trigger(g_panel.events.OPEN_PANEL);

		g_temp.isClosed = false;
	}

	/**
	 * get closed panel destanation
	 */
	this.getClosedPanelDest = function() {

		var objPanelSize = g_functions.getElementSize(g_objPanel), panelDest;

		switch (g_temp.orientation) {
		case "left":
			g_temp.originalPos = objPanelSize.left;
			panelDest = -g_temp.panelWidth;
			break;
		case "right":
			g_temp.originalPos = objPanelSize.left;
			var gallerySize = g_gallery.getSize();
			panelDest = gallerySize.width;
			break;
		case "top":
			g_temp.originalPos = objPanelSize.top;
			panelDest = -g_temp.panelHeight;
			break;
		case "bottom":
			g_temp.originalPos = objPanelSize.top;
			var gallerySize = g_gallery.getSize();
			panelDest = gallerySize.height;
			break;
		}

		return (panelDest);
	}


	/**
	 * tells if the panel is closed
	 */
	this.isPanelClosed = function() {

		return (g_temp.isClosed);
	}
	
	
	/**
	 * set the panel disabled at start, called after init before setHtml
	 * it's enabled again after timeout end
	 */
	this.setDisabledAtStart = function(timeout){
		
		if(timeout <= 0)
			return(false);
			
		g_temp.isDisabledAtStart = true;
		g_temp.disabledAtStartTimeout = timeout;
		
	}
	
	
}


/** -------------- Panel Handle object ---------------------*/

function UGPanelHandle(){
	
	var t = this, g_objPanel, g_panel, g_objHandleTip, g_panelOptions = {};
	var g_functions = new UGFunctions();
	
	var g_options = {
			panel_handle_align: "top",		//top, middle, bottom , left, right, center - close handle tip align on the handle bar according panel orientation
			panel_handle_offset: 0,			//offset of handle bar according the valign
			panel_handle_skin: 0			//skin of the handle, if empty inherit from gallery skin
	};
	
	
	/**
	 * init the handle
	 */
	this.init = function(panel, objPanel, panelOptions, panelType, gallery){
		g_panel = panel;
		g_objPanel = objPanel;
		
		//set needed options
		switch(panelType){		
			case "grid":
				g_options.panel_handle_align = panelOptions.gridpanel_handle_align;
				g_options.panel_handle_offset = panelOptions.gridpanel_handle_offset;
				g_options.panel_handle_skin = panelOptions.gridpanel_handle_skin;
			break;
			case "strip":
				g_options.panel_handle_align = panelOptions.strippanel_handle_align;
				g_options.panel_handle_offset = panelOptions.strippanel_handle_offset;
				g_options.panel_handle_skin = panelOptions.strippanel_handle_skin;
			break;
			default:
				throw new Error("Panel handle error: wrong panel type: " + panelType);			
			break;
		}
		
		//set arrows skin:
		var galleryOptions = gallery.getOptions();
		var globalSkin = galleryOptions.gallery_skin;		
		if(g_options.panel_handle_skin == "")
			g_options.panel_handle_skin = globalSkin;
		
		
	}
	
	
	/**
	 * set handle html
	 */
	this.setHtml = function(){
		
		var orientation = g_panel.getOrientation();
				
		var classTip = "ug-panel-handle-tip";
		
		switch(orientation){
			case "right":
				classTip += " ug-handle-tip-left";				
			break;
			case "left":
				classTip += " ug-handle-tip-right";
			break;
			case "bottom":
				classTip += " ug-handle-tip-top";				
			break;
			case "top":
				classTip += " ug-handle-tip-bottom";
			break;
		}
		
		g_objPanel.append("<div class='"+classTip+" ug-skin-" + g_options.panel_handle_skin + "'></div>");
		g_objHandleTip = g_objPanel.children(".ug-panel-handle-tip");
	}
	
	
	/**
	 * remove hover state of the tip
	 */
	function removeHoverState(){
				
		g_objHandleTip.removeClass("ug-button-hover");
	}
	
	/**
	 * add closed state class
	 */
	function setClosedState(){
				
		g_objHandleTip.addClass("ug-button-closed");		
	}
	
	/**
	 * add closed state class
	 */
	function removeClosedState(){
		g_objHandleTip.removeClass("ug-button-closed");		
	}

	/**
	 * on handle click, close or open panel
	 */
	function onHandleClick(event){
		
		event.stopPropagation();
		event.stopImmediatePropagation();
		
		if(g_functions.validateClickTouchstartEvent(event.type) == false)
			return(true);
		
		if(g_panel.isPanelClosed())
			g_panel.openPanel();
		else
			g_panel.closePanel();
	}
	
	/**
	 * init events
	 */
	this.initEvents = function(){
		g_functions.addClassOnHover(g_objHandleTip);
		g_objHandleTip.bind("click touchstart", onHandleClick);
		
		//on panel open
		jQuery(g_panel).on(g_panel.events.OPEN_PANEL, function(){
			removeHoverState();
			removeClosedState();
		});
		
		//one panel close
		jQuery(g_panel).on(g_panel.events.CLOSE_PANEL, function(){
			removeHoverState();
			setClosedState();
		});
		
	}
	
	/**
	 * destroy the handle panel events
	 */
	this.destroy = function(){
		g_functions.destroyButton(g_objHandleTip);
		jQuery(g_panel).off(g_panel.events.OPEN_PANEL);
		jQuery(g_panel).off(g_panel.events.CLOSE_PANEL);
	}
	
	
	
	/**
	 * check and fix align option, set write direction
	 */
	function checkAndFixAlign(){
		var orientation = g_panel.getOrientation();
		
		switch(orientation){
			case "right":
			case "left":
				if(g_options.panel_handle_align != "top" && g_options.panel_handle_align != "bottom")
					g_options.panel_handle_align = "top";
			break;
			case "bottom":
				if(g_options.panel_handle_align != "left" && g_options.panel_handle_align != "right")
					g_options.panel_handle_align = "left";
			break;
			case "top":
				if(g_options.panel_handle_align != "left" && g_options.panel_handle_align != "right")
					g_options.panel_handle_align = "right";				
			break;
		}		
		
	}
	
	
	/**
	 * place the panel
	 */
	this.placeHandle = function(){
		var handleSize = g_functions.getElementSize(g_objHandleTip);
		
		checkAndFixAlign();
				
		var orientation = g_panel.getOrientation();
		
		switch(orientation){
			case "left":
				g_functions.placeElement(g_objHandleTip, "right", g_options.panel_handle_align, -handleSize.width);
			break;
			case "right":
				g_functions.placeElement(g_objHandleTip, -handleSize.width, g_options.panel_handle_align, 0 ,g_options.panel_handle_offset);
			break;
			case "top":
				g_functions.placeElement(g_objHandleTip, g_options.panel_handle_align, "bottom", g_options.panel_handle_offset, -handleSize.height);
			break;
			case "bottom":
				g_functions.placeElement(g_objHandleTip, g_options.panel_handle_align, "top", g_options.panel_handle_offset, -handleSize.height);
			break;
			default:
				throw new Error("Wrong panel orientation: " + orientation);
			break;
		}
		
	}
	
	/**
	 * hide the handle
	 */
	this.hideHandle = function(){
		
		if(g_objHandleTip.is(":visible") == true)
			g_objHandleTip.hide();
	
	}
	
	/**
	 * show the handle
	 */
	this.showHandle = function(){
		
		if(g_objHandleTip.is(":visible") == false)
			g_objHandleTip.show();
		
	}
	
	
}

/**
 * grid panel class addon to grid gallery
 */
function UGStripPanel() {

	var t = this, g_objThis = jQuery(this);
	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objWrapper, g_objPanel;
	var g_functions = new UGFunctions(), g_objStrip = new UGThumbsStrip(), g_panelBase = new UGPanelsBase();
	var g_objButtonNext, g_objButtonPrev;

	this.events = {
		FINISH_MOVE : "gridpanel_move_finish", // called after close or open panel (slide finish).
		OPEN_PANEL : "open_panel", 			   // called before opening the panel.
		CLOSE_PANEL : "close_panel" 		   // called before closing the panel.
	};

	var g_options = {

		strippanel_vertical_type : false, // true, false - specify if the panel is vertical or horizonatal type

		strippanel_padding_top : 8,       // space from top of the panel
		strippanel_padding_bottom : 8,    // space from bottom of the panel

		strippanel_padding_left : 0,      // space from left of the panel
		strippanel_padding_right : 0,     // space from right of the panel

		strippanel_enable_buttons : true, // enable buttons from the sides of the panel
		strippanel_buttons_skin : "",     // skin of the buttons, if empty inherit from gallery skin
										  
		strippanel_padding_buttons : 2,   // padding between the buttons and the panel

		strippanel_buttons_role : "scroll_strip",   // scroll_strip, advance_item - the role of the side buttons
		
		strippanel_enable_handle : true,  // enable grid handle
		strippanel_handle_align : "top",  // top, middle, bottom , left, right, center - close handle tip align on the handle bar according panel orientation
		strippanel_handle_offset : 0, 	  // offset of handle bar according the valign
										
		strippanel_handle_skin : "", 	  // skin of the handle, if empty inherit  from gallery skin

		strippanel_background_color : ""  // background color of the strip wrapper, if not set, it will be taken from the css
		
	};

	var g_defaults_vertical = {
		strip_vertical_type : true,
		strippanel_padding_left : 8,
		strippanel_padding_right : 8,
		strippanel_padding_top : 0,
		strippanel_padding_bottom : 0
	};

	var g_defaults_no_buttons = {
		strippanel_padding_left : 8,
		strippanel_padding_right : 8,
		strippanel_padding_top : 8,
		strippanel_padding_bottom : 8
	};

	var g_temp = {
		panelType: "strip",
		panelWidth : 0,
		panelHeight : 0,
		isEventsInited : false,
		isClosed : false,
		orientation : null,
		originalPos : null,
		isFirstRun : true
	};

	/**
	 * init the panel
	 */
	function initPanel(gallery, customOptions) {
		g_gallery = gallery;

		g_objGallery = jQuery(g_gallery);

		g_options = jQuery.extend(g_options, customOptions);

		var repeatCustomOptions = false;

		if (g_options.strippanel_vertical_type == true) {
			g_options = jQuery.extend(g_options, g_defaults_vertical);
			repeatCustomOptions = true;
		}

		if (g_options.strippanel_enable_buttons == false) {
			g_options = jQuery.extend(g_options, g_defaults_no_buttons);
			repeatCustomOptions = true;
		}

		if (repeatCustomOptions == true)
			g_options = jQuery.extend(g_options, customOptions); // do the
		
		
		// set arrows skin:
		var galleryOptions = g_gallery.getOptions();
		var globalSkin = galleryOptions.gallery_skin;
		if (g_options.strippanel_buttons_skin == "")
			g_options.strippanel_buttons_skin = globalSkin;

		g_objWrapper = g_gallery.getElement();
		
		//init the base panel object:
		g_panelBase.init(g_gallery, g_temp, t, g_options, g_objThis);
		
		//init thumbs strip
		g_objStrip = new UGThumbsStrip();
		g_objStrip.init(g_gallery, g_options);
		
	}

	
	/**
	 * validate panel before run
	 */
	function validatePanelBeforeRun() {
		
		if (g_options.strippanel_vertical_type == false) { // horizontal
															// validate
			if (g_temp.panelWidth == 0) {
				throw new Error(
						"Strip panel error: The width not set, please set width");
				return (false);
			}

		} else { // vertical validate

			if (g_temp.panelHeight == 0) {
				throw new Error(
						"Strip panel error: The height not set, please set height");
				return (false);
			}

		}

		// validate orientation
		if (g_temp.orientation == null) {
			throw new Error(
					"Wrong orientation, please set panel orientation before run");
			return (false);
		}

		return (true);
	}

	/**
	 * run the panel
	 */
	function runPanel() {

		// validation
		if (g_temp.isFirstRun == true && validatePanelBeforeRun() == false)
			return (false);

		g_objStrip.run();
		
		setElementsSize();
		placeElements();
				
		initEvents();

		g_temp.isFirstRun = false;

		checkSideButtons();
	}

	/**
	 * set panel html
	 */
	function setPanelHtml(parentContainer) {
		
		if (!parentContainer)
			var parentContainer = g_objWrapper;

		// add panel wrapper
		parentContainer.append("<div class='ug-strip-panel'></div>");

		g_objPanel = parentContainer.children('.ug-strip-panel');

		// add arrows:
		if (g_options.strippanel_enable_buttons == true) {

			var arrowPrevClass = "ug-strip-arrow-left";
			var arrowNextClass = "ug-strip-arrow-right";
			if (g_options.strippanel_vertical_type == true) {
				arrowPrevClass = "ug-strip-arrow-up";
				arrowNextClass = "ug-strip-arrow-down";
			}

			g_objPanel.append("<div class='ug-strip-arrow " + arrowPrevClass
					+ " ug-skin-" + g_options.strippanel_buttons_skin
					+ "'><div class='ug-strip-arrow-tip'></div></div>");
			g_objPanel.append("<div class='ug-strip-arrow " + arrowNextClass
					+ " ug-skin-" + g_options.strippanel_buttons_skin
					+ "'><div class='ug-strip-arrow-tip'></div></div>");

		}
		
		g_panelBase.setHtml(g_objPanel);
		
		g_objStrip.setHtml(g_objPanel);
		
		if (g_options.strippanel_enable_buttons == true) {
			g_objButtonPrev = g_objPanel.children("." + arrowPrevClass);
			g_objButtonNext = g_objPanel.children("." + arrowNextClass);
		}

		setHtmlProperties();
	}

	/**
	 * set html properties according the options
	 */
	function setHtmlProperties() {

		// set panel background color
		if (g_options.strippanel_background_color != "")
			g_objPanel.css("background-color",
					g_options.strippanel_background_color);

	}

	/**
	 * set elements size horizontal type
	 */
	function setElementsSize_hor() {
		
		// get strip height
		var stripHeight = g_objStrip.getHeight();
		var panelWidth = g_temp.panelWidth;

		// set buttons height
		if (g_objButtonNext) {
			g_objButtonPrev.height(stripHeight);
			g_objButtonNext.height(stripHeight);

			// arrange buttons tip
			var prevTip = g_objButtonPrev.children(".ug-strip-arrow-tip");
			g_functions.placeElement(prevTip, "center", "middle");

			var nextTip = g_objButtonNext.children(".ug-strip-arrow-tip");
			g_functions.placeElement(nextTip, "center", "middle");
		}

		// set panel height
		var panelHeight = stripHeight + g_options.strippanel_padding_top
				+ g_options.strippanel_padding_bottom;

		// set panel size
		g_objPanel.width(panelWidth);
		g_objPanel.height(panelHeight);

		g_temp.panelHeight = panelHeight;

		// set strip size
		var stripWidth = panelWidth - g_options.strippanel_padding_left	- g_options.strippanel_padding_right;

		if (g_objButtonNext) {
			var buttonWidth = g_objButtonNext.outerWidth();
			stripWidth = stripWidth - buttonWidth * 2 - g_options.strippanel_padding_buttons * 2;
		}

		g_objStrip.resize(stripWidth);
	}

	/**
	 * set elements size vertical type
	 */
	function setElementsSize_vert() {
				
		// get strip width
		var stripWidth = g_objStrip.getWidth();
		var panelHeight = g_temp.panelHeight;
		
		// set buttons height
		if (g_objButtonNext) {
			g_objButtonPrev.width(stripWidth);
			g_objButtonNext.width(stripWidth);

			// arrange buttons tip
			var prevTip = g_objButtonPrev.children(".ug-strip-arrow-tip");
			g_functions.placeElement(prevTip, "center", "middle");

			var nextTip = g_objButtonNext.children(".ug-strip-arrow-tip");
			g_functions.placeElement(nextTip, "center", "middle");
		}

		// set panel width
		var panelWidth = stripWidth + g_options.strippanel_padding_left
				+ g_options.strippanel_padding_right;

		// set panel size
		g_objPanel.width(panelWidth);
		g_objPanel.height(panelHeight);

		g_temp.panelWidth = panelWidth;

		// set strip size
		var stripHeight = panelHeight - g_options.strippanel_padding_top
				- g_options.strippanel_padding_bottom;

		if (g_objButtonNext) {
			var buttonHeight = g_objButtonNext.outerHeight();
			stripHeight = stripHeight - buttonHeight * 2
					- g_options.strippanel_padding_buttons * 2;
		}

		g_objStrip.resize(stripHeight);
	}

	/**
	 * set elements size and place the elements
	 */
	function setElementsSize() {

		if (g_options.strippanel_vertical_type == false)
			setElementsSize_hor();
		else
			setElementsSize_vert();
	}

	/**
	 * place elements horizontally
	 */
	function placeElements_hor() {

		// place buttons
		if (g_objButtonNext) {
			g_functions.placeElement(g_objButtonPrev, "left", "top",
					g_options.strippanel_padding_left,
					g_options.strippanel_padding_top);
			g_functions.placeElement(g_objButtonNext, "right", "top",
					g_options.strippanel_padding_right,
					g_options.strippanel_padding_top);
		}

		var stripX = g_options.strippanel_padding_left;
		if (g_objButtonNext)
			stripX += g_objButtonNext.outerWidth()
					+ g_options.strippanel_padding_buttons;

		g_objStrip.setPosition(stripX, g_options.strippanel_padding_top);

	}

	/**
	 * place elements vertically
	 */
	function placeElements_vert() {

		// place buttons
		if (g_objButtonNext) {
			g_functions.placeElement(g_objButtonPrev, "left", "top",
					g_options.strippanel_padding_left,
					g_options.strippanel_padding_top);
			g_functions.placeElement(g_objButtonNext, "left", "bottom",
					g_options.strippanel_padding_left,
					g_options.strippanel_padding_bottom);
		}

		var stripY = g_options.strippanel_padding_top;
		if (g_objButtonNext)
			stripY += g_objButtonNext.outerHeight()
					+ g_options.strippanel_padding_buttons;

		g_objStrip.setPosition(g_options.strippanel_padding_left, stripY);
	}

	/**
	 * place elements
	 */
	function placeElements() {

		if (g_options.strippanel_vertical_type == false)
			placeElements_hor();
		else
			placeElements_vert();

		g_panelBase.placeElements();

	}



	function __________EVENTS___________() {
	}
	;

	/**
	 * on next button click
	 */
	function onNextButtonClick(objButton) {

		if (g_functions.isButtonDisabled(objButton))
			return (true);

		if (g_options.strippanel_buttons_role == "advance_item")
			g_gallery.nextItem();
		else
			g_objStrip.scrollForeward();
	}

	/**
	 * on previous button click
	 */
	function onPrevButtonClick(objButton) {

		if (g_functions.isButtonDisabled(objButton))
			return (true);

		if (g_options.strippanel_buttons_role == "advance_item")
			g_gallery.prevItem();
		else
			g_objStrip.scrollBack();
	}

	/**
	 * check buttons if they need to be disabled or not
	 */
	function checkSideButtons() {
				
		if (!g_objButtonNext)
			return (true);

		// if the strip not movable - disable both buttons
		if (g_objStrip.isMoveEnabled() == false) {
			g_functions.disableButton(g_objButtonPrev);
			g_functions.disableButton(g_objButtonNext);
			return (true);
		}
		
		// check the limits
		var limits = g_objStrip.getInnerStripLimits();
		var pos = g_objStrip.getInnerStripPos();
		
		if (pos >= limits.maxPos) {
			g_functions.disableButton(g_objButtonPrev);
		} else {
			g_functions.enableButton(g_objButtonPrev);
		}

		if (pos <= limits.minPos)
			g_functions.disableButton(g_objButtonNext);
		else
			g_functions.enableButton(g_objButtonNext);

	}

	/**
	 * on strip move event
	 */
	function onStripMove() {
		checkSideButtons();
	}

	/**
	 * on item change event, disable or enable buttons according the images
	 * position
	 */
	function onItemChange() {

		if (g_gallery.isLastItem())
			g_functions.disableButton(g_objButtonNext);
		else
			g_functions.enableButton(g_objButtonNext);

		if (g_gallery.isFirstItem())
			g_functions.disableButton(g_objButtonPrev);
		else
			g_functions.enableButton(g_objButtonPrev);

	}


	/**
	 * init panel events
	 */
	function initEvents() {

		if (g_temp.isEventsInited == true)
			return (false);
		
		g_temp.isEventsInited = true;
		
		// buttons events
		if (g_objButtonNext) {

			// add hove class
			g_functions.addClassOnHover(g_objButtonNext, "ug-button-hover");
			g_functions.addClassOnHover(g_objButtonPrev, "ug-button-hover");

			// add click events
			g_functions.setButtonOnClick(g_objButtonPrev, onPrevButtonClick);
			g_functions.setButtonOnClick(g_objButtonNext, onNextButtonClick);

			// add disable / enable buttons on strip move event
			if (g_options.strippanel_buttons_role != "advance_item") {
				
				jQuery(g_objStrip).on(g_objStrip.events.STRIP_MOVE, onStripMove);
				
				jQuery(g_objStrip).on(g_objStrip.events.INNER_SIZE_CHANGE, checkSideButtons);
				
				g_objGallery.on(g_gallery.events.SIZE_CHANGE, checkSideButtons);
				
			} else {
				var galleryOptions = g_gallery.getOptions();
				if (galleryOptions.gallery_carousel == false)
					jQuery(g_gallery).on(g_gallery.events.ITEM_CHANGE, onItemChange);
			}

		}

		g_panelBase.initEvents();
	}
	
	/**
	 * destroy the strip panel events
	 */
	this.destroy = function(){
		
		if(g_objButtonNext){
			g_functions.destroyButton(g_objButtonNext);
			g_functions.destroyButton(g_objButtonPrev);
			jQuery(g_objStrip).off(g_objStrip.events.STRIP_MOVE);
			jQuery(g_gallery).off(g_gallery.events.ITEM_CHANGE);
			jQuery(g_gallery).off(g_gallery.events.SIZE_CHANGE);
		}
		
		g_panelBase.destroy();
		g_objStrip.destroy();
	}
	
	
	/**
	 * get panel orientation
	 */
	this.getOrientation = function() {

		return (g_temp.orientation);
	}

	/**
	 * set panel orientation (left, right, top, bottom)
	 */
	this.setOrientation = function(orientation) {

		g_temp.orientation = orientation;
	}

	
	/**
	 * init the panel
	 */
	this.init = function(gallery, customOptions) {
		initPanel(gallery, customOptions);
	}

	/**
	 * run the panel
	 */
	this.run = function() {
		runPanel();
	}

	/**
	 * place panel html
	 */
	this.setHtml = function(parentContainer) {
		setPanelHtml(parentContainer);
	}

	/**
	 * get the panel element
	 */
	this.getElement = function() {
		return (g_objPanel);
	}

	/**
	 * get panel size object
	 */
	this.getSize = function() {

		var objSize = g_functions.getElementSize(g_objPanel);

		return (objSize);
	}

	/**
	 * set panel width (for horizonal type)
	 */
	this.setWidth = function(width) {

		g_temp.panelWidth = width;

	}

	/**
	 * set panel height (for vertical type)
	 */
	this.setHeight = function(height) {

		g_temp.panelHeight = height;

	}

	/**
	 * resize the panel
	 */
	this.resize = function(newWidth) {
		t.setWidth(newWidth);
		setElementsSize();
		placeElements();
	}
	
	this.__________Functions_From_Base_____ = function() {}
	
	/**
	 * tells if the panel is closed
	 */
	this.isPanelClosed = function() {		
		return (g_panelBase.isPanelClosed());
	}

	/**
	 * get closed panel destanation
	 */
	this.getClosedPanelDest = function() {
		return g_panelBase.getClosedPanelDest();
	}	
		
	/**
	 * open the panel
	 */	
	this.openPanel = function(noAnimation) {
		g_panelBase.openPanel(noAnimation);
	}
	
	
	/**
	 * close the panel (slide in)
	 */
	this.closePanel = function(noAnimation) {
		g_panelBase.closePanel(noAnimation);		
	}	
	
	/**
	 * set the panel opened state
	 */
	this.setOpenedState = function(originalPos) {
		g_panelBase.setOpenedState(originalPos);
	}

	/**
	 * set the panel that it's in closed state, and set original pos for opening later
	 */
	this.setClosedState = function(originalPos) {
		g_panelBase.setClosedState(originalPos);	
	}
	
	/**
	 * set custom thumbs of the strip
	 */
	this.setCustomThumbs = function(funcSetHtml){
		
		g_objStrip.setCustomThumbs(funcSetHtml);
	
	}
	
	/**
	 * set panel disabled at start
	 */
	this.setDisabledAtStart = function(timeout){
		
		g_panelBase.setDisabledAtStart(timeout);
		
	}
	
}


/**
 * grid panel class
 * addon to grid gallery
 */
function UGGridPanel(){
	
	var t = this, g_objThis = jQuery(this);
	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objWrapper, g_objPanel;
	var g_functions = new UGFunctions();
	var g_objGrid = new UGThumbsGrid();
	var g_panelBase = new UGPanelsBase();
	var g_objArrowNext, g_objArrowPrev;
	
	this.events = {
		FINISH_MOVE: "gridpanel_move_finish",	//called after close or open panel (slide finish).
		OPEN_PANEL: "open_panel",				//called before opening the panel.
		CLOSE_PANEL: "close_panel"				//called before closing the panel.
	};
	
	var g_options = {
			gridpanel_vertical_scroll: true,			//vertical or horizontal grid scroll and arrows
			gridpanel_grid_align: "middle",				//top , middle , bottom, left, center, right - the align of the grid panel in the gallery 
			gridpanel_padding_border_top: 10,		    //padding between the top border of the panel
			gridpanel_padding_border_bottom: 4,			//padding between the bottom border of the panel
			gridpanel_padding_border_left: 10,			//padding between the left border of the panel
			gridpanel_padding_border_right: 10,			//padding between the right border of the panel
			
			gridpanel_arrows_skin: "",					//skin of the arrows, if empty inherit from gallery skin
			gridpanel_arrows_align_vert: "middle",		//borders, grid, middle - vertical align of arrows, to the top and bottom botders, to the grid, or in the middle space.
			gridpanel_arrows_padding_vert: 4,			//padding between the arrows and the grid, in case of middle align, it will be minimal padding
			gridpanel_arrows_align_hor: "center",		//borders, grid, center - horizontal align of arrows, to the left and right botders, to the grid, or in the center space.
			gridpanel_arrows_padding_hor: 10,			//in case of horizontal type only, minimal size from the grid in case of "borders" and size from the grid in case of "grid"
			
			gridpanel_space_between_arrows: 20,			//space between arrows on horizontal grids only
			gridpanel_arrows_always_on: false,			//always show arrows even if the grid is one pane only

			gridpanel_enable_handle: true,				//enable grid handle			
			gridpanel_handle_align: "top",				//top, middle, bottom , left, right, center - close handle tip align on the handle bar according panel orientation
			gridpanel_handle_offset: 0,					//offset of handle bar according the valign
			gridpanel_handle_skin: "",					//skin of the handle, if empty inherit from gallery skin
			
			gridpanel_background_color:""				//background color of the grid wrapper, if not set, it will be taken from the css
	};
	
	
	//default options for vertical scroll
	var g_defaultsVertical = {
			gridpanel_grid_align: "middle",			//top , middle , bottom
			gridpanel_padding_border_top: 2,		//padding between the top border of the panel
			gridpanel_padding_border_bottom: 2		//padding between the bottom border of the panel
	};
	
	//default options for horizontal type panel
	var g_defaultsHorType = {
			gridpanel_grid_align: "center"			//left, center, right			
	};
	
	var g_temp = {
		panelType: "grid",
		isHorType: false,
		arrowsVisible: false,
		panelHeight: 0,
		panelWidth: 0,
		originalPosX:null,
		isEventsInited: false,
		isClosed: false,
		orientation: null
	};
	
	
	/**
	 * init the grid panel
	 */
	function initGridPanel(gallery, customOptions){
		
		g_gallery = gallery;
		
		validateOrientation();
		
		//set defaults and custom options
		if(customOptions && customOptions.vertical_scroll){
			g_options.gridpanel_vertical_scroll = customOptions.vertical_scroll;			
		}
		
		g_options = jQuery.extend(g_options, customOptions);
				
		//set defautls for horizontal panel type
		if(g_temp.isHorType == true){
						
			g_options = jQuery.extend(g_options, g_defaultsHorType);
			g_options = jQuery.extend(g_options, customOptions);
					
		}else if(g_options.gridpanel_vertical_scroll == true){

			//set defaults for vertical scroll
			g_options = jQuery.extend(g_options, g_defaultsVertical);
			g_options = jQuery.extend(g_options, customOptions);
			g_options.grid_panes_direction = "bottom";		
		}
		
		//set arrows skin:
		var galleryOptions = g_gallery.getOptions();
		var globalSkin = galleryOptions.gallery_skin;		
		if(g_options.gridpanel_arrows_skin == "")
			g_options.gridpanel_arrows_skin = globalSkin;
		
		
		//get the gallery wrapper
		var objects = gallery.getObjects();
		g_objWrapper = objects.g_objWrapper;
		
		//init the base panel object:
		g_panelBase.init(g_gallery, g_temp, t, g_options, g_objThis);		

		//init the grid 
		g_objGrid = new UGThumbsGrid();
		g_objGrid.init(g_gallery, g_options);

	}
	
	
	/**
	 * validate the orientation if exists
	 */
	function validateOrientation(){
		
		if(g_temp.orientation == null)
			throw new Error("Wrong orientation, please set panel orientation before run");
		
	}
	
	/**
	 * run the rid panel
	 */
	function runPanel(){
		
		//validate orientation
		validateOrientation();
		
		processOptions();
		
		g_objGrid.run();
		
		setArrows();
		setPanelSize();
		placeElements();
		
		initEvents();
	}
	
	
	/**
	 * set html of the grid panel
	 */
	function setHtmlPanel(){
		
		//add panel wrapper
		g_objWrapper.append("<div class='ug-grid-panel'></div>");
		
		g_objPanel = g_objWrapper.children('.ug-grid-panel');
		
		//add arrows:
		if(g_temp.isHorType){
			
			g_objPanel.append("<div class='grid-arrow grid-arrow-left-hortype ug-skin-" + g_options.gridpanel_arrows_skin + "'></div>");
			g_objPanel.append("<div class='grid-arrow grid-arrow-right-hortype ug-skin-" + g_options.gridpanel_arrows_skin + "'></div>");
			
			g_objArrowPrev = g_objPanel.children(".grid-arrow-left-hortype");
			g_objArrowNext = g_objPanel.children(".grid-arrow-right-hortype");
		}
		else if(g_options.gridpanel_vertical_scroll == false){		//horizonatl arrows
			g_objPanel.append("<div class='grid-arrow grid-arrow-left ug-skin-" + g_options.gridpanel_arrows_skin + "'></div>");
			g_objPanel.append("<div class='grid-arrow grid-arrow-right ug-skin-" + g_options.gridpanel_arrows_skin + "'></div>");
			
			g_objArrowPrev = g_objPanel.children(".grid-arrow-left");
			g_objArrowNext = g_objPanel.children(".grid-arrow-right");
			
		}else{		//vertical arrows
			g_objPanel.append("<div class='grid-arrow grid-arrow-up ug-skin-" + g_options.gridpanel_arrows_skin + "'></div>");
			g_objPanel.append("<div class='grid-arrow grid-arrow-down ug-skin-" + g_options.gridpanel_arrows_skin + "'></div>");
			
			g_objArrowPrev = g_objPanel.children(".grid-arrow-up");
			g_objArrowNext = g_objPanel.children(".grid-arrow-down");
		}
		
		g_panelBase.setHtml(g_objPanel);
		
		//hide the arrows
		g_objArrowPrev.fadeTo(0,0);
		g_objArrowNext.fadeTo(0,0);
		
		g_objGrid.setHtml(g_objPanel);
		
		setHtmlProperties();
	}
	
	
	/**
	 * set html properties according the options
	 */
	function setHtmlProperties(){
		
		//set panel background color
		if(g_options.gridpanel_background_color != "")
			g_objPanel.css("background-color",g_options.gridpanel_background_color);
	}
	
	
	/**
	 * process and fix certain options, avoid arrows and validate options
	 */
	function processOptions(){
		
		if(g_options.gridpanel_grid_align == "center")
			g_options.gridpanel_grid_align = "middle";
	}
	
		
	/**
	 * place panel with some animation
	 */
	function placePanelAnimation(panelX, functionOnComplete){
						
		var objCss  = {left: panelX + "px"};
		
		g_objPanel.stop(true).animate(objCss ,{
			duration: 300,
			easing: "easeInOutQuad",
			queue: false,
			complete: function(){
				if(functionOnComplete)
					functionOnComplete();
			}
		});
		
	}
	
		
	
	/**
	 * get max height of the grid according the arrows size
	 */
	function getGridMaxHeight(){
		
		//check space taken without arrows for one pane grids
		var spaceTaken = g_options.gridpanel_padding_border_top + g_options.gridpanel_padding_border_bottom;
		var maxGridHeight = g_temp.panelHeight - spaceTaken;
		
		if(g_options.gridpanel_arrows_always_on == false){
			var numPanes = g_objGrid.getNumPanesEstimationByHeight(maxGridHeight);
			if(numPanes == 1)
				return(maxGridHeight);
		}
		
		//count the size with arrows
		var arrowsSize = g_functions.getElementSize(g_objArrowNext);
		var arrowsHeight = arrowsSize.height;
		
		var spaceTaken = arrowsHeight + g_options.gridpanel_arrows_padding_vert;
		
		if(g_options.gridpanel_vertical_scroll == true)	//in case of 2 arrows multiply by 2
			spaceTaken *= 2;
				
		spaceTaken += g_options.gridpanel_padding_border_top + g_options.gridpanel_padding_border_bottom;
		
		maxGridHeight = g_temp.panelHeight - spaceTaken;			
		
		return(maxGridHeight);
	}
	
	
	/**
	 * get grid maximum width
	 */
	function getGridMaxWidth(){
				
		//check space taken without arrows for one pane grids
		var spaceTaken = g_options.gridpanel_padding_border_left + g_options.gridpanel_padding_border_right;
				
		var maxGridWidth = g_temp.panelWidth - spaceTaken;
		
		if(g_options.gridpanel_arrows_always_on == false){
			var numPanes = g_objGrid.getNumPanesEstimationByWidth(maxGridWidth);
						
			if(numPanes == 1)
				return(maxGridWidth);
		}
		
		//count the size with arrows
		var arrowsSize = g_functions.getElementSize(g_objArrowNext);
		var arrowsWidth = arrowsSize.width;
		
		spaceTaken += (arrowsWidth + g_options.gridpanel_arrows_padding_hor) * 2;
								
		maxGridWidth = g_temp.panelWidth - spaceTaken;			
		
		return(maxGridWidth);
	}
		
	
	/**
	 * enable / disable arrows according the grid
	 */
	function setArrows(){
		
		var showArrows = false;
		if(g_options.gridpanel_arrows_always_on == true){
			showArrows = true;
		}
		else{
			var numPanes = g_objGrid.getNumPanes();
			if(numPanes > 1)
				showArrows = true;
		}
		
		if(showArrows == true){		//show arrows
			
			g_objArrowNext.show().fadeTo(0,1);
			g_objArrowPrev.show().fadeTo(0,1);
			g_temp.arrowsVisible = true;
			
		}else{		//hide arrows
			
			g_objArrowNext.hide();
			g_objArrowPrev.hide();
			g_temp.arrowsVisible = false;			
		
		}
		
	}
	
	
	/**
	 * set panel size by the given height and grid width
	 */
	function setPanelSize(){
		var gridSize = g_objGrid.getSize();
				
		//set panel size
		if(g_temp.isHorType == true)
			g_temp.panelHeight = gridSize.height + g_options.gridpanel_padding_border_top + g_options.gridpanel_padding_border_bottom;
		else
			g_temp.panelWidth = gridSize.width + g_options.gridpanel_padding_border_left + g_options.gridpanel_padding_border_right;
		
		g_functions.setElementSize(g_objPanel, g_temp.panelWidth, g_temp.panelHeight);
		
	}
	
	
	/**
	 * place the panel without animation
	 * @param panelDest
	 */
	function placePanelNoAnimation(panelDest){
		
		switch(g_temp.orientation){
			case "right":		//vertical
			case "left":
				g_functions.placeElement(g_objPanel, panelDest, null);
			break;
		}
		
	}
	
	
	
	function __________EVENTS___________(){};
	
	
	
	/**
	 * event on panel slide finish
	 */
	function onPanelSlideFinish(){
				
		g_objThis.trigger(t.events.FINISH_MOVE);
			
	}
	
	
	/**
	 * init panel events
	 */
	function initEvents(){
		
		if(g_temp.isEventsInited == true)
			return(false);
		
		g_temp.isEventsInited = true;
				
		if(g_objArrowPrev){
			g_functions.addClassOnHover(g_objArrowPrev);
			g_objGrid.attachPrevPaneButton(g_objArrowPrev);			
		}
		
		
		if(g_objArrowNext){
			g_functions.addClassOnHover(g_objArrowNext);
			g_objGrid.attachNextPaneButton(g_objArrowNext);			
		}
		
		g_panelBase.initEvents();
		
	}
	
	
	/**
	 * destroy the events
	 */
	this.destroy = function(){
		
		if(g_objArrowPrev)
			g_functions.destroyButton(g_objArrowPrev);
		
		if(g_objArrowNext)
			g_functions.destroyButton(g_objArrowNext);
		
		g_panelBase.destroy();
		
		g_objGrid.destroy();
	}
	
	
	function ______PLACE_ELEMENTS___________(){};
	
	
	/**
	 * get padding left of the grid
	 */
	function getGridPaddingLeft(){
		
		var gridPanelLeft = g_options.gridpanel_padding_border_left;
		
		return(gridPanelLeft);
	}
	
	
	/**
	 * place elements vertical - grid only
	 */
	function placeElements_noarrows(){
		
		//place grid
		var gridY = g_options.gridpanel_grid_align, gridPaddingY = 0;
		
		switch(gridY){
			case "top":
				gridPaddingY = g_options.gridpanel_padding_border_top;
				
			break;
			case "bottom":
				gridPaddingY = g_options.gridpanel_padding_border_bottom;				
			break;
		}
		
		var gridPanelLeft = getGridPaddingLeft();
		
		var gridElement = g_objGrid.getElement();		
		g_functions.placeElement(gridElement, gridPanelLeft, gridY, 0 , gridPaddingY);
				
	}
	
	
	/**
	 * place elements vertical - with arrows
	 */
	function placeElementsVert_arrows(){
		
		//place grid
		var gridY, prevArrowY, nextArrowY, nextArrowPaddingY;
		var objArrowSize = g_functions.getElementSize(g_objArrowPrev);		
		var objGridSize = g_objGrid.getSize();		
		
		
		switch(g_options.gridpanel_grid_align){
			default:
			case "top":
				gridY = g_options.gridpanel_padding_border_top + objArrowSize.height + g_options.gridpanel_arrows_padding_vert;
			break;
			case "middle":
				gridY = "middle";
			break;
			case "bottom":
				gridY = g_temp.panelHeight - objGridSize.height - objArrowSize.height - g_options.gridpanel_padding_border_bottom - g_options.gridpanel_arrows_padding_vert;
			break;
		}
		
		//place the grid
		var gridPanelLeft = getGridPaddingLeft();
		
		var gridElement = g_objGrid.getElement();		
		g_functions.placeElement(gridElement, gridPanelLeft, gridY);
		
		var objGridSize = g_objGrid.getSize();		
						
		//place arrows
		switch(g_options.gridpanel_arrows_align_vert){
			default:
			case "center":
			case "middle":
				prevArrowY = (objGridSize.top - objArrowSize.height) / 2;
				nextArrowY = objGridSize.bottom + (g_temp.panelHeight - objGridSize.bottom - objArrowSize.height) / 2;
				nextArrowPaddingY = 0;
			break;
			case "grid":
				prevArrowY = objGridSize.top - objArrowSize.height - g_options.gridpanel_arrows_padding_vert_vert
				nextArrowY = objGridSize.bottom + g_options.gridpanel_arrows_padding_vert;
				nextArrowPaddingY = 0;
			break;
			case "border":
			case "borders":
				prevArrowY = g_options.gridpanel_padding_border_top;				
				nextArrowY = "bottom"; 
				nextArrowPaddingY = g_options.gridpanel_padding_border_bottom;
			break;
		}
		
		g_functions.placeElement(g_objArrowPrev, "center", prevArrowY);
						
		g_functions.placeElement(g_objArrowNext, "center", nextArrowY, 0, nextArrowPaddingY);
	}
	
	
	/**
	 * place elements vertical
	 */
	function placeElementsVert(){
		
		if(g_temp.arrowsVisible == true)
			placeElementsVert_arrows();
		else
			placeElements_noarrows();
	}
	
	
	/**
	 * place elements horizontal with arrows
	 */
	function placeElementsHor_arrows(){
		
		var arrowsY, prevArrowPadding, arrowsPaddingY, nextArrowPadding;
		var objArrowSize = g_functions.getElementSize(g_objArrowPrev);		
		var objGridSize = g_objGrid.getSize();
		
		//place grid
		var gridY = g_options.gridpanel_padding_border_top;
		
		switch(g_options.gridpanel_grid_align){
			case "middle":
				
				switch(g_options.gridpanel_arrows_align_vert){
					default:
						var elementsHeight = objGridSize.height + g_options.gridpanel_arrows_padding_vert + objArrowSize.height;
						gridY = (g_temp.panelHeight - elementsHeight) / 2;
					break;
					case "border":
					case "borders":
						var remainHeight = g_temp.panelHeight - objArrowSize.height - g_options.gridpanel_padding_border_bottom;
						gridY = (remainHeight - objGridSize.height) / 2;
					break;
				}
								
			break;
			case "bottom":
				var elementsHeight = objGridSize.height + objArrowSize.height + g_options.gridpanel_arrows_padding_vert;
				gridY = g_temp.panelHeight - elementsHeight - g_options.gridpanel_padding_border_bottom;
			break;
		}
				
		var gridElement = g_objGrid.getElement();		
		var gridPanelLeft = getGridPaddingLeft();
		
		g_functions.placeElement(gridElement, gridPanelLeft, gridY);
		
		var objGridSize = g_objGrid.getSize();
		
		switch(g_options.gridpanel_arrows_align_vert){
			default:
			case "center":
			case "middle":
				arrowsY = objGridSize.bottom + (g_temp.panelHeight - objGridSize.bottom - objArrowSize.height) / 2;
				arrowsPaddingY = 0;								
			break;
			case "grid":
				arrowsY = objGridSize.bottom + g_options.gridpanel_arrows_padding_vert;
				arrowsPaddingY = 0;
			break;
			case "border":
			case "borders":
				arrowsY = "bottom";
				arrowsPaddingY = g_options.gridpanel_padding_border_bottom;
			break;
		}
		
		prevArrowPadding = -objArrowSize.width/2 - g_options.gridpanel_space_between_arrows / 2;
				
		g_functions.placeElement(g_objArrowPrev, "center", arrowsY, prevArrowPadding, arrowsPaddingY);
						
		//place next arrow
		var nextArrowPadding = Math.abs(prevArrowPadding);		//make positive
				
		g_functions.placeElement(g_objArrowNext, "center", arrowsY, nextArrowPadding, arrowsPaddingY);
					
	}
	
	
	/**
	 * place elements horizonatal
	 */
	function placeElementsHor(){
		
		if(g_temp.arrowsVisible == true)
			placeElementsHor_arrows();
		else
			placeElements_noarrows();
		
	}
	
	
	/**
	 * place elements horizontal type with arrows
	 */
	function placeElementsHorType_arrows(){
		
		//place grid
		var gridX, prevArrowX, nextArrowX, arrowsY;
		var objArrowSize = g_functions.getElementSize(g_objArrowPrev);		
		var objGridSize = g_objGrid.getSize();
		
		switch(g_options.gridpanel_grid_align){
			default:
			case "left":
				gridX = g_options.gridpanel_padding_border_left + g_options.gridpanel_arrows_padding_hor + objArrowSize.width;
			break;
			case "middle":
			case "center":
				gridX = "center";
			break;
			case "right":
				gridX = g_temp.panelWidth - objGridSize.width - objArrowSize.width - g_options.gridpanel_padding_border_right - g_options.gridpanel_arrows_padding_hor;
			break;
		}
		
		//place the grid		
		var gridElement = g_objGrid.getElement();
		g_functions.placeElement(gridElement, gridX, g_options.gridpanel_padding_border_top);
		objGridSize = g_objGrid.getSize();
		
		//place arrows, count Y
		switch(g_options.gridpanel_arrows_align_vert){
			default:
			case "center":
			case "middle":
				arrowsY = (objGridSize.height - objArrowSize.height) / 2 + objGridSize.top;
			break;
			case "top":
				arrowsY = g_options.gridpanel_padding_border_top + g_options.gridpanel_arrows_padding_vert;
			break;
			case "bottom":
				arrowsY = g_temp.panelHeight - g_options.gridpanel_padding_border_bottom - g_options.gridpanel_arrows_padding_vert - objArrowSize.height;
			break;
		}
				
		//get arrows X
		switch(g_options.gridpanel_arrows_align_hor){
			default:
			case "borders":
				prevArrowX = g_options.gridpanel_padding_border_left;
				nextArrowX = g_temp.panelWidth - g_options.gridpanel_padding_border_right - objArrowSize.width;
			break;
			case "grid":
				prevArrowX = objGridSize.left - g_options.gridpanel_arrows_padding_hor - objArrowSize.width;
				nextArrowX = objGridSize.right + g_options.gridpanel_arrows_padding_hor;
			break;
			case "center":
				prevArrowX = (objGridSize.left - objArrowSize.width) / 2;
				nextArrowX = objGridSize.right + (g_temp.panelWidth - objGridSize.right - objArrowSize.width) / 2;
			break;
		}
		
		g_functions.placeElement(g_objArrowPrev, prevArrowX, arrowsY);		
		g_functions.placeElement(g_objArrowNext, nextArrowX, arrowsY);
	}
	
	
	/**
	 * place elements horizontal type without arrows
	 */
	function placeElementHorType_noarrows(){
		
		var gridX;
		var objGridSize = g_objGrid.getSize();
		
		switch(g_options.gridpanel_grid_align){
			default:
			case "left":
				gridX = g_options.gridpanel_padding_border_left;
			break;
			case "middle":
			case "center":
				gridX = "center";
			break;
			case "right":
				gridX = g_temp.panelWidth - objGridSize.width - g_options.gridpanel_padding_border_right;
			break;
		}
		
		//place the grid		
		var gridElement = g_objGrid.getElement();
		g_functions.placeElement(gridElement, gridX, g_options.gridpanel_padding_border_top);
	}
	
	
	/**
	 * place elements when the grid in horizontal position
	 */
	function placeElementsHorType(){
		
		if(g_temp.arrowsVisible == true)
			placeElementsHorType_arrows();
		else
			placeElementHorType_noarrows();
		
	}
	
	
	/**
	 * place the arrows
	 */
	function placeElements(){
		
		if(g_temp.isHorType == false){
			
			if(g_options.gridpanel_vertical_scroll == true)
				placeElementsVert();
			else
				placeElementsHor();
			
		}else{
			placeElementsHorType();
		}
		
		g_panelBase.placeElements();
	}
	
	
	/**
	 * get panel orientation
	 */
	this.getOrientation = function(){
		
		return(g_temp.orientation);
	}
	
	
	/**
	 * set panel orientation (left, right, top, bottom)
	 */
	this.setOrientation = function(orientation){
		
		g_temp.orientation = orientation;
		
		//set isHorType temp variable for ease of use
		switch(orientation){
			case "right":
			case "left":
				g_temp.isHorType = false;
			break;
			case "top":
			case "bottom":
				g_temp.isHorType = true;
			break;
			default:
				throw new Error("Wrong grid panel orientation: " + orientation);
			break;
		}
		
	}
	
	/**
	 * set panel height
	 */
	this.setHeight = function(height){
		
		if(g_temp.isHorType == true)
			throw new Error("setHeight is not appliable to this orientatio ("+g_temp.orientation+"). Please use setWidth");		
		
		g_temp.panelHeight = height;
		var gridMaxHeight = getGridMaxHeight();
		
		g_objGrid.setMaxHeight(gridMaxHeight);
	}
	
	
	/**
	 * set panel width
	 */
	this.setWidth = function(width){

		if(g_temp.isHorType == false)
			throw new Error("setWidth is not appliable to this orientatio ("+g_temp.orientation+"). Please use setHeight");		
		
		g_temp.panelWidth = width;
		
		var gridMaxWidth = getGridMaxWidth();
				
		g_objGrid.setMaxWidth(gridMaxWidth);
	}
	
	
	/**
	 * init the panel
	 */
	this.init = function(gallery, customOptions){
		
		initGridPanel(gallery, customOptions);
	}
	
	/**
	 * place panel html
	 */
	this.setHtml = function(){
		setHtmlPanel();
	}
	
	
	/**
	 * run the panel
	 */
	this.run = function(){
		
		runPanel();
	}
	
	
	/**
	 * get the panel element
	 */
	this.getElement = function(){
		return(g_objPanel);
	}
	
	
	/**
	 * get panel size object
	 */
	this.getSize = function(){
		
		var objSize = g_functions.getElementSize(g_objPanel);
		
		return(objSize);
	}
	
	this.__________Functions_From_Base_____ = function() {}
	
	/**
	 * tells if the panel is closed
	 */
	this.isPanelClosed = function() {		
		return (g_panelBase.isPanelClosed());
	}

	/**
	 * get closed panel destanation
	 */
	this.getClosedPanelDest = function() {
		return g_panelBase.getClosedPanelDest();
	}	
		
	/**
	 * open the panel
	 */	
	this.openPanel = function(noAnimation) {
		g_panelBase.openPanel(noAnimation);
	}
	
	
	/**
	 * close the panel (slide in)
	 */
	this.closePanel = function(noAnimation) {
		g_panelBase.closePanel(noAnimation);		
	}	
	
	/**
	 * set the panel opened state
	 */
	this.setOpenedState = function(originalPos) {
		g_panelBase.setOpenedState(originalPos);
	}

	/**
	 * set the panel that it's in closed state, and set original pos for opening later
	 */
	this.setClosedState = function(originalPos) {
		g_panelBase.setClosedState(originalPos);	
	}
	
	
	/**
	 * set panel disabled at start
	 */
	this.setDisabledAtStart = function(timeout){
		
		g_panelBase.setDisabledAtStart(timeout);
		
	}
	
	
}

/**
 * thumbs class
 * addon to strip gallery
 */
function UGThumbsGrid(){

	var t = this, g_objThis = jQuery(this);
	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objects, g_objWrapper;
	var g_functions = new UGFunctions(), g_arrItems, g_objGrid, g_objInner;
	var g_thumbs = new UGThumbsGeneral(), g_tilesDesign = new UGTileDesign();
	
	var g_options = {
		grid_panes_direction: "left",				//where panes will move -> left, bottom
		grid_num_cols: 2,							//number of grid columns
		grid_min_cols: 2,							//minimum number of columns (for horizontal type) - the tile size is dynamic 
		grid_num_rows: 2,							//number of grid rows (for horizontal type)
		grid_space_between_cols: 10,				//space between columns
		grid_space_between_rows: 10,				//space between rows
		grid_space_between_mobile: 10,				//space between rows and cols mobile
		grid_transition_duration: 300,				//transition of the panes change duration 
		grid_transition_easing: "easeInOutQuad",	//transition of the panes change easing function
		grid_carousel: false,						//next pane goes to first when last
		grid_padding: 0,							//set padding to the grid
		grid_vertical_scroll_ondrag: false			//scroll the gallery on vertical drag
	};
	
	this.events = {
		PANE_CHANGE: "pane_change"
	};
	
	var g_temp = {
			eventSizeChange: "thumb_size_change",
			isHorizontal: false,
			isMaxHeight:false,		//set if the height that set is max height. In that case need a height correction
			isMaxWidth:false,		//set if the height that set is max height. In that case need a height correction
			gridHeight: 0,
			gridWidth: 0,
			innerWidth: 0,
			innerHeight:0,
			numPanes:0,
			arrPanes:0,
			numThumbs:0,
			currentPane:0,
			numThumbsInPane:0,
			isNavigationVertical:false,
			touchActive: false,
			startScrollPos:0,
			isFirstTimeRun:true,
			isTilesMode: false,
			storedEventID: "thumbsgrid",
			tileMaxWidth:null,
			tileMaxHeight:null,
			spaceBetweenCols: null,
			spaceBetweenRows: null
		};
	
	
	function __________GENERAL_________(){};
	
	/**
	 * init the gallery
	 */
	function init(gallery, customOptions, isTilesMode){
				
		g_objects = gallery.getObjects();
		g_gallery = gallery;
		
		g_gallery.attachThumbsPanel("grid", t);
		
		g_objGallery = jQuery(gallery);
		g_objWrapper = g_objects.g_objWrapper;
		g_arrItems = g_objects.g_arrItems;
		
		if(isTilesMode === true)
			g_temp.isTilesMode = true;
		
		g_temp.numThumbs = g_arrItems.length;
		
		setOptions(customOptions);
		
		if(g_temp.isTilesMode == true){
			
			g_tilesDesign.setFixedMode();
			g_tilesDesign.setApproveClickFunction(isApproveTileClick);
			g_tilesDesign.init(gallery, g_options);
			
			var options_td = g_tilesDesign.getOptions();
			g_temp.tileMaxHeight = options_td.tile_height;
			g_temp.tileMaxWidth = options_td.tile_width;
			
			g_thumbs = g_tilesDesign.getObjThumbs();
		}else{
			
			//disable the dynamic size in thumbs
			customOptions.thumb_fixed_size = true;
			
			g_thumbs.init(gallery, customOptions);
		}
		
	}
	
	
	/**
	 * set the grid panel html
	 */
	function setHtml(parentContainer){
		
		var objParent = g_objWrapper;
		
		if(parentContainer)
			objParent = parentContainer;
		
		objParent.append("<div class='ug-thumbs-grid'><div class='ug-thumbs-grid-inner'></div></div>");		 
		g_objGrid = objParent.children(".ug-thumbs-grid");
		g_objInner = g_objGrid.children(".ug-thumbs-grid-inner");		
		
		//put the thumbs to inner strip
		
		if(g_temp.isTilesMode == true)
			g_tilesDesign.setHtml(g_objInner);
		else
			g_thumbs.setHtmlThumbs(g_objInner);
		
	}
	
	
	/**
	 * validate before running the grid
	 */
	function validateBeforeRun(){
		
		if(g_temp.isHorizontal == false){	//vertical type			
			if(g_temp.gridHeight == 0)
				throw new Error("You must set height before run.");		
		}else{
			if(g_temp.gridWidth == 0)
				throw new Error("You must set width before run.");					
		}
		
	}
	
	
	/**
	 * run the gallery after init and set html
	 */
	function run(){
		
		var selectedItem = g_gallery.getSelectedItem();
		
		validateBeforeRun();
		
		if(g_temp.isFirstTimeRun == true){
			
			initEvents();
						
			if(g_temp.isTilesMode == true){
				
				initGridDynamicSize();
				initSizeParams();					
				g_tilesDesign.run();
				
			}else{
				g_thumbs.setHtmlProperties();
				initSizeParams();			
				g_thumbs.loadThumbsImages();
			}
			
		}else{
			
			if(g_temp.isTilesMode == true){
				
				//check if dynamic size changed. If do, run the thumbs again
				var isChanged = initGridDynamicSize();
				
				if(isChanged == true){
					initSizeParams();					
					g_tilesDesign.run();
				}
			}
			
		}
				
		positionThumbs();
		
		if(g_temp.isFirstTimeRun == true && g_temp.isTilesMode){
			
			var objTiles = g_thumbs.getThumbs();
			
			//fire size change event
			objTiles.each(function(index, tile){
				
				g_objWrapper.trigger(g_temp.eventSizeChange, jQuery(tile));
			});
			
			objTiles.fadeTo(0,1);
		}
			
		if(selectedItem != null)
			scrollToThumb(selectedItem.index);
		
		//trigger pane change event on the start
		g_objThis.trigger(t.events.PANE_CHANGE, g_temp.currentPane);
		
		g_temp.isFirstTimeRun = false;
	}
	
	/**
	 * get thumb size object
	 */
	function getThumbsSize(){
		if(g_temp.isTilesMode == true)
			var objThumbSize = g_tilesDesign.getGlobalTileSize();
		else
			var objThumbSize = g_thumbs.getGlobalThumbSize();
		
		return(objThumbSize);
	}
	
	
	/**
	 * init grid dynamic size (tiles mode)
	 */
	function initGridDynamicSize(){
		
		if(g_temp.isTilesMode == false)
			throw new Error("Dynamic size can be set only in tiles mode");
		
		var isChanged = false;
		var isMobile = g_gallery.isMobileMode();
		
		//--- set space between cols and rows
		
		var spaceOld = g_temp.spaceBetweenCols;
		
		if(isMobile == true){
			g_temp.spaceBetweenCols = g_options.grid_space_between_mobile;
			g_temp.spaceBetweenRows = g_options.grid_space_between_mobile;
		}else{
			g_temp.spaceBetweenCols = g_options.grid_space_between_cols;
			g_temp.spaceBetweenRows = g_options.grid_space_between_rows;
		}
		
		if(g_temp.spaceBetweenCols != spaceOld)
			isChanged = true;
		
		//set tile size
		
		var lastThumbSize = getThumbsSize();
		var lastThumbWidth = lastThumbSize.width;
		
		var tileWidth = g_temp.tileMaxWidth;
		var numCols = g_functions.getNumItemsInSpace(g_temp.gridWidth, g_temp.tileMaxWidth, g_temp.spaceBetweenCols);
		
		if(numCols < g_options.grid_min_cols){
			tileWidth = g_functions.getItemSizeInSpace(g_temp.gridWidth, g_options.grid_min_cols, g_temp.spaceBetweenCols);
		}
		
		g_tilesDesign.setTileSizeOptions(tileWidth);
		
		if(tileWidth != lastThumbWidth)
			isChanged = true;
		
		
		return(isChanged);
	}
	
	
	/**
	 * init grid size horizontal
	 * get height param
	 */
	function initSizeParamsHor(){
				
		var objThumbSize = getThumbsSize();
		
		var thumbsHeight = objThumbSize.height;
		
		//set grid size
		var gridWidth = g_temp.gridWidth;
		var gridHeight = g_options.grid_num_rows * thumbsHeight + (g_options.grid_num_rows-1) * g_temp.spaceBetweenRows + g_options.grid_padding*2;
		
		g_temp.gridHeight = gridHeight;
		
		g_functions.setElementSize(g_objGrid, gridWidth, gridHeight);
	
		//set inner size (as grid size, will be corrected after placing thumbs
		g_functions.setElementSize(g_objInner, gridWidth, gridHeight);
		
		//set initial inner size params
		g_temp.innerWidth = gridWidth;
		g_temp.innerHeight = gridHeight;
	}
	
	
	/**
	 * init size params vertical
	 */
	function initSizeParamsVert(){

		var objThumbSize = getThumbsSize();
		
		var thumbsWidth = objThumbSize.width;
		
		//set grid size
		var gridWidth = g_options.grid_num_cols * thumbsWidth + (g_options.grid_num_cols-1) * g_temp.spaceBetweenCols + g_options.grid_padding*2;
		var gridHeight = g_temp.gridHeight;
		
		g_temp.gridWidth = gridWidth;
		
		g_functions.setElementSize(g_objGrid, gridWidth, gridHeight);
	
		//set inner size (as grid size, will be corrected after placing thumbs
		g_functions.setElementSize(g_objInner, gridWidth, gridHeight);
		
		//set initial inner size params
		g_temp.innerWidth = gridWidth;
		g_temp.innerHeight = gridHeight;
		
	}
	
	/**
	 * init grid size
	 */
	function initSizeParams(){
		
		if(g_temp.isHorizontal == false)
			initSizeParamsVert();
		else
			initSizeParamsHor();
		
	}

	

	/**
	 * goto pane by index
	 */
	function scrollToThumb(thumbIndex){
		
		var paneIndex = getPaneIndexByThumbIndex(thumbIndex);
		if(paneIndex == -1)
			return(false);
				
		t.gotoPane(paneIndex, "scroll");
				
	}
	
	
	/**
	 * set the options of the strip
	 */
	function setOptions(objOptions){
		
		g_options = jQuery.extend(g_options, objOptions);
		
		g_thumbs.setOptions(objOptions);
		
		//set vertical or horizon
		g_temp.isNavigationVertical = (g_options.grid_panes_direction == "top" || g_options.grid_panes_direction == "bottom")
		
		g_temp.spaceBetweenCols = g_options.grid_space_between_cols;
		g_temp.spaceBetweenRows = g_options.grid_space_between_rows;
		
	}
	
	
	/**
	 * position the thumbs and init panes horizontally
	 */
	function positionThumb_hor(){
				
		var arrThumbs = g_objInner.children(".ug-thumb-wrapper");
		
		var posx = 0;
		var posy = 0;
		var counter = 0;
		var baseX = 0;
		var maxx = 0, maxy = 0;
		g_temp.innerWidth = 0;
		g_temp.numPanes = 1;
		g_temp.arrPanes = [];
		g_temp.numThumbsInPane = 0;
		
		//set first pane position
		g_temp.arrPanes.push(baseX);	
		
		var numThumbs = arrThumbs.length;
			
		for(i=0;i < numThumbs; i++){
			var objThumb = jQuery(arrThumbs[i]);
			g_functions.placeElement(objThumb, posx, posy);
			
			var thumbWidth = objThumb.outerWidth();
			var thumbHeight = objThumb.outerHeight();
			
			//count maxx
			if(posx > maxx)
				maxx = posx;
			
			//count maxy
			var endY = posy + thumbHeight;
			if(endY > maxy)
				maxy = endY;
			
			//count maxx end
			var endX = maxx + thumbWidth;
			if(endX > g_temp.innerWidth)
				g_temp.innerWidth = endX;
						
			posx += thumbWidth + g_temp.spaceBetweenCols;
			
			//next row
			counter++;
			if(counter >= g_options.grid_num_cols){
				posy += thumbHeight + g_temp.spaceBetweenRows;
				posx = baseX;
				counter = 0;
			}
			
			//count number thumbs in pane
			if(g_temp.numPanes == 1)
				g_temp.numThumbsInPane++;
			
			//prepare next pane
			if((posy + thumbHeight) > g_temp.gridHeight){
				posy = 0;
				baseX = g_temp.innerWidth + g_temp.spaceBetweenCols;
				posx = baseX;
				counter = 0;
								
				//correct max height size (do it once only)
				if(g_temp.isMaxHeight == true && g_temp.numPanes == 1){
					g_temp.gridHeight = maxy;
					g_objGrid.height(g_temp.gridHeight);
				}
				
				//save next pane props (if exists)
				if(i < (numThumbs - 1)){
					g_temp.numPanes++;
					
					//set next pane position
					g_temp.arrPanes.push(baseX);	
										
				}
			}
		}
		
		
		//set inner strip width and height
		g_objInner.width(g_temp.innerWidth);
		
		//set grid height
		if(g_temp.isMaxHeight == true && g_temp.numPanes == 1){
			g_temp.gridHeight = maxy;
			g_objGrid.height(maxy);
		}
		
	}
	
	
	/**
	 * position the thumbs and init panes vertically
	 */
	function positionThumb_vert(){
		var arrThumbs = g_objInner.children(".ug-thumb-wrapper");
		
		var posx = 0;
		var posy = 0;
		var maxy = 0;
		var counter = 0;
		var baseX = 0;
		var paneStartY = 0;
		
		g_temp.innerWidth = 0;
		g_temp.numPanes = 1;
		g_temp.arrPanes = [];
		g_temp.numThumbsInPane = 0;
		
		//set first pane position
		g_temp.arrPanes.push(baseX);
		
		var numThumbs = arrThumbs.length;
			
		for(i=0;i < numThumbs; i++){
			var objThumb = jQuery(arrThumbs[i]);
			g_functions.placeElement(objThumb, posx, posy);
			
			var thumbWidth = objThumb.outerWidth();
			var thumbHeight = objThumb.outerHeight();
									
			posx += thumbWidth + g_temp.spaceBetweenCols;
			
			var endy = (posy + thumbHeight);
			if(endy > maxy)
				maxy = endy;
			
			//next row
			counter++;
			if(counter >= g_options.grid_num_cols){
				posy += thumbHeight + g_temp.spaceBetweenRows;
				posx = baseX;
				counter = 0;
			}
			
			//count number thumbs in pane
			if(g_temp.numPanes == 1)
				g_temp.numThumbsInPane++;
						
			//prepare next pane
			endy = (posy + thumbHeight);
			var paneMaxY = paneStartY + g_temp.gridHeight;
			
			//advance next pane
			if(endy > paneMaxY){
				
				//correct max height size (do it once only)
				if(g_temp.isMaxHeight == true && g_temp.numPanes == 1){
					g_temp.gridHeight = maxy;
					g_objGrid.height(g_temp.gridHeight);
					paneMaxY = g_temp.gridHeight;
				}
				
				posy = paneMaxY + g_temp.spaceBetweenRows;					
				paneStartY = posy;
				baseX = 0;
				posx = baseX;
				counter = 0;
				
				//save next pane props (if exists)
				if(i < (numThumbs - 1)){
					g_temp.numPanes++;
					
					//set next pane position
					g_temp.arrPanes.push(posy);	
									
				}
			}
			
		}//for
				
		//set inner height 
		g_objInner.height(maxy);
		g_temp.innerHeight = maxy;
		
		//set grid height
		if(g_temp.isMaxHeight == true && g_temp.numPanes == 1){
			g_temp.gridHeight = maxy;
			g_objGrid.height(maxy);
		}
		
	}

	
	/**
	 * position the thumbs horizontal type
	 */	
	function positionThumb_hortype(){
				
		var arrThumbs = g_objInner.children(".ug-thumb-wrapper");
		
		var baseX = g_options.grid_padding;
		var baseY = g_options.grid_padding;
		var posy = baseY;
		var posx = baseX;
		var maxx = 0, maxy = 0, paneMaxY = 0, gridMaxY = 0;
		var rowsCounter = 0;
		
		g_temp.innerWidth = 0;
		g_temp.numPanes = 1;
		g_temp.arrPanes = [];
		g_temp.numThumbsInPane = 0;
		
		//set first pane position
		g_temp.arrPanes.push(baseX-g_options.grid_padding);	
		
		var numThumbs = arrThumbs.length;
				
		for(i=0;i < numThumbs; i++){
			var objThumb = jQuery(arrThumbs[i]);
			
			var thumbWidth = objThumb.outerWidth();
			var thumbHeight = objThumb.outerHeight();
			
			//check end of the size, start a new row
			if((posx - baseX + thumbWidth) > g_temp.gridWidth){
				rowsCounter++;
				posy = 0;
				
				if(rowsCounter >= g_options.grid_num_rows){
					
					//change to a new pane					
					rowsCounter = 0;
					baseX = posx;
					posy = baseY;
					paneMaxY = 0;
					
					//change grid width to max width
					if(g_temp.numPanes == 1){
						g_temp.gridWidth = maxx+g_options.grid_padding;
						g_objGrid.width(g_temp.gridWidth);
						
						g_temp.gridHeight = gridMaxY + g_options.grid_padding;
						g_objGrid.height(g_temp.gridHeight);
						
					}
					
					g_temp.numPanes++;
					g_temp.arrPanes.push(baseX-g_options.grid_padding);
					
				}else{			//start new line in existing pane
					posx = baseX;
					posy = paneMaxY + g_temp.spaceBetweenRows;
				}
			}
			
			//place the thumb
			g_functions.placeElement(objThumb, posx, posy);
			
			//count maxx
			var endX = posx + thumbWidth;
			if(endX > maxx)
				maxx = endX;
			
			//count maxy
			var endY = posy + thumbHeight;
			
			if(endY > paneMaxY)		//pane height
				paneMaxY = endY;
			
			if(endY > gridMaxY)		//total height
				gridMaxY = endY;
			
			if(endY > maxy)
				maxy = endY;
			
			//count maxx end
			var endX = maxx + thumbWidth;
			if(endX > g_temp.innerWidth)
				g_temp.innerWidth = endX;
						
			posx += thumbWidth + g_temp.spaceBetweenCols;
						
			//count number thumbs in pane
			if(g_temp.numPanes == 1)
				g_temp.numThumbsInPane++;
			
			
		}//end for
		
		//set inner strip width and height
		g_temp.innerWidth = maxx + g_options.grid_padding;
		g_temp.innerHeight = gridMaxY + g_options.grid_padding;
		
		g_objInner.width(g_temp.innerWidth);
		g_objInner.height(g_temp.innerHeight);


		//set grid height
		if(g_temp.numPanes == 1){
			g_temp.gridWidth = maxx + g_options.grid_padding;
			g_temp.gridHeight = gridMaxY + g_options.grid_padding;
			
			g_objGrid.width(g_temp.gridWidth);
			g_objGrid.height(g_temp.gridHeight);
						
		}
		
			
	}
	
	
	/**
	 * position the thumbs and init panes related and width related vars
	 */
	function positionThumbs(){
		
		if(g_temp.isHorizontal == false){		//position vertical type
			
			if(g_temp.isNavigationVertical)
				positionThumb_vert();
			else
				positionThumb_hor();
			
		}else{
			positionThumb_hortype();
		}
		
	}
	
	
	/**
	 * validate thumb index
	 */
	function validateThumbIndex(thumbIndex){
		
		if(thumbIndex < 0 || thumbIndex >= g_temp.numThumbs){
			throw new Error("Thumb not exists: " + thumbIndex);
			return(false);
		}
		
		return(true);
	}
	
	
	/**
	 * 
	 * validate that the pane index exists
	 */
	function validatePaneIndex(paneIndex){
		
		if(paneIndex >= g_temp.numPanes || paneIndex < 0){
			throw new Error("Pane " + index + " doesn't exists.");
			return(false);
		}
		
		return(true);
	}
	
	/**
	 * validate inner position
	 */
	function validateInnerPos(pos){
				
		var absPos = Math.abs(pos);
		
		if(g_temp.isNavigationVertical == false){
			
			if(absPos < 0 || absPos >= g_temp.innerWidth){
				throw new Error("wrong inner x position: " + pos);
				return(false);
			}
			
		}else{
			
			if(absPos < 0 || absPos >= g_temp.innerHeight){
				throw new Error("wrong inner y position: " + pos);
				return(false);
			}
			
		}
		
		return(true);
	}
	
	
	
	
	/**
	 * 
	 * set inner strip position
	 */
	function setInnerPos(pos){
		
		var objCss = getInnerPosObj(pos);
		if(objCss == false)
			return(false);
		
		g_objInner.css(objCss);
	}
	
	
	/**
	 * animate inner to some position
	 */
	function animateInnerTo(pos){
		
		var objCss = getInnerPosObj(pos);
		if(objCss == false)
			return(false);
		
		g_objInner.stop(true).animate(objCss ,{
			duration: g_options.grid_transition_duration,
			easing: g_options.grid_transition_easing,
			queue: false
		});
		
	}
	
	/**
	 * animate back to current pane
	 */
	function animateToCurrentPane(){
		
		var innerPos = -g_temp.arrPanes[g_temp.currentPane];
		animateInnerTo(innerPos);
	}
	
		
	
	function __________GETTERS_________(){};
	
	/**
	 * get inner object size according the orientation
	 */
	function getInnerSize(){
		
		if(g_temp.isNavigationVertical == true)
			return(g_temp.innerHeight);
		else
			return(g_temp.innerWidth);
	}
	
	
	/**
	 * get pane width or height according the orientation
	 */
	function getPaneSize(){
		
		if(g_temp.isNavigationVertical == true)
			return(g_temp.gridHeight);
		else
			return(g_temp.gridWidth);
	}
	
	
	/**
	 * get object of iner position move
	 */
	function getInnerPosObj(pos){
				
		var obj = {};
		if(g_temp.isNavigationVertical == true)
			obj.top = pos + "px";
		else
			obj.left = pos + "px";
	
		return(obj);
	}
	
	
	/**
	 * get mouse position according the orientation
	 */
	function getMousePos(event){
		
		var mousePos = g_functions.getMousePosition(event);
		
		if(g_temp.isNavigationVertical == true)
			return(mousePos.pageY);
		else
			return(mousePos.pageX);
		
	}
	
	
	/**
	 * get inner position according the orientation
	 */
	function getInnerPos(){
		
		var objSize = g_functions.getElementSize(g_objInner);
		
		if(g_temp.isNavigationVertical == true)
			return(objSize.top);
		else
			return(objSize.left);
	
	}
	
	/**
	 * get pane by thumb index
	 */
	function getPaneIndexByThumbIndex(thumbIndex){
		
		//validate thumb index
		if(validateThumbIndex(thumbIndex) == false)
			return(-1);
		
		var numPane = Math.floor(thumbIndex / g_temp.numThumbsInPane);
		
		return(numPane);
	}
	
	/**
	 * get position of some pane
	 */
	function getPanePosition(index){
								
		var pos = g_temp.arrPanes[index];
		return(pos);
	}
	
	
	/**
	 * return if passed some significant movement, for thumb click
	 */
	function isSignificantPassed(){
		
		if(g_temp.numPanes == 1)
			return(false);
		
		var objData = g_functions.getStoredEventData(g_temp.storedEventID);
		
		var passedTime = objData.diffTime;
		
		var currentInnerPos = getInnerPos();
		var passedDistanceAbs = Math.abs(currentInnerPos - objData.startInnerPos);
		
		if(passedDistanceAbs > 30)
			return(true);
		
		if(passedDistanceAbs > 5 && passedTime > 300)
			return(true);
				
		return(false);
	}
	
	
	
	/**
	 * check if the movement that was held is valid for pane change
	 */
	function isMovementValidForChange(){
		
		var objData = g_functions.getStoredEventData(g_temp.storedEventID);
		
		//check position, if more then half, move
		var currentInnerPos = getInnerPos();
		diffPos = Math.abs(objData.startInnerPos - currentInnerPos);
				
		var paneSize = getPaneSize();
		var breakSize = Math.round(paneSize * 3 / 8);
		
		if(diffPos >= breakSize)
			return(true);
		
		if(objData.diffTime < 300 && diffPos > 25)
			return(true);
						
		return(false);
	}
	
	
	/**
	 * return if passed some significant movement
	 */
	function isApproveTileClick(){
		
		if(g_temp.numPanes == 1)
			return(true);
			
		var isApprove = g_functions.isApproveStoredEventClick(g_temp.storedEventID, g_temp.isNavigationVertical);
		
		return(isApprove);
	}
	
	
	function __________EVENTS_______(){};
	
	
	/**
	 * on thumb click event
	 */
	function onThumbClick(event){
		
		//event.preventDefault();
		if(isSignificantPassed() == true)
			return(true);
		
		//run select item operation
		var objThumb = jQuery(this);
		var objItem = g_thumbs.getItemByThumb(objThumb);
		
		g_gallery.selectItem(objItem);
	}
	
	
	/**
	 * on touch start
	 */
	function onTouchStart(event){
				
		if(g_temp.numPanes == 1)
			return(true);
		
		if(g_temp.touchActive == true)
			return(true);
		
		if(g_temp.isTilesMode == false)
			event.preventDefault();
		
		g_temp.touchActive = true;
		
		var addData = {
				startInnerPos: getInnerPos()
		};
		
		g_functions.storeEventData(event, g_temp.storedEventID, addData);
		
	}
	
	
	/**
	 * handle scroll top, return if scroll mode or not
	 */
	function handleScrollTop(){
		
		if(g_options.grid_vertical_scroll_ondrag == false)
			return(false);
		
		if(g_temp.isNavigationVertical == true)
			return(false);
		
		var scrollDir = g_functions.handleScrollTop(g_temp.storedEventID);
		
		if(scrollDir === "vert")
			return(true);
		
		return(false);
	}
	
	
	/**
	 * on touch move
	 */
	function onTouchMove(event){
				
		if(g_temp.touchActive == false)
			return(true);
		
		event.preventDefault();
		
		g_functions.updateStoredEventData(event, g_temp.storedEventID);
		
		var objData = g_functions.getStoredEventData(g_temp.storedEventID, g_temp.isNavigationVertical);
		
		//check if was vertical scroll
		var isScroll = handleScrollTop();
		if(isScroll)
			return(true);
		
		
		var diff = objData.diffMousePos;
		var innerPos = objData.startInnerPos + diff;
		var direction = (diff > 0) ? "prev":"next";
		var lastPaneSize = g_temp.arrPanes[g_temp.numPanes-1];
		
		//slow down when off limits
		if(g_options.grid_carousel == false && innerPos > 0 && direction == "prev"){
			innerPos = innerPos / 3;
		}
		
		//debugLine({lastSize:lastPaneSize,innerPos: innerPos});
		
		if(g_options.grid_carousel == false && innerPos < -lastPaneSize && direction == "next"){
			innerPos = objData.startInnerPos + diff / 3;
		}
		
		setInnerPos(innerPos);
			
	}
	
	
	/**
	 * on touch end
	 * change panes or return to current pane
	 */
	function onTouchEnd(event){
		
		if(g_temp.touchActive == false)
			return(true);
		
		g_functions.updateStoredEventData(event, g_temp.storedEventID);
		var objData = g_functions.getStoredEventData(g_temp.storedEventID, g_temp.isNavigationVertical);
		
		//event.preventDefault();
		g_temp.touchActive = false;
		
		if(isMovementValidForChange() == false){
			animateToCurrentPane();
			return(true);
		}
		
		//move pane or return back
		var innerPos = getInnerPos();
		var diff = innerPos - objData.startInnerPos;
		var direction = (diff > 0) ? "prev":"next";
		
		if(direction == "next"){
						
			if(g_options.grid_carousel == false && t.isLastPane())
				animateToCurrentPane();
			else
				t.nextPane();			
		}
		else{
						
			if(g_options.grid_carousel == false && t.isFirstPane()){
				animateToCurrentPane();
			}
			else
				t.prevPane();
		}
		
	}
	
	
	/**
	 * on item change
	 */
	function onItemChange(){
			
		var objItem = g_gallery.getSelectedItem();
		g_thumbs.setThumbSelected(objItem.objThumbWrapper);
		
		scrollToThumb(objItem.index);
		
	}
	
	
	/**
	 * init panel events
	 */
	function initEvents(){
		
		if(g_temp.isTilesMode == false){
			
			g_thumbs.initEvents();		
			var objThumbs = g_objGrid.find(".ug-thumb-wrapper");
			objThumbs.on("click touchend",onThumbClick);
			
			g_objGallery.on(g_gallery.events.ITEM_CHANGE, onItemChange);
			
		}else{
			g_tilesDesign.initEvents();
		}
		
		//touch drag events
		
		//slider mouse down - drag start
		g_objGrid.bind("mousedown touchstart",onTouchStart);
		
		//on body move
		jQuery("body").bind("mousemove touchmove",onTouchMove);
		
		//on body mouse up - drag end
		jQuery(window).add("body").bind("mouseup touchend", onTouchEnd);
		
	}
	
	
	/**
	 * destroy the events
	 */
	this.destroy = function(){
		
		if(g_temp.isTilesMode == false){
			
			var objThumbs = g_objGrid.find(".ug-thumb-wrapper");
			objThumbs.off("click");
			objThumbs.off("touchend");
			g_objGallery.on(g_gallery.events.ITEM_CHANGE);
			g_thumbs.destroy();		
						
		}else{
			g_tilesDesign.destroy();
		}
		
		g_objGrid.unbind("mousedown");
		g_objGrid.unbind("touchstart");
		jQuery("body").unbind("mousemove");
		jQuery("body").unbind("touchmove");
		
		jQuery(window).add("body").unbind("touchend");
		jQuery(window).add("body").unbind("mouseup");
		
		g_objThis.off(t.events.PANE_CHANGE);
		
	}
	
	
	
	this.__________EXTERNAL_GENERAL_________ = function(){};
	
	/**
	 * set the thumb unselected state
	 */
	this.setThumbUnselected = function(objThumbWrapper){
		
		g_thumbs.setThumbUnselected(objThumbWrapper);
		
	}
	
	/**
	 * check if thmb item visible, means inside the visible part of the inner strip
	 */
	this.isItemThumbVisible = function(objItem){
		var itemIndex = objItem.index;
		var paneIndex = getPaneIndexByThumbIndex(itemIndex);
		
		if(paneIndex == g_temp.currentPane)
			return(true);
		
		return(false);
	}
	
	
	this.__________EXTERNAL_API_________ = function(){};
	
	/**
	 * get estimation of number of panes by the height of the grid.
	 */
	this.getNumPanesEstimationByHeight = function(gridHeight){
		
		if(g_temp.isTilesMode == true){
			
			var thumbHeight = g_options.tile_height;
			
		}else{
			var thumbsOptions = g_thumbs.getOptions();		
			var thumbHeight = thumbsOptions.thumb_height;
		}
		
		var numThumbs = g_thumbs.getNumThumbs();
		var numRows = Math.ceil(numThumbs / g_options.grid_num_cols);
		
		var totalHeight = numRows * thumbHeight + (numRows-1) * g_temp.spaceBetweenRows;
			
		var numPanes = Math.ceil(totalHeight / gridHeight);
		
		return(numPanes);
	}
	
	/**
	 * get estimation of number of panes by the width of the grid.
	 */
	this.getNumPanesEstimationByWidth = function(gridWidth){
		
		if(g_temp.isTilesMode){
			var thumbWidth = g_options.tile_width;			
		}else{
			var thumbsOptions = g_thumbs.getOptions();		
			var thumbWidth = thumbsOptions.thumb_width;
		}
		
		var numThumbs = g_thumbs.getNumThumbs();
		var numCols = Math.ceil(numThumbs / g_options.grid_num_rows);
		
		var totalWidth = numCols * thumbWidth + (numCols-1) * g_temp.spaceBetweenCols;
		
		var numPanes = Math.ceil(totalWidth / gridWidth);
				
		return(numPanes);
	}
	
	
	/**
	 * get height estimation by width, works only in tiles mode
	 */
	this.getHeightEstimationByWidth = function(width){
		
		if(g_temp.isTilesMode == false)
			throw new Error("This function works only with tiles mode");
		
		var numThumbs = g_thumbs.getNumThumbs();
		var numCols = g_functions.getNumItemsInSpace(width, g_options.tile_width, g_temp.spaceBetweenCols);
		var numRows = Math.ceil(numThumbs / numCols);
		
		if(numRows > g_options.grid_num_rows)
			numRows = g_options.grid_num_rows;
		
		var gridHeight = g_functions.getSpaceByNumItems(numRows, g_options.tile_height, g_temp.spaceBetweenRows);
		gridHeight += g_options.grid_padding * 2;
		
		return(gridHeight);
	}
	
	/**
	 * get the grid element
	 */
	this.getElement = function(){
		return(g_objGrid);
	}
	
	/**
	 * get element size and position
	 */
	this.getSize = function(){
		
		var objSize = g_functions.getElementSize(g_objGrid);
		return(objSize);
		
	}
	
	/**
	 * get number of panes
	 */
	this.getNumPanes = function(){
		
		return(g_temp.numPanes);
	}
	
	/**
	 * get if the current pane is first
	 */
	this.isFirstPane = function(){
		
		if(g_temp.currentPane == 0)
			return(true);
		
		return(false);
	}
	
	
	/**
	 * get if the current pane is last
	 */
	this.isLastPane = function(){
		
		if(g_temp.currentPane == (g_temp.numPanes -1) )
			return(true);
		
		return(false);
	}
	
	
	/**
	 * get pane number, and num panes
	 */
	this.getPaneInfo = function(){
		
		var obj = {
			pane: g_temp.currentPane,
			total: g_temp.numPanes
		};
		
		return(obj);
	}
	
	
	/**
	 * get current pane
	 */
	this.getPane = function(){
		
		return(g_temp.currentPane);
	}
	
	
	/**
	 * set grid width (horizontal type)
	 */
	this.setWidth = function(gridWidth){
		g_temp.gridWidth = gridWidth;
		g_temp.isHorizontal = true;
	}
	
	/**
	 * set max width, the width will be corrected by the number of items
	 * set vertical type
	 */
	this.setMaxWidth = function(maxWidth){
		g_temp.gridWidth = maxWidth;
		g_temp.isMaxWidth = true;
		g_temp.isHorizontal = true;
	}
	
	
	/**
	 * set grid height (vertical type)
	 */
	this.setHeight = function(gridHeight){
		g_temp.gridHeight = gridHeight;
		g_temp.isHorizontal = false;
		
	}
	
	/**
	 * set max height, the height will be corrected by the number of items
	 * set the vertical type
	 */
	this.setMaxHeight = function(maxHeight){
		g_temp.gridHeight = maxHeight;
		g_temp.isMaxHeight = true;
		g_temp.isHorizontal = false;
	}
	
	
	/**
	 * goto some pane
	 * force skip current pane checks
	 */
	this.gotoPane = function(index, fromWhere){
		
		if(validatePaneIndex(index) == false)
			return(false);
		
		if(index == g_temp.currentPane)
			return(false);
		
		var innerPos = -g_temp.arrPanes[index];
		
		g_temp.currentPane = index;
		animateInnerTo(innerPos);
		
		//trigger pane change event
		g_objThis.trigger(t.events.PANE_CHANGE, index);
	}
	
	
	/**
	 * foreward to the next pane
	 */
	this.nextPane = function(){
				
		var nextPaneIndex = g_temp.currentPane+1;
		
		if(nextPaneIndex >= g_temp.numPanes){
			
			if(g_options.grid_carousel == false)
				return(true);
			
			nextPaneIndex = 0;
		}
		
		t.gotoPane(nextPaneIndex, "next");
	}
	
	
	/**
	 * foreward to the next pane
	 */
	this.prevPane = function(){
		
		var prevPaneIndex = g_temp.currentPane-1;
		if(prevPaneIndex < 0){
			prevPaneIndex = g_temp.numPanes-1;
			
			if(g_options.grid_carousel == false)
				return(false);
		}
		
		t.gotoPane(prevPaneIndex, "prev");
	}
	
	
	/**
	 * set next pane button
	 */
	this.attachNextPaneButton = function(objButton){
		
		g_functions.setButtonOnClick(objButton, t.nextPane);

		if(g_options.grid_carousel == true)		
			return(true);
		
		if(t.isLastPane())
			objButton.addClass("ug-button-disabled");
		
		//set disabled button class if first pane
		g_objThis.on(t.events.PANE_CHANGE, function(){
			
			if(t.isLastPane())
				objButton.addClass("ug-button-disabled");
			else
				objButton.removeClass("ug-button-disabled");
	
		});
		
	}
	
	
	/**
	 * set prev pane button
	 */
	this.attachPrevPaneButton = function(objButton){
				
		g_functions.setButtonOnClick(objButton, t.prevPane);
		
		if(g_options.grid_carousel == true)		
			return(true);
		
		if(t.isFirstPane())
			objButton.addClass("ug-button-disabled");
		
		//set disabled button class if first pane
		g_objThis.on(t.events.PANE_CHANGE, function(){
			
			if(t.isFirstPane())
				objButton.addClass("ug-button-disabled");
			else
				objButton.removeClass("ug-button-disabled");
	
		});
		
	}
	
	
	/**
	 * attach bullets object
	 */
	this.attachBullets = function(objBullets){
		
		objBullets.setActive(g_temp.currentPane);
		
		jQuery(objBullets).on(objBullets.events.BULLET_CLICK, function(data, numBullet){
			t.gotoPane(numBullet, "theme");
			objBullets.setActive(numBullet);				
		});
		
		jQuery(t).on(t.events.PANE_CHANGE, function(data, numPane){
			objBullets.setActive(numPane);
		});
		
	}
	
	
	/**
	 * get tile design object
	 */
	this.getObjTileDesign = function(){
		return g_tilesDesign;
	}
	
	
	/**
	 * init function 
	 */
	this.init = function(gallery, customOptions, isTilesMode){
		
		init(gallery, customOptions, isTilesMode);
	}
	
		
	
	/**
	 * set html and properties
	 */	
	this.run = function(){
		run();
	}

	
	/**
	 * set html 
	 */
	this.setHtml = function(parentContainer){
		
		setHtml(parentContainer);
	}
	
}



/**
 * tiles class
 */
function UGTiles(){

	var t = this, g_objThis = jQuery(this);
	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objWrapper, g_objParent;	
	var g_functions = new UGFunctions(), g_arrItems, g_objTileDesign = new UGTileDesign();
	var g_thumbs = new UGThumbsGeneral(), g_vars = {};
    var g_arrNestedGridRow, g_arrNestedItems;
	
	
	var g_options = {
		 tiles_type: "columns",					//columns / justified - tiles layout type
		 tiles_col_width: 250,					//column width - exact or base according the settings
		 tiles_align:"center",					//align of the tiles in the space
		 tiles_exact_width: false,				//exact width of column - disables the min and max columns
		 tiles_space_between_cols: 3,			//space between images
		 tiles_space_between_cols_mobile: 3,    //space between cols for mobile type
		 tiles_include_padding: true,			//include padding at the sides of the columns, equal to current space between cols
		 tiles_min_columns: 2,					//min columns
		 tiles_max_columns: 0,					//max columns (0 for unlimited)
		 tiles_keep_order: false,				//keep order - slower algorytm
		 tiles_set_initial_height: true,		//set some estimated height before images show
		 
		 tiles_justified_row_height: 150,		//base row height of the justified type
		 tiles_justified_space_between: 3,		//space between the tiles justified type

		 tiles_nested_optimal_tile_width: 250,	// tiles optimal width
	     tiles_nested_col_width: null,			// nested tiles column width
	     tiles_nested_debug: false,
	     
		 tiles_enable_transition: true			//enable transition when screen width change
	};
	
	this.events = {
			THUMB_SIZE_CHANGE: "thumb_size_change",
			TILES_FIRST_PLACED: "tiles_first_placed",		//only in case of justified
			ALL_TILES_LOADED: "all_tiles_loaded"
	};
	
	var g_temp = {
			isFirstTimeRun:true,   //if run once
			handle:null,		   //interval handle
			isTransActive: false,  //is transition active
			isTransInited: false,  //if the transition function is set
			isFirstPlaced: true,   //is first time placed
			isAllLoaded: false
	};
	
    var g_nestedWork = {
    		colWidth: null,
            nestedOptimalCols: 5,
            gridY: 0,
            maxColumns: 0,						 //maxColumns
            columnsValueToEnableHeightResize: 3, //columns Value To Enable Height Resize
            resizeLeftRightToColumn: true,
            currentItem: 0,
	        currentGap: null,
	        optimalTileWidth: null,
	        maxGridY:0
    }
	
	
	function __________GENERAL_________(){};
	
	
	/**
	 * init the gallery
	 */
	function init(gallery, customOptions){
		
		g_objects = gallery.getObjects();
		g_gallery = gallery;
		g_objGallery = jQuery(gallery);
		g_objWrapper = g_objects.g_objWrapper;
		g_arrItems = g_objects.g_arrItems;
		
		g_options = jQuery.extend(g_options, customOptions);

		modifyOptions();
		
		g_objTileDesign.init(gallery, g_options);
		
		g_thumbs = g_objTileDesign.getObjThumbs();
		
	}
	
	
	/**
	 * modify options
	 */
	function modifyOptions(){
		
		if(g_options.tiles_min_columns < 1)
			g_options.tiles_min_columns = 1;
		
		//protection of max columns, can't be more then min columns
		if(g_options.tiles_max_columns != 0 && g_options.tiles_max_columns < g_options.tiles_min_columns){
			g_options.tiles_max_columns = g_options.tiles_min_columns;
		}
		
	}
	
	
	/**
	 * set the grid panel html
	 */
	function setHtml(objParent){
		
		if(!objParent){
			if(g_objParent)
				objParent = g_objParent;
			else
				var objParent = g_objWrapper;
		}
		
		g_objParent = objParent;
		
		var tilesType = g_options.tiles_type;
		objParent.addClass("ug-tiletype-"+tilesType);
		
		g_objTileDesign.setHtml(objParent);
		
		objParent.children(".ug-thumb-wrapper").hide();
	}
	
	
	/**
	 * set class that enables transition
	 */
	function setTransition(){
		
		//set the tiles in resting mode, to activate their own transitions
		g_objParent.addClass("ug-tiles-rest-mode");
		
		g_temp.isTransInited = true;
		
		//add css tansition
		if(g_options.tiles_enable_transition == true){
			g_objParent.addClass("ug-tiles-transit");
			
			//add image overlay transition
			var optionsTile = g_objTileDesign.getOptions();
			
			if(optionsTile.tile_enable_image_effect == true && optionsTile.tile_image_effect_reverse == false)
				g_objParent.addClass("ug-tiles-transit-overlays");
			
			g_temp.isTransActive = true;
		}
		
	}
	
	
	/**
	 * get parent width
	 */
	function getParentWidth(){
		return g_functions.getElementSize(g_objParent).width;
	}
	
	
	/**
	 * do some actions before transition
	 */
	function doBeforeTransition(){
		
		if(g_temp.isTransInited == false)
			return(false);
			
		g_objParent.addClass("ug-tiles-transition-active");
		g_objParent.removeClass("ug-tiles-rest-mode");
		
		//prepare for transition
		if(g_temp.isTransActive == false)
			return(false);
				
		g_objTileDesign.disableEvents();
	}
	
	
	/**
	 * set after transition classes
	 */
	function doAfterTransition_setClasses(){
		
		if(g_temp.isTransInited == false)
			return(false);
		
		g_objParent.removeClass("ug-tiles-transition-active");
		g_objParent.addClass("ug-tiles-rest-mode");
	}
	
	
	/**
	 * do some actions after transition
	 */
	function doAfterTransition(){

		
		if(g_temp.isTransActive == true){
						
			//trigger size change after transition
			setTimeout(function(){
				
				g_objTileDesign.enableEvents();
				g_objTileDesign.triggerSizeChangeEventAllTiles();
				
				doAfterTransition_setClasses();
				

			}, 800);
			
			//control size change 
			if(g_temp.handle)
				clearTimeout(g_temp.handle);
				
			g_temp.handle = setTimeout(function(){
				
				doAfterTransition_setClasses();
				
				g_objTileDesign.triggerSizeChangeEventAllTiles();
				g_temp.handle = null;
								
			}, 2000);
			
			
		}else{
						
			g_objTileDesign.triggerSizeChangeEventAllTiles();

			doAfterTransition_setClasses();

		}

	}

	
	function __________COLUMN_TYPE_RELATED_________(){};
	
	/**
	 * count width by number of columns
	 */
	function fillTilesVars_countWidthByCols(){

		g_vars.colWidth = (g_vars.availWidth - g_vars.colGap * (g_vars.numCols-1)) / g_vars.numCols;
		g_vars.colWidth = Math.floor(g_vars.colWidth);

		g_vars.totalWidth = g_functions.getSpaceByNumItems(g_vars.numCols, g_vars.colWidth, g_vars.colGap);
		
	}
	
	
	
	/**
	 * fill common tiles vars
	 */
	function fillTilesVars(){
		
		g_vars.colWidth = g_options.tiles_col_width;
		g_vars.minCols = g_options.tiles_min_columns;
		g_vars.maxCols = g_options.tiles_max_columns;
		
		if(g_gallery.isMobileMode() == false){
			g_vars.colGap = g_options.tiles_space_between_cols;
		} else {
			g_vars.colGap = g_options.tiles_space_between_cols_mobile;
		}
		
		//set gallery width
		g_vars.galleryWidth = getParentWidth();
		
		g_vars.availWidth = g_vars.galleryWidth;
		
		if(g_options.tiles_include_padding == true)
			g_vars.availWidth = g_vars.galleryWidth - g_vars.colGap*2;
		
		//set the column number by exact width
		if(g_options.tiles_exact_width == true){
			
			g_vars.numCols = g_functions.getNumItemsInSpace(g_vars.availWidth, g_vars.colWidth, g_vars.colGap);

			if(g_vars.maxCols > 0 && g_vars.numCols > g_vars.maxCols)
				g_vars.numCols = g_vars.maxCols;

			//if less then min cols count width by cols
			if(g_vars.numCols < g_vars.minCols){
				g_vars.numCols = g_vars.minCols;

				fillTilesVars_countWidthByCols();
				
			}else{
				g_vars.totalWidth = g_vars.numCols * (g_vars.colWidth + g_vars.colGap) - g_vars.colGap;
			}
			
		} else {
			
			//set dynamic column number
			
			var numCols = g_functions.getNumItemsInSpaceRound(g_vars.availWidth, g_vars.colWidth, g_vars.colGap);
						
			if(numCols < g_vars.minCols)
				numCols = g_vars.minCols;
			else
				if(g_vars.maxCols != 0 && numCols > g_vars.maxCols)
					numCols = g_vars.maxCols;

			g_vars.numCols = numCols;
			
			fillTilesVars_countWidthByCols();
			
		}

		switch(g_options.tiles_align){
			case "center":
			default:
				//add x to center point
				g_vars.addX = Math.round( (g_vars.galleryWidth - g_vars.totalWidth) / 2 );
			break;
			case "left":
				g_vars.addX = 0;
			break;
			case "right":
				g_vars.addX = g_vars.galleryWidth - g_vars.totalWidth;
			break;
		}
				
		//get posx array (constact to all columns)
		g_vars.arrPosx = [];		
		for(col = 0; col < g_vars.numCols; col++){
			var colX = g_functions.getColX(col, g_vars.colWidth, g_vars.colGap);
			g_vars.arrPosx[col] = colX + g_vars.addX;
		}
		
	}
	
	
	/**
	 * init col heights
	 */
	function initColHeights(){
		
		g_vars.maxColHeight = 0;
		
		//empty heights array
		g_vars.colHeights = [0];
		
	}
	
	
	
	/**
	 * get column with minimal height
	 */
	function getTilesMinCol(){
		var numCol = 0;
		
		var minHeight = 999999999;
		
		for(col = 0; col < g_vars.numCols; col++){
			
			if(g_vars.colHeights[col] == undefined || g_vars.colHeights[col] == 0)
				return col;
			
			if(g_vars.colHeights[col] < minHeight){
				numCol = col;
				minHeight = g_vars.colHeights[col];
			}
		
		}
		
		return(numCol);
	}
	
	
	/**
	 * place tile as it loads
	 */
	function placeTile(objTile, toShow, setGalleryHeight, numCol){
		
		if(numCol === null || typeof numCol == "undefined")
			var numCol = getTilesMinCol();
		
		//set posy
		var posy = 0;
		if(g_vars.colHeights[numCol] !== undefined)
			posy = g_vars.colHeights[numCol];
		
		var itemHeight = g_objTileDesign.getTileHeightByWidth(g_vars.colWidth, objTile);
		
		if(itemHeight === null){	//for custom html tile
			if(g_options.tiles_enable_transition == true)
				throw new Error("Can't know tile height, please turn off transition");
			
			var itemSize = g_functions.getElementSize(objTile);
			itemHeight = itemSize.height;
		}
		
		var posx = g_vars.arrPosx[numCol];
		
		g_functions.placeElement(objTile, posx, posy);
		
		var realHeight = posy + itemHeight;
				
		g_vars.colHeights[numCol] = realHeight + g_vars.colGap;
		
		//set max height
		if(g_vars.maxColHeight < realHeight)
			g_vars.maxColHeight = realHeight;

		if(toShow == true)
			objTile.show().fadeTo(0,1);
		
		if(setGalleryHeight == true){
			g_objParent.height(g_vars.maxColHeight);			
		}
		
	}
	
	
	/**
	 * place the tiles
	 */
	function placeTiles(toShow){
		
		if(!toShow)
			toShow = false;
		
		fillTilesVars();
		initColHeights();
		
		var objThumbs = g_thumbs.getThumbs(g_thumbs.type.GET_THUMBS_RATIO);
				
		//do some operation before the transition
		doBeforeTransition();
		
		//resize all thumbs
		g_objTileDesign.resizeAllTiles(g_vars.colWidth, g_objTileDesign.resizemode.VISIBLE_ELEMENTS, objThumbs);
		
		//place elements
		for(var index = 0; index < objThumbs.length; index++){
			var objTile = jQuery(objThumbs[index]);
			var col = undefined;
			if(g_options.tiles_keep_order == true)
				col = g_functions.getColByIndex(g_vars.numCols, index);
			
			placeTile(objTile, toShow, false, col);
		}
		
		//bring back the state after transition
		doAfterTransition();
		
		//set gallery height, according the transition
		var galleryHeight = g_objParent.height();
		
		if(g_temp.isTransActive == true && galleryHeight > g_vars.maxColHeight)
			setTimeout(function(){
				g_objParent.height(g_vars.maxColHeight);
			},700);
		else
			g_objParent.height(g_vars.maxColHeight);
	}
	
	
	/**
	 * check if alowed to place ordered tile
	 */
	function isOrderedTilePlaceAlowed(objTile){
		
		var index = objTile.index();

		//don't allow double put items
		var currentItem = g_gallery.getItem(index);
		if(currentItem.ordered_placed === true)
			return(false);

		
		var prevIndex = g_functions.getPrevRowSameColIndex(index, g_vars.numCols);

		//put first item in the column
		if(prevIndex < 0)
			return(true);
				
		//check if previous tile in column is placed
		var objPrevItem = g_gallery.getItem(prevIndex);
		if(objPrevItem.ordered_placed === true)
			return(true);
		
		return(false);
	}
	
	
	/**
	 * place ordered tile
	 */
	function placeOrderedTile(objTile, isForce){
		
		if(isForce !== true){

			var isAlowed = isOrderedTilePlaceAlowed(objTile);
			
			if(isAlowed == false)
				return(false);
		}
			
		var index = objTile.index();
				
		var col = g_functions.getColByIndex(g_vars.numCols, index);

		var objItem = g_gallery.getItem(index);
		
		g_objTileDesign.resizeTile(objTile, g_vars.colWidth);
		
		placeTile(objTile, true, true, col);
		
		objItem.ordered_placed = true;
		
		//check by recursion and place next items in column
		var numItems = g_gallery.getNumItems();
		var nextIndex = g_functions.getNextRowSameColIndex(index, g_vars.numCols);
		if(nextIndex >= numItems)
			return(false);
		
		var nextTile = g_thumbs.getThumbByIndex(nextIndex);
		var nextItem = g_gallery.getItem(nextIndex);
		
		var isLoaded = g_thumbs.isThumbLoaded(nextTile);
		
		if(g_thumbs.isThumbLoaded(nextTile) && !nextItem.ordered_placed)
			placeOrderedTile(nextTile, true);
	}
	
	
	/**
	 * on single image load
	 */
	function onSingleImageLoad(objImage, isError){
		
		if(isError == true)
			return(false);
		
		objImage = jQuery(objImage);
		var objTile = jQuery(objImage).parent();
		
		g_thumbs.triggerImageLoadedEvent(objTile, objImage);
		
		if(g_options.tiles_keep_order == true){

			placeOrderedTile(objTile);
		
		}else{
						
			g_objTileDesign.resizeTile(objTile, g_vars.colWidth);
			placeTile(objTile, true, true);
		}
	
	}
	
	
	/**
	 * run columns type - place tiles that are not loaded yet
	 */
	function runColumnsType(){
		
		//get thumbs only when the ratio not set
		var objThumbs = g_thumbs.getThumbs(g_thumbs.type.GET_THUMBS_NO_RATIO);
		
		if(!objThumbs || objThumbs.length == 0)
			return(false);
		
		g_temp.isAllLoaded = false;
				
		if(g_temp.isFirstPlaced == true){
			
			fillTilesVars();
			initColHeights();
			
			var diffWidth = Math.abs(g_vars.galleryWidth - g_vars.totalWidth);
			
			//set initial height of the parent by estimation
			if(g_options.tiles_set_initial_height == true && g_functions.isScrollbarExists() == false && diffWidth < 25){
				
				var numThumbs = objThumbs.length;
				var numRows = Math.ceil(objThumbs.length / g_vars.numCols);
				var estimateHeight = numRows * g_options.tiles_col_width * 0.75;
				
				g_objParent.height(estimateHeight);
				fillTilesVars();
			}
			
		}
		
		
		objThumbs.fadeTo(0,0);
		var objImages = objThumbs.find("img.ug-thumb-image");
		
		var initNumCols = g_vars.numCols;
		var initWidth = g_vars.galleryWidth;
		
		//on place the tile as it loads. After all tiles loaded,check position again.
		g_functions.checkImagesLoaded(objImages, function(){
						
			fillTilesVars();
			
			if(initNumCols != g_vars.numCols || initWidth != g_vars.galleryWidth){
				placeTiles(false);
			}
			
			setTransition();
			g_objThis.trigger(t.events.ALL_TILES_LOADED);
			
		} ,function(objImage, isError){
			
			if(g_temp.isFirstPlaced == true)
				g_gallery.triggerEvent(t.events.TILES_FIRST_PLACED);	//set to false
			
			onSingleImageLoad(objImage, isError);
		
		});
					
		
	}
	
	
	function __________JUSTIFIED_TYPE_RELATED_________(){};

	/**
	 * ------------ JUSTIFIED TYPE RELATED FUNCTIONS ----------------
	 */
	
	function getJustifiedData(){
		
		var galleryWidth = getParentWidth();
		
		var objTiles = g_thumbs.getThumbs(true);
		var rowHeightOpt = g_options.tiles_justified_row_height;
		var arrWidths = [];
		var totalWidth = 0;
		var gap = g_options.tiles_justified_space_between;
		var numTiles = objTiles.length;
		
		//get arr widths and total width
		jQuery.each(objTiles, function(index, objTile){
			objTile = jQuery(objTile);
			
			var objItem = g_thumbs.getItemByThumb(objTile);
			
			var tileWidth = objItem.thumbWidth;
			var tileHeight = objItem.thumbHeight;
			
			if (tileHeight !== rowHeightOpt) 
				tileWidth = Math.floor(objItem.thumbRatioByWidth * rowHeightOpt);
			
			arrWidths[index] = tileWidth;
			
			totalWidth += tileWidth;
		});

		
		var numRows = Math.ceil(totalWidth / galleryWidth);
		
		if(numRows > numTiles)
			numRows = numTiles;
		
		var finalRowWidth = totalWidth / numRows;
		
		//fill rows array, break tiles to rows
		var arrRows = [], eachRowWidth = 0;
		var rowsWidths = [], rowsTiles = [], row = [];
		var progressWidth = 0, numRow = 0;
		
		jQuery.each(objTiles, function(index, objTile){
			var tileWidth = arrWidths[index];
						
			if( (progressWidth + tileWidth / 2) > (numRow+1) * finalRowWidth){
				
				rowsWidths[arrRows.length] = eachRowWidth;				
				arrRows.push(row);
				row = [];
				eachRowWidth = 0;
				numRow++;
			}
			
			progressWidth += tileWidth;
			eachRowWidth += tileWidth;
			
			row.push(objTile);
		});
		
		rowsWidths[arrRows.length] = eachRowWidth;
		arrRows.push(row);
				
		
		//set heights and position images:	
		var arrRowWidths = [];
		var arrRowHeights = [];
		var totalHeight = 0;
		
		jQuery.each(arrRows, function(index, row){
			
			var numTiles = row.length;
			var rowWidth = rowsWidths[index];
			
			var gapWidth = (row.length-1) * gap;

			var ratio = (galleryWidth - gapWidth) / rowWidth;
			var rowHeight = Math.round(rowHeightOpt * ratio);
			
			//count total height
			totalHeight += rowHeight;
			if(index > 0)
				totalHeight += gap;
			
			arrRowHeights.push(rowHeight);
			
			//ratio between 2 heights for fixing image width:
            var ratioHeights = rowHeight / rowHeightOpt;
			
            //set tiles sizes:
            var arrRowTileWidths = [];
            var actualRowWidth = gapWidth;
            
            jQuery.each(row, function(indexInRow, tile){
            	var objTile = jQuery(tile);
            	var tileIndex = objTile.index();
            	var tileWidth = arrWidths[tileIndex];
            	var newWidth = Math.round(tileWidth * ratioHeights);
            	
            	arrRowTileWidths[indexInRow] = newWidth;
            	actualRowWidth += newWidth;            	
            });
        	
            //fix images widths by adding or reducing 1 pixel
            var diff = actualRowWidth - galleryWidth;
            
            var newTotal = 0;
            jQuery.each(arrRowTileWidths, function(indexInRow, width){
            	
            	if(diff == 0)            		
            		return(false);
            	
            	if(diff < 0){
            		arrRowTileWidths[indexInRow] = width + 1;
            		diff++;
            	}else{
            		arrRowTileWidths[indexInRow] = width - 1;
            		diff--;
            	}
            	
            	//if at last item diff stays, add all diff
            	if(indexInRow == (arrRowTileWidths.length-1) && diff != 0)
            		arrRowTileWidths[indexInRow] -= diff;
            });
            
            arrRowWidths[index] = arrRowTileWidths;
		});
		
		
		var objData = {
				arrRows: arrRows,
				arrRowWidths: arrRowWidths,
				arrRowHeights: arrRowHeights,
				gap: gap,
				totalHeight: totalHeight
		};
		
		return(objData);
	}

	
	/**
	 * put justified images
	 */
	function placeJustified(toShow){
		
		if(!toShow)
			var toShow = false;
		
		var parentWidth = getParentWidth();

		var objData = getJustifiedData();
		
		//if the width changed after height change (because of scrollbar), recalculate
		g_objParent.height(objData.totalHeight);
	
		var parentWidthAfter = getParentWidth();
		if(parentWidthAfter != parentWidth)
			objData = getJustifiedData();
		
		doBeforeTransition();
		
		var posy = 0;
		var totalWidth = 0;		//just count total widht for check / print
		jQuery.each(objData.arrRows, function(index, row){
        	
			var arrRowTileWidths = objData.arrRowWidths[index];
			var rowHeight = objData.arrRowHeights[index];
			
			//resize and place tiles
            var posx = 0;
            jQuery.each(row, function(indexInRow, tile){
            	            	            	
            	var objTile = jQuery(tile);
            	var tileHeight = rowHeight;
            	var tileWidth = arrRowTileWidths[indexInRow];
            	
            	g_objTileDesign.resizeTile(objTile, tileWidth, tileHeight, g_objTileDesign.resizemode.VISIBLE_ELEMENTS);
            	g_functions.placeElement(objTile, posx, posy);
            	
            	posx += tileWidth;
            	
            	if(posx > totalWidth)
            		totalWidth = posx;
            	
            	posx += objData.gap;
            	
            	if(toShow == true)
            		jQuery(tile).show();
            
            });
            
            posy += (rowHeight + objData.gap);
            
		});
		
		doAfterTransition();
		
	}
	
	
	
	/**
	 * run justified type gallery
	 */
	function runJustifiedType(){
		
		var objImages = jQuery(g_objWrapper).find("img.ug-thumb-image");
		var objTiles = g_thumbs.getThumbs();
		
		g_temp.isAllLoaded = false;
		
		objTiles.fadeTo(0,0);				
		
		g_functions.checkImagesLoaded(objImages, function(){
			
			setTimeout(function(){
				placeJustified(true);
				objTiles.fadeTo(0,1);
				g_gallery.triggerEvent(t.events.TILES_FIRST_PLACED);
				setTransition();
				
				g_objThis.trigger(t.events.ALL_TILES_LOADED);
				
			});
			
		}, function(objImage, isError){

			objImage = jQuery(objImage);
			var objTile = jQuery(objImage).parent();
			g_thumbs.triggerImageLoadedEvent(objTile, objImage);
		
		});
				
	}
	

	
		
    function __________NESTED_TYPE_RELATED_________() {    };
    
    
    /**
     * ------------ NESTED TYPE RELATED FUNCTIONS ----------------
     */
    function runNestedType() {

        var objImages = jQuery(g_objWrapper).find("img.ug-thumb-image");
        var objTiles = g_thumbs.getThumbs();
        
        g_temp.isAllLoaded = false;
        
        objTiles.fadeTo(0, 0);
        
        g_functions.checkImagesLoaded(objImages, function () {
        	
        	if(g_gallery.isMobileMode() == true){
        		placeTiles(true);
        	}
        	else
        		placeNestedImages(true);
            
        	g_gallery.triggerEvent(t.events.TILES_FIRST_PLACED);
            setTransition();
            g_objThis.trigger(t.events.ALL_TILES_LOADED);

        }, function (objImage, isError) {

            objImage = jQuery(objImage);
            var objTile = jQuery(objImage).parent();
            g_thumbs.triggerImageLoadedEvent(objTile, objImage);

        });

    }

    
    /**
     * fill nested vars
     */
    function fillNestedVars(){

    	var galleryWidth = getParentWidth();
    	g_nestedWork.galleryWidth = galleryWidth;
        
        g_arrNestedGridRow = {};
    	g_nestedWork.colWidth = g_options.tiles_nested_col_width;
    	g_nestedWork.optimalTileWidth = g_options.tiles_nested_optimal_tile_width;
    	
    	g_nestedWork.currentGap = g_options.tiles_space_between_cols;

    	if(g_gallery.isMobileMode() == true)
            g_nestedWork.currentGap = g_options.tiles_space_between_cols_mobile;
    	
        if(g_nestedWork.colWidth == null){
			g_nestedWork.colWidth = Math.floor(g_nestedWork.optimalTileWidth/g_nestedWork.nestedOptimalCols);
		} else if (g_nestedWork.optimalTileWidth > g_nestedWork.colWidth) {
            g_nestedWork.nestedOptimalCols = Math.ceil(g_nestedWork.optimalTileWidth / g_nestedWork.colWidth);
        } else {
            g_nestedWork.nestedOptimalCols = 1;
        }
    	
    	g_nestedWork.maxColumns = g_functions.getNumItemsInSpace(galleryWidth, g_nestedWork.colWidth, g_nestedWork.currentGap);
    	
        //fix col width - justify tiles
        g_nestedWork.colWidth = g_functions.getItemSizeInSpace(galleryWidth, g_nestedWork.maxColumns, g_nestedWork.currentGap);
        
        g_nestedWork.gridY = 0;
        g_arrNestedItems = []
        
    	var objTiles = g_thumbs.getThumbs(true);
		objTiles.each(function(){
			var objTile = jQuery(this);
		    var sizes = setNestedSize(objTile);
		    g_arrNestedItems.push(sizes);
		 });
        
        if (g_nestedWork.optimalTileWidth > g_nestedWork.colWidth) {
            g_nestedWork.nestedOptimalCols = Math.ceil(g_nestedWork.optimalTileWidth / g_nestedWork.colWidth);
        } else {
            g_nestedWork.nestedOptimalCols = 1;
        }
        
        g_nestedWork.totalWidth = g_nestedWork.maxColumns*(g_nestedWork.colWidth+g_nestedWork.currentGap)-g_nestedWork.currentGap;

        switch(g_options.tiles_align){
			case "center":
			default:
				//add x to center point
				g_nestedWork.addX = Math.round( (g_nestedWork.galleryWidth - g_nestedWork.totalWidth) / 2 );
			break;
			case "left":
				g_nestedWork.addX = 0;
			break;
			case "right":
				g_nestedWork.addX = g_nestedWork.galleryWidth - g_nestedWork.totalWidth;
			break;
		}
        
        
        g_nestedWork.maxGridY = 0;
    }
    
    
    /**
     * place Nested type images
     */
    function placeNestedImages(toShow){
    	
    	var parentWidth = getParentWidth();
    	
    	fillNestedVars();
        placeNestedImagesCycle();
    	
        var totalHeight = g_nestedWork.maxGridY * (g_nestedWork.colWidth + g_nestedWork.currentGap) - g_nestedWork.currentGap;

    	//if the width changed after height change (because of scrollbar), recalculate
		g_objParent.height(totalHeight);
		
		var parentWidthAfter = getParentWidth();
		
		if(parentWidthAfter != parentWidth){
    		fillNestedVars();
        	placeNestedImagesCycle();
        }
        
        if(g_options.tiles_nested_debug == false)
        	drawNestedImages(toShow);

    }

    
    /**
     * set Nested size
     */
    function setNestedSize(objTile){

        var dimWidth, dimHeight;
        var output = {};
        
        var colWidth = g_nestedWork.colWidth;
        var gapWidth = g_nestedWork.currentGap;
        
        var objImageSize = g_objTileDesign.getTileImageSize(objTile);
        var index = objTile.index();
        
        var maxDim = Math.ceil(getPresettedRandomByWidth(index)*(g_nestedWork.nestedOptimalCols*1/3) + g_nestedWork.nestedOptimalCols * 2/3);
        
        var imgWidth = objImageSize.width;
        var imgHeight = objImageSize.height;
        
        var ratio = imgWidth/imgHeight;
        
        if(imgWidth>imgHeight){
            dimWidth = maxDim;
            dimHeight = Math.round(dimWidth/ratio);
            if(dimHeight == 0){
                dimHeight = 1;
            }
        } else {
            dimHeight = maxDim;
            dimWidth = Math.round(dimHeight*ratio);
            if(dimWidth == 0){
                dimWidth = 1;
            }
        }

        output.dimWidth = dimWidth;
        output.dimHeight = dimHeight;
        output.width = dimWidth * colWidth + gapWidth*(dimWidth-1);
        output.height = dimHeight * colWidth + gapWidth*(dimHeight-1);
        output.imgWidth =  imgWidth;
        output.imgHeight = imgHeight;
        output.left = 0;
        output.top = 0;
        return output;
    }

    
    /**
     *  get presetted random [0,1] from int
     */
    function getPresettedRandomByWidth(index){
        return Math.abs(Math.sin(Math.abs(Math.sin(index)*1000)));
    }

    
    /**
     * place nested images debug
     */
    function placeNestedImagesDebug(toShow, placeOne){
        
    	if(placeOne == false){
            for(var i = g_nestedWork.currentItem; i<g_arrNestedItems.length; i++){
                placeNestedImage(i, true);
            }
            g_nestedWork.currentItem = g_arrNestedItems.length-1;
        } else {
            placeNestedImage(g_nestedWork.currentItem, true);
        }
        
    	for(var i = 0; i<=g_nestedWork.currentItem; i++){
            drawNestedImage(i, true);
        }

        g_nestedWork.currentItem++;
    	
    }
    
    
    /**
     * start cycle of placing imgaes
     */
    function placeNestedImagesCycle(placeOne){
                
        if(g_options.tiles_nested_debug == true){

        	if(typeof placeOne === 'undefined')
                placeOne = true;
        	
        	placeNestedImagesDebug(true, placeOne);
        	
        	return(false);
        } 
                
        for(var i = 0; i < g_arrNestedItems.length; i++)
                placeNestedImage(i, true);
    
    }


    /**
     * place Nested Image
     */
    function placeNestedImage(tileID, toShow){

        if(!toShow)
            var toShow = false;
                
        g_nestedWork.maxColHeight = 0;

        var rowsValue = g_functions.getObjectLength(g_arrNestedGridRow);

        for(var row = g_nestedWork.gridY; row<=rowsValue+1; row++){
            for (var column = 0; column < g_nestedWork.maxColumns; column++) {
                if (isGridRowExists(g_nestedWork.gridY) == false || isGridCellTaken(g_nestedWork.gridY, column) == false) {
                    var totalFree = getTotalFreeFromPosition(column);
                    calculateOptimalStretchAndPosition(tileID, totalFree, column);
                                        
                    return;
                }
            }
            g_nestedWork.gridY++;
        }
        
    }

    
    /**
     * calculate optimal stretch of tile
     */
    function calculateOptimalStretchAndPosition(tileID, totalFree, column){

        var sizes = jQuery.extend(true, {}, g_arrNestedItems[tileID]);
        var currentWidth = sizes.dimWidth;
        var placeForNextImage = totalFree - sizes.dimWidth;
        var optimalWidth = g_nestedWork.nestedOptimalCols;
        var onlyCurrentImage = (totalFree<=sizes.dimWidth || placeForNextImage<=0.33*optimalWidth || totalFree<=optimalWidth);

        //Width stretching if needed
        if(onlyCurrentImage){	// if free space is smaller than image width - place to this space anyway
            resizeToNewWidth(tileID, totalFree);
        } else if (placeForNextImage<=optimalWidth){ // if there are place for 2 images
            if(optimalWidth>=4){
                if(isGridImageAligned(Math.floor(totalFree/2), column) == true){
                    resizeToNewWidth(tileID, Math.floor(totalFree/2)+1);
                } else {
                    resizeToNewWidth(tileID, Math.floor(totalFree/2));
                }
            } else {
                resizeToNewWidth(objImage, totalFree);
            }
        } else {
            if(isGridImageAligned(currentWidth, column) == true){
                switch(currentWidth>=optimalWidth){
                    case true:
                        resizeToNewWidth(tileID, currentWidth-1);
                        break
                    case false:
                        resizeToNewWidth(tileID, currentWidth+1);
                        break

                }
            }
        }

        //Height stretching if needed
        sizes = jQuery.extend(true, {}, g_arrNestedItems[tileID]);
        var columnInfo = getGridColumnHeight(tileID, sizes.dimWidth, column); 	// [columnHeight, imagesIDs]

        if(g_nestedWork.columnsValueToEnableHeightResize <= columnInfo[0] && g_nestedWork.maxColumns>=2*g_nestedWork.nestedOptimalCols){

            var sideHelper = getGridImageVerticalDifference(column, sizes);
            var columnSizes = resizeToNewHeight(tileID, sideHelper.newHeight, true);
            g_arrNestedItems[tileID].dimHeight = columnSizes.dimHeight;
            var columnResizes = redistributeColumnItems(columnInfo, columnSizes.dimWidth, column);
            var columnCrosshairs = getColumnCrosshairsCount(columnResizes);
            var disableColumnResizes = false;

            if(columnCrosshairs >= 2){
                disableColumnResizes = true;
            }

            if(sideHelper.newHeight>=sizes.dimHeight){
                sizes = resizeToNewHeight(tileID, sideHelper.newHeight, true);
            }
            var sideResizes = getSideResizeInfo(sideHelper.idToResize, sideHelper.newHeight, sizes.dimHeight);
            sizes.top = g_nestedWork.gridY;
            sizes.left = column;
            sideResizes.push({"tileID": tileID, "sizes": sizes});

            var sideResizesVal = calcResizeRatio(sideResizes);
            var columnResizesVal = calcResizeRatio(columnResizes);

            if(sideResizesVal<columnResizesVal || disableColumnResizes == true) {
                applyResizes(sideResizes);
                return;
            } else {
                applyResizes(columnResizes);
                return;
            }


        }
        sizes.left = column;
        sizes.top = g_nestedWork.gridY;
        g_arrNestedItems[tileID] = sizes;
        putImageToGridRow(tileID, sizes, column, g_nestedWork.gridY);
        
        g_nestedWork.maxGridY = sizes.top + sizes.dimHeight;
        
    }

    /**
     * check columns crosshairs
     */
    function getColumnCrosshairsCount(tilesAndSizes){

        var crosshairsCountR = 0;
        var crosshairsCountL = 0;

        for(var i = 0; i<tilesAndSizes.length-1; i++){

            var sizes = tilesAndSizes[i].sizes;
            var topItem = -1;
            var bottomItem = -1;
            if(isGridRowExists(sizes.top+sizes.dimHeight) && g_nestedWork.maxColumns>sizes.left+sizes.dimWidth){
                topItem = g_arrNestedGridRow[sizes.top+sizes.dimHeight-1][sizes.left+sizes.dimWidth];
                bottomItem = g_arrNestedGridRow[sizes.top+sizes.dimHeight][sizes.left+sizes.dimWidth];
            }
            if(topItem != bottomItem){
                crosshairsCountR++;
            }
        }

        for(var i = 0; i<tilesAndSizes.length-1; i++){

            var sizes = tilesAndSizes[i].sizes;
            var topItem = -1;
            var bottomItem = -1;
            if(isGridRowExists(sizes.top+sizes.dimHeight) && sizes.left-1>=0){
                topItem = g_arrNestedGridRow[sizes.top+sizes.dimHeight-1][sizes.left-1];
                bottomItem = g_arrNestedGridRow[sizes.top+sizes.dimHeight][sizes.left-1];
            }
            if(topItem != bottomItem){
                crosshairsCountL++;
            }
        }
        return Math.max(crosshairsCountL, crosshairsCountR);
    }

    /**
     * get size resize info
     */
    function getSideResizeInfo(idToResize, newHeight, dimHeight){

        var currentTile = g_arrNestedItems[idToResize];
        var	tileHeight = currentTile.dimHeight;
        var tileWidth = currentTile.dimWidth;
        var tileLeft = currentTile.left;
        var tileTop = currentTile.top;
        var tileDimTop = parseInt(tileTop / (g_nestedWork.colWidth + g_nestedWork.currentGap));
        var tileDimLeft = parseInt(tileLeft / (g_nestedWork.colWidth + g_nestedWork.currentGap));
        var newSideHeight = tileHeight - newHeight + dimHeight;

        var sideSizes = resizeToNewHeight(idToResize, newSideHeight, true);
        var output = [];
        output.push({"tileID": idToResize, "sizes": sideSizes});
        return output;
    }

    /**
     * apply resizes to fix column
     */
    function applyResizes(resizeTilesAndSizes){

        for(var i = 0; i<resizeTilesAndSizes.length; i++){
            var sizes = resizeTilesAndSizes[i].sizes;
            var tileID = resizeTilesAndSizes[i].tileID;
            g_arrNestedItems[tileID]=jQuery.extend(true, {}, sizes);
            putImageToGridRow(tileID, sizes, sizes.left, sizes.top);
        }

    }

    /**
     * redistribute heights in column
     * returns current item sizes
     */
    function redistributeColumnItems(columnInfo, columnWidth){

        var originalHeight = 0;
        var columnHeight = 0;
        var objTiles = [];
        var cordX = 0, cordY = 0;

        for(var i = 0; i<columnInfo[1].length; i++){
            var tileID = columnInfo[1][i];
            var currentTile = g_arrNestedItems[columnInfo[1][i]];
            columnHeight += currentTile.dimHeight;
            if(i==0){
                var sizes = resizeToNewWidth(tileID, columnWidth, true);
                originalHeight += sizes.dimHeight;
                objTiles.push([columnInfo[1][i], sizes.dimHeight]);
                continue;
            }
            originalHeight += currentTile.dimHeight;
            objTiles.push([tileID, currentTile.dimHeight]);
        }

        cordX = currentTile.left;
        cordY = currentTile.top;

        var tempHeight = columnHeight;
        var output = [];

        for(var i = objTiles.length-1; i>=0; i--){
            var tileID = objTiles[i][0];
            var newHeight;
            if(i != 0) {
                newHeight = Math.max(Math.round(columnHeight*1/3),Math.floor(objTiles[i][1] * (columnHeight / originalHeight)));
                tempHeight = tempHeight - newHeight;
                sizes = resizeToNewHeight(tileID, newHeight, true);
                sizes.left = cordX;
                sizes.top = cordY;
                output.push({"tileID": tileID, "sizes": sizes});
                cordY += sizes.dimHeight;
            } else {
                newHeight = tempHeight;
                sizes = resizeToNewHeight(tileID, newHeight, true);
                sizes.left = cordX;
                sizes.top = cordY;
                output.push({"tileID": tileID, "sizes": sizes});
            }
        }
        return output;
    }

    /**
     * Calculate num of objects in current column and return they are ID's
     */
    function getGridColumnHeight(tileID, dimWidth, column){
        var tempY = g_nestedWork.gridY-1;
        var curImage = 0;
        var prevImage = 0;
        var columnHeight = 1;
        var imagesIDs = [];
        var toReturn = [];
        imagesIDs.push(tileID);
        if(tempY>=0){
            prevImage = 0;
            while(tempY>=0){
                curImage = g_arrNestedGridRow[tempY][column];
                if( (typeof g_arrNestedGridRow[tempY][column-1] === 'undefined' || g_arrNestedGridRow[tempY][column-1] != g_arrNestedGridRow[tempY][column])
                    &&(typeof g_arrNestedGridRow[tempY][column+dimWidth] === 'undefined' || g_arrNestedGridRow[tempY][column+dimWidth-1] != g_arrNestedGridRow[tempY][column+dimWidth])
                    &&(g_arrNestedGridRow[tempY][column]==g_arrNestedGridRow[tempY][column+dimWidth-1])){
                    if(prevImage != curImage){
                        columnHeight++;
                        imagesIDs.push(curImage);
                    }
                } else {
                    toReturn.push(columnHeight);
                    toReturn.push(imagesIDs);
                    return toReturn;
                }
                tempY--;
                prevImage = curImage;
            }
            toReturn.push(columnHeight);
            toReturn.push(imagesIDs);
            return toReturn;
        }
        return [0, []];
    }

    /**
     * get new height based on left and right difference
     */
    function getGridImageVerticalDifference(column, sizes){
        var newHeightR = 0;
        var newHeightL = 0;
        var dimWidth = sizes.dimWidth;
        var dimHeight = sizes.dimHeight;
        var leftID = 0;
        var rightID = 0;
        var array = jQuery.map(g_arrNestedGridRow, function(value, index) {
            return [value];
        });

        if(typeof array[g_nestedWork.gridY] === 'undefined' || typeof array[g_nestedWork.gridY][column-1]=== 'undefined'){
            newHeightL = 0;
        } else {
            var tempY=0;
            while(true){
                if(typeof g_arrNestedGridRow[g_nestedWork.gridY+tempY] !== 'undefined' && g_arrNestedGridRow[g_nestedWork.gridY+tempY][column-1] != -1 ){
                    leftID = g_arrNestedGridRow[g_nestedWork.gridY+tempY][column-2];
                    tempY++;
                    newHeightL++;
                } else {
                    break;
                }
            }
        }

        if(typeof array[g_nestedWork.gridY] === 'undefined' || typeof array[g_nestedWork.gridY][column+dimWidth]=== 'undefined'){
            newHeightR = 0;
        } else {
            tempY=0;
            while(true){
                if(typeof g_arrNestedGridRow[g_nestedWork.gridY+tempY] !== 'undefined' && g_arrNestedGridRow[g_nestedWork.gridY+tempY][column+dimWidth] != -1 ){
                    rightID = g_arrNestedGridRow[g_nestedWork.gridY+tempY][column+dimWidth+1];
                    tempY++;
                    newHeightR++;
                } else {
                    break;
                }
            }
        }

        var newHeight = 0;
        var idToResize = 0;
        if(Math.abs(dimHeight - newHeightL) < Math.abs(dimHeight - newHeightR) && newHeightL != 0) {
            newHeight = newHeightL;
            idToResize = leftID;
        } else if (newHeightR !=0) {
            newHeight = newHeightR;
            idToResize = rightID;
        } else {
            newHeight = dimHeight; //malo li
        }

        var output = {"newHeight": newHeight, "idToResize": idToResize};

        return output;
    }

    /**
     * resize to new Dim width
     */
    function resizeToNewWidth(tileID, newDimWidth, toReturn) {
        if(!toReturn){
            toReturn = false;
        }
        
        var colWidth = g_nestedWork.colWidth;
        var gapWidth = g_nestedWork.currentGap;
        var currentTile = g_arrNestedItems[tileID];
        var imgWidth = currentTile.imgWidth;
        var imgHeight = currentTile.imgHeight;
        var ratio = imgWidth / imgHeight;
        dimWidth = newDimWidth;
        dimHeight = Math.round(dimWidth / ratio);
        if(toReturn == true){
            var sizes = jQuery.extend(true, {}, currentTile);
            sizes.dimWidth = dimWidth;
            sizes.dimHeight = dimHeight;
            sizes.width = dimWidth * colWidth + gapWidth * (dimWidth - 1);
            sizes.height = dimHeight * colWidth + gapWidth * (dimHeight - 1);
            return sizes;
        }
        currentTile.dimWidth = dimWidth;
        currentTile.dimHeight = dimHeight;
        currentTile.width = dimWidth * colWidth + gapWidth * (dimWidth - 1);
        currentTile.height = dimHeight * colWidth + gapWidth * (dimHeight - 1);
    }

    /**
     * resize to new height without width changing
     */
    function resizeToNewHeight(tileID, newDimHeight, toReturn) {

        if(!toReturn){
            toReturn = false;
        }

        var currentTile = g_arrNestedItems[tileID];
        var dimWidth = currentTile.dimWidth;
        var colWidth = g_nestedWork.colWidth;
        var gapWidth = g_nestedWork.currentGap;

        if(toReturn == true){
            var sizes = jQuery.extend(true, {}, currentTile);

            sizes.dimHeight = newDimHeight;
            sizes.width = dimWidth * colWidth + gapWidth * (dimWidth - 1);
            sizes.height = newDimHeight * colWidth + gapWidth * (newDimHeight - 1);
            
            return sizes;
        }

        currentTile.dimHeight = newDimHeight;
        currentTile.width = dimWidth * colWidth + gapWidth * (dimWidth - 1);
        currentTile.height = newDimHeight * colWidth + gapWidth * (newDimHeight - 1);
    }

    /**
     * calc resize koef
     */
    function calcResizeRatio(objTilesAndSizes){
        var tempResizes = 0;
        var tempNum = 0;

        for(var i = 0; i<objTilesAndSizes.length; i++){
            var sizes = g_arrNestedItems[objTilesAndSizes[i].tileID];
            if((sizes.dimHeight != 0) && (sizes.height != 0)){
                resizeVal = (sizes.dimWidth/sizes.dimHeight)/(sizes.imgWidth/sizes.imgHeight);
            } else {
                return;
            }
            if(resizeVal < 1){
                resizeVal = 1/resizeVal;
            }
            tempResizes += resizeVal;
            tempNum++;
        }
        return tempResizes/tempNum;
    }

    /**
     * check for column break
     */
    function isGridImageAligned(dimWidth, column){
        var y = g_nestedWork.gridY-1;
        if(y<=0 || isGridRowExists(y) == false){
            return false;
        }
        if(g_arrNestedGridRow[y][column+dimWidth-1]!=g_arrNestedGridRow[y][column+dimWidth]) {
            return true;
        }

        return false;
    }

    /**
     * get free line length in GridRow
     */
    function getTotalFreeFromPosition(column){
        var x = column;
        var totalFree = 0;
        if(isGridRowExists(g_nestedWork.gridY) == true){
            while(isGridCellTaken(g_nestedWork.gridY, x) == false){
                totalFree ++;
                x++;
            }
        } else {
            totalFree = g_nestedWork.maxColumns;
        }
        return totalFree;
    }

    /**
     * is nestedGridRow row exists
     */
    function isGridRowExists(y){
        if(typeof g_arrNestedGridRow[y] === 'undefined'){
            return false;
        }
        return true;
    }

    
    /**
     * put image to grid row
     */
    function putImageToGridRow(id, sizes, gridX, gridY){
        
    	for (var y = 0; y < sizes.dimHeight; y++) {
            for (var x = 0; x < sizes.dimWidth; x++) {
                if (isGridRowExists(gridY+y) == 0) {
                    addGridRow(gridY+y);
                }
                
                setGridCellValue(gridY+y, gridX+x, id);
            }
        }
    }

    /**
     * add grid with Y index
     */
    function addGridRow(y){
        g_arrNestedGridRow[y] = new Object;
        for (var t = 0; t < g_nestedWork.maxColumns; t++) {
            g_arrNestedGridRow[y][t] = -1;
        }
    }

    /**
     * isGridRowCellTaken
     */
    function isGridCellTaken(y,x){
        return (g_arrNestedGridRow[y][x] != -1);
    }

    /**
     * set nestedGridRow cell value
     */
    function setGridCellValue(y,x,value){
        g_arrNestedGridRow[y][x]=value;
    }


    /**
     * draw nested images
     */
    function drawNestedImages(toShow){
    	
        if(!toShow)
            var toShow = false;
        
        doBeforeTransition();
        
        for(var i = 0; i<g_arrNestedItems.length; i++){
            drawNestedImage(i, toShow);
        }

        g_objParent.height(g_nestedWork.maxColHeight);
        
        doAfterTransition();
    }

    
    /**
     * draw nested image
     */
    function drawNestedImage(i, toShow){
    	
        var objTile = g_thumbs.getThumbByIndex(i);

        var sizes = g_arrNestedItems[i];
        var newY = sizes.top * (g_nestedWork.colWidth + g_nestedWork.currentGap);
        var newX = g_nestedWork.addX + sizes.left * (g_nestedWork.colWidth + g_nestedWork.currentGap);
        
        g_objTileDesign.resizeTile(objTile, sizes.width, sizes.height, g_objTileDesign.resizemode.VISIBLE_ELEMENTS);
        
        g_functions.placeElement(objTile, newX, newY);
                
        if(newY + sizes.height > g_nestedWork.maxColHeight){
            g_nestedWork.maxColHeight = newY + sizes.height;
        };
        
        if(toShow == true){
            objTile.fadeTo(0, 1);
        }
        
    }
	
	
	function __________COMMON_AND_EVENTS_______(){};
	
	
	/**
	 * on resize event
	 */
	function onResize(){
		
		if(g_temp.isFirstTimeRun == true)
			return(true);
		
		if(g_temp.isAllLoaded == false)
			return(false);
		
		switch(g_options.tiles_type){
			case "columns":
				placeTiles(false);
			break;
			case "justified":
				placeJustified(false);
			break;
            case "nested":
            	
            	var isMobileMode = g_gallery.isMobileMode();
            	if(isMobileMode == true){
            		placeTiles(false);
            	}
            	else
            		placeNestedImages(false);
            
            break;
		}
		
	}

	
	/**
	 * init panel events
	 */
	function initEvents(){
		
		g_objThis.on(t.events.ALL_TILES_LOADED, function(){
			
			g_temp.isAllLoaded = true;
			
		});
		
		g_objGallery.on(g_gallery.events.SIZE_CHANGE, onResize);
		
		g_objGallery.on(t.events.TILES_FIRST_PLACED,function(){
			g_temp.isFirstPlaced = false;
		});
		
		g_objTileDesign.initEvents();
				
	}

	
	/**
	 * run the gallery after init and set html
	 */
	function run(){
				
		//show tiles
		g_objWrapper.children(".ug-tile").show();

		if(g_temp.isFirstTimeRun == true){
			initEvents();
		}
		
		g_objTileDesign.run();
		
		switch(g_options.tiles_type){
			default:
			case "columns":
				runColumnsType();
			break;
			case "justified":
				runJustifiedType();
			break;
			case "nested":
				runNestedType();
			break;
		}
		
		
		g_temp.isFirstTimeRun = false;
	}
	
	
	/**
	 * destroy the events
	 */
	this.destroy = function(){
		
		g_objGallery.off(g_gallery.events.SIZE_CHANGE);
		g_objTileDesign.destroy();
		g_objGallery.off(t.events.TILES_FIRST_PLACED);
		
	}
	
		
	
	/**
	 * init function for avia controls
	 */
	this.init = function(gallery, customOptions){
		
		init(gallery, customOptions);
	}

	
	/**
	 * set html
	 */
	this.setHtml = function(objParent){
		setHtml(objParent);
	}
	
	/**
	 * get tile design object
	 */
	this.getObjTileDesign = function(){
		return(g_objTileDesign);
	}
	
	/**
	 * set html and properties
	 */	
	this.run = function(){
		run();
	}
	
	
	/**
	 * run the new items
	 */
	this.runNewItems = function(){
		
		if(!g_objParent)
			throw new Error("Can't run new items - parent not set");
		
		g_objTileDesign.setHtml(g_objParent, true);
		
		g_objTileDesign.run(true);
		
		
		switch(g_options.tiles_type){
			case "columns":
				
				runColumnsType();
				
			break;
			default:
			case "justified":
			case "nested":
				throw new Error("Tiles type: "+g_options.tiles_type+" not support load more yet");
			break;
		}
		
	}
	
}



/**
 * tiles design class
 */
function UGTileDesign(){
	
	var t = this, g_objThis = jQuery(this);	
	var g_gallery = new UniteGalleryMain(), g_objGallery;
	var g_functions = new UGFunctions(), g_objParentWrapper, g_objWrapper;
	var g_thumbs = new UGThumbsGeneral(), g_items;
	
	this.resizemode = {			//modes constants for resize tile
		FULL: "full",
		WRAPPER_ONLY: "wrapper_only",
		VISIBLE_ELEMENTS: "visible_elements"
	};
	
	this.sizeby = {				//sizeby option constants
		GLOBAL_RATIO: "global_ratio",
		TILE_RATIO: "tile_ratio",
		IMAGE_RATIO: "image_ratio",
		CUSTOM: "custom"
	};
	
	this.events = {
			TILE_CLICK: "tile_click"
	};
	
	var g_options = {
						
			tile_width: 250,						//in case of fixed size: tile width
			tile_height: 200,						//in case of fixed size: tile height
			tile_size_by:t.sizeby.IMAGE_RATIO,		//image ratio, tile ratio , global_ratio - decide by what parameter resize the tile
			tile_visible_before_image:false,		//tile visible before image load
			
			tile_enable_background:true,			//enable backgruond of the tile
			tile_background_color: "#F0F0F0",		//tile background color
			
			tile_enable_border:false,				//enable border of the tile
			tile_border_width:3,					//tile border width
			tile_border_color:"#F0F0F0",			//tile border color
			tile_border_radius:0,					//tile border radius (applied to border only, not to outline)
			
			tile_enable_outline: false,				//enable outline of the tile (works only together with the border)
			tile_outline_color: "#8B8B8B",			//tile outline color
			
			tile_enable_shadow:false,				//enable shadow of the tile
			tile_shadow_h:1,						//position of horizontal shadow
			tile_shadow_v:1,						//position of vertical shadow
			tile_shadow_blur:3,						//shadow blur
			tile_shadow_spread:2,					//shadow spread
			tile_shadow_color:"#8B8B8B",			//shadow color
			
			tile_enable_action:	true,				//enable tile action on click like lightbox
			tile_as_link: false,					//act the tile as link, no lightbox will appear
			tile_link_newpage: true,				//open the tile link in new page

			tile_enable_overlay: true,				//enable tile color overlay (on mouseover)
			tile_overlay_opacity: 0.4,				//tile overlay opacity
			tile_overlay_color: "#000000",			//tile overlay color
			
			tile_enable_icons: true,				//enable icons in mouseover mode
			tile_show_link_icon: false,				//show link icon (if the tile has a link). In case of tile_as_link this option not enabled
			tile_videoplay_icon_always_on: 'never',	//'always', 'never', 'mobile_only', 'desktop_only' always show video play icon
			tile_space_between_icons: 26,			//initial space between icons, (on small tiles it may change)
			
			tile_enable_image_effect:false,			//enable tile image effect
			tile_image_effect_type: "bw",			//bw, blur, sepia - tile effect type
			tile_image_effect_reverse: false,		//reverce the image, set only on mouseover state
			
			tile_enable_textpanel: false,			 //enable textpanel
			tile_textpanel_source: "title",			 //title,desc,desc_title,title_and_desc. source of the textpanel. desc_title - if description empty, put title
			tile_textpanel_always_on: false,		 //textpanel always visible - for inside type
			tile_textpanel_appear_type: "slide",	 //slide, fade - appear type of the textpanel on mouseover
			tile_textpanel_position:"inside_bottom", //inside_bottom, inside_top, inside_center, top, bottom the position of the textpanel
			tile_textpanel_offset:0					 //vertical offset of the textpanel
	};
	
	
	var g_defaults = {
			thumb_color_overlay_effect: true,
			thumb_overlay_reverse: true,
			thumb_image_overlay_effect: false,
			tile_textpanel_enable_description: false,
			tile_textpanel_bg_opacity: 0.6,
			tile_textpanel_padding_top:8,
			tile_textpanel_padding_bottom: 8
	};
	
	var g_temp = {
		ratioByHeight:0,
		ratioByWidth:0,
		eventSizeChange: "thumb_size_change",
		funcCustomTileHtml: null,
		funcCustomPositionElements: null,
		funcParentApproveClick: null,
		isSaparateIcons: false,
		tileInnerReduce: 0,		//how much reduce from the tile inner elements from border mostly
		isTextpanelOutside: false,	//is the textpanel is out of tile image border
		hasImageContainer:false,
		isVideoplayIconAlwaysOn:false,
		isTextPanelHidden:false
	};
	
	
	/**
	 * init the tile object
	 */
	function init(gallery, customOptions){
		
		g_gallery = gallery;
		
		g_objGallery = jQuery(gallery);		
		
		var objects = g_gallery.getObjects();
		g_objWrapper = objects.g_objWrapper;
		
		g_items = g_gallery.getArrItems();
				
		g_options = jQuery.extend(g_options, g_defaults);
		
		g_options = jQuery.extend(g_options, customOptions);
				
		modifyOptions();
				
		g_thumbs.init(gallery, g_options);	
		
		var objCustomOptions = {allow_onresize:false};
		
		var customThumbsAdd = ["overlay"];
		
		if(g_temp.funcCustomTileHtml)
			customThumbsAdd = [];
		
		g_thumbs.setCustomThumbs(setHtmlThumb, customThumbsAdd, objCustomOptions);
		
		//get thumb default options too:
		var thumbOptions = g_thumbs.getOptions();
		g_options = jQuery.extend(g_options, thumbOptions);
		
		//set ratios of fixed mode
		g_temp.ratioByWidth = g_options.tile_width / g_options.tile_height;
		g_temp.ratioByHeight = g_options.tile_height / g_options.tile_width;
		
		
		//set if tile has image container
		if(g_options.tile_size_by == t.sizeby.GLOBAL_RATIO && g_temp.isTextpanelOutside)
			g_temp.hasImageContainer = true;
		
	}
	
	
	/**
	 * set thumb and textpanel options according tile options
	 */
	function modifyOptions(){

		//set overlay related options
		if(g_options.tile_enable_overlay == true){
			
			g_options.thumb_overlay_opacity = g_options.tile_overlay_opacity;
			g_options.thumb_overlay_color = g_options.tile_overlay_color;
		
		}else if(g_options.tile_enable_icons == false){		//if nothing on overlay - turn it off
			g_options.thumb_color_overlay_effect = false;		
		}else{											//if icons enabled - make it transparent
			g_options.thumb_overlay_opacity = 0;
		}
		
		//set item as link
		if(g_options.tile_as_link){
			g_options.thumb_wrapper_as_link = true;
			g_options.thumb_link_newpage = g_options.tile_link_newpage;
		}
		
		//outline cannot appear without border
		if(g_options.tile_enable_outline == true && g_options.tile_enable_border == false)
			g_options.tile_enable_outline = false;
		
		//set inner reduce value - in case of the border
		g_temp.tileInnerReduce = 0;
		if(g_options.tile_enable_border){
			g_temp.tileInnerReduce = g_options.tile_border_width * 2;
			g_thumbs.setThumbInnerReduce(g_temp.tileInnerReduce);
		}

		//check if saparate icons
		g_temp.isSaparateIcons = !g_functions.isRgbaSupported();
		
		//set if the textpanel is enabled and outside
		if(g_options.tile_enable_textpanel == true){
			
			//optimize for touch device
			switch(g_options.tile_textpanel_position){
				case "top":
					g_options.tile_textpanel_align = "top";
				case "bottom":
					g_temp.isTextpanelOutside = true;
					g_options.tile_textpanel_always_on = true;
					g_options.tile_textpanel_offset = 0;
				break;
				case "inside_top":
					g_options.tile_textpanel_align = "top";
				break;
				case "middle":
					g_options.tile_textpanel_align = "middle";
					g_options.tile_textpanel_appear_type = "fade";
				break;
			}
			
			//if text panel oppearing with the overlay, icons should be saparated
			if(g_options.tile_textpanel_always_on == false)
				g_temp.isSaparateIcons = true;
			
		}
		
		
		//if the textpanel offset is not from the border, it's always fade.
		if(g_options.tile_textpanel_offset != 0){
			g_options.tile_textpanel_appear_type = "fade";
			g_options.tile_textpanel_margin = g_options.tile_textpanel_offset;
		}
		
		//enable description if needed
		if(g_options.tile_textpanel_source == "title_and_desc"){
			g_options.tile_textpanel_enable_description = true;
			g_options.tile_textpanel_desc_style_as_title = true;
		}
		
	}
	

	/**
	 * set options before render
	 */
	function modifyOptionsBeforeRender(){
		
		var isMobile = g_gallery.isMobileMode();
		
		//set text panel show / hide
		
		g_temp.isTextPanelHidden = false;
		if(isMobile == true && g_options.tile_textpanel_always_on == false)
			g_temp.isTextPanelHidden = true;
		
		
		//set video icon always on true / false
		
		g_temp.isVideoplayIconAlwaysOn = g_options.tile_videoplay_icon_always_on;
		
		switch(g_options.tile_videoplay_icon_always_on){
			case "always":
				g_temp.isVideoplayIconAlwaysOn = true;
			break;
			case "never":
				g_temp.isVideoplayIconAlwaysOn = false;
			break;
			case "mobile_only":
				g_temp.isVideoplayIconAlwaysOn = (isMobile == true)?true:false;
			break;
			case "desktop_only":
				g_temp.isVideoplayIconAlwaysOn = (isMobile == false)?true:false;
			break;
		}
		
		
	}

	
	/**
	 * set thumb html
	 */
	function setHtmlThumb(objThumbWrapper, objItem){
		
		objThumbWrapper.addClass("ug-tile");
		
		if(g_temp.funcCustomTileHtml){
			g_temp.funcCustomTileHtml(objThumbWrapper, objItem);
			return(false);
		}
		
		var html = "";
			
		//add image container
		if(g_temp.hasImageContainer == true){
			html += "<div class='ug-image-container ug-trans-enabled'>";
		}
		
		//add thumb image:
		var classImage = "ug-thumb-image";

		if(g_options.tile_enable_image_effect == false || g_options.tile_image_effect_reverse == true)
			classImage += " ug-trans-enabled";
		
		var imageAlt = g_functions.stripTags(objItem.title);
		imageAlt = g_functions.htmlentitles(imageAlt);
		
		html += "<img src=\""+g_functions.escapeDoubleSlash(objItem.urlThumb)+"\" alt='"+imageAlt+"' class='"+classImage+"'>";

		if(g_temp.hasImageContainer == true){
			html += "</div>";
		}	
		
		objThumbWrapper.append(html);
		
		
		if(g_options.tile_size_by == t.sizeby.GLOBAL_RATIO){
			objThumbWrapper.fadeTo(0,0);		//turn on in thumbsGeneral
		}
		
		//---- set thumb styles ---- 
		
		//set border:
		var objCss = {};
		
		if(g_options.tile_enable_background == true){
			objCss["background-color"] = g_options.tile_background_color;
		}
		
		if(g_options.tile_enable_border == true){
			objCss["border-width"] = g_options.tile_border_width+"px";
			objCss["border-style"] = "solid";
			objCss["border-color"] = g_options.tile_border_color;
			
			if(g_options.tile_border_radius)
				objCss["border-radius"] = g_options.tile_border_radius+"px";
		}
		
		//set outline:
		if(g_options.tile_enable_outline == true){
			objCss["outline"] = "1px solid " + g_options.tile_outline_color;
		}
		
		//set shadow
		if(g_options.tile_enable_shadow == true){
			var htmlShadow = g_options.tile_shadow_h+"px ";
			htmlShadow += g_options.tile_shadow_v+"px ";
			htmlShadow += g_options.tile_shadow_blur+"px ";
			htmlShadow += g_options.tile_shadow_spread+"px ";
			htmlShadow += g_options.tile_shadow_color;
			
			objCss["box-shadow"] = htmlShadow;
		}
		
		objThumbWrapper.css(objCss);
		
		
		//----- add icons
		
		var htmlAdd = "";
		
		if(g_options.tile_enable_icons){
			
			//add zoom icon
			if(g_options.tile_as_link == false && g_options.tile_enable_action == true){
				var iconPlayClass = "ug-button-play ug-icon-zoom";
				if(objItem.type != "image")
					iconPlayClass = "ug-button-play ug-icon-play";
				
				htmlAdd += "<div class='ug-tile-icon " + iconPlayClass + "' style='display:none'></div>";
			}
			
			//add link icon
			if(objItem.link && g_options.tile_show_link_icon == true || g_options.tile_as_link == true){
				
				if(g_options.tile_as_link == false){
					var linkTarget = "";
					if(g_options.tile_link_newpage == true)
						linkTarget = " target='_blank'";
					
					htmlAdd += "<a href='"+objItem.link+"'"+linkTarget+" class='ug-tile-icon ug-icon-link'></a>";					
				}else{
					htmlAdd += "<div class='ug-tile-icon ug-icon-link' style='display:none'></div>";					
				}
				
			}
		
		var toSaparateIcon = g_temp.isSaparateIcons;
		if(toSaparateIcon == false && objItem.type != "image" && g_temp.isVideoplayIconAlwaysOn == true)
			toSaparateIcon = true;
		
		if(toSaparateIcon)		//put the icons on the thumb
			var objOverlay = objThumbWrapper;
		else
			var objOverlay = objThumbWrapper.children(".ug-thumb-overlay");
		
		objOverlay.append(htmlAdd);		
		
		var objButtonZoom = objOverlay.children("." + iconPlayClass);
		
		if(objButtonZoom.length == 0)
			objButtonZoom = null;
		else
			objButtonZoom.hide();
		
		var objButtonLink = objOverlay.children(".ug-icon-link");
		
		if(objButtonLink.length == 0)
			objButtonLink = null;
		else
			objButtonLink.hide();
		
		//if only zoom icon, make the tile clickable for lightbox open
		if(!objButtonLink && g_options.tile_enable_action == true)
			objThumbWrapper.addClass("ug-tile-clickable");
		
		}  //if icons enabled
		else{		//if the icons don't enabled, set the tile clickable
			
			if(g_options.tile_enable_action == true)
				objThumbWrapper.addClass("ug-tile-clickable");
		
		}
		
		//add image overlay
		if(g_options.tile_enable_image_effect == true){
			
			var imageEffectClassAdd = "";
			if(g_options.tile_image_effect_reverse == false)
				imageEffectClassAdd = " ug-trans-enabled";
			
			var imageOverlayHtml = "<div class='ug-tile-image-overlay"+imageEffectClassAdd+"' >";
			var imageEffectClass = " ug-"+g_options.tile_image_effect_type+"-effect";
			
			imageOverlayHtml += "<img src=\""+g_functions.escapeDoubleSlash(objItem.urlThumb)+"\" alt='"+objItem.title+"' class='"+imageEffectClass + imageEffectClassAdd+"'>";
			imageOverlayHtml += "</div>";
			
			objThumbWrapper.append(imageOverlayHtml);

			//hide the image overlay if reversed
			if(g_options.tile_image_effect_reverse == true){
				objThumbWrapper.children(".ug-tile-image-overlay").fadeTo(0,0);
			}
			
		}
		
		
		//add text panel
		if(g_options.tile_enable_textpanel == true){
			
			var objTextPanel = new UGTextPanel();			 
			objTextPanel.init(g_gallery, g_options, "tile");
			
			//set transition class
			var textpanelAddClass = "";
			if(g_options.tile_textpanel_always_on == true || g_temp.isTextpanelOutside == true)
				textpanelAddClass = "ug-trans-enabled";
			
			objTextPanel.appendHTML(objThumbWrapper, textpanelAddClass);
			
			var panelTitle = objItem.title;
			var panelDesc = "";
			
			switch(g_options.tile_textpanel_source){
				case "desc":
				case "description":
					panelTitle = objItem.description;
				break;
				case "desc_title":
					if(objItem.description != "")
						panelTitle = objItem.description;
				break;
				case "title_and_desc":
					panelTitle = objItem.title;
					panelDesc = objItem.description;
				break;
			}
			
			objTextPanel.setTextPlain(panelTitle, panelDesc);
			
			if(g_options.tile_textpanel_always_on == false)
				objTextPanel.getElement().fadeTo(0,0);
			
			objThumbWrapper.data("objTextPanel", objTextPanel);

			//if textpanel always on, it has to be under the overlay
			if(g_options.tile_textpanel_always_on == true){
				var textPanelElement = getTextPanelElement(objThumbWrapper);
				textPanelElement.css("z-index",2);
			}
			
			//if text panel is outside, clone textpanel
			if(g_temp.isTextpanelOutside == true){
				
				var htmlClone = "<div class='ug-tile-cloneswrapper'></div>";
				objThumbWrapper.append(htmlClone);
				var objCloneWrapper = objThumbWrapper.children(".ug-tile-cloneswrapper");
				
				var objTextPanelClone = new UGTextPanel(); 
				objTextPanelClone.init(g_gallery, g_options, "tile");				
				objTextPanelClone.appendHTML(objCloneWrapper);
				objTextPanelClone.setTextPlain(panelTitle, panelDesc);
				objThumbWrapper.data("objTextPanelClone", objTextPanelClone);
			}
			
		}
		
		//add additional html
		if(objItem.addHtml !== null)
			objThumbWrapper.append(objItem.addHtml);
		
	}
	
	
	/**
	 * load tile image, place the image on load
	 */
	this.loadTileImage = function(objTile){
		
		var objImage = t.getTileImage(objTile);
			
		g_functions.checkImagesLoaded(objImage, null, function(objImage,isError){
			onPlaceImage(null, objTile, jQuery(objImage));
		});
		
	}
	
	function _________________GETTERS________________(){};
	
	
	
	/**
	 * get image overlay
	 */
	function getTileOverlayImage(objTile){
		var objOverlayImage = objTile.children(".ug-tile-image-overlay");
		return(objOverlayImage);
	}
	
	/**
	 * get tile color overlay
	 */
	function getTileOverlay(objTile){
		var objOverlay = objTile.children(".ug-thumb-overlay");
		return(objOverlay);		
	}
	
	
	/**
	 * get image container
	 */
	function getTileImageContainer(objTile){
		if(g_temp.hasImageContainer == false)
			return(null);
		
		var objImageContainer = objTile.children(".ug-image-container");
		
		return(objImageContainer);
	}
	
	
	/**
	 * get image effect
	 */
	function getTileImageEffect(objTile){		
		var objImageEffect = objTile.find(".ug-tile-image-overlay img");			
		return(objImageEffect);
	}
	
	
	/**
	 * get text panel
	 */
	function getTextPanel(objTile){
		var objTextPanel = objTile.data("objTextPanel");
		
		return(objTextPanel);
	}
	
	
	/**
	 * get cloned text panel
	 */
	function getTextPanelClone(objTile){
		var objTextPanelClone = objTile.data("objTextPanelClone");
		
		return(objTextPanelClone);
		
	}
	
	
	/**
	 * get text panel element from the tile
	 */
	function getTextPanelElement(objTile){
		var objTextPanel = objTile.children(".ug-textpanel");
		
		return(objTextPanel);
	}
	
	
	/**
	 * get text panel element cloned
	 */
	function getTextPanelCloneElement(objTile){
		var objTextPanel = objTile.find(".ug-tile-cloneswrapper .ug-textpanel");
		
		if(objTextPanel.length == 0)
			throw new Error("text panel cloned element not found");
		
		return(objTextPanel);
		
	}
	
	
	/**
	 * get text panel height
	 */
	function getTextPanelHeight(objTile){
		
		if(g_temp.isTextpanelOutside == true)
			var objTextPanel = getTextPanelCloneElement(objTile);
		else
			var objTextPanel = getTextPanelElement(objTile);
		
		
		if(!objTextPanel)
			return(0);
		
		var objSize = g_functions.getElementSize(objTextPanel);
		return(objSize.height);
	}
	
	
	/**
	 * get button link
	 */
	function getButtonLink(objTile){
		var objButton = objTile.find(".ug-icon-link");
		if(objButton.length == 0)
			return(null);
		
		return objButton;
	}

	
	/**
	 * get tile ratio
	 */
	function getTileRatio(objTile){
		
		//global ratio
		var ratio = g_temp.ratioByHeight;
		
		switch(g_options.tile_size_by){
			default:		//global ratio
				ratio = g_temp.ratioByHeight;
			break;
			case t.sizeby.IMAGE_RATIO:

				if(!objTile)
					throw new Error("tile should be given for tile ratio");
				
				var item = t.getItemByTile(objTile);
								
				if(typeof item.thumbRatioByHeight != "undefined"){
				
					if(item.thumbRatioByHeight == 0){
						trace(item);
						throw new Error("the item ratio not inited yet");
					}
				
					ratio = item.thumbRatioByHeight;
				}
			
			break;
			case t.sizeby.CUSTOM:
				return null;
			break;
		}
				
		return(ratio);
	}
	
	
	/**
	 * get button zoom
	 */
	function getButtonZoom(objTile){
		var objButton = objTile.find(".ug-button-play");
		
		if(objButton.length == 0)
			return(null);
		
		return objButton;
	}
	
	
	/**
	 * tells if the tile is over style
	 */
	function isOverStyle(objTile){
		
		if(objTile.hasClass("ug-thumb-over"))
			return(true);
		
		return(false);
	}
	
	
	/**
	 * check if the tile is clickable
	 */
	function isTileClickable(objTile){
		
		return objTile.hasClass("ug-tile-clickable");
	}
	
	
	/**
	 * return if the items icon always on
	 */
	function isItemIconAlwaysOn(objItem){
		
		if(g_options.tile_enable_icons == true && g_temp.isVideoplayIconAlwaysOn == true && objItem.type != "image")
			return(true);
		
		return(false);
	}

	
	function _________________SETTERS________________(){};
	
	
	/**
	 * position tile images elements
	 * width, height - tile width height
	 */
	function positionElements_images(objTile, width, height, visibleOnly){
		
		var objImageOverlay = getTileOverlayImage(objTile);
		var objThumbImage = t.getTileImage(objTile);
		var objImageEffect = getTileImageEffect(objTile);
		
		//reduce borders
		width -= g_temp.tileInnerReduce;
		height -= g_temp.tileInnerReduce;
		
		var imagePosy = null;
		
		//reduce textpanel height
		if(g_temp.isTextpanelOutside == true){

			var textHeight = getTextPanelHeight(objTile);
			height -= textHeight;

			if(g_options.tile_textpanel_position == "top"){
				imagePosy = textHeight;
			}
			
			/**
			 * if has image container
			 */
			if(g_temp.hasImageContainer == true){
				var objImageContainer = getTileImageContainer(objTile);
				g_functions.setElementSize(objImageContainer, width, height);
				
				if(imagePosy !== null)
					g_functions.placeElement(objImageContainer, 0, imagePosy);
			}
			
		}
		
		//scale image
		if(g_options.tile_enable_image_effect == false){

			g_functions.scaleImageCoverParent(objThumbImage, width, height);
			
			if(g_temp.hasImageContainer == false && imagePosy !== null)
				g_functions.placeElement(objThumbImage, 0, imagePosy);

		}else{	//width the effect
			
			//set what to resize
			var dontResize = "nothing";
			if(visibleOnly === true && g_temp.isTextpanelOutside == false){
				if(g_options.tile_image_effect_reverse == true){
					dontResize = "effect";
				}else{
					dontResize = "image";
				}
			}

			//resize image effect
			if(dontResize != "effect"){
				g_functions.setElementSize(objImageOverlay, width, height);
				
				if(imagePosy !== null)
					g_functions.placeElement(objImageOverlay, 0, imagePosy);
				
				g_functions.scaleImageCoverParent(objImageEffect, width, height);
			}
			

			//resize image
			if(dontResize != "image"){
				
				if(g_temp.hasImageContainer == true){
					g_functions.scaleImageCoverParent(objThumbImage, width, height);
				}else{
					
					//if can't clone, resize
					if(dontResize == "effect"){
						g_functions.scaleImageCoverParent(objThumbImage, width, height);
						if(imagePosy !== null)
							g_functions.placeElement(objThumbImage, 0, imagePosy);
					}
					else
						g_functions.cloneElementSizeAndPos(objImageEffect, objThumbImage, false, null, imagePosy);
					
				}
				
			}

			
			
		}

	}
	
	
	/**
	 * position text panel
	 * panelType - default or clone
	 */
	function positionElements_textpanel(objTile, panelType, tileWidth, tileHeight){
		
		var panelWidth = null;
		if(tileWidth)
			panelWidth = tileWidth - g_temp.tileInnerReduce;

		if(tileHeight)
			tileHeight -= g_temp.tileInnerReduce;
		
		if(panelType == "clone"){
			var objTextPanelClone = getTextPanelClone(objTile);
			objTextPanelClone.refresh(true, true, panelWidth);
			var objItem = t.getItemByTile(objTile);
			objItem.textPanelCloneSizeSet = true;
			
			return(false);
		}
		
		var objTextPanel = getTextPanel(objTile);
		
		if(!objTextPanel)
			return(false);
		
		var panelHeight = null;
				
		//set panel height also
		if(g_temp.isTextpanelOutside == true)
			panelHeight = getTextPanelHeight(objTile);
		
		objTextPanel.refresh(false, true, panelWidth, panelHeight);
		
		var isPosition = (g_options.tile_textpanel_always_on == true || g_options.tile_textpanel_appear_type == "fade");
		
		if(isPosition){
			
			if(g_temp.isTextpanelOutside == true && tileHeight && g_options.tile_textpanel_position == "bottom"){
			
				var posy = tileHeight - panelHeight;
				objTextPanel.positionPanel(posy);
			}else
				objTextPanel.positionPanel();
		}
		
	}
		
	
	/**
	 * position the elements
	 */
	function positionElements(objTile){
		
		var objItem = t.getItemByTile(objTile);
		var objButtonZoom = getButtonZoom(objTile);
		var objButtonLink = getButtonLink(objTile);
		var sizeTile = g_functions.getElementSize(objTile);
				
		positionElements_images(objTile, sizeTile.width, sizeTile.height);
		
		//position text panel:
		if(g_options.tile_enable_textpanel == true)
			positionElements_textpanel(objTile, "regular", sizeTile.width, sizeTile.height);
		
		
		//position overlay:
		var overlayWidth = sizeTile.width - g_temp.tileInnerReduce;
		var overlayHeight = sizeTile.height - g_temp.tileInnerReduce;
		var overlayY = 0;
		if(g_temp.isTextpanelOutside == true){
			var textHeight = getTextPanelHeight(objTile);
			overlayHeight -= textHeight;
			if(g_options.tile_textpanel_position == "top")
				overlayY = textHeight;
		}
		
		var objOverlay = getTileOverlay(objTile);
		g_functions.setElementSizeAndPosition(objOverlay, 0, overlayY, overlayWidth, overlayHeight);
		
		//set vertical gap for icons
		if(objButtonZoom || objButtonLink){

			var gapVert = 0;
			if( g_options.tile_enable_textpanel == true && g_temp.isTextPanelHidden == false && g_temp.isTextpanelOutside == false){
				var objTextPanelElement = getTextPanelElement(objTile);
				var texPanelSize = g_functions.getElementSize(objTextPanelElement);
				if(texPanelSize.height > 0)
					gapVert = Math.floor((texPanelSize.height / 2) * -1);
			}

		}
		
		if(objButtonZoom && objButtonLink){
			var sizeZoom = g_functions.getElementSize(objButtonZoom);
			var sizeLink = g_functions.getElementSize(objButtonLink);
			var spaceBetween = g_options.tile_space_between_icons;
			
			var buttonsWidth = sizeZoom.width + spaceBetween + sizeLink.width;
			var buttonsX = Math.floor((sizeTile.width - buttonsWidth) / 2);
			
			//trace("X: "+buttonsX+" "+"space: " + spaceBetween);
			
			//if space more then padding, calc even space.
			if(buttonsX < spaceBetween){
				spaceBetween = Math.floor((sizeTile.width - sizeZoom.width - sizeLink.width) / 3);
				buttonsWidth = sizeZoom.width + spaceBetween + sizeLink.width;
				buttonsX = Math.floor((sizeTile.width - buttonsWidth) / 2);
			}

			g_functions.placeElement(objButtonZoom, buttonsX, "middle", 0 ,gapVert);
			g_functions.placeElement(objButtonLink, buttonsX + sizeZoom.width + spaceBetween, "middle", 0, gapVert);
						
		}else{
			
			if(objButtonZoom)
				g_functions.placeElement(objButtonZoom, "center", "middle", 0, gapVert);
			
			if(objButtonLink)
				g_functions.placeElement(objButtonLink, "center", "middle", 0, gapVert);
				
		}
		
		if(objButtonZoom)
			objButtonZoom.show();
		
		if(objButtonLink)
			objButtonLink.show();
	}

	
	/**
	 * set tiles htmls
	 */
	this.setHtml = function(objParent, isAppend){
		g_objParentWrapper = objParent;
		
		if(isAppend !== true)
			modifyOptionsBeforeRender();
		
		g_thumbs.setHtmlThumbs(objParent, isAppend);
	}
	
	
	
	/**
	 * set the overlay effect
	 */
	function setImageOverlayEffect(objTile, isActive){
		
		var objItem = t.getItemByTile(objTile);
		var objOverlayImage = getTileOverlayImage(objTile);
		
		var animationDuration = g_options.thumb_transition_duration;
		
		if(g_options.tile_image_effect_reverse == false){
			
			var objThumbImage = t.getTileImage(objTile);
			
			if(isActive){
				objThumbImage.fadeTo(0,1);			
				objOverlayImage.stop(true).fadeTo(animationDuration, 0);
			}
			else
				objOverlayImage.stop(true).fadeTo(animationDuration, 1);
			
		}else{
			
			if(isActive){
				objOverlayImage.stop(true).fadeTo(animationDuration, 1);
			}
			else{
				objOverlayImage.stop(true).fadeTo(animationDuration, 0);
			}
		}

	}
	
	
	/**
	 * set textpanel effect
	 */
	function setTextpanelEffect(objTile, isActive){
		
		var animationDuration = g_options.thumb_transition_duration;
		
		var objTextPanel = getTextPanelElement(objTile);
		if(!objTextPanel)
			return(true);
				
		if(g_options.tile_textpanel_appear_type == "slide"){
			
			var panelSize = g_functions.getElementSize(objTextPanel);
			if(panelSize.width == 0)
				return(false);
			
			var startPos = -panelSize.height;
			var endPos = 0;
			var startClass = {}, endClass = {};
			
			var posName = "bottom";
			if(g_options.tile_textpanel_position == "inside_top")
				posName = "top";
			
			startClass[posName] = startPos+"px";
			endClass[posName] = endPos+"px";
						
			if(isActive == true){
								
				objTextPanel.fadeTo(0,1);
				
				if(objTextPanel.is(":animated") == false)
					objTextPanel.css(startClass);
				
				endClass["opacity"] = 1;
					
				objTextPanel.stop(true).animate(endClass, animationDuration);
				
			}else{
				
				objTextPanel.stop(true).animate(startClass, animationDuration);
				
			}
			
		}else{		//fade effect
			
			if(isActive == true){
				objTextPanel.stop(true).fadeTo(animationDuration, 1);
			}else{
				objTextPanel.stop(true).fadeTo(animationDuration, 0);
			}
			
		}
		
	}
	

	/**
	 * set thumb border effect
	 */
	function setIconsEffect(objTile, isActive, noAnimation){
		
		var animationDuration = g_options.thumb_transition_duration;
		if(noAnimation && noAnimation === true)
			animationDuration = 0;
		
		var g_objIconZoom = getButtonZoom(objTile);
		var g_objIconLink = getButtonLink(objTile);
		var opacity = isActive?1:0;
		
		if(g_objIconZoom)
			g_objIconZoom.stop(true).fadeTo(animationDuration, opacity);
		
		if(g_objIconLink)
			g_objIconLink.stop(true).fadeTo(animationDuration, opacity);
		
	}
	
	
	
	/**
	 * set tile over style
	 */
	function setOverStyle(data, objTile){
				
		objTile = jQuery(objTile);
				
		if(g_options.tile_enable_image_effect)
			setImageOverlayEffect(objTile, true);

		if(g_options.tile_enable_textpanel == true && g_options.tile_textpanel_always_on == false && g_temp.isTextPanelHidden == false)
			setTextpanelEffect(objTile, true);
		
		//show/hide icons - if saparate (if not, they are part of the overlay)
		//if the type is video and icon always on - the icon should stay
		if(g_temp.isSaparateIcons && g_options.tile_enable_icons == true){
			var isSet = (g_options.thumb_overlay_reverse == true);
			
			var objItem = t.getItemByTile(objTile);
			if(isItemIconAlwaysOn(objItem) == false)
				setIconsEffect(objTile, isSet, false);
			
		}
		
	}
	
	
	/**
	 * set normal style
	 */
	function setNormalStyle(data, objTile){
		
		objTile = jQuery(objTile);
		
		if(g_options.tile_enable_image_effect)
			setImageOverlayEffect(objTile, false);
		
		if(g_options.tile_enable_textpanel == true && g_options.tile_textpanel_always_on == false)
			setTextpanelEffect(objTile, false);
		
		//show/hide icons - if saparate (if not, they are part of the overlay)
		if(g_temp.isSaparateIcons == true && g_options.tile_enable_icons == true){
			
			var isSet = (g_options.thumb_overlay_reverse == true)?false:true;
			
			var objItem = t.getItemByTile(objTile);
			if(isItemIconAlwaysOn(objItem) == false)
				setIconsEffect(objTile, isSet, false);
			else{	//make icon always appear
				setIconsEffect(objTile, true, true);
			}
			
		}
		
	}
	
	
	/**
	 * set all tiles normal style
	 */
	function setAllTilesNormalStyle(objTileExcept){
		
		var objTiles = g_thumbs.getThumbs().not(objTileExcept);
		objTiles.each(function(index, objTile){
			g_thumbs.setThumbNormalStyle(jQuery(objTile));
		});
		
	}
	
	
	function _________________EVENTS________________(){};
	
	
	/**
	 * on tile size change, place elements
	 */
	function onSizeChange(data, objTile, forcePosition){

		objTile = jQuery(objTile);
		
		//position elements only if the image loaded (placed)
		if(g_options.tile_visible_before_image == true && objTile.data("image_placed") !== true && forcePosition !== true)
			return(true);

		positionElements(objTile);
		
		g_thumbs.setThumbNormalStyle(objTile);
	}
	
	
	/**
	 * on place image event after images loaded
	 */
	function onPlaceImage(data, objTile, objImage){
		
		positionElements(objTile);
		objImage.fadeTo(0,1);
		
		objTile.data("image_placed", true);
	}
	
	
	/**
	 * on tile click on mobile devices on normal state
	 * set the tile over state
	 */
	function onMobileClick(objTile){

		if(isTileClickable(objTile) == true){
			g_objThis.trigger(t.events.TILE_CLICK, objTile);
			return(true);
		}
		
		if(isOverStyle(objTile) == false){
			setAllTilesNormalStyle(objTile);			
			g_thumbs.setThumbOverStyle(objTile);
		}
		
	}
	
	
	/**
	 * on tile click event
	 */
	function onTileClick(event){
				
		var objTile = jQuery(this);
		
		var tagname = objTile.prop("tagName").toLowerCase();
		var isApproved = true;
		if(g_temp.funcParentApproveClick && g_temp.funcParentApproveClick() == false)
			isApproved = false;
				
		if(tagname == "a"){
			
			if(isApproved == false)
				event.preventDefault();
							
		}else{		//in case of div
			
			if(isOverStyle(objTile) == false){	//mobile click version
				
				if(isApproved == true)
					onMobileClick(objTile);
								
			}else{
				if(isTileClickable(objTile) == false)
					return(true);
				
				if(isApproved == true)
					g_objThis.trigger(t.events.TILE_CLICK, objTile);
			}
			
			
		}
		
	}
	
	
	/**
	 * click on zoom button (as tile click)
	 */
	function onZoomButtonClick(event){
				
		event.stopPropagation();
		
		var objTile = jQuery(this).parents(".ug-tile");
		
		var isApproved = true;
		
		if(g_temp.funcParentApproveClick && g_temp.funcParentApproveClick() == false)
			isApproved = false;
		
		if(isOverStyle(objTile) == false){
			onMobileClick(objTile);
			return(true);
		}
			
		if(isApproved == true){
			g_objThis.trigger(t.events.TILE_CLICK, objTile);
			return(false);
		}
		
	}
	
	
	/**
	 * on link icon click
	 */
	function onLinkButtonClick(event){
		var objTile = jQuery(this).parents(".ug-tile");
				
		if(g_temp.funcParentApproveClick && g_temp.funcParentApproveClick() == false)
			event.preventDefault();
		
		//allow click only from over style
		if(isOverStyle(objTile) == false && g_options.tile_as_link == false){
			event.preventDefault();
			onMobileClick(objTile);
		}
		
	}
	
	
	/**
	 * init events
	 */
	this.initEvents = function(){
				
		g_thumbs.initEvents();
		
		//connect the over and normal style of the regular thumbs
		jQuery(g_thumbs).on(g_thumbs.events.SETOVERSTYLE, setOverStyle);
		jQuery(g_thumbs).on(g_thumbs.events.SETNORMALSTYLE, setNormalStyle);
		jQuery(g_thumbs).on(g_thumbs.events.PLACEIMAGE, onPlaceImage);
		
		g_objWrapper.on(g_temp.eventSizeChange, onSizeChange);
		
		g_objParentWrapper.on("click", ".ug-tile", onTileClick);
		
		g_objParentWrapper.on("click", ".ug-tile .ug-button-play", onZoomButtonClick);
		
		g_objParentWrapper.on("click", ".ug-tile .ug-icon-link", onLinkButtonClick);
	}
	
	
	/**
	 * destroy the element events
	 */
	this.destroy = function(){
		
		g_objParentWrapper.off("click", ".ug-tile");
		g_objParentWrapper.off("click", ".ug-tile .ug-button-play");
		g_objParentWrapper.off("click", ".ug-tile .ug-icon-link");
		
		jQuery(g_thumbs).off(g_thumbs.events.SETOVERSTYLE);
		jQuery(g_thumbs).off(g_thumbs.events.SETNORMALSTYLE);
		jQuery(g_thumbs).off(g_thumbs.events.PLACEIMAGE);
		g_objWrapper.off(g_temp.eventSizeChange);
		
		if(g_options.tile_enable_textpanel == true){
			var objThumbs = g_thumbs.getThumbs();
			jQuery.each(objThumbs, function(index, thumb){				
				var textPanel = getTextPanel(jQuery(thumb));
				if(textPanel)
					textPanel.destroy();
			});
		}
		
		g_thumbs.destroy();

	}

	
	/**
	 * external init
	 */
	this.init = function(gallery, g_thumbs, customOptions){
		
		init(gallery, g_thumbs, customOptions);
	}
	
	/**
	 * set fixed mode
	 */
	this.setFixedMode = function(){
		
		g_options.tile_size_by = t.sizeby.GLOBAL_RATIO;
		g_options.tile_visible_before_image = true;
	}
	
	
	/**
	 * set parent approve click function
	 */
	this.setApproveClickFunction = function(funcApprove){
		g_temp.funcParentApproveClick = funcApprove;
	}
	
	
	
	/**
	 * resize tile. If no size given, resize to original size
	 * the resize mode taken from resize modes constants, default is full
	 */
	this.resizeTile = function(objTile, newWidth, newHeight, resizeMode){
		
			//if textpanel outside - refresh the textpanel first
			if(g_temp.isTextpanelOutside == true)
				positionElements_textpanel(objTile, "clone", newWidth);
			
			if(!newWidth){
				
				var newWidth = g_options.tile_width;
				var newHeight = g_options.tile_height;
				
			}else{		//only height is missing
				if(!newHeight){
					
					var newHeight = t.getTileHeightByWidth(newWidth, objTile);
				}
			}
						
			g_functions.setElementSize(objTile, newWidth, newHeight);
			
			switch(resizeMode){
				default:
				case t.resizemode.FULL:
					t.triggerSizeChangeEvent(objTile, true);
				break;
				case t.resizemode.WRAPPER_ONLY:
					return(true);
				break;
				case t.resizemode.VISIBLE_ELEMENTS:
					
					if(g_temp.funcCustomTileHtml){
						t.triggerSizeChangeEvent(objTile, true);
						return(true);
					}
					
					//resize images
					positionElements_images(objTile, newWidth, newHeight, true);
					
					//resize text panel, if visible
					if(g_options.tile_enable_textpanel == true && g_options.tile_textpanel_always_on == true && newWidth){
						positionElements_textpanel(objTile, "regular", newWidth, newHeight);
					}
					
				break;
			}
		
	}

	
	/**
	 * resize all tiles 
	 */
	this.resizeAllTiles = function(newWidth, resizeMode, objTiles){
		
		modifyOptionsBeforeRender();
		
		var newHeight = null;
		
		if(g_options.tile_size_by == t.sizeby.GLOBAL_RATIO)
			newHeight = t.getTileHeightByWidth(newWidth);
		
		if(!objTiles)
			var objTiles = g_thumbs.getThumbs();
		
		objTiles.each(function(index, objTile){
			t.resizeTile(jQuery(objTile), newWidth, newHeight, resizeMode);
		});
		
	}
	
	
	/**
	 * trigger size change events
	 * the force is only for fixed size mode
	 */
	this.triggerSizeChangeEvent = function(objTile, isForce){
		
		if(!objTile)
			return(false);
		
		if(!isForce)
			var isForce = false;
		
		g_objWrapper.trigger(g_temp.eventSizeChange, [objTile, isForce]);
		
	}
	
	
	/**
	 * trigger size change event to all tiles
	 * the force is only for fixed mode
	 */
	this.triggerSizeChangeEventAllTiles = function(isForce){
		
		var objThumbs = g_thumbs.getThumbs();

		objThumbs.each(function(){
			var objTile = jQuery(this);
			
			t.triggerSizeChangeEvent(objTile, isForce);
			
		});
		
	}
	
	
	
	
	
	/**
	 * disable all events
	 */
	this.disableEvents = function(){
		var objThumbs = g_thumbs.getThumbs();
		objThumbs.css("pointer-events", "none");
	}
	
	
	/**
	 * enable all events
	 */
	this.enableEvents = function(){
		var objThumbs = g_thumbs.getThumbs();
		objThumbs.css("pointer-events", "auto");
	}
	
	
	/**
	 * set new options
	 */
	this.setOptions = function(newOptions){
		g_options = jQuery.extend(g_options, newOptions);
		g_thumbs.setOptions(newOptions);
	}
	
	
	/**
	 * set new tile size, this function will not resize, and keep ratio
	 */
	this.setTileSizeOptions = function(newTileWidth){
		
		if(g_options.tile_size_by !== t.sizeby.GLOBAL_RATIO)
			throw new Error("setNewTileOptions works with global ration only");
		
		g_options.tile_width = newTileWidth;
		g_options.tile_height = Math.floor(newTileWidth * g_temp.ratioByHeight);
		
		
	}
	
	
	/**
	 * set custom tile html function
	 */
	this.setCustomFunctions = function(funcCustomHtml, funcPositionElements){
		g_temp.funcCustomTileHtml = funcCustomHtml;
		g_temp.funcCustomPositionElements = funcPositionElements;
	}
	
	
	/**
	 * run the tile design
	 */
	this.run = function(newOnly){
		
		//resize all tiles
		var getMode = g_thumbs.type.GET_THUMBS_ALL;
		if(newOnly === true)
			getMode = g_thumbs.type.GET_THUMBS_NEW;
		
		var objThumbs = g_thumbs.getThumbs(getMode);
		
		if(g_options.tile_size_by == t.sizeby.GLOBAL_RATIO){
			t.resizeAllTiles(g_options.tile_width, t.resizemode.WRAPPER_ONLY, objThumbs);
		}
		
		//hide original image if image effect active
		if(g_options.tile_enable_image_effect == true && g_options.tile_image_effect_reverse == false)
			objThumbs.children(".ug-thumb-image").fadeTo(0,0);
		
		g_thumbs.setHtmlProperties(objThumbs);
		
		if(g_options.tile_visible_before_image == true){
			
			//if textpanel outside - refresh the textpanel first			
			objThumbs.children(".ug-thumb-image").fadeTo(0,0);
			g_thumbs.loadThumbsImages();
		}
		
	}

	
	this._____________EXTERNAL_GETTERS____________=function(){};
	
	
	/**
	 * get thumbs general option
	 */
	this.getObjThumbs = function(){
		return g_thumbs;
	}
	
	/**
	 * get options
	 */
	this.getOptions = function(){
		return g_options;
	}

	/**
	 * get tile image
	 */
	this.getTileImage = function(objTile){
		var objImage = objTile.find("img.ug-thumb-image");
		return(objImage);
	}

	
	/**
	 * get item from tile
	 */
	this.getItemByTile = function(objTile){
		return g_thumbs.getItemByThumb(objTile);
	}
	
	
	/**
	 * get tile height by width
	 */
	this.getTileHeightByWidth = function(newWidth, objTile){
		
		var ratio = getTileRatio(objTile);
		
		if(ratio === null)
			return(null);
		
		var height = Math.floor( (newWidth - g_temp.tileInnerReduce) * ratio) + g_temp.tileInnerReduce;
		
		if(objTile && g_temp.isTextpanelOutside == true && g_options.tile_size_by == t.sizeby.IMAGE_RATIO)
			height += getTextPanelHeight(objTile);
		
		return(height);
	}
	
	
	/**
	 * get tile original size
	 */
	this.getTileImageSize = function(objTile){
        var objItem = t.getItemByTile(objTile);
        if(!objItem.thumbWidth || !objItem.thumbHeight)
        	throw new Error("Can't get image size - image not inited.");
        
        var objSize = {
        		width: objItem.thumbWidth,
        		height: objItem.thumbHeight
        };
        
        return(objSize);
	}
	
	
	/**
	 * get tile size
	 */
	this.getGlobalTileSize = function(){
		
		if(g_options.tile_size_by != t.sizeby.GLOBAL_RATIO)
			throw new Error("The size has to be global ratio");
		
		var objSize = {
				width: g_options.tile_width,
				height: g_options.tile_height
		};
		
		return(objSize);
	}
	
	
}

/**
 * avia control class
 * addon to strip gallery
 */
function UGAviaControl(){

	var g_parent, g_gallery, g_objects, g_objStrip, g_objStripInner, g_options;
	var g_isVertical;
	
	var g_temp = {
		touchEnabled:false,			//variable that tells if touch event was before move event
		isMouseInsideStrip: false,
		strip_finalPos:0,
		handle_timeout:"",
		isStripMoving:false,
		isControlEnabled: true
	};
	
	
	/**
	 * enable the control
	 */
	this.enable = function(){
		g_temp.isControlEnabled = true;
	}
	
	/**
	 * disable the control
	 */
	this.disable = function(){
		g_temp.isControlEnabled = false;		
	}
	
	/**
	 * init function for avia controls
	 */
	this.init = function(objParent){
		g_parent = objParent;
		
		g_objects = objParent.getObjects();
				
		g_gallery = g_objects.g_gallery;
		
		g_objStrip = g_objects.g_objStrip;
		g_objStripInner = g_objects.g_objStripInner;
		g_options = g_objects.g_options;
		g_isVertical = g_objects.isVertical;		
				
		initEvents();
	}
	
	/**
	 * get mouse position from event according the orientation
	 */
	function getMousePos(event){
		
		if(g_isVertical == false)
			return(event.pageX);
		
		return(event.pageY);
	}
	
	/**
	 * handle avia strip control event on body mouse move
	 */
	function initEvents(event){
		
		//make sure that the avia control will not work on touch devices
		jQuery("body").on("touchstart", function(event){
			
			if(g_temp.isControlEnabled == false)
				return(true);
			
			g_temp.touchEnabled = true;
			
		});
		
		//on body move
		jQuery("body").mousemove(function(event){
			
			if(g_temp.isControlEnabled == false)
				return(true);
									
			//protection for touch devices, disable the avia events
			if(g_temp.touchEnabled == true){
				jQuery("body").off("mousemove");
				return(true);
			}
			
			g_temp.isMouseInsideStrip = g_objStrip.ismouseover();
			var strip_touch_active = g_parent.isTouchMotionActive();
			
			if(g_temp.isMouseInsideStrip == true && strip_touch_active == false){
				
				var mousePos = getMousePos(event);
				
				moveStripToMousePosition(mousePos);
			}else{
				stopStripMovingLoop();
			}
			
		});
						
	}
	
	
	/**
	 * destroy the avia control events
	 */
	this.destroy = function(){
		
		jQuery("body").off("touchstart");
		jQuery("body").off("mousemove");

	}
	
	
	/**
	 * get inner y position according mouse y position on the strip
	 */
	function getInnerPosY(mouseY){

		var innerOffsetTop = g_options.strip_padding_top;
		var innerOffsetBottom = g_options.strip_padding_bottom;

		var stripHeight = g_objStrip.height();
		var innerHeight = g_objStripInner.height();		
		
		//if all thumbs visible, no need to move
		if(stripHeight > innerHeight)
			return(null);
		
		//find y position inside the strip
		var stripOffset = g_objStrip.offset();		
		var offsetY = stripOffset.top;
		var posy = mouseY - offsetY - innerOffsetTop;
		if(posy < 0)
			return(null);
		
		//set measure line parameters
		var mlineStart = g_options.thumb_height;
		var mlineEnd = stripHeight - g_options.thumb_height;
		var mLineSize = mlineEnd - mlineStart;
				
		//fix position borders on the measure line
		if(posy < mlineStart)
			posy = mlineStart;
		
		if(posy > mlineEnd)
			posy = mlineEnd;
		
		//count the ratio of the position on the measure line
		var ratio = (posy - mlineStart) / mLineSize;
		var innerPosY = (innerHeight - stripHeight) * ratio;
		innerPosY = Math.round(innerPosY) * -1 + innerOffsetTop;
		
		return(innerPosY);
	}

	
	/**
	 * get inner x position according mouse x position on the strip
	 */
	function getInnerPosX(mouseX){
		
		var innerOffsetLeft = g_options.strip_padding_left;
		var innerOffsetRight = g_options.strip_padding_right;
		
		var stripWidth = g_objStrip.width() - innerOffsetLeft - innerOffsetRight;
		var innerWidth = g_objStripInner.width();
		
		//if all thumbs visible, no need to move
		if(stripWidth > innerWidth)
			return(null);
		
		var stripOffset = g_objStrip.offset();
		var offsetX = stripOffset.left;
		var posx = mouseX - offsetX - innerOffsetLeft;
		
		//set measure line parameters
		var mlineStart = g_options.thumb_width;
		var mlineEnd = stripWidth - g_options.thumb_width;
		var mLineSize = mlineEnd - mlineStart;
		
		//fix position borders on the measure line
		if(posx < mlineStart)
			posx = mlineStart;
		
		if(posx > mlineEnd)
			posx = mlineEnd;
		
		//count the ratio of the position on the measure line
		var ratio = (posx - mlineStart) / mLineSize;
		var innerPosX = (innerWidth - stripWidth) * ratio;
		innerPosX = Math.round(innerPosX) * -1 + innerOffsetLeft;
		
		
		return(innerPosX);
	}
		
		
	/**
	 * move strip stap to final position
	 */
	function moveStripStep(){
		
		if(g_temp.is_strip_moving == false){
			return(false);
		}
		
		var innerPos = g_parent.getInnerStripPos();
				
		if(Math.floor(innerPos) == Math.floor(g_temp.strip_finalPos)){
			stopStripMovingLoop();
		}
		
		//calc step
		var diff = Math.abs(g_temp.strip_finalPos - innerPos);
		
		var dpos;
		if(diff < 1){
			dpos = diff;
		}
		else{
		
			dpos = diff / 4;
			if(dpos > 0 && dpos < 1)
				dpos = 1;
		}		
		
		if(g_temp.strip_finalPos < innerPos)
			dpos = dpos * -1;
				
		var newPos = innerPos + dpos;
		
		g_parent.positionInnerStrip(newPos);
		
	}
	
	
	/**
	 * start loop of strip moving
	 */
	function startStripMovingLoop(){
		
		if(g_temp.isStripMoving == true)
			return(false);
			
		g_temp.isStripMoving = true;
		g_temp.handle_timeout = setInterval(moveStripStep,10);
	}
	
	/**
	 * stop loop of strip moving
	 */
	function stopStripMovingLoop(){
		
		if(g_temp.isStripMoving == false)
			return(false);
			
		g_temp.isStripMoving = false;
		g_temp.handle_timeout = clearInterval(g_temp.handle_timeout);
	}

	/**
	 * get inner position according the orientation
	 * taken by the mouse position
	 */
	function getInnerPos(mousePos){
		
		if(g_isVertical == false)
			return getInnerPosX(mousePos);
		else
			return getInnerPosY(mousePos);
		
	}
	
	
	/**
	 * move the strip to mouse position on it
	 * mousex - mouse position relative to the document
	 */
	function moveStripToMousePosition(mousePos){		
		
		var innerPos = getInnerPos(mousePos);
		
		if(innerPos === null)
			return(false);
		
		g_temp.is_strip_moving = true;
		g_temp.strip_finalPos = innerPos;
				
		startStripMovingLoop();
	}
	
}

/**
 * slider class
 * addon to strip gallery
 */
function UGSlider(){
	
	var t = this, g_objThis = jQuery(t);
	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objWrapper, g_objThumbs;	
	//the video arrows is independent arrows that is not sitting on the controls
	var g_objSlider, g_objInner, g_objSlide1, g_objSlide2, g_objSlide3, g_objArrowLeft, g_objArrowRight;
	var g_objTouchSlider, g_objZoomSlider, g_objZoomPanel, g_objButtonPlay = null, g_objButtonFullscreen = null, g_objBullets = null;
	var g_objVideoPlayer = new UGVideoPlayer(), g_optionsPrefix;
	var g_functions = new UGFunctions(), g_objProgress = null, g_objTextPanel = null;
	
	
	this.events = {		
		ITEM_CHANGED: "item_changed",				//on item changed
		BEFORE_SWITCH_SLIDES: "before_switch",		//before slides switching
		BEFORE_RETURN: "before_return",				//before return from pan or from zoom
		AFTER_RETURN: "after_return",				//after return from pan or from zoom
		ZOOM_START: "slider_zoom_start",			//on zoom start 
		ZOOM_END: "slider_zoom_end",				//on zoom move 
		ZOOMING: "slider_zooming",					//on zooming
		ZOOM_CHANGE: "slider_zoom_change",			//on slide image image zoom change	
		START_DRAG: "start_drag",					//on slider drag start
		AFTER_DRAG_CHANGE: "after_drag_change",		//after finish drag chagne transition
		ACTION_START: "action_start",				//on slide action start
		ACTION_END: "action_end",					//on slide action stop
		CLICK: "slider_click",						//on click event
		TRANSITION_START:"slider_transition_start",	//before transition start event
		TRANSITION_END:"slider_transition_end",		//on transition end event
		AFTER_PUT_IMAGE: "after_put_image",			//after put slide image
		IMAGE_MOUSEENTER: "slider_image_mouseenter", //on slide image mouseonter
		IMAGE_MOUSELEAVE: "slider_image_mouseleave",	 		//on slide image mouseleave
		CURRENTSLIDE_LOAD_START: "slider_current_loadstart",	//on current slide load image start
		CURRENTSLIDE_LOAD_END: "slider_current_loadend"		//on finish load current slide image
	}
	
	var g_options = {
		  slider_scale_mode: "fill",					//fit: scale down and up the image to always fit the slider
		  												//down: scale down only, smaller images will be shown, don't enlarge images (scale up)
		  												//fill: fill the entire slider space by scaling, cropping and centering the image
		  												//fitvert: make the image always fill the vertical slider area
		  slider_scale_mode_media: "fill",				//fill, fit, down, fitvert - scale mode on media items
		  slider_scale_mode_fullscreen: "down",			//fill, fit, down, fitvert - scale mode on fullscreen.
		  		  
		  slider_item_padding_top: 0,					//padding top of the slider item
		  slider_item_padding_bottom: 0,				//padding bottom of the slider item
		  slider_item_padding_left: 0,					//padding left of the slider item
		  slider_item_padding_right: 0,					//padding right of the slider item
		  
		  slider_background_color: "",					//slider background color, set if you want to change default
		  slider_background_opacity: 1,					//slider background opacity
		  
		  slider_image_padding_top: 0,					//padding top of the image inside the item
		  slider_image_padding_bottom: 0,				//padding bottom of the image inside the item
		  slider_image_padding_left: 0,					//padding left of the image inside the item
		  slider_image_padding_right: 0,				//padding right of the image inside the item

		  slider_image_border: false,					//enable border around the image
		  slider_image_border_width: 10,				//image border width
		  slider_image_border_color: "#ffffff",			//image border color
		  slider_image_border_radius: 0,				//image border radius
		  slider_image_border_maxratio: 0.35,			//max ratio that the border can take from the image
		  slider_image_shadow: false,					//enable border shadow the image
		  
		  slider_video_constantsize: false, 			//constant video size mode for video items
		  slider_video_constantsize_scalemode: "fit", 	//fit,down: constant video size scale mode
		  slider_video_constantsize_width: 854,			//constant video size width
		  slider_video_constantsize_height: 480,		//constant video size height
		  
		  slider_video_padding_top: 0,					//padding top of the video player inside the item
		  slider_video_padding_bottom: 0,				//padding bottom of the video player inside the item
		  slider_video_padding_left: 0,					//padding left of the video player inside the item
		  slider_video_padding_right: 0,				//padding right of the video player inside the item
		  
		  slider_video_enable_closebutton: true,		//enable video close button
		  
		  slider_transition: "slide",					//fade, slide - the transition of the slide change
		  slider_transition_speed:300,				 	//transition duration of slide change
		  slider_transition_easing: "easeInOutQuad",	//transition easing function of slide change
		  
		  slider_control_swipe:true,					//true,false - enable swiping control
		  slider_control_zoom:true,						//true, false - enable zooming control
		  slider_zoom_mousewheel: true,					//enable zoom on mousewheel
		  slider_vertical_scroll_ondrag: false,			//vertical scroll on slider area drag					  
		  slider_loader_type: 1,						//shape of the loader (1-7)
		  slider_loader_color:"white",					//color of the loader: (black , white)
		  slider_enable_links: true,					//enable slide as link functionality
		  slider_links_newpage: false,					//open the slide link in new page
		  
		  slider_enable_bullets: false,					//enable the bullets onslider element
		  slider_bullets_skin: "",						//skin of the bullets, if empty inherit from gallery skin
		  slider_bullets_space_between: -1,				//set the space between bullets. If -1 then will be set default space from the skins
		  slider_bullets_align_hor:"center",			//left, center, right - bullets horizontal align
		  slider_bullets_align_vert:"bottom",			//top, middle, bottom - bullets vertical algin
		  slider_bullets_offset_hor:0,					//bullets horizontal offset 
		  slider_bullets_offset_vert:10,				//bullets vertical offset
		  
		  slider_enable_arrows: true,					//enable arrows onslider element
		  slider_arrows_skin: "",						//skin of the slider arrows, if empty inherit from gallery skin
		  
		  slider_arrow_left_align_hor:"left",	  		//left, center, right - left arrow horizonal align
		  slider_arrow_left_align_vert:"middle", 		//top, middle, bottom - left arrow vertical align
		  slider_arrow_left_offset_hor:20,		  		//left arrow horizontal offset
		  slider_arrow_left_offset_vert:0,		  		//left arrow vertical offset
		  
		  slider_arrow_right_align_hor:"right",   		//left, center, right - right arrow horizontal algin
		  slider_arrow_right_align_vert:"middle", 		//top, middle, bottom - right arrow vertical align
		  slider_arrow_right_offset_hor:20,	   			//right arrow horizontal offset 
		  slider_arrow_right_offset_vert:0,	   			//right arrow vertical offset
		  
		  slider_enable_progress_indicator: true,		 //enable progress indicator element
		  slider_progress_indicator_type: "pie",		 //pie, pie2, bar (if pie not supported, it will switch to bar automatically)
		  slider_progress_indicator_align_hor:"right",   //left, center, right - progress indicator horizontal align
		  slider_progress_indicator_align_vert:"top",    //top, middle, bottom - progress indicator vertical align
		  slider_progress_indicator_offset_hor:10,	     //progress indicator horizontal offset 
		  slider_progress_indicator_offset_vert:10,	     //progress indicator vertical offset
		  
		  slider_enable_play_button: true,				 //true,false - enable play / pause button onslider element
		  slider_play_button_skin: "",					 //skin of the slider play button, if empty inherit from gallery skin
		  slider_play_button_align_hor:"left",    		 //left, center, right - play button horizontal align
		  slider_play_button_align_vert:"top",     		 //top, middle, bottom - play button vertical align
		  slider_play_button_offset_hor:40,	       		 //play button horizontal offset 
		  slider_play_button_offset_vert:8,	   			 //play button vertical offset
		  slider_play_button_mobilehide:false,		 	 //hide the play button on mobile
		  
		  slider_enable_fullscreen_button: true,		 //true,false - enable fullscreen button onslider element
		  slider_fullscreen_button_skin: "",			 //skin of the slider fullscreen button, if empty inherit from gallery skin
		  slider_fullscreen_button_align_hor:"left",     //left, center, right	- fullscreen button horizonatal align
		  slider_fullscreen_button_align_vert:"top",     //top, middle, bottom - fullscreen button vertical align
		  slider_fullscreen_button_offset_hor:11,	     //fullscreen button horizontal offset 
		  slider_fullscreen_button_offset_vert:9,	   	 //fullscreen button vertical offset
		  slider_fullscreen_button_mobilehide:false,	 //hide the button on mobile
		  
		  slider_enable_zoom_panel: true,				 //true,false - enable the zoom buttons, works together with zoom control.
		  slider_zoompanel_skin: "",					 //skin of the slider zoom panel, if empty inherit from gallery skin		  
		  slider_zoompanel_align_hor:"left",    		 //left, center, right - zoom panel horizontal align
		  slider_zoompanel_align_vert:"top",     	 	 //top, middle, bottom - zoom panel vertical align
		  slider_zoompanel_offset_hor:12,	       		 //zoom panel horizontal offset 
		  slider_zoompanel_offset_vert:92,	   			 //zoom panel vertical offset
		  slider_zoompanel_mobilehide:false,		     //hide the zoom panel on mobile
		  
		  slider_controls_always_on: false,				//true,false - controls are always on, false - show only on mouseover
		  slider_controls_appear_ontap: true,			//true,false - appear controls on tap event on touch devices
		  slider_controls_appear_duration: 300,			//the duration of appearing controls
		  
		  slider_enable_text_panel: true,				//true,false - enable the text panel
		  slider_textpanel_always_on: true,				//true,false - text panel are always on, false - show only on mouseover
		  
		  slider_videoplay_button_type: "square"		//square, round - the videoplay button type, square or round	
	};
	
	
	//default options for bar progress incicator
	var g_defaultsProgressBar = {
		  slider_progress_indicator_align_hor:"left",    	//left, center, right
		  slider_progress_indicator_align_vert:"bottom",    //top, middle, bottom
		  slider_progress_indicator_offset_hor:0,	       	//horizontal offset 
		  slider_progress_indicator_offset_vert:0	   		//vertical offset
	};
	
	var g_temp = {
		isRunOnce: false,
		isTextPanelSaparateHover: false,					//if the panel need to be appeared without the controls object on mouseover
		numPrev:1,
		numCurrent:2,
		numNext: 3,
		isControlsVisible: true,
		currentControlsMode: "image"
	};
	
	function __________GENERAL___________(){};
	
	
	/**
	 * init the slider
	 */
	function initSlider(objGallery, objOptions, optionsPrefix){
		g_gallery = objGallery;
				
		//change options by prefix
		if(optionsPrefix){
			g_optionsPrefix = optionsPrefix;
			objOptions = g_functions.convertCustomPrefixOptions(objOptions, g_optionsPrefix, "slider");
		}
		
		g_objGallery = jQuery(objGallery);
		
		var objects = g_gallery.getObjects();		
		g_objWrapper = objects.g_objWrapper;
		g_objThumbs = objects.g_objThumbs;
		
		//set progress indicator bar defaults if type bar
		if(objOptions.hasOwnProperty("slider_progress_indicator_type"))
			g_options.slider_progress_indicator_type = objOptions.slider_progress_indicator_type;
		
		if(g_options.slider_progress_indicator_type == "bar"){
			g_options = jQuery.extend(g_options, g_defaultsProgressBar);
		}
				
		if(objOptions)
			t.setOptions(objOptions);
		
		processOptions();
		
		//init bullets:
		if(g_options.slider_enable_bullets == true){
			g_objBullets = new UGBullets();
			var bulletsOptions = {
					bullets_skin: g_options.slider_bullets_skin,
					bullets_space_between: g_options.slider_bullets_space_between
			}
			g_objBullets.init(g_gallery, bulletsOptions);
		}
		
		//init text panel
		if(g_options.slider_enable_text_panel){
			g_objTextPanel = new UGTextPanel();
			g_objTextPanel.init(g_gallery, g_options, "slider");
		}
		
		if(g_options.slider_enable_zoom_panel){
			g_objZoomPanel = new UGZoomButtonsPanel();
			g_objZoomPanel.init(t, g_options);
		}
		
		var galleryID = g_gallery.getGalleryID();
		
		//init video player
		g_objVideoPlayer.init(g_options, false, galleryID);		
	}
	
	
	/**
	 * run the slider functionality
	 */
	function runSlider(){
		
		if(g_temp.isRunOnce == true)
			return(false);
		
		g_temp.isRunOnce = true;
		
		//set background color
	   if(g_options.slider_background_color){	   		
		   var bgColor = g_options.slider_background_color;
		   
		   if(g_options.slider_background_opacity != 1)
			   bgColor = g_functions.convertHexToRGB(bgColor, g_options.slider_background_opacity);
		   
		   g_objSlider.css("background-color", bgColor);
	   
	   }else if(g_options.slider_background_opacity != 1){	//set opacity with default color
		
		   bgColor = g_functions.convertHexToRGB("#000000", g_options.slider_background_opacity);
		   g_objSlider.css("background-color", bgColor);
	  
	   }
	   
		//init touch slider control
		if(g_options.slider_control_swipe == true){
			g_objTouchSlider = new UGTouchSliderControl();
			g_objTouchSlider.init(t, g_options);
		}

		//init zoom slider control
		if(g_options.slider_control_zoom == true){
			g_objZoomSlider = new UGZoomSliderControl();
			g_objZoomSlider.init(t, g_options);
		}
		
		//run the text panel
		if(g_objTextPanel)
			g_objTextPanel.run();
		
		initEvents();		
	}
	
	
	/**
	 * process the options
	 */
	function processOptions(){
		var galleryOptions = g_gallery.getOptions();
		
		//set skins:
		var globalSkin = galleryOptions.gallery_skin;
		
		if(g_options.slider_bullets_skin == "")
			g_options.slider_bullets_skin = globalSkin;
		
		if(g_options.slider_arrows_skin == "")
			g_options.slider_arrows_skin = globalSkin;
		
		if(g_options.slider_zoompanel_skin == "")
			g_options.slider_zoompanel_skin = globalSkin;
		
		if(g_options.slider_play_button_skin == "")
			g_options.slider_play_button_skin = globalSkin;
		
		if(g_options.slider_fullscreen_button_skin == "")
			g_options.slider_fullscreen_button_skin = globalSkin;
		
		g_options.video_enable_closebutton = g_options.slider_video_enable_closebutton;
		
		//set mousewheel option depends on the gallery option
		if(galleryOptions.gallery_mousewheel_role != "zoom")
			g_options.slider_zoom_mousewheel = false;
	
	}
	
	
	/**
	 * 
	 * get html slide
	 */
	function getHtmlSlide(loaderClass, numSlide){
		
		var classVideoplay = "ug-type-square";
		if(g_options.slider_videoplay_button_type == "round")
			classVideoplay = "ug-type-round";
		
		var html = "";
		html += "<div class='ug-slide-wrapper ug-slide"+numSlide+"'>";
		html += "<div class='ug-item-wrapper'></div>";
		html += "<div class='ug-slider-preloader "+loaderClass+"'></div>";
		html += "<div class='ug-button-videoplay "+classVideoplay+"' style='display:none'></div>";
		html += "</div>";
		
		return(html);
	}
	
	
	/**
	 * set the slider html
	 */
	function setHtmlSlider(objParent){
		
		if(objParent)
			g_objWrapper = objParent;
		
		//get if the slide has controls
		var loaderClass = getLoaderClass();
		var galleryOptions = g_gallery.getOptions();
		
		var html = "<div class='ug-slider-wrapper'>";
		
		html += "<div class='ug-slider-inner'>";
		html += getHtmlSlide(loaderClass,1);
		html += getHtmlSlide(loaderClass,2);
		html += getHtmlSlide(loaderClass,3);
				
		html += "</div>";	//end inner
		
		//----------------
				
		//add arrows
		if(g_options.slider_enable_arrows == true){
			html += "<div class='ug-slider-control ug-arrow-left ug-skin-"+g_options.slider_arrows_skin+"'></div>";
			html += "<div class='ug-slider-control ug-arrow-right ug-skin-"+g_options.slider_arrows_skin+"'></div>";
		}
		
		//add play button
		if(g_options.slider_enable_play_button == true){
			html += "<div class='ug-slider-control ug-button-play ug-skin-"+g_options.slider_play_button_skin+"'></div>";
		}
		
		//add fullscreen button
		if(g_options.slider_enable_fullscreen_button == true){
			html += "<div class='ug-slider-control ug-button-fullscreen ug-skin-"+g_options.slider_fullscreen_button_skin+"'></div>";
		}
		
		
		html +=	"</div>";	//end slider
		
		
		g_objWrapper.append(html);
		
		//----------------
		
		//set objects
		g_objSlider = g_objWrapper.children(".ug-slider-wrapper");
		g_objInner = g_objSlider.children(".ug-slider-inner");
		
		
		g_objSlide1 = g_objInner.children(".ug-slide1");
		g_objSlide2 = g_objInner.children(".ug-slide2");
		g_objSlide3 = g_objInner.children(".ug-slide3");
		
		//set slides data
		g_objSlide1.data("slidenum",1);
		g_objSlide2.data("slidenum",2);
		g_objSlide3.data("slidenum",3);
				
		//add bullets
		if(g_objBullets)
			g_objBullets.appendHTML(g_objSlider);
		
		//----------------
		
		//get arrows object
		if(g_options.slider_enable_arrows == true){
			g_objArrowLeft = g_objSlider.children(".ug-arrow-left");
			g_objArrowRight = g_objSlider.children(".ug-arrow-right");
		}
				
		//get play button
		if(g_options.slider_enable_play_button == true){
			g_objButtonPlay = g_objSlider.children(".ug-button-play");
		}
		
		//get fullscreen button
		if(g_options.slider_enable_fullscreen_button == true){
			g_objButtonFullscreen = g_objSlider.children(".ug-button-fullscreen");
		}
		
		
		//----------------
		
		//add progress indicator
		if(g_options.slider_enable_progress_indicator == true){
			
			g_objProgress = g_functions.initProgressIndicator(g_options.slider_progress_indicator_type, g_options, g_objSlider);
			
			var finalType = g_objProgress.getType();
			
			//change options in case of type change
			if(finalType == "bar" && g_options.slider_progress_indicator_type == "pie"){
				g_options.slider_progress_indicator_type = "bar";
				g_options = jQuery.extend(g_options, g_defaultsProgressBar);
			}	
			
			g_gallery.setProgressIndicator(g_objProgress);
		}
		
		//----------------
		
		//add text panel (hidden)
		if(g_options.slider_enable_text_panel == true){
			
				g_objTextPanel.appendHTML(g_objSlider);
								
				//hide panel saparatelly from the controls object
				if(g_options.slider_textpanel_always_on == false){
					
					//hide the panel
					var panelElement = g_objTextPanel.getElement();
					panelElement.hide().data("isHidden", true);
	
					g_temp.isTextPanelSaparateHover = true;
					
				}
			
		}
			
		//----------------
		
		//add zoom buttons panel:
		if(g_options.slider_enable_zoom_panel == true){
			g_objZoomPanel.appendHTML(g_objSlider);
		}
	
		
		//add video player
		g_objVideoPlayer.setHtml(g_objInner);
	}
	
	
	/**
	 * position elements that related to slide
	 */
	function positionSlideElements(objSlide){
		
		//position preloader
		var objPreloader = getSlidePreloader(objSlide);
		g_functions.placeElementInParentCenter(objPreloader);
		
		//position video play button
		var objVideoPlayButton = getSlideVideoPlayButton(objSlide);
		g_functions.placeElementInParentCenter(objVideoPlayButton);		
	}
	
	
	/**
	 * position elements
	 */
	function positionElements(){
		
		//place bullets
		if(g_objBullets){
			objBullets = g_objBullets.getElement();
			
			//strange bug fix (bullets width: 20) by double placing
			g_functions.placeElement(objBullets, g_options.slider_bullets_align_hor, g_options.slider_bullets_align_vert, g_options.slider_bullets_offset_hor, g_options.slider_bullets_offset_vert);
			g_functions.placeElement(objBullets, g_options.slider_bullets_align_hor, g_options.slider_bullets_align_vert, g_options.slider_bullets_offset_hor, g_options.slider_bullets_offset_vert);
			
		}
		
		//place arrows
		if(g_options.slider_enable_arrows == true){
			g_functions.placeElement(g_objArrowLeft, g_options.slider_arrow_left_align_hor, g_options.slider_arrow_left_align_vert, g_options.slider_arrow_left_offset_hor, g_options.slider_arrow_left_offset_vert);
			g_functions.placeElement(g_objArrowRight, g_options.slider_arrow_right_align_hor, g_options.slider_arrow_left_align_vert, g_options.slider_arrow_right_offset_hor, g_options.slider_arrow_right_offset_vert);
		}
		
		//hide controls
		if(g_options.slider_controls_always_on == false)
			hideControls(true);
		
		//place progress indicator
		if(g_objProgress){
			
			var objProgressElement = g_objProgress.getElement();
			
			if(g_options.slider_progress_indicator_type == "bar"){
				var sliderWidth = g_objSlider.width();				
				g_objProgress.setSize(sliderWidth);
				g_functions.placeElement(objProgressElement, "left", g_options.slider_progress_indicator_align_vert, 0, g_options.slider_progress_indicator_offset_vert);				
				
			}else{
				g_functions.placeElement(objProgressElement, g_options.slider_progress_indicator_align_hor, g_options.slider_progress_indicator_align_vert, g_options.slider_progress_indicator_offset_hor, g_options.slider_progress_indicator_offset_vert);				
				
			}			
		}
				
		//position text panel
		if(g_objTextPanel)
			g_objTextPanel.positionPanel();
		
		//position controls elements
		placeControlsElements();
		
		//place slide elements
		positionSlideElements(g_objSlide1);
		positionSlideElements(g_objSlide2);
		positionSlideElements(g_objSlide3);
		
		checkMobileModify();
		
	}
	
	
	/**
	 * place elements that located on "controls" div
	 */
	function placeControlsElements(){
		
		if(g_objButtonPlay)			
			g_functions.placeElement(g_objButtonPlay, g_options.slider_play_button_align_hor, g_options.slider_play_button_align_vert, g_options.slider_play_button_offset_hor, g_options.slider_play_button_offset_vert);			
		
		//position fullscreen button
		if(g_objButtonFullscreen)			
			g_functions.placeElement(g_objButtonFullscreen, g_options.slider_fullscreen_button_align_hor, g_options.slider_fullscreen_button_align_vert, g_options.slider_fullscreen_button_offset_hor, g_options.slider_fullscreen_button_offset_vert);
		
		//position zoom panel
		if(g_objZoomPanel){
			var zoomPanelElement = g_objZoomPanel.getElement();
			g_functions.placeElement(zoomPanelElement, g_options.slider_zoompanel_align_hor, g_options.slider_zoompanel_align_vert, g_options.slider_zoompanel_offset_hor, g_options.slider_zoompanel_offset_vert);
		}
	}
	
	
		
	/**
	 * position slides by their order
	 */
	function positionSlides(){
		
		var slides = t.getSlidesReference();
		var posX = 0, posY = 0, innerWidth;
		var posXPrev=0, posXCurrent = 0, posXNext, nextHasItem, prevHasItem;
				
		nextHasItem = t.isSlideHasItem(slides.objNextSlide);
		prevHasItem = t.isSlideHasItem(slides.objPrevSlide);
		
		if(prevHasItem){
			posXCurrent = slides.objPrevSlide.outerWidth();
			slides.objPrevSlide.css("z-index",1);
		}else
			slides.objPrevSlide.hide();			
		
		posXNext = posXCurrent + slides.objCurrentSlide.outerWidth();
		
		innerWidth = posXNext;
		if(nextHasItem){
			innerWidth = posXNext + slides.objNextSlide.outerWidth();
			slides.objPrevSlide.css("z-index",2);		
		}else
			slides.objNextSlide.hide();
		
		slides.objCurrentSlide.css("z-index",3);
		
		//set inner size and position
		g_functions.placeElement(slides.objCurrentSlide, posXCurrent, posY);		
		g_objInner.css({"left":-posXCurrent+"px", width:innerWidth+"px"});

		//position prev
		if(prevHasItem){
			g_functions.placeElement(slides.objPrevSlide, posXPrev, posY);
			g_functions.showElement(slides.objPrevSlide);
		}
		
		if(nextHasItem){
			g_functions.showElement(slides.objNextSlide);
			g_functions.placeElement(slides.objNextSlide, posXNext, posY);
		}
		
	}
	
	
	
	/**
	 * resize the slide image inside item
	 */
	function resizeSlideItem(objSlide){
		var index = objSlide.data("index");
		if(index === undefined || index == null)
			return(false);
		
		var objItem = g_gallery.getItem(index);
		
		if(!objItem)
			return(false);
		
		setItemToSlide(objSlide, objItem);
	}
	
	
	/**
	 * show the preloader
	 * show the index, so only the current index load will hide.
	 */	
	function showPreloader(objPreloader){
		
		objPreloader.stop(true).show(100);
	
	}
	
	/**
	 * hide the preloader
	 */
	function hidePreloader(objPreloader){
		
		objPreloader.stop(true).hide(100);
	}
	
	/**
	 * get proper image border width
	 */
	function getImageBorderWidth(objImage, imageData){
		
		var borderWidth = g_options.slider_image_border_width;
		
		if(borderWidth <= 10)
			return(borderWidth);

		//set image size
		var imageSize = g_functions.getElementSize(objImage);
		var imageWidth = imageSize.width;
		var imageHeight = imageSize.height;
		
		if(imageData){
			if(imageData.hasOwnProperty("imageWidth"))
				imageWidth = imageData.imageWidth;
			
			if(imageData.hasOwnProperty("imageHeight"))
				imageHeight = imageData.imageHeight;
			
		}
		
		if(imageWidth <= 0)
			return(borderWidth);
		
		//take the less size
		var totalSize = (imageWidth < imageHeight)?imageWidth:imageHeight;
		var borderSize = borderWidth * 2;
		
		var borderRatio = borderSize / totalSize;
		
		if(borderRatio < g_options.slider_image_border_maxratio)
			return(borderWidth);
		
		//change border width		
		var borderWidth = (totalSize * g_options.slider_image_border_maxratio)/2; 
		
		borderWidth = Math.round(borderWidth);
		
		return(borderWidth);
		
	}
	
	
	/**
	 * set slider image css design according the settings
	 */
	function setImageDesign(objImage, slideType, imageData){
		
		var css = {};
		if(g_options.slider_image_border == true){
			css["border-style"] = "solid";
			
			var borderWidth = getImageBorderWidth(objImage, imageData);
			
			css["border-width"] = borderWidth+"px";
			css["border-color"] = g_options.slider_image_border_color;
			css["border-radius"] = g_options.slider_image_border_radius;
		}
		
		if(slideType != "image" && g_options.slider_video_constantsize == true)
			css["background-color"] = "#000000";
		
		if(g_options.slider_image_shadow == true){
			css["box-shadow"] = "3px 3px 10px 0px #353535";
		}
		
		objImage.css(css);
	}
	
	
	/**
	 * scale image constant size (for video items)
	 */
	function scaleImageConstantSize(objImage, objItem){
		
		var constantWidth = g_options.slider_video_constantsize_width;
		var constantHeight = g_options.slider_video_constantsize_height;
		var scaleMode = g_options.slider_video_constantsize_scalemode;
		
		var objSize = g_functions.scaleImageExactSizeInParent(objImage, objItem.imageWidth, objItem.imageHeight, constantWidth, constantHeight, scaleMode);
		
		
		return(objSize);
	}

	
	/**
	 * 
	 * set item to slide
	 */
	function setImageToSlide(objSlide, objItem, isForce){
		
		var objItemWrapper = objSlide.children(".ug-item-wrapper");
		
		var objPreloader = getSlidePreloader(objSlide);
		
		if(typeof objItem.urlImage == "undefined" || objItem.urlImage == "")
			throw new Error("The slide don't have big image defined ( data-image='imageurl' ). Please check gallery items.", "showbig");
		
		var urlImage = objItem.urlImage;
		
		var currentImage = objSlide.data("urlImage");
				
		objSlide.data("urlImage",urlImage);
		
		var scaleMode = t.getScaleMode(objSlide);
		
		var slideType = t.getSlideType(objSlide);
		
		objPadding = t.getObjImagePadding();
		
		
		if(currentImage == urlImage && isForce !== true){
			
			var objImage = objItemWrapper.children("img");
						
			if(objItem.imageWidth == 0 || objItem.imageHeight == 0){
				g_gallery.checkFillImageSize(objImage, objItem);
			}
			
			var objImageData = {};
			
			if(slideType != "image" && g_options.slider_video_constantsize == true){
				objImageData = scaleImageConstantSize(objImage, objItem);
			}
			else{
				objImageData = g_functions.scaleImageFitParent(objImage, objItem.imageWidth, objItem.imageHeight, scaleMode, objPadding);
			}
			
			setImageDesign(objImage, slideType, objImageData);
			g_objThis.trigger(t.events.AFTER_PUT_IMAGE, objSlide);
			
		}
		else{		//place the image inside parent first time
			
			objImage = g_functions.placeImageInsideParent(urlImage, objItemWrapper, objItem.imageWidth, objItem.imageHeight, scaleMode, objPadding);
			
			//set image loaded on load:
			if(objItem.isBigImageLoaded == true){
				objImage.fadeTo(0,1);
				hidePreloader(objPreloader);
				
				if(slideType != "image" && g_options.slider_video_constantsize == true)
					var objImageData = scaleImageConstantSize(objImage, objItem);
				else
					var objImageData = g_functions.getImageInsideParentData(objItemWrapper, objItem.imageWidth, objItem.imageHeight, scaleMode, objPadding);
				
				//set missing css width
				objImage.css("width",objImageData.imageWidth+"px");
						
				setImageDesign(objImage, slideType, objImageData);
				
				g_objThis.trigger(t.events.AFTER_PUT_IMAGE, objSlide);
			}
			else{		//if the image not loaded, load the image and show it after.
				objImage.fadeTo(0,0);
				showPreloader(objPreloader);
				objSlide.data("isLoading", true);
				
				if(t.isSlideCurrent(objSlide))
					g_objThis.trigger(t.events.CURRENTSLIDE_LOAD_START);
				
				objImage.data("itemIndex", objItem.index);
				objImage.on("load",function(){
					
					//place the image normally with coordinates
					var objImage = jQuery(this);
					var itemIndex = objImage.data("itemIndex");
					
					objImage.fadeTo(0,1);
					
					//get and hide preloader
					var objSlide = objImage.parent().parent();
					var slideType = t.getSlideType(objSlide);
					var objPreloader = getSlidePreloader(objSlide);
					var objPadding = t.getObjImagePadding();
					var scaleMode = t.getScaleMode(objSlide);
					
					hidePreloader(objPreloader);
					objSlide.data("isLoading", false);
					
					if(t.isSlideCurrent(objSlide))
						g_objThis.trigger(t.events.CURRENTSLIDE_LOAD_END);
					
					g_gallery.onItemBigImageLoaded(null, objImage);
					
					var objItem = g_gallery.getItem(itemIndex);
					
					var objImageData = {};
					
					if(slideType != "image" && g_options.slider_video_constantsize == true)
						scaleImageConstantSize(objImage, objItem);
					else{
						objImageData = g_functions.scaleImageFitParent(objImage, objItem.imageWidth, objItem.imageHeight, scaleMode, objPadding);
					}
					
					objImage.fadeTo(0,1);
					
					setImageDesign(objImage, slideType, objImageData);
					
					g_objThis.trigger(t.events.AFTER_PUT_IMAGE, objSlide);
				});
			}
			
		}
		
		
	}
	
		
	
	/**
	 * set slider image by url
	 * if item not set, get current slide item
	 */
	function setItemToSlide(objSlide, objItem){
		
		try{

			var objItemWrapper = objSlide.children(".ug-item-wrapper");
					
			//if the item is empty, remove the image from slide
			if(objItem == null){
				objItemWrapper.html("");
				objSlide.removeData("index");
				objSlide.removeData("type");
				objSlide.removeData("urlImage");
				return(false);
			}
			
			var currentIndex = objSlide.data("index");
			
			objSlide.data("index",objItem.index);
			objSlide.data("type", objItem.type);
			
			//set link class
			if(g_options.slider_enable_links == true && objItem.type == "image"){
				
				if(objItem.link)
					objSlide.addClass("ug-slide-clickable");
				else
					objSlide.removeClass("ug-slide-clickable");
			}
			
			setImageToSlide(objSlide, objItem);
			
			//show type related elements
			var objVideoPlayButton = getSlideVideoPlayButton(objSlide);
			switch(objItem.type){
				case "image":
					objVideoPlayButton.hide();
				break;
				default:		//video
					objVideoPlayButton.show();					
				break;
			}
			
		}catch(error){
			
			if(typeof error.fileName != "undefined" && error.fileName == "showbig")
				g_gallery.showErrorMessageReplaceGallery(error.message);
			
			objItemWrapper.html("");
			throw new Error(error);
			return(true);
		}
		
	}	
	
	
	
	/**
	 * hide the panel
	 */
	function hideTextPanel(){
		
		if(!g_objTextPanel)
			return(false);
		
		if(isTextPanelHidden() == true)
			return(false);
		
		var panelElement = g_objTextPanel.getElement();
	
		var animationTime = 0;
		if(g_temp.isTextPanelSaparateHover == true || g_options.slider_textpanel_always_on == true){
			animationTime = g_options.slider_controls_appear_duration;
		}
		
		panelElement.stop().fadeTo(animationTime, 0);
		
		panelElement.data("isHidden", true);
	}
	
	
	/**
	 * show the text panel
	 */
	function showTextPanel(){
		
		if(!g_objTextPanel)
			return(false);
		
		if(isTextPanelHidden() == false)
			return(false);
		
		var panelElement = g_objTextPanel.getElement();
		
		var animationTime = 0;
		
		if(g_temp.isTextPanelSaparateHover == true || g_options.slider_textpanel_always_on == true){
			
			panelElement.show();
			g_objTextPanel.positionElements();
			
			animationTime = g_options.slider_controls_appear_duration;
		}
		
		panelElement.stop().show().fadeTo(animationTime,1);
		
		panelElement.data("isHidden", false);
				
	}
	
	
	/**
	 * check if the text panel is hidden or not
	 */
	function isTextPanelHidden(){

		var panelElement = g_objTextPanel.getElement();

		var isHidden = panelElement.data("isHidden");
		if(isHidden === false)
			return(false);
		
		return(true);		
	}	
	
	
	/**
	 * validate that the slide is certain type, if not, throw error
	 */
	function validateSlideType(type, objSlide){
		if(objSlide == undefined)
			var objSlide = t.getCurrentSlide();
		
		var slideType = t.getSlideType(objSlide);
				
		if(slideType != type){
			throw new Error("Wrong slide type: "+ slideType +", should be: "+type);
			return(false);
		}
		
		return(true);
	}
	
	function __________VIDEO_PLAYER_______(){};

	
	
	/**
	 * set video player position
	 */
	function setVideoPlayerPosition(){
		
		var objCurrentSlide = t.getCurrentSlide();
		var objImage = t.getSlideImage(objCurrentSlide);
		
		var slideSize = g_functions.getElementSize(objCurrentSlide);
		var left = slideSize.left;
		var top = slideSize.top;
				
		//set by image position
		if(g_options.slider_video_constantsize == true){
			
			var imageSize = g_functions.getElementSize(objImage);
			left += imageSize.left;
			top += imageSize.top;
			
		}else{	//set video padding
			
			left += g_options.slider_video_padding_left;
			top += g_options.slider_video_padding_top;
		
		}
		
		g_objVideoPlayer.setPosition(left, top);
	}
	
	
	/**
	 * set video player constant size
	 */
	function setVideoPlayerConstantSize(){
		
		var videoWidth = g_options.slider_video_constantsize_width;
		var videoHeight = g_options.slider_video_constantsize_height;
		
		g_objVideoPlayer.setSize(videoWidth, videoHeight);
		
		//set video design
		var videoElement = g_objVideoPlayer.getObject();
		
		setImageDesign(videoElement, "video");
	}
	
	
	function __________TRANSITION_______(){};

	
	
	/**
	 * do the transition between the current and the next
	 */
	function doTransition(direction, objItem, forceTransition){
		
		g_objThis.trigger(t.events.TRANSITION_START);
		
		var transition = g_options.slider_transition;
		if(forceTransition)
			transition = forceTransition;

		//stop current slide action
		t.stopSlideAction(null, true);
		
		switch(transition){
			default:
			case "fade":
				transitionFade(objItem);
			break;
			case "slide":				
				transitionSlide(direction, objItem);
			break;
			case "lightbox_open":		//fade transition without animation
				transitionFade(objItem, false, true);
			break;
		}
		
	}

	
	/**
	 * switch slide numbers after transition (by direction)
	 * 
	 */
	this.switchSlideNums = function(direction){
		
		//trigger item changed effect
		g_objThis.trigger(t.events.BEFORE_SWITCH_SLIDES);
		
		switch(direction){
			case "left":
				var currentNum = g_temp.numCurrent;
				g_temp.numCurrent = g_temp.numNext;
				g_temp.numNext = g_temp.numPrev;
				g_temp.numPrev = currentNum;
			break;
			case "right":
				var currentNum = g_temp.numCurrent;
				g_temp.numCurrent = g_temp.numPrev;
				g_temp.numPrev = g_temp.numNext;
				g_temp.numNext = currentNum;				
			break;
			default:
				throw new Error("wrong direction: "+ direction);
			break;
		}
		
		//trace(g_temp.numCurrent);
		
		//trigger item changed effect
		g_objThis.trigger(t.events.ITEM_CHANGED);
	}
	
	
	/**
	 * do slide transition
	 */
	function transitionSlide(direction, objItem){
		
		var animating = t.isAnimating();

		if(animating == true){
			g_temp.itemWaiting = objItem;
			return(true);
		}
		
		//always clear next item on transition start
		// next item can be only in the middle of the transition.
		if(g_temp.itemWaiting != null)
			g_temp.itemWaiting = null;
		
		var slides = t.getSlidesReference();
		
		
		switch(direction){
			case "right":	//change to prev item
				setItemToSlide(slides.objPrevSlide, objItem);
				positionSlides();
				
				var posPrev = g_functions.getElementSize(slides.objPrevSlide);
				var destX = -posPrev.left;
				
				t.switchSlideNums("right");
				
			break;	
			case "left":		//change to next item
				setItemToSlide(slides.objNextSlide, objItem);
				positionSlides();
				
				var posNext = g_functions.getElementSize(slides.objNextSlide);
				var destX = -posNext.left;
				
				t.switchSlideNums("left");
				
			break;
			default:
				throw new Error("wrong direction: "+direction);
			break;
		}
				
		var transSpeed = g_options.slider_transition_speed;
		var transEasing = g_options.slider_transition_easing;

		
		var animateParams = {
				duration: transSpeed,
				easing: transEasing,
				queue: false,
				always:function(){
						
						t.stopSlideAction();
						g_objVideoPlayer.hide();
						
						//transit next item if waiting
						if(g_temp.itemWaiting != null){
							var direction = getSlideDirection(g_temp.itemWaiting);
							transitionSlide(direction, g_temp.itemWaiting);
						}else{
							//if no item waiting, please neighbour items in places
							t.placeNabourItems();
							g_objThis.trigger(t.events.TRANSITION_END);
						}
					
				}
		};
		
		
		g_objInner.animate({left:destX+"px"}, animateParams);
			
	}
	
	
	/**
	 * 
	 * animate opacity in and out
	 */
	function animateOpacity(objItem, opacity, completeFunction){
		
		if(completeFunction)
			objItem.fadeTo(g_options.slider_transition_speed, opacity, completeFunction);
		else
			objItem.fadeTo(g_options.slider_transition_speed, opacity);
	}
	
	
	/**
	 * do fade transition
	 */
	function transitionFade(objItem, noAnimation, noHidePlayer){
		
		if(!noAnimation)
			var noAnimation = false;
		
		var slides = t.getSlidesReference();
		 
		setItemToSlide(slides.objNextSlide, objItem);
		
		var objCurrentPos = g_functions.getElementSize(slides.objCurrentSlide);
				
		g_functions.placeElement(slides.objNextSlide,objCurrentPos.left,objCurrentPos.top);
		
		//switch slide nums
		var currentNum = g_temp.numCurrent;
		g_temp.numCurrent = g_temp.numNext;
		g_temp.numNext = currentNum;
		
		g_objThis.trigger(t.events.ITEM_CHANGED);
		
		slides.objNextSlide.stop(true);		
		slides.objCurrentSlide.stop(true);
		
		if(noAnimation == true){
			
			slides.objCurrentSlide.fadeTo(0, 0);
			slides.objNextSlide.fadeTo(0, 1);	
			t.placeNabourItems();
			g_objThis.trigger(t.events.TRANSITION_END);
			
			if(noHidePlayer !== true)
				g_objVideoPlayer.hide();
		
		}else{
			slides.objNextSlide.fadeTo(0,0);	
			
			animateOpacity(slides.objCurrentSlide,0,function(){
				t.placeNabourItems();
				g_objThis.trigger(t.events.TRANSITION_END);
				if(noHidePlayer !== true)
					g_objVideoPlayer.hide();
			});
			
			if(g_objVideoPlayer.isVisible() == true){
				var videoElement = g_objVideoPlayer.getObject();
				animateOpacity(videoElement, 0);
			}
			
			//animate to next show next
			animateOpacity(slides.objNextSlide,1);			
		}
		
	}
	
	
	
	
	function __________CONTROLS_OBJECT_______(){};
	
	/**
	 * modify the slider for mobile
	 */
	function modifyForMobile(){
		
		if(g_options.slider_fullscreen_button_mobilehide == true && g_objButtonFullscreen)
			g_objButtonFullscreen.hide();
		
		if(g_options.slider_play_button_mobilehide == true && g_objButtonPlay)
			g_objButtonPlay.hide();
		
		if(g_options.slider_zoompanel_mobilehide == true && g_objZoomPanel)
			g_objZoomPanel.getElement().hide();
		
	}
	
	
	/**
	 * modify for no mobile
	 */
	function modifyForDesctop(){
		
		if(g_options.slider_fullscreen_button_mobilehide == true && g_objButtonFullscreen)
			g_objButtonFullscreen.show();

		if(g_options.slider_play_button_mobilehide == true && g_objButtonPlay)
			g_objButtonPlay.show();
		
		if(g_options.slider_zoompanel_mobilehide == true && g_objZoomPanel)
			g_objZoomPanel.getElement().show();
		
	}
	
	
	/**
	 * check and modify for mobile or desctop
	 */
	function checkMobileModify(){
		
		var isMobile = g_gallery.isMobileMode();
		
		if(isMobile)
			modifyForMobile();
		else
			modifyForDesctop();
				
	}
	
	
	/**
	 * get a jquery set of the controls objects
	 */
	function getControlsObjects(){
		
		var objControl = g_objSlider.children(".ug-slider-control");
		
		return(objControl);
	}
	
	
	/**
	 * hide the controls
	 */
	function hideControls(noAnimation){
				
		if(g_functions.isTimePassed("sliderControlsToggle") == false)
			return(false);
		
		if(g_temp.isControlsVisible == false)
			return(false);
				
		if(!noAnimation)
			var noAnimation = false;
		
		var objControls = getControlsObjects();
		
		if(noAnimation === true)
			objControls.stop().fadeTo(0,0).hide();
		else{
			objControls.stop().fadeTo(g_options.slider_controls_appear_duration, 0, function(){objControls.hide()});
		}
		
		g_temp.isControlsVisible = false;
	}
	
	
	/**
	 * show controls only if they meaned to be shown
	 * @param noAnimation
	 */
	function checkAndShowControls(noAnimation){
		
		if(g_options.slider_controls_always_on == true)
			showControls(noAnimation);		
	}
	
	
	/**
	 * hide the controls
	 */
	function showControls(noAnimation){
				
		//validate for short time pass
		if(g_functions.isTimePassed("sliderControlsToggle") == false)
			return(false);
		
		if(g_temp.isControlsVisible == true)
			return(true);
		
		
		if(!noAnimation)
			var noAnimation = false;
		
		var objControls = getControlsObjects();
				
		if(noAnimation === true)
			objControls.stop().show();
		else{
		
			objControls.stop().show().fadeTo(0,0);
			objControls.fadeTo(g_options.slider_controls_appear_duration, 1);
			
		}
		
		g_temp.isControlsVisible = true;
		
	}
	
	
	
	/**
	 * toggle the controls (show, hide)
	 */
	function toggleControls(){
								
		if(g_temp.isControlsVisible == false)
			showControls();
		else
			hideControls();
	}
	
	
	/**
	 * set controls mode
	 * modes: image, video
	 */
	function setControlsMode(mode){
				
		if(mode == g_temp.currentControlsMode)
			return(false);
		
		switch(mode){
			case "image":
				if(g_objZoomPanel)
					g_objZoomPanel.getElement().show();			
			break;
			case "video":
				if(g_objZoomPanel)
					g_objZoomPanel.getElement().hide();	
			break;
			default:
				throw new Error("wrong controld mode: " + mode);
			break;
		}
		
		g_temp.currentControlsMode = mode;
			
	}
	
	
	
	function __________EVENTS___________(){};

	/**
	 * on item change event
	 */
	function onItemChange(data, arg_objItem, role){
		
		//trace("slider on change");
		
		var objItem = g_gallery.getSelectedItem();
				
		t.setItem(objItem, false, role);
		
		var itemIndex = objItem.index;
		
		//set active bullet
		if(g_objBullets)
			g_objBullets.setActive(itemIndex);
		
		//handle text panel
		if(g_objTextPanel){			
			if(g_temp.isTextPanelSaparateHover == false)
				showTextPanel();
		}
				
		if(objItem.type == "image"){
			setControlsMode("image");
			//placeControlsElements();
		}
		else{
			setControlsMode("video");
		}
				
	}
	
	
	/**
	 * on bullet click - change the item to selected
	 */
	function onBulletClick(event, bulletIndex){
		g_gallery.selectItem(bulletIndex);		
	}
	
	
	/**
	 * on touch end
	 * toggle controls
	 */
	function onClick(event){
		
		//double tap action
		if(g_objTouchSlider && g_objTouchSlider.isTapEventOccured(event) == false)
			return(true);
		
		g_objThis.trigger(t.events.CLICK, event);
			
		
	}

	
	/**
	 * on actual click event
	 */
	function onActualClick(){

		//check link
		var currentSlide = t.getCurrentSlide();
		var isClickable = currentSlide.hasClass("ug-slide-clickable");
		var objItem = t.getCurrentItem();
		
		if(isClickable){
			
			//redirect to link
			if(g_options.slider_links_newpage == false){
				location.href = objItem.link;
			}else{
				window.open(objItem.link, '_blank');			
			}
			
			return(true);
		}
		
		//check toggle controls
		if(g_options.slider_controls_always_on == false && 
		   g_options.slider_controls_appear_ontap == true && t.isCurrentSlideType("image") == true){
			
			toggleControls();
			
			//show text panel if hidden
			if(g_objTextPanel && g_options.slider_textpanel_always_on == true && t.isCurrentSlideType("image") && t.isCurrentSlideImageFit())
				showTextPanel();
		}
		
		
	}
	
	
	/**
	 * on zoom start event
	 */
	function onZoomChange(event){
		
		if(g_objTextPanel && t.isCurrentSlideType("image") && t.isCurrentSlideImageFit() == false)
			hideTextPanel();
	}
	
	
	/**
	 * on mouse enter
	 */
	function onMouseEnter(){
		
		showControls();
	
	}
	
	
	/**
	 * on mouse leave
	 */
	function onMouseLeave(){

		hideControls();
		
	}
	
	
	/**
	 * on slide video play button click
	 */
	function objVideoPlayClick(objButton){
		var objSlide = objButton.parent();
		t.startSlideAction(objSlide);
	}

	/**
	 * on video player show event
	 */
	function onVideoPlayerShow(){
		
		if(g_gallery.isPlayMode()){
			g_gallery.pausePlaying();
		}
		
		g_objThis.trigger(t.events.ACTION_START);
	}
	
	
	/**
	 * on video player hide event
	 */
	function onVideoPlayerHide(){
		
		if(g_gallery.isPlayMode()){
			g_gallery.continuePlaying();
		}
		
		g_objThis.trigger(t.events.ACTION_END);		
	}
	
	
	/**
	 * on item image update, update the image inside the slider if relevant
	 */
	function onItemImageUpdate(event, index, urlImage){
				
		if(g_objSlide1.data("index") == index){
			objItem = g_gallery.getItem(index);
			setImageToSlide(g_objSlide1, objItem, true);	//force
		}
		
		if(g_objSlide2.data("index") == index){
			objItem = g_gallery.getItem(index);
			setImageToSlide(g_objSlide2, objItem, true);
		}
		
		if(g_objSlide3.data("index") == index){
			objItem = g_gallery.getItem(index);
			setImageToSlide(g_objSlide3, objItem, true);
		}
		
	}
	
	
	/**
	 * after image loaded. position video play button
	 */
	function onSlideImageLoaded(data, objSlide){
		
		objSlide = jQuery(objSlide);
		var objImage = t.getSlideImage(objSlide);
		var objButtonVideoPlay = getSlideVideoPlayButton(objSlide);
		var objSize = g_functions.getElementSize(objImage);
		
		g_functions.placeElement(objButtonVideoPlay, "center", "middle", objSize.left, objSize.top, objImage);
	}
	
	
	/**
	 * init event of current slide
	 */
	function initSlideEvents(objSlide){
		
		//set video player events
		var objVideoPlayButton = getSlideVideoPlayButton(objSlide);
		g_functions.addClassOnHover(objVideoPlayButton);
		
		g_functions.setButtonOnClick(objVideoPlayButton, objVideoPlayClick);
		
	}
	
	
	/**
	 * init events
	 */
	function initEvents(){
		
		//on item image update, update the image inside the slider if relevant
		g_objGallery.on(g_gallery.events.ITEM_IMAGE_UPDATED, onItemImageUpdate);
		
		
		//on item change, change the item in the slider.
		g_objGallery.on(g_gallery.events.ITEM_CHANGE, onItemChange);
		
		if(g_objBullets)
			jQuery(g_objBullets).on(g_objBullets.events.BULLET_CLICK,onBulletClick);
		
		//arrows events
		if(g_options.slider_enable_arrows == true){
			
			g_functions.addClassOnHover(g_objArrowRight, "ug-arrow-hover");
			g_functions.addClassOnHover(g_objArrowLeft, "ug-arrow-hover");
			
			g_gallery.setNextButton(g_objArrowRight);
			g_gallery.setPrevButton(g_objArrowLeft);
		}
		
		
		//show / hide controls
		if(g_options.slider_controls_always_on == false){
			
			//assign hover evens only if no touch device
			g_objSlider.hover(onMouseEnter, onMouseLeave);
			
		}
		
		//touch events appear on tap event
		g_objSlider.on("touchend click", onClick);
		
		//actual click event
		g_objThis.on(t.events.CLICK, onActualClick);
		
		//show / hide text panel, if it's saparate from controls
		if(g_objTextPanel && g_temp.isTextPanelSaparateHover == true){
			g_objSlider.hover(showTextPanel, hideTextPanel);
		}
		
		//init play / pause button
		if(g_objButtonPlay){
			g_functions.addClassOnHover(g_objButtonPlay, "ug-button-hover");
			g_gallery.setPlayButton(g_objButtonPlay);
		}
		
		//init fullscreen button
		if(g_objButtonFullscreen){
			g_functions.addClassOnHover(g_objButtonFullscreen, "ug-button-hover");
			g_gallery.setFullScreenToggleButton(g_objButtonFullscreen);
		}
		
		//on zoom start / end events
		if(g_objZoomSlider){
			g_objThis.on(t.events.ZOOM_CHANGE, onZoomChange);
		}
		
		if(g_objZoomPanel)
			g_objZoomPanel.initEvents();
				
		//init video player related events
		g_objVideoPlayer.initEvents();
		
		//video API events
		jQuery(g_objVideoPlayer).on(g_objVideoPlayer.events.SHOW, onVideoPlayerShow);		
		jQuery(g_objVideoPlayer).on(g_objVideoPlayer.events.HIDE, onVideoPlayerHide);
		
		//add slide events
		initSlideEvents(g_objSlide1);
		initSlideEvents(g_objSlide2);
		initSlideEvents(g_objSlide3);
		
		//on image loaded
		g_objThis.on(t.events.AFTER_PUT_IMAGE, onSlideImageLoaded);
		
		//image mouseenter / mouseleave event
		
		//set mouseover events on the images
		g_objSlider.on("mouseenter",".ug-item-wrapper img",function(event){
			g_objThis.trigger(t.events.IMAGE_MOUSEENTER);
		});
		
		g_objSlider.on("mouseleave",".ug-item-wrapper img",function(event){
			var isMouseOver = t.isMouseInsideSlideImage(event);
			
			if(isMouseOver == false)
				g_objThis.trigger(t.events.IMAGE_MOUSELEAVE);
		});
		
	}
	
	
	/**
	 * destroy slider events
	 */
	this.destroy = function(){
		
		g_objThis.off(t.events.AFTER_PUT_IMAGE);
				
		g_objGallery.off(g_gallery.events.ITEM_IMAGE_UPDATED);
		g_objGallery.off(g_gallery.events.ITEM_CHANGE);
		
		if(g_objBullets)
			jQuery(g_objBullets).on(g_objBullets.events.BULLET_CLICK);
		
		g_objSlider.off("mouseenter");
		g_objSlider.off("mouseleave");
		
		g_objSlider.off("touchend");
		g_objSlider.off("click");
		g_objThis.off(t.events.CLICK);
		
		if(g_objZoomSlider)
			g_objThis.off(t.events.ZOOM_CHANGE);
		
		g_objThis.off(t.events.BEFORE_SWITCH_SLIDES);
		jQuery(g_objVideoPlayer).off(g_objVideoPlayer.events.SHOW);		
		jQuery(g_objVideoPlayer).off(g_objVideoPlayer.events.HIDE);
		
		g_objVideoPlayer.destroy();
		
		g_objSlider.off("mouseenter",".ug-item-wrapper img");
		g_objSlider.off("mouseleave",".ug-item-wrapper img");
	}
	
	
	function __________GETTERS___________(){};
	
	/**
	 * get loader class by loader type
	 */
	function getLoaderClass(){
		var loaderClass;
		switch(g_options.slider_loader_type){
			default:
			case 1: loaderClass = "ug-loader1";break;
			case 2: loaderClass = "ug-loader2";break;
			case 3: loaderClass = "ug-loader3";break;
			case 4: loaderClass = "ug-loader4";break;
			case 5: loaderClass = "ug-loader5";break;
			case 6: loaderClass = "ug-loader6";break;
			case 7: loaderClass = "ug-loader7";break;
			case 8: loaderClass = "ug-loader8";break;
			case 9: loaderClass = "ug-loader9";break;
		}
				
		if(g_options.slider_loader_color == "black")
			loaderClass += " ug-loader-black";
		
		return(loaderClass);
	}
	
	
	
	/**
	 * 
	 * get slide by number
	 */
	function getSlideByNum(num){
				
		switch(num){
			case 1:
				return(g_objSlide1);
			break;
			case 2:
				return(g_objSlide2);
			break;
			case 3:
				return(g_objSlide3);
			break;
			default:
				throw new Error("wrong num: " + num);
			break;
		}
	}
	
	
	/**
	 * 
	 * get slide direction of current item
	 */
	function getSlideDirection(objItem){
		
		var slides = t.getSlidesReference();
		
		//validate if the item is not selected already
		var currentIndex = slides.objCurrentSlide.data("index");
		var nextIndex = objItem.index;
		
		var direction = "left";
		if(currentIndex > nextIndex)
			direction = "right";
				
		return(direction);
	}
	
	
	/**
	 * get slide preloader
	 */
	function getSlidePreloader(objSlide){
		
		if(!objSlide)
			var objSlide = t.getCurrentSlide();
		
		var objPreloader = objSlide.children(".ug-slider-preloader");
		return(objPreloader);
	}
	
	/**
	 * get slide videoplay button
	 */
	function getSlideVideoPlayButton(objSlide){
		var objButton = objSlide.children(".ug-button-videoplay");
		return(objButton);
	}
	
	
	
	/**
	 * get slide item
	 */
	function getSlideItem(objSlide){
		if(!objSlide)
			var objSlide = t.getCurrentSlide();
			
		var index = objSlide.data("index");
		if(index == undefined)
			return(null);
		
		var objItem = g_gallery.getItem(index);
		return(objItem);
	}
	
	
	/**
	 * get slide number
	 */
	function getNumSlide(objSlide){
		var numSlide = objSlide.data("slidenum");
		return(numSlide);
	}
	
	
	
	this.________EXTERNAL_GENERAL___________ = function(){};
	
	
	/**
	 * init function for avia controls
	 * options: width / height
	 */
	this.init = function(objGallery, objOptions, optionsPrefix){
				
		initSlider(objGallery, objOptions, optionsPrefix);
	}

	/**
	 * get slide image
	 */
	this.getSlideImage = function(objSlide){
		
		if(!objSlide)
			var objSlide = t.getCurrentSlide();
		
		var objImage = objSlide.find(".ug-item-wrapper img");
		return(objImage);
	}
	
	
	/**
	 * set slider html
	 */
	this.setHtml = function(objParent){
		
		setHtmlSlider(objParent);
	}
	
	
	/**
	 * run the slider
	 */
	this.run = function(){
		
		runSlider();
	}
	
	
	/**
	 * check if the inner object in place, for panning znd zooming posibility check
	 */
	this.isInnerInPlace = function(){
		
		var slides = t.getSlidesReference();
		
		var posCurrent = g_functions.getElementSize(slides.objCurrentSlide);
		var inPlaceX = -posCurrent.left;
		var objInnerSize = g_functions.getElementSize(g_objInner);
		
		if(inPlaceX == objInnerSize.left)
			return(true);
		else
			return(false);
	}
	
	/**
	 * is animating
	 */
	this.isAnimating = function(){
		
		var isAnimated = g_objInner.is(":animated");
		
		return(isAnimated);
	}
	
	/**
	 * check if the slide is current
	 */
	this.isSlideCurrent = function(objSlide){
		var numSlide = objSlide.data("slidenum");
		if(g_temp.numCurrent == numSlide)
			return(true);
		
		return(false);
	}
	
	
	/**
	 * 
	 * tells if the slide has item
	 */
	this.isSlideHasItem = function(objSlide){
		var index = objSlide.data("index");
		if(index === undefined || index === null)
			return(false);
		
		return(true);
	}
	
	
	/**
	 * get image padding object for scaling the image
	 */
	this.getObjImagePadding = function(){
		
		var objPadding = {
				padding_top: g_options.slider_image_padding_top,
				padding_bottom: g_options.slider_image_padding_bottom,
				padding_left: g_options.slider_image_padding_left,
				padding_right: g_options.slider_image_padding_right
		};
		
		return(objPadding);
	}
			
	
	/**
	 * get items reference by their order
	 */
	this.getSlidesReference = function(){
		
		var obj = {
				objPrevSlide: getSlideByNum(g_temp.numPrev),
				objNextSlide: getSlideByNum(g_temp.numNext),
				objCurrentSlide: getSlideByNum(g_temp.numCurrent)
		};
		
		return(obj);
	}
	
	
	/**
	 * get current slide
	 */
	this.getCurrentSlide = function(){
		
		var slides = t.getSlidesReference();
		
		return(slides.objCurrentSlide);
	}
	
	
	/**
	 * get index of current item
	 */
	this.getCurrentItemIndex = function(){
		
		var slides = t.getSlidesReference();
		
		var currentIndex = slides.objCurrentSlide.data("index");
		if(currentIndex === null || currentIndex === undefined)
			currentIndex = -1;
		
		return(currentIndex);
	}
	
	
	/**
	 * get current slide item
	 */
	this.getCurrentItem = function(){
		var currentIndex = t.getCurrentItemIndex();
		if(currentIndex == -1)
			return(null);
		
		var objItem = g_gallery.getItem(currentIndex);
		
		return(objItem);
	}
		
	
	/**
	 * get type of some slide
	 */
	this.getSlideType = function(objSlide){
		
		if(objSlide == undefined)
			objSlide = t.getCurrentSlide();
			
		var type = objSlide.data("type");
		return(type);		
	}

	
	/**
	 * is mouse inside slide image
	 * get mouse position from event
	 */
	this.isMouseInsideSlideImage = function(event){
		
		var objImage = t.getSlideImage();
		
		var point = g_functions.getMousePosition(event);
		if(point.pageX === undefined)
			point = g_objTouchSlider.getLastMousePos();
		
		var pointImg = g_functions.getMouseElementPoint(point, objImage);
		var objSize = g_functions.getElementSize(objImage);
		isMouseInside = g_functions.isPointInsideElement(pointImg, objSize);
		
		return(isMouseInside);
	}
	
	
	/**
	 * check if current slide type is certain type
	 */
	this.isCurrentSlideType = function(type){
		var currentSlideType = t.getSlideType();
		if(currentSlideType == type)
			return(true);
		
		return(false);
	}
	
	
	/**
	 * check if current slide is loading image
	 */
	this.isCurrentSlideLoadingImage = function(){
		var currentSlide = t.getCurrentSlide();
		var isLoading = currentSlide.data("isLoading");
		if(isLoading === true)
			return(true);
		
		return(false);
	}
	
	
	/**
	 * change the slider to some item content
	 */
	this.setItem = function(objItem, forseTransition, role){
		
		var slides = t.getSlidesReference();
		
		//validate if the item is not selected already
		var currentIndex = slides.objCurrentSlide.data("index");
		var nextIndex = objItem.index;
		
		if(nextIndex == currentIndex){
			return(true);
		}
		
		var isFirstSlide = (currentIndex == undefined);
		
		if(isFirstSlide){			
			setItemToSlide(slides.objCurrentSlide, objItem);
			t.placeNabourItems();
			
		}else{
			
			var direction = "left";		//move foreward
			
			var numItems = g_gallery.getNumItems();
			
			if(role == "next")
				direction = "left";
			else if(role == "prev" || currentIndex > nextIndex)
				direction = "right";
			else if(currentIndex > nextIndex)
					direction = "right";
						
			doTransition(direction, objItem, forseTransition);
		}
					
	}
	
	
	/**
	 * when the transition complete, put the next / prev items at their place
	 */
	this.placeNabourItems = function(){
				
		var slides = t.getSlidesReference();
		var currentIndex = slides.objCurrentSlide.data("index");
				
		var itemPrev = g_gallery.getPrevItem(currentIndex);
		var itemNext = g_gallery.getNextItem(currentIndex);
		
		//trace(itemPrev);
		//trace(itemNext);
		
		//trace("place " + currentIndex, "next: "+);
		
		setItemToSlide(slides.objNextSlide, itemNext);
		setItemToSlide(slides.objPrevSlide, itemPrev);
		
		positionSlides();
	}
	
	
	
	this.________EXTERNAL_API___________ = function(){};
	
	
	/**
	 * stop some slide action if active
	 */
	this.stopSlideAction = function(objSlide, isPause){
		
		if(!objSlide)
			objSlide = t.getCurrentSlide();
		
		if(isPause === true)
			g_objVideoPlayer.pause();
		else
			g_objVideoPlayer.hide();
		
	//	trace("stop action");
		
	}
	
	
	
	/**
	 * start some slide action if exists
	 */
	this.startSlideAction = function(objSlide){
		
	//	trace("start action");
		
		if(!objSlide)
			objSlide = t.getCurrentSlide();
		
		var objItem = getSlideItem(objSlide);
		
		if(objItem.type == "image")
			return(true)
		
		if(g_options.slider_video_constantsize == true)
			setVideoPlayerConstantSize();
		
		setVideoPlayerPosition();
		
		g_objVideoPlayer.show();
		
		switch(objItem.type){
			case "youtube":
				g_objVideoPlayer.playYoutube(objItem.videoid);
			break;
			case "vimeo":
				g_objVideoPlayer.playVimeo(objItem.videoid);
			break;
			case "html5video":
				g_objVideoPlayer.playHtml5Video(objItem.videoogv, objItem.videowebm, objItem.videomp4, objItem.urlImage);
			break;
			case "soundcloud":
				g_objVideoPlayer.playSoundCloud(objItem.trackid);
			break;			
			case "wistia":
				g_objVideoPlayer.playWistia(objItem.videoid);
			break;			
		}
		
	}
	
	
	/**
	 * get the scale mode according the state (normal, fullscreen).
	 */
	this.getScaleMode = function(objSlide){
		
		if(!objSlide)
			var objSlide = t.getCurrentSlide();
		
		var slideType = t.getSlideType(objSlide);
				
		//return media scale mode
		if(slideType != "image")
			return(g_options.slider_scale_mode_media);
		
		if(g_options.slider_scale_mode == g_options.slider_scale_mode_fullscreen)
			return(g_options.slider_scale_mode);
		
		if(g_gallery.isFullScreen() == true)
			return(g_options.slider_scale_mode_fullscreen);
		else
			return(g_options.slider_scale_mode);
		
	}
	
	
	/**
	 * get slider objects
	 */
	this.getObjects = function(){
		
		var obj = {
				g_objSlider: g_objSlider,
				g_objInner: g_objInner,
				g_options: g_options,
				g_objZoomSlider: g_objZoomSlider
		};
				
		return(obj);
	}
	
	
	/**
	 * get zoom object
	 */
	this.getObjZoom = function(){
		
		return(g_objZoomSlider);
	}
	
	
	
	/**
	 * get slider options
	 */
	this.getOptions = function(){
		
		return(g_options);
	}
	
	
	/**
	 * get slider element
	 */
	this.getElement = function(){
		
		return(g_objSlider);
	}
	
	/**
	 * get video object
	 */
	this.getVideoObject = function(){
		return(g_objVideoPlayer);
	}
	
	
	/**
	 * return true if current slider image fit the slider
	 * @returns
	 */
	this.isCurrentSlideImageFit = function(){
		var objSlide = t.getCurrentSlide();

		var slideType = t.getSlideType(objSlide);
		
		validateSlideType("image", objSlide);
		
		var objImage = t.getSlideImage(objSlide);
		
		//if image don't yet added to dom, return false
		if(objImage.length == 0)
			return(false);
		
		var isFit = g_functions.isImageFitParent(objImage);
		
		return(isFit);
	}
	
	
	/**
	 * check if current image in place
	 */
	this.isCurrentImageInPlace = function(){
		
		var objImage = t.getSlideImage();
		if(objImage.length == 0)
			return(false);

		var scaleMode = t.getScaleMode();
		var objPadding = t.getObjImagePadding();
		var objItem = getSlideItem();
		
		var objParent = objImage.parent();
		
		var objFitSize = g_functions.getImageInsideParentData(objParent, objItem.imageWidth, objItem.imageHeight, scaleMode, objPadding);
		var objSize = g_functions.getElementSize(objImage);

		var output = false;
		
		if(objFitSize.imageWidth == objSize.width)
			output = true;
				
		return(output);
	}
	
	
	/**
	 * if slide is bussy in some action
	 */
	this.isSlideActionActive = function(){
		
		return g_objVideoPlayer.isVisible();
	}
	
	/**
	 * return if swipe action active
	 */
	this.isSwiping = function(){
		if(!g_objTouchSlider)
			return(false);
		
		var isActive = g_objTouchSlider.isTouchActive();
		
		return(isActive);
	}
	
	
	/**
	 * if slider preloading image (if preloader visible)
	 */
	this.isPreloading = function(){
		
		var objPreloader = getSlidePreloader();
		if(objPreloader.is(":visible"))
			return(true);
		
		return(false);
	}
	
	/**
	 * set the options
	 */
	this.setOptions = function(objOptions){

		//change options by prefix
		if(g_optionsPrefix)
			objOptions = g_functions.convertCustomPrefixOptions(objOptions, g_optionsPrefix, "slider");
		
		g_options = jQuery.extend(g_options, objOptions);
		
	}
	
	
	/**
	 * set the slider size
	 * works well on resize too.
	 */
	this.setSize = function(width, height){
		
		 if(width < 0 || height < 0)
			 return(true);
		
		 var objCssSlider = {};
		 objCssSlider["width"] = width + "px";
		 objCssSlider["height"] = height + "px";
		 g_objSlider.css(objCssSlider);
		 		 
		 //set inner:
		 var objCssInner = {};
		 objCssInner["height"] = height + "px";
		 objCssInner["top"] = "0px";
		 objCssInner["left"] = "0px";
		 g_objInner.css(objCssInner);
		 
		//set slide wrapper
		 var objCssSlide = {};
		 objCssSlide["height"] = height + "px";
		 objCssSlide["width"] = width + "px";
		 
		 g_objSlide1.css(objCssSlide);
		 g_objSlide2.css(objCssSlide);
		 g_objSlide3.css(objCssSlide);
		 
		 var itemWidth = width - g_options.slider_item_padding_left - g_options.slider_item_padding_right;
		 var itemHeight = height - g_options.slider_item_padding_top - g_options.slider_item_padding_bottom;
		 	
		 //set item wrapper
		 var objCssItemWrapper = {};
		 objCssItemWrapper["width"] = itemWidth + "px";
		 objCssItemWrapper["height"] = itemHeight + "px";
		 objCssItemWrapper["top"] = g_options.slider_item_padding_top + "px";
		 objCssItemWrapper["left"] = g_options.slider_item_padding_left + "px";
		 
		 g_objSlider.find(".ug-item-wrapper").css(objCssItemWrapper);		 
		 
		 
		 //set text panel size
		 if(g_objTextPanel){
			 g_objTextPanel.setSizeByParent();
		 }
		 
		 positionElements();
		 
		 //set image to slides
		 resizeSlideItem(g_objSlide1);
		 resizeSlideItem(g_objSlide2);
		 resizeSlideItem(g_objSlide3);
		 
		 positionSlides();
		 		 
		 //set video player size
		 var currentSlideType = t.getSlideType();
		
		 if(currentSlideType != "image" && g_options.slider_video_constantsize == true){
			 
			 setVideoPlayerConstantSize();
		 }else{	
			 var videoWidth = width - g_options.slider_video_padding_left - g_options.slider_video_padding_right;
			 var videoHeight = height - g_options.slider_video_padding_top - g_options.slider_video_padding_bottom;
			 
			 //set video player size
			 g_objVideoPlayer.setSize(videoWidth, videoHeight);
		 }
		 
		 setVideoPlayerPosition();
		 
	}
	
	
	/**
	 * refresh slide items after options change
	 */
	this.refreshSlideItems = function(){
		 
		if(t.isAnimating() == true)
			return(true);
		
		 resizeSlideItem(g_objSlide1);
		 resizeSlideItem(g_objSlide2);
		 resizeSlideItem(g_objSlide3);
		 positionSlides();
		 
	}
	
	
	/**
	 * is mouse over the slider
	 */
	this.isMouseOver = function(){
		
		return g_objSlider.ismouseover();
	}
	
	/**
	 * set slider position
	 */
	this.setPosition = function(left, top){
		
		g_functions.placeElement(g_objSlider, left, top);
			
	}
	
	
	/**
	 * zoom in
	 */
	this.zoomIn = function(){
		if(!g_objZoomSlider)
			return(true);
		
		g_objZoomSlider.zoomIn();
	}
	
	/**
	 * zoom out
	 */
	this.zoomOut = function(){
		
		if(!g_objZoomSlider)
			return(true);
		
		g_objZoomSlider.zoomOut();
			
	}
	
	/**
	 * zoom back to original
	 */
	this.zoomBack = function(){
		
		if(!g_objZoomSlider)
			return(true);
		
		g_objZoomSlider.zoomBack();	
	}
	
	
}

/** -------------- TextPanel class ---------------------*/

function UGTextPanel(){
	
	var t = this;
	var g_objPanel, g_objParent, g_objTitle, g_objDesc;
	var g_objBG, g_objTextWrapper, g_gallery;
	var g_functions = new UGFunctions(), g_optionsPrefix = "";
	
	var g_options = {
			textpanel_align:"bottom",					//(top , bottom), textpanel align according the parent
			textpanel_margin:0,							//margin from the textpanel position according the textpanel_align
			textpanel_text_valign:"middle",				//middle, top, bottom - text vertical align
			textpanel_padding_top:10,					//textpanel padding top 
			textpanel_padding_bottom:10,				//textpanel padding bottom
			textpanel_height: null,						//textpanel height. if null it will be set dynamically
			textpanel_padding_title_description: 5,		//the space between the title and the description
			textpanel_padding_right: 11,				//cut some space for text from right
			textpanel_padding_left: 11,					//cut some space for text from left
			textpanel_fade_duration: 200,				//the fade duration of textpanel appear
			textpanel_enable_title: true,				//enable the title text
			textpanel_enable_description: true,			//enable the description text
			textpanel_enable_bg: true,					//enable the textpanel background
			textpanel_bg_color:"#000000",				//textpanel background color
			textpanel_bg_opacity: 0.4,					//textpanel background opacity
			
			textpanel_title_color:null,					//textpanel title color. if null - take from css
			textpanel_title_font_family:null,			//textpanel title font family. if null - take from css
			textpanel_title_text_align:null,			//textpanel title text align. if null - take from css
			textpanel_title_font_size:null,				//textpanel title font size. if null - take from css
			textpanel_title_bold:null,					//textpanel title bold. if null - take from css
			textpanel_css_title:{},						//textpanel additional css of the title

			textpanel_desc_color:null,					//textpanel description font family. if null - take from css
			textpanel_desc_font_family:null,			//textpanel description font family. if null - take from css
			textpanel_desc_text_align:null,				//textpanel description text align. if null - take from css
			textpanel_desc_font_size:null,				//textpanel description font size. if null - take from css
			textpanel_desc_bold:null,					//textpanel description bold. if null - take from css
			textpanel_css_description:{},				//textpanel additional css of the description
			
			textpanel_desc_style_as_title: false,		//set that the description style will be as title
			
			textpanel_bg_css:{}							//textpanel background css
	};
	
	var g_temp = {
			isFirstTime: true,
			setInternalHeight: true,	//flag if set internal height or not
			lastTitleBottom: 0,
			lastDescHeight: 0
	};
	
	
	/**
	 * position elements from top
	 */
	function positionElementsTop(animateHeight, startY){
		
		if(!startY)
			var startY = g_options.textpanel_padding_top;
		
		//place title
		var maxy = startY;
		
		//place title
		if(g_objTitle){
			var titleY = maxy;
			g_functions.placeElement(g_objTitle, 0, titleY);
			
			var isTitleVisible = g_objTitle.is(":visible");
			if(isTitleVisible == true){
				var objTitleSize = g_functions.getElementSize(g_objTitle);
				
				var maxy = objTitleSize.bottom;
				if(maxy > 0)
					g_temp.lastTitleBottom = maxy;
			}else{
				var maxy = 20;		//get last or assumed maxy
				
				if(g_temp.lastTitleBottom > 0)
					maxy = g_temp.lastTitleBottom;
			}
			
		}
		
				
		//place description
		var textDesc = "";
		if(g_objDesc)
			textDesc = jQuery.trim(g_objDesc.text());
		
		if(textDesc != ""){
			
			var descY = maxy;
						
			if(g_objTitle)
				descY += g_options.textpanel_padding_title_description;
			
			g_functions.placeElement(g_objDesc, 0, descY);
			
			var isVisible = jQuery(g_objDesc).is(":visible");
			
			if(isVisible == true){
				var objDescSize = g_functions.getElementSize(g_objDesc);
				maxy = objDescSize.bottom;
				
				if(objDescSize.height > 0)
					g_temp.lastDescHeight = objDescSize.height;
				
			}else{
				var descHeight = 16;			//take from last saved
				if(g_temp.lastDescHeight > 0)
					descHeight = g_temp.lastDescHeight;
				
				maxy = descY + descHeight;
			}
			
		}
		
		
		//change panel height
		if(!g_options.textpanel_height && g_temp.setInternalHeight == true){
			
			var panelHeight = maxy + g_options.textpanel_padding_bottom;		
			
			setHeight(panelHeight, animateHeight);
		}
		
	}
	
	/**
	 * get total text and description height
	 */
	function getTotalTextHeight(){
		var totalHeight = 0;
		
		if(g_objTitle)
			totalHeight += g_objTitle.outerHeight();
		
		if(g_objDesc){
			var textDesc = "";
			if(g_objDesc)
				textDesc = jQuery.trim(g_objDesc.text());
			
			if(textDesc != ""){
				if(g_objTitle)
					totalHeight += g_options.textpanel_padding_title_description;
				
				totalHeight += g_objDesc.outerHeight();
			}
		
		}
		
		
		return(totalHeight);
	}
	
	
	/**
	 * position elements to center
	 */
	function positionElementsMiddle(){
		
		var totalTextHeight = getTotalTextHeight();
		var startY = (g_objTextWrapper.height() - totalTextHeight) / 2;
		
		positionElementsTop(false, startY);
	}
	
	
	/**
	 * position elements to bottom
	 */
	function positionElementBottom(){
		
		var totalTextHeight = getTotalTextHeight();
		var startY = g_objTextWrapper.height() - totalTextHeight - g_options.textpanel_padding_bottom;
		
		positionElementsTop(false, startY);
	}
	
	
	/**
	 * position elements inside the panel
	 */
	this.positionElements = function(animateHeight){

		//if(g_objPanel.is(":visible") == false)
			//trace("the text panel is hidden. can't position elements")
		
		//if height not set, position only top
		if(!g_options.textpanel_height || g_options.textpanel_text_valign == "top"){
			positionElementsTop(animateHeight);
			return(false);
		}
		
		switch(g_options.textpanel_text_valign){
			default:
			case "top":
				positionElementsTop(false);		//no animation in this case
			break;
			case "bottom":
				positionElementBottom();
			break;
			case "center":
			case "middle":
				positionElementsMiddle();
			break;
		}
		
	}
	
	
	/**
	 * set new panel height
	 */
	function setHeight(height, animateHeight){
		
		if(!animateHeight)
			var animateHeight = false;
		
		if(animateHeight == true){
			
			if(g_objBG){
				
				//avoid background jumps
				var currentHeight = g_objBG.height();
				if(height > currentHeight)
					g_objBG.height(height);				
			}
			
			var objCss = {height: height+"px"};
			g_objPanel.add(g_objTextWrapper).animate(objCss, g_options.textpanel_fade_duration);
			
		}else{
			
			if(g_objBG)
				g_objBG.height(height);		
			
			g_objPanel.add(g_objTextWrapper).height(height);
		}
		
	}
	
	
	
	
	/**
	 * init the panel
	 */
	this.init = function(objGallery, customOptions, optionsPrefix){
				
		g_gallery = objGallery;
		
		//change options by prefix
		if(optionsPrefix){
			g_optionsPrefix = optionsPrefix;
			customOptions = g_functions.convertCustomPrefixOptions(customOptions,g_optionsPrefix,"textpanel");			
			
		}
		
		if(customOptions)
			g_options = jQuery.extend(g_options, customOptions);
		
		//validation:
		if(g_options.textpanel_enable_title == false && g_options.textpanel_enable_description == false)
			throw new Error("Textpanel Error: The title or description must be enabled");
		
		if(g_options.textpanel_height && g_options.textpanel_height < 0)
			g_options.textpanel_height = null;
		
		//copy desc style from title
		if(g_options.textpanel_desc_style_as_title == true){
			if(!g_options.textpanel_desc_color)
				g_options.textpanel_desc_color = g_options.textpanel_title_color;
			
			if(!g_options.textpanel_desc_bold)
				g_options.textpanel_desc_bold = g_options.textpanel_title_bold;
			
			if(!g_options.textpanel_desc_font_family)
				g_options.textpanel_desc_font_family = g_options.textpanel_title_font_family;
			
			if(!g_options.textpanel_desc_font_size)
				g_options.textpanel_desc_font_size = g_options.textpanel_title_font_size;
			
			if(!g_options.textpanel_desc_text_align)
				g_options.textpanel_desc_text_align = g_options.textpanel_title_text_align;
		}
		
	}
	
	
	/**
	 * append the bullets html to some parent
	 */
	this.appendHTML = function(objParent, addClass){
		g_objParent = objParent;
		
		if(addClass){
			addClass = " "+addClass;
		}else
			addClass = "";
		
		var html = "<div class='ug-textpanel"+addClass+"'>";
		
		if(g_options.textpanel_enable_bg == true)
			html += "<div class='ug-textpanel-bg"+addClass+"'></div>";
		
		html += "<div class='ug-textpanel-textwrapper"+addClass+"'>";
		
		if(g_options.textpanel_enable_title == true)
			html += "<div class='ug-textpanel-title"+addClass+"'></div>";
		
		if(g_options.textpanel_enable_description == true)
			html += "<div class='ug-textpanel-description"+addClass+"'></div>";
		
		html += "</div></div>";
		
		objParent.append(html);
		
		g_objPanel = objParent.children(".ug-textpanel");
		g_objTextWrapper = g_objPanel.children(".ug-textpanel-textwrapper");
		
		setCss();
		
	}
	
	
	/**
	 * set panel css according the options
	 */
	function setCss(){
				
		//set background css		
		if(g_options.textpanel_enable_bg == true){
			g_objBG = g_objPanel.children(".ug-textpanel-bg");
			g_objBG.fadeTo(0,g_options.textpanel_bg_opacity);
			
			var objCssBG = {"background-color":g_options.textpanel_bg_color};
			objCssBG = jQuery.extend(objCssBG, g_options.textpanel_bg_css);
			
			g_objBG.css(objCssBG);
		}
		
		
		//set title css from options
		if(g_options.textpanel_enable_title == true){
			g_objTitle = g_objTextWrapper.children(".ug-textpanel-title");
			var objCssTitle = {};
			
			if(g_options.textpanel_title_color !== null)
				objCssTitle["color"] = g_options.textpanel_title_color;
			
			if(g_options.textpanel_title_font_family !== null)
				objCssTitle["font-family"] = g_options.textpanel_title_font_family;
			
			if(g_options.textpanel_title_text_align !== null)
				objCssTitle["text-align"] = g_options.textpanel_title_text_align;
			
			if(g_options.textpanel_title_font_size !== null)
				objCssTitle["font-size"] = g_options.textpanel_title_font_size+"px";
			
			if(g_options.textpanel_title_bold !== null){
				
				if(g_options.textpanel_title_bold === true)
					objCssTitle["font-weight"] = "bold";
				else
					objCssTitle["font-weight"] = "normal";
			
			}
			
			//set additional css
			if(g_options.textpanel_css_title)
				objCssTitle = jQuery.extend(objCssTitle, g_options.textpanel_css_title);
			
			g_objTitle.css(objCssTitle);
		}
		
		//set description css
		if(g_options.textpanel_enable_description == true){
			g_objDesc = g_objTextWrapper.children(".ug-textpanel-description");
			
			var objCssDesc = {};
			
			if(g_options.textpanel_desc_color !== null)
				objCssDesc["color"] = g_options.textpanel_desc_color;
			
			if(g_options.textpanel_desc_font_family !== null)
				objCssDesc["font-family"] = g_options.textpanel_desc_font_family;
			
			if(g_options.textpanel_desc_text_align !== null)
				objCssDesc["text-align"] = g_options.textpanel_desc_text_align;
			
			if(g_options.textpanel_desc_font_size !== null)
				objCssDesc["font-size"] = g_options.textpanel_desc_font_size+"px";
			
			if(g_options.textpanel_desc_bold !== null){
				
				if(g_options.textpanel_desc_bold === true)
					objCssDesc["font-weight"] = "bold";
				else
					objCssDesc["font-weight"] = "normal";
			
			}
			
			//set additional css
			if(g_options.textpanel_css_title)
				objCssDesc = jQuery.extend(objCssDesc, g_options.textpanel_css_description);
				
			g_objDesc.css(objCssDesc);
		}
		
	}
	
	/**
	 * on item change, set the text
	 */
	function onItemChange(){
		var objItem = g_gallery.getSelectedItem();
		t.setText(objItem.title, objItem.description);
	}
	
	
	/**
	 * init events
	 */
	function initEvents(){
		
		//on item change, set the text in the slider.
		jQuery(g_gallery).on(g_gallery.events.ITEM_CHANGE, onItemChange);
	}
	
	
	/**
	 * destroy the events
	 */
	this.destroy = function(){
		jQuery(g_gallery).off(g_gallery.events.ITEM_CHANGE);
	}
	
	/**
	 * run the text panel
	 */
	this.run = function(){
		
		t.setSizeByParent();
		
		initEvents();
	}
	
	/**
	 * set panel size
	 */
	this.setPanelSize = function(panelWidth, panelHeight){
		
		g_temp.setInternalHeight = true;
		
		if(!panelHeight)
			var panelHeight = 80;		//some default number
		else
			g_temp.setInternalHeight = false;
		
		if(g_options.textpanel_height)	
			panelHeight = g_options.textpanel_height;
		
		g_objPanel.width(panelWidth);
		g_objPanel.height(panelHeight);
		
		//set background size
		if(g_objBG){
			g_objBG.width(panelWidth);
			g_objBG.height(panelHeight);
		}
		
		//set textwrapper size and position
		var textWrapperWidth = panelWidth - g_options.textpanel_padding_left - g_options.textpanel_padding_right;
		var textWrapperLeft = g_options.textpanel_padding_left;
		
		g_functions.setElementSizeAndPosition(g_objTextWrapper, textWrapperLeft, 0, textWrapperWidth, panelHeight);
		
		//set text width
		if(g_objTitle)
			g_objTitle.width(textWrapperWidth);
		
		//set description height
		if(g_objDesc)
			g_objDesc.width(textWrapperWidth);
		
		if(g_temp.isFirstTime == false)
			t.positionElements(false);
	}
	
	
	/**
	 * set size by parent. the height is set to default meanwhile
	 */
	this.setSizeByParent = function(){
				
		var objSize = g_functions.getElementSize(g_objParent);
		t.setPanelSize(objSize.width);
	}
	
	/**
	 * set plain sext without other manipulations
	 */
	this.setTextPlain = function(title, description){

		if(g_objTitle)
			g_objTitle.html(title);
		
		if(g_objDesc)
			g_objDesc.html(description);
		
	}
	
	
	/**
	 * set html text
	 */
	this.setText = function(title, description){
		
		if(g_temp.isFirstTime == true){
			
			t.setTextPlain(title, description);
			
			g_temp.isFirstTime = false;
			
			t.positionElements(false);
		
		}else{		//width animation
			
			g_objTextWrapper.stop().fadeTo(g_options.textpanel_fade_duration,0,function(){
				
				t.setTextPlain(title, description);
				
				t.positionElements(true);
				
				jQuery(this).fadeTo(g_options.textpanel_fade_duration,1);
			});
			
		}
		
	}
	
	
		
	
	/**
	 * position the panel
	 */
	this.positionPanel = function(customTop, customLeft){
		
		var objCss = {};
		
		if(customTop !== undefined && customTop !== null){
			objCss.top = customTop;
			objCss.bottom = "auto";
		}else{
			
			switch(g_options.textpanel_align){
				case "top":
					objCss.top = g_options.textpanel_margin + "px";
				break;
				case "bottom":
					objCss.top = "auto";
					objCss.bottom = g_options.textpanel_margin + "px";
				break;
				case "middle":
					objCss.top = g_functions.getElementRelativePos(g_objPanel, "middle", g_options.textpanel_margin);
				break;
			}
			
		}
		
		if(customLeft !== undefined && customLeft !== null)
			objCss.left = customLeft;
		
		g_objPanel.css(objCss);
	}
	
	
	/**
	 * set custom options
	 */
	this.setOptions = function(objOptions){
		
		if(g_optionsPrefix)
			objOptions = g_functions.convertCustomPrefixOptions(objOptions, g_optionsPrefix, "textpanel");
		
		g_options = jQuery.extend(g_options, objOptions);
				
	}
	
	
	/**
	 * get html element
	 */
	this.getElement = function(){
		
		return(g_objPanel);
	}
	
	/**
	 * get element size
	 */
	this.getSize = function(){
		
		var objSize = g_functions.getElementSize(g_objPanel);
		return(objSize);
	}
	
	
	/**
	 * refresh panel size, position and contents
	 */
	this.refresh = function(toShow, noPosition, panelWidth, panelHeight){
		
		setCss();
		
		if(!panelWidth)
			t.setSizeByParent();
		else
			t.setPanelSize(panelWidth, panelHeight);
		
		t.positionElements(false);
		
		if(noPosition !== true)
			t.positionPanel();
		
		if(toShow === true)
			t.show();		
	}
	
	
	/**
	 * hide the panel
	 */
	this.hide = function(){
		
		g_objPanel.hide();
	}
	
	/**
	 * show the panel
	 */
	this.show = function(){
		g_objPanel.show();
	}
	
	/**
	 * get options
	 */
	this.getOptions = function(){
		return(g_options);
	}
	
	/**
	 * get text panel option
	 */
	this.getOption = function(optionName){
		
		if(g_options.hasOwnProperty(optionName) == false)
			return(null);
		
		return(g_options[optionName]);
	}
	
	
}

/** -------------- UGZoomButtonsPanel class ---------------------*/

/**
 * zoom buttons panel class
 */
function UGZoomButtonsPanel(){
	
	var t = this;
	var g_objPanel, g_objParent, g_objButtonPlus, g_objButtonMinus, g_objButtonReturn;
	var g_slider = new UGSlider;
	var g_functions = new UGFunctions();
	
	var g_options = {
		slider_zoompanel_skin: ""		//skin of the zoom panel, if empty inherit from gallery skin
	};
	
	var g_temp = {
		
	};
	
	
	/**
	 * init the panel
	 */
	this.init = function(objSlider, customOptions){
		
		g_slider = objSlider;
		
		if(customOptions)
			g_options = jQuery.extend(g_options, customOptions);		
	}
	
	
	/**
	 * append the bullets html to some parent
	 */
	this.appendHTML = function(objParent){
		g_objParent = objParent;
		
		var html = "<div class='ug-slider-control ug-zoompanel ug-skin-"+g_options.slider_zoompanel_skin+"'>";
		
			html += "<div class='ug-zoompanel-button ug-zoompanel-plus'></div>";
			html += "<div class='ug-zoompanel-button ug-zoompanel-minus ug-zoompanel-button-disabled'></div>";
			html += "<div class='ug-zoompanel-button ug-zoompanel-return ug-zoompanel-button-disabled'></div>";
		
		html += "</div>";
		
		objParent.append(html);
		
		g_objPanel = objParent.children(".ug-zoompanel");
		g_objButtonPlus = g_objPanel.children(".ug-zoompanel-plus");
		g_objButtonMinus = g_objPanel.children(".ug-zoompanel-minus");
		g_objButtonReturn = g_objPanel.children(".ug-zoompanel-return");
		
	}
	
	
	/**
	 * set objects - use it instead insert html
	 */
	this.setObjects = function(objButtonPlus, objButtonMinus, objButtonReturn){
		
		g_objButtonPlus = objButtonPlus;
		g_objButtonMinus = objButtonMinus;
		g_objButtonReturn = objButtonReturn;
		
		if(g_objButtonMinus)
			g_objButtonMinus.addClass("ug-zoompanel-button-disabled");
		
		if(g_objButtonReturn)
			g_objButtonReturn.addClass("ug-zoompanel-button-disabled");
			
	}
	
	
	/**
	 * get buttons element
	*/
	this.getElement = function(){
		
		return(g_objPanel);
	}
	
	
	/**
	 * check if the button disabled
	 */
	function isButtonDisabled(objButton){
		
		if(!objButton)
			return(true);
		
		if(objButton.hasClass("ug-zoompanel-button-disabled"))
			return(true);
		
		return(false);
	}
	
	
	/**
	 * disable some button
	 */
	function disableButton(objButton){
		
		if(objButton)
			objButton.addClass("ug-zoompanel-button-disabled");
	}
	
	/**
	 * enable some button
	 */
	function enableButton(objButton){
		
		if(objButton)
			objButton.removeClass("ug-zoompanel-button-disabled");		
	}
	
	
	/**
	 * on zoom change
	 */
	function onZoomChange(){
		
		//skip not image types
		if(g_slider.isCurrentSlideType("image") == false)
			return(true);
		
		var isFit = g_slider.isCurrentSlideImageFit();
		
		if(isFit == true){		//if fit, disable buttons
			
			if(isButtonDisabled(g_objButtonMinus) == false){			
				disableButton(g_objButtonMinus);
				disableButton(g_objButtonReturn);
			}
			
		}else{	//if not fit, enable minus buttons
			
			if(isButtonDisabled(g_objButtonMinus) == true){
				enableButton(g_objButtonMinus);
				enableButton(g_objButtonReturn);				
			}
			
		}
			
	}
	
	/**
	 * init zoompanel events
	 */
	t.initEvents = function(){
		
		//add hover class on buttons
		g_functions.addClassOnHover(g_objButtonPlus, "ug-button-hover");
		g_functions.addClassOnHover(g_objButtonMinus, "ug-button-hover");
		g_functions.addClassOnHover(g_objButtonReturn, "ug-button-hover");
		
		//set buttons click events
		
		g_functions.setButtonOnClick(g_objButtonPlus, function(){
			
			if(isButtonDisabled(g_objButtonPlus) == true)
				return(true);
			
			g_slider.zoomIn();
		});
		
		g_functions.setButtonOnClick(g_objButtonMinus, function(){
			
			if(isButtonDisabled(g_objButtonMinus) == true)
				return(true);
			
			g_slider.zoomOut();
		});
		
		g_functions.setButtonOnClick(g_objButtonReturn, function(){
			
			if(isButtonDisabled(g_objButtonReturn) == true)
				return(true);
			
			g_slider.zoomBack();
		});
				
		//on zoom change event
		jQuery(g_slider).on(g_slider.events.ZOOM_CHANGE,onZoomChange);
		jQuery(g_slider).on(g_slider.events.ITEM_CHANGED,onZoomChange);
	
	}
	
	
}


/** -------------- UgBullets class ---------------------*/

function UGBullets(){
	
	var t = this, g_numBullets = 0, g_gallery = new UniteGalleryMain();
	var g_objBullets, g_objParent, g_activeIndex = -1, g_bulletWidth;
	var g_functions = new UGFunctions();
	
	var g_temp = {
		isInited:false
	};
	
	var g_options = {
		bullets_skin: "",					//bullets_skin: ""		//skin of the bullets, if empty inherit from gallery skin
		bullets_addclass: "",					//bullets object class addition
		bullets_space_between:-1			//set the space between bullets. If -1 then will be set default space from the skins
	}
	
	
	/**
	 * the events
	 */
	this.events = {
		BULLET_CLICK : "bullet_click"
	};
	
	/**
	 * init the bullets
	 */
	this.init = function(gallery, customOptions, numBullets){
		g_gallery = gallery;
		
		if(numBullets)
			g_numBullets = numBullets;
		else	
			g_numBullets = g_gallery.getNumItems();
		
		g_temp.isInited = true;
		g_options = jQuery.extend(g_options, customOptions);
		
		if(g_options.bullets_skin == "")
			g_options.bullets_skin = g_options.gallery_skin;
		
	}
	
	/**
	 * add bullets to the html
	 */
	function setHtmlBullets(){
		var html = "";
		
		var addHtml = "";
		if(g_options.bullets_space_between != -1)
			addHtml = " style='margin-left:" + g_options.bullets_space_between + "px'";
		
		for(var i=0; i< g_numBullets; i++){
			if(i == 0)
				html += "<div class='ug-bullet'></div>";
			else
				html += "<div class='ug-bullet'"+addHtml+"></div>";
		}
		
		g_objBullets.html(html);
		
		//set bullet width value
		if(!g_bulletWidth){
			var objBullet = g_objBullets.find(".ug-bullet:first-child");
			if(objBullet.length)
				g_bulletWidth = objBullet.width();
		}
	}

	/**
	 * get total bullets width
	 */
	this.getBulletsWidth = function(){
		if(g_numBullets == 0)
			return(0);
		
		if(!g_bulletWidth)
			return(0);
		
		var totalWidth = g_numBullets*g_bulletWidth+(g_numBullets-1)*g_options.bullets_space_between;
		return(totalWidth);
	}
	
	
	/**
	 * append the bullets html to some parent
	 */
	this.appendHTML = function(objParent){
		g_objParent = objParent;
		
		validateInited();
		var addClass = "";
		if(g_options.bullets_addclass != "")
			addClass = " " + g_options.bullets_addclass;
			
		var html = "<div class='ug-slider-control ug-bullets ug-skin-"+g_options.bullets_skin + addClass+"'>";
		
		html += "</div>";
		
		g_objBullets = jQuery(html);
		
		objParent.append(g_objBullets);
		
		setHtmlBullets();
		
		initEvents();
	}	
	
	
	/**
	 * update number of bullets
	 */
	this.updateNumBullets = function(numBullets){
		
		g_numBullets = numBullets;
		setHtmlBullets();
		initEvents();
	}
	
	
	/**
	 * 
	 * on bullet click
	 */
	function onBulletClick(objBullet){
				
		//filter not active only
		if(t.isActive(objBullet) == true)
			return(true);
		
		var index = objBullet.index();
			
		jQuery(t).trigger(t.events.BULLET_CLICK, index);
	}
	
	
	/**
	 * init the bullets events
	 * trigger bullet click event
	 */
	function initEvents(){
		
		var objBullets = g_objBullets.children(".ug-bullet");
		
		g_functions.setButtonOnClick(objBullets, onBulletClick);
		
		objBullets.on("mousedown mouseup",function(event){
			//event.preventDefault();
			return(false);
		});
		
	}
	
	
	/**
	 * get the bullets element
	 */
	this.getElement = function(){
		return g_objBullets;
	}
	
	
	/**
	 * set some item active
	 */
	this.setActive = function(index){
		validateInited();
		validateIndex(index);
		
		var children = g_objBullets.children(".ug-bullet");
		children.removeClass("ug-bullet-active");
		
		var bullet = jQuery(children[index]);
		bullet.addClass("ug-bullet-active");
		
		g_activeIndex = index;
	}

	
	/**
	 * check if the bullet is active
	 */
	this.isActive = function(index){
		validateIndex(index);
		
		if(typeof index != "number")
			var objBullet = index;
		else{
			var objBullet = g_objBullets.children(".ug-bullet")[index];			
		}
		
		if(objBullet.hasClass("ug-bullet-active"))
				return(true);
		
		return(false);
	}
	
	
	/**
	 * get bullets number
	 */
	this.getNumBullets = function(){
		return(g_numBullets);
	}
	
	/**
	 * validate bullets index
	 */
	function validateIndex(index){
		if(index < 0 || index >= g_numBullets)
			throw new Error("wrong bullet index: " + index);
	}
	
	
	/**
	 * validate that the bullets are inited
	 */
	function validateInited(){
		
		if(g_temp.isInited == true)
			return(true);
		
		throw new Error("The bullets are not inited!");
	}
	
	
	
}

/** -------------- UgProgressBar class ---------------------*/

function UGProgressBar(){
	
	var t = this, g_isInited = false;
	var g_percent = 0, g_objBar, g_objInner, g_functions = new UGFunctions();
	
	var g_options = {
		slider_progressbar_color:"#ffffff",			//progress bar color
		slider_progressbar_opacity: 0.6,			//progress bar opacity
		slider_progressbar_line_width: 5			//progress bar line width
	}
	
	
	/**
	 * put progress pie to some wrapper
	 */
	this.put = function(g_objWrapper, userOptions){
		
		if(userOptions)
			g_options = jQuery.extend(g_options, userOptions);
		
		g_objWrapper.append("<div class='ug-progress-bar'><div class='ug-progress-bar-inner'></div></div>");
		g_objBar = g_objWrapper.children(".ug-progress-bar");
		g_objInner = g_objBar.children(".ug-progress-bar-inner");
		
		//init the objects
		g_objInner.css("background-color", g_options.slider_progressbar_color);
		g_objBar.height(g_options.slider_progressbar_line_width);
		g_objInner.height(g_options.slider_progressbar_line_width);
		g_objInner.width("0%");
		
		//set opacity old way (because ie bug)
		var opacity = g_options.slider_progressbar_opacity;
		
		var objInnerHTML = g_objInner[0];
		objInnerHTML.style.opacity = opacity;
		objInnerHTML.style.filter = 'alpha(opacity=' + opacity*100 + ')';
	}
	
	
	/**
	 * put the pie hidden
	 */
	this.putHidden = function(g_objWrapper, userOptions){
		t.put(g_objWrapper, userOptions);
		g_objBar.hide();
	}
	
	/**
	 * get the bar object
	 */
	this.getElement = function(){
		
		return(g_objBar);
	}
	
	/**
	 * set progress bar size
	 */
	this.setSize = function(width){
		
		g_objBar.width(width);
		g_objInner.width(width);
		t.draw();
	}
	
	
	/**
	 * set position
	 */
	this.setPosition = function(left, top, offsetLeft, offsetTop){
		
		g_functions.placeElement(g_objBar, left, top, offsetLeft, offsetTop);
	}
	
	
	/**
	 * draw the progress bar
	 */
	this.draw = function(){
		var innerWidth = g_percent * 100;
		
		g_objInner.width(innerWidth + "%");
	}
	
	
	/**
	 * set and draw the progress
	 */
	this.setProgress = function(percent){
		
		g_percent = g_functions.normalizePercent(percent);
		
		//debugLine(g_percent, true);
		
		t.draw();
	}
	
	/**
	 * get type string
	 */
	this.getType = function(){
		return("bar");
	}
	
}

/** -------------- UgProgressPie class ---------------------*/

function UGProgressPie(){
	
	var t = this, g_isInited = false;
	var g_percent, g_objPie, g_functions = new UGFunctions();
	
	var g_options = {
		slider_progresspie_type_fill: false,		//false is stroke, true is fill - the progress pie type, stroke of fill
		slider_progresspie_color1: "#B5B5B5", 		//the first color of the progress pie
		slider_progresspie_color2: "#E5E5E5",		//progress pie second color 
		slider_progresspie_stroke_width: 6,			//progress pie stroke width 
		slider_progresspie_width: 30,				//progess pie width
		slider_progresspie_height:30				//progress pie height
	}
	
	
	/**
	 * put progress pie to some wrapper
	 */
	this.put = function(g_objWrapper, userOptions){
		
		if(userOptions)
			g_options = jQuery.extend(g_options, userOptions);
			
		g_objWrapper.append("<canvas class='ug-canvas-pie' width='"+g_options.slider_progresspie_width+"' height='"+g_options.slider_progresspie_height+"'></canvas>");
		g_objPie = g_objWrapper.children(".ug-canvas-pie");
	}
	
	
	/**
	 * put the pie hidden
	 */
	this.putHidden = function(g_objWrapper, userOptions){
		t.put(g_objWrapper, userOptions);
		draw(0.1);
		g_objPie.hide();
	}
	
	
	/**
	 * get jquery object
	 */
	this.getElement = function(){
		return(g_objPie);
	}
	
	/**
	 * set position
	 */
	this.setPosition = function(left, top){
		
		g_functions.placeElement(g_objPie, left, top);
		
	}
	
	/**
	 * get the height and width of the object
	 */
	this.getSize = function(){
		
		var obj = {
			width: g_options.slider_progresspie_width,
			height: g_options.slider_progresspie_height
		};
		
		return(obj);
	}	
	
	/**
	 * draw the progress pie
	 */
	function draw(percent){
		
		if(!percent)
			var percent = 0;
		
		var radius = Math.min(g_options.slider_progresspie_width, g_options.slider_progresspie_height) / 2;
		
		var ctx = g_objPie[0].getContext('2d');
		
		//init the context
		if(g_isInited == false){
			
			g_isInited = true;
			
			ctx.rotate(Math.PI*(3/2));
			ctx.translate(-2 * radius,0);
		}		
		
		ctx.clearRect(0,0,g_options.slider_progresspie_width, g_options.slider_progresspie_height);
		
		var centerX = g_options.slider_progresspie_width / 2;
		var centerY = g_options.slider_progresspie_height / 2;
	    
		//draw main arc
		var startPoint = 0;
		var endPoint = percent * Math.PI * 2;
				
	    
		if(g_options.slider_progresspie_type_fill == true){		//fill
			
			ctx.beginPath();
				ctx.moveTo(centerX, centerY); 
			    ctx.arc(centerX,centerY,radius,startPoint, endPoint);
			    ctx.lineTo(centerX, centerY); 
			    
			    ctx.fillStyle = g_options.slider_progresspie_color1;
			    ctx.fill();
		    ctx.closePath();
		    
		}else{		//stroke
		    ctx.globalCompositeOperation = "source-over";
			
			ctx.beginPath();
				ctx.moveTo(centerX, centerY); 
			    ctx.arc(centerX,centerY,radius,startPoint, endPoint);
			    ctx.lineTo(centerX, centerY); 
			    
			    ctx.fillStyle = g_options.slider_progresspie_color1;
			    ctx.fill();
			ctx.closePath();
		    
		    ctx.globalCompositeOperation = "destination-out";
			
			var radius2 = radius - g_options.slider_progresspie_stroke_width;
		    
			ctx.beginPath();
								
				ctx.moveTo(centerX, centerY); 
			    ctx.arc(centerX,centerY,radius2,startPoint, endPoint);
			    ctx.lineTo(centerX, centerY); 
			    
			    ctx.fillStyle = g_options.slider_progresspie_color1;
			    ctx.fill();
			    
			ctx.closePath();
		}
	    
	    
		//draw rest arc (only on fill type):
	    if(g_options.slider_progresspie_type_fill == true){
			startPoint = endPoint;
			endPoint = Math.PI * 2;
			ctx.beginPath();
			    ctx.arc(centerX,centerY,radius,startPoint, endPoint);
			    ctx.lineTo(centerX, centerY); 
		    ctx.fillStyle = g_options.slider_progresspie_color2;
		    ctx.fill();
		    ctx.closePath();	    	
	    }
	    
	}
	
	
	/**
	 * set progress (0-1)
	 */
	this.setProgress = function(percent){
		
		percent = g_functions.normalizePercent(percent);
		
		g_percent = percent;
		draw(percent);
	}
	
	/**
	 * get type string
	 */
	this.getType = function(){
		return("pie");
	}
	
}

/**f
 * touch thumbs control class
 * addon to strip gallery
 */
function UGTouchSliderControl(){
	
	var g_objSlider, g_objInner, g_parent = new UGSlider();
	var g_objParent, g_options, t=this;
	
	var g_functions = new UGFunctions();
	
	
	var g_options = {
		  slider_transition_continuedrag_speed: 250,				//the duration of continue dragging after drag end
		  slider_transition_continuedrag_easing: "linear",		//easing function of continue dragging animation
		  slider_transition_return_speed: 300,					//the duration of the "return to place" animation
		  slider_transition_return_easing: "easeInOutQuad"		//easing function of the "return to place" animation
	};
	
	var g_temp = {
		touch_active: false,		
		startMouseX: 0,		
		startMouseY: 0,
		lastMouseX: 0,
		lastMouseY: 0,
		startPosx:0, 
		startTime:0,
		isInitDataValid:false,
		slides: null,
		lastNumTouches:0,
		isDragging: false,
		storedEventID: "touchSlider",
		videoStartX: 0,
		isDragVideo: false,
		videoObject: null
	};
	
	
	/**
	 * get diff inner object position from current item pos
	 */
	function getDiffPosFromCurrentItem(slides){
		
		if(!slides)
			var slides = g_parent.getSlidesReference();
		
		var posCurrent = g_functions.getElementSize(slides.objCurrentSlide);
		var inPlaceX = -posCurrent.left;
		var objInnerSize = g_functions.getElementSize(g_objInner);
		var diffPos = inPlaceX - objInnerSize.left;
		
		return(diffPos);
	}
	
	/**
	 * check if the movement that was held is valid for slide change
	 */
	function isMovementValidForChange(){
		
		var slides = g_parent.getSlidesReference();

		//check position, if more then half, move
		var diffPos = getDiffPosFromCurrentItem(slides);
		
		var breakSize = Math.round(slides.objCurrentSlide.width() * 3 / 8);
				
		if(Math.abs(diffPos) >= breakSize)
			return(true);
				
		//check gesture, if vertical mostly then not move
		var diffX = Math.abs(g_temp.lastMouseX - g_temp.startMouseX);
		var diffY = Math.abs(g_temp.lastMouseY - g_temp.startMouseY);
		
		//debugLine("diffx: " + diffX, true, true);
		
		if(diffX < 20)
			return(false);
		
		//if(diffY >= diffX)
			//return(false);
				
		//check time. Short time always move
		var endTime = jQuery.now();
		var diffTime = endTime - g_temp.startTime;
		
		//debugLine("time: " + diffTime, true);
		
		if(diffTime < 500)
			return(true);
		
					
		return(false);
	}

	/**
	 * check tab event occured
	 * invokes on touchend event on the slider object
	 */
	this.isTapEventOccured = function(event){
		
		//validate one touch
		var arrTouches = g_functions.getArrTouches(event);
		var numTouches = arrTouches.length;
			
		if(numTouches != 0 || g_temp.lastNumTouches != 0){
			g_temp.lastNumTouches = numTouches;
			return(false);
		}
			
		g_temp.lastNumTouches = numTouches;
				
		var slides = g_parent.getSlidesReference();

		//check position, if more then half, move
		var diffPos = getDiffPosFromCurrentItem(slides);
		
		//check gesture, if vertical mostly then not move
		var diffX = Math.abs(g_temp.lastMouseX - g_temp.startMouseX);
		var diffY = Math.abs(g_temp.lastMouseY - g_temp.startMouseY);
		
		//check by time
		var endTime = jQuery.now();
		var diffTime = endTime - g_temp.startTime;
		
		//combine move and time
		if(diffX < 20 && diffY < 50 && diffTime < 500)
			return(true);
		
		return(false);
	}
	
	/**
	 * return the item to place
	 */
	function returnToPlace(slides){
		
		if(g_parent.isInnerInPlace() == true)
			return(false);
						
		//trigger before return event
		g_objParent.trigger(g_parent.events.BEFORE_RETURN);
		
		if(!slides)
			var slides = g_parent.getSlidesReference();
		
		var posCurrent = g_functions.getElementSize(slides.objCurrentSlide);
		var destX = -posCurrent.left;
				
		//animate objects		
		g_objInner.animate({left:destX+"px"},{
			duration: g_options.slider_transition_return_speed,
			easing: g_options.slider_transition_continuedrag_easing,
			queue: false,
			progress: function(animation, number, remainingMS){
								
				//check drag video
				if(g_temp.isDragVideo == true){
					var objSize = g_functions.getElementSize(g_objInner);
					var innerX = objSize.left;
					
					var posDiff = innerX - destX;
					
					var videoPosX = g_temp.videoStartX + posDiff;
					g_temp.videoObject.css("left", videoPosX);
				}
				
			},
			complete: function(){
				g_objParent.trigger(g_parent.events.AFTER_RETURN);
			}
		});
		
	}
	
	
	/**
	 * 
	 * change the item to given direction
	 */
	function changeItem(direction){
		
		g_parent.getVideoObject().hide();
		g_parent.switchSlideNums(direction);
		g_parent.placeNabourItems();

	}
	
	/**
	 * continue the dragging by changing the slides to the right place.
	 */
	function continueSlideDragChange(){
		
		//get data
		var slides = g_parent.getSlidesReference();
		
		var diffPos = getDiffPosFromCurrentItem(slides);
		
		if(diffPos == 0)
			return(false);
		
		var direction = (diffPos > 0) ? "left" : "right";
			
		var isReturn = false;
			
		switch(direction){
			case "right":	//change to prev item
				
				if( g_parent.isSlideHasItem(slides.objPrevSlide) ){
					
					var posPrev = g_functions.getElementSize(slides.objPrevSlide);
					var destX = -posPrev.left;
					
				}else	//return current item
					isReturn = true;
				
			break;	
			case "left":		//change to next item
				
				if( g_parent.isSlideHasItem(slides.objNextSlide) ){
					
					var posNext = g_functions.getElementSize(slides.objNextSlide);
					var destX = -posNext.left;
					
				}else					
					isReturn = true;				
			break;
	   }
		
		
		if(isReturn == true){
			returnToPlace(slides);
			
		}else{
						
			//animate objects
			g_objInner.stop().animate({left:destX+"px"},{
				duration: g_options.slider_transition_continuedrag_speed,
				easing: g_options.slider_transition_continuedrag_easing,
				queue: false,
				progress: function(){
					
					//check drag video
					if(g_temp.isDragVideo == true){
						var objSize = g_functions.getElementSize(g_objInner);
						var innerX = objSize.left;
						var posDiff = innerX - g_temp.startPosx;
						var videoPosX = g_temp.videoStartX + posDiff;
						g_temp.videoObject.css("left", videoPosX);
					}
					
				},
				always:function(){
					changeItem(direction);
					g_objParent.trigger(g_parent.events.AFTER_DRAG_CHANGE);
				}
			});
			
		}
				
		
	}

	
	/**
	 * handle slider drag on mouse drag
	 */
	function handleSliderDrag(event){
		
		var diff = g_temp.lastMouseX - g_temp.startMouseX;
		
		if(diff == 0)
			return(true);
		
		var direction = (diff < 0) ? "left":"right";
		
		var objZoomSlider = g_parent.getObjZoom();
		
		//don't drag if the zoom panning enabled
		//store init position after image zoom pan end
		if(objZoomSlider){
			
			var isPanEnabled = objZoomSlider.isPanEnabled(event,direction);
						
			if(isPanEnabled == true){
				g_temp.isInitDataValid = false;
				return(true);				
			}else{
				
				if(g_temp.isInitDataValid == false){
					storeInitTouchData(event);
					return(true);
				}
				
			}
		}
		
		//set inner div position
		var currentPosx = g_temp.startPosx + diff;
		
		//check out of borders and slow down the motion:
		if(diff > 0 && currentPosx > 0)
			currentPosx = currentPosx / 3;		
		
		else if(diff < 0 ){
			
			var innerEnd = currentPosx + g_objInner.width();
			var sliderWidth = g_objSlider.width();
			
			if( innerEnd <  sliderWidth ){
				currentPosx = g_temp.startPosx + diff/3;
			}
		}
		
		if(g_temp.isDragging == false){
			g_temp.isDragging = true;
			g_objParent.trigger(g_parent.events.START_DRAG);
		}
				
		g_objInner.css("left", currentPosx+"px");
		
		//drag video
		if(g_temp.isDragVideo == true){
			var posDiff = currentPosx - g_temp.startPosx;
			var videoPosX = g_temp.videoStartX + posDiff;
			
			g_temp.videoObject.css("left", videoPosX);
		}
		
	}
	
	/**
	 * store init touch position
	 */
	function storeInitTouchData(event){
		
		var mousePos = g_functions.getMousePosition(event);
		
		g_temp.startMouseX = mousePos.pageX;
		
		//debugLine("startx:" + g_temp.startMouseX, true, true);
		
		g_temp.startMouseY = mousePos.pageY;
		
		g_temp.lastMouseX = g_temp.startMouseX;
		g_temp.lastMouseY = g_temp.startMouseY;
		g_temp.startTime = jQuery.now();
		
		var arrTouches = g_functions.getArrTouches(event);		
		g_temp.startArrTouches = g_functions.getArrTouchPositions(arrTouches);
		
		var objPos = g_functions.getElementSize(g_objInner);
		
		g_temp.startPosx = objPos.left;
		
		g_temp.isInitDataValid = true;
		
		//check if video object need to be dragged
		g_temp.isDragVideo = false;
					
		
		g_functions.storeEventData(event, g_temp.storedEventID);
	}
	
	/**
	 * disable touch active
	 */
	function disableTouchActive(who){
		
		g_temp.touch_active = false;
		
		//debugLine("disable: " + who, true, true);
	}
	
	/**
	 * enable the touch active
	 */
	function enableTouchActive(who, event){
		
		g_temp.touch_active = true;
		storeInitTouchData(event);
		
		//debugLine("enable: " + who, true, true);
	}

	
	/**
	 * on touch slide start
	 * 
	 */
	function onTouchStart(event){
		
		event.preventDefault();
		
		g_temp.isDragging = false;
		
		//debugLine("touchstart", true, true);
		
		//check if the slides are changing from another event.
		if(g_parent.isAnimating() == true){
			g_objInner.stop(true, true);
		}
		
		//check num touches
		var arrTouches = g_functions.getArrTouches(event);
		if(arrTouches.length > 1){
			
			if(g_temp.touch_active == true){
				disableTouchActive("1");
			}
			
			return(true);
		}
						
		if(g_temp.touch_active == true){
			return(true);
		}
		
		enableTouchActive("1", event);
		
	}
	

	/**
	 * 
	 * on touch move event
	 */
	function onTouchMove(event){
		
		if(g_temp.touch_active == false)
			return(true);
		
		//detect moving without button press
		if(event.buttons == 0){
			disableTouchActive("2");
			
			continueSlideDragChange();
						
			return(true);
		}

		g_functions.updateStoredEventData(event, g_temp.storedEventID);
				
		event.preventDefault();
		
		var mousePos = g_functions.getMousePosition(event);
		g_temp.lastMouseX = mousePos.pageX;
		g_temp.lastMouseY = mousePos.pageY;
				
		//debugLine("lastX:" + g_temp.lastMouseX, true, true);
		
		var scrollDir = null;
		
		if(g_options.slider_vertical_scroll_ondrag == true)
			scrollDir = g_functions.handleScrollTop(g_temp.storedEventID);
		
		if(scrollDir !== "vert")
			handleSliderDrag(event);
			
	}
	
	/**
	 * on touch end event
	 */
	function onTouchEnd(event){
		
		//debugLine("touchend", true, true);
		
		var arrTouches = g_functions.getArrTouches(event);
		var numTouches = arrTouches.length;
		var isParentInPlace = g_parent.isInnerInPlace();
		
		if(isParentInPlace == true && g_temp.touch_active == false && numTouches == 0){
			
			return(true);
		}
				
		if(numTouches == 0 && g_temp.touch_active == true){
											
			disableTouchActive("3");
			
			var isValid = false;
			
			var wasVerticalScroll = g_functions.wasVerticalScroll(g_temp.storedEventID);
			
			if(wasVerticalScroll == false)
				isValid = isMovementValidForChange();
						
			if(isValid == true)
				continueSlideDragChange();		//change the slide
			else
				returnToPlace();	//return the inner object to place (if not in place)
			
		}else{
			
			if(numTouches == 1 && g_temp.touch_active == false){
								
				enableTouchActive("2",event);				
			}
				
		}
					
	}


	/**
	 * init touch events
	 */
	function initEvents(){
		
		//slider mouse down - drag start
		g_objSlider.bind("mousedown touchstart",onTouchStart);
		
		//on body move
		jQuery("body").bind("mousemove touchmove",onTouchMove);
		
		//on body mouse up - drag end
		jQuery(window).add("body").bind("mouseup touchend", onTouchEnd);
		
	}
	
	
	
	/**
	 * init function for avia controls
	 */
	this.init = function(objSlider, customOptions){
		
		g_parent = objSlider;
		g_objParent = jQuery(g_parent);
		g_objects = objSlider.getObjects();
				
		g_objSlider = g_objects.g_objSlider;
		g_objInner = g_objects.g_objInner;

		g_options = jQuery.extend(g_options, customOptions);
				
		initEvents();
	}
	
	
	/**
	 * get last mouse position
	 */
	this.getLastMousePos = function(){
		var obj = {
			pageX: g_temp.lastMouseX,
			pageY: g_temp.lastMouseY
		};
		
		return(obj);
	}
	
	
	/**
	 * is touch active
	 */
	this.isTouchActive = function(){
		
		return(g_temp.touch_active);
		
	}
	
	
}
/**
 * touch thumbs control class
 * addon to strip gallery
 */
function UGZoomSliderControl(){
	
	var g_objSlider, g_objInner, g_parent = new UGSlider(), g_objParent;
	
	var g_functions = new UGFunctions();
	
	var t = this;
	
	var g_options = {
		slider_zoom_step: 1.2,							//the step of zooming with mouse wheel or zoom button
		slider_zoom_max_ratio: 6,						//max zoom ratio
		slider_zoom_return_pan_duration: 400,			//the return from pan animation duration 
		slider_zoom_return_pan_easing: "easeOutCubic"	//the return from pan wasing function
	};
	
	var g_temp = {
		isPanActive:false,
		startMouseX:0,
		startMouseY:0,
		lastMouseX:0,
		lastMouseY:0,
		startImageX:0,
		startImageY:0,
		panXActive:false,
		panYActive:false,
		objImage:null,
		objImageSize:null,
		objParent:null,
		objParentSize:null,
		objSlide:null,
		storeImageLastTime:0,
		
		isZoomActive: false,
		startDistance:0,
		startMiddlePoint:null,
		imageOrientPoint:null,
		objFitImageSize:null,
		isZoomedOnce:false
	};

	
	/**
	 * init the object
	 */
	function initObject(objSlider, customOptions){
		
		g_parent = objSlider;
		g_objParent = jQuery(g_parent);
		g_objects = objSlider.getObjects();
		g_objSlider = g_objects.g_objSlider;
		g_objInner = g_objects.g_objInner;
		
		g_options = jQuery.extend(g_options, customOptions);
				
		initEvents();
	}
	
	
	/**
	 * get fit image to slider scale mode
	 * the fill become fit
	 */
	function getFitScaleMode(){
		
		var scaleMode = g_parent.getScaleMode();
		
		if(scaleMode != "down")
			scaleMode = "fit";
		
		return(scaleMode);
	}
	
	
	/**
	 * cache current slide and image
	 */
	function storeCurrentImage(){		
		
		//prevent continious image storring
		var currentTime = jQuery.now();
		var diff = currentTime - g_temp.storeImageLastTime;
		
		if(diff < 20)
			return(false);
		
		var slides = g_parent.getSlidesReference();
		g_temp.objSlide = slides.objCurrentSlide;
		g_temp.objImage = slides.objCurrentSlide.find("img");
		
		if(g_temp.objImage.length == 0)
			return(false);
			
		g_temp.objImageSize = g_functions.getElementSize(g_temp.objImage);
		g_temp.objParent = g_temp.objImage.parent();
		g_temp.objParentSize = g_functions.getElementSize(g_temp.objParent);
		
		var scaleMode = getFitScaleMode();
		
		objPadding = g_parent.getObjImagePadding();
		
		g_temp.objFitImageSize = g_functions.getImageInsideParentDataByImage(g_temp.objImage, scaleMode, objPadding);
		
		var currentTime = jQuery.now();
		g_temp.storeImageLastTime = currentTime;
		
		return(true);
	}
	
	
	/**
	 * zoom current image
	 * mode: in, out, back
	 */
	function zoomCurrentImage(mode, mousePos){
		
		var slides = g_parent.getSlidesReference();
		var objImage = slides.objCurrentSlide.find("img");
		var scaleMode = getFitScaleMode();
		
		g_objParent.trigger(g_parent.events.ZOOM_START);
		
		//flag if the images zoomed
		var isZoomed = true;
		
		var objPadding = g_parent.getObjImagePadding();
				
		if(mode == "back"){	
			var objOriginalSize = g_functions.getImageOriginalSize(objImage);
			g_functions.scaleImageFitParent(objImage, objOriginalSize.width, objOriginalSize.height, scaleMode, objPadding);
		}
		else{			
			var zoomIn = (mode == "in")?true:false;
			
			isZoomed = g_functions.zoomImageInsideParent(objImage, zoomIn, g_options.slider_zoom_step, mousePos, scaleMode, g_options.slider_zoom_max_ratio, objPadding);
		}
		
		if(isZoomed == true){
			g_objParent.trigger(g_parent.events.ZOOMING);
			g_objParent.trigger(g_parent.events.ZOOM_CHANGE);
			g_objParent.trigger(g_parent.events.ZOOM_END);
		}
		
	}
	
	
	function ____________PAN_____________(){};
	
	
	/**
	 * check if pan is posible for the current image
	 * check if the image is bigger then the parent
	 */
	function isPanPosible(objImage, event, stictTouchesCheck){
		
		//check num touches, strict means that even if 0 - pan not posible
		var arrTouches = g_functions.getArrTouches(event);
		
		if(stictTouchesCheck === true){
			
			if(arrTouches.length != 1)
				return(false);			
		}else{
			if(arrTouches.length > 1)
				return(false);			
		}
		
		if(g_functions.isElementBiggerThenParent(objImage))
			return(true);
		
		return(false);
	}
	
	
	/**
	 * store pan values
	 */
	function storePanInitValues(event){
		
		var mousePos = g_functions.getMousePosition(event);
		
		g_temp.startMouseX = mousePos.pageX;
		g_temp.startMouseY = mousePos.pageY;
		
		g_temp.lastMouseX = g_temp.startMouseX;
		g_temp.lastMouseY = g_temp.startMouseY;
		
		g_temp.startImageX = g_temp.objImageSize.left;
		g_temp.startImageY = g_temp.objImageSize.top;
		
		g_temp.panXActive = (g_temp.objImageSize.width > g_temp.objParentSize.width);
		g_temp.panYActive = (g_temp.objImageSize.height > g_temp.objParentSize.height);
		
	}
	
	
	/**
	 * check pan start, and start if posible
	 */
	function startPan(event){
				
		g_temp.isPanActive = true;
		storePanInitValues(event);
		
	}
	
	
	/**
	 * pan the image
	 */
	function panImage(event){
		
		if(g_temp.objImage == undefined || g_temp.objImage.length == 0)
			return(true);
		
		var mousePos = g_functions.getMousePosition(event);
		
		var diffX = mousePos.pageX - g_temp.startMouseX;
		var diffY = mousePos.pageY - g_temp.startMouseY;
		
		//get active direction
		var diffLastX = mousePos.pageX - g_temp.lastMouseX;
		var diffLastY = mousePos.pageY - g_temp.lastMouseY;
		
		var directionX = (diffLastX < 0) ? "left":"right";
		var directionY = (diffLastY < 0) ? "up":"down";
		
		g_temp.lastMouseX = mousePos.pageX;
		g_temp.lastMouseY = mousePos.pageY;
		
		var posImage = g_functions.getElementSize(g_temp.objImage);
		
		//var imageX = g_temp.startImageX + diffX;
		//var imageY = g_temp.startImageY + diffY;
				
		
		//slow down if no pan available in this point
		//slow down y
		
		if(g_temp.panYActive == false){
			
			diffLastY = 0;
			
		}else{		//zoom enabled
			
			if(directionY == "down" && posImage.top > 0){			
				
				diffLastY = diffLastY / 3;				
				
			}else if(directionY == "up" && posImage.bottom < g_temp.objParentSize.height){
				
				diffLastY = diffLastY / 3;				
				
			}
		}
		
		//slow down x (only if the pan enabled)
		if(g_temp.panXActive == false || g_parent.isInnerInPlace() == false){
			
			diffLastX = 0;
		
		}else{	//zoom enabled
			
			if(directionX == "right" && posImage.left > 0){				
				diffLastX = diffLastX / 3;				
			}
			else if(directionX == "left" && posImage.right < g_temp.objParentSize.width){
				diffLastX = diffLastX / 3;
			}
	    }
		
		var imageX = posImage.left + diffLastX;
		var imageY = posImage.top + diffLastY;
		
		
		g_functions.placeElement(g_temp.objImage, imageX, imageY);
		
	}
	
	
	
	
	/**
	 * return the image to place if it's out of borders
	 */
	function checkReturnAfterPan(){
				
		var isReturnX = false, isReturnY = false, newX = 0, newY = 0;
		var objSize = g_functions.getElementSize(g_temp.objImage);
		var objImagePadding = g_parent.getObjImagePadding();
				
		var objCenterPos = g_functions.getElementCenterPosition(g_temp.objImage, objImagePadding);
		
		g_temp.panXActive = (g_temp.objImageSize.width > g_temp.objParentSize.width);
		g_temp.panYActive = (g_temp.objImageSize.height > g_temp.objParentSize.height);
				
		
		if(g_temp.panYActive == true){
			
			if(objSize.top > 0){		//off limit top
				
				newY = 0;
				isReturnY = true;
				
			}else if(objSize.bottom < g_temp.objParentSize.height){		//off limit bottom
				
				newY = g_temp.objParentSize.height - objSize.height;
				isReturnY = true;
				
			}
			
		}else{		//pan not active y - return to center
			
			if(objSize.top != objCenterPos.top){
				isReturnY = true;
				newY = objCenterPos.top;
			}
			
		}
		
		
		//check return x to place
		if(g_temp.panXActive == true){
			
			if(objSize.left > 0){		//off limit left
				
				newX = 0;
				isReturnX = true;
				
			}else if(objSize.right < g_temp.objParentSize.width){		//off limit right
								
				newX = g_temp.objParentSize.width - objSize.width;
				isReturnX = true;
				
			}
			
		}else{		//pan not active x - return to center
			
		//	debugLine("not active", true);
			
			if(objSize.left != objCenterPos.left){
				isReturnX = true;
				newX = objCenterPos.left;
			}
		}
		
		
		//do the animation
		var objCss = {};
		if(isReturnY == true)
			objCss.top = newY + "px";
		
		if(isReturnX == true)
			objCss.left = newX + "px";
		
		
		if(isReturnY == true || isReturnX == true){
						
			g_temp.objImage.animate(objCss,{
				duration: g_options.slider_zoom_return_pan_duration,
				easing: g_options.slider_zoom_return_pan_easing,
				queue: false
			});

		}
		
	}
	
	/**
	 * check if the image animating or not
	 */
	function isImageAnimating(){
		
		if(g_temp.objImage && g_temp.objImage.is(":animated"))
			return(true);
		
		return(false);
	}
	
	function ____________END_PAN_____________(){};
	
	function ________TOUCH_ZOOM_____________(){};
	
	/**
	 * start touch zoom
	 */
	function startTouchZoom(arrTouches){
				
		g_temp.isZoomActive = true;
		
		//store init diff
		g_temp.startDistance = g_functions.getDistance(arrTouches[0].pageX, arrTouches[0].pageY, arrTouches[1].pageX, arrTouches[1].pageY);
		if(g_temp.startDistance == 0)
			g_temp.startDistance = 1;
		
		
		//store init positions
		g_temp.startMiddlePoint = g_functions.getMiddlePoint(arrTouches[0].pageX, arrTouches[0].pageY, arrTouches[1].pageX, arrTouches[1].pageY);
				
		g_temp.objImageSize = g_functions.getElementSize(g_temp.objImage);
			
		g_temp.startImageX = g_temp.objImageSize.left;
		g_temp.startImageY = g_temp.objImageSize.top;
		
		//set orient point
		g_temp.imageOrientPoint = g_functions.getElementLocalPoint(g_temp.startMiddlePoint, g_temp.objImage);
		
		var isInsideImage = g_functions.isPointInsideElement(g_temp.imageOrientPoint, g_temp.objImageSize);
		if(isInsideImage == false){
			g_temp.imageOrientPoint = g_functions.getElementCenterPoint(g_temp.objImage);
		}
		
		//trigger start zoom event
		g_objParent.trigger(g_parent.events.ZOOM_START);
	}
	
	
	/**
	 * check num touches, if not 2 - end zoom
	 */
	function checkTouchZoomEnd(event){
				
		if(g_temp.isZoomActive == false)
			return(false);
		
		var arrTouches = g_functions.getArrTouches(event);			
		if(arrTouches.length != 2){		//end touch zoom
			
			g_temp.isZoomActive = false;
			
			//trigger end zoom event
			g_objParent.trigger(g_parent.events.ZOOM_END);			
		}	
		
	}
	
	
	/**
	 * check start touch zoom
	 */
	function checkTouchZoomStart(event){
				
		if(g_temp.isZoomActive == true)
			return(true);


		var arrTouches = g_functions.getArrTouches(event);
				
		if(arrTouches.length != 2)
			return(true);
					
		startTouchZoom(arrTouches);		
	}
	
	
	/**
	 * do touch zoom on touch devices
	 */
	function doTouchZoom(event){
				
		var arrTouches = g_functions.getArrTouches(event);
				
		var distance = g_functions.getDistance(arrTouches[0].pageX, arrTouches[0].pageY, arrTouches[1].pageX, arrTouches[1].pageY);		
		var zoomRatio = distance / g_temp.startDistance;
		
		var middlePoint = g_functions.getMiddlePoint(arrTouches[0].pageX, arrTouches[0].pageY, arrTouches[1].pageX, arrTouches[1].pageY);
		
		//set zoom data:
		var newWidth = g_temp.objImageSize.width * zoomRatio;
		var newHeight = g_temp.objImageSize.height * zoomRatio;
		
		//check max zoom ratio:
		var objOriginalSize = g_functions.getImageOriginalSize(g_temp.objImage);
		var expectedZoomRatio = 1;		
		if(objOriginalSize.width > 0)
			expectedZoomRatio = newWidth / objOriginalSize.width;
		
		if(expectedZoomRatio > g_options.slider_zoom_max_ratio)
			return(true);
		
		//set pan data:
		panX = -(g_temp.imageOrientPoint.x * zoomRatio - g_temp.imageOrientPoint.x);
		panY = -(g_temp.imageOrientPoint.y * zoomRatio - g_temp.imageOrientPoint.y);
		
		var diffMiddleX = (middlePoint.x - g_temp.startMiddlePoint.x);
	    var diffMiddleY = (middlePoint.y - g_temp.startMiddlePoint.y);
		
	    var posx = g_temp.startImageX + panX + diffMiddleX;
		var posy = g_temp.startImageY + panY + diffMiddleY;		
				
		
		//resize and place:
		g_functions.setElementSizeAndPosition(g_temp.objImage, posx, posy, newWidth, newHeight);
		
		//trigger zooming event
		g_objParent.trigger(g_parent.events.ZOOMING);			
		g_objParent.trigger(g_parent.events.ZOOM_CHANGE);			

		/*
		debugLine({
			middleStartX: g_temp.startMiddlePoint.x,
			middleX: middlePoint.x,
			diffMiddleX: diffMiddleX
		});
		*/
		
	}
	
	
	/**
	 * check return the image from zoom
	 */
	function checkReturnFromZoom(){
				
		if(g_temp.objImage == undefined || g_temp.objImage.length == 0)
			return(true);
		
		var objSize = g_functions.getElementSize(g_temp.objImage);
		
		if(objSize.width < g_temp.objFitImageSize.imageWidth){
			
			g_temp.objImage.css({
				position:"absolute",
				margin:"none"
			});
			
			var objCss = {
				top: g_temp.objFitImageSize.imageTop + "px",
				left: g_temp.objFitImageSize.imageLeft + "px",
				width: g_temp.objFitImageSize.imageWidth + "px",
				height: g_temp.objFitImageSize.imageHeight + "px"
			};
			
			g_temp.objImage.animate(objCss,{
				duration: g_options.slider_zoom_return_pan_duration,
				easing: g_options.slider_zoom_return_pan_easing,
				queue: false
			});
			
		}else{			
			checkReturnAfterPan();
		}
		
	}
	
	
	function ________END_TOUCH_ZOOM_____________(){};
	
	
	/**
	 * 
	 * touch start event - start pan, remember start pan data
	 */
	function onTouchStart(event){
		
		//if no image type, exit
		if(g_parent.isCurrentSlideType("image") == false)
			return(true);
		
		var isStored = storeCurrentImage();
		
		if(g_temp.objImage == undefined || g_temp.objImage.length == 0)
			return(true);
		
		event.preventDefault();
						
		//stop animation if exists
		if(isImageAnimating() == true){			
			g_temp.objImage.stop(true);
		}
		
		if(g_temp.isZoomActive == true){
			
			checkTouchZoomEnd(event);
			
		}else{
			
			checkTouchZoomStart(event);
			
		}
		
		//if zoom started stop panning, if not, start panning
		if(g_temp.isZoomActive == true){
			
			g_temp.isPanActive = false;
		
		}else if(isPanPosible(g_temp.objImage, event) == true && g_temp.isZoomedOnce == true){
			
			startPan(event);
		}
		
		/*
		debugLine({
				pan: g_temp.isPanActive,
				zoom: g_temp.isZoomActive,
				event: "start"
			}, true);
		*/
		
	}
	
	
	/**
	 * touch end event - bring the image to place
	 */
	function onTouchEnd(event){
		
		if(g_parent.isCurrentSlideType("image") == false)
			return(true);
		
		//check if some gallery button clicked
		var objTarget = jQuery(event.target);
		if(objTarget.data("ug-button") == true){
			//event.preventDefault();
			return(false);
		}
		
		var isStored = storeCurrentImage();

		if(g_temp.objImage == undefined || g_temp.objImage.length == 0)
			return(true);
				
		var panWasActive = g_temp.isPanActive;
		var zoomWasActive = g_temp.isZoomActive;
		
		//if the inner not in place, don't return noting, let the slide change
		if(g_parent.isInnerInPlace() == false){
			g_temp.isZoomActive = false;
			g_temp.isPanActive = false;
			return(true);
		}
		
		//check end zoom
		if(g_temp.isZoomActive == true){
			checkTouchZoomEnd(event);
		}else{
			checkTouchZoomStart(event);
		}
		
		
		if(g_temp.isZoomActive == true){
			
			g_temp.isPanActive = false;
			
		}else{
			
			var panPosible = isPanPosible(g_temp.objImage, event, true);
			
			if(g_temp.isPanActive == true ){
						
				g_temp.isPanActive = false;
				
			}else if(panPosible == true){
				
				startPan(event);
			}
			
		}
		
		/*
		debugLine({
			pan:g_temp.isPanActive,
			zoom: g_temp.isZoomActive
		}, true);
		*/
		
		if((panWasActive || zoomWasActive) && g_temp.isZoomActive == false && g_temp.isPanActive == false){
			checkReturnFromZoom();
		}
		
		
	}
	
	
	/**
	 * 
	 * touch move event - pan
	 */
	function onTouchMove(event){
		
		if(g_parent.isCurrentSlideType("image") == false)
			return(true);
				
		//check touch zoom (pinch gesture)
		if(g_temp.isZoomActive == true){
			
			doTouchZoom(event);
			
		}else if(g_temp.isPanActive == true){
			
			panImage(event);
			
		}
		
		
	}
	
	
	/**
	 * on slider mousewheel event
	 */
	function onSliderMouseWheel(event, delta, deltaX, deltaY){
		
		if(g_options.slider_zoom_mousewheel == false)
			return(true);
		
		if(g_parent.isCurrentSlideType("image") == false)
			return(true);
		
		event.preventDefault();
		
		//prevent default only if needed
		//if(zoomIn == true || zoomIn == false && g_functions.isElementBiggerThenParent(objImage))
		//event.preventDefault();
		
		
		var zoomIn = (delta > 0);
		var mousePos = g_functions.getMousePosition(event);
		var	mode = (zoomIn == true) ? "in":"out";
		
		zoomCurrentImage(mode, mousePos);
	}
	
	
	/**
	 * init touch events
	 */
	function initEvents(){
		
		//debugLine("init");
		g_objSlider.on("mousewheel",onSliderMouseWheel);
		
		//slider mouse down - pan start
		g_objSlider.bind("mousedown touchstart",onTouchStart);
		
		//on body move
		jQuery("body").bind("mousemove touchmove",onTouchMove);
		
		//on body mouse up - pan end
		jQuery(window).add("body").bind("mouseup touchend", onTouchEnd);
		
		//event before image returned to init position
		g_objParent.bind(g_parent.events.BEFORE_RETURN, function(){
			
			checkReturnFromZoom();
		});
				
		//on item change update isZoomedOnce event. Allow panning only if zoomed once
		g_objParent.bind(g_parent.events.ITEM_CHANGED, function(){
			g_temp.isZoomedOnce = false;
		});
		
		g_objParent.bind(g_parent.events.ZOOM_CHANGE, function(){
			g_temp.isZoomedOnce = true;
		});
		
	}
	
	this.________EXTERNAL_____________ = function(){};
	
	/**
	 * check if the image is zoomed, and there is a place for left panning
	 */
	this.isPanEnabled = function(event, direction){
		
		storeCurrentImage();
		
		if(g_temp.objImage == undefined || g_temp.objImage.length == 0)
			return(false);
		
		if(g_temp.isZoomedOnce == false)
			return(false);
		
		if(isPanPosible(g_temp.objImage, event) == false)
			return(false);
		
		if(g_parent.isInnerInPlace() == false)
			return(false);
		
		if(direction == "left"){
			
			if(g_temp.objImageSize.right <= g_temp.objParentSize.width)
				return(false);
			
		}else{	//right direction
			
			if(g_temp.objImageSize.left >= 0)
				return(false);
		}
		
		return(true);
	}
	
	
	/**
	 * init function for avia controls
	 */
	this.init = function(objSlider, customOptions){
		
		initObject(objSlider, customOptions);
	}
	
	/**
	 * zoom in
	 */
	this.zoomIn = function(){		
		zoomCurrentImage("in");	
	}
	
	/**
	 * zoom out
	 */
	this.zoomOut = function(){		
		zoomCurrentImage("out");		
	}
	
	/**
	 * zoom back
	 */
	this.zoomBack = function(){
		
		zoomCurrentImage("back");		
	}
}
/** -------------- Wistia API ---------------------*/

function UGWistiaAPI(){
	
	this.isAPILoaded = false;
	var t = this, g_objThis = jQuery(this), g_intHandle;
	var g_player, g_isPlayerReady = false;
	
	this.events = {
			START_PLAYING: "start_playing",
			STOP_PLAYING: "stop_playing",
			VIDEO_ENDED: "video_ended"
	};

	
	/**
	 * check if sound cloud active
	 */
	function isWistiaActive(){
		
		return(typeof Wistia != "undefined");	
	}
	
	/**
	 * load vimeo API
	 */
	this.loadAPI = function(){
		
		if(g_ugWistiaAPI.isAPILoaded == true)
			return(true);

		if(isWistiaActive()){
			g_ugWistiaAPI.isAPILoaded = true;
			return(true);
		}
		
		g_ugFunctions.loadJs("fast.wistia.com/assets/external/E-v1.js", true);
		
		g_ugWistiaAPI.isAPILoaded = true;		
	}

	
	/**
	 * actually put the video
	 */
	function putVideoActually(divID, videoID, width, height, isAutoplay){
		
		g_player = null;
		g_isPlayerReady = false;
		
		var htmlID = divID + "_video";
		
		var html = "<div id='"+htmlID+"' class='wistia_embed' style='width:"+width+";height:"+height+";' data-video-width='"+width+"' data-video-height='"+height+"'>&nbsp;</div>";
				
		jQuery("#"+divID).html(html);
		
		g_player = Wistia.embed(videoID, {
			  version: "v1",
			  videoWidth: width,
			  videoHeight: height,
			  container: htmlID,
			  autoPlay: isAutoplay
		});
				
		g_isPlayerReady = true;
				
		initEvents();
	}
	
	
	/**
	 * init events
	 */
	function initEvents(){
		
		//set "play" event
		
		g_player.bind('play', function(){
			g_objThis.trigger(t.events.START_PLAYING);
		});
		
		//set "pause event"
		g_player.bind('pause', function(){
			g_objThis.trigger(t.events.STOP_PLAYING);
		});
		
		g_player.bind('end', function(){
			g_objThis.trigger(t.events.STOP_PLAYING);
			g_objThis.trigger(t.events.VIDEO_ENDED);
		});
		
	}
	
	
	/**
	 * do some command
	 */
	this.doCommand = function(command){
		
		if(g_player == null)
			return(false);
		
		if(g_isPlayerReady == false)
			return(false);
		
		switch(command){
			case "play":
				g_player.play();
			break;
			case "pause":
				g_player.pause();
			break;		
		}
		
	}
	
	/**
	 * do pause command
	 */
	this.pause = function(){
		t.doCommand("pause");
	}
	
	/**
	 * do play command
	 */
	this.play = function(){
		t.doCommand("play");
	}
	
	
	/**
	 * put the vimeo video
	 */
	this.putVideo = function(divID, videoID, width, height, isAutoplay){
		
		if(isWistiaActive()){
			putVideoActually(divID, videoID, width, height, isAutoplay);
			return(true);
		}
		
		
		//if no API present, wait for the API being ready
		this.loadAPI();
		g_intHandle = setInterval(function(){
			
			if(isWistiaActive()){
				putVideoActually(divID, videoID, width, height, isAutoplay);
				clearInterval(g_intHandle);
			}
			
		}, 500);
		
	}
	
	
	/**
	 * get if the player is ready
	 */
	this.isPlayerReady = function(){
				
		if(g_isPlayerReady && g_player)
			return(true);
	
		return(false);
	}	
	
	
}

/** -------------- Sound Cloud API ---------------------*/

function UGSoundCloudAPI(){
	
	this.isAPILoaded = false;
	var t = this, g_objThis = jQuery(this), g_intHandle;
	var g_player, g_lastContainerID;
	
	this.events = {
			START_PLAYING: "start_playing",
			STOP_PLAYING: "stop_playing",
			VIDEO_ENDED: "video_ended"
	};

	/**
	 * check if sound cloud active
	 */
	function isSCActive(){
		
		return(typeof SC != "undefined");	
	}
	
	/**
	 * load vimeo API
	 */
	this.loadAPI = function(){
		
		if(g_ugSoundCloudAPI.isAPILoaded == true)
			return(true);
				
		if(isSCActive()){
			g_ugSoundCloudAPI.isAPILoaded = true;
			return(true);
		}
		
		g_ugFunctions.loadJs("w.soundcloud.com/player/api.js", true);
		
		g_ugSoundCloudAPI.isAPILoaded = true;		
	}
	
	/**
	 * actually put the video
	 */
	function putSoundActually(divID, trackID, width, height, isAutoplay){
		
		g_player = null;
		g_isPlayerReady = false;
		
		var iframeID = divID+"_iframe";
		
		var url = location.protocol+"//w.soundcloud.com/player/?url=http://api.soundcloud.com/tracks/"+trackID;
		url += "&amp;buying=false&amp;liking=false&amp;download=false&amp;sharing=false&amp;show_artwork=true&show_comments=false&amp;show_playcount=true&amp;show_user=false&amp;hide_related=true&amp;visual=true&amp;start_track=0&amp;callback=true";
		
		if(isAutoplay === true)
			url += "&amp;auto_play=true";
		else
			url += "&amp;auto_play=false";
		
		var html = "<iframe id='"+iframeID+"' src="+url+" width='"+width+"' height='"+height+"' frameborder='0' scrolling='no' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
		
		jQuery("#"+divID).html(html);
		
		//get the player object
		g_player = SC.Widget(iframeID);
		
		g_player.bind(SC.Widget.Events.READY, function() {
			
			if(g_player){
				g_isPlayerReady = true;
				initEvents();
			}
			
		});
		
		g_lastContainerID = divID;
	}

	
	/**
	 * init events
	 */
	function initEvents(){
		
		
		//set "play" event
		g_player.bind(SC.Widget.Events.PLAY, function(){
			g_objThis.trigger(t.events.START_PLAYING);
		});
		
		//set "pause event"
		g_player.bind(SC.Widget.Events.PAUSE, function(){
			g_objThis.trigger(t.events.STOP_PLAYING);
		});
		
		g_player.bind(SC.Widget.Events.FINISH, function(){
			g_objThis.trigger(t.events.STOP_PLAYING);
			g_objThis.trigger(t.events.VIDEO_ENDED);
		});
		
	}
		
	
	/**
	 * put the youtube video
	 */
	this.putSound = function(divID, trackID, width, height, isAutoplay){
		
		if(isSCActive()){
			putSoundActually(divID, trackID, width, height, isAutoplay);
			return(true);
		}
		
		
		//if no API present, wait for the API being ready
		this.loadAPI();
		g_intHandle = setInterval(function(){
			
			if(isSCActive()){
				putSoundActually(divID, trackID, width, height, isAutoplay);
				clearInterval(g_intHandle);
			}
			
		}, 500);
		
	}
	

	/**
	 * do some command
	 */
	this.doCommand = function(command){
		
		if(g_player == null)
			return(false);
		
		if(g_isPlayerReady == false)
			return(false);
		
		switch(command){
			case "play":
				g_player.play();
			break;
			case "pause":
				g_player.pause();
			break;
		}
		
	}	
	
	
	/**
	 * pause video
	 */
	this.pause = function(){
		t.doCommand("pause");
	}
	
	
	/**
	 * play video
	 */
	this.play = function(){
		t.doCommand("play");
	}
	
	/**
	 * destroy the player
	 */
	this.destroy = function(){
		
		g_isPlayerReady = false;
		g_player = null;
		
		if(g_lastContainerID){
			jQuery("#" + g_lastContainerID).html("");
			g_lastContainerID = null;
		}
		
	}
	
}

/** -------------- html5 Video API ---------------------*/

function UGHtml5MediaAPI(){
	
	this.isAPILoaded = false;
	var t = this, g_objThis = jQuery(this), g_intHandle;
	var g_player;
	
	this.events = {
			START_PLAYING: "start_playing",
			STOP_PLAYING: "stop_playing",
			VIDEO_ENDED: "video_ended"
	};
	
	/**
	 * load vimeo API
	 */
	this.loadAPI = function(){
		
		if(g_ugHtml5MediaAPI.isAPILoaded == true)
			return(true);
		
		
		if(isMediaElementActive()){
			g_ugHtml5MediaAPI.isAPILoaded = true;
			return(true);
		}
		
		g_ugFunctions.loadJs("cdnjs.cloudflare.com/ajax/libs/mediaelement/2.18.1/mediaelement.min.js", true);
		g_ugFunctions.loadCss("cdnjs.cloudflare.com/ajax/libs/mediaelement/2.18.1/mediaelementplayer.min.css", true);
		
		g_ugHtml5MediaAPI.isAPILoaded = true;		
	}
	
	/**
	 * return true if the mediaelement is active
	 */
	function isMediaElementActive(){
				
		return(typeof mejs != "undefined");
	}
	
	
	/**
	 * actually put the video
	 */
	function putVideoActually(divID, data, width, height, isAutoplay){
		
		g_player = null;
		g_isPlayerReady = false;
		
		var urlFlash = location.protocol + "//cdnjs.cloudflare.com/ajax/libs/mediaelement/2.18.1/flashmediaelement-cdn.swf";
		var urlSilverlight = location.protocol + "//cdnjs.cloudflare.com/ajax/libs/mediaelement/2.18.1/silverlightmediaelement.xap";

		var htmlID = divID + "_video";
		var htmlAutoplay = "";
		if(isAutoplay && isAutoplay === true)
			htmlAutoplay = "autoplay='autoplay'"
		
		var htmlPoster = "";
		if(data.posterImage)
			htmlPoster = "poster='"+data.posterImage+"'";
		
		var html = "<video id='"+htmlID+"' width='"+width+"' height='"+height+"'  controls='controls' preload='none' "+htmlAutoplay+" "+htmlPoster+">";
				
		if(data.mp4 != "")
			html += "<source type='video/mp4' src='"+data.mp4+"' />";
		
		if(data.webm != "")
			html += "<source type='video/webm' src='"+data.webm+"' />";

		if(data.ogv != "")
			html += "<source type='video/ogg' src='"+data.ogv+"' />";
		 
		html +=  "<object width='"+width+"' height='"+height+"' type='application/x-shockwave-flash' data='"+urlFlash+"'>";
		html +=  "<param name='movie' value='"+urlFlash+"' />";
		html +=  "<param name='flashvars' value='controls=true&file="+data.mp4+"' />";
		html +=  "</object>";
		
		html += "</video>";
		
		jQuery("#"+divID).html(html);
		
		new MediaElement(htmlID, {			
		    enablePluginDebug: false,
		    flashName: urlFlash,
		    silverlightName: urlSilverlight,
		    success: function (mediaElement, domObject) { 
		    	g_isPlayerReady = true;
		    	g_player = mediaElement;
		    			    	
		    	if(isAutoplay == false)
		    		g_player.pause();
		    	
		    	initEvents();
		    },
		    error: function (objError) { 
		    	trace(objError);
		    }
		});		
		
	}
	
	
	/**
	 * init player events function
	 */
	function initEvents(){
		
		g_ugFunctions.addEvent(g_player, "play", function(){
			g_objThis.trigger(t.events.START_PLAYING);
		});
		
		g_ugFunctions.addEvent(g_player, "pause", function(){
			g_objThis.trigger(t.events.STOP_PLAYING);
		});
		
		g_ugFunctions.addEvent(g_player, "ended", function(){
			g_objThis.trigger(t.events.STOP_PLAYING);
			g_objThis.trigger(t.events.VIDEO_ENDED);
		});
		
	}
	
	
	/**
	 * put the vimeo video
	 */
	this.putVideo = function(divID, data, width, height, isAutoplay){
		
		if(isMediaElementActive()){
			putVideoActually(divID, data, width, height, isAutoplay);
			return(true);
		}
		
		
		//if no API present, wait for the API being ready
		this.loadAPI();
		g_intHandle = setInterval(function(){
			
			if(isMediaElementActive()){
				putVideoActually(divID, data, width, height, isAutoplay);
				clearInterval(g_intHandle);
			}
			
		}, 500);
		
	}

	/**
	 * do some command
	 */
	this.doCommand = function(command){
				
		if(g_player == null)
			return(false);
		
		if(g_isPlayerReady == false)
			return(false);
		
		switch(command){
			case "play":
				g_player.play();
			break;
			case "pause":
				g_player.pause();
			break;
		}
		
	}	
	
	
	/**
	 * pause video
	 */
	this.pause = function(){
		t.doCommand("pause");
	}
	
	
	/**
	 * play video
	 */
	this.play = function(){
		t.doCommand("play");
	}
	
}


/** -------------- Vimeo API class ---------------------*/

function UGVimeoAPI(){
	
	this.isAPILoaded = false;
	
	var t = this, g_objThis = jQuery(this), g_intHandle;
	var g_player = null, g_isPlayerReady = false, g_lastCotnainerID, g_cueChangeAutoplay = false;
	
	
	this.events = {
			START_PLAYING: "start_playing",
			STOP_PLAYING: "stop_playing",
			VIDEO_ENDED: "video_ended"
	};
	
	/**
	 * load vimeo API
	 */
	this.loadAPI = function(){
		
		if(g_ugVimeoAPI.isAPILoaded == true)
			return(true);
		
		if(isFroogaloopActive()){
			g_ugVimeoAPI.isAPILoaded = true;
			return(true);
		}

		g_ugFunctions.loadJs("f.vimeocdn.com/js/froogaloop2.min.js", true);
		
		g_ugVimeoAPI.isAPILoaded = true;		
	}
	
	
	
	/**
	 * tells if the froogaloop library active
	 */
	function isFroogaloopActive(){
		
		return(typeof Froogaloop != "undefined");
	}
	
	
	/**
	 * actually put the video
	 */
	function putVideoActually(divID, videoID, width, height, isAutoplay){
		
		g_player = null;
		g_isPlayerReady = false;
		
		var url = location.protocol+"//player.vimeo.com/video/"+videoID+"?api=1";
		
		if(isAutoplay === true)
		   url += "&amp;byline=0&amp;autoplay=1&amp;title=0&amp;portrait=0";
		
		var html = "<iframe src="+url+" width='"+width+"' height='"+height+"' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
		
		jQuery("#"+divID).html(html);
		
		//get the player object
		var iframe = jQuery("#"+divID + " iframe")[0];
		
		g_player = Froogaloop(iframe);

		g_player.addEvent('ready', function(){
			
			if(g_player){
				g_isPlayerReady = true;
				initEvents();
			}
			
		});
		
		g_lastCotnainerID = divID;		
	}
	
	/**
	 * init events
	 */
	function initEvents(){
		
		if(!g_player)
			return(false);
				
		//set "cuechange" event
		g_player.addEvent('cuechange', function(){
			
			if(g_cueChangeAutoplay == true)			
				t.play();
			
		});
		
		//set "play" event
		g_player.addEvent('play', function(){
			g_objThis.trigger(t.events.START_PLAYING);
		});
		
		//set "pause event"
		g_player.addEvent('pause', function(){
			g_objThis.trigger(t.events.STOP_PLAYING);
		});
		
		g_player.addEvent('finish', function(){
			g_objThis.trigger(t.events.STOP_PLAYING);
			g_objThis.trigger(t.events.VIDEO_ENDED);
		});
		
	}
	
	
	/**
	 * do some command
	 */
	this.doCommand = function(command){
		
		if(g_player == null)
			return(false);
		
		if(g_isPlayerReady == false)
			return(false);
		
		switch(command){
			default:
				g_player.api(command);
			break;
		}
		
	}
	
	/**
	 * do pause command
	 */
	this.pause = function(){
		t.doCommand("pause");
	}
	
	/**
	 * do play command
	 */
	this.play = function(){
		t.doCommand("play");
	}
	
	/**
	 * desrtoy the player and empty the div
	 */
	this.destroy = function(){
		
		if(g_player){
			g_player.api("unload");
			g_player = null;
			g_isPlayerReady = false;
		}
		
		if(g_lastCotnainerID){
			jQuery("#" + g_lastCotnainerID).html("");			
		}
	
	}
	
	/**
	 * put the vimeo video
	 */
	this.putVideo = function(divID, videoID, width, height, isAutoplay){
		
		if(isFroogaloopActive()){
			putVideoActually(divID, videoID, width, height, isAutoplay);
			return(true);
		}
		
		
		//if no API present, wait for the API being ready
		this.loadAPI();
		g_intHandle = setInterval(function(){
			
			if(isFroogaloopActive()){
				putVideoActually(divID, videoID, width, height, isAutoplay);
				clearInterval(g_intHandle);
			}
			
		}, 500);
		
	}
	
	
	/**
	 * get if the player is ready
	 */
	this.isPlayerReady = function(){
		
		if(g_isPlayerReady && g_player)
			return(true);
	
		return(false);
	}	
	
	/**
	 * change the video
	 */
	this.changeVideo = function(videoID, isAutoplay){
		
		if(t.isPlayerReady() == false)
			return(false);
		
		g_cueChangeAutoplay = isAutoplay;
		
		g_player.api("loadVideo", videoID);
	}
	
	
	/**
	 * get video images
	 */
	this.getVideoImages = function(videoID, itemIndex, onSuccessFunction){
		
		var url = location.protocol+"//vimeo.com/api/v2/video/"+videoID+".json";
		jQuery.get(url, {}, function(data){
			var obj = {};
			obj.preview = data[0].thumbnail_large;
			obj.thumb = data[0].thumbnail_medium;
			onSuccessFunction(itemIndex, obj);
		});
	}
	
	
}


/** -------------- Youtube API class ---------------------*/

function UGYoutubeAPI(){
	
	this.isAPILoaded = false;	
	var t = this, g_player = null, g_intHandle, g_isPlayerReady = false;
	var g_objThis = jQuery(this), g_prevState = -1, g_lastContainerID;	//unstarted
	
	var g_options = {
			video_youtube_showinfo: true
	}
	
	this.events = {
		START_PLAYING: "start_playing",
		STOP_PLAYING: "stop_playing",
		VIDEO_ENDED: "video_ended"
	};
	
	
	/**
	 * actually put the video
	 */
	function putVideoActually(divID, videoID, width, height, isAutoplay){
				
		if(g_player && g_isPlayerReady){			
			g_player.destroy();
		}
		
		var playerVars = {
			controls:2,
			showinfo:g_options.video_youtube_showinfo, 
			rel:0
		};
		
		if(isAutoplay === true)
			playerVars.autoplay = 1;
			
		g_isPlayerReady = false;

		g_player = new YT.Player(divID, {
		      height: height,
		      width: width,
		      videoId: videoID,
		      playerVars: playerVars,
		      events: {
		        'onReady': onPlayerReady,
		        'onStateChange': onPlayerStateChange
		      }
		 });
		
		g_lastContainerID = divID;
	}
	
	
	/**
	 * check if YT active
	 */
	function isYTActive(){
		
		if(typeof YT != "undefined" && typeof YT.Player != "undefined")
			return(true);
		
		return(false);
	}
	
	
	/**
	 * set options
	 */
	this.setOptions = function(objOptions){
		g_options = jQuery.extend(g_options, objOptions);
	}
	
	
	/**
	 * put the youtube video
	 */
	this.putVideo = function(divID, videoID, width, height, isAutoplay){
		
		if(isYTActive()){
			putVideoActually(divID, videoID, width, height, isAutoplay);
			return(true);
		}
		
		//if no API present, wait for the API being ready
		this.loadAPI();
		g_intHandle = setInterval(function(){
			
			if(isYTActive()){
				putVideoActually(divID, videoID, width, height, isAutoplay);
				clearInterval(g_intHandle);
			}
			
		}, 500);
		
	}
	
	
	/**
	 * on player ready event
	 */
	function onPlayerReady(){
		g_isPlayerReady = true;
	}
	
	
	/**
	 * on player state change event
	 * trigger events
	 */
	function onPlayerStateChange(){
		
		if(typeof g_player.getPlayerState != "function"){
			trace("Youtube API error: can't get player state");
			return(false);
		}
		
		var state = g_player.getPlayerState();
		
		switch(state){
			case YT.PlayerState.PLAYING:
				g_objThis.trigger(t.events.START_PLAYING);
			break;
			case YT.PlayerState.ENDED:
				g_objThis.trigger(t.events.STOP_PLAYING);					
				g_objThis.trigger(t.events.VIDEO_ENDED);
			break;
			default:
				if(g_prevState == YT.PlayerState.PLAYING)
					g_objThis.trigger(t.events.STOP_PLAYING);					
			break;
		}
		
		g_prevState = state;
	}
	
	
	/**
	 * load youtube API
	 */
	this.loadAPI = function(){
		
		if(g_ugYoutubeAPI.isAPILoaded == true)
			return(true);
		
		if(typeof YT != "undefined"){
			g_ugYoutubeAPI.isAPILoaded = true;
			return(true);
		}
		
		g_ugFunctions.loadJs("https://www.youtube.com/player_api", false);
		
		g_ugYoutubeAPI.isAPILoaded = true;	
		
	}
	
	
	/**
	 * do some command
	 */
	this.doCommand = function(command, opt1){
		
		if(!g_player)
			return(true);
		
		if(g_isPlayerReady == false)
			return(false);
		
		switch(command){
			case "play":
				if(typeof g_player.playVideo != "function")
					return(false);
				
				g_player.playVideo();
			break;
			case "pause":
				if(typeof g_player.pauseVideo != "function")
					return(false);
				
				g_player.pauseVideo();
			break;
			case "seek":
				if(typeof g_player.seekTo != "function")
					return(false);

				g_player.seekTo(opt1);
			break;
			case "stopToBeginning":
				var state = g_player.getPlayerState();
				
				g_player.pauseVideo();
				
				switch(state){
					case YT.PlayerState.PLAYING:
					case YT.PlayerState.ENDED:
					case YT.PlayerState.PAUSED:
						g_player.seekTo(0);
					break;
				}
			break;
		}
	}
	
	/**
	 * play video
	 */
	this.play = function(){
		t.doCommand("play");		
	}
	
	/**
	 * stop the video
	 */
	this.pause = function(){
		t.doCommand("pause");
	}
	
	/**
	 * destroy player
	 */
	this.destroy = function(){
		try{
			
			if(g_player){
				g_isPlayerReady = false;	
				g_player.clearVideo();
				g_player.destroy();
			}
			
		}catch(objError){
			
			jQuery("#"+g_lastContainerID).html("");
			
		}
		
	}
	
	/**
	 * stop the video and seek to start
	 */
	this.stopToBeginning = function(){
		t.doCommand("stopToBeginning");
	}
	
	/**
	 * change the video
	 */
	this.changeVideo = function(videoID, isAutoplay){
		
		if(t.isPlayerReady() == false)
			return(false);
		
		if(isAutoplay && isAutoplay == true)
			g_player.loadVideoById(videoID, 0, "large");
		else
			g_player.cueVideoById(videoID, 0, "large");
	}
	
	
	/**
	 * get if the player is ready
	 */
	this.isPlayerReady = function(){
		
		if(g_isPlayerReady && g_player)
			return(true);
	
		return(false);
	}
	
		
	
	/**
	 * get preview and thumbs images according the ID
	 */
	this.getVideoImages = function(videoID){
		var obj = {};
		obj.preview = "https://i.ytimg.com/vi/"+videoID+"/sddefault.jpg";
		obj.thumb = "https://i.ytimg.com/vi/"+videoID+"/default.jpg";
		return(obj);
	}
	
	
}

/** -------------- Video Player Class ---------------------*/


function UGVideoPlayer(){
	
	var t = this, g_galleryID, g_objThis = jQuery(this), g_functions = new UGFunctions();
	var g_youtubeAPI = new UGYoutubeAPI(), g_vimeoAPI = new UGVimeoAPI();
	var g_html5API = new UGHtml5MediaAPI(), g_soundCloudAPI = new UGSoundCloudAPI(), g_wistiaAPI = new UGWistiaAPI();
	var g_objPlayer, g_objYoutube, g_objVimeo, g_objHtml5, g_objButtonClose, g_objSoundCloud, g_objWistia;
	var g_activePlayerType = null;
	
	var g_options = {
			video_enable_closebutton: true
	};
	
	this.events = {
			SHOW: "video_show",
			HIDE: "video_hide",
			PLAY_START: "video_play_start",
			PLAY_STOP: "video_play_stop",
			VIDEO_ENDED: "video_ended"
	};
	
	var g_temp = {
			standAloneMode: false,
			youtubeInnerID:"",
			vimeoPlayerID:"",
			html5PlayerID:"",
			wistiaPlayerID:"",
			soundCloudPlayerID:""
	};
	
	
	/**
	 * init the object
	 */
	this.init = function(optOptions, isStandAloneMode, galleryID){
		g_galleryID = galleryID;
		
		if(!g_galleryID)
			throw new Error("missing gallery ID for video player, it's a must!");
			
		g_options =  jQuery.extend(g_options, optOptions);
		
		g_youtubeAPI.setOptions(g_options);
		
		if(isStandAloneMode && isStandAloneMode == true)
			g_temp.standAloneMode = true;
		
	}
	
	
	/**
	 * set the player html
	 */
	this.setHtml = function(objParent){
		
		g_temp.youtubeInnerID = g_galleryID + "_youtube_inner";
		g_temp.vimeoPlayerID = g_galleryID + "_videoplayer_vimeo";
		g_temp.html5PlayerID = g_galleryID + "_videoplayer_html5";
		g_temp.wistiaPlayerID = g_galleryID + "_videoplayer_wistia";
		g_temp.soundCloudPlayerID = g_galleryID + "_videoplayer_soundcloud";
		
		
		var html = "<div class='ug-videoplayer' style='display:none'>";
		html += "<div class='ug-videoplayer-wrapper ug-videoplayer-youtube' style='display:none'><div id='"+g_temp.youtubeInnerID+"'></div></div>";
		html += "<div id='"+g_temp.vimeoPlayerID+"' class='ug-videoplayer-wrapper ug-videoplayer-vimeo' style='display:none'></div>";
		html += "<div id='"+g_temp.html5PlayerID+"' class='ug-videoplayer-wrapper ug-videoplayer-html5'></div>";
		html += "<div id='"+g_temp.soundCloudPlayerID+"' class='ug-videoplayer-wrapper ug-videoplayer-soundcloud'></div>";
		html += "<div id='"+g_temp.wistiaPlayerID+"' class='ug-videoplayer-wrapper ug-videoplayer-wistia'></div>";
		
		if(g_temp.standAloneMode == false && g_options.video_enable_closebutton == true)
			html += "<div class='ug-videoplayer-button-close'></div>";
		
		html += "</div>";
		
		objParent.append(html);
		
		g_objPlayer = objParent.children(".ug-videoplayer");
		g_objYoutube = g_objPlayer.children(".ug-videoplayer-youtube");
		g_objVimeo = g_objPlayer.children(".ug-videoplayer-vimeo");
		g_objHtml5 = g_objPlayer.children(".ug-videoplayer-html5");
		g_objSoundCloud = g_objPlayer.children(".ug-videoplayer-soundcloud");
		g_objWistia = g_objPlayer.children(".ug-videoplayer-wistia");
		
		if(g_temp.standAloneMode == false && g_options.video_enable_closebutton == true)
			g_objButtonClose = g_objPlayer.children(".ug-videoplayer-button-close")
	}

	
	function __________EVENTS___________(){};	
	
	/**
	 * on close button click event
	 */
	function onCloseButtonClick(){
		t.hide();
	}
	
	/**
	 * on some video play start
	 */
	function onPlayStart(){
		
		g_objThis.trigger(t.events.PLAY_START);
		
		if(g_objButtonClose)
			g_objButtonClose.hide();
	}
	
	
	/**
	 * on some video play stop
	 */
	function onPlayStop(){
		
		g_objThis.trigger(t.events.PLAY_STOP);
		
		if(g_objButtonClose)
			g_objButtonClose.show();
	}
	
	/**
	 * on video ended
	 */
	function onVideoEnded(){
		
		g_objThis.trigger(t.events.VIDEO_ENDED);
		
	}

	
	/**
	 * init events
	 */
	function initEvents(){
		
		//close button events
		if(g_objButtonClose){
			g_functions.setButtonMobileReady(g_objButtonClose);		
			g_functions.setButtonOnClick(g_objButtonClose, onCloseButtonClick);					
		}
		
		//youtube events
		jQuery(g_youtubeAPI).on(g_youtubeAPI.events.START_PLAYING, onPlayStart);
		jQuery(g_youtubeAPI).on(g_youtubeAPI.events.STOP_PLAYING, onPlayStop);
		jQuery(g_youtubeAPI).on(g_youtubeAPI.events.VIDEO_ENDED, onVideoEnded);
		
		//vimeo events
		jQuery(g_vimeoAPI).on(g_vimeoAPI.events.START_PLAYING, onPlayStart);
		jQuery(g_vimeoAPI).on(g_vimeoAPI.events.STOP_PLAYING, onPlayStop);
		jQuery(g_vimeoAPI).on(g_vimeoAPI.events.VIDEO_ENDED, onVideoEnded);
		
		//html5 video events
		jQuery(g_html5API).on(g_html5API.events.START_PLAYING, onPlayStart);
		jQuery(g_html5API).on(g_html5API.events.STOP_PLAYING, onPlayStop);
		jQuery(g_html5API).on(g_html5API.events.VIDEO_ENDED, onVideoEnded);
		
		jQuery(g_soundCloudAPI).on(g_soundCloudAPI.events.START_PLAYING, onPlayStart);
		jQuery(g_soundCloudAPI).on(g_soundCloudAPI.events.STOP_PLAYING, onPlayStop);
		jQuery(g_soundCloudAPI).on(g_soundCloudAPI.events.VIDEO_ENDED, onVideoEnded);
		
		jQuery(g_wistiaAPI).on(g_wistiaAPI.events.START_PLAYING, onPlayStart);
		jQuery(g_wistiaAPI).on(g_wistiaAPI.events.STOP_PLAYING, onPlayStop);
		jQuery(g_wistiaAPI).on(g_wistiaAPI.events.VIDEO_ENDED, onVideoEnded);
		
	}
	
	
	/**
	 * destroy the video player events
	 */
	this.destroy = function(){
		
		if(g_objButtonClose){
			g_objButtonClose.off("click");
			g_objButtonClose.off("touchend");
		}
		
		//youtube events
		jQuery(g_youtubeAPI).off(g_youtubeAPI.events.START_PLAYING);
		jQuery(g_youtubeAPI).off(g_youtubeAPI.events.STOP_PLAYING);
		
		//vimeo events
		jQuery(g_vimeoAPI).off(g_vimeoAPI.events.START_PLAYING);
		jQuery(g_vimeoAPI).off(g_vimeoAPI.events.STOP_PLAYING);
		
		//html5 video events
		jQuery(g_html5API).off(g_html5API.events.START_PLAYING);
		jQuery(g_html5API).off(g_html5API.events.STOP_PLAYING);
		
		jQuery(g_soundCloudAPI).off(g_soundCloudAPI.events.START_PLAYING, onPlayStart);
		jQuery(g_soundCloudAPI).off(g_soundCloudAPI.events.STOP_PLAYING, onPlayStop);
		
		jQuery(g_wistiaAPI).off(g_wistiaAPI.events.START_PLAYING, onPlayStart);
		jQuery(g_wistiaAPI).off(g_wistiaAPI.events.STOP_PLAYING, onPlayStop);
		
		g_activePlayerType = null;
	}
	
	
	/**
	 * init events
	 */
	this.initEvents = function(){
		
		initEvents();
	}
	
	
	/**
	 * set element size and position the button
	 */
	this.setSize = function(width, height){
		
		g_functions.setElementSize(g_objPlayer, width, height);
		
		if(g_objButtonClose)
			g_functions.placeElement(g_objButtonClose, "right", "top");
		
	}
	
	
	/**
	 * set video player position
	 */
	this.setPosition = function(left, top){
		g_functions.placeElement(g_objPlayer, left, top);
	}
	
	/**
	 * get video player object for placing
	 */
	this.getObject = function(){
		return(g_objPlayer);
	}
	
	
	/**
	 * show the player
	 */
	this.show = function(){		
		
		if(t.isVisible() == true)
			return(true);
		
		g_objPlayer.show();
		
		g_objPlayer.fadeTo(0,1);
		
		if(g_objButtonClose)
			g_objButtonClose.show();
				
		g_objThis.trigger(t.events.SHOW);
	}
		
	
	/**
	 * hide the player
	 */
	this.hide = function(){
		
		if(t.isVisible() == false)
			return(true);
		
		//pause all players
		stopAndHidePlayers();
		
		g_activePlayerType = null;
		
		g_objPlayer.hide();
		
		g_objThis.trigger(t.events.HIDE);
	}
	
	
	/**
	 * get active player
	 */
	this.getActiveAPI = function(){
		
		switch(g_activePlayerType){
			case "youtube":
				return g_youtubeAPI;
			break;
			case "vimeo":
				return g_vimeoAPI;
			break;
			case "wistia":
				return g_wistiaAPI;
			break;
			case "soundcloud":
				return g_soundCloudAPI;
			break;
			case "html5":
				return g_html5API;
			break;
			default:
				return null;
			break;
		}
	}
	
	
	/**
	 * pause active player if playing
	 */
	this.pause = function(){
		
		var activeAPI = t.getActiveAPI();
		if(activeAPI == null)
			return(false);
		
		if(typeof activeAPI.pause == "function")
			activeAPI.pause();
			
	}
	
	
	/**
	 * return if the player is visible
	 */
	this.isVisible = function(){
		
		return g_objPlayer.is(":visible");
	}
	
	
	/**
	 * stop and hide other elements except some
	 */
	function stopAndHidePlayers(except){
		
		var arrPlayers = ["youtube", "vimeo", "html5", "soundcloud", "wistia"];
		for(var index in arrPlayers){
			var player = arrPlayers[index];
			if(player == except)
				continue;
			switch(player){
				case "youtube":		
					g_youtubeAPI.pause();
					g_youtubeAPI.destroy();	
					g_objYoutube.hide();
				break;
				case "vimeo":
					g_vimeoAPI.pause();
					g_vimeoAPI.destroy();
					g_objVimeo.hide();
				break;
				case "html5":
					g_html5API.pause();
					g_objHtml5.hide();
				break;
				case "soundcloud":
					g_soundCloudAPI.pause();
					g_soundCloudAPI.destroy();
					g_objSoundCloud.hide();
				break;
				case "wistia":
					g_wistiaAPI.pause();
					g_objWistia.hide();
				break;
			}
		}
		
	}
	
	
	/**
	 * play youtube inside the video, isAutoplay - true by default
	 */
	this.playYoutube = function(videoID, isAutoplay){
				
		if(typeof isAutoplay == "undefined")
			var isAutoplay = true;
		
		stopAndHidePlayers("youtube");
		
		g_objYoutube.show();
		
		var objYoutubeInner = g_objYoutube.children("#"+g_temp.youtubeInnerID);
		if(objYoutubeInner.length == 0)
			g_objYoutube.append("<div id='"+g_temp.youtubeInnerID+"'></div>");
			
		
		if(g_youtubeAPI.isPlayerReady() == true && g_temp.standAloneMode == true)
			g_youtubeAPI.changeVideo(videoID, isAutoplay);
		else{
			g_youtubeAPI.putVideo(g_temp.youtubeInnerID, videoID, "100%", "100%", isAutoplay);
		}
		
		g_activePlayerType = "youtube";
	}
	
	
	/**
	 * play vimeo
	 */
	this.playVimeo = function(videoID, isAutoplay){
		
		if(typeof isAutoplay == "undefined")
			var isAutoplay = true;
		
		stopAndHidePlayers("vimeo");
		
		g_objVimeo.show();

		g_vimeoAPI.putVideo(g_temp.vimeoPlayerID, videoID, "100%", "100%", isAutoplay);
		
		/*
		if(g_vimeoAPI.isPlayerReady() && g_temp.standAloneMode == true){
			g_vimeoAPI.changeVideo(videoID, isAutoplay);
		}
		else
			g_vimeoAPI.putVideo(g_temp.vimeoPlayerID, videoID, "100%", "100%", isAutoplay);
		 */
		
		g_activePlayerType = "vimeo";

	}
	
	
	/**
	 * play html5 video
	 */
	this.playHtml5Video = function(ogv, webm, mp4, posterImage, isAutoplay){
		
		if(typeof isAutoplay == "undefined")
			var isAutoplay = true;
				
		stopAndHidePlayers("html5");
		
		g_objHtml5.show();
		
		//trace(posterImage);
		
		var data = {
				ogv: ogv, 
				webm: webm, 
				mp4: mp4, 
				posterImage: posterImage 
			};
		
		g_html5API.putVideo(g_temp.html5PlayerID, data, "100%", "100%", isAutoplay);
		
		g_activePlayerType = "html5";

	}

	/**
	 * play sound cloud
	 */
	this.playSoundCloud = function(trackID, isAutoplay){
		
		if(typeof isAutoplay == "undefined")
			var isAutoplay = true;
		
		stopAndHidePlayers("soundcloud");
		
		g_objSoundCloud.show();
		
		g_soundCloudAPI.putSound(g_temp.soundCloudPlayerID, trackID, "100%", "100%", isAutoplay);

		g_activePlayerType = "soundcloud";
	
	}
	
	
	/**
	 * play sound cloud
	 */
	this.playWistia = function(videoID, isAutoplay){
		
		if(typeof isAutoplay == "undefined")
			var isAutoplay = true;
		
		stopAndHidePlayers("wistia");
		
		g_objWistia.show();
		
		g_wistiaAPI.putVideo(g_temp.wistiaPlayerID, videoID, "100%", "100%", isAutoplay);
	
		g_activePlayerType = "wistia";

	}
	
}


var g_ugYoutubeAPI = new UGYoutubeAPI();
var g_ugVimeoAPI = new UGVimeoAPI();
var g_ugHtml5MediaAPI = new UGHtml5MediaAPI();
var g_ugSoundCloudAPI = new UGSoundCloudAPI();
var g_ugWistiaAPI = new UGWistiaAPI();


	/**
	 * prototype gallery funciton
	 */
	jQuery.fn.unitegallery = function(options){
		var element = jQuery(this);
		var galleryID = "#" + element.attr("id");
		
		if(!options)
			var options = {};
				
		var objGallery = new UniteGalleryMain();
		objGallery.run(galleryID, options);
		
		var api = new UG_API(objGallery);
		
		return(api);
	}

	
	/**
	 * check for min jquery version
	 */
	function ugCheckForMinJQueryVersion(){
		
		var isMinJQuery = g_ugFunctions.checkMinJqueryVersion("1.8.0");
		
		if(isMinJQuery == false)
			throw new Error("The gallery can run from jquery 1.8 You have jQuery "+jQuery.fn.jquery+" Please update your jQuery library.");
	}
	
	
	/**
	 * check for errors function
	 */
	function ugCheckForErrors(galleryID, type){

		/**
		 * check for jquery presents
		 */
		function checkForJqueryPresents(){
			if(typeof jQuery == "undefined")
				throw new Error("jQuery library not included");
		}
		
		/**
		 * check for double jquery error
		 */
		function checkForDoubleJQuery(){

			if(typeof jQuery.fn.unitegallery == "function")
				return(true);
			
			var errorMessage = "You have some jquery.js library include that comes after the gallery files js include.";
			errorMessage += "<br> This include eliminates the gallery libraries, and make it not work.";
			
			if(type == "cms"){
				errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Gallery Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
				errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
			}else{
				errorMessage += "<br><br> Please find and remove this jquery.js include and the gallery will work. <br> * There should be only one jquery.js include before all other js includes in the page.";			
			}
			
			
			throw new Error(errorMessage);
		}
		
		try{
			if(type == "jquery"){
				checkForJqueryPresents();
				ugCheckForMinJQueryVersion();
			}else{
				ugCheckForMinJQueryVersion();
				checkForDoubleJQuery();
			}
			
		}catch(objError){
			
			var message = objError.message;
			message = "Unite Gallery Error: "+ message;
			message = "<div style='font-size:16px;color:#BC0C06;max-width:900px;border:1px solid red;padding:10px;'>" + message + "</div>"
			
			if(type == "jquery"){
				var objGallery = document.getElementById(galleryID);
				objGallery.innerHTML = message;
				objGallery.style.display = "block";
			}
			else
				jQuery(galleryID).show().html(message);
			
			return(false);
		}
		
		return(true);
	}

	
function UniteGalleryMain(){
	
	var t = this;
	var g_galleryID;
	var g_objGallery = jQuery(t), g_objWrapper, g_objParent;
	var g_objThumbs, g_objSlider, g_functions = new UGFunctions(), g_objTabs, g_objLoadMore;
	var g_arrItems = [], g_numItems, g_selectedItem = null, g_selectedItemIndex = -1;
	var g_objTheme, g_objCache = {};
	
	this.events = {
			ITEM_CHANGE: "item_change",
			SIZE_CHANGE: "size_change",
			ENTER_FULLSCREEN: "enter_fullscreen",
			EXIT_FULLSCREEN: "exit_fullscreen",
			START_PLAY: "start_play",
			STOP_PLAY: "stop_play",
			PAUSE_PLAYING: "pause_playing",
			CONTINUE_PLAYING: "continue_playing",
			SLIDER_ACTION_START: "slider_action_start",
			SLIDER_ACTION_END: "slider_action_end",
			ITEM_IMAGE_UPDATED: "item_image_updated",
			GALLERY_KEYPRESS: "gallery_keypress",
			GALLERY_BEFORE_REQUEST_ITEMS: "gallery_before_request_items",	//before ajax load items
			OPEN_LIGHTBOX:"open_lightbox",
			CLOSE_LIGHTBOX:"close_lightbox"			
	};
	
	
	//set the default gallery options
	var g_options = {				
			gallery_width:900,							//gallery width		
			gallery_height:500,							//gallery height
			
			gallery_min_width: 150,						//gallery minimal width when resizing
			gallery_min_height: 100,					//gallery minimal height when resizing
			
			gallery_theme:"default",					//default,compact,grid,slider - select your desired theme from the list of themes.
			gallery_skin:"default",						//default, alexis etc... - the global skin of the gallery. Will change all gallery items by default.
			
			gallery_images_preload_type:"minimal",		//all , minimal , visible - preload type of the images.
														//minimal - only image nabours will be loaded each time.
														//visible - visible thumbs images will be loaded each time.
														//all - load all the images first time.
			
			gallery_autoplay:false,						//true / false - begin slideshow autoplay on start
			gallery_play_interval: 3000,				//play interval of the slideshow
			gallery_pause_on_mouseover: true,			//true,false - pause on mouseover when playing slideshow true/false
			
			gallery_mousewheel_role:"zoom",				//none, zoom, advance
			gallery_control_keyboard: true,				//true,false - enable / disble keyboard controls
			gallery_carousel:true,						//true,false - next button on last image goes to first image.
			
			gallery_preserve_ratio: true,				//true, false - preserver ratio when on window resize
			gallery_background_color: "",				//set custom background color. If not set it will be taken from css.
			gallery_debug_errors:false,					//show error message when there is some error on the gallery area.
			gallery_shuffle:false,						//randomise position of items at start.
			gallery_urlajax:null,						//ajax url for requesting new items etc.
			gallery_enable_tabs: false,					//enable/disable category tabs
			gallery_enable_loadmore: false,				//enable / disable loadmore button
			gallery_enable_cache: true,					//enable caching items
			gallery_initial_catid: ""					//initial category id (for caching)
	};
	
	//gallery_control_thumbs_mousewheel
	
	var g_temp = {					//temp variables
		objCustomOptions:{},
		isAllItemsPreloaded:false,	//flag that tells that all items started preloading
		isFreestyleMode:false,		//no special html additions
		lastWidth:0,
		lastHeigh:0,
		handleResize: null,
		isInited: false,
		isPlayMode: false,
		isPlayModePaused: false,
		playTimePassed: 0,
		playTimeLastStep: 0,
		playHandle: "",
		playStepInterval: 33,
		objProgress: null,
		isFakeFullscreen: false,
		thumbsType:null,
		isYoutubePresent:false,			//flag if present youtube items
		isVimeoPresent:false,			//flag if present vimeo items
		isHtml5VideoPresent:false,		//flag if present html5 video items
		isSoundCloudPresent:false,		//flag if present soundcloud items
		isWistiaPresent: false,			//flag if some wistia movie present
		resizeDelay: 100,
		isRunFirstTime: true,
		originalOptions: {},
		funcCustomHeight: null			//custom height function, set by the theme if needed
	};
	
	
	
	function __________INIT_GALLERY_______(){};
	
	/**
	 * get theme function from theme name
	 */
	function getThemeFunction(themeName){
		 var themeFunction = themeName;
		if(themeFunction.indexOf("UGTheme_") == -1)
			 themeFunction = "UGTheme_" + themeFunction;
		
		return(themeFunction);
	}

	/**
	 * init the theme
	 */
	function initTheme(objCustomOptions){
		 
		//set theme function:
		 if(objCustomOptions.hasOwnProperty("gallery_theme"))
			 g_options.gallery_theme = objCustomOptions.gallery_theme;
		 else{
			 var defaultTheme = g_options.gallery_theme;
			 if(g_ugFunctions.isThemeRegistered(defaultTheme) == false)
				 g_options.gallery_theme = g_ugFunctions.getFirstRegisteredTheme();
		 }
		 
		 var themeFunction = getThemeFunction(g_options.gallery_theme);
		 
		 try{
			 g_options.gallery_theme = eval(themeFunction);
		 }catch(e){
			 //check registered themes
		 };
		 
		 g_options.gallery_theme = eval(themeFunction);
		 
		 //init the theme
		 g_objTheme = new g_options.gallery_theme();
		 g_objTheme.init(t, objCustomOptions);
	}
	
	
	/**
	 * reset all the options for the second time run
	 */
	function resetOptions(){
	   	 
		 g_options = jQuery.extend({}, g_temp.originalOptions);
		 
		 g_selectedItemIndex = -1;
		 g_selectedItem = null;
		 g_objSlider = undefined;
		 g_objThumbs = undefined;
		 g_objSlider = undefined; 
	}
	
	
	/**
	 * check for some errors and fire error if needed
	 */
	function checkForStartupErrors(){
		
		//protection agains old jquery version
		try{
			ugCheckForMinJQueryVersion();
		}catch(e){
			throwErrorShowMessage(e.message);
		}
		
		//protection against some jquery ui function change
	     if(typeof g_objWrapper.outerWidth() == "object")
	    	 throwErrorShowMessage("You have some buggy script. most chances jquery-ui.js that destroy jquery outerWidth, outerHeight functions. The gallery can't run. Please update jquery-ui.js to latest version.");
	     
	     //check for late jquery include
	     setTimeout(function(){ugCheckForErrors(g_galleryID, "cms")} , 5000);
	     
	}
	
	
	
	/**
	 *  the gallery
	 */
	function runGallery(galleryID, objCustomOptions, htmlItems, cacheID){
			
			var isCustomOptions = (typeof objCustomOptions == "object");
			
			if(isCustomOptions)
		      g_temp.objCustomOptions = objCustomOptions;
			 			 
		     if(g_temp.isRunFirstTime == true){
				
		    	 g_galleryID = galleryID;
				 g_objWrapper = jQuery(g_galleryID);
				 if(g_objWrapper.length == 0){
					 trace("div with id: "+g_galleryID+" not found");
					 return(false);
				 }

				 g_objParent = g_objWrapper.parent();
				 
				 checkForStartupErrors();
				 
				 g_temp.originalOptions = jQuery.extend({}, g_options);
				 
				 //merge options
				 if(isCustomOptions)
					 g_options = jQuery.extend(g_options, objCustomOptions);
				 
				 //cache items
				 if(g_options.gallery_enable_cache == true && g_options.gallery_initial_catid)
					 cacheItems(g_options.gallery_initial_catid);
				
				 //set size class
				 t.setSizeClass();
				 
				 //fill arrItems
				 var objItems = g_objWrapper.children();
				 
				 fillItemsArray(objItems);
				 loadAPIs();
				 
				 //hide images:
				 g_objWrapper.find("img").fadeTo(0,0).hide();
				 g_objWrapper.show();
		
				 clearInitData();
		    	 
		     }else{		//reset options - not first time run
		    	 
		    	 t.destroy();
		    	 
		    	 resetOptions();

		    	 g_options = jQuery.extend(g_options, g_temp.objCustomOptions);
	    		 
		    	 if(htmlItems){
		    		 
		    		 //cache items
		    		 if(cacheID && g_options.gallery_enable_cache == true)
		    			 cacheItems(cacheID, htmlItems);
		    		 
		    		 if(htmlItems == "noitems"){
		    			 showErrorMessage("No items in this category","");
		    			 return(false);
			    	 }
		    		 
		    		 g_objWrapper.html(htmlItems);
		    		 
		    		 var objItems = g_objWrapper.children();
		    		 fillItemsArray(objItems);
					 
		    		 loadAPIs();
					 
					 g_objWrapper.children().fadeTo(0,0).hide();
					 
					 g_objWrapper.show();
					 clearInitData();
		    	 }
		     
		     }
		     
			 //init tabs
			 if(g_temp.isRunFirstTime == true && g_options.gallery_enable_tabs == true){
				 g_objTabs = new UGTabs();
				 g_objTabs.init(t, g_options);
			 }
			 
			 //init loadmore button
			 if(g_temp.isRunFirstTime == true && g_options.gallery_enable_loadmore == true){
				 g_objLoadMore = new UGLoadMore();
				 g_objLoadMore.init(t, g_options);
			 }
			 
			 //modify and verify the params
			 if(isCustomOptions)
				 modifyInitParams(g_temp.objCustomOptions);
			 			 
			 validateParams();
			 
			 //shuffle items
			 if(g_options.gallery_shuffle == true)
				 t.shuffleItems();
			 
			 //init the theme
			 initTheme(g_temp.objCustomOptions);
			 			 				 
			 //set gallery html elements
			 setGalleryHtml();

			 //set html properties to all elements
			 setHtmlObjectsProperties();
			 
			 var galleryWidth = g_objWrapper.width();
			 
			 if(galleryWidth == 0){
				 g_functions.waitForWidth(g_objWrapper, runGalleryActually);
			 }else
				 runGalleryActually();
			 
	}
	
	
	/**
	 * actually run the gallery
	 */
	function runGalleryActually(){
		 
		t.setSizeClass();
		
		if(g_temp.isFreestyleMode == false){
			 	
			 if(g_options.gallery_preserve_ratio == true)
				 setHeightByOriginalRatio();
		 }
		 
		 g_objTheme.run();
		 
		 if(g_objTabs && g_temp.isRunFirstTime)
			 g_objTabs.run();
		 
		 
		 preloadBigImages();
		 
		 initEvents();
		 
		 //select first item
		 if(g_numItems > 0) 
			 t.selectItem(0);
		 
		 
		 //set autoplay
		 if(g_options.gallery_autoplay == true)
			 t.startPlayMode();
		 
		 g_temp.isRunFirstTime = false;
		
	}
	
	
	/**
	 * 
	 * show error message
	 */
	function showErrorMessage(message, prefix){

		if(typeof prefix == "undefined")
			var prefix = "<b>Unite Gallery Error: </b>";			
		else
			prefix = "<b>"+prefix+": </b>";
		
		message = prefix + message;
		
		var html = "<div class='ug-error-message-wrapper'><div class='ug-error-message'>" + message + "</div></div>";
		
		g_objWrapper.children().remove();
		
		g_objWrapper.html(html);
		g_objWrapper.show();		
	}
	
	/**
	 * show error message and throw error
	 */
	function throwErrorShowMessage(message){
		showErrorMessage(message);
		throw new Error(message);
	}
	
	
	/**
	 * 
	 * @param objParams
	 */
	 function modifyInitParams(){
		 
		 //set default for preloading
		 if(!g_options.gallery_images_preload_type)
			 g_options.gallery_images_preload_type = "minimal";
		 
		 //normalize gallery min height and width
		 if(g_options.gallery_min_height == undefined || g_options.gallery_height < g_options.gallery_min_height){
			 g_options.gallery_min_height = 0;
		 }
		 
		 if(g_options.gallery_min_width == undefined || g_options.gallery_width < g_options.gallery_min_width){
			 g_options.gallery_min_width = 0;
		 }
		 
	 }

	
	/**
	 * validate the init parameters
	 */
	 function validateParams(){
		 
		 //validate theme:
		 if(!g_options.gallery_theme)
			 throw new Error("The gallery can't run without theme");
		 		 
		 //if(typeof g_options.theme != "function")
			 //throw new Error("Wrong theme function: " + g_options.theme.toString());
		 
		 //validate height and width
		 if(jQuery.isNumeric(g_options.gallery_height) && g_options.gallery_height < g_options.gallery_min_height)
			 throw new Error("The <b>gallery_height</b> option must be bigger then <b>gallery_min_height option</b>");
		 
		 if(g_options.gallery_width < g_options.gallery_min_width)
			 throw new Error("The <b>gallery_width</b> option must be bigger then <b>gallery_min_width option</b>");
		 
		 
	 }
	 
	 
	 /**
	 * set gallery html
	 */
	function setGalleryHtml(){
		
		 //add classes and divs
		 g_objWrapper.addClass("ug-gallery-wrapper");
		 
		 g_objWrapper.append("<div class='ug-overlay-disabled' style='display:none'></div>");
		 
		 t.setSizeClass();
	}
	
	
	/**
	 * if the thumbs panel don't exists, delete initial images from dom
	 */
	function clearInitData(){
		
		var objItems = g_objWrapper.children().remove();
	}
	
	
	/**
	 * store last gallery size
	 */
	function storeLastSize(){
		var objSize = t.getSize();
		
		g_temp.lastWidth = objSize.width;
		g_temp.lastHeight = objSize.height;
	}
	
	
	/**
	 * set gallery height by original ratio
	 */
	function setHeightByOriginalRatio(){
		
		var objSize = t.getSize();
				
		var ratio = objSize.width / objSize.height;
		
		if(ratio != objSize.orig_ratio){
			
			var newHeight = objSize.width / objSize.orig_ratio;
			newHeight = Math.round(newHeight);
			
			if(newHeight < g_options.gallery_min_height)
				newHeight = g_options.gallery_min_height;
			
			g_objWrapper.height(newHeight);
		}
	
	}

	
	/**
	 * set properties of the html objects
	 */
	function setHtmlObjectsProperties(){
		   
			var optionWidth = g_functions.getCssSizeParam(g_options.gallery_width);
			
		   //set size		
		   var objCss = {
				    //"width":optionWidth,		//make it work within tabs
				    "max-width":optionWidth,
					"min-width":g_functions.getCssSizeParam(g_options.gallery_min_width)
			};
		   
		   if(g_temp.isFreestyleMode == false){
			   
			   var galleryHeight = g_functions.getCssSizeParam(g_options.gallery_height);
			   objCss["height"] = galleryHeight;
		   
		   }else{
			   objCss["overflow"] = "visible";			   
		   }
		   
		   //set background color
		   if(g_options.gallery_background_color)
			   objCss["background-color"] = g_options.gallery_background_color;
		   
		   
		   g_objWrapper.css(objCss);
		   
	}

	
	/**
	 * fill item by html child
	 */
	function fillItemByChild(objChild){
		
		var isMobile = t.isMobileMode();
		
		 var tagname = objChild.prop("tagName").toLowerCase();
		 
		 //handle link wrapper
		 var itemLink = "";
		 if(tagname == "a"){
			 itemLink = objChild.attr("href");
			 objChild = objChild.children();
			 var tagname = objChild.prop("tagName").toLowerCase();				 
		 }
		 
		 var itemType = objChild.data("type");
		 if(itemType == undefined)
			 itemType = "image";
		 
		 var objItem = {};
		 objItem.type = itemType;
		 
		 if(tagname == "img"){
			 
			 //protection agains lasy load
			 var lasyLoadSrc = objChild.data("lazyload-src");
			 if(lasyLoadSrc && lasyLoadSrc != ""){
				 objChild.attr("src", lasyLoadSrc);
				 jQuery.removeData(objChild, "lazyload-src");
			 }
			 
			 //src is thumb
			 var urlImage = objChild.data("image");
			 var urlThumb = objChild.data("thumb");
			 
			 if(typeof(urlImage) == "undefined")
				 urlImage = null;
			 
			 if(typeof(urlThumb) == "undefined")
				 urlThumb = null;
			 
			 var imageSrc = objChild.attr("src");
			 
			 if(!urlImage)
				 urlImage = imageSrc;
				 
			 if(!urlThumb)
				 urlThumb = imageSrc;
			 
			 if(!urlThumb)
				 urlThumb = urlImage;
			 
			 if(!urlImage)
				 urlImage = urlThumb;
			 
			 objItem.urlThumb = urlThumb;
			 objItem.urlImage = urlImage;
			 				 
			 objItem.title = objChild.attr("alt");
			 
			 //always set thumb image to object
			 objItem.objThumbImage = objChild;
			 
			 objItem.objThumbImage.attr("src", objItem.urlThumb);
			 
		 }else{
			 
			 if(itemType == "image"){
				 trace("Problematic gallery item found:");
				 trace(objChild);
				 trace("Please look for some third party js script that could add this item to the gallery");
				 throw new Error("The item should not be image type");
			 }
			 
			 objItem.urlThumb = objChild.data("thumb");
			 objItem.title = objChild.data("title");
			 objItem.objThumbImage = null;
			 objItem.urlImage = objChild.data("image");
		 }
		 
		 //trace(isMobile);
		 
		 //check mobile version images
		 if(isMobile == true){
			 
			 var urlThumbMobile = objChild.data("thumb-mobile");
			 if(typeof urlThumbMobile != "undefined" && urlThumbMobile != ""){
				 objItem.urlThumb = urlThumbMobile;
 			 	 
				 if(tagname == "img")
 					 objChild.attr("src",objItem.urlThumb);
			 }
			 
			 var urlImageMobile = objChild.data("image-mobile");
			 if(typeof urlImageMobile != "undefined" && urlImageMobile != "")
				 objItem.urlImage = urlImageMobile;
		 }
		 
		 objItem.link = itemLink;
		 
		 //get description:
		 objItem.description = objChild.attr("title");
		 if(!objItem.description)				 
			 objItem.description = objChild.data("description");
		 
		 if(!objItem.description)
			 objItem.description = "";
		 
		 objItem.isNewAdded = false;		//fill outside
		 objItem.isLoaded = false;
		 objItem.isThumbImageLoaded = false;	//if the image loaded or error load
		 objItem.objPreloadImage = null;
		 objItem.isBigImageLoadStarted = false;
		 objItem.isBigImageLoaded = false;
		 objItem.isBigImageLoadError = false;			 
		 objItem.imageWidth = 0;
		 objItem.imageHeight = 0;
		 
		 //set thumb size
		 objItem.thumbWidth = 0;
		 objItem.thumbHeight = 0;
		 objItem.thumbRatioByWidth = 0;
		 objItem.thumbRatioByHeight = 0;
		 
		 var dataWidth = objChild.data("width");
		 var dataHeight = objChild.data("height");
		 if(dataWidth && typeof dataWidth == "number" && dataHeight && typeof dataHeight == "number"){
			 objItem.thumbWidth = dataWidth;
			 objItem.thumbHeight = dataHeight;
			 objItem.thumbRatioByWidth = dataWidth / dataHeight;
			 objItem.thumbRatioByHeight = dataHeight / dataWidth;
		 }
		 
		 objItem.addHtml = null;
		 
		 var isImageMissing = (objItem.urlImage == undefined || objItem.urlImage == "");
		 var isThumbMissing = (objItem.urlThumb == undefined || objItem.urlThumb == "");
		 
		 switch(objItem.type){
		 	case "youtube":			 		
				 objItem.videoid = objChild.data("videoid");
		 		 
				 if(isImageMissing || isThumbMissing){
					 
					 var objImages = g_ugYoutubeAPI.getVideoImages(objItem.videoid);
				 		
			 		 //set preview image
			 		 if(isImageMissing)
			 			objItem.urlImage = objImages.preview;
			 		
			 		 //set thumb image
			 		 if(isThumbMissing){
			 			 	objItem.urlThumb = objImages.thumb;
			 				
			 			 	 if(tagname == "img")
			 					 objChild.attr("src",objItem.urlThumb);
			 		 }
					 
				 }
				 
				 g_temp.isYoutubePresent = true;
			break;
		 	case "vimeo":
		 		
				objItem.videoid = objChild.data("videoid");
									
				g_temp.isVimeoPresent = true;
		 	break;
		 	case "html5video":
		 		objItem.videoogv = objChild.data("videoogv");
		 		objItem.videowebm = objChild.data("videowebm");
		 		objItem.videomp4 = objChild.data("videomp4");
		 		
		 		g_temp.isHtml5VideoPresent = true;
		 	break;
		 	case "soundcloud":
		 		objItem.trackid = objChild.data("trackid");
		 		g_temp.isSoundCloudPresent = true;
		 	break;
		 	case "wistia":
				 objItem.videoid = objChild.data("videoid");
				 g_temp.isWistiaPresent = true;
		 	break;
		 	case "custom":
				var objChildImage = objChild.children("img");
		 		
				if(objChildImage.length){
					objChildImage = jQuery(objChildImage[0]);
					
				    objItem.urlThumb = objChildImage.attr("src");
				    objItem.title = objChildImage.attr("alt");
				    objItem.objThumbImage = objChildImage;
		 		}
		 		
				//add additional html
				var objChildren = objChild.children().not("img:first-child");
		 		
				if(objChildren.length)
					objItem.addHtml = objChildren.clone();
		 		
		 	break;
		 }
		
		 //clear not needed attributes
		 if(objItem.objThumbImage){
			 objItem.objThumbImage.removeAttr("data-description", "");
			 objItem.objThumbImage.removeAttr("data-image", "");				 
			 objItem.objThumbImage.removeAttr("data-thumb", "");				 
			 objItem.objThumbImage.removeAttr("title", "");				 
		 }
		 
		 
		 return(objItem);
	}
	
	
	/**
	 * fill items array from images object
	 */
	function fillItemsArray(arrChildren, isAppend){
		
		if(isAppend !== true){
			g_arrItems = [];
		}else{	 //append
			
			//clear last new added items
			for(var i=0;i<g_numItems;i++)
				g_arrItems[i].isNewAdded = false;
		
		}
		 
		 for(var i=0;i<arrChildren.length;i++){
			 var objChild = jQuery(arrChildren[i]);
			 			 
			 var objItem = fillItemByChild(objChild);
			 numIndex = g_arrItems.length;			 
			 objItem.index = numIndex;
			 
			 if(isAppend === true){
				 objItem.isNewAdded = true;
			 }
			 
			 g_arrItems.push(objItem);
		 }
		 
		 g_numItems = g_arrItems.length;
		 
	}
	
	
	/**
	 * load api's according presented item types
	 */
	function loadAPIs(){
		
		//load youtube api
		if(g_temp.isYoutubePresent)
			g_ugYoutubeAPI.loadAPI();
		
		if(g_temp.isVimeoPresent)
			g_ugVimeoAPI.loadAPI();
		
		if(g_temp.isHtml5VideoPresent)
			g_ugHtml5MediaAPI.loadAPI();
		
		if(g_temp.isSoundCloudPresent)
			g_ugSoundCloudAPI.loadAPI();
		
		if(g_temp.isWistiaPresent)
			g_ugWistiaAPI.loadAPI();
		
	}
	
	
	/**
	 * preload big images
	 */
	function preloadBigImages(){
		
		//check and fix preload type
		if(g_options.gallery_images_preload_type == "visible" && !g_objThumbs)
			g_options.gallery_images_preload_type = "minimal";
		
		if(g_temp.isAllItemsPreloaded == true)
			return(true);
		
		switch(g_options.gallery_images_preload_type){
			default:
			case "minimal":
			break;
			case "all":
				
				jQuery(g_arrItems).each(function(){	
					preloadItemImage(this);			
				});			
				
			break;
			case "visible":
				jQuery(g_arrItems).each(function(){		
					var objItem = this;
					var isVisible = g_objThumbs.isItemThumbVisible(objItem);
					
					if(isVisible == true)
						preloadItemImage(objItem);
				});
				
			break;
		}
				
	}
	
	/**
	 * check if item needed to preload and preload it
	 */
	function checkPreloadItemImage(objItem){
		
		if(objItem.isBigImageLoadStarted == true ||
				   objItem.isBigImageLoaded == true || 
				   objItem.isBigImageLoadError == true){
					return(false);			
		}
		
		switch(g_options.gallery_images_preload_type){
			default:
			case "minimal":
			break;
			case "all":			
					preloadItemImage(objItem);							
			break;
			case "visible":
				var isVisible = g_objThumbs.isItemThumbVisible(objItem);					
					if(isVisible == true)
						preloadItemImage(objItem);				
			break;
		}
		
	}
	
	/**
	 * preload item image
	 */
	function preloadItemImage(objItem){
		
		if(objItem.isBigImageLoadStarted == true ||
		   objItem.isBigImageLoaded == true || 
		   objItem.isBigImageLoadError == true){
			return(true);			
		}
		
		var imageUrl = objItem.urlImage;
		if(imageUrl == "" || imageUrl == undefined){
			objItem.isBigImageLoadError = true;
			return(false);
		}
		
		objItem.isBigImageLoadStarted = true;
				
		objItem.objPreloadImage = jQuery('<img/>').attr("src", imageUrl);
		objItem.objPreloadImage.data("itemIndex", objItem.index);
		
		//set image load event (not that reliable)
		objItem.objPreloadImage.on("load", t.onItemBigImageLoaded);
		
		//set load error event
		objItem.objPreloadImage.on( "error", function(){
			var objImage = jQuery(this);
			var itemIndex = objImage.data("itemIndex");
			var objItem = g_arrItems[itemIndex];
			
			//update error:
			objItem.isBigImageLoadError = true;
			objItem.isBigImageLoaded = false;
			
			//print error
			var imageUrl = jQuery(this).attr("src");
			console.log("Can't load image: "+ imageUrl);
			
			//try to load the image again
			g_objGallery.trigger(t.events.ITEM_IMAGE_UPDATED, [itemIndex, objItem.urlImage]);
			objItem.objThumbImage.attr("src", objItem.urlThumb);
			
		});
		
		//check the all items started preloading flag
		checkAllItemsStartedPreloading();
		
	}
	
	
	/**
	 * on item big image loaded event function. 
	 * Update image size and that the image has been preloaded
	 * can be called from another objects like the slider
	 */
	this.onItemBigImageLoaded = function(event, objImage){
				
		if(!objImage)
			var objImage = jQuery(this);
		
		var itemIndex = objImage.data("itemIndex");
		
		var objItem = g_arrItems[itemIndex];
		
		objItem.isBigImageLoaded = true;
		
		//get size with fallback function
		var objSize = g_functions.getImageOriginalSize(objImage);
		
		objItem.imageWidth = objSize.width;
		objItem.imageHeight = objSize.height;		
	}
	
	/**
	 * check and fill image size in item object
	 */
	this.checkFillImageSize = function(objImage, objItem){
		
		if(!objItem){
			var itemIndex = objImage.data("itemIndex");
			if(itemIndex === undefined)
				throw new Error("Wrong image given to gallery.checkFillImageSize");
			
			var objItem = g_arrItems[itemIndex];
		}
		
		var objSize = g_functions.getImageOriginalSize(objImage);
		
		objItem.imageWidth = objSize.width;
		objItem.imageHeight = objSize.height;		
	}
	
	
	/**
	 * preload next images near current item
	 */
	function preloadNearBigImages(objItem){
		
		if(g_temp.isAllItemsPreloaded == true)
			return(false);
		
		if(!objItem)
			var objItem = g_selectedItem;
		
		if(!objItem)
			return(true);
			
		var currentIndex = objItem.index;
		var lastItemIndex = currentIndex - 1;
		var nextItemIndex = currentIndex + 1;
		
		if(lastItemIndex > 0)
			preloadItemImage(g_arrItems[lastItemIndex]);
		
		if(nextItemIndex < g_numItems)
			preloadItemImage(g_arrItems[nextItemIndex]);
			
	}
	
	
	/**
	 * check that all items started preloading, if do, set 
	 * flag g_temp.isAllItemsPreloaded to true
	 */
	function checkAllItemsStartedPreloading(){
		
		if(g_temp.isAllItemsPreloaded == true)
			return(false);
		
		//if some of the items not started, exit function:
		for(var index in g_arrItems){
			if(g_arrItems[index].isBigImageLoadStarted == false)
				return(false);
		}
		
		//if all started, set flag to true
		g_temp.isAllItemsPreloaded = true;	
	}
	
	
	/**
	 * set freestyle mode
	 */
	this.setFreestyleMode = function(){
		
		g_temp.isFreestyleMode = true;
	
	}
	
	
	/**
	 * attach thumbs panel to the gallery
	 */
	this.attachThumbsPanel = function(type, objThumbs){
		g_temp.thumbsType = type;
		g_objThumbs = objThumbs;
	}
	
	
	/**
	 * init the slider
	 */	
	this.initSlider = function(customOptions, optionsPrefix){
		 
		 //mix options with user options
		 if(!customOptions)
			 var customOptions = {};
		 		 
		 customOptions = jQuery.extend(g_temp.objCustomOptions, customOptions);
		 
		 g_objSlider = new UGSlider();		 
		 g_objSlider.init(t, customOptions, optionsPrefix);
	}
	
	
	function __________END_INIT_GALLERY_______(){};
	
	function __________EVENTS_____________(){};

	
	/**
	 * on gallery mousewheel event handler, advance the thumbs
	 */
	this.onGalleryMouseWheel = function(event, delta, deltaX, deltaY){
		
		event.preventDefault();
		
		if(delta > 0)
			t.prevItem();
		else
			t.nextItem();
	}
	
	
	/**
	 * on mouse enter event
	 */
	function onSliderMouseEnter(event){
		
		if(g_options.gallery_pause_on_mouseover == true && t.isFullScreen() == false && g_temp.isPlayMode == true && g_objSlider && g_objSlider.isSlideActionActive() == false)
			t.pausePlaying();
	}
	
	
	/**
	 * on mouse move event
	 */
	function onSliderMouseLeave(event){
		
		if(g_options.gallery_pause_on_mouseover == true && g_temp.isPlayMode == true && g_objSlider && g_objSlider.isSlideActionActive() == false){
			
			var isStillLoading = g_objSlider.isCurrentSlideLoadingImage();
			
			if(isStillLoading == false)
				t.continuePlaying();
		}
		
	}
	
	
	/**
	 * on keypress - keyboard control
	 */
	function onKeyPress(event){
		 
		var obj = jQuery(event.target);
		if(obj.is("textarea") || obj.is("select") || obj.is("input"))
			return(true);
						
		 var keyCode = (event.charCode) ? event.charCode :((event.keyCode) ? event.keyCode :((event.which) ? event.which : 0));
		 
		 var wasAction = true;
		 
		 switch(keyCode){
			 case 39:	//right key
				 t.nextItem();
			 break;
			 case 37:	//left key
				 t.prevItem();
			 break;
			 default:
				 wasAction = false;
			 break; 
		 }
		 
		 //only first page gallery affected
		 
		 if(wasAction == true){
			 event.preventDefault();
			 event.stopPropagation();
			 event.stopImmediatePropagation();
		 }
		 
		g_objGallery.trigger(t.events.GALLERY_KEYPRESS, [keyCode,event]);
	}
	
	
	/**
	 * check that the gallery resized, if do, trigger onresize event
	 */
	function onGalleryResized(){
		
		var objSize = t.getSize();
		
		if(objSize.width == 0)	//fix hidden gallery change
			return(true);
		
		t.setSizeClass();
		
		var objSize = t.getSize();
		
		if(objSize.width != g_temp.lastWidth || (g_temp.isFreestyleMode == false && objSize.height != g_temp.lastHeight)){
			
			var heightWasSet = false;
			
			//set height with custom function (if exists)
			if(g_temp.funcCustomHeight){
				var newHeight = g_temp.funcCustomHeight(objSize);
				if(newHeight){
					g_objWrapper.height(newHeight);
					heightWasSet = true;
				}
			}
			
			if(heightWasSet == false && g_options.gallery_preserve_ratio == true && g_temp.isFreestyleMode == false)
				setHeightByOriginalRatio();
			
			storeLastSize();
			g_objGallery.trigger(t.events.SIZE_CHANGE);
			
		}
		
	}

	
	/**
	 * on strip move event
	 * preload visible images if that option selected
	 */
	function onThumbsChange(event){
		
		//preload visible images 
		if(g_options.gallery_images_preload_type == "visible" && g_temp.isAllItemsPreloaded == false){
			preloadBigImages();
		}
		
	}
	
	
	/**
	 * on full screen change event
	 */
	function onFullScreenChange(){
		
		
		var isFullscreen = g_functions.isFullScreen();
		var event = isFullscreen ? t.events.ENTER_FULLSCREEN:t.events.EXIT_FULLSCREEN; 

		 var fullscreenID = g_functions.getGlobalData("fullscreenID");
		 
		 //check if this gallery was affected
		 if(g_galleryID !== fullscreenID)
			 return(true);
		 		 
		 //add classes for the gallery
		 if(isFullscreen){
			 g_objWrapper.addClass("ug-fullscreen");
		 }else{
			 g_objWrapper.removeClass("ug-fullscreen");
		 }

		 g_objGallery.trigger(event);
		 
		 onGalleryResized();
	}
	
	/**
	 * on big image updated, if needed - preload this item image
	 */
	function onItemImageUpdated(event, index){
		
		var objItem = t.getItem(index);		
		checkPreloadItemImage(objItem);		
	}
	
	/**
	 * on current slide image load end. If playing mode, begin playing again
	 */
	function onCurrentSlideImageLoadEnd(){
		
		if(t.isPlayMode() == true)
			t.continuePlaying();
	}
		
	
	/**
	 * init all events
	 */
	function initEvents(){
		
		//avoid annoyong firefox image dragging
		g_objWrapper.on("dragstart",function(event){
			event.preventDefault();
		});
		
		//on big image updated, if needed - preload this item image
		g_objGallery.on(t.events.ITEM_IMAGE_UPDATED, onItemImageUpdated);
		
		//init custom event on strip moving
		if(g_objThumbs){
			switch(g_temp.thumbsType){
				case "strip":
					jQuery(g_objThumbs).on(g_objThumbs.events.STRIP_MOVE, onThumbsChange);
				break;
				case "grid":
					jQuery(g_objThumbs).on(g_objThumbs.events.PANE_CHANGE, onThumbsChange);
				break;
			}
		}
		
		//init mouse wheel
		if(g_options.gallery_mousewheel_role == "advance" && g_temp.isFreestyleMode == false)
			g_objWrapper.on("mousewheel", t.onGalleryMouseWheel);
		
		 //on resize event
		 storeLastSize();
		 
		 jQuery(window).resize(function(){
			 g_objWrapper.css("width","auto");
			 g_functions.whenContiniousEventOver("gallery_resize", onGalleryResized, g_temp.resizeDelay);
		 });
		 
		 //check resize once in a time, start from 10 seconds
		 setTimeout(function(){
			 setInterval(onGalleryResized, 2000);
		 }, 10000);
		 
		 //fullscreen:
		 g_functions.addFullScreenChangeEvent(onFullScreenChange);
		 
		 //on slider item changed event
		 if(g_objSlider){
			 
			 jQuery(g_objSlider).on(g_objSlider.events.ITEM_CHANGED, function(){
				 var sliderIndex = g_objSlider.getCurrentItemIndex();
				 				 
				 if(sliderIndex != -1)
					 t.selectItem(sliderIndex);
			 });
			 
			 //add slider onmousemove event
			 if(g_options.gallery_pause_on_mouseover == true){
				 var sliderElement = g_objSlider.getElement();
				 sliderElement.hover(onSliderMouseEnter, onSliderMouseLeave);
				 
				 //on full screen, run on mouse leave
				 g_objGallery.on(t.events.ENTER_FULLSCREEN, function(){
						 onSliderMouseLeave();
				 });
				 
			 }
			 
			 //retrigger slider events
			 retriggerEvent(g_objSlider, g_objSlider.events.ACTION_START, t.events.SLIDER_ACTION_START);
			 retriggerEvent(g_objSlider, g_objSlider.events.ACTION_END, t.events.SLIDER_ACTION_END);
			 
			 jQuery(g_objSlider).on(g_objSlider.events.CURRENTSLIDE_LOAD_END, onCurrentSlideImageLoadEnd);
			 
		 }
		  
		 //add keyboard events
		 if(g_options.gallery_control_keyboard == true)
			 jQuery(document).keydown(onKeyPress);
		 		 
	}
	
	
	/**
	 * destroy all gallery events
	 */
	this.destroy = function(){
		
		g_objWrapper.off("dragstart");
		g_objGallery.off(t.events.ITEM_IMAGE_UPDATED);
		
		//init custom event on strip moving
		if(g_objThumbs){
			switch(g_temp.thumbsType){
				case "strip":
					jQuery(g_objThumbs).off(g_objThumbs.events.STRIP_MOVE);
				break;
				case "grid":
					jQuery(g_objThumbs).off(g_objThumbs.events.PANE_CHANGE);
				break;
			}
		}
		
		 g_objWrapper.off("mousewheel");
		
		 jQuery(window).off("resize");
		 
		 //fullscreen:
		 g_functions.destroyFullScreenChangeEvent();
		 
		 //on slider item changed event
		 if(g_objSlider){
			 
			 jQuery(g_objSlider).off(g_objSlider.events.ITEM_CHANGED);
			 
			 //add slider onmousemove event
			 var sliderElement = g_objSlider.getElement();
			 sliderElement.off("mouseenter");
			 sliderElement.off("mouseleave");
			 
			 g_objGallery.off(t.events.ENTER_FULLSCREEN);
			 jQuery(g_objSlider).off(g_objSlider.events.ACTION_START);
			 jQuery(g_objSlider).off(g_objSlider.events.ACTION_END);
			 jQuery(g_objSlider).off(g_objSlider.events.CURRENTSLIDE_LOAD_END);
		 }
		 		 
		 //add keyboard events
		 if(g_options.gallery_control_keyboard == true)
			 jQuery(document).off("keydown");
		
		 //destroy theme
		 if(g_objTheme && typeof g_objTheme.destroy == "function"){
			 g_objTheme.destroy();
		 }
		 
		 g_objWrapper.html("");
		 
	}
	
	
	function __________GENERAL_______(){};
	
	/**
	 * get items array
	 */
	this.getArrItems = function(){
		return g_arrItems;
	}
	
	/**
	 * get gallery objects
	 */
	this.getObjects = function(){
			
		var objects = {
			g_galleryID:g_galleryID,
			g_objWrapper:g_objWrapper,
			g_objThumbs:g_objThumbs,
			g_objSlider:g_objSlider,
			g_options:g_options,
			g_arrItems:g_arrItems,
			g_numItems:g_numItems
		};
		
		return(objects);
	}
	
	/**
	 * get slider object
	 */
	this.getObjSlider = function(){
		
		return(g_objSlider);
	}
	
	
	/**
	 * 
	 * get item by index, if the index don't fit, trace error
	 */
	this.getItem = function(index){
		if(index < 0){
			throw new Error("item with index: " + index + " not found");
			return(null);
		}
		if(index >= g_numItems){
			throw new Error("item with index: " + index + " not found");
			return(null);			
		}
		
		return(g_arrItems[index]);
	}
	
	
	/**
	 * get gallery width
	 */
	this.getWidth = function(){
		
		var objSize = t.getSize();
				
		return(objSize.width);
	}
	
	/**
	 * get gallery height
	 */
	this.getHeight = function(){
		
		var objSize = t.getSize();
		
		return(objSize.height);
	}
	
	
	/**
	 * get gallery size
	 */
	this.getSize = function(){
		
		var objSize = g_functions.getElementSize(g_objWrapper);
		
		objSize.orig_width = g_options.gallery_width;
		objSize.orig_height = g_options.gallery_height;
		objSize.orig_ratio = objSize.orig_width / objSize.orig_height;
		
		return(objSize);
	}
	
	/**
	 * get gallery ID
	 */
	this.getGalleryID = function(){
		
		var id = g_galleryID.replace("#","");
			
		return(id);
	}
	
	/**
	 * get next item by current index (or current object)
	 */
	this.getNextItem = function(index, forceCarousel){
		
		if(typeof index == "object")
			index = index.index;
		
		var nextIndex = index + 1;
		
		if(forceCarousel !== true && g_numItems == 1)
			return(null);
		
		if(nextIndex >= g_numItems){
			
			if(g_options.gallery_carousel == true || forceCarousel === true)
				nextIndex = 0;
			else
				return(null);
		}
		
		var objItem = g_arrItems[nextIndex];
		
		return(objItem);			
	}
	
	
	/**
	 * get previous item by index (or item object)
	 */
	this.getPrevItem = function(index){
		
		if(typeof index == "object")
			index = index.index;
		
		var prevIndex = index - 1;
		
		if(prevIndex < 0){
			if(g_options.gallery_carousel == true || forceCarousel === true)
				prevIndex = g_numItems - 1;
			else
				return(null);
		}
		
		var objItem = g_arrItems[prevIndex];
		
		return(objItem);
	}
	
	
	
	/**
	 * get selected item
	 */
	this.getSelectedItem = function(){
		
		return(g_selectedItem);
	}
	
	/**
	 * get selected item index
	 */
	this.getSelectedItemIndex = function(){
		
		return(g_selectedItemIndex);
	}
	
	
	/**
	 * get number of items
	 */
	this.getNumItems = function(){
		return g_numItems;
	}
	
	/**
	 * get true if the current item is last
	 */
	this.isLastItem = function(){
		if(g_selectedItemIndex == g_numItems - 1)
			return(true);
		
		return(false);
	}
	
	
	/**
	 * get true if the current item is first
	 */
	this.isFirstItem = function(){
		if(g_selectedItemIndex == 0)
			return(true);
		return(false);
	}
	
		
	/**
	 * get gallery options
	 */
	this.getOptions = function(){
		return g_options;
	}
	
	
	/**
	 * get the gallery wrapper element
	 */
	this.getElement = function(){
		return(g_objWrapper);
	}
	
	
	this.___________SET_CONTROLS___________ = function(){}
	
	/**
	 * set next button element
	 * set onclick event
	 */
	this.setNextButton = function(objButton){
		
		//register button as a unite gallery belong
		objButton.data("ug-button", true);
		
		g_functions.setButtonOnClick(objButton, t.nextItem);
		
	}
	
	
	/**
	 * set prev button element
	 * set onclick event
	 */
	this.setPrevButton = function(objButton){
		
		//register button as a unite gallery belong
		objButton.data("ug-button", true);
		
		g_functions.setButtonOnClick(objButton, t.prevItem);
				
	}
	
	
	/**
	 * set fullscreen button to enter / exit fullscreen.
	 * on fullscreen mode ug-fullscreenmode class wil be added
	 */
	this.setFullScreenToggleButton = function(objButton){
		
		//register button as a unite gallery belong
		objButton.data("ug-button", true);

		g_functions.setButtonOnTap(objButton, t.toggleFullscreen);
		
		g_objGallery.on(t.events.ENTER_FULLSCREEN,function(){
			objButton.addClass("ug-fullscreenmode");
		});
		
		g_objGallery.on(t.events.EXIT_FULLSCREEN,function(){
			objButton.removeClass("ug-fullscreenmode");
		});
				
	}
	
	
	/**
	 * destroy full screen button
	 */
	this.destroyFullscreenButton = function(objButton){
		
		g_functions.destroyButton(objButton);
		
		g_objGallery.off(t.events.ENTER_FULLSCREEN);
		g_objGallery.off(t.events.EXIT_FULLSCREEN);
	}
	
	
	/**
	 * set play button event
	 */
	this.setPlayButton = function(objButton){
		
		//register button as a unite gallery belong
		objButton.data("ug-button", true);
		
		g_functions.setButtonOnClick(objButton, t.togglePlayMode);
		
		g_objGallery.on(t.events.START_PLAY,function(){
			objButton.addClass("ug-stop-mode");
		});
		
		g_objGallery.on(t.events.STOP_PLAY, function(){
			objButton.removeClass("ug-stop-mode");
		});
		
	}
	
	/**
	 * destroy the play button
	 */
	this.destroyPlayButton = function(objButton){
		g_functions.destroyButton(objButton);
		g_objGallery.off(t.events.START_PLAY);
		g_objGallery.off(t.events.STOP_PLAY);
	}
	
	/**
	 * set playing progress indicator
	 */
	this.setProgressIndicator = function(objProgress){
		
		g_temp.objProgress = objProgress;		
	}
	
	
	/**
	 * set title and descreiption containers
	 */
	this.setTextContainers = function(objTitle, objDescription){
		
		g_objGallery.on(t.events.ITEM_CHANGE, function(){
			
			var objItem = t.getSelectedItem();			
			objTitle.html(objItem.title);
			objDescription.html(objItem.description);
			
		});
		
	}
	
	/**
	 * show overlay disabled
	 */
	this.showDisabledOverlay = function(){
		g_objWrapper.children(".ug-overlay-disabled").show();
	}

	/**
	 * show overlay disabled
	 */
	this.hideDisabledOverlay = function(){
		g_objWrapper.children(".ug-overlay-disabled").hide();
	}
	
	this.___________END_SET_CONTROLS___________ = function(){}

	
	/**
	 * cache items, put to cache array by id
	 * the items must be unprocessed yet
	 */
	function cacheItems(cacheID, htmlItemsArg){
			
		if(htmlItemsArg){
			var htmlItems = htmlItemsArg;
			if(htmlItems != "noitems")
				htmlItems = jQuery(htmlItemsArg).clone();
		}else{
			var htmlItems = g_objWrapper.children().clone();
		}
		
		g_objCache[cacheID] = htmlItems;
	}
	
	
	/**
	 * remove all size classes
	 */
	function removeAllSizeClasses(objWrapper){
		
		if(!objWrapper)
			objWrapper = g_objWrapper;
		
		objWrapper.removeClass("ug-under-480");
		objWrapper.removeClass("ug-under-780");
		objWrapper.removeClass("ug-under-960");
	}
	
	
	/**
	 * retrigger event from another objects
	 * the second parameter will be the second object
	 */
	function retriggerEvent(object, originalEvent, newEvent){
		
		jQuery(object).on(originalEvent, function(event){
			g_objGallery.trigger(newEvent, [this]);
		});
	
	}
	
	
	
	/**
	 * advance next play step
	 */
	function advanceNextStep(){
		
		var timeNow = jQuery.now();
		var timeDiff = timeNow - g_temp.playTimeLastStep;
		g_temp.playTimeLastStep = timeNow;
		
		var isVisible = t.isGalleryVisible();
		if(isVisible == false){
			return(false);
		}
		
		g_temp.playTimePassed += timeDiff;
		
		//set the progress
		if(g_temp.objProgress){
			var percent = g_temp.playTimePassed / g_options.gallery_play_interval;
			g_temp.objProgress.setProgress(percent);
		}
		
		//if interval passed - proceed to next item
		if(g_temp.playTimePassed >= g_options.gallery_play_interval){
			
			t.nextItem();
			g_temp.playTimePassed = 0;			
		}
		
		
	}
	
	this.___________PLAY_MODE___________ = function(){}
	
	
	/**
	 * start play mode
	 */
	this.startPlayMode = function(){
		
		g_temp.isPlayMode = true;
		g_temp.isPlayModePaused = false;
		
		g_temp.playTimePassed = 0;
		g_temp.playTimeLastStep = jQuery.now();
		
		g_temp.playHandle = setInterval(advanceNextStep, g_temp.playStepInterval);
		
		//show and reset progress indicator
		if(g_temp.objProgress){
			var objElement = g_temp.objProgress.getElement();
			g_temp.objProgress.setProgress(0);
			objElement.show();
		}
		
		g_objGallery.trigger(t.events.START_PLAY);
		
		//check if there is a need to pause
		if(g_objSlider && g_objSlider.isCurrentSlideLoadingImage() == true){
			t.pausePlaying();
		}
		
	}
	
	
	/**
	 * reset playing - set the timer to 0
	 */
	this.resetPlaying = function(){
		
		if(g_temp.isPlayMode == false)
			return(true);
		
		g_temp.playTimePassed = 0;
		g_temp.playTimeLastStep = jQuery.now();
	}
	
	
	/**
	 * pause playing slideshow
	 */
	this.pausePlaying = function(){
		
		if(g_temp.isPlayModePaused == true)
			return(true);
		
		g_temp.isPlayModePaused = true;
		clearInterval(g_temp.playHandle);
		
		g_objGallery.trigger(t.events.PAUSE_PLAYING);
	}
	
	
	/**
	 * continue playing slideshow
	 */
	this.continuePlaying = function(){
		
		if(g_temp.isPlayModePaused == false)
			return(true);
		
		g_temp.isPlayModePaused = false;
		g_temp.playTimeLastStep = jQuery.now();
		g_temp.playHandle = setInterval(advanceNextStep, g_temp.playStepInterval);
		
	}
	
	
	/**
	 * stop play mode
	 */
	this.stopPlayMode = function(){
		g_temp.isPlayMode = false;
		clearInterval(g_temp.playHandle);
			
		g_temp.playTimePassed = 0;
		
		//hide progress indicator
		if(g_temp.objProgress){
			var objElement = g_temp.objProgress.getElement();
			objElement.hide();
		}
		
		g_objGallery.trigger(t.events.STOP_PLAY);
	}
	
	
	/**
	 * tells if the play mode are active
	 */
	this.isPlayMode = function(){
		
		return(g_temp.isPlayMode);
	}
	
	
	/**
	 * start / stop play mode
	 */
	this.togglePlayMode = function(){
		
		if(t.isPlayMode() == false)
			t.startPlayMode();
		else
			t.stopPlayMode();
	}

	
	/**
	 * unselect all items
	 */
	function unselectSeletedItem(){
		
		if(g_selectedItem == null)
			return(true);
		
		if(g_objThumbs)
			g_objThumbs.setThumbUnselected(g_selectedItem.objThumbWrapper);
		
		g_selectedItem = null;
		g_selectedItemIndex = -1;
	}	
	
	
	this.___________GENERAL_EXTERNAL___________ = function(){}
	
	/**
	 * shuffle items - usually before theme start
	 */
	this.shuffleItems = function(){

		g_arrItems = g_functions.arrayShuffle(g_arrItems);
		
		for(var index in g_arrItems)		//fix index
			g_arrItems[index].index = parseInt(index);
		
	}
	
	/**
	 * set main gallery params, extend current params
	 */
	this.setOptions = function(customOptions){
				
		g_options = jQuery.extend(g_options, customOptions);		
	}
	
	
	/**
	 * select some item
	 * the input can be index or object
	 * role - the role of the object who selected the item
	 */
	this.selectItem = function(objItem, role){
		
		if(typeof objItem == "number")
			objItem = t.getItem(objItem);
		
		var itemIndex = objItem.index;
		if(itemIndex == g_selectedItemIndex)
			return(true);
				
		unselectSeletedItem();
				
		//set selected item
		g_selectedItem = objItem;		
		g_selectedItemIndex = itemIndex;
		
		g_objGallery.trigger(t.events.ITEM_CHANGE, [objItem,role]);
		
		//reset playback, if playing
		if(g_temp.isPlayMode == true){
				t.resetPlaying();
			
			var stillLoading = g_objSlider.isCurrentSlideLoadingImage();
			if(stillLoading == true)
				t.pausePlaying();
		}
				
	}
	
	
	/**
	 * go to next item
	 */
	this.nextItem = function(){
		
		var newItemIndex = g_selectedItemIndex + 1;
		
		if(g_numItems == 0)
			return(true);		
		
		if(g_options.gallery_carousel == false && newItemIndex >= g_numItems)
			return(true);
		
		if(newItemIndex >= g_numItems)
			newItemIndex = 0;
		
		//debugLine(newItemIndex,true);
		
		t.selectItem(newItemIndex, "next");
	}
	
	
	/**
	 * go to previous item
	 */
	this.prevItem = function(){
		
		var newItemIndex = g_selectedItemIndex - 1;
		
		if(g_selectedItemIndex == -1)
			newItemIndex = 0;
		
		if(g_numItems == 0)
			return(true);
		
		if(g_options.gallery_carousel == false && newItemIndex < 0)
			return(true);
		
		if(newItemIndex < 0)
			newItemIndex = g_numItems - 1;
		
		t.selectItem(newItemIndex, "prev");
		
	}
	
	
	/**
	 * expand gallery to body size
	 */
	function toFakeFullScreen(){
		
		jQuery("body").addClass("ug-body-fullscreen");
		g_objWrapper.addClass("ug-fake-fullscreen");
		
		g_temp.isFakeFullscreen = true;
		
		g_objGallery.trigger(t.events.ENTER_FULLSCREEN);
		g_objGallery.trigger(t.events.SIZE_CHANGE);
	}
	
	
	/**
	 * exit fake fullscreen
	 */
	function exitFakeFullscreen(){
		
		jQuery("body").removeClass("ug-body-fullscreen");
		g_objWrapper.removeClass("ug-fake-fullscreen");
		
		g_temp.isFakeFullscreen = false;
		
		g_objGallery.trigger(t.events.EXIT_FULLSCREEN);
		g_objGallery.trigger(t.events.SIZE_CHANGE);
		
	}
	
	/**
	 * return if the fullscreen mode is available
	 */
	this.isFullScreen = function(){
		
		if(g_temp.isFakeFullscreen == true)
			return(true);
		
		if(g_functions.isFullScreen() == true)
			return(true);
		
		return(false);		
	}
	
	
	/**
	 * tells if it's fake fullscreen
	 */
	this.isFakeFullscreen = function(){
		
		return(g_temp.isFakeFullscreen);
	}
	
	
	/**
	 * go to fullscreen mode
	 */
	this.toFullScreen = function(){
		
		g_functions.setGlobalData("fullscreenID", g_galleryID);
		
		var divGallery = g_objWrapper.get(0);
		
		var isSupported = g_functions.toFullscreen(divGallery);
				
		if(isSupported == false)
			toFakeFullScreen();
		
	}
	
	
	/**
	 * exit full screen
	 */
	this.exitFullScreen = function(){
		
		if(g_temp.isFakeFullscreen == true)
			exitFakeFullscreen();
		else
			g_functions.exitFullscreen();
						
	}
	
	/**
	 * toggle fullscreen
	 */
	this.toggleFullscreen = function(){
		
		if(t.isFullScreen() == false){
			t.toFullScreen();
		}else{
			t.exitFullScreen();
		}
		
	}
	
	/**
	 * resize the gallery
	 * noevent - initally false
	 */
	this.resize = function(newWidth, newHeight, noevent){
		
		g_objWrapper.css("width", "auto");
		g_objWrapper.css("max-width",newWidth+"px");
		
		if(newHeight)
			g_objWrapper.height(newHeight);
		
		if(!noevent && noevent !== true)
			onGalleryResized();
		
	}

	
	/**
	 * set size class to the wrapper
	 * this can work to any other wrapper too
	 */
	this.setSizeClass = function(objWrapper, width){
		
		if(!objWrapper)
			var objWrapper = g_objWrapper;
		
		if(!width){
			var objSize = t.getSize();
			var width = objSize.width;			
		}
		
		if(width == 0)
			var width = jQuery(window).width();
		
		var addClass = "";
		
		if(width <= 480){
			addClass = "ug-under-480";			
		}else
		if(width <= 780){
			addClass = "ug-under-780";			
		}else
		if(width < 960){
			addClass = "ug-under-960";
		}
		
		if(objWrapper.hasClass(addClass) == true)
			return(true);
		
		removeAllSizeClasses(objWrapper);
		if(addClass != "")
			objWrapper.addClass(addClass);
	}
	
	
	/**
	 * return if the size is suited for mobile
	 */
	this.isMobileMode = function(){
		
		if(g_objWrapper.hasClass("ug-under-480"))
			return(true);
		
		return(false);
	}
	
	
	/**
	 * get if small screen
	 */
	this.isSmallWindow = function(){
		
		var windowWidth = jQuery(window).width();
		
		
		if(!windowWidth)
			return(true);
		
		if(windowWidth <= 480)
			return(true);
		
		return(false);
	}
	
	
	/**
	 * check if the gallery is visible
	 */
	this.isGalleryVisible = function(){
		
		var isVisible = g_objWrapper.is(":visible");
		
		return(isVisible);
	}
	
	
	/**
	 * change gallery items
	 */
	this.changeItems = function(itemsContent, cacheID){
		
		if(!itemsContent)
			var itemsContent = "noitems";
		
		runGallery(g_galleryID, "nochange", itemsContent, cacheID);
	}
	
	
	
	/**
	 * add items
	 */
	this.addItems = function(itemsContent){
		 
		 if(!itemsContent || itemsContent.length == 0)
			 return(false);
		 
		 //add new items wrapper
		 var objNewItemsWrapper = g_objWrapper.children(".ug-newitems-wrapper");
		 if(objNewItemsWrapper.length == 0)
			 g_objWrapper.append("<div class='ug-newitems-wrapper' style='display:none'></div>");
		 
		 objNewItemsWrapper = g_objWrapper.children(".ug-newitems-wrapper");
		 
		 //add the items
		 objNewItemsWrapper.append(itemsContent);
		 
		 var objChildren = jQuery(objNewItemsWrapper.children());
		  
		 fillItemsArray(objChildren, true);
		 
		 loadAPIs();
		 
		 if(!g_objTheme || typeof g_objTheme.addItems != "function")
			 throw new Error("addItems function not found in the theme");
		 
		 objNewItemsWrapper.remove();
		 
		 g_objTheme.addItems();
	}
	
	
	/**
	 * get new added items indexes array
	 */
	this.getNewAddedItemsIndexes = function(){
		
		var arrIndexes = [];
		
		jQuery.each(g_arrItems, function(index, objItem){
			
			if(objItem.isNewAdded == true)
				arrIndexes.push(index);
		});
		
		return(arrIndexes);
	}
	
	
	/**
	 * show error message, replace whole gallery div
	 */
	this.showErrorMessageReplaceGallery = function(message){
		showErrorMessage(message);
	}
	
	/**
	 * set custom height function by width
	 */
	this.setFuncCustomHeight = function(func){
		g_temp.funcCustomHeight = func;
	}
	
	
	this.__________EXTERNAL_EVENTS_______ = function(){};
	
	
	/**
	 * trigger event
	 */
	this.triggerEvent = function(event, arrParams){
		
		if(!arrParams)
			g_objGallery.trigger(event);
		else{
			if(jQuery.type(arrParams) != "array")
				arrParams = [arrParams];
			
			g_objGallery.trigger(event, arrParams);
		}
		
	}
	
	/**
	 * on event
	 */
	this.onEvent = function(event, func){
		
		g_objGallery.on(event, func);
	}
	
	
	/**
	 * destroy event
	 */
	this.destroyEvent = function(event){
		
		g_objGallery.off(event);
	}
	
	
	this.__________AJAX_REQUEST_______ = function(){};
	
	
	/**
	 * ajax request
	 */
	this.ajaxRequest = function(action, data, successFunction, errorFunction){
		
		if(!successFunction || typeof successFunction != "function")
			throw new Error("ajaxRequest error: success function should be passed");
				
		var urlAjax = g_options.gallery_urlajax;
		if(!urlAjax || urlAjax == "")
			throw new Error("ajaxRequest error: Ajax url don't passed");
		
		if(typeof data == "undefined")
			var data = {};

		//add galleryID to data
		var objData = {
				action:"unitegallery_ajax_action",
				client_action:action,
				galleryID: g_galleryID,
				data:data
		};
		
		jQuery.ajax({
			type:"post",
			url:g_options.gallery_urlajax,
			dataType: 'json',
			data:objData,
			success:function(response){
				
				if(!response){
					throw new Error("Empty ajax response!");
				}

				if(response == -1 || response === 0)
					throw new Error("ajax error!!!");
				

				if(typeof response.success == "undefined")
					throw new Error("ajax error!!!");
				
				if(response.success == false){
					showErrorMessage(response.message, "ajax error");
					return(false);
				}
				
				successFunction(response);
			},
			error:function(jqXHR, textStatus, errorThrown){
				console.log("Ajax Error!!! " + textStatus);
				responseText = jqXHR.responseText;
				if(errorFunction && typeof errorFunction == "function"){
					errorFunction(responseText);
				}else
					trace(responseText);
			}
		});
		
	}
	
	
	/**
	 * request new items
	 * isForce - don't take from cache
	 */
	this.requestNewItems = function(catID, isForce, cacheID){
		
		var checkCache = g_options.gallery_enable_cache;
		
		if(!cacheID)
			cacheID = catID;
		
		if(isForce == true)
			checkCache = false;
		
		//get items from cache
		if(checkCache == true && g_objCache.hasOwnProperty(cacheID)){
			
			var htmlItems = g_objCache[cacheID];
			
			t.changeItems(htmlItems, cacheID);
			
		}else{
			
			g_objGallery.trigger(t.events.GALLERY_BEFORE_REQUEST_ITEMS);
			
			t.ajaxRequest("front_get_cat_items",{catid:catID}, function(response){
				
				var htmlItems = response.html;
				
				t.changeItems(htmlItems, cacheID);
				
			});
			
		}
		
	}
	
	
	/**
	 * run the gallery
	 */
	 this.run = function(galleryID, objParams){
		 
		 
		 var debug_errors = g_options.gallery_debug_errors;
		 if(objParams && objParams.hasOwnProperty("gallery_debug_errors"))
			 g_options.gallery_debug_errors = objParams.gallery_debug_errors;

		 
		 if(g_options.gallery_debug_errors == true){
			 
			 try{
				 
				 runGallery(galleryID, objParams);
				 
				 
			 }catch(objError){
				 if(typeof objError == "object"){
					 
					 var message = objError.message;
					 var lineNumber = objError.lineNumber;
					 var fileName = objError.fileName;
					 var stack = objError.stack;
					 
					 message += " <br><br> in file: "+fileName;
					 message += " <b> line " + lineNumber + "</b>";
					 
					 trace(objError);
					 
				 }else{
					 var message = objError;
				 }
				 
				 //remove double "error:" text
				 message = message.replace("Error:","");
				 
				 showErrorMessage(message);
			 }
			 
		 }else{
			 runGallery(galleryID, objParams);
		 }
		 
		 		 
		 
	 }
	 	 	 
}	//unitegallery object end


/**
 * tiles class
 */
function UGLightbox(){

	var t = this, g_objThis = jQuery(this);
	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objWrapper;
	var g_objSlider = new UGSlider(), g_objOverlay, g_objArrowLeft, g_objArrowRight, g_objButtonClose;
	var g_functions = new UGFunctions(), g_objTextPanel = new UGTextPanel(), g_objNumbers;
	var g_objTopPanel;
	
	var g_options = {
			lightbox_type: "wide",							//compact / wide - lightbox type
			
			lightbox_show_textpanel: true,					//show the text panel
			lightbox_textpanel_width: 550,					//the width of the text panel.
			
			lightbox_hide_arrows_onvideoplay: true,			//hide the arrows when video start playing and show when stop
			lightbox_arrows_position: "sides",				//sides, inside: position of the arrows, used on compact type			
			lightbox_arrows_offset: 10,						//The horizontal offset of the arrows
			lightbox_arrows_inside_offset: 10,				//The offset from the image border if the arrows placed inside
			lightbox_arrows_inside_alwayson: false,			//Show the arrows on mouseover, or always on.
			
			lightbox_overlay_color:null,					//the color of the overlay. if null - will take from css
			lightbox_overlay_opacity:1,						//the opacity of the overlay. if null - will take from css
			lightbox_top_panel_opacity: null,				//the opacity of the top panel
			
			lightbox_show_numbers: true,					//show numbers on the right side
			lightbox_numbers_size: null,					//the size of the numbers string
			lightbox_numbers_color: null,					//the color of the numbers
			lightbox_numbers_padding_top:null,				//the top padding of the numbers (used in compact mode)
			lightbox_numbers_padding_right:null,			//the right padding of the numbers (used in compact mode)
			
			lightbox_compact_closebutton_offsetx: 1,		//the offsetx of the close button. Valid only for compact mode
			lightbox_compact_closebutton_offsety: 1,		//the offsetx of the close button. Valid only for compact mode
			
			lightbox_close_on_emptyspace:true				//close the lightbox on empty space
	};
	
	this.events = {
			LIGHTBOX_INIT: "lightbox_init"
	};
	
	var g_temp = {
			topPanelHeight: 44,
			initTextPanelHeight: 26,		//init height for compact mode
			isOpened: false, 
			isRightNowOpened:false,
			putSlider: true,
			isCompact: false,
			fadeDuration: 300,
			positionFrom: null,
			textPanelTop: null,
			textPanelLeft: null,
			isArrowsInside: false,
			isArrowsOnHoverMode: false,
			lastMouseX: null,
			lastMouseY: null,
			originalOptions: null,
			isSliderChangedOnce:false,
			isTopPanelEnabled:true
	};
	
	var g_defaults = {
			lightbox_slider_controls_always_on: true,
			lightbox_slider_enable_bullets: false,
			lightbox_slider_enable_arrows: false,
			lightbox_slider_enable_progress_indicator: false,
			lightbox_slider_enable_play_button: false,
			lightbox_slider_enable_fullscreen_button: false,
			lightbox_slider_enable_zoom_panel: false,
			lightbox_slider_enable_text_panel: false,
			lightbox_slider_scale_mode_media: "down",
			lightbox_slider_scale_mode: "down",
			lightbox_slider_loader_type: 3,
			lightbox_slider_loader_color: "black",
			lightbox_slider_transition: "fade",
			
			lightbox_slider_image_padding_top: g_temp.topPanelHeight,
			lightbox_slider_image_padding_bottom: 0,
			
			lightbox_slider_video_padding_top: 0,
			lightbox_slider_video_padding_bottom: 0,
			
			lightbox_textpanel_align: "middle",
			lightbox_textpanel_padding_top: 5,
			lightbox_textpanel_padding_bottom: 5,
			
			slider_video_constantsize: false,
			lightbox_slider_image_border: false,
			
			lightbox_textpanel_enable_title: true,
			lightbox_textpanel_enable_description: false,
			lightbox_textpanel_desc_style_as_title: true,
			
			lightbox_textpanel_enable_bg:false,
			
			video_enable_closebutton: false,
			lightbox_slider_video_enable_closebutton: false,
			video_youtube_showinfo: false,
			lightbox_slider_enable_links:false
	};
	
	var g_defaultsCompact = {
			lightbox_overlay_opacity:0.6,
			
			lightbox_slider_image_border: true,
			lightbox_slider_image_shadow:true,
			lightbox_slider_image_padding_top: 30,
			lightbox_slider_image_padding_bottom: 30,
			
			slider_video_constantsize: true,
						
			lightbox_textpanel_align: "bottom",
			lightbox_textpanel_title_text_align: "left",
			lightbox_textpanel_desc_text_align: "left",
			lightbox_textpanel_padding_left: 10,			//the padding left of the textpanel
			lightbox_textpanel_padding_right: 10
	};
	
	
	function __________GENERAL_________(){};
	
	
	/**
	 * init the gallery
	 */
	function initLightbox(gallery, customOptions){
		
		g_gallery = gallery;
		g_objGallery = jQuery(gallery);
		
		g_options = jQuery.extend(g_options, g_defaults);
		g_options = jQuery.extend(g_options, customOptions);
		
		g_temp.originalOptions = jQuery.extend({}, g_options);
		
		if(g_options.lightbox_type == "compact"){
			g_temp.isCompact = true;
			g_options = jQuery.extend(g_options, g_defaultsCompact);
			g_options = jQuery.extend(g_options, customOptions);
		}
		
		//modify some options
		modifyOptions();
		
		if(g_temp.putSlider == true){
			
			g_gallery.initSlider(g_options, "lightbox");
			g_objects = gallery.getObjects();
			g_objSlider = g_objects.g_objSlider;			
			
		}else{
			g_objSlider = null;
		}
		
		if(g_options.lightbox_show_textpanel == true){
			g_objTextPanel.init(g_gallery, g_options, "lightbox");
		}
		else
			g_objTextPanel = null;
		
		
	}
	
	
	/**
	 * modify some options according user options
	 */
	function modifyOptions(){
		
		if(g_temp.isCompact == true && g_options.lightbox_show_textpanel == true){
			g_options.lightbox_slider_image_padding_bottom = g_temp.initTextPanelHeight;
		}
		
		if(g_temp.isCompact == true && g_options.lightbox_arrows_position == "inside"){
			g_temp.isArrowsInside = true;
		}

		if(g_temp.isArrowsInside == true && g_options.lightbox_arrows_inside_alwayson == false)
			g_temp.isArrowsOnHoverMode = true;
		
		//disable top panel if no text panel enabled
		if(g_options.lightbox_show_textpanel == false){
			g_temp.isTopPanelEnabled = false;
			g_temp.topPanelHeight = 0;
			g_options.lightbox_slider_image_padding_top = 0;
		}
		
		//modify slider image border width
		
		
	}
	
	
	/**
	 * put the lightbox html
	 */
	function putLightboxHtml(){
		
		var html = "";
		var classAddition = "";
		if(g_temp.isCompact == true){
			classAddition = " ug-lightbox-compact";
		}
		
		html += "<div class='ug-gallery-wrapper ug-lightbox"+classAddition+"'>";
		html += "<div class='ug-lightbox-overlay'></div>";
		
		//set top panel only on wide mode
		if(g_temp.isCompact == false && g_temp.isTopPanelEnabled){
			html += "<div class='ug-lightbox-top-panel'>";
			html += 	"<div class='ug-lightbox-top-panel-overlay'></div>";
			
			if(g_options.lightbox_show_numbers)
				html += 	"<div class='ug-lightbox-numbers'></div>";
			
			html += "</div>";	//top panel
		}else{
			
			//put numbers without top panel
			if(g_options.lightbox_show_numbers)
				html += 	"<div class='ug-lightbox-numbers'></div>";
			
		}
		
		
		html += 	"<div class='ug-lightbox-button-close'></div>";
		
		html += "<div class='ug-lightbox-arrow-left'></div>";		
		html += "<div class='ug-lightbox-arrow-right'></div>";
		
		html += "</div>";
		
		g_objWrapper = jQuery(html);
		
		jQuery("body").append(g_objWrapper);
		
		if(g_objSlider)
			g_objSlider.setHtml(g_objWrapper);
		
		g_objOverlay = g_objWrapper.children(".ug-lightbox-overlay");
		
		if(g_temp.isCompact == false && g_temp.isTopPanelEnabled == true){
			g_objTopPanel = g_objWrapper.children(".ug-lightbox-top-panel");
			if(g_objTopPanel.length == 0)
				g_objTopPanel = null;
		}
		
		g_objButtonClose = g_objWrapper.find(".ug-lightbox-button-close");
		
		if(g_options.lightbox_show_numbers)
			g_objNumbers = g_objWrapper.find(".ug-lightbox-numbers");
		
		g_objArrowLeft = g_objWrapper.children(".ug-lightbox-arrow-left");
		g_objArrowRight = g_objWrapper.children(".ug-lightbox-arrow-right");
				
		if(g_objTextPanel){
			if(g_objTopPanel)
				g_objTextPanel.appendHTML(g_objTopPanel);
			else
				g_objTextPanel.appendHTML(g_objWrapper);
		}

	}
	
	
	/**
	 * set lightbox properties
	 */
	function setProperties(){
		
		if(g_options.lightbox_overlay_color !== null)
			g_objOverlay.css("background-color", g_options.lightbox_overlay_color);
		
		if(g_options.lightbox_overlay_opacity !== null)
			g_objOverlay.fadeTo(0, g_options.lightbox_overlay_opacity);
		
		if(g_objTopPanel && g_options.lightbox_top_panel_opacity !== null){
			g_objTopPanel.children(".ug-lightbox-top-panel-overlay").fadeTo(0, g_options.lightbox_top_panel_opacity);
		}
			
		//set numbers properties
		if(g_objNumbers){
			var cssNumbers = {};
			
			if(g_options.lightbox_numbers_size !== null)
				cssNumbers["font-size"] = g_options.lightbox_numbers_size+"px";
			
			if(g_options.lightbox_numbers_color)
				cssNumbers["color"] = g_options.lightbox_numbers_color;
			
			if(g_options.lightbox_numbers_padding_right !== null)
				cssNumbers["padding-right"] = g_options.lightbox_numbers_padding_right + "px";
			
			if(g_options.lightbox_numbers_padding_top !== null)
				cssNumbers["padding-top"] = g_options.lightbox_numbers_padding_top + "px";
			
			
			g_objNumbers.css(cssNumbers);
		}
		
	}
	
	
	/**
	 * refresh slider item with new height
	 */
	function refreshSliderItem(newHeight){
		
		if(!g_objSlider)
			return(true);
				
		//set slider new image position
		var objOptions = {
				slider_image_padding_top: newHeight
		};
		
		g_objSlider.setOptions(objOptions);
		g_objSlider.refreshSlideItems();
	
	}
	
	function __________WIDE_ONLY_________(){};
	
	
	/**
	 * handle panel height according text height
	 */
	function handlePanelHeight(fromWhere){
		
		if(!g_objTopPanel)
			return(false);
			
		if(!g_objTextPanel)
			return(false);
		
		//check text panel size, get the panel bigger then
		var panelHeight = g_objTopPanel.height();
		if(panelHeight == 0)
			return(false);
		
		if(g_objTopPanel.is(":visible") == false)
			return(false);
		
		var newPanelHeight = panelHeight;
		
		var objTextPanelSize = g_objTextPanel.getSize();
		
		var textPanelHeight = objTextPanelSize.height;
		
		if(panelHeight != g_temp.topPanelHeight)
			newPanelHeight = g_temp.topPanelHeight;
				
		if(textPanelHeight > newPanelHeight)
			newPanelHeight = textPanelHeight;
				
		if(panelHeight != newPanelHeight){
			g_objTopPanel.height(newPanelHeight);
			
			if(g_objSlider && g_objSlider.isAnimating() == false)
				refreshSliderItem(newPanelHeight);
		}
				
	}


	/**
	 * position text panel for wide
	 * size - wrapper size
	 */
	function positionTextPanelWide(size){

		var objOptions = {};
		
		var textWidth = g_options.lightbox_textpanel_width;
		var minPaddingLeft = 47;
		var minPaddingRight = 40;
		var maxTextPanelWidth = size.width - minPaddingLeft - minPaddingRight;
		
		if(textWidth > maxTextPanelWidth){		//mobile mode
			
			objOptions.textpanel_padding_left = minPaddingLeft;
			objOptions.textpanel_padding_right = minPaddingRight;
			
			objOptions.textpanel_title_text_align = "center";
			objOptions.textpanel_desc_text_align = "center";			
		}else{
			objOptions.textpanel_padding_left = Math.floor((size.width - textWidth) / 2);
			objOptions.textpanel_padding_right = objOptions.textpanel_padding_left;
			objOptions.textpanel_title_text_align = "left";
			objOptions.textpanel_desc_text_align = "left";
			
			if(g_options.lightbox_textpanel_title_text_align)
					objOptions.textpanel_title_text_align = g_options.lightbox_textpanel_desc_text_align;
			
			if(g_options.lightbox_textpanel_desc_text_align)
				objOptions.textpanel_desc_text_align = g_options.lightbox_textpanel_desc_text_align;
			
		}
				
		g_objTextPanel.setOptions(objOptions);
		
		g_objTextPanel.refresh(true, true);
		
		handlePanelHeight("positionTextPanelWide");
		g_objTextPanel.positionPanel();
	}
	
	/**
	 * hide top panel
	 */
	function hideTopPanel(){
				
		if(!g_objTopPanel)
			return(false);
		
		g_objTopPanel.hide();
	}
	
	
	/**
	 * show top panel
	 */
	function showTopPanel(){
		
		if(!g_objTopPanel)
			return(false);
		
		g_objTopPanel.show();
	}
	
	
	function __________COMPACT_ONLY_________(){};

	/**
	 * handle slider image height according the textpanel height
	 * refresh the slider if the height is not in place
	 */
	function handleCompactHeight(objImageSize){
				
		if(g_temp.isOpened == false)
			return(false);
		
		if(!g_objTextPanel)
			return(false);
		
		if(!g_objSlider)
			return(false);
		
		var wrapperSize = g_functions.getElementSize(g_objWrapper);
		var textPanelSize = g_objTextPanel.getSize();
		
		if(textPanelSize.width == 0 || textPanelSize.height > 120)
			return(false);
		
		if(!objImageSize){
			var objImage = g_objSlider.getSlideImage();
			var objImageSize = g_functions.getElementSize(objImage);
		}
		
		if(objImageSize.height == 0 || objImageSize.width == 0)
			return(false);
		
		//check elements end size
		var totalBottom = objImageSize.bottom + textPanelSize.height;
		
		if(totalBottom < wrapperSize.height)
			return(false);
		
		var sliderOptions = g_objSlider.getOptions();
		
		var imagePaddingBottom = textPanelSize.height;
		
		if(imagePaddingBottom != sliderOptions.slider_image_padding_bottom){
			
			var objOptions = {
					slider_image_padding_bottom: imagePaddingBottom
			};
			
			if(g_objSlider.isAnimating() == false){
				g_objSlider.setOptions(objOptions);
				g_objSlider.refreshSlideItems();
				return(true);
			}
			
		}
		
		return(false);
	}
	
	/**
	 * set text panel top of compact mode
	 */
	function setCompactTextpanelTop(objImageSize, positionPanel){
		
		if(!objImageSize){
			var objImage = g_objSlider.getSlideImage();
			var objImageSize = g_functions.getElementSize(objImage);
		}
		
		g_temp.textPanelTop = objImageSize.bottom;
		
		if(positionPanel === true)
			g_objTextPanel.positionPanel(g_temp.textPanelTop, g_temp.textPanelLeft);
	}
	
	
	/**
	 * handle text panel width on compact mode, 
	 * run when the image is ready. 
	 * Set top position of the panel as well
	 * position numbers as well
	 */
	function handleCompactTextpanelSizes(showTextpanel){
			
		var wrapperSize = g_functions.getElementSize(g_objWrapper);
		var objImage = g_objSlider.getSlideImage();
		var objImageSize = g_functions.getElementSize(objImage);
		
		if(objImageSize.width == 0)
			return(false);
		
		
		g_temp.textPanelLeft = objImageSize.left;
		g_temp.textPanelTop = objImageSize.bottom;

		var textPanelWidth = objImageSize.width;
		
		if(g_objNumbers){
			
			var objNumbersSize = g_functions.getElementSize(g_objNumbers);
			textPanelWidth -= objNumbersSize.width;
			
			//place numbers object
			var numbersLeft = objImageSize.right - objNumbersSize.width;
			g_functions.placeElement(g_objNumbers, numbersLeft, g_temp.textPanelTop);
		}
			
			
		if(g_objTextPanel){
			g_objTextPanel.show();
			g_objTextPanel.refresh(true, true, textPanelWidth);
			setCompactTextpanelTop(objImageSize);
		}
		
		var isChanged = handleCompactHeight(objImageSize);
		
		if(isChanged == false){
			
			g_temp.positionFrom = "handleCompactTextpanelSizes";
			
			if(g_objTextPanel){
				g_objTextPanel.positionPanel(g_temp.textPanelTop, g_temp.textPanelLeft);
				if(showTextpanel === true){
					showTextpanel();
					showNumbers();
				}
			}
			
		}
		
	}
	
	
	
	/**
	 * return that current slider image is in place
	 */
	function isSliderImageInPlace(){

		if(g_objSlider.isCurrentSlideType("image") == false)
			return(true);
		
		var isImageInPlace = (g_objSlider.isCurrentImageInPlace() == true);
				
		return(isImageInPlace);
	}
	
	
	/**
	 * position the arrows inside mode
	 */
	function positionArrowsInside(toShow, isAnimation){
				
		if(g_temp.isArrowsInside == false)
			return(false);
		
		if(!g_objArrowLeft)
			return(false);
		
		var isImageInPlace = isSliderImageInPlace();
		
		g_objArrowLeft.show();
		g_objArrowRight.show();
		
		g_temp.positionFrom = "positionArrowsInside";
		
		if(g_temp.isArrowsOnHoverMode == true && isImageInPlace == true && isMouseInsideImage() == false)
			hideArrows(true);
		
		if(isImageInPlace == false){
			var leftArrowLeft = g_functions.getElementRelativePos(g_objArrowLeft, "left", g_options.lightbox_arrows_offset);
			var leftArrowTop = g_functions.getElementRelativePos(g_objArrowLeft, "middle");
						
			var rightArrowLeft = g_functions.getElementRelativePos(g_objArrowRight, "right", g_options.lightbox_arrows_offset);
			var rightArrowTop = leftArrowTop;

		}else{
			
			var objImage = g_objSlider.getSlideImage();
			var objImageSize = g_functions.getElementSize(objImage);
			var objSliderSize = g_functions.getElementSize(g_objSlider.getElement());
						
			var leftArrowLeft = g_functions.getElementRelativePos(g_objArrowLeft, "left", 0, objImage) + objImageSize.left + g_options.lightbox_arrows_inside_offset;
			var leftArrowTop = g_functions.getElementRelativePos(g_objArrowLeft, "middle", 0, objImage) + objImageSize.top;
			var rightArrowLeft = g_functions.getElementRelativePos(g_objArrowLeft, "right", 0, objImage) + objImageSize.left - g_options.lightbox_arrows_inside_offset;
			var rightArrowTop = leftArrowTop;
			
		}
		
		
		//place the image with animation or not
		if(isAnimation === true){

			var objCssLeft = {
					left: leftArrowLeft,
					top: leftArrowTop
			};
			
			var objCssRight = {
					left: rightArrowLeft,
					top: rightArrowTop
			};
			
			g_objArrowLeft.stop().animate(objCssLeft,{
				duration: g_temp.fadeDuration
			});
			
			g_objArrowRight.stop().animate(objCssRight,{
				duration: g_temp.fadeDuration
			});
			
			
		}else{
			g_objArrowLeft.stop();
			g_objArrowRight.stop();
			
			g_functions.placeElement(g_objArrowLeft, leftArrowLeft, leftArrowTop);
			g_functions.placeElement(g_objArrowRight, rightArrowLeft, rightArrowTop);
		}
		
		
		if(toShow == true)
			showArrows(isAnimation);
		
	}
	
	
	
	/**
	 * position close button for compact type
	 */
	function positionCloseButton(toShow, isAnimation){
		
		g_temp.positionFrom = null;
		
		var isImageInPlace = isSliderImageInPlace();
		
		var minButtonTop = 2;
		var maxButtonLeft = g_functions.getElementRelativePos(g_objButtonClose, "right", 2, g_objWrapper);
		
		if(isImageInPlace == false){	//put image to corner
			
			var closeButtonTop = minButtonTop;
			var closeButtonLeft = maxButtonLeft;
			
		}else{
			var objImage = g_objSlider.getSlideImage();
			var objImageSize = g_functions.getElementSize(objImage);
			var objSliderSize = g_functions.getElementSize(g_objSlider.getElement());
			var objButtonSize = g_functions.getElementSize(g_objButtonClose);
			
			//some strange bug
			if(objSliderSize.top == objSliderSize.height)	
				objSliderSize.top = 0;
			
			var closeButtonLeft = objSliderSize.left + objImageSize.right - objButtonSize.width / 2 + g_options.lightbox_compact_closebutton_offsetx;
			var closeButtonTop = objSliderSize.top + objImageSize.top - objButtonSize.height / 2 - g_options.lightbox_compact_closebutton_offsety;
			
			if(closeButtonTop < minButtonTop)
				closeButtonTop = minButtonTop;
			
			if(closeButtonLeft > maxButtonLeft)
				closeButtonLeft = maxButtonLeft;
			
		}
		
		//place the image with animation or not
		if(isAnimation === true){
			var objCss = {
					left: closeButtonLeft,
					top: closeButtonTop
			};
			
			g_objButtonClose.stop().animate(objCss,{
				duration: g_temp.fadeDuration
			});
			
		}else{
			g_objButtonClose.stop();
			g_functions.placeElement(g_objButtonClose, closeButtonLeft, closeButtonTop);
		}
		
		if(toShow === true)
			showCloseButton(isAnimation);
		
	}
	
	
	/**
	 * hide close button
	 */
	function hideCompactElements(){
		
		if(g_objButtonClose)
			g_objButtonClose.stop().fadeTo(g_temp.fadeDuration, 0);
		
		hideTextPanel();
		
		hideNumbers();
		
		g_temp.positionFrom = "hideCompactElements";
		if(g_temp.isArrowsInside == true)
			hideArrows();
	}

	
	/**
	 * actual hide all compact type elements
	 */
	function actualHideCompactElements(){
		
		if(g_objButtonClose)
			g_objButtonClose.hide();
		
		if(g_objArrowLeft && g_temp.isArrowsInside == true){
			g_objArrowLeft.hide();
			g_objArrowRight.hide();
		}
		
		if(g_objNumbers)
			g_objNumbers.hide();
		
		if(g_objTextPanel)
			g_objTextPanel.hide();
		
	}
	
	
	function __________COMMON_________(){};
	
	
	/**
	 * position the elements
	 */
	function positionElements(){
						
		var size = g_functions.getElementSize(g_objWrapper);
		
		//position top panel:
		if(g_objTopPanel)
			g_functions.setElementSizeAndPosition(g_objTopPanel, 0, 0, size.width, g_temp.topPanelHeight);
		
		//position arrows
		if(g_objArrowLeft && g_temp.isArrowsInside == false){
			
			if(g_options.lightbox_hide_arrows_onvideoplay == true){
				g_objArrowLeft.show();
				g_objArrowRight.show();
			}
			
			g_functions.placeElement(g_objArrowLeft, "left", "middle", g_options.lightbox_arrows_offset);
			g_functions.placeElement(g_objArrowRight, "right", "middle", g_options.lightbox_arrows_offset);
		}		
		
		if(g_temp.isCompact == false)
			g_functions.placeElement(g_objButtonClose, "right", "top", 2, 2);
		
		//place text panel
		if(g_objTextPanel){
			
			g_temp.positionFrom = "positionElements";
			
			if(g_temp.isCompact == false)
				positionTextPanelWide(size);
			else{
				showTextPanel();
				showNumbers();
			}
			
		}
		
		var sliderWidth = size.width;
		var sliderHeight = size.height;	
		var sliderTop = 0;
		var sliderLeft = 0;
		
		if(g_objSlider){
			
			if(g_objTopPanel){
				var topPanelHeight = g_objTopPanel.height();
				var objOptions = {
						slider_image_padding_top: topPanelHeight
				};
				g_objSlider.setOptions(objOptions);
			}
			
			g_objSlider.setSize(sliderWidth, sliderHeight);
			g_objSlider.setPosition(sliderLeft, sliderTop);
		}
		
	}
	
	
	/**
	 * hide the text panel
	 */
	function hideTextPanel(){
		
		if(g_objTextPanel)
			g_objTextPanel.getElement().stop().fadeTo(g_temp.fadeDuration, 0);
		
	}
	
	
	/**
	 * hide the numbers text
	 */
	function hideNumbers(){
		
		if(g_objNumbers)
			g_objNumbers.stop().fadeTo(g_temp.fadeDuration, 0);
	}
	
	
	/**
	 * is mouse inside image
	 */
	function isMouseInsideImage(){
		if(!g_temp.lastMouseX)
			return(true);
		var obj = {
				pageX: g_temp.lastMouseX, 
				pageY: g_temp.lastMouseY
			};
	
		var isMouseInside = g_objSlider.isMouseInsideSlideImage(obj);
		
		return(isMouseInside);
	}
	
	
	/**
	 * hide the arrows
	 */
	function hideArrows(noAnimation, isForce){
		
		if(!g_objArrowLeft)
			return(false);
				
		//don't hide the arrows if mouse inside image
		if(g_temp.isArrowsOnHoverMode == true && isForce === false){
			if(isMouseInsideImage() == true);
				return(true);
		}
		
		if(noAnimation === true){
			g_objArrowLeft.stop().fadeTo(0, 0);
			g_objArrowRight.stop().fadeTo(0, 0);
		}else{
			g_objArrowLeft.stop().fadeTo(g_temp.fadeDuration, 0);
			g_objArrowRight.stop().fadeTo(g_temp.fadeDuration, 0);
		}
				
	}
	
	/**
	 * get if the arrows are hidden
	 */
	function isArrowsHidden(){
		
		if(!g_objArrowLeft)
			return(true);
		if(g_objArrowLeft.is(":visible") == false)
			return(true);
		
		var opacity = g_objArrowLeft.css("opacity");
		if(opacity != 1)
			return(true);
		
		return(false);
	}
	
	/**
	 * show the arrows
	 */
	function showArrows(noStop, fromHover){
		
		if(!g_objArrowLeft)
			return(false);
		
		//don't show every time on arrowsonhover mode
		if(g_temp.isArrowsOnHoverMode == true && fromHover !== true && isSliderImageInPlace() == true)
			return(true);
		
		//don't show if swiping
		if(g_objSlider.isSwiping() == true)
			return(true);
			
		if(noStop !== true){
			g_objArrowLeft.stop();
			g_objArrowRight.stop();
		}
		
		g_objArrowLeft.fadeTo(g_temp.fadeDuration, 1);
		g_objArrowRight.fadeTo(g_temp.fadeDuration, 1);
		
	}

	
	
	
	
	/**
	 * show close button
	 */
	function showCloseButton(noStop){
		
		if(noStop !== true)
			g_objButtonClose.stop();
		
		g_objButtonClose.fadeTo(g_temp.fadeDuration, 1);
	}
	
	
	/**
	 * update text panel text of the curren item
	 */
	function updateTextPanelText(currentItem){
		
		if(!g_objTextPanel)
			return(false);
		
		if(!currentItem)
			var currentItem = g_objSlider.getCurrentItem();
		
		g_objTextPanel.setTextPlain(currentItem.title, currentItem.description);
	}

	
	/**
	 * update numbers text
	 */
	function updateNumbersText(currentItem){
		
		if(!g_objNumbers)
			return(false);
		
		if(!currentItem)
			var currentItem = g_objSlider.getCurrentItem();
		
		var numItems = g_gallery.getNumItems();
		var numCurrentItem = currentItem.index + 1;
		g_objNumbers.html(numCurrentItem + " / " + numItems);
	}
	
	
	/**
	 * show the text panel
	 */
	function showTextPanel(){
		
		if(!g_objTextPanel)
			return(false);
		
		g_objTextPanel.getElement().show().stop().fadeTo(g_temp.fadeDuration, 1);
		
	}

	
	/**
	 * Show the numbers object
	 */
	function showNumbers(){
		
		if(g_objNumbers)
			g_objNumbers.stop().fadeTo(g_temp.fadeDuration, 1);
	}
	
	
	function __________EVENTS_________(){};
	
	
	/**
	 * on start dragging slider item event. hide the elements
	 */
	function onSliderDragStart(){
		if(g_temp.isCompact == false)
			return(true);
		
		hideCompactElements();
	}

	
	/**
	 * on zoom change
	 * move the assets of compact to their places
	 */
	function onZoomChange(){
		if(g_temp.isCompact == false)
			return(true);
		
		g_temp.positionFrom = "onZoomChange";
	
		positionCloseButton(false, true);
		positionArrowsInside(false, true);
		
		//handle compact text panel mode
		if(g_temp.isCompact == true){
			var isImageInPlace = (g_objSlider.isCurrentSlideType("image") && g_objSlider.isCurrentImageInPlace() == true);
			if(isImageInPlace == false){
				hideTextPanel();
				hideNumbers();
			}
			else{
				g_temp.positionFrom = "onZoomChange";
				showTextPanel();
				showNumbers();
			}
		}
		
	}
	

	/**
	 * after return slider to it's place
	 * show close button
	 */
	function onSliderAfterReturn(){
		
		if(g_temp.isCompact == false)
			return(true);
		
		g_temp.positionFrom = "onSliderAfterReturn";
		
		positionCloseButton(true);
		positionArrowsInside(true);
		
		var isChanged = handleCompactHeight();
		if(isChanged == false)
			handleCompactTextpanelSizes();
		
		showTextPanel();
		showNumbers();
	}
	
	
	/**
	 * after put image to the slide
	 * position compact elements
	 */
	function onSliderAfterPutImage(data, objSlide){
				
		objSlide = jQuery(objSlide);
				
		if(g_temp.isCompact == false)
			return(true);

		if(g_objSlider.isSlideCurrent(objSlide) == false)
			return(true);
				
		g_temp.positionFrom = "onSliderAfterPutImage";
		
		positionCloseButton(true);
		
		positionArrowsInside(true);
		
		handleCompactTextpanelSizes();
	}
	
	
	/**
	 * on slider transition end, handle panel height
	 */
	function onSliderTransitionEnd(){
		
		var sliderOptions = g_objSlider.getOptions();
		var imagePaddingTop = sliderOptions.slider_image_padding_top;
		
		//handle wide
		if(g_objTopPanel){
			var panelHeight = g_objTopPanel.height();
			
			if(panelHeight != imagePaddingTop)
				refreshSliderItem(panelHeight);
		}
		
		//handle compact
		if(g_temp.isCompact == true){
			
			updateTextPanelText();
			updateNumbersText();
			
			g_temp.positionFrom = "onSliderTransitionEnd";
			
			positionCloseButton(true);
			positionArrowsInside(true);

			if(g_objSlider.isSlideActionActive() == false){
				var isChanged = handleCompactHeight();
				if(isChanged == false)
					handleCompactTextpanelSizes();
			}
			
			showTextPanel();
			showNumbers();
			
		}
		
	}
	
		
	/**
	 * on item change
	 * update numbers text and text panel text/position
	 */
	function onItemChange(data, currentItem){
		
		if(g_temp.isCompact == false){	//wide mode
			
			if(g_objNumbers)
				updateNumbersText(currentItem);
			
			if(g_objTextPanel){
				updateTextPanelText(currentItem);
				
				//update panel height only if the lightbox is already opened, and the items changed within it.
				if(g_temp.isRightNowOpened == false){
					g_objTextPanel.positionElements(false);
					handlePanelHeight("onchange");
					g_objTextPanel.positionPanel();
				}
				
			}
			
		}else{
			
			if(g_objSlider.isAnimating() == false){
				
				if(g_objTextPanel)
					updateTextPanelText(currentItem);
				
				if(g_objNumbers)
					updateNumbersText(currentItem);
			}
		
		}
		
		
		//trigger lightbox init event
		if(g_temp.isSliderChangedOnce == false){
			g_temp.isSliderChangedOnce = true;
			g_objThis.trigger(t.events.LIGHTBOX_INIT);
		}
		
	}
	
	
	/**
	 * on slider click
	 */
	function onSliderClick(data, event){
		
		var slideType = g_objSlider.getSlideType();
		if(slideType != "image" && g_temp.isCompact == false && g_objSlider.isSlideActionActive() )
			return(true);
		
		var isPreloading = g_objSlider.isPreloading();
		if(isPreloading == true){
			t.close("slider");
			return(true);
		}
		
		//close the lightbox on empty space click
		if(g_options.lightbox_close_on_emptyspace == true){
			
			var isInside = g_objSlider.isMouseInsideSlideImage(event);
			
			if(isInside == false)
				t.close("slider_inside");
		}
		
	}
	
	
	/**
	 * on lightbox resize
	 */
	function onResize(){
		
		positionElements();
	}
	
	
	
	/**
	 * on start play - hide the side buttons
	 */
	function onPlayVideo(){
		
		if(g_objTopPanel){
			hideTopPanel();
		}else{
			if(g_objNumbers)
				g_objNumbers.hide();
		}
		
		if(g_objArrowLeft && g_options.lightbox_hide_arrows_onvideoplay == true){
			g_objArrowLeft.hide();			
			g_objArrowRight.hide();			
		}
		
	}
	
	
	/**
	 * on stop video - show the side buttons
	 */
	function onStopVideo(){

		if(g_objTopPanel){
			showTopPanel();
			handlePanelHeight("onStopVideo");
		}else{
			
			if(g_objNumbers)
				g_objNumbers.show();
		}
		
		if(g_objArrowLeft && g_options.lightbox_hide_arrows_onvideoplay == true){
			g_objArrowLeft.show();
			g_objArrowRight.show();			
		}
		
	}
	
	/**
	 * on gallery keypres, do operations
	 */
	function onKeyPress(data, key, event){
		
		var isScrollKey = false;
		
		switch(key){
			case 27:		//escape - close lightbox
				if(g_temp.isOpened == true)
					t.close("keypress");
			break;
			case 38:	//up and down arrows
			case 40:
			case 33:	//page up and down
			case 34:
				isScrollKey = true;
			break;
		}
		
		if(g_temp.isOpened == true && isScrollKey == true)
			event.preventDefault();
		
		
	}
	
	/**
	 * on image mouse enter event
	 */
	function onImageMouseEnter(){
		
		if(g_temp.isArrowsOnHoverMode == true)
			showArrows(false, true);
		
	}
	
	/**
	 * on image mouse leave
	 */
	function onImageMouseLeave(event){
		
		g_temp.positionFrom = "hideCompactElements";
		
		if(g_temp.isArrowsOnHoverMode == true && isSliderImageInPlace() == true)
			hideArrows(false, true);
		
	}
	
	
	/**
	 * on mouse move event
	 * show arrows if inside image
	 */
	function onMouseMove(event){
		 g_temp.lastMouseX = event.pageX;
		 g_temp.lastMouseY = event.pageY;
		
		 var isHidden = isArrowsHidden()
		 
		 
		 if(isHidden == true && isMouseInsideImage() && g_objSlider.isAnimating() == false){
			 g_temp.positionFrom = "onMouseMove";
			 if(g_objArrowLeft && g_objArrowLeft.is(":animated") == false)
				 showArrows(false, true);
		 }
		 
	}

	
	/**
	 * on mouse wheel
	 */
	function onMouseWheel(event, delta, deltaX, deltaY){
		
		if(g_temp.isOpened == false)
			return(true);
		
		switch(g_options.gallery_mousewheel_role){
			default:
			case "zoom":
				var slideType = g_objSlider.getSlideType();
				if(slideType != "image")
					event.preventDefault();
			break;
			case "none":
				event.preventDefault();
			break;
			case "advance":
				g_gallery.onGalleryMouseWheel(event, delta, deltaX, deltaY);
			break;
		}
		
	}
	
	
	/**
	 * init events
	 */
	function initEvents(){
		
		g_objOverlay.on("touchstart", function(event){
			event.preventDefault();
		});
		
		g_objOverlay.on("touchend", function(event){
			t.close("overlay");
		});
		
		
		g_functions.addClassOnHover(g_objArrowRight, "ug-arrow-hover");
		g_functions.addClassOnHover(g_objArrowLeft, "ug-arrow-hover");
		
		g_functions.addClassOnHover(g_objButtonClose);
		
		g_gallery.setNextButton(g_objArrowRight);
		g_gallery.setPrevButton(g_objArrowLeft);
		
		g_objButtonClose.click(function(){
			t.close("button");
		});
		
		g_objGallery.on(g_gallery.events.ITEM_CHANGE, onItemChange);
		
		if(g_objSlider){
			jQuery(g_objSlider).on(g_objSlider.events.TRANSITION_END, onSliderTransitionEnd);
			
			//on slider click event
			jQuery(g_objSlider).on(g_objSlider.events.CLICK, onSliderClick);
			
			//on slider video 
			var objVideo = g_objSlider.getVideoObject();
					
			jQuery(objVideo).on(objVideo.events.PLAY_START, onPlayVideo);
			jQuery(objVideo).on(objVideo.events.PLAY_STOP, onStopVideo);
			
			//handle close button hide / appear
			jQuery(g_objSlider).on(g_objSlider.events.START_DRAG, onSliderDragStart);
			jQuery(g_objSlider).on(g_objSlider.events.TRANSITION_START, onSliderDragStart);
			
			jQuery(g_objSlider).on(g_objSlider.events.AFTER_DRAG_CHANGE, onSliderAfterReturn);
			jQuery(g_objSlider).on(g_objSlider.events.AFTER_RETURN, onSliderAfterReturn);
			jQuery(g_objSlider).on(g_objSlider.events.AFTER_PUT_IMAGE, onSliderAfterPutImage);
			
			jQuery(g_objSlider).on(g_objSlider.events.ZOOM_CHANGE, onZoomChange);
			
			jQuery(g_objSlider).on(g_objSlider.events.IMAGE_MOUSEENTER, onImageMouseEnter);
			jQuery(g_objSlider).on(g_objSlider.events.IMAGE_MOUSELEAVE, onImageMouseLeave);

		}
		
		//on resize
		 jQuery(window).resize(function(){
			 
			 if(g_temp.isOpened == false)
				 return(true);
			 
			 g_functions.whenContiniousEventOver("lightbox_resize", onResize, 100);
		 });
		 
		 g_objGallery.on(g_gallery.events.GALLERY_KEYPRESS, onKeyPress);
		 
		 //store last mouse x and y
		 if(g_temp.isArrowsOnHoverMode == true){
			 
			 jQuery(document).bind('mousemove', onMouseMove);
		 
		 }
		
		//on mouse wheel - disable functionality if video
		g_objWrapper.on("mousewheel", onMouseWheel);

	}

	
	/**
	 * destroy the lightbox events and the html it created
	 */
	this.destroy = function(){
		
		jQuery(document).unbind("mousemove");
		
		g_objOverlay.off("touchstart");
		g_objOverlay.off("touchend");
		g_objButtonClose.off("click");
		g_objGallery.off(g_gallery.events.ITEM_CHANGE);
		
		if(g_objSlider){
			jQuery(g_objSlider).off(g_objSlider.events.TRANSITION_END);
			jQuery(g_objSlider).off(g_objSlider.events.CLICK);
			jQuery(g_objSlider).off(g_objSlider.events.START_DRAG);
			jQuery(g_objSlider).off(g_objSlider.events.TRANSITION_START);
			jQuery(g_objSlider).off(g_objSlider.events.AFTER_DRAG_CHANGE);
			jQuery(g_objSlider).off(g_objSlider.events.AFTER_RETURN);
			
			var objVideo = g_objSlider.getVideoObject();
			jQuery(objVideo).off(objVideo.events.PLAY_START);
			jQuery(objVideo).off(objVideo.events.PLAY_STOP);

			jQuery(g_objSlider).on(g_objSlider.events.IMAGE_MOUSEENTER, onImageMouseEnter);
			jQuery(g_objSlider).on(g_objSlider.events.IMAGE_MOUSELEAVE, onImageMouseLeave);
			
			g_objSlider.destroy();
		}
		
		jQuery(window).unbind("resize");
		g_objGallery.off(g_gallery.events.GALLERY_KEYPRESS, onKeyPress);
		
		g_objWrapper.off("mousewheel");
		
		//remove the html
		g_objWrapper.remove();
	}
	
	
	/**
	 * open the lightbox with some item index
	 */
	this.open = function(index){
		
		var objItem = g_gallery.getItem(index);
		
		g_temp.isOpened = true;
		
		//set if the panel right now opened
		g_temp.isRightNowOpened = true;
		setTimeout(function(){g_temp.isRightNowOpened = false},100);
		
		if(g_objSlider){
			g_objSlider.setItem(objItem, "lightbox_open");
		}
		
		if(g_objTextPanel){
			g_objTextPanel.setTextPlain(objItem.title, objItem.description);
		}
		
		g_objOverlay.stop().fadeTo(0,0);
		g_objWrapper.show();
		g_objWrapper.fadeTo(0,1);
		
		//show the overlay
		g_objOverlay.stop().fadeTo(g_temp.fadeDuration, g_options.lightbox_overlay_opacity);
		
		positionElements();
		
		if(g_temp.isCompact == true){
			
			var isPreloading = g_objSlider.isPreloading();
			if(isPreloading == true){
				
				actualHideCompactElements();
				
			}else{
				
				//hide only arrows if they are inside
				if(g_temp.isArrowsInside == true){
					g_objArrowLeft.hide();
					g_objArrowRight.hide();
				}
				
			}
				
		}
		
		if(g_objSlider)
			g_objSlider.startSlideAction();
		
		//trigger gallery event
		g_objGallery.trigger(g_gallery.events.OPEN_LIGHTBOX, objItem);
		
	}
	
	
	/**
	 * close the lightbox
	 */
	this.close = function(fromWhere){
				
		g_temp.isOpened = false;
		
		if(g_temp.isCompact == true)
			hideCompactElements();
		
		if(g_objSlider)
			g_objSlider.stopSlideAction();
		
		var slideType = g_objSlider.getSlideType();
				
		if(slideType != "image")
			g_objWrapper.hide();
		else{
			g_objWrapper.fadeTo(g_temp.fadeDuration,0,function(){
				g_objWrapper.hide();
			});
		}

		g_objGallery.trigger(g_gallery.events.CLOSE_LIGHTBOX);
		
	}
	
	
	/**
	 * external init function
	 */
	this.init = function(gallery, customOptions){
		
		initLightbox(gallery, customOptions);
	}
	
	
	/**
	 * switch to wide mode from compact mode
	 */
	function switchToWide(){
		g_temp.isCompact = false;
		modifyOptions();
		
		g_temp.isArrowsInside = false;
		g_temp.isArrowsOnHoverMode = false;
	
		g_options = jQuery.extend({}, g_temp.originalOptions);
		
		g_options.lightbox_arrows_position = "sides";
		
		g_objSlider.setOptions(g_options);
	}
	
	
	/**
	 * external put html function
	 */
	this.putHtml = function(){
		
		//check if switch to wide mode
		var isSmallWindow = g_gallery.isSmallWindow();
		
		if(isSmallWindow && g_temp.isCompact == true)
			switchToWide();
		
		putLightboxHtml();
	}
	
	
	/**
	 * run lightbox elements
	 */
	this.run = function(){
		
		setProperties();
		
		if(g_objSlider)
			g_objSlider.run();
		
		initEvents();
	}
	
	
	
}



/**
 * carousel class
 */
function UGCarousel(){

	var t = this, g_objThis = jQuery(this);
	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objWrapper;	
	var g_functions = new UGFunctions(), g_arrItems, g_objTileDesign = new UGTileDesign();
	var g_thumbs = new UGThumbsGeneral(), g_objCarouselWrapper, g_objInner, arrOrigTiles = [];
	
	var g_options = {
			carousel_padding: 8,							//padding at the sides of the carousel
			carousel_space_between_tiles: 20,				//space between tiles
			carousel_navigation_numtiles:3,					//number of tiles to scroll when user clicks on next/prev button
			carousel_scroll_duration:500,					//duration of scrolling to tile
			carousel_scroll_easing:"easeOutCubic",			//easing of scrolling to tile animation
			
			carousel_autoplay: true,						//true,false - autoplay of the carousel on start
			carousel_autoplay_timeout: 3000,				//autoplay timeout
			carousel_autoplay_direction: "right",			//left,right - autoplay direction
			carousel_autoplay_pause_onhover: true,			//pause the autoplay on mouse over
			carousel_vertical_scroll_ondrag: false			//vertical screen scroll on carousel drag
	};
	
	this.events = {
			START_PLAY: "carousel_start_play",
			PAUSE_PLAY: "carousel_pause_play",
			STOP_PLAY: "carousel_stop_play"
	};
	
	var g_temp = {
			eventSizeChange: "thumb_size_change",
			isFirstTimeRun:true,  //if run once
			carouselMaxWidth: null,
			tileWidth:0,
			initTileWidth:0,
			initTileHeight:0,
			sideSpace:1500,				//the space that must be filled with items
			spaceActionSize:500,
			numCurrent:0,
			touchActive: false,
			startInnerPos: 0,
			lastTime:0,
			startTime:0,
			startMousePos:0,
			lastMousePos:0,
			scrollShortDuration: 200,
			scrollShortEasing: "easeOutQuad",
			handle:null,
			isPlayMode: false,
			isPaused: false,
			storedEventID: "carousel"
	};

	
	function __________GENERAL_________(){};
	
	/**
	 * init the gallery
	 */
	function init(gallery, customOptions){
		
		g_objects = gallery.getObjects();
		g_gallery = gallery;
		g_objGallery = jQuery(gallery);
		g_objWrapper = g_objects.g_objWrapper;
		g_arrItems = g_objects.g_arrItems;
		
		g_options = jQuery.extend(g_options, customOptions);
		
		g_objTileDesign.setFixedMode();		
		g_objTileDesign.setApproveClickFunction(isApproveTileClick);
		g_objTileDesign.init(gallery, g_options);
		
		g_thumbs = g_objTileDesign.getObjThumbs();
		g_options = g_objTileDesign.getOptions();
		
		g_temp.initTileWidth = g_options.tile_width;
		g_temp.initTileHeight = g_options.tile_height;
		
		g_temp.tileWidth = g_options.tile_width;
	}
	
	
	/**
	 * set the grid panel html
	 */
	function setHtml(objParent){
		
		if(!objParent)
			var objParent = g_objWrapper;
		
		var html = "<div class='ug-carousel-wrapper'><div class='ug-carousel-inner'></div></div>";
		g_objWrapper.append(html);
		
		g_objCarouselWrapper = g_objWrapper.children(".ug-carousel-wrapper");
		g_objInner = g_objCarouselWrapper.children(".ug-carousel-inner");
		
		g_objTileDesign.setHtml(g_objInner);
		
		g_thumbs.getThumbs().fadeTo(0,1);
		
	}
	
	
	/**
	 * resize tiles to new width / height
	 */
	function resizeTiles(newTileWidth, newTileHeight){
		
		if(!newTileHeight){
			
			var newTileHeight = g_temp.initTileHeight / g_temp.initTileWidth * newTileWidth;
			
		}
		
		g_temp.tileWidth = newTileWidth;
		
		//update all options
		var optUpdate = {
				tile_width: newTileWidth, 
				tile_height: newTileHeight
		};
		
		g_objTileDesign.setOptions(optUpdate);
		
		g_options.tile_width = newTileWidth;
		g_options.tile_height = newTileHeight;
		
		//resize all tiles
		g_objTileDesign.resizeAllTiles(newTileWidth);
		
		//reposition tiles
		positionTiles(true);		//must to position tiles right after size change, for inner size change
	}
	
	/**
	 * run the gallery after init and set html
	 */
	function run(){
		
		//validation
		if(g_temp.carouselMaxWidth === null){
			throw new Error("The carousel width not set");
			return(false);
		}
		
		//if the size changed, change it anyway
		if(g_temp.tileWidth < g_temp.initTileWidth){
						
			var newTileWidth = g_temp.carouselMaxWidth - g_options.carousel_padding * 2;
			if(newTileWidth > g_temp.initTileWidth)
				newTileWidth = g_temp.initTileWidth;
			
			resizeTiles(newTileWidth);
			
			var numTiles = g_functions.getNumItemsInSpace(g_temp.carouselMaxWidth, newTileWidth, g_options.carousel_space_between_tiles);
			
		}else{
			
			//check if need to lower tiles size
			var numTiles = g_functions.getNumItemsInSpace(g_temp.carouselMaxWidth, g_temp.tileWidth, g_options.carousel_space_between_tiles);
			
			//if no tiles fit, resize the tiles
			if(numTiles <= 0){
				numTiles = 1;
				
				var newTileWidth = g_temp.carouselMaxWidth - g_options.carousel_padding * 2;
				
				resizeTiles(newTileWidth);
			}
			
		}
				
		//set wrapper width
		var realWidth = g_functions.getSpaceByNumItems(numTiles, g_temp.tileWidth, g_options.carousel_space_between_tiles);
		realWidth += g_options.carousel_padding * 2;
		
		g_objCarouselWrapper.width(realWidth);
		
		if(g_temp.isFirstTimeRun == true){
			
			initEvents();
			
			g_objTileDesign.run();
			
			//set data indexes to tiles
			jQuery.each(g_arrItems, function(index, item){
				item.objThumbWrapper.data("index", index);

				g_objWrapper.trigger(g_temp.eventSizeChange, [item.objThumbWrapper,true]);
				item.objTileOriginal = item.objThumbWrapper.clone(true, true);
			});
						
			positionTiles(true);		//set heights at first time
			
			if(g_options.carousel_autoplay == true)
				t.startAutoplay();
		}else{
			
			if(g_options.carousel_autoplay == true)
				t.pauseAutoplay();
			
			scrollToTile(0, false);
			
			if(g_options.carousel_autoplay == true)
				t.startAutoplay();
		}
		
		positionElements();
		
		g_temp.isFirstTimeRun = false;
	}
	
	
	
	function __________GETTERS_______(){};
	
	/**
	 * get inner position
	 */
	function getInnerPos(){
		return g_functions.getElementSize(g_objInner).left;
	}
	
	/**
	 * get mouse position
	 */
	function getMousePos(event){
		return g_functions.getMousePosition(event).pageX;
	}
	
	
	/**
	 * get all tiles
	 */
	function getTiles(){
		
		var objTiles = g_objInner.children(".ug-thumb-wrapper");
		
		return(objTiles);
	}
	
	
	/**
	 * get num tiles in some space
	 */
	function getNumTilesInSpace(space){
		
		var numItems = g_functions.getNumItemsInSpace(space, g_temp.tileWidth, g_options.carousel_space_between_tiles)
				
		return(numItems);
	}
	
	
	/**
	 * get num tiles
	 */
	function getNumTiles(){
		return getTiles().length;
	}
	
	
	/**
	 * get tile
	 */
	function getTile(numTile){
		validateTileNum(numTile);
		var objTiles = getTiles();
		var objTile = jQuery(objTiles[numTile]);
		
		return(objTile);
	}
	
	
	/**
	 * get first tile in the inner object
	 */
	function getFirstTile(){
				
		return g_objInner.children(".ug-thumb-wrapper").first();
	}
	
	/**
	 * get last tile in the inner object
	 */
	function getLastTile(){
		
		return g_objInner.children(".ug-thumb-wrapper").last();		
	}
	
	
	
	/**
	 * get clone of the time next or prev the given
	 */
	function getTileClones(objTile, numClones, dir){
		
		var index = objTile.data("index");
		if(index == undefined){
			throw new Error("every tile should have index!");			
		}
		
		var arrClonedItems = [];
		
		for(var i=0;i<numClones;i++){			
			
			if(dir == "prev")
				var itemToAdd = g_gallery.getPrevItem(index, true);
			else
				var itemToAdd = g_gallery.getNextItem(index, true);
			
			if(!itemToAdd){
				throw new Error("the item to add is empty");
			}
			
			var clonedTile = itemToAdd.objTileOriginal.clone(true, true);
			
			
			index = itemToAdd.index;	
			
			clonedTile.addClass("cloned");
			arrClonedItems.push(clonedTile);
		}
		
		return(arrClonedItems);
	}
	
	
	/**
	 * get space left from the right
	 */
	function getRemainSpaceRight(){
		var wrapperSize = g_functions.getElementSize(g_objCarouselWrapper);
		var innerSize = g_functions.getElementSize(g_objInner);
		
		var spaceTaken = innerSize.width - wrapperSize.width + innerSize.left;
		var spaceRemain = g_temp.sideSpace - spaceTaken;
				
		return(spaceRemain);
	}
	
	
	/**
	 * get remain space on the left
	 */
	function getRemainSpaceLeft(){
		var spaceTaken = -getInnerPos();
		var spaceRemain = g_temp.sideSpace - spaceTaken;
		return(spaceRemain);
	}
	
	/**
	 * get carousel width
	 */
	function getCarouselWidth(){
		
		var objSize = g_functions.getElementSize(g_objCarouselWrapper);
		return(objSize.width);
	}
	
	/**
	 * get num tiles in the carousel
	 */
	function getNumTilesInCarousel(){
		
		var width = getCarouselWidth();
		
		var numTiles = getNumTilesInSpace(width);
		
		return(numTiles);
	}
	
	
	function __________OTHER_METHODS_______(){};
	
	
	/**
	 * position existing tiles
	 */
	function positionTiles(setHeight){
		
		if(!setHeight)
			var setHeight = false;
		
		var objTiles = getTiles();
				
		var posx = 0;
		var maxHeight = 0, totalWidth;
		
		jQuery.each(objTiles, function(index, objTile){
			objTile = jQuery(objTile);
			g_functions.placeElement(objTile, posx, 0);
			var tileSize = g_functions.getElementSize(objTile);
			posx += tileSize.width + g_options.carousel_space_between_tiles;
			maxHeight = Math.max(maxHeight, tileSize.height);
			if(index == (objTiles.length-1))
				totalWidth = tileSize.right;
		});
		
		//set heights and widths
		g_objInner.width(totalWidth);
				
		maxHeight += g_options.carousel_padding * 2;
		
		if(setHeight === true){
			g_objInner.height(maxHeight);
			g_objCarouselWrapper.height(maxHeight);
		}
				
		scrollToTile(g_temp.numCurrent, false);

		return(totalWidth);
	}
	
	
	/**
	 * validate that the num not more then num tiles
	 */
	function validateTileNum(numTile){

		if(numTile > (getTiles().length-1))
			throw new Error("Wrogn tile number: " + numTile);
	}
	
	
	/**
	 * add tile to left
	 */
	function addTiles(numTiles, dir){
		
		if(dir == "left")
			var anchorTile = getFirstTile();
		else
			var anchorTile = getLastTile();
		
		var clonesType = (dir == "left")?"prev":"next";
		
		var arrNewTiles = getTileClones(anchorTile, numTiles, clonesType);
				
		jQuery.each(arrNewTiles, function(index, objTile){		
			
			if(dir == "left")
				g_objInner.prepend(objTile);
			else
				g_objInner.append(objTile);
			
			g_objWrapper.trigger(g_temp.eventSizeChange, objTile);
			g_objTileDesign.loadTileImage(objTile);
			
		});
		
		
	}
	
	/**
	 * remove some tiles
	 */
	function removeTiles(numTilesToRemove, direction){
		
		validateTileNum(numTiles);
		
		var arrTiles = getTiles();
		var numTiles = arrTiles.length;
		
		for(var i=0; i<numTilesToRemove; i++){
			
			if(direction == "left")
				jQuery(arrTiles[i]).remove();
			else{
				jQuery(arrTiles[numTiles-1-i]).remove();
			}
		}
	}

	
	/**
	 * set inner strip position
	 */
	function setInnerPos(pos){
		var objCss = {
				"left":pos+"px"
		};
		
		g_objInner.css(objCss);
	}
	
	
	/**
	 * scroll to tile by number
	 */
	function scrollToTile(numTile, isAnimation, isShort){
		
		if(isAnimation === undefined){
			var isAnimation = true;
			if(g_objInner.is(":animated"))
				return(true);
		}
				
		var objTile = getTile(numTile);
		var objSize = g_functions.getElementSize(objTile);
		var posScroll = -objSize.left + g_options.carousel_padding;
		
		var objCss = {
				"left":posScroll+"px"
		};
						
		if(isAnimation === true){
			
			var duration = g_options.carousel_scroll_duration;
			var easing = g_options.carousel_scroll_easing;
			
			if(isShort === true){
				duration = g_temp.scrollShortDuration;
				easing = g_temp.scrollShortEasing;
			}
			
			g_objInner.stop(true).animate(objCss ,{
				duration: duration,
				easing: easing,
				queue: false,
				//progress:function(){t.triggerStripMoveEvent()},
				complete: function(){
					g_temp.numCurrent = numTile;
					
					fillSidesWithTiles(true);
				}
			});					
			
		}else{
			g_temp.numCurrent = numTile;
						
			g_objInner.css(objCss);
		}
		
	}
	
	
	/**
	 * get number of neerest tile
	 */
	function getNeerestTileNum(){
		var innerPos = -getInnerPos();
		var numTiles = getNumTilesInSpace(innerPos);
		var tile1Pos = g_functions.getElementSize(getTile(numTiles)).left;
		var tile2Pos = g_functions.getElementSize(getTile(numTiles+1)).left;
				
		if(Math.abs(tile1Pos - innerPos) < Math.abs(tile2Pos - innerPos))
			return(numTiles);
		else			
			return(numTiles+1);
	}
	
	
	/**
	 * get neerest tile to inner position
	 */
	function scrollToNeerestTile(){
		
		var tileNum = getNeerestTileNum();
		scrollToTile(tileNum, true, true);
	}
	
	
	/**
	 * fill the sides with tiles till it fil the sideSpace
	 */
	function fillSidesWithTiles(){
				
		var spaceLeft = getRemainSpaceLeft();
		var spaceRight = getRemainSpaceRight();
		
		var numItemsLeft = 0, numItemsRight = 0, numItemsRemoveLeft = 0, numItemsRemoveRight = 0;
		
		//trace("left: " + spaceLeft+ " right: " + spaceRight);
		
		var numTiles = getNumTiles();
		
		//add tiles to left
		if(spaceLeft > g_temp.spaceActionSize){
			numItemsLeft = getNumTilesInSpace(spaceLeft);		
			addTiles(numItemsLeft, "left");
			
			g_temp.numCurrent += numItemsLeft;
			
		}else if(spaceLeft < -g_temp.spaceActionSize){
			var numItemsRemoveLeft = getNumTilesInSpace(Math.abs(spaceLeft));
			removeTiles(numItemsRemoveLeft, "left");
			g_temp.numCurrent -= numItemsRemoveLeft;
		}
		
		//add tiles to right
		if(spaceRight > g_temp.spaceActionSize){
			numItemsRight = getNumTilesInSpace(spaceRight);
			addTiles(numItemsRight, "right");			
		}else if(spaceRight < -g_temp.spaceActionSize){
			numItemsRemoveRight = getNumTilesInSpace(Math.abs(spaceRight));
			removeTiles(numItemsRemoveRight, "right");			
		}
		
		
		//small validation
		if(numItemsRemoveRight > numTiles){
			
			throw new Error("Can't remove more then num tiles");
		}
			
		//trace(numItemsRemoveRight);
		//trace("numItems: " + getNumTiles());
		
		//scroll to tile and position inner object
		var isPositioned = false;
		if(numItemsLeft || numItemsRight || numItemsRemoveLeft || numItemsRemoveRight){
			
			/*
			debugLine({
				numItemsLeft:numItemsLeft,
				numItemsRight:numItemsRight,
				numItemsRemoveLeft:numItemsRemoveLeft,
				numItemsRemoveRight: numItemsRemoveRight
			});
			*/
			//trace("do something");
			
			positionTiles();			
			isPositioned = true
		}
		
		return(isPositioned);
	}
	
	
	/**
	 * position tiles
	 */
	function positionElements(isFirstTime){
				
		//position inner strip
		g_functions.placeElement(g_objInner, 0, g_options.carousel_padding);
		
		//position sides
		fillSidesWithTiles();
		
	}
	
	
	
	function __________AUTOPLAY_______(){};

	/**
	 * start autoplay
	 */
	this.startAutoplay = function(){
		
		g_temp.isPlayMode = true;
		g_temp.isPaused = false;
		
		g_objThis.trigger(t.events.START_PLAY);
		
		if(g_temp.handle)
			clearInterval(g_temp.handle);
		
		g_temp.handle = setInterval(autoplayStep, g_options.carousel_autoplay_timeout);
		
	}
	
	
	/**
	 * unpause autoplay after pause
	 */
	this.unpauseAutoplay = function(){
		
		if(g_temp.isPlayMode == false)
			return(true);
		
		if(g_temp.isPaused == false)
			return(true);
		
		t.startAutoplay();
	}
	
	
	/**
	 * pause the autoplay
	 */
	this.pauseAutoplay = function(){

		if(g_temp.isPlayMode == false)
			return(true);
		
		g_temp.isPaused = true;
		
		if(g_temp.handle)
			clearInterval(g_temp.handle);
		
		g_objThis.trigger(t.events.PAUSE_PLAY);
		
	}

	
	/**
	 * stop autoplay
	 */
	this.stopAutoplay = function(){
		
		if(g_temp.isPlayMode == false)
			return(true);
		
		g_temp.isPaused = false;
		g_temp.isPlayMode = false;
		
		if(g_temp.handle)
			clearInterval(g_temp.handle);
		
		g_objThis.trigger(t.events.STOP_PLAY);
	}
	
	
	/**
	 * autoplay step, advance the carousel by 1
	 */
	function autoplayStep(){
		
		if(g_options.carousel_autoplay_direction == "left"){
			t.scrollRight(1);
		}else{
			t.scrollLeft(1);
		}
		
	}
	
	function __________EVENTS_______(){};
		
	
	/**
	 * on touch start
	 */
	function onTouchStart(event){
		
		if(g_temp.touchActive == true)
			return(true);
		
		g_temp.touchActive = true;
		
		t.pauseAutoplay();
		
		g_temp.startTime = jQuery.now();	
		g_temp.startMousePos = getMousePos(event);
		g_temp.startInnerPos = getInnerPos();
		g_temp.lastTime = g_temp.startTime;
		g_temp.lastMousePos = g_temp.startMousePos;
		
		g_functions.storeEventData(event, g_temp.storedEventID);
	}

	
	/**
	 * on touch move
	 */
	function onTouchMove(event){
				
		if(g_temp.touchActive == false)
			return(true);
		
		g_functions.updateStoredEventData(event, g_temp.storedEventID);
		
		event.preventDefault();
		
		var scrollDir = null;
		
		if(g_options.carousel_vertical_scroll_ondrag == true)
			scrollDir = g_functions.handleScrollTop(g_temp.storedEventID);
		
		if(scrollDir === "vert")
			return(true);
		
		g_temp.lastMousePos = getMousePos(event);
		
		var diff = g_temp.lastMousePos - g_temp.startMousePos;
		var innerPos = g_temp.startInnerPos + diff;
		var direction = (diff > 0) ? "prev":"next";
		var innerSize = g_functions.getElementSize(g_objInner).width;
		
		//slow down when off limits
		if(innerPos > 0 && direction == "prev"){
			innerPos = innerPos / 3;
		}
		
		if(innerPos < -innerSize && direction == "next"){
			innerPos = g_temp.startInnerPos + diff / 3;
		}
		
		setInnerPos(innerPos);
	}
	
	
	/**
	 * on touch end
	 * change panes or return to current pane
	 */
	function onTouchEnd(event){
		
		if(g_temp.touchActive == false)
			return(true);
		
		//event.preventDefault();
		g_temp.touchActive = false;
		
		scrollToNeerestTile();
		
		t.unpauseAutoplay();
	}
	
	/**
	 * pause the playing
	 */
	function onMouseEnter(event){
		
		if(g_options.carousel_autoplay_pause_onhover == false)
			return(true);
		
		if(g_temp.isPlayMode == true && g_temp.isPaused == false)
			t.pauseAutoplay();
	}
	
	/**
	 * start the playing again
	 */
	function onMouseLeave(event){
		
		if(g_options.carousel_autoplay_pause_onhover == false)
			return(true);
		
		t.unpauseAutoplay();
	}
	
	
	/**
	 * init panel events
	 */
	function initEvents(){
				
		g_objTileDesign.initEvents();
		
		//touch drag events
		//slider mouse down - drag start
		g_objCarouselWrapper.bind("mousedown touchstart",onTouchStart);
		
		//on body move
		jQuery("body").bind("mousemove touchmove",onTouchMove);
		
		//on body mouse up - drag end
		jQuery(window).add("body").bind("mouseup touchend", onTouchEnd);
		
		g_objCarouselWrapper.hover(onMouseEnter, onMouseLeave);
		
	}
	
	
	/**
	 * destroy the carousel events
	 */
	this.destroy = function(){
		
		if(g_temp.handle)
			clearInterval(g_temp.handle);
		
		g_objThis.off(t.events.START_PLAY);		
		g_objThis.off(t.events.STOP_PLAY);		
		
		//touch drag events
		//slider mouse down - drag start
		g_objCarouselWrapper.unbind("mousedown");
		g_objCarouselWrapper.unbind("touchstart");
		
		//on body move
		jQuery("body").unbind("mousemove");
		jQuery("body").unbind("touchmove");
		
		//on body mouse up - drag end
		jQuery(window).add("body").unbind("mouseup").unbind("touchend");
		
		g_objCarouselWrapper.off("mouseenter").off("mouseleave");
		
		g_objTileDesign.destroy();
	}

	
	/**
	 * init function for avia controls
	 */
	this.init = function(gallery, customOptions, width){
		if(width)
			this.setMaxWidth(width);
		
		init(gallery, customOptions);
	}

	
	/**
	 * set the width
	 */
	this.setMaxWidth = function(width){
		
		g_temp.carouselMaxWidth = width;
	}
	
	
	/**
	 * set html
	 */
	this.setHtml = function(objParent){
		setHtml(objParent);
	}
	
	/**
	 * get the carousel element
	 */
	this.getElement = function(){
		return g_objCarouselWrapper;
	}
	
	/**
	 * get tile design object
	 */
	this.getObjTileDesign = function(){
		return(g_objTileDesign);
	}
	
	
	/**
	 * get estimated height
	 */
	this.getEstimatedHeight = function(){
		var height = g_options.tile_height + g_options.carousel_padding * 2;
		return(height);
	}
	
	
	/**
	 * set html and properties
	 */	
	this.run = function(){
		run();
	}
	
	
	/**
	 * scroll to right
	 */
	this.scrollRight = function(tilesToScroll){
		
		if(!tilesToScroll || typeof tilesToScroll == "object")
			var tilesToScroll = g_options.carousel_navigation_numtiles;

		var numTilesInCarousel = getNumTilesInCarousel();
		if(tilesToScroll > numTilesInCarousel)
			tilesToScroll = numTilesInCarousel;
		
		var numPrev = g_temp.numCurrent - tilesToScroll;
		if(numPrev <=0)
			numPrev = 0;
		
		scrollToTile(numPrev);
	}
	
	
	/**
	 * scroll to left
	 */
	this.scrollLeft = function(tilesToScroll){
				
		if(!tilesToScroll || typeof tilesToScroll == "object")
			var tilesToScroll = g_options.carousel_navigation_numtiles;
		
		var numTilesInCarousel = getNumTilesInCarousel();
		if(tilesToScroll > numTilesInCarousel)
			tilesToScroll = numTilesInCarousel;
		
		var numTiles = getNumTiles();
		
		var numNext = g_temp.numCurrent + tilesToScroll;
		if(numNext >= numTiles)
			numNext = numTiles-1;
	
		scrollToTile(numNext);
	}
	
	/**
	 * set scroll left button
	 */
	this.setScrollLeftButton = function(objButton){
		g_functions.setButtonMobileReady(objButton);
		g_functions.setButtonOnClick(objButton, t.scrollLeft);
	}
	
	
	/**
	 * set scroll right button
	 */
	this.setScrollRightButton = function(objButton){
		g_functions.setButtonMobileReady(objButton);
		g_functions.setButtonOnClick(objButton, t.scrollRight);
	}
	
	
	/**
	 * set scroll right button
	 */
	this.setPlayPauseButton = function(objButton){
		g_functions.setButtonMobileReady(objButton);
		
		if(g_temp.isPlayMode == true && g_temp.isPaused == false){
			objButton.addClass("ug-pause-icon");			
		}
		
		g_objThis.on(t.events.START_PLAY, function(){
			objButton.addClass("ug-pause-icon");
		});
		
		g_objThis.on(t.events.STOP_PLAY, function(){
			objButton.removeClass("ug-pause-icon");
		});
		
		g_functions.setButtonOnClick(objButton, function(){
				
				if(g_temp.isPlayMode == false || g_temp.isPaused == true)					
					t.startAutoplay();
				else
					t.stopAutoplay();
				
		});
	}
	
	
	/**
	 * return if passed some significant movement
	 */
	function isApproveTileClick(){
		
		var passedTime = g_temp.lastTime - g_temp.startTime;		
		var passedDistanceAbs = Math.abs(g_temp.lastMousePos - g_temp.startMousePos);
		
		if(passedTime > 300)
			return(false);
		
		if(passedDistanceAbs > 30)
			return(false);
		
		return(true);
	}
	
	
}



/**
 tabs panel class addon to unite gallery
 */
function UGTabs(){
	
	var t = this, g_objThis = jQuery(this),g_objGallery;
	var g_gallery = new UniteGalleryMain(), g_functions = new UGFunctions();
	var g_objTabs, g_objSelect;
	

	var g_options = {
		tabs_type:"tabs",					//tabs type: tabs, select
		tabs_container: "#ug_tabs",			//tabs container
		tabs_class_selected: "ug-tab-selected"
	};
	
	this.events = {
		
	};
	
	
	/**
	 * init tabs function
	 */
	function initTabs(gallery, customOptions){
		g_gallery = gallery;
		
		g_objGallery = jQuery(g_gallery);
		
		g_options = jQuery.extend(g_options, customOptions);
		
		if(g_options.tabs_type == "select")
			g_objSelect = jQuery(g_options.tabs_container);
		else
			g_objTabs = jQuery(g_options.tabs_container + " .ug-tab");
		
	}
	
	
	
	/**
	 * run the tabs
	 */
	function runTabs(){
				
		initEvents();
	}
	
	
	/**
	 * request new gallery items
	 */
	function requestGalleryItems(catid){
		
		g_gallery.requestNewItems(catid);
		
	}
	
	
	/**
	 * on tab click
	 */
	function onTabClick(){
		
		var classSelected = g_options.tabs_class_selected;
		
		var objTab = jQuery(this);
		if(objTab.hasClass(classSelected))
			return(true);
		
		g_objTabs.not(objTab).removeClass(classSelected);
		objTab.addClass(classSelected);
		
		var catID = objTab.data("catid");
		if(!catID)
			return(true);
		
		requestGalleryItems(catID);
		
	}
	
	
	/**
	 * on select change
	 */
	function onSelectChange(){
		var objSelect = jQuery(this);
		var catID = objSelect.val();
		
		if(!catID)
			return(true);
		
		requestGalleryItems(catID);
	}
	
	
	/**
	 * init tabs events
	 */
	function initEvents(){
		
		if(g_options.tabs_type == "select")
			g_objSelect.change(onSelectChange);
		else
			g_objTabs.click(onTabClick);
	}
	
	/**
	 * destroy
	 */
	this.destroy = function(){
		
		if(g_objSelect)
			g_objSelect.off("change");
		
		if(g_objTabs)
			g_objTabs.off("click");
	}
	
	
	/**
	 * outer init function, move to inner init
	 */
	this.init = function(gallery, customOptions){
		initTabs(gallery, customOptions);
	}
	
	
	/**
	 * run the tabs
	 */
	this.run = function(){
		
		runTabs();
	}
	
	
}


/**
 * API Class
 * addon to Unite gallery
 */
function UG_API(gallery){
	
	var t = this, g_objThis = jQuery(t);
	var g_gallery = new UniteGalleryMain(), g_objGallery;
	var g_arrEvents = [];
	
	g_gallery = gallery;
	g_objGallery = jQuery(gallery);
	
	
	this.events = {
			API_INIT_FUNCTIONS:"api_init",
			API_ON_EVENT:"api_on_event"
	}
	
	
	/**
	 * get item data for output
	 */
	function convertItemDataForOutput(item){
		
		var output = {
				index: item.index,
				title: item.title,
				description: item.description,
				urlImage: item.urlImage,
				urlThumb: item.urlThumb
			};
			
			//add aditional variables to the output
			var addData = item.objThumbImage.data();
			
			for(var key in addData){
				switch(key){
					case "image":
					case "description":
						continue;
					break;
				}
				output[key] = addData[key];
			}
			
			return(output);
	}
	
	
	/**
	 * event handling function
	 */
	this.on = function(event, handlerFunction, notCache){
		
		//remember cache
		if(notCache !== true){
			g_arrEvents.push({event:event,func:handlerFunction});
		}
		
		switch(event){
			case "item_change":
				
				g_objGallery.on(g_gallery.events.ITEM_CHANGE, function(){
						var currentItem = g_gallery.getSelectedItem();
						var output = convertItemDataForOutput(currentItem);
						handlerFunction(output.index, output);
				});
				
			break;
			case "resize":
				g_objGallery.on(g_gallery.events.SIZE_CHANGE, handlerFunction);
			break;
			case "enter_fullscreen":
				g_objGallery.on(g_gallery.events.ENTER_FULLSCREEN, handlerFunction);				
			break;
			case "exit_fullscreen":
				g_objGallery.on(g_gallery.events.EXIT_FULLSCREEN, handlerFunction);				
			break;
			case "play":
				g_objGallery.on(g_gallery.events.START_PLAY, handlerFunction);				
			break;
			case "stop":
				g_objGallery.on(g_gallery.events.STOP_PLAY, handlerFunction);				
			break;
			case "pause":
				g_objGallery.on(g_gallery.events.PAUSE_PLAYING, handlerFunction);				
			break;
			case "continue":
				g_objGallery.on(g_gallery.events.CONTINUE_PLAYING, handlerFunction);
			break;
			case "open_lightbox":
				g_objGallery.on(g_gallery.events.OPEN_LIGHTBOX, handlerFunction);
			break;
			case "close_lightbox":
				g_objGallery.on(g_gallery.events.CLOSE_LIGHTBOX, handlerFunction);
			break;
			default:
				if(console)
					console.log("wrong api event: " + event);
			break;
		}
		
		g_objGallery.trigger(t.events.API_ON_EVENT, [event, handlerFunction]);
	}
	
	
	/**
	 * start playing 
	 */
	this.play = function(){		
		g_gallery.startPlayMode();		
	}
	
	
	/**
	 * stop playing
	 */
	this.stop = function(){
		g_gallery.stopPlayMode();
	}
	
	
	/**
	 * toggle playing
	 */
	this.togglePlay = function(){
		g_gallery.togglePlayMode();
	}
	
	
	/**
	 * enter fullscreen
	 */
	this.enterFullscreen = function(){
		g_gallery.toFullScreen();
	}
	
	/**
	 * exit fullscreen
	 */
	this.exitFullscreen = function(){
		g_gallery.exitFullScreen();
	}
	
	/**
	 * toggle fullscreen
	 */
	this.toggleFullscreen = function(){
		
		g_gallery.toggleFullscreen();		
	}
	
	
	/**
	 * reset zoom
	 */
	this.resetZoom = function(){
		var objSlider = g_gallery.getObjSlider();
		if(!objSlider)
			return(false);
		
		objSlider.zoomBack();
	}
	
	
	/**
	 * zoom in
	 */
	this.zoomIn = function(){
		
		var objSlider = g_gallery.getObjSlider();
		if(!objSlider)
			return(false);
		
		objSlider.zoomIn();		
	}

	/**
	 * zoom in
	 */
	this.zoomOut = function(){
		
		var objSlider = g_gallery.getObjSlider();
		if(!objSlider)
			return(false);
		
		objSlider.zoomOut();		
	}
	
	/**
	 * next item
	 */
	this.nextItem = function(){
		g_gallery.nextItem();
	}
	
	
	/**
	 * prev item
	 */
	this.prevItem = function(){
		g_gallery.prevItem();
	}
	
	/**
	 * go to some item by index (0-numItems)
	 */
	this.selectItem = function(numItem){
		
		g_gallery.selectItem(numItem);
	
	}
	
	
	/**
	 * resize the gallery to some width (height).
	 */
	this.resize = function(width, height){
		
		if(height)
			g_gallery.resize(width, height);
		else
			g_gallery.resize(width);
	}
	
	
	/**
	 * get some item by index
	 */
	this.getItem = function(numItem){
		
		var data = g_gallery.getItem(numItem);
		var output = convertItemDataForOutput(data);
		
		return(output);
	}
	
	
	/**
	 * get number of items in the gallery
	 */
	this.getNumItems = function(){
		var numItems = g_gallery.getNumItems();
		return(numItems);
	}
	
	/**
	 * refresh gallery with another options
	 */
	this.reloadGallery = function(customOptions){
		if(!customOptions)
			var customOptions = {};
		
		g_gallery.run(null, customOptions);
		
		//restore events:
		g_arrEvents.map(function(obj){
			t.on(obj.event,obj.func,true);
		});
		
	}
	
	
	/**
	 * destroy the gallery
	 */
	this.destroy = function(){
		g_gallery.destroy();
	}
	
	//trigger api on init event
	g_objGallery.trigger(t.events.API_INIT_FUNCTIONS, t);
	
}

/**
 loadmore panel class addon to unite gallery
 */
function UGLoadMore(){
	
	var t = this, g_objThis = jQuery(this),g_objGallery;
	var g_gallery = new UniteGalleryMain(), g_functions = new UGFunctions();
	var g_objWrapper, g_objButton, g_objLoader, g_objError;
	
	var g_temp = {
			isInited:false
	}
	
	var g_options = {
		loadmore_container: "ug_loadmore_wrapper"			//tabs container
	};
	
	
	this.events = {
		
	};
	
	
	/**
	 * init wrapper
	 */
	function initObjects(){
		
		g_objWrapper = jQuery("#"+g_options.loadmore_container);
		if(g_objWrapper.length == 0)
			return(false);
		
		g_objButton = g_objWrapper.find(".ug-loadmore-button");
		if(g_objButton.length == 0)
			return(false);
		
		g_objLoader = g_objWrapper.find(".ug-loadmore-loader");
		if(g_objLoader.length == 0)
			return(false);
		
		g_objError = g_objWrapper.find(".ug-loadmore-error");
		if(g_objError.length == 0)
			return(false);
		
		g_temp.isInited = true;
	}
	
	
	/**
	 * show loadmore
	 */
	function showLoadmore(){
		
		g_objWrapper.show();
	}
	
	
	/**
	 * on loadore click event
	 */
	function onLoadmoreClick(){
		
		g_objButton.hide();
		g_objLoader.show();
		
		var data = {
				numitems:g_gallery.getNumItems()
		};
		
		g_gallery.ajaxRequest("front_loadmore", data, function(response){
			
			g_objLoader.hide();
			
			var htmlItems = response.html_items;
			var showLoadmore = response.show_loadmore;
			
			if(showLoadmore == true){
				g_objButton.blur().show();
				g_objLoader.hide();
			}else{
				g_objWrapper.hide();
			}
			
			g_gallery.addItems(htmlItems);
						
		},function(errorText){
			errorText = "Ajax Error!" + errorText;
			
			g_objLoader.hide();
			g_objError.show();
			g_objError.html(errorText);
			
		});
		
	}
	
	
	/**
	 * init events
	 */
	function initEvents(){
		
		g_gallery.onEvent("tiles_first_placed", showLoadmore);
		
		g_objButton.click(onLoadmoreClick);
	}
	
	
	/**
	 * destroy
	 */
	this.destroy = function(){
		if(g_temp.isInited == false)
			return(false);
	}
	
	
	/**
	 * init the loadmore button
	 */
	this.init = function(gallery, customOptions){
		g_gallery = gallery;
		
		g_objGallery = jQuery(g_gallery);
		g_options = jQuery.extend(g_options, customOptions);
		
		initObjects();
		
		if(g_temp.isInited == false){
			trace("load more not inited, something is wrong");
			return(false);
		}
		
		initEvents();
	}
	
	
}
;

if(typeof g_ugFunctions != "undefined")
	g_ugFunctions.registerTheme("tiles");
else 
	jQuery(document).ready(function(){g_ugFunctions.registerTheme("tiles")});


/**
 * Grid gallery theme
 */
function UGTheme_tiles(){

	var t = this;
	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objects, g_objWrapper; 
	var g_tiles = new UGTiles(), g_lightbox = new UGLightbox(), g_objPreloader, g_objTilesWrapper;
	var g_functions = new UGFunctions(), g_objTileDesign = new UGTileDesign();
	
	var g_options = {
			theme_enable_preloader: true,		//enable preloader circle
			theme_preloading_height: 200,		//the height of the preloading div, it show before the gallery
			theme_preloader_vertpos: 100,		//the vertical position of the preloader
			theme_gallery_padding: 0,			//the horizontal padding of the gallery from the sides
			theme_appearance_order: "normal",	//normal, shuffle, keep - the appearance order of the tiles. applying only to columns type
			theme_auto_open:null				//auto open lightbox at start
	};
	
	var g_defaults = {
			gallery_width: "100%"
	};
	
	//temp variables
	var g_temp = {
			showPreloader: false
	};
	
	
	/**
	 * Init the theme
	 */
	function initTheme(gallery, customOptions){
		
		g_gallery = gallery;
		
		//set default options
		g_options = jQuery.extend(g_options, g_defaults);
		
		//set custom options
		g_options = jQuery.extend(g_options, customOptions);
		
		modifyOptions();
		
		//set gallery options
		g_gallery.setOptions(g_options);
		
		g_gallery.setFreestyleMode();
		
		g_objects = gallery.getObjects();
		
		//get some objects for local use
		g_objGallery = jQuery(gallery);		
		g_objWrapper = g_objects.g_objWrapper;
		
		//init objects
		g_tiles.init(gallery, g_options);
		g_lightbox.init(gallery, g_options);
		
		g_objTileDesign = g_tiles.getObjTileDesign();

		
	}
	
	
	/**
	 * modift options
	 */
	function modifyOptions(){
		
		if(g_options.theme_enable_preloader == true)
			g_temp.showPreloader = true;
		
		switch(g_options.theme_appearance_order){
			default:
			case "normal":
			break;
			case "shuffle":
				g_gallery.shuffleItems();
			break;
			case "keep":
				g_options.tiles_keep_order = true;
			break;
		}
		
	}

	
	/**
	 * set gallery html elements
	 */
	function setHtml(){
		
		//add html elements
		g_objWrapper.addClass("ug-theme-tiles");
		
		g_objWrapper.append("<div class='ug-tiles-wrapper' style='position:relative'></div>");
		
		//add preloader
		if(g_temp.showPreloader == true){
			g_objWrapper.append("<div class='ug-tiles-preloader ug-preloader-trans'></div>");
			g_objPreloader = g_objWrapper.children(".ug-tiles-preloader");
			g_objPreloader.fadeTo(0,0);
		}
		
		g_objTilesWrapper = g_objWrapper.children(".ug-tiles-wrapper");
		
		//set padding
		if(g_options.theme_gallery_padding)
			g_objWrapper.css({
				"padding-left":g_options.theme_gallery_padding+"px",
				"padding-right":g_options.theme_gallery_padding+"px"
			});
		
		g_tiles.setHtml(g_objTilesWrapper);
		g_lightbox.putHtml();
	}
	
	/**
	 * actually run the theme
	 */
	function actualRun(){
		
		//set preloader mode
		if(g_objPreloader){
			g_objPreloader.fadeTo(0,1);
			g_objWrapper.height(g_options.theme_preloading_height);
			g_functions.placeElement(g_objPreloader, "center", g_options.theme_preloader_vertpos);
		}
		
		initEvents();
		
		g_tiles.run();
		g_lightbox.run();
		
	}

	
	/**
	 * run the theme
	 */
	function runTheme(){
		
		setHtml();
		
		actualRun();
		
	}
	
	
	
	/**
	 * init size of the thumbs panel
	 */
	function initThumbsPanel(){
		
		//set size:
		var objGallerySize = g_gallery.getSize();
			
		if(g_temp.isVertical == false)			
			g_objPanel.setWidth(objGallerySize.width);
		else
			g_objPanel.setHeight(objGallerySize.height);
		
		g_objPanel.run();
	}
	
	
	/**
	 * on tile click - open lightbox
	 */
	function onTileClick(data, objTile){
		
		objTile = jQuery(objTile);		
		
		var objItem = g_objTileDesign.getItemByTile(objTile);
		var index = objItem.index;		
		
		g_lightbox.open(index);
	}
	
	
	/**
	 * before items request: hide items, show preloader
	 */
	function onBeforeReqestItems(){
				
		g_objTilesWrapper.hide();
		
		if(g_objPreloader){
			g_objPreloader.show();
		
			var preloaderSize = g_functions.getElementSize(g_objPreloader);
			var galleryHeight = preloaderSize.bottom + 30;
			
			g_objWrapper.height(galleryHeight);
		}
		
	}

	/**
	 * open lightbox at start if needed
	 */
	function onLightboxInit(){

		if(g_options.theme_auto_open !== null){
			g_lightbox.open(g_options.theme_auto_open);
			g_options.theme_auto_open = null;
		}
		
	}
	
	
	/**
	 * init buttons functionality and events
	 */
	function initEvents(){
		
		//remove preloader on tiles first placed
		if(g_objPreloader){
			
			g_gallery.onEvent(g_tiles.events.TILES_FIRST_PLACED, function(){
				
				g_objWrapper.height("auto");
				g_objPreloader.hide();
			});			
		}
		
		jQuery(g_objTileDesign).on(g_objTileDesign.events.TILE_CLICK, onTileClick);
		
		g_objGallery.on(g_gallery.events.GALLERY_BEFORE_REQUEST_ITEMS, onBeforeReqestItems);

		jQuery(g_lightbox).on(g_lightbox.events.LIGHTBOX_INIT, onLightboxInit);

	}
	
	
	/**
	 * destroy the theme
	 */
	this.destroy = function(){
				
		jQuery(g_objTileDesign).off(g_objTileDesign.events.TILE_CLICK);
		
		g_gallery.destroyEvent(g_tiles.events.TILES_FIRST_PLACED);
				
		g_objGallery.off(g_gallery.events.GALLERY_BEFORE_REQUEST_ITEMS);

		jQuery(g_lightbox).off(g_lightbox.events.LIGHTBOX_INIT);
		
		g_tiles.destroy();
		g_lightbox.destroy();
	}
	
	
	/**
	 * run the theme setting
	 */
	this.run = function(){
		
		runTheme();
	}
	
	
	/**
	 * add items
	 */
	this.addItems = function(){
		
		g_tiles.runNewItems();
	}
	
	
	/**
	 * init 
	 */
	this.init = function(gallery, customOptions){
				
		initTheme(gallery, customOptions);
		
	}
	
	
}
;
jQuery(document).ready(function(){!function(){function e(e){var t="",s="";for(i=0;i<e;i++)t+="<li title='next'>"+(i+1)+"</li>";s="<ul class='next-prev'>"+t+"</ul>",jQuery(".quote-wrapper").after(s)}var t,s={init:function(i){var s=1e4,a=2500,n=jQuery(".quotes").length,o=i;-1===i&&(e(n),o=0),jQuery(".quotes").animate({opacity:0},0).removeClass("showing"),jQuery(".quotes").eq(o).animate({opacity:1},1e3).addClass("showing"),jQuery(".next-prev li").eq(o).addClass("active"),t=setInterval(function(){jQuery(".testimonials").hasClass("stop")||(jQuery(".quotes").eq(o).animate({opacity:0},a).removeClass("showing"),o==n-1?o=0:o++,jQuery(".quotes").eq(o).animate({opacity:1},a).addClass("showing"),jQuery(".next-prev li").removeClass("active"),jQuery(".next-prev li").eq(o).addClass("active"))},s)}};s.init(-1),jQuery(".testimonials").on("click",".next-prev li",function(){clearInterval(t),jQuery(".next-prev li").removeClass("active"),s.init(jQuery(this).index())}),jQuery(".quotes").on("mouseenter touchstart",function(){jQuery(".testimonials").addClass("stop")}),jQuery(".quotes").on("mouseleave touchend",function(){jQuery(".testimonials").removeClass("stop")})}()});
jQuery(function(){jQuery(function(){var o=jQuery("#sticky_header").offset().top,e=function(){var e=jQuery(window).scrollTop();e>o?(jQuery("#sticky_header").css({position:"fixed",top:0,left:0,"border-bottom":"none","box-shadow":"0 1px 2px rgba(0, 0, 0, 0.15)"}),jQuery(".top-header").addClass("sticky-margin")):(jQuery("#sticky_header").css({position:"relative","border-bottom":"1px solid rgba(0, 0, 0, 0.1)","box-shadow":"none"}),jQuery(".top-header").removeClass("sticky-margin"))};e(),jQuery(window).scroll(function(){e()})})});
jQuery(function(){jQuery(function(){var e=jQuery("#search-toggle"),r=jQuery("#search-box");jQuery("#search-toggle").on("click",function(){"search-toggle"==jQuery(this).attr("id")&&(r.is(":visible")?e.removeClass("header-search-x").addClass("header-search"):e.removeClass("header-search").addClass("header-search-x"),r.slideToggle(200,function(){}))})}),function(){var e,r,n=jQuery(".main-navigation");if(n&&(e=n.find(".menu-toggle")))return r=n.find(".menu"),r&&r.children().length?void jQuery(".menu-toggle").on("click",function(){jQuery(this).toggleClass("on"),n.toggleClass("toggled-on")}):void e.hide()}(),jQuery(function(){setInterval(function(){jQuery(".min_slider ul").animate({marginLeft:-220},1e3,function(){jQuery(this).css({marginLeft:0}).find("li:last").after(jQuery(this).find("li:first"))})},3e3)}),jQuery(document).ready(function(){jQuery(".go-to-top").hide(),jQuery(window).scroll(function(){var e=jQuery(window).scrollTop();e>900?jQuery(".go-to-top").fadeIn():jQuery(".go-to-top").fadeOut()}),jQuery(".go-to-top").click(function(){return jQuery("html,header,body").animate({scrollTop:0},700),!1})})});
!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=E.elements;return"string"==typeof e?e.split(" "):e}function a(e,t){var n=E.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),E.elements=n+" "+e,m(t)}function o(e){var t=y[e[g]];return t||(t={},v++,e[g]=v,y[v]=t),t}function i(e,n,r){if(n||(n=t),s)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||h.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function c(e,n){if(e||(e=t),s)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),l=c.length;l>i;i++)a.createElement(c[i]);return a}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return E.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(E,t.frag)}function m(e){e||(e=t);var r=o(e);return!E.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),s||l(e,r),e}var u,s,d="3.7.3-pre",f=e.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,s=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,s=!0}}();var E={elements:f.elements||"abbr article aside audio bdi freesia-empire data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:s,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:m,createElement:i,createDocumentFragment:c,addElements:a};e.html5=E,m(t),"object"==typeof module&&module.exports&&(module.exports=E)}("undefined"!=typeof window?window:this,document);
'use strict';

(function(window, $){
  $(document).ready(function(){
    $('#gallery').unitegallery({
      tiles_type: 'justified'
    });
  });
})(window, jQuery);
















