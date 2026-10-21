const PROXY_CONFIG = [
    {
        context: ['/api/*'],
        target: 'http://172.30.128.1:8080',
        secure: false,
        loglevel: 'debug'
    }
];

module.exports = PROXY_CONFIG;