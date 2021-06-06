import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  card: {
    display: "flex",
    width: "20%",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: "10px",
    alignItems: "center",
    borderRadius: "15px",
    height: "20%",
    position: "relative",
  },
  div: {
    width: "100%",
    display: "flex",
    height: "80vh",
    justifyContent: "center",
    alignItems: "center",
  },
}));
