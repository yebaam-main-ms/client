import { useEffect, useState, useCallback } from 'react';

// Definiendo el tipo para el callback
type CallbackFunction = () => void;

const useInfiniteScroll = (callback: CallbackFunction): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    // Comprobando que el usuario ha llegado al final de la página y que no se está actualmente recuperando datos
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching)
      return;
    setIsFetching(true);
  }, [isFetching]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching, callback]);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
