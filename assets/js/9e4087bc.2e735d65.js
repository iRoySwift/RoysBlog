"use strict";(self.webpackChunkroys_blog=self.webpackChunkroys_blog||[]).push([[3608],{4804:(e,r,s)=>{s.r(r),s.d(r,{default:()=>o});s(959);var t=s(8634),a=s(3204),i=s(4039),l=s(9737),n=s(7780),c=s(1527);function h(e){let{year:r,posts:s}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.Z,{as:"h3",id:r,children:r}),(0,c.jsx)("ul",{children:s.map((e=>(0,c.jsx)("li",{children:(0,c.jsxs)(t.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function d(e){let{years:r}=e;return(0,c.jsx)("section",{className:"margin-vert--lg",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row",children:r.map(((e,r)=>(0,c.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,c.jsx)(h,{...e})},r)))})})})}function o(e){let{archive:r}=e;const s=(0,a.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),t=(0,a.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const r=e.reduce(((e,r)=>{const s=r.metadata.date.split("-")[0],t=e.get(s)??[];return e.set(s,[r,...t])}),new Map);return Array.from(r,(e=>{let[r,s]=e;return{year:r,posts:s}}))}(r.blogPosts);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.d,{title:s,description:t}),(0,c.jsxs)(l.Z,{children:[(0,c.jsx)("header",{className:"hero hero--primary",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(n.Z,{as:"h1",className:"hero__title",children:s}),(0,c.jsx)("p",{className:"hero__subtitle",children:t})]})}),(0,c.jsx)("main",{children:h.length>0&&(0,c.jsx)(d,{years:h})})]})]})}}}]);