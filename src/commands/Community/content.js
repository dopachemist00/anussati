const { EmbedBuilder, SlashCommandBuilder} = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()

    
    .setName('content')
    .setDescription('provides an embed to make the message more visually attractive')
    .addStringOption(option =>
        option.setName('heading')
        .setRequired(true)
        .setDescription('heading for your discussion'))
    .addStringOption(
        option => 
        option.setName('content')
        .setMaxLength(6000)
        .setRequired(true)
        .setDescription('write the contents in details')
    )
    .addStringOption(option =>
        option.setName('image_link')
        .setRequired(false)
        .setMaxLength(6000)
        .setDescription('paste the link for the image')),
    

        
        
        async execute(interaction, client) {
            const Day_input = interaction.options._hoistedOptions[0]['value'];
            const inspquote = interaction.options._hoistedOptions.length > 1 ? interaction.options._hoistedOptions[1]['value'] : null;
            const image_content = interaction.options._hoistedOptions.length > 2? interaction.options._hoistedOptions[2]['value']: 'https://media.tenor.com/52-erqoYMgsAAAA';
            const member = interaction.user.tag;
            const member_icon = interaction.user.avatarURL();
            const dailyrem = new EmbedBuilder()
            .setAuthor({
                name: `${member}`, 
                iconURL: `${member_icon}`
            })
            .setTitle(`**${Day_input}**`)
            .setImage(`${image_content}`)
            .setFields(
                
                  {name: '||.||', value: `${inspquote}`}
            )
            .setColor('59981A')
            .setTimestamp()
            await interaction.reply(
                { embeds: [dailyrem]});
        }
};
