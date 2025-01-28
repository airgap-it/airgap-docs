"use strict";(self.webpackChunkairgap_docs=self.webpackChunkairgap_docs||[]).push([[1656],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},78371:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"Moonbeam Introduction",slug:"/currencies/moonbeam/introduction",sidebar_label:"Introduction"},l=void 0,s={unversionedId:"currencies/moonbeam/introduction",id:"currencies/moonbeam/introduction",title:"Moonbeam Introduction",description:"Introduction to Moonbeam",source:"@site/docs/currencies/moonbeam/introduction.mdx",sourceDirName:"currencies/moonbeam",slug:"/currencies/moonbeam/introduction",permalink:"/currencies/moonbeam/introduction",editUrl:"https://github.com/airgap-it/airgap-docs/edit/main/src/docs/currencies/moonbeam/introduction.mdx",tags:[],version:"current",frontMatter:{title:"Moonbeam Introduction",slug:"/currencies/moonbeam/introduction",sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Wallet Compatibility",permalink:"/currencies/kusama/wallet-compatibility"},next:{title:"Delegation",permalink:"/currencies/moonbeam/delegation"}},u=[{value:"Introduction to Moonbeam",id:"introduction-to-moonbeam",children:[{value:"AirGap GLMR Wallet",id:"airgap-glmr-wallet",children:[],level:3},{value:"How to set up a GLMR account.",id:"how-to-set-up-a-glmr-account",children:[],level:3},{value:"FAQs",id:"faqs",children:[],level:3},{value:"Moonbeam official Community",id:"moonbeam-official-community",children:[],level:3}],level:2}],m={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction-to-moonbeam"},"Introduction to Moonbeam"),(0,a.kt)("p",null,"Moonbeam is a para-chain in the Polkadot ecosystem. It is a layer 1 blockchain solution that extends the base Ethereum featureset with additional features such as on-chain governance, staking, and cross-chain integrations."),(0,a.kt)("p",null,"GLMR is the official token of the moonbeam ecosystem, and it serves the following purposes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Payment of transaction fees: All transaction fees in the Moonbeam ecosystem are paid using GLMR."),(0,a.kt)("li",{parentName:"ul"},"Execution of smart contracts: GLMR is used to pay for smart contract execution, playing the same role of ETH and BNB on Ethereum and BSC."),(0,a.kt)("li",{parentName:"ul"},"The incentive for collators to produce blocks to support the network: Nomination of collators which helps the liveness of the network is done using GLMR token."),(0,a.kt)("li",{parentName:"ul"},"Facilitation of Moonbeam's on-chain governance system: Participation in on-chain Glimmer-weighted voting and governance is done using GLMR token.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://moonbeam.network/"},"Learn more")),(0,a.kt)("h3",{id:"airgap-glmr-wallet"},"AirGap GLMR Wallet"),(0,a.kt)("p",null,"AirGap GLMR Wallet provides a convenient way to store, transfer and ",(0,a.kt)("a",{parentName:"p",href:"https://support.airgap.it/currencies/moonbeam/delegation"},"stake GLMR")," while keeping your private keys completely offline. The staking process in AirGap is simple, intuitive, and comes with a simplified UI."),(0,a.kt)("h3",{id:"how-to-set-up-a-glmr-account"},"How to set up a GLMR account."),(0,a.kt)("p",null,"This guide uses XTZ as an example, but the same steps can set up GLMR in AirGap.\n",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/airgap-it/airgap-the-step-by-step-guide-c4c3d3fe9a05"},"Step by step guide on how to set up all available protocols in AirGap")),(0,a.kt)("h3",{id:"faqs"},"FAQs"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://support.airgap.it/currencies/moonbeam/delegation"},"How to delegate GLMR in AirGap")),(0,a.kt)("h3",{id:"moonbeam-official-community"},"Moonbeam official Community"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://moonbeam.network/"},"https://moonbeam.network/")),(0,a.kt)("li",{parentName:"ul"},"Discord: ",(0,a.kt)("a",{parentName:"li",href:"https://discord.gg/PfpUATX"},"https://discord.gg/PfpUATX")),(0,a.kt)("li",{parentName:"ul"},"Twitter: ",(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/moonbeamnetwork"},"https://twitter.com/moonbeamnetwork")),(0,a.kt)("li",{parentName:"ul"},"Telegram: ",(0,a.kt)("a",{parentName:"li",href:"https://t.me/Moonbeam_Official"},"https://t.me/Moonbeam_Official"))))}p.isMDXComponent=!0}}]);