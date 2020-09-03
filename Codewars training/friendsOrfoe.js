function filterFriends(friends) {
  const realFriends = friends.filter(function (friend) {
    return friend.length === 4;
  });
  console.log(realFriends);
}

filterFriends(["titi", "rene", "celine", "kevin", "kahn"]);
