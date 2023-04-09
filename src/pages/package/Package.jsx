import React from 'react'
import Package from '../../components/Jumbotron/Package/Package'
import SoloTravel from '../../components/travel/solotravel'
import WonderDestination from '../../components/WonderDestinantion/wonderDestination'
import SolotravelGreen from '../../components/travel/solotravelGreen'
import DiscountTrip from '../../components/discount/discountTrip'
function Packages() {
  return (
    <div>
    <Package/>
    <SoloTravel/>
    <WonderDestination/>
    <SolotravelGreen/>
    <DiscountTrip/>
    </div>
  )
}

export default Packages