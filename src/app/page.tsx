import { CarCards, CustomFilter, Hero, SearchBar, ShowMore } from '@/components'
import { fuels, yearsOfProduction } from '@/constant';
import { fetchCarz } from '@/utils'

export default async function Home({ searchParams }) {
  const allCarz = await fetchCarz({
    manufacturer: searchParams.manufacturer || "" ,
    year: searchParams.year || "2022" ,
    fuels: searchParams.fuels || "" ,
    limit: searchParams.limit || "10" ,
    model: searchParams.model || "" ,
  })

  
  const isDataEmpty = !Array.isArray(allCarz) || allCarz.length < 1 || !allCarz;
  console.log(isDataEmpty)

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className="home__text-container">
          <h1 className='text-4xl font-extrabold'>Car Catalouge</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className='home__filter'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCarz.map(cars => <CarCards car={cars} />)}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCarz.length}
            />
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
