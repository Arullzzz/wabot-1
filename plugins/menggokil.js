
let handler = async (m, { conn, args, command, usedPrefix }) => {
  if (!args[0]) return m.reply(`Reply video dengan command /${command}`)
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	if (/video/.test(mime))
	
	{
		let vid = m.quoted ? { message: { [m.quoted.mtype]: m.quoted }} : m
m.reply('Loading')
		 await conn.downloadAndSaveMediaMessage(vid, './src/sw').then(() => m.reply('Sending...'))
	} else throw 'Reply videonya!'
let dur = args[0] || '9'
let isi = require('fs').readFileSync ('./src/sw.mp4')
await conn.sendFile(m.chat, isi, 'pler' + '.mp4', `
 Y
 © ${conn.user.name}
`.trim(), m, false, {
  
ptt: false, duration: dur, thumbnail: global.thumb })
}

handler.help = ['bugv', 'bugvideo']
handler.tags = ['tools']
handler.command = /^bug(v|video)$/i
handler.owner = false

module.exports = handler
