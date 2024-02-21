/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  list = []
  add(task){
    this.list.push(task)
  }
  remove(index){
    this.list.splice(index, 1)
  }
  update(index, task){
    if(index > this.list.length-1)
      return 
    this.list[index] = task;
  }
  getAll(){
    return this.list;
  }
  get(indexOfTodo){
    if(indexOfTodo > this.list.length-1)
      return null
    return this.list[indexOfTodo];
  }
  clear(){
    this.list = []
  }
}

module.exports = Todo;
