module.exports = {
    name: "taunt",
    description: "Taunt \"somebody\"",
    usage: `${process.env.PREFIX}taunt`,
    perms: ["SEND_MESSAGES"],
    execute(message) {
        message.channel.send("<:LMAO:715551738085507102>");
    }
};
