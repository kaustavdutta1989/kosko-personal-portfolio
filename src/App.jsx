import React from 'react';
import About from './components/about/About';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Expertise from './components/expertise/Expertise';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Expertise />
            <Experience />
            <Project />
            <Education />
            <Contact />
            <Footer />
        </>
    )
}

export default App
