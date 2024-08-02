const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Ř　Å　H　Ü　 L　ツ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "919547261290";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919547261290";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_25_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDMyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM5LFxuICAgICAgICA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQyLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDk3LFxuICAgICAgICAzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODksXG4gICAgICAgIDUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzksXG4gICAgICAgIDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDExLFxuICAgICAgICA1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA1LFxuICAgICAgICAzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDg1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDg2LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxODIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI4LFxuICAgICAgICA1NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDc4LFxuICAgICAgICA0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgOCxcbiAgICAgICAgMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODcsXG4gICAgICAgIDI5LFxuICAgICAgICA2NCxcbiAgICAgICAgNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDg2LFxuICAgICAgICA2NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxODgsXG4gICAgICAgIDkxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjExLFxuICAgICAgICA5MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIktrTW5YaDYrWk5OUzZYaVhOWklUdzV0YTFBYzI4R2dMUzVoOG9GUzh3R009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJJWl85d0FPVGRtblBwLTBvd0FYa0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjlmNTBkZWMtOTI0Zi00MTJmLTg2YzYtZTZkMjU4NGM3MDFmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDc3LFxuICAgICAgMSxcbiAgICAgIDQ5LFxuICAgICAgMTk2LFxuICAgICAgMjMsXG4gICAgICA4LFxuICAgICAgNjcsXG4gICAgICA2NSxcbiAgICAgIDIyNSxcbiAgICAgIDg1LFxuICAgICAgMjcsXG4gICAgICAxNjUsXG4gICAgICAxOCxcbiAgICAgIDE1MCxcbiAgICAgIDMyLFxuICAgICAgMTQsXG4gICAgICA1OSxcbiAgICAgIDczLFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjIsXG4gICAgICA0OCxcbiAgICAgIDU1LFxuICAgICAgNTQsXG4gICAgICAxMDgsXG4gICAgICAxMTQsXG4gICAgICAyMzksXG4gICAgICA2NyxcbiAgICAgIDY5LFxuICAgICAgMTMxLFxuICAgICAgMTgyLFxuICAgICAgMTM1LFxuICAgICAgMjAsXG4gICAgICAxNjcsXG4gICAgICA5MyxcbiAgICAgIDIwOCxcbiAgICAgIDMsXG4gICAgICAyMjEsXG4gICAgICAxNDIsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPNjV6WDRReHFDenRRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImg4Wk56OUloSHJ6Wi81RFhodUNNUVM3cmZPc0grV2hTQ2xYVGJDSVE5ejg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOEhrcjNDU3o3MXAwajYxcjc5STFDZnNlYnRrTkZZZ3p3NHVtaVI1cFlVaWJRQ2RtUm1mamRtZHYwb21zTDV1WFd5bkpVOERpVVNTMDd2ckRYNGdkQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM3hKdjF6SUQxRHUyRXFZT3VTV2FsSHNwa3lScUZjTEJINkZCbXZraHZIangvUnhELzl4b2MxOGlnVWRsZGxxY2NTcHRveS9uald2OS9PeHRETVQvaUE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTkwODMzNjY1NjQ6NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLhrIrhrIFQcs654aWS1p/hjZ3hpbThpbFzc+GsiuGsgVwiLFxuICAgIFwibGlkXCI6IFwiMTkyMjA0MzQ5OTExMTU5OjcwQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5MDgzMzY2NTY0OjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2MDE1NDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDL3JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNfX3IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzNVBlQTVGUkVNTHFZMHZTTmlsMXRLYitvelkwUDVOUWNnTEUzeDY1b2hFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI2NTUxMDEyNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNjAxNTQ4MDM0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Ř　Å　H　Ü　 L　ツ",
  packname: process.env.PACK_NAME || "Ř　Å　H　Ü　 L　ツ",
  botname : process.env.BOT_NAME  || "Ř　Å　H　Ü　 L　ツ",
  ownername:process.env.OWNER_NAME|| "Ř　Å　H　Ü　 L　ツ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
