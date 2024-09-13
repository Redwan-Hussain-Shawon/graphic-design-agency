import { db } from '@/app/firebase'
import { Button } from '@/components/ui/button';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { ShoppingCart } from 'lucide-react';
const fetchProduct = async (id)=>{
  try{
    const q = doc(db, 'products', id);
    const result = await getDoc(q); 
    if(result.exists()){
      return { id: result.id, ...result.data() }
    }else{
      return false;
    }

  }catch{
    console.log('some probleam')
  }
}

async function Product({params}) {
  const data = await fetchProduct(params.slug)
  console.log(data)

  return (
    <div className='py-12'>
      <div className='container'>
        
        {data?
        <div className='grid grid-cols-1 md:grid-cols-2 px-4 gap-8'>
              <div className='relative overflow-hidden group'>
                <img src={data.image} alt="" className='w-full max-h-[550px] object-cover rounded-sm' />
                <div className='bg-primary text-white inline absolute top-3 px-2 left-0'>
            -50%
          </div>
          <div
            className='bg-white text-gray-800 absolute cursor-pointer hover:bg-gray-100 -right-12 group-hover:right-0 duration-300 top-5 w-10 rounded-[1px] h-8 flex items-center justify-center'
            title='Add To Cart'
          >
            <ShoppingCart />
          </div>
              </div>
              <div className='px-4'>
                <h1 className=' text-2xl sm:text-3xl md:text-4xl font-semibold'>{data.title}</h1>
                <p className='text-[20px] text-gray-400  mt-2 font-medium'><del>{data.prize}৳</del> <span className='text-black ml-3'>{data.discount_prize}৳</span></p>
                <div className='flex gap-4 items-center mt-4'>
                <Button >Add To Cart</Button>
                <Button >Buy Now</Button>
                </div>
                <h5 className='font-normal text-sm text-gray-700 mt-3'>Category: <span className='text-gray-500'>{data.category}</span></h5>  
                <h5 className='font-normal text-sm text-gray-700 mt-2'>Tags: <span className='text-gray-500'>{data.tags}</span></h5>
             
                </div>
        </div>
        :<div></div>
          }

      </div>
    </div>
  )
}


export default Product