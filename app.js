process.chdir(__dirname)
const Discord=require('discord.js')
let nepora=["ghbdtn","rfr","ult","rjulf","pfxtv","ltkfnm","vjq","nt,t","cjcb","ghjcnj", "pfqlb", "yfcnhjqrb","lfkmit","cvj;tim","ghbxtv","jyj","gthtdjlbn","gj,tlbk","gj,tlbkf","xnj","'nf","cltkfk",",eltn","gjktpty","gjktpyf","[jhjij","[jhjifz","cegth","vj;tim","hfpujdfhbdf.","'nj","crfpfk","evysq"]
let token=process.env.TOKEN || process.argv[2]
let developers=["343046183088029696","242975403512168449","428036906723573760"]
const client=new Discord.Client();client.login(token)
let translitor=require("./translitor")
console.log(translitor.trEnRu("ghbdtn"))
client.on("ready", ()=>{
  client.user.setActivity("%help")
})
client.on("guildMemberAdd", (member)=>{
    if(member.guild.id == 540192529933664297){
        member.addRole(member.guild.roles.find('name', "Member"))
    }
})
client.on('message',(message)=>{
    let args=""
    for(let x=1;x<message.content.split(" ").length;x++){

        args = args+message.content.split(" ")[x]+" "
    }
 if(message.content.toLowerCase().startsWith("%donate")){
     let mn=args||"5"
  return   message.reply("Вы можете поддержать моих разработчиков по этим ссылкам:\n Yandex.Money - https://xerl.ga/donate.js?money="+mn+"\nQiwi - https://qiwi.me/xerl")
 }
 if(message.content.toLowerCase()=="%server"){
   let emb=new Discord.RichEmbed()
   .setTitle("Server info")
   .setColor("#2E190F")
   .setAuthor("Xerl")
   .setFooter("Server info")
   .setDescription(`
Имя сервера - ${message.guild.name}
ID сервера - ${message.guild.id}
ID этого канала - ${message.channel.id}
Кол-во людей на сервере - ${message.guild.members.size}
Кол-во ролей на сервере - ${message.guild.roles.size}
Кол-во каналов на сервере - ${message.guild.channels.size}
Степень верификации - ${message.guild.verificationLevel}
Регион сервера - ${message.guild.region}
Создатель сервера - ${message.guild.owner}

     `)
  return   message.channel.send(emb)
 }
 if(message.content.toLowerCase().startsWith("%donators")){
   let emb=new Discord.RichEmbed()
   .setTitle("Top of donators")
   .setColor("#2E190F")
   .setAuthor("Xerl")
   .setFooter("xerl donators")
   .setDescription(`
1.Баклажан (крадётся)#0900 - 100 RUB. Коментарий - "МУСОРА СОСАТЬ"
     `)
  return   message.channel.send(emb)
 }
 if(message.content.toLowerCase().startsWith("%help")){
   let emb=new Discord.RichEmbed()
   .setTitle("Xerl help and community")
   .setColor("#2E190F")
   .setAuthor("Xerl")
   .setFooter("xerl communuty")
   .setDescription(`
Префикс бота - %
Команды бота:
tr - перевести текст с английской раскладки на русскую
ping - узнать данные бота
donate - помочь раработчикам бота деньгами
donators - узнать список людей, которые помогли боту пожертвованием
invite - пригласить бота на свой сервер
server - узнать информацию о сервере 
evil :smiling_imp: - только для разработчиков
Наше комьюнити - https://discord.gg/cpq85sw
     `)
  return   message.channel.send(emb)
 }
if(message.content=="%ping"){
    let emb=new Discord.RichEmbed()
    .setAuthor("Xerl ping")
    .setColor("#2E190F")
    .setFooter("Ping")
    .setDescription(`Я занимаю ${Math.round(process.memoryUsage().rss/ 1024 / 1024)}мб RAM \n Мой пинг ${Math.round(client.ping)} ms \n Я присутствую на ${client.guilds.size} серверах \n Пользователей у меня ${client.users.size} \n Я есть на ${client.channels.size} каналах`)
    .setTitle("PING")
  return message.channel.send(emb)
}
if(message.content.toLowerCase()=="%invite"){
    return message.reply("Меня можно пригласить на свой сервер по этой ссылке: https://xerl.ga/invite.js")
}

if(message.content.startsWith("%tr")){
  return   message.reply(translitor.trEnRu(String(args).toLowerCase()))
}
    if(message.content.startsWith('%evil')){
if(developers.includes(String(message.author.id))){
    let evresult
    try{ evresult=eval(args)}catch(ex){
        let emb=new Discord.RichEmbed()
.setAuthor("Чето все хуево")
.setColor("#2E190F")
.setFooter("Mice is great")
.setDescription("мне стало хуево по этой причине:\n "+ ex)
.setTitle("EVIL")
return message.channel.send(emb)

    }

let emb=new Discord.RichEmbed()
.setAuthor("Evil results")
.setColor("#2E190F")
.setFooter("Mice is great")
.setDescription("RESULTS:\n "+ evresult)
.setTitle("EVIL")
return message.channel.send(emb)
}else{return message.channel.send("Вы не имеете на это права!")}
    }
for(x=0;x<message.content.toLowerCase().split(" ").length;x++){
    if(nepora.includes(message.content.toLowerCase().split(" ")[x])){
        return message.reply("Возможно вы имели в виду \""+translitor.trEnRu(message.content.toLowerCase())+"\"")
    }
}
})
// let translateparams="qйwцeуrкtеyнuгiшoщpз[х]ъaфsыdвfаgпhрjоkлlд;ж'эzяxчcсvмbиnтmь,б.ю"
// function translit(text, tp) {
//     let tpa=tp.split("")
//     let tr=tp
//     for(x=0;x>=tpa.length;x=+2){
//         tr=tr.replace(tpa[x-1],tpa[x])
//     }
//     return tr
// }
// console.log(translit("ghbdtn",translateparams))
