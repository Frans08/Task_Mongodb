import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Detail = () => {
    const[product, setProduct] = useState({})
    const {id} = useParams()
    const getProductById = async () =>{
        const result = await axios.get(`https://taskapi-production-a53e.up.railway.app/api/product/${id}`)
        const data = result.data.data
        console.log(data);
        setProduct(data)
    }

    useEffect(() => {
        getProductById()
    }, [])

  return (
    <div>
        <div className='flex justify-center items-center h-screen'>
        <div className="bg-cyan-100 rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
        <div className="px-4 py-8 sm:px-10">
          <div className="relative mt-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-gray-300">
              </div>
            </div>
            <div className="relative flex justify-center text-xl font-bold leading-5">
              <h1>Detail Product</h1>
            </div>
          </div>
          <div className="mt-8">
            <div className="w-full space-y-6">
              <div className="w-full">
                <div className=" relative ">
                    <h2 className='mb-4'>Product Name : {product.name}</h2>
                    
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                    <h2 className='mb-4'>Price : {product.price}</h2>
                    
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                    <h2 className='mb-4'>Stock : {product.stock}</h2>
                    
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                    <h2 className='mb-4'>Description : {product.description}</h2>
                    
                </div>
              </div>
              
              <div>
                <span className="block w-full rounded-md shadow-sm">
                    <Link to={'/'}>
                        <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Back Home
                        </button>
                    </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
