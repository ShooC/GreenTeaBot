let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'ɴɢᴀᴋ'
  if (isAdmin) throw 'ᴜᴅʜ ᴊᴀᴅɪ ᴀᴅᴍɪɴ'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.help = ['📌']
handler.tags = ['group']
handler.command = /^📌$/i

handler.rowner = true
handler.botAdmin = true
handler.group = true

export default handler 
