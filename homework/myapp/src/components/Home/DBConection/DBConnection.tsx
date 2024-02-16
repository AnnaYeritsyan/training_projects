import React, { Component } from 'react';

class DbConection extends Component {
  constructor(props:any) {
    super(props);
    this.state = {
      db: null,
    };
  }

  componentDidMount() {
    const request = indexedDB.open("MyTestDatabase");

    request.onerror = (event) => {
      console.error("error");
    };

    request.onsuccess = (event:any) => {
      const db = event.target.result;
      this.setState({ db });
    };

    request.onupgradeneeded = (event:any) => {
      const db = event.target.result;
      const objectStore = db.createObjectStore("MyStore", { autoIncrement: true });
      objectStore.createIndex("name", "name", { unique: false });
    //   objectStore.createIndex("email", "email", { unique: true });
    //   objectStore.createIndex("surname", "surname", { unique: 'chankId' });
    };
  }

  addItem = (data:any) => {
    const { db }:any = this.state;
    if (db) {
      const transaction = db.transaction(["MyObjectStore"], "readwrite");
      const objectStore = transaction.objectStore("MyObjectStore");
      const request = objectStore.add(data);
      request.onsuccess = () => {
        console.log("Data add");
      };
      request.onerror = () => {
        console.error("Fail");
      };
    }
  };

  getItem = (key:any) => {
    const { db }:any= this.state;
    if (db) {
      const transaction = db.transaction(["MyObjectStore"], "readonly");
      const objectStore = transaction.objectStore("MyObjectStore");
      const request = objectStore.get(key);
      request.onsuccess = (event:any) => {
        const result = event.target.result;
        console.log("Data:", result);
      };
      request.onerror = () => {
        console.error("Fail");
      };
    }
  };

  render() {
    return (
      <div>
        <h1>Hello, world</h1>
      </div>
    );
  }
}

export default DbConection;
