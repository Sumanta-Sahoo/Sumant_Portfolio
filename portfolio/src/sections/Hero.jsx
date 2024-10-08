/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../Components/CanvasLoader.jsx';
import HackerRoom from '../Components/HackerRoom.jsx';
import { Suspense } from 'react';
// import { Leva, useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../Constants/index.js';
import { motion } from 'framer-motion'
import Button from '../Components/Button.jsx';

const slidingTextVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            duration: 20,
            repeatType: 'mirror',
            repeat: Infinity,
        }
    }
}

const Hero = () => {

    // const x = useControls(`HackerRoom`, {
    //     positionX: { value: 2.5, min: -10, max: 10 },
    //     positionY: { value: 2.5, min: -10, max: 10 },
    //     positionZ: { value: 2.5, min: -10, max: 10 },
    //     rotationX: { value: 0, min: -10, max: 10 },
    //     rotationY: { value: 0, min: -10, max: 10 },
    //     rotationZ: { value: 0, min: -10, max: 10 },
    //     scale: { value: 0, min: -10, max: 10 }
    // })


    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I am Sumant <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Software Developer</p>
            </div>
            {/* <div className="w-full h-full absolute inset-0">
                <Canvas>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HackerRoom
                            // scale={0.07}
                            position={sizes.deskPosition}
                            scale={sizes.deskScale}
                            rotation={[0, -Math.PI, 0]}
                        />
                        <group>

                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div> */}
            <div className="realtive top-7 left-0 right-0 w-full z-10 c-space">
                <a href="https://drive.google.com/file/d/1uOd9E4lSVYEmu6VoGdgNv6Z_voDtNWL8/view" className="w-fit" target='blank'>
                    <Button name="View Resume" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
            <div className="hero">
                <motion.div className="slidingTextContainer" variants={slidingTextVariants} initial="initial" animate="animate">
                    Full Stack Developer / Designer
                </motion.div>
            </div>
        </section >
    );
};

export default Hero;
