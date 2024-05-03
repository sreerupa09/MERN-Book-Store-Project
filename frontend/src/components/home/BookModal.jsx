import { PiBookOpenLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

const BookModal = ({ book, onClose }) => {
    return (
        <div className='fixed bg-black bg-opacity-60 inset-0 z-50 flex justify-center items-center'
            onClick={onClose}>
            <div
                onClick={(event) => event.stopPropagation()}
                className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
            >
                <AiOutlineClose
                    className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
                    onClick={onClose}
                />
                <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
                    {book.publishYear}
                </h2>
                <h4 className='my-2 text-gray-500'>{book._id}</h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiBookOpenLight className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.title}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.author}</h2>
                </div>
                <p className='mt-4'>Anything you want to show</p>
                <p className='my-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed sollicitudin libero id magna rhoncus, non semper arcu convallis. 
                    Donec viverra pharetra sem, sed gravida metus aliquam vel. 
                    Nullam faucibus dui sit amet mauris laoreet, quis ultricies libero interdum. 
                    Sed imperdiet nunc at est facilisis, eu suscipit nibh volutpat. 
                    Proin condimentum orci nibh, ut fermentum risus tempor quis. 
                    Suspendisse potenti. In hac habitasse platea dictumst. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
            </div>
        </div>
    )
}

export default BookModal