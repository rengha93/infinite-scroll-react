import { useState } from 'react'
import './App.css'
import PostsList from './components/PostsList'

function App() {
  return (
    <>
     <h1> Post List  - infinite scroll</h1>
     <PostsList />
    </>
  )
}

export default App
