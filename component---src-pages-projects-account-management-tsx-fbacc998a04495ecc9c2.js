(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"pageQuery",function(){return h});var a=n(6),o=n.n(a),s=n(0),r=n(147),l=n(141),i=n(144),c=n(142),m=n(146),d=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.render=function(){return s.createElement(m.a,{allProjects:this.props.data.allProjects.edges.map(function(e){return e.node}),currentProject:this.props.data.project.edges[0].node,mainImage:this.props.data.mainImage.childImageSharp.fluid},s.createElement(l.i,null,s.createElement(l.v,{className:"justify-content-center"},s.createElement(l.g,{lg:"10"},s.createElement("h3",null,"About The Company"),s.createElement("p",null,"PlanGrid’s primary objective is to make intuitive and impactful technology for people in the construction industry. Its construction productivity software doesn’t only allow field workers to store, view, and share blueprints, but also enables stakeholders in a project to work together throughout the project life cycle."))),s.createElement(l.v,{className:"justify-content-center"},s.createElement(l.g,{lg:"10"},s.createElement("h3",null,"Background"),s.createElement("p",null,"The Admin Console is a part of PlanGrid web products that allows IT administrators to add, remove, and manage user accounts as well as to purchase PlanGrid licenses for users who involve in organization projects."),s.createElement("p",null,"PlanGrid offers multiple types of licenses, and each comes with a different number of sheet storage limit. The licenses range from basic ones that come with limited sheet storage to the most expensive one that allows unlimited sheet storage."))),s.createElement(l.v,{className:"justify-content-center"},s.createElement(l.g,{lg:"10"},s.createElement("h3",null,"Problems"),s.createElement("p",{className:r.quote},"With the current system, IT administrators have a limited capability to monitor license usage. While they see information such as the number of available and used licenses, they are unable to access a list of projects that their users are working on."),s.createElement("p",null,"There are times when employees use company license to work on their personal projects. Problems occur when they run out of sheet storage and request for a license upgrade. Since the IT admins can't see list of projects that the employees are working on, it's challenging to know if the extra storage is required for the company work. As a result, the company has to unnecessary pay extra to upgrade licenses for these employees."))),s.createElement(l.v,{className:"justify-content-center"},s.createElement(l.g,{lg:"10"},s.createElement("h3",null,"Project Goal"),s.createElement("p",null,"The overall goal of this project is to design a workflow that allowed the IT administrators to set up organization ownership of user accounts in addition to the existing workflow. This feature will enables the IT admins to see lists of project that their users are working on."))),s.createElement(l.v,{className:"justify-content-center"},s.createElement(l.g,{lg:"10"},s.createElement("h3",null,"The Current Admin Console"),s.createElement("p",null,'The current version of Admin Console consists of two major components: the usage of different license types and the user log that display a list of people working on company projects. The IT admins can click "add license" button to buy more licenses and click "new users" button to add more people to the organization.',s.createElement("p",null,"From a design perspective, not every part of the Admin Console is built using components from PlanGrid’s design system. For example, the “more options icon” at the end of the row of user log doesn’t exist in other parts of PlanGrid web app.")))),s.createElement(l.v,{className:"justify-content-center"},s.createElement(l.g,{lg:"10"},s.createElement(c.a,{src:this.getImageUrl("current-AC.jpg"),alt:"Current Admin Console UI",className:"img-fluid"}))),s.createElement(l.v,{className:"justify-content-center"},s.createElement(l.g,{lg:"10"},s.createElement("h3",null,"Designing the Solution"),s.createElement("h4",null,"User Flow"),s.createElement("p",null,"During project onboarding, I worked with a project manager to understand project scope and gather feature requirements. From there, I created a user workflow diagram to explore and identify different paths that the IT admins could perform to complete their tasks. In the diagram, an IT admin can add new users or manage the existing users. If he decides to manage a user, he’ll send a request to manage the user account. If he just wants the user to work on company projects, he’ll send an invitation to the user to join the organization. On the other end, the user can accept or reject the request or the invitation."),s.createElement("p",null,"In addition to this user flow diagram, you can also check out a complete version of user workflow map here."))),s.createElement(l.v,{className:"justify-content-center"},s.createElement(l.g,{lg:"10"},s.createElement(c.a,{src:this.getImageUrl("flow.png"),alt:"Current Admin Console UI",className:"img-fluid"}))),s.createElement(l.v,{className:"justify-content-center"},s.createElement(l.g,{lg:"10"},s.createElement("h4",null,"Wireframes"),s.createElement("p",null,"lorem ipsum"))),s.createElement(l.v,{className:"justify-content-center"},s.createElement(l.g,{lg:"5"},s.createElement(c.a,{src:this.getImageUrl("add-new-user.jpg"),alt:"Collect information using sticky notes",className:"img-fluid"})),s.createElement(l.g,{lg:"5"},s.createElement(c.a,{src:this.getImageUrl("invite-existing-user.jpg"),alt:"Whiteboard with research",className:"img-fluid"}))),s.createElement(l.v,{className:"justify-content-center"},s.createElement(l.g,{lg:"10"},s.createElement("h3",null,"Enhance the User Experience"),s.createElement("p",null,"1. The modal box for add new user flow"),s.createElement("p",null,"The current design of the modal box requires the IT admins to scroll back and forth to view license options and email addresses they've entered. By adding account management section to the box, its height will increases even more. Since the modal box handles a goal-oriented task, the endless scrolling in the current design might prevent the IT admins to quickly accomplish their tasks. As a result, I decided to explore a new design pattern that would solve the endless scrolling problem. I divided the box into 2 columns and placed the account management section on the left side and the license option to the right side."),s.createElement("p",null,"2. In flow license purchase"),s.createElement("p",null,"The current design of the modal box requires the IT admins to scroll back and forth to view license options and email addresses they've entered. By adding account management section to the box, its height will increases even more. Since the modal box handles a goal-oriented task, the endless scrolling in the current design might prevent the IT admins to quickly accomplish their tasks. As a result, I decided to explore a new design pattern that would solve the endless scrolling problem. I divided the box into 2 columns and placed the account management section on the left side and the license option to the right side."))),s.createElement(l.v,{className:"justify-content-center"},s.createElement(l.g,{lg:"10"},s.createElement("h3",null,"In flow license purchase"),s.createElement("p",null,"Currently, the IT admins can only purchase licenses from a user log page. They will have to abandon the add new users flow to go back to the user log and purchase additional licenses before being able to add new users. This process can waste their time and increase their frustration level. Therefore, I'm designing a workflow and user interfaces that will allow the IT admins to buy additional licenses without having to discard the entire process.")))))},n.getImageUrl=function(e){return Object(i.withPrefix)("/images/"+this.props.data.project.edges[0].node.imageFolder+"/"+e)},t}(s.Component),h="1644159875"},142:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(6),o=n.n(a),s=n(46),r=n.n(s),l=n(0),i=n(141),c=n(143),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(r()(r()(n))),n}o()(t,e);var n=t.prototype;return n.toggleModal=function(){this.setState({isModalOpen:!this.state.isModalOpen})},n.render=function(){return l.createElement(l.Fragment,null,l.createElement("img",{src:this.props.src,alt:this.props.alt,className:c.imageBox+" "+this.props.className,onClick:this.toggleModal}),l.createElement(i.n,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,centered:!0,fade:!1,className:c.modal},l.createElement(i.q,{toggle:this.toggleModal,charCode:"X"},this.props.alt),l.createElement(i.o,{className:"text-center"},l.createElement("img",{src:this.props.src,alt:this.props.alt,className:this.props.className})),l.createElement(i.p,null,l.createElement(i.a,{color:"primary",onClick:this.toggleModal},"Close"))))},t}(l.Component)},143:function(e,t,n){e.exports={imageBox:"image-box-module--image-box--1b_2B",modal:"image-box-module--modal--6kXAf"}},147:function(e,t,n){e.exports={imageTitle:"styles-module--image-title--16noi",quote:"styles-module--quote--2RFU9"}}}]);
//# sourceMappingURL=component---src-pages-projects-account-management-tsx-fbacc998a04495ecc9c2.js.map