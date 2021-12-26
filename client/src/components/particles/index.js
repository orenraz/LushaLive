import Particles from 'react-tsparticles';
const options = require('./particlesjs-config.json');

const ParticlesContainer = () => {
    const particlesInit = (main) => {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
    };

    return (
        <div style={{ position: 'absolute'}}>
            <Particles height='100vh' width='100vw'
                id='tsparticles'
                init={particlesInit}
                loaded={particlesLoaded}
                options={options}
            />
        </div>

    );
};

export default ParticlesContainer;
