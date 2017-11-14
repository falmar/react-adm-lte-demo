import React from 'react'
import {ContentWrapper} from 'react-adm-lte'

const {Header, Content} = ContentWrapper

import Index1 from '../pages/Index1'

const ContentWrapperContainer = () => {
  return (
    <ContentWrapper>
      <Header title='Dashboard' subTitle='Control panel' />
      <Content>
        <Index1 />
      </Content>
    </ContentWrapper>
  )
}

export default ContentWrapperContainer
