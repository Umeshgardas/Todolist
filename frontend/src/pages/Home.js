import { useEffect } from "react";
import TodolistDetails from "../components/TodolistDetails";
import TodolistForm from "../components/TodolistForm";
import { useTodolistContext } from "../hooks/useTodolistsContext";

const Home = () => {
  const { todolists, dispatch } = useTodolistContext();

  useEffect(() => {
    const fetchTodolists = async () => {
      const response = await fetch("/api/todolists", {
        // headers: {
        //   Authorization: `Bearer ${user.token}`,
        // },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TODOLISTS", payload: json });
      }
    };
    // if (user) {
    fetchTodolists();
    // }
  }, [dispatch]);

  return (
    <div className="home">
      <div className="todolists">
        {todolists &&
          todolists.map((todolist) => (
            <TodolistDetails todolist={todolist} key={todolist._id} />
          ))}
      </div>
      <TodolistForm />
    </div>
  );
};

export default Home;
