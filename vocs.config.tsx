import { defineConfig } from "vocs";
import type { Plugin } from "vite";

// Vite plugin to inject meta tags and Farcaster SDK script into HTML
function injectMetaTags(): Plugin {
  return {
    name: "inject-meta-tags",
    transformIndexHtml(html) {
      const metaTags = `
    <meta name="fc:miniapp" content='{"version":"1","imageUrl":"https://feydocs.lat/miniapp/home-og.svg","button":{"title":"📚 Explore Docs","action":{"type":"launch_frame","name":"FEY Protocol Docs","url":"https://feydocs.lat/"}},"splashImageUrl":"https://feydocs.lat/images/logo.svg","splashBackgroundColor":"#0a4d1a"}' />
    <meta name="fc:frame" content='{"version":"1","imageUrl":"https://feydocs.lat/miniapp/home-og.svg","button":{"title":"📚 Explore Docs","action":{"type":"launch_frame","name":"FEY Protocol Docs","url":"https://feydocs.lat/"}},"splashImageUrl":"https://feydocs.lat/images/logo.svg","splashBackgroundColor":"#0a4d1a"}' />
    <meta property="og:image" content="https://feydocs.lat/miniapp/home-og.svg" />
    <meta name="twitter:title" content="FEY Protocol Documentation" />
    <meta name="twitter:description" content="Learn about FEY Protocol - the first fully permissionless, user-owned launchpad on Base" />
    <meta name="twitter:image" content="https://feydocs.lat/miniapp/home-og.svg" />
`;
      const farcasterScript = `
    <script type="module">
      // Initialize Farcaster miniapp SDK and call ready() when app loads
      (async () => {
        console.log('[Farcaster SDK] Self-invoking async function started');
        try {
          // Import the SDK with better error handling
          console.log('[Farcaster SDK] Importing @farcaster/miniapp-sdk');
          const sdkModule = await import('@farcaster/miniapp-sdk');
          console.log('[Farcaster SDK] Raw import result:', sdkModule);
          
          // Handle both named and default exports
          const sdk = sdkModule.sdk || sdkModule.default;
          console.log('[Farcaster SDK] SDK object:', sdk);
          console.log('[Farcaster SDK] SDK available:', !!sdk);
          console.log('[Farcaster SDK] SDK actions available:', !!sdk?.actions);
          console.log('[Farcaster SDK] SDK ready function available:', typeof sdk?.actions?.ready);

          if (!sdk || !sdk.actions || typeof sdk.actions.ready !== 'function') {
            console.warn('[Farcaster SDK] SDK structure unexpected:', { sdk, actions: sdk?.actions });
            return;
          }

          // Call ready() after the app is fully loaded and ready to display
          // This hides the splash screen and displays the content
          const callReady = async () => {
            try {
              console.log('[Farcaster SDK] Attempting to call sdk.actions.ready()');
              await sdk.actions.ready();
              console.log('[Farcaster SDK] sdk.actions.ready() called successfully');
            } catch (error) {
              // More detailed error logging
              console.warn('[Farcaster SDK] Error during sdk.actions.ready():', error);
              console.warn('[Farcaster SDK] Error details:', {
                name: error.name,
                message: error.message,
                stack: error.stack
              });
            }
          };

          // If page is already loaded, call immediately
          // Otherwise wait for DOMContentLoaded
          const readyState = document.readyState;
          console.log('[Farcaster SDK] Document readyState:', readyState);
          if (readyState === 'complete' || readyState === 'interactive') {
            // Use setTimeout to ensure all scripts have loaded
            console.log('[Farcaster SDK] setTimeout for callReady immediately');
            setTimeout(callReady, 0);
          } else {
            console.log('[Farcaster SDK] Waiting for DOMContentLoaded to call callReady');
            document.addEventListener('DOMContentLoaded', () => {
              console.log('[Farcaster SDK] DOMContentLoaded event fired');
              callReady();
            });
          }
        } catch (error) {
          // More detailed error logging for import failures
          console.warn('[Farcaster SDK] Failed to import SDK:', error);
          console.warn('[Farcaster SDK] Error details:', {
            name: error.name,
            message: error.message,
            stack: error.stack
          });
        }
        console.log('[Farcaster SDK] Self-invoking async function finished');
      })();
    </script>
`;
      // Inject meta tags before closing head tag, and script before closing body tag
      let result = html.replace("</head>", `${metaTags}</head>`);
      result = result.replace("</body>", `${farcasterScript}</body>`);
      return result;
    },
  };
}

