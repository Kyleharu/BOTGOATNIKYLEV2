module.exports = {
	config: {
			name: "haha",
			version: "1.0",
			author: "Jaychris Garcia",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "hahaha") return message.reply("sanaol happy what if chat mo owner ko 👇https://www.facebook.com/profile.php?id=100052395031835 masaya ka lalo sa kanya hahahhahahahhahahaha");
}
};