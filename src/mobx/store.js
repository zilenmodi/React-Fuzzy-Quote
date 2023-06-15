import axios from "axios";
import { configure, makeAutoObservable } from "mobx";
configure({ enforceActions: "observed" });

class Store {
  data = {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate placeat quod, cum dolores consectetur sint, nihil necessitatibus ipsum qui, quidem ipsa repellendus? Necessitatibus unde aliquid blanditiis maxime sed alias dicta?",
    author: "Zilen modi",
  };

  constructor() {
    makeAutoObservable(this);
  }
}

const store = new Store();
export default store;
