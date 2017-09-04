console.log("Starting...")

console.log("Enter number of Players:")

let input = process.openStdin();
let data = {};
let progress = 0;
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
          data.players = input_clean;
          data.names = [];
          state = "Player Names"
          console.log(`Enter name for player ${progress + 1}.`);
        } else {
          console.log("Invalid Number of Players");
      }
      break;

      case "Player Names": {
        data.names[progress] = input_clean;
        progress += 1;
        if (data.players == progress) {
          state = "Settings";
         console.log("Players:")
         data.names.forEach(function(name, index) {
            console.log(`Player ${(index+1) + ": " + name}`);
        })
         console.log("Please Set Initial Funds")
        }  else {
          console.log(`Enter name for player ${progress + 1}.`);
        }
      }
      break;

      default:
        console.log("ERROR")
        console.log(state)
        break;
    }

  });