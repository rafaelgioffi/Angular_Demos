const PROXY_CONFIG = [
    {
        context: ['/api/*'],
        // target: 'http://172.30.128.1:8080', //local
        target: 'http://192.168.1.25:8081', //server Debian
        secure: false,
        loglevel: 'debug'
    }
];

module.exports = PROXY_CONFIG;
