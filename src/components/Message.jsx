import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2wFbn76E19sWf_yUQMbzXHS4DcRf1KG19mQ&usqp=CAU" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2wFbn76E19sWf_yUQMbzXHS4DcRf1KG19mQ&usqp=CAU" alt="" />
      </div>
    </div>
  )
}

export default Message