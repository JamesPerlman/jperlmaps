(this.webpackJsonpjperlmaps=this.webpackJsonpjperlmaps||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(10),i=n.n(s),o=(n(19),n(20),n.p+"static/media/arrow.959ef8d9.svg"),a=(n(21),n(1)),u=function(e){var t=e.className,n=e.left,c=e.onPress,r=(e.right,e.style),s=void 0!==n;return Object(a.jsx)("div",{className:t,style:r,children:Object(a.jsx)("a",{style:{cursor:"pointer"},onMouseDown:function(){return c()},children:Object(a.jsx)("img",{src:o,className:"arrow-button",style:{transform:s?"scaleX(-1)":void 0},width:"100px",height:"100px",alt:"left"})})})},d=r.a.memo(u),l=n(13),j=n(14),h=function(e){var t=e.aspectRatio,n=e.children,r=Object(c.useState)({}),s=Object(l.a)(r,2),i=s[0],o=s[1];return Object(a.jsx)(j.a,{bounds:!0,onResize:function(e){if(void 0!==e.bounds){var n,c;e.bounds.width/e.bounds.height>t?(n=e.bounds.width,c=e.bounds.width/t):(n=e.bounds.height*t,c=e.bounds.height);var r=.5*(e.bounds.width-n),s=.5*(e.bounds.height-c);o({position:"absolute",left:r,top:s,width:n,height:c})}},children:function(e){var t=e.measureRef;return Object(a.jsx)("div",{ref:t,style:{position:"absolute",width:"100%",height:"100%"},children:Object(a.jsx)("div",{style:i,children:n})})}})},b=r.a.memo(h),f=n(12),m=n.n(f),v={backgroundVideoURL:"/jperlmaps/assets/background.mp4",videoMinStep:0,videoMaxStep:5},p=function(e,t,n,c,r,s){var i=n/c,o=0,a=window.setInterval((function(){r(e+o/c*(t-e)),++o>c&&(window.clearInterval(a),s&&s())}),i)},x=n.p+"static/media/compass.ddc73d2d.svg",O=function(e){var t=e.className,n=e.style;return Object(a.jsx)("div",{className:t,style:n,children:Object(a.jsx)("img",{style:{marginLeft:"-".concat(45,"px")},src:x,width:"".concat(90,"px"),height:"".concat(90,"px")})})},g=r.a.memo(O),w=(n(43),function(){var e=(new Date).getFullYear();return Object(a.jsx)("div",{className:"footer-container",children:Object(a.jsx)("div",{className:"footer-content",children:Object(a.jsxs)("div",{children:["\xa9 jperlmaps ",e]})})})}),y=r.a.memo(w),N=(n(44),function(e){var t=Object(c.useRef)(0),n=Object(c.useRef)(!1),r=Object(c.useRef)(),s=Object(c.useRef)(!1),i=Object(c.useRef)(0),o=function e(c){if(n.current)s.current=!0;else{var o=Math.max(v.videoMinStep,Math.min(v.videoMaxStep,c));o!==t.current&&(n.current=!0,p(t.current,o,1e3,30,(function(e){var t;null===(t=r.current)||void 0===t||t.seekTo(e,"seconds")}),(function(){n.current=!1,t.current=o,!0===s.current&&(s.current=!1,e(t.current+i.current))})))}};return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(b,{aspectRatio:16/9,children:Object(a.jsxs)("div",{children:[Object(a.jsx)(m.a,{ref:function(e){return r.current=e},url:v.backgroundVideoURL,className:"react-player",width:"100%",height:"100%"}),"hey"]})}),Object(a.jsx)(d,{left:!0,className:"left-arrow-button",onPress:function(){o(t.current-1),i.current=-1}}),Object(a.jsx)(d,{right:!0,className:"right-arrow-button",onPress:function(){o(t.current+1),i.current=1}}),Object(a.jsx)(g,{className:"compass"}),Object(a.jsx)(y,{})]})}),R=r.a.memo(N);var M=function(){return Object(a.jsx)(R,{})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(M,{})}),document.getElementById("root")),S()}},[[45,1,2]]]);
//# sourceMappingURL=main.f5028959.chunk.js.map