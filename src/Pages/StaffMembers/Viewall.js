/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Viewall extends Component {
  render() {
    return (
    <div className="panel">
        <header className="panel-heading">
          <div className='row p-2'>
            <div className='col-6'>
              <h3 className="panel-title">Staff Member List</h3>
            </div>
            <div className='col-6 text-right'>
              <Link to = "/StaffMembers/Add" className='btn btn-primary' >
             + Add Staff Member
              </Link>
            </div>
          </div>
        </header>
        <div className="panel-body">
           
        </div>
    </div>

    )
  }
}
