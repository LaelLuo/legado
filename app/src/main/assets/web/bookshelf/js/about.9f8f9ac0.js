(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"04d1":function(t,e,n){var r=n("342f"),a=r.match(/firefox\/(\d+)/i);t.exports=!!a&&+a[1]},"0cb2":function(t,e,n){var r=n("7b0b"),a=Math.floor,i="".replace,s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,o,l,u){var d=n+t.length,f=o.length,h=c;return void 0!==l&&(l=r(l),h=s),i.call(u,h,(function(r,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(d);case"<":s=l[i.slice(1,-1)];break;default:var c=+i;if(0===c)return r;if(c>f){var u=a(c/10);return 0===u?r:u<=f?void 0===o[u-1]?i.charAt(1):o[u-1]+i.charAt(1):r}s=o[c-1]}return void 0===s?"":s}))}},"4d63":function(t,e,n){var r=n("83ab"),a=n("da84"),i=n("94ca"),s=n("7156"),c=n("9112"),o=n("9bf2").f,l=n("241c").f,u=n("44e7"),d=n("ad6d"),f=n("9f7f"),h=n("6eeb"),g=n("d039"),v=n("5135"),p=n("69f3").enforce,m=n("2626"),b=n("b622"),w=n("fce3"),x=n("107c"),C=b("match"),A=a.RegExp,I=A.prototype,R=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,y=/a/g,k=/a/g,E=new A(y)!==y,M=f.UNSUPPORTED_Y,S=r&&(!E||M||w||x||g((function(){return k[C]=!1,A(y)!=y||A(k)==k||"/a/i"!=A(y,"i")}))),B=function(t){for(var e,n=t.length,r=0,a="",i=!1;r<=n;r++)e=t.charAt(r),"\\"!==e?i||"."!==e?("["===e?i=!0:"]"===e&&(i=!1),a+=e):a+="[\\s\\S]":a+=e+t.charAt(++r);return a},T=function(t){for(var e,n=t.length,r=0,a="",i=[],s={},c=!1,o=!1,l=0,u="";r<=n;r++){if(e=t.charAt(r),"\\"===e)e+=t.charAt(++r);else if("]"===e)c=!1;else if(!c)switch(!0){case"["===e:c=!0;break;case"("===e:R.test(t.slice(r+1))&&(r+=2,o=!0),a+=e,l++;continue;case">"===e&&o:if(""===u||v(s,u))throw new SyntaxError("Invalid capture group name");s[u]=!0,i.push([u,l]),o=!1,u="";continue}o?u+=e:a+=e}return[a,i]};if(i("RegExp",S)){for(var $=function(t,e){var n,r,a,i,o,l,f=this instanceof $,h=u(t),g=void 0===e,v=[],m=t;if(!f&&h&&g&&t.constructor===$)return t;if((h||t instanceof $)&&(t=t.source,g&&(e="flags"in m?m.flags:d.call(m))),t=void 0===t?"":String(t),e=void 0===e?"":String(e),m=t,w&&"dotAll"in y&&(r=!!e&&e.indexOf("s")>-1,r&&(e=e.replace(/s/g,""))),n=e,M&&"sticky"in y&&(a=!!e&&e.indexOf("y")>-1,a&&(e=e.replace(/y/g,""))),x&&(i=T(t),t=i[0],v=i[1]),o=s(A(t,e),f?this:I,$),(r||a||v.length)&&(l=p(o),r&&(l.dotAll=!0,l.raw=$(B(t),n)),a&&(l.sticky=!0),v.length&&(l.groups=v)),t!==m)try{c(o,"source",""===m?"(?:)":m)}catch(b){}return o},_=function(t){t in $||o($,t,{configurable:!0,get:function(){return A[t]},set:function(e){A[t]=e}})},D=l(A),z=0;D.length>z;)_(D[z++]);I.constructor=$,$.prototype=I,h(a,"RegExp",$)}m("RegExp")},"4e82":function(t,e,n){"use strict";var r=n("23e7"),a=n("1c0b"),i=n("7b0b"),s=n("50c4"),c=n("d039"),o=n("addb"),l=n("a640"),u=n("04d1"),d=n("d998"),f=n("2d00"),h=n("512c"),g=[],v=g.sort,p=c((function(){g.sort(void 0)})),m=c((function(){g.sort(null)})),b=l("sort"),w=!c((function(){if(f)return f<70;if(!(u&&u>3)){if(d)return!0;if(h)return h<603;var t,e,n,r,a="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)g.push({k:e+r,v:n})}for(g.sort((function(t,e){return e.v-t.v})),r=0;r<g.length;r++)e=g[r].k.charAt(0),a.charAt(a.length-1)!==e&&(a+=e);return"DGBEFHACIJK"!==a}})),x=p||!m||!b||!w,C=function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:String(e)>String(n)?1:-1}};r({target:"Array",proto:!0,forced:x},{sort:function(t){void 0!==t&&a(t);var e=i(this);if(w)return void 0===t?v.call(e):v.call(e,t);var n,r,c=[],l=s(e.length);for(r=0;r<l;r++)r in e&&c.push(e[r]);c=o(c,C(t)),n=c.length,r=0;while(r<n)e[r]=c[r++];while(r<l)delete e[r++];return e}})},"512c":function(t,e,n){var r=n("342f"),a=r.match(/AppleWebKit\/(\d+)\./);t.exports=!!a&&+a[1]},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("d039"),i=n("825a"),s=n("50c4"),c=n("a691"),o=n("1d80"),l=n("8aa5"),u=n("0cb2"),d=n("14c3"),f=n("b622"),h=f("replace"),g=Math.max,v=Math.min,p=function(t){return void 0===t?t:String(t)},m=function(){return"$0"==="a".replace(/./,"$0")}(),b=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),w=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));r("replace",(function(t,e,n){var r=b?"$":"$0";return[function(t,n){var r=o(this),a=void 0==t?void 0:t[h];return void 0!==a?a.call(t,r,n):e.call(String(r),t,n)},function(t,a){if("string"===typeof a&&-1===a.indexOf(r)&&-1===a.indexOf("$<")){var o=n(e,this,t,a);if(o.done)return o.value}var f=i(this),h=String(t),m="function"===typeof a;m||(a=String(a));var b=f.global;if(b){var w=f.unicode;f.lastIndex=0}var x=[];while(1){var C=d(f,h);if(null===C)break;if(x.push(C),!b)break;var A=String(C[0]);""===A&&(f.lastIndex=l(h,s(f.lastIndex),w))}for(var I="",R=0,y=0;y<x.length;y++){C=x[y];for(var k=String(C[0]),E=g(v(c(C.index),h.length),0),M=[],S=1;S<C.length;S++)M.push(p(C[S]));var B=C.groups;if(m){var T=[k].concat(M,E,h);void 0!==B&&T.push(B);var $=String(a.apply(void 0,T))}else $=u(k,h,E,M,B,a);E>=R&&(I+=h.slice(R,E)+$,R=E+k.length)}return I+h.slice(R)}]}),!w||!m||b)},"6e9d":function(t,e,n){},"6fb2":function(t,e,n){"use strict";n("6e9d")},7156:function(t,e,n){var r=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var i,s;return a&&"function"==typeof(i=e.constructor)&&i!==n&&r(s=i.prototype)&&s!==n.prototype&&a(t,s),t}},"7b5b":function(t,e,n){},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},addb:function(t,e){var n=Math.floor,r=function(t,e){var s=t.length,c=n(s/2);return s<8?a(t,e):i(r(t.slice(0,c),e),r(t.slice(c),e),e)},a=function(t,e){var n,r,a=t.length,i=1;while(i<a){r=i,n=t[i];while(r&&e(t[r-1],n)>0)t[r]=t[--r];r!==i++&&(t[r]=n)}return t},i=function(t,e,n){var r=t.length,a=e.length,i=0,s=0,c=[];while(i<r||s<a)i<r&&s<a?c.push(n(t[i],e[s])<=0?t[i++]:e[s++]):c.push(i<r?t[i++]:e[s++]);return c};t.exports=r},d504:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index-wrapper"},[r("div",{staticClass:"navigation-wrapper"},[r("div",{staticClass:"navigation-title"},[t._v(" 阅读 ")]),r("div",{staticClass:"navigation-sub-title"},[t._v(" 清风不识字，何故乱翻书 ")]),r("div",{staticClass:"search-wrapper"},[r("el-input",{staticClass:"search-input",attrs:{size:"mini",placeholder:"搜索书籍"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[r("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),r("div",{staticClass:"recent-wrapper"},[r("div",{staticClass:"recent-title"},[t._v(" 最近阅读 ")]),r("div",{staticClass:"reading-recent"},[r("el-tag",{staticClass:"recent-book",class:{"no-point":""==t.readingRecent.url},attrs:{type:"warning"},on:{click:function(e){return t.toDetail(t.readingRecent.url,t.readingRecent.name,t.readingRecent.chapterIndex)}}},[t._v(" "+t._s(t.readingRecent.name)+" ")])],1)]),r("div",{staticClass:"setting-wrapper"},[r("div",{staticClass:"setting-title"},[t._v(" 基本设定 ")]),r("div",{staticClass:"setting-item"},[r("el-tag",{staticClass:"setting-connect",class:{"no-point":t.newConnect},attrs:{type:t.connectType},on:{click:t.setIP}},[t._v(" "+t._s(t.connectStatus)+" ")])],1)]),r("div",{staticClass:"bottom-icons"},[r("a",{attrs:{href:"https://github.com/celetor/web-yuedu3",target:"_blank"}},[r("div",{staticClass:"bottom-icon"},[r("img",{attrs:{src:n("fa39"),alt:""}})])])])]),r("div",{ref:"shelfWrapper",staticClass:"shelf-wrapper"},[r("div",{staticClass:"books-wrapper"},[r("div",{staticClass:"wrapper"},t._l(t.shelf,(function(e){return r("div",{key:e.noteUrl,staticClass:"book",on:{click:function(n){return t.toDetail(e.bookUrl,e.name,e.durChapterIndex)}}},[r("div",{staticClass:"cover-img"},[r("img",{staticClass:"cover",attrs:{src:"../cover?path="+e.coverUrl,alt:""}})]),r("div",{staticClass:"info",on:{click:function(n){return t.toDetail(e.bookUrl,e.name,e.durChapterIndex)}}},[r("div",{staticClass:"name"},[t._v(t._s(e.name))]),r("div",{staticClass:"sub"},[r("div",{staticClass:"author"},[t._v(" "+t._s(e.author)+" ")]),r("div",{staticClass:"dot"},[t._v("•")]),r("div",{staticClass:"size"},[t._v("共"+t._s(e.totalChapterNum)+"章")]),r("div",{staticClass:"dot"},[t._v("•")]),r("div",{staticClass:"date"},[t._v(t._s(t.dateFormat(e.lastCheckTime)))])]),r("div",{staticClass:"dur-chapter"},[t._v("已读："+t._s(e.durChapterTitle))]),r("div",{staticClass:"last-chapter"},[t._v("最新："+t._s(e.latestChapterTitle))])])])})),0)])])])},a=[],i=(n("4e82"),n("ac1f"),n("5319"),n("4d63"),n("25f0"),n("7b5b"),n("bc3a")),s=n.n(i),c={data:function(){return{search:"",readingRecent:{name:"尚无阅读记录",url:"",chapterIndex:0}}},mounted:function(){var t=localStorage.getItem("readingRecent");null!=t&&(this.readingRecent=JSON.parse(t),"undefined"==typeof this.readingRecent.chapterIndex&&(this.readingRecent.chapterIndex=0)),this.loading=this.$loading({target:this.$refs.shelfWrapper,lock:!0,text:"正在获取书籍信息",spinner:"el-icon-loading",background:"rgb(247,247,247)"});var e=this;s.a.get("/getBookshelf",{timeout:3e3}).then((function(t){e.loading.close(),e.$store.commit("setConnectType","success"),e.$store.commit("increaseBookNum",t.data.data.length),e.$store.commit("addBooks",t.data.data.sort((function(t,e){var n=t["durChapterTime"]||0,r=e["durChapterTime"]||0;return r-n}))),e.$store.commit("setConnectStatus","已连接 "),e.$store.commit("setNewConnect",!1)})).catch((function(t){throw e.loading.close(),e.$store.commit("setConnectType","danger"),e.$store.commit("setConnectStatus","连接失败"),e.$message.error("后端连接失败"),e.$store.commit("setNewConnect",!1),t}))},methods:{setIP:function(){},toDetail:function(t,e,n){sessionStorage.setItem("bookUrl",t),sessionStorage.setItem("bookName",e),sessionStorage.setItem("chapterIndex",n),this.readingRecent={name:e,url:t,chapterIndex:n},localStorage.setItem("readingRecent",JSON.stringify(this.readingRecent)),this.$router.push({path:"/chapter"})},dateFormat:function(t){var e=(new Date).getTime(),n=parseInt((e-t)/1e3),r="";return Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t},r=n<=30?"刚刚":n<60?n+"秒前":n<3600?parseInt(n/60)+"分钟前":n<86400?parseInt(n/3600)+"小时前":n<2592e3?parseInt(n/86400)+"天前":new Date(t).format("yyyy-MM-dd hh:mm"),r}},computed:{shelf:function(){return this.$store.state.shelf},connectStatus:function(){return this.$store.state.connectStatus},connectType:function(){return this.$store.state.connectType},newConnect:function(){return this.$store.state.newConnect}}},o=c,l=(n("6fb2"),n("2877")),u=Object(l["a"])(o,r,a,!1,null,"3cffa1cb",null);e["default"]=u.exports},d998:function(t,e,n){var r=n("342f");t.exports=/MSIE|Trident/.test(r)},f820:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],i=n("2877"),s={},c=Object(i["a"])(s,r,a,!1,null,null,null);e["default"]=c.exports},fa39:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAECUlEQVRYR7WXTYhcRRDHq3pY9yKrYBQ8KBsjgvHgwRhiQBTjYZm4Xe8NusawhwS/o9GLoKhgBGPAgJd1NdGIXwtZTbRf9Rqzl6gHTVyDeIkIgnEOghAM6oKHzTJd0sO8Zaa338zb7NjwmJn++Ndv+lVVVyOsoM3Ozl69sLBAiHiDc26NUuoKv9w5d14p9aeI/DI4OMgjIyN/lJXFMhOttQ8BgBaR0TLzEXEGAKzW+lCv+V0BmLmGiLtF5M5eQrFxRPxaRCaI6LOi9YUAzPwGADxxMYYjayaJ6MkoZKyTmU8AwF19Mp7LfElEW0LNZTvAzIcBYFufjedy00T0QLt2B4AxZo9S6qX/yXhT1jn3cpqme3IbSwDM/DgAvNlu3Dm3Uyl1HAA2IOJ2EdleEu5Io9H4EBHPVCqVLSISRsMuInrLazUBpqamhoaGhr4TkRsDgLVpmtbzPmPMLQBwOwD4vvzxw8P5IyJztVrtVL4my7L1iPhTx7Yj/jw/P79pfHx8vgmQZdkLiPhK+O8GBgauqVarv5f819FpxpjLlVJ/hYMi8mKSJHubAMz8KwBcF1EYI6IjqwRIlFImonGWiNZhlmVVRDxWYGTVAMx8HwB8EtMXka1orT0gIo9GJrxNRLH+FW8IMx8EgEeW5QDEgx5gTkQ2Bk7yr9b60hVb6rKAmc8BwJWBne+x4P3XiWhtPwGstV9FzpSzHuBvALgsMHaaiDp2ZbUwWZZNIuKuQOcfD7AAAJeEcaq1Xr9ao+3rmdknnscCzQse4LdWEukYazQaa2q12vl+QTDztwCwOdCr+zA8iYi3RQwREdl+ADDz9QDwIwB0OLaInPJRcEhEHoyEyAmt9d39ALDW2lg1hYjv+lfgC4WJgkTxcJIkPcuqbpC+qgKATwvm7PYAGwDgdBeRZ4notYvZCWPMDqXUe13W3to8C6y10yJyv//u6zj/2R6ziPiRiBwt6xPMrBExFZEdRcYR8WOt9bb8MNoKAJ+3Jvtwed05d4dSKtz+c4h4VGsdrRWttZMici8AXFVix+4homNLBUmWZQcQMc/9x4mommXZ84i4t11MKbV5dHR06bxvH5uZmbnZOfdN6O0RmMNE1CxulgCstdeKyBcAcFPrVTyltZ4wxiSVSuXplkhda72zh9P1rClFZFOSJHMdAP5Hq3rxR6eH+IGIvIOuqFlr94nIc10WdRzxy6riAMJnr2nn3JlcME3TppMWNWvtfhF5pmB8WX0RvZgEEEtaYUUbM2KtfUdE/FUubNHipvBmZIxZp5TaDwBprlQGIHLqzSHiPq01x4B7Xk6Z2d8TfDwPlwFozfd1f90598Hi4uKrY2NjFwrzQVkP81nNi/byAWOMv8gOp2n6fhnt/wDqJrRWLmhIrwAAAABJRU5ErkJggg=="}}]);