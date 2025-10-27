const points = ["0 0 0"];

const addPoints = () => {
    const startX = 0;
    const startY = 0;
    const spacing = 0.01;

    points.push(
        ...createPointsY(startX, startY, spacing, 200),
        ...createPointsX(startX, startY, spacing, 150),
        ...createPointsY(startX, startY + 2, spacing, 200),
        ...createPointsX(startX, startY + 4, spacing, 150),
        ...createPointsDiag(startX + 1.5, startY, spacing, 50),
        ...createPointsY(startX + 2, startY + 0.5, spacing, 150),
        ...createPointsY(startX + 2, startY + 2, spacing, 150),
        ...createPointsReverseDiag(startX + 2, startY + 3.5, spacing, 51)
    );

    const pointset = document.getElementById("points");
    pointset.setAttribute("point", points.join(", "));
};

const createPointsY = (startX, startY, spacing, numPoints) => {
    const newPoints = [];

    for (let i = startY; i < startY + numPoints * spacing; i += spacing) {
        newPoints.push(`${startX} ${i} 0`);
    }

    return newPoints;
};

const createPointsX = (startX, startY, spacing, numPoints) => {
    const newPoints = [];

    for (let i = startX; i < startX + numPoints * spacing; i += spacing) {
        newPoints.push(`${i} ${startY} 0`);
    }

    return newPoints;
};

const createPointsDiag = (startX, startY, spacing, numPoints) => {
    const newPoints = [];

    for (let i = 0; i < numPoints; i++) {
        newPoints.push(`${startX + i * spacing} ${startY + i * spacing} 0`);
    }

    return newPoints;
};

const createPointsReverseDiag = (startX, startY, spacing, numPoints) => {
    const newPoints = [];

    for (let i = 0; i < numPoints; i++) {
        newPoints.push(`${startX - i * spacing} ${startY + i * spacing} 0`);
    }

    return newPoints;
};
