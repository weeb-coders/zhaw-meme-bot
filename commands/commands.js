const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "commands",
    description: "Get a list of commands",
    get usage() { return `${process.env.PREFIX}${this.name}`; },
    perms: ["SEND_MESSAGES"],
    execute(message, args) {
        let commands = message.guild.me.client.commands;

        let commandEmbed = new MessageEmbed()
            .setColor(message.member.displayHexColor)
            .setTitle("Commands")
            .setDescription(`These are the available commands.\nTo get more information on a specific command use \`${process.env.PREFIX}help <command>\``)
            .setTimestamp()
            .setFooter(`Requested by ${message.author.username}`);

        let embedFields = commands.map(cmd => {
            return {
                name: cmd.name,
                value: cmd.description,
                inline: false
            }
        });

        commandEmbed.addFields(embedFields);

        message.channel.send(commandEmbed);
    }
};
