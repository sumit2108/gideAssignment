import React from "react";

const Chart = (props) => {
  const Styles = {
    height: "40vh",
    width: "70vh",
  };

  function showChart() {
    if (!props.load.btn1)
      props.setLoad({ ...props.load, btn2: !props.load.btn2 });
  }
  return (
    <div style={{ position: "absolute" }}>
      <img
        id="chart"
        style={Styles}
        src="
            https://global-uploads.webflow.com/59e16042ec229e00016d3a66/5e62f6f4dad6467a6ba6a589_pie%20sample%203.jpeg"
        alt=""
      />
      <button
        style={{ position: "absolute" }}
        onClick={showChart}
        className="closeChart"
      >
        X
      </button>
    </div>
  );
};

export default Chart;
