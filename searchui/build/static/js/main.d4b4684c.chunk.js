(this.webpackJsonpsearchui=this.webpackJsonpsearchui||[]).push([[0],{125:function(e,t,s){},126:function(e,t,s){},127:function(e,t,s){},130:function(e,t,s){},208:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),r=s(27),n=s.n(r),i=(s(125),s(207),s(126),s(127),s(2));var l=function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"container cover",children:Object(i.jsxs)("div",{className:"row h-100 row-info ml-0 mr-0",children:[Object(i.jsxs)("div",{className:"col-4",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("p",{className:"title",children:"Parliamentary Reports"})}),Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("p",{className:"sub-title",children:"Search hansard dating back to 2012."})})]}),Object(i.jsxs)("div",{className:"col-4 center-item",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("p",{className:"title",children:"Cases"})}),Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("p",{className:"sub-title",children:"Coming soon"})})]}),Object(i.jsxs)("div",{className:"col-4",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("p",{className:"title",children:"News Reports"})}),Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("p",{className:"sub-title",children:"Coming soon"})})]})]})}),Object(i.jsx)("div",{className:"container footer",children:Object(i.jsxs)("div",{className:"row justify-content-between",children:[Object(i.jsx)("div",{className:"col-sm-4 col-md-2 col-6",children:Object(i.jsx)("div",{children:Object(i.jsx)("p",{className:"term",children:"Terms of Use"})})}),Object(i.jsx)("div",{className:"col-sm-4 col-md-2 col-6",children:Object(i.jsxs)("div",{className:"aligin-right",children:[Object(i.jsx)("p",{className:"copy-right",children:"Copyright 2021 (c)"}),Object(i.jsx)("p",{className:"company",children:"Elephant Pte Ltd"})]})})]})})]})},j=s(5),o=s(18),d=s(221),u=s(224),b=s(215),h=s(225),m=s(218),O=s(222),x=s(217),p=s(220),g=s(226),v=s(227),N=s(219),f=s(223),y=(s(129),s(130),s(110)),_=(s(77),s(111)),w=s.n(_);function F(e,t,s){if(e[t])return e[t][s]}function S(e,t){return F(e,t,"raw")}function k(e,t){var s,c=function(e,t){return F(e,t,"snippet")}(e,t)||(s=S(e,t),y.isEmpty(s)?"":String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;"));return Array.isArray(c)?c.join(", "):c}var T=function(e){console.log(e);var t=e.key,s=e.titleField,c=e.urlField,a=e.result,r=function(e){return Object.keys(e).reduce((function(t,s){return Object(j.a)(Object(j.a)({},t),{},Object(o.a)({},s,k(e,s)))}),{})}(a),n=k(a,s),l=S(a,c),d={};try{d=w.a.parse(l.split("?")[1])}catch(u){}return Object(i.jsx)("div",{className:"sui-result",children:Object(i.jsxs)("ul",{className:"sui-result__details",children:[Object(i.jsx)("li",{children:Object(i.jsxs)("div",{className:"sui-result__header",children:[n&&!l&&Object(i.jsx)("span",{dangerouslySetInnerHTML:{__html:n},className:"sui-result__title"}),n&&l&&Object(i.jsx)("a",{dangerouslySetInnerHTML:{__html:n},className:"sui-result__title sui-result__title-link",href:l,target:"_blank",rel:"noopener noreferrer"})]})}),Object(i.jsx)("li",{children:Object(i.jsx)("div",{className:"sui-result__body",children:Object(i.jsxs)("ul",{className:"sui-result__details",children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{className:"sui-result__key",children:"Date"})," ",Object(i.jsx)("span",{dangerouslySetInnerHTML:{__html:d.sittingdate||""},className:"sui-result__value"})]}),Object(i.jsx)("li",{children:Object(i.jsx)("span",{dangerouslySetInnerHTML:{__html:r.body},className:"sui-result__value"})})]})})})]})},t)},L=s.p+"static/media/loading.4ace5f17.gif",C=new d.a({searchKey:"search-o8mkx67oe8hc4sfs5w2seknv",engineName:"elefant-poc",endpointBase:"https://elefant-poc.ent.eastus2.azure.elastic-cloud.com",cacheResponses:!1}),P=[{name:"Relevance",value:"",direction:""},{name:"Year",value:"year",direction:""},{name:"Doc Type",value:"type",direction:""}],I=Object(o.a)({alwaysSearchOnInitialLoad:!0,searchQuery:{result_fields:{title:{snippet:{size:100,fallback:!0}},report_url:{raw:{}},body:{snippet:{size:500,fallback:!0}}},disjunctiveFacets:["parliament_no","vol_no","sitting_date","sitting_no","year"],facets:{type:{type:"value"},year:{type:"value"},main_speaker:{type:"value",size:75}}},autocompleteQuery:{results:{resultsPerPage:5,result_fields:{title:{snippet:{size:100,fallback:!0}},report_url:{raw:{}}}},suggestions:{types:{documents:{fields:["title","subtitle","body","main_speaker"]}},size:4}},apiConnector:C,initialState:{searchTerm:"",resultsPerPage:20}},"alwaysSearchOnInitialLoad",!1);function z(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"search_input",children:Object(i.jsx)(u.a,{config:I,children:Object(i.jsx)(b.a,{mapContextToProps:function(e){return{wasSearched:e.wasSearched,isLoading:e.isLoading}},children:function(e){var t=e.wasSearched,s=e.isLoading;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(h.a,{children:Object(i.jsx)(f.a,{header:Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(m.a,{inputView:function(e){var t=e.getAutocomplete,c=e.getInputProps,a=e.getButtonProps;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"sui-search-box__wrapper",children:[Object(i.jsx)("input",Object(j.a)({},c({placeholder:"Search"}))),t()]}),Object(i.jsx)("img",{className:"image-search",src:"assets/images/SearchIcon.png",alt:"SearchIcon"}),Object(i.jsx)("input",Object(j.a)({},a({value:"Go",disabled:s})))]})}})}),sideContent:Object(i.jsxs)("div",{children:[t&&Object(i.jsx)(O.a,{label:"Sort by",sortOptions:P}),Object(i.jsx)(x.a,{field:"year",label:"Year",filterType:"any"}),Object(i.jsx)(x.a,{field:"main_speaker",label:"Main Speaker",filterType:"any"})]}),bodyContent:Object(i.jsxs)(i.Fragment,{children:[!s&&Object(i.jsx)(p.a,{mapContextToProps:function(e){return console.log(e),e},titleField:"title",urlField:"report_url",bodyField:"body",shouldTrackClickThrough:!0,resultView:T}),s&&t&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"row mt-5",children:Object(i.jsx)("div",{className:"col-12 text-center",children:Object(i.jsx)("img",{width:"3%",height:"auto",src:L,alt:"loading..."})})}),Object(i.jsx)("div",{className:"row mt-2",children:Object(i.jsx)("div",{className:"col-12 text-center",children:"Loading..."})})]})]}),bodyHeader:Object(i.jsx)(i.Fragment,{children:!s&&t&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(g.a,{}),Object(i.jsx)(v.a,{options:[5,10,20,50,100]})]})}),bodyFooter:!s&&Object(i.jsx)(N.a,{})})})})}})})})})}var M=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"row justify-content-center",children:Object(i.jsx)("div",{className:"col-12 col-md-5 text-center",children:Object(i.jsx)("img",{className:"image_title",src:"assets/images/Elephant.png",alt:"Elephant"})})}),Object(i.jsx)("div",{className:"row text_title",children:Object(i.jsx)("div",{className:"col-12 text-center",children:Object(i.jsx)("p",{children:"Legal search engine for the Singapore community"})})}),Object(i.jsx)(z,{})]}),Object(i.jsx)(l,{})]})};function E(){return Object(i.jsx)(M,{})}var H=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,229)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),r(e),n(e)}))};s(206);n.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(E,{})}),document.getElementById("root")),H()}},[[208,1,2]]]);
//# sourceMappingURL=main.d4b4684c.chunk.js.map