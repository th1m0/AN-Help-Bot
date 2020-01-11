const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    message.delete()
    if(!message.auther.hasPermissions("MANAGE_MESSAGES")) return message.cahnnel.send("You aren't cool enough!")
    await message.channel.send("Tyler")
    await message.channel.send("On")
    await message.channel.send("Top")

}



module.exports.help = {
    name: "TOT"
}