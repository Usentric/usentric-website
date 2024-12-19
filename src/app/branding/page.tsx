import IndividualPage from '@/components/IndividualPage';

export default function UIPage() {
    const headerInfo = {
        pageTitle: "Beginning-to-End Branding",
        title: "Build a Memorable Identity with Our Branding Services",
        body: "A powerful brand is more than a logo—it's the story, emotion, and promise that connects your business to its audience. At Usentric, we specialize in beginning-to-end branding services, creating distinctive identities that resonate deeply and leave a lasting impact.",
        homeImgSrc: "/108ced0d9769a4725235123d6ec7ce10.jpg"
    }
    const bodyInfoData = [
        {
            title: "Holistic Brand Strategy",
            body: "Our comprehensive approach ensures that every element of your brand aligns with your mission, values, and audience expectations. We shape a unified identity that stands strong in any market."
        },
        {
            title: "Insight-Driven Approach",
            body: "We conduct extensive market and audience research to understand the landscape and uncover opportunities. This allows us to position your brand effectively and ensure it resonates with your target market."
        },
        {
            title: "Creative brand Identity",
            body: "From logos to color schemes, typography, and messaging, we craft a visual identity that embodies your brand's personality. Every element is carefully designed to be recognizable, cohesive, and memorable."
        },
        {
            title: "Enduring Relationships",
            body: "We help you create consistent brand experiences across all touchpoints, ensuring that your audience receives a unified message whether they're interacting with your website, social media, packaging, or customer support."
        }
    ]

    const serviceOfferingData = [
        {
            title: "Brand Strategy & Positioning",
            body: "Define a brand strategy that aligns with your goals and identifies your unique value proposition."
        },
        {
            title: "Market Research & Analysis",
            body: "Understand the market landscape, audience needs, and competitor positioning."
        },
        {
            title: "Visual Identity Design",
            body: "Develop a cohesive visual identity that includes logos, color schemes, typography, and design guidelines."
        },
        {
            title: "Brand Messaging & Voice",
            body: "Create compelling messaging that defines your brand’s voice and tells your unique story."
        },
        {
            title: "Brand Guidelines",
            body: "Establish comprehensive guidelines to ensure consistent application across all platforms."
        },
        {
            title: "Implementation and Launch",
            body: "Launch your new identity effectively and ensure a seamless transition across all customer touchpoints."
        }
    ]

    return(
        <IndividualPage headerInfo={headerInfo} bodyInfoData={bodyInfoData} serviceOfferingData={serviceOfferingData}/>
    )
}