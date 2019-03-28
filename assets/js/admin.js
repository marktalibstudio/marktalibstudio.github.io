const admins = [{ "name": "zackytalib3", "pass": "Regents4b.." }]
const hash = "?gCmLm-aEy2MmGH-^*6TL%8vSdw5DsEV^T4hV%F?Da^DDKhM9=s*uPqe9DzLp3jE$MD#hNw#sXguUFPdRsm=JS+J!uCR4F^vAys6Bfkq$6wRNVT!MtDR*cBdZ9pc^$9_Fzx@LtvLbcz+n4gf9t7NyYxGDHGZ!%TvMf7Gd5F*-hD%R?y*9kb+s#E*HkPmcXMgY*XKyGy6gGxB#+dYqa@GJ=Ga#r_egJHrS*weFf*a7*vSxpavmTkn^uE^a9Qh?EW-M?bMpgF^AbB+y24u7%vANubsN9QP5taTBb!aLUgD*ZBTCpr@mAc!4kMLbajz=?3HwEa844-ubA^Mg@23v-@Hd%7A?JzSC$wNdD*rk$#$Xsu#D%HG@2DR$-7VJCzSE-jLm6jmPMSkBfCAzW*6ZQkZ59D2@Y!#gA=^UHgAytXw+Qe?BSGJQvz58E2$YB&RQ9ExzThpKxNKW$3Kuy*ceG&btK*A*g9S8Yh?d49pE3&GbzN72nszZt5@m?qaHKh-zR+Hdh^W#wV_pd#^caXAy@DN2A5dJ7wCp9c_WVQ&$-zaX5K=23aHuS*JEqr?@49Txwj*Axy+B$e*-QwkHfVH6#7y=KYUc$MP7hhrMFuTERV-hq8h@-NrE48V$JA&Gfj?m&KX4zApD2?Dppr*H+c=vMtm4_^^!s@yZ#HbFp#vqjN#2-ehcb=Gn5xJ-u5YLGegPDCzQpS%D87F3h_6@H^3+y?8X#bjyYqCQ?YA3wZ7w%&xg3tRPuQRD43P7r28dLJBtMJXb=t@QMJ8StT#G_aKTwaT=^dx=kQEMzJ?*aQ6va%5xnXXGq$Rf&d*GN3SsxLcRdeG?EWkEbpybLf_zc$84Q3_%8kQgTvB+mwvpf8+aHxfahpd=Du@&tUvA=#qmuTPwfM^_V$?ahhGh!VFZ6mN-aQ%eFy^@A&*jWQCVe&zMj5VqVgD$?&!WMP@#&zSKndMa$#WS#LEEL8jw9zr7qpGp%5?z#x!ePTvHKZe28Z-uJ9s&$uueDF66Rt^*ERBTJppd@#-#LB#wAzSnq?g!qCVqD62LQgB#zT$?jMrTBPyDzxb3%xjxVjnVE%k?E$kN^#SapH$9TuVts58!QHAhp2knhvpJ2$68ZmeU2*Yg5=tN^R+jkSET5wtegg_jbcu$_VerHyy$eqMBeS=2$64V&3BQx@pvCu&s@ApqMeeXAeYdS&B9TYduEzjaJA5EnHXYH48ZEJ5vaQ!MJTMdCYX=HxYCGzTzHy88Myy7@BX7fXvnLpa9%RgkpFE%#MdgDKc&uWH5L@F$SPWFvaa+mFFXPwmpNYh6&Uh?b5tVV9ub_NHyHY#N6nb9_sW9j6dYN6?VU3pjMW7T96-Qrq$h*?rj$qHz_NfAgpB^BprVq3xK#Y8%AGN&8G9ksDZjpjY@7rxE^7D2uwjRtJjkZjEJ45EZHtq8Xn^z5tzvyQ7e3TG-5-weZ6MkfjsfZ7vJHys_4_Thn$&LhSwtsmBh#uG+Vd7X#J9BU!&cUkUcDKN!E6LTFC4+aG6n7K%JMYaHTrWuveAzAm!uqg*JGAqy_Cx7!KeNjk?9*6gbnTQ$6mH!w7mS^%5UecZDaZ#wYuP3KnZ7UbwpD2JGrU?pyz&seYw=*M+WgBXSk-?ag4sZ?tw53mNz-2LF&Aqf-vzd8267w5D$CM78+fUm7vVxgAtB?xbjhxD5NzH3EY^+7N5@&8nMFX7tCZU_qk#+T&!G_YV3shPt=djc2s-r6yAk7ddJGTe7XchKASeBJjYGs6JgTrjk!9dDVJAJ2+jFasvCVBHsVR-&%=H_9U!ny*sW#=FQB*pqRPU!G8TBReM9gGSV?V#RqcR$Kqy%zr_@5&vYw@y-U36N3=A^?=8wdzL*6nAf6wB92J&2X8VhawttME%c6ba$hFX8hsKw+*%A#$h+Rtb_LZE@HP#SN5QVxP#-P!dgteMuGP8$vLP#bQ!C6qQbz_Mv7cYrnGZ!T?3=eX8ew@!YN#TyZ7j&=j#p$Pq9MQRQ9z=r&kVX=n?3q#+ptSt5s7sn@fjbc4Hgmqv283%Yh2H7swr^EnkGJF#DAD3";
let post = { "image": "", "date": "", "type": "", "media": "", "name": "", "desc": "", "picture": "", "author": "" };
let firebaseRef = firebase.database().ref();
let scount = 0;
let pcount = 0;
let apview = true;
let counts = { "artwork": 0, "startwork": 0, "uartwork": 0, "news": 0 };

