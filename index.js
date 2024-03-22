const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = "6415528449:AAEPYLQcTQ-wAhSFzx2Zktpqe-8CP5Gyj_I";
const webAppUrl = "https://72f6-161-35-219-160.ngrok-free.app/";
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  console.log("web", msg.web_app_data);
  const chatId = msg.chat.id;
  const text = msg.text;
  if (text === "/start") {
    await bot.sendMessage(chatId, 'Для початку настисніть кнопку "Обміняти"', {
      reply_markup: {
        keyboard: [[{ text: "" }]],
      },
    });
  }
  console.log("web1", msg.web_app_data);
  if (msg?.web_app_data?.data) {
    console.log(msg.web_app_data);
    try {
      const data = JSON.parse(msg.web_app_close?.data);
      await bot.sendMessage(chatId, `Hello, ${msg.from?.username}`);
    } catch (error) {}
  }
  // send a message to the chat acknowledging receipt of their message
});
