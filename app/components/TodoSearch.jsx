const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

export class TodoSearch extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {dispatch, showCompleted, searchText} = this.props;

        return (
            <div className="container__header">
                <div>
                    <a
                        onClick={
                        (e) => {
                            e.preventDefault();
                            dispatch(actions.clearSearchText());
                        }
                    } href="#" className="clear-search">x</a>
                    <input type="search" ref="searchText" placeholder="Search todos" value={searchText}
                           onChange={
                               () => {
                                   const searchText = this.refs.searchText.value;
                                   dispatch(actions.setSearchText(searchText));
                               }
                           }/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={
                            () => {
                                dispatch(actions.toggleShowCompleted());
                            }
                        }/>
                        Show completed todos
                    </label>
                </div>
            </div>
        )
    }
}

/*
export const TodoSearch = React.createClass({
    render: function () {
        const {dispatch, showCompleted, searchText} = this.props;

        return (
            <div className="container__header">
                <div>
                    <em>Todo: clear search "x"</em>
                    <input type="search" ref="searchText" placeholder="Search todos" value={searchText}
                           onChange={
                               () => {
                                   const searchText = this.refs.searchText.value;
                                   dispatch(actions.setSearchText(searchText));
                               }
                           }/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={
                            () => {
                                dispatch(actions.toggleShowCompleted());
                            }
                        }/>
                        Show completed todos
                    </label>
                </div>
            </div>
        )
    }
});
*/

export default connect(
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        }
    }
)(TodoSearch);
