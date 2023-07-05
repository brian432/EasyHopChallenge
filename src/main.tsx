import * as ReactDom from 'react-dom/client'
import App from './App'
import { FormDataProvider } from './context/formState'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'

const root = ReactDom.createRoot(document.getElementById('app') as HTMLElement)
root.render(
  <StrictMode>
    <BrowserRouter>
      <FormDataProvider>
        <App />
      </FormDataProvider>
    </BrowserRouter>
  </StrictMode>
)
