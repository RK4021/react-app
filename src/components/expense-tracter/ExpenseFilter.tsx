import React from "react";
import categories from "./categories";

interface Props {
  onSelect: (item: string) => void;
}

const ExpensFilter = ({ onSelect }: Props) => {
  return (
    <div className="mb-3">
      <select
        id="category"
        className="form-select"
        onChange={(event) => onSelect(event.target.value)}
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpensFilter;
