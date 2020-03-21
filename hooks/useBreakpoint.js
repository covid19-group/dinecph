import { useState, useEffect } from 'react';

const useBreakpoint = () => {
  const [width, setWidth] = useState();
  const getWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', getWidth());
    return () => {
      window.removeEventListener('resize', getWidth());
    };
  });
  let breakpoint = {};
  if (width >= 1280) {
    breakpoint.xl = true;
  }
  if (width >= 1024) {
    breakpoint.lg = true;
  }
  if (width >= 768) {
    breakpoint.md = true;
  }
  if (width >= 640) {
    breakpoint.sm = true;
  }
  if (width >= 480) {
    breakpoint.xs = true;
  }
  return breakpoint;
};
export default useBreakpoint;
