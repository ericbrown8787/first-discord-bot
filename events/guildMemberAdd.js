const Discord = require("discord.js");

module.exports = {
  name: "guildMemberAdd",
  async execute(member) {
    console.log("New Member:", member);
    member.guild.channels.cache;
    //   .get("983501610116317204")
    //   .send(`${member.user} has joined the server!`);

    const newMemberEmbed = new Discord.MessageEmbed().setColor("22ff44");

    // if (!interaction.isCommand()) return;

    // const command = interaction.client.commands.get(interaction.commandName);

    // if (!command) return;

    // try {
    //   await command.execute(interaction);
    // } catch (err) {
    //   if (err) console.error(err);
    //   await interaction.reply({
    //     content: "An error occurred while executing this command.",
    //     ephemeral: true,
    //   });
    // }
  },
};
