import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: "10px",
    alignItems: "center",
    borderRadius: "15px",
    height: "40%",
    position: "relative",
  },
  cardList: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "grey",
    borderRadius: "10px",
  },
}));
