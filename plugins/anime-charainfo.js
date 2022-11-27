import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan Nama Characternya!\nContoh: #chara Rimuru`
  try {
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/character', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, alternative_names, url, image_url, mal_id, type } = json.results[0]
let charaingfo = `[ *ᴄʜᴀʀᴀᴄᴛᴇʀ* ]
🏷️ *ɪᴅ ᴋᴀʀᴀᴋᴛᴇʀ:* ${mal_id}
👤 *ɴᴀᴍ:* ${name}
✏️ *ɴɪᴄᴋɴᴀᴍᴇ:* ${alternative_names}
🎨 *ᴛɪᴘᴇ ᴋᴀʀᴀᴋᴛᴇʀ:* ${type === undefined ? 'Default' : type}
📺 — *ʟɪɴᴋ ʙᴜᴀᴛ ɴᴏɴᴛᴏɴ:* ${url}`

  conn.sendFile(m.chat, image_url, '', charaingfo, m)
 } catch {
  m.reply('ᴛɪᴅᴀᴋ ᴅɪᴛᴇᴍᴜᴋᴀɴ.. :(\nMungkin Coba kata kunci lain?')
 }
}
handler.help = ['character (ɴᴀᴍᴀ)']
handler.tags = ['anime']
handler.limit = true
handler.command = /^(character|chara)$/i
//kyaa jangan biarkan wabot-aq terbengkalai sampai nurutomo kembali
// Command - Re Edited -- TOXIC-DEVIL == || Character Type ||
export default handler 