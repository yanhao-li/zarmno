const api = {
  root: '/v1',
  host: 'http://10.250.184.6',
  port: 8080,
}

const apiPath = api.host + ':' + api.port.toString() + api.root

export {
  apiPath
};
