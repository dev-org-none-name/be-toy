import client from "@libs/client";

const findUserByUsername = async (username) => {
  return client.user.findUnique({
    where: {
      username,
    },
  });
};
module.exports = {
  findUserByUsername,
};
