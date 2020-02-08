module.exports = {
    name: "8ball",
    aliases: ["8b"],
    description: "sends a message in #bot-commands or #memes.",
    run: async (bot, message, args) => {
        const Discord = require("discord.js");
        
        let botchannel = message.guild.channels.find(`name`, "bot-commands")
        let memeChannel = message.guild.channels.find(`name`, "memes")
        if(message.channel.name === 'bot-commands'){
        
        if(!args[1]) return message.reply("Please ask a full question!");
let replies = ["Yes.", "No.", "I don't know.", "Ask again later", "It is certain", "It is decidedly so", "Without a doubt", "definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Signs point to yes", "Reply hazy, try again", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];                                            

let result = Math.floor((Math.random() * replies.length));
let question = args.slice(0).join(" ");

let ballembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("#FF9900")
.addField("Question", question)
.addField("Answer", replies[result])
.setThumbnail("https://www.cafecremers.nl/wp-content/uploads/2019/03/8ball.jpg")
.setFooter("Arkhamnetwork | Thiimo#6969");

message.channel.send(ballembed)
        }else if(message.channel.name === 'memes'){
            if(!args[1]) return message.reply("Please ask a full question!");
            let replies = ["Yes.", "No.", "I don't know.", "Ask again later", "It is certain", "It is decidedly so", "Without a doubt", "definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Signs point to yes", "Reply hazy, try again", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];                                            
            
            let result = Math.floor((Math.random() * replies.length));
            let question = args.slice(0).join(" ");
            
            let ballembed = new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setColor("#FF9900")
            .addField("Question", question)
            .addField("Answer", replies[result])
            .setThumbnail("https://www.cafecremers.nl/wp-content/uploads/2019/03/8ball.jpg")
            .setFooter("Arkhamnetwork | Thiimo#6969");
            
            message.channel.send(ballembed)
        }
        
        
        
        else{
            message.channel.send(`This command can only be used in ${botchannel} or ${memeChannel}`).then(m => m.delete(3000))
        }
   
    }
}