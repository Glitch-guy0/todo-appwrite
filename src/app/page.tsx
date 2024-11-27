import { IoIosAddCircle } from "react-icons/io";
import { FaTrash } from "react-icons/fa6";

export default function todoPage() {
  const tasks = [
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description 2",
      completed: false,
    },
  ];
  return (
    <div className="w-full max-w-[800px] mx-auto relative h-svh flex flex-col">
      <InputTask />
      <div className=" h-full flex flex-col gap-4 mt-4 mx-2 ">
        {/* show tasks here */}

        <div className="bg-zinc-700/20 rounded-lg flex overflow-hidden">
          <input type="checkbox" className="ml-4 rounded-full outline-none " />
          <div className="px-4 py-2">
            <h1 className="text-xl text-white/90">Tasks</h1>
            <p className="text-sm text-white/70">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
              facilis ducimus, dicta dignissimos quasi ut dolores mollitia
              cupiditate vitae quis.
            </p>
          </div>
          <button className="h-full bg-rose-700 w-[30%] sm:w-[5%] flex items-center justify-center">
            <FaTrash />
          </button>
        </div>

        {/* end of this shit */}
        
      </div>
    </div>
  );
}

function InputTask() {
  return (
    <>
      {/* user input */}
      {/* absolute with top & bottom */}
      <div className="absolute bottom-4 w-full sm:static sm:my-4">
        <form className="bg-zinc-800 shadow-lg flex justify-center rounded-full px-2 py-1 w-[95%] sm:w-full mx-auto">
          <input
            type="text"
            placeholder="Add Task"
            className="flex-grow m-2 bg-transparent outline-none px-3 py-1"
          />
          <button className="">
            <IoIosAddCircle className="text-[40px] text-zinc-700" />
          </button>
        </form>
      </div>
    </>
  );
}
