const { EmbedBuilder, SlashCommandBuilder} = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()

    
    .setName('confess')
    .setDescription('share your thoughts anonymously')
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
            
            const anon = new EmbedBuilder()
            
            .setTitle(`**${Day_input}**`)
            .setFields(
                
                  {name: '||.||', value: `${inspquote}`}
            )
            .setColor('3D550C')
            .setImage(`${image_content}`)
            .setTimestamp()
        const reply_anon = await interaction.reply({ content: "your confession has been posted anonymously!", ephemeral: true} );
        setTimeout(() => {
            reply_anon.delete().catch(console.error);
        }, 20000);
        const channel_anon = client.channels.cache.get("1032421293443780678");
        await channel_anon.send({ embeds: [anon]});
        }
};
