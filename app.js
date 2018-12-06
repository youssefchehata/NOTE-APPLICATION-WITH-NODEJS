const fs =require('fs');
const JSON_INFO = 'inf.json';


// Read data from Json file

const read = () =>{
    let jsonfile =[];
    //read file Synch
    file = fs.readFileSync(JSON_INFO);
    jsonfile=JSON.parse(file);
    jsonfile.forEach(n=>{
        console.log(`Title :${n.title}`)
        console.log(`--------`)
        console.log(`Body :${n.body}`)
    })
}

//Add a note to Json

const add =(title,body) =>{
    if(title.length===0 || body.length===0){
        console.log('you must enter a title and body')
    }
    else{
        let jsonfile=[];
        file=fs.readFileSync(JSON_INFO);
        jsonfile=JSON.parse(file);
        let length = jsonfile.filter(n=> n.title === title).length
        if (length ===0){
            jsonfile.push({
                title,
                body
            });
            fs.writeFileSync(JSON_INFO,JSON.stringify(jsonfile));
        }
        else{
            console.log("text duplicated");
        }
        console.log('title : ' + title)
        console.log('body : ' + body)
    }
}


//Remove Note 


const remove =(title) =>{
    if(title.length ===0){
        console.log('enter a valid title')
    }
    else{
        file=fs.readFileSync(JSON_INFO);
        jsonfile=JSON.parse(file);
        jsonfileFilter=jsonfile.filter(n=>n.title!== title);
        fileFilter=JSON.stringify(jsonfileFilter);
        fs.writeFileSync(JSON_INFO,fileFilter)
        console.log(`${title} removed`)

        
    }
}

const readSpecific =(title) =>{
    if(title.length ===0 ){
        console.log('enter valid title')
    }

    else{
        let jsonfile=[];
        file=fs.readFileSync(JSON_INFO);
        jsonfile=JSON.parse(file);
        let filter=jsonfile.filter(n=>n.title === title)
        if(filtred.length ===0){
            console.log('title not found')
        }

        else{
            console.log(`title :${filtred.title}`);
            console.log(`body :${filtred.body}`)
        }
            
        
    }
}



module.exports={
    remove,
    add,
    read,
    readSpecific
}