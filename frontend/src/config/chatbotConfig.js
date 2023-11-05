import { createChatBotMessage } from 'react-chatbot-kit';
import ButtonChoices from '../components/ButtonChoices.jsx';
import Avatar from '../components/Avatar.jsx';

const botName = 'Sir Floppington';

const config = {
    initialMessages: [
        createChatBotMessage(`Welcome to Coppington! I'm ${botName}, and I will be your virtual assistant! How can I help you today?`, 
        {widget: 'Button Choices'})
    ],
    botName: botName,
    customComponents: {
        botAvatar: (props) => <Avatar {...props} />,
    },
    customStyles: {
      botMessageBox: {
        backgroundColor: "#CBB682",
      },
      chatButton: {
        backgroundColor: '#253d5b',
      },
    },
    widgets: [
        {
            widgetName: 'Button Choices',
            widgetFunc: (props) => <ButtonChoices {...props} />,
        }
    ],
};

export default config;