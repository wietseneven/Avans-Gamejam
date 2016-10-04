import particle from './particle.es6'

export default class particleSystem{

    constructor(){
        console.log('particleSystem');
        this.particle = particle;

        this.particles = [];

        this.position = {
            x: 100,
            y: 300
        };

        this.createParticles();
    }

    start(){
        console.log('hoi')
    }

    createParticles() {
        let particle = new Particle();
        particle.setStartPosition(this.position.x, this.position.y);

        this.particles.push(particle);
    }
}

