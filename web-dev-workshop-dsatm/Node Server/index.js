import express from 'express'
import UAParser from 'ua-parser-js'

const app = express()
const port = 3000

app.use((req, res, next) => {
  const parser = new UAParser(req.get('User-Agent'))
  const parserResults = parser.getResult()
  debugger
  const { name, version } = parserResults.browser
  console.log('\n***************************')
  console.log('Request URL:', req.url)
  console.log('Request Method:', req.method)
  console.log('Browser Name: ', name)
  console.log('Browser Version: ', version)
  console.log(req)
  console.log('***************************\n')
  next()
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
