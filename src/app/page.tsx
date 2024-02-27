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

<Image
          className="rounded-xl shadow-2xl shadow-yellow-200"
          src={`https://i.pinimg.com/564x/7f/d8/ea/7fd8ea6d1ce40c5e9ee037f6b73ea189.jpg`}
          width={250}
          height={250}
          draggable={false}
          alt="Image from Pinterest"
        />


<Image
          className="rounded-xl shadow-2xl shadow-yellow-200"
          src={`https://i.pinimg.com/236x/fd/6f/bc/fd6fbc3b7b28e1910273305ccde9877a.jpg`}
          width={250}
          height={250}
          draggable={false}
          alt="Image from Pinterest"
        />


<Image
          className="rounded-xl shadow-2xl shadow-yellow-200"
          src={`https://i.pinimg.com/236x/c5/27/a5/c527a51f921f1cf59c0decdd16104268.jpg`}
          width={250}
          height={250}
          draggable={false}
          alt="Image from Pinterest"
        />




        

       
      </aside>

      <div className=" flex text-center w-[100%] m-auto items-center " >
          <p className="font-mono  animate-rainbow-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae corporis, quaerat ea accusantium soluta consequuntur voluptates incidunt, voluptatum voluptas in minima maxime molestiae earum veniam sunt consequatur voluptatibus suscipit doloremque.
          </p>
        </div>

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
