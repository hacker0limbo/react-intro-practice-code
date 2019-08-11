import React, { useState } from 'react';
import Posts from './Posts'
import Pagination from './Pagination'

const Home = (props) => {
  const { posts, loading } = props
  // 当前所在的页面数
  const [currentPage, setCurrentPage] = useState(1)
  // 每页多少篇文章
  const [postsPerPage] = useState(10)

  // get current posts
  const getCuttentPosts = () => {
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    return currentPosts
  }

  // change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts posts={getCuttentPosts()} loading={loading} />
      <Pagination 
        postsPerpage={postsPerPage} 
        totalPosts={posts.length} 
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  )
}

export default Home;
