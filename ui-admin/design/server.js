/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */

const express = require('express')

const app = express()
const port = 3000

app.use(express.static('dist'))

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`)
})