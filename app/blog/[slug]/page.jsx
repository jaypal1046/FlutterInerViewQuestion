import React from 'react'

import CardList from "./CardList/CardList"
import {Style} from "./blogSlug.css"

function blogCategory({params}) {
  return (
    <main>
         <h1 className={`bTitle ${params.slug}`}>{params.slug} Blog</h1>
      <CardList params={params.slug}/>
    </main>
  )
}

export default blogCategory