if (getCookie("hash") == hash) {
  document.getElementById("exposed").style.display = "block";
  document.getElementById("log").style.display = "none";
}

function login() {
  let name = document.getElementById("fname").value;
  let pass = document.getElementById("pass").value;
  if (validate(name, pass)) {
    if (document.getElementById("rem").checked) {
      remember();
    }
    document.getElementById("exposed").style.display = "block";
    document.getElementById("log").style.display = "none";
  } else {
    swal({ text: "Username or Password is incorrect!" });
  }
}

function remember() {
  setCookie("hash", hash, 73000)
}

function validate(name, pass) {
  for (i = 0; i < admins.length; i++) {
    if (name == admins[i]["name"] && pass == admins[i]["pass"]) {
      return true;
    }
  }
  return false;
}

function submitData() {
  let ids = ["image", "date", "type", "media", "name", "picture", "author"];
  for (i = 0; i < ids.length; i++) {
    post[ids[i]] = document.getElementById(ids[i]).value;
    if (post[ids[i]] == "") {
      swal("Don't leave any fields blank");
      return 0;
    }
  }
  post["desc"] = document.getElementById("desc").value;
  if (post["desc"] == "") {
    swal("Don't leave any fields blank")
    return 0;
  }
  sortData();
}

function sortData() {
  let ctype = post["type"];
  console.log(post);
  if (ctype == "artwork") {
    scount++;
    postArtwork();
    return 0;
  }
  if (ctype == "startwork") {
    scount++;
    postSArtwork();
    return 0;
  }
  if (ctype == "uartwork") {
    scount++;
    postUArtwork();
    return 0;
  }
  if (ctype == "news") {
    scount++;
    postNews();
    return 0;
  } else {
    swal("Incorrect Type of Data");
    return 0;
  }
}

function postArtwork() {
  firebaseRef.child("tools").child("artworkC").on("value", function (snapshot) {
    counts["artwork"] = snapshot.val();
    if (pcount < scount) {
      addArtwork(snapshot.val());
    }
  });
}

function postNews() {
  firebaseRef.child("tools").child("nartworkC").on("value", function (snapshot) {
    counts["news"] = snapshot.val();
    if (pcount < scount) {
      addNews(snapshot.val());
    }
  });
}

function postSArtwork() {
  firebaseRef.child("tools").child("startworkC").on("value", function (snapshot) {
    counts["startwork"] = snapshot.val();
    if (pcount < scount) {
      addSArtwork(snapshot.val());
    }
  });
}

function postUArtwork() {
  firebaseRef.child("tools").child("uartworkC").on("value", function (snapshot) {
    counts["uartwork"] = snapshot.val();
    if (pcount < scount) {
      addUArtwork(snapshot.val());
    }
  });
}

