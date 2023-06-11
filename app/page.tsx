import connectMongo from '@/utils/mongoose'
import Test from '@/models/testModel'

async function fetchDocuments() {
  console.log('CONNECTING TO MONGO');
  await connectMongo();
  console.log('CONNECTED TO MONGO');

  const test = await Test.find()
  console.log('FETCHING DOCUMENT');
  console.log(test)
  return test
}

const Home = async () => {
  const data = await fetchDocuments()
  return (
    <>
      <main>
        Hello home
        <ul>
          {data.map(data => (
            <li key={data.id}>name:- {data.name} email:- {data.email}</li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default Home