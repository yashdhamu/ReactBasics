import React from "react";

const withHoc = (WrappedComponent, incremenetNumber) => {
    class WithHoc extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
        }
        incrementCount = () => {
            this.setState(prevState => {
                return {count: prevState.count + incremenetNumber};
            });
        }

        render() {
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {... this.props} />;
        }
    }
    return WithHoc;
}

export default withHoc;