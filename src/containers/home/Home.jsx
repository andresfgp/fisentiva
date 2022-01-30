import React from 'react'
import '../../assets/styles/containers/home/Home.scss';
import Hero from '../../components/hero/Hero';
import Contact from '../../components/contact/Contact';

const Home = (props) => {

    return (
        <>
            <Hero/>
            <Contact/>
        </>
    )
}

export default Home