function addArtwork(num) {
  pcount++;
  firebaseRef.child("artworks").child("art" + (num + 1)).set({
    image: post["image"],
    picture: post["picture"],
    list: {
      name: post["name"],
      date: post["date"],
      desc: post["desc"],
      media: post["media"]
    }
  });
  firebaseRef.child("tools").child("artworkC").set(num + 1);
  swal("Added Succesfully!");
}

function addSArtwork(num) {
  pcount++;
  firebaseRef.child("startworks").child("art" + (num + 1)).set({
    image: post["image"],
    list: {
      name: post["name"],
      date: post["date"],
      desc: post["desc"],
      media: post["media"],
      author: post["author"]
    }
  });
  firebaseRef.child("tools").child("startworkC").set(num + 1);
  swal("Added Succesfully!");
}

function addUArtwork(num) {
  pcount++;
  firebaseRef.child("uartworks").child("art" + (num + 1)).set({
    list: {
      name: post["name"],
      desc: post["desc"],
      media: post["media"],
    }
  });
  firebaseRef.child("tools").child("uartworkC").set(num + 1);
  swal("Added Succesfully!");
}

function addNews(num) {
  pcount++;
  firebaseRef.child("nartworks").child("art" + (num + 1)).set({
    list: {
      name: post["name"],
      desc: post["desc"],
      date: post["date"],
    }
  });
  firebaseRef.child("tools").child("nartworkC").set(num + 1);
  swal("Added Succesfully!");
}

function changeType() {
  let val = document.getElementById("type").value;
  if (val == "artwork") {
    artSetting();
    return 0;
  }
  if (val == "startwork") {
    stSetting();
    return 0;
  }
  if (val == "uartwork") {
    uSetting();
    return 0;
  }
  if (val == "news") {
    nSetting();
    return 0;
  }
}

function artSetting() {
  // image, picture, name, date, desc, media ( author )
  document.getElementById("cimage").style.display = "inline";
  document.getElementById("cpicture").style.display = "inline";
  document.getElementById("name").style.display = "inline";
  document.getElementById("cdate").style.display = "inline";
  document.getElementById("desc").style.display = "inline";
  document.getElementById("cmedia").style.display = "inline";
  document.getElementById("cauthor").style.display = "none";
  document.getElementById("author").value = "none"
  //////
  document.getElementById("image").value = "";
  document.getElementById("picture").value = "";
  document.getElementById("name").value = "";
  document.getElementById("date").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("media").value = "";
}

function stSetting() {
  // image, name, date, desc, media, author ( picture )
  document.getElementById("cimage").style.display = "inline";
  document.getElementById("cauthor").style.display = "inline";
  document.getElementById("name").style.display = "inline";
  document.getElementById("cdate").style.display = "inline";
  document.getElementById("desc").style.display = "inline";
  document.getElementById("cmedia").style.display = "inline";
  document.getElementById("cpicture").style.display = "none";
  document.getElementById("picture").value = "none";
  ////
  document.getElementById("image").value = "";
  document.getElementById("author").value = "";
  document.getElementById("name").value = "";
  document.getElementById("date").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("media").value = "";
}

function nSetting() {
  artSetting();
  // name, date, desc ( image, picture, author, media )
  document.getElementById("cdate").style.display = "inline";
  document.getElementById("name").style.display = "inline";
  document.getElementById("desc").style.display = "inline";
  document.getElementById("cauthor").style.display = "none";
  document.getElementById("cimage").style.display = "none";
  document.getElementById("cpicture").style.display = "none";
  document.getElementById("cmedia").style.display = "none";
  document.getElementById("author").value = "none";
  document.getElementById("image").value = "none";
  document.getElementById("picture").value = "none";
  document.getElementById("media").value = "none";
  /////
  document.getElementById("name").value = "";
  document.getElementById("date").value = "";
  document.getElementById("desc").value = "";
}

function uSetting() {
  // name, desc, media ( image, picture, author, date)
  document.getElementById("name").style.display = "inline";
  document.getElementById("desc").style.display = "inline";
  document.getElementById("cmedia").style.display = "inline";
  document.getElementById("cauthor").style.display = "none";
  document.getElementById("cimage").style.display = "none";
  document.getElementById("cpicture").style.display = "none";
  document.getElementById("cdate").style.display = "none";
  document.getElementById("author").value = "none";
  document.getElementById("image").value = "none";
  document.getElementById("picture").value = "none";
  document.getElementById("date").value = "none";
  ///
  document.getElementById("name").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("media").value = "";
}

