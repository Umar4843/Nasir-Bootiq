import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <GoogleOAuthProvider clientId="681944833317-givqtr7qjfedb201j2juvj71lfgsfe7r.apps.googleusercontent.com">
            <App />
        </GoogleOAuthProvider>;

    </BrowserRouter>
)
