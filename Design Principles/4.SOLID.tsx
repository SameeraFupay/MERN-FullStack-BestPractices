//Single Responsibility Principle

// db.js - responsible for connecting to the database
const MongoClient = require("mongodb").MongoClient;

const connect = () => {
  return MongoClient.connect("mongodb://localhost:27017/testdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = {
  connect
};

// data.js - responsible for performing data manipulation
const { connect } = require("./db");

const findUsers = async () => {
  const client = await connect();
  const users = await client.db("testdb").collection("users").find({}).toArray();
  client.close();
  return users;
};

module.exports = {
  findUsers
};

//Open/Closed Principle

// ItemList.js - responsible for rendering the list of items
const ItemList = ({ items }) => (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
  
  // SortStrategy.js - an abstract class representing the sorting strategy
  class SortStrategy {
    sort(items) {
      throw new Error("Not implemented");
    }
  }
  
  // AlphabeticalSortStrategy.js - a concrete class implementing alphabetical sorting
  class AlphabeticalSortStrategy extends SortStrategy {
    sort(items) {
      return items.sort((a, b) => a.text.localeCompare(b.text));
    }
  }
  
  // SortedItemList.js - responsible for applying the sorting strategy to the list of items
  const SortedItemList = ({ items, sortStrategy }) => (
    <ItemList items={sortStrategy.sort(items)} />
  );


  // Liskov Substitution Principle

  import React from "react";

class UserInfo extends React.Component {
  render() {
    const { name, email } = this.props.user;
    return (
      <div>
        <div>Name: {name}</div>
        <div>Email: {email}</div>
      </div>
    );
  }
}

class AdminUserInfo extends UserInfo {
  render() {
    const { role } = this.props.user;
    return (
      <div>
        {super.render()}
        <div>Role: {role}</div>
      </div>
    );
  }
}

export { UserInfo, AdminUserInfo };

//Interface Segregation Principle

// Bad example of interface segregation
interface ItemListProps {
    items: Item[];
    onEdit: (item: Item) => void;
    onDelete: (item: Item) => void;
  }
  
  const ItemList: React.FC<ItemListProps> = ({ items, onEdit, onDelete }) => {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => onEdit(item)}>Edit</button>
            <button onClick={() => onDelete(item)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  
  // Good example of interface segregation
  interface ItemListProps {
    items: Item[];
  }
  
  interface ItemListEditProps {
    onEdit: (item: Item) => void;
  }
  
  interface ItemListDeleteProps {
    onDelete: (item: Item) => void;
  }
  
  const Item: React.FC<Item & ItemListEditProps & ItemListDeleteProps> = ({
    id,
    name,
    onEdit,
    onDelete,
  }) => {
    return (
      <li key={id}>
        {name}
        <button onClick={() => onEdit({ id, name })}>Edit</button>
        <button onClick={() => onDelete({ id, name })}>Delete</button>
      </li>
    );
  };
  
  const ItemList: React.FC<ItemListProps> = ({ items }) => {
    return (
      <ul>
        {items.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    );
  };

  // Dependency Inversion Principle

  // Bad example of dependency inversion
class LoginApi {
    authenticate(username: string, password: string) {
      // implementation
    }
  }
  
  class LoginPage extends React.Component {
    private loginApi: LoginApi;
  
    constructor(props: Props) {
      super(props);
      this.loginApi = new LoginApi();
    }
  
    handleLogin(username: string, password: string) {
      this.loginApi.authenticate(username, password);
    }
  
    render() {
      return (
        // implementation
      );
    }
  }
  
  // Good example of dependency inversion
  interface LoginApi {
    authenticate: (username: string, password: string) => void;
  }
  
  class LoginPage extends React.Component {
    private loginApi: LoginApi;
  
    constructor(props: Props, loginApi: LoginApi) {
      super(props);
      this.loginApi = loginApi;
    }
  
    handleLogin(username: string, password: string) {
      this.loginApi.authenticate(username, password);
    }
  
    render() {
      return (
        // implementation
      );
    }
  }