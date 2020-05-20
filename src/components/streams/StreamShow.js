import React, {Component} from "react";

import {connect} from "react-redux";
import {fetchStream} from "../../actions";

class StreamShow extends Component {

    componentDidMount() {
        console.log(this.props)
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        if (!this.props.stream) {
            return <div>loading ...</div>
        }

        const {title, description} = this.props.stream

        return (
            <div>
                <h4><strong><i>Title:</i>&emsp;</strong>{title}</h4>
                <p><strong><i>Description:</i>&emsp;</strong>{description}</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({stream: state.stream[ownProps.match.params.id]})
export default connect(mapStateToProps, {fetchStream})(StreamShow)