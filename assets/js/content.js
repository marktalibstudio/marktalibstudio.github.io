let res = false;
let posts = [];
let ress = [];
let comments = [];
let done=false;
let firebaseRef = firebase.database().ref();

function comment(num){
  document.getElementById("ct"+num).parentNode.innerHTML=""+
  showComments(comments[num])+
  "<textarea rows='2' id='tt"+num+"' cols='50' name='comment' form='usrform'>"+
  "Write a comment...</textarea><input id='ip"+num+"' style='text-align: center;'placeholder='Write your name...'/><br/>"+
  '<a id="cm'+num+'" class="button alt" style="margin-top: 20px"'+
  'onclick="sendComment('+num+');"'+
  '>Send Comment</a>'+
  '<a id="ct'+num+'" class="button alt" style="margin-top: 20px"'+
  'onclick="uncomment('+num+');"'+
  '>Close Comments</a>';
}

function readData(){
  firebaseRef.child("tools").child("artworkC").on("value", function(snapshot){
    let t=snapshot.val();
    count = t;
    if(t>0){
      nextData(1);
    } else {
      proceed = true;
      getData();
    }
  });
}

let count = 0;
let proceed = false;
let deceed = false;
let ccount = 0;

function getData(){
  posts.reverse();
  for(i=0; i<posts.length; i++){
    comments.push([]);
  }
  readComments();
}

function readComments(){
  firebaseRef.child("tools").child("commentC").on("value", function(snapshot){
    let t=snapshot.val();
    ccount = t;
    for(i=0; i<t; i++){
      comments.push([]);
    }
    if(t>0){
      nextComment(1);
    } else {
      deceed = true;
      getComments();
    }
  })
}

function getComments(){
  makePage();
}

let cdone = false;

function nextComment(num){
  firebaseRef.child("comments").child("c"+num).on("value", function(snapshot){
    if(cdone==true){
      swal({text: "A comment was added, the page will refresh"});
      location.reload();
    } 
    comments[snapshot.val().post].push(snapshot.val().text);
    if(ccount>num){ nextComment(num+1); } 
    else { deceed = true; cdone=true; getComments();}
  });
}

function nextData(num){
  firebaseRef.child("artworks").child("art"+num).on("value", function(snapshot){
    if(done==true){
      swal({text: "Changes has been made, the page will be refreshed"});
      location.reload();
    } 
    posts.push({"image":snapshot.val()["image "], "list":{
    "date": snapshot.val().list.date,
    "desc": snapshot.val().list.desc,
    "name": snapshot.val().list.name,
    "media": snapshot.val().list.media
    }});
    if(count>num){ nextData(num+1); } 
    else { proceed = true; done=true; getData();}
  });
}

function makePage(){
  console.log(comments);
  let poster = false;
  if(posts.length%2!=0){
    poster = true;
    posts.push({"image":"images/bg.jpg", "list":{
    "date": "Coming Soon",
    "desc": "-",
    "name": "Coming Soon",
    "media": "-"
  }});}
  for(i=0; i<posts.length; i+=2){
    ress[i]=false;
    ress[i+1]=false;
    let post1=createPost(posts[i]["image"], setData(posts[i]["list"]), i, posts[i]["list"]["name"]);
    let post2 = "";
    if(i==posts.length-2 && poster==true){
      post2=createPost(posts[i+1]["image"], setPoster
      (posts[i+1]["list"]), i+1, posts[i+1]["list"]["name"]);
    } else {
      post2=createPost(posts[i+1]["image"], setData(posts[i+1]["list"]), i+1, posts[i+1]["list"]["name"]);
    }
    createGroup(post1, post2);
  }
}

function createGroup(box1, box2){
  	document.getElementById('two').firstElementChild.innerHTML+='<div class="grid-style">'+box1+box2+'</div>';
}

function createPost(image, data, id, artname){
  return '<div><div class="box"><div class="image fit"><img src="'+image+'" alt="" /></div><div class="content"><header class="align-center"><a id="bt'+id+'" onclick="resolution('+id+');" style="margin-bottom: 30px; margin-top: -30px;"class="button alt">Enable High Resolution</a><p>Available in High Resolution</p><h2>'+artname+'</h2></header>'+data+'<footer class="align-center"><a style="margin-top: -10px;" id="ct'+id+'" class="button alt" onclick="comment('+id+');">Browse Comments</a></footer></div> <!-- content --></div> <!-- box --></div> <!-- empty -->'
}

function setData(list){
  let element = "";
  /*element+="<p style='text-align: center;'>Name of artwork: "+list["name"]+"</p>";
  element+="<p style='text-align: center;'>Medium of Artwork: "+list["media"]+"</p>";
  element+="<p style='text-align: center;'>Date of artwork: "+list["date"]+"</p>";
  element+="<p style='text-align: center;'>Description of artwork: "+list["desc"]+"</p>";*/
  element="<p style='text-align: center;' >This artwork is named "+list["name"]+". It was created by Mark Talib. The medium of the artwork is '"+list["media"]+"'. This artwork was completed in "+list["date"]+" . "+list["desc"]+"</p>";
  return element;
}

function setPoster(list){
  let element = "";
  element="<p style='text-align: center;' >This artwork is from the upcoming artwork gallery, this artwork is named "+list["name"]+". It is being created by Mark Talib. The medium of the artwork is '"+list["media"]+"'. This artwork will soon be completed. "+list["desc"]+". Disclaimer: The image above is just a placeholder image. </p>";
  return element;
}

function sendComment(num){
  let comment = document.getElementById("tt"+num).value;
  let name = document.getElementById("ip"+num).value;
  console.log(comment+" [[ "+name);
  if(comment=="" || name==""){
    swal({text: "Please don't leave the comment or name field blank"});
  } else {
    addComment(num, comment, name);
  }
}

function addComment(num, textw, namew){
  firebaseRef.child("comments").child("c"+(ccount+1)).set({
    post: num,
    text: namew+" : "+textw
  });
  firebaseRef.child("tools").child("commentC").set(ccount+1);
  location.reload();
}

function resolution(num){
  console.log(num+" state: "+!ress[num]);
  ress[num]=!ress[num];
  if(ress[num]){
    document.getElementById("bt"+num).innerHTML="Disable High Resolution";
  } else {
    document.getElementById("bt"+num).innerHTML="Enable High Resolution";
  }
}

function breakString(str){
  if(str.length>42){
    let arr=str.split('');
    arr.splice(39, 0, "<br/>-");
    return arr.join("");
  }
  return str;
}

function uncomment(num){
  document.getElementById("ct"+num).parentNode.innerHTML=""+
  '<a id="ct'+num+'" class="button alt" style="margin-top: -10px"'+
  'onclick="comment('+num+');"'+
  '>Browse Comments</a>';
}

function showComments(comment){
  let element = "";
  if(comment.length>=4){
    element = '<div style="width: 100%; height: 150px; overflow-y: scroll; margin-bottom: 10px; max-width: 100%; overflow-x: hidden;">';
  } else {
    element = '<div style="width: 100%; overflow-y: scroll; margin-bottom: 10px; max-width: 100%; overflow-x: hidden;">';
  }
  for(i=0; i<comment.length; i++){
    element+='<p style="text-align: left; margin: 15px;">'+breakString(comment[i])+"</p>";
  }
  element+="</p></div>";
  return element;
}

readData();