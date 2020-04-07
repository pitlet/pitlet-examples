import { render, h } from 'preact'
import { App } from './App'

render(<App />, document.getElementById('app'))

if (module.hot) {
  // enable hot reloading
  module.hot.accept('./App', () => {
    const NewApp = require('./App').App
    render(<NewApp />, document.getElementById('app'))
  })
}
