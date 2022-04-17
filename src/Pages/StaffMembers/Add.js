import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Add extends Component {
  render() {
    return (
       <div className="panel page">
            <header className="panel-heading">
          <div className='row p-2'>
            <div className='col-6'>
              <h3 className="panel-title">Add Staff Member</h3>
           
            </div>
            <div className='col-6 text-right'>
              <Link to = "/StaffMembers/View" className='btn btn-primary' >
                Staff Member List
              </Link>
            </div>
          </div>
        </header>
            <div className="panel-body container-fluid">
                <div className="example col-8">
                    <form>
                        <h4 className="example-title mb-4">Personal Information</h4>
                        <hr/>
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Full Name: </label>
                                <div className="col-md-9">
                                <input type="text" className="form-control" name="name" autoComplete="off" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <legend className="col-md-3 col-form-legend">Gender: </legend>
                                <div className="col-md-9">
                                <div className="radio-custom radio-default radio-inline">
                                    <input type="radio" id="inputHorizontalMale" name="inputRadiosMale2" />
                                    <label htmlFor="inputHorizontalMale">Male</label>
                                </div>
                                <div className="radio-custom radio-default radio-inline">
                                    <input type="radio" id="inputHorizontalFemale" name="inputRadiosMale2" defaultChecked />
                                    <label htmlFor="inputHorizontalFemale">Female</label>
                                </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Date Of Birth: </label>
                                <div className="col-md-9">
                                <div class="input-group input-group-icon">
                                <input type="date" className="form-control" placeholder="Email" />
                                    <span class="input-group-addon">
                                    <span class="icon wb-calendar" aria-hidden="true"></span>
                                    </span>
                                </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Assign Role: </label>
                                <div className="col-md-9">
                                <select className="form-control">
                                    <option value={1}>Role 1</option>
                                    <option value={2}>Role 2</option>
                                    <option value={3}>Role 3</option>
                                </select>
                                </div>
                            </div>
                        <h4 className="example-title mb-4">Contact Information</h4>
                        <hr/>
                            <div className="form-group row">
                                    <label className="col-md-3 col-form-label">Home Town Address: </label>
                                    <div className="col-md-9">
                                    <input type="text" className="form-control" name="name" autoComplete="off" />
                                    </div>
                            </div>
                            <div className="form-group row">
                                    <label className="col-md-3 col-form-label">Mobile Number: </label>
                                    <div className="col-md-9">
                                    <div className="input-group">
                                        <span className="input-group-addon">+94</span>
                                        <input type="number" className="form-control" placeholder=""/>
                                    </div>
                                    </div>
                            </div>
                            <div className="form-group row">
                                    <label className="col-md-3 col-form-label">Email Address: </label>
                                    <div className="col-md-9">
                                    <input type="email" className="form-control" name="name" autoComplete="off" />
                                    </div>
                            </div>
                            <div className="form-group row">
                                    <label className="col-md-3 col-form-label">Profile Image: </label>
                                    <div className="col-md-9">
                                    <input type="file" className="form-control" name="name" autoComplete="off" />
                                    </div>
                            </div>
                            <div className="form-group row">
                                    <div className="col-md-9">
                                    <button type="button" className="btn btn-primary mr-1">Save Staff</button>
                                    <button type="reset" className="btn btn-danger">Clear</button>
                                    </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
  }
}

