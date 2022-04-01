import React from 'react';
import SignInView from './SignInView';
import { useNavigate } from 'react-router-dom';
const SignInContainer = () => {
  let navigate = useNavigate();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  };
  return (
    <>
      <SignInView onSubmit={onSubmitHandler} />
    </>
  );
};
export default SignInContainer;
