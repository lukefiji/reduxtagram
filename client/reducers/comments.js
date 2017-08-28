// Handling { postId: [comments] }
function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // Return the new state with the new comment added
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
      break;
    case 'REMOVE_COMMENT':
      // Return new state without the deleted comment
      return [...state.slice(0, action.i), ...state.slice(action.i + 1)];
      break;
    default:
      return state;
  }
  return state;
}

// Reducer composition
function comments(state = [], action) {
  // Check if reducer has to run
  if (typeof action.postId !== 'undefined') {
    return {
      // Take current state
      ...state,
      // Overwrite post with a new one - pass it a sub-piece of comments state
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}

export default comments;
