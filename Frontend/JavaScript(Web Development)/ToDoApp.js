let todo=[];
let req=prompt("Enter your choice:");

while(req!="Quite")
{
    if(req=="Quite"){
        console.log("Quite the app");
    }

    else if(req=="List"){
        console.log("-----------------------")
        for(let i=0;i<todo.length;i++)
        {
            console.log(i,todo[i]);
        }
        console.log("-----------------------")
    }

    else if(req=="Add"){
        let item=prompt("Enter the task which is to be add:");
        todo.push(item);
    }

    else if(req=="Delete"){
        let del=prompt("Enter the task which is to be deleted:");
        todo.splice(del,1);
    }

    else{
        console.log("Inavalid Choice.....")
    }

    req=prompt("Enetr your next choice:");
}