const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

const urlBase = "https://wttr.in";

module.exports = {
    name: "wttr",
    description: "Get the weather for a location",
    get usage() { return `${process.env.PREFIX}${this.name} <location>`; },
    perms: ["SEND_MESSAGES"],
    async execute(message, args) {
        let arg = args.join(" ");
        if (!arg) {
            message.channel.send("No location provided.");
            return;
        }
        
        const weatherData = await (await fetch(encodeURI(`${urlBase}/${arg}?format=j1`))).json();
        
        let embed = new MessageEmbed()
            .setTitle(`${weatherData.nearest_area[0].country[0].value} - ${weatherData.request[0].query}`)
            .setURL(encodeURI(`${urlBase}/${arg}`))
            .setTimestamp()
            .setFooter(`Requested by ${message.author.username}`)
            .setImage(encodeURI(`${urlBase}/${arg}_0qp.png?m`))
            .setDescription(`It is ${weatherData.current_condition[0].weatherDesc[0].value}\n[${arg} - Google Maps](https://www.google.com/maps/search/?api=1&query=${arg.replace(/ /g, "+")})`)
            .addField("Temperature:", `${weatherData.current_condition[0].temp_C} °C`, true)
            .addField("Feels like:", `${weatherData.current_condition[0].FeelsLikeC} °C`, true);
        
        message.channel.send(embed);
    }
};
