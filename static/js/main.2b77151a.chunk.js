(this["webpackJsonphabit-tracker-sber-app-frontend"]=this["webpackJsonphabit-tracker-sber-app-frontend"]||[]).push([[0],{161:function(t,e,n){"use strict";n.r(e);var a,r=n(0),c=n.n(r),o=n(17),i=n.n(o),s=n(67),u=n(7),b=n(1),l=n(60),d=n(2),j=n(3),p=Object(b.createGlobalStyle)(a||(a=Object(u.a)(["\n    html:root {\n        min-height: 100vh;\n        color: ",";\n        background-color: ",";\n        background-image: ",";\n    }\n"])),d.text,d.background,d.gradient),f=Object(b.createGlobalStyle)(l.darkSber),O=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{}),Object(j.jsx)(f,{})]})},h=n(9),x=n.n(h),m=n(14),g=n(13),v=n(16),k=n.n(v),y="https://desolate-badlands-87176.herokuapp.com/";function C(t,e,n,a,r){return w.apply(this,arguments)}function w(){return(w=Object(m.a)(x.a.mark((function t(e,n,a,r,c){var o,i;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.post(y+"user/",{UserId:e,SberId:n,Name:a,Age:r,Gender:c});case 2:return o=t.sent,i=o.data,t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function H(){return(H=Object(m.a)(x.a.mark((function t(e,n,a){var r,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.post(y+"habit",{UserId:e,Name:n,DateForEnd:a});case 2:return r=t.sent,c=r.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(t){return D.apply(this,arguments)}function D(){return(D=Object(m.a)(x.a.mark((function t(e){var n,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get(y+"habit/",{params:{UserId:e}});case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){return(T=Object(m.a)(x.a.mark((function t(e){var n,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.delete(y+"habit?HabitId="+"".concat(e));case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(){return(_=Object(m.a)(x.a.mark((function t(e,n){var a,r,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={HabitId:e,DateOfActivity:n},console.log("body:",a),t.next=4,k.a.post(y+"activity",a);case 4:return r=t.sent,c=r.data,t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(){return(A=Object(m.a)(x.a.mark((function t(e,n){var a,r,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={HabitId:e,DateOfActivity:n},console.log("body:",a),t.next=4,k.a.delete("".concat(y,"activity?HabitId=").concat(e,"&DateOfActivity=").concat(n));case 4:return r=t.sent,c=r.data,t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var I,N,B,F,z,E,U,P,R,L,V,G,J,Z,M=n(18),Y=n(5),q=n(12),K=Object(b.default)(M.Row)(I||(I=Object(u.a)(["\n  margin: 2rem 0;\n"]))),Q=b.default.div(N||(N=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n"]))),W=b.default.div(B||(B=Object(u.a)(["\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n"]))),X=Object(b.default)(Y.CardContent)(F||(F=Object(u.a)(["\n  position: relative;\n"]))),$=Object(b.default)(Y.TextBox)(z||(z=Object(u.a)(["\n  margin-bottom: 1rem;\n  text-align: center;\n"]))),tt=Object(b.default)(Y.Card)(E||(E=Object(u.a)(["\n  margin: 1.5rem 2rem 0;\n  :last-of-type {\n    margin-bottom: 10rem;\n  }\n"]))),et=function(t){for(var e=t.habitId,n=t.habitName,a=t.progressValue,r=t.maxValue,c=t.deleteHabit,o=t.habitProgress,i=t.updateActivity,s="".concat(a,"/").concat(r),u=new Date,b=["\u0432\u0441","\u043f\u043d","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043f\u0442","\u0441\u0431"],l=[],d=function(t){return"0".concat(t).slice(-2)},p=0;p<5;++p){var f=d(u.getDate()),O=d(u.getMonth()+1),h=u.getFullYear()+"-"+O+"-"+f+"T19:47:00.571Z";l.push([p,h,b[u.getDay()]]),u=new Date(u.getTime()-864e5)}return l=l.reverse(),Object(j.jsx)(tt,{children:Object(j.jsx)(Y.CardBody,{children:Object(j.jsxs)(X,{children:[Object(j.jsx)(Y.Container,{children:Object(j.jsxs)(K,{children:[Object(j.jsx)(Y.Col,{type:"calc",size:6,children:Object(j.jsx)(Y.TextBox,{size:"l",subTitle:s,title:n})}),l.map((function(t){return Object(j.jsxs)(Y.Col,{type:"calc",size:1,children:[Object(j.jsx)($,{size:"m",title:t[1].slice(5,10),subTitle:t[2]}),Object(j.jsx)(Q,{children:Object(j.jsx)(Y.Checkbox,{checked:void 0!=o?o[t[0]]:1,onChange:function(n){return i(e,t[1],n.target.checked)}})})]},t[0])}))]})}),Object(j.jsx)(W,{onClick:function(){c(e)},children:Object(j.jsx)(q.h,{})})]})})})},nt=Object(b.default)(Y.TextField)(U||(U=Object(u.a)(["\n  flex-grow: 1;\n  margin-right: 1rem;\n"]))),at=Object(b.default)(Y.Card)(P||(P=Object(u.a)(["\n  width: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 2rem;\n  background-color: ",";\n  background-image: ",";\n"])),d.background,d.gradient),rt=b.default.div(R||(R=Object(u.a)(["\n  display: flex;\n  margin: 2.5rem 0;\n"]))),ct=Object(b.default)(Y.TextBox)(L||(L=Object(u.a)(["\n  margin-bottom: 0.5rem;\n"]))),ot=function(t){var e=t.setPopupActive,n=t.createHabitCountState,a=t.createHabitNameState,r=t.setCreateHabitNameState,c=t.setCreateHabitCountState,o=(t.createHabitName,t.createHabbitAction);return Object(j.jsx)(at,{children:Object(j.jsx)(Y.CardBody,{children:Object(j.jsxs)(Y.CardContent,{children:[Object(j.jsx)(Y.TextBox,{size:"l",title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0438"}),Object(j.jsxs)(rt,{children:[Object(j.jsx)(nt,{label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0438",value:a,onChange:function(t){r(t.target.value)}}),Object(j.jsxs)("div",{children:[Object(j.jsx)(ct,{size:"m",subTitle:"\u0412\u0440\u0435\u043c\u044f \u0432\u044b\u0440\u0430\u0431\u043e\u0442\u043a\u0438"}),Object(j.jsx)(Y.Stepper,{step:1,value:n,onChange:function(t){c(t)}})]})]}),Object(j.jsx)(Y.Button,{text:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",view:"primary",onClick:function(){a&&(e(!1),o())}})]})})})},it=function(t){var e=t.onClick;return Object(j.jsx)(Y.Button,{text:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onClick:e,view:"clear"})},st=(b.default.div(V||(V=Object(u.a)(["\n    filter: blur(8px);\n    -webkit-filter: blur(8px);  \n"]))),b.default.div(G||(G=Object(u.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 4rem;\n    position: sticky;\n    top: 0;\n    background-color: rgba(0,0,0,.6);\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n    "])))),ut=b.default.div(J||(J=Object(u.a)(["\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(0,0,0,.6);\n    position: fixed;\n    top: 0;\n    left: 0; \n"]))),bt=b.default.div(Z||(Z=Object(u.a)(["\n  position: absolute;\n  top:1rem;\n  right:1rem;\n"]))),lt=n(66);var dt=function(){var t={notes:[]},e=Object(r.useState)(!1),n=Object(g.a)(e,2),a=n[0],o=n[1],i=Object(r.useRef)("1234555"),s=Object(r.useState)(0),u=Object(g.a)(s,2),b=u[0],l=(u[1],Object(r.useState)("\u041a\u0438\u0440\u0438\u043b\u043b1")),d=Object(g.a)(l,2),p=d[0],f=(d[1],Object(r.useState)(20)),O=Object(g.a)(f,2),h=O[0],v=(O[1],Object(r.useState)("\u041c")),k=Object(g.a)(v,2),y=k[0],w=(k[1],Object(r.useRef)("")),D=Object(r.useRef)(""),I=Object(r.useState)(""),N=Object(g.a)(I,2),B=N[0],F=N[1],z=Object(r.useState)(1),E=Object(g.a)(z,2),U=E[0],P=E[1],R=Object(r.useState)([]),L=Object(g.a)(R,2),V=L[0],G=L[1],J=Object(r.useState)([!1,!0,!1,!1,!1]),Z=Object(g.a)(J,2),M=(Z[0],Z[1],Object(r.useRef)());Object(r.useEffect)((function(){var t;M.current=(t=function(){return W()},Object(lt.a)({getState:t})),M.current.on("start",(function(t){console.log("assistant.on(start)",t)})),M.current.on("data",(function(t){"smart_app_data"==t.type&&(console.log("User"),console.log(t),void 0!=t.sub?(console.log("Sub",t.sub),i.current=t.sub,C(t.sub,b,p,h,y),S(t.sub).then((function(t){G(t)}))):void 0!=t.user_id&&(console.log("UserId",t.user_id),i.current=t.user_id,C(t.userId,b,p,h,y),S(t.user_id).then((function(t){G(t)})))),console.log("assistant.on(data)",t);var e=t.action;K(e)}))}),[]),Object(r.useEffect)((function(){S(i.current).then((function(t){G(t)}))}),[i.current]),Object(r.useEffect)((function(){w.current=B}),[B]),Object(r.useEffect)((function(){D.current=U}),[U]);var K=function(){var t=Object(m.a)(x.a.mark((function t(e){var n,r,c,i;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("dispatchAssistantAction",e),!e){t.next=32;break}t.t0=e.type,t.next="OpenCreateHabitForm"===t.t0?5:"setHabbitName"===t.t0?7:"setHabbitTime"===t.t0?10:"createHabit"===t.t0?15:"deleteHabit"===t.t0?17:"completeHabit"===t.t0?19:31;break;case 5:return o(!a),t.abrupt("break",32);case 7:return console.log(e.data),F(e.data),t.abrupt("break",32);case 10:if(!(e.data<=0)){t.next=13;break}return M.current.sendData({action:{action_id:"wrongHabitTime"}}),t.abrupt("break",32);case 13:return P(e.data),t.abrupt("break",32);case 15:return w.current?(o(!1),X()):a&&M.current.sendData({action:{action_id:"emptyHabitName"}}),t.abrupt("break",32);case 17:return""!=e.data&&Q(e.data),t.abrupt("break",32);case 19:if(n=e.date.year,r=e.date.month,c=e.date.day,i="",console.log(e.data),V.map((function(t,n){var a=t._id;t.Name.toLowerCase()==e.data.toLowerCase()&&(i=a,console.log("HabitId"))})),""!=i){t.next=29;break}return t.abrupt("return");case 29:tt(i,n+"-"+r+"-"+c+"T19:47:00.571Z",!0);case 30:case 31:return t.abrupt("break",32);case 32:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Q=function(t){V.map((function(e,n){var a=e._id,r=e.Name;if(t.toLowerCase()==r.toLowerCase())return $(a),void M.current.sendData({action:{action_id:"successDelete"}})})),M.current.sendData({action:{action_id:"BadDelete"}})},W=function(){console.log("getStateForAssistant: state:",t);var e={item_selector:{items:t.notes.map((function(t,e){return{number:e+1,id:t.id,title:t.title}}))}};return console.log("getStateForAssistant: new_state:",e),e},X=function(){console.log("UserId",i.current),console.log("CreateHabit",w.current),console.log("Count",D);var t=w.current;(function(t,e,n){return H.apply(this,arguments)})(i.current,w.current,D.current).then((function(){return S(i.current).then((function(e){console.log(e),G(e),M.current.sendData({action:{action_id:"howToCompleteHabit",parameters:{text:"\u041f\u0440\u0438\u0432\u044b\u0447\u043a\u0430 \u0443\u0434\u0430\u0447\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430. \u0427\u0442\u043e\u0431\u044b \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0438 \u043d\u0443\u0436\u043d\u043e \u0441\u043a\u0430\u0437\u0430\u0442\u044c: \u0412\u044b\u043f\u043e\u043b\u043d\u0438\u043b \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0443  ".concat(t," \u0441\u0435\u0433\u043e\u0434\u043d\u044f. \u0412\u043c\u0435\u0441\u0442\u043e \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0437\u0432\u0430\u0442\u044c \u0434\u0430\u0442\u0443, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u0435\u0440\u0432\u043e\u0435 \u043c\u0430\u044f.")}}})}))})),w.current="",F(""),P(1),console.log(V)},$=function(t){(function(t){return T.apply(this,arguments)})(t).then((function(){return S(i.current).then((function(t){G(t)}))}))},tt=function(t,e,n){n?(function(t,e){return _.apply(this,arguments)}(t,e).then((function(){S(i.current).then((function(t){G(t)}))})),console.log("Add")):(function(t,e){return A.apply(this,arguments)}(t,e).then((function(){S(i.current).then((function(t){G(t)}))})),console.log("Delete"))};return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsxs)(st,{children:[Object(j.jsx)(Y.TextBox,{size:"l",title:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0438:"}),Object(j.jsx)(it,{onClick:function(){o(!a),console.log(i.current)}})]}),V.map((function(t,e){var n=t._id,a=t.Name,r=t.DateForEnd,c=t.fivedays,o=t.progress;return Object(j.jsx)(et,{habitId:n,habitName:a,progressValue:o,maxValue:r,habitProgress:c,deleteHabit:$,updateActivity:tt})})),a?Object(j.jsxs)("div",{children:[Object(j.jsx)(ut,{onClick:function(){return o(!a)}}),Object(j.jsx)(ot,{setPopupActive:o,setCreateHabitCountState:P,createHabitNameState:B,setCreateHabitNameState:F,createHabitCountState:U,createHabitName:w,createHabbitAction:X}),Object(j.jsx)(bt,{onClick:function(){return o(!a)},children:Object(j.jsx)(q.d,{})})]}):null]})};i.a.render(Object(j.jsxs)(s.DeviceThemeProvider,{children:[Object(j.jsx)(O,{}),Object(j.jsx)(dt,{})]}),document.getElementById("root"))}},[[161,1,2]]]);
//# sourceMappingURL=main.2b77151a.chunk.js.map