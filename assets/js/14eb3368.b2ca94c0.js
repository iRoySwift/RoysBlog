"use strict";(self.webpackChunkroys_blog=self.webpackChunkroys_blog||[]).push([[9817],{4067:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(7294),r=n(3725),i="breadcrumbsContainer_Xlws",l="breadcrumbsItemLink_e5ie",s=n(6010),c=n(9960),o=n(4996);function m(e){var t=e.children,n=e.href,r=(0,s.Z)("breadcrumbs__link",l);return n?a.createElement(c.Z,{className:r,href:n},t):a.createElement("span",{className:r},t)}function u(e){var t=e.children,n=e.active;return a.createElement("li",{className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})},t)}function d(){var e=(0,o.Z)("/");return a.createElement(u,null,a.createElement(m,{href:e},"\ud83c\udfe0"))}function v(){var e=(0,r.s1)(),t=(0,r.Ns)();return e?a.createElement("nav",{className:(0,s.Z)(r.kM.docs.docBreadcrumbs,i),"aria-label":"breadcrumbs"},a.createElement("ul",{className:"breadcrumbs"},t&&a.createElement(d,null),e.map((function(t,n){return a.createElement(u,{key:n,active:n===e.length-1},a.createElement(m,{href:t.href},t.label))})))):null}},8507:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(7294),r=n(3725),i=n(9960),l=n(6010),s="cardContainer_woeA",c="cardContainerLink_iOSj",o="cardTitle_pNjP",m="cardDescription_qC_k",u=n(3919),d=n(5999);function v(e){var t=e.href,n=e.children,r=(0,l.Z)("card margin-bottom--lg padding--lg",s,t&&c);return t?a.createElement(i.Z,{href:t,className:r},n):a.createElement("div",{className:r},n)}function h(e){var t=e.href,n=e.icon,r=e.title,i=e.description;return a.createElement(v,{href:t},a.createElement("h2",{className:(0,l.Z)("text--truncate",o),title:r},n," ",r),a.createElement("div",{className:(0,l.Z)("text--truncate",m),title:i},i))}function b(e){var t=e.item,n=(0,r.Wl)(t);return a.createElement(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})})}function f(e){var t,n=e.item,i=(0,u.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,r.xz)(null!=(t=n.docId)?t:void 0);return a.createElement(h,{href:n.href,icon:i,title:n.label,description:null==l?void 0:l.description})}function g(e){var t=e.item;switch(t.type){case"link":return a.createElement(f,{item:t});case"category":return a.createElement(b,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function E(e){var t=e.items;return a.createElement("div",{className:"row"},t.map((function(e,t){return a.createElement("article",{key:t,className:"col col--6"},a.createElement(g,{item:e}))})))}var p=n(1101),Z=n(1217),N=n(4474),k=n(7597),_=n(4067),L=n(9649),T=n(4996),y="generatedIndexPage_vzzw",w="title_qBh7";function x(e){var t=e.categoryGeneratedIndex,n=(0,r.jA)();return a.createElement(a.Fragment,null,a.createElement(Z.Z,{title:t.title,description:t.description,keywords:t.keywords,image:(0,T.Z)(t.image)}),a.createElement("div",{className:y},a.createElement(N.Z,null),a.createElement(_.Z,null),a.createElement(k.Z,null),a.createElement("header",null,a.createElement(L.Z,{as:"h1",className:w},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("main",{className:"margin-top--lg"},a.createElement(E,{items:n.items})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(p.Z,{previous:t.navigation.previous,next:t.navigation.next}))))}},1101:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7462),r=n(7294),i=n(5999),l=n(1750);function s(e){var t=e.previous,n=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},r.createElement("div",{className:"pagination-nav__item"},t&&r.createElement(l.Z,(0,a.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.createElement(l.Z,(0,a.Z)({},n,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}},7597:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(5999),i=n(3725),l=n(6010);function s(e){var t=e.className,n=(0,i.E6)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,i.kM.docs.docVersionBadge,"badge badge--secondary")},a.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},4474:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7294),r=n(2263),i=n(9960),l=n(5999),s=n(5551),c=n(3725),o=n(6010);var m={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function u(e){var t=m[e.versionMetadata.banner];return a.createElement(t,e)}function d(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(i.Z,{to:n,onClick:r},a.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){var t,n=e.className,i=e.versionMetadata,l=(0,r.Z)().siteConfig.title,m=(0,s.gA)({failfast:!0}).pluginId,v=(0,c.J)(m).savePreferredVersionName,h=(0,s.Jo)(m),b=h.latestDocSuggestion,f=h.latestVersionSuggestion,g=null!=b?b:(t=f).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,o.Z)(n,c.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(u,{siteTitle:l,versionMetadata:i})),a.createElement("div",{className:"margin-top--md"},a.createElement(d,{versionLabel:f.label,to:g.path,onClick:function(){return v(f.name)}})))}function h(e){var t=e.className,n=(0,c.E6)();return n.banner?a.createElement(v,{className:t,versionMetadata:n}):null}},9649:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7462),r=n(3366),i=n(7294),l=n(6010),s=n(5999),c=n(3725),o="anchorWithStickyNavbar_mojV",m="anchorWithHideOnScrollNavbar_R0VQ",u=["as","id"],d=["as"];function v(e){var t,n=e.as,d=e.id,v=(0,r.Z)(e,u),h=(0,c.LU)().navbar.hideOnScroll;return d?i.createElement(n,(0,a.Z)({},v,{className:(0,l.Z)("anchor",(t={},t[m]=h,t[o]=!h,t)),id:d}),v.children,i.createElement("a",{className:"hash-link",href:"#"+d,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(n,v)}function h(e){var t=e.as,n=(0,r.Z)(e,d);return"h1"===t?i.createElement("h1",(0,a.Z)({},n,{id:void 0}),n.children):i.createElement(v,(0,a.Z)({as:t},n))}},1750:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(9960);function i(e){var t=e.permalink,n=e.title,i=e.subLabel;return a.createElement(r.Z,{className:"pagination-nav__link",to:t},i&&a.createElement("div",{className:"pagination-nav__sublabel"},i),a.createElement("div",{className:"pagination-nav__label"},n))}}}]);