//Business logic
function Ticket(name, firstRelease, age, matinee, showtime) {
  this.name = name;
  this.firstRelease = firstRelease;
  this.age = age;
  this.matinee = matinee;
  this.showtime = showtime;
}

function ticketPrice(ticket) {
  let cost = 10;
  if (ticket.firstRelease === true) {
    cost += 5;
  }

  if (ticket.matinee) {
    cost += 5;
  } else {
    cost += 10; 
  }

  if (ticket.age === "senior") {
    return (cost * 0.80);
  } else if (ticket.age === "child") {
    return (cost * 0.90);
  } else {
    return cost;
  }
}


$(document).ready(function() {
  $("form#input").submit(function() {
    event.preventDefault();

    const name = $("select#movie").val();
    const firstRelease = $("select#movie option:selected").data('value');
    const age = $("select#age").val();
    const matinee = $("select#showtimes option:selected").data('value');
    const showtime = $("select#showtimes").val();
    let ticket = new Ticket(name, firstRelease, age, matinee, showtime);

    const cost = ticketPrice(ticket);

    $("span#price").text(`$${cost}`);
    $("span#time").text(ticket.showtime);
    $("div.hidden").show();


  })
});
