import { format, add } from 'date-fns';

function Todo(title, description, priority, notes, due, tags = []) {
  this.id = Math.random().toString(36).slice(2); // Random Todo id
  this.title = title; // str
  this.description = description; // str
  this.priority = priority; // 0 -low, 1 - med, 2 - high
  this.notes = notes; // string
  this.due = format(new Date(due), "yyyy-MM-dd'T'HH:mm:ss"); // date
  this.tags = tags; // list of strings(tagnames)
  // auto set as creation time of object, add one second to fix formatting
  this.created = format(add(Date.now(), { second: 1 }), 'yyyy-MM-dd-HH:mm:ss');
}
export default Todo;
