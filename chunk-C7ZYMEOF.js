import{$ as g,$c as D,Bb as s,Cb as _,Db as m,Fb as v,Fc as k,Gb as y,Hb as P,La as i,Ma as C,Sc as E,Ua as M,Yc as I,Zc as q,_a as u,_c as Q,aa as f,ad as T,dc as O,dd as z,eb as l,ec as S,fd as F,gb as h,gd as V,hc as A,hd as N,id as B,jd as Y,md as L,nb as r,nd as j,ob as n,od as W,rb as w,sb as x,tb as p}from"./chunk-OO6VXKXX.js";function K(a,e){if(a&1&&(r(0,"span",16),s(1),n()),a&2){let t=p().$implicit,o=p();h("correct",t.isCorrect)("incorrect",!t.isCorrect),i(),m(" ",o.getStatusIcon(t)," ")}}function G(a,e){if(a&1&&(r(0,"div",19)(1,"h4"),s(2,"Sample Answer:"),n(),r(3,"p"),s(4),n()()),a&2){let t=p(2).$implicit;i(4),_(t.answer)}}function H(a,e){if(a&1&&(r(0,"div",17)(1,"p"),s(2),n(),u(3,G,5,1,"div",18),n()),a&2){let t=p().$implicit,o=p();i(),h("correct-text",t.isCorrect)("incorrect-text",!t.isCorrect),i(),m(" ",o.getFeedbackMessage(t)," "),i(),l("ngIf",!t.isCorrect)}}function J(a,e){if(a&1){let t=w();r(0,"div",5)(1,"div",6)(2,"span",7),s(3),n(),u(4,K,2,5,"span",8),n(),r(5,"p",9),s(6),n(),r(7,"mat-form-field",10)(8,"mat-label"),s(9,"Your Answer"),n(),r(10,"textarea",11),P("ngModelChange",function(c){let d=g(t).$implicit;return y(d.userAnswer,c)||(d.userAnswer=c),f(c)}),n()(),r(11,"div",12)(12,"button",13),x("click",function(){let c=g(t).$implicit,d=p();return f(d.submitAnswer(c))}),s(13," Submit Answer "),n(),r(14,"button",14),x("click",function(){let c=g(t).$implicit,d=p();return f(d.clearAnswer(c))}),s(15," Clear "),n()(),u(16,H,4,6,"div",15),n()}if(a&2){let t=e.$implicit;i(3),m("Question ",t.id,""),i(),l("ngIf",t.isCorrect!==void 0),i(2),_(t.text),i(4),v("ngModel",t.userAnswer),i(2),l("disabled",!t.userAnswer),i(2),l("disabled",!t.userAnswer),i(2),l("ngIf",t.isCorrect!==void 0)}}var $=class a{constructor(e,t){this.qaStateService=e;this.snackBar=t}chapterNumber=8;chapterTitle="Design Realization";questions=[{id:1,text:"Explain the design/product realization process and its key stages. How does CAD/CAM/CAE fit into this process?",answer:"The design realization process involves converting designed parts into manufactured products. Key stages include: design needs identification, design process, manufacturing process, and distribution/service/disposal. CAD is used for design creation/modification, CAM for manufacturing control, and CAE for analysis/optimization. These tools integrate through product data management systems.",userAnswer:""},{id:2,text:"What is rapid prototyping and what are its advantages and disadvantages? Explain the overall process.",answer:"Rapid prototyping produces scaled physical prototypes from CAD designs. Advantages include time savings, easy duplication, low costs, design flexibility, and rapid tooling capabilities. Disadvantages are initial setup costs and material costs. The process involves: creating virtual part in CAD, converting to STL format, creating support structures, and building the physical model layer by layer.",userAnswer:""},{id:3,text:"What is Product Data Management (PDM) and why is it important in design realization?",answer:"PDM systems manage product and process information throughout product lifecycle. They organize specifications, part information, NC programs, CAD models, test results, and documentation. PDM helps reduce time/cost of new products, improves quality, supports concurrent engineering, and manages product-related data through database integration of CAD/CAE/CAM systems.",userAnswer:""},{id:4,text:"Describe virtual engineering and its major applications in product development.",answer:"Virtual engineering uses simulation to help engineers make decisions about real systems. Major applications include: 1) Virtual Design - visual simulation of product performance, 2) Virtual Manufacturing - assessment of manufacturability, 3) Virtual Prototyping - digital mockup and assembly visualization, 4) Collaborative Engineering - sharing digital product information between stakeholders.",userAnswer:""}];getStatusIcon(e){return e.isCorrect===void 0?"":e.isCorrect?"\u2713":"\xD7"}getFeedbackMessage(e){return e.isCorrect?"Excellent! Your answer demonstrates good understanding.":"Your answer could use some improvement. Review the sample answer below."}isLastQuestion(e){return e.id===this.questions.length}clearAnswer(e){e.userAnswer="",e.isCorrect=void 0}submitAnswer(e){let o=this.checkSimilarity(e.userAnswer||"",e.answer)>.7;this.qaStateService.saveAnswer(this.chapterNumber,e.id,e.userAnswer||"",o),this.snackBar.open(o?"Great job!":"Keep trying!","Close",{duration:3e3})}checkSimilarity(e,t){let o=e.toLowerCase(),c=t.toLowerCase(),d=new Set(o.split(" ")),b=new Set(c.split(" "));return new Set([...d].filter(R=>b.has(R))).size/Math.max(d.size,b.size)}static \u0275fac=function(t){return new(t||a)(C(W),C(L))};static \u0275cmp=M({type:a,selectors:[["app-chapter-eight-qanda"]],decls:8,vars:3,consts:[[1,"qanda-container"],[1,"section-header"],[1,"subtitle"],[1,"questions-container"],["class","question-card",4,"ngFor","ngForOf"],[1,"question-card"],[1,"question-header"],[1,"question-number"],["class","status-indicator",3,"correct","incorrect",4,"ngIf"],[1,"question-text"],["appearance","outline",1,"answer-field"],["matInput","","rows","4","placeholder","Type your answer here...",3,"ngModelChange","ngModel"],[1,"action-buttons"],["mat-raised-button","","color","primary",3,"click","disabled"],["mat-stroked-button","",3,"click","disabled"],["class","feedback",4,"ngIf"],[1,"status-indicator"],[1,"feedback"],["class","model-answer",4,"ngIf"],[1,"model-answer"]],template:function(t,o){t&1&&(r(0,"div",0)(1,"div",1)(2,"h2"),s(3),n(),r(4,"p",2),s(5),n()(),r(6,"div",3),u(7,J,17,7,"div",4),n()()),t&2&&(i(3),m("Chapter ",o.chapterNumber,": Review Questions"),i(2),m("Test your understanding of ",o.chapterTitle,""),i(2),l("ngForOf",o.questions))},dependencies:[A,O,S,z,Q,D,T,k,N,V,F,Y,B,q,I,j,E],styles:['.qanda-container[_ngcontent-%COMP%]{max-width:800px;margin:40px auto;padding:0 20px}.section-header[_ngcontent-%COMP%]{margin-bottom:40px;text-align:left}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#1976d2;font-size:24px;margin:0;font-weight:500}.subtitle[_ngcontent-%COMP%]{color:#666;margin-top:8px;font-size:16px}.question-card[_ngcontent-%COMP%]{background:#fff;padding:24px 0}.question-header[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:16px}.question-number[_ngcontent-%COMP%]{font-size:18px;font-weight:500;color:#1976d2}.question-text[_ngcontent-%COMP%]{font-size:16px;color:#333;margin-bottom:20px;line-height:1.6}.answer-field[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}.action-buttons[_ngcontent-%COMP%]{display:flex;gap:12px;margin-bottom:24px}.feedback[_ngcontent-%COMP%]{margin-top:16px;padding:16px;border-radius:4px;background:#f8f9fa}.correct-text[_ngcontent-%COMP%]{color:#4caf50;font-weight:500}.incorrect-text[_ngcontent-%COMP%]{color:#f44336;font-weight:500}.model-answer[_ngcontent-%COMP%]{margin-top:16px;padding-top:16px;border-top:1px solid #eee}.model-answer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#1976d2;margin-bottom:8px;font-size:16px}.status-indicator[_ngcontent-%COMP%]{margin-left:12px;font-size:18px}.correct[_ngcontent-%COMP%]{color:#4caf50}.incorrect[_ngcontent-%COMP%]{color:#f44336}mat-divider[_ngcontent-%COMP%]{margin:32px 0}[_nghost-%COMP%]     .mat-form-field-wrapper{margin-bottom:0}.action-buttons[_ngcontent-%COMP%]{display:flex;gap:12px;margin-bottom:24px;align-items:center}.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:120px;transition:all .2s ease-in-out;position:relative;overflow:hidden}.action-buttons[_ngcontent-%COMP%]   button[color=primary][_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 4px 8px #1976d233}.action-buttons[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%]:hover{background:#0000000a;transform:translateY(-2px)}.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{transform:none;box-shadow:none;opacity:.6}.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{transform:translateY(1px)}.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:after{content:"";position:absolute;top:50%;left:50%;width:0;height:0;background:#fff3;border-radius:50%;transform:translate(-50%,-50%);transition:width .3s ease-out,height .3s ease-out}.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active:after{width:200px;height:200px}.feedback[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .3s ease-out}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}button[mat-raised-button][_ngcontent-%COMP%], button[mat-stroked-button][_ngcontent-%COMP%]{height:36px!important;line-height:36px;padding:0 16px}@keyframes _ngcontent-%COMP%_pulse{0%{box-shadow:0 0 #1976d266}70%{box-shadow:0 0 0 10px #1976d200}to{box-shadow:0 0 #1976d200}}.action-buttons[_ngcontent-%COMP%]   button[color=primary][_ngcontent-%COMP%]:not(:disabled){animation:_ngcontent-%COMP%_pulse 2s infinite}']})};export{$ as a};