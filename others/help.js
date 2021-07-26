const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(` `)
    .setTitle(`**Roya Bot ✨**`)
    .setDescription(`
 **|** **User Commands**
> \`invite\` - \`support\` - \`about\`
> \`ping\` - \`prefix\` - \`uptime\`
> \`tinvites\` - \`sug\` - \`roleuser\`
> \`report\`



**|** **Music Commands**
> \`play\` . \`skip\` . \`skipto\`
> \`stop\` . \`volume\` . \`nowplaying\`
> \`shuffle\` . \`search\` . \`resume\`
> \`remove\` . \`queue\` . \`loop\`
> \`lyrics\` . \`radio\`

**|** **Moderation Commands**
> \`ban\` . \`unban\` . \`setnick\`
> \`roleadd\` . \`roleremove\` . \`vkick\`
> \`setprefix\` . \`clear\` . \`close\`
> \`open\` . \`senddm\` . \`createchannel\`
> \`deletechannel\`

**|** **Gif Commands**
> \`boy\` . \`girl\` . \`couple\`
> \`sad\` . \`cartoon\` . \`anime\`
> \`neon\

**|** **Game Commands**
> \`kiss\` . \`slap\` . \`hug\`

**|** **Links**
[SUPPORT ROYA](https://discord.gg/nZfUmsBHgC)

[INVITE ROYA](https://discord.com/api/oauth2/authorize?client_id=868927255219417129&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("<:emoji_4:822203026776391711>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
