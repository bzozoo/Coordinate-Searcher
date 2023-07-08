console.clear();
const endpoint = "https://f2h9sc-3000.csb.app";
const COORDINATE_ROUTE = "/coordinate";
const Urls = {
   Coord: {
      getCoord: endpoint + COORDINATE_ROUTE,
      get postCoord() {
         return this.getCoord;
      },
   },
};

init();

async function init() {
   const welcomePage = await getCoordinate();
   const LanchidEgyNegyed = await sendTestData.LanchidEgyNegyed;
   const LanchidHaromNegyed = await sendTestData.LanchidHaromNegyed;
   app.innerHTML = "<pre>" + JSON.stringify({ welcomePage, tesztek: { LanchidEgyNegyed, LanchidHaromNegyed } }, null, 2);
}

async function getCoordinate() {
   return await fetch(Urls.Coord.getCoord).then((response) => response.json());
}

async function sendCoordinate(coordinate) {
   const options = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(coordinate),
   };

   return await fetch(Urls.Coord.postCoord, options).then((response) => response.json());
}

const sendTestData = {
   LanchidEgyNegyed: sendCoordinate({
      coordinate: { latitude: 47.498771772287405, longitude: 19.042603145941893 },
   }),
   LanchidHaromNegyed: sendCoordinate({
      coordinate: { latitude: 47.499280867754166, longitude: 19.045129270836636 },
   }),
};
