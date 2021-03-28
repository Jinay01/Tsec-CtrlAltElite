import React, { useEffect } from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import { chartColors } from "./colors";
import styled from 'styled-components'

const options = {
  legend: {
    display: false,
    position: "right"
  },
  elements: {
    arc: {
      borderWidth: 0
    }
  }
};

const pieOptions = {
  legend: {
    display: false,
    position: "right",
    legendCallback: function(chart) {
      // Return the HTML string here.
      console.log(chart);
      return [
        <ul>
          <li>z</li>
          <li>zzzz</li>
          <li>ppp</li>
          <li>adasda</li>
        </ul>
      ];
    }
  },
  elements: {
    arc: {
      borderWidth: 0
    }
  }
};



// const pieData = {
//   maintainAspectRatio: false,
//   responsive: false,
//   labels: ["usa", "europe", "africa"],
//   datasets: [
//     {
//       data: [200, 150, 20, 10],
//       backgroundColor: chartColors,
//       hoverBackgroundColor: chartColors
//     }
//   ]
// };

function Chart({emotion}) {
  let chartInstance = null;
  console.log(emotion)

  const data = {
    maintainAspectRatio: false,
    responsive: false,
    labels: ["Angry", "Disgusted", "Fearful", "Happy","Neutral","Sad","Suprised"],
    datasets: [
      {
        data: [emotion.Angry,emotion.Disgusted,emotion.Fearful,emotion.Happy,emotion.Neutral,emotion.Sad,emotion.Suprised],
        backgroundColor: chartColors,
        hoverBackgroundColor: chartColors
      }
    ]
  };

  // useEffect(() => {
  //   const legend = chartInstance.chartInstance.generateLegend();
  //   console.log(chartInstance, "textinput");
  //   console.log(legend);
  //   document.getElementById("legend").innerHTML = legend;
  // }, [chartInstance]);

  return (
      <div style={styles.relative}>
        <Doughnut data={data} options={options} />
        <div style={styles.pieContainer}>
          <Pie
            data={data}
            options={pieOptions}
            ref={input => {
              chartInstance = input;
            }}
          />
        </div>
        <div id="legend" />
      </div>
  );
}

const styles = {
  pieContainer: {
    width: "40%",
    height: "40%",
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)"
  },
  relative: {
    position: "relative"
  }
};

export default Chart;