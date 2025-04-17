import react from 'react'

const HomeSectionCard = ({ product }) => {
    return (
        <div className='cursor-pointer flex flex-col item-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem]
        mx-3  flex items-center my-5 '>
            <div className='h-[13rem] w-[10rem] text-right '>
                <img className='mt-20rem object-cover-top w-full h-full mb-2 mr-10 ml-auto' src={product.imageUrl} alt='' />

            </div>
            <div className=' relative px-4  py-2 text-left'>
                <h3 className='text-lg font-medium text-gray-900 text-left'>{product.brand}</h3>
                <p className='mt-2 text-sm text-gray-500 mb-5'>{product.title}</p>

            </div>
        </div>
    )
}
export default HomeSectionCard