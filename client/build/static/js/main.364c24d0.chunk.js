(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){e.exports=a.p+"static/media/tree.d561b764.jpg"},102:function(e,t,a){e.exports=a.p+"static/media/treetwo.e5fe6ee5.jpg"},103:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(26),s=a.n(r),l=a(19),c=(a(69),a(11)),i=a(12),u=a(14),m=a(13),p=a(62),h=a(58),d=a.n(h),g=a(25),E=a.n(g),f=(a(72),a(30)),v=a(106),b=a(108),y=a(105),k=a(15),w=a.n(k),C=function(e,t){return w.a.post("/api/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},S=function(e,t){return w.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},N=(a(89),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={username:"",password:"",message:""},e.handleChange=function(t){var a=t.target,n=a.name,o=a.value;e.setState(Object(f.a)({},n,o))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,o=a.password;C(n,o).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(e.props.setUser(t),e.props.history.push("/"))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"SignUpStyle"},o.a.createElement("div",{className:"signupSite"},o.a.createElement("h2",null,"Signup"),o.a.createElement("div",{className:"SignUpForm"},o.a.createElement(v.a,{onSubmit:this.handleSubmit},o.a.createElement(v.a.Group,null,o.a.createElement(v.a.Label,{htmlFor:"username"},"Username: "),o.a.createElement(v.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username"})),o.a.createElement(v.a.Group,null,o.a.createElement(v.a.Label,{htmlFor:"password"},"Password: "),o.a.createElement(v.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password"})),this.state.message&&o.a.createElement(b.a,{variant:"danger"},this.state.message),o.a.createElement(y.a,{type:"submit"},"Signup")))),o.a.createElement("div",{className:"SignUpPic"},o.a.createElement("img",{src:"images/main_becomecyclistoftheweek.jpg",alt:""}))))}}]),a}(n.Component)),O=a(107),j=(a(91),a(92),function(e){console.log(e),w.a.delete("/api/auth/logout").then((function(e){return console.log("logout:",e),e.data})).catch((function(e){return e.response.data})).then((function(){e.setUser(null)}))}),x=function(e){return o.a.createElement(O.a,{style:{justifyContent:"space-between"}},o.a.createElement(O.a.Brand,null,o.a.createElement("div",{className:"bike"},o.a.createElement("img",{src:a(93),alt:"",width:"35%"}))),o.a.createElement("div",{style:{display:"flex",justifyContent:"flexEnd"}},e.user&&o.a.createElement(O.a.Brand,null,o.a.createElement("b",null,"Welcome, ",e.user.username)),o.a.createElement(O.a.Brand,null,o.a.createElement(l.b,{to:"/",class:"link"},"Home")),e.user?o.a.createElement(o.a.Fragment,null,o.a.createElement(O.a.Brand,null,o.a.createElement(l.b,{to:"/routes",class:"link"},"My saved routes")),o.a.createElement(O.a.Brand,null,o.a.createElement(l.b,{to:"/",class:"link",onClick:function(){return j(e)}},"Logout"))):o.a.createElement(o.a.Fragment,null,o.a.createElement(O.a.Brand,null,o.a.createElement(l.b,{to:"/signup",class:"link"},"Signup")),o.a.createElement(O.a.Brand,null,o.a.createElement(l.b,{to:"/login",class:"link"},"Login")))))},F=(a(96),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={username:"",password:"",message:""},e.handleChange=function(t){var a=t.target,n=a.name,o=a.value;e.setState(Object(f.a)({},n,o))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,o=a.password;S(n,o).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(e.props.setUser(t),e.props.history.push("/"))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"LoginStyle"},o.a.createElement("div",{className:"loginSite"},o.a.createElement("h2",null,"Login"),o.a.createElement("div",{className:"LoginForm"},o.a.createElement(v.a,{onSubmit:this.handleSubmit},o.a.createElement(v.a.Group,null,o.a.createElement(v.a.Label,{htmlFor:"username"},"Username: "),o.a.createElement(v.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username"})),o.a.createElement(v.a.Group,null,o.a.createElement(v.a.Label,{htmlFor:"password"},"Password: "),o.a.createElement(v.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password"})),this.state.message&&o.a.createElement(b.a,{variant:"danger"},this.state.message),o.a.createElement(y.a,{type:"submit"},"Login")))),o.a.createElement("div",{className:"LoginPic"},o.a.createElement("img",{src:"images/bikeforlogin.jpg",alt:""}))))}}]),a}(n.Component)),I=(a(97),function(){return o.a.createElement("div",{className:"Landingpage"},o.a.createElement("nav",null,o.a.createElement("div",{className:"containerforHeader"},o.a.createElement("div",{className:"Banner"},o.a.createElement("h2",null,"Cycle now!"),o.a.createElement("p",null,"get a better understanding of your cycling impact")))),o.a.createElement("header",null),o.a.createElement("div",{className:"CycleInfo"},o.a.createElement("img",{src:"images/new_cycle_now_graph.png",alt:"cycleinfo"})),o.a.createElement("h1",null,"Do you actually know..."),o.a.createElement("div",{className:"DoYouKnow"},o.a.createElement("div",{className:"DoYouKnowText"},o.a.createElement("img",{src:"images/icontreetoco2.png",alt:"treetoco2",className:"smallImages"}),o.a.createElement("p",null,"...how much co2 a tree compensates per year?"),o.a.createElement("img",{src:"images/iconhowmanykilometers.png",alt:"howmanykilometers",className:"smallImages"}),o.a.createElement("p",null,"...how much kilometers bike you ride per year?"),o.a.createElement("img",{src:"/images/iconcartobike.png",alt:"carttobike",className:"smallImages"}),o.a.createElement("p",null,"...how much co2 you save while cycling compared to driving?")),o.a.createElement("img",{src:"images/doyouactuallyknow.jpg"})))}),D=a(9),R=a(63),B=function(e){var t=e.component,a=e.user,n=e.path,r=e.redirectPath,s=void 0===r?"/":r,l=Object(R.a)(e,["component","user","path","redirectPath"]);return o.a.createElement(D.b,{path:n,render:function(e){return a?o.a.createElement(t,Object.assign({},e,l,{user:a})):o.a.createElement(D.a,{to:s})}})},W=(a(98),function(e){return o.a.createElement("div",{className:"routesList"},e.routes.length>0&&o.a.createElement("h3",null,"Routes:"),e.routes.map((function(e){return o.a.createElement("div",{key:e._id},o.a.createElement("p",null,o.a.createElement(l.b,{className:"routeLink",to:"/routes/".concat(e._id)},e.startpoint," - ",e.endpoint)))})))}),_=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={routes:[]},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(W,{routes:this.props.routes})}}]),a}(n.Component),T=(a(99),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={route:null,startpoint:"",endpoint:"",kilometer:"",co2emission:"",owner:"",error:null},e.newRoute=function(t){var a=t||e.props.match.params.id;w.a.get("/api/routes/".concat(a)).then((function(t){var n=t.data,o=t.data.startpoint,r=t.data.endpoint,s=t.data.kilometer;console.log(s);var l=t.data.co2emission,c=t.data.owner;e.setState({route:n,startpoint:o,endpoint:r,kilometer:s,co2emission:l,owner:c,routeId:a})})).catch((function(e){console.log(e)}))},e.deleteRoute=function(){var t=e.props.match.params.id;w.a.delete("/api/routes/".concat(t)).then((function(){e.props.getData(),e.props.history.push("/routes")})).catch((function(e){console.log(e)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.newRoute()}},{key:"componentWillReceiveProps",value:function(e){var t;console.log(e),(null===(t=e.match.params)||void 0===t?void 0:t.id)!==this.state.routeId&&this.newRoute(e.match.params.id)}},{key:"render",value:function(){if(this.state.error)return o.a.createElement("div",null,this.state.error);if(!this.state.route)return o.a.createElement(o.a.Fragment,null);var e=!1;return this.props.user&&(e=!0),o.a.createElement("div",{className:"singleRoute"},o.a.createElement("p",{className:"singleRouteP"},o.a.createElement("span",{className:"numbers1"},this.state.route.startpoint," - ",this.state.endpoint)," ",",",o.a.createElement("br",null),"Distance:",o.a.createElement("span",{className:"numbers1"},this.state.kilometer)," ",o.a.createElement("br",null),"CO2 impact:"," ",o.a.createElement("span",{className:"numbers1"},this.state.co2emission)," kg"),e&&o.a.createElement("button",{class:"deleteRouteBtn animate__animated animate__bounce",variant:"danger",onClick:this.deleteRoute},"Delete this route"))}}]),a}(n.Component)),U=(a(100),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){console.log("routes:",this.props.routes);for(var e=this.props.routes.reduce((function(e,t){return console.log(parseInt(t.co2emission)),e+parseInt(t.co2emission)/23.2}),0).toFixed(2),t=e.split("."),n=[],r=1;r<=parseInt(t[0]);r++)n.push(r);var s=n.map((function(e){return o.a.createElement("img",{src:a(101),alt:"",width:"10%",key:e})}));return console.log(t),console.log(n),console.log("trees:",e),o.a.createElement("div",null,s,t[1]>=50?o.a.createElement("img",{src:a(102),alt:"",width:"5%",key:"halftree"}):o.a.createElement(o.a.Fragment,null," "))}}]),n}(n.Component)),L=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={totalKilometer:"0",totalCo2Saved:"0",totalTreeCapacitySaved:"0",co2emission:"",oneWay:!0,returning:!1},e.calculate=function(){var t=e.state.kilometer,a=parseFloat(t.split("km"));console.log("Co2 logic",a)},e.handleSubmit=function(t){console.log(e.state.oneWay),t.preventDefault();var a=e.props;console.log("Final data is: ",a),w.a.post("/api/routes",{startpoint:e.state.startpoint,endpoint:e.state.endpoint,kilometer:e.state.returning?2*parseFloat(e.state.kilometer.split("km"))+"km":e.state.kilometer,co2emission:e.state.returning?2*parseFloat(e.state.co2emission):e.state.co2emission,oneWay:e.state.oneWay,returning:e.state.returning}).then((function(){e.refreshDasboardAfterSaving(),console.log("CO2 Data:",e.state.co2emission),e.props.getData(),e.props.closeShowRouteInfo()})).catch((function(e){console.log(e)}))},e.handleCheckboxOneChange=function(t){e.state.oneWay?e.setState({oneWay:!1,returning:!0}):e.setState({oneWay:t.target.checked,returning:!1})},e.handleCheckboxTwoChange=function(t){e.state.returning?e.setState({oneWay:!0,returning:!1}):e.setState({oneWay:!1,returning:t.target.checked})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.refreshDasboardAfterSaving(),this.props.getData()}},{key:"refreshDasboardAfterSaving",value:function(){var e=this;w.a.get("api/routes").then((function(t){for(var a=0,n=0,o=0,r=0;r<t.data.length;r++){var s=parseFloat(t.data[r].kilometer.split("km")),l=parseFloat(t.data[r].co2emission);console.log(s),a+=s,o=((n+=l)/23.2).toFixed(1),console.log(n)}console.log(a),console.log(t.data),console.log(t.data[0].kilometer),e.setState({totalKilometer:a,totalCo2Saved:n,totalTreeCapacitySaved:o}),e.props.getData()})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.state.showRouteInfo?o.a.createElement("div",{className:"routeDetails"},o.a.createElement("h3",null,"Your Search Route details:"),o.a.createElement("div",{className:"checkboxContainer"},o.a.createElement("div",{className:"container"},o.a.createElement("label",{for:"oneWay"},"one way",o.a.createElement("input",{type:"checkbox",onChange:this.handleCheckboxOneChange,id:"oneWay",name:"oneWay",checked:this.state.oneWay}),o.a.createElement("span",{className:"checkmark"}))),o.a.createElement("div",{className:"container"},o.a.createElement("label",{for:"return"},"return",o.a.createElement("input",{type:"checkbox",onChange:this.handleCheckboxTwoChange,id:"return",name:"return",checked:this.state.returning}),o.a.createElement("span",{className:"checkmark"})))),o.a.createElement("p",null,o.a.createElement("b",null,"From: "),o.a.createElement("span",{className:"numbers1"},this.state.startpoint)),o.a.createElement("p",null,o.a.createElement("b",null,"To:"),o.a.createElement("span",{className:"numbers1"}," ",this.state.endpoint)),o.a.createElement("p",null,o.a.createElement("b",null,"Distance: "),o.a.createElement("span",{className:"numbers1"},this.state.kilometer)),o.a.createElement("p",null,o.a.createElement("b",null,"CO2: "),o.a.createElement("span",{className:"numbers"},this.state.co2emission,"kg")),o.a.createElement("button",{className:"saveRouteBtn animate__animated animate__bounce",onClick:this.handleSubmit,type:"button"},"Save this Route")):"",o.a.createElement("div",{className:"dashboard"},o.a.createElement("h3",null,"Your travel Dashboard"),o.a.createElement("p",null,o.a.createElement("b",null,"Total kilometers cycled:")," ",o.a.createElement("span",{className:"numbers"},parseFloat(this.state.totalKilometer).toFixed(2))," ","km"),o.a.createElement("p",null,o.a.createElement("b",null,"Total CO2 saved:")," ",o.a.createElement("span",{className:"numbers"},parseFloat(this.state.totalCo2Saved).toFixed(2))," ","kg"),o.a.createElement("p",null,o.a.createElement("b",null,"Trees to plant to offset CO2 footprint:")," ",o.a.createElement("span",{className:"numbers"},parseFloat(this.state.totalTreeCapacitySaved).toFixed(2))," ","trees"),o.a.createElement(U,{routes:this.props.routes})))}}],[{key:"getDerivedStateFromProps",value:function(e){return{startpoint:e.startpoint,endpoint:e.endpoint,kilometer:e.kilometer,co2emission:parseFloat(203.182*parseInt(e.kilometer)/1e3).toFixed(2),showInfo:!0,showRouteInfo:e.showRouteInfo}}}]),a}(n.Component),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={user:e.props.user,showButton:!1,startpoint:"",endpoint:"",lat:52.52,lng:13.405,zoom:13,kilometer:"",routes:[],showRouteInfo:!1},e.showRouteInfo=function(){e.setState({showRouteInfo:!0})},e.componentDidMount=function(){e.getData();var t=new E.a.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[-79.4512,43.6568],zoom:13});t.addControl(new d.a({accessToken:E.a.accessToken,unit:"metric",profile:"mapbox/cycling"}),"top-left"),t.addControl(new E.a.NavigationControl),setInterval((function(){var t=document.querySelector(".mapbox-directions-route-summary > h1");!t||e.state.showButton||e.state.buttonClick?!t&&e.state.showButton&&e.setState({showButton:!1}):e.setState({showButton:!0})}),500)},e.getRoute=function(t){t.preventDefault();var a=document.querySelector(".mapbox-directions-route-summary > h1").innerHTML,n=document.getElementsByClassName("mapboxgl-ctrl-geocoder"),o=n[0].querySelector("input").value,r=n[1].querySelector("input").value;e.setState({startpoint:o,endpoint:r,kilometer:a,showButton:!1,buttonClick:!0}),e.showRouteInfo()},e.closeShowRouteInfo=function(){e.setState({showRouteInfo:!1})},e.setUser=function(t){e.setState({user:t})},e.getData=function(){w.a.get("/api/routes").then((function(t){console.log("the routes",t);var a=document.getElementsByClassName("geocoder-icon-close");console.log("hello",a),a[0].click(),a[1].click(),e.setState({routes:t.data.reverse(),buttonClick:!1,startpoint:"",endpoint:"",kilometer:""}),console.log("routes:",e.state.routes)})).catch((function(e){console.log(e)}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return console.log("Heeeiiiii",this.state.user),o.a.createElement("div",{className:"App"},o.a.createElement(x,{user:this.state.user,setUser:this.setUser}),o.a.createElement("div",{className:"pageContent"},o.a.createElement("div",{id:"map",className:"map",borderStyle:"double",style:this.state.user?{}:{display:"none"}},o.a.createElement(p.a,Object.assign({},this.state.viewport,{onViewportChange:function(t){return e.setState(t)},mapboxApiAccessToken:"pk.eyJ1IjoidmljdG9yaWF0b3JpYSIsImEiOiJja2EzbHVrMnowMzBzM2tyd2VsNnI2YnFiIn0.rZpPyrN5hdNxsnVtAWWCOQ"}))),o.a.createElement("div",{className:"layout"},this.state.showButton?o.a.createElement("button",{className:"calculateCO2 animate__animated animate__bounce",onClick:this.getRoute},"Calculate CO2 for this route"):"",this.state.user?o.a.createElement(B,{exact:!0,path:"/",user:this.state.user,startpoint:this.state.startpoint,endpoint:this.state.endpoint,kilometer:this.state.kilometer,getData:this.getData,showRouteInfo:this.state.showRouteInfo,closeShowRouteInfo:this.closeShowRouteInfo,routes:this.state.routes,component:L}):o.a.createElement(D.b,{exact:!0,path:"/",render:function(t){return o.a.createElement(I,Object.assign({user:e.state.user},t))}}),o.a.createElement(B,{exact:!0,path:"/routes",user:this.state.user,routes:this.state.routes,component:_}),o.a.createElement(B,{exact:!0,path:"/routes/:id",user:this.state.user,getData:this.getData,component:T}),o.a.createElement(D.b,{exact:!0,path:"/signup",render:function(t){return o.a.createElement(N,Object.assign({setUser:e.setUser},t))}}),o.a.createElement(D.b,{exact:!0,path:"/login",render:function(t){return o.a.createElement(F,Object.assign({setUser:e.setUser},t))}}))))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));w.a.get("/api/auth/loggedin").then((function(e){console.log("User",e.data),s.a.render(o.a.createElement(l.a,null,o.a.createElement(A,{user:e.data}),o.a.createElement(o.a.Fragment,null,o.a.createElement("footer",null,o.a.createElement("ul",{className:"footer-options"},o.a.createElement("li",{className:"footer-link"},o.a.createElement("a",{href:"#",className:"footer-linktext"})),o.a.createElement("li",{className:"footer-link"},o.a.createElement("a",{href:"#",className:"footer-linktext"}))),o.a.createElement("div",null,"\xa9 2021 Developed by Travel-Clever Team. All Rights Reserved.")))),document.getElementById("root"))})).catch((function(e){return console.log(e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,t,a){e.exports=a(103)},69:function(e,t,a){},72:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){e.exports=a.p+"static/media/black_bike_transparent.48822269.png"},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.364c24d0.chunk.js.map