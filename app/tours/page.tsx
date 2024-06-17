import Tour from "@/components/Tour";
import { TTour } from "@/interfaces/interfaces";
import Image from "next/image";
const url = 'https://www.course-api.com/react-tours-project';


const fetchTours = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(url)
    const data: TTour[] = await response.json()
    return data
}

const TourPage = async () => {
    const data = await fetchTours()

  return (
    <section>
        <h1 className='text-3xl mb-4'>Tours</h1>
        <div className='grid md:grid-cols-2 gap-8'>
            {data.map((tour) => {
                return (
                    <Tour key={tour.id} {...tour}/>
                )
            })}
        </div>
    </section>
  )
}

export default TourPage;
