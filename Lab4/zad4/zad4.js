let DEFAULT_COLOR = "0.35 0.39 0.4375";

const RED = "1 0 0";
const GREEN = "0 1 0";
const YELLOW = "1 1 0";

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const cycleLights = () => {
    if (
        first.getAttribute("diffuseColor") === GREEN &&
        second.getAttribute("diffuseColor") === DEFAULT_COLOR &&
        third.getAttribute("diffuseColor") === DEFAULT_COLOR
    ) {
        cycleOff();
    } else {
        cycleOn();
    }
};

const cycleOff = () => {
    first.setAttribute("diffuseColor", DEFAULT_COLOR);
    second.setAttribute("diffuseColor", YELLOW);
    setTimeout(() => {
        second.setAttribute("diffuseColor", DEFAULT_COLOR);
        third.setAttribute("diffuseColor", RED);
    }, 1000);
};

const cycleOn = () => {
    third.setAttribute("diffuseColor", DEFAULT_COLOR);
    second.setAttribute("diffuseColor", YELLOW);
    setTimeout(() => {
        second.setAttribute("diffuseColor", DEFAULT_COLOR);
        first.setAttribute("diffuseColor", GREEN);
    }, 1000);
};
