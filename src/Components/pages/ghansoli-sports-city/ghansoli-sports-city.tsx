import React, {useState, useEffect, useRef, useCallback} from 'react';
import './ghansoli-sports-city.css';
import Header from "../../header/header";
import Footer from "../../footer/footer";
import {Col, Container, Row} from "react-bootstrap";
import CommunitiesDescription from "../../communities-description/communities-description";
import image1 from "../../../assets/images/ghansoli/gsc1.jpg";
import image2 from "../../../assets/images/ghansoli/gsc3.jpg";
import image3 from "../../../assets/images/ghansoli/gsc4.jpg";
import image4 from "../../../assets/images/ghansoli/gsc.jpg";
import PointOfIntrestSection from "../../point-of-intrest/point-of-intrest";
import Communities from "../../communities-section/communities";
import ghansolliimage1 from '../../../assets/images/ghansoli/ghansoli-grid1.jpg';
import homeimage from '../../../assets/images/home-f5.jpg';
import chamburimage from '../../../assets/images/chembur-grid-2.jpg';
import kargarImage from '../../../assets/images/khargar-grid-2.jpg';
import gridimage1 from '../../../assets/images/qisland-grid.jpg';
import gridimage2 from '../../../assets/images/QPark.png';
import gridimage3 from '../../../assets/images/Majesco.png';
import gridimage4 from '../../../assets/images/comming-soon.jpg';
import image5 from "../../../assets/images/ghansoli/gsc2.jpg";

