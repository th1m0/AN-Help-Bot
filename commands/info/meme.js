module.exports = {
    name: "meme",
    aliases: ["dank", "dankmeme"],
    description: "DESCRIPTION HERE!",
    run: async (bot, message, args) => {
        const Discord = require("discord.js");
        const randomPuppy = require("random-puppy"); 
        const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setImage(img)
    .setFooter('Arkhamnetwork | Thiimo#6969')
    .setTitle(`From ${random}`)
    .setURL(`https://reddit.com/r/${random}`);
    
    
    if(message.channel.name === 'bot-commands'){
    message.channel.send(embed)
    }else if(message.channel.name === 'memes'){
        message.channel.send(embed)
    }else{
        message.channel.send(`This command can only be used in ${botchannel} or ${memeChannel}`).then(m => m.delete(3000))   
    }   



}
}

