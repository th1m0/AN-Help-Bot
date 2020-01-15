const Discord = require('discord.js');
const  { prefix } = require('./config.json');
const fs = require("fs");
const { config } = require("dotenv")


const bot = new Discord.Client({
    disableEveryone: true
})
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

let cooldown = new Set();
let cdseconds = 30;

bot.login(process.env.token);

bot.on('ready', async () => {
    console.log(`${bot.user.username} is online!`);

    bot.user.setActivity('', {type: "PLAYING"});

    let activNum = 0;

    setInterval(function() {
        if (activNum === 0) {
            bot.user.setActivity("Developed by Thiimo#6969");
            activNum = 1;
        } else if (activNum === 1) {
            bot.user.setActivity("<help");
            activNum = 2;
        } else if (activNum === 2) {
            bot.user.setActivity("arkhamnetwork.org")
            activNum = 0;
        }
    }, 15 * 1000);


    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    } catch(e) {
        console.log(e.stack);
    }



});

var Tlink = 'https://proxy.spigotmc.org/cfb5901de43c181fa5df991be11a9271b8d656de?url=http%3A%2F%2Fi.imgur.com%2FibZumoJ.png%3F1';

const helpEmbed = new Discord.RichEmbed()
.setColor('#00F2FF')
.setTitle('What section of the Network do you require assistance with?')
.setDescription(`*Reply with __one__ of the following:* **Forums**, **In-Game**, **Discord** or **Forms** *(Need help with a transaction, reporting a rule breaker, appeal a punishment or reporting a bug?).*`)
.setFooter(`Created by Thiimo#6969`)
.setThumbnail(Tlink)
.setTimestamp()

const forumsEmbed = new Discord.RichEmbed() 
.setColor('#00F2FF')
.setDescription(`**What aspect of the forums do you need assistance with?**\nThe three most common queries are listed below. If your query is not stated below, contact one of our staff members (a list can be loacted by running !stafflist).\n\n     **1)** Syncing my In-Game account to my Forums account.\n     **2)** Changing my DOB &/ name on the Forums.\n     **3)** Reporting a user who broke the forum rules.\n\n*Reply with either "1", "2" or "3".*`)
.setAuthor('Forums')
.setFooter(`Created by Thiimo#6969`)
.setThumbnail(Tlink)
.setTimestamp()

const ingameEmbed = new Discord.RichEmbed()
.setColor('#00F2FF')
.setDescription(`**What aspect of the server do you need assistance with?**\nThe three most common queries are listed below. If your query is not stated below, select 4, if it is still not answered, contact one of our staff members (a list can be loacted by running !stafflist).\n\n     **1)** I'm unable to connect to the server!\n     **2)** I've lost [In-game item], how can I get it back?\n     **3)** What are Vote Credits? **(Disabled ATM)**\n     **4)** Other. \n\n*Reply with either "1", "2", "3" or "4"*`)
.setAuthor('In-Game')
.setFooter(`Created by Thiimo#6969`)
.setThumbnail(Tlink)
.setTimestamp()

const discordEmbed = new Discord.RichEmbed()
.setColor('#00F2FF')
.setDescription(`**What aspect of the Discord do you need assistance with?**\nThe two most common queries are listed below. If your query is not stated below contact one of our staff members (alist can be located by running !stafflist).\n\n**1)** How do I get my rank on discord?\n**2)** How do I create a ticket?`)
.setAuthor('Discord')
.setFooter(`Created by Thiimo#6969`)
.setThumbnail(Tlink)
.setTimestamp()

const formsEmbed = new Discord.RichEmbed()
.setColor('#00F2FF')
.setDescription(`**What aspect of the forms (on the Forums) do you need assistance with?**\nThe three most common queries are listed below. If your query is not stated below, select 4, if it is still not answered, contact one of our staff members (a list can be loacted by running !stafflist).\n\n     **1)** How to I report a rule breaker?\n     **2)** How do I appeal a punishment?\n     **3)** I haven't receieved/ lost a purchased good, help!\n     **4)** Other. \n\n*Reply with either "1", "2", "3" or "4"*`)
.setAuthor('Forms')
.setFooter(`Created by Thiimo#6969`)
.setThumbnail(Tlink)
.setTimestamp()

