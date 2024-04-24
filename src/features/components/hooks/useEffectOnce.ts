import { useRef, useEffect } from 'react';

// Definiendo el tipo para el callback
type EffectCallback = () => void;

const useEffectOnce = (callback: EffectCallback): void => {
  const calledOnce = useRef<boolean>(false);

  useEffect(() => {
    if (!calledOnce.current) {
      callback();
      calledOnce.current = true;
    }
  }, [callback]);
};

export default useEffectOnce;
