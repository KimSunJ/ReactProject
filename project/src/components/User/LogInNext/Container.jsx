import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LogInComp from "./Comp";
import { action } from "../../../modules/userInfo";
import axios from "axios";

const LogInContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userDB);
  const logIned = useSelector((state) => state.userInfo);
  const [logEmail, setLogEmail] = useState("");
  const onLogIn = async (logPw) => {
    dispatch(action.logInPw(logPw, userList));
    try {
      await axios
        .post("http://localhost:8080/api/user/login", {
          userEmail: logIned.logEmail,
          userPw: logIned.logPw,
          userName: logIned.logName,
          userList: userList,
        })
        .then((data) => {
          setLogEmail(data.data.userEmail);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (logIned.logName) navigate("/");
  }, [logIned.logName]);

  return <LogInComp onLogIn={onLogIn} logEmail={logIned.logEmail} />;
};

// 로그아웃 시 Home으로 링크 연결하기 위한 작업
// const mapStateToProps = (state, props) => {
//   return {
//     userName: state.userInfo.userName,
//   };
// };

export default LogInContainer;
