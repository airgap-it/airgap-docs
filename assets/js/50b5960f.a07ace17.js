"use strict";(self.webpackChunkairgap_docs=self.webpackChunkairgap_docs||[]).push([[248],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15087:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],u={title:"Secure Cold Wallet Setup Introduction",slug:"/airgap-vault/setup/introduction",sidebar_label:"Introduction"},c=void 0,l={unversionedId:"airgap-vault/setup/introduction",id:"airgap-vault/setup/introduction",title:"Secure Cold Wallet Setup Introduction",description:"For maximum security, AirGap Vault has to be installed on an offline device and never connected to the internet again. This ensures that the private key cannot be leaked via a USB cable or a persistent bluetooth connection. It is fully air-gapped and isolated from any network and provides the best possible security.",source:"@site/docs/airgap-vault/setup/introduction.mdx",sourceDirName:"airgap-vault/setup",slug:"/airgap-vault/setup/introduction",permalink:"/airgap-vault/setup/introduction",editUrl:"https://github.com/airgap-it/airgap-docs/edit/main/src/docs/airgap-vault/setup/introduction.mdx",tags:[],version:"current",frontMatter:{title:"Secure Cold Wallet Setup Introduction",slug:"/airgap-vault/setup/introduction",sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Considerations",permalink:"/airgap-vault/security/considerations"},next:{title:"iOS",permalink:"/airgap-vault/setup/secure-cold-wallet-airgap-ios"}},s=[],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For maximum security, AirGap Vault has to be installed on an offline device and never connected to the internet again. This ensures that the private key cannot be leaked via a USB cable or a persistent bluetooth connection. It is fully air-gapped and isolated from any network and provides the best possible security."),(0,o.kt)("p",null,"Preparing a mobile phone to be used as a secure offline and air-gapped cold wallet is not difficult, but it's important that best practices are followed to make sure it is as secure as it can be."))}d.isMDXComponent=!0}}]);