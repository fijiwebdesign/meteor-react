import React from 'react'

export default (props) => {
  console.log('Page props', props)
  return (
    <div>
      {props.room}
    </div>
  )
}