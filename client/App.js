import React from 'react'

export default (props) => {
  console.log('App props', props)
  const { main } = props
  return (
    <div>
      <h1>Meteor React Router</h1>
      {main}
    </div>
  )
}