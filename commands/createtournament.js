const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));
const time = 10000
module.exports = {

    name: 'createtournament',
    description: 'Create a tournament',
    execute(message){
        const queue = message.client.queue;
        message.channel.send("Tournament has created! Press to :+1: play in a team!");
        message.react("👍");

        const filter = (reaction, user) => {
            return "👍";
       };
        const collector = message.createReactionCollector(filter, { time: time });
        collector.on('collect', (reaction, reactionCollector) => {
            let limit = 11;
            if(reaction.count > limit){
                reaction.message.delete();
            }
            console.log(reaction.users);
            console.log("count is right here: %d",reaction.count);
       });

        

    }
}