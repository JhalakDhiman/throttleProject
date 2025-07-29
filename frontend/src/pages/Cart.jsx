import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';


const Cart = () => {

    const { cart } = useSelector((state) => state.cart);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        console.log(cart);
        setAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart])

    return (
        <div className="w-10/12 mx-auto min-h-[100vh]">
            <div>
                {
                    (cart?.length > 0) ?
                        (
                            <div className="flex gap-x-16">
                                <div className=" w-7/12">
                                    {
                                        cart.map((item) => {
                                            return (
                                                <CartItem key={item.id} item={item}></CartItem>
                                            )
                                        })
                                    }
                                </div>

                                <div className="w-5/12 flex flex-col justify-between py-10 ">
                                    <div className="mt-10">
                                        <p className="text-[#15803D] font-bold text-3xl">Your Cart</p>
                                        <p className="text-[#15803D] font-bold text-5xl mb-6">Summary</p>
                                        <p className="text-richblack-50 font-bold text-[20px]">Total Items : <span className="font-semibold">{cart.length}</span></p>
                                    </div>
                                    <div className="flex flex-col gap-y-6">
                                        <p className="font-bold text-richblack-50 text-2xl">Total Amount :<span className="font-semibold text-richblack-100"> ${amount}</span></p>
                                        <button className="flex justify-center items-center px-7 py-3 rounded-xl font-bold hover:border-[#15803D] border-2 text-xl bg-[#15803D]
                         text-white transition-all duration-300 ease-linear hover:text-[#15803D] hover:bg-[white] hover:border-2">Check Out Now</button>
                                    </div>

                                </div>

                            </div>
                        ) :
                        (
                            <div className="w-full h-[90vh] flex flex-col gap-y-8 justify-center items-center">
                                <p className="text-[#374151] text-[23px] font-bold">Your Cart is empty !</p>
                                <NavLink to='/'>
                                    <button className="flex justify-center items-center px-7 py-3 rounded-xl font-bold hover:border-[#16A34A] border-2 text-xl bg-[#16A34A]
                         text-white transition-all duration-300 ease-linear hover:text-[#16A34A] hover:bg-[white] hover:border-2">Shop Now</button>
                                </NavLink>
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default Cart
