---
layout: "../../../layouts/BlogPost.astro"
title: What if backend code looked like React? - Part I/Deno
description: Introduction to Deno
initialDraftAt: '2022-09-19 20:00:00 +0530'
publishedAt: '2022-09-16 20:00:00 +0530'
heroImage: /what-if-backend-code-looked-like-react-1/cover.png
category: programming
tags:
  - JSX
  - react
  - NodeJS
  - Deno
  - Backend
---

I had to take another look at [Deno](https://deno.land/). This was one of the zillions of emerging tools and frameworks in the JavaScript world. When it was first introduced, I installed it, tried to do something, failed, and never looked back. I didn't really expect it to survive; it looked like a cry of a lone developer of NodeJS with whom his teammates disagreed on the architecture (sorry). And, well, sometimes they are right (I think; look at [luxon](https://moment.github.io/luxon/#/why)).

Anyway, since now I'm trying deno, I thought about trying something else too. I'm the kind of person who tries to do so many things at once (and fails; 😅).

## What... is Deno? 🤔

> Deno is a simple, modern and secure runtime for JavaScript, TypeScript, and WebAssembly that uses V8 and is built in Rust.

Okay, it's a play on letters. "no"+"de" vs. "de"+"no". 🤓

"Runtime" means it's an alternative to NodeJS itself; compare this with build tools such as [Webpack](https://webpack.js.org/), which helps you in the (typically frontend) build process.

[V8](https://v8.dev/) is Google's JavaScript runtime used in Chromium browsers (Chrome, Edge, Opera, Vivaldi, Brave, ...) and in NodeJS itself too.

So it "natively" runs TypeScript and WebAssembly as well? We'll see why it's modern and secure later.

Built in [Rust](https://www.rust-lang.org/)! Although I don't write Rust (yet), it is my favorite programming language. It has been the most loved programming language in [stack overflow surveys](https://www.rust-lang.org/) for 7 consecutive years. Rust has taken some of the most beautiful design decisions ever; It looks like the perfect language. Still, I found it hard to learn, even harder than C++ (where most of my code segfaulted or crashed the program 🤷‍♂️). I'm not sure it adds any advantage for the common Deno user apart from [making it available as a library for rust](https://docs.rs/deno_core/latest/deno_core/). It certainly helps Deno authors reduce concurrency and memory issues.

Also I should note that there are a set of emerging [systems programming languages](https://en.wikipedia.org/wiki/System_programming_language) that also has some effect on JavaScript ecosystem right now. You can look up build tools such as [esbuild](https://esbuild.github.io/) (used in [Vite](https://vitejs.dev/)) written in [Go](https://go.dev/), [swc](https://swc.rs/) (speedy web compiler; used in [NextJS](https://nextjs.org/)) written in Rust, [Rome](https://rome.tools/) written in Rust, and runtimes such as [bun](https://bun.sh/) written in [Zig](https://ziglang.org/). It's crazy; someone should write a pair with [Nim](https://nim-lang.org/) and [V](https://vlang.io/) too.

## Installing Deno 🔨

Installation was super easy. I just headed to [deno.land](https://deno.land/).

> "Deno ships as a single executable with no dependencies. You can install it using the installers below, or download a release binary from the releases page." -- docs

Just one command and it's done. I'm using [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install) here, you can as well [use MacOSX, Linux or Windows](https://deno.land/manual@v1.25.3/getting_started/installation).

```sh
curl -fsSL https://deno.land/install.sh | sh
```

Now run `deno` to check whether it's added to `PATH`. If not, add it yourself.

```txt
➜  ~ deno
Deno 1.25.3
exit using ctrl+d or close()
>
```

So, let's write something trivial. The usual hello world program?

```sh
mkdir deno.tsx
code deno.tsx
```

Since I'm using vscode editor here, I'll install the [official Deno extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno) as well. There is [support for other editors](https://deno.land/manual@v1.25.3/getting_started/setup_your_environment) as well.

## Running some code ▶️

Let's create a file `index.tsx` (note the TypeScript React extension), and add the below TypeScript code,

```ts
console.log('Welcome to Deno!');
```

and run it.

```sh
deno run index.tsx
```

It just prints the output, and doesn't complain about the extension. Let's try an [HTTP server](https://deno.land/manual@v1.25.3/examples/http_server):

```ts
import { serve } from 'https://deno.land/std@0.156.0/http/server.ts';

const port = 8080;

const handler = (request: Request): Response => {
  const body = `Your user-agent is:\n\n${
    request.headers.get('user-agent') ?? 'Unknown'
  }`;

  return new Response(body, { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });
```

The instance you paste the above code, you're gonna see some red underlines. Why? First of all, vscode thinks it's TypeScript written for NodeJS or Web. The vscode extension we installed needs to be activated for the workspace because it's off by default (otherwise the extension would mess up your other NodeJS projects).

Open workspace settings by pressing `Ctrl+P` and searching for `workspace settings`. Now search for `deno.enable` and check the box. **Alternatively**, you can create a `.vscode` directory and put a `settings.json` with the following content:

```json
{
  "deno.enable": true
}
```

You might need to restart vscode, I'm not sure.

Are there red underlines still? Maybe run the program and they will go away. It's the same command.

```txt
HTTP webserver running. Access it at: http://localhost:8080/
⚠️  ️Deno requests net access to "0.0.0.0:8080". Run again with --allow-net to bypass this prompt.
   Allow? [y/n (y = yes allow, n = no deny)]
```

Um, why? This is the "security" part at play. You need to [explicitly provide the permissions](https://deno.land/manual@v1.25.3/getting_started/permissions) for file access, network access etc. so no library will be randomly reading your disk contents or making requests. You can [dynamically request permission](https://deno.land/manual@v1.25.3/runtime/permission_apis#request-permissions) as well. I feel like this is somewhat similar to how a web browser would request permissions to access camera, location etc.

Press `y`, then Enter.

```txt
Listening on http://localhost:8080/
```

Visit <http://localhost:8080/> and you'll see your browser agent.

```txt
Your user-agent is:
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36
```

It runs. Deno interprets TypeScript!

## Analysis 🤖

[Kovalski analysis meme]

Let's go through the code now.

```ts
import { serve } from 'https://deno.land/std@0.156.0/http/server.ts';
```

There is no `npm`; we have imported a file directly from the URL. It is cached the first time it is loaded. [There's something like this in Go language](https://go.dev/doc/code#ImportingRemote), how similar exactly? I don't know.

We also have to explicitly provide the file extension, even for a local file.

There will be no `require()` statements, even if it wasn't typescript. We write code more like ESM.

```ts
const handler = (request: Request): Response => {
  const body = `Your user-agent is:\n\n${
    request.headers.get('user-agent') ?? 'Unknown'
  }`;

  return new Response(body, { status: 200 });
};
```

That request handler is pretty neat. Mind that we haven't used a library like [express](https://expressjs.com/), and yet it looks better. In express, we would've written a Hello World program like

```js
app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

and it plain NodeJS, we would've written

```js
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};
```

Note how the request handler in NodeJS/express has both the request and response as arguments and setters to set headers, body etc. This might have its own benefits but Deno way looks more natural. It helps to avoid errors such as forgetting to return from the function after sending a response. Some use the below pattern

```js
app.get('/', (req, res) => {
  return res.send('Hello World!');
});
```

but in some cases, this leads to typing issues. Btw, in [fastify](https://www.fastify.io/docs/latest/Guides/Getting-Started/) you can write the below. It even serializes and adds the relevant headers.

```js
fastify.get('/', async (request) => {
  return { hello: 'world' };
});
```

And in Deno, we also have top level `await`s.

```ts
await serve(handler, { port });
```

## Summary

We set up deno and wrote a pretty simple web server with deno. In the next post, we will configure deno so we could write HTTP Responses with JSX.
