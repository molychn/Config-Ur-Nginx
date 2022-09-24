import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_, ctx) {
    const uuid = crypto.randomUUID();
    return ctx.render(JSON.stringify(uuid));
    // return new Response(JSON.stringify(uuid), {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
  },
};

export default function AboutPage({ data }: PageProps) {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page, and {data}</p>
    </main>
  );
}
