import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
  let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let who = m.sender
const time = moment.tz('Asia/Jakarta').format('HH')
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let name = await conn.getName(m.sender)
  let runnya = `┏━━━ꕥ〔 *ʀᴜɴᴛɪᴍᴇ ɢᴛ ʙᴏᴛ* 〕ꕥ━⬣
┃✾ Waktu: ${time} WIB
┃✾ Aktif Selama : ${uptime}
┗━━━━━━ꕥ`
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
 await conn.sendButton(m.chat, runnya,wm + '\n\n' + botdate, intro, [['ᴍᴇɴᴜ ɢʀᴇᴇɴ ᴛᴇᴀ ʙᴏᴛ','.listmenu']], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: `ʙʏ ɢʀᴇᴇɴ ᴛᴇᴀ ʙᴏᴛ`,
                        body: `ғᴏʟʟᴏᴡ ᴛɪᴋᴛᴏᴋ ʙᴏᴛ`,                                       previewType: 0,
                        thumbnail: await (await fetch(`https://telegra.ph/file/01e70ce9d488cb97b5d60.jpg`)).buffer(),
                        sourceUrl: 'https://tiktok.com/@greenteabot'
            }
        }
    })
}


handler.help = ['runtime']
handler.tags = ['info']
handler.command = ['runtime', 'rt']
export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
