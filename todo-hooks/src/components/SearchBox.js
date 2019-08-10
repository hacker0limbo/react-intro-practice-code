import React, { useState, useEffect } from 'react'

/**
 * 监控 input 框的输入, 输入改变(query)重新发送请求 render
 */
const SearchBox = () => {
  const [data, setData] = useState({ hits: [] })
  const [query, setQuery] = useState('react')

  useEffect(() => {
    let ignore = false

    const fetchData = async () => {
      const res = await fetch('https://hn.algolia.com/api/v1/search?query=' + query)
      const result = await res.json()
      if (!ignore) {
        setData(result)
      }
    }

    fetchData()
    return () => {
      // unmount 时候触发
      ignore = true
    }
  }, [query])

  return (
    <div>
      <input 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        placeholder="put your keywords here"  
      />
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchBox