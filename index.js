const got = require("got")

module.exports.Bot = class Bot { 
    constructor(token) {
        this.token = token
    }
}

module.exports.Bot.sendMessage = (channelid, content) => {
    let token = this.Bot.token
    let options = {
        header: `Authorization: Bot ${token}`,
        content: content
    }
    try {
        got.post(`https://discord.com/api/channels/${channelid}/messages`, {
            json: {
                content: content
            },
            headers: {
                "Authorization": `Bot ${token}`
            }
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports.Bot.getBot = () => {
    let token = this.Bot.token
    let options = {
        header: `Authorization: Bot ${token}`,
    }
    got("https://discord.com/api/users/@me", {json: true, headers: {"Authorization": `Bot ${token}`}}).then(res => {
        let bdy = res.body
        console.log(bdy.id)
    })
}

module.exports.Bot.message = class msg {
    constructor(sender, id, channel, member) {
        this.sender = sender
        this.id = id
        this.channel = channel
        this.member = member
    }
}