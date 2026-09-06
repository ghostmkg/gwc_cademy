import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extracts pathname property (the current URL) from an object
  const { pathname } = useLocation();

  // Automatically triggers whenever the URL (pathname) changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component renders nothing to the screen
};

export default ScrollToTop;