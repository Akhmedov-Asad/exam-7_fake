(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{9695:function(e,s,t){Promise.resolve().then(t.bind(t,8430))},8430:function(e,s,t){"use strict";t.r(s);var i=t(7437);t(4924);var a=t(2265),c=t(6691),n=t.n(c),l=t(1816);s.default=()=>{let[e,s]=(0,a.useState)(null),[t,c]=(0,a.useState)(1);(0,a.useEffect)(()=>{let e=localStorage.getItem("selectedDish");e&&s(JSON.parse(e))},[]);let r=()=>{if(e){let s=parseFloat(e.price),i=s*t;return i.toFixed(2)}return"0.00"};return(0,i.jsx)("section",{children:(0,i.jsxs)("div",{className:"container mx-auto cart__container",children:[(0,i.jsxs)("div",{className:"cartDish__card",children:[e&&(0,i.jsxs)("div",{className:"cart__item",children:[(0,i.jsxs)("div",{className:"cart__item-flex",children:[(0,i.jsx)("div",{className:"cart__item-img",children:(0,i.jsx)("img",{src:"".concat("http://207.154.221.44:4002","/").concat(e.image),alt:e.name})}),(0,i.jsxs)("div",{className:"cart__item-title",children:[(0,i.jsx)("h3",{children:e.name}),(0,i.jsxs)("p",{children:["$",e.price]})]})]}),(0,i.jsxs)("div",{className:"cart__item-btn",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("button",{className:"cart__item-increment",onClick:()=>{t>1&&c(t-1)},children:"-"}),(0,i.jsx)("span",{children:t}),(0,i.jsx)("button",{className:"cart__item-decrement",onClick:()=>{c(t+1)},children:"+"})]}),(0,i.jsxs)("span",{children:["$",r()]})]})]}),(0,i.jsxs)("div",{className:"ReviewPayment",children:[(0,i.jsxs)("ul",{className:"ReviewPayment__list",children:[(0,i.jsxs)("li",{className:"ReviewPayment__item1",children:[(0,i.jsx)("h4",{children:"Subtotal"}),(0,i.jsxs)("span",{children:["$",r()]})]}),(0,i.jsxs)("li",{className:"ReviewPayment__item2",children:[(0,i.jsx)("h3",{children:"Total"}),(0,i.jsxs)("span",{children:["$",r()]})]})]}),(0,i.jsx)("button",{children:"Review Payment"})]})]}),(0,i.jsxs)("div",{className:"customerSat__bottom",children:[(0,i.jsxs)("div",{className:"CS__bottom-left",children:[(0,i.jsx)("h3",{children:"GET 50%"}),(0,i.jsxs)("form",{children:[(0,i.jsx)("input",{type:"text",placeholder:"Enter Your Email Address"}),(0,i.jsx)("button",{children:"subscribe"})]})]}),(0,i.jsx)("div",{className:"CS__bottom-right",children:(0,i.jsx)(n(),{src:l.default,alt:"FoodImage"})})]})]})})}},4924:function(){},1816:function(e,s,t){"use strict";t.r(s),s.default={src:"/_next/static/media/FoodImage.9822922f.png",height:277,width:275,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCUlEQVR42jXPTy/DcBzH8e8jcBAHdwePgcwz4GgiTi6uDtwJR8HNn0iGiUolTstCHGjjT9qqVdaodWzCzLZa/+zHIt1aH2myvY7v25siz8VC36P5whtmwc1kDU9StBPpSumnSLXq9pQtTy+WKkiJp9g7WEf6jId6nzEVOdtL9nd71XJb8AzRX5obxMoYYWGcfFV7gJF/2yDm485xGZpPF6GZWsNyPIb4CP0J8g0+ap5OvyHEz/cS8udHwdctj+RkDItDFHLpY9isJZPLGjMOa0LgEiE/PxpMEwXDAxQIqgTba89SxPbYVq3uQri8xs7+LjaT28i9lhPU0V2dqDd+DiuWw2l6bqrb/wELZKjmw1FQCwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[986,971,864,744],function(){return e(e.s=9695)}),_N_E=e.O()}]);