import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

import express from 'express'

const app = express()
const port = 3000

app.use(express.static(join(fileURLToPath(new URL('.', import.meta.url)), 'static')))

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`)
})
