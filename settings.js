/**
   * Made By Fandyyy 🕴️
   * Subscribe FBOTZ YT
   * Follow https://instagram.com/_nzrlafndi
   * Follow https://github.com/FBOTZ-YT
*/

const fs = require('fs')
const chalk = require('chalk')

//Ubah Disini
global.ownerNumber = ['62895338690940','6287877173955','0']
global.ownerName = 'Yuuta X All Creator'
global.packname = 'YuutaGanz'
global.author = 'YuutaBotz'
global.prefa = ['','!','.','#','!'] //Ilangin Prefix Yang '' Kalau Gamau No Prefix
global.sessionName = 'sesi'

//Message Nya Ubah Disini
global.mess = {
admin: 'You Are Not Admin!',
botAdmin: 'Bot Not Admin!',
botOwner: 'You Are Not My Owner!',
group: 'Only Group!',
private: 'Only Private Chat',
wait: 'Loading... Sabar Todd',
done: 'Done!'
}

//Sesuaikan
global.thumb = fs.readFileSync('./media/SAVE_20220618_164334.jpg')
global.donasi = fs.readFileSync('./media/SAVE_20220618_170434.jpg')
global.thumbnail = fs.readFileSync('./media/SAVE_20220505_192535.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
