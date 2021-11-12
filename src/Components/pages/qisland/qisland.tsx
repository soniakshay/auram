import React, {useState, useEffect, useRef, useCallback} from 'react';
import './qisland.css';
import Header from "../../header/header";
import Footer from "../../footer/footer";
import {Col, Container, Row} from "react-bootstrap";
import PropertySummaryInfo from "../../property-summary-info/property-summary-info";
import PropertyDetailDescriptionSection
    from "../../property-detail-description-section/property-detail-description-section";
import VideoPresntationSection from "../../video-presentation-section/video-presentation-section";
import AmenitiesAndFeaturesSection from "../../amenitiesAndfeatures/amenities-and-features";
import FloorPlanSection from "../../floor-plan/floor-plan";
import PropertyContactSection from "../../propert-contact-section/property-contact-section";
import WalkThroughSection from "../../walkthrough-section/walkthrough-section";
import Gallary from "../../gallary/gallary";
import image1 from "../../../assets/images/qislands/q-g1.jpg";
import image2 from "../../../assets/images/qislands/q-g2.jpg";
import image3 from "../../../assets/images/qislands/qisland-banner.jpg";


import image4 from "../../../assets/images/qislands/q-g5.jpg";
import image5 from "../../../assets/images/qislands/q-g6.jpg";
import image6 from "../../../assets/images/qislands/q-g7.jpg";
import image7 from "../../../assets/images/qislands/q-g8.jpg";

import DetailBanner from "../../detail-banner/detail-banner";
import Banner from '../../../assets/images/qislands/q-g9.jpg';
import BannerLogo from '../../../assets/images/qislands/q-island-logo.png';
import DescriptionBanner from "../../../assets/images/qislands/qisland-banner2.jpg";
import DescriptionLogo from "../../../assets/images/qislands/q-island-logo2.png";
import floorplancreative from "../../../assets/images/floorplancreative.jpeg";
import Amenities1 from '../../../assets/images/icon/fitness.svg';
import Amenities2 from '../../../assets/images/icon/restaurant.svg';
import Amenities3 from '../../../assets/images/icon/terrec.svg';
import Amenities4 from '../../../assets/images/icon/home-icon-02.png';
import Amenities5 from '../../../assets/images/icon/lounge.svg';
import Amenities6 from '../../../assets/images/icon/library.svg';


import features1 from '../../../assets/images/icon/stclr1.jpg';
import features2 from '../../../assets/images/icon/stclr2.jpg';
import features3 from '../../../assets/images/icon/stclr3.jpg';
import features4 from '../../../assets/images/icon/stclr4.jpg';
import features5 from '../../../assets/images/icon/stclr8.jpg';
import features6 from '../../../assets/images/icon/stclr7.jpg';
import ContactFormDialog from "../../contact-form-dialog/contact-form-dialog";
import videoPrasenationLink from '../../../assets/video/Aurum-Qisland.mp4';
import walkThroughImage1 from '../../../assets/images/qislands/qislands1bhk.jpg';
import walkThroughImage2 from '../../../assets/images/qislands/qislands2bhk.jpg';
import walkThroughImage3 from '../../../assets/images/qislands/qislands3-5bhk.jpg';
import walkThroughImage from "../../../assets/images/img.png";
import afterRegisterFloorPlanImage1 from "../../../assets/images/qislands/a-1bhk.jpg";
import afterRegisterFloorPlanImage2 from "../../../assets/images/qislands/a-2bhks.jpg";
import afterRegisterFloorPlanImage3 from "../../../assets/images/qislands/a-2bhk.jpg";
import afterRegisterFloorPlanImage4 from "../../../assets/images/qislands/a-3-5bhk.jpg";
import afterRegisterFloorPlanImage5 from "../../../assets/images/qislands/a-4-5bhk.jpg";
import pdf1 from '../../../assets/pdf/R4-RERA-Maldives.pdf';
import pdf2 from '../../../assets/pdf/R5-RERA-Santorini.pdf';

