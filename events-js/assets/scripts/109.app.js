(self.webpackChunkjs_indepth=self.webpackChunkjs_indepth||[]).push([[109],{109:(t,e,s)=>{"use strict";s.r(e),s.d(e,{Tooltip:()=>o}),console.log("tooltip running");class o extends class{constructor(t,e=!1){this.hostElement=t?document.getElementById(t):document.body,this.insertBefore=e}detach(){this.element&&this.element.remove()}attach(){this.hostElement.insertAdjacentElement(this.insertBefore?"afterbegin":"beforeend",this.element)}}{constructor(t,e,s){super(s),this.closeNotifier=t,this.text=e,this.create(),this.closeTooltip=()=>{this.detach(),this.closeNotifier()}}create(){const t=document.createElement("div");t.className="card";const e=document.getElementById("tooltip"),s=document.importNode(e.content,!0);s.querySelector("p").textContent=this.text,t.append(s);const o=this.hostElement.offsetLeft+20,n=this.hostElement.offsetTop+this.hostElement.clientHeight-this.hostElement.parentElement.scrollTop-10;t.style.position="absolute",t.style.left=o+"px",t.style.top=n+"px",t.addEventListener("click",this.closeTooltip),this.element=t}}}}]);
//# sourceMappingURL=109.app.js.map