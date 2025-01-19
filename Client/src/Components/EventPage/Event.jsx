import { Box } from '@chakra-ui/react'
import React from 'react'
import CardPage from '../CardPage/CardPage.jsx'
import EventFilter from '../EventFilter/EventFilter.jsx'
import Header from '../Header/Header.jsx'

const Event = ({filterData,setFilterData,originalData,handleJoin}) => {
  // showing event filter and event cards 
  return (
   <Box width="100%" height="10%">
    <Box>
    <Header/>
    </Box>
   <Box height="15%" padding="0px 20px 20px 20px" margin="-60px 0px">
    <EventFilter
        setFilterData={setFilterData}
        originalData={originalData}
    />
   </Box>
   <Box height="60%">
     <CardPage
      data={filterData}
      handleJoin={handleJoin }
     />
   </Box>

   </Box>
  )
}

export default Event