import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import Spinner from '../components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';
import category1 from '../assets/category1.png'
import category2 from '../assets/category2.png'
import category3 from '../assets/category3.png'
import category4 from '../assets/category4.png'
import category5 from '../assets/category5.png'
import category6 from '../assets/category6.png'
import category7 from '../assets/category7.png'
import category8 from '../assets/category8.png'
import category9 from '../assets/category9.png'
import category10 from '../assets/category10.png'
import category11 from '../assets/category11.png'
import { setProduct } from '../redux/slices/ProductSlice';
import { Link } from 'react-router-dom';

const Category = () => {

  const [loading, setLoading] = useState(false);

  const products = [
    { id: 1,sn:"tees", name: "Tees", image: category1, price: "$32-$100" },
    { id: 2, sn:"suitcases", name: "Suitcases", image: category2, price: "$32-$100" },
    { id: 10, sn:"bags", name: "Bags", image: category10, price: "$32-$100" },
    {id: 4, sn:"heels", name: "Women Heels", image: category7, price: "$32-$100"},
    { id: 3, sn:"jeans", name: "Jeans", image: category3, price: "$32-$100" },
    { id: 6, sn:"mhs", name: "Men's Handkerchief", image: category5, price: "$32-$100" },
    { id: 7, sn:"whs", name: "Women's Handkerchief", image: category6, price: "$32-$100" },
    { id: 8, sn:"zippers", name: "Zippers", image: category8, price: "$32-$100" },
    { id: 9, sn:"wallets", name: "Wallets", image: category9, price: "$32-$100" },
    { id: 11, sn:"shoes", name: "Shoes", image: category11, price: "$32-$100" },
    {id: 5, sn:"coats", name: "Woman fur coat", image: category4, price: "$32-$100"}
  ];

  const dispatch = useDispatch();

  const setProd = (prod)=>{
    dispatch(setProduct(prod.sn));
  }

  return (
    <div className="w-10/12 max-w-6xl mx-auto mt-8 grid grid-cols-4  gap-x-6 gap-y-9">
      {
        loading ? <Spinner /> : (
          products.map((product) => (
            <div
              key={product.id}
              className={`rounded-lg group bg-richblack-800 py-3  overflow-hidden flex flex-col items-center h-fit `}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-[170px] max-h-[170px] object-contain"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold mb-2 text-richblack-50">{product.name}</h4>
                <p className="text-richblack-200 italic text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aspernatur commodi, vero quibusdam necessitatibus</p>
                <p className="text-richblack-5 mt-2 mb-3">Price : <span className=" text-caribbeangreen-500 font-semibold ">{product.price}</span></p>
                <Link to='/product-details' 
                onClick={
                  ()=>{
                    setProd(product)
                  }
                }
                className="px-4 py-1 mt-3 ease-in-out font-semibold rounded-full border-2 text-[14px] text-richblack-500 border-richblack-500 group-hover:text-richblack-50 group-hover:bg-richblack-700">
                  View More Products
                </Link>
              </div>
            </div>
          ))
        )
      }
    </div>
  )
}

export default Category
