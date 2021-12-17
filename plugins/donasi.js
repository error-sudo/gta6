let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Axis [083153449622]
│ • Gopay [083153449622]
│ • Saweria [https://saweria.co/cyberdark]
╰────
╭─「 Hubungi 」
│ >Ingin donasi? Wa.me/6283153449622
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
