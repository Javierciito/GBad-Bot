import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
𝑪𝒓𝒆𝒂𝒅𝒐𝒓
Wa.me/50762666666

𝑨𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒓 :𝑫𝒓𝒖𝒑𝒊𝒊
Wa.me/50760000000

𝑨𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒓 :𝑶𝒛𝒂𝒓𝒌
Wa.me/50768888888

⸫ *Eso son los contactos para ti.*\n⸫ *That's the contacts for you.*`.trim()   
let buttonMessage= {
'document': { url: `${md}` },
'mimetype': `application/${document}`,
'fileName': `〩 βᴀɴᴅᴏʟᴇʀᴏ$`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': `${md}`,
'mediaType': 2,
'previewType': 'pdf',
'title': '@𝑯𝒖𝒆𝒗𝒊𝒊𝒕𝒐𝒅𝒆𝒍𝒆𝒄𝒉𝒆',
'body': wm,
'thumbnail': fs.readFileSync('./media/menus/Menu3.jpg'),
'sourceUrl': yt }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚'}, type: 1}, 
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: '🐈 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 | 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣'}, type: 1}, 
{buttonId: `${usedPrefix}allmenu`, buttonText: {displayText: '💫 𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪'}, type: 1}],
'headerType': 6 }

await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await m.reply(`𝑪𝒓𝒆𝒂𝒅𝒐𝒓 Wa.me/50762666666\n𝑨𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒓 :𝑫𝒓𝒖𝒑𝒊𝒊 Wa.me/50760000000\n𝑨𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒓 :𝑶𝒛𝒂𝒓𝒌 Wa.me/50768888888`)  
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `${wm}`
let oficial = 'Comunícate con Mí Creadora por Instagram!!, Solo por ese medio puede ayudarte sobre Temas de GataBot\n\nCommunicate with My Creator on Instagram!!, Only by that means can help you on GataBot Themes'

await conn.sendHydrated2(m.chat, str, oficial, pp, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', 'https://www.instagram.com/gata_dios', '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', [
['☘ 𝙄𝙧 𝙖𝙡 𝙞𝙣𝙞𝙘𝙞𝙤 | 𝙂𝙤 𝙩𝙤 𝙨𝙩𝙖𝙧𝙩', '/menu'],
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i
export default handler 
