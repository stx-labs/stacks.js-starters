/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    resolveAlias: {
      // Workaround: Turbopack's SSR chunking breaks on a circular import in
      // @stacks/transactions' ESM build; use the CJS build on the server only.
      "@stacks/transactions": {
        browser: "@stacks/transactions/dist/esm/index.js",
        default: "@stacks/transactions/dist/index.js",
      },
    },
  },
};

export default nextConfig;
