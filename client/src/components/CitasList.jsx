import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { CitasCard } from "./CitasCard";

export function CitasList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks();
      setList(res.data);
    }
    loadTasks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {list.map((item) => (
        <CitasCard key={item.id} list={item} />
      ))}
    </div>
  );
}
