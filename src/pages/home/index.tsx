import React from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Button from "../../components/Button";

const Home = () => {
  return (
    <Layout>
      <div className="w-screen h-full grid gap-4 place-content-center mt-10 ">
        <div className="flex justify-center mb-20">
          <h1 className="text-todoist-indigo">Todoist Zone</h1>
        </div>
        <div className="flex space-x-5 flex-row">
          <Button title="Create Task" />
        </div>
        <div className="w-96">
          <Card />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