function Qisland(props) {
    const [openContactDialog, setContatDiaog] = useState(false);
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    const [florPlanList, setFloorPlanList] = useState([
        {
            btnTitle: '1 Bhk',
            title: '1 Bedroom Apartment',
            totalArea: '505 sqft',
            carpetArea: '435 sqft',
            balconyArea: '53 sqft',
            serviceArea: '17 sqft',
            image: floorplancreative,
            afterRegistraionFloorPlanImage:afterRegisterFloorPlanImage1
        },
        {
            btnTitle: '2 Bhk s',
            title: '2 S-Bedroom Apartment',
            totalArea: '715 sqft',
            carpetArea: '643 sqft',
            balconyArea: '52 sqft',
            serviceArea: '20 sqft',
            image: floorplancreative,
            afterRegistraionFloorPlanImage:afterRegisterFloorPlanImage2

        },
        {
            btnTitle: '2 Bhk L',
            title: '2 L-Bedroom Apartment',
            totalArea: '725 sqft',
            carpetArea: '643 sqft',
            balconyArea: '62 sqft',
            serviceArea: '20 sqft',
            image: floorplancreative,
            afterRegistraionFloorPlanImage:afterRegisterFloorPlanImage3

        },
        {
            btnTitle: '3.5 Bhk',
            title: '3.5 Bedroom Apartment',
            totalArea: '1259 sqft',
            carpetArea: '1112 sqft',
            balconyArea: '111 sqft',
            serviceArea: '36 sqft',
            image: floorplancreative,
            afterRegistraionFloorPlanImage:afterRegisterFloorPlanImage4

        },
        {
            btnTitle: '4.5 Bhk',
            title: '4.5 Bedroom Apartment',
            totalArea: '1492 sqft',
            carpetArea: '1322 sqft',
            balconyArea: '130 sqft',
            serviceArea: '40 sqft',
            image: floorplancreative,
            afterRegistraionFloorPlanImage:afterRegisterFloorPlanImage5

        }
    ])

    const [propertyDetailDescriptionSection, setpropertyDetailDescriptionSection] = useState({
        banner: DescriptionBanner,
        logo: DescriptionLogo,
        title: 'Straight From The Heart',
        desc: 'Welcome to Q Residences Living. A residential haven, which brings out the child in you, lets you indulge in life\'s precious emotions and simply allows you to live life to the fullest. Nestled in Ghansoli\'s prime locale, Q Residences is graced with cre`me-de-la-cre`me recreations, and health features as well as lifestyle comforts that let you do everything you always wanted to.',
        buttonsList: [
            {
                btntext: 'DisCover More',
                buttonFunction: () => {
                    setContatDiaog(true)
                }
            },
            {
                btntext: 'Maldives Rera',
                buttonLink: pdf1
            },
            {
                btntext: 'View Rera',
                buttonFunction: pdf2
            },

        ]
    })

    const [imageList, setImageList] = useState([
        {
            image: image4,
            col: 6,
            responsiveCol: 12
        },
        {
            image: image5,
            col: 6,
            responsiveCol: 12
        },
        {
            image: image6,
            col: 6,
            responsiveCol: 12
        },
        {
            image: image7,
            col: 6,
            responsiveCol: 12
        }

    ])
    const [imageList2, setImageList2] = useState([
        {
            image: image1,
            col: 6,
            responsiveCol: 12
        },
        {
            image: image2,
            col: 6,
            responsiveCol: 12
        },
        {
            image: image3,
            col: 12,
            responsiveCol: 12
        },

    ])

    const [walkthroughInfo, setwalkthroughInfo] = useState({
        desc: `We truly believe that caring, nurtures goodwill & helps build long lasting relationships. So we are going the extra mile to make your life simpler, safer & better. Our Product Features revolve around caring for people, the luxury and their wellness. We have identified and incorporated elements that would make your life easy, help build communities and foster a safer and greener ambiance for your family`,
        videoWalkhthrough: false,
        images: [
            {
                imageLink: walkThroughImage1,
                btnText: '1 BHK'
            },
            {
                imageLink: walkThroughImage2,
                btnText: '2 BHK'
            },
            {
                imageLink: walkThroughImage3,
                btnText: '3.5 BHK'
            },
        ],
        iframeLinks:[
            {
                iframeLink:'https://app.lapentor.com/sphere/1-bhk',
                btnText:'1 BHK'
            },
            {
                iframeLink:'https://app.lapentor.com/sphere/2-bhk',
                btnText:'2 BHK'
            },
            {
                iframeLink:'https://app.lapentor.com/sphere/35-bhk',
                btnText:'3.5 BHK'
            }
            ]
    })

    const [videoprasentationdata, setvideoprasentationdata] = useState({
        title: 'Video Presentation',
        subtitle: 'An Emotion Called Home With A Lifestyle That Surprises You!',
        link: videoPrasenationLink,
        isVideoLink: true
    });

    const [amenitiesFeaturesData, setamenitiesFeaturesData] = useState({
        title: '45+ Amenities & Features',
        amenitiesList: [
            {
                icon: Amenities1,
                title: 'Jogging Park',
                subtitle: 'Gymnasium',
            },
            {
                icon: Amenities2,
                title: 'Turtle Cafe',
                subtitle: 'Indoor Cafe',
            },
            {
                icon: Amenities3,
                title: 'Sunbed Deck',
                subtitle: 'Poolside Deck',
            },
            {
                icon: Amenities4,
                title: 'Coral Spa',
                subtitle: 'Spa & Sauna',
            },
            {
                icon: Amenities5,
                title: 'Working Pods',
                subtitle: 'Co-working Spaces',
            },

            {
                icon: Amenities6,
                title: 'Sea Shelves',
                subtitle: 'Library',
            },

        ],
        featuresList: [
            {
                icon: features1,
                title: '5 Minutes',
                subtitle: 'to Station',
            },
            {
                icon: features2,
                title: '10 Minutes',
                subtitle: 'to School',
            },
            {
                icon: features3,
                title: '5 Minutes',
                subtitle: 'to Mall/Market',
            },
            {
                icon: features4,
                title: '40 Minutes',
                subtitle: 'to Airport',
            },
            {
                icon: features5,
                title: '10 Minutes',
                subtitle: 'to Hospital',
            },
            {
                icon: features6,
                title: '5 Miutes',
                subtitle: 'to Bank/ATMs',
            },
        ]


    });

    return (
        <div className='SwissBoulevardPostalColonyMain'>
            {
                openContactDialog && <ContactFormDialog closeDialog={setContatDiaog}/>
            }
            <Header/>
            <DetailBanner banner={Banner} logo={BannerLogo}/>
            <PropertyDetailDescriptionSection openContacctDialog={setContatDiaog}
                                              propertyDetailDescriptionSection={propertyDetailDescriptionSection}/>
            <PropertySummaryInfo/>
            <VideoPresntationSection videoprasentationdata={videoprasentationdata}/>
            <AmenitiesAndFeaturesSection amenitiesFeatures={amenitiesFeaturesData} moreamenitiesFeatures/>
            <FloorPlanSection florPlanList={florPlanList}/>
            <PropertyContactSection/>
            <Gallary imagelist={imageList2}/>
            <WalkThroughSection walkthroughInfo={walkthroughInfo}/>
            <Gallary imagelist={imageList}/>

            <Footer/>
        </div>
    )
}

export default Qisland;

