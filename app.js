process.chdir(__dirname)
const Discord=require('discord.js')
let token=process.env.TOKEN || process.argv[2]
let developers=[343046183088029696]
const client=new Discord.Client();client.login(token)

client.on('message',(message)=>{
    let args=""
    for(let x=1;x<message.content.toLowerCase().split(" ").length;x++){
        args = args=+message.content.toLowerCase().split(" ")[x]+" "
    }
    args=args.split(" ")
    if(message.content.toLowerCase().startsWith('%evil')){
if(developers.includes(message.author.id)){
    let evresult=eval(args.join(" "))
let emb=new Discord.RichEmbed()
.setAuthor("Evil results")
.setColor("#2E190F")
.setFooter("Mice is great")
.setDescription("RESULTS:\n "+ evresult)
.setTitle("EVIL")
}
    }
})

