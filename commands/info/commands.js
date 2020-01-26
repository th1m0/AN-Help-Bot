module.exports = {
    name: "commands",
    aliases: ["cmds"],
    description: "Returns all commands, or one specific command info",
    category: "info",
    run: async (bot, message, args) => {
      const Discord = require("discord.js");
      
      
        let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("**Commands:**\nhelp\n8ball\nmeme\nmcstatus\n\n**Prison commands:**\nbackpacks\ncalculate")

        message.author.send(embed);
        message.channel.send("Send you a message in DM").then(m => m.delete(5000))
        .catch(err => console.log(err));
      

    
  
      
    }
  }