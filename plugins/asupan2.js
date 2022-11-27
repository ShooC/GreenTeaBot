import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ ${usedPrefix}${command} gheayubi`
	let sayang = await fetch(`https://saipulanuar.ga/api/info/randomtt?user=${args[0]}&apikey=${bear}`)
  let json = await sayang.json()
    if (sayang.status !== 200) throw await sayang.text()
    if (!json.status) throw json
  let babi2 = json.result.video
	let babi = await(await fetch(babi2.url)).buffer()
  await conn.sendFile(m.chat, babi, 'ᴀsᴜᴘᴀɴ.mp4', `*Caption:* ${json.result.video.caption}
${json.result.video.plays} ᴅɪᴛᴏɴᴛᴏɴ
${json.result.video.likes} ʟɪᴍᴇ
${json.result.video.comments} ᴋᴏᴍᴇɴᴛᴀʀ
${json.result.video.share} ᴅɪ sʜᴀʀᴇ
${json.result.video.ago}` , m)
}
handler.command = /^asupan2$/i

handler.premium = true
handler.fail = null
handler.register = true

export default handler