"use strict";(self.webpackChunkairgap_docs=self.webpackChunkairgap_docs||[]).push([[1e3],{3905:function(t,e,o){o.d(e,{Zo:function(){return d},kt:function(){return m}});var a=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,a,n=function(t,e){if(null==t)return{};var o,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var c=a.createContext({}),p=function(t){var e=a.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},d=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var o=t.components,n=t.mdxType,r=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),s=p(o),m=n,k=s["".concat(c,".").concat(m)]||s[m]||u[m]||r;return o?a.createElement(k,i(i({ref:e},d),{},{components:o})):a.createElement(k,i({ref:e},d))}));function m(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=o.length,i=new Array(r);i[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}s.displayName="MDXCreateElement"},70540:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),i=["components"],l={title:"Polkadot Introduction",slug:"/currencies/polkadot/introduction",sidebar_label:"Introduction"},c=void 0,p={unversionedId:"currencies/polkadot/introduction",id:"currencies/polkadot/introduction",title:"Polkadot Introduction",description:"Introduction to Polkadot",source:"@site/docs/currencies/polkadot/introduction.mdx",sourceDirName:"currencies/polkadot",slug:"/currencies/polkadot/introduction",permalink:"/currencies/polkadot/introduction",editUrl:"https://github.com/airgap-it/airgap-docs/edit/main/src/docs/currencies/polkadot/introduction.mdx",tags:[],version:"current",frontMatter:{title:"Polkadot Introduction",slug:"/currencies/polkadot/introduction",sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Wallet Compatibility",permalink:"/currencies/tezos/wallet-compatibility"},next:{title:"Delegation",permalink:"/currencies/polkadot/delegation"}},d=[{value:"Introduction to Polkadot",id:"introduction-to-polkadot",children:[{value:"AirGap Polkadot Wallet",id:"airgap-polkadot-wallet",children:[],level:3},{value:"Polkadot Addresses",id:"polkadot-addresses",children:[{value:"Initial creation:",id:"initial-creation",children:[],level:4},{value:"Activate account:",id:"activate-account",children:[],level:4},{value:"Reaped account",id:"reaped-account",children:[],level:4}],level:3},{value:"How to set up a DOT account.",id:"how-to-set-up-a-dot-account",children:[],level:3},{value:"How to stake DOT",id:"how-to-stake-dot",children:[],level:3}],level:2},{value:"FAQs",id:"faqs",children:[{value:"Polkadot official Community",id:"polkadot-official-community",children:[],level:3}],level:2}],u={toc:d};function s(t){var e=t.components,o=(0,n.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction-to-polkadot"},"Introduction to Polkadot"),(0,r.kt)("p",null,"Polkadot is a scalable layer zero blockchain solution.\nPolkadot aims to bring interoperability so that different blockchains with different functionalities can communicate in a shared, secured environment. A practical example would be a contract event on the Ethereum network that would result in a payment on the Tezos network, cross-chain swap of Cosmos to Solana using smart contracts, with no third party or intermediaries."),(0,r.kt)("p",null,"DOT is the official coin of the Polkadot ecosystem. DOT is to Polkadot what ETH is to the Ethereum network. DOT has three main functions on Polkadot."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Governance of the network"),(0,r.kt)("li",{parentName:"ul"},"Staking for the operation of the network"),(0,r.kt)("li",{parentName:"ul"},"Creating parachains by bonding DOT\n",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.network/"},"Learn more"))),(0,r.kt)("h3",{id:"airgap-polkadot-wallet"},"AirGap Polkadot Wallet"),(0,r.kt)("p",null,"AirGap Polkadot Wallet is a convenient way to store and transfer DOT while storing your private key offline. AirGap also provides an interface to stake and ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/airgap-it/airgap-adds-polkadot-support-with-delegation-a4d14a8b55d3"},"delegate your DOT")," to a validator."),(0,r.kt)("h3",{id:"polkadot-addresses"},"Polkadot Addresses"),(0,r.kt)("h4",{id:"initial-creation"},"Initial creation:"),(0,r.kt)("p",null,"When you create a Polkadot account, The account does not exist yet on-chain."),(0,r.kt)("h4",{id:"activate-account"},"Activate account:"),(0,r.kt)("p",null,"To activate an account you need an existential deposit, which is 1 DOT. After depositing a minimum of 1 DOT, your address becomes recorded on-chain."),(0,r.kt)("h4",{id:"reaped-account"},"Reaped account"),(0,r.kt)("p",null,"When your account goes below 1 DOT, it will be reaped, thereby wiped from the blockchain's state to conserve space.\nGoing below 1 DOT causes an account to be reaped. It can be reactivated by redepositing at least 1 DOT.\nAirGap prevents your account from going below 1 DOT to avoid this scenario."),(0,r.kt)("h3",{id:"how-to-set-up-a-dot-account"},"How to set up a DOT account."),(0,r.kt)("p",null,"This guide uses XTZ as an example, but the same steps can set up Polkadot in AirGap.\n",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/airgap-it/airgap-the-step-by-step-guide-c4c3d3fe9a05"},"Step by step guide on how to set up all available protocols in AirGap")),(0,r.kt)("h3",{id:"how-to-stake-dot"},"How to stake DOT"),(0,r.kt)("p",null,"[coming soon]"),(0,r.kt)("h2",{id:"faqs"},"FAQs"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://support.airgap.it/FAQ#i-am-having-problems-with-polkadot-and-kusama-seeing-balance-and-also-delegatioins"},"I am having problems with Polkadot and Kusama seeing balance and also delegatioins")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://support.airgap.it/FAQ#why-must-i-have-a-minimum-of-1-dot-balance-in-my-airgap-wallet"},"Why must I have a minimum of 1 DOT balance in my AirGap wallet?")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://support.airgap.it/FAQ#why-must-i-have-a-minimum-of-1-dot-balance-in-my-airgap-wallet"},"How long does it take to unbound in Polkadot?")),(0,r.kt)("h3",{id:"polkadot-official-community"},"Polkadot official Community"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Website: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.network/"},"https://polkadot.network/")),(0,r.kt)("li",{parentName:"ul"},"Discord: ",(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/wGUDt2p"},"https://discord.gg/wGUDt2p")),(0,r.kt)("li",{parentName:"ul"},"Twitter: ",(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/Polkadot"},"https://twitter.com/Polkadot")),(0,r.kt)("li",{parentName:"ul"},"Telegram: ",(0,r.kt)("a",{parentName:"li",href:"https://t.me/polkadotofficial"},"https://t.me/polkadotofficial")),(0,r.kt)("li",{parentName:"ul"},"Reddit: ",(0,r.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/dot"},"https://www.reddit.com/r/dot")),(0,r.kt)("li",{parentName:"ul"},"Github: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot"},"https://github.com/paritytech/polkadot"))))}s.isMDXComponent=!0}}]);