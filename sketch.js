let drops = []

function setup() {
    createCanvas(640, 360);
    for (let i = 0; i < 400; i++) {
        drops.push(new Drop())
    }
}

function draw() {
    background(51);
    drops.forEach((drop) => {
        drop.fall()
        drop.show()
    })
}