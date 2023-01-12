import Profile from "../Profile";
import React from 'react';
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../../redux/profile-reducer";
import {compose} from "redux";
import {Navigate, useParams} from "react-router-dom";
import {withNavigate} from "../../../hoc/HoC";

export function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
};

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {

            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.navigate('/login')
            }

        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);

    }

    render() {
        //console.log("RENDER PROFILE")

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )

    }

}


let mapStateToProps = (state) => {
    //console.log('mapStateToProps PROFILE')
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    })

};

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withNavigate,
    //withAuthRedirect,
)(ProfileContainer);
