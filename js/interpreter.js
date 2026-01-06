
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
    let nf = n
    let c = 0
    let done = false
    
    while (true) {

        for (let j = 0; j < clean_program.length; j++) {
            if (Number.isInteger(nf * clean_program[j])) {
                nf = nf * clean_program[j]
                break
            }
            if (j >= clean_program.length - 1) {
                done = true
            }
        }

        if (done) {
            break
        }

        n = nf
        console.log(n)
        c++
        if (c >= 100) {
            console.log("out of time!")
            break
        }
    }

    console.log(n)
    console.log("done!")
}


form.addEventListener("submit", run)