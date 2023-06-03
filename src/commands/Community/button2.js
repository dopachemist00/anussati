const {SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ButtonInteraction, Collector} = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('button2')
    .setDescription('returns a button'),

    async execute(interaction) {
        const button2 = new ButtonBuilder()
        .setCustomId('button2')
        .setLabel('click me!')
        .setStyle(ButtonStyle.Primary);
        
        const message = await interaction.reply({
            content: 'This is your button!', components: [new ActionRowBuilder().addComponents(button2)]
        });

        const Collector = message.createMessageComponentCollector();

        Collector.on('collect', async i => {
            await i.reply({ content: 'the button was pressed!'})
        })
    },
}