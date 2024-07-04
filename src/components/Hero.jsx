import { Bath, BedDouble, ParkingCircle, ParkingCircleIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'






const houses = [
  {
    type: "Detached duplex for sale",
    description: "For sale: luxury 5 bedroom detached duplex at old ikoyi, lagos features: -terrace, -all rooms ensuite and large, -large madam's room with massive walk in closet and bathroom",
    picture: "/house1.jpeg",
    price:"N 200,000,000",
    bedrooms: 5,
    bathrooms: 5,
    toilets: 6

    },
  {
    type: "Detached duplex for sale",
    description: "Discover the epitome of luxury living with our spaciously built 4-bedroom duplexes, currently 87% complete. choose from a variety of layouts to suit your preferences",
    picture: "/house2.jpeg",
    price:"N 250,000,000",
    bedrooms: 4,
    bathrooms: 4,
    toilets: 3

    },
  {
    type: "Detached duplex for sale",
    description: "For sale: luxury 5 bedroom detached duplex at old ikoyi, lagos features: -terrace, -all rooms ensuite and large, -large madam's room with massive walk in closet and bathroom",
    picture: "/house3.jpeg",
    price:"N 200,000,000",
    bedrooms: 5,
    bathrooms: 5,
    toilets: 6

    },
  {
    type: "Detached duplex for sale",
    description: "For sale: luxury 5 bedroom detached duplex at old ikoyi, lagos features: -terrace, -all rooms ensuite and large, -large madam's room with massive walk in closet and bathroom",
    picture: "/house3.jpeg",
    price:"N 900,000,000",
    bedrooms: 7,
    bathrooms: 7,
    toilets: 8

    },
  {
    type: "Detached duplex for sale",
    description: "For sale: luxury 5 bedroom detached duplex at old ikoyi, lagos features: -terrace, -all rooms ensuite and large, -large madam's room with massive walk in closet and bathroom",
    picture: "/house4.jpeg",
    price:"N 900,000,000",
    bedrooms: 6,
    bathrooms: 6,
    toilets: 7

    },
  {
    type: "Detached duplex for sale",
    description: "For sale: luxury 5 bedroom detached duplex at old ikoyi, lagos features: -terrace, -all rooms ensuite and large, -large madam's room with massive walk in closet and bathroom",
    picture: "/house5.jpeg",
    price:"N 200,000,000",
    bedrooms: 5,
    bathrooms: 5,
    toilets: 6

    },
  {
    type: "Estate Property",
    description: "For sale: luxury 5 bedroom detached duplex at old ikoyi, lagos features: -terrace, -all rooms ensuite and large, -large madam's room with massive walk in closet and bathroom",
    picture: "/house5.jpeg",
    price:"N 200,000,000",
    bedrooms: 5,
    bathrooms: 5,
    toilets: 6

    }
]
function Hero() {

  return (
    <>
    <div className='flex justify-center text-3xl p-5 font-extrabold text-blue-900'>
      You Number One Property <br/> Search Center
    </div>
    <p className='p-5 text-gray-700'>We are you number one property service center</p>
    <div>
      {
        houses.map((house) => {
          return (
            <div key={house.id}
            className='flex justify-center p-5 py-5'
            >
              <div>
              <div>
                <Image
                src={house.picture}
                height={200}
                width={200}
                alt='house'
                className='flex justify-center rounded-md'
                />
              </div>
              <div className='mt-5'>
                <h1 className='font-bold text-xl text-gray-700'>{house.type}</h1>
                <h1 className='text-gray-600'>{house.price}</h1>
                <h1 className='text-gray-700'>{house.description}</h1>
              </div>
              <div className='flex gap-2 mt-2 justify-between'>
                <h2 className="flex gap-2 bg-yellow-200 text-sm rounded-md p-2 text-gray-500 justify-center items-center w-full">
                  <BedDouble className='h-4 w-4' />
                  {house.bedrooms}
                </h2>
                <h2 className="flex gap-2 w-full bg-yellow-200 text-sm rounded-md p-2 text-gray-500 justify-center items-center">
                        <Bath className="h-4 w-4" />
                        {house.bathrooms}
                </h2>
                <h2 className="flex gap-2 w-full bg-yellow-200 text-sm rounded-md p-2 text-gray-500 justify-center items-center">
                        <ParkingCircleIcon className="h-4 w-4" />
                        {house.toilets}
                </h2>

              </div>
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Hero
