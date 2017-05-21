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
        var textEle = document.createElement('span');
        textEle.innerHTML = items[key];
        var delBtn = document.createElement('button');
        delBtn.onclick = () => this.removeItemFromBoard('todo', key);
        delBtn.innerHTML = 'X';
        delBtn.className = 'deleteButton';
        el.appendChild(textEle);
        el.appendChild(delBtn);
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
        var textEle = document.createElement('span');
        textEle.innerHTML = items[key];
        var delBtn = document.createElement('button');
        delBtn.onclick = () => this.removeItemFromBoard('progress', key);
        delBtn.innerHTML = 'X';
        delBtn.className = 'deleteButton';
        el.appendChild(textEle);
        el.appendChild(delBtn);
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
        var textEle = document.createElement('span');
        textEle.innerHTML = items[key];
        var delBtn = document.createElement('button');
        delBtn.onclick = () => this.removeItemFromBoard('done', key);
        delBtn.innerHTML = 'X';
        delBtn.className = 'deleteButton';
        el.appendChild(textEle);
        el.appendChild(delBtn);
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
    switch(boardType) {
      case 'todo': this.renderTodoList();
      case 'progress': this.renderProgressList();
      case 'done': this.renderDoneList();
    }
  },
  addTodoItem: function() {
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