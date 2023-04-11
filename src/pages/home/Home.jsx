import React from 'react'
import Discovery from '../../components/Jumbotron/Discovery/Discovery'
import PickDestination from '../../components/pickDestination/pickDestination'
import TravelTrip from '../../components/travel/travelDestination'
import PackageTrip from '../../components/package/packageTrip'
import DiscountTrip from '../../components/discount/discountTrip'

function Home(){
  return (
    <>
    <div>
        <Discovery/>
        <PickDestination/>
        <TravelTrip/>
        <PackageTrip/>
        <DiscountTrip/>
    </div>
    </>
  )
}
export default Home