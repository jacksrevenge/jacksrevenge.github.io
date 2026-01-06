
const form = document.querySelector("form")


function run(event) {
    event.preventDefault();

    const program = document.getElementById("program").value
    const integer = parseInt(document.getElementById("integer").value)

    console.log(program.split(","))

}


form.addEventListener("submit", run)