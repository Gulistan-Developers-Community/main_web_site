import { useRouter } from "next/router";
import React from "react";
export default function Post(props) {
  const router = useRouter();
  return (
    <>
      <h2> post {router.query.id} </h2>
      router {router}
    </>
  );
}
