var uid = () => Math.random().toString(34).slice(2);
var boardManager = {
  tasks: {
    todo: {},
    progress: {},
    done: {}
  },
  renderTodoList: function() {
    var items = this.tasks['todo'];
    var itemKeys = Object.keys(this.tasks['todo']);
    var listEl = document.querySelector('.todoList');
    listEl.innerHTML = '';
    if (itemKeys.length > 0) {
      itemKeys.forEach((key) => {
        var el = document.createElement('li');
        el.innerHTML = items[key];
        listEl.appendChild(el);
      })
    } else {
        var el = document.createElement('li');
        el.innerHTML = 'No tasks found';
        listEl.appendChild(el);
    }
  },
  renderProgressList: function() {
    var items = this.tasks['progress'];
    var itemKeys = Object.keys(this.tasks['progress']);
    var listEl = document.querySelector('.progressList');
    listEl.innerHTML = '';
    if (itemKeys.length > 0) {
      itemKeys.forEach((key) => {
        var el = document.createElement('li');
        el.innerHTML = items[key];
        listEl.appendChild(el);
      })
    } else {
        var el = document.createElement('li');
        el.innerHTML = 'No tasks found';
        listEl.appendChild(el);
    }
  },
  renderDoneList: function() {
    var items = this.tasks['done'];
    var itemKeys = Object.keys(this.tasks['done']);
    var listEl = document.querySelector('.doneList');
    listEl.innerHTML = '';
    if (itemKeys.length > 0) {
      itemKeys.forEach((key) => {
        var el = document.createElement('li');
        el.innerHTML = items[key];
        listEl.appendChild(el);
      })
    } else {
        var el = document.createElement('li');
        el.innerHTML = 'No tasks found';
        listEl.appendChild(el);
    }
  },
  addItemToBoard: function(boardType,text) {
  this.tasks[boardType][uid()] = text;
  },
  removeItemFromBoard: function(boardType,taskId) {
    delete this.tasks[boardType][taskId];
  },
  addTodoItem: function() {
    console.log(this);
    var todoInput = document.querySelector('#todoInput');
    this.addItemToBoard('todo', todoInput.value);
    todoInput.value = '';
    this.renderTodoList();
  }
  ,
  addProgressItem: function() {
    var progressInput = document.querySelector('#progressInput');
    this.addItemToBoard('progress', progressInput.value);
    progressInput.value = '';
    this.renderProgressList();
  }
  ,
  addDoneItem: function() {
    var doneInput = document.querySelector('#doneInput');
    this.addItemToBoard('done', doneInput.value);
    doneInput.value = '';
    this.renderDoneList();
  },
  init: function() {
    document.querySelector('#todoButton').onclick = this.addTodoItem.bind(this);
    document.querySelector('#progressButton').onclick = this.addProgressItem.bind(this);
    document.querySelector('#doneButton').onclick = this.addDoneItem.bind(this);
    this.renderTodoList();
    this.renderDoneList();
    this.renderProgressList();
  }
  
}
boardManager.init();