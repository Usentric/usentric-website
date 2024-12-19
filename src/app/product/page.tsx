import IndividualPage from "@/components/IndividualPage"

export default function productPage() {

    const headerInfo = {
        pageTitle: "Product Management",
        title: "Achieve Your Goals with Our Product Management Services",
        body: "Building a successful product is a journey that requires strategic vision, meticulous planning, and agile execution. At Usentric, our product management services guide you from ideation to market success. We ensure your product aligns with market needs, business goals, and user expectations to create an unparalleled impact.",
        homeImgSrc: "/6d0abf06215adc1641fe750d02465235.jpg",
    }
    const bodyInfoData = [
        {
            title: "Strategic Road Mapping",
            body: "We work with your team to develop a clear product roadmap that aligns with your vision and business objectives. This comprehensive plan serves as a guiding beacon through each stage of development."
        },
        {
            title: "Market Insight & Analysis",
            body: "Our deep market research helps you identify opportunities, understand competition, and discover unique selling points. This allows you to position your product effectively and gain a competitive edge."
        },
        {
            title: "Customer-Focused Development",
            body: "User needs and expectations are central to our approach. We prioritize features and enhancements that directly address customer pain points and foster loyalty, ensuring the product resonates with your target audience."
        },
        {
            title: "Cross-Functional Collaboration",
            body: "Our product managers bridge the gap between design, engineering, marketing, and other teams, ensuring smooth communication and alignment across departments for seamless product delivery. "
        }
    ]

    const serviceOfferingData = [
        {
            title: "Product Strategy & Vision",
            body: "Develop a strategic vision that aligns with business goals and defines your product's purpose."
        },
        {
            title: "Market Research & Analysis",
            body: "Identify market gaps, analyze competitors, and understand user needs."
        },
        {
            title: "Product Roadmapping",
            body: "Create a detailed roadmap that prioritizes features and milestones for maximum impact."
        },
        {
            title: "Feature Prioritization",
            body: "Decide which features will deliver the greatest value and align with your strategic objectives."
        },
        {
            title: "Go-to-Market Strategy",
            body: "Design a comprehensive launch plan that maximizes market penetration and customer adoption."
        },
        {
            title: "Performance Monitoring & Optimization",
            body: "Continuously analyze product performance and implement data-driven improvements."
        }
    ]
    return (
        <IndividualPage headerInfo={headerInfo} bodyInfoData={bodyInfoData} serviceOfferingData={serviceOfferingData} />
    )
}