
const form = document.querySelector("form")


function run(event) {
    event.preventDefault();

    const program = document.getElementById("program").value
    const integer = parseInt(document.getElementById("integer").value)

    const split_program = program.split(",")

    const clean_program = []

    for (let i = 0; i < split_program.length; i++) {
        clean_program.push(eval(split_program[i]))
    }

    let n = parseFloat(integer)
    
    for (let j = 0; j < clean_program.length; j++) {
        let c = 0
        while (Number.isInteger(n * clean_program[j])){
            n = n * clean_program[j]
            console.log(n)
            c++

            if (c >= 100) {
                console.log("out of time!")
                break
            }
        }
    }
    
    console.log(n)
}


form.addEventListener("submit", run)