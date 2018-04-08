const { Observable } = require('rxjs')
const net = require('net')
const { v4: uuid } = require('uuid')

const makeServer = () => {
  const server = net.createServer()

  return {
    _server: server,
    messages: Observable.fromEvent(server, 'connection')
      .flatMap(socket => Observable.fromEvent(socket, 'data'))
      .map(s => s.toString())
  }
}

const sendMessageAcrossTCP = (opts, message) => {
  const client = net.createConnection(opts, () => client.end(`${message}\n`))
}

module.exports = {
  makeServer,
  sendMessageAcrossTCP
}