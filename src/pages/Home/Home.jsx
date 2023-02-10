import {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export const Home = () => {
    const [product, setProduct]= useState([]);
//   console.log(product);
  const getProduct = async () => {
    const response = await axios.get('https://taskapi-production-a53e.up.railway.app/api/product')
    const data = response.data
    setProduct(data.data)
  }
  const handleDelete = async(e) => {
    try {
      const dataId = (e.target.value) 
      console.log(dataId);
      await axios.delete(`https://taskapi-production-a53e.up.railway.app/api/product/${dataId}`)
      const deleteProduct = product.filter((e) => {
        return e._id !== dataId
      })
      setProduct(deleteProduct)
    } catch (error) {
      
    }
  }
  
  
  

  useEffect(() =>{
    getProduct()
  },[])

  return (
    <div>
        <div className='main'>
            <Link to={'/tambah'}>
                <button type="button" className="py-2 px-4 mx-20 my-5 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-25 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Create Data
                </button>
            </Link>
        </div>
        <div className='flex items-center justify-center'>

                <table className="table p-4 bg-white rounded-lg shadow w-4/5">
                <thead>
                <tr>
                    <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                    No
                    </th>
                    <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                    Product Name
                    </th>
                    <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                    Price
                    </th>
                    <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                    Action
                    </th>
                </tr>
                </thead>
                <tbody>
                    {
                        product.map((el, index) =>{
                            return(
                                <tr key={el._id} className="text-gray-700">
                                    <td className="border p-4 dark:border-dark-5 text-center">
                                    {index + 1}
                                    </td>
                                    <td className="border p-4 dark:border-dark-5">
                                    {el.name}
                                    </td>
                                    <td className="border p-4 dark:border-dark-5">
                                    {el.price}
                                    </td>
                                    <td className="border p-4 dark:border-dark-5">
                                        <div className='flex justify-around'>
                                            <Link to={`/detail/${el._id}`} className='p-2 w-16 text-center  bg-amber-400 text-green-800 rounded-md'>Detail</Link>
                                            <Link to={`/edit/${el._id}`} className='p-2 w-16 text-center  bg-cyan-700 text-white rounded-md'>Edit</Link>
                                            <button className='p-2 w-16 text-center bg-red-800  text-white rounded-md' value={el._id} onClick={handleDelete}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
            
                </tbody>
            </table>
        </div>
    </div>
  )
}
