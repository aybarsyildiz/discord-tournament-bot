const fs = require('fs')
module.exports = {

    name:"help",
    description:"List all commands",
    execute(message){
        let str = '';
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        for(const file of commandFiles){
            const command = require(`./${file}`);
            str += `**Name:** ${command.name}, **Description:** ${command.description} \n`;
        }
        message.author.send(str);
        message.reply("Commands sent to you by DM!");

    }
    

}