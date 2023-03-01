import { useState } from "react";

import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Input from "../../components/Input";

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
    const newTask: Task = {
      ...data,
      task: task,
      date: date,
      id: data.length + 1,
    };
    setData([...data, newTask]);
    setShow(false);
  }

  console.log(data);

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
