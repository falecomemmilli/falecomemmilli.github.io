(window.webpackJsonp=window.webpackJsonp||[]).push([[49,4,6,14,24,28,34],{256:function(t,e,o){"use strict";o.r(e);var n={name:"Footer",data:function(){return{scrollBtn:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},scrollTop:function(){window.scrollTo(0,0)}}},l=o(42),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("a",{staticClass:"scroll-to-target scroll-to-top",style:"display: ".concat(t.scrollBtn?"inline":"none"),attrs:{href:"#","data-target":"html"},on:{click:t.scrollTop}},[e("i",{staticClass:"fa fa-angle-up"})])])}),[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"site-footer"},[e("div",{staticClass:"inner-container text-center"},[e("p",{staticClass:"site-footer__copy"},[t._v("© copyright 2023 by "),e("a",{attrs:{href:"#"}},[t._v("Emmilli.com.br")])])])])}],!1,null,"efaa78ee",null);e.default=component.exports;installComponents(component,{Footer:o(256).default})},259:function(t,e,o){var content=o(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(106).default)("4d36184c",content,!0,{sourceMap:!1})},260:function(t,e,o){"use strict";o.r(e);var n={name:"NavOne",data:function(){return{sticky:!1,mobileToggle:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}}},l=(o(261),o(42)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("header",{staticClass:"site-header site-header__header-one"},[e("nav",{class:"navbar navbar-expand-lg navbar-light header-navigation stricky ".concat(t.sticky?"stricked-menu stricky-fixed":"")},[e("div",{staticClass:"container clearfix"},[e("div",{staticClass:"logo-box clearfix"},[e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("img",{staticClass:"main-logo",attrs:{src:"/assets/images/logo-dark.png",width:"177",alt:"Awesome Image"}})]),t._v(" "),e("button",{staticClass:"menu-toggler",attrs:{"data-target":".main-navigation"},on:{click:function(e){t.mobileToggle=!t.mobileToggle}}},[e("span",{staticClass:"fa fa-bars"})])],1),t._v(" "),e("div",{class:"main-navigation ".concat(t.mobileToggle?"showen":""),style:"display: ".concat(t.mobileToggle?"block":"none")},[e("ul",{staticClass:"navigation-box"},[e("li",{staticClass:"current"},[e("nuxt-link",{attrs:{to:"/"}},[t._v("Início")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/about"}},[t._v("Compliance")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("nuxt-link",{attrs:{to:"/about"}},[t._v("Sobre")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/history"}},[t._v("Historico")])],1)])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/contact"}},[t._v("Fale Conosco")])],1)])]),t._v(" "),t._m(1)])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"topbar-one"},[e("div",{staticClass:"container"},[e("div",{staticClass:"inner-container"},[e("div",{staticClass:"topbar-one__left"},[e("a",{attrs:{href:"mailto:dra.emmilli@gmail.com"}},[t._v("dra.emmilli@gmail.com")]),t._v(" "),e("a",{attrs:{href:"tel:048-99164-0895"}},[t._v("(48)99164-0895")])]),t._v(" "),e("div",{staticClass:"topbar-one__right"},[e("a",{attrs:{href:"https://api.whatsapp.com/send?phone=5548991640895"}},[e("i",{staticClass:"fa fa-user-o"}),t._v("Atendimento Online")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"right-side-box"},[e("div",{staticClass:"header-social"},[e("a",{staticClass:"fa fa-facebook-square",attrs:{href:"https://www.facebook.com/emmilli.cipriani/about"}}),t._v(" "),e("a",{staticClass:"fa fa-whatsapp",attrs:{href:"https://api.whatsapp.com/send?phone=5548991640895"}}),t._v(" "),e("a",{staticClass:"fa fa-instagram",attrs:{href:"https://www.instagram.com/advogadaemmilli/"}})])])}],!1,null,null,null);e.default=component.exports},261:function(t,e,o){"use strict";o(259)},262:function(t,e,o){var n=o(105)(!1);n.push([t.i,".header-navigation .navigation-box>li>.sub-menu,.header-navigation .navigation-box>li>.sub-menu>li>.sub-menu{display:block}",""]),t.exports=n},294:function(t,e,o){"use strict";o.r(e);var n={name:"SliderOne"},l=o(42),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"static-banner-one"},[t._m(0),t._v(" "),e("div",{staticClass:"container"},[e("vue-typed-js",{attrs:{loop:!0,strings:["ética","estratégia","justiça","eficiência"]}},[e("h2",{staticClass:"static-banner-one__title"},[t._v("\n        Aqui Trabalhamos "),e("br"),t._v("\n        Com "),e("span",{staticClass:"typed-effect typing"})])]),t._v(" "),e("p",{staticClass:"static-banner-one__text"},[t._v("Entre em contato via e-mail, ou utilize nossos canais de atendimento online.")]),t._v(" "),e("div",{staticClass:"mc-form__response"})],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"static-banner-one__bg"},[t("div",{staticClass:"static-banner-one__bg-inner",staticStyle:{"background-image":"url(assets/images/background/banner-bg-1-2.jpg)"}})])}],!1,null,"4e241fd0",null);e.default=component.exports},295:function(t,e,o){"use strict";o.r(e);var n={name:"AboutFour"},l=o(42),component=Object(l.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"about-four"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-4 col-lg-12"},[e("div",{staticClass:"about-four__content"},[e("div",{staticClass:"block-title text-left"},[e("p",{staticClass:"block-title__tag-line"},[t._v("Potisen Politics")]),t._v(" "),e("h2",{staticClass:"block-title__title"},[t._v("We can build "),e("br"),t._v(" better future "),e("br"),t._v(" together")])]),t._v(" "),e("ul",{staticClass:"list-unstyled about-four__list"},[e("li",[e("img",{attrs:{src:"assets/images/resources/menu-active-star.png",alt:"Awesome Image"}}),t._v("\n              Lorem ipsum is simply available.\n            ")]),t._v(" "),e("li",[e("img",{attrs:{src:"assets/images/resources/menu-active-star.png",alt:"Awesome Image"}}),t._v("\n              The majority have suffered alteration.\n            ")]),t._v(" "),e("li",[e("img",{attrs:{src:"assets/images/resources/menu-active-star.png",alt:"Awesome Image"}}),t._v("\n              Don't look even slightly.\n            ")]),t._v(" "),e("li",[e("img",{attrs:{src:"assets/images/resources/menu-active-star.png",alt:"Awesome Image"}}),t._v("\n              If you are going to use a passage.\n            ")]),t._v(" "),e("li",[e("img",{attrs:{src:"assets/images/resources/menu-active-star.png",alt:"Awesome Image"}}),t._v("\n              You need to sure there embarrassing.\n            ")])])])]),t._v(" "),e("div",{staticClass:"col-xl-8 col-lg-12"},[e("div",{staticClass:"row low-gutters"},[e("div",{staticClass:"col-md-6 wow fadeInUp",attrs:{"data-wow-duration":"1500ms"}},[e("div",{staticClass:"about-four__image"},[e("img",{staticClass:"img-fluid",attrs:{src:"assets/images/resources/about-1-1.jpg",alt:"Awesome Image"}}),t._v(" "),e("img",{staticClass:"about-four__sign",attrs:{src:"assets/images/resources/sign.png",alt:"Awesome Image"}})])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"about-four__box thm-base-bg-2 wow fadeInUp",attrs:{"data-wow-duration":"1500ms"}},[e("div",{staticClass:"about-four__box-top"},[e("i",{staticClass:"potisen-icon-poll"}),t._v(" "),e("h4",{staticClass:"about-four__box-title"},[t._v("Vote Status")])]),t._v(" "),e("p",{staticClass:"about-four__box-text"},[t._v("There are many variations of passages of Lorem Ipsum available, but the\n                majority have suffered alteration in some form, by injected humour or randomised.")]),t._v(" "),e("a",{staticClass:"thm-btn about-four__btn",attrs:{href:"#"}},[t._v("Learn More")])])])])])])])])}],!1,null,"bece670a",null);e.default=component.exports},296:function(t,e,o){"use strict";o.r(e);var n={name:"CampaignOne"},l=o(42),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"campaing-one"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",{staticClass:"campaing-one__more-text text-center"},[t._v("How we can build a better country together!. "),e("nuxt-link",{attrs:{to:"/donation"}},[t._v("Donate or Volunteer.")])],1)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"block-title text-center"},[e("img",{staticClass:"wow rotateIn",attrs:{src:"/assets/images/resources/sec-title-star.png",alt:"Awesome Image","data-wow-duration":"1500ms"}}),t._v(" "),e("p",{staticClass:"block-title__tag-line"},[t._v("Policy Positions")]),t._v(" "),e("h2",{staticClass:"block-title__title"},[t._v("Campaign Principles")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"column-5"},[e("div",{staticClass:"campaing-one__single"},[e("i",{staticClass:"potisen-icon-sprout"}),t._v(" "),e("h3",{staticClass:"campaing-one__title"},[e("a",{attrs:{href:"#"}},[t._v("Environment")])])])]),t._v(" "),e("div",{staticClass:"column-5"},[e("div",{staticClass:"campaing-one__single"},[e("i",{staticClass:"potisen-icon-care"}),t._v(" "),e("h3",{staticClass:"campaing-one__title"},[e("a",{attrs:{href:"#"}},[t._v("Healthcare")])])])]),t._v(" "),e("div",{staticClass:"column-5"},[e("div",{staticClass:"campaing-one__single"},[e("i",{staticClass:"potisen-icon-medal"}),t._v(" "),e("h3",{staticClass:"campaing-one__title"},[e("a",{attrs:{href:"#"}},[t._v("Tax Returns")])])])]),t._v(" "),e("div",{staticClass:"column-5"},[e("div",{staticClass:"campaing-one__single"},[e("i",{staticClass:"potisen-icon-idea"}),t._v(" "),e("h3",{staticClass:"campaing-one__title"},[e("a",{attrs:{href:"#"}},[t._v("Economy")])])])]),t._v(" "),e("div",{staticClass:"column-5"},[e("div",{staticClass:"campaing-one__single"},[e("i",{staticClass:"potisen-icon-mortarboard"}),t._v(" "),e("h3",{staticClass:"campaing-one__title"},[e("a",{attrs:{href:"#"}},[t._v("Education")])])])])])}],!1,null,"2c90302a",null);e.default=component.exports},298:function(t,e,o){"use strict";o.r(e);var n={name:"AboutThree"},l=o(42),component=Object(l.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"about-three thm-gray-bg"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"about-three__image"},[e("img",{attrs:{src:"/assets/images/resources/mission-vision.jpg",alt:"Awesome Image"}})])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"about-three__content"},[e("div",{staticClass:"block-title text-left"},[e("img",{staticClass:"wow rotateIn",attrs:{src:"/assets/images/resources/sec-title-star.png",alt:"Awesome Image","data-wow-duration":"1500ms"}}),t._v(" "),e("p",{staticClass:"block-title__tag-line"},[t._v("About Potisen")]),t._v(" "),e("h2",{staticClass:"block-title__title"},[t._v("Mission and Vision")])]),t._v(" "),e("div",{staticClass:"about-three__box-wrap"},[e("div",{staticClass:"about-three__box"},[e("i",{staticClass:"potisen-icon-bid"}),t._v(" "),e("h4",{staticClass:"about-three__box-title"},[t._v("Civil Rights "),e("br"),t._v(" Attorney")])]),t._v(" "),e("div",{staticClass:"about-three__box"},[e("i",{staticClass:"potisen-icon-work"}),t._v(" "),e("h4",{staticClass:"about-three__box-title"},[t._v("Majored in "),e("br"),t._v(" Political")])]),t._v(" "),e("div",{staticClass:"about-three__box"},[e("i",{staticClass:"potisen-icon-politics"}),t._v(" "),e("h4",{staticClass:"about-three__box-title"},[t._v("Political "),e("br"),t._v(" Solutions")])])]),t._v(" "),e("p",{staticClass:"about-three__text"},[t._v("There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.")]),t._v(" "),e("a",{staticClass:"thm-btn about-three__btn",attrs:{href:"#"}},[t._v("Learn More")])])])])])])}],!1,null,"2f23f1e6",null);e.default=component.exports},311:function(t,e,o){"use strict";o.r(e);var n=o(260),l=o(294),r=o(295),c=o(296),_=o(256),v={components:{NavOne:n.default,SliderOne:l.default,CampaignOne:c.default,Footer:_.default,AboutFour:r.default}},m=o(42),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("NavOne"),t._v(" "),e("SliderOne"),t._v(" "),e("AboutFour"),t._v(" "),e("AboutThree"),t._v(" "),e("CampaignOne"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavOne:o(260).default,SliderOne:o(294).default,AboutFour:o(295).default,AboutThree:o(298).default,CampaignOne:o(296).default,Footer:o(256).default})}}]);