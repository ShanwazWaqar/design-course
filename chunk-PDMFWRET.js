import{$ as g,$c as E,Bb as s,Cb as _,Db as m,Fb as M,Fc as k,Gb as P,Hb as O,La as i,Ma as x,Sc as I,Ua as h,Yc as q,Zc as Q,_a as u,_c as T,aa as f,ad as F,dc as y,dd as z,eb as l,ec as S,fd as N,gb as b,gd as B,hc as A,hd as V,id as Y,jd as D,md as L,nb as a,nd as W,ob as n,od as $,rb as v,sb as w,tb as p}from"./chunk-OO6VXKXX.js";function R(r,t){if(r&1&&(a(0,"span",16),s(1),n()),r&2){let e=p().$implicit,o=p();b("correct",e.isCorrect)("incorrect",!e.isCorrect),i(),m(" ",o.getStatusIcon(e)," ")}}function H(r,t){if(r&1&&(a(0,"div",19)(1,"h4"),s(2,"Sample Answer:"),n(),a(3,"p"),s(4),n()()),r&2){let e=p(2).$implicit;i(4),_(e.answer)}}function K(r,t){if(r&1&&(a(0,"div",17)(1,"p"),s(2),n(),u(3,H,5,1,"div",18),n()),r&2){let e=p().$implicit,o=p();i(),b("correct-text",e.isCorrect)("incorrect-text",!e.isCorrect),i(),m(" ",o.getFeedbackMessage(e)," "),i(),l("ngIf",!e.isCorrect)}}function J(r,t){if(r&1){let e=v();a(0,"div",5)(1,"div",6)(2,"span",7),s(3),n(),u(4,R,2,5,"span",8),n(),a(5,"p",9),s(6),n(),a(7,"mat-form-field",10)(8,"mat-label"),s(9,"Your Answer"),n(),a(10,"textarea",11),O("ngModelChange",function(c){let d=g(e).$implicit;return P(d.userAnswer,c)||(d.userAnswer=c),f(c)}),n()(),a(11,"div",12)(12,"button",13),w("click",function(){let c=g(e).$implicit,d=p();return f(d.submitAnswer(c))}),s(13," Submit Answer "),n(),a(14,"button",14),w("click",function(){let c=g(e).$implicit,d=p();return f(d.clearAnswer(c))}),s(15," Clear "),n()(),u(16,K,4,6,"div",15),n()}if(r&2){let e=t.$implicit;i(3),m("Question ",e.id,""),i(),l("ngIf",e.isCorrect!==void 0),i(2),_(e.text),i(4),M("ngModel",e.userAnswer),i(2),l("disabled",!e.userAnswer),i(2),l("disabled",!e.userAnswer),i(2),l("ngIf",e.isCorrect!==void 0)}}var j=class r{constructor(t,e){this.qaStateService=t;this.snackBar=e}chapterNumber=2;chapterTitle="Solving Design Problems";questions=[{id:1,text:"What are the key differences between analysis problems and design problems? Provide examples of each.",answer:"Analysis problems have unique solutions and well-defined criteria, while design problems are open-ended with multiple possible solutions. Example: Calculating beam stress (analysis) vs designing a new bridge (design).",userAnswer:""},{id:2,text:"Explain the concept of robust design and its importance in product development.",answer:"Robust design creates products that function as intended regardless of variations in materials, processes, environment and use. It reduces sensitivity to noise factors and improves product quality and reliability.",userAnswer:""},{id:3,text:"How can nature inspire engineering design solutions? Give specific examples.",answer:"Nature provides proven, efficient solutions through evolution. Examples include: gecko feet inspiring adhesives, bird wings inspiring aircraft design, and plant structures inspiring architectural designs.",userAnswer:""},{id:4,text:"Describe the different types of design problems (selection, configuration, parametric). Give an example of each.",answer:"Selection design involves choosing from existing solutions (e.g., selecting a tire), configuration design involves arranging components (e.g., laptop placement in backpack), and parametric design involves optimizing dimensions (e.g., beverage can design).",userAnswer:""},{id:5,text:"What is sustainability design and why is it important in modern engineering?",answer:"Sustainability design focuses on creating products using renewable resources and minimizing environmental impact. It considers environmental, social, and economic factors to meet present needs without compromising future generations' ability to meet their needs.",userAnswer:""},{id:6,text:"How can art and nature be integrated into engineering design for innovation?",answer:"Art and nature integration brings creativity and proven solutions to engineering. Art contributes aesthetic appeal and creative problem-solving, while nature provides time-tested efficient solutions through biomimicry. Examples include architecture inspired by natural structures and product designs influenced by artistic principles.",userAnswer:""}];getStatusIcon(t){return t.isCorrect===void 0?"":t.isCorrect?"\u2713":"\xD7"}getFeedbackMessage(t){return t.isCorrect?"Excellent! Your answer demonstrates good understanding.":"Your answer could use some improvement. Review the sample answer below."}isLastQuestion(t){return t.id===this.questions.length}clearAnswer(t){t.userAnswer="",t.isCorrect=void 0}submitAnswer(t){let o=this.checkSimilarity(t.userAnswer||"",t.answer)>.7;this.qaStateService.saveAnswer(this.chapterNumber,t.id,t.userAnswer||"",o),this.snackBar.open(o?"Great job!":"Keep trying!","Close",{duration:3e3})}checkSimilarity(t,e){let o=t.toLowerCase(),c=e.toLowerCase(),d=new Set(o.split(" ")),C=new Set(c.split(" "));return new Set([...d].filter(G=>C.has(G))).size/Math.max(d.size,C.size)}static \u0275fac=function(e){return new(e||r)(x($),x(L))};static \u0275cmp=h({type:r,selectors:[["app-chapter-two-qanda"]],decls:8,vars:3,consts:[[1,"qanda-container"],[1,"section-header"],[1,"subtitle"],[1,"questions-container"],["class","question-card",4,"ngFor","ngForOf"],[1,"question-card"],[1,"question-header"],[1,"question-number"],["class","status-indicator",3,"correct","incorrect",4,"ngIf"],[1,"question-text"],["appearance","outline",1,"answer-field"],["matInput","","rows","4","placeholder","Type your answer here...",3,"ngModelChange","ngModel"],[1,"action-buttons"],["mat-raised-button","","color","primary",3,"click","disabled"],["mat-stroked-button","",3,"click","disabled"],["class","feedback",4,"ngIf"],[1,"status-indicator"],[1,"feedback"],["class","model-answer",4,"ngIf"],[1,"model-answer"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div",1)(2,"h2"),s(3),n(),a(4,"p",2),s(5),n()(),a(6,"div",3),u(7,J,17,7,"div",4),n()()),e&2&&(i(3),m("Chapter ",o.chapterNumber,": Review Questions"),i(2),m("Test your understanding of ",o.chapterTitle,""),i(2),l("ngForOf",o.questions))},dependencies:[A,y,S,z,T,E,F,k,V,B,N,D,Y,Q,q,W,I],styles:['.qanda-container[_ngcontent-%COMP%]{max-width:800px;margin:40px auto;padding:0 20px}.section-header[_ngcontent-%COMP%]{margin-bottom:40px;text-align:left}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#1976d2;font-size:24px;margin:0;font-weight:500}.subtitle[_ngcontent-%COMP%]{color:#666;margin-top:8px;font-size:16px}.question-card[_ngcontent-%COMP%]{background:#fff;padding:24px 0}.question-header[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:16px}.question-number[_ngcontent-%COMP%]{font-size:18px;font-weight:500;color:#1976d2}.question-text[_ngcontent-%COMP%]{font-size:16px;color:#333;margin-bottom:20px;line-height:1.6}.answer-field[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}.action-buttons[_ngcontent-%COMP%]{display:flex;gap:12px;margin-bottom:24px}.feedback[_ngcontent-%COMP%]{margin-top:16px;padding:16px;border-radius:4px;background:#f8f9fa}.correct-text[_ngcontent-%COMP%]{color:#4caf50;font-weight:500}.incorrect-text[_ngcontent-%COMP%]{color:#f44336;font-weight:500}.model-answer[_ngcontent-%COMP%]{margin-top:16px;padding-top:16px;border-top:1px solid #eee}.model-answer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#1976d2;margin-bottom:8px;font-size:16px}.status-indicator[_ngcontent-%COMP%]{margin-left:12px;font-size:18px}.correct[_ngcontent-%COMP%]{color:#4caf50}.incorrect[_ngcontent-%COMP%]{color:#f44336}mat-divider[_ngcontent-%COMP%]{margin:32px 0}[_nghost-%COMP%]     .mat-form-field-wrapper{margin-bottom:0}.action-buttons[_ngcontent-%COMP%]{display:flex;gap:12px;margin-bottom:24px;align-items:center}.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:120px;transition:all .2s ease-in-out;position:relative;overflow:hidden}.action-buttons[_ngcontent-%COMP%]   button[color=primary][_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 4px 8px #1976d233}.action-buttons[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%]:hover{background:#0000000a;transform:translateY(-2px)}.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{transform:none;box-shadow:none;opacity:.6}.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{transform:translateY(1px)}.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:after{content:"";position:absolute;top:50%;left:50%;width:0;height:0;background:#fff3;border-radius:50%;transform:translate(-50%,-50%);transition:width .3s ease-out,height .3s ease-out}.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active:after{width:200px;height:200px}.feedback[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .3s ease-out}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}button[mat-raised-button][_ngcontent-%COMP%], button[mat-stroked-button][_ngcontent-%COMP%]{height:36px!important;line-height:36px;padding:0 16px}@keyframes _ngcontent-%COMP%_pulse{0%{box-shadow:0 0 #1976d266}70%{box-shadow:0 0 0 10px #1976d200}to{box-shadow:0 0 #1976d200}}.action-buttons[_ngcontent-%COMP%]   button[color=primary][_ngcontent-%COMP%]:not(:disabled){animation:_ngcontent-%COMP%_pulse 2s infinite}']})};export{j as a};
