let person = {
    name: `Bob`,
    occupation: `web developer`,
    hobbies: `paintings`,
 }
    //Cách 1
    console.log(person.name);
    document.getElementById("name").innerHTML="Tôi tên là Bob"
    console.log(person.hobbies);
    document.getElementById("hobbies").innerHTML="Sở thích của tôi à paintings"
    console.log(person.occupation);
    document.getElementById("occupation").innerHTML=" Tôi là một web developer"

    // // Cách 2 
    // console.log(person['name']);
    // document.getElementById("name").innerHTML="Tôi tên là Bob"
    // console.log(person['hobbies']);
    // document.getElementById("hobbies").innerHTML="Sở thích của tôi à paintings"
    // console.log(person['occupation']);
    // document.getElementById("occupation").innerHTML=" Tôi là một web developer"