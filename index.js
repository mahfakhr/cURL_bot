const { Telegraf } = require('telegraf');
const exec = require('child_process').exec;
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);

function execCurl() {
	try {
		bot.start((ctx) => {
			ctx.reply('please enter the cURL');
		});
		bot.hears(/curl/i, (ctx) => {
			const command = ctx.message.text;
			child = exec(command, function (error, stdout, stderr) {
				if (error !== null) {
					ctx.reply('exec error: ' + error);
				} else {
					ctx.reply(`stdout: ${stdout}`);
				}
			});
		});
		bot.launch();
	} catch (ex) {
		console.log(ex);
	}
}

execCurl();
