import theme from "./Theme.Jsx";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").whidth;
const componnent = {
  titleWrapper: {
    backgroundColor: theme.colors.white,
    width: windowWidth,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: theme.colors.shadow,
    shadowOpacity: 0.1,
    paddingLeft: theme.spacing.baseXl,
    paddingRight: theme.spacing.baseXl,
    paddingTop: theme.spacing.demi,
    paddingBottom: theme.spacing.demi,
    marginBottom: theme.spacing.baseXl,
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
