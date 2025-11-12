import{u as i,j as s}from"./index-CwpwL8we.js";const a={title:"Getting Started with FEY Protocol",description:"Start your journey with FEY Protocol - comprehensive guides for stakers, creators, and developers",head:[{name:"fc:miniapp",content:'{"version":"1","imageUrl":"https://feydocs.lat/miniapp/getting-started-og.svg","button":{"title":"🚀 Get Started","action":{"type":"launch_miniapp","name":"FEY Protocol Docs","url":"https://feydocs.lat/getting-started","splashImageUrl":"https://feydocs.lat/images/logo.svg","splashBackgroundColor":"#0a4d1a"}}}'},{name:"fc:frame",content:'{"version":"1","imageUrl":"https://feydocs.lat/miniapp/getting-started-og.svg","button":{"title":"🚀 Get Started","action":{"type":"launch_frame","name":"FEY Protocol Docs","url":"https://feydocs.lat/getting-started","splashImageUrl":"https://feydocs.lat/images/logo.svg","splashBackgroundColor":"#0a4d1a"}}}'},{property:"og:title",content:"Getting Started - FEY Protocol"},{property:"og:description",content:"Start your journey with FEY Protocol - comprehensive guides for stakers, creators, and developers"},{property:"og:image",content:"https://feydocs.lat/miniapp/getting-started-og.svg"}]};function r(n){const e={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.header,{children:s.jsxs(e.h1,{id:"getting-started",children:["Getting Started",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getting-started",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsx(e.p,{children:"This guide will help you start using FEY Protocol, whether you want to stake $FEY, deploy a token, or integrate with the protocol."}),`
`,s.jsxs(e.h2,{id:"quick-overview",children:["Quick Overview",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#quick-overview",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["FEY Protocol is live on ",s.jsx(e.strong,{children:"Base Mainnet"})," with these core contracts:"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Factory"}),": ",s.jsx(e.code,{children:"0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"FEY Token"}),": ",s.jsx(e.code,{children:"0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"xFeyVault (Staking)"}),": ",s.jsx(e.code,{children:"0x72f5565Ab147105614ca4Eb83ecF15f751Fd8C50"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Main Pool"}),": FEY/WETH on Uniswap V4"]}),`
`]}),`
`,s.jsxs(e.h2,{id:"for-token-stakers",children:["For Token Stakers",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#for-token-stakers",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"1-get-fey-tokens",children:["1. Get $FEY Tokens",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-get-fey-tokens",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"$FEY tokens are available on Uniswap V4 (FEY/WETH pool):"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Pool ID"}),": ",s.jsx(e.code,{children:"0xe155c517c53f078f4b443c99436e42c1b80fd2fb1b3508f431c46b8365e4f3f0"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Token Contract"}),": ",s.jsx(e.code,{children:"0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D"})]}),`
`]}),`
`,s.jsxs(e.aside,{"data-callout":"info",children:[s.jsx(e.strong,{"data-callout-title":!0,children:"Trading"}),s.jsx(e.p,{children:"You can trade $FEY on any Uniswap V4 compatible interface. Make sure you're on Base mainnet."})]}),`
`,s.jsxs(e.h3,{id:"2-stake-your-fey",children:["2. Stake Your $FEY",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-stake-your-fey",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["The xFeyVault staking contract is ",s.jsx(e.strong,{children:"live"})," on Base Mainnet! Stake your $FEY tokens to earn rewards from protocol activity."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Contract Address"}),": ",s.jsx(e.code,{children:"0x72f5565Ab147105614ca4Eb83ecF15f751Fd8C50"})]}),`
`,s.jsx(e.p,{children:"Staking provides:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Protocol fees from all network activity"}),`
`,s.jsx(e.li,{children:"LP rewards from managed positions"}),`
`,s.jsx(e.li,{children:"Buyback distributions from WETH conversions"}),`
`]}),`
`,s.jsx(e.p,{children:"The vault uses the ERC4626 standard, so you'll receive xFEY shares when you deposit $FEY tokens. Your share of the vault increases as fees accumulate and buybacks are executed."}),`
`,s.jsxs(e.aside,{"data-callout":"info",children:[s.jsx(e.strong,{"data-callout-title":!0,children:"How to Stake"}),s.jsxs(e.ol,{children:[`
`,s.jsx(e.li,{children:"Approve the xFeyVault contract to spend your $FEY tokens"}),`
`,s.jsxs(e.li,{children:["Call ",s.jsx(e.code,{children:"deposit(amount, receiver)"})," to stake your tokens"]}),`
`,s.jsx(e.li,{children:"You'll receive xFEY shares representing your stake"}),`
`,s.jsx(e.li,{children:"Rewards are automatically compounded into the vault's value"}),`
`]})]}),`
`,s.jsxs(e.h3,{id:"3-monitor-your-rewards",children:["3. Monitor Your Rewards",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-monitor-your-rewards",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"You can monitor your staking rewards by:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Checking your xFEY balance (shares increase in value as rewards accumulate)"}),`
`,s.jsx(e.li,{children:"Viewing the vault's total assets and your share percentage"}),`
`,s.jsx(e.li,{children:"Tracking buyback executions and fee claims through on-chain events"}),`
`]}),`
`,s.jsxs(e.h2,{id:"for-token-creators",children:["For Token Creators",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#for-token-creators",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"1-prepare-your-token-metadata",children:["1. Prepare Your Token Metadata",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-prepare-your-token-metadata",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Before deploying, prepare:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Name"}),": Your token name"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Symbol"}),": Token symbol (keep it short)"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Image"}),": Token logo/image URL"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Metadata"}),": JSON metadata URL"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Context"}),": Additional context string"]}),`
`]}),`
`,s.jsxs(e.h3,{id:"2-configure-your-deployment",children:["2. Configure Your Deployment",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-configure-your-deployment",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Token deployments require several configuration parameters:"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"interface"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" DeploymentConfig"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  tokenConfig"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    name"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" string"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    symbol"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" string"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    image"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" string"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    metadata"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" string"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    context"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" string"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    tokenAdmin"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" address"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    salt"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" uint256"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    originatingChainId"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" uint256"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  };"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  poolConfig"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    hook"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" address"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"; "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Use FEY Hook"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    pairedToken"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" address"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"; "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Will be overridden to FEY"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    tickIfToken0IsFey"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" int24"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    tickSpacing"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" int24"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    poolData"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" bytes"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  };"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  lockerConfig"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    locker"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" address"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    tickLower"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" int24"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[];"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    tickUpper"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" int24"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[];"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    positionBps"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" uint16"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[];"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    rewardBps"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" uint16"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[];"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    rewardAdmins"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" address"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[];"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    rewardRecipients"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" address"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[];"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  };"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  // ... additional configs"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsxs(e.h3,{id:"3-deploy-your-token",children:["3. Deploy Your Token",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-deploy-your-token",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Call the Factory contract:"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"function"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" deployToken"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"DeploymentConfig"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" memory"}),s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" config"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  external"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" payable"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" returns"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"address"}),s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" tokenAddress"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]})]})})}),`
`,s.jsxs(e.aside,{"data-callout":"tip",children:[s.jsx(e.strong,{"data-callout-title":!0,children:"Dev Buy"}),s.jsx(e.p,{children:"Include ETH with your deployment to automatically purchase your tokens through the dev buy extension."})]}),`
`,s.jsxs(e.h3,{id:"4-earn-creator-rewards",children:["4. Earn Creator Rewards",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#4-earn-creator-rewards",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"After deployment:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Earn 1% of trading volume in $FEY"}),`
`,s.jsx(e.li,{children:"Receive LP rewards from protocol positions"}),`
`,s.jsx(e.li,{children:"Stake earned $FEY to compound returns"}),`
`]}),`
`,s.jsxs(e.h2,{id:"for-developers",children:["For Developers",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#for-developers",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"1-contract-integration",children:["1. Contract Integration",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-contract-integration",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Key contracts for integration:"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" contracts"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  factory: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  feyToken: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  xFeyVault: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x72f5565Ab147105614ca4Eb83ecF15f751Fd8C50"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  hook: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x5B409184204b86f708d3aeBb3cad3F02835f68cC"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  feeLocker: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0xf739FC4094F3Df0a1Be08E2925b609F3C3Aa13c6"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  lpLocker: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x975aF6a738f502935AFE64633Ad3EA2A3eb3e7Fa"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})})]})})}),`
`,s.jsxs(e.h3,{id:"2-query-protocol-state",children:["2. Query Protocol State",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-query-protocol-state",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Use cast or web3 libraries to query state:"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Check FEY total supply"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "totalSupply()(uint256)"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --rpc-url"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://mainnet.base.org"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Get token deployment info"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "tokenDeploymentInfo(address)"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" [TOKEN_ADDRESS] "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"  --rpc-url"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://mainnet.base.org"})]})]})})}),`
`,s.jsxs(e.h3,{id:"3-build-extensions",children:["3. Build Extensions",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-build-extensions",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"To build protocol extensions:"}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.strong,{children:"Implement IFeyExtension interface"}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Get extension approved"})," in the allowlist contract"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Test integration"})," with deployment flow"]}),`
`]}),`
`,s.jsxs(e.p,{children:["See ",s.jsx(e.a,{href:"/guides/extensions",children:"Building Extensions →"})," for detailed instructions."]}),`
`,s.jsxs(e.h3,{id:"4-monitor-protocol-activity",children:["4. Monitor Protocol Activity",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#4-monitor-protocol-activity",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Track protocol events:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"TokenCreated"}),": New token deployments"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"ClaimFees"}),": Fee distributions"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"ExtensionTriggered"}),": Extension usage"]}),`
`]}),`
`,s.jsxs(e.h2,{id:"network-information",children:["Network Information",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#network-information",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"base-mainnet-details",children:["Base Mainnet Details",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#base-mainnet-details",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Chain ID"}),": 8453"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"RPC"}),": ",s.jsx(e.code,{children:"https://mainnet.base.org"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Explorer"}),": ",s.jsx(e.a,{href:"https://basescan.org",children:"BaseScan"})]}),`
`]}),`
`,s.jsxs(e.h3,{id:"key-addresses",children:["Key Addresses",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#key-addresses",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Contract"}),s.jsx(e.th,{children:"Address"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Factory"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"FEY Token"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"xFeyVault (Staking)"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"0x72f5565Ab147105614ca4Eb83ecF15f751Fd8C50"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Hook"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"0x5B409184204b86f708d3aeBb3cad3F02835f68cC"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Fee Locker"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"0xf739FC4094F3Df0a1Be08E2925b609F3C3Aa13c6"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"LP Locker"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"0x975aF6a738f502935AFE64633Ad3EA2A3eb3e7Fa"})})]})]})]}),`
`,s.jsx(e.p,{children:s.jsx(e.a,{href:"/reference/addresses",children:"View complete address list →"})}),`
`,s.jsxs(e.h2,{id:"support--resources",children:["Support & Resources",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#support--resources",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"documentation",children:["Documentation",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#documentation",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Architecture"}),": ",s.jsx(e.a,{href:"/architecture/overview",children:"Protocol Overview →"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Contracts"}),": ",s.jsx(e.a,{href:"/contracts/factory",children:"Core Contracts →"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Flows"}),": ",s.jsx(e.a,{href:"/flows/deployment",children:"Token Deployment →"})]}),`
`]}),`
`,s.jsxs(e.h3,{id:"community",children:["Community",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#community",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"GitHub"}),": ",s.jsx(e.a,{href:"https://github.com/feyprotocol",children:"https://github.com/feyprotocol"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Discord"}),": ",s.jsx(e.a,{href:"https://discord.gg/feyprotocol",children:"Join community"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Twitter"}),": ",s.jsx(e.a,{href:"https://twitter.com/feyprotocol",children:"@feyprotocol"})]}),`
`]}),`
`,s.jsxs(e.h3,{id:"help",children:["Help",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#help",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Troubleshooting"}),": ",s.jsx(e.a,{href:"/support/troubleshooting",children:"Common Issues →"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Security"}),": ",s.jsx(e.a,{href:"/support/security",children:"Security Guide →"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"FAQ"}),": ",s.jsx(e.a,{href:"/faq",children:"Frequently Asked Questions →"})]}),`
`]}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.p,{children:["Ready to dive deeper? Explore the ",s.jsx(e.a,{href:"/architecture/overview",children:"Protocol Architecture →"})," or check out specific ",s.jsx(e.a,{href:"/contracts/factory",children:"Contract Documentation →"}),"."]})]})}function d(n={}){const{wrapper:e}={...i(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(r,{...n})}):r(n)}export{d as default,a as frontmatter};
