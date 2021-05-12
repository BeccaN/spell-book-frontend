import React from 'react'

const GlobalFilter = ({filter, setFilter}) => {
  return (
    <div>
      <span>
        Global Search: {' '}
        <input value={filter || ''}
        onChange={(e) => setFilter(e.target.value)} />
      </span>
    </div>
  )
}

export default GlobalFilter