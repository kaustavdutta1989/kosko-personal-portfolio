import React from 'react';
import About from './components/about/About';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Expertise from './components/expertise/Expertise';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Project from './components/project/Project';

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <Expertise />
            <Experience />
            <Project />
            <Education />
            <About />
            <Footer />
        </>
    )
}

export default App
