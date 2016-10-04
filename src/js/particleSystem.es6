import Particle from './particle.es6'

export default class particleSystem{

    constructor(){
        console.log('particleSystem');

        this.particles = [];

        this.position = {
            x: 100,
            y: 300
        };

    }

    start(){
        this.createParticles();

        console.log('hoi')
    }

    draw(ctx) {
        for (let particle of this.particles) {
            particle.draw(ctx);
        }
    }

    createParticles() {
        for (let i = 0; i < 100; i++) {
            let particle = new Particle();
            particle.setStartPosition(this.position.x, this.position.y);
            this.particles.push(particle);
        }
    }
}

