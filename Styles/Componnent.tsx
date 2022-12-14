import theme from "./Theme";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const componnent:any = {
  titleWrapper: {
    backgroundColor: theme.colors.white,
    width: windowWidth,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: theme.colors.shadow,
    shadowOpacity: 0.1,
    paddingLeft: theme.spacing.baseXl,
    paddingRight: theme.spacing.baseXl,
    paddingTop: theme.spacing.demi,
  },
  titleItem:{
    fontSize: theme.fontSize.lg,
    marginBottom: theme.spacing.demiLG,
    color: theme.colors.secondary2,
  },
  listeWrapper:{
    alignSelf: "stretch",
    borderBottomColor: theme.colors.gray3,
    borderBottomWidth: 1,
    paddingTop: theme.spacing.base,
  },
  listeItem: {
    paddingBottom: theme.spacing.base,
    display: "flex",
    alignItems: "baseline",
  },
  container:{
    paddingLeft: theme.spacing.baseXl,
    paddingRight: theme.spacing.baseXl,
  },
};

export default componnent;
