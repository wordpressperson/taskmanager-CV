(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},19:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(5),c=n.n(i),r=(n(2),n(6)),l=n(7),s=n(9),d=n(8),u=n(10),h=n(1),m=[{id:1,text:"Wash clothes at home ",completed:!0},{id:2,text:"Pick siblings from school ",completed:!0},{id:3,text:"Watch el clasico game ",completed:!1},{id:4,text:"Do some programming and Wikipedia edits",completed:!1}],f=(n(4),function(e){return a.a.createElement("p",{className:"MyName"},e.message)}),p=function(e){return a.a.createElement("p",{className:"FooterComp"},"This is the footer component")},g={fontStyle:"italic",backgroundColor:"#108003"};var v=function(e){return a.a.createElement("p",{style:g},"This is the header component")},w=function(e){return a.a.createElement("div",{className:"Films"},a.a.createElement("input",{type:"checkbox",checked:e.completed,onChange:function(){return e.handleChange(e.id)}}),a.a.createElement("p",{style:{textDecoration:e.completed?"line-through":null}},e.text))},b=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={testDataItem:m,count:[{id:1},{id:2},{id:3},{id:4}]},e.handleChange=e.handleChange.bind(Object(h.a)(Object(h.a)(e))),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState(function(t){return{testDataItem:t.testDataItem.map(function(t){return t.id===e&&(t.completed=!t.completed),t})}})}},{key:"render",value:function(){var e=this,t=this.state.testDataItem.map(function(t){return a.a.createElement(w,{text:t.text,completed:t.completed,key:t.id,handleChange:function(){return e.handleChange(t.id)}})});return a.a.createElement("div",null,a.a.createElement(f,{message:"This is the main component"}),a.a.createElement("div",{className:"FilmList"},t),a.a.createElement(p,null),a.a.createElement(v,null))}}]),t}(o.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(a.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");k?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):E(t,e)})}}()},2:function(e,t,n){},4:function(e,t,n){}},[[11,2,1]]]);
//# sourceMappingURL=main.94cc19da.chunk.js.map