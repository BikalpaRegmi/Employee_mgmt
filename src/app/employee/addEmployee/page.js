'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";

export default function AddEmployee() {



  return (
    <div>

    <div className="bg-gray-100 mx-3 pb-3 md:w-[500px] sm:w-[400px] mt-20 md:py-16 sm:mx-auto  md:mx-auto rounded-3xl">
        <div className='flex justify-center pt-6 md:pt-0 gap-3 pb-9'>
          <Link href={'/'}>

           <IoIosArrowRoundBack title='Go back' className='text-3xl hover:bg-slate-900 hover:text-white cursor-pointer border-2 md:mt-1 border-purple-950 rounded-full w-12'/>
          </Link>
      <h1 className=' text-2xl  md:text-3xl text-purple-900 font-bold'>Add Details of Employees</h1>
      </div>
      <form action="" className='flex flex-col w-4/6 md:w-96 mx-auto'>
        <input type="text" placeholder='Enter name of employee'  className='border-2 h-12 pl-1 focus:outline-none my-2'/>
        <input type="text" placeholder='Enter email of employee'  className='border-2 h-12 pl-1 focus:outline-none my-2'/>
        <input type="text" placeholder='Enter address of employee'  className='border-2 h-12 pl-1 focus:outline-none my-2'/>
        <input type="text" placeholder='Enter salary of employee' className='border-2 h-12 pl-1 focus:outline-none my-2' />
        <button className='text-3xl w-64 mt-9 bg-slate-200 rounded-xl hover:bg-slate-300'>Add Employee</button>
    </form>
    </div>
    </div>
  );
}
