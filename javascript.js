console.log("Starting...")

console.log("Prompt:")

let input = process.openStdin();
let players;
let state = "Setup Players";

input.addListener("data", function(input) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that
    // with toString() and then trim()
    let input_clean = input.toString().trim();
    switch (state) {
      case "Setup Players":
        if (input_clean % 1 == 0 && input_clean > 1 && input_clean < 11) {
          console.log((`There will be: [${input}] players in the poker game.`).replace(/(\r\n|\n|\r)/gm,""))
          players = input_clean;
          state = "Player Names"
        } else {
          console.log("Invalid Number of Players");
      }
      break;

      case "Player Names":

      default:
        console.log("ERROR")
        console.log(state)
        break;
    }

  });