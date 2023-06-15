import { useEffect } from "react";
import "./App.css";
import { observer } from "mobx-react-lite";
import store from "./mobx/store";

function App() {
  return (
    <>
      <div className="container">
        <div className="card">
          <p className="quote">{store.data.quote}</p>
          <p className="author">- {store.data.author}</p>
        </div>
      </div>
    </>
  );
}

export default observer(App);
