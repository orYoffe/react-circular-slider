(window["webpackJsonp@fseehawer/react-circular-slider"]=window["webpackJsonp@fseehawer/react-circular-slider"]||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var o=a(0),r=a.n(o),n=a(6),i=a.n(n),l=(a(14),a(1)),c=a(4),s=a(7),d=a(8),u=function(e){var t=e.isDragging,a=e.knobPosition,o=e.knobColor,n=e.knobRadius,i=void 0===n?12:n,c=e.knobSize,s=void 0===c?36:c,d=e.onMouseDown,u=l.a.create({knob:{position:"absolute",left:"-".concat(s/2,"px"),top:"-".concat(s/2,"px"),cursor:"grab",zIndex:3},dragging:{cursor:"grabbing"},pause:{animationPlayState:"paused"},animation:{animationDuration:"1500ms",transformOrigin:"50% 50%",animationIterationCount:"infinite",animationTimingFunction:"ease-out",animationName:[{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.8)"},"100%":{transform:"scale(1)"}}]}});return r.a.createElement("div",{style:{transform:"translate(".concat(a.x,"px, ").concat(a.y,"px)")},className:Object(l.b)(u.knob,t&&u.dragging),onMouseDown:d,onTouchStart:d},r.a.createElement("svg",{width:"".concat(s,"px"),height:"".concat(s,"px"),viewBox:"0 0 ".concat(s," ").concat(s)},r.a.createElement("circle",{className:Object(l.b)(u.animation,t&&u.pause),fill:o,fillOpacity:"0.2",stroke:"none",cx:s/2,cy:s/2,r:s/2}),r.a.createElement("circle",{fill:o,stroke:"none",cx:s/2,cy:s/2,r:i}),r.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"14",width:"8",height:"1"}),r.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"17",width:"8",height:"1"}),r.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"20",width:"8",height:"1"})))},b=function(e){var t=e.labelColor,a=e.labelFontSize,o=e.labelValueFontSize,n=e.labelValueAppend,i=e.labelVerticalOffset,c=e.labelHide,s=e.label,d=e.value,u=l.a.create({labels:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"".concat(t),userSelect:"none",zIndex:1},value:{fontSize:"".concat(o),marginBottom:"calc(".concat(i,")"),position:"relative"},appended:{position:"absolute",right:"0",top:0,transform:"translate(100%, 0)"},hide:{display:"none"}});return r.a.createElement("div",{className:Object(l.b)(u.labels,c&&u.hide)},r.a.createElement("div",{style:{fontSize:a}},s),r.a.createElement("div",{className:Object(l.b)(u.value)},r.a.createElement("code",null,d,r.a.createElement("span",{className:Object(l.b)(u.appended)},n))))},p=function(e){var t=e.width,a=e.label,o=e.direction,n=e.strokeDasharray,i=e.strokeDashoffset,c=e.progressColorFrom,s=e.progressColorTo,d=e.trackColor,u=e.progressSize,b=e.trackSize,p=e.svgFullPath,m=e.radiansOffset,f=e.progressLineCap,g=l.a.create({svg:{position:"relative",zIndex:2},path:{transform:"rotate(".concat(m,"rad) ").concat(-1===o&&"scale(-1, 1)"),transformOrigin:"center center"}});return r.a.createElement("svg",{width:"".concat(t,"px"),height:"".concat(t,"px"),viewBox:"0 0 ".concat(t," ").concat(t),overflow:"visible",className:Object(l.b)(g.svg)},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:a,x1:"100%",x2:"0%"},r.a.createElement("stop",{offset:"0%",stopColor:c}),r.a.createElement("stop",{offset:"100%",stopColor:s}))),r.a.createElement("circle",{strokeWidth:b,fill:"none",stroke:d,cx:t/2,cy:t/2,r:t/2}),r.a.createElement("path",{className:Object(l.b)(g.path),ref:p,strokeDasharray:n,strokeDashoffset:i,strokeWidth:u,strokeLinecap:"round"!==f?"butt":"round",fill:"none",stroke:"url(#".concat(a,")"),d:"\n                        M ".concat(t/2,", ").concat(t/2,"\n                        m 0, -").concat(t/2,"\n                        a ").concat(t/2,",").concat(t/2," 0 0,1 0,").concat(t,"\n                        a -").concat(t/2,",-").concat(t/2," 0 0,1 0,-").concat(t,"\n                    ")}))};function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g="ontouchstart"in window,h={DOWN:g?"touchstart":"mousedown",UP:g?"touchend":"mouseup",MOVE:g?"touchmove":"mousemove"},v={top:Math.PI/2,right:0,bottom:-Math.PI/2,left:-Math.PI},O=function(e){return 0===e?1:Math.min(Math.max(e,-1),1)},k=function(e,t){for(var a=[],o=e;o<=t;o++)a.push(o);return a},C=l.a.create({circularSlider:{position:"relative",display:"inline-block",opacity:0,transition:"opacity 1s ease-in"},mounted:{opacity:1}}),E=Object(o.memo)((function(e){var t=e.label,a=void 0===t?"ANGLE":t,n=e.width,i=void 0===n?280:n,s=e.direction,m=void 0===s?1:s,g=e.min,E=void 0===g?0:g,w=e.max,F=void 0===w?360:w,y=e.knobColor,j=void 0===y?"#4e63ea":y,S=e.knobZeroPosition,D=void 0===S?"top":S,x=e.labelColor,P=void 0===x?"#272b77":x,z=e.labelFontSize,M=void 0===z?"1rem":z,N=e.labelValueFontSize,I=void 0===N?"4rem":N,A=e.labelValueAppend,V=void 0===A?"":A,L=e.labelVerticalOffset,T=void 0===L?"2rem":L,Z=e.labelHide,B=void 0!==Z&&Z,R=e.progressColorFrom,H=void 0===R?"#80C3F3":R,U=e.progressColorTo,W=void 0===U?"#4990E2":U,X=e.progressSize,Y=void 0===X?6:X,G=e.trackColor,J=void 0===G?"#DDDEFB":G,K=e.trackSize,Q=void 0===K?6:K,q=e.data,$=void 0===q?[]:q,_=e.initialDataIndex,ee=void 0===_?0:_,te=e.progressLineCap,ae=void 0===te?"round":te,oe=e.onChange,re=void 0===oe?function(e){}:oe,ne=Object(o.useState)({mounted:!1,isDragging:!1,width:i,radius:i/2,knobZeroPosition:D,label:0,data:$,radians:0,knob:{x:0,y:0},dashFullArray:0,dashFullOffset:0}),ie=Object(d.a)(ne,2),le=ie[0],ce=ie[1],se=Object(o.useRef)(null),de=Object(o.useRef)(null),ue=Object(o.useCallback)((function(){var e=se.current.getBoundingClientRect(),t=window.pageXOffset||document.documentElement.scrollLeft,a=window.pageYOffset||document.documentElement.scrollTop;return{top:e.top+a,left:e.left+t}}),[]),be=Object(o.useCallback)((function(e){var t=le.radius,a=e+v[D],o=(a>0?a:2*Math.PI+a)*(360/(2*Math.PI)),r=o/360*le.dashFullArray;o=-1===O(m)?360-o:o;var n=le.data.length/361,i=Math.floor(o*n);ce((function(a){return f({},a,{dashFullOffset:-1===O(m)?r:le.dashFullArray-r,label:le.data[i],knob:{x:t*Math.cos(e)+t,y:t*Math.sin(e)+t}})})),re(le.data[i])}),[le.dashFullArray,le.radius,le.data,D,m,re]),pe=Object(o.useCallback)((function(e){ce((function(e){return f({},e,{isDragging:!0})}))}),[]),me=Object(o.useCallback)((function(e){if(e.preventDefault(),le.isDragging){var t;"touchmove"===e.type&&(t=e.changedTouches[0]);var a=("touchmove"===e.type?t.pageX:e.pageX)-(ue().left+le.radius),o=("touchmove"===e.type?t.pageY:e.pageY)-(ue().top+le.radius),r=Math.atan2(o,a);be(r)}}),[le.isDragging,le.radius,be,ue]),fe=function(e){ce((function(e){return f({},e,{isDragging:!1})}))};return Object(o.useEffect)((function(){ce((function(e){return f({},e,{mounted:!0,data:e.data.length?Object(c.a)(e.data):Object(c.a)(k(E,F)),dashFullArray:de.current.getTotalLength()})}))}),[le.date,F,E]),Object(o.useEffect)((function(){var e=$.length,t=ee>e-1?e:ee;if(ce((function(e){return f({},e,{radians:Math.PI/2-v[le.knobZeroPosition]})})),t&&e){var a=Math.ceil(360/e),o=O(m)*t*a*Math.PI/180-v[le.knobZeroPosition];be(o+.005*O(m))}else be(-v[le.knobZeroPosition]+.005*O(m))}),[le.dashFullArray,le.knobZeroPosition,ee,m,$.length]),Object(o.useEffect)((function(){if(le.isDragging)return window.addEventListener(h.MOVE,me,{passive:!1}),window.addEventListener(h.UP,fe,{passive:!1}),function(){window.removeEventListener(h.MOVE,me),window.removeEventListener(h.UP,fe)}}),[le.isDragging,me]),r.a.createElement("div",{className:Object(l.b)(C.circularSlider,le.mounted&&C.mounted),ref:se},r.a.createElement(p,{width:i,label:a,direction:m,strokeDasharray:le.dashFullArray,strokeDashoffset:le.dashFullOffset,progressColorFrom:H,progressColorTo:W,trackColor:J,progressSize:Y,trackSize:Q,svgFullPath:de,radiansOffset:le.radians,progressLineCap:ae}),r.a.createElement(u,{isDragging:le.isDragging,knobPosition:{x:le.knob.x,y:le.knob.y},knobColor:j,onMouseDown:pe}),r.a.createElement(b,{labelColor:P,labelFontSize:M,labelVerticalOffset:T,labelValueFontSize:I,labelValueAppend:V,labelHide:B,label:a,value:"".concat(le.label)}))})),w=function(){var e=l.a.create({wrapper:{margin:"2rem"},h3:{margin:"3rem 0 2rem 0"},pre:{fontSize:"0.9rem",borderRadius:"0.3rem",backgroundColor:"#eeeeee",padding:"0.5rem"},slider:{padding:"0 0 0.5rem 0"}});return r.a.createElement("div",{className:Object(l.b)(e.wrapper)},r.a.createElement("h3",{className:Object(l.b)(e.h3)},"Anticlockwise rotation with the knob positioned to the right:"),r.a.createElement("div",{className:Object(l.b)(e.slider)},r.a.createElement(E,{direction:-1,knobZeroPosition:"right",labelValueAppend:"\xb0"})),r.a.createElement("pre",{className:Object(l.b)(e.pre)},'<CircularSlider\n    direction={-1}\n    knobZeroPosition="right"\n    labelValueAppend="\xb0"\n/>'),r.a.createElement("h3",{className:Object(l.b)(e.h3)},"Data array with an initial value:"),r.a.createElement("div",{className:Object(l.b)(e.slider)},r.a.createElement(E,{label:"savings",data:["1\u20ac","2\u20ac","3\u20ac","4\u20ac","5\u20ac","6\u20ac","7\u20ac","8\u20ac","9\u20ac","10\u20ac","20\u20ac","30\u20ac","40\u20ac","50\u20ac","60\u20ac","70\u20ac","80\u20ac","90\u20ac","100\u20ac","200\u20ac","300\u20ac","400\u20ac","500\u20ac","600\u20ac","700\u20ac","800\u20ac","900\u20ac","1000\u20ac","2000\u20ac","3000\u20ac","4000\u20ac","5000\u20ac","6000\u20ac","7000\u20ac","8000\u20ac","9000\u20ac","10000\u20ac"],initialDataIndex:10,labelColor:"#005a58",knobColor:"#005a58",progressColorFrom:"#00bfbd",progressColorTo:"#009c9a",progressSize:24,trackColor:"#eeeeee",trackSize:24})),r.a.createElement("pre",{className:Object(l.b)(e.pre)},'<CircularSlider\n    label="savings"\n    data=["1\u20ac","2\u20ac",...]\n    initialDataIndex={10}\n    labelColor="#005a58"\n    knobColor="#005a58"\n    progressColorFrom="#00bfbd"\n    progressColorTo="#005a58"\n    progressSize={24}\n    trackColor="#eeeeee"\n    trackSize={24}\n/>'),r.a.createElement("h3",{className:Object(l.b)(e.h3)},"Some props with flat line cap:"),r.a.createElement("div",{className:Object(l.b)(e.slider)},r.a.createElement(E,{label:"Alphabet",progressLineCap:"flat",initialDataIndex:1,width:250,labelColor:"#212121",labelValueFontSize:"6rem",knobColor:"#212121",progressColorFrom:"#ff8500",progressColorTo:"#a15400",progressSize:8,trackColor:"#eeeeee",trackSize:4,data:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")})),r.a.createElement("pre",{className:Object(l.b)(e.pre)},'<CircularSlider\n    width={200}\n    progressLineCap="flat"\n    initialDataIndex={1}\n    label="Alphabet"\n    data=["A","B","C",...]\n    labelColor="#212121"\n    labelValueFontSize="6rem"\n    knobColor="#212121"\n    progressColorFrom="#ff8500"\n    progressColorTo="#a15400"\n    progressSize={8}\n    trackColor="#eeeeee"\n    trackSize={4}\n/>'))};i.a.render(r.a.createElement(w,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.7eae9db0.chunk.js.map