webpackJsonp([1,4],{155:function(e,t,i){"use strict";var n=i(244),o=(i.n(n),i(1));i.d(t,"a",function(){return s});var r=this&&this.__decorate||function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(){this.scene=new n.BehaviorSubject("intro"),this.subScene=new n.BehaviorSubject("xbox")}return e=r([i.i(o.c)(),a("design:paramtypes",[])],e)}()},403:function(e,t){function i(e){throw new Error("Cannot find module '"+e+"'.")}i.keys=function(){return[]},i.resolve=i,e.exports=i,i.id=403},404:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(491),o=i(1),r=i(513),a=i(512);r.a.production&&i.i(o.a)(),i.i(n.a)().bootstrapModule(a.a)},511:function(e,t,i){"use strict";var n=i(1),o=i(155);i.d(t,"a",function(){return s});var r=this&&this.__decorate||function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e){this.core=e,this.showSeeWork=!1,this.showWorkHistory=!1,this.bioIntro="Software Engineer working for Microsoft's Team Xbox on new and exciting experiences."}return e.prototype.ngOnInit=function(){var e=this;setTimeout(function(){e.showSeeWork=!0},1e3)},e.prototype.showWork=function(){var e=this;this.core.scene.next("intro-transition"),this.showWorkHistory=!0,this.showSeeWork=!1,setTimeout(function(){e.core.scene.next("main")},1e3)},e=r([i.i(n.V)({selector:"app-root",template:i(680),styles:[i(672)]}),a("design:paramtypes",["function"==typeof(t=void 0!==o.a&&o.a)&&t||Object])],e);var t}()},512:function(e,t,i){"use strict";var n=i(218),o=i(1),r=i(482),a=i(317),s=i(511),c=i(514),l=i(516),d=i(517),f=i(518),p=i(519),u=i(520),h=i(515),g=i(155);i.d(t,"a",function(){return v});var m=this&&this.__decorate||function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a},b=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(){function e(){}return e=m([i.i(o.b)({declarations:[s.a,h.a,c.a,l.a,d.a,f.a,p.a,u.a],imports:[n.a,r.a,a.a],providers:[g.a],bootstrap:[s.a]}),b("design:paramtypes",[])],e)}()},513:function(e,t,i){"use strict";i.d(t,"a",function(){return n});var n={production:!0}},514:function(e,t,i){"use strict";var n=i(1),o=i(373);i.n(o);i.d(t,"a",function(){return s});var r=this&&this.__decorate||function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e){this.ref=e,this.fontSize="12px",this.writing=!0,this.chars="電脳 計算機 電子計算機 端末 電算 電算機"}return e.prototype.ngAfterViewInit=function(){var e=this;this.displayText="電",this.effectsText=" ",this.textString?this.DrawText():this.textStringObs&&this.textStringObs.subscribe(function(t){e.displayText="電",e.effectsText=" ",e.textString=t,e.DrawText()})},e.prototype.DrawText=function(){var e=this;this.displayText.length<=this.textString.length?(this.effectsText=this.effectsText.slice(0,this.effectsText.length-1),this.displayText.length>1&&(this.effectsText+=this.displayText[this.displayText.length-2]),this.effectsText+=this.chars[this.displayText.length%this.chars.length],this.displayText=this.displayText.slice(0,this.displayText.length-1),this.displayText+=this.textString[this.displayText.length],this.displayText+=this.chars[this.displayText.length%this.chars.length],setTimeout(function(){e.DrawText()},Math.max(90-3*this.speed,1))):(this.displayText=this.displayText.slice(0,this.displayText.length-1),this.effectsText=this.displayText,this.writing=!1),this.ref.detectChanges()},r([i.i(n.w)(),a("design:type",String)],e.prototype,"textString",void 0),r([i.i(n.w)(),a("design:type","function"==typeof(t=void 0!==o.BehaviorSubject&&o.BehaviorSubject)&&t||Object)],e.prototype,"textStringObs",void 0),r([i.i(n.w)(),a("design:type",Number)],e.prototype,"speed",void 0),r([i.i(n.w)(),a("design:type",String)],e.prototype,"fontSize",void 0),e=r([i.i(n.V)({selector:"graphic-text",template:i(681),styles:[i(673)]}),a("design:paramtypes",["function"==typeof(s=void 0!==n.t&&n.t)&&s||Object])],e);var t,s}()},515:function(e,t,i){"use strict";var n=i(1);i.d(t,"a",function(){return a});var o=this&&this.__decorate||function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){this.delay=500,this.source="",this.size="42",this.altText="missing icon alt-text",this.show=!1}return e.prototype.ngAfterViewInit=function(){var e=this;setTimeout(function(){e.show=!0},this.delay)},o([i.i(n.w)(),r("design:type",Number)],e.prototype,"delay",void 0),o([i.i(n.w)(),r("design:type",String)],e.prototype,"source",void 0),o([i.i(n.w)(),r("design:type",String)],e.prototype,"size",void 0),o([i.i(n.w)(),r("design:type",String)],e.prototype,"altText",void 0),e=o([i.i(n.V)({selector:"ryd-icon",template:i(682),styles:[i(674)]}),r("design:paramtypes",[])],e)}()},516:function(e,t,i){"use strict";var n=i(1);i.d(t,"a",function(){return a});var o=this&&this.__decorate||function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){this.delay=500,this.text="button",this.highlight=!1,this.show=!1}return e.prototype.ngAfterViewInit=function(){var e=this;setTimeout(function(){e.show=!0},this.delay)},o([i.i(n.w)(),r("design:type",Number)],e.prototype,"delay",void 0),o([i.i(n.w)(),r("design:type",String)],e.prototype,"text",void 0),o([i.i(n.w)(),r("design:type",Boolean)],e.prototype,"highlight",void 0),e=o([i.i(n.V)({selector:"ryd-menu-button",template:i(683),styles:[i(675)]}),r("design:paramtypes",[])],e)}()},517:function(e,t,i){"use strict";var n=i(1),o=i(373),r=(i.n(o),i(317));i.d(t,"a",function(){return c});var a=this&&this.__decorate||function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e,t){this.ref=e,this.http=t,this.voiceServerUrl="http://localhost:8117",this.myAudioLevelObs=new o.BehaviorSubject(0),this.foreignAudioLevelObs=new o.BehaviorSubject(0),this.foreignId=new o.BehaviorSubject(""),this.mypeerid=new o.BehaviorSubject(""),this.connected=!1}return e.prototype.ngOnInit=function(){var e=this;this.http.post(this.voiceServerUrl,{derp:"derpString"}).subscribe(function(e){console.log(e)}),this.myAudioLevelObs.subscribe(function(t){e.myAudioLevel=t,e.ref.detectChanges()}),this.foreignAudioLevelObs.subscribe(function(t){e.foreignAudioLevel=t,e.ref.detectChanges()}),this.peer=new Peer({key:"s9hp9bp6p9cnmi"});var t=this;this.peer.on("open",function(e){t.mypeerid.next(e)}),this.peer.on("connection",function(e){e.on("data",function(e){console.log(e)})});var i=navigator;i.getUserMedia=i.getUserMedia||i.webkitGetUserMedia||i.mozGetUserMedia||i.msGetUserMedia,this.peer.on("call",function(e){t.foreignId.next(e.peer),i.getUserMedia({video:!1,audio:!0},function(i){t.visualizeStream(i,t.myAudioLevelObs),e.answer(i),e.on("stream",function(e){t.visualizeStream(e,t.foreignAudioLevelObs),t.connected=!0,t.peerAudio.nativeElement.src=URL.createObjectURL(e)})},function(e){console.log("Failed to get stream",e)})})},e.prototype.connect=function(){this.foreignId.next(this.foreignIdInput);var e=this;this.peer.connect(this.foreignIdInput).on("open",function(){e.audioConnect()})},e.prototype.audioConnect=function(){var e=this,t=navigator;t.getUserMedia=t.getUserMedia||t.webkitGetUserMedia||t.mozGetUserMedia||t.msGetUserMedia,t.getUserMedia({video:!1,audio:!0},function(t){e.visualizeStream(t,e.myAudioLevelObs),e.peer.call(e.foreignIdInput,t).on("stream",function(t){e.visualizeStream(t,e.foreignAudioLevelObs),e.connected=!0,e.peerAudio.nativeElement.src=URL.createObjectURL(t)})},function(e){console.log("Failed to get stream",e)})},e.prototype.visualizeStream=function(e,t){var i=new AudioContext,n=i.createAnalyser(),o=i.createMediaStreamSource(e),r=i.createScriptProcessor(2048,1,1);n.smoothingTimeConstant=.3,n.fftSize=1024,o.connect(n),n.connect(r),r.connect(i.destination),r.onaudioprocess=function(){var e=new Uint8Array(n.frequencyBinCount);n.getByteFrequencyData(e);for(var i=0,o=e.length,r=0;r<o;r++)i+=e[r];var a=i/o;t.next(a)}},a([i.i(n.U)("peerAudio"),s("design:type","function"==typeof(t=void 0!==n.C&&n.C)&&t||Object)],e.prototype,"peerAudio",void 0),e=a([i.i(n.V)({selector:"peer-audio",template:i(684),styles:[i(676)]}),s("design:paramtypes",["function"==typeof(c=void 0!==n.t&&n.t)&&c||Object,"function"==typeof(l=void 0!==r.b&&r.b)&&l||Object])],e);var t,c,l}()},518:function(e,t,i){"use strict";var n=i(1),o=i(155);i.d(t,"a",function(){return s});var r=this&&this.__decorate||function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e,t){var i=this;this.ref=e,this.core=t,this.size="42",this.core.scene.subscribe(function(e){i.processSceneChange(e)})}return e.prototype.ngOnInit=function(){},e.prototype.processSceneChange=function(e){if(this.scene!==e)switch(this.scene=e,e){case"intro-transition":this.size="25"}},e.prototype.openExternal=function(e){window.open(e)},e=r([i.i(n.V)({selector:"site-title",template:i(685),styles:[i(677)]}),a("design:paramtypes",["function"==typeof(t=void 0!==n.t&&n.t)&&t||Object,"function"==typeof(s=void 0!==o.a&&o.a)&&s||Object])],e);var t,s}()},519:function(e,t,i){"use strict";var n=i(1);i.d(t,"a",function(){return a});var o=this&&this.__decorate||function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){this.width="900"}return o([i.i(n.w)(),r("design:type",String)],e.prototype,"width",void 0),e=o([i.i(n.V)({selector:"spacer",template:i(686),styles:[i(678)]}),r("design:paramtypes",[])],e)}()},520:function(e,t,i){"use strict";var n=i(1),o=i(155);i.d(t,"a",function(){return s});var r=this&&this.__decorate||function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e){this.core=e,this.xboxOffset=0,this.flashOffset=0,this.imagineOffset=0,this.xboxSelected=!0,this.flashSelected=!1,this.imagineSelected=!1,this.globalOffest=201,this.xboxProducts=[{name:"Xbox One Shell/Dashboard"},{name:"Xbox App on Windows"},{name:"Prototyping & Research"},{name:"Beam Streaming clients"}],this.flashProducts=[{name:"Project NOVA"},{name:"Operation BlackKnife"},{name:"Soviet Silo Defense"},{name:"Point Resistence"}],this.scrollInterval=null}return e.prototype.ngAfterViewInit=function(){var e=this;this.xboxOffset=this.xboxContent.nativeElement.offsetTop-this.globalOffest,this.flashOffset=this.flashContent.nativeElement.offsetTop-this.globalOffest,this.imagineOffset=this.imagineContent.nativeElement.offsetTop-this.globalOffest,this.subContent.nativeElement.onscroll=function(){var t=e.subContent.nativeElement.scrollTop+e.globalOffest;e.xboxOffset+300>=t&&e.xboxOffset-300<=t?e.xboxSelected=!0:e.xboxSelected=!1,e.imagineOffset+300>=t&&e.imagineOffset-300<=t?e.imagineSelected=!0:e.imagineSelected=!1,e.flashOffset+300>=t&&e.flashOffset-300<=t?e.flashSelected=!0:e.flashSelected=!1}},e.prototype.scrollTo=function(e){var t=this;this.scrollInterval&&clearInterval(this.scrollInterval);this.subContent.nativeElement.scrollTop;this.scrollInterval=setInterval(function(){var i=(e-t.subContent.nativeElement.scrollTop)/20;t.subContent.nativeElement.scrollTop+=i<0?Math.floor(i):Math.ceil(i),t.subContent.nativeElement.scrollTop+1>e&&t.subContent.nativeElement.scrollTop-1<e&&(clearInterval(t.scrollInterval),t.scrollInterval=null)},5)},e.prototype.openMenu=function(e){switch(e){case"xbox":this.scrollTo(this.xboxContent.nativeElement.offsetTop-this.globalOffest);break;case"imagine":this.scrollTo(this.imagineContent.nativeElement.offsetTop-this.globalOffest);break;case"flash":this.scrollTo(this.flashContent.nativeElement.offsetTop-this.globalOffest)}},r([i.i(n.U)("subContent"),a("design:type","function"==typeof(t=void 0!==n.C&&n.C)&&t||Object)],e.prototype,"subContent",void 0),r([i.i(n.U)("xboxContent"),a("design:type","function"==typeof(s=void 0!==n.C&&n.C)&&s||Object)],e.prototype,"xboxContent",void 0),r([i.i(n.U)("imagineContent"),a("design:type","function"==typeof(c=void 0!==n.C&&n.C)&&c||Object)],e.prototype,"imagineContent",void 0),r([i.i(n.U)("flashContent"),a("design:type","function"==typeof(l=void 0!==n.C&&n.C)&&l||Object)],e.prototype,"flashContent",void 0),e=r([i.i(n.V)({selector:"work-history",template:i(687),styles:[i(679)]}),a("design:paramtypes",["function"==typeof(d=void 0!==o.a&&o.a)&&d||Object])],e);var t,s,c,l,d}()},672:function(e,t){e.exports=".host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;margin-top:-10px;overflow:hidden}.item{width:200px;height:22px}input{background:#000;border:1px solid #fff;color:#fff;text-align:center;padding:5px;margin:10px}.width-100{width:100%}.site-canvas{width:100%;height:100%;background-color:#000;position:absolute;z-index:-1}.bio-intro{width:380px;margin-top:15px;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;opacity:1}.bio-hide{opacity:0}.see-work{text-align:center;width:450px;margin-top:100px;-webkit-animation-name:fade-in;animation-name:fade-in;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;font-size:14px;cursor:pointer}@-webkit-keyframes menu-grow{0%{margin-top:100px;width:450px}to{margin-top:5px;width:500px}}@keyframes menu-grow{0%{margin-top:100px;width:450px}to{margin-top:5px;width:500px}}.icon{background-size:contain;opacity:0;margin:0 10px;top:-20px;position:relative;height:100%;width:100%}"},673:function(e,t){e.exports=".graphic-text{font-size:18px;font-family:monospace;text-align:center;position:absolute;width:100%}.no-select{cursor:none}.effect-text{-webkit-animation-name:blurText;animation-name:blurText;-webkit-animation-duration:90ms;animation-duration:90ms;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.effect-done,.effect-text{-webkit-filter:blur(5px);filter:blur(5px)}.effect-done{-webkit-animation-duration:.2s;animation-duration:.2s}"},674:function(e,t){e.exports=".icon{background-size:contain;opacity:0;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out;margin:0 10px;top:-20px;position:relative}.icon-show{opacity:.5;top:0}.icon-show:hover{opacity:1;-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out}"},675:function(e,t){e.exports=".menu-button{opacity:0;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out;margin:0 10px;position:relative;font-family:Segoe UI,Arial,Helvetica,sans-serif;font-size:large;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.button-show{opacity:.5;top:0}.button-highlight{opacity:1;top:0}.button-show:hover{opacity:1;-webkit-transition:all 50ms ease-in-out;transition:all 50ms ease-in-out}"},676:function(e,t){e.exports=".host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%}div{font-family:sans-serif;font-size:32px}.item{width:200px;height:22px}input{background:#000;text-align:center;margin:10px}button,input{border:1px solid #fff;color:#fff;padding:5px}button{background:none}button:hover{color:#23ac7c;border-color:#23ac7c;border-width:1px;-webkit-transition:color .1s,border-color 50ms;transition:color .1s,border-color 50ms}.audio{height:2px;margin-top:10px;margin-bottom:10px}.myAudio{background:#23ac7c;box-shadow:0 0 10px 2px #23ac7c}.theirAudio{background:#f83956;box-shadow:0 0 10px 2px #f83956}"},677:function(e,t){e.exports=".host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;margin-top:80px;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.host-docked{margin-top:5px}.icons{height:42px;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.icons-docked{height:18px;margin-top:-20px}div{font-family:Segoe UI,Arial,Helvetica,sans-serif;font-size:32px}.item{width:200px;height:22px}.width-100{width:100%}.spacer-docked{opacity:0;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}"},678:function(e,t){e.exports=".spacer{margin-top:15px;margin-bottom:15px;background:#fff;-webkit-animation-name:grow;animation-name:grow;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;height:1px;text-align:center}@-webkit-keyframes grow{0%{-webkit-transform:scale(.1);transform:scale(.1)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes grow{0%{-webkit-transform:scale(.1);transform:scale(.1)}to{-webkit-transform:scale(1);transform:scale(1)}}"},679:function(e,t){e.exports='.sub-content-area::-webkit-scrollbar-track{border-radius:8px}.sub-content-area::-webkit-scrollbar{width:8px;background-color:transparent}.sub-content-area::-webkit-scrollbar-thumb{border-radius:8px;background-color:#333}.sub-page{margin-top:64px;margin-bottom:200px}.sub-page-image{background-repeat:no-repeat;background-position-x:50%;width:646px}.sub-page-text{max-width:600px;margin-left:20px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.job-title{font-size:18px;margin-left:15px}.products-title{font-size:16px;text-align:right;width:80px;margin-right:12px}.description{font-family:Segoe UI,Arial,Helvetica,sans-serif;font-size:14px;margin:14px 0}.sub-content-area{overflow-y:scroll;height:calc(100vh - 160px);scroll-behavior:smooth}.cheap-fade{top:137px}.cheap-fade,.cheap-fade-bottom{background-image:url(assets/img/cheap-fade.png);width:100%;height:100px;position:absolute}.cheap-fade-bottom{bottom:0;-webkit-transform:scaleY(-1);transform:scaleY(-1);-webkit-filter:FlipV;filter:FlipV;-ms-filter:"FlipV"}.menu-bar{text-align:center;margin-top:5px;width:500px;-webkit-animation-name:menu-grow;animation-name:menu-grow;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;font-size:14px;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100vw;-webkit-animation-name:fade-in;animation-name:fade-in;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}'},680:function(e,t){e.exports='<div class="host">\r\n  <canvas id="background-canvas" class="site-canvas">\r\n  </canvas>\r\n  <site-title>\r\n  </site-title>\r\n  <graphic-text class="bio-intro" *ngIf="core.scene.value === \'intro\'" [textString]="bioIntro" [ngClass]="{\'bio-hide\': core.scene.value !== \'intro\'}"\r\n    [speed]=\'50\'></graphic-text>\r\n  <div *ngIf="showSeeWork" (click)="showWork()" class="see-work" [ngClass]="{\'see-work-transition\': transition}">\r\n    <spacer></spacer>\r\n    See work\r\n  </div>\r\n <work-history *ngIf="showWorkHistory"></work-history>\r\n</div>'},681:function(e,t){e.exports='<div class="relative">\r\n  <div class="graphic-text no-select" [ngStyle]="{\'fontSize\': fontSize}">\r\n    {{displayText}}\r\n  </div>\r\n  <div [ngClass]="{\'effect-text\': writing, \'effect-done\': !writing }" [ngStyle]="{\'fontSize\': fontSize}" class="graphic-text">\r\n    {{effectsText}}\r\n  </div>\r\n</div>\r\n'},682:function(e,t){e.exports="<div [ngStyle]=\"{ 'width': size +'px', 'height': size +'px', 'background-image': 'url(' + source + ')' }\" \r\n[ngClass]=\"{'icon-show': show}\" class=\"icon\">\r\n</div>"},683:function(e,t){e.exports="<div class=\"menu-button\" [ngClass]=\"{'button-show': show, 'button-highlight': highlight }\">\r\n  {{text}}\r\n</div>\r\n"},684:function(e,t){e.exports='<div class="host">\r\n  <!--<graphic-text class="welcome" [textString]="\'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\'" [speed]=3></graphic-text>-->\r\n  <!--<graphic-text *ngIf="!mypeerid.value" class="item" [textString]="\'Acquiring PeerId:\'" [speed]=3></graphic-text>-->\r\n  <graphic-text *ngIf="mypeerid.value" class="item" [textString]="\'PeerId:\'" [speed]=3></graphic-text>\r\n  <graphic-text class="item" [textStringObs]="mypeerid"></graphic-text>\r\n  <div *ngIf="connected" class="myAudio audio" [ngStyle]="{\'width\': myAudioLevel + \'px\'}">\r\n  </div>\r\n\r\n  <div *ngIf="!connected">\r\n    <input type="text" [(ngModel)]="foreignIdInput" placeholder="peerId">\r\n    <button (click)="connect()">connect</button>\r\n  </div>\r\n  <audio #peerAudio autoplay id="peerAudio"></audio>\r\n  <spacer *ngIf="connected"></spacer>\r\n  <graphic-text *ngIf="connected" class="item" [textString]="\'Foreign PeerId:\'"></graphic-text>\r\n  <graphic-text *ngIf="connected" class="item" [textStringObs]="foreignId"></graphic-text>\r\n  <div *ngIf="connected" class="theirAudio audio" [ngStyle]="{\'width\': foreignAudioLevel +\'px\'}">\r\n  </div>\r\n</div>'},685:function(e,t){e.exports='<div class="host" [ngClass]="{\'host-docked\': scene!==\'intro\' || scene===\'main\'}">\r\n  <div>\r\n    Ryder Donahue\r\n  </div>\r\n  <spacer class="width-100"  [ngClass]="{\'spacer-docked\': scene!==\'intro\'}" ></spacer>\r\n  <div class="row">\r\n    <ryd-icon [size]="size" [ngClass]="{\'icons-docked\': scene!==\'intro\'}" class="icons" (click)="openExternal(\'https://www.linkedin.com/in/ryder-donahue\')" source=".\\\\assets\\\\icons\\\\linkedin.png" delay=0></ryd-icon>\r\n    <ryd-icon [size]="size" [ngClass]="{\'icons-docked\': scene!==\'intro\'}" class="icons" (click)="openExternal(\'https://twitter.com/RyderDonahue\')" source=".\\\\assets\\\\icons\\\\twitter.png" delay=250></ryd-icon>\r\n    <ryd-icon [size]="size" [ngClass]="{\'icons-docked\': scene!==\'intro\'}" class="icons" (click)="openExternal(\'https://github.com/ryderdonahue\')" source=".\\\\assets\\\\icons\\\\github.png" delay=500></ryd-icon>\r\n  </div>\r\n</div>'},686:function(e,t){e.exports='<div class="spacer"></div>'},687:function(e,t){e.exports='<div class="host">\r\n  <div class="menu-bar">\r\n    <spacer></spacer>\r\n    <div class="row">\r\n      <ryd-menu-button [text]="\'Microsoft Xbox\'" [highlight]="xboxSelected" (click)="openMenu(\'xbox\')" delay=0></ryd-menu-button>\r\n      <ryd-menu-button [text]="\'Imagine Cup\'" [highlight]="imagineSelected" (click)="openMenu(\'imagine\')" delay=250></ryd-menu-button>\r\n      <ryd-menu-button [text]="\'Flash Games\'" [highlight]="flashSelected" (click)="openMenu(\'flash\')" delay=500></ryd-menu-button>\r\n    </div>\r\n  </div>\r\n  <div class="cheap-fade"></div>\r\n  <div class="cheap-fade-bottom"></div>\r\n\r\n  <div class="sub-content-area" #subContent>\r\n    <div class="row center sub-page" #xboxContent>\r\n      <div class="sub-page-text">\r\n        <div class="job-title">\r\n          Role: Software Engineer II\r\n        </div>\r\n        <div class="description">\r\n          Since the Summer of 2014 I have been been a full time Software Engineer at Microsoft working under the Xbox orginization.\r\n          During my time in Redmond I have worked on a handful of products with a menagerie of technologies. Working at Microsoft\r\n          has given me the access to work with a bountiful collection of bright and talented people, many of whome I consider\r\n          good friends.\r\n        </div>\r\n        <div class="row">\r\n          <div class="products-title">\r\n            Products:\r\n          </div>\r\n          <div class="column">\r\n            <div *ngFor="let product of xboxProducts">\r\n              <div> {{product.name}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div style="background-image: url(./assets/img/xboxapp.png); height: 493px;" class="sub-page-image"></div>\r\n    </div>\r\n\r\n    <div class="row center sub-page" #imagineContent>\r\n      <div class="sub-page-text">\r\n        <div class="job-title">\r\n          Role: Team Member\r\n        </div>\r\n        <div class="description">\r\n          In 2013, my team and I participated in Micosoft\'s Imagine Cup competition. Our project won us the United States Imagine Cup,\r\n          beating over 2,000 other teams and allowing us to compete in the World Finals.\r\n          <br>Our submission, help he help, is a suite of applications to help those in need during an emergency or natural\r\n          disaster, while also assisting emergency response personnel in relief and recovery efforts.\r\n          <br>After the competition, we saught to make <i>help me help</i> real. While we were successful in gaining meetings\r\n          with state and federal government officials, we eventually ran out of funding and each member of the team pursued\r\n          new opportunities.\r\n          <br>Fortunately it appears that our project has inspired a new featureset in FEMA\'s official disaster response\r\n          application, so even if <i>help me help</i> isn\'t the name of the product, it\'s concept will be carried on to help\r\n          people in need in the future.\r\n        </div>\r\n        <div class="row">\r\n          <div class="products-title">\r\n            Products:\r\n          </div>\r\n          <div class="column">\r\n            <div>\r\n              <div>help me help (defunct)</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div style="background-image: url(./assets/img/imagine.png); height: 396px;" class="sub-page-image"></div>\r\n    </div>\r\n\r\n    <div class="row center sub-page" #flashContent>\r\n      <div class="sub-page-text">\r\n        <div class="job-title">\r\n          Role: Independent Developer\r\n        </div>\r\n        <div class="description">\r\n          Developing Flash Games was my first introduction into the programming world. I started at the age of 15 with no formal programming\r\n          knowledge or training, and published my first game with a sponsor 1 year later. I really enjoyed the whole process\r\n          and continued on to publish 3 more games, each with increasing complexity and ambition.\r\n          <br>It was a great learning experience for me, and gave me a primal knowledge and understanding of programming,\r\n          game design, and software development practices. A small part of me love to continue making flash games, but it\r\n          seems that the market is drying up and audiences are shifting their attention to new platforms, and so am I :)\r\n        </div>\r\n        <div class="row">\r\n          <div class="products-title">\r\n            Products:\r\n          </div>\r\n          <div class="column">\r\n            <div *ngFor="let product of flashProducts">\r\n              <div>{{product.name}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div style="background-image: url(./assets/img/flash.png);  height: 396px;" class="sub-page-image"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n'},961:function(e,t,i){e.exports=i(404)}},[961]);