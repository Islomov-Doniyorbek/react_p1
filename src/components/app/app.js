import Title from "../title/title";
import InputPanel from "../inputPanel/inputPanel";
import List from "../list/list";
import SumItems from "../sumItems/sumItems";
import { useEffect, useState } from "react";






function App(){

    const [data, setData] = useState([])
    
    const onDelete = id => {
        const newArr = data.filter(c=> c.id !== id)
        setData(newArr)
        localStorage.setItem("userData", JSON.stringify(newArr));
    }
    // const onUpdate = id => {
    //     const newArr = data.filter(c=> c.id !== id)
    //     setData(newArr)
    //     localStorage.setItem("userData", JSON.stringify(newArr));
    // }

    useEffect(()=>{
        const savedData = localStorage.getItem("userData");
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    }, [])
    
    const addItem = item => {
        let rnd = Math.floor(Math.random() * 100)
    
        const newItem = {
            id: rnd,
            name: item.name,
            cost: item.cost,

        }
        const newArr = [...data, newItem]
        setData(newArr)
        localStorage.setItem("userData", JSON.stringify(newArr));
    }
    const allRestore = ()=>{
        setData([])
        localStorage.clear()
    }
    let summ=0;
    data.forEach(item=>{
        summ+=item.cost
    })

    return (
        <>
            <Title /> 
            <InputPanel addItem={addItem} />
            <List data={data} onDelete={onDelete}/>
            <SumItems  count={data.length} itogo={summ} allRestore={allRestore} />
        </>        
    );
}


export default App