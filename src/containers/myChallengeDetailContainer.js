import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as myChallengeDetailActions from "../store/modules/mychallengeDetail";
import MyChallengeDetail from '../components/myChallengeDetail';
import moment from 'moment';
const uid = 19980106;

let reader = new FileReader();

class myChallengeDetailContainer extends Component {
    constructor(props){
        super(props);
        this.state = { 
            selectedFile: '',
            imagePreviewUrl : '',
            challenger_challenges : [],
            
            participation_challenges : [],

            userType : ""
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
                challenger_challenges : filterArray,
                userType : "main"
            })
        }
        else if(this.props.location.state.flag === 'sub') {
            
            MyChallengeDetailActions.getDetail(registeredId, uid);
            const propsArray = this.props.location.state.participation_challenges;

            let filterArray = propsArray.filter(elem => elem.registeredId === Number(registeredId))
            

            this.setState({
                participation_challenges : filterArray,
                userType : "sub"
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
    fileOnChange = (e, registeredFk, date) => {

        const { MyChallengeDetailActions } = this.props;

        
        let file = e.target.files[0];
    
        console.log('e.target.files[0]', e.target.files[0]);
        console.log('registeredFk', registeredFk);
        console.log('date', date);
        reader.onloadend = () => {
            this.setState({
                selectedFile : file,
                imagePreviewUrl: reader.result
            }, () => {
                console.log(this.state.selectedFile)
                MyChallengeDetailActions.postCertification(registeredFk, date, this.state.selectedFile)
                let dateColor = moment(new Date(date)).format("YYYY.MM.DD");
                MyChallengeDetailActions.postCertificationColor(dateColor)
            })
        }

        console.log('timing');
        reader.readAsDataURL(e.target.files[0])
        
    }

    fileOnDelete = (e, registeredId, date) => {
        const { MyChallengeDetailActions } = this.props;

        console.log("fileOnDelete : ", registeredId, date);

        this.setState({
            selectedFile : '',
            imagePreviewUrl: ''
        })

        MyChallengeDetailActions.deleteCertification(registeredId, date)
    }

    fileOnDeleteAfter = (e, registeredId, date) => {
        const { MyChallengeDetailActions } = this.props;

        MyChallengeDetailActions.deleteCertification(registeredId, date);
        setTimeout(() => {
            window.location.reload();
        }, 3000)
    }
    render() {
        const {pictureFlag, certification, certificationArray, pictureUrl, cardDate, deleteLoading} = this.props
        let {imagePreviewUrl, challenger_challenges, participation_challenges, userType} = this.state;
        let $imagePreview = null;
        console.log('deleteLoading render : ', deleteLoading)
        console.log('certificationArray render : ',certificationArray);
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
                userType={userType}

                fileOnDelete={this.fileOnDelete}
                fileOnDeleteAfter={this.fileOnDeleteAfter}
                deleteLoading={deleteLoading}
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
                        userType={userType}
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
    certificationArray : mychallengeDetail.certificationArray,
    deleteLoading : mychallengeDetail.deleteLoading
});
  
  
// **** 함수가 아닌 객체 설정시 자동 bindActionCreators 됨
const mapDispatchProps = dispatch => ({
    MyChallengeDetailActions: bindActionCreators(myChallengeDetailActions, dispatch)
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchProps
  )(myChallengeDetailContainer);