const forums1Embed = new Discord.RichEmbed()
.setColor('#00F2FF')
.setTitle('__To link your In-Game and Forum accounts, do the following:__')
.setDescription(`    1) Ensure you are logged into your forum account on your main browser.\n    2) Log into Arkham in-game.\n    3) Run the command "/syncaccount".\n    4) You'll be presented with a one-time use link. Click it to open it in your main browser.\n    5) You should receive a message saying you are successfully linked, sporting your IGN and skin across the page.\n\nAfter a successful sync, you'll start to see the default minotar skull showing up. The forum's sync cron entry runs every 15 minutes, so it should only take 15 minutes at most for your actual skull & all the other details to automatically show up.`)
.setAuthor('Forums (1)')
.setFooter(`Created by Thiimo#6969`)
.setThumbnail(Tlink)
.setTimestamp()

const forums2Embed = new Discord.RichEmbed()
.setColor('#00F2FF')
.setTitle('__To change your date of birth and/or name on the forums, read the following:__') //add title when changed
.setDescription(`To get these settings altered on your forums account, you will be required to get an Administrator with the permissions to change it. However, a quick and easy way of doing this is by creating a ticket in the <#641936808669609985> channel. You can do this easily by typing the command **-new**. This will create a private channel for you and you can put your DOB/name change in there and staff will assist you with the issue.`)
.setAuthor('Forums (2)')
.setFooter(`Created by Thiimo#6969`)
.setThumbnail(Tlink)
.setTimestamp()

const forums3Embed = new Discord.RichEmbed()
.setColor('#00F2FF')
.setTitle('__If a user has broken one of the forum rules, do the following:__')
.setDescription(`To report a user for breaking a forum rule(s), contact a Moderator+ via a forum conversation, or @tag them on the thread. From here, the staff member will deal with the user, issuing a warning point(s) and merge / delete the post.`)
.setAuthor('Forums (3)')
.setFooter(`Created by Thiimo#6969`)
.setThumbnail(Tlink)
.setTimestamp()

const ingame1Embed = new Discord.RichEmbed()
.setColor('#00F2FF')
.setTitle('__If you are unable to connect to the server, try the following:__')
.setDescription(`If you are unable to join as you are receiving either of the following error messages:\n\n    ❖ Can't resolve host name or Cannot connect to server - Try connecting to the server using a different IP such as arkhamnetwork.org, eu.arkhamnetwork.org or playmc.mx \n\n    ❖ Java. Socketexception: Network unreachable - As a result of Coelho's bypass, this error isn't as common. However, if you do encounter it, try connecting via a different IP address / MC version.`)
.setAuthor('In-Game (1)')
.setFooter(`Created by Thiimo#6969`)
.setThumbnail(Tlink)
.setTimestamp()

const ingame2Embed = new Discord.RichEmbed()
.setColor('#00F2FF')
.setTitle('__If you have lost an item, read the following:__')
.setDescription(`In-game items are sadly non-refundable. However, if you lose an item such as an Omnitool on Prison, and you have proof of it, then there is a possibility of receiving it back if the Administrators see it as sufficient proof.\n\n__**An item vanished from my inventory / I got scammed!**__\nUnfortunately, in-game items are *non-refundable*. If you purchased an item and it got scammed, there is also sadly nothing that can be done - this is not IRL scamming (Which would result in the offending user being banned). IRL scamming is purchasing an item from someone and they don't give their part of the deal in-game.\n__\n**Support Tickets**__\nIf you have proof of the item you’ve lost, you can make a ticket by typing **-new** in <#641936808669609985>. A ticket will be created for you where you can describe what you have lost and staff will assist you as soon as possible.`)
.setAuthor('In-Game (2)')
.setFooter(`Created by Thiimo#6969`)
.setThumbnail(Tlink)
.setTimestamp()

const ingame3Embed = new Discord.RichEmbed()
.setColor('#00F2FF')
.setTitle('__Wondering what vote credits are? Read the following:__')
.setDescription(`Vote Credits are __one__ of the rewards obtained from voting. When claiming votes, you will be credited both a Vote Key(s) and Vote Credits. You will be able to use these credits via /creditshop on revamped gamemodes, where you are able to purchase global items, such as ranks, as well as gamemode-specific items, such as a Private mine on Prison.\n\n__**This fueture is curently disabled.**__`)
.setAuthor('In-Game (3)')
.setFooter(`Created by Thiimo#6969`)
.setThumbnail(Tlink)
.setTimestamp()

