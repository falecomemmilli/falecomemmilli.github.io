(window.webpackJsonp=window.webpackJsonp||[]).push([[45,19,24,29,32],{256:function(t,e,n){"use strict";n.r(e);var l={name:"Footer",data:function(){return{scrollBtn:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},scrollTop:function(){window.scrollTo(0,0)}}},o=n(42),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("a",{staticClass:"scroll-to-target scroll-to-top",style:"display: ".concat(t.scrollBtn?"inline":"none"),attrs:{href:"#","data-target":"html"},on:{click:t.scrollTop}},[e("i",{staticClass:"fa fa-angle-up"})])])}),[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"site-footer"},[e("div",{staticClass:"inner-container text-center"},[e("p",{staticClass:"site-footer__copy"},[t._v("© copyright 2023 by "),e("a",{attrs:{href:"#"}},[t._v("Emmilli.com.br")])])])])}],!1,null,"efaa78ee",null);e.default=component.exports;installComponents(component,{Footer:n(256).default})},257:function(t,e,n){"use strict";n.r(e);var l={name:"PageHeader",props:{title:{type:String}}},o=n(42),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"inner-banner"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"inner-banner__title"},[t._v(t._s(t.title))]),t._v(" "),e("ul",{staticClass:"list-unstyled thm-breadcrumb"},[e("li",[e("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",[t._v(t._s(t.title))])])])])}),[],!1,null,"6529fe7e",null);e.default=component.exports},258:function(t,e,n){"use strict";n.r(e);var l={name:"NavTwo",data:function(){return{sticky:!1,mobileToggle:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}}},o=n(42),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"topbar-two"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"topbar-two__logo"},[e("nuxt-link",{attrs:{to:"/index-2"}},[e("img",{attrs:{src:"/assets/images/logo-full-light.png",width:"177",alt:"Awesome Image"}})])],1),t._v(" "),t._m(1)])]),t._v(" "),e("header",{staticClass:"site-header site-header__header-one site-header__header-two"},[e("nav",{class:"navbar navbar-expand-lg navbar-light header-navigation stricky ".concat(t.sticky?"stricked-menu stricky-fixed":"")},[e("div",{staticClass:"container clearfix"},[e("div",{staticClass:"logo-box clearfix"},[e("button",{staticClass:"menu-toggler",attrs:{"data-target":".main-navigation"},on:{click:function(e){t.mobileToggle=!t.mobileToggle}}},[e("span",{staticClass:"fa fa-bars"})])]),t._v(" "),e("div",{class:"main-navigation ".concat(t.mobileToggle?"showen":""),style:"display: ".concat(t.mobileToggle?"block":"none")},[e("ul",{staticClass:"navigation-box"},[e("li",{staticClass:"current"},[e("nuxt-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("nuxt-link",{attrs:{to:"/"}},[t._v("Home 01")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/index-2"}},[t._v("Home 02")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"#"}},[t._v("Header Versions")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("nuxt-link",{attrs:{to:"/"}},[t._v("Header 01")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/index-2"}},[t._v("Header 02")])],1)])],1)])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("nuxt-link",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/history"}},[t._v("History")])],1)])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/donation"}},[t._v("Contribute")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("nuxt-link",{attrs:{to:"/donation"}},[t._v("Donations")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/volunteer"}},[t._v("Volunteer")])],1)])],1),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Pages")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("nuxt-link",{attrs:{to:"/event"}},[t._v("Events")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/event-details"}},[t._v("Event Details")])],1)])]),t._v(" "),e("li",[e("a",{attrs:{href:"#news"}},[t._v("News")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("nuxt-link",{attrs:{to:"/news"}},[t._v("News Page")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/news-details"}},[t._v("News Details")])],1)])]),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"topbar-two__left"},[e("a",{attrs:{href:"mailto:needhelp@potisen.com"}},[t._v("needhelp@potisen.com")]),t._v(" "),e("a",{attrs:{href:"tel:666-888-0000"}},[t._v("666 888 0000")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"topbar-two__social"},[e("a",{staticClass:"fa fa-twitter",attrs:{href:"#"}}),t._v(" "),e("a",{staticClass:"fa fa-facebook-square",attrs:{href:"#"}}),t._v(" "),e("a",{staticClass:"fa fa-pinterest-p",attrs:{href:"#"}}),t._v(" "),e("a",{staticClass:"fa fa-instagram",attrs:{href:"#"}})])}],!1,null,"3268250d",null);e.default=component.exports},275:function(t,e,n){"use strict";n.r(e);var l={name:"Donation"},o=n(42),component=Object(o.a)(l,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"contact-form-one donation-page"},[e("div",{staticClass:"container"},[e("form",{staticClass:"contact-form-one__form contact-form-validated"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-9"},[e("h3",{staticClass:"donation-page__title"},[t._v("Payment Info")]),t._v(" "),e("div",{staticClass:"donation-page__amount"},[e("div",{staticClass:"dropdown bootstrap-select"},[e("div",{staticClass:"btn dropdown-toggle btn-light",attrs:{"data-toggle":"dropdown",role:"button",title:"$"}},[e("div",{staticClass:"filter-option"},[e("div",{staticClass:"filter-option-inner"},[e("div",{staticClass:"filter-option-inner-inner"},[t._v("$")])])])]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("div",{staticClass:"inner show"},[e("ul",{staticClass:"dropdown-menu inner show"})])])]),t._v(" "),e("input",{attrs:{type:"text",name:"donation-money",value:".00"}})])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-5"},[e("h3",{staticClass:"donation-page__title"},[t._v("Payment Info")]),t._v(" "),e("div",{staticClass:"donation-page__payment-time"},[e("p",[e("input",{attrs:{type:"radio",id:"test1",name:"radio-group",checked:""}}),t._v(" "),e("label",{attrs:{for:"test1"}},[t._v("Online Payment")])]),t._v(" "),e("p",[e("input",{attrs:{type:"radio",id:"test2",name:"radio-group"}}),t._v(" "),e("label",{attrs:{for:"test2"}},[t._v("Offline Payment")])])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-9"},[e("h3",{staticClass:"donation-page__title"},[t._v("Personal Info")]),t._v(" "),e("div",{staticClass:"row low-gutters"},[e("div",{staticClass:"col-lg-6"},[e("input",{attrs:{type:"text",name:"fname",placeholder:"First Name"}})]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("input",{attrs:{type:"text",name:"lname",placeholder:"Last Name"}})]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("input",{attrs:{type:"text",name:"email",placeholder:"Email Address"}})]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("input",{attrs:{type:"text",name:"phone",placeholder:"Phone"}})]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("input",{attrs:{type:"text",name:"address",placeholder:"Address"}})]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("input",{attrs:{type:"text",name:"address",placeholder:"City"}})]),t._v(" "),e("div",{staticClass:"col-lg-12"},[e("textarea",{attrs:{name:"message",placeholder:"Describe Yourself"}}),t._v(" "),e("div",{staticClass:"text-left"},[e("button",{staticClass:"thm-btn contact-form-one__btn",attrs:{type:"submit"}},[t._v("Submit Donation")])])])])])])]),t._v(" "),e("div",{staticClass:"result"})])])}],!1,null,"cff242a8",null);e.default=component.exports},303:function(t,e,n){"use strict";n.r(e);var l=n(258),o=n(257),r=n(275),c=n(256),v={components:{NavTwo:l.default,PageHeader:o.default,Donation:r.default,Footer:c.default},head:function(){return{title:"Potisen | Donation"}}},d=n(42),component=Object(d.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("NavTwo"),t._v(" "),e("PageHeader",{attrs:{title:"Donation"}}),t._v(" "),e("Donation"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavTwo:n(258).default,PageHeader:n(257).default,Donation:n(275).default,Footer:n(256).default})}}]);