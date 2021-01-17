import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, FormElement, Button, Checkbox, Text } from "./styles";
import { Container } from "../../Styles";
import { SetEmail } from "../../Store/actions";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(SetEmail(email));
  };
  return (
    <Container>
      <form onSubmit={handleLogin}>
        <FormElement>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </FormElement>
        <FormElement>
          <Input placeholder="Senha" type="password" />
        </FormElement>
        <FormElement>
          <Checkbox
            type="checkbox"
            checked={checked}
            onClick={(e) => {
              setChecked((checked) => !checked);
              console.log("test");
            }}
          />
          <Text>Remember me</Text>
        </FormElement>
        <FormElement>
          <Button>LOGIN</Button>
        </FormElement>
      </form>
    </Container>
  );
};

export default Login;
