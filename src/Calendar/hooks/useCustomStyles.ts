import React, {useEffect, useState} from 'react';

function useCustomStyles() {
  const [customStyles, setCustomStyles] = useState();

  useEffect(() => {}, [customStyles]);

  return {
    customStyles,
    setCustomStyles,
  };
}

export default useCustomStyles;
