module.exports = {
    name: "rules",
    aliases: [],
    description: "sends the rules in #discord-rules and deletes the old rules.",
    run: async (bot, message, args) => {
        const Discord = require("discord.js");
        if(!message.member.permissions.has("ADMINISTRATOR")) {
            return message.channel.send("What did you aspect? That we give you permissions to this command?")
        }
    
    
        let embed = new Discord.RichEmbed()
        .setTitle("𝓓𝓲𝓼𝓬𝓸𝓻𝓭 𝓡𝓾𝓵𝓮𝓼​")
        .setDescription(`The following are the official discord rules for Arkham Network, with each respective punishment listed below in red, increasing in severity with every same offence committed (once the last punishment is reached, it is repeated).
        
        __**Advertising is not allowed.**__
        Any form of advertising is not allowed. This includes but is not limited to; non-Serayne owned servers' IPs, discords (Faction discords are ONLY allowed to be sent in #faction-recruitment), scam links, phishing sites and malware sites.
        1st Offence: Perm Ban
        
    __**Hacking, DDoSing, Posting someones picture without permission or DOXing another user is not allowed.**__
    *Threatening to do so is not allowed either.*
    1st Offence: Perm Ban
    
    
    __**Supporting child porn or making inappropriate jokes about the topic, in any way, is not allowed.**__
    1st Offence: 7d Ban (No Appealing)
    2nd Offence: Perm Ban (Appeal → 14d)
    
    
    __**Playing inappropriate songs via the Rythm Music bots is not allowed.**__
    1st Offence: 1d Mute
    
    
    __**Abusing the voice-com is not allowed.**__
    *Rapidly joining and leaving a channel for the sole purpose of setting off the voice-com falls under this rule.*
    1st Offence: 1h Ban
    2nd Offence: 2d Ban
    
    
    __**Any form of manipulation is not allowed.**__
    *Finding loopholes in the rules, impersonating others with malicious intent or excessively, trolling staff, reporting others with spoofed evidence, or attempting to get players in trouble falls under this rule.*
    1st Offence: 3d Mute (Appeal → 1d)
    2nd Offence: 7d Ban (Appeal → 3d)
    3rd Offence: Perm Ban (Appeal → 14d)
    
    
    __**Having an inappropriate discord username or avatar is not allowed.**__
    *Any offensive, disrespectful, flooding chat or racist discord username/ avatar falls under this rule. No appeals will be accepted until your discord name/ avatar is changed.*
    1st Offence: Warn
    2nd Offence: Kick
    3rd Offence: Perm Ban (Appeal When Changed)​`)
        .setColor("#00F2FF")
    
    let embed2 = new Discord.RichEmbed()
    .setDescription(`__**Posting inappropriate links is not allowed.**__
    *This includes links that lead to frightening, offensive or pornographic content.*
    1st Offence: 3d Mute (Appeal → 1d)
    2nd Offence: 7d Mute (Appeal → 3d)
    3rd Offence: 14d Mute (Appeal → 7d)
    
    
    __**Racism, harassment, bullying, disrespect and excessive swearing is not allowed.**__
    *This includes death threats and the harming of oneself or others.*
    1st Offence: Warn + MSG(s) Deleted
    2nd Offence: 30m Mute
    3rd Offence: 1h Mute
    4th Offence: 1d Mute
    
    
    __**Spamming is not allowed.**__
    *Sending the same or similar message, bot command or repeatedly tagging the same user (incl. staff) in a short period of time falls under this rule.*
    1st Offence: Warn
    2nd Offence: 15m Mute
    3rd Offence: 30m Mute
    4th Offence: 1h Mute
    
    
    __**Abusing Tickets**__
    *Misusing the ticket bot to waste staff member’s time (only make tickets if you have a serious issue that staff can assist you with).*
    1st Offence: Kick
    2nd Offence: 1d Ban
    3rd Offence: Blacklist From Making Tickets
    
    
    __**Troll Suggestions**__
    *Misusing the suggestions bot to waste staff member's time (only create suggestions for actual features you want to be implemented).*
    1st Offence: Kick
    2nd Offence: 1d Ban
    3rd Offence: Blacklist From Making Suggestions
    
    
    __**Inappropriate Streams**__
    *Using the discord streaming feature to stream inappropriate content.*
    1st Offence: Kick
    2nd Offence: Blacklist From Streaming`)
    .setColor("#00F2FF")
        // .addBlankField()
        // .addField("__**Advertising is not allowed.**__", "Any form of advertising is not allowed. This includes but is not limited to; non-Serayne owned servers' IPs, discords (Faction discords are ONLY allowed to be sent in #faction-recruitment), scam links, phishing sites and malware sites.\n1st Offence: Perm Ban")
        
    
    
        let rulesChannel = message.guild.channels.get("664879954718359602");
    
        await rulesChannel.bulkDelete(3)
        await rulesChannel.send({files: ["https://arkhamnetwork.org/assets/img/portal/logo_new.png"]})
        await rulesChannel.send(embed)
        await rulesChannel.send(embed2)
    }
}