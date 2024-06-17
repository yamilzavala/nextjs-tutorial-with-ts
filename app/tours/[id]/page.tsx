import localImage from '@/images/tour-2.jpeg';
import Image from 'next/image';
const url = 'https://www.course-api.com/images/tours/tour-1.jpeg';

const page = ({params}:{params: {id:string}}) => {
    return (
        <div>
          <h1 className="text-4xl">  ID: {params.id} </h1>
          <section className="flex gap-x-4 mt-4">
            <div>
              <Image src={localImage} alt="local image" width={192} height={192} className="w-48 h-48 object-cover rounded"/>
              <h2>Local Image</h2>
            </div>
            <div>
              <Image src={url} priority alt="remote image" width={192} height={192} className="w-48 h-48 object-cover rounded"/>
              <h2>Remote Image</h2>
            </div>
          </section>
        </div>
    );
};

export default page;