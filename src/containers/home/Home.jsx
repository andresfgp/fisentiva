import React, {useContext} from 'react'
import '../../assets/styles/containers/home/Home.scss';
import Hero from '../../components/hero/Hero';
import Service from '../../components/services/Service';
import Teamwork from '../../components/teamwork/Teamwork';
import DefaultCarousel from '../../components/carousel/Carousel';
import Categories from '../../components/categories/Categories';
import Contact from '../../components/contact/Contact';
import {UseContext} from '../../hooks/useContext'

const Home = (props) => {

    const { services, teamwork } = useContext(UseContext);

    return (
        <>
            <Hero/>
            {services.services.length > 0 && (
                <Categories title='SERVICIOS' id='services' isService>
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
            {teamwork.teamwork.length > 0 && (
                <Categories title='EQUIPO DE TRABAJO' id='teamwork' isTeamwork>
                    {
                        teamwork.teamwork.sort((a, b) => { return b.year - a.year; }).map((item) => (
                        <><Teamwork
                            key={item.id}
                            {...item} />
                        </>

                        ))
                    }
                </Categories>
            )}
            <DefaultCarousel array={teamwork} Component={Teamwork} title='EQUIPO DE TRABAJO' id='teamwork'/>
            <Contact/>
        </>
    )
}

export default Home