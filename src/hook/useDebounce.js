import PropType from 'prop-types';
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(value), delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debounceValue;
}

useDebounce.prototype = {
  value: PropType.string.isRequired,
  delay: PropType.string,
};

export default useDebounce;
