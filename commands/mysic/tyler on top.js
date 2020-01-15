module.exports = {
    name: "tylerontop",
    aliases: ["tot", "TOT"],
    description: "DESCRIPTION HERE!",
    run: async (bot, message, args) => {
        const Discord = require("discord.js");
        
        message.delete()
        if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.cahnnel.send("You aren't cool enough!")
        await message.channel.send("Tyler")
        await message.channel.send("On")
        await message.channel.send("Top")
    }
}
