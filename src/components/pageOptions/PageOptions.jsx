import { nanoid } from "nanoid";

const CATEGORIES = [
  { _id: nanoid(), iconClass: "fa-solid fa-chart-pie", title: "Recent posts" },
  { _id: nanoid(), iconClass: "fa-solid fa-store", title: "Products" },
  { _id: nanoid(), iconClass: "fa-solid fa-ticket", title: "Coupons" },
  { _id: nanoid(), iconClass: "fa-solid fa-users", title: "Users" },
  { _id: nanoid(), iconClass: "fa-solid fa-users", title: "Users" },
  { _id: nanoid(), iconClass: "fa-solid fa-gears", title: "Settings" },
  { _id: nanoid(), iconClass: "fa-solid fa-id-card", title: "Account" },
];
export const PageOptions = () => {
  return (
    <div className="flex justify-evenly flex-wrap mt-6">
      {CATEGORIES.map((item) => (
        <div
          key={item._id}
          className="bg-white cursor-pointer h-28 w-36 shadow-md shadow-gray-400 rounded-md flex flex-col items-center justify-center mt-4"
        >
          <i className={item.iconClass + " text-3xl text-blue-600"}></i>
          <p className="font-semibold text-gray-600">{item.title}</p>
        </div>
      ))}
    </div>
  );
};
