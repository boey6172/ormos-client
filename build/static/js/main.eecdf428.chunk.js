(this["webpackJsonpormos-client"]=this["webpackJsonpormos-client"]||[]).push([[0],{114:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var c=n(4),i=n(1),o=n.n(i),a=n(14),r=n.n(a),s=(n(94),n(26)),l=n(21),j=n.p+"static/media/logo.cfa0f8ed.png",d=(n(95),n(29)),u=n(70),b=n.n(u),h=n(31),O=n(15),f=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"App",children:"form asdfjlkajsdf"})})},p=n(146),g=n(117),x=n(78),m=n.n(x),v=n(77),w=n.n(v),y=n(79),k=n.n(y),S=function(){var e=Object(O.e)(),t=function(t,n){t.preventDefault(),e.push(n)};return Object(c.jsx)("div",{children:Object(c.jsxs)(p.a,{color:"secondary","aria-label":"outlined primary button group",children:[Object(c.jsxs)(g.a,{onClick:function(e){t(e,"/p2p")},children:[Object(c.jsx)(w.a,{}),Object(c.jsx)("small",{children:"P2P"})]}),Object(c.jsxs)(g.a,{onClick:function(e){t(e,"/food")},children:[Object(c.jsx)(m.a,{}),Object(c.jsx)("small",{children:"FOOD"})]}),Object(c.jsxs)(g.a,{onClick:function(e){t(e,"/")},children:[Object(c.jsx)(k.a,{}),Object(c.jsx)("small",{children:"Comming Soon.."})]})]})})},C=function(e){var t=Object(i.useState)(!0),n=Object(l.a)(t,2),o=n[0];n[1];return o?Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{children:[" Welcome , ",e.user.displayName]}),Object(c.jsx)("div",{children:Object(c.jsx)(S,{})}),Object(c.jsx)("div",{children:"."})]})}):Object(c.jsx)(f,{})},N=n(151),A=n(80),F=n.n(A),I=n(149),P=n(161),R=n(150),L=(n(37),n(114),function(){var e=Object(i.useState)({loaded:!1,coordinates:{lat:"",lng:""}}),t=Object(l.a)(e,2),n=t[0],c=t[1],o=function(e){c({loaded:!0,coordinates:{lat:e.coords.latitude,lng:e.coords.longitude}})},a=function(e){c({loaded:!0,error:{code:e.code,message:e.message}})};return Object(i.useEffect)((function(){"geolocation"in navigator||a({code:0,message:"Geolocation not supported"}),navigator.geolocation.getCurrentPosition(o,a)}),[]),n}),D=function(){var e=Object(i.useState)({lat:13.4113,lng:121.1808}),t=Object(l.a)(e,2),n=t[0],o=(t[1],Object(i.createRef)()),a=L();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col text-center",children:[Object(c.jsx)("h2",{children:"React-leaflet - Get user location"}),Object(c.jsx)("p",{children:"Get user location and highlight it with a marker"}),Object(c.jsx)("div",{className:"col",children:Object(c.jsxs)(I.a,{center:n,zoom:14,children:[Object(c.jsx)(P.a,{url:"https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=B7Qswco9rqEFCQ4fnonV",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),a.loaded&&!a.error&&Object(c.jsx)(R.a,{position:[a.coordinates.lat,a.coordinates.lng]})]})})]})}),Object(c.jsx)("div",{className:"row my-4",children:Object(c.jsx)("div",{className:"col d-flex justify-content-center",children:Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),function(){if(a.loaded&&!a.error)return console.log(o),console.log(a),!1;alert(a)}()},children:"Locate Me"})})}),Object(c.jsx)("div",{className:"row my-4",children:Object(c.jsx)("div",{className:"col d-flex justify-content-center",children:Object(c.jsx)("button",{className:"btn btn-primary",children:"Locate Me"})})})]})},W=Object(N.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}})),E=function(){var e=Object(O.e)();W();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(g.a,{onClick:function(t){!function(t,n){t.preventDefault(),e.push(n)}(t,"/")},children:[Object(c.jsx)(F.a,{}),Object(c.jsx)("small",{children:"BACK"})]}),Object(c.jsx)("div",{className:"p2p",children:"Point to point Services"}),Object(c.jsx)("div",{children:Object(c.jsx)(D,{})})]})},B=function(){return Object(c.jsx)("div",{children:"form Food"})},G=n(50),U=n(155),M=n(156),T=n(157),V=n(158),z=n(83),Q=n.n(z),J=n(7),K=n(159),_=n(153),q=n(152),H=n(160),X=n(154),Y=n(81),Z=n.n(Y),$=n(82),ee=n.n($),te=Object(N.a)({list:{width:250},fullList:{width:"auto"}}),ne=function(){d.a.auth().signOut().then((function(){console.log("Successfully Signed out")})).catch((function(){console.log("error Signed out")}))},ce=function(e){var t=te(),n=o.a.useState({top:!1,left:!1,bottom:!1,right:!1}),i=Object(l.a)(n,2),a=i[0],r=i[1],j=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&r(Object(s.a)(Object(s.a)({},a),{},Object(G.a)({},e,t)))}},d=function(e){return Object(c.jsxs)("div",{className:Object(J.a)(t.list,Object(G.a)({},t.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:j(e,!1),onKeyDown:j(e,!1),children:[Object(c.jsx)(q.a,{}),Object(c.jsxs)(_.a,{children:[Object(c.jsxs)(H.a,{button:!0,children:[Object(c.jsxs)(X.a,{children:[Object(c.jsx)(Z.a,{})," "]}),Object(c.jsx)(h.b,{to:"/",children:"Home"})]}),Object(c.jsxs)(H.a,{button:!0,children:[Object(c.jsxs)(X.a,{children:[Object(c.jsx)(ee.a,{})," "]}),Object(c.jsx)(h.b,{onClick:ne,children:"Log Out"})]})]}),Object(c.jsx)(q.a,{})]})};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(U.a,{position:"static",children:Object(c.jsxs)(M.a,{children:[Object(c.jsx)(T.a,{edge:"start",color:"inherit","aria-label":"menu","aria-haspopup":"true",onClick:j("left",!0),children:Object(c.jsx)(Q.a,{})}),Object(c.jsx)(V.a,{variant:"h6",children:"ORMOS"})]})}),Object(c.jsx)("div",{children:["left"].map((function(e){return Object(c.jsx)(o.a.Fragment,{children:Object(c.jsx)(K.a,{anchor:"left",open:a.left,onClose:j("left",!1),children:d("left")})},"left")}))})]})},ie={signInFlow:"popup",signInOptions:[d.a.auth.EmailAuthProvider.PROVIDER_ID,d.a.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(e){return!1}}},oe=function(){var e=Object(i.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){return d.a.auth().onAuthStateChanged((function(e){a(e)}))})),n?Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(h.a,{children:[Object(c.jsx)(ce,{}),Object(c.jsx)(O.a,{exact:!0,path:"/",render:function(e){return Object(c.jsx)(o.a.Fragment,{children:Object(c.jsx)(C,Object(s.a)({},{user:n}))})}}),Object(c.jsx)(O.a,{path:"/verify",component:f}),Object(c.jsx)(O.a,{path:"/p2p",component:E}),Object(c.jsx)(O.a,{path:"/food",component:B})]})}):Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{alt:"mainLogo",src:j,className:"App-logo"})}),Object(c.jsx)("div",{children:"Sign Up / Register"}),Object(c.jsx)(b.a,{uiConfig:ie,firebaseAuth:d.a.auth()})]})})})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,163)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),o(e),a(e)}))},re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function se(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(67),d.a.initializeApp({apiKey:"AIzaSyCl7gGiwwOPR8rNmJSQ09Vp0lUPrOVkI3Q",authDomain:"testing-49c7b.firebaseapp.com",databaseURL:"https://testing-49c7b.firebaseio.com",projectId:"testing-49c7b",storageBucket:"testing-49c7b.appspot.com",messagingSenderId:"610079685602",appId:"1:610079685602:web:3bbb6d28808951f52917bb",measurementId:"G-ZL0P2YX073"});r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(oe,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");re?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):se(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):se(t,e)}))}}(),ae()},94:function(e,t,n){},95:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.eecdf428.chunk.js.map