module.exports = {
	name: 'ping',
  description: 'replies with pong',
  execute(msg, args) {
      msg.channel.send('pong')
  }
};
