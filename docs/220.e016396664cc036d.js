"use strict";(self.webpackChunkHyundai_lab_test=self.webpackChunkHyundai_lab_test||[]).push([[220],{5220:(f,l,r)=>{r.r(l),r.d(l,{LoginComponent:()=>p});var _=r(6895),u=r(529),e=r(433),t=r(1571),m=r(7881),g=r(4961);const d=["f"];function c(i,E){if(1&i&&(t.TgZ(0,"div",12)(1,"strong"),t._uU(2,"Login Failed"),t.qZA(),t._uU(3),t.qZA()),2&i){const n=t.oxw();t.xp6(3),t.hij(" ",n.loginError," ")}}let p=(()=>{class i{constructor(n,o){this.router=n,this.userService=o,this.loginError=""}login(){this.userService.login(this.form.value).subscribe(n=>{sessionStorage.setItem("token",n.token),this.router.navigate([""])},n=>{this.loginError=n.error.message,setTimeout(()=>{this.loginError=""},2e3)})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(m.F0),t.Y36(g.f))};static#n=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-login"]],viewQuery:function(o,a){if(1&o&&t.Gf(d,5),2&o){let s;t.iGM(s=t.CRH())&&(a.form=s.first)}},standalone:!0,features:[t.jDz],decls:17,vars:2,consts:[[1,"container"],["class","alert alert-warning",4,"ngIf"],[1,"col-6","m-auto"],[1,"text-center"],[3,"ngSubmit"],["f","ngForm"],[1,"form-group","m-2"],["for","email"],["type","email","id","email","name","username","aria-describedby","emailHelp","placeholder","Enter email","ngModel","","required","","email","",1,"form-control"],["for","password"],["type","password","id","password","name","password","placeholder","Password","ngModel","","required","",1,"form-control"],["type","submit",1,"btn","btn-primary","m-2",3,"disabled"],[1,"alert","alert-warning"]],template:function(o,a){if(1&o&&(t.TgZ(0,"div",0),t.YNc(1,c,4,1,"div",1),t.TgZ(2,"div",2)(3,"h1",3),t._uU(4,"Login"),t.qZA(),t.TgZ(5,"form",4,5),t.NdJ("ngSubmit",function(){return a.login()}),t.TgZ(7,"div",6)(8,"label",7),t._uU(9,"Email address"),t.qZA(),t._UZ(10,"input",8),t.qZA(),t.TgZ(11,"div",6)(12,"label",9),t._uU(13,"Password"),t.qZA(),t._UZ(14,"input",10),t.qZA(),t.TgZ(15,"button",11),t._uU(16,"Submit"),t.qZA()()()()),2&o){const s=t.MAs(6);t.xp6(1),t.Q6J("ngIf",a.loginError),t.xp6(14),t.Q6J("disabled",!s.valid)}},dependencies:[e.u5,e._Y,e.Fj,e.JJ,e.JL,e.Q7,e.on,e.On,e.F,u.JF,_.O5],styles:["[_nghost-%COMP%]{height:100vh;display:flex;align-items:center}.alert[_ngcontent-%COMP%]{position:absolute;top:10px;width:80%}"]})}return i})()}}]);