import React from 'react'

const BasicDetail = () => {
  return (
    <div className="detail-bloc">
      <div className="detail-bloc_header">
      <a
          className="basic-control"
          data-bs-toggle="basic"
          data-bs-parent="#basicinfo"
          href="#basicinfo"
          aria-controls="basicinfo"
          aria-expanded="false"
        >
          <h4 className="block_title">Basic Detail</h4>
        </a>
      </div>
      <div id="basicinfo" className="panel-collapse collapse show" aria-labelledby="basicinfo">
        <div className="detail-bloc-body">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <div className="ilio-icon-wrap">
                <div className="ilio-icon">
                  <i className="fa-solid fa-bed"></i>
                </div>
                
      </div>
  )
}

export default BasicDetail
