!function(){"use strict";var e,f,a,t,c,n={},r={};function b(e){var f=r[e];if(void 0!==f)return f.exports;var a=r[e]={id:e,loaded:!1,exports:{}};return n[e].call(a.exports,a,a.exports,b),a.loaded=!0,a.exports}b.m=n,b.c=r,e=[],b.O=function(f,a,t,c){if(!a){var n=1/0;for(u=0;u<e.length;u++){a=e[u][0],t=e[u][1],c=e[u][2];for(var r=!0,o=0;o<a.length;o++)(!1&c||n>=c)&&Object.keys(b.O).every((function(e){return b.O[e](a[o])}))?a.splice(o--,1):(r=!1,c<n&&(n=c));if(r){e.splice(u--,1);var d=t();void 0!==d&&(f=d)}}return f}c=c||0;for(var u=e.length;u>0&&e[u-1][2]>c;u--)e[u]=e[u-1];e[u]=[a,t,c]},b.n=function(e){var f=e&&e.__esModule?function(){return e.default}:function(){return e};return b.d(f,{a:f}),f},a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var c=Object.create(null);b.r(c);var n={};f=f||[null,a({}),a([]),a(a)];for(var r=2&t&&e;"object"==typeof r&&!~f.indexOf(r);r=a(r))Object.getOwnPropertyNames(r).forEach((function(f){n[f]=function(){return e[f]}}));return n.default=function(){return e},b.d(c,n),c},b.d=function(e,f){for(var a in f)b.o(f,a)&&!b.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:f[a]})},b.f={},b.e=function(e){return Promise.all(Object.keys(b.f).reduce((function(f,a){return b.f[a](e,f),f}),[]))},b.u=function(e){return"assets/js/"+({53:"935f2afb",80:"a58535aa",537:"b56514fe",1193:"f3f8ac04",1626:"6ff5bcdb",1911:"a70509d6",1914:"d9f32620",2106:"18cce9d9",2253:"9bdd22eb",2344:"4e39cfef",2389:"3bf4969f",2450:"c489ebc3",2535:"814f3328",2859:"18c41134",3026:"2834fb29",3085:"1f391b9e",3089:"a6aa9e1f",3179:"b7f38671",3237:"1df93b7f",3483:"b4ae3580",3608:"9e4087bc",3751:"3720c009",3792:"dff1c289",3836:"f6cbeee1",4013:"01a85c17",4121:"55960ee5",4193:"f55d3e7a",4364:"fba6c282",4447:"bc4100c0",4607:"533a09ca",4813:"56548b30",5589:"5c868d36",5613:"73b7c3a5",5904:"f3dd2eb3",6103:"ccc49370",6171:"18d24816",6269:"a1db8d77",6504:"822bd8ab",6620:"698f43a2",6702:"bbb0047c",6755:"e44a2883",6799:"0a10cd15",7027:"b7949c45",7414:"393be207",7874:"ba5a1e5a",7918:"17896441",8094:"a2a6504a",8252:"b38ffac6",8434:"62ad6a78",8610:"6875c492",8818:"1e4232ab",9160:"42639a4e",9333:"ee8d0f12",9499:"82801453",9514:"1be78505",9642:"7661071f",9671:"0e384e19",9817:"14eb3368",9923:"ee2ae3ff",9924:"df203c0f"}[e]||e)+"."+{53:"7e90e4ba",80:"b5bcd4d9",537:"5034e22a",1193:"7a77c970",1626:"a1b05e05",1911:"df123cef",1914:"6cfd0ad6",2106:"d8b6d410",2253:"23e7d46a",2344:"82df6a90",2389:"7125a67e",2450:"6830c7c1",2535:"dc82222a",2859:"334a8eef",3026:"494b582a",3085:"9b1317e1",3089:"0e2e37b5",3179:"5c63b249",3237:"f627230d",3483:"3717d33b",3608:"ba7b5281",3751:"f19a2fe9",3792:"426421fc",3836:"0b632b32",4013:"bc64e83f",4121:"f4540043",4193:"903272c6",4364:"d3921c3c",4447:"5356bb10",4607:"3078f979",4608:"b0bc19b5",4813:"305af2f8",5589:"b729cc34",5613:"6a2cee09",5897:"6e3746d9",5904:"29818da6",6103:"96ce0ea8",6171:"d980131d",6269:"6970f80f",6504:"871672ff",6620:"0328ae00",6702:"d16da5e9",6755:"58c50358",6799:"90b74085",7027:"561866ab",7414:"3e4647f4",7874:"64c7611c",7918:"bc33b4fe",8094:"79d4d976",8252:"ec4af7ca",8434:"f0d232e9",8610:"b703c8b7",8818:"3202d71a",9160:"859886f9",9333:"cc0587df",9499:"257a475f",9514:"d30173c7",9642:"5d4c2320",9671:"02bab975",9817:"b2ca94c0",9923:"baae2464",9924:"918d2d01"}[e]+".js"},b.miniCssF=function(e){},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=function(e,f){return Object.prototype.hasOwnProperty.call(e,f)},t={},c="roys-blog:",b.l=function(e,f,a,n){if(t[e])t[e].push(f);else{var r,o;if(void 0!==a)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var i=d[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==c+a){r=i;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,b.nc&&r.setAttribute("nonce",b.nc),r.setAttribute("data-webpack",c+a),r.src=e),t[e]=[f];var l=function(f,a){r.onerror=r.onload=null,clearTimeout(s);var c=t[e];if(delete t[e],r.parentNode&&r.parentNode.removeChild(r),c&&c.forEach((function(e){return e(a)})),f)return f(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),o&&document.head.appendChild(r)}},b.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/en/",b.gca=function(e){return e={17896441:"7918",82801453:"9499","935f2afb":"53",a58535aa:"80",b56514fe:"537",f3f8ac04:"1193","6ff5bcdb":"1626",a70509d6:"1911",d9f32620:"1914","18cce9d9":"2106","9bdd22eb":"2253","4e39cfef":"2344","3bf4969f":"2389",c489ebc3:"2450","814f3328":"2535","18c41134":"2859","2834fb29":"3026","1f391b9e":"3085",a6aa9e1f:"3089",b7f38671:"3179","1df93b7f":"3237",b4ae3580:"3483","9e4087bc":"3608","3720c009":"3751",dff1c289:"3792",f6cbeee1:"3836","01a85c17":"4013","55960ee5":"4121",f55d3e7a:"4193",fba6c282:"4364",bc4100c0:"4447","533a09ca":"4607","56548b30":"4813","5c868d36":"5589","73b7c3a5":"5613",f3dd2eb3:"5904",ccc49370:"6103","18d24816":"6171",a1db8d77:"6269","822bd8ab":"6504","698f43a2":"6620",bbb0047c:"6702",e44a2883:"6755","0a10cd15":"6799",b7949c45:"7027","393be207":"7414",ba5a1e5a:"7874",a2a6504a:"8094",b38ffac6:"8252","62ad6a78":"8434","6875c492":"8610","1e4232ab":"8818","42639a4e":"9160",ee8d0f12:"9333","1be78505":"9514","7661071f":"9642","0e384e19":"9671","14eb3368":"9817",ee2ae3ff:"9923",df203c0f:"9924"}[e]||e,b.p+b.u(e)},function(){var e={1303:0,532:0};b.f.j=function(f,a){var t=b.o(e,f)?e[f]:void 0;if(0!==t)if(t)a.push(t[2]);else if(/^(1303|532)$/.test(f))e[f]=0;else{var c=new Promise((function(a,c){t=e[f]=[a,c]}));a.push(t[2]=c);var n=b.p+b.u(f),r=new Error;b.l(n,(function(a){if(b.o(e,f)&&(0!==(t=e[f])&&(e[f]=void 0),t)){var c=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;r.message="Loading chunk "+f+" failed.\n("+c+": "+n+")",r.name="ChunkLoadError",r.type=c,r.request=n,t[1](r)}}),"chunk-"+f,f)}},b.O.j=function(f){return 0===e[f]};var f=function(f,a){var t,c,n=a[0],r=a[1],o=a[2],d=0;if(n.some((function(f){return 0!==e[f]}))){for(t in r)b.o(r,t)&&(b.m[t]=r[t]);if(o)var u=o(b)}for(f&&f(a);d<n.length;d++)c=n[d],b.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return b.O(u)},a=self.webpackChunkroys_blog=self.webpackChunkroys_blog||[];a.forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))}()}();