export function fetchTables() {
  console.log("updating");
  return fetch("/RestoReserves").then(x => x.text());
}


export function GetDate() {
  let date = new Date();
  let year = date.getFullYear();
  let month = (date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1); // +1 because January is 0
  let day = (date.getDay() < 10 ? '0' : '') + date.getDay();
  date = year + '-' + month + '-' + day
  return date;
}

export function GetTime() {
  let time = new Date();
  let hours = (time.getHours() < 10 ? '0' : '') + time.getHours();
  let minutes = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes();
  let seconds = (time.getSeconds() < 10 ? '0' : '') + time.getSeconds();
  time = hours + ":" + minutes + ":" + seconds;
  return time;
}

export function GetDateTime() {
  let date = GetDate();
  let time = GetTime();
  let dateTime = date + "/" + time;
  console.log(dateTime);
  return dateTime;
}


/*
app.post("/signup", (req, res) => {
  let json = JSON.parse(req.body);
  res.send(JSON.stringify(functions.RegisterRestaurant(json)));
});
app.post("/login", (req, res) => {
  let json = JSON.parse(req.body);
  res.send(JSON.stringify(functions.RestaurantLogIn(json)));
});
app.post("/settings", (req, res) => {
  let json = JSON.parse(req.body);
  res.send(JSON.stringify(functions.ChangeSettings(json)));
});
app.get("/clearAll", (req, res) => {
  let json = JSON.parse(req.body);
  res.send(JSON.stringify(functions.ClearAll()));
});
app.post("/cancelReservation", (req, res) => { res.send(""); }); // Reservations cancelled
app.get("/userConfirm", (req, res) => { res.send(""); }); // Reservations confirmed by the resto

// Takes the text the user sends to RestoBot and sends RestoBots response
app.post("/message", (req, res) => {
  var json = JSON.parse(req.body);
  console.log("hi", json);
  res.send(JSON.stringify(functions.CreateReservationObject(json)));
});
*/
