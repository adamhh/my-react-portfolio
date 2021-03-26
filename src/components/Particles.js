import React from 'react'
import Particles from 'react-particles-js'

const ParticlesBackground = () => {
    return (
        <div className="particle">
            { <Particles
                height="100vh"
                width="100%"
                params={{
                    "particles": {
                        "number": {
                            "value": 75,
                            "density": {
                                "enable": false
                            }
                        },
                        "color": {
                            "value": "#FFFFFF"
                        },
                        "size": {
                            "value": 10,
                            "random": true
                        },
                        "move": {
                            "direction": "top",
                            "out_mode": "out"
                        },
                        "line_linked": {
                            "enable": true
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "remove"
                            }
                        },
                        "modes": {
                            "remove": {
                                "particles_nb": 5
                            }
                        }
                    }
                }} />}
        </div>
    )
}

export default ParticlesBackground