import React from 'react' 
import '../App.css'
import Section1 from '../componentes/Sec/section1/Section1'
import Section2 from '../componentes/Sec/section2/Section2'
import Section3 from '../componentes/Sec/section3/Section3'
import WpButton from '../componentes/wpButton/WpButton'

const LandingView = () => {
    return (
        <div className="App">
            <WpButton />
            <article>
                <Section1/>
                <Section2  />
                <Section3/>
            </article>
        </div>
    )
}

export default LandingView