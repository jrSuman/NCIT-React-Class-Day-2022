function DayTwo(props) {
  console.log("props", props);
  return (
    <div className="w-lg bg-gray-100 border p-4">
      <div className="w-full h-full bg-amber-600 aspect-square">
        <img
          src={props.data.img}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="text-xl font-black text-gray-700">{props.data.title}</h4>
      <p className="text-gray-500">{props.data.description}</p>
    </div>
  );
}

export default DayTwo;
