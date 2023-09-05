const Loading = () => {
  return (
    <div
      style={{
        minHeight: "100%",
        display: "grid",
      }}
    >
      <div
        style={{
          alignSelf: "center",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          width: "16rem",
        }}
      >
        <h1 style={{ fontSize: "4rem" }}>Loading...</h1>
      </div>
    </div>
  );
};

export default Loading;
