import { Rooms } from "./data.js";

export const resolvers = {
  rooms: async (_) => {
    return Rooms;
  },
  room: async ({ id }, context) => {
    return Rooms.find((room) => room.id == id);
  },
};
