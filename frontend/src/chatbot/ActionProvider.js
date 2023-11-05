// ActionProvider starter code
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    
    const initialAction = () => {
        const botMessage = createChatBotMessage('Glad you asked! Here at Coppington, we are committed to lower your financial and knowledge barriers and achieve financial equality. To do that, we will guide you in the process of' 
        + ' investing, particularly in real estate properties. There are different real estate properties and tokens of them that you can buy, and they will contain information such as ' + 
        'the number of rooms, square feet, predicted price, score, number and price of tokens, etc. to help you decide on how you want to invest your money in these properties. I will be here ' + 
        'to provide you any advice on investing whenever you need it.', {widget: 'Button Choices'});
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
    };
    
    const firstTimer = () => {
      const botMessage = createChatBotMessage('Awesome, and no worries! Everyone has to start somewhere. I will help you get started.\n\n' + 
      'As you may have seen, there will be cards of real estate properties listed. Each card will have an investment score, which is a number from 0 to 100, and the higher the score, the better the investment it would be. ' + 
      'I would click on the card to see more information about the property, such as the number of tokens available, the pricing, and the description to have a better understanding. ' + 
      'I would recommend buying tokens for investing in the property if the score is above 70, or sometimes above 50 if the price of the tokens are reasonable and low. If this is the first time you are buying tokens, ' + 
      'I would read everything about a property you want to invest in and buy a few tokens to be safe. As you progress through your investment journey, you can buy more tokens for the same property or other properties if you feel confident. All the best in your investment journey!',
      {widget: 'Button Choices'});
  
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    };

    const notEnoughMoney = () => {
      const botMessage = createChatBotMessage('Don\'t worry, you do not have to fully invest into whole properties. You can buy tokens, which are fractions of the properties. '
      + 'You can buy a certain amount of tokens that you can afford so that you still have a chance in investing and gaining profit without going broke.',
      {widget: 'Button Choices'});
  
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    };

    const advice = () => {
      const botMessage = createChatBotMessage('When investing in real estate, there are factors to consider that can help you make invest wisely. ' + 
      'You should consider things like the investment score, price of the tokens, and expected APY.',
      {widget: 'Button Choices'});
  
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    };

    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you. I hope you have a great time learning and investing!', {widget: 'Button Choices'});
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
    };

    return (
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            actions: {
                handleHello,
                initialAction,
                firstTimer,
                notEnoughMoney,
                advice,
            },
          });
        })}
      </div>
    );
  };
 
 export default ActionProvider;