import React from 'react'
import PropTypes from 'prop-types'

import Post from '../PostItem'

const Hit = props => {
  const { hit } = props

  return (
    <Post
      slug={hit.fields.slug}
      title={hit.title}
      date={hit.date}
      description={hit.description}
      category={hit.category}
    />
  )
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired
}

export default Hit