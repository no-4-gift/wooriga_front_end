import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import * as GroupaddActions from "../store/modules/groupAdd";
import GroupAdd from "../components/GroupAdd";
import GroupAddModal from "../components/GroupAddModal";

class GroupAddContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        //selectedFile: "",
        imagePreviewUrl : '',
      };
    }

handleOpenModalAddGroup = members => {
  const { GroupaddActions } = this.props;
  GroupaddActions.openModalAddGroup(members);
};
handleSaveModal = () => {
  const { GroupaddActions } = this.props;
  GroupaddActions.saveModal();
}
//모달창 닫기
handleCloseModal = () => {
  const { GroupaddActions } = this.props;
  GroupaddActions.closeModal();
}

  render() {
    const myid = parseInt(window.sessionStorage.getItem("id")); //로그인 한 유저 정보는 store 나 localStorage에 저장 되어있어야함
    let {imagePreviewUrl,
      members,
      visible
    } = this.props;
 let $initImg = null;
    console.log("GroupAddContainer-----------");
    console.log(members);
    console.log(visible);
    console.log("GroupAddContainer-----------");
    return (
        <Fragment>
        <GroupAdd
          id={myid}
          members={members}
          onOpenModal={this.handleOpenModalAddGroup}
          visible={visible}
        />
        <GroupAddModal
           myid={myid}
           visible={visible}
           onClose={this.handleCloseModal}
           onSave={this.handleSaveModal}
           members={members}
           imageUrl={imagePreviewUrl}
           $initImg={$initImg}
        />
        </Fragment>
      );
    };
}
  
 
  const mapStateToProps = ({ groupAdd,mypage }) => ({
    //imageUrl: mypage.profileImage,
    visible: groupAdd.visible,
    members: mypage.members,
    pictureUrl : groupAdd.pictureUrl,
  });
  const mapDispatchToProps = dispatch => ({
    GroupaddActions: bindActionCreators(GroupaddActions, dispatch)
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(GroupAddContainer);
  