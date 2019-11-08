var config = {
  server: {
    protocol: 'http',
    host: '103.137.185.70',
    port: '3102'
  }
}

let { server } = config
config['server']['domain'] = `${server.protocol}://${server.host}:${server.port}`
// config['server']['domain'] = `http://api.edutour.vn`

module.exports = config
