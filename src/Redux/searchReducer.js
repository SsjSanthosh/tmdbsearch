const initialState = { search: "", type: "movie" };

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH":
      return { search: action.payload.search, type: action.payload.type };
    default:
      return state;
  }
};

export default searchReducer;
