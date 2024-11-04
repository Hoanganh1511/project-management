"use client";
import React from "react";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { signUp } from "aws-amplify/auth";
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "",
      userPoolClientId:
        process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID || "",
    },
  },
});
const formFields = {
  signUp: {
    username: {
      order: 1,
      placeholder: "Choose a username",
      label: "Username",
      inputProps: {
        required: true,
      },
    },
    email: {
      order: 2,
      placeholder: "Enter your  email address",
      label: "Email",
      inputProps: {
        type: "email",
        required: true,
      },
    },
    password: {
      order: 3,
      placeholder: "Enter your password",
      label: "Password",
      inputProps: {
        type: "password",
        required: true,
      },
    },
    confirm_password: {
      order: 4,
      placeholder: "Enter your password",
      label: "Confirm your password",
      inputProps: {
        type: "password",
        required: true,
      },
    },
  },
};
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  console.log(123, user);

  return (
    <>
      {!user && (
        <>
          <div className="area">
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <Authenticator
            formFields={formFields}
            className="fixed left-1/2 top-1/2 h-screen -translate-x-1/2 -translate-y-1/2 bg-transparent"
          />
        </>
      )}

      {user && <>{children}</>}
    </>
  );
};
export default AuthProvider;
{
  /*  */
}
