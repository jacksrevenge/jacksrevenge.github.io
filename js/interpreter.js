const form = document.querySelector("form");

function parseFractranFraction(str) {
    const parts = str.trim().split("/");

    if (parts.length !== 2) {
        throw new Error("Invalid fraction: " + str);
    }

    const num = Number(parts[0].trim());
    const den = Number(parts[1].trim());

    if (!Number.isInteger(num) || !Number.isInteger(den)) {
        throw new Error("Fractions must be integers only: " + str);
    }

    if (den === 0) {
        throw new Error("Denominator cannot be zero: " + str);
    }

    if (num <= 0 || den <= 0) {
        throw new Error("Fractions must be positive: " + str);
    }

    return num / den;
}

function run(event) {
    event.preventDefault();

    try {
        const program = document.getElementById("program").value;
        const integer = parseInt(document.getElementById("integer").value);

        if (!Number.isInteger(integer) || integer <= 0) {
            throw new Error("Start value must be positive");
        }

        const final = document.getElementById("final_out");
        const sequence_n = document.getElementById("sequence_out");

        const split_program = program.split(",");
        const clean_program = [];

        for (let i = 0; i < split_program.length; i++) {
            clean_program.push(parseFractranFraction(split_program[i]));
        }

        let n = integer;
        let nf = n;
        let c = 0;
        let done = false;
        const sequence = [];

        while (true) {

            let applied = false;

            for (let j = 0; j < clean_program.length; j++) {
                const result = nf * clean_program[j];

                if (Number.isInteger(result)) {
                    nf = result;
                    break;
                }

                if (j >= clean_program.length - 1) {
                    done = true;
                }
            }

            if (done) {
                break;
            }

            if (!isFinite(nf) || isNaN(nf)) {
                throw new Error("Strange number appeared whilst running :(");
            }

            n = nf;
            sequence.push(n.toString());

            c++;

            if (c >= 100) {
                throw new Error("Ran out of time :(");
            }
        }

        console.log("done!");

        final.innerHTML = n.toString();
        sequence_n.innerHTML = sequence.join(", ");

    } catch (e) {
        console.log("Interpreter error:", e.message);
    }
}

form.addEventListener("submit", run);