const path = require('path')

module.exports = {
    mode: 'development',
    entry: ['./src/templates.js','./src/api.js',],
    output: {
        path: path.resolve(__dirname, 'dist') ,
        filename: 'bundle.js'
    },
    watch: true
}