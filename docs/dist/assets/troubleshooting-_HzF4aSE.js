import{u as r,j as s}from"./index-2G0pCPg9.js";const a={title:"Troubleshooting",description:"undefined"};function n(i){const e={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.header,{children:s.jsxs(e.h1,{id:"troubleshooting",children:["Troubleshooting",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#troubleshooting",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsx(e.p,{children:"Common issues and solutions when working with FEY Protocol."}),`
`,s.jsxs(e.h2,{id:"deployment-issues",children:["Deployment Issues",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deployment-issues",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"factory-deprecated-error",children:["Factory Deprecated Error",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#factory-deprecated-error",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Problem"}),': Getting "Deprecated" error when trying to deploy tokens.']}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Cause"}),": The factory is temporarily disabled for new deployments."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Solutions"}),":"]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Check factory status"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $FACTORY "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"deprecated()(bool)"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --rpc-url"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://mainnet.base.org"})]})})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Wait for reactivation"}),": Factory may be temporarily disabled for upgrades"]}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Bootstrap access"}),": If you have bootstrap permissions, you can still deploy"]}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Check announcements"}),": Follow ",s.jsx(e.a,{href:"https://twitter.com/feyprotocol",children:"@feyprotocol"})," for status updates"]}),`
`]}),`
`]}),`
`,s.jsxs(e.h3,{id:"base-token-not-set",children:["Base Token Not Set",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#base-token-not-set",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Problem"}),': Getting "BaseTokenNotSet" error.']}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Cause"}),": Protocol hasn't completed initial bootstrap process."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Diagnosis"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Check if base token is set"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $FACTORY "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"baseToken()(address)"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --rpc-url"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://mainnet.base.org"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Should return FEY token address: 0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# If it returns 0x000...000, protocol isn't ready"})})]})})}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Solution"}),": Wait for protocol bootstrap completion or contact team."]}),`
`,s.jsxs(e.h3,{id:"invalid-reward-configuration",children:["Invalid Reward Configuration",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#invalid-reward-configuration",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Problem"}),": Deployment reverts with reward-related errors."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Common Causes"}),":"]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Reward BPS don't sum to 10000"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// ❌ Wrong - sums to 9000"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"rewardBps"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": ["}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"5000"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"4000"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// ✅ Correct - sums to 10000  "})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"rewardBps"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": ["}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"6000"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"4000"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]})]})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Array length mismatch"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// ❌ Wrong - different lengths"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"rewardBps"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": ["}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"5000"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"5000"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"rewardAdmins"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": ["}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x1234"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],  "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Only 1 element"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"rewardRecipients"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": ["}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x1234"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x5678"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]  "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// 2 elements"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// ✅ Correct - matching lengths"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"rewardBps"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": ["}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"5000"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"5000"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"rewardAdmins"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": ["}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x1234"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x5678"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"rewardRecipients"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": ["}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x1234"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x5678"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]})]})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Position BPS don't sum to 10000"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// ❌ Wrong"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"positionBps"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": ["}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"5000"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"3000"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]  "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Only 8000"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// ✅ Correct"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"positionBps"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": ["}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"7000"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"3000"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]  "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Equals 10000"})]})]})})}),`
`]}),`
`]}),`
`,s.jsxs(e.h3,{id:"extension-configuration-errors",children:["Extension Configuration Errors",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#extension-configuration-errors",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Problem"}),": Extension-related deployment failures."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Diagnostics"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Check if extension is enabled"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0xFD549237CdEAbDc14438CAF3f3861e174fDEae46"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "enabledExtensions(address)(bool)"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" [EXTENSION_ADDRESS] "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"  --rpc-url"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://mainnet.base.org"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Check dev buy extension specifically"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0xFD549237CdEAbDc14438CAF3f3861e174fDEae46"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "enabledExtensions(address)(bool)"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0x173077c319c38bb08D4C4968014357fd518446b4"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  --rpc-url"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://mainnet.base.org"})]})]})})}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Common Fixes"}),":"]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Extension not enabled"}),": Contact team to add extension to allowlist"]}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Invalid extension data"}),": Check data encoding:"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// For dev buy extension"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" extensionData"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers.AbiCoder."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"defaultAbiCoder"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encode"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  ["}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'address'"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'tuple(address,address,uint24,int24,address)'"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'uint128'"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  [recipient, poolKey, minAmountOut]"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})})]})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"ETH amount mismatch"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Ensure ETH sent matches extension configs"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" totalEth"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" extensionConfigs."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"reduce"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  ("}),s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"sum"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"ext"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sum "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"+"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" BigInt"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(ext.msgValue),"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  0"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"n"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Send exactly this amount with deployment"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" factory."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"deployToken"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(config, { value: totalEth });"})]})]})})}),`
`]}),`
`]}),`
`,s.jsxs(e.h3,{id:"mev-module-issues",children:["MEV Module Issues",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#mev-module-issues",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Problem"}),": MEV module related errors during deployment."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Diagnostics"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Check if MEV module is enabled"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $FACTORY "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"enabledMevModules(address)(bool)"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  0x2ebc0fA629b268dFA3d455b67027d507a562EAC0"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  --rpc-url"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://mainnet.base.org"})]})]})})}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Solutions"}),":"]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:["Use the standard no-op MEV module: ",s.jsx(e.code,{children:"0x2ebc0fA629b268dFA3d455b67027d507a562EAC0"})]}),`
`,s.jsx(e.li,{children:"Ensure MEV module data is properly encoded"}),`
`,s.jsx(e.li,{children:"Contact team if you need custom MEV protection"}),`
`]}),`
`,s.jsxs(e.h2,{id:"fee-and-reward-issues",children:["Fee and Reward Issues",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#fee-and-reward-issues",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"no-rewards-appearing",children:["No Rewards Appearing",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#no-rewards-appearing",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Problem"}),": Not receiving expected creator or staking rewards."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Diagnosis Steps"}),":"]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Check token reward configuration"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $LP_LOCKER "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"tokenRewards(address)"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" [TOKEN_ADDRESS] --rpc-url https://mainnet.base.org"})]})})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Check if rewards collection is being triggered"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Anyone can trigger this"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" send"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $LP_LOCKER "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"collectRewards(address)"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" [TOKEN_ADDRESS] "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"  --private-key"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $PRIVATE_KEY "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"--rpc-url"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://mainnet.base.org"})]})]})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Check your available fees"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $FEE_LOCKER "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "availableFees(address,address)(uint256)"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  [YOUR_ADDRESS] [TOKEN_ADDRESS] "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"  --rpc-url"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://mainnet.base.org"})]})]})})}),`
`]}),`
`]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Common Causes"}),":"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Rewards collection not being called regularly"}),`
`,s.jsx(e.li,{children:"Low trading volume (no fees generated)"}),`
`,s.jsx(e.li,{children:"Incorrect recipient address in deployment config"}),`
`]}),`
`,s.jsxs(e.h3,{id:"fee-claims-failing",children:["Fee Claims Failing",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#fee-claims-failing",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Problem"}),": Cannot claim fees from Fee Locker."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Diagnosis"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Check if you have fees to claim"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $FEE_LOCKER "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "availableFees(address,address)(uint256)"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  [YOUR_ADDRESS] [TOKEN_ADDRESS] "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"  --rpc-url"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://mainnet.base.org"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Check if address is authorized (for vault claims)"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $FEE_LOCKER "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"vault()(address)"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --rpc-url"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://mainnet.base.org"})]})]})})}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Solutions"}),":"]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"No fees available"}),": Wait for more trading activity or rewards distribution"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Vault restrictions"}),": If claiming for vault address, must call from vault itself"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Wrong token"}),": Ensure you're checking the correct token address"]}),`
`]}),`
`,s.jsxs(e.h3,{id:"protocol-fees-not-accumulating",children:["Protocol Fees Not Accumulating",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#protocol-fees-not-accumulating",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Problem"}),": Expected protocol fees not reaching team recipient."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Diagnosis Flow"}),":"]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Check hook fee extraction"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Verify hook is properly configured"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $HOOK "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"protocolFee()(uint24)"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --rpc-url"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://mainnet.base.org"})]})]})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Check factory balances"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Factory should accumulate fees temporarily"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $FEY_TOKEN "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"balanceOf(address)(uint256)"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $FACTORY "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"--rpc-url"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://mainnet.base.org"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0x4200000000000000000000000000000000000006"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "balanceOf(address)(uint256)"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $FACTORY "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"--rpc-url"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://mainnet.base.org"})]})]})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Trigger fee claims"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Anyone can call these"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" send"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $FACTORY "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"claimWethFees()"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --private-key"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $PRIVATE_KEY "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"--rpc-url"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://mainnet.base.org"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" send"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $FACTORY "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"claimBaseTokenFees()"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --private-key"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $PRIVATE_KEY "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"--rpc-url"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://mainnet.base.org"})]})]})})}),`
`]}),`
`]}),`
`,s.jsxs(e.h2,{id:"pool-and-trading-issues",children:["Pool and Trading Issues",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#pool-and-trading-issues",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"pool-extensions-not-working",children:["Pool Extensions Not Working",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#pool-extensions-not-working",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Problem"}),": Pool extensions not executing during swaps."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Diagnosis"}),":"]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Check extension registration"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $HOOK "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"poolExtension(bytes32)(address)"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" [POOL_ID] --rpc-url https://mainnet.base.org"})]})})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Check if extension is set up"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $HOOK "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"poolExtensionSetup(bytes32)(bool)"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" [POOL_ID] --rpc-url https://mainnet.base.org"})]})})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Verify allowlist"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0xFD549237CdEAbDc14438CAF3f3861e174fDEae46"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "enabledExtensions(address)(bool)"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" [EXTENSION_ADDRESS] "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"  --rpc-url"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://mainnet.base.org"})]})]})})}),`
`]}),`
`]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Solutions"}),":"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Extensions only work for factory-deployed pools"}),`
`,s.jsx(e.li,{children:"Extensions don't execute when locker is the swap sender"}),`
`,s.jsx(e.li,{children:"Contact team if extension should be enabled but isn't"}),`
`]}),`
`,s.jsxs(e.h3,{id:"mev-protection-issues",children:["MEV Protection Issues",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#mev-protection-issues",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Problem"}),": MEV protection not working as expected."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Diagnosis"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Check MEV module status"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $HOOK "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"mevModuleEnabled(bytes32)(bool)"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" [POOL_ID] --rpc-url https://mainnet.base.org"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Check pool creation time"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $HOOK "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"poolCreationTimestamp(bytes32)(uint256)"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" [POOL_ID] --rpc-url https://mainnet.base.org"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# MEV protection expires after 2 minutes (120 seconds)"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# If current time > creation + 120, protection is expired"})})]})})}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Expected Behavior"}),":"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"MEV protection lasts maximum 2 minutes"}),`
`,s.jsx(e.li,{children:"No-op module disables itself immediately"}),`
`,s.jsx(e.li,{children:"Custom MEV modules can disable themselves early"}),`
`]}),`
`,s.jsxs(e.h3,{id:"liquidity-addition-blocked",children:["Liquidity Addition Blocked",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#liquidity-addition-blocked",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Problem"}),": Cannot add liquidity to pool."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Cause"}),": MEV module is still active and blocking liquidity changes."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Solution"}),": Wait for MEV protection to expire (2 minutes max) or for module to disable itself."]}),`
`,s.jsxs(e.h2,{id:"integration-issues",children:["Integration Issues",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#integration-issues",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"contract-interface-errors",children:["Contract Interface Errors",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#contract-interface-errors",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Problem"}),": ABI-related errors when calling contracts."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Solutions"}),":"]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Use correct ABI"}),": Ensure you're using the right ABI for each contract"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Check function signatures"}),": Verify function names and parameter types"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Verify contract addresses"}),": Use ",s.jsx(e.a,{href:"/reference/addresses",children:"official addresses"})]}),`
`]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Example Correct Calls"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// ✅ Correct"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" deploymentInfo"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" factory."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"tokenDeploymentInfo"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(tokenAddress);"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// ❌ Wrong function name  "})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" deploymentInfo"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" factory."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getTokenDeploymentInfo"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(tokenAddress);"})]})]})})}),`
`,s.jsxs(e.h3,{id:"gas-estimation-failures",children:["Gas Estimation Failures",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gas-estimation-failures",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Problem"}),": Gas estimation failing for deployments."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Solutions"}),":"]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Use higher gas limit"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" factory."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"deployToken"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(config, {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  gasLimit: "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"5_000_000"}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  // High limit for deployments"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})})]})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Check configuration validity"}),": Invalid configs can cause gas estimation to fail"]}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Ensure sufficient ETH"}),": Account must have enough ETH for gas + extension amounts"]}),`
`]}),`
`]}),`
`,s.jsxs(e.h3,{id:"event-parsing-issues",children:["Event Parsing Issues",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#event-parsing-issues",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Problem"}),": Cannot parse contract events properly."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Common Issues"}),":"]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Wrong event signature"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// ✅ Correct"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"factory."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"on"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'TokenCreated'"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", ("}),s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"sender"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"tokenAddress"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"..."}),s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"args"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  // Handle event"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// ❌ Wrong event name"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"factory."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"on"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'TokenDeployed'"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"..."}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"); "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Event doesn't exist"})]})]})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Missing ABI"}),": Ensure contract interface includes all events"]}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Block range too large"}),": Limit historical queries to reasonable ranges"]}),`
`]}),`
`]}),`
`,s.jsxs(e.h2,{id:"network-and-rpc-issues",children:["Network and RPC Issues",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#network-and-rpc-issues",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"rpc-rate-limiting",children:["RPC Rate Limiting",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rpc-rate-limiting",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Problem"}),": Getting rate limited by RPC provider."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Solutions"}),":"]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Use multiple RPC endpoints"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" fallbackProviders"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ["})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  'https://mainnet.base.org'"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  'https://base-mainnet.public.blastapi.io'"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  // Add more as backup"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"];"})})]})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Implement request caching"}),": Cache responses to reduce RPC calls"]}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Add delays between requests"}),": Space out rapid successive calls"]}),`
`]}),`
`]}),`
`,s.jsxs(e.h3,{id:"transaction-failures",children:["Transaction Failures",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transaction-failures",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Problem"}),": Transactions failing with unclear errors."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Debugging Steps"}),":"]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Check transaction receipt"}),": Look for specific revert reason"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Simulate transaction"}),": Use ",s.jsx(e.code,{children:"staticCall"})," to debug before sending"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Verify account state"}),": Ensure sufficient balance and nonces are correct"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Check gas price"}),": Ensure gas price is appropriate for network conditions"]}),`
`]}),`
`,s.jsxs(e.h2,{id:"getting-help",children:["Getting Help",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getting-help",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"community-support",children:["Community Support",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#community-support",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Discord"}),": ",s.jsx(e.a,{href:"https://discord.gg/feyprotocol",children:"Join our community"})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Real-time help from community"}),`
`,s.jsx(e.li,{children:"Developer discussions"}),`
`,s.jsx(e.li,{children:"Troubleshooting assistance"}),`
`]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"GitHub"}),": ",s.jsx(e.a,{href:"https://github.com/feyprotocol",children:"FEY Protocol Issues"})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Bug reports"}),`
`,s.jsx(e.li,{children:"Feature requests"}),`
`,s.jsx(e.li,{children:"Technical discussions"}),`
`]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Twitter"}),": ",s.jsx(e.a,{href:"https://twitter.com/feyprotocol",children:"@feyprotocol"})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Protocol announcements"}),`
`,s.jsx(e.li,{children:"Status updates"}),`
`,s.jsx(e.li,{children:"Community updates"}),`
`]}),`
`,s.jsxs(e.h3,{id:"reporting-bugs",children:["Reporting Bugs",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#reporting-bugs",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"When reporting issues, please include:"}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Clear description"})," of the problem"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Steps to reproduce"})," the issue"]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.strong,{children:"Expected vs actual behavior"}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Error messages"})," (full stack trace if available)"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Environment details"})," (browser, wallet, etc.)"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Transaction hashes"})," for on-chain issues"]}),`
`]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Template"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E",fontWeight:"bold","--shiki-dark":"#ADBAC7","--shiki-dark-font-weight":"bold"},children:"**Problem**"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": Brief description"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E",fontWeight:"bold","--shiki-dark":"#ADBAC7","--shiki-dark-font-weight":"bold"},children:"**Steps to Reproduce**"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:":"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"1."}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Step 1"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"2."}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Step 2"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"3."}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Error occurs"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E",fontWeight:"bold","--shiki-dark":"#ADBAC7","--shiki-dark-font-weight":"bold"},children:"**Expected**"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": What should happen"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E",fontWeight:"bold","--shiki-dark":"#ADBAC7","--shiki-dark-font-weight":"bold"},children:"**Actual**"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": What actually happens"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E",fontWeight:"bold","--shiki-dark":"#ADBAC7","--shiki-dark-font-weight":"bold"},children:"**Error Message**"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "})]})]})})}),`
`,s.jsx(e.p,{children:"Error details here"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E",fontWeight:"bold","--shiki-dark":"#ADBAC7","--shiki-dark-font-weight":"bold"},children:"**Environment**"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:":"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"-"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Browser: Chrome 120"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"-"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Wallet: MetaMask 11.0"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"-"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Transaction: 0x123..."})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E",fontWeight:"bold","--shiki-dark":"#ADBAC7","--shiki-dark-font-weight":"bold"},children:"**Additional Context**"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": Any other relevant information"})]})]})})}),`
`,s.jsxs(e.h3,{id:"emergency-contacts",children:["Emergency Contacts",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#emergency-contacts",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Security Issues"}),": ",s.jsx(e.a,{href:"mailto:security@feyprotocol.xyz",children:"security@feyprotocol.xyz"})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Critical vulnerabilities"}),`
`,s.jsx(e.li,{children:"Potential exploits"}),`
`,s.jsx(e.li,{children:"Responsible disclosure"}),`
`]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Critical Bugs"}),': Use GitHub issues with "critical" label']}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Protocol-breaking issues"}),`
`,s.jsx(e.li,{children:"Funds at risk scenarios"}),`
`]}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"prevention-tips",children:["Prevention Tips",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#prevention-tips",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"before-deployment",children:["Before Deployment",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#before-deployment",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{className:"contains-task-list",children:[`
`,s.jsxs(e.li,{className:"task-list-item",children:[s.jsx(e.input,{type:"checkbox",disabled:!0})," ","Validate all configuration arrays have correct lengths"]}),`
`,s.jsxs(e.li,{className:"task-list-item",children:[s.jsx(e.input,{type:"checkbox",disabled:!0})," ","Ensure reward/position BPS sum to exactly 10000"]}),`
`,s.jsxs(e.li,{className:"task-list-item",children:[s.jsx(e.input,{type:"checkbox",disabled:!0})," ","Verify extension addresses and data encoding"]}),`
`,s.jsxs(e.li,{className:"task-list-item",children:[s.jsx(e.input,{type:"checkbox",disabled:!0})," ","Test on small amounts first"]}),`
`,s.jsxs(e.li,{className:"task-list-item",children:[s.jsx(e.input,{type:"checkbox",disabled:!0})," ","Check factory and protocol status"]}),`
`]}),`
`,s.jsxs(e.h3,{id:"during-integration",children:["During Integration",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#during-integration",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{className:"contains-task-list",children:[`
`,s.jsxs(e.li,{className:"task-list-item",children:[s.jsx(e.input,{type:"checkbox",disabled:!0})," ","Use official contract addresses"]}),`
`,s.jsxs(e.li,{className:"task-list-item",children:[s.jsx(e.input,{type:"checkbox",disabled:!0})," ","Implement proper error handling"]}),`
`,s.jsxs(e.li,{className:"task-list-item",children:[s.jsx(e.input,{type:"checkbox",disabled:!0})," ","Add transaction confirmations"]}),`
`,s.jsxs(e.li,{className:"task-list-item",children:[s.jsx(e.input,{type:"checkbox",disabled:!0})," ","Cache frequently accessed data"]}),`
`,s.jsxs(e.li,{className:"task-list-item",children:[s.jsx(e.input,{type:"checkbox",disabled:!0})," ","Monitor for events and errors"]}),`
`]}),`
`,s.jsxs(e.h3,{id:"monitoring",children:["Monitoring",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#monitoring",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{className:"contains-task-list",children:[`
`,s.jsxs(e.li,{className:"task-list-item",children:[s.jsx(e.input,{type:"checkbox",disabled:!0})," ","Set up event listeners for critical functions"]}),`
`,s.jsxs(e.li,{className:"task-list-item",children:[s.jsx(e.input,{type:"checkbox",disabled:!0})," ","Monitor fee accumulation and distribution"]}),`
`,s.jsxs(e.li,{className:"task-list-item",children:[s.jsx(e.input,{type:"checkbox",disabled:!0})," ","Track protocol status changes"]}),`
`,s.jsxs(e.li,{className:"task-list-item",children:[s.jsx(e.input,{type:"checkbox",disabled:!0})," ","Alert on failed transactions"]}),`
`]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Related Documentation"}),":"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"/reference/addresses",children:"Contract Addresses →"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"/guides/integration",children:"Integration Guide →"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"/guides/cast-commands",children:"Cast Commands →"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"/support/security",children:"Security Guide →"})}),`
`]})]})}function d(i={}){const{wrapper:e}={...r(),...i.components};return e?s.jsx(e,{...i,children:s.jsx(n,{...i})}):n(i)}export{d as default,a as frontmatter};
