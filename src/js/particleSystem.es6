import Particle from './particle.es6'

export default class particleSystem{

    constructor(canvas){
        this.canvas = canvas;
        this.particles = [];
    }

    start(){
        this.createParticles();
    }

    draw(ctx) {
        if (this.particles.length < 1) this.createParticles();
        let i = 0;
        for (let particle of this.particles) {
            if (!particle.alive) {
                this.particles.splice(i, 1);
            }
            particle.draw(ctx);
            particle.update();
            i++;
        }
    }

    createParticles() {
        for (let i = 0; i < 100; i++) {
            let particle = new Particle(this.canvas);
            this.particles.push(particle);
        }
    }
}

