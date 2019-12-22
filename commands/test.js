const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let botchannel = message.guild.channels.find(`name`, "bot-commands")
    if(message.channel.name === 'bot-commands') {
        message.channel.send("test worked! ✅");
    
    
    }
    else {
        return message.channel.send(`Sorry, you can only use that command in ${botchannel}!`)
    }
    }





module.exports.help = {
    name: "test"
}