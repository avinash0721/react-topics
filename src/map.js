// import Movie from "./Movie.js";
const data = [
  {
    imgUrl:
      "https://www.explorebigsky.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-13-at-4.23.33-PM.jpg",
    title: "Joker",
  },

  {
    imgUrl:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2350/1282350-v-15ffecf89380",
    title: "SpiderMan",
  },
  {
    imgUrl:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8299/1328299-v-41830f478c3f",
    title: "Thor",
  },

  {
    imgUrl:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2347/1282347-v-57b71e72275e",

    title: "Thor",
  },

  {
    imgUrl:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9942/1279942-v-724d56a723a1",
    title: "Doctor Strange",
  },

  {
    imgUrl:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4308/674308-v",

    title: "Ironman",
  },
];

function App() {
  // let newArr = data.map((eachObj) => {
  //   return (
  //     <div>
  //       <img src={eachObj.imgUrl} alt="poster" />
  //       <h1>{eachObj.title} </h1>
  //     </div>
  //   );
  // });
  return (
    <div className="app">
      {data.map((eachObj, index) => {
        let { title, imgUrl } = eachObj;
        return <Movie key={index} title={title} url={imgUrl} />;
      })}
    </div>
  );
}

const Movie = (props) => {
  return (
    <div className="poster">
      <img src={props.url} alt="poster" />
      <h1>{props.title}</h1>
    </div>
  );
};

// function data(first, last) {
//   console.log(first);
//   console.log(last);
// }

// data("hello", "react");

export default App;
