var tasks = [];
var added = false;
const main = document.querySelector("main")
const iname = document.getElementById("iname");
const idesc = document.getElementById("desc");
var todos;

function up(e) {
  let index = tasks.indexOf(e);
  console.log(tasks.indexOf(e));
  if (index !== 0) {
    console.log(tasks)
    swap(tasks, index, index-1);
    console.log(tasks)
    updateul();
  }
}

function down(e) {
  let index = tasks.indexOf(e);
  if (index !== tasks.length) {
    console.log(tasks)
    swap(tasks, index, index+1);
    console.log(tasks)
    updateul();
  }
}

function del(e) {
  tasks.splice(tasks.indexOf(e)+1);
  updateul();
}

function add() {
  if (added) {
    let obj = {
      "name": iname.value,
      "desc": idesc.value
    }
    tasks.push(obj);
    updateul()
  } else {
    todos = document.createElement("ul");
    todos.id = "todos";
    main.appendChild(todos);
    added = true;
    add();
  }
}

function updateul() {
  if (tasks.length == 0) {
    todos.remove();
    added = false;
  }
  todos.innerHTML = "";
  tasks.forEach((e) => {
    todos.innerHTML+=`<li class="item container">
      <div class="row">
        <div class="col-11">
          <h3>${e.name}</h3>
          <p>${e.desc}</p>
        </div>
        <div class="col-1 container text-center">
          <div class="row">
            <div class="col-12"><a onclick="up({this})">▲</a><a onclick="down(this)">▼</a></div>
          </div>
          <div class="row">
            <div class="col-12"><a onclick="done(this)">○</a></div>
          </div>
          <div class="row">
            <div class="col-12"><a onclick="del(this)">x</a></div>
          </div>
        </div>
      </div>
    </li>`
  });
}

function swap(a, e1, e2) {
  let t = a[a.indexOf(e1)];
  a[a.indexOf(e1)] = a[a.indexOf(e2)];
  a[a.indexOf(e2)] = t;
}