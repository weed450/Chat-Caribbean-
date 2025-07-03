
import CommandLog from '../models/CommandLog.js';
import User from '../models/User.js';

export default function handleCommand(socket, io) {
  socket.on("command", async ({ command, args, room }) => {
    const user = socket.user;
    const role = user.role;
    const [cmd, ...rest] = command.trim().split(" ");

    try {
      switch(cmd) {
        case "/kick":
        case "/mute":
        case "/ban":
          // Logique pour chaque commande...
          break;
        default:
          throw "Commande inconnue";
      }
    } catch (err) {
      socket.emit("commandError", { message: err.toString() });
      await CommandLog.create({
        user: user._id,
        command: cmd,
        arguments: rest,
        room,
        role,
        status: "fail",
        details: { error: err.toString() }
      });
    }
  });
}