const ingame4Embed = new Discord.RichEmbed()
.setColor('#00F2FF')
.setTitle('')//No title here.
.setDescription(`Here is a list of other commonly asked questions related to in-game information, features and usage. If your question isn't answered below, contact one of our staff members (a list can be loacted by running !stafflist).\n\n__**How do I equip, change and font my title?**__\nTo equip a title you have won or purchased, do /title. This will bring up the title GUI where you will be able to select a title to equip. If you currently have a title equipped, selecting another title will remove it and apply the newly selected title. To change the font of your title, do /titlecolor. From here, you will be able to change the font of it.\n\n__**How do I equip a different rank title?**__\nYou can equip a different rank title by using the command /ranktitle. From here, you can choose a rank title out of all of the ones accessible to you which are those of the rank you have as well as the ranks under you.`)
.setAuthor('In-Game (4)')
.setFooter(`Created by Thiimo#6969`)
.setThumbnail(Tlink)
.setTimestamp()

const discord1Embed = new Discord.RichEmbed()
.setColor('#00F2FF')
.setTitle('__How do I receive my donator rank on Discord?__')
.setDescription(`If your forum and MC account are already synced, skip step one.\n\n    1) Syncing your forum account - The first step in obtaining your donator rank on discord is to sync your in-game account to your forum account. To do this, simply run /syncaccount while in-game and click on the message prompt in chat. You will be able to verify that your in-game account has synced to your forum account by going onto your profile page. On there, you should notice your donator rank tag/ title and a unique donator rank banner for your rank.\n\n    2) Discord Integration - The next rank to obtaining your donator rank is to associate your forum account to your discord account. To do this, go to the 'External Accounts' setting on your forums account (http://arkhamnetwork.org/community/account/external-accounts). Click on the 'Associate with Discord' button then sign into your discord account. Once you have done this, you will be asked to allow ArkhamNetwork to be able to access certain information about you, such as your email address and what discord servers your're in. If you are ready to allow it to do so, click the 'Authorize' button.`)
.setAuthor('Discord (1)')
.setFooter(`Created by Thiimo#6969`)
.setThumbnail(Tlink)
.setTimestamp()

const discord2Embed = new Discord.RichEmbed()
.setColor('#00F2FF')
.setTitle('__How do I create a support or bug report ticket?__')
.setDescription(`There are two different types of tickets that you can create. You can make a support ticket or a bug report ticket.\n\nYou can make the support ticket in the <#641936808669609985> channel by typing **-new** this will create a ticket under the category "🎫 TICKETS 🎫" down at the very bottom of the list of channels on the left.\n\nYou can create a bug report tickets in the <#411747599843065866> channel by also typing **-new** in the chat. This will create a bug report ticket under the category called "BUG REPORTS" where you can describe the bug in detail and a staff member will assist you.`)
.setAuthor('Discord (2)')
.setFooter(`Created by Thiimo#6969`)
.setThumbnail(Tlink)
.setTimestamp()

const forms1Embed = new Discord.RichEmbed()
.setColor('#00F2FF')
.setTitle('__Looking to report a user for breaking the rules?__')
.setDescription(`You are able to submit a Player Report [here](http://arkhamnetwork.org/community/forums/player-reports.6/.) However, before you submit a report, ensure you read the submission guidelines [here](http://arkhamnetwork.org/community/threads/how-to-properly-report-rule-breakers.83042/).\n\nIf you wish to __report a staff member__, as you believe they have abused their powers or is doing their job incorrectly, get proof (such as a screenshot or video), then report it to a Admin+ via forums conversation or Discord DM. You are able to get a list of all the Admins+ via running !stafflist. Then, enter the name of Admin+ beside 'Participants:'. All Admins+ are listed on the Official Staff List Logs, linked above.`)
.setAuthor('Forms (1)')
.setFooter(`Created by Thiimo#6969`)
.setThumbnail(Tlink)
.setTimestamp()

const forms2Embed = new Discord.RichEmbed()
.setColor('#00F2FF')
.setTitle('__Want to appeal a punishment?__')
.setDescription(`You are able to appeal both in-game and discord punishments via the same form! You are able to do this [here](http://arkhamnetwork.org/community/forms/punishment-appeal-form.1/respond), where a member of the Ban Team will sort it. If you are looking to appeal a chargeback ban, also do so at the link provided above, and a Ban Team member will move it to the chargeback ban appeals section to be sorted by MrSneakyGuy.`)
.setAuthor('Forms (2)')
.setFooter(`Created by Thiimo#6969`)
.setThumbnail(Tlink)
.setTimestamp()

const forms3Embed = new Discord.RichEmbed()
.setColor('#00F2FF')
.setTitle(`__Haven't received a purchase, or lost a purchased rank?__`) // needs to be ``
.setDescription(`If you have not received your purchase after relogging several times and waiting at least 10 minutes or if you no longer have the purchase from a past transaction, then you can submit a purchase help [here](http://arkhamnetwork.org/community/index.php?forms/purchase-help.3/respond). Note, if you believe you have lost your donator rank, check /titlerank to check if still have the rank title. If you don't, then do so as stated. A quicker way of getting help with your purchase is by creating a ticket you can do this in the <#641936808669609985> channel with the command **-new**. This will create a ticket channel where staff will help you with the issue.`)
.setAuthor('Forms (3)')
.setFooter(`Created by Thiimo#6969`)
.setThumbnail(Tlink)
.setTimestamp()

