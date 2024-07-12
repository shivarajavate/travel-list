import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      {packedPercentage === 100 ? (
        <em>You got everything! Ready to go ✈️</em>
      ) : (
        <em>
          💼 You have {totalItems} items on your list, and you already packed{" "}
          {packedItems} ({packedPercentage}%)
        </em>
      )}
    </footer>
  );
}
