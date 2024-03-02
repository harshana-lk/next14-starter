import { sayHello } from "@/lib/actions";

const ServerActionsTest = () => {
  const actionincomponent = async () => {
    "use server";
    console.log("it works");
  };

  return (
    <div>
      <form action={sayHello}>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="desc" />
        <input type="text" placeholder="slug" />
        <input type="text" placeholder="userId" />
        <button>Create</button>
      </form>
    </div>
  );
};

export default ServerActionsTest;
