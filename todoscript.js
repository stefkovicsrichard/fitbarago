const tasks = [];
var added = false;
const main = document.querySelector("main")
const iname = document.getElementById("iname");
const desc = document.getElementById("desc");
var todos;

function up(e) {

}

function del(e) {

}

function add() {
    if (added) {
        tasks.push([iname.value, desc.value]);
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
    todos.innerHTML = "";
        tasks.forEach(e => {
            todos.innerHTML+=`<li class="item container">
            <div class="row">
              <div class="col-11">
                <h3>${e[0]}</h3>
                <p>${e[1]}</p>
              </div>
              <div class="col-1 container text-center">
                <div class="row">
                  <div class="col-12"><a onclick="up(this)">▲</a><a onclick="down(this)">▼</a></div>
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