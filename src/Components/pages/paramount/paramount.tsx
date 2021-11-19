import React, {useState, useEffect, useRef, useCallback} from 'react';
import './paramount.css';
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
import image1 from "../../../assets/images/paramount/para6.jpg";
import image2 from "../../../assets/images/paramount/para7.jpg";
import image3 from "../../../assets/images/swiss/swiss7.jpg";
import image4 from "../../../assets/images/swiss/swiss8.jpg";
import image5 from "../../../assets/images/paramount/para3.jpg";
import image6 from "../../../assets/images/paramount/para4.jpg";
import image7 from "../../../assets/images/paramount/para7.jpg";
import walkThroughImage from '../../../assets/images/img.png'
import DetailBanner from "../../detail-banner/detail-banner";
import Banner  from "../../../assets/images/paramount/para1.jpg";
import DescriptionLogo from "../../../assets/images/paramount/paramountlogo2.png";
import DescriptionBanner from "../../../assets/images/paramount/para2.jpg";
import floorplancreative from "../../../assets/images/floorplancreative.jpeg";
import Amenities1 from '../../../assets/images/icon/fitness.svg';
import Amenities2 from '../../../assets/images/icon/restaurant.svg';
import Amenities3 from '../../../assets/images/icon/terrec.svg';
import Amenities4 from '../../../assets/images/icon/home-icon-02.png';
import Amenities5 from '../../../assets/images/icon/kids.png';
import Amenities6 from '../../../assets/images/icon/accupreasure.png';


import features1  from '../../../assets/images/icon/stclr1.jpg';
import features2  from '../../../assets/images/icon/stclr2.jpg';
import features3  from '../../../assets/images/icon/stclr3.jpg';
import features4  from '../../../assets/images/icon/stclr4.jpg';
import features5  from '../../../assets/images/icon/stclr8.jpg';
import features6  from '../../../assets/images/icon/stclr7.jpg';
import afterRegisterFloorPlanImage from "../../../assets/images/paramount/1bhkA.jpg";
import afterRegisterFloorPlanImage1 from "../../../assets/images/paramount/1bhkB.jpg";
import afterRegisterFloorPlanImage2 from "../../../assets/images/paramount/2bhkprime.jpg";
import afterRegisterFloorPlanImage3 from "../../../assets/images/paramount/2bhkoptima.jpg";
import Pdf2 from '../../../assets/pdf/Paramount-MahaRERA-Certificate.pdf';
import ContactFormDialog from "../../contact-form-dialog/contact-form-dialog";
import EnquireForm from "../../enquire-form/enquire-form";

