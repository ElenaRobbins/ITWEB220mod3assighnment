const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,    
});
let contacts = [
  { name: "Alice Johnson", address: "123 Apple St", phone: "123-456-7890" },
  { name: "Bob Smith", address: "456 Banana Ave", phone: "234-567-8901" },
  { name: "Charlie Rose", address: "789 Cherry Blvd", phone: "345-678-9012" }
];

function promptForContact() {
  if (contacts.length >= 10) {
    console.log("Maximum number of contacts (10) has been reached.");
    displayContacts();
    rl.close();
    return;
  }

  rl.question("Enter contact name: ", function(name) {
    rl.question("Enter contact address: ", function(address) {
      rl.question("Enter contact phone number: ", function(phone) {
        contacts.push({ name, address, phone });

        if (contacts.length >= 10) {
          console.log("Maximum number of contacts reached.");
          displayContacts();
          rl.close();
        } else {
          rl.question("Would you like to add another contact? (yes/no): ", function(answer) {
            if (answer.toLowerCase() === 'yes') {
              promptForContact();
            } else {
              displayContacts();
              rl.close();
            }
          });
        }
      });
    });
  });
}

function sortContacts() {
  contacts.sort((a, b) => a.name.localeCompare(b.name));
}

function displayContacts() {
  sortContacts();
  console.log("\nSorted Contact List:");
  contacts.forEach((contact, index) => {
    console.log(`\nContact ${index + 1}`);
    console.log(`Name: ${contact.name}`);
    console.log(`Address: ${contact.address}`);
    console.log(`Phone: ${contact.phone}`);
  });
}

console.log("Welcome to the Address Book Program.");
promptForContact();
