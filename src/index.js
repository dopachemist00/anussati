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
const treeMap = {
    "apple tree " : "https://media.discordapp.net/attachments/1085828261776457840/1114928631458836550/apple_tree.png?width=635&height=635",
    "tangerine tree " : 'https://media.discordapp.net/attachments/1085828261776457840/1114942839630069882/tangerine_tree.png?width=635&height=635',
    'lotus ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942510712758282/lotus.png?width=635&height=635',
    'narcissus ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942632792182834/narcissus.png?width=635&height=635',
    'cosmos ':'https://media.discordapp.net/attachments/1085828261776457840/1114942318399721552/cosmos.png?width=635&height=635',
    'osmanthus ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942633962389534/osmanthus.png?width=635&height=635',
    'golden trumpet tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942507697053739/golden_trumpet_tree.png?width=635&height=635',
    'golden wings ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942508036788314/golden_wings.png?width=635&height=635',
    'statue of tada ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942837956554804/statue_of_tada.png?width=635&height=635',
    'rice ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942703579447326/rice.png?width=635&height=635',
    'lavender ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942509366382683/lavender.png?width=635&height=635',
    'camellia ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942196957851668/camellia.png?width=635&height=635',
    'plum blossom ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942702308565032/plum_bloosom.png?width=635&height=635',
    'tulip ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942914775224521/tulip.png?width=635&height=635',
    'lily flower ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942510343651378/lily_flower.png?width=635&height=635',
    'witch mushroom ': 'https://media.discordapp.net/attachments/1085828261776457840/1114943037676736522/witch_mushroom.png?width=635&height=635',
    'lover tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942511199289384/lover_tree.png?width=635&height=635',
    'sundae tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942838854123622/sundae_tree.png?width=635&height=635',
    'water spirit ': 'https://media.discordapp.net/attachments/1085828261776457840/1114943035625709659/water_spirit.png?width=636&height=635',
    'forest spirit ' : "https://media.discordapp.net/attachments/1085828261776457840/1114942320874373220/forest_spirit.png?width=636&height=635",
    'four-leaf clover ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942321352511598/four-leaf_clover.png?width=636&height=635',
    'weeping willow ': 'https://media.discordapp.net/attachments/1085828261776457840/1114943036506513458/weeping_willow.png?width=635&height=635',
    'celestial tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942021883400282/celestial_tree.png?width=636&height=635',
    "bear's paw ": 'https://media.discordapp.net/attachments/1085828261776457840/1114941850537689148/bear_s_paw.png?width=635&height=635',
    'doggo tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942319242788917/doggo_tree.png?width=635&height=635',
    'star coral ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942836383690863/star_colar.png?width=636&height=635',
    'blue flower ': 'https://media.discordapp.net/attachments/1085828261776457840/1114941851024248942/blue_flower.png?width=636&height=635',
    'cat-tail willow ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942198480384061/cat-tail_willow.png?width=636&height=635',
    'oak tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942023041028126/oak_tree.png?width=635&height=635',
    'ghost mushroom ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942321893589134/ghost_mushroom.png?width=636&height=635',
    'rainbow flower ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942704766435378/rainbow_flower.png?width=636&height=635',
    'moon tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942631793930342/moon_tree.png?width=636&height=635',
    'cuckoo clock ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942318831730811/cuckoo_clock.png?width=636&height=635',
    'starry tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942837075738644/starry_tree.png?width=636&height=635',
    'carnation ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942198069350512/carnation.png?width=635&height=635',
    'banana ': 'https://media.discordapp.net/attachments/1085828261776457840/1114941849476550738/banana.png?width=635&height=635',
    'rafflesia ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942704388935740/rafflesia.png?width=635&height=635',
    'baobab ': 'https://media.discordapp.net/attachments/1085828261776457840/1114941850097303672/baobab.png?width=635&height=635',
    'maple ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942630363680948/maple.png?width=635&height=635',
    'rose ':'https://media.discordapp.net/attachments/1085828261776457840/1114942703977898014/rose.png?width=635&height=635' ,
    'sunflower ':'https://media.discordapp.net/attachments/1085828261776457840/1114942839240007781/sunflower.png?width=635&height=635' ,
    'candy tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942197473746975/candy_tree.png?width=635&height=635',
    'bamboo ': 'https://media.discordapp.net/attachments/1085828261776457840/1114941849166151710/bamboo.png?width=550&height=550',
    'watermelon ': 'https://media.discordapp.net/attachments/1085828261776457840/1114943036103864480/watermelon.png?width=635&height=635',
    'wisteria ': 'https://media.discordapp.net/attachments/1085828261776457840/1114943037320208425/wisteria.png?width=636&height=635',
    'ginkgo ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942322275258398/ginkgo.png?width=635&height=635',
    'cactus ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942019597504532/cactus.png?width=635&height=635',
    'mushroom ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942632251113472/mushroom.png?width=635&height=635',
    'scarecrow ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942705194246194/scarecrow.png?width=635&height=635',
    'pumpkin ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942702673465456/pumpkin.png?width=635&height=635',
    'ball cactus ': 'https://media.discordapp.net/attachments/1085828261776457840/1114941848834822304/ball_cactus.png?width=635&height=635',
    'chinese pine tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942200149712926/chinese_pine_tree.png?width=635&height=635',
    'flourishing grass ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942320094232696/flourishing_grass.png?width=635&height=635',
    'kitty ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942319242788917/doggo_tree.png?width=635&height=635',
    'coconut tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942200808222790/coconut_tree.png?width=635&height=635',
    'cherry blossom ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942022277673070/cherry_blossom.png?width=635&height=635',
    'octopus ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942633568129144/octopus.png?width=635&height=635',
    'triplets ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942918873063565/triplets.png?width=635&height=635',
    'lemon tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942510029086780/lemon_tree.png?width=635&height=635',
    'nest ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942633194827939/nest.png?width=635&height=635',
    'tree house ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942918470402098/tree_house.png?width=635&height=635',
    'flower tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942320450732053/flower_tree.png?width=635&height=635',
    'christmas tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942022650953800/christmas_tree.png?width=635&height=635',
    'wishing tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114943036909178970/wishing_tree.png?width=635&height=635',
    'luminie ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942629906493540/luminie.png?width=635&height=635',
    'twilight guardian ': 'https://media.discordapp.net/attachments/1085828261776457840/1114943034619076608/twilight_guardian.png?width=635&height=635',
    'starburst tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942836719231116/starburst_tree.png?width=636&height=635',
    'space tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942835926499378/space_tree.png?width=636&height=635',
    'unicorn tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114943035164340275/unicorn_tree.png?width=636&height=635',
    'cake tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942021384273981/cake_tree.png?width=635&height=635',
    'strawberry chiffon cake ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942838493421629/strawberry_chiffon_cake.png?width=635&height=635',
    'blueberry cake ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942020562190386/blueberry_cake.png?width=635&height=635',
    'black forest cake ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942023355609159/black_forest_cake.png?width=635&height=635',
    'lemon cake ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942509714505788/lemon_cake.png?width=635&height=635',
    'matcha azuki cake ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942630762131467/matcha_azuki_cake.png?width=635&height=635',
    'tiramisu ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942918092918784/tiramisu.png?width=635&height=635',
    'cherry cheese cake ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942199415722124/cherry_cheese_cake.png?width=635&height=635',
    'chocolate strawberry cake ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942200485269645/chocolate_strawberry_cake.png?width=635&height=635',
    'purple oak tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942703126454422/purple_oak_tree.png?width=635&height=635',
    'yellow oak tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114972423482257499/yellow_oak_tree.png?width=635&height=635',
    'pink oak tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942701910102097/pink_oak_tree.png?width=635&height=635',
    'blue oak tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942020050497556/blue_oak_tree.png?width=635&height=635',
    'earth day tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942319666397258/earth_day_tree.png?width=635&height=635',
    'money tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942631189954741/money_tree.png?width=635&height=635',
    '8th anniversary cake tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114941847966601307/8th_anniversary_cake_tree.png?width=635&height=635',
    '7th anniversary cake tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114941847559733308/7th_anniversary_cake_tree.png?width=635&height=635',
    '6th anniversary cake tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114941846888661023/6th_anniversary_cake_tree.png?width=635&height=635',
    '9th anniversary cake tree ': 'https://media.discordapp.net/attachments/1085828261776457840/1114941848478285824/9th_anniversary_tree.png?width=635&height=635',
    'tinytan - rm (clematis) ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942916847214612/tinytan_-_rm_clematis.png?width=635&height=635',
    'tinytan - jin (rumex) ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942915857358948/tinytan_-_jin_rumex.png?width=635&height=635',
    'tinytan - suga (larch) ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942917321166949/tinytan_-_suga_larch.png?width=635&height=635',
    'tinytan - j-hope (buttercup) ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942840057901076/tinytan_-_j-hope_buttercup.png?width=635&height=635',
    'tinytan - jimin (spirea) ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942915299508325/tinytan_-_jimin_spirea.png?width=635&height=635',
    'tinytan - V (wintersweet) ': 'https://media.discordapp.net/attachments/1085828261776457840/1114942917736407131/tinytan_-_v_wintersweet.png?width=635&height=635',
    'tinytan - jung kook (tiger flower) ':'https://media.discordapp.net/attachments/1085828261776457840/1114942916301947000/tinytan_-_jung_kook_tiger_flower.png?width=635&height=635' ,
    



};

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
                { name: 'code', value: `${myArray[15]}`},
                { name: 'starting in', value: `${forest_timing} minutes \n ➡️ <t:${new Date(curTime.getFullYear(), curTime.getMonth(), curTime.getDate(), curTime.getHours(), curTime.getMinutes()+parseInt(forest_timing)).valueOf()/1000}:t>`, inline: true },
                { name: 'ends in', value: `${myArray[19].split("-")[0]} ${myArray[19].split("-")[1]}s \n ➡️ <t:${new Date(curTime.getFullYear(), curTime.getMonth(), curTime.getDate(), curTime.getHours(), curTime.getMinutes()+parseInt(myArray[19].split("-")[0])+parseInt(forest_timing)).valueOf()/1000}:t>`, inline: true },
                forest_pom ? {name: 'pomodoro stage', value: `${forest_pom}`, inline: true} : {name: 'pomodoro stage', value: `NA`, inline: true},
            )
            .addFields(
                { name: 'host', value: `<@${member_tag}>` },
            )
            .addFields(
                forest_addrem ? { name: 'additional remarks', value: `${forest_addrem}` } : { name: 'additional remarks', value: `NA`, inline: true },
            )
            .setThumbnail(treeMap[roomName.toLowerCase()] !== undefined ? treeMap[roomName.toLowerCase()] : 'https://media.discordapp.net/attachments/1085828261776457840/1113857015635251210/clipart1139217.png?width=514&height=515')
            .setImage(
                fsi ? `${fsi}`: `https://media.discordapp.net/attachments/1085828261776457840/1114045247488528`
            )
            .setTimestamp()
            .setFooter({
                text: 'join via copy and paste the code or by clicking the link below! \n and please dont click delete on someone elses session' ,
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

