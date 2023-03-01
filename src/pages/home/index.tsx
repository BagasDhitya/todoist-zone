import React from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Button from "../../components/Button";

const Home = () => {
  return (
    <Layout>
      <div className="w-screen h-full grid gap-4 place-content-center mt-10 ">
        <div className="w-96">
          <Card />
        </div>
      </div>
      <div className="w-40">
        <Button title="Create Task" />
      </div>
    </Layout>
  );
};

export default Home;
