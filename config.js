const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "https://trendybeatz.com" ;  
global.video= "www.youtube.com" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email =""
global.location="Africa,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/calabar";
global.github=process.env.GITHUB|| "https://chat.whatsapp.com/KEG60dJcOVVH4kbGkwUkKE";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/KEG60dJcOVVH4kbGkwUkKE";
global.website=process.env.GURL || "https://chat.whatsapp.com/KEG60dJcOVVH4kbGkwUkKE" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d2b7e8ddee4ff96395242.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝔼MMY HENZ²²¹-𝕏-𝕎ℍ𝔸𝕋𝕊𝔸ℙℙ 𝔹𝕆𝕋!" 


global.devs = "2349125042727" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349125042727";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/cf7a4f512266ede997652.mp4" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234912504272";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349125042727,923xxxxxxxx";

global.api_smd = "https://chat.whatsapp.com/KEG60dJcOVVH4kbGkwUkKE" //  || "https://https://chat.whatsapp.com/KEG60dJcOVVH4kbGkwUkKE" // expires
global.scan = "https://chat.whatsapp.com/KEG60dJcOVVH4kbGkwUkKE";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_35_08_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyLFxuICAgICAgICA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDY4LFxuICAgICAgICA0MixcbiAgICAgICAgMjMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NixcbiAgICAgICAgNzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAxODUsXG4gICAgICAgIDkzLFxuICAgICAgICA2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA0LFxuICAgICAgICA1NixcbiAgICAgICAgMTk3LFxuICAgICAgICAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODksXG4gICAgICAgIDE0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzLFxuICAgICAgICA5OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxODksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MixcbiAgICAgICAgMTg0LFxuICAgICAgICA0NyxcbiAgICAgICAgMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWm5XNnlFMm4xQmpKeUM2dXlDcFAvZXlpMHhYblVmVS9ZTVBXYUlqSEdnQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM0l6MjVSNFBTYUdVNGMwMW5adUpjd1wiLFxuICBcInBob25lSWRcIjogXCI1MzYzNmZhZS1kMjg4LTQ3ZTYtODAyYi0yYWUzMWI2Y2I1NGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDIsXG4gICAgICAyNTIsXG4gICAgICA2MCxcbiAgICAgIDI2LFxuICAgICAgMjExLFxuICAgICAgMzksXG4gICAgICAxNjIsXG4gICAgICAyOSxcbiAgICAgIDY1LFxuICAgICAgMTY1LFxuICAgICAgMTgzLFxuICAgICAgNTUsXG4gICAgICAzOCxcbiAgICAgIDE1NyxcbiAgICAgIDQsXG4gICAgICAxODgsXG4gICAgICAxMzYsXG4gICAgICAxNDksXG4gICAgICAxODcsXG4gICAgICAyMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgMTQ4LFxuICAgICAgOSxcbiAgICAgIDIwMCxcbiAgICAgIDIxNSxcbiAgICAgIDIwOCxcbiAgICAgIDE1MyxcbiAgICAgIDIyMixcbiAgICAgIDE4NyxcbiAgICAgIDU3LFxuICAgICAgMjI0LFxuICAgICAgMzQsXG4gICAgICAzOCxcbiAgICAgIDI5LFxuICAgICAgODMsXG4gICAgICAxNjMsXG4gICAgICAxODUsXG4gICAgICA5NixcbiAgICAgIDEyLFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJaS01XMVBSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTI1MDQyNzI3OjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODMwNzM0ODQzNjE5MDc6NDBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTit0MTVRQ0VQeU11YllHR0NjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrYWI2REtHSUwxVXZyMEQ1UDlFRTdaZGZ2Tk9LZHN4OWhGeXlqS3p0N2tBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9PTjAvcHIwR1NmWGdlMHNVWnIxcTlWdWtoc0tIaVB0Y21QMk55TWFvSFh6bEZtemVvNGZmZkxKemhmQnhuWGl5QXFXTUJlL2VEZ3RHZ012QURneUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhycDUxU1E4a0ZxUkpYYjd2byt4RkRleDFiRkxLdDNaTWR6c0piNE80bVhzblgzSmVhWm9qQ1VPRDlYSVIvT1lubGJWb0V4ZGE4d0FucGRsZW1JOGhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjUwNDI3Mjc6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI0Nzk0NDk1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝔼MMY HENZ-𝕍1👑 』```", //*『sᴜʙsᴄʀɪʙᴇ • 𝔼MMY HENZ-𝕍1👑』*\n youtube.com/"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝔼MMY HENZ MEDIA-𝕍1👑",
  ownername:process.env.OWNER_NAME|| "𝔼MMY HENZ👑",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝔼MMY HENZ-𝕍1👑"  ).toUpperCase(),



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
