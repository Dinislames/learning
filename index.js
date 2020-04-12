const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1160160458:AAFKCi6sWUqhlCuHSFcxNMygEhkaXELLEHo';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

const languages = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'C++', callback_data: 'C++' }],
            [{ text: 'C#', callback_data: 'C#' }],
            [{ text: 'Python', callback_data: 'Python' }],
            [{ text: 'Java', callback_data: 'Java' }],
            [{ text: 'Kotlin', callback_data: 'Kotlin' }],
            [{ text: 'JavaScript', callback_data: 'JavaScript' }],
            [{ text: 'PHP', callback_data: 'PHP' }],
        ]
    })

};

// Matches "/echo [whatever]"
bot.onText(/\/start/, (msg, match) => {
    bot.sendMessage(msg.chat.id, 'Какой язык вы желаете познать дорогой друг:', languages);
});

bot.on('callback_query', function (call) {
   let url = '';

   if (call.data == 'C++') {
       url = 'https://tproger.ru/books/cpp-books-beginners/'
   }

   else if (call.data == 'C#'){
       url = "https://proglib.io/p/top-10-knig-po-c-ot-novichka-do-professionala-2020-03-18"
   }

   else if (call.data == 'Python'){
       url = "https://proglib.io/p/python-best-books/"
   }

   else if (call.data == 'Java'){
       url = "https://proglib.io/p/java-books-2019/"
   }

   else if (call.data == 'Kotlin'){
       url = "https://proglib.io/p/learning-kotlin/"
   }

   else if (call.data == 'JavaScript'){
      url = "https://techrocks.ru/2018/04/20/10-recommended-javascript-books/"
   }

   else {
       url = "https://proglib.io/p/php-books/"
   }
   bot.sendMessage(call.message.chat.id, url);
});

