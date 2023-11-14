import Link from "next/link";
import Logo from "./p1.png";
import Image from "next/image";

export default function landingpage() {
  return (
    <div className="mt-35 items-center">
      <h1 className="text-4xl font-normal text-slate-500 pb-5 text-black">
        <b className="text-primary">Hey, FIVQ here! </b>
      </h1>
      <marquee
        className="text-4xl font-normal text-slate-500"
        behavior="scroll"
        direction="left"
      >
        Discover the{" "}
        <Link href="/Flutter">best Flutter interview questions</Link>,
        <Link href="/Dart">Dart interview questions</Link>, and{" "}
        <Link href="/OOPs">
          Object-Oriented Programming (OOPs) interview questions
        </Link>
        . Additionally,{" "}
        <Link href="/Blog">read blog posts related to these topics</Link>.
      </marquee>

      <div className="flex">
        <div class="relative px-3">
          <Image
            src={Logo}
            height={140}
            width={430}
            alt="Image"
            class="w-186 h-120 object-cover rounded-2xl"
          />

          <div class="absolute inset-0 flex items-end justify-center pl-10 pb-5">
            <div class="text-white text-start">
              <h1 class="text-4xl font-bold">Your Title</h1>
              <p class="text-lg">Your description goes here.</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex">
            <div class="relative px-5">
              <Image
                src={Logo}
                height={150}
                width={200}
                alt="Image"
                class="w-186 h-120 object-cover rounded-2xl"
              />

              <div class="absolute inset-0 flex items-end justify-start pl-10 pb-5">
                <div class="text-white text-start">
                  <h1 class="text-4xl font-bold">Your Title</h1>
                  <p class="text-lg">Your description goes here.</p>
                </div>
              </div>
            </div>
            <div class="relative">
              <Image
                src={Logo}
                height={150}
                width={200}
                alt="Image"
                class="w-186 h-120 object-cover rounded-2xl"
              />

              <div class="absolute inset-0 flex items-end justify-start pl-10 pb-5">
                <div class="text-white text-start">
                  <h1 class="text-4xl font-bold">Your Title</h1>
                  <p class="text-lg">Your description goes here.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex pt-5">
            <div class="relative px-5">
              <Image
                src={Logo}
                height={150}
                width={200}
                alt="Image"
                class="w-186 h-120 object-cover rounded-2xl"
              />

              <div class="absolute inset-0 flex items-end justify-start pl-10 pb-5">
                <div class="text-white text-start">
                  <h1 class="text-4xl font-bold">Your Title</h1>
                  <p class="text-lg">Your description goes here.</p>
                </div>
              </div>
            </div>
            <div class="relative">
              <Image
                src={Logo}
                height={150}
                width={200}
                alt="Image"
                class="w-186 h-120 object-cover rounded-2xl"
              />

              <div class="absolute inset-0 flex items-end justify-start pl-10 pb-5">
                <div class="text-white text-start">
                  <h1 class="text-4xl font-bold">Your Title</h1>
                  <p class="text-lg">Your description goes here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex items-center">
        <div className="flex-1 h-500 relative">
          <Image
            className="object-fill h-120 w-186 rounded-2xl"
            src={Logo}
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col gap-10 items-center align-text-top px-5">
          <h1 className="text-1xl font-medium text-black">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className="text-20 font-normal text-var(--softTextColor)">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className="px-5 py-4 border-none rounded-2xl bg-white items-center">
            Read More
          </button>
        </div>
      </div>

      <h1 className="text-4xl font-normal text-black pt-10">Recent Post</h1>
    </div>
  );
}

// import Link from 'next/link'
// import Logo from './p1.png'
// import Image from 'next/image'

// export default function landingpage() {
//   return (
//     <div className="mt-35 items-center">

//       <h1 className="text-4xl font-normal text-slate-500 pb-5 text-black">
//         <b className='text-primary'>Hey, FIVQ here! </b>
//       </h1>
//       <marquee className="text-4xl font-normal text-slate-500" behavior="scroll" direction="left">
//         Discover the <Link href="/Flutter">best Flutter interview questions</Link>,
//         <Link href="/Dart">Dart interview questions</Link>,
//         and <Link href="/OOPs">Object-Oriented Programming (OOPs) interview questions</Link>.
//         Additionally, <Link href="/Blog">read blog posts related to these topics</Link>.</marquee>

//       <div className="mt-20 flex items-center gap-50">
//         <div className="flex-1 h-500 relative" >
//           <Image  className="object-fill h-80 w-136 rounded-2xl" src={Logo} alt=""  />

//         </div>
//         <div className="flex-1 flex flex-col gap-10 items-center align-text-top px-5">
//           <h1 className="text-1xl font-medium text-black">Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
//           <p className="text-20 font-normal text-var(--softTextColor)">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//             Cupiditate, quam nisi magni ea laborum inventore voluptatum
//             laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
//             quisquam! Harum unde sit culpa debitis.
//           </p>
//           <button className="px-5 py-4 border-none rounded-2xl bg-white items-center">Read More</button>

//         </div>

//       </div>

//       <h1 className="text-4xl font-normal text-black pt-10">
//         Recent Post
//       </h1>

//     </div>
//   )
// }
