function reducer(state, action) {
    switch(action.type){
        case 'ADD_TASK': {
            return {}
        }
    }
}

function reducerAddTask(state, action) {
    switch (action.type) {
      case 'SET_TITLE':
        return { ...state, title: action.payload };
      case 'SET_DESCRIPTION':
        return { ...state, description: action.payload };
      case 'TOGGLE_CHECK':
        return { ...state, check: !state.check };
      default:
        return state;
    }
  }

export {reducerAddTask};
