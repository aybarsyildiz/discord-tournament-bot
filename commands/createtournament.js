const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));
module.exports = {

    name: 'createtournament',
    description: 'Create a tournament',
    execute(message){
        const queue = message.client.queue;
        message.channel.send("Tournament has created! Press to :+1: play in a team!").then(sentEmbed => {
            sleep (1000);
            sentEmbed.react("👍");

        })
        

    }
}