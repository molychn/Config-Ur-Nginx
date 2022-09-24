import { PageProps } from "$fresh/server.ts";

export default function GreetPage(props: PageProps) {
  console.log(props);
  const { name } = props.params;
  return (
    <main>
      <p>Your name: {name}</p>
      <p>The url: {props.url}</p>
      <p>The route: {props.route}</p>
    </main>
  );
}
