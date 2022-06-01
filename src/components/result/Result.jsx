import "./Result.css";

const Result = ({ list }) => {
  return (
    <>
      {{ list }.list &&
        { list }.list.map((item, index) => (
          <div className="result" key={index}>
            <div>
              <img src={item.profile_image} className="image" alt="person" />
            </div>
            <ul className="list">
              <li>نام: {item.name}</li>
              <li>نام خانوادگی : {item.family}</li>
              <li>سن : {item.age}</li>
              <li>شغل : {item.work}</li>
            </ul>
          </div>
        ))}
    </>
  );
};

export default Result;
