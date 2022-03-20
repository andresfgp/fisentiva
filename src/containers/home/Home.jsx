import React, {useContext} from 'react'
import '../../assets/styles/containers/home/Home.scss';
import Hero from '../../components/hero/Hero';
import Service from '../../components/services/Service';
import Categories from '../../components/categories/Categories';
import Contact from '../../components/contact/Contact';
import {UseContext} from '../../hooks/useContext'

const Home = (props) => {

    const { services } = useContext(UseContext);

    return (
        <>
            <Hero/>
            {services.services.length > 0 && (
                <Categories title='Servicios' id='services' isService>
                {
                    services.services.sort((a, b) => { return b.year - a.year; }).map((item) => (
                    <Service
                        key={item.id}
                        {...item}
                    />
                    ))
                }
                </Categories>
            )}
            <Contact/>
        </>
    )
}

export default Home