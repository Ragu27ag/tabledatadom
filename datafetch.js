let maindiv = document.createElement("div");
maindiv.classList = "maindiv";

let forms = document.createElement("form");
forms.setAttribute("id", "forms");

let labelfname = document.createElement("label");
labelfname.setAttribute("for", "fname");
labelfname.innerText = "Firstname";

let labellname = document.createElement("label");
labellname.setAttribute("for", "lname");
labellname.innerText = "Lastname";

let labeladdress = document.createElement("label");
labeladdress.setAttribute("for", "address");
labeladdress.innerText = "Address";

let labelpincode = document.createElement("label");
labelpincode.setAttribute("for", "pincode");
labelpincode.innerText = "Pincode";

let labelgender = document.createElement("label");
labelgender.setAttribute("for", "gender");
labelgender.innerText = "Gender";

let labelstate = document.createElement("label");
labelstate.setAttribute("for", "state");
labelstate.innerText = "State";

let labelcountry = document.createElement("label");
labelcountry.setAttribute("for", "country");
labelcountry.innerText = "Country";

let fistname = document.createElement("input");
fistname.setAttribute("id", "fname");
fistname.setAttribute("name", "fname");

fistname.classList = "space";

let lastname = document.createElement("input");
lastname.setAttribute("id", "lname");
lastname.setAttribute("name", "lname");
// lastname.setAttribute("required");
lastname.classList = "space";

let address = document.createElement("input");
address.setAttribute("id", "address");
address.setAttribute("name", "address");
// address.setAttribute("required");

address.classList = "space";

let pincode = document.createElement("input");
pincode.setAttribute("id", "pincode");
pincode.setAttribute("name", "pincode");
// fistname.setAttribute("required");

pincode.classList = "space";

let gender = document.createElement("input");
gender.setAttribute("id", "gender");
gender.setAttribute("name", "gender");
// gender.setAttribute("required");

gender.classList = "space";

let chick = document.createElement("input");
chick.setAttribute("id", "pizza");
chick.setAttribute("name", "chk");
chick.setAttribute("value", "pizza");
chick.setAttribute("type", "checkbox");
chick.classList = "chk";

let briyani = document.createElement("input");
briyani.setAttribute("id", "briyani");
briyani.setAttribute("name", "chk");
briyani.setAttribute("type", "checkbox");
briyani.setAttribute("value", "briyani");
briyani.classList = "chk";

let burger = document.createElement("input");
burger.setAttribute("id", "burger");
burger.setAttribute("name", "chk");
burger.setAttribute("type", "checkbox");
burger.setAttribute("value", "burger");
burger.classList = "chk";

let state = document.createElement("input");
state.setAttribute("id", "state");
state.setAttribute("name", "state");
// state.setAttribute("required");

state.classList = "space";

let country = document.createElement("input");
country.setAttribute("id", "country");
country.setAttribute("name", "country");
// country.setAttribute("required");

country.classList = "space";

let butt = document.createElement("button");
butt.classList = "butt";
butt.setAttribute("type", "submit");
// fistname.setAttribute("required");

butt.innerHTML = "Submit";
// butt.setAttribute("onClick", "handlesubmit(e)");

forms.append(
  labelfname,
  fistname,

  labellname,
  lastname,

  labeladdress,
  address,

  labelpincode,
  pincode,

  labelgender,
  gender,

  labelstate,
  state,

  labelcountry,
  country,
  chick,
  "Pizza     ",
  briyani,
  "Briyani   ",
  burger,
  "Burger    ",
  butt
);

maindiv.append(forms);

document.body.append(maindiv);
document.getElementById("fname").required = "true";
document.getElementById("lname").required = "true";
document.getElementById("address").required = "true";
document.getElementById("pincode").required = "true";
document.getElementById("gender").required = "true";
document.getElementById("state").required = "true";
document.getElementById("country").required = "true";

let count = 0;
// document
//   .getElementsByClassName("chk")
//   .addEventListener("onClick", function check(e) {
//     for (let a in e.target.elements.chk.length) {
//       if (e.target.elements.chk[a].checked) {
//         count++;
//       }
//     }
//     console.log(count);
//     if (count > 2) {
//       alert("count > 2");
//     }
//   });

