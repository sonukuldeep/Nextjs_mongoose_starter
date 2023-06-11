import connectMongo from '@/utils/mongoose'
import Test from '@/models/testModel'
import { redirect } from 'next/navigation';

async function connectMongodb(formdata: FormData) {
  'use server'
  console.log('CONNECTING TO MONGO');
  await connectMongo();
  console.log('CONNECTED TO MONGO');

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
      <form action={connectMongodb} className='flex flex-col gap-1'>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name:-</label>
          <input className='outline-none border border-slate-300 max-w-[250px] rounded p-1' type="text" name='name' />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email:-</label>
          <input className='outline-none border border-slate-300 max-w-[250px] rounded p-1' type="email" name='email' />
        </div>
        <button className='border border-slate-300 rounded px-2 py-1 max-w-[250px]'>Submit</button>
      </form>
    </>
  )
}

export default Home