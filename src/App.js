import './App.css';
import Header from "./sections/Header/Header.js";
import Footer from "./sections/Footer/Footer.js"
import Main from "./sections/Main/Main.js";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#AA14F0',
    },
    secondary: {
      main: '#f014c8',
    },
    error: {
      main: '#FF8787',
      dark: '#ff4d4d',
    },
    success: {
      main: '#87FF93',
      dark: '#4dff5e',
    },
    warning: {
      main: '##0aa14',
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ overflowX: 'hidden' }}>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
