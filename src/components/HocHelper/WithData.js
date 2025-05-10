import React, {Component} from 'react'

import Spinner from '../Spinner'
import ErrorBoundary from '../ErrorBoundary'

const withData = (View, getData) => {
    return class extends Component {

        state = {
            data: null,
            info: null,
            page: 1,
            limit: 10,
            loading: true
        }

        componentDidMount() {
            this.fetchData();
        }

        fetchData = () => {
            const { page, limit } = this.state;
            this.setState({ loading: true });

            getData(page, limit)
                .then(({ data, info }) => {
                    this.setState({
                        data,
                        info,
                        loading: false
                    });
                });
        }

        onNextPage = () => {
            if (this.state.info && this.state.info.next) {
                this.setState(
                    (state) => ({ page: state.page + 1 }),
                    this.fetchData
                );
            }
        }

        onPrevPage = () => {
            if (this.state.info && this.state.info.prev) {
                this.setState(
                    (state) => ({ page: state.page - 1 }),
                    this.fetchData
                );
            }
        }

        render() {
            const { data, info, loading } = this.state;

            if (loading || !data) {
                return <Spinner/>;
            }

            return (
                <ErrorBoundary>
                    <View 
                        {...this.props} 
                        data={data} 
                        info={info}
                        onNextPage={this.onNextPage}
                        onPrevPage={this.onPrevPage}
                    />
                </ErrorBoundary>
            );
        }
    }
}

export {
    withData
}
