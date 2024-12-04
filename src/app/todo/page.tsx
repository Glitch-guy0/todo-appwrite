"use client";

import { IoIosAddCircle } from "react-icons/io";
import { FaTrash } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";

export default function todoPage() {
  const [tasks, setTasks] = useState<any>(null);

  useEffect(() => {
    (async function () {
      const timeout = setTimeout(async () => {
        const tasks = await axios.get("/api/tasks");
        setTasks(tasks.data.tasks);
      }, 3000);
    })();
  },[tasks]);


  async function deleteHandler(e: { preventDefault: () => void }, id: string) {
    e.preventDefault();
    try {
      const { data } = await axios.delete("/api/tasks/", { data: { id } });
      if (data.status) {
        // setTasks(data.tasks);
      }
    } catch (error) {
      console.log("something went wrong");
    }
  }

  return (
    <div className="w-full max-w-[800px] mx-auto relative h-svh flex flex-col">
      {/* same file */}
      <InputTask />
      <div className=" h-full flex flex-col gap-4 mt-4 mx-2 ">
        {tasks &&
          tasks.map((task: { $id: string; Task: string }) => (
            <div
              className="bg-zinc-700/20 rounded-lg flex overflow-hidden"
              key={task.$id}
            >
              <div className="px-4 py-2 flex-grow">
                <h1 className="text-xl text-white/90">{task.Task}</h1>
              </div>
              <button className="h-full bg-rose-700 w-[15%] sm:w-[5%] flex items-center justify-center" onClick={(e) => deleteHandler(e,task.$id)}>
                <FaTrash />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

function InputTask() {
  const [task, setTask] = useState("");

  async function submitHandler(e: { preventDefault: () => void }) {
    e.preventDefault();
    if(task.length < 1) return;
    try {
      const res = await axios.post("/api/tasks", { task });
      if (res.data.status) {
        setTask("");
      } else {
        throw new Error();
      }
    } catch (_err) {
      setTask("something went wrong try again");
    }
  }
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
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={(e) => submitHandler(e)}>
            <IoIosAddCircle
              className={`text-[40px] text-zinc-700 ${task && "text-sky-700"}`}
            />
          </button>
        </form>
      </div>
    </>
  );
}
