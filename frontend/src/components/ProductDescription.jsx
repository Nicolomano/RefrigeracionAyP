import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mt-20'>
        <div className='flex gap-3 mb-4'>
            <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>Description</button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Care guide</button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Size guide</button>
        </div>
        <div className='flex flex-col pb-16'>
            <p className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque illo quibusdam nisi labore commodi expedita! Beatae eaque quae quia explicabo iste possimus! Cupiditate dignissimos sunt similique, at distinctio reprehenderit aliquam.
            </p>
            <p className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate facere, corrupti nam illo officiis iste veniam nostrum atque cumque voluptatum alias cum! Sint, provident facilis pariatur voluptatem id ab?
            </p>
        </div>
    </div>
  )
}

export default ProductDescription