
(function(){var K=window,n=document,H=n.referrer,a=n.documentElement,t=location,F=navigator.userAgent.toLowerCase();if(K.GridsumWebDissector){return}var x={errorUrl:"diag-wd.gridsumdissector.com/receivewddiag/gs.gif?gscmd=err&gsrd={0}&gsver={1}&gserrc={2}&gssrvid={3}&gserrobj={4}",errorUrl2:"recv-wd-rx.gridsumdissector.com/gs.gif?gscmd=err&gsrd={0}&gsver={1}&gserrc={2}&gssrvid={3}&gserrobj={4}",funcList:[],handlers:[],voidFunc:function(M){return M},lower:function(M){return(M&&M.toLowerCase)?M.toLowerCase():M},indexOf:function(Q,P,O){if(Q){if(Q.indexOf){return Q.indexOf(P,O)}else{if(Q.length){for(var N=O||0,M=Q.length;N<M;N++){if(Q[N]===P){return N}}}}}return-1},getHashCode:function(Q,M){var P=1315423911,N,O;if(!M){Q=c(Q)}for(N=Q.length-1;N>=0;N--){O=Q.charCodeAt(N);P^=((P<<5)+O+(P>>2))}return(P&2147483647)},getRandomString:function(Q){var P,N=[],O="abcdefghijklmnopqrstuvwxyz0123456789",M=35;for(P=0;P<Q;P++){N.push(O.charAt(Math.round(Math.random()*M)))}return N.join("")},getRandomID:function(){var N=new Date().getTime()+"";var O=""+Math.abs(x.getHashCode(t.href+H+F));var M=O.length>2?2:O.length;O=O.substring(0,M);return N.substring(2,N.length-3)+x.getRandomString(6)+O},getUrlParam:function(O,Q,N,M){if(!Q){return null}O=(O||(t.pathname+t.search)).replace(/\#.*/ig,"");var R=["&","?"];for(var P=0;P<3;P++){var S=x.find(O,R[P]+Q+"=","&",N);if(S!=null){return M?b(S):S}}return null},find:function(S,Q,R,N,P){var O=x.findArray(S,Q,R,N,P),M=O.length;return M>0?O[M-1]:null},findArray:function(Q,P,V,S,R){if(!Q||!Q.length){return[]}var O=[],N,U,X,W,T,M=0;P=P||"";if(!S){W=c(Q);P=c(P);V=c(V)}while(M>-1){T=null;if((N=s(W,P,M))>-1){X=N+P.length;if(!V){T=Q.substring(X);M=-1}else{U=s(W,V,X);if(U>=X){T=Q.substring(X,U);M=U+V.length}else{T=Q.substring(X);M=-1}}}if(!T){break}O.push(!R?x.trim(T):T)}return O},getTimeZone:function(){return Math.round(new Date().getTimezoneOffset()/-60)+""},getLocalTime:function(){return new Date().getTime()+x.getTimeZone()*3600000},isPageMatch:function(R,P,Q){Q=c(Q||t.pathname);P=c(P);if(!y(R)){R=[R]}for(var O=0,M=R.length;O<M;O++){var N=c(R[O]);if((P=="contains"&&s(Q,N)>-1)||(P=="startswith"&&s(Q,N)==0)||(P=="endswith"&&s(Q,N,Q.length-N.length)>-1)||(P=="exactmatch"&&Q==N)||(P=="regex"&&N.test&&N.test(Q))){return true}}return false},getCookie:function(N,P,M){if(!N){return null}var Q,O=x.toDict(n.cookie,"=",";",true);N=c(N);for(Q in O){if(f(O,Q)&&c(Q)===N){return M?O[Q]:b(O[Q])}}return P||null},setCookie:function(O,Q,M,S,P,R,N){if(!O){return}O=c(O);if(!N){Q=e(Q)}O=O+"="+Q+";";M=M?("expires="+x.getExpireDate(M).toGMTString())+";":"";S=!!S?"path="+S+";":"path=/;";P=P?("domain="+P)+";":"";R=R?"secure=true;":"";n.cookie=[O,M,S,P,R].join("")},delCookie:function(M,O,N){x.setCookie(M,"",-1000,O,N)},getExpireDate:function(M){return new Date(new Date().getTime()+M*1000)},trim:function(M){return(M&&M.replace)?M.replace(/(^\s+)|(\s+$)/ig,""):M},toDict:function(T,M,N,U){var Q,V,P,S,O,R={};M=M||"=";N=N||"&";P=T.split(N);O=U?x.trim:x.voidFunc;for(Q=0,S=P.length;Q<S;Q++){V=s(P[Q],M);if(V>-1){R[O(P[Q].substring(0,V))]=O(P[Q].substring(V+1))}else{R[P[Q]]=null}}return R},resolveUrl:function(O){var N,P=/((\w+:)?\/\/([^\/\#&?]*))?\/?([^?#&]*)?(\?[^#]*)?(#.*)?/,M={url:O},Q;if((N=O.match(P))){Q=N[2]||t.protocol;M.protocol=Q.substring(0,Q.length-1);M.local=M.protocol=="file";M.host=N[3]||t.host;M.path="/"+(N[4]||"");M.fullPath=M.path;M.query=(N[5]||"").substring(1);M.anchor=(N[6]||"").substring(1);if(M.query){M.fullPath+="?"+M.query;M.params=x.toDict(M.query.replace(/\?/g,"&"))}}else{M.local=true;M.protocol="file";M.fullPath=M.path="/"+O.replace(/\\/g,"/")}return M},encode:function(M){if(!M||!M.replace){return M}return(K.encodeURIComponent||escape)(M)},decode:function(N){if(N&&N.replace){N=N.replace(/\+/ig,"%20");try{return(K.decodeURIComponent||unescape)(N)}catch(M){}}return N},serialize:function(T,O,P,U,S){var Q=[],W=!S?e:x.voidFunc,M,V=["gscampcontent","ubc","gsdm","gstl","gsproducts","gsmcurl","lt","lk","gssrefpa","gsskwd","gsclkpa","gsclktl"];O=O||"=";P=P||"&";for(M in T){var N=true;for(var R in V){if(V[R]==M){N=false}}if(N&&f(T,M)&&(U||T[M]||T[M]===0)){Q.push(M+O+W(T[M]))}}for(M=0;M<V.length;M++){if(f(T,V[M])&&(U||T[V[M]]||T[V[M]]===0)){Q.push(V[M]+O+W(T[V[M]]))}}return Q.join(P)},getEl:function(M){return M.split?n.getElementById(M):M},waitFor:function(R,Q,M,O,N){M=M||1000;O=O||30;var P=setInterval(function(){if(R.split){var U,W=R.split(".",3),S=W.length,V=K;if(S>1){for(var T=0;T<S;T++){if(!T||W[T]!="window"){V=V[W[T]];if(!V){break}}}U=V}}if(U||(U=x.getEl(R))){clearInterval(P);Q(U)}else{if(O>0){O-=1}else{clearInterval(P);if(N){N(U)}}}},M)},getPos:function(N){var M,O,Q,U=null,T=[],R=n.body,V={};if(N.parentNode===null||N.style.display=="none"){return false}if(N.getBoundingClientRect){Q=N.getBoundingClientRect();M=Math.max(a.scrollTop,R.scrollTop);O=Math.max(a.scrollLeft,R.scrollLeft);if(n.compatMode=="BackCompat"&&l){V={x:Q.left,y:Q.top}}else{V={x:Q.left+O,y:Q.top+M}}return V}else{if(n.getBoxObjectFor){Q=n.getBoxObjectFor(N);var S=(N.style.borderLeftWidth)?parseInt(N.style.borderLeftWidth,10):0;var P=(N.style.borderTopWidth)?parseInt(N.style.borderTopWidth,10):0;T=[Q.x-S,Q.y-P]}else{T=[N.offsetLeft,N.offsetTop];U=N.offsetParent;if(U!=N){while(U){T[0]+=U.offsetLeft;T[1]+=U.offsetTop;U=U.offsetParent}}if(s(F,"opera")!=-1||(s(F,"safari")!=-1&&N.style.position=="absolute")){T[0]-=R.offsetLeft;T[1]-=R.offsetTop}}}if(N.parentNode){U=N.parentNode}else{U=null}while(U&&U.tagName!="BODY"&&U.tagName!="HTML"){T[0]-=U.scrollLeft;T[1]-=U.scrollTop;if(U.parentNode){U=U.parentNode}else{U=null}}V={x:T[0],y:T[1]};return V},getDocWidth:function(){return(a&&a.scrollWidth)||(n.body&&n.body.scrollWidth)||0},getPointer:function(N){var M=n.body||{scrollLeft:0,scrollTop:0};return{x:N.pageX||(N.clientX+(a.scrollLeft||M.scrollLeft)-(a.clientLeft||0)),y:N.pageY||(N.clientY+(a.scrollTop||M.scrollTop)-(a.clientTop||0))}},observe:function(N,M,P){N=x.getEl(N);if(!N){return null}function O(R){if(!R.target){R.target=R.srcElement||N}if(!R.pageX){var Q=x.getPointer(R);R.pageX=Q.x;R.pageY=Q.y}R.root=N;P.call(N,R)}if(N.addEventListener){N.addEventListener(M,O,false)}else{N.attachEvent("on"+M,O)}return N},format:function(M){if(arguments.length==1){return M}else{var O=arguments.length;for(var N=1;N<O;N++){M=M.replace(new RegExp("\\{"+(N-1)+"\\}","g"),arguments[N])}return M}},getInnerText:function(M){M=x.getEl(M);if(M&&M.innerHTML){return M.innerHTML.replace(/<[^>]+>/ig,"")}return null},searchUp:function(U,R,P,S,Q){var M,O,N=c(P),V=U&&U.parentNode,T;do{O=true;if(!N||c(R.tagName)==N){O=false;for(M in S){if(f(S,M)&&s(c(R[M]||R.getAttribute(M)),c(S[M]))<0){O=true;break}}}if(O){R=R.parentNode}else{return R}if(Q==0){break}Q--}while(R&&R!=V&&R.getAttribute);return null},report:function(N,U,V,Q){try{V=V||{};var M=x.errorUrl,R=g.version,P=new Image(1,1),O=new Image(1,1),T=Math.round(Math.random()*2147483647);M=(location.protocol=="https:"?"https://":"http://")+M;M=x.format(M,T,R,U,N,x.serialize(V,"~","'"));P.onload=function(){return true};P.onerror=function(){return true};P.src=M;M=x.errorUrl2;M=(location.protocol=="https:"?"https://":"http://")+M;M=x.format(M,T,R,U,N,x.serialize(V,"~","'"));O.onload=function(){return true};O.onerror=function(){return true};O.src=M}catch(S){}}};var c=x.lower,s=x.indexOf,e=x.encode,b=x.decode,q=Array.prototype.slice;function y(M){return!!(M&&M.constructor==Array)}function f(M,N){return(M&&M.hasOwnProperty)?M.hasOwnProperty(N):false}function m(M){return typeof M=="string"}function z(O,M,P){var N=this;N.host=O;N.reqParams=M||[];N.optParams=P||[]}z.prototype={testHost:function(M){var N=this.host;if(m(N)){return s(M,N)>-1}else{return N.test&&N.test(M)}},match:function(M){var R,T,U,N,X=0,S=this,O=x.resolveUrl(M),Q={},V=S.reqParams,P=S.optParams,W=O.host;if(S.testHost(W)){if((N=O.params)){for(R in N){if(f(N,R)){N[c(R)]=N[R]}}for(R=0,T=V.length;R<T;R++){U=N[V[R]];if(!U){return false}else{Q[V[R]]=U;X++}}for(R=0,T=P.length;R<T;R++){U=N[P[R]];if(U){Q[P[R]]=U;X++}}}else{if(V.length){return false}}return{host:W,params:Q,paramCount:X}}return false}};function D(){var P=/\.net clr ([\d\.]+?)[;$ ]|.net([\d\.]+?)[ce][;$ ]/ig,O,N,M;while((O=P.exec(F))){N=O[1]||O[2];if(!M||N>M){M=N}}return M}function o(O,N){N=N||F;var M=N.match(O);return M?M[1]:null}function E(){var U,P,N=navigator.plugins,R,M,Q,O,T;if(N&&(R=N.length)>0){for(P=0;P<R;P++){U=c(N[P].description);M=c(N[P].name);if(!Q&&U&&s(U,"shockwave flash")>-1){Q=o(/shockwave flash (\d+\.\d+)/i,U)}if(!O&&M&&U&&s(M,"silverlight")>-1){O=o(/(\d+\.\d+)/i,U)}}}else{if(K.ActiveXObject){for(P=20;P>=2;P--){try{if(new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+P)){Q=P+".0";break}}catch(S){}}try{if((T=new ActiveXObject("AgControl.AgControl"))){for(P=10;P>0;P--){if(T.IsVersionSupported(P+".0")){O=P+".0";break}}}}catch(S){}}}return{flash:Q,silverlight:O}}function l(){return"\v"=="v"}function L(M,N){this.name=M;this.pattern=N}L.prototype.match=function(R){var P,M,Q=this,O=R.match(Q.pattern),N=Q.name;if(O){for(P=0,M=O.length;P<M;P++){N=N.replace("$"+P,O[P]||"")}return x.trim(N)}return null};function i(M,N){return new L(M,N)}function r(N,P,M){var O=this;O.name=N;O.pattern=P;O.mobile=M}r.prototype.match=function(R){var P,M,Q=this,O=R.match(Q.pattern),N=Q.name;if(O){for(P=0,M=O.length;P<M;P++){N=N.replace("$"+P,O[P]||"")}return{name:x.trim(N),mobile:Q.mobile}}return null};function I(N,O,M){return new r(N,O,M)}function p(){x.setCookie("gs_tc","1");var M=x.getCookie("gs_tc");x.delCookie("gs_tc");return!!M}function w(M){var N=this,O=navigator;N.analyze=function(){if(N.browser){return N.browser}var S={};try{var Z,R,U,W=screen,X=l()?O.browserLanguage:O.language,Y=M.os,Q=M.browsers,T=E(),P=O.userAgent.replace("_",".");S.os=O.platform;for(R=0,U=Y.length;R<U;R++){if((Z=Y[R].match(P))){S.os=Z.name;S.mobile=Z.mobile;break}}S.browser=O.appName;for(R=0,U=Q.length;R<U;R++){if((Z=Q[R].match(P))){S.browser=Z;break}}S.flash=T.flash;S.silverlight=T.silverlight;S.alexa=s(F,"alexa")>-1?1:0;S.resolution=W.width+"*"+W.height;S.colorDepth=W.colorDepth||32;S.osLang=c(O.systemLanguage);try{S.javaEnabled=O.javaEnabled()?1:0}catch(V){}S.dotNet=D();S.browserLang=c(X);S.cookieEnabled=p()?1:0;return(N.browser=S)}catch(V){x.report(M.serviceID,"M_Browser",V);return S}}}function k(N,U,P,Q,T,S,M,O){var R=this;R.name=N;R.host=U;R.termKey=P;R.encKey=Q;R.startKey=S;R.numKey=M;R.defEnc=T||"utf-8";R.pagingType=O;Q=Q||"ie";R.evaluator=new z(U,[P],[S,M,Q])}k.prototype.match=function(O){var S,N,Q,R,P=this,M=P.evaluator.match(O);if(!M){return false}R=M.params;S=Number(R[P.startKey]);N=Number(R[P.numKey]);S=(isNaN(S)?1:S);N=(isNaN(N)?10:N);if(!P.pagingType){Q=Math.round(S/N)+1}else{if(P.pagingType==1){Q=S+1}else{Q=S}}M.page=Q;M.keywords=R[P.termKey];M.encoding=R[P.encKey]||P.defEnc;if(M.encoding==="utf8"){M.encoding="utf-8"}return M};function u(R,S,Q,M,N,T,P,O){return new k(R,S,Q,M,N,T,P,O)}function A(M){var N=this;function O(P){if(N.suffix){P=P+N.suffix}else{P=P+"_"+x.getHashCode(M.serviceID+"_"+M.domain)}return e(P)}N.get=function(P,R){var Q=O(P);return x.getCookie(Q,R,true)};N.set=function(Q,T,P,V,S,U){var R=O(Q);S=S||M.domain;V=V||M.path;U=U||M.secure;x.setCookie(R,T,P,V,S,U,true)};N.remove=function(P){N.set(P,"0",-1000)}}function C(N){var P=this,O=N.tracker,Q="UA-26783561-2";function M(U,S,T){T=T||N.serviceUrls[0];return T+"?"+x.serialize(U,"=","&",false,S)}function R(Y,T,X){Y.rd=x.getRandomString(5);var W=N.serviceID,U,S=new Image(1,1),V={};g.execHook("sender.send",Y,X,V);if(V.cancel){return}U=M(Y,T,X).substring(0,2000);S.onerror=function(){setTimeout(function(){var Z=new Image(1,1);Z.onload=function(){x.report(W,"RetrySuccess",{cmd:Y.gscmd},Q)};Z.onerror=function(){x.report(W,"SendingFailed",{cmd:Y.gscmd},Q);return true};Z.src=U},2000);return true};S.onload=function(){};S.src=U;P.img=S}P.checkUrl=function(U,S,T){U.rd=x.getRandomString(5);return M(U,S,T).length<=2000};P.send=function(X,T,V){if(!X){return}if(!V){var W=N.serviceUrls;for(var U=0,S=W.length;U<S;U++){R(X,T,W[U])}}else{R(X,T,V)}}}function G(M){var N=this;N.parse=function(Q){try{var ae,Z,P,ab,R,T,ai,S=M.keepAnchor,U=M.ignoreParams,V=M.campaignKey,ac=M.keywordKey,Y=M.sourceKey,aj=M.mediumKey,O=M.contentKey,ag=M.groupKey,W=M.channelKey,ah=M.ad,X=M.cleanUrl;Q=Q||t.href;ab=x.resolveUrl(Q);P={protocol:ab.protocol,local:ab.isLocal,host:ab.host,path:ab.fullPath,anchor:ab.anchor,params:ab.params};if(S&&ab.anchor){P.path+="#"+ab.anchor}if(X){P.cleanUrl=X}else{if(U.length!==0&&ab.params){for(var aa in ab.params){for(ae=0;ae<U.length;ae++){if(c(aa)==U[ae]){delete ab.params[aa]}}}for(ae=0;ae<U.length;ae++){delete ab.params[U[ae]]}Z=x.serialize(ab.params,"=","&",false,true);if(Z){Z="?"+Z}if(S&&ab.anchor){Z+=("#"+ab.anchor)}P.cleanUrl=[ab.protocol,"://",ab.host,ab.path,Z].join("")}else{P.cleanUrl=[ab.protocol,"://",ab.host,P.path].join("")}}if(!P.local){R=new z(ab.host,[],[V,ac,Y,aj,O,ag,W]);if((T=R.match(t.href.replace(/#/g,"?")))){ai=T.params;if(T.paramCount!==0){ah.campaign=ah.campaign||b(ai[V]);ah.group=ah.group||b(ai[ag]);ah.source=ah.source||b(ai[Y]);ah.medium=ah.medium||b(ai[aj]);ah.keyword=ah.keyword||b(ai[ac]);ah.content=ah.content||b(ai[O]);ah.channel=ah.channel||b(ai[W])}}P.ad=ah}return P}catch(af){x.report(M.serviceID,"M_Url",af)}}}function v(O){var P=this,S=new A(O),N={},M={};function R(){var X,V=P.uid,U=P.sid,T=[],W=[];for(X in N){if(f(N,X)){T.push(X+":"+e(N[X]))}}if(T.length>0){V=V+"|"+T.join("|")}for(X in M){if(f(M,X)){W.push(X+":"+e(M[X]))}}if(W.length>0){U=U+"|"+W.join("|")}S.set("_gscu",V,63072000);S.set("_gscs",U,1800);S.set("_gscbrs",1)}function Q(Z){if(!Z){return null}var W,U,X=/[^\d\w]+/i,T={},Y={},aa=Z.split("|"),V;if(aa[0].length>30||X.test(aa[0])){return null}T.id=aa[0];for(W=1,U=aa.length;W<U;W++){V=aa[W].split(":");Y[V[0]]=b(V[1])}T.data=Y;return T}P.init=function(){try{var X,U,Z,T,V,W="";N={};M={};if(O.crossDomain){X=x.getUrlParam(t.href.replace("#","&"),"_gsc");if(X){X=X.split(";");if(X.length==2){T=b(X[0]);V=b(X[1]);U=1;Z=true}}}if(!Z){T=S.get("_gscu");V=S.get("_gscs");U=S.get("_gscbrs")}if((T=Q(T))){P.uid=T.id;N=T.data;if(V=Q(V)){P.sid=V.id;M=V.data}else{if(!V&&U){W="t"}P.sid=W+x.getRandomID()}}else{P.uid=x.getRandomID();P.sid=x.getRandomID()}R()}catch(Y){x.report(O.serviceID,"M_User",Y);P.uid=x.getRandomID();P.sid=x.getRandomID();N={};M={};R()}};P.saveSessionData=function(T,U){M[T]=U+"";R()};P.saveUserData=function(T,U){N[T]=U+"";R()};P.get=function(T){return N[T]||M[T]||null};P.serialize=function(){return"_gsc="+S.get("_gscu")+";"+S.get("_gscs")};P.isSampled=function(){var T=O.sample,U=x.getHashCode(P.uid);return U%10000<T*100}}function d(M){var N=this;N.parse=function(W){try{var S,R,T,V,P,O={},Q=M.searchEngines;if(!W){try{W=K.top.document.referrer}catch(U){W=H}}if(!W){try{if(K.opener){W=K.opener.location.href}}catch(U){}}if(!W){O.type="direct"}else{P=x.resolveUrl(W);O.referrer=W;O.domain=c(P.host);O.path=P.fullPath;O.type="referral";if(!P.local){for(R=0,T=Q.length;R<T;R++){V=Q[R];S=V.match(W);if(S){O.type="organic search";O.keywords=S.keywords;O.searchEngine=V.name;O.encoding=S.encoding;O.page=S.page;break}}}}return O}catch(U){x.report(M.serviceID,"M_Referrer",U)}}}function J(N){var T=this,R,Q,U=N.tracker,W=N.origin;function V(){if(!N.heatmap){return false}if(N.mcSample==100){return true}return Math.round(Math.random()*10000)<N.mcSample*100}function Z(){if(N.docWidth){R=(x.getDocWidth()-N.docWidth)/2;Q=0}else{if(W){var aa=x.getPos(W);R=aa.x;Q=aa.y}}}function P(ab,aa){Z();return O({x:ab-R,y:aa-Q})}function O(aa){aa.x=Math.round(aa.x/10)*10;aa.y=Math.round(aa.y/10)*10;return aa}function Y(al,ai,ah,an){var ac,ak,aj,ae=Number(K[N.snapshotVar]||0),af=U.getCommon("mc"),ab=U.url,ad=ab.parse(),am=[],aa={};if(!(ae>-1&&ae<256)){ae=0}g.execHook("heatmap.send",af,al,ai,ah,an,aa);if(aa.cancel){return}var ag=x.searchUp(null,an.target,"A",null,3);if(ag!=null){af.lk=ag.href;af.lt=_gsUtility.getInnerText(ag);aj=_gsUtility.getPos(ag);aj=P(aj.x,aj.y);af.lx=aj.x;af.ly=aj.y}ag=x.searchUp(null,an.target,null,{gsregion:""});if(ag!=null){ak=Number(ag.getAttribute("gsregion"));if(ak>-1&&ak<256){af.re=ak;if(ag.getAttribute("gsposfixed")=="1"){aj=x.getPos(ag);aj=P(aj.x,aj.y);al=al-aj.x;ai=ai-aj.y}ag=x.searchUp(null,an.target,null,{gssnapshot:""});if(ag){ae=Number(ag.getAttribute("gssnapshot"));if(ae<0||ae>255){ae=0}}}}af.gspver=N.pageVer;af.gsmcoffsetx=al;af.gsmcoffsety=ai;am=[ad.protocol,"://",ad.host,ad.path];if(N.keepAnchor&&ad.anchor){am.push("#",ad.anchor)}af.gsmcurl=am.join("");af.gstl=N.pageName||n.title;af.gssn=ae;af.gsorurl=ad.cleanUrl;U.sender.send(af)}function S(ae){try{if(!V()){return}var ad,aa,ac=c(ae.target.tagName);if(ac=="body"||ac=="html"){return}var af=P(ae.pageX,ae.pageY);Y(af.x,af.y,this,ae)}catch(ab){x.report(N.serviceID,"M_Heatmap_doc",ab)}}function X(ac,ad){try{var aa=O(x.getPos(ac)),ae=P(ad.clientX,ad.clientY);Y(ae.x+aa.x,ae.y+aa.y,ac,ad)}catch(ab){x.report(N.serviceID,"M_Heatmap_iframe",ab)}}function M(){var ad,ab,ag=N.iframes,aa=frames;if(ag.length==0){for(ad=0,ab=aa.length;ad<ab;ad++){try{var ac=aa[ad].frameElement||aa[ad];if(ac.contentDocument){ag.push(ac)}}catch(af){}}}for(ad=0,ab=ag.length;ad<ab;ad++){var ah=x.getEl(ag[ad]);if(ah){try{ah=ah.frameElement||ah;var ae=ah.contentDocument;x.observe(ae,"mouseup",(function(ai){return function(aj){X(ai,aj)}})(ah))}catch(af){}}}}T.bind=function(){if(T.isBind||!N.heatmap){return}T.isBind=true;x.observe(n,"mouseup",S);if(/loaded|complete/.test(n.readyState)){M()}else{x.observe(K,"load",M)}};T.init=function(){T.bind()}}function j(M){var N=this;N.orders=[];N.addOrder=function(Q,O,P){O=Number(O);N.orders.push({orderid:Q+"",price:O||0,quantity:0,user:P,products:[],recal:!O})};N.addProduct=function(O,aa,X,W,Q,P){try{var R,T,Y,Z,S,V=N.orders,ab={};O=O+"";W=Number(W)||0;Q=Number(Q)||0;for(R=0,T=V.length;R<T;R++){if(V[R].orderid==O){Y=V[R];break}}if(!Y){Y={orderid:O,price:0,quantity:0,products:[],recal:true};V.push(Y)}Z=Y.recal;S=Number((W*Q).toFixed(2));ab={orderid:O,name:aa,sku:X,quantity:Q,unitPrice:W,price:S,category:P};Y.quantity+=ab.quantity;Y.products.push(ab);if(Z){Y.price=Number((Y.price+S).toFixed(2))}}catch(U){x.report(M.serviceID,"FC_addProduct",U)}}}function h(O){var M=this,N=t.hostname;M.ad={};M.properties={};M.serviceID=O;M.serviceUrls=["//www.webdissector.com/recv/gs.gif","//recv-wd.gridsumdissector.com/gs.gif"];M.heatmapUrl="//www.webdissector.com/js/heatmap.js";M.redirectServer="//www.addissector.com/";M.redirectServerPath="/redirect.gif";M.campaignKey="utm_campaign";M.mediumKey="utm_medium";M.sourceKey="utm_source";M.groupKey="utm_adgroup";M.keywordKey="utm_term";M.contentKey="utm_content";M.channelKey="utm_channel";M.accountKey="utm_account";M.ignoreParams=["gclid","bdclkid","gs_ws",M.campaignKey,M.mediumKey,M.sourceKey,M.groupKey,M.keywordKey,M.contentKey,M.channelKey,M.accountKey];M.searchEngines=[u("google",/(\w+\.)*google\.(\w+|(com|co)\.\w+)/i,"q","ie","utf-8","start","num"),u("baidu",/(\w+\.)*baidu\.(com|cn|com\.cn)/i,"wd","ie","gb2312","pn","rn"),u("baidu",/(\w+\.)*baidu\.(com|cn|com\.cn)/i,"word","ie","gb2312","pn","rn"),u("yahoo",/(\w+\.)cn\.yahoo\.com/i,"q","ei","utf-8","b"),u("yahoo",/(\w+\.)*yahoo\.(\w+|(com|co)\.\w+)/i,"p","ei","utf-8","b"),u("yahoo",/(\w+\.)*yahoo\.cn/i,"q","ei","utf-8","b"),u("live",/(\w+\.)*live\.\w+/i,"q",null,"utf-8","first"),u("youdao.com",/(\w+\.)*youdao\.com/i,"q","ue","utf-8","start"),u("soso",/(\w+\.)*soso\.com/i,"w",null,"gb2312","pg",null,2),u("gougou",/(\w+\.)*gougou\.com/i,"search",null,"utf-8","page",null,1),u("sogou",/(\w+\.)*sogou\.com/i,"query",null,"gb2312","page",null,1),u("bing",/\bbing\.(\w+)/i,"q",null,"utf-8","first"),u("118114",/\b118114\.cn/i,"kw",null,"gb2312","start"),u("jike",/\bjike\.com/i,"q",null,"utf-8","page","ps",2),u("panguso",/\bpanguso\.com/i,"q",null,"utf-8","p","n",1),u("360",/\b360\.cn/i,"q",null,"utf-8","pn","",2),u("360",/\bso\.com/i,"q",null,"utf-8","pn","",2),u("UC",/glb\.uc\.cn/i,"keyword",null,"utf-8","page","pagesize",2),u("OCN",/ocnsearch\.goo\.ne\.jp/i,"MT",null,"utf-8","FR","",1),u("fenrir",/search\.fenrir-inc\.com/i,"q",null,"utf-8","start","",1),u("nifty",/search\.nifty\.com/i,"q",null,"utf-8","start","",1),u("biglobe",/search\.biglobe\.ne\.jp/i,"q",null,"utf-8","start","num",1),u("sweetim",/search\.sweetim\.com/i,"q",null,"utf-8","start","",1),u("AVG",/isearch\.avg\.com/i,"q",null,"utf-8","pagenum","",1),u("mywebsearch",/search\.mywebsearch\.com/i,"searchfor",null,"utf-8"),u("aol",".aol.com","q"),u("lycos",".lycos.com","query"),u("ask",".ask.com","q"),u("altavista",".altavista.com","q"),u("netscape",".netscape.com","query"),u("cnn",".cnn.com","query"),u("gigablast",".gigablast.com","q"),u("search",".search.com","q"),u("pchome",".pchome.com","q")];M.contentNetworkKey="content_";M.os=[I("$1 / iOS$2",/^.*(iPhone|iPad|iPod).*? i?OS[\. ](\d(\.\d)?).*$/i,1),I("$1 $2",/(Android)[ \/\.]?(\d+[\._]\d+?)?/i,1),I("WindowsMobile $1",/WindowsMobile\/(\d+\.\d+)|windows ce/i,1),I("$1 $2",/(Windows Phone).*?(\d+\.\d+)/i,1),I("Symbian S$1",/Series ?(60|40)/i,1),I("$1 OS $2",/(BlackBerry)[^\/]*\/(\d\.\d)/i,1),I("$0",/Palm|Symbian|BlackBerry|Nokia|iPhone|Android|WindowsMobile/i,1),I("$1 8",/(Windows) nt 6.2/i),I("$1 7 or 2008R2",/(Windows) nt 6.1/i),I("$1 Vista or 2008",/(Windows) nt 6.0/i),I("$1 Server 2003",/(Windows) nt 5.2/i),I("$1 XP",/(Windows) nt 5.1/i),I("$1 2000",/(Windows) nt 5.0/i),I("Mac $1",/Mac os x (\d+\.\d+)|Macintosh/i),I("$0",/Linux|Windows 98/i)];M.browsers=[i("$1 $2",/(Firefox|Chrome|Opera|IEMobile|UCWeb|Opera Mini|NetFront|IceweaselBlackBerry|QQBrowser)[\/ ]?(\d+\.\d)/i),i("UCWeb $2",/(UCWeb|UCBrowser|\sUC\s)[ \/\.]?((\d+(\.\d+)?))?/i),i("$2 $1",/Version\/(\d+\.\d).*(Safari)/i),i("Safari",/AppleWebKit/i),i("$2$3 / IE $1",/msie (\d+)\.\d.*(Maxthon|TheWorld|Avant Browser|TencentTraveler|GreenBrowser|360SE)[ \/]?(\d+\.\d)?/i),i("Maxthon$3 / $1",/Apple(WebKit).*(Maxthon)[ \/]?(\d+\.\d)?/i),i("Sogou / IE $1",/msie (\d+)\.\d.*?se \d+/i),i("IE $1",/msie ?(\d+)\.\d?/i)];if(N.substring(0,4)=="www."){N=N.substring(4)}M.domain=N;M.path="/";M.sessionTimeout=30*60;M.sample=100;M.origin=n.body;M.mcSample=100;M.iframes=[];M.snapshotVar="GridsumSnapshotID";M.tsVar="GSTS"}function B(P){var R=this,Q=new h(P);Q.tracker=R;R.serviceID=P;R.config=Q;function N(){try{if(x.getCookie("_gsHijack")){return}if(top!=K&&top.location.href===t.href){x.report(P,"WebPageHijack");x.setCookie("_gsHijack",1)}}catch(X){}}function T(){if(Q.trackLocal){return false}var X=t.hostname;return t.protocol==="file:"||s(X,"localhost")>-1||s(X,"127.")==0||s(X,"192.168.")==0||s(X,"10.")==0||s(X,"172.")==0}function M(){var X=c(t.hash);return Q.heatmap&&s(X,"#gwdheatmap&")>-1&&s(X,P.substring(4))>-1}function W(){return!P||T()||M()||s(F,Q.ignoreUA)>-1||!R.user.isSampled()}function O(Y){var X=R.user;return{gsver:g.version,gscmd:Y,gssrvid:P,gsuid:X.uid,gssid:X.sid,gsltime:x.getLocalTime(),gstmzone:x.getTimeZone(),gsjp:Q.junction,rd:1}}function S(Y){var X=R.browser.analyze();Y.gsflver=X.flash;Y.gsalexaver=X.alexa;Y.gsbrname=X.browser;Y.gsdotnetver=X.dotNet;Y.gssil=X.silverlight;Y.gsbrlang=X.browserLang;Y.gsscr=X.resolution;Y.gsclr=X.colorDepth;Y.gsoslang=X.osLang;Y.gsosname=X.os;Y.gsje=X.javaEnabled;Y.gsce=X.cookieEnabled;Y.gsim=X.mobile}function V(Y){var X=new Date(),Z=Math.round((X-Y)/1000);if(Z>180){Z=180}if(Z<0){Z=0}R.duration=Z}function U(){if(!R.hbSent){R.trackHeartbeat();R.hbSent=1;return true}}R.getCommon=O;R.init=function(){if(R.isInit){R.user.init();return}R.user=new v(Q);R.browser=new w(Q);R.referrer=new d(Q);R.url=new G(Q);R.ecom=new j(Q);R.sender=new C(Q);R.heatmap=new J(Q);R.user.init();var ab,aa=g.plugins,ad=aa.length;for(ab=0;ab<ad;ab++){var ac=aa[ab],X=ac.name;R[X]=new ac.template(Q)}if(M()){R.showHeatmap()}if(!W()){if(Q.lazyBinding){x.observe(K,"load",function(){R.heatmap.init()})}else{R.heatmap.init()}R.pvid=x.getRandomID();var af=new Date();x.observe(K,"load",function(){var ag=K[Q.tsVar]||af;V(ag)});x.observe(K,"beforeunload",function(){if(R.duration==null){var ag=K[Q.tsVar]||af;V(ag)}U()});var ae;var Z=R.user.sid;var Y=K.setInterval(function(){if(!R.conditionMatch){R.user.init();var ag=R.user.get("pv");if(ae&&ae<ag){R.conditionMatch=1}else{if(R.user.sid!=Z){R.conditionMatch=1}}ae=ag}if(R.conditionMatch&&R.duration!=null){U();K.clearInterval(Y)}},1000)}else{R.disabled=true}R.isInit=true};R.track=function(ah,X){try{R.init();if(R.disabled){return}var ai=Q.properties,aa,ao,ae=R.user,ab,Y=R.url,al=R.referrer,ak=Q.pageVer,af=O("pv"),aj=(ah&&X)?t.href:"",an=Q.contentNetworkKey;ah=ah||t.href;ah=Y.parse(ah);aj=al.parse(aj);ab=Number(ae.get("pv"))||0;af.gsissecpv=(ab==1?1:0);if(!R.isSent){af.pvid=R.pvid;R.isSent=1}af.gstl=Q.pageName||n.title;af.ubc=Q.breadcrumb;af.gspro=ah.protocol;af.gsdm=ah.host;af.gscp=x.serialize(ai,"::","||",false,false);af.gschan=Q.ad.channel||(aj.searchEngine||aj.domain);if(ak){af.gspver=ak}af.gsreftype=aj.type||"";af.gsrefdm=aj.domain;af.gssename=aj.searchEngine;af.gskwd=aj.keywords;af.gsenc=aj.encoding;af.gssepage=aj.page;ao=ah.ad;for(var Z in ao){if(f(ao,Z)){af.gsispaid=(aa=1);break}}af.gscamp=ao.campaign;af.gsgroup=ao.group;af.gscampsrc=ao.source;af.gsmedium=ao.medium;af.gscampkwd=ao.keyword;af.gscampcontent=ao.content;if(aa){if(!H){af.gsrefdm="(lost)";af.gsrefpa="(lost)";af.gsreftype="referral"}else{if(aj.searchEngine){af.gsreftype="paid search"}}if(!aj.searchEngine&&s(ao.medium,an)==0){af.gsreftype="content network"}}S(af);af.gsorurl=ah.cleanUrl;af.gspa=ah.path;af.gsrefpa=aj.path||"";R.sender.send(af);ae.saveSessionData("pv",ab+1);if(R.rsDomain&&ab==1&&(!H||s(H,R.rsDomain)>-1)){var am=af;am.gscmd="rpv";var ac=[Q.redirectServer,x.getHashCode(R.rsDomain),Q.redirectServerPath].join("");R.sender.send(am,false,ac)}N()}catch(ag){x.report(P,"FC_track",ag)}};R.trackLink=function(aa,Z,Y,X){return R.bindEvent(Z,"click",function(ab){R.track(aa,true)},Y,X)};R.trackECom=function(){try{R.init();if(R.disabled){return}var ae,ac,ah,aa,X,af=R.sender,aj=R.ecom.orders,ad=O("ecom"),Y,Z,al,ak=[],ab=R.user,ag=ab.get("_gsecom");if(ag){ag=ag.split(",")}else{ag=[]}for(ae=0,ah=aj.length;ae<ah;ae++){Z=aj[ae];X=e(Z.orderid);if(s(ag,X)>-1){continue}ag.push(X);ad.gsorderid=Z.orderid;ad.gstotal=Z.price;ad.gsquan=Z.quantity;ad.gsuserid=Z.user;Y=Z.products;ak=[];for(ac=0,aa=Y.length;ac<aa;ac++){al=Y[ac];al=x.serialize(al,"::",",,",false,true);ak.push(al)}ad.gsproducts=ak.join("||");if(!af.checkUrl(ad)){for(ac=0;ac<Y.length;ac++){al=Y[ac];al=x.serialize(al,"::",",,",false,true);ad.gsproducts=al;af.send(ad)}}else{af.send(ad)}}ab.saveSessionData("_gsecom",ag.join(","));R.ecom.orders=[]}catch(ai){x.report(P,"FC_trackECom",ai)}};R.trackClickthrough=function(ac,X){try{R.init();if(R.disabled){return}if(ac||X){var Z=O("ct"),ab=R.lastSearchID;if(ab){Z.gsssid=ab;if(X){var Y=x.resolveUrl(X);Z.gsclkpro=Y.protocol;Z.gsclkdm=Y.host;Z.gsclkpa=Y.fullPath}Z.gsclktl=ac;R.sender.send(Z)}}}catch(aa){x.report(P,"FC_trackClickthrough",aa)}};R.trackHeartbeat=function(){var X=O("hb");X.pvid=R.pvid;X.pld=R.duration;R.sender.send(X)};R.trackSiteSearch=function(ac,Y,Z,af,ae){try{R.init();if(R.disabled){return}var ab=O("ss"),aa=x.getRandomID();if(af){ab.gsskwd=x.getUrlParam(t.href,ac);ab.gssenc=Z||"utf-8";ab.gsscat=x.getUrlParam(t.href,Y)}else{if(Z){ab.gsskwd=ac;ab.gsscat=Y;ab.gssenc=Z}else{ab.gsskwd=e(ac);ab.gsscat=e(Y);ab.gssenc="utf-8"}}if(!ab.gsskwd){return}ab.gsssid=R.lastSearchID=aa;ae=ae||H;if(ae){var X=x.resolveUrl(ae);ab.gssrefpa=X.fullPath;ab.gssrefdm=X.host}R.sender.send(ab)}catch(ad){x.report(P,"FC_trackSiteSearch",ad)}};R.trackEvent=function(Z,X,Y,ac){R.init();if(R.disabled){return}try{var ab=O("ev"),aa=t.href;ab.eca=Z;ab.eac=X;ab.eva=ac;ab.ela=Y;aa=R.url.parse(aa);ab.gsourl=aa.cleanUrl;R.sender.send(ab)}catch(ad){x.report(P,"FC_trackEvent",ad)}};R.bindEvent=function(aa,X,ab,Z,Y){Y=Y||{};return x.observe(aa,X,function(ad){if(!ad||!ad.target){return}var ac=x.searchUp(aa,ad.target,Z,Y);if(ac!=null){ad.matched=ad.target;ab(ad);return}})};R.bindSearchResults=function(X,Y){return R.bindEvent(X,"click",function(aa){var Z=aa.matched;R.trackClickthrough(x.getInnerText(Z),Z.href)},"a",Y)};R.showHeatmap=function(){var Y=Q.heatmapUrl;g.heatmapUrl=t.href;var X=n.createElement("script");X.src=Y;n.getElementsByTagName("head")[0].appendChild(X)};R.addOrder=function(Y,X){R.ecom.addOrder(Y,Number(X))};R.addProduct=function(ac,Y,ab,Z,aa,X){R.ecom.addProduct(ac,Y,ab,Number(Z),Number(aa),X)};R.setSessionTimeout=function(X){if(X<1||X>3600){return}Q.sessionTimeout=X};R.setBreadcrumb=function(X){R.config.breadcrumb=X};R.setCampaign=function(X){if(X&&X.length!=0){Q.ad.campaign=X}};R.setGroup=function(X){if(X&&X.length!=0){Q.ad.group=X}};R.setContent=function(X){if(X&&X.length!=0){Q.ad.content=X}};R.setKeyword=function(X){if(X&&X.length!=0){Q.ad.keyword=X}};R.setMedium=function(X){if(X&&X.length!=0){Q.ad.medium=X}};R.setSource=function(X){if(X&&X.length!=0){Q.ad.source=X}};R.setCampaignKey=function(X){Q.ignoreParams.push(Q.campaignKey=c(X))};R.setMediumKey=function(X){Q.ignoreParams.push(Q.mediumKey=c(X))};R.setContentKey=function(X){Q.ignoreParams.push(Q.contentKey=c(X))};R.setSourceKey=function(X){Q.ignoreParams.push(Q.sourceKey=c(X))};R.setKeywordKey=function(X){Q.ignoreParams.push(Q.keywordKey=c(X))};R.setGroupKey=function(X){Q.ignoreParams.push(Q.groupKey=c(X))};R.setChannelKey=function(X){Q.ignoreParams.push(Q.channelKey=c(X))};R.setContentNetworkPrefix=function(X){Q.contentNetworkKey=X};R.setChannel=function(Z,X,Y){var aa;if(X){if(Y){aa=x.getUrlParam(H,X)}else{aa=x.getUrlParam(t.href,X)}if(aa){Z=aa}}if(Z&&Z.length!=0){Q.ad.channel=Z}};R.setIgnoreTrafficKeyword=function(X){if(X){Q.ignoreUA=X}};R.setCustomProperty=function(Y,X,aa,Z){var ab=X;if(aa==="cookie"){ab=x.getCookie(Z)||X}else{if(aa==="query"){ab=x.getUrlParam(t.href,Z)||X}}if(ab!=null){Q.properties[Y]=ab}};R.setHeatmapScriptUrl=function(X){Q.heatmapUrl=X};R.setPageName=function(X){Q.pageName=X};R.setServiceUrl=function(X){Q.serviceUrls=[X]};R.setServiceUrls=function(X){if(!y(X)){X=q.call(arguments)}Q.serviceUrls=X};R.setJunctionPoint=function(X){Q.junction=X};R.setCookieProperties=function(Y,Z,X){if(Y&&Y.charAt(0)==="."){Y=Y.substring(1)}Q.domain=Y||Q.domain;Q.path=Z||Q.path;Q.secure=!!X};R.setSamplingRate=function(X){Q.sample=X};R.setClickSamplingRate=function(X){Q.mcSample=X};R.setDocWidth=function(X){Q.docWidth=Number(X)};R.setOriginalUrl=function(X){Q.cleanUrl=X};R.setOriginElement=function(X){Q.origin=x.getEl(X)};R.setPageVersion=function(X){Q.pageVer=X};R.addOrganicSearch=function(aa,ac,Y,ae,X,ab,ad,Z){Q.searchEngines.push(u(aa,ac,c(Y),c(ae),c(X),c(ab),c(ad),Z))};R.getWDCookieString=function(){R.init();return R.user.serialize()};R.jump=function(Y){var X=R.getWDCookieString(),Z=m(Y)?Y:Y.action;t.href=Z+"#"+X};R.addIgnoreParams=function(){Q.ignoreParams=Q.ignoreParams.concat(q.call(arguments))};R.enableLazyClickTrace=function(X){Q.lazyBinding=!X};R.enableHeatmap=function(X){Q.heatmap=!X;if(R.heatmap){R.heatmap.bind()}};R.enableCrossDomain=function(X){Q.crossDomain=!X};R.enableLocalTraffic=function(){Q.trackLocal=true};R.enableAnchor=function(X){};R.keepAnchor=function(X){Q.keepAnchor=!X};R.enableRedirectServer=function(X){R.rsDomain=X||Q.domain}}var g={version:"2.0.0.19",hooks:[],plugins:[],trackers:{},register:function(M,O,N){g.plugins.push({name:M,template:O});g.addApis(N)},addApis:function(M){if(M){for(var N in M){if(f(M,N)){B.prototype[N]=M[N]}}}},addHook:function(N,O){var M=g.hooks;N=c(N);M[N]=M[N]||[];M[N].push(O)},execHook:function(N){var Q;if((Q=g.hooks[N])){for(var O=0,M=Q.length;O<M;O++){var P=Q[O];P.apply(P,q.call(arguments,1))}}},isTrackerExist:function(M){return!!g.trackers[M]},getTracker:function(M){return g.trackers[M]||(g.trackers[M]=new B(M))},loadCallback:function(N,M,O){N=N||"_gsCallback";return x.waitFor("window."+N,function(P){P()},M,O)}};K.GridsumWebDissector=g;K._gsUtility=x;x.resolveURL=x.resolveUrl})();var _gsTracker=GridsumWebDissector.getTracker('GWD-804201');_gsTracker.setServiceUrls('//recv-wd.gridsumdissector.com/gs.gif','//recv.egovsum.com/gs.gif');if(_gsUtility.isPageMatch(["datacenter.mep.gov.cn/"],'exactmatch',location.host+location.pathname)){_gsTracker.enableHeatmap();_gsTracker.setDocWidth(1024);_gsTracker.setPageVersion("ver20150601");_gsTracker.setOriginalUrl("http://datacenter.mep.gov.cn/");}else{}
_gsTracker.track();