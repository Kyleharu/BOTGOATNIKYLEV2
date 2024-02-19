module.exports = {
  config: {
    name: "autorespondv7",
    version: "2.0.0",
    author: "Lorenzo",
    cooldowns: 5,
    role: 0,
    shortDescription: "Autoresponds with reactions and replies",
    longDescription: "Autoresponds with reactions and replies based on specific words or triggers.",
    category: "fun",
    guide: "-autorespondv7",
  },
  onStart: async ({ api, event }) => {
    // Blank onStart function as per the request
  },
  onChat: async ({ api, event }) => {
    const { body, messageID, threadID } = event;

    // Reactions based on words
    const emojis = {
"🕒": ["ai","Ai","ask","bard"], 
"🫡": ["yanzu","Yanzu"],    
"💜": ["xyl", "zunair", "purple", "violet", "lila", "oi", "owemjii", "hmm", "Kyle","kyle"],     
"💚": ["dia", "seyj", "ginanun", "gaganunin", "pfft", "Kyle", "gumanun"], 
"😏": ["Jo", "Ariii", "talong", "galit","umai","omai"], 
"😕": ["wtf", "fck", "haaays", "naku", "ngi ", "ngek", "nge ", "luh", "lah"], 
"🤣": ["pill", "laugh", "lt ", "gagi"," HAHAHAHA","hahahaha"],
"⏱️": ["prodia", "sdxl", "bardv3", "tanongv2", "-imagine", "genimg", "Tanongv4", "kamla", "-shortcut"],  
"🤖": ["bot","Bot"],   
"🗣️": ["fak","picture","video"," attachment🔗"],    
    };

// Replies to specific words    
const replies = {   
"prefix?": "tanong mo sa pagong",  
"ito ba prefix ×?": "yan nga prefix ko tanga kaba?",    
"kyle": "busy pa si boss Kyle, nakikipag bebetime pa sa mga chix nya wag mo isturbohin gago",
"collab": "Sige collab kayo, magbabasa ako",            
"×rank": "nagrarank ka na naman naka off eh",        
"pafork": "ano kung ayaw ko??",  
"hello": "Hi I'm 𝗬𝗮𝗻𝘇𝘂 🤖 I'm here to assist you how can I help you today/night?",      
"hahahaha": "Bhwahahhahha what if e pm mo owner ko na si 𝗞𝘆𝗹𝗲. para mas sasaya ka lalo sakanya..\n\n🌐𝗙𝗯➥https://www.facebook.com/Itzkyleigopjk",


};

    // React based on words
    for (const [emoji, words] of Object.entries(emojis)) {
      for (const word of words) {
        if (body.toLowerCase().includes(word)) {
          api.setMessageReaction(emoji, messageID, () => {}, true);
        }
      }
    }

    // Reply based on triggers
    for (const [trigger, reply] of Object.entries(replies)) {
      if (body.toLowerCase().includes(trigger)) {
        api.sendMessage(reply, threadID, messageID);
      }
    }
  },
};