import { Provider } from "react-redux";
import Routes from "./Routes";
import store from "./Store";

import { GlobalStyles } from "./Styles";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
      <GlobalStyles />
    </div>
  );
}

export default App;
