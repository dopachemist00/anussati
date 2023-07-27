const { SlashCommandBuilder } = require("discord.js")
const { data } = require("./content")

module.exports = {
    data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('gives the info of the server'),
    async execute( interaction) {
        await interaction.reply('this server is based on a challenge and our main goal is to be more productive to achieve a better life. (~‾⌣‾)~ \n\ncurrently, a 90 day challenge goiing on and I hope this helps you achieve some of your long/short-term goals. ( ͡^ ͜ʖ ͡^ )\n\n __**Here is a quick walk-through to understand how to use the server:**__ \n\n 1.pick your <#1010630089060384891>, <#1086645073363607593> and <#1010781667239133234> \n\n 2.Post your goals for the challenge in <#1010632084412444783> \n\n 3.daily goals in <#1011000578660372541> and progress assessment in <#1011001062985056447> \n\n 4.You can either join the vc (scroll down to find the Study Library) and the bot will track your hours while studying or post your Forest sessions in <#1010629360648212601> \n\n 5.the bot <@889078613817831495> counts our study hours only if we are in one of the VCs (solo, duo, trio, or any study room). You can think of them like real life study rooms, and solo is the equivalent of wanting to study in a room alone, but still get your hours counted. You can check your ranking & the top anytime in <#1011654225681461268> with the commands ``!stats`` and ``!top`` \n\n 6.If you are interested, in joining the current challenge You can check out <#1010770833431613590> \n\n _**Enjoy your time here and feel free to engage with others, share your thoughts and ideas.**_ ٩(•̤̀ᵕ•̤́๑) ')

    }
    

}