const forms4Embed = new Discord.RichEmbed()
.setColor('#00F2FF')
.setTitle('')//No Title here.
.setDescription(`Here is a list of other commonly asked questions related to in-game information, features and usage. If your question isn't answered below, contact one of our staff members (a list can be loacted by running !stafflist).\n\n__**Found a bug? Report it!**__\nIf you have found a bug, make a bug report ticket in the <#411747599843065866> channel. You can make a bug report ticket by typing **-new** this will create a private channel where you can describe the bug that you found. Ensure you provide as much information as possible to better assist our developers in getting this bug fixed!\n\n__**Have an idea for a new feature for the Network?**__\nYou can submit your ideas via the suggestions form [here](http://arkhamnetwork.org/community/forms/suggestions-form.8/respond) or by making a suggestion in the discord. You can do that by typing /suggest <suggestion> in the <#411748402238455832> channel. Make sure you read the suggestions guide first [here](http://arkhamnetwork.org/community/threads/official-suggestions-guide.83072/).`)
.setAuthor('Forms (4)')
.setFooter(`Created by Thiimo#6969`)
.setThumbnail(Tlink)
.setTimestamp()

bot.on('message', message=>{
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    let messageArray = message.content.split(" ");    
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let botchannel = message.guild.channels.find(`name`, "bot-commands")
    
    if(!message.content.startsWith(prefix + 'help')) return;
    if(cooldown.has(message.author.id)) {
        return message.reply("This command has a 30 second cooldown!")
    }
    if(message.channel.name === 'bot-commands')
    cooldown.add(message.author.id);

    setTimeout(() => {
        cooldown.delete(message.author.id)
    }, cdseconds * 1000 
    );
   

    if (cmd === `${prefix}help`) {
        
       
        
        //${message.author.username}
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 60000 });
        
        
            if (message.channel.name === 'bot-commands') {
                    message.channel.send(helpEmbed), {time : 5000};
              
                    collector.on('collect', message => {
                      let input = message.content.toLowerCase();
        
                      if (input === "forums") {
                       message.channel.send(forumsEmbed);
        
                          collector.on('collect', message => {
                           let input2 = message.content.toLowerCase();
        
                            if (input2 === "1"){
                                message.channel.send(forums1Embed);
                                collector.stop();
                            }
                            if (input2 === "2"){
                                message.channel.send(forums2Embed); 
                                collector.stop();
                            }
                            if (input2 === "3"){
                                message.channel.send(forums3Embed);
                                collector.stop();
                            }
        
                         });
        
                       return;
                     }
                     else if (input === "in-game") {
                       message.channel.send(ingameEmbed)
        
                       collector.on('collect', message => {
                        let input2 = message.content.toLowerCase();
        
                        if (input2 === "1"){
                            message.channel.send(ingame1Embed) //fixed (12/9/19)
                            collector.stop();
                         }
                        if (input2 === "2"){
                            message.channel.send(ingame2Embed)
                            collector.stop();
                         }
                        if (input2 === "3"){
                            message.channel.send(ingame3Embed)
                            collector.stop();
                         }
                        if (input2 === "4") {
                            message.channel.send(ingame4Embed) 
                            collector.stop(); //possibility to add 
                         }
        
                      })
        
                    return;
                     }
                     else if (input === "discord") {
                       message.channel.send(discordEmbed)
                      
                       collector.on('collect', message => {
                         let input3 = message.content.toLowerCase();

                        if (input3 === "1"){
                            message.channel.send(discord1Embed) //message [1]
                            collector.stop();
                         }
                        if (input3 === "2") {
                            message.channel.send(discord2Embed) //message [2] 
                            collector.stop();
                        } // possibility to add more inputs


                       })
                       return;
                     }
                     else if (input === "forms") {
                       message.channel.send(formsEmbed)
        
                       collector.on('collect', message => {
                       let input4 = message.content.toLowerCase();
        
                        if (input4 === "1"){
                            message.channel.send(forms1Embed);
                            collector.stop();
                        }
                        if (input4 === "2"){
                            message.channel.send(forms2Embed)
                            collector.stop();
                        }
                        if (input4 === "3"){
                            message.channel.send(forms3Embed)
                            collector.stop();
                        }
                        if (input4 === "4") {
                            message.channel.send(forms4Embed)
                            collector.stop();
                        }
        
                       return;
                      })
                     }
                     // else {
                     //   return message.channel.send("Sorry, you didn't specify a valid section of the Network!");
                     // }
        
                   //}
                   });
                }
              else {
                return message.channel.send(`Sorry, you can only use that command in ${botchannel}!`);
                }
        
        }
        
        if (cmd === `${prefix}forumshelp`) {
        
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 60000 });
        
          if (message.channel.name === 'bot-commands') {
            message.channel.send(forumsEmbed)
        
               collector.on('collect', message => {
                let input2 = message.content.toLowerCase();
        
                if (input2 === "1"){
                    message.channel.send(forums1Embed);
                    collector.stop();
                 }
                if (input2 === "2"){
                    message.channel.send(forums2Embed)
                    collector.stop();
                 }
                if (input2 === "3"){
                    message.channel.send(forums3Embed)
                    collector.stop();
                }

            })
      
          return;
      
            }
          else {
            return message.channel.send(`Sorry, you can only use that command in ${botchannel}!`);
            }
      }
      
      if (cmd === `${prefix}in-gamehelp`) {
      
      const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 60000 });
      
        if (message.channel.name === 'bot-commands') {
          message.channel.send(ingameEmbed)
      
          collector.on('collect', message => {
           let input3 = message.content.toLowerCase();
      
            if (input3 === "1"){
                message.channel.send(ingame1Embed)
                collector.stop();
            }
            if (input3 === "2"){
                message.channel.send(ingame2Embed)
                collector.stop();
            }
            if (input3 === "3"){
                message.channel.send(ingame3Embed)
                collector.stop();
            }
            if (input3 === "4") {
                message.channel.send(ingame4Embed)
                collector.stop();
            }
      
         })
      
        return;
      
            }
          else {
            return message.channel.send(`Sorry, you can only use that command in ${botchannel}!`);
            }
      }
      
      if (cmd === `${prefix}discordhelp`) { // command
      
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time:6000}); //collection

        if (message.channel.name === 'bot-commands') {
              message.channel.send(discordEmbed)

              collector.on('collect', message => {
                let input3 = message.content.toLowerCase();

                if (input3 === "1"){ 
                    message.channel.send(discord1Embed)
                    collector.stop();
                }
                if (input3 === "2") {
                    message.channel.send(discord2Embed)
                    collector.stop();
                }


              })
              
              return;
            }
          else {
            return message.channel.send(`Sorry, you can only use that command in ${botchannel}!`);
            }
      }
      
      if (cmd === `${prefix}formshelp`) {
      
      const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 60000 });
      
        if (message.channel.name === 'bot-commands') {
          message.channel.send(formsEmbed)
      
          collector.on('collect', message => {
          let input4 = message.content.toLowerCase();
      
          if (input4 === "1"){
                message.channel.send(forms1Embed);
                collector.stop();
           }
            if (input4 === "2"){
                message.channel.send(forms2Embed)
                collector.stop();
           }
            if (input4 === "3"){
                message.channel.send(forms3Embed)
                collector.stop();
           }
            if (input4 === "4") {
                message.channel.send(forms4Embed)
                collector.stop();
           }
      
          return;
         })
      
            }
          else {
            return message.channel.send(`Sorry, you can only use that command in ${botchannel}!`);
            }
      }




});

bot.on('message', function(message) {
  if (message.content === `${prefix}event`) {
  
  if (!message.member.hasPermissions('ADMINISTRATOR')) return message.channel.send('You don\'t have permissions.');
  var deadline = new Date("Dec 22, 2019 20:00:00").getTime();
  var x = setInterval(function() {
      var now = new Date().getTime();
      var t = deadline - now;
      var days = Math.floor(t / (1000 * 60 * 60 *24));
      var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
      var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((t % (1000 * 60 )) / 1000);
      message.guild.channels.find("parentID", "658067038451007488").setName(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
          if (t <= 0) {
              clearInterval(x);
              message.guild.channels.find("parentID", "658067038451007488").setName('Event Started!')
          }
  }, 2.5 * 1000);



}
  });
  
  
  bot.on('message', async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(prefix)) return;

    var messageArray = message.content.split(" ");
    var command = messageArray[0];
    var args = messageArray.slice(1);
    let botchannel = message.guild.channels.find(`name`, "bot-commands")
    
    if(!message.channel.name === 'bot-commands') return;

    var commands = bot.commands.get(command.slice(prefix.length));
    if(commands) commands.run(bot, message, args);


  });