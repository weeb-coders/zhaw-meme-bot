module.exports = {
    name: "combos",
    description: "Return all possible combinations of provided space separated elements",
    get usage() { return `${process.env.PREFIX}${this.name} [<element>]`; },
    perms: ["SEND_MESSAGES"],
    execute(message, args) {
        let combos = combination(args);
        
        combos.sort((a,b) => a.length - b.length);
        combos = combos.map(el => `{${el}}`);
        
        message.channel.send(`Input: **${args.join(", ")}**\nCombination count: ${combos.length}\nMoodle friendly result:\n\`\`\`\n{${combos.join(",")}}\n\`\`\``);
    }
};

/**
 * https://js-algorithms.tutorialhorizon.com/2015/10/23/combinations-of-an-array/
 */
function combination(arr) {

    let temp;
    let result = [];
    let combinations = Math.pow(2, arr.length);
    
    // Time & Space Complexity O (n * 2^n)
    
    for (let i = 0; i < combinations;  i++) {
        temp = [];
        
        for (let j = 0; j < arr.length; j++) {
            // & is bitwise AND
            if ((i & Math.pow(2, j))) {
                temp.push(arr[j]);
            }
        }
        result.push(temp.join(","));
    }
    return result;
}