function changeView() {
  apview = !apview;
  if (apview) {
    document.getElementById("dexposed").style.display = "none";
    document.getElementById("exposed").style.display = "block";
  } else {
    document.getElementById("exposed").style.display = "none";
    document.getElementById("dexposed").style.display = "block";
  }
}

let artposts = [];
let startposts = [];
let news = [];
let uartposts = [];
let artproceed = false;
let startproceed = false;
let newsproceed = false;
let uproceed = false;

function readArt() {
  firebaseRef.child("tools").child("artworkC").on("value", function (snapshot) {
    let t = snapshot.val();
    counts["artwork"] = t;
    if (t > 0) {
      nextArt(1);
    } else {
      artproceed = true;
      showPosts();
    }
  });
}

function nextArt(num) {
  firebaseRef.child("artworks").child("art" + num).on("value", function (snapshot) {
    artposts.push({
      "image": snapshot.val()["image"], "picture": snapshot.val()["picture"], list: {
        "date": snapshot.val().list.date,
        "desc": snapshot.val().list.desc,
        "name": snapshot.val().list.name,
        "media": snapshot.val().list.media
      }
    });
    if (counts["artwork"] > num) { nextArt(num + 1); }
    else { artproceed = true; showPosts(); }
  });
}

function readSArt() {
  firebaseRef.child("tools").child("startworkC").on("value", function (snapshot) {
    let t = snapshot.val();
    counts["startwork"] = t;
    if (t > 0) {
      nextSArt(1);
    } else {
      startproceed = true;
      showPosts();
    }
  });
}

function nextSArt(num) {
  firebaseRef.child("startworks").child("art" + num).on("value", function (snapshot) {
    startposts.push({
      "image": snapshot.val()["image"], "list": {
        "date": snapshot.val().list.date,
        "desc": snapshot.val().list.desc,
        "name": snapshot.val().list.name,
        "media": snapshot.val().list.media,
        "author": snapshot.val().list.author
      }
    });
    if (counts["startwork"] > num) { nextSArt(num + 1); }
    else { startproceed = true; showPosts(); }
  });
}

function readUArt() {
  firebaseRef.child("tools").child("uartworkC").on("value", function (snapshot) {
    let t = snapshot.val();
    counts["uartwork"] = t;
    if (t > 0) {
      nextUArt(1);
    } else {
      uproceed = true;
      showPosts();
    }
  });
}

function nextUArt(num) {
  firebaseRef.child("uartworks").child("art" + num).on("value", function (snapshot) {
    uartposts.push({
      "list": {
        "desc": snapshot.val().list.desc,
        "name": snapshot.val().list.name,
        "media": snapshot.val().list.media
      }
    });
    if (counts["uartwork"] > num) { nextUArt(num + 1); }
    else { uproceed = true; showPosts(); }
  });
}

function readNews() {
  firebaseRef.child("tools").child("nartworkC").on("value", function (snapshot) {
    let t = snapshot.val();
    counts["news"] = t;
    if (t > 0) {
      nextNews(1);
    } else {
      newsproceed = true;
      showPosts();
    }
  });
}

function nextNews(num) {
  firebaseRef.child("nartworks").child("art" + num).on("value", function (snapshot) {
    news.push({
      "list": {
        "desc": snapshot.val().list.desc,
        "name": snapshot.val().list.name,
        "date": snapshot.val().list.date
      }
    });
    if (counts["news"] > num) { nextNews(num + 1); }
    else { newsproceed = true; showPosts(); }
  });
}

readArt();
readNews();
readUArt();
readSArt();

