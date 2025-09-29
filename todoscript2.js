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
				<div class="col-xl-11 col-lg-10 col-md-9">
					<h3>${e.name}</h3>
					<p>${e.desc}</p>
				</div>
				<div class="col-xl-1 col-lg-2 col-md-3 container text-center">
					<div class="row">
						<div class="col-12"><span onclick="upe(tasks[${tasks.indexOf(e)}])">▲</span><span onclick="downe(tasks[${tasks.indexOf(e)}])">▼</span>
					</div>
					<div class="row">
						<div class="col-12"><span onclick="done(tasks[${tasks.indexOf(e)}])" class="checkthingamajig">${e.checked?"✓":"o"}</span></div>
					</div>
					<div class="row">
						<div class="col-12"><span onclick="dele(tasks[${tasks.indexOf(e)}])">x</span></div>
					</div>
				</div>
			</div>
		</li>`;
	});
}

window.onload = updateul;