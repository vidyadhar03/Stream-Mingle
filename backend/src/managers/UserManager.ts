import { Socket } from "socket.io";

let GLOBAL_ROOM_ID = 1;

export interface User {
  name: string;
  socket: Socket;
}

export class UserManager {
  private users: User[];
  private queue: String[];

  constructor() {
    this.users = [];
    this.queue = [];
  }

  addUser(name: string, socket: Socket) {
    this.users.push({ name, socket });
    this.queue.push(socket.id);
    this.clearQueue();
  }

  removeUser(socketId: string) {
    this.users = this.users.filter((x) => x.socket.id === socketId);
    this.queue = this.queue.filter((x) => x === socketId);
  }

  clearQueue() {
    if (this.queue.length < 2) {
      return;
    }
    const user1 = this.users.find((x) => x.socket.id === this.queue.pop());
    const user2 = this.users.find((x) => x.socket.id === this.queue.pop());
    const roomID = this.generate();
    user1?.socket.emit("new-room", {
      type: "send-offer",
      roomID,
    });
  }

  generate() {
    return GLOBAL_ROOM_ID++;
  }
}
