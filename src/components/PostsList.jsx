import { useEffect, useState } from "react";
import { fetchPosts } from "../services/fetchPosts";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMorePosts = async () => {
    try {
      setLoading(true);
      const { data: newPosts, totalCount } = await fetchPosts(page, 10);
      setPosts((prev) => [...prev, ...newPosts]);

      if (page * 10 >= totalCount) {
        setHasMore(false);
      }
    } catch (err) {
      console.error("failed to fetch posts", err);
    } finally {
      setLoading(false);
    }
  };

  const onLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const lastPostElementRef = useInfiniteScroll({
    loading,
    hasMore,
    onLoadMore,
  });

  useEffect(() => {
    loadMorePosts();
  }, [page]);

  return (
    <div>
      <ul>
        {posts.map((post, index) => (
          <li
            key={`${post.id}-${index}`}
            ref={posts.length === index + 1 ? lastPostElementRef : null}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {loading && <p> loading...</p>}
    </div>
  );
}
