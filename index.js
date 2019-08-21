// bring in express server
const server = require('./server.js')

// define a port to listen on
const PORT = process.env.PORT || 4000

// call the listen() method on the server
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})
