import React from 'react';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 };
    }
    render() {
        return (
            <div>
                <img src={this.props.images[this.state.number]} alt="" />
                <button onClick={() => {
                    if (this.state.number === 0) {
                        return
                    }
                    this.setState({
                        number: this.state.number - 1
                    })
                }}>
                    vorige
                </button>
                <button onClick={() => {
                    if (this.state.number >= this.props.images.length - 1) {
                        return
                    }
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>
                    volgende
                </button>
            </div>
        )
    }
}

export default Gallery