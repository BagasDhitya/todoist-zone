import { useState } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Input from "../../components/Input";

const Home = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

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
          <Card />
        </div>
      </div>
      <Modal isOpen={show} onClose={() => setShow(false)}>
        <div className="m-5">
          <Input label="Task Name" name="task" />
          <Input label="Date" name="date" type="date" />
          <Button id="add" title="Add" />
        </div>
      </Modal>
    </Layout>
  );
};

export default Home;
