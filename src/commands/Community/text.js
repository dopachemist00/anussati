const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('This is the test command!'),
    async execute(interaction, client) {
        await interaction.reply({ content: 'the bot is working!' });
    }
}