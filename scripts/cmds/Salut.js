module.exports = {
    config: {
        name: "salut",
        version: "1.0",
        author: "kivv",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("𝑫𝑰𝑻 𝑨𝑽𝑬𝑪 𝑼𝑵𝑬 𝑽𝑶𝑰𝑿 𝑫𝑬 𝑭𝑨𝑰𝑩𝑳𝑬 🙃");
}
};
