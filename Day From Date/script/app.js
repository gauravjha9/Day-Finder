function day() {
  let a, b, c;
  a = new Date(document.getElementById("date").value);
  b = a.getDay();
  console.log(b);


  c = document.getElementById("output");

  switch (b) {
    case 0:
      c.innerHTML = "It's Sunday";
      break;
    case 1:
      c.innerHTML = "It's Monday";
      break;
    case 2:
      c.innerHTML = "It's Tuesday";
      break;
    case 3:
      c.innerHTML = "It's Wednesday";
      break;
    case 4:
      c.innerHTML = "It's Thursday";
      break;
    case 5:
      c.innerHTML = "It's Friday";
      break;
    case 6:
      c.innerHTML = "It's Saturday";
      break;

    default:
      c.innerHTML = a;
      break;
  }
}
