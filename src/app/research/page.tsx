import IndividualPage from "@/components/IndividualPage"

export default function productPage() {

    const headerInfo = {
        pageTitle: "User Research",
        title: "Uncover Key Insights with Our User Research Services",
        body: "Understanding your users is the cornerstone of creating meaningful digital experiences. At Usentric, our user research services empower your business to connect deeply with its audience. By identifying user needs, behaviors, and motivations, we equip you with actionable insights that drive impactful design and development strategies. ",
        homeImgSrc: "/6fa9af47672cac31b3327bb9e6d34262.jpg",
    }
    const bodyInfoData = [
        {
            title: "Comprehensive Research Methodology",
            body: "We blend qualitative and quantitative research methods to gather valuable data. From in-depth interviews to surveys, ethnographic studies, and analytics, we use the right mix to uncover the insights that matter."
        },
        {
            title: "Collaborative Strategy",
            body: "We work closely with your team to identify core objectives and tailor a research strategy that aligns with your business goals, ensuring you receive relevant and actionable findings."
        },
        {
            title: "Real-World Testing",
            body: "We don’t believe in one-size-fits-all. Our team develops customized design strategies that align with your brand's unique identity and goals. Whether it's revamping an existing interface or starting from scratch, we ensure your vision is at the forefront."
        },
        {
            title: "Insight-Driven Recommendations",
            body: "Our findings come with practical recommendations. We provide detailed reports and data-backed solutions that can be directly applied to improve your product's design and performance."
        }
    ]

    const serviceOfferingData = [
        {
            title: "User Interviews & Surveys",
            body: "Gain direct insights into user behavior, preferences and motivations"
        },
        {
            title: "Persona Development:",
            body: "Build detailed personas that guide your design strategy. "
        },
        {
            title: "Usability Testing",
            body: "Identify usability issues through real-world testing and deliver actionable solutions"
        },
        {
            title: "A/B Testing",
            body: "Compare variations to determine which elements drive optimal engagement"
        },
        {
            title: "Analytics & Data Analysis",
            body: "Utilize data to track user interactions and identify areas of improvement"
        },
        {
            title: "Journey Mapping",
            body: "Develop comprehensive journey maps that highlight opportunities for improvements"
        }
    ]
    return (
        <IndividualPage headerInfo={headerInfo} bodyInfoData={bodyInfoData} serviceOfferingData={serviceOfferingData} />
    )
}