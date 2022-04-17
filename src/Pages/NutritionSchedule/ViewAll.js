import React from 'react'
import { Link } from 'react-router-dom'

const ViewAll = () => {
    return (
        <div className="panel">
            <header className="panel-heading">
                <div className='row p-2'>
                    <div className='col-6'>
                        <h3 className="panel-title">Nutrition Schedules</h3>
                    </div>
                    <div className='col-6 text-right'>
                        <Link to="#" className='btn btn-primary' >
                            Add Nutrition Schedule
                        </Link>
                    </div>
                </div>
            </header>
            <div className="panel-body">

                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th className='text-center' scope="col">Name</th>
                            <th className='text-center' scope="col">Weight</th>
                            <th className='text-center' scope="col">Gender</th>
                            <th className='text-center' scope="col">Members</th>
                            <th className='text-center' scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-center'>1</td>
                            <td className='text-center'>35-50Kg</td>
                            <td className='text-center'>Male/Female</td>
                            <td className='text-center'>12</td>
                            <td className='text-center'>
                                <button class="btn btn-warning rounded-circle mr-3 "><i class="fa  fa-eye "></i></button>
                                <button class="btn btn-primary rounded-circle mr-3 "><i class="fa  fa-pencil "></i></button>
                                <button class="btn btn-danger rounded-circle"><i class="fa  fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ViewAll