const myObject = {
    js: 'javaScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift of apple"
}



for (const key in myObject) {
   

   // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}


const programming =["JS", 'Ruby', "Java", "CPP"]

for (const key in programming) {
    // console.log(programming[key]);
    
}

const map =new Map()
map.set("IN", "India");
map.set("USA", "United States of America")
map.set("fr", "France")
// In map for in loop is not use
for (const key in map) {
    console.log(key);
        
    
}
