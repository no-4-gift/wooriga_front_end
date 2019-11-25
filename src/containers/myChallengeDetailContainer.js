import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as myChallengeDetailActions from "../store/modules/mychallengeDetail";
import MyChallengeDetail from '../components/myChallengeDetail';

const uid = 1615409;

class myChallengeDetailContainer extends Component {
    constructor(props){
        super(props);
        this.state = { 
            selectedFile: '',
            imagePreviewUrl : '',
            challenger_challenges : [],
            participation_challenges : []
        }
    }
    componentDidMount = () => {
        const { MyChallengeDetailActions, successInfo } = this.props;
        console.log('challenger_challenges', this.props.location.state.flag);

        let registeredId = this.props.match.params.id;
        
        if(this.props.location.state.flag === 'main'){
            
            MyChallengeDetailActions.getDetail(registeredId, uid);

            this.setState({
                challenger_challenges : this.props.location.state.challenger_challenges
            })
        }
        else if(this.props.location.state.flag === 'sub') {
            
            MyChallengeDetailActions.getDetail(registeredId, uid);

            this.setState({
                participation_challenges : this.props.location.state.participation_challenges
            })
        }
        else {
            window.location.assign("/");
        }
        
        if(successInfo[0] === true){
            MyChallengeDetailActions.pictureFlagTrue();
        }
        else {
            MyChallengeDetailActions.pictureFlagFalse();
        }

    }
    backRouter = () => {
        console.log("backRouter");
        this.props.history.push('/');
    }
    
    pictureFlagRouter = (data) => {
        console.log(data);
        const { MyChallengeDetailActions } = this.props;
        
        if(data !== true){
            MyChallengeDetailActions.pictureFlagFalse();
        }
        else {
            MyChallengeDetailActions.pictureFlagTrue();
        }

    }

    // imagePreview
    fileOnChange = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];
        
        console.log(e.target.files[0])
        console.log('e.target.files[0]', e.target.files[0])
        reader.onloadend = () => {
            this.setState({
                selectedFile : file,
                imagePreviewUrl: reader.result
            }, () => {
                console.log(this.state.selectedFile)
                
                var formData = new FormData();
                formData.append('file', this.state.selectedFile);
                console.log('formData : ', formData.get('file'));
                
                let imgHeight = document.getElementById("circlePlus").clientHeight;
                let imgWidth = document.getElementById("circlePlus").clientWidth;

                console.log(imgWidth, imgHeight)
            })
        }

        console.log('timing');
        reader.readAsDataURL(e.target.files[0])
    }

    handleOnOpen = () => {
        const { MyChallengeDetailActions } = this.props;
        MyChallengeDetailActions.toggleVisible(true);
    };
    handleOnClose = () => {
        const { MyChallengeDetailActions } = this.props;
        MyChallengeDetailActions.toggleVisible(false);
    };
    handleInputChange = e => {
        const { MyChallengeDetailActions } = this.props;
        MyChallengeDetailActions.setText(e.target.value);
    };

    handleSubmit = e => {
        const { text, MyChallengeDetailActions } = this.props;
        console.log("text", text);
        MyChallengeDetailActions.submitText(text)
    };


    render() {
        const {pictureFlag, members, visible, text, successInfo, certification} = this.props
        let {imagePreviewUrl, challenger_challenges, participation_challenges} = this.state;
        let $imagePreview = null;
        if(challenger_challenges.length > 0){
            console.log("challenger_challenges : ", challenger_challenges);
        }
        else {
            console.log("participation_challenges : ", participation_challenges);
        }
        
        console.log('certification', certification)
        return (
            <MyChallengeDetail
            members={members}
            visible={visible}
            text={text}
            selectedMembers={members}
            onOpen={this.handleOnOpen}
            onClose={this.handleOnClose}
            onChange={this.handleInputChange}
            onSubmit={this.handleSubmit}
            backRouter={this.backRouter}
            pictureFlagRouter={this.pictureFlagRouter}
            pictureFlag={pictureFlag}
            fileOnChange={this.fileOnChange}

            // imagePreview
            imagePreviewUrl={imagePreviewUrl}
            $imagePreview={$imagePreview}

            successInfo={successInfo}

            certification={certification}
            />
        );
    }
}


// store에 있는 counter의 initalState를 가져온다.
const mapStateToProps = ({ mychallengeDetail }) => ({
    pictureFlag: mychallengeDetail.pictureFlag,
    members: mychallengeDetail.members,
    visible: mychallengeDetail.visible,
    text: mychallengeDetail.text,
    successInfo : mychallengeDetail.successInfo,
    certification : mychallengeDetail.certification
});
  
  
// **** 함수가 아닌 객체 설정시 자동 bindActionCreators 됨
const mapDispatchProps = dispatch => ({
    MyChallengeDetailActions: bindActionCreators(myChallengeDetailActions, dispatch)
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchProps
  )(myChallengeDetailContainer);