(window.webpackJsonp=window.webpackJsonp||[]).push([[43,5,7,24,28,32],{256:function(t,e,n){"use strict";n.r(e);var o={name:"Footer",data:function(){return{scrollBtn:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},scrollTop:function(){window.scrollTo(0,0)}}},l=n(42),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("a",{staticClass:"scroll-to-target scroll-to-top",style:"display: ".concat(t.scrollBtn?"inline":"none"),attrs:{href:"#","data-target":"html"},on:{click:t.scrollTop}},[e("i",{staticClass:"fa fa-angle-up"})])])}),[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"site-footer"},[e("div",{staticClass:"inner-container text-center"},[e("p",{staticClass:"site-footer__copy"},[t._v(" EMMILLI MANGILI CIPRIANI "),e("a",{attrs:{href:"#"}},[t._v("OAB/SC 56.736")])])])])}],!1,null,"3185b675",null);e.default=component.exports;installComponents(component,{Footer:n(256).default})},257:function(t,e,n){"use strict";n.r(e);var o={name:"PageHeader",props:{title:{type:String}}},l=n(42),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"inner-banner"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"inner-banner__title"},[t._v(t._s(t.title))]),t._v(" "),e("ul",{staticClass:"list-unstyled thm-breadcrumb"},[e("li",[e("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",[t._v(t._s(t.title))])])])])}),[],!1,null,"6529fe7e",null);e.default=component.exports},259:function(t,e,n){var content=n(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(106).default)("26d5073b",content,!0,{sourceMap:!1})},260:function(t,e,n){"use strict";n.r(e);var o={name:"NavOne",data:function(){return{sticky:!1,mobileToggle:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}}},l=(n(261),n(42)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"site-header site-header__header-one"},[e("nav",{class:"navbar navbar-expand-lg navbar-light header-navigation stricky ".concat(t.sticky?"stricked-menu stricky-fixed":"")},[e("div",{staticClass:"container clearfix"},[e("div",{staticClass:"logo-box clearfix"},[e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("img",{staticClass:"main-logo",attrs:{src:"/assets/images/logo-dark.png",width:"177",alt:"Awesome Image"}})]),t._v(" "),e("button",{staticClass:"menu-toggler",attrs:{"data-target":".main-navigation"},on:{click:function(e){t.mobileToggle=!t.mobileToggle}}},[e("span",{staticClass:"fa fa-bars"})])],1),t._v(" "),e("div",{class:"main-navigation ".concat(t.mobileToggle?"showen":""),style:"display: ".concat(t.mobileToggle?"block":"none")},[e("ul",{staticClass:"navigation-box"},[e("li",{staticClass:"current"},[e("nuxt-link",{attrs:{to:"/"}},[t._v("Início")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/history"}},[t._v("Histórico")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contato")])],1)])]),t._v(" "),t._m(0)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"right-side-box"},[t("div",{staticClass:"header-social"},[t("a",{staticClass:"fa fa-whatsapp",attrs:{href:"https://api.whatsapp.com/send?phone=5548991640895"}}),this._v(" "),t("a",{staticClass:"fa fa-instagram",attrs:{href:"https://www.instagram.com/emmilli.adv/"}})])])}],!1,null,null,null);e.default=component.exports},261:function(t,e,n){"use strict";n(259)},262:function(t,e,n){var o=n(105)(!1);o.push([t.i,".header-navigation .navigation-box>li>.sub-menu,.header-navigation .navigation-box>li>.sub-menu>li>.sub-menu{display:block}",""]),t.exports=o},264:function(t,e,n){var content=n(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(106).default)("6c64f0ac",content,!0,{sourceMap:!1})},270:function(t,e,n){"use strict";n(264)},271:function(t,e,n){var o=n(105)(!1);o.push([t.i,'.ac[data-v-19d1347a]{margin-top:10px;padding:10px;background:#eef1f6;box-sizing:border-box}.ac>.ac-q[data-v-19d1347a]{font:700 15px Oswald,sans-serif;padding:10px 30px 10px 10px;text-decoration:none;display:block;cursor:pointer;position:relative;margin:0;color:#192437;font-size:16px;font-weight:400;text-transform:uppercase}.ac.is-active .ac-q[data-v-19d1347a]{color:#daa520!important}.ac>.ac-q[data-v-19d1347a]:after{content:"+";text-align:center;width:15px;right:10px;top:50%;transform:translateY(-50%);position:absolute}.ac>.ac-a[data-v-19d1347a]{overflow:hidden;transition-property:all;transition-timing-function:ease}.ac>.ac-a p[data-v-19d1347a]{margin:0;padding:10px;color:#545764;font-size:16px;line-height:30px;font-weight:300}.ac.js-enabled>.ac-a[data-v-19d1347a]{visibility:hidden}.ac.is-active>.ac-a[data-v-19d1347a]{visibility:visible}.ac.is-active>.ac-q[data-v-19d1347a]:after{content:"\\2013";color:#daa520}',""]),t.exports=o},272:function(t,e,n){"use strict";n.r(e);var o={name:"AboutOne"},l=n(42),component=Object(l.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"thm-gray-bg about-one"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 wow fadeInUp",attrs:{"data-wow-duration":"1500ms"}},[e("img",{attrs:{src:"/assets/images/resources/gallery-1-1.png",alt:""}})]),t._v(" "),e("div",{staticClass:"col-lg-6 wow fadeInUp",attrs:{"data-wow-duration":"1500ms"}},[e("img",{attrs:{src:"/assets/images/resources/gallery-1-2.png",alt:"Awesome Image"}})])]),t._v(" "),e("div",{staticClass:"block-title text-center"},[e("img",{staticClass:"wow rotateIn",attrs:{src:"/assets/images/resources/sec-title-star.png",alt:"Awesome Image","data-wow-duration":"1500ms"}}),t._v(" "),e("p",{staticClass:"block-title__tag-line"},[t._v("About Potisen")]),t._v(" "),e("h2",{staticClass:"block-title__title"},[t._v("Get to Know Potisen")])]),t._v(" "),e("p",{staticClass:"about-one__text text-center m-0"},[t._v("There are many variations of passages of available but the majority have suffered alteration in some "),e("br"),t._v(" form, by injected humou or randomised words. Proin ac lobortis arcu, a vestibulum aug ipsum neque, "),e("br"),t._v(" facilisis vel mollis vitae. Quisque aliquam dictum condim.")])])])}],!1,null,"5e491dbd",null);e.default=component.exports},273:function(t,e,n){"use strict";n.r(e);var o={name:"AboutTwo",mounted:function(){new Accordion(".accordion-container-one")}},l=(n(270),n(42)),component=Object(l.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"about-two"},[e("div",{staticClass:"container"},[e("div",{staticClass:"block-title text-center"},[e("img",{staticClass:"wow rotateIn",attrs:{src:"/assets/images/resources/sec-title-star.png",alt:"Awesome Image","data-wow-duration":"1500ms"}}),t._v(" "),e("p",{staticClass:"block-title__tag-line"},[t._v("Join Campaigns")]),t._v(" "),e("h2",{staticClass:"block-title__title"},[t._v("We Will Make "),e("br"),t._v(" History Together")])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"about-two__content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[e("img",{staticClass:"img-fluid",attrs:{src:"/assets/images/resources/history-1-1.jpg",alt:""}})]),t._v(" "),e("div",{staticClass:"col-sm-4"},[e("img",{staticClass:"img-fluid",attrs:{src:"/assets/images/resources/history-1-2.jpg",alt:""}})]),t._v(" "),e("div",{staticClass:"col-sm-4"},[e("img",{staticClass:"img-fluid",attrs:{src:"/assets/images/resources/history-1-3.jpg",alt:""}})])]),t._v(" "),e("p",{staticClass:"about-two__text"},[t._v("Lorem Ipsum is simply dummy text of the printing and type setting industry has\n            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of\n            type and scrambled to make a type specimen book. It has survived not only five centuries but also the leap\n            into electronic type setting.")])])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"accrodion-grp",attrs:{"data-grp-name":"faq-accrodion"}},[e("div",{staticClass:"accordion-container-one"},[e("div",{staticClass:"ac"},[e("h2",{staticClass:"ac-q accordion__title-text",attrs:{tabIndex:"0"}},[t._v("Political organization that typically seeks")]),t._v(" "),e("div",{staticClass:"ac-a accordion__content"},[e("p",{staticClass:"accordion__content-desc"},[t._v("It has survived not only five centuries but also the leap into\n                  electronic type setting. when an\n                  unknown printer took a galley of type and scrambled to make a type specimen book.\n                ")])])]),t._v(" "),e("div",{staticClass:"ac accordion__content"},[e("h2",{staticClass:"ac-q accordion__title-text",attrs:{tabIndex:"0"}},[t._v("Strong politics plan require experience")]),t._v(" "),e("div",{staticClass:"ac-a"},[e("p",{staticClass:"accordion__content-desc"},[t._v("It has survived not only five centuries but also the leap into\n                  electronic type setting. when an\n                  unknown printer took a galley of type and scrambled to make a type specimen book.\n                ")])])]),t._v(" "),e("div",{staticClass:"ac"},[e("h2",{staticClass:"ac-q accordion__title-text",attrs:{tabIndex:"0"}},[t._v("Attract and retain quality high paying customers")]),t._v(" "),e("div",{staticClass:"ac-a accordion__content"},[e("p",{staticClass:"accordion__content-desc"},[t._v("It has survived not only five centuries but also the leap into\n                  electronic type setting. when an\n                  unknown printer took a galley of type and scrambled to make a type specimen book.\n                ")])])])])])])])])])}],!1,null,"19d1347a",null);e.default=component.exports},300:function(t,e,n){"use strict";n.r(e);var o=n(260),l=n(257),c=n(256),r=n(272),d=n(273),v={components:{AboutOne:r.default,NavOne:o.default,PageHeader:l.default,AboutTwo:d.default,Footer:c.default},head:function(){return{title:"Dra Emmilli M. Cipriani - Advocacia e Consultoria Juridica"}}},_=n(42),component=Object(_.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("NavOne"),t._v(" "),e("PageHeader",{attrs:{title:"Sobre"}}),t._v(" "),e("AboutOne"),t._v(" "),e("AboutTwo"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavOne:n(260).default,PageHeader:n(257).default,AboutOne:n(272).default,AboutTwo:n(273).default,Footer:n(256).default})}}]);