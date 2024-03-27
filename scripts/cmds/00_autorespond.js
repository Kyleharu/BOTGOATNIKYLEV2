module.exports = {
config: {
name: "autorespondv3",
version: "6.0",
author: "Kyle",
cooldown: 5,
role: 0,
shortDescription: "Autoresponds with reactions and replies",
longDescription: "Autoresponds with reactions and replies based on specific words or triggers.",
category: "fun",
guide: "?autorespondv3",
},
onStart: async ({ api, event }) => {
// Blank onStart function as per the request
},
onChat: async ({ api, event }) => {
const { body, messageID, threadID } = event;

// Reactions based on words
const emojis = {
"👋": ["hi"," hello","heyow","wassup","kamusta?","yoo"],     
"😆": ["baliw","bolok","bobo","puke"," raul","tanga","suntukan","wati","buang", "bawal","jabol","jakol","attachment"," 😆","🤣","🥲","😠","🤪","pwetan","hoy"],        
"🖕🏻": ["😡","bwkangshitt","nigga","loser","ulol"," tanga","olol","gago","puta","pota","putangina","putang ina","ywa","yawa","🖕","animal","bayot","bakla","bekki","bayut"], 
"😢": ["😢","🥲","😞","☹️","lungkot"," kaiyak","naiiyak","umiiyak","lonely","sad","sakit","agoi","agoy","broken","masakit"],           
  "🎉": ["congratulations","congrats"," welcome","happy birthday"],  
"💜": ["Kylepogi", "purple", "Fritz", "Sab", "Haru", "Xuazane", "Kim","Kyle","kyle"],
"❌": ["no","wrong","error","syntax"," ❌"],
"✔️": ["ok","Bein","pastebin","attachment🔗"],
"😡": ["galit","pota","puta","puta","putangina","potangina","yawa","olol","lol","ulol","nigga","loser","fuck","fuck you","kingina","kinginamo","bobo","bolok"],  
"✅": ["yes","correct","right","✅"," okay","attachment","successful"],
"👋": ["hi ", "hello ", "kumusta"],
"🔥": ["apoy", "lakas", "astig", "damn", "angas", "galing", "husay"],
};

// Replies to specific words
const replies = {
"angas": "uwu ako lang to lods😎", 
"bye": " bye nigga see you again:>",  
"bot": "Yess what's you're problem?,I'm robot ask me anything!!", 
"@kyle": "ano nanaman yung Kaylangan mo sa admin ko?🙂",
"kyle": "kaylangan mo sa pogi kung admin?", 
"hi po": "Hello Can U attracted my admin na pogi👉https://www.facebook.com/Itzkyleigopjk",
"lc": "╭──────༺♡༻──────╮\n𝐑𝐈𝐏\n\nlast chat we cry silently because we can't explain the pain inside us.\n╰──────༺♡༻──────╯",
"*": "Sige, correct mo typo mo, tanga ka kasi🤦🏻‍♂️",
"geh": "geh bahala karin dyan inamoka",
"lakas": "lakas ng baho ng hininga mo lods", 
"tagal": "mag hintay ka  wag aporado😒", 
"yanzu": "My Lord I'm still here, ask me anything😊", 
"pafork": "ano? kung ayaw ko?",
"robot": "ano nanaman nag rerecharge panga e😒",
"fakyou": "fakyou karin gago bulok tete mo mapanghe pweee tapon kita sa Mars.", 
"bayot": "pwetan kita😋💦",
"🖕": "isa pang pakyou tamo isasako kitang tanginaka😠👊",
"wag": "wag mo kalimutan na bobo ka.",
"⚠︎":  "━━━━━━━━━━━━\nHi I'm 𝙔𝘼𝙉𝙕𝙐 🤖\n\n⛔𝗨𝗡𝗗𝗘𝗥 𝗣𝗥𝗢𝗧𝗘𝗖𝗧𝗜𝗢𝗡 𝗕𝗬 𝗞𝗬𝗟𝗘⛔\n━━━━━━━━━━━━━", 
  "owner": "━━━━━━━━━━━━━\n\n『 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 』\n\n👤owner: Kyle\n🗓age: 19\n🌏country: Philippines🇵🇭\n🗒status: N/A\n\n🌐facebook: https://www.facebook.com/100052395031835\n━━━━━━━━━━━━━━", 



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
