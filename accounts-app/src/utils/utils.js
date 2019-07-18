export const formattedTime = timestamp => {
  // timestamp 时间戳数字形式
  const date = new Date(timestamp*1000)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}-${month}-${day}`
}

export const timestamp = date => Date.parse(date.trim()) / 1000
