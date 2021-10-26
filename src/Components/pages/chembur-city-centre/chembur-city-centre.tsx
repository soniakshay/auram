import React, {useState, useEffect, useRef, useCallback} from 'react';
import './chembur-city-centre.css';
import Header from "../../header/header";
import Footer from "../../footer/footer";
import {Col, Container, Row} from "react-bootstrap";
import CommunitiesDescription from "../../communities-description/communities-description";
import image1 from "../../../assets/images/chembur/c1.jpg";
import image2 from "../../../assets/images/chembur/c5.jpg";
import image3 from "../../../assets/images/chembur/c3.jpg";
import image4 from "../../../assets/images/chembur/c2.jpg";
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
import pointOfIntrestImage from '../../../assets/images/chembur/c4.jpg';

function ChemburCityCentre(props) {
    const [data, setdata] = useState({
        type: 'left',
        title: 'Welcome to Chembur\n' +
            'City Center',
        imageLink: image1,
        desc: [
            'Chembur is a people-friendly city center that has its own unique identity. Indeed called a city center, the area attracts people with its commerce, housing, entertainment and shopping options.',
            'Chembur has superior transport capability that can connect you to the rest of Mumbai within minutes. The convivial vibes of Chembur make you feel energized after a long day of work',
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
            'The locality offers a fit for living and advanced social infrastructure. Chembur flaunts its incomparable connectivity through rail and roadways. Major hospitals like Zen, Apollo Hospital, and Joy hospital provide you with world-class healthcare facilities.,' +
            'Schools like OPLS, St Anthony\'s, RBK International will facilitate in raising the knowledge bar of learners.'
        ]
    })
    const [data2, setdata2] = useState({
        type: 'left',
        title: 'Nature, Building Blocks of Memories!',
        imageLink: image3,
        desc: [
          'Chembur is a centuries-old place that has mentions on the Kanheri Caves inscriptions. Even Cosmas Indicopleustes and Arab explorers have also written about Chembur. When it comes to bon appetite, never miss a finger-licking food at Chembur Camp where food comes at reasonable prices.,' +
          'Many Bollywood celebrities relish the food served by restaurants at camp. One should not miss the Chembur festival celebrated every year, which is a union of food, art, charity camps and pet entertainment.'
        ]
    })

    const [data3, setdata3] = useState({
        type: 'right',
        title: 'Adorable Lifestyle for Everyone\n',
        imageLink: image4,
        desc: [
             'Renowned developers in Chembur offers gated communities and better infrastructure, which is a significant highlight and where you can mingle around with like-minded people. Homes here comes with varied price ranges that suit all income groups.'
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

export default ChemburCityCentre;

