// Increment
export function increment(index) {
  return {
    name: 'INCREMENT_LIKES',
    index
  };
}

// Add comment

export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
}

// Remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  };
}
