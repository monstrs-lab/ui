const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'static')))

app.listen(3000, () => {
  console.log('Listening at 3000') // eslint-disable-line no-console
})
