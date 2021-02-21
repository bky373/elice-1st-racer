function reducer(state, action) {
    switch (action.type) {
      case "FETCH_LOADING":
        return {
          ...state,
          isLoading: true
        };
      case "FETCH_SUCCESS":
        return {
          ...state,
          isLoading: false,
          privateMenuList: action.menuList
        };
      case "FETCH_ERROR":
        return {
          ...state,
          isLoading: false,
          fetchError: action.message
        };
      case "RELOAD_MENULIST":
        return {
          ...state,
          menuList: action.menuList
        };
      case "CHANGE_INPUT":
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.name]: action.value
          }
        };
      case "CREATE_SUCCESS":
        return {
          ...state,
          privateMenuList: state.privateMenuList.concat(action.menu),
          createResultMessage: action.message
        };
      case "CREATE_ERROR":
        return {
          ...state,
          createResultMessage: action.message
        };
      case "SEARCH_SUCCESS":
        return {
          ...state,
          searchedMenu: action.menu,
          searchError: action.message
        };
      case "SEARCH_ERROR":
        return {
          ...state,
          searchError: action.message
        };
      default:
        throw new Error(`Unsupported action ${action.type}`);
    }
  }
  
  export default reducer;