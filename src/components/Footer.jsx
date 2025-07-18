import { useEffect, useState } from "react";
import "../components/css/Footer.css";
function Footer({ items }) {
  let [itemCount, setItemCount] = useState(0);
  let [packedItemCount, setPackedItemCount] = useState(0);
  let [itemPercent, setItemPercent] = useState(0);
  useEffect(() => {
    let i = 0;
    items.map((value) => {
      value.isPacked === true && i++;
      setPackedItemCount((s) => (s = i));
    });
    setItemCount(items.length);
        if(packedItemCount / itemCount){
         setItemPercent(Math.floor(( packedItemCount / itemCount) * 100))     
        }
    
  }, [items,packedItemCount]);
  return (
    <footer>
      <p>
        You have a total of {itemCount} items on your list, and you packed {packedItemCount}/{itemCount} or {itemPercent}% of your items 
      </p>
    </footer>
  );
}

export default Footer;
