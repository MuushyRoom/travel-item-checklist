import "./css/App.css";
import Header from "./components/Header";
import AddList from "./components/AddItem";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import { useState } from "react";

// const testData=[
//   {
//     id: 1,
//     itemName : "ToothBrush",
//     isPacked : false
//   },{
//       id: 2,
//     itemName : "Bag",
//     isPacked : false
//   },{
//      id: 3,
//     itemName : "Brain",
//     isPacked : true
//   }
// ]

function App() {
  let [itemList, setItemList] = useState([]);

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

  function handlePacked(selectedId) {

  if(itemList[selectedId-1].isPacked === true){
       setItemList((prevItems) =>itemList.map((item) =>item.id === selectedId ? { ...item, isPacked: false } : item));
    }else if(itemList[selectedId-1].isPacked === false){
      setItemList((prevItems) =>itemList.map((item) =>item.id === selectedId ? { ...item, isPacked: true } : item));
    }
  
   
   
  }

 
  return (
    <div className="content-container">
      <Header />
      <AddList onHandleNewItem={handleNewItem} />
      <ItemList
        items={itemList}
        onHandlePacked={handlePacked}
        onHandleDelete={handleDelete}
      />
      <Footer items={itemList} />
    </div>
  );
}

export default App;
