const { Client, Intents } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const readline = require('readline-sync');
const m = require("moment-duration-format");
const exp = require('express'); 
const s = exp();

const client = new Client({
  checkUpdate: false
});

s.all('/', (req, res) => { 
  res.send("Ready Dek") 
 })

s.listen(8080, () => { 
  console.log("Port : 8080") 
 })

client.on('ready', async () => {

        if (global.dataWeather && global.dataWeather.current_weather) {
          global.temp = global.dataWeather.current_weather.temperature;
          global.wind = global.dataWeather.current_weather.windspeed

        } else {
          global.temp = 25
          global.wind = 3.5
        }

 const num = parseFloat((Math.random() * 0.2 + 0.1 + Number.EPSILON).toFixed(1));
        const operator = Math.random() < 0.3 ? '+' : '-';

  setInterval(() => {
    const moment = require('moment');
    const created = moment().format('YYYY-MM-DD HH:mm:ss ');
    const change = ['https://cdn.discordapp.com/attachments/1139566233855987824/1210206515101696000/omserver.gif?ex=65e9b7a5&is=65d742a5&hm=abb3b4bb5823b58800af5b55c3ed426e0a9ea1492adec1ecfc284503f62dd833&','https://cdn.discordapp.com/attachments/1102239223681130516/1210206748489683014/robserver.gif?ex=65e9b7dd&is=65d742dd&hm=5763e250e2909d6e9e0c5d5e3672924d84e476983da31a1bd2fbab0d22becd5b&','https://cdn.discordapp.com/attachments/1139566233855987824/1210208418753683567/vesav.gif?ex=65e9b96b&is=65d7446b&hm=e2b0e407363e540b95eeddc4837adc921b4d756b4aa0765327268bb2f0accf24&']; //รูปใหญ่
    const poop = ['https://cdn.discordapp.com/attachments/1102239223681130516/1210205638286643280/vb111.gif?ex=65e9b6d4&is=65d741d4&hm=b74e5b6e395ce9d62400f1615014e9994c3ddf400403aadca120baae5093106b&']; // รูปเล็ก
    const change2 = ['ติดต่อสอบถาม DM','รับเติม ไนโตร จ้าาา','IG : gxmummy_2']; // ชื่อสลับ
    const yyyt = ['Nitro Shop']; // ชื่อ button1
    const ddds = ['https://discord.gg/6zQHtmzzVT']; // ลิ้ง button1

   const iooi = ['Instagram']; // ชื่อ button 2
   const iiio = ['https://www.instagram.com/gxmummy_2']; // ลิ้ง button 2
   const tyyy = yyyt[Math.floor(Math.random()*yyyt.length)]; // ชื่อ button 2
   const sddd = ddds[Math.floor(Math.random()*ddds.length)]; // ลิ้ง button 2
   const oooi = 
iiio[Math.floor(Math.random()*iiio.length)]; // button 1 ใส่ลิ้ง
    const ioii =
iooi[Math.floor(Math.random()*iooi.length)]; // button 1 ใส่ชื่อ
    const popp =
poop[Math.floor(Math.random()*poop.length)]; // รูปเล็ก
    const ssss = 
change[Math.floor(Math.random()*change.length)]; // รูปใหญ่
    const dwada = change2[Math.floor(Math.random()*change2.length)]; // ชื่อสลับคำ
    const r = new Discord.RichPresence()
      .setApplicationId('1112701450150232085')
      .setType('STREAMING')
      .setURL('https://www.youtube.com/watch?v=yFg7_bjl2-k')
      .setState(`◞ʚ𝐌𝐮𝐦𝐦𝐲 ও`)
      .setName(`RobShop`)
      .setDetails(`${dwada}`)
      .setAssetsSmallImage(`${popp}`) 
.setAssetsLargeImage(`${ssss}`)
      .setAssetsLargeText(`꒰ ${getTime()} ꒱ ${moment().format('• ꒰ DD/MM/YYYY ꒱')}`)
.setAssetsSmallText(`ping : ${Math.round(client.ws.ping)}`)
.addButton(`${ioii}`,`${oooi}`)  
.addButton(`${tyyy}`,`${sddd}`)
//.setStartTimestamp("1672545600" || Date.now())
//.setEndTimestamp("1704077999" || Date.now())
    client.user.setActivity(r);
  }, 5*1000); // อัพเดท ทุกๆ 7 วินาที
  console.log(`${client.user.username} Is Ready!`)
});


client.login(process.env.token)



   let endTime = new Date().setHours(24 + 6, 0, 0, 0), //nextMidnight
  today = new Date().setHours(0, 0, 0, 0), //lastMidnight
  dayCount = Math.floor( 
    (today - new Date(2023, 0).getTime()) / (24 * 60 * 60 * 1000) 
  )

var date = new Date().getDate() + "/"+ (new Date().getMonth()+1)  + "/" + new Date().getFullYear();
    var time = new Date().getHours() + ":"+ new Date().getMinutes();

let options = {
    timeZone: 'Asia/Bangkok',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  };

  function getDate() {
    return (new Date()).toLocaleString([], options).split(" ")[0].replaceAll(",", "");
  }
  function getTime() {
    return (new Date()).toLocaleString([], options).split(" ")[1].replaceAll(",", "");
          }
