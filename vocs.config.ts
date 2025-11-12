import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'FEY Protocol',
  head: [
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      }
    ],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: ''
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap'
      }
    ],
    [
      'style',
      {},
      `.vocs_HomePage_logo { font-family: 'Golos Text', sans-serif !important; font-weight: 700; }
       .vocs_SidebarLogo { font-family: 'Golos Text', sans-serif !important; font-weight: 700; }
       .vocs_TopNav_logo { font-family: 'Golos Text', sans-serif !important; font-weight: 700; }
       
       /* Mobile-friendly responsive styles */
       @media (max-width: 768px) {
         .vocs_Content { padding: 1rem !important; }
         .vocs_HomePage_tagline { font-size: 1.5rem !important; line-height: 1.4 !important; }
         .vocs_HomePage_description { font-size: 1rem !important; }
         .vocs_HomePage_buttons { flex-direction: column !important; gap: 0.5rem !important; }
         .vocs_HomePage_button { width: 100% !important; }
         
         /* Responsive grids */
         div[style*="gridTemplateColumns"] { 
           grid-template-columns: 1fr !important; 
           gap: 1rem !important; 
         }
         
         /* Better code block handling on mobile */
         .vocs_CodeBlock { 
           overflow-x: auto !important; 
           font-size: 0.85rem !important; 
         }
         
         /* Responsive tables */
         table { 
           font-size: 0.85rem !important; 
           overflow-x: auto !important; 
           display: block !important;
           white-space: nowrap !important;
         }
         
         /* Mobile navigation improvements */
         .vocs_TopNav { padding: 0.5rem 1rem !important; }
         .vocs_SidebarContainer { width: 100% !important; }
       }
       
       @media (max-width: 480px) {
         .vocs_HomePage_tagline { font-size: 1.25rem !important; }
         .vocs_Content { padding: 0.75rem !important; }
         
         /* Smaller padding for mobile cards */
         div[style*="padding: '1.5rem'"] { 
           padding: 1rem !important; 
         }
         div[style*="padding: '2rem'"] { 
           padding: 1.25rem !important; 
         }
       }`
    ]
  ],
  description: 'The first fully permissionless, user-owned launchpad',
  logoUrl: {
    light: '/images/logo.svg',
    dark: '/images/logo.svg'
  },
  iconUrl: '/favicon.ico',
  theme: {
    colorScheme: 'dark',
    accentColor: '#00ff88', // FEY green from branding
  },
  topNav: [
    { text: 'Documentation', link: '/' },
    { text: 'GitHub', link: 'https://github.com/jpfraneto/fey-protocol-docs' },
    { text: 'App', link: 'https://fey.money' },
  ],
  sidebar: [
    {
      text: 'Introduction',
      items: [
        { text: 'What is FEY?', link: '/introduction' },
        { text: 'Key Concepts', link: '/concepts' },
        { text: 'Getting Started', link: '/getting-started' },
        { text: 'FAQ', link: '/faq' },
      ],
    },
    {
      text: 'Architecture',
      items: [
        { text: 'Protocol Overview', link: '/architecture/overview' },
        { text: 'Contract Map', link: '/architecture/contracts' },
        { text: 'Token Mechanics', link: '/architecture/tokenomics' },
        { text: 'Fee Distribution', link: '/architecture/fees' },
      ],
    },
    {
      text: 'Core Contracts',
      items: [
        { text: 'Factory', link: '/contracts/factory' },
        { text: 'FEY Token', link: '/contracts/token' },
        { text: 'Hook System', link: '/contracts/hook' },
        { text: 'LP Locker', link: '/contracts/locker' },
        { text: 'Fee Locker', link: '/contracts/fee-locker' },
        { text: 'Extensions', link: '/contracts/extensions' },
      ],
    },
    {
      text: 'Runtime Flows',
      items: [
        { text: 'Token Deployment', link: '/flows/deployment' },
        { text: 'Trading & Swaps', link: '/flows/swapping' },
        { text: 'Fee Collection', link: '/flows/fees' },
        { text: 'Reward Distribution', link: '/flows/rewards' },
      ],
    },
    {
      text: 'Developer Guides',
      items: [
        { text: 'Integration Guide', link: '/guides/integration' },
        { text: 'Building Extensions', link: '/guides/extensions' },
        { text: 'State Queries', link: '/guides/queries' },
        { text: 'Cast Commands', link: '/guides/cast-commands' },
      ],
    },
    {
      text: 'Reference',
      items: [
        { text: 'Contract Addresses', link: '/reference/addresses' },
        { text: 'ABI Reference', link: '/reference/abi' },
        { text: 'Constants', link: '/reference/constants' },
        { text: 'Error Codes', link: '/reference/errors' },
      ],
    },
    {
      text: 'Support',
      items: [
        { text: 'Troubleshooting', link: '/support/troubleshooting' },
        { text: 'Security', link: '/support/security' },
        { text: 'Admin Operations', link: '/support/admin' },
      ],
    },
  ],
})
