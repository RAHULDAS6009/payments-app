import { UserSendComponent } from "./UserSendComponent";

export const Users = () => {
  return (
    <div>
      <div className="text-xl font-medium my-4 ">Users</div>
      <div className="flex">

      <input
        className="w-full h-10 border-2 rounded-2xl px-2"
        placeholder="Search Users..."
        type="text"
      />
      {/* <button className="h-10 w-10 bg-green-400 rounded-lg">S</button> */}
      </div>
      <div className="">
        <UserSendComponent />
        <UserSendComponent />
        <UserSendComponent />
      </div>
    </div>
  );
};
