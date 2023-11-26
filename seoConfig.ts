import { DefaultSeoProps } from 'next-seo';

const SEO: DefaultSeoProps = {
    title: "Anas Fantes",
    description: "Welcome to the personal website of Anas Fantes and discover a curated portfolio of web projects, reflecting a blend of innovation and technical skill.",
    openGraph: {
        type: 'website',
        locale: 'en_EN',
        url: 'https://www.anasfantes.vercel.app/',
        site_name: 'Anas Fantes',
    },
    additionalMetaTags: [
        {
            name: 'keywords',
            content: 'Front-end Developer, Web Development, JavaScript, React, Next.js, TypeScript, Portfolio'
        },
        {
            name: 'author',
            content: 'Anas Fantes'
        },
        {
            name: 'description',
            content: "Welcome to the personal website of Anas Fantes and discover a curated portfolio of web projects, reflecting a blend of innovation and technical skill."
        }
    ],
};

export default SEO;