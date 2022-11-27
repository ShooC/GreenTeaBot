import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://myselfff.herokuapp.com/docs/anime/nezuko'
	conn.sendButton(m.chat, 'ᴅᴏɴᴇ', wm, await(await fetch(url)).buffer(), [['ɴᴇxᴛ ɪᴍᴀɢᴇ',`.${command}`]],m)
}
handler.command = /^(nezuko)$/i
handler.tags = ['anime']
handler.help = ['nezuko']
handler.premium = false
handler.limit = true

export default handler