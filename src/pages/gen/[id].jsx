import { useRouter } from "next/router";

export default function Post(props) {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <h2> post {router.query.id} </h2>
    </>
  );
}
