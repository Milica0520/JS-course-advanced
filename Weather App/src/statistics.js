"use srict";

function getTemperature(dataList) {
  const tempDiv = document.getElementById("tempStatictics");
  const tempMin = dataList
    .map((el) => el.main.temp_min)
    .sort((a, b) => a - b)[0];
  const tempMax = dataList
    .map((el) => el.main.temp_max)
    .sort((a, b) => b - a)[0];
  let sumTemp = 0;
  dataList.map((el) => el.main.temp).forEach((el) => (sumTemp += el));
  const avgTemp = sumTemp / dataList.length;

  tempDiv.innerHTML = `<ul>
<li>MIN TEMP: ${Math.round(tempMin)} °C</li>
<li>AVG TEMP: ${Math.round(avgTemp)} °C</li>
<li>MAX TEMP: ${Math.round(tempMax)} °C</li>
</ul>`;
  //display date of max and min temperature
  const displayMax = dataList
    .map((el) => {
      return { data: el.dt, max: el.main.temp_max, min: el.main.temp_min };
    })
    .filter((el) => {
      if (el.max === tempMax) {
        return el;
      }
    });
  const dtMax = new Date(displayMax[0].data * 1000).toLocaleDateString(
    "en-US",
    {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
  );

  const displayMin = dataList
    .map((el) => {
      return { data: el.dt, max: el.main.temp_max, min: el.main.temp_min };
    })
    .filter((el) => {
      if (el.min === tempMin) {
        return el;
      }
    });
  const dtMin = new Date(displayMin[0].data * 1000).toLocaleDateString(
    "en-US",
    {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
  );

  const displayMaxMinTemp = document.getElementById("displayMaxMinTemp");
  displayMaxMinTemp.innerHTML = `<ul>
<li>Warmest time of the following period : ${dtMax}</li>
<li>Coldest time of the following period : ${dtMin} </li>
</ul>`;
}

function getHumidity(dataList) {
  const humidDiv = document.getElementById("humidStatistics");

  const humMin = Math.round(
    dataList.map((el) => el.main.humidity).sort((a, b) => a - b)[0]
  );

  const humMax = Math.round(
    dataList.map((el) => el.main.humidity).sort((a, b) => b - a)[0]
  );

  let sumOfHum = 0;
  dataList.map((el) => el.main.humidity).forEach((el) => (sumOfHum += el));
  const avgHum = Math.round(sumOfHum / dataList.length);

  humidDiv.innerHTML = `<ul>
      <li>MIN HUMD: ${humMin} %</li>
      <li>AVG HUMD: ${avgHum} %</li>
      <li>MAX HUMD: ${humMax} %</li>
      </ul>`;
}
export { getTemperature, getHumidity };
