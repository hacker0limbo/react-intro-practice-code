import React, { useState, useEffect } from 'react'

const GithubList = () => {
  const [page, setPage] = useState(1)
  const [commits, setCommits] = useState([])

  const nextPage = () => {
    setPage(page + 1)
  }

  const firstPage = () => {
    setPage(1)
  }

  useEffect(() => {
    // 监控 page 变化, 重新发送请求
    fetch(`https://api.github.com/search/commits?q=repo:facebook/react+css&page=${page}`, {
      method: "GET",
      headers: new Headers({ "Accept": "application/vnd.github.cloak-preview" }),
    }).then(res => res.json())
      .then(data => {
        setCommits(data.items)
      })
      .catch(error => console.log(error))
  }, [page])

  return (
    <div style={{border: '1px solid blue'}}>
      {commits.length !== 0 && <button onClick={nextPage}>next page</button>}
      {commits.length === 0 && <button onClick={firstPage}>first page</button>}

      {commits.map(c => (
        <div key={c.sha}>{c.commit && (
          <div>
            <strong>{c.commit.committer.name}</strong>
            <blockquote>{c.commit.message}</blockquote>
            <hr />
          </div>
        )}
        </div>
      ))}
    </div>
  )
}

export default GithubList