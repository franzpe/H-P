/// <reference types="next" />
/// <reference types="next/types/global" />

// type for svg as Component lodead by @svgr/webpack
declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.gif';

/// <reference types="next-images" />
