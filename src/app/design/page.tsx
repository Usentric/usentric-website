import IndividualPage from '@/components/IndividualPage';

export default function UIPage() {
    const headerInfo = {
        pageTitle: "UI/UX Design",
        title: "Elevate Your Digital Presence with Our UX/UI Services",
        body: "Our UX/UI design services are crafted to help your brand stand out in today's competitive digital landscape. We focus on creating intuitive, aesthetically pleasing digital experiences that resonate with your audience and keep them engaged.",
        homeImgSrc: "/c38907ca20ed44e84323d3117fa634d8.png"
    }
    const bodyInfoData = [
        {
            title: "Deep User Insights",
            body: "Our design process starts with understanding your users. Through meticulous research and data analysis, we identify your audience's needs and preferences, forming the foundation of every decision we make."
        },
        {
            title: "Cutting-Edge Technology",
            body: "Our designers stay ahead of trends and leverage the latest tools to create responsive, high-performing designs. From wireframes to final prototypes, we ensure seamless functionality across all devices."
        },
        {
            title: "Tailored Design Solutions",
            body: "We don’t believe in one-size-fits-all. Our team develops customized design strategies that align with your brand's unique identity and goals. Whether it's revamping an existing interface or starting from scratch, we ensure your vision is at the forefront."
        },
        {
            title: "Continuous Improvement",
            body: "We believe design is an evolving process. Our iterative approach ensures that each design is tested, refined, and improved, guaranteeing optimal usability and engagement."
        }
    ]

    const serviceOfferingData = [
        {
            title: "UX Research & Strategy",
            body: "Understand your users, refine your goals, and develop a clear path forward."
        },
        {
            title: "Wireframing & Prototyping",
            body: "Visualize your product with interactive prototypes before full-scale development."
        },
        {
            title: "UI Design",
            body: "Bring your brand to life with visually stunning and cohesive design elements."
        },
        {
            title: "High-Fidelity Mockups",
            body: "High Fidelity Mockups are the closest testable medium to the real deal."
        },
        {
            title: "Usability Testing",
            body: "Validate designs with real users to ensure intuitive navigation and satisfaction."
        },
        {
            title: "Design System Development",
            body: "Establish a cohesive design language that maintains consistency across all your products."
        }
    ]

    return(
        <IndividualPage headerInfo={headerInfo} bodyInfoData={bodyInfoData} serviceOfferingData={serviceOfferingData}/>
    )
}