export const ListItem = ({ item }) => {
  console.log(item);
  return !!item ? (
    <div className="flex items-center border-b-2 border-gray-200 my-2 py-4">
      <input type="checkbox" className="mx-2 w-16" />
      <div className="w-20 mx-2">
        <img src={item.imgUrl} alt="product" className="h-8 " />
      </div>
      <p className="flex-grow text-sm mx-4 text-blue-700 font-semibold hover:underline cursor-pointer">
        {item.name}
      </p>
      <p className="w-28 text-sm text-green-500 font-semibold">
        {item.inStock ? "in stock" : "out of stock"}
      </p>
      <p className="w-32 text-sm ">&#163;{item.price.toFixed(2)}</p>
      <div className="text-xs w-40">
        Published
        <p className="">{item.date}</p>
      </div>
    </div>
  ) : (
    <div className="flex items-center border-b-2 border-gray-200 my-2 py-4">
      <input type="checkbox" className="mx-2 w-16" />
      <i className="fa-solid fa-image w-20 mx-4"></i>
      <p className="flex-grow text-sm text-blue-700">Name</p>
      <p className="w-28 text-sm">Stock</p>
      <p className="w-32 text-sm text-blue-700">Price</p>
      <p className="w-40 text-sm text-blue-700">Date</p>
    </div>
  );
};