function Paramount(props) {
    const [openContactDialog,setContatDiaog] = useState(false);
    const [florPlanList,setFloorPlanList] =  useState([
        {
            btnTitle: '1 BHK TYPE A',
            title:'1-Bedroom Apartment Type A',
            totalArea: null,
            carpetArea:'382.01 sqft',
            balconyArea:'42.62 sqft',
            capboardArea:'9.04 sqft',
            image: floorplancreative,
            afterRegistraionFloorPlanImage:afterRegisterFloorPlanImage
        },
        {
            btnTitle: '1 BHK TYPE A',
            title:'1-Bedroom Apartment Type B',
            totalArea: null,
            carpetArea:'378.02 sqft',
            balconyArea:'42.62 sqft',
            capboardArea:'9.04 sqft',
            image: floorplancreative,
            afterRegistraionFloorPlanImage:afterRegisterFloorPlanImage1

        },
        {
            btnTitle: '2 BHK Prime',
            title:'2-Bedroom Apartment Prime',
            totalArea:null,
            carpetArea:'564.35 sqft',
            balconyArea:'49.94 sqft',
            image: floorplancreative,
            capboardArea:'22.49 sqft',
            afterRegistraionFloorPlanImage:afterRegisterFloorPlanImage2

        },
        {
            btnTitle: '2 BHK Optima',
            title:'2-Bedroom Apartment Optima',
            totalArea:null,
            carpetArea:'522.58 sqft',
            balconyArea:'49.94 sqft',
            capboardArea:'20.66 sqft',
            image: floorplancreative,
            afterRegistraionFloorPlanImage:afterRegisterFloorPlanImage3

        }
    ])

    const [propertyDetailDescriptionSection,setpropertyDetailDescriptionSection] = useState({
        banner:DescriptionBanner,
        logo:DescriptionLogo,
        title:'Reaching New Heights',
        desc:'Paramount is a project where luxury meets affordability, city meets nature and future meets present. The project feature to high-rise tower with innovatively planned 1 & 2 BHK homes along with the grand showrooms and retail spaces. The key feature of the project is its location which is the most sought-after upcoming residential hub the Shilphata Circle, under the Thane Municipal Corporation.',
        buttonsList: [
            {
                btntext:'DisCover More',
                buttonLink: null,
                buttonFunction: () => {
                    setContatDiaog(true);
                }
            },
            {
                btntext:'View Rera',
                buttonLink: Pdf2
            },

        ]
    })
    const [imageList,setImageList] = useState([
        {
            image:image1,
            col:6,
            responsiveCol: 12
        } ,
        {
            image:image2,
            col:6,
            responsiveCol: 12
        }

    ])
    const [imageList2,setImageList2] = useState([
        {
            image:image5,
            col:6,
            responsiveCol: 12
        } ,
        {
            image:image6,
            col:6,
            responsiveCol: 12
        } ,
        {
            image:image7,
            col:12,
            responsiveCol: 12
        } ,

    ])
    const [walkthroughInfo,setwalkthroughInfo] = useState({
        desc:`Paramount brings to you the finest living experience in smartly design 1 & 2 BHK apartments developed with essential amenities and strategically placed at the core of the town and ensured simplified living. At paramount walk into a property that emanates class amenities like fully air-conditioned gymnasium, indoor games arena, landscape and sculptured garden, children's play area with separate toddler's zone, jogging and reflexology track, gazebo with a seating area and many others.`,
        videoWalkhthrough: true,
        images:[
            {
                imageLink:walkThroughImage,
                btnText:'OverAll',
                videoLink: 'https://www.youtube.com/embed/kX4Ib7dKaWM',
            },
        ]
        // iframeLinks:[
        //     {
        //         iframeLink:'https://app.lapentor.com/sphere/1-bhk',
        //         btnText:'1 BHK'
        //     },
        //     {
        //         iframeLink:'https://app.lapentor.com/sphere/2-bhk',
        //         btnText:'2 BHK'
        //     },
        //     {
        //         iframeLink:'https://app.lapentor.com/sphere/35-bhk',
        //         btnText:'3.5 BHK'
        //     },
        // ]
    })

    const [videoprasentationdata,setvideoprasentationdata] =  useState({
        title:'Video Presentation',
        subtitle: 'Inhabit the Lap of Luxury',
        link:'https://www.youtube.com/embed/jYCTJ2QLUr4',
    })


    const [amenitiesFeaturesData,setamenitiesFeaturesData] = useState({
        title: 'Amenities & Features',
        amenitiesList:[
            {
                icon:Amenities1,
                title: 'Jogging Park',
                subtitle:null,
            },
            {
                icon:Amenities2,
                title: 'Multipurpose Court',
                subtitle:null,
            },
            {
                icon:Amenities3,
                title: 'TGazebo With Seating Area',
                subtitle:null,
            },
            {
                icon:Amenities4,
                title: 'Recreational Garden',
                subtitle:null,
            },
            {
                icon:Amenities5,
                title: 'Kids Play Area',
                subtitle:null,
            },

            {
                icon:Amenities6,
                title: 'Accupressure Pathway',
                subtitle:null,
            },

        ],
        featuresList: [
            {
                icon:features1,
                title: '11 Minutes',
                subtitle:'to Station',
            },
            {
                icon:features2,
                title: '10 Minutes',
                subtitle:'to School',
            },
            {
                icon:features3,
                title: '10 Minutes',
                subtitle:'to Mall/Market',
            },
            {
                icon:features4,
                title: '80 Minutes',
                subtitle:'to Airport',
            },
            {
                icon:features5,
                title: '5 Minutes',
                subtitle:'to Hospital',
            },
            {
                icon:features6,
                title: '5 Miutes',
                subtitle:'to Bank/ATMs',
            },
        ]


    });
    const [propertySummaryInfo,setpropertySummaryInfo] = useState({
        StartingPrice: 'INR 41 L',
        StartingArea:'385 sq.ft',
        BookingAmount:'INR 51K'
    });

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    const onSubmit = () => {
        localStorage.setItem('registration',true);
        setContatDiaog(false);
    }
    useEffect(()=>{
        setContatDiaog(true);
    },[])

    return (
        <div className='ParaMountMain'>
            <Header/>
            {
                openContactDialog &&  <ContactFormDialog closeDialog={setContatDiaog} onsubmitevent={onSubmit}/>
            }
            <DetailBanner banner={Banner}/>
            <PropertyDetailDescriptionSection openContacctDialog={setContatDiaog} propertyDetailDescriptionSection={propertyDetailDescriptionSection}/>
            <PropertySummaryInfo propertySummaryInfo={propertySummaryInfo}/>
            <VideoPresntationSection videoprasentationdata={videoprasentationdata}/>
            <AmenitiesAndFeaturesSection amenitiesFeatures = {amenitiesFeaturesData}/>
            <FloorPlanSection florPlanList={florPlanList}/>
            <PropertyContactSection/>
            <Gallary imagelist={imageList2} title/>
            <WalkThroughSection walkthroughInfo={walkthroughInfo}/>
            <Gallary imagelist={imageList}/>

            <Footer/>
            <EnquireForm/>
        </div>
    )
}

export default Paramount;

