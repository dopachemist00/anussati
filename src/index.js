const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, MessageManager, Embed, Collection, Options, ActivityType, Events, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require(`discord.js`);
const fs = require('fs');
const { type } = require('os');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.commands = new Collection();
client.buttons = new Collection()

require('dotenv').config();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");
    client.login(process.env.token)
    client.handleComponents();
})();

let status = [
    {
        name: 'Better Life',
        type: ActivityType.Watching,
    },
    {
        name: 'Meditation Music',
        type: ActivityType.Playing,
    },
    {
        name: 'Tripitaka',
        type: ActivityType.Listening,
    },
    {
        name: 'lilas',
        type: ActivityType.Listening
    }
]

client.on("ready", () => {
    console.log("Bot is online!")

    setInterval(() => {
        let random = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[random])
    }, 10000);

}
);

client.on(Events.InteractionCreate, interaction => {
    if (!interaction.isButton()) return;
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isModalSubmit()) return;
    if (interaction.customId === 'modal_id') {
        const member = interaction.user.tag;
        const member_tag = interaction.user.id;
        const member_icon = interaction.user.avatarURL();
        const forest_timing = interaction.fields.getTextInputValue("forest_starts_in");
        const forest_addrem = interaction.fields.getTextInputValue("Forest_remarks");
        const forest_pom = interaction.fields.getTextInputValue("forest_goal")
        const str = interaction.fields.getTextInputValue("forest_link");
        const fsi = interaction.fields.getTextInputValue("forest_image_id");
        const curTime = new Date();
        cur = "";
        space = false;
        myArray = []
        for (var i = 0; i < str.length; i++) {
            if (str[i] === " " || str[i] === "\n") {
                if (!space) {
                    myArray.push(cur);
                    space = true;
                }
                cur = "";
            } else {
                space = false;
                cur += str[i];
            }
        }
        if (!space) myArray.push(cur);
        var roomName = "", i = 20;
        while (i < myArray.length && myArray[i] !== "with") roomName += myArray[i++]+" ";
        const link_forest = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('Join!')
                    .setStyle(ButtonStyle.Link)
                    .setURL(`${myArray[myArray.length - 1]}`),
                new ButtonBuilder()
                    .setCustomId('delete_session_id')
                    .setLabel('delete')
                    .setEmoji('🗑️')
                    .setStyle(ButtonStyle.Danger)
            );
        const embed_forest = new EmbedBuilder()
            .setColor('50C878')
            .setTitle(`${myArray[19]} ${roomName}`)
            .setAuthor({
                name: `${member}`,
                iconURL: `${member_icon}`
            })
            .addFields(
                { name: 'code', value: `${myArray[15]}` },
                { name: 'starting in', value: `${forest_timing} minutes \n <:icons8curvedarrow50:1113433706045112351> <t:${new Date(curTime.getFullYear(), curTime.getMonth(), curTime.getDate(), curTime.getHours(), curTime.getMinutes() + parseInt(forest_timing)).valueOf() / 1000}:t>`, inline: true },
                { name: 'ends in', value: `${myArray[19].split("-")[0]} ${myArray[19].split("-")[1]}s \n <:icons8curvedarrow50:1113433706045112351> <t:${new Date(curTime.getFullYear(), curTime.getMonth(), curTime.getDate(), curTime.getHours(), curTime.getMinutes() + parseInt(myArray[19].split("-")[0]) + parseInt(forest_timing)).valueOf() / 1000}:t>`, inline: true },
                forest_pom ? { name: 'pomodoro stage', value: `${forest_pom}`, inline: true } : { name: 'pomodoro stage', value: `NA`, inline: true },
            )
            .addFields(
                { name: 'host', value: `<@${member_tag}>` },
            )
            .addFields(
                forest_addrem ? { name: 'additional remarks', value: `${forest_addrem}` } : { name: 'additional remarks', value: `NA`, inline: true },
            )
            .setThumbnail('https://media.discordapp.net/attachments/1085828261776457840/1113857015635251210/clipart1139217.png?width=514&height=515')
            .setImage(
                fsi ? `${fsi}`: `https://media.discordapp.net/attachments/1085828261776457840/1114045247488528`
            )
            .setTimestamp()
            .setFooter({
                text: 'join via copy and paste the code or by clicking the link below!',
                iconURL: 'https://play-lh.googleusercontent.com/NWRVVF6zXvmcqspJwdFOKcQG6OlsNwpMOxED_DgB6B2BBDeWwAeWZKZxGhgqU0LQVJU=w240-h480-rw'
            });
        const event_sucess = new EmbedBuilder()
        .addFields({
            name: '✅Sucess', value: 'your session has been posted to <#1096326467702501386> sucessfully! \n go to the embed to delete your session'
        })
        .setColor('CDD193')
        const reply= await interaction.reply({
            embeds: [event_sucess], ephemeral: true
            
        });
        setTimeout(() => {
            reply.delete().catch(console.error);
        }, 10000);
        const channel = client.channels.cache.get("1010629360648212601");
        await channel.send({ content: `<@&1010631146679316480>`, embeds: [embed_forest], components: [link_forest]});
    }
})

