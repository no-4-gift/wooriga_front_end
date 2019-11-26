import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as myChallengeDetailActions from "../store/modules/mychallengeDetail";
import MyChallengeDetail from '../components/myChallengeDetail';

const uid = 19980106;

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
        const { MyChallengeDetailActions } = this.props;
        console.log(this.props.location.state.flag);

        let registeredId = this.props.match.params.id;
        
        if(this.props.location.state.flag === 'main'){
            
            MyChallengeDetailActions.getDetail(registeredId, uid);
            const propsArray = this.props.location.state.challenger_challenges;

            let filterArray = propsArray.filter(elem => elem.registeredId === Number(registeredId))
            

            this.setState({
                challenger_challenges : filterArray
            })
        }
        else if(this.props.location.state.flag === 'sub') {
            
            MyChallengeDetailActions.getDetail(registeredId, uid);
            const propsArray = this.props.location.state.participation_challenges;

            let filterArray = propsArray.filter(elem => elem.registeredId === Number(registeredId))
            

            this.setState({
                participation_challenges : filterArray
            })
        }
        else {
            window.location.assign("/");
        }
        
    }
    backRouter = () => {
        this.props.history.push('/');
    }
    
    pictureFlagRouter = (data, image, date) => {
        console.log(data, image, date);
        const { MyChallengeDetailActions } = this.props;
        
        if(data !== 1){
            MyChallengeDetailActions.pictureFlagFalse(date);
        }
        else {
            MyChallengeDetailActions.pictureFlagTrue(image, date);
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

    render() {
        const {pictureFlag, certification, certificationArray, pictureUrl, cardDate} = this.props
        let {imagePreviewUrl, challenger_challenges, participation_challenges} = this.state;
        let $imagePreview = null;
        return (
            <>
            {challenger_challenges.length > 0 ? (
                <MyChallengeDetail

                onOpen={this.handleOnOpen}
                backRouter={this.backRouter}
                pictureFlagRouter={this.pictureFlagRouter}
                pictureFlag={pictureFlag}
                pictureUrl={pictureUrl}
                cardDate={cardDate}
                fileOnChange={this.fileOnChange}
                // imagePreview
                imagePreviewUrl={imagePreviewUrl}
                $imagePreview={$imagePreview}

                certification={certification}
                certificationArray={certificationArray}
                memberData={challenger_challenges}
                />
            ) : (
                <>
                    {participation_challenges.length > 0 ? (
                        <MyChallengeDetail

                        onOpen={this.handleOnOpen}
                        backRouter={this.backRouter}
                        pictureFlagRouter={this.pictureFlagRouter}
                        pictureFlag={pictureFlag}
                        pictureUrl={pictureUrl}
                        cardDate={cardDate}
                        fileOnChange={this.fileOnChange}

                        // imagePreview
                        imagePreviewUrl={imagePreviewUrl}
                        $imagePreview={$imagePreview}

                        certification={certification}
                        certificationArray={certificationArray}
                        memberData={participation_challenges}
                        />
                    ) : (
                        <div>정상적인 접근이 아닙니다.</div>
                    )}
                </>
            )}
                
            </>
        );
    }
}


// store에 있는 counter의 initalState를 가져온다.
const mapStateToProps = ({ mychallengeDetail }) => ({
    pictureFlag: mychallengeDetail.pictureFlag,
    pictureUrl : mychallengeDetail.pictureUrl,
    cardDate : mychallengeDetail.cardDate,
    certification : mychallengeDetail.certification,
    certificationArray : mychallengeDetail.certificationArray
});
  
  
// **** 함수가 아닌 객체 설정시 자동 bindActionCreators 됨
const mapDispatchProps = dispatch => ({
    MyChallengeDetailActions: bindActionCreators(myChallengeDetailActions, dispatch)
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchProps
  )(myChallengeDetailContainer);