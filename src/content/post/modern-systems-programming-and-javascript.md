# Modern Systems Programming Languages and their Impact on the JavaScript Ecosystem

This article assumes basic programming knowledge.

## System Software and Application Software

We can categorize software in many ways, and one is to label them as systems software vs. application software. Application software help users achieve their goals directly. For example, gaming, word processing, developing software, etc. are what the users want to do. Systems software help manage the computer's resources and lay a foundation for other software to run. For example, drivers for peripherals, antivirus, operating system etc. manage the computer.

Systems programming allows low level interactions with the computer's resources and is more suitable for building system software. C/C++, D, Pascal, Ada are systems programming languages. Application programming, on the other hand, makes it easier to develop application software without worrying too much about the underlying hardware or managing resources. C#, Java, php are examples for application programming languages.

But sometimes, you can use them interchangeably. Especially, there's nothing stopping you from using systems programming languages to develop application software. It might be a bit harder, though.

## A Brief History of JavaScript

JavaScript is a scripting language introduced by [Netscape Navigator](https://en.wikipedia.org/wiki/Netscape_Navigator), which came a long way even outliving Netscape Navigator itself. While compiled languages transform the source code into machine language or an intermediate language before execution, scripting languages are interpreted line-by-line as they are read. Although, due to various optimizations like JIT compilation, this isn't exactly the case anymore. 

JavaScript was made to make the web more dynamic. With [Microsoft introducing what is known today as AJAX](https://en.wikipedia.org/wiki/Ajax_(programming)), it laid the foundation to build Web 2.0. Initially, every browser had their own JavaScript implementations, however ECMAScript standardization helped unify them. 

JavaScript doesn't just run on browsers anymore; there are various JavaScript runtimes like Node, Deno, Bun, and [LLRT](https://github.com/awslabs/llrt) that allow the language to run on server, on the edge, and sometimes even on embedded systems. 

## The Need for JavaScript Tooling

JavaScript evolved a lot. And fast. Developers wanted to use the latest features, but sometimes the browsers couldn't keep up; because either the features were not yet standardized, or the users didn't update their browsers frequently enough. Sometimes, browsers even had different APIs exposed. The developers also wanted to maintain compatibility across them. Some "tools" were needed to make this happen. 

[NodeJS](https://nodejs.org/en) can be thought of as the first popular JavaScript tool. Not only that it allowed to write the server side of the web sites in JavaScript, it also provided a nice framework to run scripts to do anything that the developer wanted. Most of the JavaScript tooling still revolve around NodeJS. 

Tools allowed developers achieve much more than expected. People who didn't like JavaScript could use other languages like [CoffeeScript](https://coffeescript.org/), [TypeScript](https://www.typescriptlang.org/), or [Elm](https://elm-lang.org/) that compiled/transpiled to JavaScript. Bundlers allowed to bundle the dependencies and developer code into a single script to be sent to the browser. Linters, formatters, testing tools, coverage tools ensured the quality of code. Dependency managers helped locate and install useful libraries for developers. Most of these tools themselves were written in JavaScript. So there was an issue. 

Performance!

## The Need for _Better_ JavaScript Tooling

JavaScript is slow compared to most compiled languages, regardless of attempts to optimize it. Although features like hot reloading, where the browser page is automatically updated to reflect the changes you do to the source code, make the developer experience better, you can hardly achieve their full potential due to long wait times, sudden crashes, high resource usage etc. 

At the same time, a new set of compiled and systems programming languages were gaining popularity. And this was an opportunity, and a necessity for the developers to write faster tools to do all things above.

## Modern Systems Programming Languages

### [Go](https://go.dev/)

Golang is a systems programming language developed by Google in 2009. It is open-source, statically typed, and modelled after C. With its fast compiler, standard library, growing community of developers, and support for modern hardware architecture, it is a popular language for writing microservices, web applications, cloud and networking services, and other types of software. Its strong support for concurrency makes it ideal for building high-performance and scalable network services. Although it has been labelled a systems programming language, this is contested due to its automatic garbage collection.

### [Rust](https://www.rust-lang.org/)

First conceived by Graydon Hoare in 2006 and introduced by Mozilla around 2010, Rust is a modern systems programming language that has been gaining significant attention in the recent years. It has been crowned as the ["most loved programming language" by the stack overflow survey](https://survey.stackoverflow.co/2022#section-most-loved-dreaded-and-wanted-programming-scripting-and-markup-languages) for at least 7 years, and has been adopted by giants like [Microsoft](https://www.theregister.com/2023/04/27/microsoft_windows_rust/), [Google](https://security.googleblog.com/2021/04/rust-in-android-platform.html), [Amazon](https://aws.amazon.com/blogs/opensource/why-aws-loves-rust-and-how-wed-like-to-help/), [Meta](https://engineering.fb.com/2021/04/29/developer-tools/rust/), and [Cloudflare](https://blog.cloudflare.com/tag/rust/). [Mozilla also adapted Rust to replace C++ in their new CSS engine.](https://blog.mozilla.org/en/mozilla/mozilla-welcomes-the-rust-foundation/) However, the biggest win for [Rust is that it made it to the Linux kernel](https://arstechnica.com/gadgets/2021/03/linus-torvalds-weighs-in-on-rust-language-in-the-linux-kernel/), which was exclusively written in C ([with the fact that Linus Torvalds considers C++ to be a horrible language](https://harmful.cat-v.org/software/c++/linus)). 

Designed with a focus on safety, performance, and concurrency, Rust offers a unique set of features that make it stand out among other programming languages. One of the key advantages of Rust is its memory safety guarantees, achieved through a strong ownership system and strict borrowing rules. These features eliminate the common pitfalls of memory-related bugs, such as null references and data races, making Rust a reliable choice for developing low-level software and systems.

### [Zig](https://ziglang.org/)

Zig is an open-source, general-purpose, statically-typed, compiled system programming language. It is designed by Andrew Kelley and aims to improve on the C programming language while maintaining C's simplicity. It has a minimal Rust-like syntax but offers modern features, new optimizations, and a variety of safety mechanisms while not being as demanding of runtime safety as other languages. Zig supports compile-time generics, reflection and evaluation, cross-compiling, and manual memory management. It aims to be a simpler systems-oriented language than its predecessors and make it easier to write safe, correct code. It also aims to improve the developer experience by reducing the sharp edges found in writing C-like software.

Zig offers a productive C-interop solution, letting C developers migrate their C codebases to Zig incrementally. It is even being used to implement the Bun.js JavaScript runtime as an alternative to Node.js. However, as a young language, Zig aspires to set a benchmark in systems programming. It has a vibrant community with an active forum and weekly progress reports.

### [Nim](https://nim-lang.org/)

The Nim programming language is a statically typed, general-purpose, compiled high-level programming language. Nim is designed to be efficient, expressive, and elegant, and it supports a variety of programming styles, including functional, message passing, procedural, and object-oriented programming.

Nim is a relatively new language, but it has already gained popularity among developers and companies for its high performance and ease of use. The language is highly expressive and concise, with a syntax that is easy to read and understand. It is also supported by a fast-paced ecosystem of production-ready libraries.

Nim is suitable for a variety of applications, including game development and embedded systems. It is also well-suited for hard-realtime systems, as its memory management is deterministic and customizable. Overall, Nim is a powerful and versatile programming language that is worth considering for modern systems programming.

### [V](https://vlang.io/)

V is a relatively new systems programming language that was first released in 2019. It aims to combine the performance and control of C/C++ with many modern conveniences such as fast compilation, garbage collection, and easy cross-compilation.

One of V's main design goals is to make it easy to write safe and maintainable code. It uses a combination of static type checking and immutable data structures to help prevent bugs. The language also provides high-level features like structs, interfaces, generics, and reflection.

While not as widely used as languages like Rust or Go, V is starting to gain traction in certain areas. Its ability to compile to C code makes it a good option for writing cross-platform system-level code and bindings. V can also generate JavaScript code which allows it to be used for front-end web development. This JavaScript ecosystem interoperability is one of V's unique strengths.

Overall, V aims to strike a balance between performance, safety, and developer productivity. Its youth means it is still evolving quickly but it shows promise as a modern alternative for systems programming tasks.

### [Carbon](https://github.com/carbon-language)

Google engineer Chandler Carruth first introduced Carbon, an experimental programming language at the CppNorth conference in Toronto in July 2022 as an open-source project. Carbon is designed to focus on providing memory safety, and is thus built to stand on the shoulders of C++ – the language it is expected to succeed.

Some of Carbon's advanced features that make it an alternative to C++ include:
- Prohibiting access to deallocated memory (such as garbage-collected memory)
- Disallowing attempts to access memory via dereferenced pointers
- Extra safeguards for access to incorrect data types
- Regular bounds checking on arrays
- Locking mechanisms (including semantics controls) that isolate concurrent access
- Providing thread-local storage, atomic operations and lock-free data structures

Carbon also seeks to cultivate safer memory models through memory models, type safety and functional programming characteristics also associated with languages like C++.

### Next-Gen JavaScript Tools

Not all of the above languages are used to create JavaScript tooling just yet. But the below lists some tools created using some of the languages mentioned above.

### [swc](https://swc.rs/)

Speedy Web Compiler is an extensible, Rust-based platform for the Web. It can compile ("trans"pile) both modern JavaScript and TypeScript with [React](https://react.dev/). It plans to support bundling with `swcpack` which is currently under development, so you probably want to checkout turbopack by Vercel, or Vite which can use swc for fast refresh. 

`swc-loader` can be integrated into existing webpack workflows, usually with no or minimal changes to make them faster. Similarly, `@swc/jest` can make jest tests run faster. 

`swc` can't replace `tsc` (typescript compiler) just yet because it doesn't check types; but probably your editor is already doing that. There was another project [`stc`](https://github.com/dudykr/stc), trying to create a "Speedy TypeScript type checker", but unfortunately, [that has been abandoned](https://github.com/dudykr/stc/issues/1101), likely because it's hard for a few developers to keep up with the speed TypeScript change. 

`swc` also offers `@swc/wasm-web` to synchronously transform code inside the browser using WebAssembly, and `@swc-node/register` as a replacement for `ts-node`.
### [esbuild](https://esbuild.github.io/)

`esbuild` is an extremely fast JavaScript bundler and minifier written in Go. It might even be slightly faster than `swc`. 
While most bundlers like webpack rely on JavaScript for their core implementation, esbuild's Go codebase allows it to start up and bundle projects dramatically faster than other solutions.

- Lightning fast bundle times - esbuild can bundle hundreds of modules per second, providing 10-100x speedups over alternatives.
- Native Go implementation - The core is implemented in Go using concurrency, providing performance and low memory usage.
- Support for JSX and TypeScript - esbuild can directly process JSX syntax and TypeScript without configuring other compilers like Babel or tsc.
- Built-in minification - esbuild minifies code during bundling using advanced optimizations like scope hoisting for smaller output size.
- Extensive API - esbuild provides multiple APIs besides the CLI to integrate with build pipelines and other tools.
- Tree shaking - esbuild analyzes imports and exports to exclude unused code from bundles to reduce size.

While still new, esbuild shows enormous potential to speed up JavaScript bundling, a common bottleneck in frontend workflows. Its focus on performance and a simple cohesive architecture make it compelling to try for optimizing build times.
### [Bun](https://bun.sh/)

Bun is a faster all-in-one JavaScript runtime written in Zig. While others are trying to replace individual parts of the JavaScript toolchain like `babel` or `webpack`, Bun aims to replace the entire Node.js runtime along with `npm`, Jest, `webpack`, `tsc` and more in one tool.

Some key features and benefits of Bun include:

- Faster installation - Bun caches dependencies locally and bundles them into single packages, providing up to 10-100x faster installs compared to `npm`.
- Simplified toolchain - By replacing Node and other tools in one runtime, Bun removes the need to configure and integrate various packages and systems.
- Built-in testing - Jest-compatible runner comes pre-configured out of the box for fast unit testing.
- TypeScript support - Bun has full native support for TypeScript without a separate compilation step.

While still new, Bun shows potential to greatly simplify and speed up JavaScript/TypeScript development by consolidating the entire toolchain into a single performant runtime. It can be incrementally adopted in place of NPM and other tools or used as a complete replacement for the Node.js stack.
### [Deno](https://deno.com/)

Deno is a Rust-based runtime that provides built-in support for TypeScript and aims to fix perceived shortcomings of Node.js. Some key features of Deno include:

- Secure by default - no file, network, or environment access, unless explicitly enabled. This prevents accidental access to the machine from a Deno program.
- Integrated runtime for TypeScript - no need for a separate compilation step. Code can be run immediately after writing.
- Standard library - Deno provides a set of reviewed and audited standard modules that cover common functionality like file system access and web server creation. This avoids the need for extensive third party module reliance.
- Promises and async/await - Deno uses modern asynchronous patterns without callbacks. This simplifies coding for asynchronous operations.
- Fresh code execution - Deno does not use a package manager like NPM or Yarn. Remote modules are re-fetched and re-evaluated on each execution to avoid getting stuck in outdated code states.
- Browser compatible API - Deno uses web platform standards like WebSockets, WebWorkers and Fetch which allows code to run in browser environments as well as the server.

While still relatively new, Deno shows promise as a lighter and more secure runtime for JavaScript and TypeScript server applications. The built-in type checking and avoidance of NPM could make it well suited for large mission critical code bases.
### [Biome](https://github.com/biomejs/biome) (successor to [Rome](https://github.com/rome/tools))

Biome is a Rust-based toolchain for the web which supports JavaScript, TypeScript, (JSX,) JSON, and CSS. Biome is designed to eventually replace `babel`, `eslint`,`webpack`,`prettier`, and `jest` and do all that with minimal configuration.

Rome was supposed to do all that, and apparently, it has been abandoned.
### [Parcel](https://parceljs.org/docs/)

Parcel (v1) was probably the first zero-configuration bundler (replacement for webpack) out their at a time when configuring webpack was a pain. It supported so many file/asset types out-of-the box, and sometimes even automatically installed the necessary dependencies for you. 

The new parcel (v2) does all that, although written mostly in JavaScript, it's now faster as well thanks to SWC. It's not clear to me why more people aren't using Parcel anymore.
### [Vite](https://vitejs.dev/) (and the now defunct [Snowpack](https://www.snowpack.dev/))

Vite is a (non-)bundler and dev server which takes a different approach for better developer experience. It relies on `esbuild` for pre-bundling dependencies, and serves source code over native ESM, so the browser takes over the job of the bundler. It uses `babel` to do any required transforms but we can easily opt to `swc` using a plug-in.  While building for production, it uses rollup as the bundler. 

It [has a rich ecosystem](https://github.com/vitejs/awesome-vite). If you want it to be like NextJS, there is the [`vite-plugin-ssr`](https://vite-plugin-ssr.com/) plugin for that. [Vitest](https://vitest.dev/) is a vite-native unit test framework. 

It is listed under the 
- Most adopted technology (interestingly, Vitest gets the 2nd place),
- Highest retention, and
- Highest interest
in [State of JS 2022 awards](https://2022.stateofjs.com/en-US/awards/).

The behavior of snowpack was similar to Vite, but it is not maintained anymore. [According to Vite docs](https://vitejs.dev/guide/comparisons.html#snowpack), the Snowpack team is now building [Astro](https://astro.build/), a popular static site builder powered by Vite.
### [Turbo(pack)](https://turbo.build/pack)
[Vercel](https://vercel.com/) claims `turbopack` to be the "The Rust-powered successor to Webpack". It utilizes worker threads for parallelized processing and an incremental filesystem cache to achieve faster bundle times.

- Faster HMR - TurboPack can cache file analysis and rebuild bundles in parallel for much faster re-bundle times on changes. It promises to never do the same task again.
- Simplified configuration - Compared to webpack's complex config, TurboPack aims for a minimal and intuitive setup.
- Ecosystem support - TypeScript, JSX, CSS, CSS Modules, WebAssembly, files can be natively bundled without requiring a separate build step. React server components are supported natively.

The primary use case of turbopack is to support NextJS. With TurboPack, Vercel [seems intent on competing directly with Vite](https://turbo.build/blog/turbopack-benchmarks#benchmarking-turbopack-webpack-and-vite:~:text=As%20the%20current%20state%20of%20the%20art%2C%20we%20are%20including%20Vite) by creating another bundler focused on framework integrations, rather than providing novel functionality beyond speed optimizations.

### [Rolldown](https://rolldown.rs/)

Rolldown is an upcoming Rollup-compatible Rust-based bundler built for Vite. It is built on top of [Oxc](https://oxc-project.github.io/) which is another toolset that includes a parser, linter, resolver, bundler and more incoming. It is supposed to fix the issue of using two bundlers, esbuild and Rollup both in current Vite. 

## Other Affected Areas

### WebAssembly

WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications. WebAssembly aims to execute at native speed by taking advantage of common hardware capabilities available on a wide range of platforms. It is an open web standard developed by the W3C WebAssembly Working Group. WebAssembly code can be generated from C/C++, Rust, AssemblyScript and other languages and executed in modern web browsers with near-native performance. This allows web applications to run computationally intensive tasks efficiently without compromising on load times. Overall, WebAssembly brings near-native performance to the web, unlocking new use cases and enabling a high performance web.
### Edge Computing

Edge computing refers to processing data near the source of data generation rather than sending it to the cloud. This allows for faster response times and reduces bandwidth usage. Modern systems programming languages like Rust and Go are well-suited for developing edge computing applications, although other languages like JavaScript are more commonly used.

## Conclusion

The rise of modern systems programming languages like Rust, Go, Zig, and others has brought significant improvements to the JavaScript ecosystem. These languages have enabled the development of faster and more efficient tools for tasks such as bundling, transpiling, and type checking, which are crucial for modern web development workflows.

Tools like swc, esbuild, Bun, and others have demonstrated the potential for substantial performance gains, simplifying the toolchain, and improving the overall developer experience. By leveraging the strengths of these systems programming languages, developers can now benefit from faster build times, improved security, and better resource management.

Furthermore, the impact of these languages extends beyond the JavaScript ecosystem, enabling advancements in areas like WebAssembly and edge computing. As the demand for high-performance web applications continues to grow, the integration of systems programming languages into the JavaScript toolchain will become increasingly important.

While the adoption of these new tools and languages may involve a learning curve, the benefits they offer in terms of productivity, performance, and developer experience make them a valuable addition to the modern web development ecosystem. As these technologies continue to evolve and mature, we can expect to see even more innovative solutions that push the boundaries of what is possible with web development.
