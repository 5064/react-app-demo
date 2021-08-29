
import {Users} from './data.js'

export const resolvers = {
  users: async (_) => {
    return Users;
  },
  user: async ({ id }, context) => {
    return Users.find((user) => user.id == id)
  }
};