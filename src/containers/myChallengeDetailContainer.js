import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as myChallengeDetailActions from "../store/modules/mychallengeDetail";
import MyChallengeDetail from '../components/myChallengeDetail';

const data = [
    {
      id: 1,
      name: "브루스 웨인",
      relation: "아빠",
      color: "red",
      thumbnail: ""
    },
    {
      id: 2,
      name: "할리 퀸",
      relation: "엄마",
      color: "blue",
      thumbnail: ""
    },
    {
      id: 3,
      name: "조커",
      relation: "형",
      color: "green",
      thumbnail: ""
    }
];

class myChallengeDetailContainer extends Component {
    constructor(props){
        super(props);
        this.state = { 
            selectedFile: '',
            imagePreviewUrl : '',
        }
    }
    componentDidMount = () => {
        const { MyChallengeDetailActions } = this.props;
        MyChallengeDetailActions.setMembers(data);
    }
    backRouter = () => {
        console.log("backRouter");
        this.props.history.push('mychallenge');
    }
    
    pictureFlagRouter = (data) => {
        console.log(data);
        const { MyChallengeDetailActions, pictureFlag } = this.props;
        
        if(pictureFlag === true){
            MyChallengeDetailActions.pictureFlagFalse();
        }
        else {
            MyChallengeDetailActions.pictureFlagTrue();
        }

    }

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

    render() {
        const {pictureFlag, members, visible, text} = this.props
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;

        let successInfo = [true, false, false, false, true, true, false, false, false, true]
        console.log('members : ', members)
        return (
            <MyChallengeDetail
            members={members}
            visible={visible}
            text={text}
            selectedMembers={members}
            onOpen={this.handleOnOpen}
            onClose={this.handleOnClose}
            onChange={this.handleInputChange}

            backRouter={this.backRouter}
            pictureFlagRouter={this.pictureFlagRouter}
            pictureFlag={pictureFlag}
            fileOnChange={this.fileOnChange}
            imagePreviewUrl={imagePreviewUrl}
            $imagePreview={$imagePreview}

            successInfo={successInfo}

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
});
  
  
// **** 함수가 아닌 객체 설정시 자동 bindActionCreators 됨
const mapDispatchProps = dispatch => ({
    MyChallengeDetailActions: bindActionCreators(myChallengeDetailActions, dispatch)
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchProps
  )(myChallengeDetailContainer);