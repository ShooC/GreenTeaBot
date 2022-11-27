import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `ᴛɪᴋᴛᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ\n\nᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ ᴛɪᴋᴛᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ:\n#ᴛɪᴋᴛᴏᴋ (ʟɪɴᴋ)`

  const { author: { nickname }, video, description } = await tiktokdl(args[0])
        .catch(async _ => await tiktokdlv2(args[0]))
        .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw 'Can\'t download video!'
    conn.sendHydrated(m.chat, `${htki} ᴛɪᴋᴛᴏᴋ ᴡᴍ ${htka}`, `➔ ɴɪᴄᴋɴᴀᴍᴇ ${nickname}${description ? `\n➔ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:\n${description}` : ''}`, await (await fetch(url)).buffer(),
        url, 'sᴜᴍʙᴇʀ ᴠɪᴅᴇᴏ', null, null, [
        ['ʙᴀᴄᴋ ᴛᴏ ᴍᴇɴᴜ', `.menu`],
        ['ᴘᴇᴍɪʟɪᴋ ʙᴏᴛ', `.creator`],
        [null, null]], m)
}
handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i
handler.private = true
handler.limit = true

export default handler