function GhansoliSportsCity(props) {
    const [data, setdata] = useState({
        type: 'left',
        title: 'Welcome to Ghansoli\n' +
            'Sport City, Navi Mumbai',
        imageLink: image1,
        desc: [
            'With many multinational corporations and IT firms flocking to its shores and real estate giants staking their claim, Navi Mumbai\'s Ghansoli has mirrored its parent city in more ways than one in a short span of time.',
            'When you say Good Morning!!! To nature, that means you are in Ghansoli. Ghansoli is a posh suburb of Navi Mumbai.\n',
            'Ghansoli is a home for offices of some of the prestigious corporate names.',
            'It is a perfect place for a family to stay.\n' +
            'There is no end when it comes to offering essentials for happy and healthy living in Ghansoli.'
        ]
    })


    const [sectiondata, setSectionData] = useState(

        {
            heading: 'Nearby Areas or Neighbourhoods',
            list: [
                {
                    data: {
                        title: 'Ghansoli Sport City',
                        redirectLink:'/detail/ghansoli-sports-city'
                    },
                    style: {
                        backgroundImage: ghansolliimage1,
                        height: '300px',

                    }


                },

                {
                    data: {
                        title: 'Shilphata City Junction ',
                        redirectLink:'/detail/shilphata-city-junction'
                    },
                    style: {
                        backgroundImage: homeimage,
                        height: '300px'

                    }


                },
                {
                    data: {
                        title: 'Chembur City Centre',
                        redirectLink:'/detail/chembur-city-centre'
                    },

                    style: {
                        backgroundImage: chamburimage,

                        height: '300px'

                    }


                },
                {
                    data: {
                        title: 'Kharghar Rolling Greens',
                        redirectLink:'/detail/kharghar-rolling-greens'
                    },
                    style: {
                        backgroundImage:kargarImage,
                        height: '300px'

                    }


                },
            ],
        }
    );



    const [sectiondata1, setSectionData1] = useState(

        {
            heading: 'City’s Most Iconic Properties',
            list: [
                {
                    data: {
                        title: 'Aurum Q Islands Maldives   Aurum Q Islands Santorini ',
                        redirectLink:'/detail/qisland'
                    },
                    style: {
                        backgroundImage: gridimage1,
                        height: '300px',
                    }


                },
                {
                    data: {
                        title: 'Aurum Q Park Q6',
                        redirectLink:'/detail/q6'
                    },

                    style: {
                        backgroundImage: gridimage2,
                        height: '300px'
                    }


                },
                {
                    data: {
                        title: 'Aurum MBP Q2 ',
                        redirectLink:'/detail/q2'
                    },
                    style: {
                        backgroundImage: gridimage3,
                        height: '300px'

                    }


                },
                {
                    data: {
                        title: 'Aurum MBP Q6',
                        redirectLink:'/detail/q6'
                    },
                    style: {
                        backgroundImage: gridimage4,
                        height: '300px'

                    }


                },
            ],
        }
    );



    const [data1, setdata1] = useState({
        type: 'full',
        title: 'Social Infra Behavior Is What We Do',
        imageLink: image2,
        desc: [
            'Ghansoli comes under Navi Mumbai Municipal Corporation (NMMC). NMMC has won various awards like Swachata Abhiyan Clean City Award, Green Building Award, Wisitex Green Urban Development award, Gold Award, National UrbanWater Award, etc. There are health care facilities that serve the local community and tech-driven educational facilities for young minds. The place has all foundational assets like hospitals, universities, schools, community places, and markets that support the city\'s quality of life.',
            'The area has various stores that can fulfil your daily living needs like grocery shops, fashion, clinics, vets, pet shops, bookstores, coffee shops, pit stops, car and bike showrooms, garages, etc. You name it, and you get it. There are temples, mosques, and Catholic churches in Ghansoli village called Our Lady of the Forsaken Church. There is also a colossal gurdwara for the Sikh community.'

        ]
    })
    const [data2, setdata2] = useState({
        type: 'left',
        title: 'Nature, Building Blocks of Memories!',
        imageLink: image3,
        desc: [
            'It\'s the place to create lifelong memories with family and friends to cherish upon. Memories strengthen our sense of identity and purpose and bond our relationships. The area is known for its best town settlement for families where you enjoy your morning cup of tea with sounds of nature.',
            'The place offers positive vibes for your mind, body and soul. You don\'t have to go too far for weekend breaks as Ghansoli gives you fascinating waterfalls, forest walk areas, mangroves and bird sanctuaries. It is also a home for various bird migrators. It is the perfect home for a bird watcher and nature walker.'

        ]
    })

    const [data3, setdata3] = useState({
        type: 'right',
        title: 'Adorable Lifestyle for Everyone\n',
        imageLink: image4,
        desc: [
            'Originally a fisherman\'s village has now become a high-tech city with a sense of aesthetic appreciation. Ghansoli has many highrise skyscrapers complex with world-class in build amenities and that too budget-friendly.'
        ]
    })


    const [poinOfIntrestData,setpoinOfIntrestData] = useState({
        pointOfIntrest: [
            {
                title:'What to look for?',
                desc:'Close to nature, business parks and offices offer the best places to hang out with family and friends and save your travel time to enjoy the evening with your family.'
            },
            {
                title:'An Active Lifestyle Full of Events',
                desc:'Imagine you come home in the evening to relax and rejuvenate, only to wake up for a new day with an abundance of energy. Say Yes!! To your stress-free life in Ghansoli.'
            },
            {
                title:'Nature Blessed',
                desc:'Ghansoli has mesmerizing panoramic views of hills and lakes, which is genuinely photogenic.'
            },
            {
                title:'The Market',
                desc:'Due to continuous growth in the city, the resell value graph is always upwards.'
            },
            {
                title:'Soaring High Above',
                desc:'Modern architecture providing a 360-degree spectacular view of mountains and lakes.'
            }
        ],
        detail:  {
            title:'Specifics',
            desc:'Close and well connected to important business centres and landmarks, High-rise buildings, affordable to nuclear and joint families, outdoor and indoor play activities and adventure sports centre, recreational and leisure activities, well-versed for wildlife photography, parks and jogging tracks for everyone.',
            image: image5
        },
        imagelink: null
    })



    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return (
        <div className='GhansoliSportsCityMain'>
            <Header/>
            <CommunitiesDescription communitiesDescriptionData={data}/>
            <PointOfIntrestSection pointOfIntrestData={poinOfIntrestData}/>
            <CommunitiesDescription communitiesDescriptionData={data1}/>
            <CommunitiesDescription communitiesDescriptionData={data2}/>
            <CommunitiesDescription communitiesDescriptionData={data3}/>
            <Communities communitiesData={sectiondata1} title/>
            <Communities communitiesData={sectiondata} title/>
            <Footer/>
        </div>
    )
}

export default GhansoliSportsCity;

