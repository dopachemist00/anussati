const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()


        .setName('dailyrem')
        .setDescription('replies daily reminder')
        .addStringOption(option =>
            option.setName('day')
                .setRequired(true)
                .setDescription('write the day of the ongoing challenge'))
        .addStringOption(
            option =>
                option.setName('inspirationalquotes')
                    .setDescription('write some inspirational quotes')
        ),

    async execute(interaction, client) {
        console.log(interaction.options);
        const Day_input = interaction.options._hoistedOptions[0]['value'];
        const inspquote = interaction.options._hoistedOptions.length > 1 ? interaction.options._hoistedOptions[1]['value'] : null;
        const dailyrem = new EmbedBuilder()
            .setTitle(`**Day: ${Day_input}**`)
            .setFields(
                { name: '📝 **Daily To-Do List Reminder**', value: 'Hello everyone! Just a friendly reminder to take a moment and jot down your daily to-do list. Planning your tasks can help you stay organized and focused throughout the day.\n Remember to prioritize your tasks, set achievable goals, and tackle them one step at a time. Feel free to share your progress or ask for assistance if needed. Lets make today a productive day! \n Have a great day and happy tasking! 🌟' },
                inspquote ? { name: '📜quotes', value: `${inspquote}` } : { name: '📜quotes', value: '`The secret of your future is hidden in your daily routine.`' }
            )
            .setColor('D6C18A')
            .setTimestamp()
        const confmsg = await interaction.reply(
            { content: 'your daily reminder has been sent!', ephemeral: true });
        setTimeout(() => {
            confmsg.delete().catch(console.error);
            console.log('message deleted sucessfully');
        }, 30000);

        const channel_drem = client.channels.cache.get("1011000578660372541");
        await channel_drem.send({ content: `<@&1032396670215934025>`, embeds: [dailyrem] });
    }
};
