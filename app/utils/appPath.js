const api = {
  root: '/api/v1',
  host: 'http://localhost',
  port: 8080,
}

const apiPath = api.host + ':' + api.port.toString() + api.root

export {
  apiPath
};
