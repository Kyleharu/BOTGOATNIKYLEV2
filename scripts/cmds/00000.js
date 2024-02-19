const fs = required ('fs'); 
module.exports = {
  config: {
    pangalan: "sendfile",
    mga alias: ["file2"],
    bersyon: "1.0",
    may-akda: "Kyle",
    countdown: 5,
    tungkulin: 0,
    shortDescription: "Ipadala ang bot script",
    longDescription: "Ipadala ang tinukoy na file ng bot ",
    kategorya: "may-ari",
    gabay: "{pn} file name. Hal: .{pn} filename"
  },

  onStart: async function ({mensahe, args, api, kaganapan }) {
    const permission = ["100052395031835",];
    kung (!permission.includes(event.senderID)) {
      return api.sendMessage("💂‍♂️ | 𝗚𝘂𝗮𝗿𝗱 𝗔𝗰𝘁 𝗕𝗼𝘁: Wala kang pahintulot na gamitin ang command na ito 💎 Hilingin sa May-ari na gamitin ang hinaharap na ito ", event.threadID); event.messageID
    }

    const fileName = args[0];
    kung (!fileName) {
      return api.sendMessage("Mangyaring magbigay ng pangalan ng file.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    kung (!fs.existsSync(filePath)) {
      return api.sendMessage(`File not found: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};