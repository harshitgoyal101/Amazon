import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter} from "react-router-dom";
import { SnackbarContextProvider } from './components/context/SnackbarContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <SnackbarContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </SnackbarContextProvider>

)
