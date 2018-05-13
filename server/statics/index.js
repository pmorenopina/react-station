import path from 'path'
import express from 'express'

import base from 'base'

const devStatics = [
  {route: '/dlls', dir: path.join(__dirname, '../../dist/')},
  {route: '/robots.txt', dir: path.join(__dirname, '../../src/app/robots/ataraxia/robots.txt')},
  {route: '/sitemap.xml', dir: path.join(__dirname, '../../src/app/sitemaps/ataraxia/sitemap.xml')},
  {route: '/google8d64cfb74512a9c0.html', dir: path.join(__dirname, '../../src/app/google/ataraxia/google.html')},
  {route: '/', dir: path.join(__dirname, '../../src/app')}
]

const prodStatics = [
  {route: '/', dir: path.join(__dirname, '../../dist')},
  {route: '/assets', dir: path.join(__dirname, '../../dist/assets')},
  {route: '/robots.txt', dir: path.join(__dirname, '../../src/app/robots/ataraxia/robots.txt')},
  {route: '/google8d64cfb74512a9c0.html', dir: path.join(__dirname, '../../src/app/google/ataraxia/google.html')},    
  {route: '/sitemap.xml', dir: path.join(__dirname, '../../src/app/sitemaps/ataraxia/sitemap.xml')}
]

const envStatics = (base.env === 'development') ? devStatics : prodStatics
const statics = envStatics

export default function applyStaticsPaths(app) {
  statics.map(function(staticPath) {
    app.use(staticPath.route, express.static(staticPath.dir))
    base.console.success(`Applied static path ${staticPath.route}`)
  })
}