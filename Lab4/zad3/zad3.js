const eye1 = document.getElementById("eye1");
const eye2 = document.getElementById("eye2");

setInterval(() => {
    const randomColor = `${Math.random()} ${Math.random()} ${Math.random()}`;
    eye1.setAttribute("diffuseColor", randomColor);
    eye2.setAttribute("diffuseColor", randomColor);
}, 1);

let defaultArmLength = 0.6;

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const shirtColor = document.getElementById("shirt").value;
    const pantsColor = document.getElementById("pants").value;
    const bootsColor = document.getElementById("boots").value;
    const armLength = parseFloat(document.getElementById("arm").value);

    const shirt = document.getElementById("shirtMat");
    const shirt2 = document.getElementById("shirtMat2");
    const pants = document.getElementById("pantsMat");
    const boots = document.getElementById("bootsMat");

    const arm1 = document.getElementById("arm1");
    const arm2 = document.getElementById("arm2");
    const arm1Trans = document.getElementById("arm1Trans");
    const arm2Trans = document.getElementById("arm2Trans");

    const newArmLength = defaultArmLength + armLength / 100;
    const lengthDifference = newArmLength - defaultArmLength;

    arm1.setAttribute("size", `0.2 ${newArmLength} 0.3`);
    arm2.setAttribute("size", `0.2 ${newArmLength} 0.3`);
    arm1Trans.setAttribute(
        "translation",
        `-0.35 ${1.0 - lengthDifference / 2} 0`
    );
    arm2Trans.setAttribute(
        "translation",
        `0.35 ${1.0 - lengthDifference / 2} 0`
    );

    shirt.setAttribute("diffuseColor", hexToRgbFraction(shirtColor));
    shirt2.setAttribute("diffuseColor", hexToRgbFraction(shirtColor));
    pants.setAttribute("diffuseColor", hexToRgbFraction(pantsColor));
    boots.setAttribute("diffuseColor", hexToRgbFraction(bootsColor));
});

const hexToRgbFraction = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    return `${r} ${g} ${b}`;
};
