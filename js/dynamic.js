let names = [
    "Brian", "Celina", "Lance", "Andrea", "Jonathan", 
    "Tyler", "Chas", "Dustin", "Pete", "Tom", 
    "Will", "Daemon", "Jada", "Parker"
];

const addName = () => {
    let nameCtrl = document.getElementById("newname");
    let name = nameCtrl.value;
    names.push(name);
    loadDiv();
}


const loadDiv = () => {
    let divCtrl = document.getElementById("ps");
    divCtrl.innerHTML = "";
    for(let name of names) {
        let p = `<p>${name}</p>`;
        divCtrl.innerHTML += p;
    }
}