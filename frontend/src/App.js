import {React, useState} from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Listing from './components/Listing';
import Hero from './components/Hero';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import 'react-chatbot-kit/build/main.css'

import SirFloppington from './components/sir-floppington.png'
import config from './config/chatbotConfig';
import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider'
import Chatbot from 'react-chatbot-kit'

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"],
  },
  palette: {
    primary: {
      light: '#cbb682',
      main: '#cbb682',
      dark: '#cbb682',
      contrastText: '#cbb682',
    },
    secondary: {
      light: '#cbb682',
      main: '#cbb682',
      dark: '#cbb682',
      contrastText: '#cbb682',
    },
  }
});

const App = () => {
  const [openChatbot, setOpenChatbot] = useState(false);

  const toggleChat = () => {
    setOpenChatbot(!openChatbot);
  };

  return (
    <>
    <ThemeProvider theme={theme}>
      <Typography component="div">
      <Navbar />
      <Hero />
      <Listing />
      </Typography>
    </ThemeProvider>

    <div className='rightside'>
          {openChatbot ? (
                <Chatbot
                  config={config}
                  messageParser={MessageParser}
                  actionProvider={ActionProvider}
                />
            ) : (
              null
            )  
          }
        </div>
        <div className='circle' onClick={toggleChat}>
          {/* <p class="text">Chatbot</p> */}
          <img src={SirFloppington} className="floppington" alt="logo" />
        </div>
    </>
    
    
  );
};

export default App;