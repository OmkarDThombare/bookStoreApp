import React from 'react';
import list from "../../public/list.json";
import Cards from './Cards';
import { Link } from "react-router-dom";

function Course() {
  return (
    <div className='bg-white dark:bg-slate-900 dark:text-white '>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-2xl md:text-4xl font-semibold text-center mt-16'>Welcome to our Course Page</h1>
        <p className='mt-4 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquam consectetur fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum veritatis consectetur aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sapiente, accusantium placeat odit est voluptatem quos aspernatur exercitationem id dignissimos fugit quibusdam optio facere excepturi reprehenderit nisi numquam at beatae!</p>
        <div className='flex justify-center mt-6'>
          <Link to="/">
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
          </Link>
        </div>
      </div>
      <div className='mt-10 container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Course;
