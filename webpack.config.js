const path = require('path')

module.exports = {
    mode: 'development',
    entry: ['./src/javascript.js' ,'./src/api.js'],
    output: {
        path: path.resolve(__dirname, 'dist') ,
        filename: 'bundle.js'
    },
    watch: true
}