import { createMDX } from "fumadocs-mdx/next";

/** @type {import('next').NextConfig} */
const config = {
 // configs
};

const withMDX = createMDX({
  // customise the config file path
  // configPath: "source.config.ts"

   webpack: (config) => {
    config.resolve.alias['fumadocs-mdx:collections'] = './.source';
    return config;
  }
});

export default withMDX(config);