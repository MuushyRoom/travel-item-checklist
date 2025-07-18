import { useEffect, useState } from "react";
import "../components/css/ItemList.css";
function ItemList({ items, onHandleDelete, onHandlePacked,onHandleClearList }) {
  let [sortBy, setSortBy] = useState("order-sort");
  let [sortedItem, setSortedItem] = useState([]);

  useEffect(() => {
 
    if (sortBy === "desc-sort") {
      // SORT BY DESC
      const sortedItems = [...items].sort((a, b) =>
        a.itemName.localeCompare(b.itemName)
      );
      setSortedItem(sortedItems);
    } else if (sortBy === "packed-sort") {
      // PACKED SORT
      const sortedItems = [...items].sort((a, b) => {
        if (a.isPacked && !b.isPacked) return 1;
        if (!a.isPacked && b.isPacked) return -1;
        return 0;
      });

      setSortedItem(sortedItems);
    } else {
      // DEFAULT SORT
      setSortedItem(items);
    }

  }, [items, sortBy]);

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <main className="item-list-container">
      <ul className="items-container">
        {sortedItem.map((value, id) => {
       
          return (
            <li className="item-container" key={id}>
              
              <p
                className={value.isPacked ? "packed" : ""}
                onClick={() => onHandlePacked(value.id)}
              >
                {value.itemName}
              </p>
              <p
                className="delete-btn"
                onClick={() => {
                  onHandleDelete(value.id);
                }}
              >
                ❌
              </p>
            </li>
          );
        })}
      </ul>

<section className="sort-controls-container">
        <select className="sort-controls" name="sort" onChange={handleSort} id="sort">
        <option value="order-sort">Sort by order</option>
        <option value="desc-sort">Sort by Description</option>
        <option value="packed-sort">Sort by packed</option>
      </select>
      <button onClick={onHandleClearList} className="clear-btn">Clear List</button>
</section>
      
    </main>
  );
}

export default ItemList;
