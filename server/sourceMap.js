const sourceMap = require('source-map')
const path = require('path')
const fs = require('fs')
const url = require('url')

const distDirPath = path.join(process.cwd(), './dist');

const getSourceMap = async ({ scriptURI, lineNo, columnNo }) => {
  const mapFilePath = path.join(distDirPath, `${url.parse(scriptURI).pathname}.map`);
  const mapFileContent = fs.readFileSync(mapFilePath, 'utf8')

  let consumer = await new sourceMap.SourceMapConsumer(mapFileContent);
  let result = consumer.originalPositionFor({ line: lineNo, column: columnNo });
  return result
}

module.exports = {
  getSourceMap
}
