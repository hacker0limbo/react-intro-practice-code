import React from 'react'
import PropTypes from 'prop-types'

export default function AmountBox(props) {
  return (
    <div className="col">
      <div className="card">
        <div className={`card-header bg-${props.type} text-white`}>
          {props.text}
        </div>
        <div className="card-body">
          ${props.amount}
        </div>
      </div>
    </div>
  )
}


// props 类型检查
AmountBox.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  amount: PropTypes.number,
}
