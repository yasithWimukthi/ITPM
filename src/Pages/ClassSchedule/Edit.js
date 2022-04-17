import React, { useEffect, useState } from 'react';
import TimePicker from 'react-time-picker';
import { Link, useLocation } from 'react-router-dom'

const Edit = () => {
    const locationn = useLocation();

    console.log("dataa>>>", locationn.state?.record)

    const [className, setClassName] = useState("")
    const [staffName, setStaffname] = useState("")
    const [location, setLocation] = useState("")
    const [fee, setFee] = useState(0)
    const [startTime, onChangeStartTime] = useState('00:00');
    const [endTime, onChangeEndTime] = useState('00:00');

    useEffect(() => {
        setClassName(locationn.state?.record.className)
        setStaffname(locationn.state?.record?.staffName)
        setLocation(locationn.state?.record?.location)
        setFee(locationn.state?.record?.fee)
        onChangeStartTime(locationn.state?.record?.startTime)
        onChangeEndTime(locationn.state?.record?.endTime)
    }, []);

    const onSubmit = () => {
        const payload = {
            className,
            staffName,
            location,
            fee,
            startTime,
            endTime
        }

        console.log("payload>>", payload)
    }

    return (
        <div className="panel page">
            <header className="panel-heading">
                <div className='row p-2'>
                    <div className='col-6'>
                        <h3 className="panel-title">Add Class Schedule</h3>

                    </div>
                    <div className='col-6 text-right'>
                        <Link
                            // to="/StaffMembers/View"
                            to="#"
                            className='btn btn-primary' >
                            Class Schedule
                        </Link>
                    </div>
                </div>
            </header>
            <div className="panel-body container-fluid">
                <div className="example col-8">
                    <form>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Class Name: </label>
                            <div className="col-md-9">
                                <input type="text" className="form-control" name="className" autoComplete="off" value={className} onChange={(e) => setClassName(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Staff Name: </label>
                            <div className="col-md-9">
                                <input type="text" className="form-control" name="staffName" autoComplete="off" value={staffName} onChange={(e) => setStaffname(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Location: </label>
                            <div className="col-md-9">
                                <input type="text" className="form-control" name="location" autoComplete="off" value={location} onChange={(e) => setLocation(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Fee: </label>
                            <div className="col-md-9">
                                <input type="number" className="form-control" name="fee" autoComplete="off" value={fee} onChange={(e) => setFee(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Start Time: </label>
                            <div className="col-md-9">
                                <div class="input-group input-group-icon">
                                    <TimePicker onChange={onChangeStartTime} value={startTime} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">End Time: </label>
                            <div className="col-md-9">
                                <div class="input-group input-group-icon">
                                    <TimePicker onChange={onChangeEndTime} value={endTime} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-9">
                                <button type="reset" className="btn btn-danger">Clear</button>
                                <button type="button" className="btn btn-primary mr-1" onClick={() => { onSubmit() }}>Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edit
