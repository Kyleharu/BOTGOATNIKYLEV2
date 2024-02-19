const fs = require('fs');//please add music or video and move that all file inside scripts/cmdsnonprefix and replace that music name in the code or vdo if you want toset vdo just replace .mp3 with .mp4

module.exports = {
  config: {
    name: "noprefix",
    version: "1.0",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },

  onStart: async function() {},

  onChat: async function({ event, message, getLang, api }) {
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "goodnight":
          message.reply({
            body: "\n  Goodnight Everyone Sleepwell! 🌃",
            attachment: fs.createReadStream("scripts/cmds/noprefix/goodnight.gif"),
          });
          await api.setMessageReaction("🌃", event.messageID, event.threadID, api);
        break;
case "goodmorning":
          message.reply({
            body: "\n          Goodmorning Everyone!\n                 Have A Nice Day 🌇",
            attachment: fs.createReadStream("scripts/cmds/noprefix/goodmorning.gif"),
          });
          await api.setMessageReaction("🌇", event.messageID, event.threadID, api);
   case "welcome":
          message.reply({
            body: "\n    Welcome! Enjoy Your Stay!",
            attachment: fs.createReadStream("scripts/cmds/noprefix/welcome.gif"),
          });
          await api.setMessageReaction("❤", event.messageID, event.threadID, api);
case "prefix":
          message.reply({
            body: "Hello nigga, My Prefix Is » × «\n\n⚠️𝗨𝗡𝗗𝗘𝗥 𝗣𝗥𝗢𝗧𝗘𝗖𝗧𝗜𝗢𝗡 𝗕𝗬 𝗞𝗬𝗟𝗘⚜️\n𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲:𝖪𝖸𝖫𝖤 𝖡𝖠𝖨𝖳-𝖨𝖳(𝖧𝖠𝖭𝖣𝖲𝖮𝖬𝖤)\n𝗔𝗴𝗲:𝟣𝟫\n\n📩𝖠𝖣𝖬𝖨𝖭 𝖢𝖮𝖭𝖳𝖠𝖢𝖳:https://www.facebook.com/profile.php?id=100052395031835",
            attachment: fs.createReadStream("scripts/cmds/noprefix/prefix.mp4"),
          });
          await api.setMessageReaction("🗣️", event.messageID, event.threadID, api);
  case "owner":
message.reply({
body: "『𝗕𝗢𝗧 OWNER』\n❯ Bot Name: Yanzu\n❯ Bot Owner: Kyle Bait-it\n❯ Age: 19 \n❯ Gender: Male\n❯ Facebook: https://www.facebook.com/profile.php?id=100052395031835\n❯ Total Group: 100\n❯ Total Users: 890\n❯ Bot Prefix: ×\n❯ Today is: putangina day tanginamo! \n❯ Thanks for using YANZU BOT",
            attachment: fs.createReadStream("scripts/cmds/noprefix/pogi.mp4"),
          });
          await api.setMessageReaction("😎", event.messageID, event.threadID, api);
    case "owner2":
          message.reply({
            body: "📜 𝙊𝙬𝙣𝙚𝙧 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣:\n𝖭𝖺𝗆𝖾:KYLE BAIT-IT \n𝖦𝖾𝗇𝖽𝖾𝗋:Male\n𝖠𝗀𝖾: 19\n📩𝗞𝗬𝗟𝗘 𝗖𝗢𝗡𝗧𝗔𝗖𝗧:https://www.facebook.com/profile.php?id=100052395031835",
            attachment: fs.createReadStream("scripts/cmds/noprefix/pogi2.mp4"),
          });
          await 
            api.setMessageReaction("😎", event.messageID, event.threadID, api);
            case "shoti":
                    message.reply({
                      body: "𝗺𝗴𝗮 𝘀𝗵𝗼𝘁𝗶 𝗻𝗶 𝗺𝗮𝘀𝘁𝗲𝗿 𝗞𝘆𝗹𝗲.",
                      attachment: fs.createReadStream("scripts/cmds/noprefix/cliff.mp4"),
                    });
                    await            api.setMessageReaction("😍", event.messageID, event.threadID, api);
   case "gf":
          message.reply({
            body: "𝗛𝗲𝗿𝗲'𝘀 𝘁𝗵𝗲 𝗺𝗮𝘀𝘁𝗲𝗿  𝗞𝘆𝗹𝗲 𝗚𝗶𝗿𝗹𝗳𝗿𝗶𝗲𝗻𝗱😍",
                      attachment: fs.createReadStream("scripts/cmds/noprefix/kylegf.mp4"),
                    });
                    await            api.setMessageReaction("🥰", event.messageID, event.threadID, api);
          case "pogi":
          message.reply({
            body: "Sigi na\n~𝙔𝙤𝙪'𝙧𝙚 𝙖𝙡𝙬𝙖𝙮𝙨 𝙤𝙣 𝙢𝙮 𝙢𝙞𝙣𝙙 𝙏𝙝𝙖𝙩'𝙨 𝙝𝙤𝙬 𝙢𝙪𝙘𝙝 𝙄 𝙘𝙖𝙧𝙚 𝙄 𝙘𝙖𝙣'𝙩 𝙩𝙝𝙞𝙣𝙠 𝙤𝙛 𝙖 𝙩𝙞𝙢𝙚𝙏𝙝𝙖𝙩 𝙮𝙤𝙪 𝙬𝙚𝙧𝙚𝙣'𝙩 𝙩𝙝𝙚𝙧𝙚 𝙄 𝙠𝙣𝙤𝙬 𝙩𝙝𝙖𝙩 𝙄'𝙙 𝙗𝙚 𝙡𝙮𝙞𝙣𝙜 𝙞𝙛 𝙄 𝘿𝙞𝙙𝙣'𝙩 𝙬𝙖𝙣𝙩 𝙮𝙤𝙪 𝙝𝙚𝙧𝙚 𝘾𝙖𝙪𝙨𝙚 𝙗𝙖𝙗𝙮 𝙄'𝙢 𝙞𝙣 𝙡𝙤𝙫𝙚 𝘼𝙣𝙙 𝙬𝙝𝙮 𝙘𝙖𝙣'𝙩 𝙮𝙤𝙪 𝙟𝙪𝙨𝙩 𝙡𝙞𝙫𝙚 𝙣𝙚𝙖𝙧~",
            attachment: fs.createReadStream("scripts/cmds/noprefix/pogisigena.mp4"),
          });
          await            api.setMessageReaction("🤣", event.messageID, event.threadID, api);
   default:
          return;
      }
    }
  }
};