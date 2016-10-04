import Particle from './particle.es6'

export default class particleSystem{

    constructor(canvas){
        this.canvas = canvas;
        console.log('particleSystem');
        this.particles = [];
        this.particleIndex = 0;
    }

    start(){
        this.createParticles();

        console.log('createParticles')
    }

    draw(ctx) {
        for (let particle of this.particles) {
            particle.draw(ctx);
            particle.update();
        }
    }

    createParticles() {
        for (let i = 0; i < 100; i++) {
            let particle = new Particle(this.canvas);
            this.particles.push(particle);
            this.particleIndex ++;
        }
    }
}

