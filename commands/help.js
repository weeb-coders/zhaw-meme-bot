const Discord = require("discord.js");

module.exports = {
    name: "help",
    description: "Get help on how to use a command",
    usage: `${process.env.PREFIX}help <command>`,
    perms: ["SEND_MESSAGES"],
    execute(message, args) {
        if (message.guild.me.client.commands.has(args[0])) {
            let command = message.guild.me.client.commands.get(args[0]);

            let helpEmbed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle(command.name.toUpperCase())
                .setDescription(command.description)
                .addField("Usage:", command.usage)
                .addField("Permissions:", command.perms.join(", "))
                .setTimestamp()
                .setFooter(`Requested by ${message.author.username}`);
            
            message.channel.send(helpEmbed);
        } else {
            message.channel.send("I dont know that command!");
        }
    }
};
