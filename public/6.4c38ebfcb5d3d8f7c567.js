(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Lvw3:function(t,e,n){"use strict";n.r(e),n.d(e,"ProfileModule",function(){return a});var c=n("ofXK"),r=n("tyNb"),s=n("fXoL"),i=n("qIOU");const o=[{path:"",component:(()=>{class t{constructor(t){this.authService=t,this.userName=this.authService.getLoggedInUserData().displayName}ngOnInit(){}signOut(){this.authService.signOut()}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(i.a))},t.\u0275cmp=s.Db({type:t,selectors:[["page-profile"]],decls:4,vars:1,consts:[[3,"click"]],template:function(t,e){1&t&&(s.Ob(0,"p"),s.ec(1),s.Nb(),s.Ob(2,"button",0),s.Vb("click",function(){return e.signOut()}),s.ec(3," Sign Out\n"),s.Nb()),2&t&&(s.zb(1),s.gc(" Welcome ",e.userName,"\n"))},styles:[""]}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({imports:[[r.b.forChild(o)],r.b]}),t})(),a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({imports:[[c.b,u]]}),t})()}}]);