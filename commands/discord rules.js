const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    

    if(message.auther.id === "297751265356546048") {
    let embed = new Discord.RichEmbed()
    .setTitle("𝓓𝓲𝓼𝓬𝓸𝓻𝓭 𝓡𝓾𝓵𝓮𝓼​")
    .setDescription(`The following are the official discord rules for Arkham Network, with each respective punishment listed below in red, increasing in severity with every same offence committed (once the last punishment is reached, it is repeated).
    
    **Hacking, DDoSing, Posting someones picture without permission or DOXing another user is not allowed.**
    Threatening to do so is not allowed either.
    *1st Offence: Perm Ban*`)
        message.channel.send(embed)
    }else


    let embed2 = new Discord.RichEmbed()
    .setTitle("𝓓𝓲𝓼𝓬𝓸𝓻𝓭 𝓡𝓾𝓵𝓮𝓼")
    .setDescription("The following are the official discord rules for Arkham Network, with each respective punishment listed below in red, increasing in severity with every same offence committed (once the last punishment is reached, it is repeated")
    .addField("Hacking, DDoSing, Posting someones picture without permission or DOXing another user is not allowed.", "Threatening to do so is not allowed either.\n*1st Offence: Perm Ban*")
    message.channel.send(embed2)



}


module.exports.help = {
    name: "test"
}