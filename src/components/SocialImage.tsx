import satori from 'satori';
import { readFile } from 'node:fs/promises';

const svg = async ({ title, tags, imgsrc }: { title: string; tags: string[]; imgsrc?: string }) => {
  console.log(imgsrc);

  return await satori(
    <div
      tw=" bg-slate-900 m-4 p-16 flex flex-col w-full h-full"
      // style={{
      //   backgroundClip: 'text',
      //   backgroundImage: 'linear-gradient(to right, #db2777 0%, #a855f7 100%)',
      // }}
    >
      <div tw="text-7xl text-pink-600">{title}</div>
      <div tw="flex flex-row text-white mt-8">
        {tags.map((tag) => (
          <span key={tag} tw="pr-8 py-8 text-5xl">
            # {tag}
          </span>
        ))}
      </div>
    </div>,
    {
      width: 1280,
      height: 640,
      fonts: [
        {
          name: 'Lexend',
          // Use `fs` (Node.js only) or `fetch` to read the font as Buffer/ArrayBuffer and provide `data` here.
          data: await readFile(
            './node_modules/@fontsource/lexend/files/lexend-all-400-normal.woff',
          ),
          weight: 400,
          style: 'normal',
        },
      ],
    },
  );
};

export default svg;
