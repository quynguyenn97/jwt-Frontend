import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Users.scss";

const Users = (props) => {
    return (
        <>
            <div className="manage-users-container">
                <div className="user-header">
                    <div className="title">
                        <h3>Table Users</h3>
                    </div>
                    <div className="actions">
                        <button className="btn btn-success">Refesh</button>
                        <button className="btn btn-primary">
                            Add new user
                        </button>
                    </div>
                </div>
            </div>
            <div className="user-body"></div>
        </>
    );
};

export default Users;
