import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./StudentLogin.css";
import backgroundImage from "../assets/img/login.png";
// import axios from "axios";
// import { login } from "../providers/userSlice";
// import { useDispatch } from "react-redux";

function Login() {
    const navigate = useNavigate();
    const [loading, setloading] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const dispatch = useDispatch();
    // const handleLogin = async (event) => {
    //     event.preventDefault();

    // setloading(true);
    //     console.warn("data", username, password);
    //     try {
    //         let res = await axios.post(
    //             "https://juit-webkiosk-api.onrender.com/v1.0/login",
    //             { username, password }
    //         );
    //         let resData = await axios.post(
    //             "https://juit-webkiosk-api.onrender.com/v1.0/personalDetails",
    //             { username, password }
    //         );
    //         // console.log(resData);
    //         if (res.data.success === true) {
    //             setloading(false);
    //             navigate("/studentDashboard");
    //             dispatch(
    //                 login({
    //                     Course: resData.data.Course,
    //                     Email: resData.data.Email,
    //                     FathersName: resData.data.FathersName,
    //                     Mobile: resData.data.Mobile,
    //                     Name: resData.data.Name,
    //                     ParentMobile: resData.data.ParentMobile,
    //                     Rollno: resData.data.Rollno,
    //                     Semester: resData.data.Semester,
    //                     address: resData.data.address,
    //                     percentage10: resData.data.percentage10,
    //                     percentage12: resData.data.percentage12,
    //                 })
    //             );
    //             // console.log(res);
    //         } else {
    //             console.log("login not valid");
    //             return;
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    return (
        <>
            <div className="bg-cover bg-center flex justify-end h-screen w-full" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="pl-[3vw] w-[35vw] flex flex-col items-start justify-center">
                    <input
                        id="EmailInput"
                        type="text"
                        name="rollno"
                        className="bg-white border-2 m-[1vw] border-black/40 rounded  p-2 w-72"
                        placeholder="Email*"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        id="PasswordInput"
                        name="password"
                        type="password"
                        className="bg-white m-[1vw] border-2 border-black/40 rounded p-2 w-72"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Link to='/play/instructions' className="z-10 duration-150 bg-orange-400 rounded-full hover:bg-white-500 text-white font-semibold hover:text-orange-400 py-2 px-36 mt-3 border-2 border-white-500 hover:border-orange-400 hover:bg-white">
                        Sign In
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Login;