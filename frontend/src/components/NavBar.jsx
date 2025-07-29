import React from 'react'
import Logo from '../assets/logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronDown } from "react-icons/fa6";
import { setProduct } from '../redux/slices/ProductSlice';
import { logout } from '../services/operations/authApis';

const NavBar = () => {

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth)

  const setProd = (prod) => {
    dispatch(setProduct(prod.sn));
  }

  const navigate = useNavigate();

  const subLinks = [
    {
      sn: "all"
    },
    {
      sn: "tees"
    },
    {
      sn: "suitcases"
    },
    {
      sn: "bags"
    },
    {
      sn: "heels"
    },
    {
      sn: "jeans"
    },
    {
      sn: "mhs"
    },
    {
      sn: "whs"
    },
    {
      sn: "zippers"
    },
    {
      sn: "wallets"
    },
    {
      sn: "shoes"
    },
    {
      sn: "coats"
    },
  ]

  const { cart } = useSelector((state) => state.cart);
  return (
    <div className="flex bg-richblack-900 w-full h-[90px] border-b-[1px] border-richblack-800">
      <div className="w-9/12 mx-auto flex justify-between items-center">
        <div>
          <NavLink to='/'>
            <img className="w-[172px]" src={Logo}></img>
          </NavLink>
        </div>
        <div className="flex gap-x-7 relative">
          <NavLink to='/'>
            <p className="text-white hover:text-[#16A34A]" >Home</p>
          </NavLink>
          <NavLink to='/about'>
            <p className="text-white hover:text-[#16A34A]" >About</p>
          </NavLink>
          <div className="relative group">

            <div className="flex gap-2 items-center text-richblack-5">
              <p>Category</p>
              <FaChevronDown />
            </div>

            <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
              <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5">
              </div>
              {
                subLinks.length > 0
                  ? (
                    <div className="flex flex-col">
                      {
                        subLinks.map((link, index) => (
                          <div>
                            {
                              link.sn == "all" ? (
                                <div
                                  onClick={() => {
                                    navigate('/category')
                                  }}
                                  className="text-richblack-800 rounded-md  flex items-center p-3 hover:bg-richblack-100 text-[16px] ">
                                  {link.sn}
                                </div>
                              ) : (
                                <div
                                  onClick={
                                    () => {
                                      setProd(link)
                                      navigate('/product-details')
                                    }
                                  }
                                  className="text-richblack-800 rounded-md  flex items-center p-3 hover:bg-richblack-100 text-[16px] ">
                                  {link.sn}
                                </div>
                              )
                            }
                          </div>
                        ))
                      }
                    </div>
                  )
                  : (<div>sorry</div>)
              }

            </div>

          </div>
          <NavLink to='/contact'>
            <p className="text-white hover:text-[#16A34A]" >Contact</p>
          </NavLink>
        </div>
        <div>
          {
            token == null ? (
              <div className='flex gap-2'>
                <Link to='/login'>
                  <div className="text-richblack-100 cursor-pointer text-[16px] font-semibold border border-richblack-700 bg-richblack-800 px-3 py-2 rounded-lg">
                    Log in
                  </div>
                </Link>

                <Link to='/signup'>
                  <div className="text-richblack-200 cursor-pointer text-[16px] font-semibold border border-richblack-700 bg-richblack-800 px-3 py-2 rounded-lg">
                    Signup
                  </div>
                </Link> 

              </div>
            ) : (
              <div className='flex gap-6 items-center'>
                <NavLink to='/cart'>
                  <FaCartShopping className="text-2xl " color="white" />
                  {
                    cart?.length > 0 &&
                    <span className="bg-[#16A34A] animate-bounce w-[20px] h-[20px] rounded-full  flex justify-center items-center ease-in-out text-white absolute right-[260px] transition-all duration top-6">{cart.length}</span>
                  }
                </NavLink>
                <button onClick={()=>{
                  dispatch(logout())
                }}>
                  <div className="text-richblack-200 cursor-pointer text-[16px] font-semibold border border-richblack-700 bg-richblack-800 px-3 py-2 rounded-lg">
                    Logout
                  </div>
                </button> 
              </div>
            )
          }

        </div>
      </div>
    </div>
  )
}

export default NavBar
