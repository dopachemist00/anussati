const { SlashCommandBuilder,EmbedBuilder,ActionRowBuilder, ButtonBuilder,flatten, ButtonStyle } = require('discord.js');



module.exports = {
    data: new SlashCommandBuilder()
    .setName('button')
    .setDescription("creats the embed for the forest link."),
    async execute(interaction, client) {
        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            
                .setLabel('Join!')
                .setStyle(ButtonStyle.Link)
                .setURL(`https://discordjs.guide/interactions/buttons.html#building-and-sending-buttons`))
            
            const embed = new EmbedBuilder()

            .setColor(0x00FF00)
            .setTitle('this is your tree!')
            .setAuthor({
                name: '<Lilas>', 
                iconURL: 'https://images-ext-1.discordapp.net/external/-C5mU3ZDnv9yxFwJcuZAZVKWleeiWkuhq44hU_lVXp8/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/804864020162412605/3199311115c2f9b3ccca1c358faa3178.png?width=352&height=352'
            })
            .addFields(
                { name: 'code', value: 'sample code'},
                { name: 'starting in', value: '5 mins', inline: true },
                { name: 'ends in', value: '60 mins', inline: true },
            )
            .addFields(
                { name: 'additional remarks', value: 'here are the additional remarks!'},
                {name: 'host', value: '<@990249000458387496>'},

            )
            .setImage('https://i.pinimg.com/originals/b8/be/9b/b8be9b9da3c4c1bd7944b4ddf2872af7.gif')
            .setThumbnail('https://i.pinimg.com/originals/17/42/19/174219c231fbefe8c60e575fd3e4ece4.gif')
            .setTimestamp()
            .setFooter({
                text: 'join via copy and paste the code or by clicking the link below!',
                iconURL: 'https://i.pinimg.com/originals/18/42/81/184281f0fe87517a950beb8112c308dd.gif'
            });
        
        
            


            
             
             interaction.reply({
content: '<@&1089917087163633725> this is your link for joining the session!', embeds: [embed],  components:[row] })

        }
        
   
    }

