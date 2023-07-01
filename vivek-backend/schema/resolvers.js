const User = require("../model/user");

const resolvers = {
  Query: {
    getUser: async () => {
      return await User.find();
    },
  },

  Mutation: {
    createUser: async (_, args) => {
      console.log(args.UserInput);
      const newUser = new User({
        name: args.UserInput.name,
        email: args.UserInput.email,
        address: args.UserInput.address,
      });
      return await newUser.save();
    },
    updateUser: async (_, args) => {
      const filter = { _id: args.UserUpdate.userId };
      const update = {
        name: args.UserUpdate.name,
        email: args.UserUpdate.email,
        address: args.UserUpdate.address,
      };
      return User.findOneAndUpdate(filter, update, { new: true });
    },
    deleteUser: async (_, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
  },
};

module.exports = { resolvers };
