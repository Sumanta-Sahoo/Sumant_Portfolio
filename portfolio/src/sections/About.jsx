/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../Components/Button'

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const [hasCopiedNumber, setHasCopiedNumber] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('sumantashoo138@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };
    const handleCopyNumber = () => {
        navigator.clipboard.writeText('+91-8658322588');
        setHasCopiedNumber(true);

        setTimeout(() => {
            setHasCopiedNumber(false);
        }, 2000);
    };
    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Hi, I’m Sumant</p>
                            <p className="grid-subtext">
                                With 1 year of experience in backend development using Java and Spring Boot, I focus on building scalable applications and optimizing APIs. I also have frontend experience with ReactJS, enabling me to contribute effectively across the full stack.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I Specialized in Java, Spring Boot, and AWS, with a strong focus on backend development, complemented by experience in MySQL and ReactJS.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 20.2961, lng: 85.8245, text: 'I am here', color: 'white', size: 15 }]}
                            />
                            <div>
                                <br />
                                <br />
                                <p className="grid-headtext">I work across most time zone.</p>
                                <p className="grid-subtext">Based in India, I am open to onsite, hybrid, and remote work, as well as relocation opportunities.</p>
                                <a href="#contact" className="w-fit">
                                    <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                                </a>
                                {/* <Button name="Contact Me" isBeam containerClass="w-full mt-10" /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">
                                I love solving problems and building things through code. Programming isn&apos;t just my
                                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">sumantasahoo138@gmail.com</p>

                            </div>
                            <div className="copy-container" onClick={handleCopyNumber}>
                                <img src={hasCopiedNumber ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">+91-8658322588</p>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
