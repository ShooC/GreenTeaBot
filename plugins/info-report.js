let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = ``
const templateButtons = [
    {index: 1, urlButton: {displayText: 'ʟᴀᴘᴏʀᴋᴀɴ ᴍᴀsᴀʟᴀʜ ᴅɪsɪɴɪ', url: 'https://wa.me/6285607831412'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['report','complaint']
handler.tags = ['info']
handler.command = /^report|complaint$/i

export default handler
