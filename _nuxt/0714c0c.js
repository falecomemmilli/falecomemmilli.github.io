(window.webpackJsonp=window.webpackJsonp||[]).push([[48,11,24,27,28,32],{256:function(t,e,n){"use strict";n.r(e);var o={name:"Footer",data:function(){return{scrollBtn:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},scrollTop:function(){window.scrollTo(0,0)}}},l=n(42),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("a",{staticClass:"scroll-to-target scroll-to-top",style:"display: ".concat(t.scrollBtn?"inline":"none"),attrs:{href:"#","data-target":"html"},on:{click:t.scrollTop}},[e("i",{staticClass:"fa fa-angle-up"})])])}),[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"site-footer"},[e("div",{staticClass:"inner-container text-center"},[e("p",{staticClass:"site-footer__copy"},[t._v(" EMMILLI MANGILI CIPRIANI "),e("a",{attrs:{href:"#"}},[t._v("OAB/SC 56.736")])])])])}],!1,null,"3185b675",null);e.default=component.exports;installComponents(component,{Footer:n(256).default})},257:function(t,e,n){"use strict";n.r(e);var o={name:"PageHeader",props:{title:{type:String}}},l=n(42),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"inner-banner"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"inner-banner__title"},[t._v(t._s(t.title))]),t._v(" "),e("ul",{staticClass:"list-unstyled thm-breadcrumb"},[e("li",[e("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",[t._v(t._s(t.title))])])])])}),[],!1,null,"6529fe7e",null);e.default=component.exports},259:function(t,e,n){var content=n(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(106).default)("26d5073b",content,!0,{sourceMap:!1})},260:function(t,e,n){"use strict";n.r(e);var o={name:"NavOne",data:function(){return{sticky:!1,mobileToggle:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}}},l=(n(261),n(42)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"site-header site-header__header-one"},[e("nav",{class:"navbar navbar-expand-lg navbar-light header-navigation stricky ".concat(t.sticky?"stricked-menu stricky-fixed":"")},[e("div",{staticClass:"container clearfix"},[e("div",{staticClass:"logo-box clearfix"},[e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("img",{staticClass:"main-logo",attrs:{src:"/assets/images/logo-dark.png",width:"177",alt:"Awesome Image"}})]),t._v(" "),e("button",{staticClass:"menu-toggler",attrs:{"data-target":".main-navigation"},on:{click:function(e){t.mobileToggle=!t.mobileToggle}}},[e("span",{staticClass:"fa fa-bars"})])],1),t._v(" "),e("div",{class:"main-navigation ".concat(t.mobileToggle?"showen":""),style:"display: ".concat(t.mobileToggle?"block":"none")},[e("ul",{staticClass:"navigation-box"},[e("li",{staticClass:"current"},[e("nuxt-link",{attrs:{to:"/"}},[t._v("Início")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/history"}},[t._v("Histórico")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contato")])],1)])]),t._v(" "),t._m(0)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"right-side-box"},[t("div",{staticClass:"header-social"},[t("a",{staticClass:"fa fa-whatsapp",attrs:{href:"https://api.whatsapp.com/send?phone=5548991640895"}}),this._v(" "),t("a",{staticClass:"fa fa-instagram",attrs:{href:"https://www.instagram.com/emmilli.adv/"}})])])}],!1,null,null,null);e.default=component.exports},261:function(t,e,n){"use strict";n(259)},262:function(t,e,n){var o=n(105)(!1);o.push([t.i,".header-navigation .navigation-box>li>.sub-menu,.header-navigation .navigation-box>li>.sub-menu>li>.sub-menu{display:block}",""]),t.exports=o},263:function(t,e,n){"use strict";n.r(e);var o={name:"CallToActionOne"},l=n(42),component=Object(l.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"cta-one"},[e("div",{staticClass:"container"},[e("h3",{staticClass:"cta-one__title"},[t._v("Atendimento online, Entre em contato.")]),t._v(" "),e("div",{staticClass:"cta-one__button-block"},[e("a",{staticClass:"thm-btn cta-one__btn",attrs:{href:"https://api.whatsapp.com/send?phone=5548991640895"}},[t._v("Whatsapp")])])])])}],!1,null,"31fcef6e",null);e.default=component.exports},279:function(t,e,n){"use strict";n.r(e);var o={name:"History"},l=n(42),component=Object(l.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"history-one"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"history-one__single wow fadeInUp animated",staticStyle:{visibility:"visible","animation-name":"fadeInUp"}},[e("div",{staticClass:"history-one__image"},[e("div",{staticClass:"history-one__image-inner"},[e("img",{attrs:{alt:"",src:"/assets/images/resources/history-1-1.jpg"}})])]),t._v(" "),e("div",{staticClass:"history-one__content"},[e("h3",{staticClass:"history-one__title"},[e("span",{staticClass:"history-one__year"},[t._v("2015")]),t._v("\n              Formação\n            ")]),t._v(" "),e("p",{staticClass:"history-one__text"},[t._v("Graduada em Direito pela Universidade do Extremo Sul Catarinense - UNESC. Advogada registrada na Ordem dos Advogados do Brasil - Seccional de Santa Catarina, sob o nº 56.736. ")])])]),t._v(" "),e("div",{staticClass:"history-one__single wow fadeInUp animated",staticStyle:{visibility:"visible","animation-name":"fadeInUp"}},[e("div",{staticClass:"history-one__image"},[e("div",{staticClass:"history-one__image-inner"},[e("img",{attrs:{alt:"",src:"/assets/images/resources/history-1-2.jpg"}})])]),t._v(" "),e("div",{staticClass:"history-one__content"},[e("h3",{staticClass:"history-one__title"},[t._v("\n              Experiências\n            ")]),t._v(" "),e("p",{staticClass:"history-one__text"},[t._v("Atuação em Procuradoria Municipal, com ênfase nas áreas cível, tributária e trabalhista. Amplo conhecimento em direito imobiliário, obtido através de experiência em Cartório de Registro de Imóveis. ")])])])])])])])}],!1,null,"f6bdfb2c",null);e.default=component.exports},305:function(t,e,n){"use strict";n.r(e);var o=n(260),l=n(257),r=n(279),c=n(263),d=n(256),v={components:{NavOne:o.default,PageHeader:l.default,History:r.default,CallToActionOne:c.default,Footer:d.default},head:function(){return{title:"Dra Emmilli Cipriani - Advocacia e Consultoria Juridica"}}},_=n(42),component=Object(_.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("NavOne"),t._v(" "),e("PageHeader",{attrs:{title:"Histórico"}}),t._v(" "),e("History"),t._v(" "),e("CallToActionOne"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavOne:n(260).default,PageHeader:n(257).default,History:n(279).default,CallToActionOne:n(263).default,Footer:n(256).default})}}]);