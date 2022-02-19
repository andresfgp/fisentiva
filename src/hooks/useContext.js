import React, { useState } from 'react';
// import useLocalStorage from './useLocalStorage'

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

  const [formContact, setFormContact] = useState();
  // const [contact, saveContact] = useLocalStorage('CONTACT_V1', []); //nuevo Hook para localStorageItem
  
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

  return (
    <UseContext.Provider value={{
      openModal,  //NONE
      formContact,  //COMPONENT -> Contact.jsx
      setOpenModal, //NONE
      addItem, //NONE
      deleteItem, //NONE
      updateItem, //NONE   
      generateUUID, //NONE
      setFormContact,  //COMPONENT -> Contact.jsx
    }}>
      {children}
    </UseContext.Provider>
  )
}

export { UseContext, UseProvider }