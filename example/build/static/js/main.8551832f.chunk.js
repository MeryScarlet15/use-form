(this["webpackJsonprevel-payments"]=this["webpackJsonprevel-payments"]||[]).push([[0],{139:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(40),l=t.n(i),o=(t(57),t(58),t(9)),c=t(2),u=480,m=t(6),s={maxMobile:480},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=Object(a.useState)("mobile"),t=Object(m.a)(n,2),r=t[0],i=t[1],l=e.maxIpad,o=e.maxMobile;Object(a.useEffect)((function(){i(c()),window.addEventListener("resize",(function(){i(c())}))}),[]);var c=function(){var e=document.children[0].clientWidth,n=e<o;return n?"mobile":l&&!n&&e<l?"ipad":"desktop"};return{platform:r}},p=t(41),h=function(e){var n=e.heading,t=e.text,a="<".concat(n,">").concat(t,"</").concat(n,">");return r.a.createElement(p.a,{content:a})},f=t(3),v=t(4);function x(){var e=Object(f.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 32px;\n  line-height: 39px;\n"]);return x=function(){return e},e}var g=v.a.div(x());function b(){var e=Object(f.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 29px;\n"]);return b=function(){return e},e}var E=v.a.div(b()),w="#181824",y="#2f3046",j="#d7ffff",O="#54c8f9",N="#EEEEEE",V="#AAAAAA",T="#FFFFFF",A="#F23838",F="#F2C9CC";function k(){var e=Object(f.a)(["\n  width: 100%; \n  background: ","; \n  border-radius: 8px;\n  transition: 0.3s all ease-in-out;\n  display: flex; \n  align-items: center; \n  justify-content: center; \n  height: 240px; \n  cursor: pointer; \n\n  .card-text-title {\n    color: ",";\n  }\n\n  &:hover {\n    border: 1px solid ",";\n    transition: 0.3s all ease-in-out;\n\n    .card-text-title {\n      color: ",";\n    }\n  }\n\n\n  @media screen and (min-width: ","px){ \n    height: 343px; \n  }\n"]);return k=function(){return e},e}var B=v.a.div(k(),y,N,j,j,u),I=function(e){var n=e.text,t=e.heading,a=d({maxMobile:u}).platform;return r.a.createElement(B,null,"mobile"===a?r.a.createElement(E,{className:"card-text-title"},r.a.createElement(h,{heading:t,text:n})):r.a.createElement(g,{className:"card-text-title"},r.a.createElement(h,{heading:t,text:n})))};function S(){var e=Object(f.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 40px;\n  line-height: 49px;\n"]);return S=function(){return e},e}var C=v.a.div(S()),z="/",D="/handle-value",H="/handle-values";function R(){var e=Object(f.a)(["\n  margin: 24px 16px; \n\n  @media screen and (min-width: ","px){ \n    margin: 64px 7%; \n  }\n\n  .home-title {\n    text-align: center; \n    color: ",";\n    margin-bottom: 24px;\n\n    @media screen and (min-width: ","px){ \n      margin-bottom: 32px;\n    }\n  }\n\n  //TODO: examples > 4 , parse to display grid\n  .list-examples {\n    @media screen and (min-width: ","px){ \n      display: flex; \n      align-items: center; \n      justify-content: center; \n    }\n\n    .example {\n      margin-bottom: 24px; \n\n      &:last-child {\n        margin-bottom: 0;\n      }\n\n       @media screen and (min-width: ","px){ \n        width: calc((100% - 24px) / 2);\n        margin-right: 24px;\n        margin-bottom: 0;\n\n         &:last-child {\n          margin-right: 0;\n        }\n       }\n    }\n  }\n\n"]);return R=function(){return e},e}var M=v.a.div(R(),u,T,u,u,u),G=function(){var e=d({maxMobile:u}).platform;return r.a.createElement(M,null,"mobile"===e?r.a.createElement(g,{className:"home-title"},r.a.createElement("h1",null,"Test the useForm Hook!")):r.a.createElement(C,{className:"home-title"},r.a.createElement("h1",null,"Test the useForm Hook!")),r.a.createElement("ul",{className:"list-examples"},r.a.createElement("li",{className:"example"},r.a.createElement(o.b,{className:"example-link",to:D},r.a.createElement(I,{text:"HandleFieldEvent",heading:"h2"}))),r.a.createElement("li",{className:"example"},r.a.createElement(o.b,{className:"example-link",to:H},r.a.createElement(I,{text:"SetAGroupOfValues",heading:"h2"})))))};function U(){var e=Object(f.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n"]);return U=function(){return e},e}var W=v.a.div(U()),J=t(5),Q=t(51);function q(){var e=Object(f.a)(["\n  width: 100%;\n  height: 100%;\n\n  .svg-component {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    div {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n"]);return q=function(){return e},e}var L=v.a.div(q()),$=function(e){var n=e.src;return r.a.createElement(L,null,r.a.createElement(Q.a,{src:n,className:"svg-component"}))};function K(){var e=Object(f.a)(["\n  width: 100%;\n  height: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; \n"]);return K=function(){return e},e}var P=Object(v.a)(W)(K(),(function(e){return e.height})),X=function(e){var n=e.id,t=e.onClick,a=e.role,i=e.form,l=e.height,o=e.type,c=function(e){t&&t(e)};return r.a.createElement(P,{id:n,height:l||"100%",role:a||"button",form:i||"",onClick:function(e){return c(e)},type:o||"primary"},e.children)};function Y(){var e=Object(f.a)(["\n  background: ",";\n  width: 100%; \n  height: 100%; \n  border-radius: 4px; \n  color: ",";\n  border: 1px solid ",";\n  transition: 0.2s all ease-in-out;\n  display: flex; \n  align-items: center; \n  justify-content: center; \n\n  .button-color-icon-left {\n    width: 16px; \n    min-width: 16px; \n    max-height: 16px; \n    margin-right: 8px; \n    display: flex; \n    align-items: center; \n    justify-content: center; \n    \n    svg {\n      width: 16px; \n    }\n\n    img {\n      width: 16px; \n    }\n  }\n\n  .button-color-icon-right {\n    width: 16px;\n    min-width: 16px;\n    max-height: 16px;\n    margin-left: 8px; \n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  &:hover {\n    background: ",";\n    color: ",";\n    transition: 0.2s all ease-in-out;\n  }\n\n  &.secondary {\n    background: ",";\n    color: ",";\n    transition: 0.2s all ease-in-out;\n\n    &:hover {\n      background: ",";\n      color: ",";\n      transition: 0.2s all ease-in-out;\n    }\n  }\n"]);return Y=function(){return e},e}var Z=Object(v.a)(W)(Y(),(function(e){return e.color.primary}),(function(e){return e.color.text}),(function(e){return e.color.primary}),(function(e){return e.color.secondary}),(function(e){return e.color.primary}),(function(e){return e.color.secondary}),(function(e){return e.color.text}),(function(e){return e.color.primary}),(function(e){return e.color.primary})),_={small:"32px",medium:"44px",large:"56px"},ee=function(e){var n=e.split(".");return!!n[n.length-1].includes("svg")},ne=function(e){var n=e.id,t=e.onClick,a=e.role,i=e.form,l=e.height,o=e.type,c=e.text,u=e.color,m=e.icon,s={id:n,onClick:t,role:a,form:i,type:o,height:_[l||"medium"]};return r.a.createElement(X,s,r.a.createElement(Z,{color:Object(J.a)({},u),className:o||"primary"},(null===m||void 0===m?void 0:m.left)&&r.a.createElement("div",{className:"button-color-icon-left"},(null===m||void 0===m?void 0:m.left)&&ee(m.left)?r.a.createElement($,{src:m.left}):r.a.createElement("img",{src:m.left,alt:"button-color-icon-left"})),r.a.createElement("p",null,c),(null===m||void 0===m?void 0:m.right)&&r.a.createElement("div",{className:"button-color-icon-right"},(null===m||void 0===m?void 0:m.right)&&ee(m.right)?r.a.createElement($,{src:m.right}):r.a.createElement("img",{src:m.right,alt:"button-color-icon-right"}))))};function te(){var e=Object(f.a)(["\n  width: 100%;\n\n  .input-text-label {\n    color: ",";\n    font-weight: 600;\n    margin-bottom: 8px;\n  }\n\n  .input-text-wrapper {\n    border-radius: 4px;\n    height: 48px;\n    padding: 0 16px;\n    background: ",";\n    display: flex;\n    align-items: center;\n\n    .input-text-icon-left {\n      width: 16px;\n      height: 16px;\n      min-width: 16px;\n      min-height: 16px;\n      max-width: 16px;\n      max-height: 16px;\n      margin-right: 16px;\n    }\n\n    .input-text-container {\n      cursor: text;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      width: 100%;\n      height: 100%;\n\n      &.active {\n        .input-text {\n          max-height: 24px;\n        }\n      }\n    }\n\n    .input-text-label {\n      cursor: text;\n      width: 100%;\n      transition: 0.3s all ease-in-out;\n    }\n\n    .input-text {\n      width: 100%;\n      height: 100%;\n      transition: 0.3s all ease-in-out;\n      overflow: hidden;\n      max-height: 0;\n      min-height: 0;\n      color: #fff;\n\n      .formatted-input-text {\n        height: 100%;\n      }\n      input {\n        width: 100%;\n        height: 100%;\n        font-size: 16px;\n        color: ","; \n\n        &::placeholder {\n          color: ",';\n        }\n      }\n    }\n\n    .input-text-icon-right {\n      width: 16px;\n      height: 16px;\n      min-width: 16px;\n      min-height: 16px;\n      max-width: 16px;\n      max-height: 16px;\n      margin-left: 16px;\n    }\n  }\n\n  .input-text-error {\n    width: 100%;\n    padding-left: 16px;\n    margin-top: 8px;\n    font-family: "Roboto Medium";\n    font-size: 12px;\n    line-height: 16px;\n    color: ',";\n  }\n\n  &.disabled {\n    .input-text-wrapper {\n      .input-text-container {\n        cursor: auto;\n      }\n\n      .input-text-label {\n        color: #A1B4C4;\n      }\n\n      .input-text {\n        color: #A1B4C4;\n\n        input {\n          color: #A1B4C4;\n        }\n      }\n    }\n  }\n\n  &.error {\n    .input-text-wrapper {\n      background:",";\n\n      .input-text-label {\n        color: #D44B50;\n      }\n\n      .input-text-icon-left {\n        svg {\n          rect {\n            fill: #D44B50;\n          }\n\n          path {\n            fill: #D44B50;\n          }\n        }\n      }\n\n      .input-text-icon-right {\n        svg {\n          rect {\n            fill: #D44B50;\n          }\n\n          path {\n            fill: #D44B50;\n          }\n        }\n      }\n    }\n  }\n"]);return te=function(){return e},e}var ae=v.a.div(te(),N,y,V,V,A,F),re=t(49),ie=t.n(re);function le(){var e=Object(f.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 16px;\n  text-transform: capitalize;\n"]);return le=function(){return e},e}var oe=v.a.div(le()),ce=function(e){var n=e.value,t=e.events,r=(e.disabled,e.label),i=e.format,l=function(e,n){var t=Object(a.useState)(e),r=Object(m.a)(t,2),i=r[0],l=r[1],o=Object(a.useRef)(null),c=d({maxMobile:480}).platform;return{isInputActive:i,changeIsInputActive:function(e){if(l(e),e&&(n&&(null===o||void 0===o||o.current.childNodes[0].focus()),null===o||void 0===o||o.current.focus(),"mobile"===c)){window.document.scrollingElement||window.document.body||window.document.documentElement,window.innerHeight;var t=null===o||void 0===o?void 0:o.current;null===t||void 0===t||t.offsetTop}},inputRef:o}}(!r||!!n,i),o=l.isInputActive,c=l.changeIsInputActive,u=l.inputRef,s=function(e){var n=Object(a.useState)(e),t=Object(m.a)(n,2),r=t[0],i=t[1];return{inputValue:r,changeInputValue:function(e){i(e)}}}(n||""),p=s.inputValue,h=s.changeInputValue;Object(a.useEffect)((function(){h(n)}),[n]);return{handleChange:function(e){h(e.target.value),(null===t||void 0===t?void 0:t.onChange)&&t.onChange(e)},handleBlur:function(e){h(e.target.value),r&&(e.target.value||c(!1)),(null===t||void 0===t?void 0:t.onBlur)&&t.onBlur(e)},isInputActive:o,changeIsInputActive:c,inputRef:u,inputValue:p}},ue=function(e){var n=e.label,t=(e.value,e.errorText),a=e.icon,i=(e.events,e.disabled),l=e.placeholder,o=e.type,c=e.format,u=ce(e),m=u.handleChange,s=u.handleBlur,d=(u.isInputActive,u.changeIsInputActive,u.inputRef),p=u.inputValue;return r.a.createElement(ae,{className:"".concat(i?"disabled":""," ").concat(t?"error":"")},n&&r.a.createElement(oe,{className:"input-text-label"},r.a.createElement("label",null,n)),r.a.createElement("div",{className:"input-text-wrapper"},a&&a.left&&r.a.createElement("div",{className:"input-text-icon-left"},r.a.createElement($,{src:a.left})),r.a.createElement("div",{className:"input-text-container active"},r.a.createElement("div",{className:"input-text"},c?r.a.createElement("div",{ref:d,className:"formatted-input-text"},r.a.createElement(ie.a,{"aria-label":n||"input-text-label",value:p,disabled:i,onChange:function(e){return m(e)},onBlur:function(e){return s(e)},placeholder:l,type:o,options:c})):r.a.createElement("input",{"aria-label":n||"input-text-label",ref:d,value:p,disabled:i,onChange:function(e){return m(e)},onBlur:function(e){return s(e)},placeholder:l,type:o}))),a&&a.right&&r.a.createElement("div",{className:"input-text-icon-right"},r.a.createElement($,{src:a.right}))),t&&r.a.createElement("div",{className:"input-text-error"},r.a.createElement("p",null,t)))},me=t(11),se=function(e){var n=Object(a.useState)(""),t=Object(m.a)(n,2),r=t[0],i=t[1],l=e.initialValues,o=e.formValidations,c=e.submit,u=function(e){var n=Object(a.useState)(e.initialValues),t=Object(m.a)(n,2),r=t[0],i=t[1],l=Object(J.a)({},r);Object.keys(l).map((function(e){l[e]={error:!1,errorText:""}}));var o=Object(a.useState)(Object(J.a)({},l)),c=Object(m.a)(o,2),u=c[0],s=c[1];return{values:r,errorValues:u,handleFieldEvent:function(n,t){i(Object(J.a)(Object(J.a)({},r),{},Object(me.a)({},t,n)));var a={error:!1,errorText:""},l=e.formValidations[t].find((function(e){return!e.method(n,t)}));l&&(a={error:!0,errorText:l.errorText}),s(Object(J.a)(Object(J.a)({},u),{},Object(me.a)({},t,a)))},forceErrorValues:function(e){s(e)},resetErrorValues:function(){var e=Object(J.a)({},r);Object.keys(e).map((function(n){e[n]={error:!1,errorText:""}})),s(e)},setAGroupOfValues:function(n){for(var t=Object.keys(n),a=Object(J.a)({},r),l=Object(J.a)({},u),o=e.formValidations,c=function(){var e=d[m];if(-1!==Object.keys(r).indexOf(e)){var t=n[e];a[e]=t;var i=o[e].find((function(n){return!n.method(t,e)}));i&&(l=Object(J.a)(Object(J.a)({},l),{},Object(me.a)({},e,{error:!0,errorText:i.errorText})))}},m=0,d=t;m<d.length;m++)c();i(a),s(l)}}}({initialValues:l,formValidations:o}),s=function(e){i(e)};return Object(J.a)(Object(J.a)({},u),{},{errorTextForm:r,onSubmit:function(){u.resetErrorValues(),function(){var n=e.formValidations,t=!0,a=u.values,r=Object(J.a)({},u.errorValues),i={error:!1,errorText:""},l=void 0;return Object.keys(a).map((function(e){i={error:!1,errorText:""},(l=n[e].find((function(n){return!n.method(a[e],e)})))&&(t=!1,i={error:!0,errorText:l.errorText}),r=Object(J.a)(Object(J.a)({},r),{},Object(me.a)({},e,i))})),u.forceErrorValues(r),t}()?c({values:u.values,errorValues:u.errorValues,changeErrorText:s}):i(e.defaultErrorValue||"Hemos encontrado algunos errores.")},changeErrorTextForm:s,setAGroupOfValues:u.setAGroupOfValues})},de=t(50),pe=(t(138),new de.Validator),he=function(e){return{tag:"REQUIRED",method:function(e,n){return!!e},errorText:(null===e||void 0===e?void 0:e.errorText)||"Required field"}},fe=function(e){return{tag:"REQUIRED",method:function(e,n){return pe.isEmail(e)},errorText:(null===e||void 0===e?void 0:e.errorText)||"Invalid email"}};function ve(){var e=Object(f.a)(["\n  .handle-values-form {\n    margin-bottom: 24px;\n\n    .handle-values-field {\n      margin-bottom: 16px;\n\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media screen and (min-width: ","px){ \n      margin-bottom: 32px;\n    }\n  }\n\n  .handle-values-buttons {\n    .fill-button {\n      width: 100%;\n      margin-bottom: 16px; \n\n      @media screen and (min-width: ","px){ \n        width: calc((100% - 16px) / 2);\n        margin-right: 16px; \n        margin-bottom: 0;\n      }\n    }\n\n    .submit-button {\n      width: 100%;\n      \n      button {\n        width: 100%; \n      }\n\n      @media screen and (min-width: ","px){ \n        width: calc((100% - 16px) / 2);\n      }\n    }\n\n    @media screen and (min-width: ","px){ \n      display: flex; \n      align-items: center; \n    }\n  }\n\n  \n"]);return ve=function(){return e},e}var xe=v.a.div(ve(),u,u,u,u),ge=he(),be={name:[ge],surname:[],email:[ge,fe()]},Ee=function(){var e=function(){var e=se({initialValues:{name:"",surname:"",email:""},formValidations:be,submit:function(e){console.log(e.values)}});return Object(J.a)(Object(J.a)({},e),{},{handleFillButton:function(){e.setAGroupOfValues({surname:"Example",email:"example@example.com"})}})}();return r.a.createElement(xe,null,r.a.createElement("form",{className:"handle-values-form",id:"handle-values-form",onSubmit:function(n){n.preventDefault(),e.onSubmit()}},r.a.createElement("div",{className:"handle-values-field"},r.a.createElement(ue,{label:"Name",placeholder:"Name",value:e.values.name,events:{onBlur:function(n){return e.handleFieldEvent(n.target.value,"name")}},errorText:e.errorValues.name.errorText})),r.a.createElement("div",{className:"handle-values-field"},r.a.createElement(ue,{label:"Surname",placeholder:"Surname",value:e.values.surname,events:{onBlur:function(n){return e.handleFieldEvent(n.target.value,"surname")}},errorText:e.errorValues.surname.errorText})),r.a.createElement("div",{className:"handle-values-field"},r.a.createElement(ue,{label:"Email",placeholder:"Email",value:e.values.email,events:{onBlur:function(n){return e.handleFieldEvent(n.target.value,"email")}},errorText:e.errorValues.email.errorText}))),r.a.createElement("div",{className:"handle-values-buttons"},r.a.createElement("div",{className:"fill-button"},r.a.createElement(ne,{id:"handle-values-button",role:"button",text:"Fill surname and email",height:"medium",type:"primary",color:{primary:T,secondary:O,text:O},onClick:function(n){n.preventDefault(),e.handleFillButton()}})),r.a.createElement("div",{className:"submit-button"},r.a.createElement("button",{form:"handle-values-form"},r.a.createElement(ne,{id:"handle-values-button",text:"Submit",height:"medium",type:"primary",color:{primary:O,secondary:T,text:T}})))))};function we(){var e=Object(f.a)(["\n  margin: 24px 16px;\n\n  .handle-values-wrapper {\n    width: 100%;\n\n    @media screen and (min-width: ","px){ \n      width: 60%;\n      max-width: 572px;\n      border: 1px solid ",";\n      border-radius: 16px;\n      padding: 24px;\n    }\n  }\n\n  .handle-values-title {\n    color: ",";\n    margin-bottom: 24px;\n\n    @media screen and (min-width: ","px){ \n      text-align: center; \n    }\n  }\n\n  .handle-values-description {\n    color: ",";\n    margin-bottom: 24px;\n\n    p {\n      margin-bottom: 8px; \n\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media screen and (min-width: ","px){ \n      text-align: center; \n\n      p {\n        margin-bottom: 16px;\n      }\n    }\n  }\n\n  @media screen and (min-width: ","px){ \n    margin: 64px 7%; \n    display: flex; \n    justify-content: center; \n  }\n"]);return we=function(){return e},e}var ye=v.a.div(we(),u,j,T,u,V,u,u),je=function(){return r.a.createElement(ye,null,r.a.createElement("div",{className:"handle-values-wrapper"},r.a.createElement(E,{className:"handle-values-title"},r.a.createElement("h1",null,"SetAGroupOfValues Form")),r.a.createElement(W,{className:"handle-values-description"},r.a.createElement("p",null,"In this form we are going to autocomplete using setAGroupOfValues. "),r.a.createElement("p",null,"This function is responsible for changing a group of values in the form."),r.a.createElement("p",null,"There's no need to pass the entire form object as a parameter, only the values you want to change.")),r.a.createElement("div",{className:"handle-values-form-container"},r.a.createElement(Ee,null))))};function Oe(){var e=Object(f.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 900;\n  background-color: ",";\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white; \n\n  @media screen and (min-width: ","px){ \n    height: 64px;\n    padding: 0 64px;\n    justify-content: flex-start;\n\n  }\n\n"]);return Oe=function(){return e},e}var Ne=v.a.div(Oe(),w,u),Ve=function(){var e=d({maxMobile:u}).platform;return r.a.createElement(Ne,null,"mobile"===e?r.a.createElement(E,{className:"main-header-logo"},r.a.createElement(o.b,{to:z},r.a.createElement("p",null,"Use Form"))):r.a.createElement(g,{className:"main-header-logo"},r.a.createElement(o.b,{to:z},r.a.createElement("p",null,"Use Form"))))};function Te(){var e=Object(f.a)(["\n  .main-content {\n    width: 100%;\n    padding-top: 56px;\n\n    @media screen and (min-width: ","px){ \n      padding-top: 80px;\n    }\n  }\n"]);return Te=function(){return e},e}var Ae=v.a.div(Te(),u),Fe=function(e){return r.a.createElement(Ae,null,r.a.createElement("header",{className:"main-header"},r.a.createElement(Ve,null)),r.a.createElement("main",{className:"main-content"},e.children))};function ke(){var e=Object(f.a)(["\n  .handle-value-form {\n    margin-bottom: 24px; \n\n    .handle-value-field {\n      margin-bottom: 16px; \n\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media screen and (min-width: ","px){ \n      margin-bottom: 32px;\n    }\n  }\n\n  .handle-value-button {\n    margin: 0 auto; \n    width: 100%;\n\n    button {\n      width: 100%;\n    }\n\n    @media screen and (min-width: ","px){ \n      margin: 0 auto; \n      width: 140px;\n    }\n  }\n"]);return ke=function(){return e},e}var Be=v.a.div(ke(),u,u),Ie=he(),Se={name:[Ie],surname:[],email:[Ie,fe()]},Ce=function(){var e=function(){var e=se({initialValues:{name:"",surname:"",email:""},formValidations:Se,submit:function(e){console.log(e.values)}});return Object(J.a)({},e)}();return r.a.createElement(Be,null,r.a.createElement("form",{className:"handle-value-form",id:"handle-value-form",onSubmit:function(n){n.preventDefault(),e.onSubmit()}},r.a.createElement("div",{className:"handle-value-field"},r.a.createElement(ue,{label:"Name",placeholder:"Name",value:e.values.name,events:{onBlur:function(n){return e.handleFieldEvent(n.target.value,"name")}},errorText:e.errorValues.name.errorText})),r.a.createElement("div",{className:"handle-value-field"},r.a.createElement(ue,{label:"Surname",placeholder:"Surname",value:e.values.surname,events:{onBlur:function(n){return e.handleFieldEvent(n.target.value,"surname")}},errorText:e.errorValues.surname.errorText})),r.a.createElement("div",{className:"handle-value-field"},r.a.createElement(ue,{label:"Email",placeholder:"Email",value:e.values.email,events:{onBlur:function(n){return e.handleFieldEvent(n.target.value,"email")}},errorText:e.errorValues.email.errorText}))),r.a.createElement("div",{className:"handle-value-button"},r.a.createElement("button",{form:"handle-value-form"},r.a.createElement(ne,{id:"handle-value-button",text:"Submit",height:"medium",type:"primary",color:{primary:O,secondary:T,text:T}}))))};function ze(){var e=Object(f.a)(["\n  margin: 24px 16px;\n\n  .handle-value-wrapper {\n    width: 100%; \n\n    @media screen and (min-width: ","px){ \n      width: 60%;\n      max-width: 572px;\n      border: 1px solid ",";\n      border-radius: 16px;\n      padding: 24px;\n    }\n  }\n\n  .handle-value-title {\n    color: ",";\n    margin-bottom: 24px;\n\n    @media screen and (min-width: ","px){ \n      text-align: center; \n    }\n  }\n\n  .handle-value-description {\n    color: ",";\n    margin-bottom: 24px;\n\n    p {\n      margin-bottom: 8px; \n\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media screen and (min-width: ","px){ \n      text-align: center; \n\n      p {\n        margin-bottom: 16px;\n      }\n    }\n  }\n\n  @media screen and (min-width: ","px){ \n    margin: 64px 7%; \n    display: flex; \n    justify-content: center; \n  }\n\n"]);return ze=function(){return e},e}var De=v.a.div(ze(),u,j,T,u,V,u,u),He=function(){return r.a.createElement(De,null,r.a.createElement("div",{className:"handle-value-wrapper"},r.a.createElement(E,{className:"handle-value-title"},r.a.createElement("h1",null,"HandleFieldValue Form")),r.a.createElement(W,{className:"handle-value-description"},r.a.createElement("p",null,"In this form we change the form state using the handleFieldEvent. "),r.a.createElement("p",null,"This function is responsible for changing a single value of the form."),r.a.createElement("p",null,"Using it multiple times in a single change event is not recomended, because, the form is going to change only the last value changed.")),r.a.createElement("div",{className:"handle-value-form-container"},r.a.createElement(Ce,null))))},Re=function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(o.a,null,r.a.createElement(Fe,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",element:r.a.createElement(G,null)}),r.a.createElement(c.a,{path:"handle-value",element:r.a.createElement(He,null)}),r.a.createElement(c.a,{path:"handle-values",element:r.a.createElement(je,null)})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,n,t){e.exports=t(139)},57:function(e,n,t){},58:function(e,n,t){}},[[52,1,2]]]);
//# sourceMappingURL=main.8551832f.chunk.js.map