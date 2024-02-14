module.exports = {
  showStats: false, // Booleen | true / false
	website: {
		protocol: 'http://', // https:// or http://
		domain: 'Logistack', // website link without protocol ex. bot-website.akg2349.repl.co
		port: 3000,
    cookieSecret: 'ImmerseArt' // Cookie secret | charaters used store client data
	},
  bot: {
    name: 'ImmerseArt', // Bot Name
    token: '', // Bot token if showing Stats
    logo: 'https://cdn.discordapp.com/attachments/1193516938798837846/1200804318996078712/AAA.png?ex=65c7832b&is=65b50e2b&hm=9bbbe096f619fbd63ff451478a9699c4beb537cb097bf89c72fd8491d96875c9&', //Bot Logo used in embeds and favicon
    description: `I'm ImmerseArt, an Image Gen Bot packed with all Features and  Events you'll need for your Artistery.
`, //description of your bot used in embed and website
    support: 'https://discord.gg/PAsReT4Jak', // support server url of your bot
    invite: 'https://discord.com/api/oauth2/authorize?client_id=1182552899935543366&permissions=67584&scope=bot', // invite link of your bot
    botlist: 'https://discordbotlist.com/bots/immerseart/upvote', // Voting website Ex. top.gg
    feature1: {
      main: 'Text to Image', // Feature 1 Heading
      description: 'ImmerseArt uses text to image tools to create your stunning images.' // Feature 1 Description
    },
    feature2: {
      main: 'DM System', // Feature 2 Heading
      description: 'ImmerseArt also works in DMs.' // Feature 1 Description
    },
    feature3: {
      main: 'Talks', // Feature 3 Heading
      description: 'This amazing being can also Talk!' // Feature 1 Description
    }
  },
  img: {
    img1: 'https://media.discordapp.net/attachments/1193516938798837849/1201057421108449371/image.png?ex=65c86ee3&is=65b5f9e3&hm=8665a24ffa70b0f5acb6a2241ff9b7c2fd5664f5e87265df3a041179d2ff919f&=&format=webp&quality=lossless', // help cmd image of your bot ex. https://cdn.discordapp.com/attachments/868823136538333184/889852973713354823/Capture.PNG
    img2: 'https://media.discordapp.net/attachments/1193516938798837849/1201057701581561886/image.png?ex=65c86f26&is=65b5fa26&hm=5fed8d51e6f523dc46ae97143f79c959d2620848e6355e861fe66419fe99aba8&=&format=webp&quality=lossless&width=337&height=664' // most famous command image of your bot Ex. https://cdn.discordapp.com/attachments/868823136538333184/889853204697849926/Capture.PNG
  }
  
};
