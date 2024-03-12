import List from "./list";
import NewButton from "./new-button";

const Sidebar = () => {
  return (
    <div className="fixed z-[1] left-0 w-[60px] h-full bg-blue-950 flex flex-col gap-y-4 p-3 text-white">
      <List />
      <NewButton />
    </div>
  );
};

export default Sidebar;
