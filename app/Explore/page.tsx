import React from 'react'
import HomePage from '../Home/page'
import Hero from '@/components/Hero'
import Main from '@/components/Main'
import ClientOnly from '@/components/ClientOnly'
import Container from '@/components/Container'
import getListings,{IListingsParams} from '../actions/getListings'
import ListingCard from '@/components/listings/ListingCard'
import getCurrentUser from '../actions/getCurrentUser'

interface HomeProps {
  searchParams: IListingsParams
}
const page = async ({searchParams}: HomeProps) => {
  const currentUser = getCurrentUser();
  const listings = await getListings(searchParams);
  console.log(listings);
  console.log({currentUser});
  return (
    <div className='bg-black'>
      <ClientOnly>
        <Container>
        <Hero/>
       <Main/>
       <h1> Our new Business listings</h1>
       <div className='pt-4 grid grid-cols-1 bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {
            listings.map((listing:any, i) => (
               <ListingCard currentUser={currentUser} key={i} data={listing}/>
              )
            )
          }
       </div>
        </Container>
      </ClientOnly>
    </div>
  )
}

export default page