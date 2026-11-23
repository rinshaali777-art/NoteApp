import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-blue-100 flex items-center justify-between min-h-screen  p-5">
      <div className="md:grid grid-cols-2 -full  ">
        <div>
          <h1 className="text-blue-800 font-bold text-4xl">Note Hub</h1>
          <h1 className="text-blue-500 font-bold text-2xl mt-3">capture your thoughts</h1>
          <p className="text-gray-500 my-5 text-justify text-lg ">A Note App is a digital application that allows users to create, edit, organize, and manage their notes easily. It helps users store important information, reminders, and ideas in one place. With a simple and user-friendly interface, users can quickly access, update, and delete notes anytime, making information management more convenient and efficient.</p>
          <Link href={'/login'} className="bg-blue-600 text-white rounded font-bold p-3 text-xl ">Let's Start</Link>
        </div>
        <div className="flex item-center justify-center ">
          <Image height={500} width={500} alt="" src={'https://i.pinimg.com/originals/13/0e/da/130edae3816e841d3785a276e1fe0fd2.gif'}/>
        </div>

      </div>
    </div>
  );
}
