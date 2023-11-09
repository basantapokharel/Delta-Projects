let list = [];
let choice="";
let temp;
while (true) {
    while (choice!="quit") {
        choice = prompt("Enter your choice");
        switch (choice) {
            case "list":
                {
                    console.log("List:")
                    for (let i = 0; i < list.length; i++) {
                        console.log(list[i]);
                    }
                    break;
                }
            case "add":
                {
                    temp = prompt("Enter list:");
                    list.push(temp);
                    console.log("Task added");
                    break;

                }
            case "delete":
                {
                    temp=prompt("Enter the index to delete");
                    list.splice(temp,1);
                    console.log("Task deleted");
                    break;
                }
            case "quit":
                {
                    console.log("Quitting");
                    break;
                }
            default:
                {
                    console.log("Wrong request");
                    break;
                }

        }
    }
    if(choice=="quit")
    {
        break;
    }
}