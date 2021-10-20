import React from 'react'
import ReactDOM from 'react-dom'

import App from '@frontend/app'

const rootEl = document.getElementById('root')
if (rootEl) {
  ReactDOM.render(<App />, rootEl)
}
