var tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
var added = false;
const main = document.querySelector('main');
const iname = document.getElementById('iname');
const idesc = document.getElementById('idesc');
var todos;

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function upe(e) {
    let index = tasks.indexOf(e);
    if (index > 0) {
        [tasks[index], tasks[index-1]] = [tasks[index-1], tasks[index]];
        saveTasks();
        updateul();
    }
}

function downe(e) {
    let index = tasks.indexOf(e);
    if (index < tasks.length - 1) {
        [tasks[index], tasks[index+1]] = [tasks[index+1], tasks[index]];
        saveTasks();
        updateul();
    }
}

function done(e) {
	let index = tasks.indexOf(e);
	tasks[index].checked = !tasks[index].checked
	saveTasks();
	updateul();
}

function dele(e) {
    tasks.splice(tasks.indexOf(e), 1);
    saveTasks();
    updateul();
}

function add() {
    if (added) {
        let obj = { name: iname.value, desc: idesc.value, checked: false };
		iname.value = "";
		idesc.value = "";
        tasks.push(obj);
        saveTasks();
        updateul();
    } else {
        todos = document.createElement('ul');
        todos.id = 'todos';
        main.appendChild(todos);
        added = true;
		add()
    }
}

function updateul() {
	if (!todos) {
		todos = document.createElement('ul');
		todos.id = 'todos';
		main.appendChild(todos);
		added = true;
	}
	if (tasks.length == 0) {
		if (todos) todos.remove();
		added = false;
		return;
	}
	todos.innerHTML = '';
	tasks.forEach(e => {
		todos.innerHTML += `
		<li class="item container">
			<div class="row">
				<div class="col-xl-10 col-lg-9 col-md-8">
					<h3>${e.name}</h3>
					<p>${e.desc}</p>
				</div>
				<div class="col-xl-1 col-lg-2 col-md-3 container text-center">
					<div class="row">
						<div class="col-6 thingamajig" onclick="upe(tasks[${tasks.indexOf(e)}])">▲</div><div class="col-6 thingamajig" onclick="downe(tasks[${tasks.indexOf(e)}])">▼</div>
					</div>
					<div class="row">
						<div class="col-12 thingamajig" onclick="done(tasks[${tasks.indexOf(e)}])">${e.checked?"✓":"o"}</div>
					</div>
					<div class="row">
						<div class="col-12 thingamajig" onclick="dele(tasks[${tasks.indexOf(e)}])">x</div>
					</div>
				</div>
			</div>
		</li>`;
	});
}

window.onload = updateul;