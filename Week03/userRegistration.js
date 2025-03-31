const readline = require("readline");

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.registrationDate = new Date();
  }

  getUserInfo() {
    return `\n👤 Name: ${this.name}, 📧 Email: ${this.email}, 🕒 Registered on: ${this.registrationDate.toLocaleString()}`;
  }
}

// Array to store registered users
let users = [];

// Function to validate email format
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Function to validate password strength
function isValidPassword(password) {
  return password.length >= 6;
}

// Function to register a new user
function registerUser(name, email, password) {
  try {
    if (!name || !email || !password) {
      throw new Error("⚠ All fields are required!");
    }
    if (!isValidEmail(email)) {
      throw new Error("⚠ Invalid email format!");
    }
    if (!isValidPassword(password)) {
      throw new Error("⚠ Password must be at least 6 characters!");
    }

    let newUser = new User(name, email, password);
    users.push(newUser);
    console.log("\n✅ User registered successfully!");
    console.log(newUser.getUserInfo());
  } catch (error) {
    console.log(error.message);
  }
}

// Readline Interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Get user input from terminal
function askForRegistration() {
  rl.question("Enter Name: ", (name) => {
    rl.question("Enter Email: ", (email) => {
      rl.question("Enter Password: ", (password) => {
        registerUser(name, email, password);
        rl.close();
      });
    });
  });
}

askForRegistration();
