(window.webpackJsonp=window.webpackJsonp||[]).push([[49,6,14,24,28,34],{256:function(t,e,n){"use strict";n.r(e);var o={name:"Footer",data:function(){return{scrollBtn:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},scrollTop:function(){window.scrollTo(0,0)}}},l=n(42),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("a",{staticClass:"scroll-to-target scroll-to-top",style:"display: ".concat(t.scrollBtn?"inline":"none"),attrs:{href:"#","data-target":"html"},on:{click:t.scrollTop}},[e("i",{staticClass:"fa fa-angle-up"})])])}),[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"site-footer"},[e("div",{staticClass:"inner-container text-center"},[e("p",{staticClass:"site-footer__copy"},[t._v(" EMMILLI CIPRIANI "),e("a",{attrs:{href:"#"}},[t._v("OAB/SC 56.736")])])])])}],!1,null,"2077590e",null);e.default=component.exports;installComponents(component,{Footer:n(256).default})},259:function(t,e,n){var content=n(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(106).default)("0ddd49c2",content,!0,{sourceMap:!1})},260:function(t,e,n){"use strict";n.r(e);var o={name:"NavOne",data:function(){return{sticky:!1,mobileToggle:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}}},l=(n(261),n(42)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"site-header site-header__header-one"},[e("nav",{class:"navbar navbar-expand-lg navbar-light header-navigation stricky ".concat(t.sticky?"stricked-menu stricky-fixed":"")},[e("div",{staticClass:"container clearfix"},[e("div",{staticClass:"logo-box clearfix"},[e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("img",{staticClass:"main-logo",attrs:{src:"/assets/images/logo-dark.png",width:"177",alt:"Awesome Image"}})]),t._v(" "),e("button",{staticClass:"menu-toggler",attrs:{"data-target":".main-navigation"},on:{click:function(e){t.mobileToggle=!t.mobileToggle}}},[e("span",{staticClass:"fa fa-bars"})])],1),t._v(" "),e("div",{class:"main-navigation ".concat(t.mobileToggle?"showen":""),style:"display: ".concat(t.mobileToggle?"block":"none")},[e("ul",{staticClass:"navigation-box"},[e("li",{staticClass:"current"},[e("nuxt-link",{attrs:{to:"/"}},[t._v("Início")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/history"}},[t._v("Histórico")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contato")])],1)])]),t._v(" "),t._m(0)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"right-side-box"},[t("div",{staticClass:"header-social"},[t("a",{staticClass:"fa fa-whatsapp",attrs:{href:"https://api.whatsapp.com/send?phone=5548991640895"}}),this._v(" "),t("a",{staticClass:"fa fa-instagram",attrs:{href:"https://www.instagram.com/advogadaemmilli/"}})])])}],!1,null,null,null);e.default=component.exports},261:function(t,e,n){"use strict";n(259)},262:function(t,e,n){var o=n(105)(!1);o.push([t.i,".header-navigation .navigation-box>li>.sub-menu,.header-navigation .navigation-box>li>.sub-menu>li>.sub-menu{display:block}",""]),t.exports=o},294:function(t,e,n){"use strict";n.r(e);var o={name:"SliderOne"},l=n(42),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"static-banner-one"},[t._m(0),t._v(" "),e("div",{staticClass:"container"},[e("vue-typed-js",{attrs:{loop:!0,strings:["ética","transparência","justiça","eficiência"]}},[e("h2",{staticClass:"static-banner-one__title"},[t._v("\n        Aqui o foco "),e("br"),t._v("\n        é "),e("span",{staticClass:"typed-effect typing"})])]),t._v(" "),e("p",{staticClass:"static-banner-one__text"},[t._v("Abaixo, informações sobre área de atuação, política e contato.")]),t._v(" "),e("div",{staticClass:"mc-form__response"})],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"static-banner-one__bg"},[t("div",{staticClass:"static-banner-one__bg-inner",staticStyle:{"background-image":"url(assets/images/background/banner-bg-1-2.jpg)"}})])}],!1,null,"0b903963",null);e.default=component.exports},295:function(t,e,n){"use strict";n.r(e);var o={name:"CampaignOne"},l=n(42),component=Object(l.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"campaing-one"},[e("div",{staticClass:"container"},[e("div",{staticClass:"block-title text-center"},[e("img",{staticClass:"wow rotateIn",attrs:{src:"/assets/images/resources/sec-title-star.png",alt:"Awesome Image","data-wow-duration":"1500ms"}}),t._v(" "),e("p",{staticClass:"block-title__tag-line"},[t._v("Segmentos")]),t._v(" "),e("h2",{staticClass:"block-title__title"},[t._v("Áreas de Atuação")])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"column-5"},[e("div",{staticClass:"campaing-one__single"},[e("i",{staticClass:"potisen-icon-politics"}),t._v(" "),e("h3",{staticClass:"campaing-one__title"},[e("a",{attrs:{href:"#"}},[t._v("Cível")])])])]),t._v(" "),e("div",{staticClass:"column-5"},[e("div",{staticClass:"campaing-one__single"},[e("i",{staticClass:"potisen-icon-work"}),t._v(" "),e("h3",{staticClass:"campaing-one__title"},[e("a",{attrs:{href:"#"}},[t._v("Trabalhista")])])])]),t._v(" "),e("div",{staticClass:"column-5"},[e("div",{staticClass:"campaing-one__single"},[e("i",{staticClass:"potisen-icon-bid"}),t._v(" "),e("h3",{staticClass:"campaing-one__title"},[e("a",{attrs:{href:"#"}},[t._v("inventários")])])])])]),t._v(" "),e("p",{staticClass:"campaing-one__more-text text-center"},[t._v("Vamos fazer a diferença! Entre em contato. "),e("a",{attrs:{href:"https://api.whatsapp.com/send?phone=5548991640895"}},[t._v("Whatsapp")])])])])}],!1,null,"bd46e510",null);e.default=component.exports},297:function(t,e,n){"use strict";n.r(e);var o={name:"AboutThree"},l=n(42),component=Object(l.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"about-three thm-gray-bg"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"about-three__image"},[e("img",{attrs:{src:"/assets/images/resources/mission-vision.jpg",alt:"Awesome Image"}})])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"about-three__content"},[e("div",{staticClass:"block-title text-left"},[e("img",{staticClass:"wow rotateIn",attrs:{src:"/assets/images/resources/sec-title-star.png",alt:"Awesome Image","data-wow-duration":"1500ms"}}),t._v(" "),e("p",{staticClass:"block-title__tag-line"},[t._v("About Potisen")]),t._v(" "),e("h2",{staticClass:"block-title__title"},[t._v("Mission and Vision")])]),t._v(" "),e("div",{staticClass:"about-three__box-wrap"},[e("div",{staticClass:"about-three__box"},[e("i",{staticClass:"potisen-icon-bid"}),t._v(" "),e("h4",{staticClass:"about-three__box-title"},[t._v("Civil Rights "),e("br"),t._v(" Attorney")])]),t._v(" "),e("div",{staticClass:"about-three__box"},[e("i",{staticClass:"potisen-icon-work"}),t._v(" "),e("h4",{staticClass:"about-three__box-title"},[t._v("Majored in "),e("br"),t._v(" Political")])]),t._v(" "),e("div",{staticClass:"about-three__box"},[e("i",{staticClass:"potisen-icon-politics"}),t._v(" "),e("h4",{staticClass:"about-three__box-title"},[t._v("Political "),e("br"),t._v(" Solutions")])])]),t._v(" "),e("p",{staticClass:"about-three__text"},[t._v("There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.")]),t._v(" "),e("a",{staticClass:"thm-btn about-three__btn",attrs:{href:"#"}},[t._v("Learn More")])])])])])])}],!1,null,"2f23f1e6",null);e.default=component.exports},310:function(t,e,n){"use strict";n.r(e);var o=n(260),l=n(294),c=n(295),r=n(256),_={components:{NavOne:o.default,SliderOne:l.default,CampaignOne:c.default,Footer:r.default}},v=n(42),component=Object(v.a)(_,(function(){var t=this,e=t._self._c;return e("div",[e("NavOne"),t._v(" "),e("SliderOne"),t._v(" "),e("AboutThree"),t._v(" "),e("CampaignOne"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavOne:n(260).default,SliderOne:n(294).default,AboutThree:n(297).default,CampaignOne:n(295).default,Footer:n(256).default})}}]);