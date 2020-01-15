module.exports = {
    name: "test",
    aliases: [],
    description: "DESCRIPTION HERE!",
    run: async (bot, message, args) => {
        const Discord = require("discord.js");
       
        let botchannel = message.guild.channels.find(`name`, "bot-commands")
        if(message.channel.name === 'bot-commands') {
            message.channel.send("test worked! ✅");
        
        
        }
        else {
            return message.channel.send(`Sorry, you can only use that command in ${botchannel}!`)
        }
            
    }
}


