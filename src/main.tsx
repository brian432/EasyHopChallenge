import * as ReactDom from 'react-dom/client'
import React from 'react-dom'
import App from './App'
import { FormDataProvider } from './context/formState'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDom.createRoot(document.getElementById('app') as HTMLElement)
root.render(
  <BrowserRouter>
    <FormDataProvider>
      <App />
    </FormDataProvider>
  </BrowserRouter>
)
