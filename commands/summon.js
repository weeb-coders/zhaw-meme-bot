const images = [
    "https://66.media.tumblr.com/3579558b74ae7919226d9d2b49e461d7/tumblr_pc4k4xX6W21w3vwzc_540.gif",
    "https://i.pinimg.com/originals/76/20/ab/7620abfe32f7ba2ed9b0b599883d1014.gif",
    "https://i.kym-cdn.com/photos/images/newsfeed/001/068/277/259.gif",
    "https://media1.tenor.com/images/2074b0e0f03113cfe0778cb045a4ff68/tenor.gif"
];

module.exports = {
    name: "summon",
    description: "Summons a user (if in voice pulls them into your voice channel)",
    get usage() { return `${process.env.PREFIX}${this.name} <user>`; },
    perms: ["MOVE_MEMBERS", "SEND_MESSAGES"],
    execute(message) {
        let target = message.mentions.members.first();
        
        if (target && target.voice.channel && message.member.voice.channel) {
            target.voice.setChannel(message.member.voice.channel);
        }

        message.channel.send(`**${target} YOU HAVE BEEN SUMMONED BY ${message.member}!**`, { files: [randomEntry(images)], tts: true});
    }
};

function randomEntry(items) {
    return items[Math.floor(Math.random() * items.length)];
}