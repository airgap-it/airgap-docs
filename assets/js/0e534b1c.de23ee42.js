"use strict";(self.webpackChunkairgap_docs=self.webpackChunkairgap_docs||[]).push([[2372],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(t),d=a,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||l;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3724:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return v},default:function(){return k},frontMatter:function(){return b},metadata:function(){return y},toc:function(){return g}});var r=t(87462),a=t(63366),l=t(67294),o=t(3905),i=t(72389),u=t(29548),c=t(86010),s="tabItem_LplD";function p(e){var n,t,a,o=e.lazy,i=e.block,p=e.defaultValue,f=e.values,d=e.groupId,m=e.className,b=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,u.lx)(v,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(n=null!=p?p:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=b[0])?void 0:a.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,u.UB)(),k=h.tabGroupChoices,O=h.setTabGroupChoices,w=(0,l.useState)(g),T=w[0],E=w[1],x=[],N=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=k[d];null!=j&&j!==T&&v.some((function(e){return e.value===j}))&&E(j)}var I=function(e){var n=e.currentTarget,t=x.indexOf(n),r=v[t].value;r!==T&&(N(n),E(r),null!=d&&O(d,r))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;t=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},m)},v.map((function(e){var n=e.value,t=e.label,a=e.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:I,onClick:I},a,{className:(0,c.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),o?(0,l.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function f(e){var n=(0,i.Z)();return l.createElement(p,(0,r.Z)({key:String(n)},e))}var d=function(e){var n=e.children,t=e.hidden,r=e.className;return l.createElement("div",{role:"tabpanel",hidden:t,className:r},n)},m=["components"],b={title:"Installation"},v=void 0,y={unversionedId:"coinlib/installation",id:"coinlib/installation",title:"Installation",description:"Install the @airgap/coinlib-core package.",source:"@site/docs/coinlib/installation.mdx",sourceDirName:"coinlib",slug:"/coinlib/installation",permalink:"/coinlib/installation",editUrl:"https://github.com/airgap-it/airgap-docs/edit/main/src/docs/coinlib/installation.mdx",tags:[],version:"current",frontMatter:{title:"Installation"},sidebar:"coinlib",next:{title:"Get Address",permalink:"/coinlib/examples/get-address"}},g=[],h={toc:g};function k(e){var n=e.components,t=(0,a.Z)(e,m);return(0,o.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Install the ",(0,o.kt)("inlineCode",{parentName:"p"},"@airgap/coinlib-core")," package."),(0,o.kt)(f,{groupId:"packet-manager",defaultValue:"npm",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(d,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @airgap/coinlib-core\n"))),(0,o.kt)(d,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @airgap/coinlib-core\n")))))}k.isMDXComponent=!0}}]);