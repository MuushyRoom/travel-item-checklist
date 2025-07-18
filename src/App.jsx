import "./css/App.css";
import Header from "./components/Header";
import AddList from "./components/AddItem";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const getList = localStorage.getItem("checklist");
const retrievedList = JSON.parse(getList || "[]");

function App() {
  let [itemList, setItemList] = useState(retrievedList);

  function handleNewItem(userInput) {
    const newItem = {
      id: itemList.length + 1,
      itemName: userInput,
      isPacked: false,
    };
    setItemList([...itemList, newItem]);
  }

  function handleDelete(selectedId) {
    setItemList(itemList.filter((item) => item.id !== selectedId));
  }

  function handleClearList() {
    setItemList([]);
    localStorage.clear();
  }

  function handlePacked(selectedId) {
    // console.log(itemList[selectedId - 1].isPacked);
    // console.log(itemList[selectedId - 1]);
    if (itemList[selectedId - 1].isPacked == true) {
      setItemList((prevItems) =>
        itemList.map((item) =>
          item.id === selectedId ? { ...item, isPacked: false } : item
        )
      );
    } else if (itemList[selectedId - 1].isPacked == false) {
      setItemList((prevItems) =>
        itemList.map((item) =>
          item.id === selectedId ? { ...item, isPacked: true } : item
        )
      );
    }
  }

  useEffect(() => {
    localStorage.setItem("checklist", JSON.stringify(itemList));
    console.log(itemList);
  }, [itemList]);

  return (
    <div className="content-container">
      <Header />
      <AddList onHandleNewItem={handleNewItem} />
      <ItemList
        items={itemList}
        onHandleClearList={handleClearList}
        onHandlePacked={handlePacked}
        onHandleDelete={handleDelete}
      />
      <Footer items={itemList} />
    </div>
  );
}

export default App;
