(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),s=(a(12),a(1)),l=a(2),i=a(3),h=a(4),u=function(e){var t=e.id,a=e.name,n=e.email;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n)))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(u,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})})))},d=function(e){e.searchField;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},b=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"}},e.children)},f=function(e){Object(h.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(l.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooooops, there is some error."):this.props.children}}]),a}(r.a.Component),p=function(e){Object(h.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return 0===this.state.robots.length?r.a.createElement("h1",{className:"tc"},"LOADING ..."):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(f,null,r.a.createElement(m,{robots:t}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(13);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.246ec6fe.chunk.js.map