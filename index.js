import { Navigation } from "react-native-navigation";
import { registerScreens } from "./app/utils/screens";

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Initializing',
        options: {
          topBar: {
            visible: false
          }
        }
      }
    },
  });
});