function showPosts() {
  let ctype = document.getElementById("dtype").value;
  if (ctype == "artwork") {
    artSettingd(0);
    document.getElementById("post").innerHTML = "";
    for (i = 0; i < artposts.length; i++) {
      document.getElementById("post").innerHTML += "<option value='" + i + "'>" + artposts[i]["list"]["name"] + "</option>";
    }
    return 0;
  }
  if (ctype == "startwork") {
    stSettingd(0);
    document.getElementById("post").innerHTML = "";
    for (i = 0; i < startposts.length; i++) {
      document.getElementById("post").innerHTML += "<option value='" + i + "'>" + startposts[i]["list"]["name"] + "</option>";
    }
    return 0;
  }
  if (ctype == "uartwork") {
    uSettingd(0);
    document.getElementById("post").innerHTML = "";
    for (i = 0; i < uartposts.length; i++) {
      document.getElementById("post").innerHTML += "<option value='" + i + "'>" + uartposts[i]["list"]["name"] + "</option>";
    }
    return 0;
  }
  if (ctype == "news") {
    nSettingd(0);
    document.getElementById("post").innerHTML = "";
    for (i = 0; i < news.length; i++) {
      document.getElementById("post").innerHTML += "<option value='" + i + "'>" + news[i]["list"]["name"] + "</option>";
    }
    return 0;
  }
}

function changePost() {
  let ctype = document.getElementById("dtype").value;
  let id = parseInt(document.getElementById("post").value);
  if (ctype == "artwork") {
    artSettingd(id);
    return 0;
  }
  if (ctype == "startwork") {
    stSettingd(id);
    return 0;
  }
  if (ctype == "uartwork") {
    uSettingd(id);
    return 0;
  }
  if (ctype == "news") {
    nSettingd(id);
    return 0;
  }
}

function artSettingd(num) {
  // image, picture, name, date, desc, media ( author )
  document.getElementById("dimage").style.display = "inline";
  document.getElementById("dpicture").style.display = "inline";
  document.getElementById("dname").style.display = "inline";
  document.getElementById("ddate").style.display = "inline";
  document.getElementById("ddesc").style.display = "inline";
  document.getElementById("dmedia").style.display = "inline";
  document.getElementById("dauthor").style.display = "none";
  document.getElementById("dauthor").value = "none";
  document.getElementById("ddimage").value = artposts[num]["image"];
  document.getElementById("ddpicture").value = artposts[num]["picture"];
  document.getElementById("dname").value = artposts[num]["list"]["name"];
  document.getElementById("dddate").value = artposts[num]["list"]["date"];
  document.getElementById("ddesc").innerHTML = artposts[num]["list"]["desc"];
  document.getElementById("ddmedia").value = artposts[num]["list"]["media"];
}

function stSettingd(num) {
  // image, name, date, desc, media, author ( picture )
  document.getElementById("dimage").style.display = "inline";
  document.getElementById("dauthor").style.display = "inline";
  document.getElementById("dname").style.display = "inline";
  document.getElementById("ddate").style.display = "inline";
  document.getElementById("ddesc").style.display = "inline";
  document.getElementById("dmedia").style.display = "inline";
  document.getElementById("dpicture").style.display = "none";
  document.getElementById("dpicture").value = "none";
  document.getElementById("ddimage").value = startposts[num]["image"];
  document.getElementById("ddauthor").value = startposts[num]["list"]["author"];
  document.getElementById("dname").value = startposts[num]["list"]["name"];
  document.getElementById("dddate").value = startposts[num]["list"]["date"];
  document.getElementById("ddesc").innerHTML = startposts[num]["list"]["desc"];
  document.getElementById("ddmedia").value = startposts[num]["list"]["media"];
}

function nSettingd(num) {
  // name, date, desc ( image, picture, author, media )
  document.getElementById("dname").style.display = "inline";
  document.getElementById("ddate").style.display = "inline";
  document.getElementById("ddesc").style.display = "inline";
  document.getElementById("dauthor").style.display = "none";
  document.getElementById("dimage").style.display = "none";
  document.getElementById("dpicture").style.display = "none";
  document.getElementById("dmedia").style.display = "none";
  document.getElementById("dauthor").value = "none";
  document.getElementById("dimage").value = "none";
  document.getElementById("dpicture").value = "none";
  document.getElementById("dmedia").value = "none";
  document.getElementById("dname").value = news[num]["list"]["name"];
  document.getElementById("dddate").value = news[num]["list"]["date"];
  document.getElementById("ddesc").innerHTML = news[num]["list"]["desc"];
}

