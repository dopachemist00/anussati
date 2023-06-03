
const { ModalBuilder,ActionRowBuilder,TextInputBuilder, TextInputStyle,SlashCommandBuilder }= require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('modal')
    .setDescription('creats a modal'),
    
    async execute(interaction) {
        const modal= new ModalBuilder()
        .setTitle('my modal')
        .setCustomId('modal')

        const name = new TextInputBuilder()
        .setCustomId('name')
        .setRequired(true)
        .setLabel('provide us with your name')
        .setStyle(TextInputStyle.Short);

        const about = new TextInputBuilder()
        .setCustomId('about')
        .setRequired(true)
        .setLabel('provide us about yourself')
        .setStyle(TextInputStyle.Paragraph);

        const firstActionRow = new ActionRowBuilder().addComponents(name)
        const secondActionRow = new ActionRowBuilder().addComponents(about)

        modal.addComponents(firstActionRow,secondActionRow)
        interaction.showModal(modal)




        
        

    }

}