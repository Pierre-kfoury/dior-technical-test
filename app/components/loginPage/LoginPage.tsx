"use client";
import { DiorIcon } from "@/app/icons/DiorIcon";
import { LoginButton } from "../loginButton/LoginButton";
import { Welcome } from "../welcome/Welcome";
import { Input } from "../input/Input";
import Image from "next/image";
import { useMediaQuerrySSR } from "@/app/hooks/useMediaQuerrySSR";

export function LoginPage() {
  const { mediaQuery, mounted } = useMediaQuerrySSR();
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
            <div className={`section-2-1-${mediaQuery}`}>
              <Input />
            </div>
            <div className={`section-2-2-${mediaQuery}`}>
              <LoginButton title="LOGIN" />
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
