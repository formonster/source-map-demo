const httpclient = require('urllib');
const fs = require('fs')

async function uploadFile({ host, filePath, data }) {
  const file = fs.createReadStream(filePath)
  return httpclient.request(host, {
    dataType: 'json',
    method: 'POST',
    data,
    timeout: 20000,
    
    // 单文件上传
    files: file,
    
    // 多文件上传
    // files: {
    //   file1: __filename,
    //   file2: fs.createReadStream(__filename),
    //   file3: Buffer.from('mock file content'),
    // },
  })
}

module.exports = uploadFile
