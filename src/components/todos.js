import { format, add } from 'date-fns';

function Todo(title, description, priority, due, checklist, notes, tags = []) {
  this.title = title; // str
  this.description = description; // str
  this.priority = priority; // 0 -low, 1 - med, 2 - high
  this.checklist = checklist; // bool
  this.notes = notes; // bool
  this.tags = tags; // list of strings(tagnames)
  this.due = format(new Date(due), "yyyy-MM-dd'T'HH:mm:ss"); // date
  // auto set as creation time of object, add one second to fix formatting
  this.created = format(add(Date.now(), { second: 1 }), 'yyyy-MM-dd-HH:mm:ss');
}
export default Todo;
