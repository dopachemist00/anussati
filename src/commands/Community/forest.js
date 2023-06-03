const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: GatewayIntentBits.Guilds })
module.exports = {
    data: new SlashCommandBuilder()
        .setName('forest')
        .setDescription('asks users to provide their forest info'),

    async execute(interaction) {
        const forest_session = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('forest_session_event')
                    .setLabel('create')
                    .setEmoji('💡')
                    .setStyle(ButtonStyle.Success));

        const embed = new EmbedBuilder()
            .setTitle('🌱 forest sessions')
            .setDescription('here you can host your forest session')
            .addFields(
                { name: '🟢 create', value: 'by clicking this button, you will be able to host your own forest session. Once your event is created, it will be posted on the Forest Codes channel for others to join.' },
                { name: 'how to use?', value: '1️⃣ open forest app on your android/ios device \n 2️⃣ turn on **plant together** mode which you would see at the upper side of app screen which you would see after clicking two icons present in there \n 3️⃣click on create room \n 4️⃣click on create \n 5️⃣click on share icon present right after room code, and copy the message \n 6️⃣ click on create button of this message, and fill the forms and hit submit! ' },
            )
            .setColor('BACC81')
            .setImage('https://media.discordapp.net/attachments/1085828261776457840/1113442702009311272/STUDY_ROLES_5.gif?width=1056&height=423');
        if (interaction.user.id === '990249000458387496') {

            await interaction.reply({
                embeds: [embed], components: [forest_session]

            })
        }
    }
}