function uSettingd(num) {
  // name, desc, media ( image, picture, author, date)
  document.getElementById("dname").style.display = "inline";
  document.getElementById("ddesc").style.display = "inline";
  document.getElementById("dmedia").style.display = "inline";
  document.getElementById("dauthor").style.display = "none";
  document.getElementById("dimage").style.display = "none";
  document.getElementById("dpicture").style.display = "none";
  document.getElementById("ddate").style.display = "none";
  document.getElementById("dauthor").value = "none";
  document.getElementById("dimage").value = "none";
  document.getElementById("dpicture").value = "none";
  document.getElementById("ddate").value = "none";
  document.getElementById("dname").value = uartposts[num]["list"]["name"];
  document.getElementById("ddmedia").value = uartposts[num]["list"]["media"];
  document.getElementById("ddesc").innerHTML = uartposts[num]["list"]["desc"];
}

function addArtworkd(num) {
  firebaseRef.child("artworks").child("art" + num).set({
    image: dpost["image"],
    picture: dpost["picture"],
    list: {
      name: dpost["name"],
      date: dpost["date"],
      desc: dpost["desc"],
      media: dpost["media"]
    }
  });
  swal("Updated Succesfully!");
}

function addSArtworkd(num) {
  firebaseRef.child("startworks").child("art" + num).set({
    image: post["image"],
    list: {
      name: dpost["name"],
      date: dpost["date"],
      desc: dpost["desc"],
      media: dpost["media"],
      author: dpost["author"]
    }
  });
  swal("Updated Succesfully!");
}

function addUArtworkd(num) {
  firebaseRef.child("uartworks").child("art" + num).set({
    list: {
      name: dpost["name"],
      desc: dpost["desc"],
      media: dpost["media"],
    }
  });
  swal("Updated Succesfully!");
}

function addNewsd(num) {
  firebaseRef.child("nartworks").child("art" + num).set({
    list: {
      name: dpost["name"],
      desc: dpost["desc"],
      date: dpost["date"],
    }
  });
  swal("Updated Succesfully!");
}

let dpost = {};

function validateDatad(list) {
  for (i = 0; i < list.length; i++) {
    if (dpost[list[i]] == "" || dpost[list[i]] == undefined) {
      swal("Don't leave any fields blank!");
      return false;
    }
  }
  return true;
}

function submitDatad() {
  let ctype = document.getElementById("dtype").value;
  let id = parseInt(document.getElementById("post").value);
  if (ctype == "artwork") {
    dpost["image"] = document.getElementById("ddimage").value;
    dpost["picture"] = document.getElementById("ddpicture").value;
    dpost["name"] = document.getElementById("dname").value;
    dpost["date"] = document.getElementById("dddate").value;
    dpost["desc"] = document.getElementById("ddesc").value;
    dpost["media"] = document.getElementById("ddmedia").value;
    if (validateDatad(["image", "picture", "name", "date", "desc", "media"]) == false) {
      return 0;
    }
    addArtworkd(id + 1);
    return 0;
  }
  if (ctype == "startwork") {
    dpost["image"] = document.getElementById("ddimage").value;
    dpost["author"] = document.getElementById("ddauthor").value;
    dpost["name"] = document.getElementById("dname").value;
    dpost["date"] = document.getElementById("dddate").value;
    dpost["desc"] = document.getElementById("ddesc").value;
    dpost["media"] = document.getElementById("ddmedia").value;
    if (validateDatad(["image", "author", "name", "date", "desc", "media"]) == false) {
      return 0;
    }
    addSArtworkd(id + 1);
    return 0;
  }
  if (ctype == "uartwork") {
    dpost["name"] = document.getElementById("dname").value;
    dpost["desc"] = document.getElementById("ddesc").value;
    dpost["media"] = document.getElementById("ddmedia").value;
    if (validateDatad(["name", "desc", "media"]) == false) {
      return 0;
    }
    addUArtworkd(id + 1);
    return 0;
  }
  if (ctype == "news") {
    dpost["name"] = document.getElementById("dname").value;
    dpost["date"] = document.getElementById("dddate").value;
    dpost["desc"] = document.getElementById("ddesc").value;
    if (validateDatad(["name", "desc", "date"]) == false) {
      return 0;
    }
    addNewsd(id + 1);
    return 0;
  }
}

