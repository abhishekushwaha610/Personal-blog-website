(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{35:function(e,a,t){e.exports=t(67)},40:function(e,a,t){},43:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(31),l=t.n(c),s=(t(40),t(41),t(42),t(43),t(2)),o=t(3),i=t(5),m=t(4),u=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={show:!1},n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"black card card-body green"},r.a.createElement("p",{className:"tc f3 b bgreen black rounded-pill"},"\xa9abhiishek_kushwaha"),r.a.createElement("div",{className:"d-flex justify-center "},r.a.createElement("a",{href:"https://www.github.com/abhishekushwaha610/",target:"_"}," ",r.a.createElement("i",{className:"fa fa-github-alt f1 grow green"})," "),r.a.createElement("a",{href:"https://www.instagram.com/abhiishek_kushwaha/",target:"_"}," ",r.a.createElement("i",{className:"fa fa-instagram f1 grow green mx-4"})," "),r.a.createElement("a",{href:"https://www.linkedin.com/in/abhiishek-kushwaha/",target:"_"}," ",r.a.createElement("i",{className:"fa fa-linkedin  f1 grow green"})," ")),r.a.createElement("p",{className:"tc mt-4"},"Find me."))}}]),t}(n.Component),d=t(32),b=t(8),h=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg py-3 black green"},r.a.createElement("a",{className:"navbar-brand success ",href:"/"},"Abhishek Kushwaha"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse d-flex",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:" navbar-nav ml-auto"},r.a.createElement(b.b,{to:"/",className:"nav-link green ".concat(this.props.home)},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement(b.b,Object(d.a)({to:"/blog",className:"nav-link green mx-5 ".concat(this.props.blog)},"to","/blog"),"Blog"),r.a.createElement(b.b,{to:"/feedback",className:"nav-link green mr-5 ".concat(this.props.feedback),href:"/feedback"},"Feedback"))))}}]),t}(n.Component),p=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={show:!1},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){document.title="Abhishek | Home"}},{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron black pt-4 mb-0"},r.a.createElement(h,{home:"line"}),r.a.createElement("div",{className:"container  text-center"},r.a.createElement("img",{src:"https://i1.wp.com/fudoushin.wordpress.com/files/2009/05/img_4693.jpg?resize=1200%2C800&crop=1",alt:"",className:"rounded-circle",width:"200",height:"200"}),r.a.createElement("h1",{className:"mt-3 green "},"Abhishek Kushwaha "),r.a.createElement("h5",{className:"text-success "}," Hi, I am Programmer web Developer Competative Programer and Machine learner."),r.a.createElement("p",{className:"green "},"abhishekushwaha610@gmail.com"),r.a.createElement("p",{className:"green "},"+91-9039818826"),r.a.createElement("div",{className:"mt-5"},r.a.createElement(b.b,{to:"/blog"}," ",r.a.createElement("button",{className:"btn btn-outline-light mr-4 col-md-2"},"View Blog")))),r.a.createElement("div",{className:"container mt-5"},r.a.createElement("hr",{className:"bgreen mt-5"}),r.a.createElement("details",{className:"green"},r.a.createElement("summary",{className:"d-flex align-items-center"},"Is it Pesronal Blog?",r.a.createElement("span",{className:"ml-auto"}," \u2207")),r.a.createElement("p",{className:"mt-3 text-light"},"Yes.. this my Pesronal site, where i share my expereince and knowlebge. ")),r.a.createElement("hr",{className:"bgreen "}),r.a.createElement("details",{className:"green"},r.a.createElement("summary",{className:"d-flex align-items-center"},"Is it Pesronal Blog?",r.a.createElement("span",{className:"ml-auto"}," \u2207")),r.a.createElement("p",{className:"mt-3 text-light"},"Yes.. this my Pesronal site, where i share my expereince and knowlebge. "),r.a.createElement("hr",{className:"bgreen"}))))}}]),t}(n.Component),g=t(14),f=t.n(g),v=t(16),E=t(12),k=t(20),N=t.n(k),y="http://localhost:8000/api",w=function(){function e(){Object(s.a)(this,e)}return Object(o.a)(e,[{key:"getAllPost",value:function(){return N.a.get("".concat(y,"/")).then((function(e){return e.data}))}},{key:"getPost",value:function(e){return N.a.get("".concat(y,"/").concat(e)).then((function(e){return e.data}))}}]),e}(),j=new w,O=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={blog:[]},n.allcards=n.allcards.bind(Object(E.a)(n)),n.loadBlog=n.loadBlog.bind(Object(E.a)(n)),n}return Object(o.a)(t,[{key:"componentWillMount",value:function(){this.loadBlog()}},{key:"loadBlog",value:function(){var e=Object(v.a)(f.a.mark((function e(){var a=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.getAllPost().then((function(e){var t=e;a.setState({blog:t})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"allcards",value:function(){var e=[];return this.state.blog.map((function(a,t){e.push(r.a.createElement(b.b,{to:"/".concat(a.id),className:"card text-decoration-none green px-0 Fira black grow"},r.a.createElement("div",{className:"card-header line"},a.tag),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a.title,"df"),r.a.createElement("p",null,a.descripition),r.a.createElement("small",{className:"text-muted"},a.time)),r.a.createElement("div",{className:"card-footer Fira"})))})),e}},{key:"render",value:function(){return r.a.createElement(this.allcards,null)}}]),t}(n.Component),x=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){document.title="Blog | Abhishek"}},{key:"render",value:function(){return r.a.createElement("div",{className:"black m-0 pt-4 jumbotron"},r.a.createElement(h,{blog:"line"}),r.a.createElement("div",{className:"container "},r.a.createElement("h2",{className:"green line mb-5",align:"center"},"Some Blog"),r.a.createElement("div",{className:"card-columns"},r.a.createElement(O,null))))}}]),t}(n.Component),B=new w,F=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).state={posts:[],data:"none"},e.fetch=e.fetch.bind(Object(E.a)(e)),e}return Object(o.a)(t,[{key:"componentWillMount",value:function(){this.loadBlog(),this.fetch()}},{key:"loadBlog",value:function(){var e=Object(v.a)(f.a.mark((function e(){var a=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:B.getAllPost().then((function(e){a.setState({posts:e})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"fetch",value:function(e){var a=this;e?document.getElementById("progress").style.display="flex":e=this.props.match.params.slug;B.getPost(e).then((function(e){var t=e;a.setState({data:t}),a.hide(),document.title=t.title}))}},{key:"hide",value:function(){document.getElementById("progress").style.display="none"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"black m-0 pt-4 jumbotron"},r.a.createElement(h,{blog:"line"}),r.a.createElement("p",{className:"bgreen p-2 b mb-0 rounded  text-danger"},"post/",this.state.data.title),r.a.createElement("div",{className:"progress",id:"progress",style:{display:"none"}},r.a.createElement("div",{className:"progress-bar black progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:{width:"100%"}})),r.a.createElement("div",{className:"col-md-11 mt-5 "},r.a.createElement("div",{className:"card-deck"},r.a.createElement("div",{className:"card col-md-3 black green  px-0"},r.a.createElement("h5",{className:"card-header line Fira white"},r.a.createElement("b",null,"List of Content")),this.state.posts.map((function(a){return r.a.createElement(b.b,{to:"/".concat(a.slug),onClick:function(){return e.fetch(a.slug)},className:"list-group-item list-group-item-action black green Fira"},a.title)}))),r.a.createElement("div",{className:"card Fira black green"},r.a.createElement("div",{className:"card-header line"},this.state.data.tag),r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",null,this.state.data.title),r.a.createElement("span",{className:"tl",dangerouslySetInnerHTML:{__html:this.state.data.description}})),r.a.createElement("div",{className:"card-footer text-muted"},this.state.data.time)))))}}]),t}(n.Component),M=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){document.title="Feedback | Abhishek";var e=document.getElementById("massgage");e&&(document.getElementById("msg").innerHTML=e.innerHTML)}},{key:"submitted",value:function(){document.getElementById("submitButton").style.display="none",document.getElementById("submitLoading").style.display="block"}},{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron black pt-4 mb-0"},r.a.createElement(h,{feedback:"line"}),r.a.createElement("div",{className:"bgreen p-3 f-4",id:"msg"},r.a.createElement("b",null,"Your Feedback is valuable for me.")," "),r.a.createElement("div",{className:"card Fira black container col-md-3 px-0 mt-4"},r.a.createElement("div",{className:"card-header Fira green"},"Feedback"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{className:"form-group",onSubmit:this.submitted,action:"/sending/",method:"POST"},r.a.createElement("input",{type:"text",id:"name",name:"name",className:"form-control black Fira green mt-4",placeholder:"name or email",required:!0}),r.a.createElement("textarea",{id:"desc",name:"desc",className:"form-control black Fira green my-4",placeholder:"Write",rows:"5",required:!0}),r.a.createElement("button",{type:"submit my-5",className:"btn Fira bgreen col-md-12 mt-4 justify-content-center d-flex"},r.a.createElement("span",{id:"submitButton"},"Submit"),r.a.createElement("div",{id:"submitLoading",class:"spinner-border ",role:"status",style:{display:"none"}},r.a.createElement("span",{class:"sr-only"},"Loading...")))))))}}]),t}(n.Component),A=t(11);var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b.a,null,r.a.createElement(A.c,null,r.a.createElement(A.a,{path:"/",exact:!0,component:p}),r.a.createElement(A.a,{path:"/blog",component:x}),r.a.createElement(A.a,{path:"/feedback",component:M}),r.a.createElement(A.a,{path:"/:slug",component:F}))),r.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.f40e08b0.chunk.js.map