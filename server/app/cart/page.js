(()=>{var e={};e.id=565,e.ids=[565],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1384:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>x,pages:()=>m,routeModule:()=>p,tree:()=>o});var r=s(3137),a=s(4647),i=s(4183),n=s.n(i),l=s(1775),c={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>l[e]);s.d(t,c);let d=r.AppPageRouteModule,o=["",{children:["cart",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,9386)),"/Users/user/Desktop/exam-7/app/cart/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,2817)),"/Users/user/Desktop/exam-7/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,1918,23)),"next/dist/client/components/not-found-error"]}],m=["/Users/user/Desktop/exam-7/app/cart/page.tsx"],x="/cart/page",u={require:s,loadChunk:()=>Promise.resolve()},p=new d({definition:{kind:a.x.APP_PAGE,page:"/cart/page",pathname:"/cart",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},9677:(e,t,s)=>{Promise.resolve().then(s.bind(s,7090))},7090:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(80);s(6587);var a=s(9885),i=s(2451),n=s.n(i),l=s(1120);let c=()=>{let[e,t]=(0,a.useState)(null),[s,i]=(0,a.useState)(1);(0,a.useEffect)(()=>{let e=localStorage.getItem("selectedDish");e&&t(JSON.parse(e))},[]);let c=()=>{if(e){let t=parseFloat(e.price),r=t*s;return r.toFixed(2)}return"0.00"};return r.jsx("section",{children:(0,r.jsxs)("div",{className:"container mx-auto cart__container",children:[(0,r.jsxs)("div",{className:"cartDish__card",children:[e&&(0,r.jsxs)("div",{className:"cart__item",children:[(0,r.jsxs)("div",{className:"cart__item-flex",children:[r.jsx("div",{className:"cart__item-img",children:r.jsx("img",{src:`http://207.154.221.44:4002/${e.image}`,alt:e.name})}),(0,r.jsxs)("div",{className:"cart__item-title",children:[r.jsx("h3",{children:e.name}),(0,r.jsxs)("p",{children:["$",e.price]})]})]}),(0,r.jsxs)("div",{className:"cart__item-btn",children:[(0,r.jsxs)("div",{children:[r.jsx("button",{className:"cart__item-increment",onClick:()=>{s>1&&i(s-1)},children:"-"}),r.jsx("span",{children:s}),r.jsx("button",{className:"cart__item-decrement",onClick:()=>{i(s+1)},children:"+"})]}),(0,r.jsxs)("span",{children:["$",c()]})]})]}),(0,r.jsxs)("div",{className:"ReviewPayment",children:[(0,r.jsxs)("ul",{className:"ReviewPayment__list",children:[(0,r.jsxs)("li",{className:"ReviewPayment__item1",children:[r.jsx("h4",{children:"Subtotal"}),(0,r.jsxs)("span",{children:["$",c()]})]}),(0,r.jsxs)("li",{className:"ReviewPayment__item2",children:[r.jsx("h3",{children:"Total"}),(0,r.jsxs)("span",{children:["$",c()]})]})]}),r.jsx("button",{children:"Review Payment"})]})]}),(0,r.jsxs)("div",{className:"customerSat__bottom",children:[(0,r.jsxs)("div",{className:"CS__bottom-left",children:[r.jsx("h3",{children:"GET 50%"}),(0,r.jsxs)("form",{children:[r.jsx("input",{type:"text",placeholder:"Enter Your Email Address"}),r.jsx("button",{children:"subscribe"})]})]}),r.jsx("div",{className:"CS__bottom-right",children:r.jsx(n(),{src:l.default,alt:"FoodImage"})})]})]})})}},9386:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>c});var r=s(7536);let a=(0,r.createProxy)(String.raw`/Users/user/Desktop/exam-7/app/cart/page.tsx`),{__esModule:i,$$typeof:n}=a,l=a.default,c=l},1120:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/_next/static/media/FoodImage.9822922f.png",height:277,width:275,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCUlEQVR42jXPTy/DcBzH8e8jcBAHdwePgcwz4GgiTi6uDtwJR8HNn0iGiUolTstCHGjjT9qqVdaodWzCzLZa/+zHIt1aH2myvY7v25siz8VC36P5whtmwc1kDU9StBPpSumnSLXq9pQtTy+WKkiJp9g7WEf6jId6nzEVOdtL9nd71XJb8AzRX5obxMoYYWGcfFV7gJF/2yDm485xGZpPF6GZWsNyPIb4CP0J8g0+ap5OvyHEz/cS8udHwdctj+RkDItDFHLpY9isJZPLGjMOa0LgEiE/PxpMEwXDAxQIqgTba89SxPbYVq3uQri8xs7+LjaT28i9lhPU0V2dqDd+DiuWw2l6bqrb/wELZKjmw1FQCwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},6587:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[731,904],()=>s(1384));module.exports=r})();