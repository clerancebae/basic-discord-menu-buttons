const Discord = require('discord.js');
const client = new Discord.Client();
const set = require('./set.json');
client.login(set.token);
client.on("ready", () => {client.user.setPresence({game: {name: `clerance`,type: "LISTENING"},status: "invisible"});});
const { MessageMenuOption , MessageMenu , MessageActionRow } = require("discord-buttons")

client.on("message", async (message) => {
    if (message.content == "!game" && message.author.id === "419836743878180874") {
        const option = new MessageMenuOption()
            .setLabel('valorant')
            .setEmoji('862967970811478026')
            .setValue('valorant')
            .setDescription('valorant')
        const option2 = new MessageMenuOption()
            .setLabel('csgo')
            .setEmoji('862968277713813514') // your server emoji id u can find like write chat \ -> and click emoji and press enter
            .setValue('csgo')
            .setDescription('csgo')
        const option3 = new MessageMenuOption()
            .setLabel('pubg')
            .setEmoji('862968376859033610')
            .setValue('pubg')
            .setDescription('pubg')

const Menu = new MessageMenu()
    .setID('menu1')
    .setPlaceholder('choose your fav game')
    .setMaxValues(1)
    .setMinValues(1)
    .addOption(option)
    .addOption(option2)
    .addOption(option3)

const Rowl = new MessageActionRow()
    .addComponent(Menu)

        message.channel.send('game selection', {components: [Rowl] });
    }
    })

client.on('clickMenu', async (menu) => {
   if(menu.values[0] == 'valorant') {
await menu.reply.defer()
 await menu.clicker.member.roles.add("862966117190729768") // specify role id
            await menu.channel.send(`${menu.clicker.user} - (${menu.clicker.user.id}) <@&862966117190729768> u have been given a role for clicking the button.`).then(msg => { msg.delete({ timeout: 30000 }) }).catch(console.error);
   }
   if(menu.values[0] == 'csgo') {
await menu.reply.defer()
await menu.clicker.member.roles.add("862967354501890068") // specify role id
            await menu.channel.send(`${menu.clicker.user} - (${menu.clicker.user.id}) <@&862967354501890068> u have been given a role for clicking the button.`).then(msg => { msg.delete({ timeout: 30000 }) }).catch(console.error);
}
   if(menu.values[0] == 'pubg') {
   await menu.reply.defer()
await menu.clicker.member.roles.add("862966143004966922") // specify role id
            await menu.channel.send(`${menu.clicker.user} - (${menu.clicker.user.id}) <@&862966143004966922> u have been given a role for clicking the button.`).then(msg => { msg.delete({ timeout: 30000 }) }).catch(console.error);
}
})

