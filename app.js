var fs = require("fs");

const readline = require("readline");
const r = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

var menu = () => {
    console.log("1.Create Directory");
    console.log("2.Remove Directory");
    console.log("3.Write FIle");
    console.log("4.Read FIle");
    console.log("5.Delete FIle");
    console.log("6.Append data to FIle");
    console.log("7.Update / Replace file with new data");
    console.log("8.Rename File");
    choice();
}
var choice = () => {
    r.question("Enter the choice: ", (input) =>{
        if(input === "1")
        {
            console.log("-----  Create Directory  -----");
            createdir();
        }
        else if(input === "2")
        {
            console.log("-----  remove direc  -----");
            removedir();
        }
        else if(input === "3")
        {
            console.log("-----  Write File:  -----");
            writefiles();
        }
        else if(input === "4")
        {
            console.log("-----  read   -----");
            readfiles();
        }
        else if(input === "5")
        {
            console.log("-----  delete  -----");
            deletefiles();
        }
        else if(input === "6")
        {
            console.log("-----  Append  -----");
            appendfiles();
        }
        else if(input === "7")
        {
            console.log("-----  Update / Replace  -----");
            updatefiles();
        }
        else if(input === "8")
        {
            console.log("-----  rename  -----");
            renamefiles();
        }
        else
        {
            console.log("-----  completed!!  -----");
            r.close();
        }
    })
}
menu();


var createdir = () =>{
    r.question("Enter the name of directory to create | ", (input) =>{
        var dir = "./" + input;
        console.log(dir);
        fs.mkdir(dir,{ recursive: true },(err)=>{
            if (err) throw err;
        });
        console.log("file created succesfully !!!");
        menu();
    });
    
};

var removedir = () => {
    r.question("Enter the name of file you want to delete",(input) =>{
        fs.rmdir(input,()=>{
            console.log("folder deleted");
            menu();
        });
        console.log("not deleted/found");
    });
};

var writefiles = () =>{
    r.question("Enter the file name you want to write on : ",(fname) =>{
        r.question("Enter the contents of the file : ",(content) =>{
        fs.writeFile(fname+".txt",content,(err) =>{
            if (err) throw err;
            console.log("Added succesfully");
            menu();
        });
        console.log("Failed");
    });
    });
};

var readfiles = () =>{
    r.question("Enter the filename you want to read: ",(fname)=>{
        fs.readFile(fname,"utf8",(err,data)=>{
            if(err) throw err;
            console.log(data);
            menu();
        });
        
    });
};
var deletefiles = ()=>{
    r.question("Enter the fiename you would lik to delete: ",(fname)=>{
        fs.unlink(fname,(err)=>{
            if(err) throw err;
            console.log("Deleted Succesfully!!");
            menu();
        })
    })
}
var appendfiles = () =>{
    r.question("Enter the filename you want to Append: ",(fname)=>{
        r.question("Enter the contents you want to enter in the file",(content)=>{
            fs.appendFile(fname,content,(err)=>{
                if(err) throw err;
                console.log("Appended succesfully!!");
                menu();
            });
        });
        
    });
};
var updatefiles = () =>{
    r.question("Enter the file name you want to write on : ",(fname) =>{
        r.question("Enter the contents of the file : ",(content) =>{
        fs.writeFile(fname+".txt",content,(err) =>{
            if (err) throw err;
            console.log("updatted succesfully");
            menu();
        });
    });
    });
}
var renamefiles = ()=>{
    r.question("Enter the file name you want to rename",(fname)=>{
        r.question("Enter the file name you want to rename your file to",(rename)=>{
            fs.rename(fname,rename,(err)=>
            {
                if(err) throw err;
                console.log("Rename succesfully!!");
                menu();
            });
        });
    });
};