import React from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios.defaults.baseURL = 'http://localhost:8080';
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    console.log(data.get("tweet"));
    axios.post('http://localhost:8080/tweet/store',
    {
      tweet: data.get("tweet")
    })
  };
  return (
    <div id="app">
        <h3>ツイート内容登録</h3>
      <form onSubmit={event => handleSubmit(event)}>
        <label htmlFor="tweet">Name: </label>
        <br/>
        ツイート内容：
        <input type="text" id="tweet" name="tweet"/>
        <br/>
        <input type="submit" defaultValue={"Submit"}/>
      </form>
      <Account />
      <Message />
      <GetAllTweet />
      <GetAllAccount />
    </div>
  );
  }
  function Account() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      axios.defaults.baseURL = 'http://localhost:8080';
      axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      console.log(data.get("account"));
      axios.post('http://localhost:8080/account/store',
      {
        email: data.get("email"),
        password: data.get("password"),
        userName: data.get("userName"),
        accountDetails: data.get("accountDetails"),
      })
    };
    return (
      <form onSubmit={event => handleSubmit(event)}>
        <h3>アカウント登録</h3>
        <label htmlFor="account">Name: </label>
        <br/>
        メールアドレス：
        <input type="text" id="account" name="email"/>
        <br/>
        パスワード：
        <input type="text" id="account" name="password"/>
        <br/>
        ユーザ名：
        <input type="text" id="account" name="userName"/>
        <br/>
        アカウント詳細：
        <input type="text" id="account" name="accountDetails"/>
        <br/>
        <input type="submit" defaultValue={"Submit"}/>
      </form>
    );
    }
    function Message() {
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        console.log(data.get("message"));
        axios.post('http://localhost:8080/message/store',
        {
          messageTitle: data.get("messageTitle"),
          messageDetail: data.get("messageDetail"),
          submitAccount: data.get("submitAccount"),
        })
      };
      return (
        <form onSubmit={event => handleSubmit(event)}>
          <h3>メッセージ登録</h3>
          <label htmlFor="message">Name: </label>
          <br/>
          タイトル：
          <input type="text" id="message" name="messageTitle"/>
          <br/>
          内容：
          <input type="text" id="message" name="messageDetail"/>
          <br/>
          投稿アカウント：
          <input type="text" id="message" name="submitAccount"/>
          <br/>
          <input type="submit" defaultValue={"Submit"}/>
        </form>
      );
      }
  function GetAllTweet() {
    const clicked = () => {
      axios.defaults.baseURL = 'http://localhost:8080';
      axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      axios.get('http://localhost:8080/tweet/all')
      .then(response => {
        console.log(response.data);
        // response body.
      }).catch(err => {
        console.log('err:', err);
      });
    };
      return (
        <div>
          <h3>現在のツイートを取得</h3>
          <button onClick={()=>clicked()}>現在のツイートを取得</button>
          <br />
        </div>
      );
  }
  function GetAllAccount() {
    const clicked = () => {
      axios.defaults.baseURL = 'http://localhost:8080';
      axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      axios.get('http://localhost:8080/tweet/all')
      .then(response => {
        console.log(response.data);
        // response body.
      }).catch(err => {
        console.log('err:', err);
      });
    };
      return (
        <div>
          <h3>現在のアカウント情報を取得</h3>
          <button onClick={()=>clicked()}>現在のアカウント情報を取得</button>
          <br />
        </div>
      );
  }
export default App;