export const GET_FAMILY = "family/GET_FAMILY";
export const GET_FAMILY_SUCCESS = "famliy/GET_FAMILY_SUCCESS";
export const GET_FAMILY_ERROR = "family/GET_FAMILY_ERROR";

export const getFamilyData = familyId => ({
  type: GET_FAMILY,
  payload: familyId
});

const initState = {
  loading: false,
  members: [],
  error: null
};

export default function family(state = initState, action) {
  switch (action.type) {
    case GET_FAMILY:
      return {
        ...state,
        loading: true
      };
    case GET_FAMILY_SUCCESS:
      return { ...state, loading: false, members: action.payload };
    case GET_FAMILY_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
