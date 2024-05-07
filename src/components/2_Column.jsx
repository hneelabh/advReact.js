import React from 'react'

function Column() {
  return (
    <>
      <td>Name</td>
      <td>Harry Kane</td>
    </>
  )
}

export default Column

// Shorthand to write React.Fragment : empty tags
// <> </>
// Although while using shorthand, we can't pass key to it.