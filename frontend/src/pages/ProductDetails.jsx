// pages/ProductPage.jsx
import { useState } from "react";
import tshirt1 from '../assets/tshirt1.png'
import tshirt2 from '../assets/tshirt2.png'
import tshirt3 from '../assets/tshirt3.png'
import tshirt4 from '../assets/tshirt4.png'
import tshirt5 from '../assets/tshirt5.png'
import tshirt6 from '../assets/tshirt6.png'
import tshirt7 from '../assets/tshirt7.png'
import tshirt8 from '../assets/tshirt8.png'
import tshirt9 from '../assets/tshirt9.png'
import tshirt10 from '../assets/tshirt10.png'
import tshirt11 from '../assets/tshirt11.png'
import tshirt12 from '../assets/tshirt12.png'
import suitcase1 from '../assets/suitcase1.png'
import suitcase2 from '../assets/suitcase2.png'
import suitcase3 from '../assets/suitcase3.png'
import suitcase4 from '../assets/suitcase4.png'
import suitcase5 from '../assets/suitcase5.png'
import suitcase6 from '../assets/suitcase6.png'
import suitcase7 from '../assets/suitcase7.png'
import suitcase8 from '../assets/suitcase8.png'
import suitcase9 from '../assets/suitcase9.png'
import suitcase10 from '../assets/suitcase10.png'
import suitcase11 from '../assets/suitcase11.png'
import suitcase12 from '../assets/suitcase12.png'
import heel1 from '../assets/heel1.png'
import heel2 from '../assets/heel2.png'
import heel3 from '../assets/heel3.png'
import heel4 from '../assets/heel4.png'
import heel5 from '../assets/heel5.png'
import heel6 from '../assets/heel6.png'
import heel7 from '../assets/heel7.png'
import heel8 from '../assets/heel8.png'
import heel9 from '../assets/heel9.png'
import heel10 from '../assets/heel10.png'
import heel11 from '../assets/heel11.png'
import heel12 from '../assets/heel12.png'
import heel13 from '../assets/heel13.png'
import jean1 from '../assets/jean1.png'
import jean2 from '../assets/jean2.png'
import jean3 from '../assets/jean3.png'
import jean4 from '../assets/jean4.png'
import jean5 from '../assets/jean5.png'
import jean6 from '../assets/jean6.png'
import jean7 from '../assets/jean7.png'
import jean8 from '../assets/jean8.png'
import zip1 from '../assets/zip1.png'
import zip2 from '../assets/zip2.png'
import zip3 from '../assets/zip3.png'
import zip4 from '../assets/zip4.png'
import zip5 from '../assets/zip5.png'
import zip6 from '../assets/zip6.png'
import zip7 from '../assets/zip7.png'
import zip8 from '../assets/zip8.png'
import mh1 from '../assets/mh1.png'
import mh2 from '../assets/mh2.png'
import mh3 from '../assets/mh3.png'
import mh4 from '../assets/mh4.png'
import mh5 from '../assets/mh5.png'
import mh6 from '../assets/mh6.png'
import wh1 from '../assets/wh1.png'
import wh2 from '../assets/wh2.png'
import wh3 from '../assets/wh3.png'
import wh4 from '../assets/wh4.png'
import wh5 from '../assets/wh5.png'
import bag1 from '../assets/bag1.png'
import bag2 from '../assets/bag2.png'
import bag3 from '../assets/bag3.png'
import bag4 from '../assets/bag4.png'
import bag5 from '../assets/bag5.png'
import bag6 from '../assets/bag6.png'
import bag7 from '../assets/bag7.png'
import bag8 from '../assets/bag8.png'
import bag9 from '../assets/bag9.png'
import bag10 from '../assets/bag10.png'
import bag11 from '../assets/bag11.png'
import bag12 from '../assets/bag12.png'
import bag13 from '../assets/bag13.png'
import wallet1 from '../assets/wallet1.png'
import wallet2 from '../assets/wallet2.png'
import wallet3 from '../assets/wallet3.png'
import wallet4 from '../assets/wallet4.png'
import wallet5 from '../assets/wallet5.png'
import wallet6 from '../assets/wallet6.png'
import wallet7 from '../assets/wallet7.png'
import wallet8 from '../assets/wallet8.png'
import shoe1 from '../assets/shoe1.png'
import shoe2 from '../assets/shoe2.png'
import shoe3 from '../assets/shoe3.png'
import shoe4 from '../assets/shoe4.png'
import shoe5 from '../assets/shoe5.png'
import shoe6 from '../assets/shoe6.png'

