import { message } from "antd";

export const PICTUREFLAGTRUE = "mychallengeDetail/PICTUREFLAGTRUE";
export const PICTUREFLAGFALSE = "mychallengeDetail/PICTUREFLAGFALSE";

export const GET_DETAIL = "mychallengeDetail/GET_DETAIL";
export const GET_DETAIL_SUCCESS = "mychallengeDetail/GET_DETAIL_SUCCESS";
export const GET_DETAIL_FAILED = "mychallengeDetail/GET_DETAIL_FAILED";

export const POST_PICTURE_UPLOAD = "mychallengeDetail/POST_PICTURE_UPLOAD";
export const POST_PICTURE_UPLOAD_SUCCESS = "mychallengeDetail/POST_PICTURE_UPLOAD_SUCCESS";
export const POST_PICTURE_UPLOAD_FAILED = "mychallengeDetail/POST_PICTURE_UPLOAD_FAILED";
export const POST_CERTIFICATION_COLOR = "mychallengeDetail/POST_CERTIFICATION_COLOR";
export const POST_CERTIFICATION_COLOR_SUCCESS = "mychallengeDetail/POST_CERTIFICATION_COLOR_SUCCESS";


export const PUT_PICTURE_DELETE = "mychallengeDetail/PUT_PICTURE_DELETE";
export const PUT_PICTURE_DELETE_SUCCESS = "mychallengeDetail/PUT_PICTURE_DELETE_SUCCESS";
export const PUT_PICTURE_DELETE_FAILED = "mychallengeDetail/PUT_PICTURE_DELETE_FAILED";
export const DELETE_CERTIFICATION_COLOR = "mychallengeDetail/DELETE_CERTIFICATION_COLOR";
export const DELETE_CERTIFICATION_COLOR_SUCCESS = "mychallengeDetail/DELETE_CERTIFICATION_COLOR_SUCCESS";


export const pictureFlagTrue = (image, date) => ({ 
  type: PICTUREFLAGTRUE, 
  payload : {
    image : image, 
    date : date
  } 
});
export const pictureFlagFalse = (date) => ({ type: PICTUREFLAGFALSE,
  payload : {
    date : date
  }
});

export const postCertificationColor = () => ({ type: POST_CERTIFICATION_COLOR});


export const deleteCertificationColor = () => ({ type: DELETE_CERTIFICATION_COLOR});

export const getDetail = (registeredId, uid) => ({ 
  type: GET_DETAIL, 
  payload: {
    registeredId : registeredId,
    uid : uid
  }
 });

export const postCertification = (registeredFk , date, file) => ({
  
  type: POST_PICTURE_UPLOAD,
  payload: {
    registeredFk : registeredFk,
    date : date,
    file : file
  }
})

export const deleteCertification = (registeredId , date) => ({
  type: PUT_PICTURE_DELETE,
  payload: {
    registeredId : registeredId,
    date : date
  }
})
/* 초기 상태 선언 */
const initialState = {
  pictureFlag : true,
  pictureUrl : "",
  cardDate : "",
  certification : [],
  certificationArray : [],

  postLoading : false,
  deleteLoading : false
};
/* 리듀서 선언 */
export default (state = initialState, action) => {
  switch (action.type) {
    case PICTUREFLAGTRUE:

        return {
            ...state,
            pictureFlag: 1,
            pictureUrl : action.payload.image,
            cardDate : action.payload.date
        };
    case PICTUREFLAGFALSE:
        return {
        ...state,
        pictureFlag: 0,
        pictureUrl : "",
        cardDate : action.payload.date,
        };

    case GET_DETAIL:
        return {
          ...state,
          certification : [],
          certificationArray : [],
        };
    case GET_DETAIL_SUCCESS:
        return {
          ...state,
          certification : action.payload.certification,
          certificationArray : action.payload.certification.certificationInfoArrayList,
        };
    case GET_DETAIL_FAILED:
    return {
      ...state,
      certification : [],
      certificationArray : [],
    };


    case POST_PICTURE_UPLOAD:
      message.loading('업로드 중 입니다!', 3);

        return {
          ...state,
          postLoading : true,
        };
    case POST_PICTURE_UPLOAD_SUCCESS:
        message.success(`인증에 성공했습니다!`, 2.5)
        return {
          ...state,
          postLoading : false,
        };
    case POST_PICTURE_UPLOAD_FAILED:
      return {
        ...state,
        postLoading : false,
      };

    case POST_CERTIFICATION_COLOR:
      
      return {
        ...state,
        
      };

      case POST_CERTIFICATION_COLOR_SUCCESS:
      
      return {
        ...state,
        certificationArray : state.certificationArray.map((data, index) => 
          data.cardDate === action.payload.date ? 
          {
            ...data,
            data : data.certificationTrue = 1
          } : data
        )
      };

      case DELETE_CERTIFICATION_COLOR:
      return {
        ...state,
        
      };

      case DELETE_CERTIFICATION_COLOR_SUCCESS:
      return {
        ...state,
        certificationArray : state.certificationArray.map((data, index) => 
          data.cardDate === action.payload.date ? 
          {
            ...data,
            data : data.certificationTrue = 0
          } : data
        )
      };


      case PUT_PICTURE_DELETE:

        return {
          ...state,
          deleteLoading : true
        };
    case PUT_PICTURE_DELETE_SUCCESS:

        message.success(`삭제에 성공했습니다!`, 2.5)
        return {
          ...state,
          deleteLoading : false,
        };
    case PUT_PICTURE_DELETE_FAILED:
      return {
        ...state,
        deleteLoading : false,
      };
    default:
      return state;
  }
}
