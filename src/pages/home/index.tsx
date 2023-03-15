import { useState } from "react";

import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import axios from "axios";
import Swal from "sweetalert2";

type Task = {
  id: number;
  task: string;
  date: string;
};

const Home = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState<Task[]>([]);
  const [show, setShow] = useState(false);

  function addTask() {
    axios
      .post(
        `https://api.todoist.com/rest/v2/tasks`,
        {
          content: task,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_TODOIST_KEY}`,
          },
        }
      )
      .then((response) => {
        const newTask: Task = {
          ...data,
          task: response.data?.content,
          date: response.data?.created_at,
          id: response.data?.id?.length + 1,
        };
        data.push(newTask);
        Swal.fire({
          title: "Success!",
          text: "Success added a new task",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Failed!",
          text: error,
          confirmButtonText: "OK",
        });
      });
  }

  function updateTask(id: number, newTask: Task) {
    setShow(true);
    const updatedTasks = data.map((item) => {
      if (item.id === id) {
        return { ...newTask, id };
      }
      return item;
    });
    setData(updatedTasks);
  }

  console.log("data :", data);

  return (
    <Layout>
      <div className="w-screen h-full grid gap-4 place-content-center mt-10 ">
        <div className="flex justify-center mb-20">
          <h1 className="text-todoist-indigo">Todoist Zone</h1>
        </div>
        <div className="flex space-x-5 flex-row mb-3">
          <Button
            id="create-task"
            title="Create Task"
            onClick={() => setShow(true)}
          />
        </div>
        <div className="w-96 space-y-10">
          {data.length !== 0 ? (
            data.map((item, index) => {
              return (
                <Card
                  key={index}
                  id={index}
                  title={item.task}
                  date={item.date}
                  onUpdate={() => updateTask(item.id, item)}
                />
              );
            })
          ) : (
            <div className="mt-20">
              <p className="text-todoist-indigo text-center">
                You don't have any tasks today, please click the Create Task
                button to add tasks!
              </p>
            </div>
          )}
        </div>
      </div>
      <Modal isOpen={show} onClose={() => setShow(false)}>
        <div className="m-5">
          <Input
            label="Task Name"
            name="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Input
            label="Date"
            name="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Button id="add" title="Add" onClick={() => addTask()} />
        </div>
      </Modal>
    </Layout>
  );
};

export default Home;
