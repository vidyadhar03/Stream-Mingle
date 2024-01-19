import { User } from "./UserManager";

let GLOBAL_ROOM_ID = 1;

interface room{
    user1:User,
    user2:User
}

export class RoomManager {
    private rooms : Map<string,room>

  constructor() {
    this.rooms= new Map<string,room>()
  }

  createRoom(user1: User, user2: User) {
    const roomID = this.generate();
    this.rooms.set(roomID.toString(),{
        user1,
        user2
    })
  }

  generate() {
    return GLOBAL_ROOM_ID++;
  }
}
