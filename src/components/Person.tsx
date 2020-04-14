import React from "react";

interface IPersonProps {}

interface IPersonState {
  userName: string;
  password: string;
  like: string;
  login: boolean;
}

export default class Person extends React.Component<
  IPersonProps,
  IPersonState
> {
  constructor(props: string) {
    super(props);
    this.state = {
      userName: "Niloufar",
      password: "Behin Aein",
      like: "Hwaiian Pizza",
      login: false,
    };
  }
  personInfo = (event: any): void => {
    event.preventDefault();

    let userNameString: string, passwordString: string, likeString: string;

    const userName: HTMLInputElement | null = document.querySelector(
      '[name="user-name"]'
    );
    const passwordName: HTMLInputElement | null = document.querySelector(
      '[name="password"]'
    );
    const like: HTMLInputElement | null = document.querySelector(
      '[name="like"]'
    );

    if (userName === null) userNameString = "";
    else userNameString = userName.value;

    if (passwordName === null) passwordString = "";
    else passwordString = passwordName.value;

    if (like === null) likeString = "";
    else likeString = like.value;

    this.setState({
      userName: userNameString,
      password: passwordString,
      like: likeString,
      login: this.state.login,
    });
  };
  toggleLogeIN = () => {
    this.setState({
      userName: this.state.userName,
      password: this.state.password,
      like: this.state.like,
      login: !this.state.login,
    });
  };
  Logedin = () => {
    return (
      <div>
        <h2>
          {this.state.userName} {this.state.password}
        </h2>
        <p>She/He likes {this.state.like} </p>
        <form>
          <h3>Login</h3>
          <label htmlFor="user-name">User Name:</label>
          <input
            type="text"
            name="user-name"
            value={this.state.userName}
            onChange={this.personInfo}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.personInfo}
          />
          <label htmlFor="like">Which kind of Pizza do you like?</label>
          <input
            type="text"
            name="like"
            value={this.state.like}
            onChange={this.personInfo}
          />
        </form>
        <button onClick={this.toggleLogeIN}>log Out</button>
      </div>
    );
  };
  LogedOut = () => {
    return (
      <div>
        <h2>
          {this.state.userName} {this.state.password}
        </h2>
        <p>She/He likes {this.state.like} </p>
        <form>
          <h3>Login</h3>
          <label htmlFor="user-name">User Name:</label>
          <input
            type="text"
            name="user-name"
            value={this.state.userName}
            onChange={this.personInfo}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.personInfo}
          />
          <label htmlFor="like">Which kind of Pizza do you like?</label>
          <input
            type="text"
            name="like"
            value={this.state.like}
            onChange={this.personInfo}
          />
        </form>
        <button onClick={this.toggleLogeIN}>log In (Click to Log Out)</button>
      </div>
    );
  };
  render() {
    if (this.state.login) return this.Logedin();
    else return this.LogedOut();
  }
}
