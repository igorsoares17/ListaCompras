function Purchase() {

    let inputs = document.querySelectorAll("input");
    
    inputs.forEach((input, index) => {

        input.remove();
        
    })
    
}

function verifyCharacter(value) {

    let character = [];
    let newValue = "";

    for (let x = 0; x < value.length; x++) {

        character[x] = value[x];
    }

    if (character.includes(",")) {

        let index = character.indexOf(",");
        character[index] = ".";
    }

    for (let y = 0; y < character.length; y++) {

        newValue += character[y];
    }

    if (newValue === "") {

        return value;
    }

    else {

        return parseFloat(newValue);
    }
}

export {verifyCharacter}
export {Purchase};