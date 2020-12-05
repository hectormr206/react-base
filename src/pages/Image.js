import React from 'react'
import { Layout } from '../components/Layout'
import logo from '../images/platzi.png'

export default () => (
  <Layout title='Image' subtitle='Component displaying an image'>
    <img src={logo} alt='Platzi' width={62} />
  </Layout>
)
