webpackJsonp([1,8,10,11],{2:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=o(6),a=n(s);e.default=a.default||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}},3:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(1),a=n(s);e.default={replace:!0,props:{pageType:String,fixHead:Boolean,messageCount:Number,needAdd:{type:Boolean,default:!0}},data:function(){return{nickname:"",profileimgurl:"",show:!1}},methods:{openMenu:function(){(0,a.default)("html, body, #page").addClass("scroll-hide"),this.show=!this.show},showMenus:function(){this.show=!this.show,(0,a.default)("html, body, #page").removeClass("scroll-hide")}},components:{nvMenu:o(15)}}},4:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={replace:!0,props:["showMenu","pageType","nickName","profileUrl"],components:{userInfo:o(16)}}},5:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(2),a=n(s),i=o(21);e.default={replace:!0,computed:(0,a.default)({},(0,i.mapGetters)({userInfo:"getUserInfo"})),methods:{goEnter:function(){this.$router.push({name:"login",query:{redirect:encodeURIComponent(this.$route.path)}})},goUser:function(){this.$router.push({name:"user",params:{loginname:this.userInfo.loginname}})}}}},6:function(t,e,o){t.exports={default:o(7),__esModule:!0}},7:function(t,e,o){o(11),t.exports=o(20).Object.assign},8:function(t,e,o){"use strict";var n=o(25),s=o(9),a=o(10),i=o(26),r=o(24),u=Object.assign;t.exports=!u||o(22)(function(){var t={},e={},o=Symbol(),n="abcdefghijklmnopqrst";return t[o]=7,n.split("").forEach(function(t){e[t]=t}),7!=u({},t)[o]||Object.keys(u({},e)).join("")!=n})?function(t,e){for(var o=i(t),u=arguments.length,c=1,l=s.f,d=a.f;u>c;)for(var f,h=r(arguments[c++]),p=l?n(h).concat(l(h)):n(h),w=p.length,_=0;w>_;)d.call(h,f=p[_++])&&(o[f]=h[f]);return o}:u},9:function(t,e){e.f=Object.getOwnPropertySymbols},10:function(t,e){e.f={}.propertyIsEnumerable},11:function(t,e,o){var n=o(23);n(n.S+n.F,"Object",{assign:o(8)})},12:function(t,e){},13:function(t,e){},14:function(t,e,o){var n,s;n=o(3);var a=o(19);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=n},15:function(t,e,o){var n,s;o(13),n=o(4);var a=o(18);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=n},16:function(t,e,o){var n,s;o(12),n=o(5);var a=o(17);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=n},17:function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"user-info"},[t.userInfo.loginname?t._e():t._h("ul",{staticClass:"login-no"},[t._h("li",{staticClass:"login",on:{click:t.goEnter}},[t._h("a",["登录"])])])," "," ",t.userInfo.loginname?t._h("div",{staticClass:"login-yes",on:{click:t.goUser}},[t._h("div",{staticClass:"avertar"},[t.userInfo.avatar_url?t._h("img",{attrs:{src:t.userInfo.avatar_url}}):t._e()])," ",t._h("div",{staticClass:"info"},[t.userInfo.loginname?t._h("p",{domProps:{textContent:t._s(t.userInfo.loginname)}}):t._e()])]):t._e()])},staticRenderFns:[]}},18:function(t,e){t.exports={render:function(){var t=this;return t._h("section",{staticClass:"nav-list",class:{show:t.showMenu},attrs:{id:"sideBar"}},[t._h("user-info")," ",t._h("section",{staticClass:"list-ul"},[t._h("router-link",{staticClass:"icon-quanbu iconfont item",attrs:{to:{name:"list",query:{tab:"all"}}}},["全部"])," ",t._h("router-link",{staticClass:"icon-hao iconfont item",attrs:{to:{name:"list",query:{tab:"good"}}}},["精华"])," ",t._h("router-link",{staticClass:"icon-fenxiang iconfont item",attrs:{to:{name:"list",query:{tab:"share"}}}},["分享"])," ",t._h("router-link",{staticClass:"icon-wenda iconfont item",attrs:{to:{name:"list",query:{tab:"ask"}}}},["问答"])," ",t._h("router-link",{staticClass:"icon-zhaopin iconfont item",attrs:{to:{name:"list",query:{tab:"job"}}}},["招聘"])," ",t._h("router-link",{staticClass:"icon-xiaoxi iconfont item line",attrs:{to:{name:"message"}}},["消息"])," ",t._h("router-link",{staticClass:"icon-about iconfont item",attrs:{to:{name:"about"}}},["关于"])])])},staticRenderFns:[]}},19:function(t,e){t.exports={render:function(){var t=this;return t._h("div",[t.show&&t.fixHead?t._h("div",{staticClass:"page-cover",on:{click:t.showMenus}}):t._e()," ",t._h("header",{class:{show:t.show&&t.fixHead,"fix-header":t.fixHead,"no-fix":!t.fixHead},attrs:{id:"hd"}},[t._h("div",{staticClass:"nv-toolbar"},[t.fixHead?t._h("div",{staticClass:"toolbar-nav",on:{click:t.openMenu}}):t._e()," ",t._h("span",{domProps:{textContent:t._s(t.pageType)}})," ",t.messageCount>0?t._h("i",{staticClass:"num"},[" "+t._s(t.messageCount)]):t._e()," ",t._h("router-link",{attrs:{to:"/add"}},[t.needAdd?t._h("i",{directives:[{name:"show",rawName:"v-show",value:!t.messageCount||t.messageCount<=0,expression:"!messageCount || messageCount <= 0"}],staticClass:"iconfont add-icon"},[""]):t._e()])])])," ",t.fixHead?t._h("nv-menu",{attrs:{"show-menu":t.show,"page-type":t.pageType,"nick-name":t.nickname,"profile-url":t.profileimgurl}}):t._e()])},staticRenderFns:[]}},28:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(1),a=n(s);e.default={replace:!0,data:function(){return{show:!1}},mounted:function(){var t=this;(0,a.default)(window).on("scroll",function(){(0,a.default)(window).scrollTop()>100?t.show=!0:t.show=!1})},beforeDestory:function(){(0,a.default)(window).off("scroll")},methods:{goTop:function(){(0,a.default)(window).scrollTop(0),this.show=!1}}}},29:function(t,e,o){t.exports={default:o(30),__esModule:!0}},30:function(t,e,o){var n=o(20),s=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},34:function(t,e){},35:function(t,e,o){var n,s;o(34),n=o(28);var a=o(36);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=n},36:function(t,e){t.exports={render:function(){var t=this;return t._h("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"iconfont icon-top",on:{click:t.goTop}},[""])},staticRenderFns:[]}},43:function(t,e,o){var n,s;n=o(56);var a=o(103);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=n},56:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(29),a=n(s),i=o(1),r=n(i),u=o(27),c=n(u),l=o(14),d=n(l),f=o(35),h=n(f);e.default={filters:{getLastTimeStr:function(t,e){return c.default.getLastTimeStr(t,e)}},data:function(){return{scroll:!0,topics:[],searchKey:{page:1,limit:20,tab:"all",mdrender:!0},searchDataStr:""}},mounted:function(){this.$route.query&&this.$route.query.tab&&(this.searchKey.tab=this.$route.query.tab),window.window.sessionStorage.searchKey&&window.window.sessionStorage.tab===this.searchKey.tab?(this.topics=JSON.parse(window.window.sessionStorage.topics),this.searchKey=JSON.parse(window.window.sessionStorage.searchKey),this.$nextTick(function(){return(0,r.default)(window).scrollTop(window.window.sessionStorage.scrollTop)})):this.getTopics(),(0,r.default)(window).on("scroll",c.default.throttle(this.getScrollData,300,1e3))},beforeRouteLeave:function(t,e,o){"topic"===t.name&&(window.window.sessionStorage.scrollTop=(0,r.default)(window).scrollTop(),window.window.sessionStorage.topics=(0,a.default)(this.topics),window.window.sessionStorage.searchKey=(0,a.default)(this.searchKey),window.window.sessionStorage.tab=e.query.tab||"all"),(0,r.default)(window).off("scroll"),o()},beforeRouteEnter:function(t,e,o){"topic"!==e.name&&window.window.sessionStorage.tab&&(window.window.sessionStorage.removeItem("topics"),window.window.sessionStorage.removeItem("searchKey"),window.window.sessionStorage.removeItem("tab")),o()},methods:{getTitleStr:function(t){var e="";switch(t){case"share":e="分享";break;case"ask":e="问答";break;case"job":e="招聘";break;case"good":e="精华";break;default:e="全部"}return e},getTabInfo:function(t,e,o,n){return c.default.getTabInfo(t,e,o,n)},getTopics:function(){var t=this,e=r.default.param(this.searchKey);r.default.get("https://cnodejs.org/api/v1/topics?"+e,function(e){t.scroll=!0,e&&e.data&&(t.topics=e.data)})},getScrollData:function(){if(this.scroll){var t=parseInt((0,r.default)(window).height(),20)+parseInt((0,r.default)(window).scrollTop(),20);(0,r.default)(document).height()<=t+200&&(this.scroll=!1,this.searchKey.limit+=20,this.getTopics())}}},watch:{$route:function(t,e){t.query&&t.query.tab&&(this.searchKey.tab=t.query.tab),this.searchKey.limit=20,this.getTopics(),this.$refs.head.show=!1}},components:{nvHead:d.default,nvTop:h.default}}},103:function(t,e){t.exports={render:function(){var t=this;return t._h("div",[t._h("nv-head",{ref:"head",attrs:{"page-type":t.getTitleStr(t.searchKey.tab),"fix-head":!0,"need-add":!0}})," ",t._h("section",{attrs:{id:"page"}},[t._h("ul",{staticClass:"posts-list"},[t._l(t.topics,function(e){return t._h("li",[t._h("router-link",{attrs:{to:{name:"topic",params:{id:e.id}}}},[t._h("h3",{class:t.getTabInfo(e.tab,e.good,e.top,!0),attrs:{title:t.getTabInfo(e.tab,e.good,e.top,!1)},domProps:{textContent:t._s(e.title)}})," ",t._h("div",{staticClass:"content"},[t._h("img",{staticClass:"avatar",attrs:{src:e.author.avatar_url}})," ",t._h("div",{staticClass:"info"},[t._h("p",[t._h("span",{staticClass:"name"},["\n                                "+t._s(e.author.loginname)+"\n                            "])," ",e.reply_count>0?t._h("span",{staticClass:"status"},[t._h("b",[t._s(e.reply_count)]),"\n                                /"+t._s(e.visit_count)+"\n                            "]):t._e()])," ",t._h("p",[t._h("time",[t._s(t._f("getLastTimeStr")(e.create_at,!0))])," ",t._h("time",[t._s(t._f("getLastTimeStr")(e.last_reply_at,!0))])])])])])])})])])," ",t._h("nv-top")])},staticRenderFns:[]}}});
//# sourceMappingURL=1.9343d18bfb9d9f7bffd8.js.map