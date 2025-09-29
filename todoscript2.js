// --- Initialize storage ---
var tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
var added = false;
const main = document.querySelector('main');
const iname = document.getElementById('iname');
const idesc = document.getElementById('idesc');
var todos;

// --- Main Save Routine ---
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// --- Reordering ---
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
	tasks[index].innerText = "✓"
}

// --- Remove ---
function dele(e) {
    tasks.splice(tasks.indexOf(e), 1);
    saveTasks();
    updateul();
}

// --- Add ---
function add() {
    if (added) {
        let obj = { name: iname.value, desc: idesc.value };
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

// --- Render UI ---
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
						<div class="col-12"><a onclick="upe(tasks[${tasks.indexOf(e)}])">▲</a><a onclick="downe(tasks[${tasks.indexOf(e)}])">▼</a>
					</div>
					<div class="row">
						<div class="col-12"><a onclick="done(tasks[${tasks.indexOf(e)}])">o</a></div>
					</div>
					<div class="row">
						<div class="col-12"><a onclick="dele(tasks[${tasks.indexOf(e)}])">x</a>
					</div>
				</div>
			</div>
		</li>`;
	});
}

// --- Load existing on page load ---
window.onload = updateul;