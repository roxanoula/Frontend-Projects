import React, { Component } from 'react';


class MemeGenerator extends Component {

    state = {
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
        allMemeImages: []
    }

    //constructor() {
    //    super()
    //    this.state = {
    //        topText: "",
    //        bottomText: "",
    //        randomImg: "http://i.imgflip.com/1bij.jpg",
    //        allMemeImages: []
    //    }
    //    this.handleOnChange = this.handleOnChange.bind(this)
    //    this.handleSubmit = this.handleSubmit.bind(this)
    //}
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then( res => res.json())
        .then( response => {
            const {memes} = response.data
            this.setState({allMemeImages: memes})
        })
        
    }

    handleOnChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const randomNum = Math.floor(Math.random() * this.state.allMemeImages.length)
        const image = this.state.allMemeImages[randomNum].url
        this.setState({
            randomImg: image
        })
    }

    render() {
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="topText" 
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleOnChange}/>
                    <input 
                        type="text" 
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText} 
                        onChange={this.handleOnChange}></input>
                <button> Gen </button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="Let us begin"/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
            
        )
    }
}

export default MemeGenerator