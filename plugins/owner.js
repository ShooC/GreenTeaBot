import fetch from 'node-fetch'
import { createHash } from 'crypto'
const delay = time => new Promise(res => setTimeout(res, time))
let handler = async(m, { conn, text, usedPrefix, command }) => {
	conn.p = conn.p ? conn.p : {}
	let id = m.chat
	const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 999999,
    status: 404,
    surface : 404,
    message: `ᴄʀᴇᴀᴛᴏʀ ʙᴏᴛ`, 
    orderTitle: ``,
    thumbnail: await conn.resize(await (await fetch('https://telegra.ph/file/8a1c663c84751c10baf65.jpg')).buffer(), 300, 200) //Gambarnye

    }
    }
    }
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/8a1c663c84751c10baf65.jpg")
	conn.p[id] = [
	await conn.sendContact(m.chat, kontak2, ftroli, { contextInfo: { externalAdReply :{ 
     showAdAttribution: true, 
      }} 
   })
	]
	await delay(100)
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let cap = `ʜᴀɪ @${await m.sender.split('@')[0]}, ɪᴛᴜ ɴᴏᴍᴏʀ ᴘᴇᴍʙᴜᴀᴛ ʙᴏᴛ ɪɴɪ` 
  let buttonMessage= {
'document':{'url':'https://tiktok.com/@greenteabot'},
'mimetype':global.ddocx,
'fileName':'「 s ʜ ᴏ 」',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'https://tiktok.com/@greenteabot',
'mediaType':2,
'previewType':'pdf',
'title':`ɢʀᴇᴇɴ ᴛᴇᴀ ʙᴏᴛ`,
'body':`ʙʏ sʜᴏ`,
'thumbnail': await(await fetch(thumb)).buffer(),
'sourceUrl':'https://tiktok.com/@greenteabot'}},
'caption':cap,
'footer':`ɪᴛᴜ ɴᴏᴍᴏʀ ᴏᴡɴᴇʀ ᴋᴜ

${botdate}`,
'buttons':[
{'buttonId':'.donasi','buttonText':{'displayText':'ɢʀᴇᴇɴ ᴛᴇᴀ ʙᴏᴛ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
  await delay(100)
  return delete conn.p[id]
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

export default handler
