import React from 'react'
import { Layout } from '../components/Layout'
import logo from '../images/platzi.png'
import video from '../video/que-es-core.mp4'

export default () => (
  <Layout title='Video' subtitle='Component displaying an video'>
    <video src={video} width={360} controls poster={logo} />
  </Layout>
)
