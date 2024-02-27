'use client'
import Image from "next/image";

export default function Home() {
  return (
    <>
      <aside className="flex m-5 p-5 space-x-10 items-center justify-around">
        <Image
          className="rounded-xl shadow-2xl shadow-yellow-200"
          src={`https://i.pinimg.com/564x/71/bb/0d/71bb0d3e1c46e26e732b07afb1a69a7a.jpg`}
          width={250}
          height={250}
          draggable={false}
          alt="Image from Pinterest"
        />

        <div>
          <p className="font-mono w-[50%] animate-rainbow-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae corporis, quaerat ea accusantium soluta consequuntur voluptates incidunt, voluptatum voluptas in minima maxime molestiae earum veniam sunt consequatur voluptatibus suscipit doloremque.
          </p>
        </div>
      </aside>

      <style jsx>{`
        @keyframes rainbow {
          0% {
            color: violet;
          }
          16.666% {
            color: indigo;
          }
          33.333% {
            color: blue;
          }
          50% {
            color: green;
          }
          66.666% {
            color: yellow;
          }
          83.333% {
            color: orange;
          }
          100% {
            color: red;
          }
        }

        .animate-rainbow-text {
          animation: rainbow 4s linear infinite;
        }
      `}</style>
    </>
  );
}
