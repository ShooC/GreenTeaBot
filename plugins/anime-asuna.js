import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/asuna?apikey=ApiRevita'
	conn.sendButton(m.chat, 'ᴅᴏɴᴇ', wm, await(await fetch(url)).buffer(), [['ɴᴇxᴛ ɪᴍᴀɢᴇ',`.${command}`]],m)
}
handler.command = /^(asuna)$/i
handler.tags = ['anime']
handler.help = ['asuna']
handler.premium = false
handler.limit = true

export default handler