let res = {};

let arr = [];

let chkb = [];

let index = "";
document.addEventListener("submit", function handlesubmit(e) {
  e.preventDefault();
  console.log("e", e.target.elements);
  console.log(e.target.elements.chk[0]);
  Array.from(e.target.elements).forEach((ele) => {
    if (ele.nodeName === "INPUT") {
      res[ele.name] = ele.value;
    }
  });
  for (let i in e.target.elements.chk) {
    if (e.target.elements.chk[i].checked === true) {
      console.log(e.target.elements.chk[i]);
      chkb = [...chkb, e.target.elements.chk[i].value];
      res["food"] = chkb;
      count++;
    } else {
      continue;
    }
  }
  console.log(res);

  console.log(count);
  if (count < 2) {
    alert("Select atleast two foods");
    document.querySelector(".chk").checked = false;
    chkb = "";
  } else {
    arr.push(res);
    console.log(arr);

    table();
    document.getElementById("forms").reset();
    res = {};

    arr = [];
    count = 0;
    chkb = [];
  }
});

let tables = document.createElement("table");
tables.classList = "maintable";

let trowhead = document.createElement("tr");

let theadfname = document.createElement("td");
theadfname.innerText = "First name";
theadfname.classList = "tablehead";

let theadlname = document.createElement("td");
theadlname.innerText = "Last name";
theadlname.classList = "tablehead";

let theadadd = document.createElement("td");
theadadd.innerText = "Address";
theadadd.classList = "tablehead";

let theadpincode = document.createElement("td");
theadpincode.innerText = "Pincode";
theadpincode.classList = "tablehead";

let theadgender = document.createElement("td");
theadgender.innerText = "Gender";
theadgender.classList = "tablehead";

let theadstate = document.createElement("td");
theadstate.innerText = "State";
theadstate.classList = "tablehead";

let theadcountry = document.createElement("td");
theadcountry.innerText = "Country";
theadcountry.classList = "tablehead";

let theadfood = document.createElement("td");
theadfood.innerText = "Food";
theadfood.setAttribute("colspan", "3");
theadfood.classList = "tableheadfood";

trowhead.append(
  theadfname,
  theadlname,
  theadadd,
  theadpincode,
  theadgender,
  theadstate,
  theadcountry,
  theadfood
);

tables.append(trowhead);
maindiv.append(tables);

function table() {
  console.log("table");

  arr.forEach((data) => {
    let trow = document.createElement("tr");

    let tfname = document.createElement("td");
    tfname.innerText = `${data.fname}`;
    tfname.classList = "tablehead";
    trow.append(tfname);

    let tlname = document.createElement("td");
    tlname.classList = "tablehead";
    tlname.innerText = `${data.lname}`;
    trow.append(tlname);

    let tadd = document.createElement("td");
    tadd.classList = "tablehead";
    tadd.innerText = `${data.address}`;
    trow.append(tadd);

    let tpin = document.createElement("td");
    tpin.classList = "tablehead";
    tpin.innerText = `${data.pincode}`;
    trow.append(tpin);

    let tgender = document.createElement("td");
    tgender.innerText = `${data.gender}`;
    tgender.classList = "tablehead";
    trow.append(tgender);

    let tstate = document.createElement("td");
    tstate.innerText = `${data.state}`;
    tstate.classList = "tablehead";
    trow.append(tstate);

    let tcountry = document.createElement("td");
    tcountry.innerText = `${data.country}`;
    tcountry.classList = "tablehead";
    trow.append(tcountry);

    for (let j = 0; j < 3; j++) {
      if (data.food[j] === undefined) {
        let tfood = document.createElement("td");
        tfood.innerText = "-";
        tfood.classList = "tablehead";
        trow.append(tfood);
      } else {
        let tfood = document.createElement("td");
        tfood.innerText = `${data.food[j]}`;
        tfood.classList = "tablehead";
        trow.append(tfood);
      }
    }

    tables.append(trow);
  });

  // document.body.append(tables);
  arr = [];
}
