import IndividualPage from "@/components/IndividualPage"

export default function developmentPage() {

    const headerInfo = {
        pageTitle: "Web Development",
        title: "Transform Your Online Presence with Our Web Development Services",
        body: "Our UX/UI design services are crafted to help your brand stand out in today's competitive digital landscape. We focus on creating intuitive, aesthetically pleasing digital experiences that resonate with your audience and keep them engaged.",
        homeImgSrc: "/7642fc6a659b98bf4cf5ceeecc32e23d.jpg",
    }
    const bodyInfoData = [
        {
            title: "Custom Development",
            body: "We build websites that are custom-designed for your specific business needs and goals. Whether you need an e-commerce platform or a feature-rich interactive portal, our solutions are built from the ground up to ensure perfect alignment with your objectives."
        },
        {
            title: "Responsive Design",
            body: "With the increasing use of mobile devices, having a mobile-friendly website is essential. Our web development ensures that your site looks great and functions flawlessly on all devices, from desktops to smartphones."
        },
        {
            title: "SEO Optimizeds",
            body: "We integrate SEO best practices from the ground up, ensuring your website ranks well on search engines and reaches its target audience effectively."
        },
        {
            title: "Scalable Solutions",
            body: "As your business grows, so should your website. We build scalable web solutions that can grow with your business, accommodating increased traffic and expanded content without losing performance."
        }
    ]

    const serviceOfferingData = [
        {
            title: "Custom Design & Development",
            body: "Create unique websites that reflect your brand and meet your specific functionality."
        },
        {
            title: "E-Commerce Solutions",
            body: "Build robust online stores with custom carts, payments, and intuitive product management."
        },
        {
            title: "CMS Development",
            body: "Implement content management systems that allow you to easily manage you websites."
        },
        {
            title: "API Integration & Development",
            body: "Enhance your website functionality with seamless API integrations."
        },
        {
            title: "Maintenance & Support",
            body: "Ongoing support and maintenance to ensure your website remains current and stable."
        },
        {
            title: "Hosting Services",
            body: "Use our hosting services to keep your site live, optimized, and fully functional at all times."
        }
    ]
    return(
        <IndividualPage headerInfo={headerInfo} bodyInfoData={bodyInfoData} serviceOfferingData={serviceOfferingData}/>
    )
}