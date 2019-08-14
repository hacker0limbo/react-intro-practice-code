import React, { useState } from 'react'
import axios from 'axios'
import Message from './Message'
import Progress from './Progress'

const isEmpty = (obj) => {
  return Object.entries(obj).length === 0 && obj.constructor === Object
}

const FileUpload = () => {
  // 文件数据
  const [file, setFile] = useState('')
  // 选择待上传的文件名
  const [filename, setFilename] = useState('Choose File')
  // 已经上传的文件对象, 包含文件名, 文件路径
  const [uploadedFile, setUploadedFile] = useState({})
  // 文件上传成功的提示
  const [message, setMessage] = useState({})
  // 文件上传进度
  const [uploadPercentage, setUploadPercentage] = useState(0)

  const handFileChange = (e) => {
    setFile(e.target.files[0])
    setFilename(e.target.files[0].name)
  }

  const handFileSubmit = async (e) => {
    e.preventDefault()
    // formData 是一个 key: value 键值对, key 类似 name=key 后端通过 req.files.file 获取 value
    // 使用 axios 发送 http 请求手动上传 文件
    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          const progressPercentage = parseInt(Math.round(progressEvent.loaded * 100 / progressEvent.total))
          setUploadPercentage(progressPercentage)
          // 5 秒之后清除 progress
          setTimeout(() => {
            setUploadPercentage(0)
          }, 5000)
        }
      })
      console.log('res', res);

      const { fileName, filePath } = res.data
      setUploadedFile({ fileName, filePath })
      // 显示提示
      setMessage({ msg: 'File Uploaded Successfully', color: 'success' })
    } catch (error) {
      if (error.response.status === 500) {
        setMessage({ msg: 'Server Error', color: 'danger' })
      } else {
        setMessage({ msg: error.response.data.msg, color: 'warning' })
      }
    }
  }

  return (
    <>
      {!isEmpty(message) ? <Message message={message} /> : null}
      <form onSubmit={handFileSubmit}>
        <div className="custom-file mb-4">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={handFileChange}
          />
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>
        <Progress percentage={!isEmpty(uploadedFile) ? uploadPercentage : 0} />
        <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4" />
      </form>

      {!isEmpty(uploadedFile) ? (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <h3 className="text-center">{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt={uploadedFile.fileName} />
          </div>
        </div>) : null}
    </>
  )
}

export default FileUpload