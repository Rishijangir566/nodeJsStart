// console.log("hello world")

import fs from "fs";

// 3 ways to create file = fs.writeFile , fs.appendfile

// fs.writeFile

// fs.writeFile("dummy.txt" , "hello world", (error)=>{
//    console.log(error);
// })

// appendfile 

//   fs.appendFile("dummy.txt","hello_world",(err)=>{
//     if(err) console.log(err)
//         console.log("succses");
        
//   })

// readdir use to get files name  

// fs.readdir("../",(error,files)=>{
//     if(error) console.log(error);
//     console.log(files)
// })

// readdir and read diffrences /////



// write folders name in file 

// fs.readdir("../",(error,files)=>{
//     if(error)console.log("error")
//         let num =files ;
//     try{
//         fs.writeFileSync("dummy.txt",num.join("\n"));
//         console.log("file written sucessFully")
//     }catch(error){
//         console.log("error written file" ,error)
//     }
// });


// fs.readdir("../",(error,files)=>{
//         if(error)console.log("error")
            
//     fs.rm("dummy.txt",(error)=>{
//         if(error) console.log(error)
//     });


//     // foreach method 

//       files.forEach((names)=>{
//         fs.appendFile("dummy.txt",names+"\n",(error)=>{
//               if(error) console.log(error)
                
//         })
//       })
        
//     });


fs.readdir("../",(error,files)=>{
        if(error)console.log("error")
            
            // file delete krne me use or duabra se isi name se create bhi krta h 

            fs.rm("dummy.txt",(error)=>{
                if(error) console.log(error)
            });

        // append and variable method
        
            let num =files ;
        try{
            fs.appendFile("dummy.txt",num.join("\n"),(error,files)=>{
                if(error) console.log(error)
                    console.log("file written sucessFully")
            });
        }catch(error){
            console.log("error written file" ,error)
        }
        
    });




