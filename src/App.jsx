import { useState } from 'react';
import NewProduct from "./components/NewProduct";
import Button from "./components/Button";
import { Purchase } from './Utils/Utils';
import { verifyCharacter } from './Utils/Utils';
import './App.css';

function App() {

  const [productDivs, setProductDivs] = useState([{id: 0}]);
  const [total, setTotal] = useState(0);

    const handleAddProductDiv = () => {

        let inputs = Array.from(document.querySelectorAll("input"));

        const hasEmptyField = Array.from(inputs).some(input => !input.value);

        if (hasEmptyField) {

            window.alert("Preencha todos os campos para adicionar um produto!");
        } 

        else {

            const newProduct = { 

                id: productDivs[productDivs.length - 1].id + 1, 
                name: inputs[0].value,
                value: inputs[1].value,
                amount: inputs[2].value 
            };

            newProduct.value = verifyCharacter(newProduct.value);

            setProductDivs(prevItems => [...prevItems, newProduct]);

            Purchase();
        
        }
    };

    const handleTotal = () => {
      let add = 0;
    
      productDivs.forEach((item) => {
        
        let value = parseFloat(item.value) || 0; 
        let amount = parseInt(item.amount) || 0; 
        add += value * amount; 
      });
    
      setTotal(add); 
    }

  return (
    <>
      <NewProduct productDivs={productDivs} total={total}>

        <div className="div-buttons">
          <Button newProduct={handleAddProductDiv} />
          <button onClick={handleTotal} className="new-product">Total</button>
        </div>
        
      </NewProduct>

    </>
  );
}

export default App;
