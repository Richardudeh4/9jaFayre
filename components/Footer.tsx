import Link from "next/link";
import {SocialIcon} from 'react-social-icons';

const footerLinks = [
    {
        title: "Our portfolio",
        links: [
            { name: "Ethereal" },
            { name: "NIRSAL"  },
            { name: "Puzzle Stitches"},
            { name: "See All"},
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "goshencityschoolschannel@gmail.com", link: "goshencityschoolschannel@gmail.com" },
            { name: "08036960509", link: "tel:+2348036960509" },
            {name: "Plot 11-14 living spring avenue, Opp. Police detectives college, Enugu", link: "Plot 11-14 living spring avenue, Opp. Police detectives college, Enugu"}
        ],
    },
  ];
const Footer = () => {
  return (
    <footer className='max-container max-w-7xl mx-auto py-6 text-white'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            {/* <img
              src={footerLogo}
              alt='logo'
              width={150}
              height={46}
              className='m-0'
            /> */}
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
          Providing brand and business innovation to all for-profit ventures. We deliver insights that power your business for future gains and build customer loyalty.
          </p>
          <div className='flex items-center gap-5 mt-8'>
       
         <SocialIcon url="https://www.instagram.com/the9jafayre?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="/>
         
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white- hover:text-slate-gray'
                    key={link.name}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          {/* <img
            src={copyright}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          /> */}
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;

// import Link from 'next/link'
// import React from 'react'

// const Footer = () => {
//   return (
//     <div className='bg-[#0D0C0A] max-w-7xl z-10 mx-auto'>
//         <div className='my-8'>
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-white'>
//         <div className='pt-10'>
//             <h1 >
//             Providing Branding and business innovation to all for-profit ventures we deliver insights that power your business for future gains and build customer loyalty
//             </h1>
//         </div>
//     <div className='pt-0'>
//         <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
//             <div className='flex flex-col space-y-3'>
//                 <h1 className='font-semibold font-inter'>Our Portfolio</h1>
//                 <div className='pt-6'>
//                 <h1>Ethereal</h1>
//                 <h1 className='uppercase'>Nirsal</h1>
//                 <h1>Puzzle Stitches</h1>
//                 <Link href="./" className='underline text-[#3DBDB5]'>
//                 Sell All
//                 </Link>
//             </div> 
//             </div>
//             <div className='flex flex-col space-y-3'>
//             <h1 className='font-semibold font-inter'>Quick Links</h1>
//             <div className='pt-6'>
//             <h1>Work with Us</h1>
//             <h1 >Our Recent Projects</h1>
//             <h1>Insights</h1>
//             </div>    
//     </div>
//     <div className='pt-6 max-w-[506px] py-4'>
//     <p className='font-inter'>Providing brand and business innovation to all for-profit ventures. We deliver insights that power your business for future gains and build customer loyalty.</p>
//     </div>
//     </div>
//     </div>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Footer