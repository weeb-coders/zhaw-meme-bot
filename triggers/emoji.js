module.exports = {
    name: "emoji",
    description: "Auto taunt when a utf8 emoji is seen",
    regex: /[\uD83D-\uDE4F]/,
    perms: ["ADD_REACTIONS"],
    execute(message) {
        message.react("715551738085507102");
    }
};
