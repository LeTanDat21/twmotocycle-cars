import React from "react";

const Filter = () => {
  return (
    <div className="filter">
      <label htmlFor="brand">Chọn hãng xe: </label>
      <select id="brand">
        <option value="all">Tất cả</option>
        <option value="honda">Honda</option>
        <option value="yamaha">Yamaha</option>
        <option value="suzuki">Suzuki</option>
      </select>
    </div>
  );
};

export default Filter;
