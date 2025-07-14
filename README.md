# 🌀 Infinite Scroll React App

This is a demo application that implements infinite scrolling in React using the **IntersectionObserver API** and a **reusable custom hook**. The app fetches paginated data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) and loads more posts automatically as you scroll.

---

## 📦 Tech Stack

- **React** (with Hooks)
- **Custom Hooks** (`useInfiniteScroll`)
- **IntersectionObserver** for scroll detection
- **Fetch API** for data loading
---

## 🎯 Features

- ✅ Infinite scrolling list of posts
- ✅ Uses `IntersectionObserver` (no manual scroll listeners)
- ✅ Efficient rendering using `useRef`, `useCallback`, and `useEffect`
- ✅ Stops fetching when all data is loaded (`hasMore` flag)
- ✅ Handles loading states and errors gracefully
- ✅ Modular design with reusable logic in a custom hook

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/rengha93/infinite-scroll-react.git
cd infinite-scroll-react
npm install
npm run dev
```

## API Info
https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10
The API supports pagination and includes x-total-count in the headers to determine total posts.

## Live Demo link
https://infinite-scroll-react-ochre.vercel.app/