(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{259:function(t,n,o){var content=o(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(106).default)("26d5073b",content,!0,{sourceMap:!1})},260:function(t,n,o){"use strict";o.r(n);var e={name:"NavOne",data:function(){return{sticky:!1,mobileToggle:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}}},l=(o(261),o(42)),component=Object(l.a)(e,(function(){var t=this,n=t._self._c;return n("div",[n("header",{staticClass:"site-header site-header__header-one"},[n("nav",{class:"navbar navbar-expand-lg navbar-light header-navigation stricky ".concat(t.sticky?"stricked-menu stricky-fixed":"")},[n("div",{staticClass:"container clearfix"},[n("div",{staticClass:"logo-box clearfix"},[n("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("img",{staticClass:"main-logo",attrs:{src:"/assets/images/logo-dark.png",width:"177",alt:"Awesome Image"}})]),t._v(" "),n("button",{staticClass:"menu-toggler",attrs:{"data-target":".main-navigation"},on:{click:function(n){t.mobileToggle=!t.mobileToggle}}},[n("span",{staticClass:"fa fa-bars"})])],1),t._v(" "),n("div",{class:"main-navigation ".concat(t.mobileToggle?"showen":""),style:"display: ".concat(t.mobileToggle?"block":"none")},[n("ul",{staticClass:"navigation-box"},[n("li",{staticClass:"current"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Início")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/history"}},[t._v("Histórico")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contato")])],1)])]),t._v(" "),t._m(0)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"right-side-box"},[t("div",{staticClass:"header-social"},[t("a",{staticClass:"fa fa-whatsapp",attrs:{href:"https://api.whatsapp.com/send?phone=5548991640895"}}),this._v(" "),t("a",{staticClass:"fa fa-instagram",attrs:{href:"https://www.instagram.com/emmilli.adv/"}})])])}],!1,null,null,null);n.default=component.exports},261:function(t,n,o){"use strict";o(259)},262:function(t,n,o){var e=o(105)(!1);e.push([t.i,".header-navigation .navigation-box>li>.sub-menu,.header-navigation .navigation-box>li>.sub-menu>li>.sub-menu{display:block}",""]),t.exports=e}}]);