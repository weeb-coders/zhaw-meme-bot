module.exports = {
    name: "detention",
    description: "Leo's favourite command",
    get usage() { return `${process.env.PREFIX}${this.name} <user>`; },
    perms: ["MOVE_MEMBERS", "SEND_MESSAGES"],
    execute(message) {
        let member = message.mentions.members.first();
        if (member && member.voice.channel) {
            let detentionChannel = message.guild.channels.cache.find(channel => channel.name.toLowerCase() === "detention");

            if (detentionChannel) {
                member.voice.setChannel(detentionChannel);
                message.channel.send(`${member} got fukin yeeted!`);

            } else {
                message.channel.send("No detention channel found");
            }

        } else {
            message.channel.send("Mention a guild member that is in voice!");
        }
    }
};
