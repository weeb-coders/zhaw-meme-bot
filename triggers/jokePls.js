const fetch = require("node-fetch");
const jokeAPI = "https://official-joke-api.appspot.com/random_joke";

module.exports = {
    name: "jokePls",
    description: "Give out jokes",
    regex: /.*joke pls.*/,
    perms: ["SEND_MESSAGES"],
    async execute(message) {
        
        let res = await fetch(jokeAPI);
        let data = await res.json();

        if (res.ok) {
            message.channel.send(`${data.setup}\n||${data.punchline}||`);
        }
    }
};
