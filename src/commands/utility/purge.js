const BaseCommand = require('../../classes/BaseCommand');

module.exports = class extends BaseCommand {
    constructor() {
        super({
            config: {
                name: 'purge',
                description: 'clear the message',
                permission: 'User',
            },
            options: {
                aliases: ['clear'],
                cooldown: 3,
                args: false,
                usage: '',
                donatorOnly: false,
            }
        });
    }
    async run(client, message, args) {
        if (isNaN(args[0])) return message.reply("please supply a valid amount of message to purge")
      
        if (args[0] > 100) return message.reply("please supply a number less than 100")
      
      message.channel.bulkDelete(args[0])
      .then( message => message.reply(`Successfully delete \`${message.size}/${args[0]}\` message`)).then( msg => msg.delete({ timeout: 10000 }))
            .catch( error => message.reply(`error: ${error.message}`))
            }
}