import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage'

const UseContext = React.createContext();

function UseProvider(props) {

  const { children } = props;

  const generateUUID = () => { // Public Domain/MIT
    let d = new Date().getTime();//Timestamp
    let d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = Math.random() * 16;//random number between 0 and 16
      if (d > 0) { //Use timestamp until depleted
        r = (d + r) % 16 | 0;
        d = Math.floor(d / 16);
      } else { //Use microseconds since page-load if supported
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
      }
      return (c === 'x' ? r : (r && 0x3 | 0x8)).toString(16);
    });
  }

  const [openModal, setOpenModal] = useState(false); // state Modal and function to set

  const [formNewSale, setFormNewSale] = useState({ id: generateUUID() });
  const [sales, saveSales] = useLocalStorage('SALES_V1', []); //nuevo Hook para localStorageItem
  const [updateSale, setUpdateSale] = useState({});

  const [formNewProduct, setFormNewProduct] = useState({ id: generateUUID() });
  const [products, saveProducts] = useLocalStorage('PRODUCTS_V1', []); //nuevo Hook para localStorageItem
  const [updateProduct, setUpdateProduct] = useState({});
  
  const [searchValue, setSearchValue] = useState(''); //props input for Search

  let searchedSale = [];
  !searchValue.length > 0 ? searchedSale = sales : searchedSale = sales.filter(item => item.description.toLowerCase().includes(searchValue.toLowerCase())); //filter Search text

  let searchedProduct = [];
  !searchValue.length > 0 ? searchedProduct = products : searchedProduct = products.filter(item => item.description.toLowerCase().includes(searchValue.toLowerCase())); //filter Search text

  const addItem = (form,array,save) => { 
    const newItem = [...array]; 
    newItem.push(form);
    save(newItem) 
  }
  const deleteItem = (id,array,save) => { 
    const newItem = array.filter(item => item.id !== id); 
    save(newItem)
  }

  const updateItem = (array,save,value) => {
    let newItem = [...array]
    .map((item) => ((item.id === value.id) ? item = value : item));
    save(newItem)
  }

  const initSaleEdit = (id) => {
    setUpdateSale(searchedSale.filter((item) => ((item.id === id)))[0]);
  }

  const initProductEdit = (id) => {
    setUpdateProduct(searchedProduct.filter((item) => ((item.id === id)))[0]);
  }

  return (
    <UseContext.Provider value={{
      searchValue,  //COMPONENT -> Search.jsx
      openModal,  //CONTAINER -> NewSale.jsx, NewProduct.jsx
      formNewSale,  //CONTAINER -> NewSale.jsx
      updateSale, //CONTAINER -> UpdateSale.jsx
      searchedSale, //CONTAINER -> Sales.jsx
      sales, //CONTAINER -> Sales.jsx, NewSale.jsx, UpdateSale.jsx  
      saveSales, //CONTAINER -> Sales.jsx, NewSale.jsx, UpdateSale.jsx 
      formNewProduct,  //CONTAINER -> NewProduct.jsx
      searchedProduct, //CONTAINER -> Products.jsx
      updateProduct, //CONTAINER -> UpdateProduct.jsx
      products, //CONTAINER -> Products.jsx, NewProduct.jsx, UpdateProduct.jsx  
      saveProducts, //CONTAINER -> Products.jsx, NewProduct.jsx, UpdateProduct.jsx 
      setSearchValue, //CONTAINER -> Search.jsx
      setOpenModal, //CONTAINER -> NewSale.jsx, NewProduct.jsx
      addItem, //CONTAINER -> NewSale.jsx, NewProduct.jsx
      deleteItem, //CONTAINER -> Sales.jsx, Products.jsx
      updateItem, //CONTAINER -> UpdateSale.jsx, UpdateProduct.jsx     
      generateUUID, //CONTAINER -> NewSale.jsx
      setFormNewSale,  //CONTAINER -> NewSale.jsx
      setUpdateSale, //CONTAINER -> UpdateSale.jsx
      initSaleEdit, //CONTAINER -> Sales.jsx
      setFormNewProduct,  //CONTAINER -> NewProduct.jsx
      setUpdateProduct, //CONTAINER -> UpdateProduct.jsx
      initProductEdit, //CONTAINER ->  Products.jsx
    }}>
      {children}
    </UseContext.Provider>
  )
}

export { UseContext, UseProvider }