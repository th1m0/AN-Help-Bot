const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let botchannel = message.guild.channels.find(`name`, "bot-commands")
    if(message.channel.name === 'bot-commands') {    
    var request = require("request");
    var mcIP = "play.arkhamnetwork.org";
    var mcPort = "25565";
        
    var url = "http://mcapi.us/server/status?ip=" + mcIP + '&port=' +mcPort;
    request(url, function(err, responds, body) {
        if(err) {
            console.log(err);
                
            return message.reply('Error getting minecraft server status...');
        }
        body = JSON.parse(body);
            const mcoffstatus = new Discord.RichEmbed()
            .addField('Server Status', mcIP, true)
            .addField('Status', 'Server is offline!', true)
            .addField('Players', body.players.now)
            .setColor('#ff0205')
            .setFooter('Developed by Thiimo#6969')
        var status = mcoffstatus;
        if(body.players.now) {
            const mconstatus = new Discord.RichEmbed()
            .addField('Server Status', mcIP, true)
            .addField('Status', 'Server is online!', true)
            .addField('Players', body.players.now)
            .setColor('#03fb07')
            .setFooter('Developed by Thiimo#6969')
                status = (mconstatus)
            } 
        
        message.channel.send(status);
    });
    }
    else {
        return message.channel.send(`Sorry, you can only use that command in ${botchannel}!`)
    }
}




module.exports.help = {
    name: "status"
}