webpackJsonp([0xd3f84b0c8c15],{34:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return u.default.createElement("a",(0,c.default)({},e,{onClick:function(t){"function"==typeof e.onClick&&e.onClick();var n=!0;return(0!==t.button||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.defaultPrevented)&&(n=!1),e.target&&"_self"!==e.target.toLowerCase()&&(n=!1),window.ga?window.ga("send","event",{eventCategory:"Outbound Link",eventAction:"click",eventLabel:e.href,transport:n?"beacon":"",hitCallback:function(){n&&(document.location=e.href)}}):n&&(document.location=e.href),!1}}))}t.__esModule=!0,t.OutboundLink=void 0;var a=n(27),c=o(a),i=n(1),u=o(i),l=n(2),s=o(l);r.propTypes={href:s.default.string,target:s.default.string,onClick:s.default.func},t.OutboundLink=r},147:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(34),i=n(1),u=n(4),l=n(9),s=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){return i.createElement(l.ProjectLayout,{allProjects:this.props.data.allProjects.edges.map(function(e){return e.node}),currentProject:this.props.data.project.edges[0].node,mainImage:this.props.data.mainImage.childImageSharp.sizes},i.createElement(u.Container,null,i.createElement(u.Row,null,i.createElement(u.Col,{className:"text-center"},i.createElement(c.OutboundLink,{href:"https://vrulez.com",target:"_blank",className:"btn"},"Visit the site")))))},t}(i.Component);t.default=s,t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-projects-vrulez-tsx-98cd1d171dda95964575.js.map