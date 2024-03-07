import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleTest3 = () => {
    const botMessage = createChatBotMessage('Think about line 6 of your code. What happens if order is not a multiple of 12?');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleExplain = () => {
    const botMessage = createChatBotMessage('The for loop on line 5 makes lines 6 and 7 run for each entry in the orders array. We refer to the current entry as order.');

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
            handleTest3,
            handleExplain
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;