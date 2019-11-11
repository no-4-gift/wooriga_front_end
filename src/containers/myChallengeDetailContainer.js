import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as myChallengeDetailActions from "../store/modules/mychallengeDetail";
import MyChallengeDetail from '../components/myChallengeDetail';

class myChallengeDetailContainer extends Component {
    constructor(props){
        super(props);
        this.state = { 
            selectedFile: '',
            imagePreviewUrl : '',
        }
    }
    backRouter = () => {
        console.log("backRouter");
        this.props.history.push('mychallenge');
    }
    
    pictureFlagRouter = () => {
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
    render() {
        const {pictureFlag} = this.props
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;

        return (
            <MyChallengeDetail
            backRouter={this.backRouter}
            pictureFlagRouter={this.pictureFlagRouter}
            pictureFlag={pictureFlag}
            fileOnChange={this.fileOnChange}
            imagePreviewUrl={imagePreviewUrl}
            $imagePreview={$imagePreview}
            />
        );
    }
}


// store에 있는 counter의 initalState를 가져온다.
const mapStateToProps = ({ mychallengeDetail }) => ({
    pictureFlag: mychallengeDetail.pictureFlag,

  });
  
  
// **** 함수가 아닌 객체 설정시 자동 bindActionCreators 됨
const mapDispatchProps = dispatch => ({
    MyChallengeDetailActions: bindActionCreators(myChallengeDetailActions, dispatch)
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchProps
  )(myChallengeDetailContainer);