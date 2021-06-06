import React, { useState, useEffect } from "react";
import { Card, Avatar, Typography } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import * as actionType from "../../constants/actionTypes";
import useStyles from "./styles";
const User = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    setUser(null);
    history.push("/");
  };
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  console.log(user);
  return (
    <div className={classes.div}>
      <Card className={classes.card}>
        <Avatar
          className={classes.purple}
          alt={user?.result.name}
          src={user?.result.imageUrl}
        >
          {user?.result.name.charAt(0)}
        </Avatar>
        <Typography className={classes.userName} variant="h6">
          {user?.result.name}
        </Typography>
        <Typography className={classes.email} variant="h6">
          {user?.result.email}
        </Typography>
      </Card>
    </div>
  );
};
export default User;
