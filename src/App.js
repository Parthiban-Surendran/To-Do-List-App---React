
//import './App.css';
import Header  from './Header';
import Content from './Content';
import Footer from './Footer';
import NewItem from './NewItem';
import SearchItem from './SearchItem';
import { useState ,useEffect} from 'react';
import apiRequest from './apiRequest';


function App() {
  const API_URL = 'http://localhost:3500/items';
  const [items, setItems]= useState([]);
   /* [
      {
        id:1,
        checked:true,
        item:"Practise coding"
      },
      {
       id:2,
       checked:false,
       item:"Play Cricket" 
      },
      {
        id:3,
        checked:true,
        item:"Learn AI"
      }
    ]*/

   

   const [newItem,setNewItem]=useState('');
   const [search,setSearch] = useState('');
   const[fetchError,setFetchError] =useState(null);
   const[isLoading,setIsLoading] = useState(true);
   
    
   useEffect(() =>
   {
    /* JSON.parse(localStorage.getItem('todo_list')) */
    const fetchItems = async() =>
    {
      try{
          const response = await fetch(API_URL);
          if(!response.ok) throw Error("Data not Received");

          console.log(response);
          const listItems = await response.json();
          console.log(listItems);
          setItems(listItems);
          setFetchError(null);
      }
      catch(err)
      {
        setFetchError(err.message);
          
      }finally{
        setIsLoading(false);
      }
    } 
    setTimeout(() => {

      (async() => await fetchItems())()
    },2000)
    
    //fetchItems();

   },[])

  
   const addItem=async(item)=>
   {
    const id = items.length?items[items.length-1].id+1:1
    const addNewItem ={id,checked:false,item}
    const listItems = [...items,addNewItem]
    setItems(listItems)
    //localStorage.setItem("todo_list",JSON.stringify(listItems))
    const postOption = {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(addNewItem)
    }
    const result = await apiRequest(API_URL,postOption)
    if(result) setFetchError(result)
   }
   
  
   const handleCheck =async(id) =>
   {
    const listItems = items.map((item)=>
     item.id===id ? {...item,checked:!item.checked}:
     item)
     setItems(listItems)
    //localStorage.setItem("todo_list",JSON.stringify(listItems))
    const myItem = listItems.filter((item) => 
      item.id===id
    )
    const updateOption = {
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({checked:myItem[0].checked})
    }
    //console.log(listItems)
    //)
    const reqObj = `${API_URL}/${id}`
    //console.log(reqObj)
    const result = await apiRequest(reqObj,updateOption)
    
    if(result) setFetchError(result)
    
   }
  
   const handledelete=async(id)=>{
    const listItems = items.filter((item)=>
    item.id!==id )
  
    setItems(listItems)
    const deleteOption = {
      method:'DELETE'
    }
    //localStorage.setItem("todo_list",JSON.stringify(listItems))
    const reqObj = `${API_URL}/${id}`
    
    const result = await apiRequest(reqObj,deleteOption)
    
    if(result) setFetchError(result)
    
   }
 
   const handleSubmit=(e) =>
   {
    e.preventDefault()
    if (!newItem) return;
    console.log(newItem)
    addItem(newItem)
    setNewItem('')
   }
  
   
  return (
    <div className="App">
        <Header title="To-Do List" />
        <NewItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
          
          />
         
          <SearchItem
          search={search}
          setSearch={setSearch}
          />
          <main>
          
            {fetchError  &&<p>{`Error :${fetchError}`}</p>}
           
            {isLoading && <p> {'Loading Items....'}</p>}     
              {!isLoading && !fetchError && <Content
        items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        setItems = {setItems}
        handleCheck={handleCheck}
        handledelete={handledelete}
        

         />}
         </main>
        <Footer 
        length = {items.length}
        />
    </div>
  );
}

export default App;
