(this["webpackJsonptypescript-react-boilerplate"]=this["webpackJsonptypescript-react-boilerplate"]||[]).push([[19],{105:function(e,i,t){"use strict";t.d(i,"a",(function(){return L}));var a=t(1),s=t(0),c=t(113),n=t(19),r=t(240),l=t(164),o=r.a.SubMenu,u=r.a.ItemGroup,m=l.a.useBreakpoint,d=function(){var e=m().md;return Object(a.jsxs)(r.a,{mode:e?"horizontal":"inline",children:[Object(a.jsx)(r.a.Item,{children:Object(a.jsx)(n.c,{className:"navbar-item",to:"/",children:"Home"})},"key-home"),Object(a.jsxs)(o,{title:"Services",children:[Object(a.jsxs)(u,{title:"Features",children:[Object(a.jsx)(r.a.Item,{children:Object(a.jsx)(n.c,{to:"/feature1",children:"Option 1"})},"setting:1"),Object(a.jsx)(r.a.Item,{children:Object(a.jsx)(n.c,{to:"/feature2",children:"Option 2"})},"setting:2")]}),Object(a.jsxs)(u,{title:"Demo",children:[Object(a.jsx)(r.a.Item,{children:Object(a.jsx)(n.c,{to:"/demo1",children:"Option 1"})},"setting:3"),Object(a.jsx)(r.a.Item,{children:Object(a.jsx)(n.c,{to:"/demo2",children:"Option 2"})},"setting:4")]})]},"sub1"),Object(a.jsx)(r.a.Item,{children:Object(a.jsx)(n.c,{className:"navbar-item",to:"/about",children:"About"})},"key-about"),Object(a.jsx)(r.a.Item,{children:Object(a.jsx)(n.c,{className:"navbar-item",to:"/contact",children:"Contact"})},"key-contact")]})},j=t(432),b=t(25),p=t(17),h=t(6),O=l.a.useBreakpoint,x={logout:b.c},v=Object(p.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}),x)((function(e){var i=e.isAuthenticated,t=e.logout,s=e.user,c=O().md,l=Object(a.jsxs)(r.a,{mode:c?"horizontal":"inline",children:[Object(a.jsx)(r.a.Item,{children:Object(a.jsx)(n.c,{className:"navbar-item primary",to:h.a.LOGIN,children:"Sign In"})},"menukey-login"),Object(a.jsx)(r.a.Item,{children:Object(a.jsx)(n.c,{className:"navbar-item",to:h.a.REGISTER,children:"Register"})},"menukey-signup")]}),o=Object(a.jsxs)(r.a,{mode:c?"horizontal":"inline",children:[Object(a.jsx)(r.a.Item,{children:Object(a.jsxs)(n.c,{className:"navbar-item primary",to:h.a.PROFILE,children:["Hi ",Object(a.jsx)("strong",{children:s.username})]})},"menukey-profile"),Object(a.jsx)(r.a.Item,{children:Object(a.jsx)(n.c,{className:"navbar-item primary",to:h.a.HOME,onClick:function(){return t()},children:Object(a.jsxs)("span",{children:[Object(a.jsx)(j.a,{}),"Log Out"]})})},"menukey-login")]});return Object(a.jsx)(a.Fragment,{children:i?o:l})})),f=t(137),g=t(420),q=function(){var e=Object(s.useState)(!1),i=Object(c.a)(e,2),t=i[0],r=i[1];return Object(a.jsx)("div",{className:"navbar-section",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)("div",{className:"navbar-logo",children:Object(a.jsx)(n.c,{to:"/",className:"navbar-item",activeClassName:"is-active",children:"REACT TS"})}),Object(a.jsxs)("div",{className:"navbar-menu",children:[Object(a.jsx)("div",{className:"navbar-left-menu",children:Object(a.jsx)(d,{})}),Object(a.jsx)("div",{className:"navbar-right-menu",children:Object(a.jsx)(v,{})})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(f.a,{className:"navbar-btnBars",type:"primary",onClick:function(){r(!0)},children:Object(a.jsx)("span",{className:"navbar-btnBars-span"})}),Object(a.jsxs)(g.a,{title:"Drawer navbar",placement:"right",closable:!0,onClose:function(){r(!1)},visible:t,children:[Object(a.jsx)(d,{}),Object(a.jsx)(v,{})]})]})]})})})},N=t(433),y=t(434),k=t(435),I=t(436),C=t(430),S=function(){return Object(a.jsx)("div",{className:"footer",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"footer-inner",children:[Object(a.jsx)("div",{className:"footer-logo",children:Object(a.jsx)("a",{href:"/",children:"REACT TS"})}),Object(a.jsxs)("ul",{className:"footer-socials",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/tienduy-nguyen",children:Object(a.jsx)(N.a,{})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.twitter.com/tienduy_nguyen",children:Object(a.jsx)(y.a,{})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/",children:Object(a.jsx)(k.a,{})})})]}),Object(a.jsx)("div",{className:"copyright",children:"Copyright \xa9 2020 REACT TS"}),Object(a.jsx)(C.a,{children:Object(a.jsx)("div",{className:"go-top",children:Object(a.jsx)(I.a,{})})})]})})})},w=t(410),A=w.a.Header,E=w.a.Content,T=w.a.Footer,L=function(e){var i=e.children;return Object(a.jsxs)(w.a,{className:"main-layout",children:[Object(a.jsx)(A,{children:Object(a.jsx)(q,{})}),Object(a.jsx)(E,{className:"layout-children",children:i}),Object(a.jsx)(T,{children:Object(a.jsx)(S,{})})]})}},427:function(e,i,t){"use strict";t.r(i);var a=t(1),s=t(0),c=t.n(s),n=function(){return Object(a.jsx)("div",{className:"static-pages-section",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"block-title",children:Object(a.jsx)("h2",{children:"Service Page - Option 2"})}),Object(a.jsxs)("div",{className:"feature-content",children:[Object(a.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate omnis eius totam aperiam? Illo eius repudiandae nostrum iste dignissimos ad molestias facere atque, itaque placeat dolores dolorum doloremque? Sint."}),Object(a.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni rerum aperiam aspernatur debitis expedita eligendi facere non! Quibusdam accusamus accusantium maiores nostrum amet, neque quod quae eos hic aliquid veniam mollitia delectus cum qui aliquam laboriosam voluptate natus dolores est? Molestias, quidem fugiat placeat expedita dignissimos unde illum inventore recusandae."}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, recusandae?"}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus voluptates odit cum illo suscipit voluptatem mollitia in laudantium natus. Tempore molestiae repudiandae beatae, numquam repellat, reprehenderit vero omnis consequuntur reiciendis voluptatibus quia placeat debitis quod iure ab praesentium doloremque ipsum aperiam eveniet soluta quisquam est quaerat error. Ad qui nulla, inventore similique animi numquam est soluta cupiditate suscipit! Ex id tempore pariatur aspernatur amet laborum et nisi! Architecto quidem ullam, tempore voluptate facere aliquam dicta error totam impedit, distinctio dolores, consectetur rerum pariatur molestiae perspiciatis! Obcaecati enim id sapiente impedit velit earum, adipisci dignissimos alias est quas odit nulla ad nam illum inventore veniam molestias quis quam consequatur! Alias similique quas possimus repellendus accusamus doloremque tempore quidem ipsum praesentium laborum laudantium nesciunt illum, sapiente minima esse amet libero temporibus cum optio et molestiae magnam neque facere earum? Maxime dolores autem ad, officia sint repellendus accusamus officiis iusto illo labore animi odio incidunt exercitationem blanditiis quod sequi, numquam voluptate adipisci, mollitia enim rem! Omnis eveniet odit mollitia maiores minus ratione deleniti pariatur quas fuga, ipsam doloremque voluptates fugiat nisi velit excepturi, ullam in laudantium facere impedit quidem dolorum ipsa exercitationem dolores! Excepturi earum vel natus rem culpa nihil, repudiandae velit."})]})]})})},r=t(105),l=function(){return Object(a.jsx)(r.a,{children:Object(a.jsx)(n,{})})},o=c.a.memo(l);i.default=o}}]);
//# sourceMappingURL=19.6e4b01d0.chunk.js.map