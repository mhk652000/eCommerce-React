import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  Dashboard,
  Users,
  Home,
  Products
} from "../../containers";

const AppRoutes = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
// class AppRoutes extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div className="App">
//              <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/users" element={<Users />} />
//               <Route path="*" element={<Navigate to="/" />} />
//             </Routes>
//       </div>
//     );
//   }
// }

// export default connect((state) => ({ storeState: state }))(AppRoutes);