export default defineConfig({
  title: "FEY Protocol Docs",
  font: { google: "Golos Text" },
  head: (
    <>
      <meta
        name="fc:miniapp"
        content='{"version":"1","imageUrl":"https://feydocs.lat/miniapp/home-og.svg","button":{"title":"📚 Explore Docs","action":{"type":"launch_frame","name":"FEY Protocol Docs","url":"https://feydocs.lat/"}},"splashImageUrl":"https://feydocs.lat/images/logo.svg","splashBackgroundColor":"#0a4d1a"}'
      />
      <meta
        name="fc:frame"
        content='{"version":"1","imageUrl":"https://feydocs.lat/miniapp/home-og.svg","button":{"title":"📚 Explore Docs","action":{"type":"launch_frame","name":"FEY Protocol Docs","url":"https://feydocs.lat/"}},"splashImageUrl":"https://feydocs.lat/images/logo.svg","splashBackgroundColor":"#0a4d1a"}'
      />
      <meta property="og:title" content="FEY Protocol Documentation" />
      <meta
        property="og:image"
        content="https://feydocs.lat/miniapp/home-og.svg"
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="FEY Protocol Documentation" />
      <meta
        name="twitter:description"
        content="Learn about FEY Protocol - the first fully permissionless, user-owned launchpad on Base"
      />
      <meta
        name="twitter:image"
        content="https://feydocs.lat/miniapp/home-og.svg"
      />
    </>
  ),
  vite: {
    plugins: [injectMetaTags()],
  },
  description: "The first fully permissionless, user-owned launchpad",
  logoUrl: {
    light: "/images/logo.svg",
    dark: "/images/logo.svg",
  },
  iconUrl: "/images/logo.svg",
  theme: {
    colorScheme: "dark",
    accentColor: "#00ff88",
  },
  topNav: [
    { text: "Documentation", link: "/" },
    { text: "GitHub", link: "https://github.com/jpfraneto/fey-protocol-docs" },
    { text: "App", link: "https://fey.money" },
  ],
  sidebar: [
    {
      text: "Introduction",
      items: [
        { text: "What is FEY?", link: "/introduction" },
        { text: "Key Concepts", link: "/concepts" },
        { text: "Getting Started", link: "/getting-started" },
        { text: "FAQ", link: "/faq" },
      ],
    },
    {
      text: "Architecture",
      items: [
        { text: "Protocol Overview", link: "/architecture/overview" },
        { text: "Contract Map", link: "/architecture/contracts" },
        { text: "Token Mechanics", link: "/architecture/tokenomics" },
        { text: "Fee Distribution", link: "/architecture/fees" },
      ],
    },
    {
      text: "Core Contracts",
      items: [
        { text: "Factory", link: "/contracts/factory" },
        { text: "FEY Token", link: "/contracts/token" },
        { text: "Hook System", link: "/contracts/hook" },
        { text: "LP Locker", link: "/contracts/locker" },
        { text: "Fee Locker", link: "/contracts/fee-locker" },
        { text: "Extensions", link: "/contracts/extensions" },
      ],
    },
    {
      text: "Runtime Flows",
      items: [
        { text: "Token Deployment", link: "/flows/deployment" },
        { text: "Trading & Swaps", link: "/flows/swapping" },
        { text: "Fee Collection", link: "/flows/fees" },
        { text: "Reward Distribution", link: "/flows/rewards" },
      ],
    },
    {
      text: "Developer Guides",
      items: [
        { text: "Integration Guide", link: "/guides/integration" },
        { text: "Building Extensions", link: "/guides/extensions" },
        { text: "State Queries", link: "/guides/queries" },
        { text: "Cast Commands", link: "/guides/cast-commands" },
      ],
    },
    {
      text: "Reference",
      items: [
        { text: "Contract Addresses", link: "/reference/addresses" },
        { text: "ABI Reference", link: "/reference/abi" },
        { text: "Constants", link: "/reference/constants" },
        { text: "Error Codes", link: "/reference/errors" },
      ],
    },
    {
      text: "Support",
      items: [
        { text: "Troubleshooting", link: "/support/troubleshooting" },
        { text: "Security", link: "/support/security" },
        { text: "Admin Operations", link: "/support/admin" },
      ],
    },
  ],
});
