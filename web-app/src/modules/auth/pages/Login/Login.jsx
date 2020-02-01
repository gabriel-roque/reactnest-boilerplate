import React, { useEffect } from "react";

import { connect } from "react-redux";
import { exampleAction } from "modules/auth/store/actions";

function Login({ exampleAction }) {
  useEffect(() => {
    exampleAction();
  }, []);
  return <h1>Login Page</h1>;
}

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  exampleAction: () => dispatch(exampleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
