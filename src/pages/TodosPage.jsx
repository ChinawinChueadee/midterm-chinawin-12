import { Navigate, useLoaderData } from "react-router";
import { useUserStore } from "../stores/userStore";
import TodoList from "../components/TodoList";

function TodosPage() {
  const token = useUserStore((state) => state.token);
  // const logout = useUserStore((state) => state.logout);
  const todos = useLoaderData();

  if (!token) return <Navigate to="/" replace />;
  return (
    <div className="bg-gray-300 h-[100vh]">
      <div className="p-30">
        <div className="flex flex-col justify-cente rounded-3xl  p-4  mx-auto w-160 h-130 bg-white shadow-2xl">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold p-8">My Todo</h1>
            <h1 className="text-5xl font-bold p-8">🚀</h1>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-around gap-40">
              <input
                type="text"
                placeholder="new task"
                className="outline-none p-3"
              />
              <button className="bg-cyan-500 p-3 rounded-3xl w-20 hover:bg-green-500">
                Add
              </button>
            </div>
            <hr className="mt-8 w-120 border-gray-400" />
          </div>
          <div>
            {todos.map((todo, index) => (
              <div className="flex p-2 justify-between mt-3">
                <div className="flex justify-between gap-8">
                  <input type="checkbox" className="w-4 h-6" />
                  <label htmlFor="">{todo?.content}</label>
                </div>
                <div className="flex justify-between gap-8">
                  <button className="hover:bg-green-500 bg-cyan-500 rounded-3xl p-1">
                    Edit✍️
                  </button>
                  <button className="text-gray-500 hover:text-black">X</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodosPage;