client.on(Events.InteractionCreate, async (interaction) => {
    if (interaction.isButton()) {
        if (interaction.customId === 'forest_session_event') {
            const forest_info_modal= new ModalBuilder()
            .setCustomId("modal_id")
            .setTitle("create your forest session");
            
            const forest_link = new TextInputBuilder()
                .setCustomId('forest_link')
                .setRequired(true)
                .setLabel('paste your forest link here')
                .setPlaceholder('e.g: Time to put down your phone and get back to work! Enter my room code: 9GA3RSG...')
                .setStyle(TextInputStyle.Paragraph);
            const forest_session_goal = new TextInputBuilder()
                .setCustomId('forest_goal')
                .setLabel('current number of session')
                .setPlaceholder('e.g 1/6')
                .setStyle(TextInputStyle.Short)
                .setRequired(false);
            const forest_session_timeing = new TextInputBuilder()
                .setCustomId('forest_starts_in')
                .setLabel('time until your session starts(in minutes)')
                .setPlaceholder(' e.g : 5')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const forest_session_addremakrs = new TextInputBuilder()
                .setCustomId('Forest_remarks')
                .setLabel('additional remarks')
                .setPlaceholder('e.g Success is no accident. It is hard work, perseverance...')
                .setStyle(TextInputStyle.Paragraph)
                .setRequired(false);
            const forest_image = new TextInputBuilder()
                .setCustomId('forest_image_id')
                .setLabel('forest session image(completely optional :3)')
                .setPlaceholder('paste your image link (e.g. https://media4.giphy.com/media/...)')
                .setStyle(TextInputStyle.Short)
                .setRequired(false);
            const forest_link_action = new ActionRowBuilder().addComponents(forest_link);
            const forest_session_timeing_action = new ActionRowBuilder().addComponents(forest_session_timeing);
            const forest_session_goal_action = new ActionRowBuilder().addComponents(forest_session_goal);
            const forest_session_addremakrs_action = new ActionRowBuilder().addComponents(forest_session_addremakrs);
            const forest_image_paste = new ActionRowBuilder().addComponents(forest_image);
            forest_info_modal.addComponents(forest_link_action, forest_session_timeing_action, forest_session_goal_action, forest_session_addremakrs_action, forest_image_paste);
            await interaction.showModal(forest_info_modal);
            const submitted = interaction.awaitModalSubmit({
                time: 60000
            }).catch(error => {
                console.log(error);
                return null;
            });
        }
    }
})
// Assuming you have a button click event handler
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;
    if (interaction.customId === 'delete_session_id') {
        try {
            const reply_delete = await interaction.reply({ content: 'session deleted by host' });
            await interaction.message.edit({ content: 'session deleted by host' }); // Delete the message
            console.log('Message deleted successfully');
            setTimeout(() => {
                reply_delete.delete().catch(console.error);
                console.log('message deleted sucessfully')
            }, 5000);
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    }
});

