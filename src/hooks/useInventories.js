import { useState, useEffect} from "react";

const useInventories = () =>{
    
        const [inventories, setInventories] = useState([]);
        useEffect(() => {
            fetch('https://shielded-hollows-28190.herokuapp.com/inventory')
                .then(res => res.json())
                .then(data => setInventories(data))
        }, []);
        return [inventories]
}

export default useInventories;