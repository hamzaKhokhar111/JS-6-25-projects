function generate(){
    var quotes ={
        "-CHarlotto Bronte" : '"I am no bird; and no net ensnares me: I am a free human being with an independent will."',
        "-Coco Chanel" : '"The most courageous act is still to think for yourself. Aloud."',
        "-George Orwell" :'"War is peace.freedom is slavery,ignorance is Strenght"'

    }
    var authors= Object.keys(quotes);
    var author=authors[Math.floor(Math.random()*authors.length)];
    var quote=quotes[author];

   document.getElementById("quote").innerHTML=quote;
   document.getElementById('author').innerHTML=author;
}