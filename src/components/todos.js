import { format } from 'date-fns';

function Todo(title, description, priority, notes, due) {
  this.id = Math.random().toString(36).slice(2); // Random Todo id
  this.title = title; // str
  this.description = description; // str
  this.priority = priority; // 0 -low, 1 - med, 2 - high
  this.notes = notes; // string
  this.due = format(new Date(due.split('-').join(' ')), 'yyyy-MM-dd-HH:mm:ss'); // date
  this.completed = false; // default false
  // auto set as creation time of object, add one second to fix formatting
  this.created = format(Date.now(), 'yyyy-MM-dd-HH:mm:ss');
}
export default Todo;
