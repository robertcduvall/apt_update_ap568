import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'your AI TA';

const config = {
  initialMessages: [createChatBotMessage(`Good try on the APT! Let's figure out the other 3 test cases.`)],
  botName: botName,

};

export default config;