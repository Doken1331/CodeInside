"use strict";(self.webpackChunkCodeInside=self.webpackChunkCodeInside||[]).push([[323],{4323:(p,h,o)=>{o.r(h),o.d(h,{GifModule:()=>g});var a=o(9808),l=o(459),t=o(1223),n=o(3353);function f(e,s){if(1&e){const r=t.EpF();t.TgZ(0,"button",5),t.NdJ("click",function(){return t.CHM(r),t.oxw().refreshOldGif()}),t._uU(1," Refresh* "),t.qZA()}}const m=[{path:"",component:(()=>{class e{constructor(r){this.pictureService=r,this.url="https://cataas.com/cat/KxxO9gprMWpcXD4o?type=or&filter=without",this.localArr=[],this.iteratorLocalStorage=1,this.refreshBoolean=!1}ngOnInit(){this.getRandomGif()}optionType(r){return this.pictureService.getOptionType(r)}optionFilter(r){return this.pictureService.getOptionFilter(r)}getRandomGif(){this.iteratorLocalStorage=1,this.localArr.push(this.url),localStorage.setItem("oldGif",JSON.stringify(this.localArr)),this.checkOldGif(),this.url=this.pictureService.serviceUrl,this.pictureService.getAllCats().subscribe(r=>{const c=Object.values(r);let u=this.pictureService.getRandomNum(1114);for(;!c[u].tags.includes("gif");)u=this.pictureService.getRandomNum(1114);this.url+="/cat/"+c[u]._id})}checkOldGif(){return this.json=localStorage.getItem("oldGif"),this.parsedArr=JSON.parse(this.json),this.refreshBoolean=this.parsedArr.length>1}refreshOldGif(){this.json=localStorage.getItem("oldGif"),this.parsedArr=JSON.parse(this.json),this.refreshBoolean=this.iteratorLocalStorage<=this.parsedArr.length-2,this.url=this.parsedArr[this.parsedArr.length-this.iteratorLocalStorage],this.iteratorLocalStorage++}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(n.A))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-gif"]],decls:11,vars:3,consts:[[1,"box"],[1,"box__title"],["alt","img",1,"box__img",3,"src"],["action","",1,"box__form"],["class","box__form-btn box__form-elem","type","button",3,"click",4,"ngIf"],["type","button",1,"box__form-btn","box__form-elem",3,"click"],[1,"box__form-elem",3,"routerLink"],[1,"picture"]],template:function(r,c){1&r&&(t.TgZ(0,"section",0)(1,"h2",1),t._uU(2,"Random gif"),t.qZA(),t._UZ(3,"img",2),t.TgZ(4,"form",3),t.YNc(5,f,2,0,"button",4),t.TgZ(6,"button",5),t.NdJ("click",function(){return c.getRandomGif()}),t._uU(7," Generate "),t.qZA(),t.TgZ(8,"a",6),t._uU(9,"Back :("),t.qZA()()(),t._UZ(10,"div",7)),2&r&&(t.xp6(3),t.Q6J("src",c.url,t.LSH),t.xp6(2),t.Q6J("ngIf",c.refreshBoolean),t.xp6(3),t.Q6J("routerLink","/"))},directives:[a.O5,l.yS],styles:[".picture[_ngcontent-%COMP%]{position:fixed;top:0;left:0;background:url(chavk.62d407767d93cabb.gif) top/cover no-repeat;width:100%;height:100%;opacity:40%;z-index:-1}"]}),e})()}];let d=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(m)],l.Bz]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.ez,d]]}),e})()},3353:(p,h,o)=>{o.d(h,{A:()=>t});var a=o(1223),l=o(520);let t=(()=>{class n{constructor(i){this.http=i,this.cats=[],this.catUrl="",this.serviceUrl="https://cataas.com"}getAllCats(){return this.http.get(this.serviceUrl+"/api/cats?limit=1114")}getOptionType(i){return localStorage.setItem("type",i)}getOptionFilter(i){return localStorage.setItem("filter",i)}getRandomNum(i){return Math.floor(Math.random()*i)}}return n.\u0275fac=function(i){return new(i||n)(a.LFG(l.eN))},n.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);