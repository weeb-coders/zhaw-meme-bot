module.exports = {
    name: "taunt",
    description: "Taunt \"somebody\"",
    get usage() { return `${process.env.PREFIX}${this.name}`; },
    perms: ["SEND_MESSAGES"],
    execute(message) {
        message.channel.send("<:LMAO:715551738085507102>");
    }
};
