import { useState, useEffect } from 'react';

const useMediaQuery = (mediaQuery) => {
  const [state, setState] = useState(false);

  const handleMediaQueryChange = (theMediaQuery) => {
    if (theMediaQuery.matches) {
      setState(true);
    } else {
      setState(false);
    }
  };

  useEffect(() => {
    const theMediaQuery = window.matchMedia(mediaQuery);
    theMediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(theMediaQuery);

    return () => {
      theMediaQuery.removeListener(handleMediaQueryChange);
    };
    // eslint-disable-next-line
  }, []);

  return state;
};

export default useMediaQuery;