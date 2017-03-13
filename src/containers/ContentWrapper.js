import React from 'react'
import {ContentWrapper} from 'react-adm-lte'

const {Header, Content} = ContentWrapper

const ContentWrapperContainer = ({children}) => {
  return (
    <ContentWrapper>
      <Header title='Dashboard' subTitle='Version 2.0' />
      <Content>
        {children}
      </Content>
    </ContentWrapper>
  )
}

export default ContentWrapperContainer
