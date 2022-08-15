
import React, {useEffect, useState} from "react"

const Context = React.createContext()

/* INFO NOTE
  useEffect Hook allows to perform side effects in function components. 
  By using this hook, you tell React that your component needs to do something after render
  
  Is similar with `componentDidMount` and `componentDidUpdate`
*/

function ContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    function toggleFavorite(id) {
        const updatedPhotos = allPhotos.map(
            photo => {
                if(photo.id === id) {
                    return {
                        ...photo,
                        isFavorite: !photo.isFavorite
                    }
                }
                return photo  
        })

        setAllPhotos(updatedPhotos)
    }

    function addImageToCart(newImg) {
        setCartItems(prevImg => [...prevImg, newImg])
    }

    function removeImageFromCart(id) {
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setAllPhotos(data))
    }, [])

    return (
        <Context.Provider value={{allPhotos, cartItems, toggleFavorite, addImageToCart, removeImageFromCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}