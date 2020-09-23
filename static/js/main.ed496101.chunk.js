(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{126:function(e,n,t){e.exports=t(255)},131:function(e,n,t){},134:function(e,n,t){},255:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(25),o=t.n(c),i=(t(131),t(132),t(38)),s=t(26),u=t.n(s),l=t(53),f=function(){var e=Object(r.useState)(),n=Object(i.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(),o=Object(i.a)(c,2),s=o[0],f=o[1],d=function(){var e=Object(l.a)(u.a.mark((function e(){var n,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t.opened){e.next=11;break}return 64,e.next=5,t.transferIn(5,64);case 5:n=e.sent,r=new TextDecoder,a=r.decode(n.data),f(a),console.log("Read NTAG213 containing '".concat(a,"'.")),d();case 11:e.next=17;break;case 13:throw e.prev=13,e.t0=e.catch(0),console.error("Error while reading from the NFC Reader:\n".concat(e.t0.toString())),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=11;break}return e.next=4,t.open();case 4:return e.next=6,t.selectConfiguration(1);case 6:return e.next=8,t.claimInterface(2);case 8:return e.next=10,t.controlTransferOut({requestType:"class",recipient:"interface",request:34,value:1,index:2});case 10:d();case 11:e.next=17;break;case 13:throw e.prev=13,e.t0=e.catch(0),console.error("Error while setting up the NFC Reader:\n".concat(e.t0.toString())),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.usb.requestDevice({filters:[{vendorId:9025}]});case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){p()})),[s,t,v]},d=(t(134),t(264)),p=t(263),v=t(261),m=function(e){var n=e.readTag,t=e.isDeviceConnected,r=e.configureNewNFCReader;return t?a.a.createElement("div",{className:"App"},n?a.a.createElement(p.a,{className:"nfc-card"},a.a.createElement(p.a.Content,null,a.a.createElement(p.a.Header,null,"NFC Tag Read"),a.a.createElement(p.a.Description,null,"Received value: ",a.a.createElement("div",{className:"read-value"},n)))):a.a.createElement(v.a,{active:!0,inverted:!0,inline:"centered"},"Waiting for a scan")):a.a.createElement("div",{className:"App"},a.a.createElement(d.a,{onClick:r,size:"small",color:"orange"},"Configure the NFC Reader"))},h=function(){var e=f(),n=Object(i.a)(e,3),t=n[0],r=n[1],c=n[2];return a.a.createElement(m,{readTag:t,isDeviceConnected:!!r,configureNewNFCReader:c})};var w=function(){return a.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[126,1,2]]]);
//# sourceMappingURL=main.ed496101.chunk.js.map