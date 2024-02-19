const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "ping2",
    version: "1.0",
    author: "Servants of Allah",// do not change!!
    countDown: 5,
    role: 0,
    shortDescription: "Check the bot's ping",
    longDescription: "Check the bot's ping",
    category: "misc",
    guide: {en:"{p}ping"}
  },
  onStart: function ({ api, message, event }) {
    const startTime = Date.now();

    api.sendMessage("Ping...", event.threadID).then((sentMessage) => {
      const endTime = Date.now();
      const botPing = endTime - startTime;
      const apiPing = sentMessage.timestamp - startTime;

      const now = moment().tz('Asia/Jakarta');

      let pingMessage = `Pong!\nBot Latency: ${botPing}ms\nAPI Latency: ${apiPing}ms\nCurrent Date: ${now.format('YYYY-MM-DD')}`;

      api.sendMessage(`${pingMessage}`, event.threadID, sentMessage.messageID);
    });
  },
};