const startAnimation = () => {
    let angle = 0;
    const radius = 2;
    const speed = 0.05;

    setInterval(() => {
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);

        const point = document.getElementById("point");
        point.setAttribute("translation", `${x} 0 ${z}`);

        angle += speed;
    }, 16);
};
