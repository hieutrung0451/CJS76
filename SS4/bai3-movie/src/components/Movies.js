const dateTime = () => {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + " " + time;

  return dateTime;
};

const Movies = [
  {
    id: "1",
    title: "Avengers Endgame",
    description: "2019",
    createdTime: dateTime(),
    updateTime: dateTime(),
  },
  {
    id: "2",
    title: "Avengers Endgame",
    description: "2018",
    createdTime: dateTime(),
    updateTime: dateTime(),
  },
  {
    id: "3",
    title: "Batman Bad Blood",
    description: "2016",
    createdTime: dateTime(),
    updateTime: dateTime(),
  },
];

export default Movies;
