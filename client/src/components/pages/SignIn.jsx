import { Button, Card, Col, Input, Layout, Row, Tabs, Typography } from 'antd'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../AuthProvider';
import * as firebase from "firebase";
import { withRouter, useHistory } from 'react-router-dom';

function SignIn(props) {
  const [tab, setTab] = useState("1");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const Auth = useContext(AuthContext);

  const handleSignIn = () => {
    setLoading(true);
    firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
      console.log(res);
      history.push("/");
    }).catch(err => {
      setErrors(err.message);
      console.log(err.message);
    }).finally(() => setLoading(false));
  }

  const handleSignUp = () => {
    setLoading(true);
    firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
      console.log(res.user);
    }).catch(err => {
      setErrors(err.message);
      console.log(err.message);
    }).finally(() => {
      setLoading(false);
    })
  }



  return (
    <div style={{ margin: "auto", display: 'flex', justifyContent: "space-evenly", alignItems: "center", height: "100vh", }}>
      <Typography.Title>Welcome to<br />Scholarly!</Typography.Title>
      <Card headStyle={{ padding: 0 }} bodyStyle={{ paddingTop: 5 }}>
        <Tabs activeKey={tab} onChange={(val) => setTab(val)}>
          <Tabs.TabPane tab="Sign In" key="1">
            Email:
            <Input value={email} onChange={e => setEmail(e.target.value)} />
            Password:
            <Input password value={password} onChange={e => setPassword(e.target.value)} />

            <Button loading={loading} style={{ marginTop: 10 }} type="primary" onClick={handleSignIn}>Sign In</Button>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Sign Up" key="2">
            Email:
            <Input value={email} onChange={e => setEmail(e.target.value)} />
            Password:
            <Input password onChange={e => setPassword(e.target.value)} />

            <Button loading={loading} style={{ marginTop: 10 }} type="primary" onClick={handleSignUp}>Sign Up</Button>
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </div >
  )
}


export default withRouter(SignIn);