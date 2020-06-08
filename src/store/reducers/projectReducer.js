const initState = {
  projects: [
    {
      id: 1,
      title: "Project 1",
      description: "asdasdad asdasda asdasdasd",
    },
    {
      id: 2,
      title: "project 2",
      description: "asdasdad asdasda asdasdasd",
    },
    {
      id: 3,
      title: "project 3",
      description: "asdasdad asdasda asdasdasd",
    },
  ],
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
