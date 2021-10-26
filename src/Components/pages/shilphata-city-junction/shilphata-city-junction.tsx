import React, {useState, useEffect, useRef, useCallback} from 'react';
import './shilphata-city-junction.css';
import Header from "../../header/header";
import Footer from "../../footer/footer";
import {Col, Container, Row} from "react-bootstrap";
import CommunitiesDescription from "../../communities-description/communities-description";
import image1 from "../../../assets/images/shilphata/shilphata-1.jpg";
import image2 from "../../../assets/images/shilphata/scj.jpg";
import image3 from "../../../assets/images/shilphata/shilphata-2.jpg";
import image4 from "../../../assets/images/shilphata/scj2.jpg";
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
import pointOfIntrestImage from '../../../assets/images/shilphata/scj1.jpg';

function ShilphataCityJunction(props) {
    const [data, setdata] = useState({
        type: 'left',
        title: 'Welcome to Shilphata City Junction',
        imageLink: image1,
        desc: [
            'Bounded by natural vegetation is the town of Shilphata. This town is a connection between wildlife and human settlement. Shilphata is an accurate illustration that showcases that humans can mingle with nature.'
        ]
    })







    const [data1, setdata1] = useState({
        type: 'full',
        title: 'Social Infra Behavior Is What We Do',
        imageLink: image2,
        desc: [
            'Despite a new reality shaped by the pandemic, construction activity continues to thrive in Shilphata, where developers are moving ahead with significant infrastructure improvements that are transforming the place. Government projects like flyover construction and widening of Kalyan - Shilphata road has brought ease to commuters.',
            'Shilphata\'s geographical location makes it close to other essential areas like Thana, Dombivli, Kalyan and Navi Mumbai. This feature gives you the convenience to avail the communal facilities offered in other cities as well.',
            'The locals here highly recommend the authentic Dhaba style food available at many hotels in Shilphata. In attachment, there is a plethora of restaurants, nightlife hotspots, shopping destinations and events to enjoy by everyone.\n',
            'Hospitals and clinics here have dedicated and expert clinicians to look after you in a very scenario.',
            'Because of its central location, Shilphata gives a chance to work at neighbouring towns and come home for that deep sound sleep.',
            'Eurokids, Gurukul English School, Rainbow English School and many more provide high-level educational facilities.',
            'The hot spot for real estate Shilphata is a highly affordable place compared to its neighbouring towns Thana and Kalyan-Dombivli.'

        ]
    })
    const [data2, setdata2] = useState({
        type: 'left',
        title: 'Nature, Building Blocks of Memories!',
        imageLink: image3,
        desc: [
            'Spectacular landscape, picturesque waterfalls, rugged mountains and rolling hillsides - it\'s all here. No wonder Shilphata is becoming so popular for weekend trips.',
            'Mesmeric sunrise from behind the hills will raise you in the morning with its elegant rays. The community parks here are a place to feel the freshness in the breeze when you walk around.'
        ]
    })

    const [data3, setdata3] = useState({
        type: 'right',
        title: 'Adorable Lifestyle for Everyone\n',
        imageLink: image4,
        desc: [
            'By bringing together a range of initiatives and activities, Shilphata has created accessible engagement for its citizens. It is a town that is destined to grow due to its attractive living habitat.\n',
            'An ordinary day can turn into an extraordinary experience with the beauty of Shilphata hills.'
        ]
    })






    const [pointOfIntrestData,setpointOfIntrestData] = useState({
        pointOfIntrest: [
            {
                title:'What to look for?',
                desc:'The significant advantage to live in Chembur is its central location which offers excessive connectivity to all corners of Mumbai.'
            },
            {
                title:'An Active Lifestyle Full of Events',
                desc:'Are you looking to change yourself into an active person full of energy? No worries, Chembur has 30 green spaces that are best for outdoor exercise or playing sports.'
            },
            {
                title:'Nature Blessed',
                desc:'Living in Chembur is like revitalizing yourself with fresh air and greenery. Moreover, you get the experience of both the hillside and seaside of Mumbai.'
            },
            {
                title:'The Market',
                desc:'Chembur has a prominent place in the real estate market, owing to its well-developed residential locality.'
            },
            {
                title:'Soaring High Above',
                desc:'Skyscrapers here gives you an enormous city view. Your balcony turns into a theatre when it showcases glowing nightlife.'
            }
        ],
        detail:  {
            title:'Specifics',
            desc:'When in Chembur, walk through the leafy bylanes that create a pleasant atmosphere. Chembur is located centrally in the city; as such, it is easily linked to rest of the Mumbai for socializing and work. You can reach BKC or South Mumbai in just less than 20 minutes. To enjoy your weekends outside Mumbai, you can exit Chembur via Vashi in just 15 minutes.',
            image:pointOfIntrestImage,
        },
        imagelink: null
    });







    const [sectiondata, setSectionData] = useState(

        {
            heading: 'Nearby Areas or Neighbourhoods',
            list: [
                {
                    data: {
                        title: 'Nearby Areas or Neighbourhoods',
                        redirectLink:'/detail/ghansoli-sports-city'
                    },
                    style: {
                        backgroundImage: ghansolliimage1,
                        height: '300px',

                    }


                },
                {
                    data: {
                        title: 'Chembur City Centre',
                        redirectLink:'/detail/chembur-city-centre'
                    },

                    style: {
                        backgroundImage: homeimage,
                        height: '300px'

                    }


                },
                {
                    data: {
                        title: 'Shilphata City Junction ',
                        redirectLink:'/detail/shilphata-city-junction'
                    },
                    style: {
                        backgroundImage: chamburimage,
                        height: '300px'

                    }


                },
                {
                    data: {
                        title: 'Kharghar Rolling',
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

    return (
        <div className='GhansoliSportsCityMain'>
            <Header/>
            <CommunitiesDescription communitiesDescriptionData={data}/>
            <PointOfIntrestSection pointOfIntrestData={pointOfIntrestData}/>
            <CommunitiesDescription communitiesDescriptionData={data1}/>
            <CommunitiesDescription communitiesDescriptionData={data2}/>
            <CommunitiesDescription communitiesDescriptionData={data3}/>
            <Communities communitiesData={sectiondata1} title/>
            <Communities communitiesData={sectiondata} title/>
            <Footer/>
        </div>
    )
}

export default ShilphataCityJunction;

