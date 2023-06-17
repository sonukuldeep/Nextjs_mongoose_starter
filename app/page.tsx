import connectMongo from '@/utils/mongoose'
import Test from '@/models/testModel'

async function fetchDocuments() {
  console.log('FETCHING DOCUMENT');
  const test = await Test.find()
  console.log('DATA FETCHED')
  return test
}

const Home = async () => {
  const data = await fetchDocuments()
  return (
    <>
      <main className='flex flex-col gap-2'>
        <h1 className='text-xl'>How does this work?</h1>
        <p>Mongodb data is fetched from the root page component and the data is rendered here as below.</p>
        <p>Any form of data can be fetched in server side in advanced and served provided all models are defined in /models folder</p>
        <ul className='grid grid-cols-3 gap-2'>
          {data.map(data => (
            <li className='border p-2 rounded' key={data.id}>name:- {data.name} <br/> email:- {data.email}</li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default Home
