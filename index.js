const fs = require("fs");

require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

client.commands = new Discord.Collection();

console.log("Loading commands: ");
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    console.log(`  ${command.name}`);
}

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(process.env.PREFIX)) return;

    let args = message.content.substring(process.env.PREFIX.length).split(" ");
    let command = args.shift();

    if (!client.commands.has(command)) return;

    try {
        let cmd = client.commands.get(command);
        let missingPerms = [];
        for (const perm of cmd.perms) {
            if (!message.guild.me.permissionsIn(message.channel).has(perm)) {
                missingPerms.push(perm);
            }
        }

        if (missingPerms.length > 0 && message.guild.me.permissionsIn(message.channel).has("SEND_MESAGES")) {
            message.channel.send(`Missing the following Permissions: \`\`\`\n${missingPerms.join("\n")}\`\`\``);
        } else if (missingPerms.length === 0) {
            cmd.execute(message, args);
        }
        
    } catch (error) {
        console.error(error);
        message.channel.send("There was an error trying to execute that command!");
    }
});

client.login(process.env.TOKEN);
