import { useEffect, useRef, MutableRefObject } from 'react';

const useChatScrollToBottom = <T>(prop: T): MutableRefObject<HTMLElement | null> => {
  const scrollRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
    }
  }, [prop]);

  return scrollRef;
};
export default useChatScrollToBottom;
