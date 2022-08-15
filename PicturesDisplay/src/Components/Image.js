import React, {useState, useContext} from "react"
import {Context} from "../Context"
import PropTypes from 'prop-types';
import useHover from "../hooks/useHover"

function Image({className, img}) {
    //const [hovered, setHovered] = useState(false)
    const [hovered, ref] = useHover()
    const {cartItems, toggleFavorite, addImageToCart, removeImageFromCart} = useContext(Context)

    function heartIcon() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={ () => toggleFavorite(img.id)}/>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={ () => toggleFavorite(img.id)}/> 
        }
    } 

    function cartIcon() {
        if (cartItems.some(item => item.id === img.id)) {
            return <i className="ri-shopping-cart-fill cart" onClick={ () => removeImageFromCart(img.id) } />
        }
        else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addImageToCart(img)} />
        }           
    }

    return(
        <div 
            className={`${className} image-container`}
            //onMouseEnter={() => setHovered(true)}
            //onMouseLeave={() => setHovered(false)}
            ref={ref}
        >
            <img src={img.url} className="image-grid" />
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image

/*
hovered === true ? <i className="ri-add-circle-line cart" />: null
OR
hovered && <i className="ri-add-circle-line cart" />
*/