import Head from "next/head";
import Image from "next/image";
import Button from "../components/buttons/index";

export default function Home() {
  return (
    <div>
      <Button type="default" text="Submit" action={() => null} />
    </div>
  );
}
