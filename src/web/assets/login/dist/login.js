!function(){var t={881:function(){},84:function(t,e,i){var r=i(881);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals),(0,i(673).Z)("81d37080",r,!0,{})},673:function(t,e,i){"use strict";function r(t,e){for(var i=[],r={},n=0;n<e.length;n++){var s=e[n],a=s[0],o={id:t+":"+n,css:s[1],media:s[2],sourceMap:s[3]};r[a]?r[a].parts.push(o):i.push(r[a]={id:a,parts:[o]})}return i}i.d(e,{Z:function(){return m}});var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},a=n&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,h=!1,u=function(){},c=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(t,e,i,n){h=i,c=n||{};var a=r(t,e);return g(a),function(e){for(var i=[],n=0;n<a.length;n++){var o=a[n];(l=s[o.id]).refs--,i.push(l)}for(e?g(a=r(t,e)):a=[],n=0;n<i.length;n++){var l;if(0===(l=i[n]).refs){for(var h=0;h<l.parts.length;h++)l.parts[h]();delete s[l.id]}}}}function g(t){for(var e=0;e<t.length;e++){var i=t[e],r=s[i.id];if(r){r.refs++;for(var n=0;n<r.parts.length;n++)r.parts[n](i.parts[n]);for(;n<i.parts.length;n++)r.parts.push(v(i.parts[n]));r.parts.length>i.parts.length&&(r.parts.length=i.parts.length)}else{var a=[];for(n=0;n<i.parts.length;n++)a.push(v(i.parts[n]));s[i.id]={id:i.id,refs:1,parts:a}}}}function f(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function v(t){var e,i,r=document.querySelector("style["+d+'~="'+t.id+'"]');if(r){if(h)return u;r.parentNode.removeChild(r)}if(p){var n=l++;r=o||(o=f()),e=C.bind(null,r,n,!1),i=C.bind(null,r,n,!0)}else r=f(),e=y.bind(null,r),i=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else i()}}var $,b=($=[],function(t,e){return $[t]=e,$.filter(Boolean).join("\n")});function C(t,e,i,r){var n=i?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,n);else{var s=document.createTextNode(n),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}function y(t,e){var i=e.css,r=e.media,n=e.sourceMap;if(r&&t.setAttribute("media",r),c.ssrId&&t.setAttribute(d,e.id),n&&(i+="\n/*# sourceURL="+n.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}}},e={};function i(r){var n=e[r];if(void 0!==n)return n.exports;var s=e[r]={id:r,exports:{}};return t[r](s,s.exports,i),s.exports}i.d=function(t,e){for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};!function(){"use strict";i.r(r),i.d(r,{AuthenticationChainHandler:function(){return e},AuthenticationStep:function(){return n},EmailCodeStep:function(){return a},EmailStep:function(){return o},LoginForm:function(){return t},PasswordStep:function(){return l},VerificationCode:function(){return s},WebAuthnStep:function(){return h}}),i(84);class t{constructor(){this.disabled=!1,Craft.AuthenticationChainHandler=new e(this,(()=>({rememberMe:this.$rememberMe.find("input").prop("checked")}))),this.$pendingSpinner.length&&this.$loginForm.trigger("submit")}get $loginForm(){return $("#login-form")}get $errors(){return $("#login-errors")}get $messages(){return $("#login-messages")}get $spinner(){return $("#spinner")}get $pendingSpinner(){return $("#spinner-pending")}get $submit(){return $("#submit")}get $rememberMe(){return $("#remember-me-container")}get $username(){return $("#username-field input")}get $cancelRecover(){return $("#cancel-recover")}get $recoverAccount(){return $("#recover-account")}get canRememberUser(){return this.$loginForm.data("can-remember")}showError(t){this.clearErrors(),$('<p style="display: none;">'+t+"</p>").appendTo(this.$errors).velocity("fadeIn")}showMessage(t){this.clearMessages(),$('<p style="display: none;">'+t+"</p>").appendTo(this.$messages).velocity("fadeIn")}clearErrors(){this.$errors.empty()}clearMessages(){this.$messages.empty()}enableForm(){this.$submit.addClass("active"),this.$spinner.addClass("hidden"),this.$loginForm.fadeTo(100,1),this.disabled=!1}disableForm(){this.$submit.removeClass("active"),this.$spinner.removeClass("hidden"),this.$loginForm.fadeTo(100,.2),this.disabled=!0}isDisabled(){return this.disabled}showRememberMe(){this.canRememberUser&&(this.$loginForm.addClass("remember-me"),this.$rememberMe.removeClass("hidden"))}hideRememberMe(){this.$loginForm.removeClass("remember-me"),this.$rememberMe.addClass("hidden")}showSubmitButton(){this.$submit.removeClass("hidden")}hideSubmitButton(){this.$submit.addClass("hidden")}}class e{constructor(t,e){this.performAuthenticationEndpoint="authentication/perform-authentication",this.startAuthenticationEndpoint="authentication/start-authentication",this.recoverAccountEndpoint="users/send-password-reset-email",this.recoverAccount=!1,this.authenticationSteps={},this.loginForm=t,this.loginForm.$loginForm.on("submit",(i=>{let r=e?e():{};this.isExistingChain()||(r.loginName=t.$username.val()),this.handleFormSubmit(i,r),i.preventDefault()})),this.prepareForm()}get $alternatives(){return $("#alternative-types")}get $authenticationStep(){return $("#authentication-step")}get $restartAuthentication(){return $("#restart-authentication")}get $usernameField(){return $("#username-field")}get $recoveryButtons(){return $("#recover-account, #cancel-recover")}get $authenticationGreeting(){return $("#authentication-greeting")}get $recoveryMessage(){return $("#recovery-message")}prepareForm(){this.$alternatives.on("click","li",(t=>{this.switchStep($(t.target).attr("rel"))})),this.loginForm.canRememberUser&&(this.isExistingChain()?this.loginForm.hideRememberMe():this.loginForm.showRememberMe()),this.$restartAuthentication.on("click",this.restartAuthentication.bind(this)),this.$recoveryButtons.on("click",this.toggleRecoverAccountForm.bind(this))}resetAuthenticationControls(){this.$authenticationStep.empty().attr("rel",""),this.$authenticationGreeting.remove(),this.$usernameField.removeClass("hidden"),this.$recoveryMessage.addClass("hidden"),this.loginForm.showSubmitButton(),this.loginForm.showRememberMe(),this.hideAlternatives(),this.clearErrors(),this.recoverAccount&&(this.$recoveryButtons.toggleClass("hidden"),this.recoverAccount=!1)}registerAuthenticationStep(t,e){this.authenticationSteps[t]=e}restartAuthentication(t){this.resetAuthenticationControls(),t&&t.preventDefault()}toggleRecoverAccountForm(){if(this.recoverAccount=!this.recoverAccount,this.$recoveryButtons.toggleClass("hidden"),this.recoverAccount?this.$recoveryMessage.removeClass("hidden"):this.$recoveryMessage.addClass("hidden"),!this.isExistingChain())return;let t;this.$authenticationStep.attr("rel").length>0&&(t=this.authenticationSteps[this.$authenticationStep.attr("rel")]),this.recoverAccount?(this.$usernameField.removeClass("hidden"),this.$authenticationStep.addClass("hidden"),this.$alternatives.addClass("hidden"),null==t||t.cleanup()):(this.$usernameField.addClass("hidden"),this.$authenticationStep.removeClass("hidden"),this.$authenticationStep.attr("rel"),this.$alternatives.removeClass("hidden"),null==t||t.init())}performStep(t,e){Craft.postActionRequest(t,e,this.processResponse.bind(this))}switchStep(t){this.loginForm.isDisabled()||(this.loginForm.disableForm(),Craft.postActionRequest(this.performAuthenticationEndpoint,{stepType:t,switch:!0},this.processResponse.bind(this)))}processResponse(t,e){var i,r,n;if("success"==e){if(t.success&&(null===(i=t.returnUrl)||void 0===i?void 0:i.length))return void(window.location.href=t.returnUrl);{t.error&&(this.loginForm.showError(t.error),Garnish.shake(this.loginForm.$loginForm)),t.message&&this.loginForm.showMessage(t.message),t.passwordReset&&(t.error||(this.toggleRecoverAccountForm(),this.restartAuthentication())),t.alternatives&&Object.keys(t.alternatives).length>0?this.showAlternatives(t.alternatives):this.hideAlternatives(),t.stepType&&this.$authenticationStep.attr("rel",t.stepType),t.footHtml&&function(t){const e=t.match(/([^"']+\.js)/gm),i=Array.from(document.scripts).map((t=>t.getAttribute("src"))).filter((t=>t&&t.length>0));if(e){for(const t of e)if(!i.includes(t)){let e=document.createElement("script");e.setAttribute("src",t),document.body.appendChild(e)}}else Craft.appendFootHtml(t)}(t.footHtml);const e=t=>{this.authenticationSteps[t]&&this.authenticationSteps[t].init()};t.html&&(null===(r=this.currentStep)||void 0===r||r.cleanup(),this.$authenticationStep.html(t.html),e(t.stepType)),t.loginFormHtml&&(null===(n=this.currentStep)||void 0===n||n.cleanup(),this.loginForm.$loginForm.html(t.loginFormHtml),this.prepareForm(),e(t.stepType)),t.stepComplete&&this.loginForm.hideRememberMe()}}this.loginForm.enableForm()}showAlternatives(t){this.$alternatives.removeClass("hidden");const e=this.$alternatives.find("ul").empty();for(const[i,r]of Object.entries(t))e.append($(`<li rel="${i}">${r}</li>`))}hideAlternatives(){this.$alternatives.addClass("hidden"),this.$alternatives.find("ul").empty()}handleFormSubmit(t,e){this.invokeStepHandler(t,e)}async invokeStepHandler(t,e){try{let t;if(this.isExistingChain()){const i=this.$authenticationStep.attr("rel"),r=this.authenticationSteps[i];t=Object.assign(Object.assign({},await r.prepareData()),e),this.currentStep=r}else t=e;if(this.loginForm.isDisabled())return;this.loginForm.disableForm();const i=this.recoverAccount?this.recoverAccountEndpoint:this.isExistingChain()?this.performAuthenticationEndpoint:this.startAuthenticationEndpoint;this.performStep(i,t)}catch(t){this.loginForm.showError(t),this.loginForm.enableForm()}}isExistingChain(){return this.$authenticationStep.attr("rel").length>0}clearErrors(){this.loginForm.clearErrors()}}class n{constructor(t){this.validateOnInput=!1,this.stepType=t,Craft.AuthenticationChainHandler.registerAuthenticationStep(t,this),this.doInit()}get $loginForm(){return Craft.AuthenticationChainHandler.loginForm.$loginForm}get $submit(){return Craft.AuthenticationChainHandler.loginForm.$submit}doInit(){this.cleanup(),this.init()}onInput(t){this.validateOnInput&&!0===this.validate()&&Craft.AuthenticationChainHandler.clearErrors()}async prepareData(){const t=this.validate();if(!0!==t)throw this.validateOnInput=!0,t;this.validateOnInput=!1;let e=await this.returnFormData();return e.stepType=this.stepType,e}}class s extends n{constructor(t){super(t)}get $verificationCode(){return $("#verificationCode")}init(){this.$verificationCode.on("input",this.onInput.bind(this))}cleanup(){this.$verificationCode.off("input",this.onInput.bind(this))}validate(){return 0!==this.$verificationCode.val().length||Craft.t("app","Please enter a verification code")}returnFormData(){return{"verification-code":this.$verificationCode.val()}}}class a extends s{constructor(){super("craft\\authentication\\type\\mfa\\EmailCode")}}class o extends n{constructor(){super("craft\\authentication\\type\\Email")}get $inputField(){return $("#email")}init(){this.$inputField.on("input",this.onInput.bind(this))}cleanup(){this.$inputField.off("input",this.onInput.bind(this))}validate(){return 0!==this.$inputField.val().length||Craft.t("app","Please enter a valid email address")}returnFormData(){return{email:this.$inputField.val()}}}class l extends n{constructor(){super("craft\\authentication\\type\\Password"),this.passwordSelector="#password"}get $passwordField(){return $(this.passwordSelector)}init(){this.passwordInput=new Craft.PasswordInput(this.passwordSelector,{onToggleInput:t=>{this.$passwordField.off("input"),this.$passwordField.replaceWith(t),this.$passwordField.on("input",this.onInput.bind(this))}}),this.$passwordField.on("input",this.onInput.bind(this))}cleanup(){delete this.passwordInput,delete this.passwordInput,this.$passwordField.off("input",this.onInput.bind(this))}validate(){const t=this.$passwordField.val().length;return t<window.minPasswordLength?Craft.t("yii","{attribute} should contain at least {min, number} {min, plural, one{character} other{characters}}.",{attribute:Craft.t("app","Password"),min:window.minPasswordLength}):!(t>window.maxPasswordLength)||Craft.t("yii","{attribute} should contain at most {max, number} {max, plural, one{character} other{characters}}.",{attribute:Craft.t("app","Password"),max:window.maxPasswordLength})}returnFormData(){return{password:this.$passwordField.val()}}}class h extends n{constructor(){super("craft\\authentication\\type\\mfa\\WebAuthn")}get $button(){return $("#verify-webauthn")}validate(){return this.$button.addClass("hidden"),!0}init(){this.$loginForm.trigger("submit"),this.$button.on("click",this.onButtonClick.bind(this)),this.$submit.addClass("hidden")}cleanup(){this.$button.off("click",this.onButtonClick.bind(this)),this.$submit.removeClass("hidden")}onButtonClick(){this.$loginForm.trigger("submit")}async returnFormData(){const t=this.$button.data("request-options"),e=Object.assign({},t);t.allowCredentials&&(e.allowCredentials=[...t.allowCredentials]),e.challenge=atob(e.challenge.replace(/-/g,"+").replace(/_/g,"/")),e.challenge=Uint8Array.from(e.challenge,(t=>t.charCodeAt(0)));for(const t in e.allowCredentials){let i=e.allowCredentials[t];e.allowCredentials[t]={id:Uint8Array.from(atob(i.id.replace(/-/g,"+").replace(/_/g,"/")),(t=>t.charCodeAt(0))),type:i.type}}let i;try{i=await navigator.credentials.get({publicKey:e})}catch(t){throw this.$button.removeClass("hidden"),Craft.t("app","Failed to authenticate")}const r=i.response;return{credentialResponse:{id:i.id,rawId:i.id,response:{authenticatorData:btoa(String.fromCharCode(...new Uint8Array(r.authenticatorData))),clientDataJSON:btoa(String.fromCharCode(...new Uint8Array(r.clientDataJSON))),signature:btoa(String.fromCharCode(...new Uint8Array(r.signature))),userHandle:r.userHandle?btoa(String.fromCharCode(...new Uint8Array(r.userHandle))):null},type:i.type}}}}}();var n=Craft="undefined"==typeof Craft?{}:Craft;for(var s in r)n[s]=r[s];r.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})}();
//# sourceMappingURL=Login.js.map