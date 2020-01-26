module.exports = {
    name: "backpacks",
    aliases: ["bp", "backpack", "bps"],
    description: "DESCRIPTION HERE!",
    run: async (bot, message, args) => {
        const discord = require("discord.js")
        let embed = new discord.RichEmbed()
        .setTitle("Different kinds of backpacks:")
        .setAuthor(message.author.tag)
        .setColor("RANDOM")
        .addField("Backpacks:", "Small backpack\nMedium Backpack\nLarge Backpack\nHuge Backpack\nGodly Backpack\nSwag Backpack\nEpic Backpack\nYolo Backpack", true)
        .addField("Prices:", "`☪ 12 E-tokens!`\n`☪ 35 E-tokens`\n`☪ 100 E-Tokens`\n`☪ 200 E-Tokens`\n`☪ 350 E-Tokens`\n`☪ 500 E-Tokens`\n`☪ 1000 E-Tokens`\n`☪ 2000 E-Tokens`", true)
        
        
    let botchannel = message.guild.channels.find(`name`, "bot-commands")
        if(message.channel.name === 'bot-commands') {
        message.channel.send(embed)
        }else{
        return message.channel.send(`Sorry, you can only use that command in ${botchannel}!`)
        }
    }
}