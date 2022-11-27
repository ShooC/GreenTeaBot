/**
 * Jangan Di Hapus!!
 * 
 * Ingin bikin fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6288279268363
 * 
 */


export async function before(m) {
	if (!m.chat.endsWith('@s.whatsapp.net')) return !0;
	this.menfess = this.menfess ? this.menfess : {}
	let mf = Object.values(this.menfess).find(v => v.status === false && v.penerima == m.sender)
	if (!mf) return !0
	console.log(m)
	if (m.text === 'ʙᴀʟᴀs ᴘᴇsᴀɴ' && m.quoted.mtype == 'buttonsMessage') return m.reply("Silahkan kirim pesan balasan kamu.");
	let txt = `ʜᴀʟᴏ ᴋᴀᴋ @${mf.dari.split('@')[0]}, ᴋᴀᴍᴜ ᴍᴇɴᴇʀɪᴍᴀ ʙᴀʟᴀsᴀɴ ɴɪʜʜ\n\nᴘᴇsᴀɴ ɴʏᴀ:\n${m.text}\n`.trim();
	await this.reply(mf.dari, txt, null).then(() => {
		m.reply('ʙᴀʟᴀsᴀɴ ᴛᴇʀᴋɪʀɪᴍ.')
		this.delay(1000)
		delete this.menfess[mf.id]
		return !0
	})
}
