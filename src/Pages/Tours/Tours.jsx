
import { useLoaderData } from 'react-router-dom';
import TourCard from './TourCard';

const Tours = () => {
    const data = useLoaderData()
    return (
        
      <div>
         <h2 className="text-4xl text-center font-bold my-10">Our Community Tours</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 '>
        {
            data.map(aData=><TourCard data={aData} key={aData._id}></TourCard>)
         }
        </div>
      </div>
    );
};

export default Tours;