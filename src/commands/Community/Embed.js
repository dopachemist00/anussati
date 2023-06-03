const { SlashCommandBuilder,EmbedBuilder,ActionRowBuilder, ButtonBuilder } = require('@discordjs/builders');
const { flatten, ButtonStyle } = require('discord.js');
const { execute } = require('./text');


module.exports = {
    data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Returns an embed."),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle('60 minute Wisteria')
        .setDescription('This is a very cool tree')
        .setColor(0x00FF00)
        .setURL('https://www.jchemistry.online/myaccount/#/exercisereview/2681115')
        .setThumbnail('https://i.pinimg.com/originals/17/42/19/174219c231fbefe8c60e575fd3e4ece4.gif')
        .addFields(
            { name: 'Starting', value: '5.30PM' },
            { name: 'ends in', value: '6.30PM', inline: true},
            { name: 'code', value: 'asbdiubifds', inline: true},
        )
        .setImage('https://i.pinimg.com/originals/b8/be/9b/b8be9b9da3c4c1bd7944b4ddf2872af7.gif')

        await interaction.reply({
            embeds: [embed]
        })

    }
    
    
}




    
    

    

        
        

    

        
	
