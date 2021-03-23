class Ball {
    constructor(x, y, diam, id, balls) {
        this.x = x;
        this.y = y;
        this.diam = diam;
        this.id = id;
        this.balls = balls;
        this.v_x = 0;
        this.v_y = 0;
    }
    collision() {
        for (let i = this.id + 1; i < this.balls.length; i++) {
            let dx = this.balls[i].x - this.x;
            let dy = this.balls[i].y - this.y;
            let center_dist = dist(dx, dy, 0, 0);
            let touching_dist = this.balls[i].diam/2 + this.diam/2;
            if (center_dist < touching_dist) {
                let theta = atan2(dy, dx);
                let new_x = this.x + cos(theta) * touching_dist;
                let new_y = this.y + sin(theta) * touching_dist;
                let a_x = (new_x - this.balls[i].x) * cor;
                let a_y = (new_y - this.balls[i].y) * cor;
                this.v_x -= a_x*hardness;
                this.v_y -= a_y*hardness;
                this.balls[i].v_x += a_x*hardness;
                this.balls[i].v_y += a_y*hardness; 
            }
        }
    }
    move(frame_count) {
        let temp = Math.tan(frame_count/(frame_count+1));
        if (temp > this.diam) {
            temp = this.diam;
        }
        this.diam -= temp;
        this.v_y += g;
        this.x += this.v_x;
        this.y += this.v_y;
        if (this.x + this.diam/2 > width) {
            this.x = width - this.diam/2;
            this.v_x = this.v_x*cor*mu;
        } else if (this.x - this.diam/2 < 0) {
            this.x = this.diam/2;
            this.v_x = this.v_x*cor*mu;
        }
        if (this.y + this.diam/2 >= height) {
            this.y = height - this.diam/2;
            this.v_y = this.v_y*cor*mu;
        } else if (this.y - this.diam/2 < 0) {
            this.y = this.diam/2;
            this.v_y = this.v_y*cor*mu;
        }
    }
    display() {
        let R = map(this.x, 0, width, 0, 255);
        let G = map(this.y, 0, height, 0, 255);
        let B = map(this.y/this.x, 0, height/width, 0, 255);
        stroke(255-R, 255-G, 255-B);
        strokeWeight(0);
        fill(R, G, B);
        ellipse(this.x, this.y, this.diam, this.diam);
    }
}
