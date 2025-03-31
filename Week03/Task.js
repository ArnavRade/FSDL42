class Task {
  constructor(name, priority) {
    this.name = name;
    this.priority = priority;
    this.completed = false;
  }

  completeTask() {
    this.completed = true;
  }

  getTaskInfo() {
    return `${this.name} - Priority: ${this.priority} - Completed: ${this.completed}`;
  }
}

// Task List
let tasks = [];

// Function to add a task
function addTask(name, priority) {
  let task = new Task(name, priority);
  tasks.push(task);
}

// Function to complete a task
function completeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completeTask();
  } else {
    console.log("Invalid Task Index!");
  }
}

// Function to list all tasks
function listTasks() {
  console.log("\nTask List:");
  tasks.forEach((task, index) => {
    console.log(`${index}: ${task.getTaskInfo()}`);
  });
}

// Command-Line Interaction
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askForTask() {
  rl.question("Enter task name: ", (name) => {
    rl.question("Enter task priority (Low, Medium, High): ", (priority) => {
      addTask(name, priority);
      console.log("\nNew Task Added!");
      listTasks();
      rl.question("\nDo you want to complete a task? (yes/no): ", (answer) => {
        if (answer.toLowerCase() === "yes") {
          rl.question("Enter task index to complete: ", (index) => {
            completeTask(parseInt(index));
            listTasks();
            rl.close();
          });
        } else {
          rl.close();
        }
      });
    });
  });
}

askForTask();
