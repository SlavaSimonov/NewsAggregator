(function(e){function t(t){for(var r,i,o=t[0],c=t[1],l=t[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},s={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/NewsAggregator/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),s=n.n(r);s.a},"0bc1":function(e){e.exports=JSON.parse('[{"name":"CNN","rssUrl":"http://rss.cnn.com/rss/edition.rss"},{"name":"The Guardian","rssUrl":"theguardian.com/world/rss "},{"name":"The Wall Street Journal","rssUrl":"https://feeds.a.dj.com/rss/RSSWorldNews.xml"},{"name":"BBC","rssUrl":"http://feeds.bbci.co.uk/news/world/rss.xml"},{"name":"New York Times","rssUrl":"https://rss.nytimes.com/services/xml/rss/nyt/World.xml"},{"name":"Fox News","rssUrl":"http://feeds.foxnews.com/foxnews/world"},{"name":"NBC News","rssUrl":"http://feeds.nbcnews.com/nbcnews/public/news"},{"name":"Daily Mail","rssUrl":"https://www.dailymail.co.uk/news/worldnews/index.rss"},{"name":"Huffington Post","rssUrl":"https://www.huffpost.com/section/front-page/feed"},{"name":"The Telegraph","rssUrl":"https://www.telegraph.co.uk/rss.xml"}]')},1:function(e,t){},"1a3d":function(e,t,n){},2:function(e,t){},"3fa4":function(e,t,n){"use strict";var r=n("ac55"),s=n.n(r);s.a},"40fd":function(e,t,n){"use strict";var r=n("e82f"),s=n.n(r);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("header-bar"),n("v-main",[n("articles-list-view")],1),n("footer-bar")],1)},a=[],i=n("5530"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{color:"grey darken-4",flat:"",tile:""}},[n("div",{staticClass:"text-center py-4",attrs:{id:"logo"}},[e._v("What's news?")])])},c=[],l={name:"header-bar"},u=l,d=(n("de30"),n("2877")),f=n("6544"),m=n.n(f),p=n("b0af"),v=Object(d["a"])(u,o,c,!1,null,"1eb43f8f",null),h=v.exports;m()(v,{VCard:p["a"]});var w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{attrs:{absolute:"",padless:"",dark:"",color:"grey darken-4",height:"100"}},[n("div",{staticClass:"d-flex flex-column justify-center mx-auto"},[n("div",{staticClass:"text-subtitle-2 text-center"},[e._v(" © "+e._s(e.year)+" - Slava Simonov ")]),n("div",{staticClass:"text-subtitle-2 text-center"},[n("v-icon",[e._v("mdi-email-outline")]),e._v(" simonowslawa@gmail.com ")],1)])])},g=[],b={name:"footer-bar",data:function(){return{year:(new Date).getFullYear()}}},S=b,x=n("553a"),y=n("132d"),_=Object(d["a"])(S,w,g,!1,null,null,null),N=_.exports;m()(_,{VFooter:x["a"],VIcon:y["a"]});var C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("news-sites-bar",{attrs:{currentNewsSites:e.currentSitesList,defaultNewsSites:e.defaultSites},on:{changeSites:function(t){return e.changeUserSitesList(t)}}}),n("news-list",{attrs:{items:e.newsList,isLoading:e.isLoading}})],1)},k=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{color:"grey lighten-3",flat:"",tile:""}},[n("v-container",{staticClass:"d-flex align-center"},[n("div",{staticClass:"text-body-1 pr-4 grey--text text--darken-1"},[e._v(" "+e._s(e.currentSitesText)+" ")]),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.expandChange,expression:"!expandChange"}],attrs:{color:"grey darken-1",small:"",right:"",outlined:""},on:{click:function(t){e.expandChange=!e.expandChange}}},[n("v-icon",{attrs:{left:""}},[e._v(" mdi-pencil-outline ")]),e._v(" EDIT")],1)],1),n("v-expand-transition",[n("sites-prefs-panel",{directives:[{name:"show",rawName:"v-show",value:e.expandChange,expression:"expandChange"}],attrs:{currentSites:e.currentNewsSites,allSites:e.defaultNewsSites},on:{change:function(t){return e.$emit("changeSites",t)},collapse:function(t){e.expandChange=!e.expandChange}}})],1)],1)},I=[],D=(n("a15b"),n("d81d"),n("fb6a"),n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[e._l(e.currentSites,(function(t,r){return n("v-chip",{key:r,staticClass:"mr-2 mt-1",attrs:{close:""},on:{"click:close":function(n){return e.removeSite(t.name)}}},[e._v(e._s(t.name))])})),n("v-divider",{staticClass:"my-4"}),n("v-form",{ref:"addForm",attrs:{"lazy-validation":""}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12",md:"1"}},[n("div",{attrs:{id:"addTitle"}},[e._v("Add website:")])]),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-combobox",{attrs:{items:e.availableNewsSites,"item-text":"name",label:"News website","prepend-inner-icon":"mdi-web",rules:e.siteInputRules,"hide-no-data":"","return-object":!1},model:{value:e.inputSite,callback:function(t){e.inputSite=t},expression:"inputSite"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{label:"RSS Feed URL",rules:[function(e){return!!e||"RSS URL is required!"}],"prepend-inner-icon":"mdi-link"},model:{value:e.inputRss,callback:function(t){e.inputRss=t},expression:"inputRss"}})],1),n("v-col",{attrs:{cols:"12",md:"3"}},[n("v-btn",{attrs:{rounded:"",color:"grey darken-4",dark:""},on:{click:e.addNewsSite}},[n("v-icon",{attrs:{left:""}},[e._v(" mdi-plus ")]),e._v("ADD WEBSITE")],1)],1)],1)],1),n("v-btn",{staticClass:"mt-5",attrs:{block:"",text:"",large:"",tile:"",disabled:0===e.currentSites.length},on:{click:e.collapse}},[n("v-icon",[e._v("mdi-arrow-collapse-up")])],1)],2)}),L=[],U=(n("99af"),n("4de4"),n("7db0"),n("caad"),n("2532"),n("2909")),V={name:"sites-prefs-panel",props:{currentSites:{type:Array,required:!0},allSites:{type:Array,required:!0}},data:function(){var e=this;return{inputSite:"",inputRss:"",siteInputRules:[function(e){return!!e||"Site name is required!"},function(t){return!e.currentSites.map((function(e){return e.name})).includes(t)||"This site already exists!"}]}},watch:{inputSite:function(e){var t,n;this.inputRss=null!==(t=null===(n=this.allSites.find((function(t){return t.name===e})))||void 0===n?void 0:n.rssUrl)&&void 0!==t?t:""}},computed:{availableNewsSites:function(){var e=this;return this.allSites.filter((function(t){return!e.currentSites.map((function(e){return e.name})).includes(t.name)}))}},methods:{addNewsSite:function(){var e=this;if(this.$refs.addForm.validate()){var t,n=null!==(t=this.allSites.find((function(t){return t.name===e.inputSite})))&&void 0!==t?t:{name:this.inputSite,rssUrl:this.inputRss};this.$emit("change",[].concat(Object(U["a"])(this.currentSites),[n])),this.$refs.addForm.reset()}},removeSite:function(e){this.$emit("change",this.currentSites.filter((function(t){return t.name!==e})))},collapse:function(){this.$emit("collapse")}}},j=V,T=(n("3fa4"),n("8336")),R=n("cc20"),P=n("62ad"),F=n("2b5d"),E=n("a523"),$=n("ce7e"),A=n("4bd4"),q=n("0fd9"),B=n("8654"),J=Object(d["a"])(j,D,L,!1,null,"5994e916",null),M=J.exports;m()(J,{VBtn:T["a"],VChip:R["a"],VCol:P["a"],VCombobox:F["a"],VContainer:E["a"],VDivider:$["a"],VForm:A["a"],VIcon:y["a"],VRow:q["a"],VTextField:B["a"]});var W={name:"news-sites-bar",components:{"sites-prefs-panel":M},props:{currentNewsSites:{type:Array,required:!0},defaultNewsSites:{type:Array,required:!0}},data:function(){return{expandChange:!1}},mounted:function(){this.expandChange=0===this.currentNewsSites.length},computed:{currentSitesText:function(){if(!this.hasNewsSites())return"You have no sites selected";var e=5,t="Showing news from: "+this.currentNewsSites.slice(0,e).map((function(e){return e.name})).join(", ");return this.currentNewsSites.length>=e&&(t+=" + ".concat(this.currentNewsSites.length-e)),t}},methods:{hasNewsSites:function(){return this.currentNewsSites.length>0}}},Y=W,H=n("0789"),z=Object(d["a"])(Y,O,I,!1,null,null,null),G=z.exports;m()(z,{VBtn:T["a"],VCard:p["a"],VContainer:E["a"],VExpandTransition:H["a"],VIcon:y["a"]});var K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[e._l(e.currentItems,(function(t,r){return n("v-col",{key:r,attrs:{cols:"12"}},[e.putDate(r)?n("v-card",{staticClass:"py-3",attrs:{flat:"",tile:""}},[n("div",{staticClass:"d-flex align-center"},[n("div",{staticClass:"text-body-2 text-center text--secondary pb-1 px-6"},[e._v(" "+e._s(e.itemDateFormat(t))+" ")]),n("v-divider")],1)]):e._e(),n("news-entry",{attrs:{title:t.title,date:e.itemDateFormat(t,!0),text:t.content,link:t.link,image:t.image||e.defaultEntryImage,siteName:t.siteName}})],1)})),n("v-col",{attrs:{cols:"12"}},[n("v-card",{directives:[{name:"intersect",rawName:"v-intersect",value:e.infiniteScrolling,expression:"infiniteScrolling"}],staticClass:"py-5",attrs:{flat:"",tile:""}},[e.isLoading?n("v-progress-linear",{staticClass:"my-5",attrs:{indeterminate:"",color:"grey darken-4"}}):n("div",{staticClass:"text-body-1 text-center"},[e._v(e._s(e.endText))])],1)],1)],2)],1)},Q=[],X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.hover;return[n("v-card",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"transition-swing",attrs:{href:e.link,target:"_blank",tile:"",elevation:r?5:0}},[n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12",md:"1"}},[n("v-img",{staticClass:"mx-auto",attrs:{src:e.image,"max-width":"100","min-width":"50"}})],1),n("v-col",[n("div",{attrs:{id:"title"}},[e._v(e._s(e.title))])])],1),n("v-row",[n("v-col",[""!==e.date?n("div",{staticClass:"text-body-2 text--secondary"},[e._v(" Posted: "+e._s(e.date)+" ")]):e._e(),""!==e.text?n("div",{staticClass:"text-body-1"},[e._v(" "+e._s(e.trimText(e.text))+" ")]):e._e()])],1)],1)],1)]}}])})},Z=[],ee=n("87b2"),te=n.n(ee),ne={name:"news-entry",props:{title:{type:String,default:""},date:{type:String,default:""},text:{type:String,default:""},link:{type:String,default:""},image:{type:String,default:te.a},siteName:{type:String,default:""}},methods:{trimText:function(e){return e.length>650?"".concat(e.slice(0,600),"..."):e}}},re=ne,se=(n("40fd"),n("ce87")),ae=n("adda"),ie=n("269a"),oe=n.n(ie),ce=n("5607"),le=Object(d["a"])(re,X,Z,!1,null,"7b3a8c22",null),ue=le.exports;m()(le,{VCard:p["a"],VCol:P["a"],VContainer:E["a"],VHover:se["a"],VImg:ae["a"],VRow:q["a"]}),oe()(le,{Ripple:ce["a"]});var de={name:"news-list",components:{"news-entry":ue},props:{items:{type:Array,required:!0,default:[]},isLoading:{type:Boolean,default:!1}},data:function(){return{currentItems:[],LOAD_PORTION:10,currentLastIndex:0,endText:"Looking for older news...",defaultEntryImage:te.a}},watch:{items:function(e){this.currentItems=e.slice(0,this.currentLastIndex)}},created:function(){this.currentLastIndex+=this.LOAD_PORTION,this.currentItems=this.items.slice(0,this.currentLastIndex)},methods:{infiniteScrolling:function(e,t,n){this.currentLastIndex<this.items.length?(this.currentLastIndex+=this.LOAD_PORTION,this.currentItems=this.items.slice(0,this.currentLastIndex)):0===this.items.length?this.endText="No news found!":this.endText="It seems, you've read everything!"},putDate:function(e){var t=this.itemDateFormat(this.currentItems[e]);if(0===e)return""!==t;this.itemDateFormat(this.currentItems[e-1]);return this.itemDateFormat(this.currentItems[e])!==this.itemDateFormat(this.currentItems[e-1])},itemDateFormat:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(""===e.pubDate)return"";var n=new Date(e.pubDate),r="";return r=n.toLocaleDateString()===(new Date).toLocaleDateString()?"Today":n.toLocaleDateString(),t&&(r+=", ".concat(n.toLocaleTimeString())),r}}},fe=de,me=n("8e36"),pe=n("90a2"),ve=Object(d["a"])(fe,K,Q,!1,null,null,null),he=ve.exports;m()(ve,{VCard:p["a"],VCol:P["a"],VContainer:E["a"],VDivider:$["a"],VProgressLinear:me["a"],VRow:q["a"]}),oe()(ve,{Intersect:pe["a"]});var we=n("2f62"),ge={name:"articles-list-view",components:{"news-sites-bar":G,"news-list":he},data:function(){return{}},computed:Object(i["a"])({},Object(we["c"])({newsList:"userNews",currentSitesList:"userSites",defaultSites:"defaultSites",isLoading:"isParsingNews"})),methods:Object(i["a"])({},Object(we["b"])({changeUserSitesList:"changeUserSitesList"}))},be=ge,Se=Object(d["a"])(be,C,k,!1,null,null,null),xe=Se.exports,ye={components:{"header-bar":h,"footer-bar":N,"articles-list-view":xe},created:function(){this.loadUserSitesList()},methods:Object(i["a"])({},Object(we["b"])(["loadUserSitesList"]))},_e=ye,Ne=(n("034f"),n("7496")),Ce=n("f6c4"),ke=Object(d["a"])(_e,s,a,!1,null,null,null),Oe=ke.exports;m()(ke,{VApp:Ne["a"],VMain:Ce["a"]});var Ie=n("8c4f");r["a"].use(Ie["a"]);var De=[],Le=new Ie["a"]({routes:De}),Ue=Le,Ve=(n("4160"),n("3ca3"),n("9911"),n("159b"),n("ddb0"),n("b85c")),je=(n("96cf"),n("1da1")),Te=n("0bc1"),Re=n("b0f0"),Pe=n.n(Re),Fe="https://cors-anywhere.herokuapp.com/",Ee="ChosenNewsSites";r["a"].use(we["a"]);var $e=new we["a"].Store({state:{userSites:[],userNews:[],defaultSites:Te,isParsingNews:!1},mutations:{setUserSites:function(e,t){e.userSites=t},setUserNews:function(e,t){e.userNews=t},setIsParsing:function(e,t){e.isParsingNews=t}},actions:{parseUserSites:function(e){return Object(je["a"])(regeneratorRuntime.mark((function t(){var n,r,s,a,i,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,r=e.state,s=new Pe.a,a=[],n("setIsParsing",!0),0!==r.userSites.length){t.next=8;break}n("setUserNews",[]),t.next=24;break;case 8:i=Object(Ve["a"])(r.userSites),t.prev=9,c=regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=o.value,console.log("Parsing : "+t.name),e.next=4,s.parseURL(Fe+t.rssUrl);case 4:r=e.sent,r.items.forEach((function(e){var n,s,i,o,c,l;a.push({title:null!==(n=e.title)&&void 0!==n?n:"",link:null!==(s=e.link)&&void 0!==s?s:"",pubDate:null!==(i=e.isoDate)&&void 0!==i?i:"",content:null!==(o=e.contentSnippet)&&void 0!==o?o:"",image:null!==(c=null===(l=r.image)||void 0===l?void 0:l.url)&&void 0!==c?c:"",siteName:t.name})})),a.sort((function(e,t){return""===e.pubDate?-1:""===t.pubDate?1:new Date(t.pubDate)-new Date(e.pubDate)})),n("setUserNews",a);case 8:case"end":return e.stop()}}),e)})),i.s();case 12:if((o=i.n()).done){t.next=16;break}return t.delegateYield(c(),"t0",14);case 14:t.next=12;break;case 16:t.next=21;break;case 18:t.prev=18,t.t1=t["catch"](9),i.e(t.t1);case 21:return t.prev=21,i.f(),t.finish(21);case 24:n("setIsParsing",!1);case 25:case"end":return t.stop()}}),t,null,[[9,18,21,24]])})))()},loadUserSitesList:function(e){var t=e.commit,n=e.dispatch,r=localStorage.getItem(Ee);r&&"undefined"!==r&&(t("setUserSites",JSON.parse(r)),n("parseUserSites"))},changeUserSitesList:function(e,t){var n=e.commit,r=e.dispatch;localStorage.setItem(Ee,JSON.stringify(t)),n("setUserSites",t),r("parseUserSites")}}}),Ae=n("f309");r["a"].use(Ae["a"]);var qe=new Ae["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:Ue,store:$e,vuetify:qe,render:function(e){return e(Oe)}}).$mount("#app")},"85ec":function(e,t,n){},"87b2":function(e,t,n){e.exports=n.p+"img/DefaultNewsImg.0048caf0.png"},ac55:function(e,t,n){},de30:function(e,t,n){"use strict";var r=n("1a3d"),s=n.n(r);s.a},e82f:function(e,t,n){}});
//# sourceMappingURL=app.f204d10a.js.map