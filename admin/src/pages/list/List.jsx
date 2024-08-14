import React, { useEffect, useState } from "react";
import "./list.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ baseURL }) => {
  const [list, setList] = useState([]);
  // fetch data from server :-
  const fetchList = async () => {
    const response = await axios.get(`${baseURL}/api/food/list`);
    // const response = await axios.get("http://localhost:4000/api/food/list");
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error(response.data.message);
    }
    console.log(response.data);
  };

  // Remove data from Data base Through the server :-

  const removeFood = async (itemId) => {
    // console.log(itemId);
    const response = await axios.post(`${baseURL}/api/food/remove`, {
      // const response = await axios.post("http://localhost:4000/api/food/remove", {
      id: itemId,
    });

    await fetchList();

    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <div className="list-table-format title">
        <b>Image</b>
        <b>Name</b>
        <b>description</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
      </div>
      {list.map((item, index) => {
        return (
          <div key={index} className="list-table-format">
            <img src={`${baseURL}/images/` + item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <p onClick={() => removeFood(item._id)} className="remove">
              x
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
