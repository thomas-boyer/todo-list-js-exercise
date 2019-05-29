// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {

  const task =
  {
    title,
    description,
    complete: false,

    logState: function()
    {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function()
    {
      this.complete = true;
    }
  };

  return task;
}

const task1 = newTask("Clean cat litter", "Take all the poop out of the litter box");
const task2 = newTask("Do Laundry", "*sigh*");
const tasks = [task1, task2];

console.log(tasks);


task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
