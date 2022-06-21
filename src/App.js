import './App.css';
import Header from "./sections/Header/Header.js";
import Footer from "./sections/Footer/Footer.js"
import Main from "./sections/Main/Main.js";
import Create from "./sections/Create/Create.js";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App" style={{ overflowX: 'hidden' }}>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/Create" element={<Create/>}/>
          </Routes>
          <Footer></Footer>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
