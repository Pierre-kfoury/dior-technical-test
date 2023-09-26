"use client";
import { DiorIcon } from "@/app/icons/DiorIcon";
import { LoginButton } from "../loginButton/LoginButton";
import { Welcome } from "../welcome/Welcome";
import { Input } from "../input/Input";
import Image from "next/image";
import { useMediaQuerrySSR } from "@/app/hooks/useMediaQuerrySSR";

import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_USER = gql`
  query User($userName: String!, $password: String!) {
    user(userName: $userName, password: $password) {
      userName
      password
    }
  }
`;

export function LoginPage() {
  const { mediaQuery, mounted } = useMediaQuerrySSR();

  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");

  const [getUser, { loading, data, error }] = useLazyQuery(GET_USER);

  async function handleClick() {
    const res = await getUser({
      variables: { userName: input, password: password },
    });
    if (res?.data?.user) {
      window.location.href = "/catalog";
    } else {
    }
  }

  const image =
    mediaQuery === "mobile" ? "/eiffel-tower-S.png" : "/eiffel-tower-L.png";

  return (
    mounted && (
      <div className="container">
        <div className={`section-0-${mediaQuery}`}>
          <DiorIcon />
        </div>
        <div className={`main-${mediaQuery}`}>
          <div className={`section-1-${mediaQuery}`}>
            <Welcome />
            <div>
              {error && (
                <p
                  style={{
                    color: "red",
                  }}
                >
                  Your login or password are incorrect
                </p>
              )}
            </div>
            <div className={`section-2-1-${mediaQuery}`}>
              <Input
                error={error}
                onChangePassword={(e) => setPassword(e.target.value)}
                onChangeValue={(e) => setInput(e.target.value)}
              />
            </div>
            <div className={`section-2-2-${mediaQuery}`}>
              <LoginButton onClick={handleClick} title="LOGIN" />
            </div>
          </div>
          <div className={`section-3-${mediaQuery}`}>
            <Image
              priority
              src={image}
              width={515}
              height={953}
              alt="eiffel-tower"
            />
          </div>
        </div>
      </div>
    )
  );
}
