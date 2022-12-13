import { NavigationContainer } from "@react-navigation/native";
import Navi from "./Navigation/Navi";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MyTabs from "./Navigation/BottomTabs";
export default function App() {
  return (
    <Provider store={store}>
     
        <MyTabs/>
    </Provider>
  );
}
