import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/shinomiya?apikey=ApiRevita'
	conn.sendButton(m.chat, 'ᴅᴏɴᴇ', wm, await(await fetch(url)).buffer(), [['ɴᴇxᴛ ɪᴍᴀɢᴇ',`.${command}`]],m)
}
handler.command = /^(shinomiya|kaguya)$/i
handler.tags = ['anime']
handler.help = ['kaguya']
handler.premium = false
handler.limit = true

export default handler