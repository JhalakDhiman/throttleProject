import React from 'react'
import logo from '../assets/logo.png'
import FooterList from './FooterList'
import FooterLink2 from '../data/footerLinks';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const data = [
    {
        title: "Company",
        links: [
            { title: "About", link: "/about" },
            { title: "Careers", link: "/careers" },
            { title: "Affiliates", link: "/affiliates" },
        ]
    },
    {
        title: "Resources",
        links: [
            { title: "Articles", link: "/articles" },
            { title: "Blogs", link: "/blogs" },
            { title: "Chart Sheet", link: "/chartsheet" },
            { title: "Code Challenges", link: "/code" },
            { title: "Docs", link: "/docs" },
            { title: "Projects", link: "/projects" },
            { title: "Videos", link: "/videos" },
            { title: "Workspaces", link: "/workspaces" },
        ]
    },
    {
        title: "Support",
        links: [
            { title: "Help Center", link: "/help" },
        ]
    },
    {
        title: "Plans",
        links: [
            { title: "Paid memberships", link: "/paidmembersips" },
            { title: "For Students", link: "/students" },
            { title: "Business Solutions", link: "/business" },
        ]
    },
    {
        title: "Community",
        links: [
            { title: "Forum", link: "/forum" },
            { title: "Chapter", link: "/chapter" },
            { title: "Events", link: "/events" },
        ]
    },
]

const Footer = () => {
    return (
        <div className="w-full bg-richblack-800 p-16">

            <div className="flex lg:flex-row flex-col w-full border-b-[1px] border-richblack-600 pb-7">
                {/* left section */}
                <div className="flex lg:flex-row flex-col justify-between lg:w-[50%] w-full pr-16 border-r-[1px] border-richblack-600">

                    {/* section1 */}
                    <div className="flex flex-col gap-2">
                        <img src={logo} alt="logo" className='w-[170px]'></img>
                        <FooterList data={data[0]} />
                        <div className="flex text-richblack-300 mt-2 gap-2">
                            <FaFacebook />
                            <FaGoogle />
                            <FaTwitter />
                            <FaYoutube />
                        </div>
                    </div>


                </div>

                {/* right section */}

                <div className="flex lg:w-[50%] w-full  justify-between pl-16 ">

                    <FooterList data={FooterLink2[0]} />
                    <FooterList data={FooterLink2[1]} />
                    <FooterList data={FooterLink2[2]} />

                </div>
            </div>

            {/* bottom section */}
            <div className="pt-5 text-richblack-500 flex justify-between cursor-pointer">
                <div className="flex">
                    <div className="border-r-[1px] px-3 hover:text-richblack-50 border-richblack-600">Privacy Policy</div>
                    <div className="border-r-[1px] px-3 hover:text-richblack-50 border-richblack-600">Cookie Policy</div>
                    <div className="hover:text-richblack-50 pl-3">Terms</div>
                </div>
                <div className="flex hover:text-richblack-50 items-center gap-2">
                    Made with <FaHeart style={{color:"red"}}/> by Jhalak 
                </div>
            </div>

        </div>
    )
}

export default Footer