import React from 'react'

function Cards({item})
 {
  console.log(item)
  return (
   <>
   <div className='mt-5 my-3 p-3 dark:bg-slate-900 dark:text-white '>
   <div className="card  w-92 shadow-xl hover:scale-105 bg-white duration-200 dark:bg-slate-900 dark:border dark:text-white">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body dark:bg-slate-900 dark:text-white ">
    <h2 className="card-title">
    {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex  justify-between dark:bg-slate-900 dark:text-white ">
      <div className="badge badge-outline dark:bg-slate-900 dark:text-white ">${item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:text-white hover:bg-pink-500 duration-200">Buy Now</div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Cards
