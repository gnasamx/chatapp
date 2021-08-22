import { useEffect, useState } from 'react';

const useCurrentUser = id => {
  const [currentuser, setCurrentuser] = useState(() => {
    return id || (window.name === 'undefined' ? '' : window.name);
  });

  useEffect(() => {
    window.name = currentuser;
  }, [currentuser]);

  return [currentuser, setCurrentuser];
};

export default useCurrentUser;
