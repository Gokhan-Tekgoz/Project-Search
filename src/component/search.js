import React, { Component } from 'react';

class Search extends Component {

    state = {

        input: ''
    }

    submit = (event) => {
        event.preventDefault();
        this.props.search(this.state.input)
    }

    clickbutton = () => {

        this.props.search(this.state.input)
    }

    change = (event) => {
        this.setState({
            input: event.target.value
        })

    }

    render() {
        return (

            <div className='input-group container-search'>
                <form className='form' onSubmit={this.submit}>
                    <input type="text" onChange={this.change} placeholder='Search free high-resolution photos' className='search' />
                    <button type="submit" onClick={this.clickbutton} class="btn btn-primary button">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
            </div>


        );
    }
}

export default Search;