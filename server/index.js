require ('newrelic')

require('babel-core/register')
const base = require('../src/base').default

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

require('css-modules-require-hook')({
  rootDir: './',
  mode: 'local',
  generateScopedName: (base.env === 'development') ? '[local]-[hash:base64:4]' : '[hash:base64:4]',
})

base.console.info(`Starting ${base.env} enviroment...`)
require("./server")