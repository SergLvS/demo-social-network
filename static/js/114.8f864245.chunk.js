"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[114],{3114:function(s,e,n){n.r(e),n.d(e,{default:function(){return y}});var i=n(2791),a=n(2807),t={dialogs:"Dialogs_dialogs__6YmrZ",dialogsItem:"Dialogs_dialogsItem__Jk-a5",dialog:"Dialogs_dialog__rFczp",messages:"Dialogs_messages__twAmo"},o=n(1087),r=n(184),d=function(s){var e="/dialogs/"+s.id;return(0,r.jsxs)("div",{className:t.dialog+" "+t.active,children:[(0,r.jsx)("img",{src:"https://klike.net/uploads/posts/2019-03/1551511823_2.jpg",alt:""}),(0,r.jsxs)(o.OL,{to:e,children:[s.name," "]})]})},l=function(s){return(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:t.dialogs,children:s.message})})})},u=n(7689),g=n(6139),c=n(704),m=n(5304),h=n(9086),f=(0,m.D)(50),j=(0,c.Z)({form:"dialog-add-message-form"})((function(s){return(0,r.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,r.jsx)("div",{children:(0,r.jsx)(g.Z,{component:h.gx,name:"newMessageBody",placeholder:"Enter you message",validate:[m.C,f]})}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{children:"Add message"})})]})})),x=function(s){var e=s.dialogsPage,n=e.dialogs.map((function(s){return(0,r.jsx)(d,{name:s.name,id:s.id},s.id)})),i=e.messages.map((function(s){return(0,r.jsx)(l,{message:s.message},s.id)}));e.newMessageBody;return s.isAuth?(0,r.jsxs)("div",{className:t.dialogs,children:[(0,r.jsx)("div",{className:t.dialogsItem,children:n}),(0,r.jsx)("div",{className:t.messages,children:i}),(0,r.jsx)(j,{onSubmit:function(e){s.sendMessage(e.newMessageBody)}})]}):(0,r.jsx)(u.Fg,{to:"/login"})},p=n(8687),v=n(1413),_=n(5671),k=n(3144),b=n(136),Z=n(516),w=function(s){return{isAuth:s.auth.isAuth}},y=(0,n(7781).qC)((0,p.$j)((function(s){return{dialogsPage:s.dialogsPage}}),(function(s){return{sendMessage:function(e){s((0,a.X)(e))}}})),(function(s){var e=function(e){(0,b.Z)(i,e);var n=(0,Z.Z)(i);function i(){return(0,_.Z)(this,i),n.apply(this,arguments)}return(0,k.Z)(i,[{key:"render",value:function(){return this.props.isAuth?(0,r.jsx)(s,(0,v.Z)({},this.props)):(0,r.jsx)(u.Fg,{to:"/login"})}}]),i}(i.Component);return(0,p.$j)(w)(e)}))(x)}}]);
//# sourceMappingURL=114.8f864245.chunk.js.map