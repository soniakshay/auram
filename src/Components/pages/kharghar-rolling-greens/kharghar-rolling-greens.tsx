import React, {useState, useEffect, useRef, useCallback} from 'react';
import './kharghar-rolling-greens.css';
import Header from "../../header/header";
import Footer from "../../footer/footer";
import {Col, Container, Row} from "react-bootstrap";
import CommunitiesDescription from "../../communities-description/communities-description";
import image1 from "../../../assets/images/kharghar/k1.jpg";
import image2 from "../../../assets/images/kharghar/k5.jpg";
import image3 from "../../../assets/images/kharghar/k4.jpg";
import image4 from "../../../assets/images/kharghar/k3.jpg";
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
import pointOfIntrestImage from '../../../assets/images/kharghar/k2.jpg';

function KhargharRollingGreens(props) {
    const [data, setdata] = useState({
        type: 'left',
        title: 'Welcome to Kharghar\n' +
            'Rolling Greens',
        imageLink: image1,
        desc: [
            'Kharghar is an urban green land with parks, sports fields, woods, lakesides, and gardens that give people the space for physical activity, relaxation, peace, and an escape from the heat. This area initiates the encouragement in developing urban setting around public parks and recreation areas.',
            'The green spaces in Kharghar have provided habitat for various birds, fish, animals, and other organisms while also providing corridors and greenways to link with them.'
            ]
    })


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
                        title: 'Aurum Q Islands Maldives   Aurum Q Islands Santorini '
                    },
                    style: {
                        backgroundImage: gridimage1,
                        height: '300px',
                    }


                },
                {
                    data: {
                        title: 'Aurum Q Park Q6'
                    },

                    style: {
                        backgroundImage: gridimage2,
                        height: '300px'
                    }


                },
                {
                    data: {
                        title: 'Aurum MBP Q2 '
                    },
                    style: {
                        backgroundImage: gridimage3,
                        height: '300px'

                    }


                },
                {
                    data: {
                        title: 'Aurum MBP Q6'
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
            'Iconic architecture and infrastructure, low population density, stunning architecture and a 32-meter wide road that makes driving a breeze make Kharghar an unbeatable place for a homestay. Secure your child\'s future with around 50 renowned educational institutes at Kharghar. Local parks and medical centers like Tata Memorial, MGM, Kharghar Medicity Hospital takes care of all your health care requirements. Kharghar is suitable for all home buyers due to its clean and bio-diverse environmental characteristics.',
            'Many resorts are nested around Kharghar for that short weekend trips. Head to Kharghar to visit the prestigious Utsav Chowk. Asia\'s largest ISKON temple is in the area. Pamper yourself in leisure therapy at the finest shopping malls and multiplexes. The morning splendour is here to wake you up and to get started your day. Glow the nightlife with your peers at Kharghar\'s pubs and restaurants. Every aspect of Kharghar makes it a highly civilized place to live.'
        ]
    })
    const [data2, setdata2] = useState({
        type: 'left',
        title: 'Nature, Building Blocks of Memories!',
        imageLink: image3,
        desc: [
            'Kharghar is ecological heaven that is covered by wetlands, mangroves, hills and multiple living species. You can find various bird species, from vibrant blue kingfisher to the orange-headed thrush.',
            'Here the local and international communities have come forward to conserve the bio-diversity rich Kharghar.'
        ]
    })

    const [data3, setdata3] = useState({
        type: 'right',
        title: 'Adorable Lifestyle for Everyone\n',
        imageLink: image4,
        desc: [
           'Take some time out from your busy day to relax as the area offers an international lifestyle with the finest recreational facilities. Kharghar is India\'s one of the most livable cities that have superlatively connectivity with wide roads.'
        ]
    })






    const [pointOfIntrestData,setpointOfIntrestData] = useState({
        pointOfIntrest: [
            {
                title:'What to look for?',
                desc:'Kharghar lies in the lap of nature as it is surrounded by deep forest and natural waterfalls'
            },
            {
                title:'An Active Lifestyle Full of Events',
                desc:'Keep your calendar busy with handpicking events like a cycling challenge, hiking, marathon run, riverside and forest camping.'
            },
            {
                title:'Nature Blessed',
                desc:'Open your door and communicate with nature as Kharghar have a 200-acre Central Park. One of Asia\'s biggest community parks.'
            },
            {
                title:'The Market',
                desc:'Redefining infra projects like proposed airport, metro and sea links have increased the real estate investment at Kharghar.'
            },
            {
                title:'Soaring High Above',
                desc:'State of the art development keeps on emerging at Kharghar and Taloja symmetrical with its nature bliss beauty.'
            }
        ],
        detail:  {
            title:'Specifics',
            desc:'The smart city of Navi Mumbai, Kharghar, is a posh green city located at the Northernmost tip of the Raigad district. To accumulate everyone in its green space, Kharghar is extended up to Taloja. Proposed airport and coastal road, Soin-Panvel expressway, railway route, upcoming Belapur-Uran rail link, upcoming BKC 2 are some of the rising projects those are just meters away from Kharghar and Taloja.',
            image:pointOfIntrestImage,
        },
        imagelink: null
    });
    return (
        <div className='GhansoliSportsCityMain'>
            <Header/>
            <CommunitiesDescription communitiesDescriptionData={data}/>
            <PointOfIntrestSection pointOfIntrestData={pointOfIntrestData}/>
            <CommunitiesDescription communitiesDescriptionData={data1}/>
            <CommunitiesDescription communitiesDescriptionData={data2}/>
            <CommunitiesDescription communitiesDescriptionData={data3}/>
            {/*<Communities communitiesData={sectiondata1} title/>*/}
            <Communities communitiesData={sectiondata} title/>
            <Footer/>
        </div>
    )
}

export default KhargharRollingGreens;

