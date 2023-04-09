import React from 'react'
import DestnationPage from '../../components/Jumbotron/Destination/Destination'
import PickDestinationSlider from '../../components/pickDestination/pickDestinationSlider'
import PackageTrip from '../../components/package/packageTrip'
import MostDestination from '../../components/pickDestination/mostpickDestination'
import DiscountTrip from '../../components/discount/discountTrip'
export const Destination = () => {
  return (
    <>
    <div>
        
       <DestnationPage/>
       <PickDestinationSlider/>
       <PackageTrip/>
       <MostDestination/>
        <DiscountTrip/>
        
    </div>
    </>
  )
}
export default Destination
