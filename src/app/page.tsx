import { CarCards, CustomFilter, Hero, SearchBar } from '@/components'
import { fetchCarz } from '@/utils'

export default async function Home() {
  const allCarz = await fetchCarz()
  console.log(allCarz)
  const isDataEmpty = !Array.isArray(allCarz) || allCarz.length < 1 || !allCarz; 

  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
          <div className="home__text-container">
            <h1 className='text-4xl font-extrabold'>Car Catalouge</h1>
            <p>Explore the cars you might like</p>
          </div>

          <div className='home__filter'>
            <SearchBar />

            <div className='home__filter-container'>
              <CustomFilter title='fuel' />
              <CustomFilter title='year' />
            </div>
          </div>

          {!isDataEmpty ? (
            <section>
              <div className='home__cars-wrapper'>
                {allCarz.map(cars=> <CarCards car={cars} />)}
              </div>
            </section>
          ) : (
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>
                Oops, no results
              </h2>
              <p>{allCarz?.message}</p>
            </div>
          )}
      </div>
    </main>
  )
}
