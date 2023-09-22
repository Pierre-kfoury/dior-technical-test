import { DiorIcon } from "@/app/icons/DiorIcon";
import { LoginButton } from "../loginButton/LoginButton";
import { Welcome } from "../welcome/Welcome";
import { Input } from "../input/Input";
import Image from "next/image";

export function LoginPage() {
  return (
    <div>
      <div className="section-0">
        <DiorIcon />
      </div>
      <div className="main">
        <div className="section-1">
          <Welcome />
          <div className="section-2-1">
            <Input />
          </div>
          <div className="section-2-2">
            <LoginButton title="LOGIN" />
          </div>
        </div>
        <div className="section-3">
          <Image
            src="/eiffel-tower-L.png"
            width={515}
            height={953}
            alt="eiffel-tower"
          />
        </div>
      </div>
    </div>
  );
}
