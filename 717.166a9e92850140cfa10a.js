"use strict";(self.webpackChunkappconfig=self.webpackChunkappconfig||[]).push([[717],{5717:(w,l,r)=>{r.r(l),r.d(l,{HomeModule:()=>b});var d=r(8583),a=r(4330);const u=JSON.parse('[{"id":1,"date":"2022-02-01","version":"1"},{"id":2,"date":"2022-05-01","version":"1.2.1"},{"id":3,"date":"2022-10-01","version":"2.0.0"},{"id":4,"date":"2023-01-23","version":"1.1"}]'),c=JSON.parse('[{"id":1,"date":"2022-02-01","version":"1"}]');var e=r(7716),g=r(9267),p=r(3054),h=r(8832);const v=["modallogout"];function m(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"div",19),e.TgZ(1,"div",20),e.TgZ(2,"div",21),e.TgZ(3,"h3",22),e._uU(4," aedpay has a new version"),e.qZA(),e.TgZ(5,"div",23),e._uU(6),e.qZA(),e.TgZ(7,"div",23),e._uU(8),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"div",24),e.TgZ(10,"button",25),e.NdJ("click",function(){return e.CHM(o),e.oxw().updateVersion()}),e._uU(11,"Update"),e.qZA(),e._uU(12," \xa0 "),e.TgZ(13,"button",26),e.NdJ("click",function(){return e.CHM(o).$implicit.close()}),e._uU(14," Later"),e.qZA(),e.qZA(),e.qZA()}if(2&t){const o=e.oxw();e.xp6(6),e.hij("You currently have version ",o.actualV,""),e.xp6(2),e.hij("Do you want to get version ",o.newV," right now?")}}const Z=function(){return["/home/events"]},f=[{path:"",component:(()=>{class t{constructor(o,s,i){this.toastService=o,this.test=s,this.modalService=i,this.versionCloud=u,this.versionActual=c}ngOnInit(){}ngAfterViewInit(){parseFloat(this.versionCloud[this.versionCloud.length-1].version)>parseFloat(this.versionActual[0].version)&&(this.actualV=this.versionActual[0].version,this.newV=this.versionCloud[this.versionCloud.length-1].version,this.msgToast="aedpay has a new version. You currently have version"+this.actualV+". Do you want to get version "+this.newV+" right now?",this.toastService.show(this.msgToast,{classname:" text-light fixed  left-0  bottom-0 h-16 mb-2 ",delay:2e4}))}updateVersion(){this.test.execphp().subscribe(o=>{console.log(o),this.modalService.dismissAll(),window.location.reload()},o=>{console.log(o)})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(g.k),e.Y36(p.q),e.Y36(h.FF))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-dashboard"]],viewQuery:function(o,s){if(1&o&&e.Gf(v,5),2&o){let i;e.iGM(i=e.CRH())&&(s.content=i.first)}},decls:36,vars:2,consts:[[1,"flex-row","w-full","min-h-screen"],[1,"flex-row","full"],[1,"flex","justify-between","w-full","bg-white","px-10","items-center","border-2","shadow-xl","absolute","top-0"],[1,"transform","flex","flex-row","items-end","justify-end","scale-50","-my-5"],["src","assets/img/aedpaylogo2.png",1,"img-responsive"],[1,"flex","flex-row","items-end","justify-center","space-x-10"],["href","",1,"text-blue-500","text-2xl","font-semibold"],["href","",1,"text-gray-600","text-xl","font-thin"],[1,"flex","flex-row"],[1,"w-44","h-screen","pt-24","space-y-2","px-5","bg-white","border-r","border-2","border-gray-200","min-h-69"],[1,"flex","flex-row","gap-5","transition","border-2","border-blue-400","text-gray-600","group","hover:bg-blue-400","rounded-xl","px-2","py-1",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"group-hover:text-white","h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"],[1,"font-semibold","text-lg","group-hover:text-white"],[1,"flex","flex-row","gap-5","transition","border-2","border-blue-400","text-gray-600","group","hover:bg-blue-400","rounded-xl","px-2","py-1"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"],[1,"pt-28","p-10","w-full"],["modallogout",""],["aria-labelledby","modal-title"],[1,"px-4","py-4"],[1,"text-center"],[1,"text-lg","font-medium","text-gray-900"],[1,"font-small","text-gray-500"],[1,"bg-gray-100","px-4","py-2","sm:px-6","sm:flex","sm:flex-row-reverse"],[1,"w-auto","px-3","text-white","bg-gray-900","border-2","border-gray-300","rounded-xl","outline-none","hover:bg-gray-800",3,"click"],[1,"w-auto","px-3","border-2","border-gray-300","rounded-xl","outline-none","hover:bg-gray-200",3,"click"]],template:function(o,s){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e.TgZ(6,"a",6),e._uU(7,"Local Server Administration V11"),e.qZA(),e.qZA(),e.TgZ(8,"div",5),e.TgZ(9,"a",7),e._uU(10,"Events v1"),e.qZA(),e.TgZ(11,"a",7),e._uU(12,"Another link"),e.qZA(),e.TgZ(13,"a",7),e._uU(14,"third link"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(15,"div",8),e.TgZ(16,"div",9),e.TgZ(17,"div",10),e.O4$(),e.TgZ(18,"svg",11),e._UZ(19,"path",12),e.qZA(),e.kcU(),e.TgZ(20,"h1",13),e._uU(21,"Events from v8"),e.qZA(),e.qZA(),e.TgZ(22,"div",14),e.O4$(),e.TgZ(23,"svg",11),e._UZ(24,"path",15),e.qZA(),e.kcU(),e.TgZ(25,"h1",13),e._uU(26,"Made by Melvin and Marvin"),e.qZA(),e.qZA(),e.TgZ(27,"div",14),e.O4$(),e.TgZ(28,"svg",11),e._UZ(29,"path",16),e.qZA(),e.kcU(),e.TgZ(30,"h1",13),e._uU(31,"Demostrate that is updating"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(32,"div",17),e._UZ(33,"router-outlet"),e.qZA(),e.qZA(),e.qZA(),e.YNc(34,m,15,2,"ng-template",null,18,e.W1O),e.qZA()),2&o&&(e.xp6(17),e.Q6J("routerLink",e.DdM(1,Z)))},directives:[a.rH,a.lC],styles:[""]}),t})(),children:[{path:"events",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-list-events"]],decls:4,vars:0,consts:[[1,"w-44","h-full","border-t","border-2","border-gray-200"]],template:function(o,s){1&o&&(e.TgZ(0,"div",0),e._uU(1," lista de events hola\n"),e.qZA(),e.TgZ(2,"div"),e._uU(3," Cambios desde marvin side\n"),e.qZA())},encapsulation:2}),t})()}]}];let x=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[a.Bz.forChild(f)],a.Bz]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,x]]}),t})()}}]);