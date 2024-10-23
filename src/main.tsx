import { StrictMode } from 'react'
import { ThemeProvider } from 'styled-components';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyles, lightTheme } from './styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles/>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
