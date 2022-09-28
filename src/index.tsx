import ReactDOM from 'react-dom/client'
import './app/index.css'
import Main from './pages/main/main'
import reportWebVitals from './app/reportWebVitals'
import { Provider } from 'react-redux'
import { store } from "./app/store"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <Provider store={store}>
    <Main />
  </Provider>
)

reportWebVitals()
