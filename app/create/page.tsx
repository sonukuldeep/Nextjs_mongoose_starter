import connectMongo from '@/utils/mongoose'
import Test from '@/models/testModel'
import { redirect } from 'next/navigation';

async function connectMongodb(formdata: FormData) {
  'use server'
  console.log('CREATING DOCUMENT');
  const data = { name: formdata.get('name'), email: formdata.get('email') }
  const test = await Test.create(data);
  console.log('CREATED DOCUMENT');
  console.log(test)
  redirect('/')
}

const Home = () => {
  return (
    <>
      <p>This is where the magic happens</p>
      <p>This component uses nextjs experimental funtionality</p>
      <p>Under the hood this form component invokes a server side function which check and uploads the data to mongodb backend</p>
      <form action={connectMongodb} className='flex flex-col gap-1'>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name:-</label>
          <input className='outline-none border border-slate-300 max-w-[250px] rounded p-1' type="text" name='name' />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email:-</label>
          <input className='outline-none border border-slate-300 max-w-[250px] rounded p-1' type="email" name='email' />
        </div>
        <button className='bg-green-400 hover:bg-green-500 text-white font-bold py-1 px-3 my-2 border border-green-500 rounded self-start'>Submit</button>
      </form>
    </>
  )
}

export default Home