import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { add, remove } from "../redux/slices/CartSlice";
import { data } from '../data/data'


export default function ProductPage() {

  const imageMap = {
    tshirt1, tshirt2, tshirt3, tshirt4, tshirt5, tshirt6, tshirt7, tshirt8, tshirt9, tshirt10, tshirt11, tshirt12,
    suitcase1, suitcase2, suitcase3, suitcase4, suitcase5, suitcase6, suitcase7, suitcase8, suitcase9, suitcase10, suitcase11, suitcase12,
    heel1, heel2, heel3, heel4, heel5, heel6, heel7, heel8, heel9, heel10, heel11, heel12, heel13,
    jean1, jean2, jean3, jean4, jean5, jean6, jean7, jean8,
    zip1, zip2, zip3, zip4, zip5, zip6, zip7, zip8,
    mh1, mh2, mh3, mh4, mh5, mh6,
    wh1, wh2, wh3, wh4, wh5,
    bag1, bag2, bag3, bag4, bag5, bag6, bag7, bag8, bag9, bag10, bag11, bag12, bag13,
    wallet1, wallet2, wallet3, wallet4, wallet5, wallet6, wallet7, wallet8,
    shoe1, shoe2, shoe3, shoe4, shoe5, shoe6,
  };

  const [query, setQuery] = useState("");

  const { cart } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);
  const { product } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(product);

  const filtered = query
    ? data[product].filter((f) =>
      f.name.toLowerCase().includes(query.toLowerCase())
    )
    : data[product];

  console.log(filtered);

  function removeProductItem(product) {
    dispatch(remove(product.id));
    toast.error("item removed from cart");
  }

  function addProductItem(product) {
    dispatch(add(product));
    toast.success("item added to cart");
  }

  function purchaseItem() {
    if (token == null) {
      toast.error("please login first");
    }
    else {
      toast.success("purchased successfully")
    }
  }

  return (
    <div className="min-h-screen bg-richblack-900 px-6 sm:px-20 py-12">
      <h2 className="text-3xl font-bold mb-6 text-richblack-200">T-Shirts</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search for a product... like enter blue for blue products...."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full sm:w-1/2 px-4 py-2 bg-richblack-800 border border-gray-300 rounded shadow mb-8 focus:outline-none focus:ring-2 focus:ring-black"
      />

      {/* Grid of Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {filtered?.length > 0 ? (
          filtered?.map((product) => (
            <div
              key={product.id}
              className={`rounded-lg group bg-richblack-800 py-3  overflow-hidden flex flex-col items-center h-fit hover:shadow-[10px_-5px_50px_-5px] ${product.shadow} hover:scale-110 transition-all duration-500 min-h-[420px]`}
            >
              <img
                src={imageMap[product.image]}
                alt={product.name}
                className="w-[170px] max-h-[180px] object-contain"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold mb-2 text-richblack-50">{product.name}</h4>
                <p className="text-richblack-200 italic text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aspernatur commodi, vero quibusdam necessitatibus</p>
                <p className="text-richblack-5 mt-2">Price : <span className=" text-caribbeangreen-500 font-semibold ">{product.price}</span></p>
                <div className="flex justify-between items-center mt-2">
                  <button className="mt-2 bg-richblack-700 text-white px-4 py-2 rounded hover:bg-gray-800"
                    onClick={purchaseItem}>
                    Purchase
                  </button>
                  {
                    token != null && <button>
                      {
                        cart?.some((p) => (product.id === p.id)) ?
                          (<button className="px-4 py-1 ease-in-out font-semibold rounded-full border-2 text-[14px] text-richblack-500 border-richblack-500 group-hover:text-richblack-50 group-hover:bg-richblack-700"
                            onClick={() => {
                              removeProductItem(product)
                            }}>
                            Remove Item
                          </button>) :
                          (<button className="px-4 py-1 ease-in-out font-semibold rounded-full border-2 text-[14px] text-richblack-500 border-richblack-500 group-hover:text-richblack-50 group-hover:bg-richblack-700"
                            onClick={() => {
                              addProductItem(product)
                            }}>
                            Add To Cart
                          </button>)
                      }
                    </button>
                  }

                </div>
              </div>
            </div>
          ))
        ) : query.length > 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No items match your search.
          </p>
        ) : (
          <p className="text-center text-richblack-200 col-span-full">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
