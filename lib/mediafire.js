// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈

//▮🐼🥷🗽bots ®️ALL RIGHTS RESERVED

//▮

//▮FORK AND DON'T FORGET TO GIVE A STAR

//▮

//▮THIS SOFTWARE IS UNDER UZ COPYRIGHT

//▮

//▮REPORT ABUSE OF THIS SOFTWARE EMAIL US

//▮tuffgamer@gmail.uk

//▮WHATSAPP US : +254 112386921

//▮YOUTUBE CHANNELL: Cyberpunk 🐼

//▮

//╰▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

//

//┏━━━━━━━━━━━━━━━━━━━━━━━━━

//┃THIS SOFTWARE INCLUDES 

//┃SOME ENCRYPTED FILES

//┃

//┃THANKS FOR CHOOSING 🥷🗽🐼🪲📱🕸️🛫🛸🪬🖱️🖥️🐛🪳☣️🐞💻🕷️🛍️🛒BOT

//┃THANKS TO TOpPLUG 

//┗━━━━━━━━━━━━━━━━━━━━━━━━━

//

const axios = require('axios')

const cheerio = require('cheerio')

const mediafireDl = async (url) => {

const res = await axios.get(url) 

const $ = cheerio.load(res.data)

const hasil = []

const link = $('a#downloadButton').attr('href')

const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')

const seplit = link.split('/')

const nama = seplit[5]

mime = nama.split('.')

mime = mime[1]

hasil.push({ nama, mime, size, link })

return hasil

}

module.exports = { mediafireDl }
