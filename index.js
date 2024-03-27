

document.querySelector(".first").addEventListener("click", function (event) {

    event.preventDefault();
    const values = new Map();

    let mapsize = 256;
    for (let i = 0; i < mapsize; i++) {
        values.set(String.fromCharCode(i), i)
    }

    let input = document.getElementById("string").value;
    const result = [];

    var a = 256;
    if (input != '') {
        document.querySelector("#tableA").innerHTML = `<table class="tableZ" ><thead><tr><th scope="col">String</th><th scope="col">Code</th></tr></thead><tbody id="bodyWorking"></tbody></table>`;
        document.querySelector("#tableB").innerHTML = `<table class="tableZ" ><thead><tr><th scope="col">Output</th></tr></thead><tbody id="bodyOutput"></tbody></table>`

        document.querySelector("#bodyWorking").innerHTML = "";
        document.querySelector("#bodyOutput").innerHTML = "";
        let input = document.getElementById("string").value;
        let foundchar = '';

        for (let i = 0; i < input.length; i++) {

            let charstoadd = foundchar + input[i];
            if (values.has(charstoadd)) {
                foundchar = charstoadd;
            } else {
                result.push(values.get(foundchar));
                values.set(charstoadd, mapsize++);
                foundchar = input[i];


                document.querySelector("#bodyWorking").innerHTML += `<tr><td>${charstoadd}</td><td>${a}</td></tr>`;
                document.querySelector("#bodyOutput").innerHTML += `<tr><td>${values.get(foundchar)}</td></tr>`;
                a++;
            }

        }
        if (foundchar.length !== 0) {
            result.push(values.get(foundchar));
        }
        document.getElementById("string").value = "";
        input = "";


    }
    else {
        document.querySelector("#tableA").innerHTML = "";
        document.querySelector("#tableB").innerHTML = "";
    }


});
var counter = 0;
var final1 = [];
var final2 = [];
var final3 = [];

document.querySelector(".Second").addEventListener("click", step);


function step() {
    console.log(counter);
    if (counter == 0 || counter >= final1.length) {
        counter = 0;
        final1 = [];
        final2 = [];
        final3 = [];
        event.preventDefault();
        const values = new Map();

        let mapsize = 256;
        for (let i = 0; i < mapsize; i++) {
            values.set(String.fromCharCode(i), i)
        }

        let input = document.getElementById("string").value;
        const result = [];

        var a = 256;
        if (input != '') {

            document.querySelector("#tableA").innerHTML = `<table class="tableZ" ><thead><tr><th scope="col">String</th><th scope="col">Code</th></tr></thead><tbody id="bodyWorking"></tbody></table>`;
            document.querySelector("#tableB").innerHTML = `<table class="tableZ" ><thead><tr><th scope="col">Output</th></tr></thead><tbody id="bodyOutput"></tbody></table>`

            document.querySelector("#bodyWorking").innerHTML = "";
            document.querySelector("#bodyOutput").innerHTML = "";
            let input = document.getElementById("string").value;
            let foundchar = '';
            var z = 0;
            for (let i = 0; i < input.length; i++) {

                let charstoadd = foundchar + input[i];
                if (values.has(charstoadd)) {
                    foundchar = charstoadd;
                } else {
                    result.push(values.get(foundchar));
                    values.set(charstoadd, mapsize++);
                    foundchar = input[i];

                    final1[z] = charstoadd
                    final2[z] = a
                    final3[z] = values.get(foundchar)
                    z++;

                    a++;
                }

            }
            if (foundchar.length !== 0) {
                result.push(values.get(foundchar));
            }
            document.getElementById("string").value = "";
            input = "";


        }
        else {
            document.querySelector("#tableA").innerHTML = "";
            document.querySelector("#tableB").innerHTML = "";
        }
    }
    if (counter < final1.length) {
        document.querySelector("#bodyWorking").innerHTML += `<tr><td>${final1[counter]}</td><td>${final2[counter]}</td></tr>`;
        document.querySelector("#bodyOutput").innerHTML += `<tr><td>${final3[counter]}</td></tr>`;
        counter++;

    }
    else if (counter >= final1.length) {
        document.querySelector("#tableA").innerHTML = "";
        document.querySelector("#tableB").innerHTML = "";
        input = "";
    }


}
