import React from 'react'
import Languages from './languages'
import Frameworks from './frameworks'
import Tools from './tools'
import Expertise from './expertise'
import './skills.css'

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container">
                <div class = 'inner'>
                    <Expertise />
                </div>
                <div class = 'row'>
                    <Languages />
                    <Frameworks />
                    <Tools />
                </div>
            </div>
        </section>
    )
}

export default Skills