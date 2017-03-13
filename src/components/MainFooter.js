import React from 'react'
import {MainFooter} from 'react-adm-lte'

import './MainFooter.css'

const MainFooterComponent = () => (
  <MainFooter>
    <div className='copyright-container'>
      <div className='copyright'>
        <b>
          ReactAdmLTE &nbsp;
        </b>
        is all about React Components.
        <br />
        <b>
          AdminLTE &nbsp;
        </b>
        is developed and maintained by &nbsp;
        <a target='_blank' href='http://almsaeedstudio.com/'>Almsaeed Studio</a>.
      </div>
      <div className='version'>
        <b>
          <a target='_blank' href='https://github.com/falmar/react-adm-lte'>ReactAdmLTE</a>
        </b> v0.0.7 &nbsp;
        <br />
        <b>
          <a target='_blank' href='https://github.com/almasaeed2010/AdminLTE'>AdminLTE</a>
        </b> v2.3.11
      </div>
    </div>
  </MainFooter>
)

export default MainFooterComponent
