export const createProject = (project) => {
  // when normall use
  //   return {
  //     type: "ADD_PROJECT",
  //     project: project,
  //   };

  // when using THUNK
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //   make async calls
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "niyaz",
        authorLastName: "ahamed",
        authorId: 1,
        createdAt: new Date(),
      })
      .then((res) => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
