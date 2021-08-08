// bestFriend.js

const friends = ["jony", "amirul", "ismail hosen", "jillur", "muktadir", "rumana"];
function bestFriend(friends) {
    let myBestFriend = friends[0];
    for (let friend of friends) {
        if (myBestFriend.length < friend.length) {
            myBestFriend = friend;
        }
    }
    return myBestFriend;

}

const bestFriendName = bestFriend(friends);
console.log(bestFriendName);