(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{259:function(t,n,o){var content=o(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(106).default)("c148dc04",content,!0,{sourceMap:!1})},260:function(t,n,o){"use strict";o.r(n);var e={name:"NavOne",data:function(){return{sticky:!1,mobileToggle:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}}},l=(o(261),o(42)),component=Object(l.a)(e,(function(){var t=this,n=t._self._c;return n("div",[t._m(0),t._v(" "),n("header",{staticClass:"site-header site-header__header-one"},[n("nav",{class:"navbar navbar-expand-lg navbar-light header-navigation stricky ".concat(t.sticky?"stricked-menu stricky-fixed":"")},[n("div",{staticClass:"container clearfix"},[n("div",{staticClass:"logo-box clearfix"},[n("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("img",{staticClass:"main-logo",attrs:{src:"/assets/images/logo-dark.png",width:"177",alt:"Awesome Image"}})]),t._v(" "),n("button",{staticClass:"menu-toggler",attrs:{"data-target":".main-navigation"},on:{click:function(n){t.mobileToggle=!t.mobileToggle}}},[n("span",{staticClass:"fa fa-bars"})])],1),t._v(" "),n("div",{class:"main-navigation ".concat(t.mobileToggle?"showen":""),style:"display: ".concat(t.mobileToggle?"block":"none")},[n("ul",{staticClass:"navigation-box"},[n("li",{staticClass:"current"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Início")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/about"}},[t._v("Compliance")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/about"}},[t._v("Sobre")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/history"}},[t._v("Historico")])],1)])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/contact"}},[t._v("Fale Conosco")])],1)])]),t._v(" "),t._m(1)])])])])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"topbar-one"},[n("div",{staticClass:"container"},[n("div",{staticClass:"inner-container"},[n("div",{staticClass:"topbar-one__left"},[n("a",{attrs:{href:"mailto:emmicipri@gmail.com"}},[t._v("dra.emmilli@gmail.com")]),t._v(" "),n("a",{attrs:{href:"tel:048-99164-0895"}},[t._v("(48)99164-0895")])]),t._v(" "),n("div",{staticClass:"topbar-one__right"},[n("a",{attrs:{href:"https://api.whatsapp.com/send?phone=5548991640895"}},[n("i",{staticClass:"fa fa-user-o"}),t._v("Atendimento Online")])])])])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"right-side-box"},[n("div",{staticClass:"header-social"},[n("a",{staticClass:"fa fa-facebook-square",attrs:{href:"https://www.facebook.com/emmilli.cipriani/about"}}),t._v(" "),n("a",{staticClass:"fa fa-whatsapp",attrs:{href:"https://api.whatsapp.com/send?phone=5548991640895"}}),t._v(" "),n("a",{staticClass:"fa fa-instagram",attrs:{href:"https://www.instagram.com/realce.personalizados/"}})])])}],!1,null,null,null);n.default=component.exports},261:function(t,n,o){"use strict";o(259)},262:function(t,n,o){var e=o(105)(!1);e.push([t.i,".header-navigation .navigation-box>li>.sub-menu,.header-navigation .navigation-box>li>.sub-menu>li>.sub-menu{display:block}",""]),t.exports=e}}]);