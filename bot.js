const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
client.on('ready', () => {
  client.user.setGame(`for help type | %help  .`,'https://www.youtube.com/kinggamer_th3');
  console.log('---------------');
  console.log('KingBot Is Online')
  console.log('---------------')
});
client.on('message', message => {
  if(message.content === ('%clear')) {
  let modRole = message.guild.roles.find("name", "ADMINISTRATOR");
  if (!modRole) return message.reply('You do not have ADMINISTRATOR Role'); {
    }
  const params = message.content.split(" ").slice(1)
    let messagecount = parseInt(params[0]);
    message.channel.fetchMessages({limit: messagecount})
        .then(messages => message.channel.bulkDelete(messages));
  }
});
var prefix = "%";
client.on('message', msg => {
  if (msg.content === '%support') {
    msg.reply('https://discord.chat/arabmc');
  }
});
client.on("message", message => {
 if (message.content === "%help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

💎『اوامر عامة』💎

💎%mhelp 『أوامر الموسيقى』 
                        
💎%server 『معلومات عن السيرفر』                      

💎%bot 『معلومات عن البوت』  

💎%tv 『لإنشاء روم خاصة بك صوت + كتابة』

💎%games 『لعرض قائمة العاب البوت』

💎%ping 『لمعرفه سرعه البوت』

💎%id 『معلومات عن حسابك』

💎%support 『لسيرفر المساعدة او الدعم』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
    
	`)
  
  
  
message.author.sendEmbed(embed)

}
});
client.on("message", message => {
    var prefix = "%";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "{King_Bot}."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
:one: • إحترام الجميع

:two: • المواضيع الدينية والعنصرية والسياسية  ممنوعة منعاً باتاً

:three: • الإسبام والإعلانات ممنوعة وذلك يشمل الإعلان عن سيرفر دسكورد آخر

:four: • عدم ازعاج عضو من أعضاء السيرفر بالرسائل الخاصة بخصوص إعلانات ودعوات وإلى آخره

:five: • تم إنشاء هذا السيرفر للعب والإستمتاع, إذا كانت لديك أي مشاكل شخصية حاول أن تجعلها خارج نطاق السيرفر

:six: • إذا تسبب المايك لديك بالإزعاج للآخرين وتقدموا بشكوى عنك سوف نضطر لإعطائك ميوت كامل من السيرفر إلى أن يتم حل مشكلتك من قبلك وإشعارنا بذلك لنقوم برفع الميوت عنك

:seven: • عدم طلب إرسال رسالة لجميع أعضاء السيرفر من المشرفين بالإشارات

:eight: • عدم مضايقة اللاعبين في الغرف, إذا لم تكن تلعب معهم تجنب إزعاجهم وإرباكهم عن طريق المايك أوتكرار الإشارات في الشات

:nine: • في حال تمت مضايقتك من قبل أي عضو من أعضاء السيرفر الرجاء التواصل مع المشرفين, وفي حال كانت المضايقة من أحد المشرفين تواصل مع مالك السيرفر وسيتم إتخاذ الإجراء المناسب                                                   وستمتعو :sparkling_heart:                                                 ايبي السيرفر اذا تبي تضيف حد
https://discord.gg/r8WxTuu       
 ... [ ${member}  ]
**`)
}).catch(console.error)

})
client.on('message', message => {
    if (message.content.startsWith("%avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

                    client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('%ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms")
                        .addField('**WebSocket:**',api + " ms")
message.channel.send({embed:embed});
                        }
                    });
    client.on('message', message => {
     if (message.content === "%id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("معلومات عن الحــساب")
               .setFooter(`{King_Bot}.`, '')
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${message.author.username}`)
  .addField('كود الحساب الخاص', message.author.discriminator)
  .addField("الرقـــم الشـــخصي", message.author.id)
  .addField('بــــوت', message.author.bot)
  .addField("تاريخ التسجيل", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});
client.on('message', async najzx => {
    if(najzx.content.startsWith("%tv")) {
      await najzx.channel.send("ارسل اسم الروم").then(e => {
      let filter = m => m.author.id === najzx.author.id
      let name = '';
      let time = '';
      let type = '';
      let limit = '';
   najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
      .then(collected => {
        name = collected.first().content
        collected.first().delete()
  e.edit("ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(co => {
  if(isNaN(co.first().content)) return najzx.reply("الوقت بالدقائق ! ارقام فقطٍ");
  if(co.first().content > 180 || co.first().content < 2) return najzx.channel.send("لا اقل من دقيقتان ولا اكثر من 180 دقيقه")
    time = co.first().content
  co.first().delete()
    e.edit("ارسل نوع الروم text, voice")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(col => {
    type = col.first().content
  col.first().delete()
  e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(coll => {
    if(isNaN(coll.first().content)) return najzx.reply("عدد الاعضاء يكون بالارقام فقط");
      limit = coll.first().content
  coll.first().delete()
  
    e.edit("جاري اعداد الغرفه الرجاء الانتضار...")
    najzx.guild.createChannel(name, type).then(c => {
      c.edit({
        userLimit: limit
      })
      setTimeout(() => {
        c.delete()
        najzx.channel.send("تم انقضاء الوقت")
      }, Math.floor(time*60000))
      
    })
    e.edit("تم انشاء الغرفه استمتع")
  
  })
  })
  })
  })
  })
  
    }
 })
client.on('guildCreate', guild => {
  client.channels.get("465087822836006913").send(`:white_check_mark: **تم اضافة البوت في سيرفر جديد مبروكك
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("465087822836006913").send(`:negative_squared_cross_mark: **طردوني حرام والله ايش سويت انا
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on('message', message => {
            if (message.content.startsWith(prefix + "bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' الاعضاء👥 ',` [${client.users.size}] `)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('مصمم  + صاحب البوت ',`KingGamer`)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});
client.on("message", message => {
 if (message.content === "%games") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

   『اوامر الالعاب』👑

   『لوخيروك%』

   『كت_تويت%』

   『فكك%』

   『صراحة%』
	  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 



`)

message.author.sendEmbed(embed)
	 
}
}); 
client.on('message', msg => {
  if (msg.content === '%help') {
    msg.reply(':envelope: | تم ارسال الرساله في الخاص');
  }
});
client.on('message', msg => {
  if (msg.content === '%games') {
    msg.reply(':envelope: | تم ارسال الرساله في الخاص');
  }
});
client.on("message", (message) => {
            if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        let yumz = new Discord.RichEmbed()
                    .setTimestamp()
                    .setTitle("Direct Message To The Bot")
                    .addField(`Sent By:`, `<@${message.author.id}>`)
                    .setColor("RANDOM")
                    .setThumbnail(message.author.displayAvatarURL)
                    .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
                    .setFooter(`DM Bot Messages | DM Logs`)
                client.users.get("352832614190809089").send(yumz)
            }
});
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("464943618021392385");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});
client.on('ready', function(){
  require("./antispam.js")(client, function(message){
     message.delete().then(yumz => {
     message.channel.send(`stop spamming kid <@${message.author.id}>`).then(spammer => {
     spammer.delete(2000)
   });
   });
  });
});
var prefix = "-"
client.on('message', (message) => {
if(message.content.startsWith(prefix + "ban")) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('هذا الخاصية للدارة فقط');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
         message.channel.send(member.displayName + 'تم طرد هذا الشخص من السيرفر');
        }).catch(() => {
            message.channel.send('Error :_:');
        });
    }
});
var prefix = "-"
client.on('message', (message) => {
if(message.content.startsWith(prefix + "kick")) {
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('هذا الخاصية للدارة فقط')
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + ' تم طرد هذا الشخص من السيرفر');
        }).catch(() => {
            message.channel.send(":x:");
        });
    }
}); 
var prefix = "-"
const moment = require('moment');
client.on('message',async message => {
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var gMembers;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration / 60000 ,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}

  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {

    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
					 m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
					message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                     },duration);
                   });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});
