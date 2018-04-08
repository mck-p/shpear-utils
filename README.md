# @shpear/utils

> Utility functions for the @shpear microservice framework

## Usage
```js
const { makeServer, sendMessageAcrossTCP } = require('@shpear/utils')

// Creates a Server instance for our Message Bus
const { _server, messages } = makeServer()

// Send a message to a TCP server
sendMessageAcrossTCP({
  host: 'localhost',
  port: 5001
}, 'some value able to be sent to net.Socket.end')
```
