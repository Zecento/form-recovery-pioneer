function waitForElement(e,t){return new Promise((n,o)=>{let l=!1;if(document.querySelectorAll(e).length)return n();let r=new MutationObserver(()=>{if(document.querySelectorAll(e).length)return r.disconnect(),!1!==l&&clearTimeout(l),n()});r.observe(document.body,{childList:!0,subtree:!0}),t&&(l=setTimeout(()=>{r.disconnect(),o()},t))})}function addRecoveryListeners(e,t){for(let n=0;n<e.length;n++)"hidden"!==e[n].type&&(e[n].addEventListener("change",function(){saveInput(e[n].id,t.document.getElementById(e[n].id).value,t)}),e[n].addEventListener("input",function(){saveInput(e[n].id,t.document.getElementById(e[n].id).value,t)}))}function saveInput(e,t,n){let o=JSON.parse(localStorage.getItem("formRecovery"));o||(o={});let l=e.split("_");if(3===l.length){let r=l[0]+"_"+l[1];for(let i in o)i.startsWith(r)&&delete o[i]}if("other"===l[0]){let s=l[1];for(let a in o)a.includes("input_"+s)&&delete o[a]}o[e]=t,localStorage.setItem("formRecovery",JSON.stringify(o))}function recoverForm(e){let t=JSON.parse(localStorage.getItem("formRecovery"));for(let n in t){let o=e.document.getElementById(n);o.value=t[n],("checkbox"===o.type||"radio"===o.type)&&(o.checked=!0);let l=n.split("_");if(3===l.length){let r=e.document.getElementById("label_"+n),i=l[0]+"_"+l[1],s=parseInt(l[2])-1,a=parseInt(l[2])+1,c="label_"+i+"_"+s.toString(),d="label_"+i+"_"+a.toString(),y=e.document.getElementById(c),u=e.document.getElementById(d);doesElementExist(r)&&(doesElementExist(y)&&y.click(),doesElementExist(u)&&u.click(),r.click())}if("other"===l[0]){let m=e.document.getElementById("label_"+n);if(doesElementExist(m)){let p=l[1].split("_")[0],g=e.document.getElementById("label_input_"+p.toString()+"_0");doesElementExist(g)&&g.click(),m.click()}}}requestTipOlostep()}function injectScriptHelper(e,t="text/javascript"){return new Promise(n=>{let o=document.createElement("script");o.src=e,o.async=!0,o.type=t,o.onload=()=>{n()},document.head.appendChild(o)})}function injectPayPalScript(){return new Promise(e=>{injectScriptHelper("https://www.paypal.com/sdk/js?client-id=AbLunAeGhfxvHfMW-9oIabJTWHK6nhL5zhOzVoSyRDGI7wNXezFFfORPRkt5tHSGniIgR7PAwhsjjzrW").then(()=>{e(!0)})})}function injectStripeScript(){return new Promise(e=>{injectScriptHelper("https://js.stripe.com/v3/").then(()=>{injectScriptHelper("https://unpkg.com/@power-elements/stripe-elements?module","module").then(()=>{e(!0)})})})}function requestTipOlostep(){window.innerWidth<768||getPreviousSnoozers().then(function(e){e.length>0||injectPayPalScript().then(function(e){injectStripeScript().then(function(t){e&&t&&showHtml("olostep-tip-request","olostep-tip-request").then(function(e){hookUpTippingJar(e)})})})})}function hookUpTippingJar(e,t=500,n="5",o="5,00"){setTimeout(()=>{e.querySelector("#alert-new-gb-zecento-v3").style.marginRight="0%"},700),e.getElementById("error-c-card").style.display="none",e.getElementById("change-text-donate").style.display="block",e.getElementById("back-change-amount").style.display="none",e.getElementById("1-click-not-enabled").style.display="block",e.getElementById("select-payment-method").style.display="none",e.getElementById("lock-icon-secure-transaction").style.display="block",e.getElementById("dismiss-notification-zc").style.display="block",e.getElementById("dismiss-notification-zc").onclick=function(){hideHtml("olostep-tip-request")},e.querySelector("#amount-100").onclick=function(){t=100,n="1,00",o="1",e.querySelector("#amount-dynamic-txt").innerText=n,e.querySelector("#amount-donation-small").innerText=o,handlePaypalElement(e,1)},e.querySelector("#amount-200").onclick=function(){t=200,n="2,00",o="2",e.querySelector("#amount-dynamic-txt").innerText=n,e.querySelector("#amount-donation-small").innerText=o,handlePaypalElement(e,2)},e.querySelector("#amount-500").onclick=function(){t=500,n="5,00",o="5",e.querySelector("#amount-dynamic-txt").innerText=n,e.querySelector("#amount-donation-small").innerText=o,handlePaypalElement(e,3)},e.querySelector("#amount-1000").onclick=function(){t=1e3,n="10,00",o="10",e.querySelector("#amount-dynamic-txt").innerText=n,e.querySelector("#amount-donation-small").innerText=o,handlePaypalElement(e,4)},e.getElementById("change-text-donate").textContent="Your form was recovered!",e.getElementById("text-before-amount-id").textContent="Maintaining and developing the formRecovery library is all done in my spare time. If you find it beneficial, please consider supporting me.",e.getElementById("currency-top-span").style.display="none",e.getElementById("amount-donation-small").style.display="none",e.getElementById("question-mark-span").style.display="none",e.getElementById("causa_txt").style.display="none",e.getElementById("info-window").style.display="none",e.getElementById("under-footer-txt-ch").textContent="powered by",e.getElementById("logo_window").src="https://www.olostep.com/images/Olo-500-%C3%97-250-px-1.svg",e.getElementById("logo_window").srcset="https://www.olostep.com/images/Olo-500-%C3%97-250-px-1.svg",e.getElementById("link_window").href="https://www.olostep.com/?src=widget-pioneer",e.getElementById("cta-i18n").textContent="Tip",e.getElementById("currency-string").textContent="USD",e.getElementById("currencySymbol-1").textContent="$",e.getElementById("currencySymbol-2").textContent="$",e.getElementById("currencySymbol-3").textContent="$",e.getElementById("currencySymbol-4").textContent="$",handlePaypalElement(e,3),e.getElementById("button-donate-amount").onclick=function(){showPaymentOptions(e,t,n,o)}}function showPaymentOptions(e,t,n,o){e.getElementById("change-text-donate").style.display="none",e.getElementById("back-change-amount").style.display="flex",e.getElementById("back-change-amount").onclick=function(){hookUpTippingJar(e,t,n,o)},e.getElementById("back-change-amount").onmouseover=function(){e.getElementById("copy-response").style.backgroundColor="#ececf1"},e.getElementById("back-change-amount").onmouseout=function(){e.getElementById("copy-response").style.backgroundColor="#fff"},e.getElementById("1-click-not-enabled").style.display="none",e.getElementById("select-payment-method").style.display="block",e.getElementById("cta-i18n").textContent="Confirm",e.getElementById("lock-icon-secure-transaction").style.display="none",e.getElementById("dismiss-notification-zc").style.display="none";let l=!1;e.getElementById("button-donate-amount").onclick=function(){l||(l=!0,e.getElementById("error-c-card").style.display="none",e.querySelector("#text-donation-secure").style.display="none",e.querySelector("#loader-donation-transit").style.display="block",e.querySelector("#id-reference-elements").createToken().then(function(n){n.error?(l=!1,e.getElementById("error-c-card").style.display="block",e.querySelector("#text-donation-secure").style.display="block",e.querySelector("#loader-donation-transit").style.display="none",e.getElementById("error-c-card").textContent=n.error.message):consumeToken(n.token.id,t,"usd").then(function(e){localStorage.setItem("donationResponse",JSON.stringify(e)),hideHtml("olostep-tip-request"),showDonationResult()})}).catch(function(t){l=!1,e.getElementById("error-c-card").style.display="block",e.querySelector("#text-donation-secure").style.display="block",e.querySelector("#loader-donation-transit").style.display="none",t.message&&(e.getElementById("error-c-card").textContent=t.message)}))}}async function consumeToken(e,t=500,n="usd"){return new Promise(async function(o){try{let l=!0;setTimeout(function(){l&&o({errorDonation:!0})},8e3),fetch(`https://esiqdwsjcx3t2xqeqaz7ftmyjq0rfqww.lambda-url.us-east-1.on.aws/?token=${e}&type=token_intent&amountToDonate=${t.toString()}&currency=${n}`).then(e=>e.json()).then(e=>{l=!1,o(e)}).catch(e=>{l=!1,o({errorDonation:!0})})}catch(r){o({errorDonation:!0})}})}function showDonationResult(){let e=localStorage.getItem("donationResponse");null===e&&(e='{"errorDonation":true}');let t=JSON.parse(e);showHtml("olostep-tip-result-modal","olostep-tip-result-modal").then(function(e){e.querySelector("#dismiss-notification-donation").onclick=function(){hideHtml("olostep-tip-result-modal")},localStorage.removeItem("donationResponse");let n={id:"snz_"+new Date().getTime().toString(),reason:"alreadyDonated",date:new Date().toISOString().slice(0,10),epoch:new Date().getTime(),url:window.location.href};e.querySelector("#change-logo-success").src="https://www.olostep.com/images/Olo-500-%C3%97-250-px-1.svg",e.querySelector("#link-pw-by").href="https://www.olostep.com/?src=widget-pioneer",t.hasOwnProperty("errorDonation")?t.errorDonation?(e.querySelector("#change-text-STATUS").textContent="Tip not processed",e.querySelector("#success-text-expl").style.display="none",e.querySelector("#issue-explanation").style.display="block",e.querySelector("#why-issue").textContent="We were unable to process your tip due to an error. If you would like to donate, you can do so using this link.",e.querySelector("#success-icon").style.display="none",e.querySelector("#issue-icon").style.display="flex",e.querySelector("#alert-donation-result").style.height="150px",e.querySelector("#alert-donation-result").style.maxHeight="150px",n.errorInDonation=!0):(e.querySelector("#change-text-STATUS").textContent="Thanks for you tip!",e.querySelector("#success-text-expl").style.display="block",e.querySelector("#success-text-expl").textContent="Your tip has been processed successfully. Thanks",e.querySelector("#issue-explanation").style.display="none",e.querySelector("#success-icon").style.display="block",e.querySelector("#issue-icon").style.display="none",e.querySelector("#alert-donation-result").style.height="110px",e.querySelector("#alert-donation-result").style.maxHeight="110px",n.errorInDonation=!1):(e.querySelector("#change-text-STATUS").textContent="Tip not processed",e.querySelector("#success-text-expl").style.display="none",e.querySelector("#issue-explanation").style.display="block",e.querySelector("#why-issue").textContent="We were unable to process your tip due to an error. If you would like to donate, you can do so using this link.",e.querySelector("#success-icon").style.display="none",e.querySelector("#issue-icon").style.display="flex",e.querySelector("#alert-donation-result").style.height="150px",e.querySelector("#alert-donation-result").style.maxHeight="150px",n.errorInDonation=!0),addSnoozer(n).then()})}function getPreviousSnoozers(){return new Promise(async e=>{let t=localStorage.getItem("snoozers");null===t&&(t="[]"),e(JSON.parse(t))})}function addSnoozer(e){return new Promise(async t=>{getPreviousSnoozers().then(function(n){n.push(e),localStorage.setItem("snoozers",JSON.stringify(n)),t(!0)})})}function doesElementExist(e){return null!=e}function generateRandomId(e){let t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=n.length;for(let l=0;l<e;l++)t+=n.charAt(Math.floor(Math.random()*o));return t}function payPalPurchaseUnits(e,t){let n="olostep-tip-pioneer-"+generateRandomId(6),o="Olostep Tip - Pioneer Apply page";return[{amount:{currency_code:t,value:e,breakdown:{item_total:{currency_code:t,value:e}}},items:[{name:o,description:o,unit_amount:{currency_code:t,value:e},quantity:1},],invoice_id:n,custom_id:n}]}function handlePaypalElement(e,t){doesElementExist(e.getElementById("paypal-iframe-biglietto1"))&&e.getElementById("paypal-iframe-biglietto1").remove(),doesElementExist(e.getElementById("paypal-iframe-biglietto2"))&&e.getElementById("paypal-iframe-biglietto2").remove(),doesElementExist(e.getElementById("paypal-iframe-biglietto3"))&&e.getElementById("paypal-iframe-biglietto3").remove(),doesElementExist(e.getElementById("paypal-iframe-biglietto4"))&&e.getElementById("paypal-iframe-biglietto4").remove(),doesElementExist(e.getElementById("smart-button-container"))&&e.getElementById("smart-button-container").remove();let n=document.createElement("div");n.style.textAlign="center",n.style.width="70%",n.id="smart-button-container",e.getElementById("attach-yourself-here").style.maxHeight="30px",e.getElementById("attach-yourself-here").style.paddingTop="15px",e.getElementById("attach-yourself-here").style.paddingBottom="10px",e.getElementById("attach-yourself-here").prepend(n);let o=document.createElement("div"),l="paypal-iframe-biglietto"+t.toString();o.id=l,e.getElementById("smart-button-container").appendChild(o);let r=5;switch(t){case 1:r=1;break;case 2:r=2;break;case 3:r=5;break;case 4:r=10}paypal.Buttons({style:{shape:"rect",color:"gold",layout:"horizontal",label:"paypal",tagline:!1},createOrder:function(e,t){return t.order.create({purchase_units:payPalPurchaseUnits(r,"USD")})},onApprove:function(e,t){return t.order.capture().then(function(e){e.errorDonation=!1,localStorage.setItem("donationResponse",JSON.stringify(e)),hideHtml("olostep-tip-request"),showDonationResult()})},onError:function(e){localStorage.setItem("donationResponse",JSON.stringify({errorDonation:!0})),hideHtml("olostep-tip-request"),showDonationResult()}}).render(document.querySelector("#olostep-tip-request").shadowRoot.querySelector("#"+l))}function showHtml(e,t){return new Promise(async function(n){let o;if(null==document.getElementById(e)){let l=document.createElement("div");l.id=e,document.body.insertBefore(l,document.body.firstChild),l.attachShadow({mode:"open"}),l.shadowRoot,l.shadowRoot.host,fetch("https://uploads-ssl.webflow.com/60e4d57eb3031f192c76493f/css/beta-testing.webflow.303cbf7b5.min.css").then(e=>e.text()).then(e=>{let o=document.createElement("style");o.innerHTML=e,l.shadowRoot.appendChild(o),fetch("https://hjygbf3ozyhb5fe2wibl6hljv40bwbxx.lambda-url.us-east-1.on.aws/?html="+t).then(e=>e.text()).then(e=>{let t=document.createElement("div");t.innerHTML=e,l.shadowRoot.appendChild(t),n(l.shadowRoot)})})}})}function hideHtml(e){let t=document.getElementById(e);null!=t&&t.remove()}(()=>{let e="#\\32 30866658454165";waitForElement(e).then(function(){setTimeout(()=>{let t=document.querySelector(e).contentWindow,n=t.document.getElementsByTagName("input"),o;n=[...n,...t.document.getElementsByTagName("textarea"),...t.document.getElementsByTagName("select")],"undefined"!=typeof Storage&&(localStorage.getItem("formRecovery")&&recoverForm(t),addRecoveryListeners(n,t))},1e3)})})();