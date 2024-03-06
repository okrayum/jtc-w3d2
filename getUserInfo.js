// getUserInfo.js

function getUserInfo() {
  const name = prompt("Please enter your name:");
  const age = prompt("Please enter your age:");

  const userInfo = {
    name: name,
    age: age,
  }

  console.log(`User Name: ${userInfo.name}`);
  console.log(`User Age: ${userInfo.age}`);
}

module.exports = getUserInfo; // Export the function
