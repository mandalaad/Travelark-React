import React from 'react'
import Destinationpaket from '../../components/popDestination/Destinationpaket'
import FormContact from '../../components/form/Form'
import PickDestinationSlider from '../../components/pickDestination/pickDestinationSlider'
function packageDestination() {
  return (
    <>
    <Destinationpaket/>
    <PickDestinationSlider/>
    <FormContact/>
    </>
  )
}

export default packageDestination