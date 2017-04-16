import React from 'react'

import {Box} from 'react-adm-lte'

const {Header, Tools, Body, Footer} = Box

const Index1 = () => {
  return (
    <Box primary>
      <Header title='Box Component'>
        <Tools>
          <span className='label label-primary'>Tools</span>
        </Tools>
      </Header>
      <Body>
        Content Goes here!
      </Body>
      <Footer>Footer</Footer>
    </Box>
  )
}

export default Index1
