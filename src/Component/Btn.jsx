import React from 'react'

const Btn = ({text, onClick}) => {
  return (
    <>
      <div>
        <button className="bg-purple-800 px-8 py-1 rounded-lg" onClick={onClick}>{text}</button>
    </div>
    </>
  )
}

export default Btn
