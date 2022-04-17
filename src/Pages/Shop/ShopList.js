import {Link} from "react-router-dom";
import React from "react";
import './ShopList.css';

const ShopList = () => {
    return (
        <div className="panel page">
            <header className="panel-heading">
                <div className='row p-2'>
                    <div className='col-6'>
                        <h3 className="panel-title">Item List</h3>

                    </div>
                    <div className='col-6 text-right'>
                        <Link to = "/StaffMembers/View" className='btn btn-primary' >
                            print Shop Schedule
                        </Link>
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-6 text-right'>
                        <div id="custom-search-input">
                            <div className="input-group col-md-12">
                                <input type="text" className="form-control input-lg" placeholder="Buscar"/>
                                <span className="input-group-btn">
                        <button className="btn btn-info btn-lg" type="button">
                            <i className="glyphicon glyphicon-search"></i>
                        </button>
                        </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default ShopList;