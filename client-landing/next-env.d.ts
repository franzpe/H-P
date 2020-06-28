/// <reference types="next" />
/// <reference types="next/types/global" />

// type for svg as Component lodead by @svgr/webpack
declare module '*.svg' {
  const content: any;
  export default content;
}

/// <reference types="next-images" />
