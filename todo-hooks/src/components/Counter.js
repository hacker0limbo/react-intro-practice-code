import React, { useState, useEffect } from 'react'

const useFetch = (url, count) => {
  const [data, setData] = useState(null)
  // 初始为 true, 表示 loading 状态, 获取 data 以后为 false
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url)
      const data = await res.json()
      const [item] = data.results
  
      setData(item)
      setLoading(false)  
    }

    fetchData()
    // 这里设置为依赖 count 这个 state 的变化, 当 count 变化, 重新发送数据
  }, [count])

  return {
    data,
    loading
  }
}

const Counter = props => {
  const [count, setCount] = useState(0)
  const { data, loading } = useFetch('https://randomuser.me/api/', count)
  
  return (
    <div>
      <p>You clicked {count} times</p>
      {loading ? <p>Loading...</p>: <p>Your fetched data is: {data.name.first}</p>}
      <button onClick={() => setCount(count+1)}>Click me</button>
    </div>
  )
}

export default Counter