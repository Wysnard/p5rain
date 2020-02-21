class Drop {
    constructor(
        coord = createVector(Math.random() * width, Math.random() * height, map(Math.random(), 0, 1, 4, 10)),
    ) {
        this.coord = coord
        console.log(this.coord)
    }

    fall() {
        this.coord.y += this.coord.z
        this.coord.z += 0.1
        if (this.coord.y > height) {
            this.coord.x = Math.random() * width
            this.coord.y = map(Math.random(), 0, 1, -10, -50)
            this.coord.z = map(Math.random(), 0, 1, 4, 10)
        }
    }

    show() {
        stroke(255)
        line(this.coord.x, this.coord.y, this.coord.x, this.coord.y + this.coord.z)
    }
}