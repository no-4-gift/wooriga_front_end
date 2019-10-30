import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Chosens from "../components/statics/ChosensLayout";
import * as staticsActions from "../store/modules/statics";

class ChosensContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    calendar = () => {
        const { StaticsActions } = this.props;
        StaticsActions.onCalendar();
    };
    
    maskGroup = () => {
        const { StaticsActions } = this.props;
        StaticsActions.onMaskGroup();
    };

    contact = () => {
        const { StaticsActions } = this.props;
        StaticsActions.onContact();
    };

    render() {
        const { checked } = this.props;

        return (
            <Fragment>
                <Chosens
                    calendar={this.calendar}
                    maskGroup={this.maskGroup}
                    contact={this.contact}
                    checked={checked}
                />
            </Fragment>
        );
    }
}
const mapStateToProps = ({ statics }) => ({
    checked : statics.checked
});

const mapDispatchProps = dispatch => ({
    StaticsActions: bindActionCreators(staticsActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchProps
  )(ChosensContainer);
