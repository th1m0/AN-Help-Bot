module.exports = {
    name: "ping",
    aliases: ["p", "apistatus"],
    description: "Returns latency and API ping",
    run: async (bot, message, args) => {
        const discord = require("discord.js");
        const math = require("mathjs");

        let embed = new discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .addField("Bots:", "Dyno\nTicket Tool\nCarl Bot\nRythm\nRythm 2\nZira", true)
        .addField("Prefixes:", "?\n-\n$\n>\n>>\n/", true) 
       if(message.author.id === "297751265356546048"){
        message.author.send(embed)
       }else{
           return
       }
    }
}