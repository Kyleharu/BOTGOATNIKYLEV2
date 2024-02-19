const axios = require('axios');
const PREFIXES = ['ai','yanzu','ask','gpt','bard','kyle'];


module.exports = {
  config: {
    name: "kyleai",
    version: 1.0,
    author: "Kyle",//api from miko 
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
	  onStart: async function () {
    // Initialization logic if needed
  },
  onChat: async function ({ api, event, args, message }) {
    try {
      const prefix = PREFIXES.find((p) => event.body && event.body.toLowerCase().startsWith(p));

      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }

      const prompt = event.body.substring(prefix.length).trim();
			
	onStart: async function ({ api, event, args }) {
		const content = encodeURIComponent(args.join(" "));

		if (!content) {
			return api.sendMessage(" Please  Provide your question first🤔", event.threadID, event.messageID);
		}

		api.sendMessage("🔍 Searching Please wait a seconds...", event.threadID, event.messageID);

		const apiUrl = `https://bluerepoapislasttry.onrender.com/hercai?content=${content}`;

		try {
			const response = await axios.get(apiUrl);
			const reply = response.data.reply;

			api.sendMessage(reply, event.threadID, event.messageID);
		} catch (error) {
			console.error("Error fetching data:", error.message);
			console.error("Error details:", error.response ? error.response.data : error.message);
			api.sendMessage("An error occurred while processing your request. Check the server logs for more details.", event.threadID);
		}
	},
};
