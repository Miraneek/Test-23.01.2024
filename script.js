let todos = [
    {
        title: "Vyhrat",
        text: "muj ukol je prostě vyhrat nad životem",
        done: true
    },
    {
        title: "Nechat ostatní prohrát",
        text: "Abych mohl vyhrát ostatní musí prohrát, bohužel",
        done: false
    },
    {
        title: "Test z webů",
        text: "nejvic ez test v mym životě",
        done: true
    },
    {
        title: "Autoškola",
        text: "Projít zkouškou z autoškoly",
        done: false
    },
    {
        title: "Výkaz práce",
        text: "poslat vákaz práce pro leden",
        done: true
    }
]

let result = document.querySelector("#result")

todos.forEach((todo) => {

    let ukol = document.createElement("section")

    let h2 = document.createElement("h2")
    h2.textContent = todo.title
    h2.style.textDecoration = todo.done ? "line-through" : "none"
    ukol.appendChild(h2)

    let p = document.createElement("p")
    p.textContent = todo.text
    p.style.textDecoration = todo.done ? "line-through" : "none"
    ukol.appendChild(p)

    ukol.classList.add("ukol")
    ukol.classList.add(todo.done ? "done" : "notdone")

    result.appendChild(ukol)
})

console.log(getFirstNotDoneTask())

function getFirstNotDoneTask() {
    let ukol = document.querySelector(".notdone")
    return {
        title: ukol.querySelector("h2").textContent,
        text: ukol.querySelector("p").textContent,
        done: ukol.classList.contains("done")
    }
}

console.log(getAllTodoTitles())

function getAllTodoTitles() {
    let ukoly = document.querySelectorAll(".ukol")
    let TodoTitles = [""]
    ukoly.forEach((ukol) => {
        TodoTitles.push(ukol.querySelector("h2").textContent)
    })
    
    TodoTitles.shift()
    return TodoTitles
}