let delPost = {};

function deletePost() {
  let ctype = document.getElementById("dtype").value;
  let id = parseInt(document.getElementById("post").value);
  let length;
  if (ctype == "artwork") {
    length = artposts.length;
    delPost = artposts[length - 1];
    if (length == 1) {
      firebaseRef.child("artworks").child("art1").set({
        image: "",
        picture: "",
        list: {
          name: "",
          date: "",
          desc: "",
          media: ""
        }
      });
      firebaseRef.child("tools").child("artworkC").set(0);
      showPosts();
      swal("Deleted Succesfully").then((value) => {
        location.reload();
      });
    }
    console.log(delPost);
    firebaseRef.child("artworks").child("art" + (id + 1)).set({
      image: delPost["image"],
      picture: delPost["picture"],
      list: {
        name: delPost["list"]["name"],
        date: delPost["list"]["date"],
        desc: delPost["list"]["desc"],
        media: delPost["list"]["media"]
      }
    });
    firebaseRef.child("tools").child("artworkC").set(length - 1);
    firebaseRef.child("artworks").child("art" + length).remove();
    showPosts();
    swal("Deleted Succesfully").then((value) => {
      location.reload();
    });
    return 0;
  }
  if (ctype == "startwork") {
    length = startposts.length;
    delPost = startposts[length - 1];
    if (length == 1) {
      firebaseRef.child("startworks").child("art1").set({
        image: "",
        list: {
          name: "",
          date: "",
          desc: "",
          media: "",
          author: ""
        }
      });
      firebaseRef.child("tools").child("startworkC").set(0);
      showPosts();
      swal("Deleted Succesfully").then((value) => {
        location.reload();
      });
    }
    console.log(delPost);
    firebaseRef.child("startworks").child("art" + (id + 1)).set({
      image: delPost["image"],
      list: {
        author: delPost["list"]["author"],
        name: delPost["list"]["name"],
        date: delPost["list"]["date"],
        desc: delPost["list"]["desc"],
        media: delPost["list"]["media"]
      }
    });
    firebaseRef.child("tools").child("startworkC").set(length - 1);
    firebaseRef.child("startworks").child("art" + length).remove();
    showPosts();
    swal("Deleted Succesfully").then((value) => {
      location.reload();
    });
    return 0;
  }
  if (ctype == "uartwork") {
    length = uartposts.length;
    delPpost = uartposts[length - 1];
    if (length == 1) {
      firebaseRef.child("uartworks").child("art1").set({
        list: {
          name: "",
          desc: "",
          media: "",
        }
      });
      firebaseRef.child("tools").child("uartworkC").set(0);
      showPosts();
      swal("Deleted Succesfully").then((value) => {
        location.reload();
      });
    }
    console.log(delPost);
    firebaseRef.child("uartworks").child("art" + (id + 1)).set({
      list: {
        name: delPost["list"]["name"],
        desc: delPost["list"]["desc"],
        media: delPost["list"]["media"]
      }
    });
    firebaseRef.child("tools").child("uartworkC").set(length - 1);
    firebaseRef.child("uartworks").child("art" + length).remove();
    showPosts();
    swal("Deleted Succesfully").then((value) => {
      location.reload();
    });
    return 0;
  }
  if (ctype == "news") {
    length = news.length;
    delPost = news[length - 1];
    if (length == 1) {
      firebaseRef.child("nartworks").child("art1").set({
        list: {
          name: "",
          date: "",
          desc: "",
        }
      });
      firebaseRef.child("tools").child("nartworkC").set(0);
      showPosts();
      swal("Deleted Succesfully").then((value) => {
        location.reload();
      });
    }
    console.log(delPost);
    firebaseRef.child("nartworks").child("art" + (id + 1)).set({
      list: {
        name: delPost["list"]["name"],
        date: delPost["list"]["date"],
        desc: delPost["list"]["desc"],
      }
    });
    firebaseRef.child("tools").child("nartworkC").set(length - 1);
    firebaseRef.child("nartworks").child("art" + length).remove();
    showPosts();
    swal("Deleted Succesfully").then((value) => {
      location.reload();
    });
    return 0;
  }
}

artSetting();
