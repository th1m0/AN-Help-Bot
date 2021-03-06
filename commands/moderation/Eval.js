module.exports = {
    name: "eval",
    aliases: ["e", "admin"],
    description: "DESCRIPTION HERE!",
    run: async (bot, message, args) => {
        const Discord = require("discord.js");
        const beautify = require("beautify");
        
        
        if (message.author.id !== "297751265356546048"){
            return message.channel.send("What did you expect? That we give you permissions to this command?")
        }


        if(!args[0]) {
            message.channel.send("You need to evaluate __**SOMETHING**__, please?")
                .then(m => m.delete(5000));
        }
    
        try {
            if(args.join(" ").toLowerCase().includes("token")) {
                return;
            }else if(args.join(" ").toLowerCase().includes("exit")) {
                return;
            }
    
            const toEval = args.join(" ");
            const evaluated = eval(toEval);
    
            let embed = new Discord.RichEmbed()
            .setColor("GREEN")
            .setFooter(bot.user.username, bot.user.displayAvatarURL)
            .setTitle("Eval")
            .addField("To evaluate:", `\`\`\`js\n${beautify(args.join(" "), { format: "js"})}\n\`\`\``)
            .addField("Evaluated:", evaluated)
            .addField("Type of:", typeof(evaluated));
    
            message.channel.send(embed);
    
        } catch (e) {
            let embed = new Discord.RichEmbed()
            .setColor("RED")
            .setTitle("\:x: Error!")
            .setDescription(e)
            .setFooter(bot.user.username, bot.user.displayAvatarURL)
    
            message.channel.send(embed)
        }
        
        
        
        //message.channel.send("You have permissions to use this command!")
    }
}
