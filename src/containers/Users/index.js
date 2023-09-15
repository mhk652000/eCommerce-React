import React from "react";
import { connect } from "react-redux";
import { Button } from "../../components";
import styles from "./styles"
import { Utils } from "../../config"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";




const Users = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div style={styles.container}>
            <h1>Users</h1>
            <Button.Basic
                variant="contained"
                text="Dashboard"
                onClick={() => navigate('/')}
                containerStyle={{ margin: "20px 0" }}
            />
        </div>
    )
}
export default Users
