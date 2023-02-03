import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom'

export const CreateData = () => {
    const[inputProduct, setInputProduct] = useState({
        name : "",
        price : 0,
        stock : 0,
        description : ""
    })

    const navigate = useNavigate()

    const handleChange = (event) => {
        console.log(event);
        let{name, value} = event.target
        setInputProduct({...inputProduct, [name] : value})
      }
      const handleSubmit = async (event) => {
        event.preventDefault()
        try {
          const {name, price, stock, description} = inputProduct
          await axios.post('https://taskapi-production-a53e.up.railway.app/api/product', {name, price,stock,description})
          navigate('/')
        } catch (error) {
          console.log(error.message);
        }
      }

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className="bg-cyan-100 rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
        <div className="px-4 py-8 sm:px-10">
          <div className="relative mt-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-gray-300">
              </div>
            </div>
            <div className="relative flex justify-center text-xl font-bold leading-5">
              <h1>Create Data</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit} method='POST'>
            <div className="mt-8">
                <div className="w-full space-y-6">
                <div className="w-full">
                    <div className=" relative ">
                        <h2 className='mb-2'>Product Name</h2>
                        <input onChange={handleChange} value={inputProduct.name} name='name' type="text" id="search-form-price" className="mb-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Product Name" />
                    </div>
                </div>
                <div className="w-full">
                    <div className=" relative ">
                        <h2 className='mb-2'>Price</h2>
                    <input onChange={handleChange} value={inputProduct.price} name='price' type="number" id="search-form-location" className="mb-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Price" />
                    </div>
                </div>
                <div className="w-full">
                    <div className=" relative ">
                        <h2 className='mb-2'>Stock</h2>
                    <input onChange={handleChange} value={inputProduct.stock} name='stock' type="number" id="search-form-location" className="mb-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Stock" />
                    </div>
                </div>
                <div className="w-full">
                    <div className=" relative ">
                        <h2 className='mb-2'>Description</h2>
                    <textarea onChange={handleChange} value={inputProduct.description} name='description' type="text" id="search-form-name" className="mb-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Description" />
                    </div>
                </div>
                <div>
                    <span className="block w-full rounded-md shadow-sm">
                                <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Add New
                                </button>
                            
                    </span>
                </div>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
