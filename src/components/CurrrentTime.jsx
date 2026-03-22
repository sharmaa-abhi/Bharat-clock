let CurrentTime = () => {

  let time = new Date();
  return (
    <div>
      <p>This is curent time:{time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    </div>
  );
};
export default CurrentTime;