const jackeo = ['346067998794317824' , '461583618238578688' , '352832614190809089' , '']; //Jackeo  ?????
client.on('message', message => { 
var prefix = "%"; 
  if (message.author.bot) return; 
  if (!message.content.startsWith(prefix)) return;
    var argresult = message.content.split(` `).slice(1).join(' '); 
      if (!jackeo.includes(message.author.id)) return; 
  let command = message.content.split(" ")[0]; 
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command === "say")  { 
  if(!message.channel.guild) return message.reply('** __This command only for servers?__  **'); 
          message.delete() 
    message.channel.sendMessage(args.join(" ")).catch(console.error); 
  }
if (command == "emb")    { 
  if(!message.channel.guild) return message.reply('** __This command only for servers?__  **'); 
    let say = new Discord.RichEmbed() 
    .setDescription(args.join("  ")) 
    .setColor("RANDOM") 
    message.channel.sendEmbed(say); 
    message.delete(); 
  } 
});
var prefix = "%";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
client.on('message', message => {
if (message.content.startsWith('%server')) {
 message.channel.send(`Here is the different information of **${message.guild.name}**`, {
        embed: {
            color: 0xDF9C9D,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            thumbnail: {
                url: message.guild.iconURL
            },
            fields: [{
                    name: "• name:",
                    value: `${message.guild.name}`,
                    inline: true
                }, {
                    name: "• ID:",
                    value: `${message.guild.id}`,
                    inline: true
                }, {
                    name: "• Crated at:",
                    value: moment(message.guild.createdAt).format("LL"),
                    inline: true
                }, {
                    name: "• Owner:",
                    value: message.guild.owner.user.tag,
                    inline: true
                }, {
                    name: "• Members:",
                    value: `${message.guild.memberCount}`,
                    inline: true
                }, {
                    name: "• Last members:",
                    value: `${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `<@!${m.id}>`).splice(0, 1)}`,
                    inline: true
                }, {
                    name: "• Channel",
                    value: `**${message.guild.channels.filter(channel => channel.type === 'text').size}** text - **${message.guild.channels.filter(channel => channel.type === 'voice').size}** audio`,
                    inline: true
                }, {
                    name: "• AFK channel",
                    value: `${message.guild.afkChannel}`,
                    inline: true
                }, {
                    name: `• Roles - **${message.channel.guild.roles.size}**:`,
                    value: message.guild.roles.array().map(g => g).join(', '),
                    inline: true
                }, {
                    name: `• Emojies - **${message.channel.guild.emojis.size}**:`,
                    value: `${message.guild.emojis.map(e => e).join(', ')}`,
                    inline: true
                }
            ]
        }
    })





}
})

client.login(process.env.BOT_TOKEN);
