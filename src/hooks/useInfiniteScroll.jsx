import { useCallback, useRef, useEffect } from "react";

export function useInfiniteScroll({ loading, hasMore, onLoadMore }) {
  const observer = useRef(null);

  const ref = useCallback(
    (node) => {
      if (loading || !hasMore) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          onLoadMore();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, onLoadMore]
  );

  useEffect(() => {
    return () => observer.current?.disconnect();
  }, []);

  return ref;
}
