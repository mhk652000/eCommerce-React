import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../components";
import { AppAction } from "../../store/actions";
import styles from "./styles"
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { message } from 'antd';
import { Utils } from "../../config";


const Dashboard = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // console.log("ffff", isLoading, error);

    return (
        <>
        <div style={styles.container}>
            <h1>Dashboard</h1>
            <Button.Basic
                variant="contained"
                text="Users"
                onClick={() => navigate('/users')}
                containerStyle={{ margin: "20px 0" }}
            />
            <Button.Basic
                variant="outlined"
                text="Logout"
                onClick={() => dispatch(AppAction.Logout())}
                containerStyle={{ margin: "20px 0" }}
            />

            <Button.Basic
                variant="outlined"
                text="Success Message"
                onClick={() => Utils.showMessage('success', "success")}
                containerStyle={{ margin: "20px 0" }}
            />

            
        </div>

        
        </>
        
    )
}
export default Dashboard;