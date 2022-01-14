import React, {useState} from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

 const GifExpertApp = () => {
   
//    const categories = ['Naruto', 'One Piece', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Piece']); 
   

//    const handlAdd = () => {
//         setCategories([...categories,'HunterxHunter'])
//    }
   
   return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>

            <hr></hr>
            

            <ol>
                {
                    categories.map( category => ( 
                        <GifGrid 
                        key={category}
                        category={ category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}


export default GifExpertApp;