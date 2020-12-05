import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import { Loader } from '../components/Loader'

import data from '../data.json'

export default () => {
  const [loaderList, setLoaderList] = useState([])

  const handleClick = () => setLoaderList(data.loaders)

  return (
    <Layout title='Fetch' subtitle='Component displaying data'>
      <ul>
        {
        loaderList.map(item => <Loader key={item.id} {...item} />)
      }
      </ul>
      <button onClick={handleClick}>Show data</button>
    </Layout>
  )
}
