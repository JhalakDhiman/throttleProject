import { Link, NavLink } from "react-router-dom";
import home1 from '../assets/home1.jpg'
import home2 from '../assets/home2.jpg'
import video from '../assets/video.mp4'


export default function Home() {

  return (
    <div className="min-h-screen bg-richblack-900 flex flex-col items-center mb-44 justify-center">

      {/* Hero Banner */}
      <section className="relative flex justify-center ">
        <div className="mx-3 my-16 shadow-[10px_-5px_50px_-5px] shadow-blue-200 w-[900px]">
                    <video muted loop autoPlay className="shadow-[20px_20px_rgba(255,255,255)]"
                     >
                        <source src={video} type="video/mp4"></source>
                     </video>
                </div>
      </section>

      {/* Categories */}
      <div className="flex mx-auto mt-20 w-[80%] items-center">
        <div className="w-[50%] ">
          <img src={home1} alt="home1" className="w-[400px] shadow-[-1px_-1px_15px_0px] shadow-[#fd1d1db9]   rounded-lg"/>
        </div>
        <div className="w-[50%] flex flex-col gap-4 text-richblack-5">
            <h1 className="text-2xl font-semibold">Not Just a Store. A Style Statement.</h1>
            <p>Discover products that do not just fit — they define you.We curate bold looks, timeless essentials, and the trends you did not know you needed — until now.</p>
            <NavLink className='bg-richblack-800 text-richblack-5 p-2 w-[29%] rounded-md' to='/category'>View All Categories</NavLink>
        </div>
      </div>

      <div className="flex flex-row-reverse mx-auto gap-36 mt-20 w-[80%] items-center">
        <div className="w-[50%]">
          <img src={home2} alt="home2" className="w-[400px] rounded-lg shadow-[-1px_-1px_15px_0px] shadow-[#fd1d1db9]"/>
        </div>
        <div className="w-[50%] flex flex-col gap-4 text-richblack-5">
            <h1 className="text-2xl font-semibold">Your Cart Called — It Misses You.</h1>
            <p>From everyday essentials to must-have exclusives, we have got it all waiting.back in and discover why thousands trust us to level up their lifestyle.</p>
            <NavLink className='bg-richblack-800 text-richblack-5 p-2 w-[33%] rounded-md' to='/category'>View All Categories</NavLink>
        </div>
      </div>

    </div>
  );
}
