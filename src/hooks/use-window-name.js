import { useEffect, useState } from 'react';

const useWindowName = name => {
  const [windowName, setWindowName] = useState(name);

  useEffect(() => {
    window.name = windowName;
  }, [windowName]);

  return [windowName, setWindowName];
};

export default useWindowName;
