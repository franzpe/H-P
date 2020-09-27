const initializeScrollBehavior = async () => {
  if (!('scrollBehavior' in document.documentElement.style)) {
    console.log('scroll behavior polyfill needed');
    await import('scroll-behavior-polyfill');
  }
};

export const initializePolyfills = async () => {
  await initializeScrollBehavior();
};
