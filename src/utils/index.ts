export async function fetchCarz(){
    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
    const headers ={
            'X-RapidAPI-Key': '20d6120a26msh6b3824e05c34405p1e44d2jsn39e69d6ac4ed',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }

    const res = await fetch(url , { headers })
    const result = await res.json()

    return result

}


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  }