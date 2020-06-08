export const createProject = (project) => {
  // when normall use
  //   return {
  //     type: "ADD_PROJECT",
  //     project: project,
  //   };

  // when using THUNK
  return (dispatch, getState) => {
    //   make async calls
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
