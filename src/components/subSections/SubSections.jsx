import { ListItem } from "../listItem/ListItem";

const SECTIONS = [
  "Products",
  "Create Product",
  "Catergories",
  "Attributes",
  "Tags",
];
export const SubSections = () => {
  return (
    <div className="mt-6">
      <div className="flex">
        {SECTIONS.map((section, idx) => (
          <p
            key={idx}
            className={`font-semibold text-gray-600 px-8 py-2 first:border-x-2 first:border-t-2 last:grow  first:border-gray-300 ${
              idx > 0 ? " border-b-2 border-gray-300" : ""
            }`}
          >
            <span className="cursor-pointer">{section}</span>
          </p>
        ))}
      </div>
      <div className="px-8 border-x-2 border-gray-300">
        <div className="flex items-center pt-12">
          <p className="text-2xl font-light mr-3">Products</p>
          <button className="text-blue-500 text-xs border-2 border-blue-500 px-2 py-1 bg-gray-100 mr-1">
            Import
          </button>
          <button className="text-blue-500 text-xs border-2 border-blue-500 px-2 py-1 bg-gray-100">
            Export
          </button>
        </div>
        <div className="flex items-center text-sm mt-6">
          <p className="border-r-2 border-gray-500 pr-2">
            <span className="text-blue-600 hover:underline cursor-pointer">
              All
            </span>{" "}
            (2)
          </p>
          <p className="border-r-2 border-gray-500 px-2">
            <span className="text-blue-600 hover:underline cursor-pointer">
              Published
            </span>{" "}
            (2)
          </p>
          <p className="border-r-2 border-gray-500 px-2">
            <span className="text-blue-600 hover:underline cursor-pointer">
              Trash
            </span>{" "}
            (1)
          </p>
          <p className="px-2">
            <span className="text-blue-600 hover:underline cursor-pointer">
              Sorting
            </span>
          </p>
        </div>
        <ListItem />
        <ListItem
          item={{
            name: "Product 5",
            inStock: true,
            price: 10.0,
            date: "2020/08/11 at 10:10 pm",
            imgUrl:
              "https://media.istockphoto.com/photos/red-tshirt-mockup-men-as-design-template-tee-shirt-blank-isolated-on-picture-id1354031012?k=20&m=1354031012&s=612x612&w=0&h=wG3hVNaaoDTDEFpb3Ad-O7cJribxbNXXNCcjHJTrJH8=",
          }}
        />
        <ListItem
          item={{
            name: "Shirt",
            inStock: true,
            price: 100,
            date: "2020/07/28 at 03:10 am",
            imgUrl:
              "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F6c%2F15%2F6c150d060d3d1aa95459daf18fd28d23f183c429.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
          }}
        />
        <ListItem />
      </div>
    </div>
  );
};
