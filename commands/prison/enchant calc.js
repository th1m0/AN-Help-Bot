module.exports = {
    name: "calculate",
    aliases: ["c", "calc"],
    description: "DESCRIPTION HERE!",
    run: async (bot, message, args) => {
        const discord = require("discord.js")
        const math = require("mathjs")
        
        let botchannel = message.guild.channels.find(`name`, "bot-commands")
        if(message.channel.name === 'bot-commands') {
        
        
        let minimum = 1;

        const SN = args[1]
        const xNumber = args[2]

        //Fortune | Jackhammer | Explosive | Merchant | Auto Sell | Laser | 
        let CS1 = 500;
        let CS2 = 1000;
        let CS3 = 1500;
        let CS4 = 2000;
        let CS5 = 2500;
        let CS6 = 3000;
        let CS7 = 3500;
        let CS8 = 4000;
        let CS9 = 4500;
        let CS10 = 5000;
        let CS11 = 5500;
        let CS12 = 6000;
        let CS13 = 6500;
        let CS14 = 7000;
        let CS15 = 7500;
        let CN = 500;
        //Lure | Luck of the sea | 
        

        //EFFICIENCY
        let effcost = 4;

        //FORTUNE
        let ftcost1 = 3;    //1500
        let ftcost2 = 4;    //2000
        let ftcost3 = 5;    //2500
        let ftcost4 = 6;    //3000
        let ftcost5 = 7;    //3500
        let ftcost6 = 8;    //4000
        let ftcost7 = 9;    //4500
        let ftcost8 = 10;   //5000
        let ftcost9 = 11;   //5500
        let ftcost10 = 12;  //6000
        let ftcost11 = 14;  //7000
        let ftcost12 = 16;  //8000
        let ftcost13 = 18;  //9000
        let ftcost14 = 20;  //10000
        let ftcost15 = 22;  //11000
        

        let maxFortune = 5000;
        
        //JACKHAMMER
        let jhcost1 = 8;
        let jhcost2 = 10;
        let jhcost3 = 12;
        let jhcost4 = 14;
        let jhcost5 = 16;
        let jhcost6 = 18;
        let jhcost7 = 20;
        let jhcost8 = 22;
        let jhcost9 = 24;
        let jhcost10 = 26;
        
        //EXPLOSIVE
        let explcost1 = 6;
        let explcost2 = 8;
        let explcost3 = 10;
        let explcost4 = 12;
        let explcost5 = 14;
        let explcost6 = 16;
        let explcost7 = 18;
        let explcost8 = 20;
        let explcost9 = 22;
        let explcost10 = 24;
        
        //SPEED
        let speedcost = 10;
        

        //HASTE
        let hastecost = 15;
        

        // AUTOSELL & MERCHANT
        let AsMcost1 = 4; //2000
        let AsMcost2 = 6; //3000
        let AsMcost3 = 8; //4000
        let AsMcost4 = 10; //5000
        let AsMcost5 = 12; //6000
        let AsMcost6 = 14; //7000
        let AsMcost7 = 16; //8000
        let AsMcost8 = 18; //9000
        let AsMcost9 = 20; //10000
        let AsMcost10 = 22;
        let maxAsM = 5000;
        
        //LASER
        let Lcost1 = 10; //5000
        let Lcost2 = 12; //6000
        let Lcost3 = 14; //7000
        let Lcost4 = 16; //8000
        let Lcost5 = 18; //9000
        let Lcost6 = 20; //10000
        let Lcost7 = 22;
        let Lcost8 = 24;
        let Lcost9 = 26;
        let Lcost10 = 28;
        
        





        let embed = new discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setTitle(args[2] + " levels of " + args[0] + " will cost you:")
        .setColor("RANDOM")
        .setFooter("Found a bug? PM Thiimo#6969 | Arkhamnetwork")
        
        let usageEmbed = new discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("Command usage: `<calculate <enchant> <start number> <amount of levels up from the start number>`")
        .addField("Enchants:", `
\`efficiency\` \`fortune\` \`jackhammer\` \`explosive\` \`speed\` \`haste\` \`merchant\` \`autosell\` \`laser\``);
        
        if(args[2] == 1){
            embed.setTitle(args[2] + " level of " + args[0] + " will cost you:")
        }

        
        
        if(args[0] === "autosell" || args[0] === "merchant"){
            if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS1) {
                embed.setDescription("``` ☪ " + xNumber * AsMcost1 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS2){
                embed.setDescription("``` ☪ " + math.evaluate(`(${CS1} - ${SN}) * ${AsMcost1} + (${SN} + ${xNumber} - ${CN}) * ${AsMcost2}`)+ "E-tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS3){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${AsMcost1}) + 3000 + (((${xNumber} + ${SN}) - ${CS2}) * ${AsMcost3})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS4){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${AsMcost1}) + 3000 + 4000 + (((${xNumber} + ${SN}) - ${CS3}) * ${AsMcost4})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${AsMcost1}) + 3000 + 4000 + 5000 + (((${xNumber} + ${SN}) - ${CS4}) * ${AsMcost5})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${AsMcost1}) + 3000 + 4000 + 5000 + 6000 + (((${xNumber} + ${SN}) - ${CS5}) * ${AsMcost6})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${AsMcost1}) + 3000 + 4000 + 5000 + 6000 + 7000 + (((${xNumber} + ${SN}) - ${CS6}) * ${AsMcost7})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${AsMcost1}) + 3000 + 4000 + 5000 + 6000 + 7000 + 8000 + (((${xNumber} + ${SN}) - ${CS7}) * ${AsMcost8})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${AsMcost1}) + 3000 + 4000 + 5000 + 6000 + 7000 + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS8}) * ${AsMcost9})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${AsMcost1}) + 3000 + 4000 + 5000 + 6000 + 7000 + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS9}) * ${AsMcost10})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }
            
            
            
            
            else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS1){
                embed.setDescription("``` ☪ " + xNumber * AsMcost2 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS2){
               embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${AsMcost2}) + ((${SN} + ${xNumber} - ${CS2}) * ${AsMcost3})`)) + " E-Tokens```")
                   return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS3){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${AsMcost2}) + 4000 + (((${xNumber} + ${SN}) - ${CS3}) * ${AsMcost4})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${AsMcost2}) + 4000 + 5000 + (((${xNumber} + ${SN}) - ${CS4}) * ${AsMcost5})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${AsMcost2}) + 4000 + 5000 + 6000 + (((${xNumber} + ${SN}) - ${CS5}) * ${AsMcost6})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${AsMcost2}) + 4000 + 5000 + 6000 + 7000 + (((${xNumber} + ${SN}) - ${CS6}) * ${AsMcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${AsMcost2}) + 4000 + 5000 + 6000 + 7000 + 8000 + (((${xNumber} + ${SN}) - ${CS7}) * ${AsMcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${AsMcost2}) + 4000 + 5000 + 6000 + 7000 + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS8}) * ${AsMcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${AsMcost2}) + 4000 + 5000 + 6000 + 7000 + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS9}) * ${AsMcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS2){
                embed.setDescription("``` ☪ " + xNumber * AsMcost3 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS3){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${AsMcost3}) + ((${SN} + ${xNumber} - ${CS3}) * ${AsMcost4})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${AsMcost3}) + 5000 + (((${xNumber} + ${SN}) - ${CS4}) * ${AsMcost5})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${AsMcost3}) + 5000 + 6000 + (((${xNumber} + ${SN}) - ${CS5}) * ${AsMcost6})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${AsMcost3}) + 5000 + 6000 + 7000 + (((${xNumber} + ${SN}) - ${CS6}) * ${AsMcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${AsMcost3}) + 5000 + 6000 + 7000 + 8000 + (((${xNumber} + ${SN}) - ${CS7}) * ${AsMcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${AsMcost3}) + 5000 + 6000 + 7000 + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS8}) * ${AsMcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${AsMcost3}) + 5000 + 6000 + 7000 + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS9}) * ${AsMcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }
            
            
            else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS3){
                embed.setDescription("``` ☪ " + xNumber * AsMcost4 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${AsMcost4}) + ((${SN} + ${xNumber} - ${CS4}) * ${AsMcost5})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${AsMcost4}) + 6000 + (((${xNumber} + ${SN}) - ${CS5}) * ${AsMcost6})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${AsMcost4}) + 6000 + 7000 + (((${xNumber} + ${SN}) - ${CS6}) * ${AsMcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${AsMcost4}) + 6000 + 7000 + 8000 + (((${xNumber} + ${SN}) - ${CS7}) * ${AsMcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${AsMcost4}) + 6000 + 7000 + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS8}) * ${AsMcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${AsMcost4}) + 6000 + 7000 + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS9}) * ${AsMcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }
            

            else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4){
                embed.setDescription("``` ☪ " + xNumber * AsMcost5 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${AsMcost5}) + ((${SN} + ${xNumber} - ${CS5}) * ${AsMcost6})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${AsMcost5}) + 7000 + (((${xNumber} + ${SN}) - ${CS6}) * ${AsMcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${AsMcost5}) + 7000 + 8000 + (((${xNumber} + ${SN}) - ${CS7}) * ${AsMcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${AsMcost5}) + 7000 + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS8}) * ${AsMcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${AsMcost5}) + 7000 + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS9}) * ${AsMcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + xNumber * AsMcost6 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS6} - ${SN}) * ${AsMcost6}) + ((${SN} + ${xNumber} - ${CS6}) * ${AsMcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS6} - ${SN}) * ${AsMcost6}) + 8000 + (((${xNumber} + ${SN}) - ${CS7}) * ${AsMcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS6} - ${SN}) * ${AsMcost6}) + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS8}) * ${AsMcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS6} - ${SN}) * ${AsMcost6}) + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS9}) * ${AsMcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS7 && SN >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + xNumber * AsMcost7 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS7 && SN >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS7} - ${SN}) * ${AsMcost7}) + ((${SN} + ${xNumber} - ${CS7}) * ${AsMcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS7 && SN >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS7} - ${SN}) * ${AsMcost7}) + 9000 + (((${xNumber} + ${SN}) - ${CS8}) * ${AsMcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS7 && SN >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS7} - ${SN}) * ${AsMcost7}) + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS9}) * ${AsMcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS8 && SN >= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + xNumber * AsMcost8 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS8 && SN >= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS8} - ${SN}) * ${AsMcost8}) + ((${SN} + ${xNumber} - ${CS7}) * ${AsMcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS8 && SN >= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS8} - ${SN}) * ${AsMcost8}) + 10000 + (((${xNumber} + ${SN}) - ${CS9}) * ${AsMcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS9 && SN >= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + xNumber * AsMcost9 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS9 && SN >= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS9} - ${SN}) * ${AsMcost9}) + ((${SN} + ${xNumber} - ${CS9}) * ${AsMcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS10 && SN >= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + xNumber * AsMcost10 + " E-Tokens```")
                    return message.channel.send(embed)
            }else{
                message.channel.send(usageEmbed)
            }
        }


        if(args[0] === "jackhammer"){
            if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS1) {
                embed.setDescription("``` ☪ " + xNumber * jhcost1 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS2){
                embed.setDescription("``` ☪ " + math.evaluate(`(${CS1} - ${SN}) * ${jhcost1} + (${SN} + ${xNumber} - ${CN}) * ${jhcost2}`)+ "E-tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS3){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${jhcost1}) + 5000 + (((${xNumber} + ${SN}) - ${CS2}) * ${jhcost3})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS4){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${jhcost1}) + 5000 + 6000 + (((${xNumber} + ${SN}) - ${CS3}) * ${jhcost4})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${jhcost1}) + 5000 + 6000 + 7000 + (((${xNumber} + ${SN}) - ${CS4}) * ${jhcost5})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${jhcost1}) + 5000 + 6000 + 7000 + 8000 + (((${xNumber} + ${SN}) - ${CS5}) * ${jhcost6})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${jhcost1}) + 5000 + 6000 + 7000 + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS6}) * ${jhcost7})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${jhcost1}) + 5000 + 6000 + 7000 + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS7}) * ${jhcost8})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${jhcost1}) + 5000 + 6000 + 7000 + 8000 + 9000 + 10000 + 11000 + (((${xNumber} + ${SN}) - ${CS8}) * ${jhcost9})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${jhcost1}) + 5000 + 6000 + 7000 + 8000 + 9000 + 10000 + 11000 + 12000 + (((${xNumber} + ${SN}) - ${CS9}) * ${jhcost10})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }
            
            
            
            
            else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS1){
                embed.setDescription("``` ☪ " + xNumber * jhcost2 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS2){
               embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${jhcost2}) + ((${SN} + ${xNumber} - ${CS2}) * ${jhcost3})`)) + " E-Tokens```")
                   return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS3){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${jhcost2}) + 6000 + (((${xNumber} + ${SN}) - ${CS3}) * ${jhcost4})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${jhcost2}) + 6000 + 7000 + (((${xNumber} + ${SN}) - ${CS4}) * ${jhcost5})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${jhcost2}) + 6000 + 7000 + 8000 + (((${xNumber} + ${SN}) - ${CS5}) * ${jhcost6})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${jhcost2}) + 6000 + 7000 + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS6}) * ${jhcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${jhcost2}) + 6000 + 7000 + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS7}) * ${jhcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${jhcost2}) + 6000 + 7000 + 8000 + 9000 + 10000 + 11000 + (((${xNumber} + ${SN}) - ${CS8}) * ${jhcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${jhcost2}) + 6000 + 7000 + 8000 + 9000 + 10000 + 11000 + 12000 + (((${xNumber} + ${SN}) - ${CS9}) * ${jhcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS2){
                embed.setDescription("``` ☪ " + xNumber * jhcost3 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS3){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${jhcost3}) + ((${SN} + ${xNumber} - ${CS3}) * ${jhcost4})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${jhcost3}) + 7000 + (((${xNumber} + ${SN}) - ${CS4}) * ${jhcost5})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${jhcost3}) + 7000 + 8000 + (((${xNumber} + ${SN}) - ${CS5}) * ${jhcost6})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${jhcost3}) + 7000 + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS6}) * ${jhcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${jhcost3}) + 7000 + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS7}) * ${jhcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${jhcost3}) + 7000 + 8000 + 9000 + 10000 + 11000 + (((${xNumber} + ${SN}) - ${CS8}) * ${jhcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${jhcost3}) + 7000 + 8000 + 9000 + 10000 + 11000 + 12000 + (((${xNumber} + ${SN}) - ${CS9}) * ${jhcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }
            
            
            else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS3){
                embed.setDescription("``` ☪ " + xNumber * jhcost4 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${jhcost4}) + ((${SN} + ${xNumber} - ${CS4}) * ${jhcost5})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${jhcost4}) + 8000 + (((${xNumber} + ${SN}) - ${CS5}) * ${jhcost6})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${jhcost4}) + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS6}) * ${jhcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${jhcost4}) + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS7}) * ${jhcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${jhcost4}) + 8000 + 9000 + 10000 + 11000 + (((${xNumber} + ${SN}) - ${CS8}) * ${jhcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${jhcost4}) + 8000 + 9000 + 10000 + 11000 + 12000 + (((${xNumber} + ${SN}) - ${CS9}) * ${jhcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }
            

            else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4){
                embed.setDescription("``` ☪ " + xNumber * jhcost5 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${jhcost5}) + ((${SN} + ${xNumber} - ${CS5}) * ${jhcost6})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${jhcost5}) + 9000 + (((${xNumber} + ${SN}) - ${CS6}) * ${jhcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${jhcost5}) + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS7}) * ${jhcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${jhcost5}) + 9000 + 10000 + 11000 + (((${xNumber} + ${SN}) - ${CS8}) * ${jhcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${jhcost5}) + 9000 + 10000 + 11000 + 12000 + (((${xNumber} + ${SN}) - ${CS9}) * ${jhcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + xNumber * jhcost6 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS6} - ${SN}) * ${jhcost6}) + ((${SN} + ${xNumber} - ${CS6}) * ${jhcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS6} - ${SN}) * ${jhcost6}) + 10000 + (((${xNumber} + ${SN}) - ${CS7}) * ${jhcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS6} - ${SN}) * ${jhcost6}) + 10000 + 11000 + (((${xNumber} + ${SN}) - ${CS8}) * ${jhcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS6} - ${SN}) * ${jhcost6}) + 10000 + 11000 + 12000 + (((${xNumber} + ${SN}) - ${CS9}) * ${jhcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS7 && SN >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + xNumber * jhcost7 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS7 && SN >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS7} - ${SN}) * ${jhcost7}) + ((${SN} + ${xNumber} - ${CS7}) * ${jhcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS7 && SN >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS7} - ${SN}) * ${jhcost7}) + 11000 + (((${xNumber} + ${SN}) - ${CS8}) * ${jhcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS7 && SN >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS7} - ${SN}) * ${jhcost7}) + 11000 + 12000 + (((${xNumber} + ${SN}) - ${CS9}) * ${jhcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS8 && SN >= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + xNumber * jhcost8 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS8 && SN >= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS8} - ${SN}) * ${jhcost8}) + ((${SN} + ${xNumber} - ${CS7}) * ${jhcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS8 && SN >= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS8} - ${SN}) * ${jhcost8}) + 12000 + (((${xNumber} + ${SN}) - ${CS9}) * ${jhcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS9 && SN >= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + xNumber * jhcost9 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS9 && SN >= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS9} - ${SN}) * ${jhcost9}) + ((${SN} + ${xNumber} - ${CS9}) * ${jhcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS10 && SN >= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + xNumber * jhcost10 + " E-Tokens```")
                    return message.channel.send(embed)
            }else{
                message.channel.send(usageEmbed)
            }
        }
        
        


        if(args[0] === "fortune"){
            if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS1) {
                embed.setDescription("``` ☪ " + xNumber * ftcost1 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS2){
                embed.setDescription("``` ☪ " + math.evaluate(`(${CS1} - ${SN}) * ${ftcost1} + (${SN} + ${xNumber} - ${CN}) * ${ftcost2}`)+ " E-tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS3){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${ftcost1}) + 2000 + (((${xNumber} + ${SN}) - ${CS2}) * ${ftcost3})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS4){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${ftcost1}) + 2000 + 2500 + (((${xNumber} + ${SN}) - ${CS3}) * ${ftcost4})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${ftcost1}) + 2000 + 2500 + 3000 + (((${xNumber} + ${SN}) - ${CS4}) * ${ftcost5})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${ftcost1}) + 2000 + 2500 + 3000 + 3500 + (((${xNumber} + ${SN}) - ${CS5}) * ${ftcost6})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${ftcost1}) + 3000 + 2500 + 3000 + 3500 + 4000 + (((${xNumber} + ${SN}) - ${CS6}) * ${ftcost7})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${ftcost1}) + 2000 + 2500 + 3000 + 3500 + 4000 + 4500 + (((${xNumber} + ${SN}) - ${CS7}) * ${ftcost8})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${ftcost1}) + 2000 + 2500 + 3000 + 3500 + 4000 + 4500 + 5000 + (((${xNumber} + ${SN}) - ${CS8}) * ${ftcost9})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${ftcost1}) + 2000 + 2500 + 3000 + 3500 + 4000 + 4500 + 5000 + 5500 + (((${xNumber} + ${SN}) - ${CS9}) * ${ftcost10})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS11){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${ftcost1}) + 2000 + 2500 + 3000 + 3500 + 4000 + 4500 + 5000 + 5500 + 6000 + (((${xNumber} + ${SN}) - ${CS10}) * ${ftcost11})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS11 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS12){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${ftcost1}) + 2000 + 2500 + 3000 + 3500 + 4000 + 4500 + 5000 + 5500 + 6000 + 7000 + (((${xNumber} + ${SN}) - ${CS11}) * ${ftcost12})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS12 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS13){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${ftcost1}) + 2000 + 2500 + 3000 + 3500 + 4000 + 4500 + 5000 + 5500 + 6000 + 7000 + 8000 + (((${xNumber} + ${SN}) - ${CS12}) * ${ftcost13})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS13 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS14){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${ftcost1}) + 2000 + 2500 + 3000 + 3500 + 4000 + 4500 + 5000 + 5500 + 6000 + 7000 + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS13}) * ${ftcost14})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS14 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS15){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${ftcost1}) + 2000 + 2500 + 3000 + 3500 + 4000 + 4500 + 5000 + 5500 + 6000 + 7000 + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS14}) * ${ftcost15})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }
             
            
            
            
            else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS1){
                embed.setDescription("``` ☪ " + xNumber * ftcost2 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS2){
               embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${ftcost2}) + ((${SN} + ${xNumber} - ${CS2}) * ${ftcost3})`)) + " E-Tokens```")
                   return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS3){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${ftcost2}) + 4000 + (((${xNumber} + ${SN}) - ${CS3}) * ${ftcost4})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${ftcost2}) + 4000 + 5000 + (((${xNumber} + ${SN}) - ${CS4}) * ${ftcost5})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${ftcost2}) + 4000 + 5000 + 6000 + (((${xNumber} + ${SN}) - ${CS5}) * ${ftcost6})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${ftcost2}) + 4000 + 5000 + 6000 + 7000 + (((${xNumber} + ${SN}) - ${CS6}) * ${ftcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${ftcost2}) + 4000 + 5000 + 6000 + 7000 + 8000 + (((${xNumber} + ${SN}) - ${CS7}) * ${ftcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${ftcost2}) + 4000 + 5000 + 6000 + 7000 + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS8}) * ${ftcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${ftcost2}) + 4000 + 5000 + 6000 + 7000 + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS9}) * ${ftcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS11 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS10){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${ftcost2}) + 4000 + 5000 + 6000 + 7000 + 8000 + 9000 + 10000 + 11000 + (((${xNumber} + ${SN}) - ${CS10}) * ${ftcost11})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS12 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS11){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${ftcost2}) + 4000 + 5000 + 6000 + 7000 + 8000 + 9000 + 10000 + 11000 + 12000 + (((${xNumber} + ${SN}) - ${CS11}) * ${ftcost12})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS13 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS12){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${ftcost2}) + 4000 + 5000 + 6000 + 7000 + 8000 + 9000 + 10000 + 11000 + 12000 + 13000 + (((${xNumber} + ${SN}) - ${CS11}) * ${ftcost12})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }





            else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS2){
                embed.setDescription("``` ☪ " + xNumber * ftcost3 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS3){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${ftcost3}) + ((${SN} + ${xNumber} - ${CS3}) * ${ftcost4})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${ftcost3}) + 5000 + (((${xNumber} + ${SN}) - ${CS4}) * ${ftcost5})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${ftcost3}) + 5000 + 6000 + (((${xNumber} + ${SN}) - ${CS5}) * ${ftcost6})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${ftcost3}) + 5000 + 6000 + 7000 + (((${xNumber} + ${SN}) - ${CS6}) * ${ftcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${ftcost3}) + 5000 + 6000 + 7000 + 8000 + (((${xNumber} + ${SN}) - ${CS7}) * ${ftcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${ftcost3}) + 5000 + 6000 + 7000 + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS8}) * ${ftcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${ftcost3}) + 5000 + 6000 + 7000 + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS9}) * ${ftcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }
            
            
            else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS3){
                embed.setDescription("``` ☪ " + xNumber * ftcost4 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${ftcost4}) + ((${SN} + ${xNumber} - ${CS4}) * ${ftcost5})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${ftcost4}) + 6000 + (((${xNumber} + ${SN}) - ${CS5}) * ${ftcost6})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${ftcost4}) + 6000 + 7000 + (((${xNumber} + ${SN}) - ${CS6}) * ${ftcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${ftcost4}) + 6000 + 7000 + 8000 + (((${xNumber} + ${SN}) - ${CS7}) * ${ftcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${ftcost4}) + 6000 + 7000 + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS8}) * ${ftcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${ftcost4}) + 6000 + 7000 + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS9}) * ${ftcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }
            

            else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4){
                embed.setDescription("``` ☪ " + xNumber * ftcost5 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${ftcost5}) + ((${SN} + ${xNumber} - ${CS5}) * ${ftcost6})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${ftcost5}) + 7000 + (((${xNumber} + ${SN}) - ${CS6}) * ${ftcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${ftcost5}) + 7000 + 8000 + (((${xNumber} + ${SN}) - ${CS7}) * ${ftcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${ftcost5}) + 7000 + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS8}) * ${ftcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${ftcost5}) + 7000 + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS9}) * ${ftcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + xNumber * ftcost6 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS6} - ${SN}) * ${ftcost6}) + ((${SN} + ${xNumber} - ${CS6}) * ${ftcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS6} - ${SN}) * ${ftcost6}) + 8000 + (((${xNumber} + ${SN}) - ${CS7}) * ${ftcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS6} - ${SN}) * ${ftcost6}) + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS8}) * ${ftcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS6} - ${SN}) * ${ftcost6}) + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS9}) * ${ftcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS7 && SN >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + xNumber * ftcost7 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS7 && SN >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS7} - ${SN}) * ${ftcost7}) + ((${SN} + ${xNumber} - ${CS7}) * ${ftcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS7 && SN >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS7} - ${SN}) * ${ftcost7}) + 9000 + (((${xNumber} + ${SN}) - ${CS8}) * ${ftcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS7 && SN >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS7} - ${SN}) * ${ftcost7}) + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS9}) * ${ftcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS8 && SN >= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + xNumber * ftcost8 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS8 && SN >= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS8} - ${SN}) * ${ftcost8}) + ((${SN} + ${xNumber} - ${CS7}) * ${ftcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS8 && SN >= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS8} - ${SN}) * ${ftcost8}) + 10000 + (((${xNumber} + ${SN}) - ${CS9}) * ${ftcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS9 && SN >= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + xNumber * ftcost9 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS9 && SN >= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS9} - ${SN}) * ${ftcost9}) + ((${SN} + ${xNumber} - ${CS9}) * ${ftcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS10 && SN >= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + xNumber * ftcost10 + " E-Tokens```")
                    return message.channel.send(embed)
            }else{
                message.channel.send(usageEmbed)
            }
        }






        if(args[0] === "explosive"){
            if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS1) {
                embed.setDescription("``` ☪ " + xNumber * explcost1 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS2){
                embed.setDescription("``` ☪ " + math.evaluate(`(${CS1} - ${SN}) * ${explcost1} + (${SN} + ${xNumber} - ${CN}) * ${explcost2}`)+ "E-tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS3){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${explcost1}) + 4000 + (((${xNumber} + ${SN}) - ${CS2}) * ${explcost3})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS4){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${explcost1}) + 4000 + 5000 + (((${xNumber} + ${SN}) - ${CS3}) * ${explcost4})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${explcost1}) + 4000 + 5000 + 6000 + (((${xNumber} + ${SN}) - ${CS4}) * ${explcost5})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${explcost1}) + 4000 + 5000 + 6000 + 7000 + (((${xNumber} + ${SN}) - ${CS5}) * ${explcost6})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${explcost1}) + 4000 + 5000 + 6000 + 7000 + 8000 + (((${xNumber} + ${SN}) - ${CS6}) * ${explcost7})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${explcost1}) + 4000 + 5000 + 6000 + 7000 + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS7}) * ${explcost8})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${explcost1}) + 4000 + 5000 + 6000 + 7000 + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS8}) * ${explcost9})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${explcost1}) + 4000 + 5000 + 6000 + 7000 + 8000 + 9000 + 10000 + 11000 + (((${xNumber} + ${SN}) - ${CS9}) * ${explcost10})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }
            
            
            
            
            else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS1){
                embed.setDescription("``` ☪ " + xNumber * explcost2 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS2){
               embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${explcost2}) + ((${SN} + ${xNumber} - ${CS2}) * ${explcost3})`)) + " E-Tokens```")
                   return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS3){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${explcost2}) + 5000 + (((${xNumber} + ${SN}) - ${CS3}) * ${explcost4})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${explcost2}) + 5000 + 6000 + (((${xNumber} + ${SN}) - ${CS4}) * ${explcost5})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${explcost2}) + 5000 + 6000 + 7000 + (((${xNumber} + ${SN}) - ${CS5}) * ${explcost6})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${explcost2}) + 5000 + 6000 + 7000 + 8000 + (((${xNumber} + ${SN}) - ${CS6}) * ${explcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${explcost2}) + 5000 + 6000 + 7000 + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS7}) * ${explcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${explcost2}) + 5000 + 6000 + 7000 + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS8}) * ${explcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${explcost2}) + 5000 + 6000 + 7000 + 8000 + 9000 + 10000 + 11000 + (((${xNumber} + ${SN}) - ${CS9}) * ${explcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS2){
                embed.setDescription("``` ☪ " + xNumber * explcost3 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS3){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${explcost3}) + ((${SN} + ${xNumber} - ${CS3}) * ${explcost4})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${explcost3}) + 6000 + (((${xNumber} + ${SN}) - ${CS4}) * ${explcost5})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${explcost3}) + 6000 + 7000 + (((${xNumber} + ${SN}) - ${CS5}) * ${explcost6})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${explcost3}) + 6000 + 7000 + 8000 + (((${xNumber} + ${SN}) - ${CS6}) * ${explcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${explcost3}) + 6000 + 7000 + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS7}) * ${explcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${explcost3}) + 6000 + 7000 + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS8}) * ${explcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${explcost3}) + 6000 + 7000 + 8000 + 9000 + 10000 + 11000 + (((${xNumber} + ${SN}) - ${CS9}) * ${explcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }
            
            
            else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS3){
                embed.setDescription("``` ☪ " + xNumber * explcost4 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${explcost4}) + ((${SN} + ${xNumber} - ${CS4}) * ${explcost5})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${explcost4}) + 7000 + (((${xNumber} + ${SN}) - ${CS5}) * ${explcost6})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${explcost4}) + 7000 + 8000 + (((${xNumber} + ${SN}) - ${CS6}) * ${explcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${explcost4}) + 7000 + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS7}) * ${explcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${explcost4}) + 7000 + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS8}) * ${explcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${explcost4}) + 7000 + 8000 + 9000 + 10000 + 11000 + (((${xNumber} + ${SN}) - ${CS9}) * ${explcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }
            

            else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4){
                embed.setDescription("``` ☪ " + xNumber * explcost5 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${explcost5}) + ((${SN} + ${xNumber} - ${CS5}) * ${explcost6})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${explcost5}) + 8000 + (((${xNumber} + ${SN}) - ${CS6}) * ${explcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${explcost5}) + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS7}) * ${explcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${explcost5}) + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS8}) * ${explcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${explcost5}) + 8000 + 9000 + 10000 + 11000 + (((${xNumber} + ${SN}) - ${CS9}) * ${explcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + xNumber * explcost6 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS6} - ${SN}) * ${explcost6}) + ((${SN} + ${xNumber} - ${CS6}) * ${explcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS6} - ${SN}) * ${explcost6}) + 9000 + (((${xNumber} + ${SN}) - ${CS7}) * ${explcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS6} - ${SN}) * ${explcost6}) + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS8}) * ${explcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS6} - ${SN}) * ${explcost6}) + 9000 + 10000 + 11000 + (((${xNumber} + ${SN}) - ${CS9}) * ${explcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS7 && SN >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + xNumber * explcost7 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS7 && SN >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS7} - ${SN}) * ${explcost7}) + ((${SN} + ${xNumber} - ${CS7}) * ${explcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS7 && SN >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS7} - ${SN}) * ${explcost7}) + 10000 + (((${xNumber} + ${SN}) - ${CS8}) * ${explcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS7 && SN >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS7} - ${SN}) * ${explcost7}) + 10000 + 11000 + (((${xNumber} + ${SN}) - ${CS9}) * ${explcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS8 && SN >= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + xNumber * explcost8 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS8 && SN >= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS8} - ${SN}) * ${explcost8}) + ((${SN} + ${xNumber} - ${CS7}) * ${explcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS8 && SN >= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS8} - ${SN}) * ${explcost8}) + 11000 + (((${xNumber} + ${SN}) - ${CS9}) * ${explcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS9 && SN >= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + xNumber * explcost9 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS9 && SN >= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS9} - ${SN}) * ${explcost9}) + ((${SN} + ${xNumber} - ${CS9}) * ${explcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS10 && SN >= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + xNumber * explcost10 + " E-Tokens```")
                    return message.channel.send(embed)
            }else{
                message.channel.send(usageEmbed)
            }
        }





        if(args[0] === "laser"){
            if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS1) {
                embed.setDescription("``` ☪ " + xNumber * Lcost1 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS2){
                embed.setDescription("``` ☪ " + math.evaluate(`(${CS1} - ${SN}) * ${Lcost1} + (${SN} + ${xNumber} - ${CN}) * ${Lcost2}`)+ "E-tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS3){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${Lcost1}) + 6000 + (((${xNumber} + ${SN}) - ${CS2}) * ${Lcost3})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS4){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${Lcost1}) + 6000 + 7000 + (((${xNumber} + ${SN}) - ${CS3}) * ${Lcost4})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${Lcost1}) + 6000 + 7000 + 8000 + (((${xNumber} + ${SN}) - ${CS4}) * ${Lcost5})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${Lcost1}) + 6000 + 7000 + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS5}) * ${Lcost6})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${Lcost1}) + 6000 + 7000 + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS6}) * ${Lcost7})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${Lcost1}) + 6000 + 7000 + 8000 + 9000 + 10000 + 11000 + (((${xNumber} + ${SN}) - ${CS7}) * ${Lcost8})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${Lcost1}) + 6000 + 7000 + 8000 + 9000 + 10000 + 11000 + 9000 + (((${xNumber} + ${SN}) - ${CS8}) * ${AsMcost9})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS1 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10){
                embed.setDescription("``` ☪ " + math.evaluate(`((${CS1} - ${SN}) * ${Lcost1}) + 6000 + 7000 + 8000 + 9000 + 10000 + 11000 + 12000 + 13000 + (((${xNumber} + ${SN}) - ${CS9}) * ${AsMcost10})`)+ " E-Tokens```")
                    return message.channel.send(embed)
            }
            
            
            
            
            else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS1){
                embed.setDescription("``` ☪ " + xNumber * Lcost2 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS2){
               embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${Lcost2}) + ((${SN} + ${xNumber} - ${CS2}) * ${Lcost3})`)) + " E-Tokens```")
                   return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS3){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${Lcost2}) + 7000 + (((${xNumber} + ${SN}) - ${CS3}) * ${Lcost4})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${Lcost2}) + 7000 + 8000 + (((${xNumber} + ${SN}) - ${CS4}) * ${Lcost5})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${Lcost2}) + 7000 + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS5}) * ${Lcost6})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${Lcost2}) + 7000 + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS6}) * ${Lcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${Lcost2}) + 7000 + 8000 + 9000 + 10000 + 11000 + (((${xNumber} + ${SN}) - ${CS7}) * ${Lcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${Lcost2}) + 7000 + 8000 + 9000 + 10000 + 11000 + 12000 + (((${xNumber} + ${SN}) - ${CS8}) * ${Lcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS2 && SN >= CS1 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS2} - ${SN}) * ${Lcost2}) + 7000 + 8000 + 9000 + 10000 + 11000 + 12000 + 13000 + (((${xNumber} + ${SN}) - ${CS9}) * ${Lcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS2){
                embed.setDescription("``` ☪ " + xNumber * Lcost3 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS3){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${Lcost3}) + ((${SN} + ${xNumber} - ${CS3}) * ${Lcost4})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${Lcost3}) + 8000 + (((${xNumber} + ${SN}) - ${CS4}) * ${Lcost5})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${Lcost3}) + 8000 + 9000 + (((${xNumber} + ${SN}) - ${CS5}) * ${Lcost6})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${Lcost3}) + 8000 + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS6}) * ${Lcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${Lcost3}) + 8000 + 9000 + 10000 + 11000 + (((${xNumber} + ${SN}) - ${CS7}) * ${Lcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${Lcost3}) + 8000 + 9000 + 10000 + 11000 + 12000 + (((${xNumber} + ${SN}) - ${CS8}) * ${Lcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS3 && SN >= CS2 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS3} - ${SN}) * ${Lcost3}) + 8000 + 9000 + 10000 + 11000 + 12000 + 11000 + (((${xNumber} + ${SN}) - ${CS9}) * ${Lcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }
            
            
            else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS3){
                embed.setDescription("``` ☪ " + xNumber * Lcost4 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${Lcost4}) + ((${SN} + ${xNumber} - ${CS4}) * ${Lcost5})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${Lcost4}) + 9000 + (((${xNumber} + ${SN}) - ${CS5}) * ${Lcost6})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${Lcost4}) + 9000 + 10000 + (((${xNumber} + ${SN}) - ${CS6}) * ${Lcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${Lcost4}) + 9000 + 11000 + 12000 + (((${xNumber} + ${SN}) - ${CS7}) * ${Lcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${Lcost4}) + 9000 + 10000 + 11000 + 12000 + (((${xNumber} + ${SN}) - ${CS8}) * ${Lcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS4 && SN >= CS3 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS4} - ${SN}) * ${Lcost4}) + 9000 + 10000 + 11000 + 12000 + 13000 + (((${xNumber} + ${SN}) - ${CS9}) * ${Lcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }
            

            else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS4){
                embed.setDescription("``` ☪ " + xNumber * Lcost5 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${Lcost5}) + ((${SN} + ${xNumber} - ${CS5}) * ${Lcost6})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${Lcost5}) + 10000 + (((${xNumber} + ${SN}) - ${CS6}) * ${Lcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${Lcost5}) + 10000 + 11000 + (((${xNumber} + ${SN}) - ${CS7}) * ${Lcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${Lcost5}) + 10000 + 11000 + 12000 + (((${xNumber} + ${SN}) - ${CS8}) * ${Lcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS5 && SN >= CS4 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS5} - ${SN}) * ${Lcost5}) + 10000 + 11000 + 12000 + 13000 + (((${xNumber} + ${SN}) - ${CS9}) * ${Lcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS5){
                embed.setDescription("``` ☪ " + xNumber * Lcost6 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS6} - ${SN}) * ${Lcost6}) + ((${SN} + ${xNumber} - ${CS6}) * ${Lcost7})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS6} - ${SN}) * ${Lcost6}) + 11000 + (((${xNumber} + ${SN}) - ${CS7}) * ${Lcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS6} - ${SN}) * ${Lcost6}) + 11000 + 12000 + (((${xNumber} + ${SN}) - ${CS8}) * ${Lcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS6 && SN >= CS5 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS6} - ${SN}) * ${Lcost6}) + 11000 + 12000 + 13000 + (((${xNumber} + ${SN}) - ${CS9}) * ${Lcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS7 && SN >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS6){
                embed.setDescription("``` ☪ " + xNumber * Lcost7 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS7 && SN >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS7} - ${SN}) * ${Lcost7}) + ((${SN} + ${xNumber} - ${CS7}) * ${Lcost8})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS7 && SN >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS7} - ${SN}) * ${Lcost7}) + 12000 + (((${xNumber} + ${SN}) - ${CS8}) * ${Lcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS7 && SN >= CS6 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS7} - ${SN}) * ${Lcost7}) + 12000 + 13000 + (((${xNumber} + ${SN}) - ${CS9}) * ${Lcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS8 && SN >= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS7){
                embed.setDescription("``` ☪ " + xNumber * Lcost8 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS8 && SN >= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS8} - ${SN}) * ${Lcost8}) + ((${SN} + ${xNumber} - ${CS7}) * ${Lcost9})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS8 && SN >= CS7 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS8} - ${SN}) * ${Lcost8}) + 13000 + (((${xNumber} + ${SN}) - ${CS9}) * ${Lcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS9 && SN >= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS8){
                embed.setDescription("``` ☪ " + xNumber * Lcost9 + " E-Tokens```")
                    return message.channel.send(embed)
            }else if(SN < CS9 && SN >= CS8 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + (math.evaluate(`((${CS9} - ${SN}) * ${Lcost9}) + ((${SN} + ${xNumber} - ${CS9}) * ${Lcost10})`)) + " E-Tokens```")
                    return message.channel.send(embed)
            }


            else if(SN < CS10 && SN >= CS9 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10 && (math.evaluate(`${SN} + ${xNumber}`)) >= CS9){
                embed.setDescription("``` ☪ " + xNumber * Lcost10 + " E-Tokens```")
                    return message.channel.send(embed)
            }else{
                message.channel.send(usageEmbed)
            }
        }



        if(args[0] === "efficiency"){
            if(SN >= 0 && (math.evaluate(`${SN} + ${xNumber}`)) <= CS10) {
                embed.setDescription("``` ☪ " + xNumber * effcost + " E-Tokens```")
                    return message.channel.send(embed)
            }else{
                message.channel.send(usageEmbed)
            }
        }


        if(args[0] === "haste"){
            if(SN >= 0 && (math.evaluate(`${SN} + ${xNumber}`)) <= 15) {
                embed.setDescription("``` ☪ " + xNumber * hastecost + " E-Tokens```")
                    return message.channel.send(embed)
            }else{
                message.channel.send(usageEmbed)
            }
        }


        if(args[0] === "speed"){
            if(SN >= 0 && (math.evaluate(`${SN} + ${xNumber}`)) <= 5) {
                embed.setDescription("``` ☪ " + xNumber * speedcost + " E-Tokens```")
                    return message.channel.send(embed)
            }else{
                message.channel.send(usageEmbed)
            }
        }

        // if(args[0] === "efficiency" || "fortune" || "jackhammer" || "explosive" || "speed" || "haste" || "merchant" || "autosell" || "laser"){
        //     message.channel.send(usageEmbed)
        // }
    

    }
    else {
        return message.channel.send(`Sorry, you can only use that command in ${botchannel}!`)
    }


    }
}
