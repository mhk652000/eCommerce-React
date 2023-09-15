import React, { Component } from "react";

import { Utils } from "../../config";
import styles from "./styles";
import {
  UserOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
// import PageviewIcon from '@mui/icons-material/Pageview';
import { useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  Charts,
  Loader,
  Modal,
  Pagination,
  Picker,
  // Popup,
  Select,
  Switch,
  Table,
  TextField,
  
} from "../../components";
import DoneCard from "../../components/Card/DoneCard";
import Nav from "../../components/Navbar/Nav";
import PriceCard from "../../components/Card/PriceCard";
import ItemCard from "../../components/Card/ItemCard";
import Delivery from "../../components/Delivery/Delivery";
import Payment from "../../components/Payment/Payment";
import OrderConfirm from "../../components/OrderConfirm/OrderConfirm";
import Track from "../../components/TrackOrder/Track";
import Profile from "../../components/Tabs/Profile";
import Personal from "../../components/Information/Personal";
import Contact from "../../components/Contact/Contact";
import Reviews from "../../components/Tabs/Reviews";
import Blog from "../../components/Blog/Blog";
import BlogCards from "../../components/Card/BlogCards";
import AboutUs from "../../components/About/AboutUs";
import TeamCard from "../../components/Card/TeamCard";


const Sample = () => {
  let inititialState = {
    toggle: "",
    date: "",
    time: "",
    open: false,
    snackBar: false,
    paginationCount: 5,
    paginationOffset: 0,
  }
  let heading="Order Summary";

  const [state, setState] = useState(inititialState)

  return <>
    <Nav />
    <DoneCard heading={heading}/>
    <Delivery />
    <Payment />
    <Track />
    <ItemCard />
    <Contact />
    <BlogCards />
    <AboutUs />
    <TeamCard />
    <Reviews />

    </>
}

export default Sample;

//   return (
//     <div style={styles.container}>
//       {/* <div style={styles.divContainer}> */}
//       <Button.Floating
//         onClick={() => {
//           // Utils?.showSnackBar({ message: "Added Successfully" });
//         }}
//       />
//       <div style={styles.shadowViewContainer}>
//         <Loader.Circular size={25} style={{ margin: 5 }} color="red" />
//       </div>
//       <div style={styles.shadowViewContainer}>
//         <Button.Basic
//           type="primary"
//           text="Button"
//           href={"https://google.com/"}
//           // onClick={() => alert("button click")}
//           style={{ margin: 5 }}
//         />
//       </div>
//       <div style={styles.shadowViewContainer}>
//         <Button.Upload
//           text="Upload"
//           // onChange={(e) => alert("file has been uploaded")}
//           style={{ margin: 5 }}
//         />
//       </div>
//       <div style={{ ...styles.shadowViewContainer, flex: 5 }}>
//         <Select.Radio
//           options={[
//             { value: "male", label: "Male" },
//             { value: "female", label: "Female" },
//             { value: "other", label: "Other", disabled: true },
//           ]}
//           defaultValue={"female"}
//           style={{ margin: 20 }}
//           onChange={(e) => console.log(e.target.value)}
//         />
//       </div>
//       <div style={styles.shadowViewContainer}>
//         <Select.Checkbox
//           options={[
//             { value: "apple", label: "Apple" },
//             { value: "orange", label: "Orange" },
//             { value: "banana", label: "Banana", defaultChecked: true },
//           ]}
//           style={{ margin: 5 }}
//           // label="check me"
//           onChange={(e) => console.log(e.target)}
//         />
//       </div>
//       <div style={styles.shadowViewContainer}>
//         <TextField.Basic
//           fieldStyle={{ backgroundColor: "#eee" }}
//           id={"outlined-basic"}
//           type={"email"}
//           defaultValue={"abc"}
//           placeholder={"placeholder"}
//           containerStyle={{ margin: 5 }}
//         />
//       </div>
//       <div style={styles.shadowViewContainer}>
//         <TextField.IconField
//           prefix={<UserOutlined />}
//           placeholder={"placeholder"}
//           containerStyle={{ margin: 5 }}
//         />
//       </div>

//       <div style={styles.shadowViewContainer}>
//         <TextField.Autocomplete
//           options={[
//             {
//               label: "web",
//               value: "web",
//             },
//             {
//               label: "android",
//               value: "android",
//             },
//             {
//               label: "iOS",
//               value: "iOS",
//             },
//           ]}
//           containerStyle={{ margin: 5 }}
//           inputStyle={{ width: "200px" }}
//           placeholder="Search field"
//         />
//       </div>
//       <div style={styles.shadowViewContainer}>
//         <Picker.DatePicker
//           value={state.date}
//           placeholder="Select date"
//           onChange={(date) => setState({ date })}
//           style={{ margin: 5, width: "150px" }}
//         />
//       </div>
//       <div style={styles.shadowViewContainer}>
//         <Picker.TimePicker
//           placeholder={"Select time"}
//           value={state.time}
//           onChange={(time) => setState({ time })}
//           style={{ margin: 5 }}
//         />
//       </div>
//       <div style={styles.shadowViewContainer}>
//         <Switch.Basic onChange={() => { }} style={{ margin: 5 }} />
//       </div>
//       <div style={styles.shadowViewContainer}>
//         <Pagination.Basic
//           total={50}
//           current={1}
//           pageSize={10}
//           paginationStyle={{ width: 300 }}
//         />
//       </div>
//       {/* <div style={styles.shadowViewContainer}>
//         <Popup.Alert
//           type="success"
//           message="You will get success"
//           style={{ margin: 20, width: "200px" }}
//         />
//       </div> */}
//       <div style={styles.shadowViewContainer}>
//         <Button.Basic
//           text="Open Modal"
//           onClick={() => setState({ open: true })}
//         />
//         <Modal.Basic
//           title="Use Google's location service?"
//           description="Let Google help apps determine location. means sending anonymous
//           location data to Google, even when no apps are running"
//           open={state.open}
//           onCancel={() => setState({ open: false })}
//           rightButtonText="Disagree"
//           leftButtonText="Agree"
//           maxWidth="sm"
//           onClickLeft={() => setState({ open: false })}
//           onClickRight={() => setState({ open: false })}
//           onClose={() =>
//             setState({
//               open: false,
//             })
//           }
//         />
//       </div>
//       <div style={styles.shadowViewContainer}>
//         <Badge.Basic
//           count="1000"
//           color="success"
//           max="100"
//           Icon={ShoppingCartOutlined}
//           style={{ margin: 5 }}
//         />
//       </div>
//       <div style={styles.shadowViewContainer}>
//         <Avatar.Basic
//           alt="nora"
//           size={"large"}
//           // Icon={PageviewIcon}
//           src="https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
//           style={{ margin: 5 }}
//           shape={"default"}
//         />
//       </div>
//       <div style={{ ...styles.shadowViewContainer, minWidth: 500 }}>
//         <Charts.ResponsiveContainer
//           style={{ margin: "27px 0px" }}
//           height={350}
//         >
//           {[
//             {
//               MinutesWithVoiceChat: 3000,
//               name: "Aug",
//               MinutesWithoutVoiceChat: 1000,
//             },
//             {
//               MinutesWithVoiceChat: 2500,
//               name: "Sept",
//               MinutesWithoutVoiceChat: 1500,
//             },
//             {
//               MinutesWithVoiceChat: 2000,
//               name: "Oct",
//               MinutesWithoutVoiceChat: 2500,
//             },
//             {
//               MinutesWithVoiceChat: 1500,
//               name: "Nov",
//               MinutesWithoutVoiceChat: 3000,
//             },
//           ]
//             .map((val) => val.MinutesWithoutVoiceChat)
//             .reduce((total, value) => total + value, 0) > 0 ? (
//             <Charts.LineChart
//               data={[
//                 {
//                   MinutesWithVoiceChat: 3000,
//                   name: "Aug",
//                   MinutesWithoutVoiceChat: 1000,
//                 },
//                 {
//                   MinutesWithVoiceChat: 2500,
//                   name: "Sept",
//                   MinutesWithoutVoiceChat: 1500,
//                 },
//                 {
//                   MinutesWithVoiceChat: 2000,
//                   name: "Oct",
//                   MinutesWithoutVoiceChat: 2500,
//                 },
//                 {
//                   MinutesWithVoiceChat: 1500,
//                   name: "Nov",
//                   MinutesWithoutVoiceChat: 3000,
//                 },
//               ]}
//               lineColor={["#4BE5C0", "#4E5FF8"]}
//               loading={state.appDownloadsLoading}
//               margin={{ top: 10, right: 50, left: 0, bottom: 0 }}
//             />
//           ) : (
//             <h4
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//               }}
//             >
//               No Data Available for month range!
//             </h4>
//           )}
//         </Charts.ResponsiveContainer>
//       </div>
//       <div style={{ ...styles.shadowViewContainer, minWidth: 400 }}>
//         <Charts.ResponsiveContainer
//           // style={{ margin: "27px 0px" }}
//           height={400}
//           width={"100%"}
//         >
//           {[
//             { name: "Group A", price: 400 },
//             { name: "Group B", price: 300 },
//             { name: "Group C", price: 300 },
//           ]
//             .map((val) => val.price)
//             .reduce((total, value) => total + value, 0) > 0 ? (
//             <Charts.PieChart
//               data={[
//                 { name: "Group A", price: 10 },
//                 { name: "Group B", price: 300 },
//                 { name: "Group C", price: 300 },
//               ]}
//               lineColor={["#4BE5C0", "#4E5FF8"]}
//               loading={state.appDownloadsLoading}
//             // margin={{ top: 10, right: 50, left: 0, bottom: 0 }}
//             />
//           ) : (
//             <h4
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//               }}
//             >
//               No Data Available for month range!
//             </h4>
//           )}
//         </Charts.ResponsiveContainer>
//       </div>
//       {/* <div  style={{ ...styles.shadowViewContainer, minWidth: 500 }}>
                      
//                     //   <div style={{ height: 400, width: '100%' }}>
//                     //   <Table.Basic
//                     //         style={{ width: 500 }}
//                     //         columns={[
//                     //             { field: "id", headerName: "ID", width: 100 },
//                     //             { field: "firstName", headerName: "First name", width: 180 },
//                     //             { field: "age", headerName: "Age", width: 130 },
//                     //         ]
//                     //         }
//                     //         rows={[
//                     //             { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//                     //             { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//                     //         ]}
//                     //         hideFooter
//                     //         hideFooterPagination
//                     //     />
//                     //     </div>
//                 </div> */}

//       <div style={{ ...styles.shadowViewContainer }}>
//         <Table.Basic
//           columns={[
//             {
//               title: "Name",
//               dataIndex: "name",
//               key: "name",
//             },
//             {
//               title: "Age",
//               dataIndex: "age",
//               key: "age",
//             },
//             {
//               title: "Address",
//               dataIndex: "address",
//               key: "address",
//             },
//           ]}
//           data={[
//             {
//               key: "1",
//               name: "Mike",
//               age: 32,
//               address: "10 Downing Street",
//             },
//             {
//               key: "2",
//               name: "John",
//               age: 42,
//               address: "10 Downing Street",
//             },
//           ]}
//           bordered={true}
//         />
//       </div>
//       {/* </div> */}
//     </div>
//   )
// }


