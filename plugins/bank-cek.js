let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
â§ã *BANK CEK* ã
â ð *É´á´á´á´:* ${user.registered ? user.name : conn.getName(m.sender)}
â ð³ *á´á´á´:* ${user.atm > 0 ? 'Level ' + user.atm : 'âï¸'}
â ðï¸ *Êá´É´á´:* ${user.bank} ð² / ${user.fullatm} ð²
â ð¹ *Êá´Êá´É´á´á´:* ${user.money} ð²
â ð¤ *Êá´Êá´:* ${user.robo > 0 ? 'Level ' + user.robo : 'âï¸'}
â ð *sá´á´á´á´s:* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
â ð *á´á´Êá´á´Òá´á´Ê:* ${user.registered ? 'Yes':'No'}
âââÂ·Â·Â·
`.trim()
  conn.sendButton(m.chat, caption, global.wm, 'https://telegra.ph/file/0451b07945f7f9633b59b.jpg', [`Inventory`, '.inv'],m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i

handler.register = false
export default handler