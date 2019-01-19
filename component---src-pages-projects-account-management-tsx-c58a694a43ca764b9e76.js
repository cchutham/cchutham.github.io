(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m}),n.d(t,"pageQuery",function(){return u});var a=n(6),r=n.n(a),o=n(0),s=n(155),c=n(140),l=n(142),i=n(147),d=n(146),m=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.render=function(){return o.createElement(d.a,{allProjects:this.props.data.allProjects.edges.map(function(e){return e.node}),currentProject:this.props.data.project.edges[0].node,mainImage:this.props.data.mainImage.childImageSharp.fluid},o.createElement(c.i,null,o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement("h3",null,"About The Company"),o.createElement("p",null,"PlanGrid has a primary objective to make intuitive and impactful technology for people in the construction industry. Its construction productivity software doesn’t only allow field workers to store, view, and share blueprints, but also enables stakeholders in a project to work together throughout the project life cycle."))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement("h3",null,"Background"),o.createElement("p",null,"Admin Console is a part of PlanGrid web products that allows IT administrators to add, remove, and manage user accounts as well as to purchase PlanGrid licenses for users who involve in organization projects."),o.createElement("p",null,"PlanGrid offers multiple types of licenses, and each comes with a different number of sheet storage limit. The licenses range from basic ones that come with limited sheet storage to the most expensive one that allows unlimited sheet storage."))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement("h3",null,"My Roles &amps;Project Goals"),o.createElement("p",null,"The main goals of this project are to enhance user experience for the Admin Console and to create an additional workflow that allows the IT admins to set up organization ownership of user accounts. As a designer, I design the workflow that will give IT admins an ability to manage user accounts and redesign web interfaces using components from PlanGrid's Design System."))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement("h3",null,"Problems"),o.createElement("p",{className:s.quote},"The current system restricts IT Admins to only purchase license from a user log page. It also limits their capability to effectively monitor license usage as they are unable to access a list of projects that their users are working on."),o.createElement("p",null,"There are times when employees use company license to work on their personal projects. Problems occur when they run out of sheet storage and request for a license upgrade. Since the IT admins can't see list of projects that the employees are working on, it's challenging to know if the extra storage is required for the company work. As a result, the company has to unnecessary pay extra to upgrade licenses for these employees."),"Given the problem, I worked with a project manager to review existing user flow, understand project scope, and gather feature requirements. During project onboarding, I worked with a project manager to understand project scope and gather feature requirements. From there, I created a user workflow diagram to explore and identify different paths that the IT admins could perform to complete their tasks. In the diagram, an IT admin can add new users or manage the existing users. If he decides to manage a user, he’ll send a request to manage the user account. If he just wants the user to work on company projects, he’ll send an invitation to the user to join the organization. On the other end, the user can accept or reject the request or the invitation.")),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement("h3",null,"Project Goal"),o.createElement("p",null))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement("h3",null,"The Current Admin Console"),o.createElement("p",null,'The current version of Admin Console consists of two major components: the usage of different license types and the user log that display a list of people working on company projects. The IT admins can click "add license" button to buy more licenses and click "new users" button to add more people to the organization.',o.createElement("p",null,"From a design perspective, not every part of the Admin Console is built using components from PlanGrid’s design system. For example, the “more options icon” at the end of the row of user log doesn’t exist in other parts of PlanGrid web app.")))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement(i.a,{src:this.getImageUrl("current-AC.jpg"),alt:"Current Admin Console UI",className:"img-fluid"}))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement("h3",null,"Designing the Solution"),o.createElement("h4",null,"User Flow"),o.createElement("p",null,"During project onboarding, I worked with a project manager to understand project scope and gather feature requirements. From there, I created a user workflow diagram to explore and identify different paths that the IT admins could perform to complete their tasks. In the diagram, an IT admin can add new users or manage the existing users. If he decides to manage a user, he’ll send a request to manage the user account. If he just wants the user to work on company projects, he’ll send an invitation to the user to join the organization. On the other end, the user can accept or reject the request or the invitation."),o.createElement("p",null,"In addition to this user flow diagram, you can also check out a complete version of user workflow map here."))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement(i.a,{src:this.getImageUrl("flow.png"),alt:"Current Admin Console UI",className:"img-fluid"}))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement("h4",null,"Wireframes"),o.createElement("p",null,"lorem ipsum"))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"5"},o.createElement(i.a,{src:this.getImageUrl("add-new-user.jpg"),alt:"Collect information using sticky notes",className:"img-fluid"})),o.createElement(c.g,{lg:"5"},o.createElement(i.a,{src:this.getImageUrl("invite-existing-user.jpg"),alt:"Whiteboard with research",className:"img-fluid"}))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement("h3",null,"Enhance the User Experience"),o.createElement("p",null,"1. The modal box for add new user flow"),o.createElement("p",null,"The current design of the modal box requires the IT admins to scroll back and forth to view license options and email addresses they've entered. By adding account management section to the box, its height will increases even more. Since the modal box handles a goal-oriented task, the endless scrolling in the current design might prevent the IT admins to quickly accomplish their tasks. As a result, I decided to explore a new design pattern that would solve the endless scrolling problem. I divided the box into 2 columns and placed the account management section on the left side and the license option to the right side."),o.createElement("p",null,"2. In flow license purchase"),o.createElement("p",null,"The current design of the modal box requires the IT admins to scroll back and forth to view license options and email addresses they've entered. By adding account management section to the box, its height will increases even more. Since the modal box handles a goal-oriented task, the endless scrolling in the current design might prevent the IT admins to quickly accomplish their tasks. As a result, I decided to explore a new design pattern that would solve the endless scrolling problem. I divided the box into 2 columns and placed the account management section on the left side and the license option to the right side."))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement("h3",null,"In flow license purchase"),o.createElement("p",null,"Currently, the IT admins can only purchase licenses from a user log page. They will have to abandon the add new users flow to go back to the user log and purchase additional licenses before being able to add new users. This process can waste their time and increase their frustration level. Therefore, I'm designing a workflow and user interfaces that will allow the IT admins to buy additional licenses without having to discard the entire process.")))))},n.getImageUrl=function(e){return Object(l.withPrefix)("/images/"+this.props.data.project.edges[0].node.imageFolder+"/"+e)},t}(o.Component),u="1644159875"},143:function(e,t,n){e.exports={projectPage:"project-layout-module--project-page--i1SRU",btn:"project-layout-module--btn--3FTPY"}},144:function(e,t,n){e.exports={header:"project-header-module--header--3OSxi",subtitle:"project-header-module--subtitle--3mUpj",companyTerm:"project-header-module--company-term--27ClN"}},145:function(e,t,n){e.exports={smallDash:"protected-section-module--small-dash--2W_vZ"}},146:function(e,t,n){"use strict";n(141);var a=n(6),r=n.n(a),o=n(0),s=n(143),c=n(149),l=n.n(c),i=n(150),d=n(140),m=(n(151),n(142)),u=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.render=function(){return o.createElement(d.v,null,o.createElement(d.g,{xs:"6"},this.getPreviousProjectLink()),o.createElement(d.g,{xs:"6",className:"text-right"},this.getNextProjectLink()))},n.getPreviousProjectLink=function(){var e=this,t=this.props.projects,n=t.findIndex(function(t){return t.name==e.props.currentProject.name});if(0===n)return null;var a=t[n-1];return o.createElement(m.Link,{to:a.url},o.createElement("i",{className:"fas fa-chevron-left"})," ",a.name)},n.getNextProjectLink=function(){var e=this,t=this.props.projects,n=t.findIndex(function(t){return t.name==e.props.currentProject.name});if(n===t.length-1)return null;var a=t[n+1];return o.createElement(m.Link,{to:a.url},a.name," ",o.createElement("i",{className:"fas fa-chevron-right"}))},t}(o.Component),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.createElement(d.i,null,o.createElement(u,{projects:this.props.allProjects,currentProject:this.props.currentProject}))},t}(o.Component),p=n(144),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.createElement(d.i,{className:p.header},o.createElement(u,{projects:this.props.allProjects,currentProject:this.props.currentProject}),o.createElement(d.v,{className:"justify-content-center"},o.createElement(d.g,{lg:"10"},o.createElement("h1",null,this.props.currentProject.name),o.createElement("h4",{className:p.companyTerm},this.props.currentProject.company,", ",this.props.currentProject.term),o.createElement("h2",{className:p.subtitle},"— ",this.props.currentProject.description))))},t}(o.Component),g=n(46),b=n.n(g),w=n(152),E=n(145),j=n(154),y=n(153),v=n.n(y),P=["5b42389ef84139ae8643af2a1b369089a3e7298c47e590d18a201b87ebee51e8","83ac1f81c821f49dcd69ad10cce8b57c86ce0902e15776aadc2edbe26925bd33","e13aca4535aeb2e3e048bface0b25fac23d65e43b6f0c46c66cf38ba3bccdd0d","bca53ada79cb1febc267110d0d890bf862ddf31698e44835aa062b5db7e2404d","8d607a0cf2052c03e793bdbef576b17df8c7a99626d8c915f843143c033e4ed7","e24423c37fc0312c31af79fbdf5260e50f2e96c13c3c2a1dd218d12001fe39d1","b04da4304f0ff90bd7038990de132474654ebcb2ca119264da9327b02f162005","c0dcbf063af60b2e84613079d09be076979a91b8e03a237cc3c67753b7701eba","3841e6d4e4cbdaf8adffeeacc43911e00edad08bea26f62ecd77b25130173dd0","598427034543b344eacf5b60ac94d5a9c44f3dc6786ef7b1893e2dc8842dbccf","767c5ba5803c073d17815a2bdda729a8f0ba3c9d3c28f66f1f593c3349e10d31","a97d087a019c760196f813f851f6d8bafe3d1f9fcfa69229a04bde71ce339148","dc8e5ea02040747f4cf5d10ea7dc5c4b32aa44b71e7adea498421b69772f6bd4","3ad003a7823a1b94b7f0fc3d1c766473064adf77fcca0f6ac8ec3fd03f6585c4","7b8a9aba12189b67d5acfbc4bc3e30368b00cec3889d2e0ab8efe885a911dfae","7d8de942f2483e3fd3c0a412d166b50a882eeeb2f291a9099d2096778596f420","c9000d331c968e21288a961065842598ba5f476366b777049eab1f8780d9aa15","9f075e1469df2af1bd79447c7de3eda5d121f0644456afdefd156fa98e93d3e5","acb7b3b2eec3e44cdbc9fd3031d11affb356af1360d5049b69d406c203ae0059"],k=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleFormSubmit=n.handleFormSubmit.bind(b()(b()(n))),n.handlePasswordChange=n.handlePasswordChange.bind(b()(b()(n))),n.cookies=new j.a,n.state={shouldShowContent:n.checkCookie(),isInvalidPassword:!1,password:""},n}r()(t,e);var n=t.prototype;return n.handlePasswordChange=function(e){this.setState({password:e.target.value})},n.handleFormSubmit=function(e){var t=this.checkPassword(this.state.password);this.setState({shouldShowContent:t,isInvalidPassword:!t}),e.preventDefault()},n.checkPassword=function(e){var t=w("sha256").update(e).digest("hex");return!!this.checkPasswordHash(t)&&(this.cookies.set("ProjectHash",t,{maxAge:10800,path:"/"}),!0)},n.checkCookie=function(){var e=this.cookies.get("ProjectHash");return this.checkPasswordHash(e)},n.checkPasswordHash=function(e){return!!e&&(window.ga&&window.ga("send","event",{eventCategory:"ProjectHash",eventAction:"check",eventLabel:e}),-1!==P.indexOf(e))},n.renderPasswordSection=function(){return o.createElement(d.i,{className:"mt-5 mb-5"},o.createElement(d.v,null,o.createElement(d.g,{className:"text-center"},o.createElement("h3",null,"Password Protected"),o.createElement("p",null,"This project is protected under a NDA. Please enter a password to access the project."))),o.createElement(d.v,{className:"justify-content-center"},o.createElement(d.g,null,o.createElement(d.j,{onSubmit:this.handleFormSubmit,autoComplete:"off",inline:!0,className:"justify-content-center"},o.createElement(d.m,{for:"password",hidden:!0},"Password"),o.createElement(d.l,{type:"password",name:"password",id:"password",placeholder:"Enter a password...",value:this.state.password,onChange:this.handlePasswordChange,autoComplete:"off",invalid:this.state.isInvalidPassword})," ",o.createElement(d.a,{type:"submit",color:"",className:"ml-2"},"Submit"),o.createElement(d.k,{className:"text-center"},"Incorrect password. Please try again.")))))},n.render=function(){return this.props.isProtected&&!this.state.shouldShowContent?this.renderPasswordSection():o.createElement(o.Fragment,null,o.createElement(d.i,null,o.createElement(d.v,{className:"justify-content-center"},o.createElement(d.g,{lg:"10"},o.createElement(v.a,{alt:"main project image",fluid:this.props.mainImage,className:"background-theme-color"}))),o.createElement(d.v,{className:"justify-content-center mt-3"},o.createElement(d.g,{lg:"10"},o.createElement("hr",{className:E.smallDash})))),this.props.children)},t}(o.Component);n.d(t,"a",function(){return I});var I=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.createElement(i.a,null,o.createElement(l.a,null,o.createElement("title",null,this.props.currentProject.name),o.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:300,400,400i,700",rel:"stylesheet"})),o.createElement("div",{className:s.projectPage},o.createElement(f,{allProjects:this.props.allProjects,currentProject:this.props.currentProject}),o.createElement(k,{mainImage:this.props.mainImage,isProtected:this.props.currentProject.isProtected},this.props.children),o.createElement(h,{allProjects:this.props.allProjects,currentProject:this.props.currentProject})))},t}(o.Component)},147:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n(6),r=n.n(a),o=n(46),s=n.n(o),c=n(0),l=n(140),i=n(148),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(s()(s()(n))),n}r()(t,e);var n=t.prototype;return n.toggleModal=function(){this.setState({isModalOpen:!this.state.isModalOpen})},n.render=function(){return c.createElement(c.Fragment,null,c.createElement("img",{src:this.props.src,alt:this.props.alt,className:i.imageBox+" "+this.props.className,onClick:this.toggleModal}),c.createElement(l.n,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,centered:!0,fade:!1,className:i.modal},c.createElement(l.q,{toggle:this.toggleModal,charCode:"X"},this.props.alt),c.createElement(l.o,{className:"text-center"},c.createElement("img",{src:this.props.src,alt:this.props.alt,className:this.props.className})),c.createElement(l.p,null,c.createElement(l.a,{color:"primary",onClick:this.toggleModal},"Close"))))},t}(c.Component)},148:function(e,t,n){e.exports={imageBox:"image-box-module--image-box--3n3h7",modal:"image-box-module--modal--a--Wc"}},155:function(e,t,n){e.exports={imageTitle:"styles-module--image-title--Zt6Pd",quote:"styles-module--quote--1E26q"}}}]);
//# sourceMappingURL=component---src-pages-projects-account-management-tsx-c58a694a43ca764b9e76.js.map