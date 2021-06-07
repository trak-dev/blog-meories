import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { Card, CardActions, Typography, Divider } from "@material-ui/core";
import decode from "jwt-decode";
import * as actionType from "../../constants/actionTypes";
import List from "./List";
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
  return (
    <div className={classes.div}>
      <Card className={classes.card}>
        <Typography variant="h2">Votre Panier</Typography>
        <Typography variant="h6">
          Lié au compte : {user?.result.email}
        </Typography>
        <Divider />
        <CardActions className={classes.cardList}>
          <List />
          <List />
          <List />
          <List />
          <List />
        </CardActions>
      </Card>
    </div>
  );
};
export default User;
