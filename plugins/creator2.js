import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'creator') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; äºð°ð²ðð-ð´ð«à¼\nNICKNAME:ð Owner à¼ºððððð½ððà¼»\nORG: äºð°ð²ðð-ð´ð«à¼\nTITLE:soft\nitem1.TEL;waid=6282281657946:+62 822-8165-7947\nitem1.X-ABLabel:ð Nomor Owner\nitem2.URL:https://bit.ly/AboutKyyFC\nitem2.X-ABLabel:ð¬ More\nitem3.EMAIL;type=INTERNET: gendonmenjeng@gmail.com\nitem3.X-ABLabel:ð Mail Owner ZiroBot\nitem4.ADR:;;ð®ð© Indonesia;;;;\nitem4.X-ABADR:ð¬ More\nitem4.X-ABLabel:ð Lokasi Saya\nBDAY;value=date:ð ,04 Maret 2007\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `ð Hai *@${who.split("@")[0]}*, Nih Owner Saya kak`
    await conn.sendButton(m.chat, caption, author, null, [['ð¨Sapa Owner', 'Huuu']], m, { quoted: fkontak, mentions: conn.parseMention(caption) })
}
if (command == 'own') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6282281657946:+62 822-8165-7946\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku , jangan di spam ya `,m)
  }
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(creator|own)$/i

export default handler