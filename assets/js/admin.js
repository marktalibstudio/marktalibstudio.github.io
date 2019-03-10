const admins = [{"name":"zackytalib3", "pass":"Regents4b.."}]

function login(){
  let name = document.getElementById("name").value;
  let pass = document.getElementById("pass").value;
  if(validate(name, pass)){
    if(document.getElementById("rem").checked){
      remember();
    }
    alert("yayy");
  } else {
    swal({text: "Username or Password is incorrect!"});
  }
}

function remember(){
  setCookie("hash", "?gCmLm-aEy2MmGH-^*6TL%8vSdw5DsEV^T4hV%F?Da^DDKhM9=s*uPqe9DzLp3jE$MD#hNw#sXguUFPdRsm=JS+J!uCR4F^vAys6Bfkq$6wRNVT!MtDR*cBdZ9pc^$9_Fzx@LtvLbcz+n4gf9t7NyYxGDHGZ!%TvMf7Gd5F*-hD%R?y*9kb+s#E*HkPmcXMgY*XKyGy6gGxB#+dYqa@GJ=Ga#r_egJHrS*weFf*a7*vSxpavmTkn^uE^a9Qh?EW-M?bMpgF^AbB+y24u7%vANubsN9QP5taTBb!aLUgD*ZBTCpr@mAc!4kMLbajz=?3HwEa844-ubA^Mg@23v-@Hd%7A?JzSC$wNdD*rk$#$Xsu#D%HG@2DR$-7VJCzSE-jLm6jmPMSkBfCAzW*6ZQkZ59D2@Y!#gA=^UHgAytXw+Qe?BSGJQvz58E2$YB&RQ9ExzThpKxNKW$3Kuy*ceG&btK*A*g9S8Yh?d49pE3&GbzN72nszZt5@m?qaHKh-zR+Hdh^W#wV_pd#^caXAy@DN2A5dJ7wCp9c_WVQ&$-zaX5K=23aHuS*JEqr?@49Txwj*Axy+B$e*-QwkHfVH6#7y=KYUc$MP7hhrMFuTERV-hq8h@-NrE48V$JA&Gfj?m&KX4zApD2?Dppr*H+c=vMtm4_^^!s@yZ#HbFp#vqjN#2-ehcb=Gn5xJ-u5YLGegPDCzQpS%D87F3h_6@H^3+y?8X#bjyYqCQ?YA3wZ7w%&xg3tRPuQRD43P7r28dLJBtMJXb=t@QMJ8StT#G_aKTwaT=^dx=kQEMzJ?*aQ6va%5xnXXGq$Rf&d*GN3SsxLcRdeG?EWkEbpybLf_zc$84Q3_%8kQgTvB+mwvpf8+aHxfahpd=Du@&tUvA=#qmuTPwfM^_V$?ahhGh!VFZ6mN-aQ%eFy^@A&*jWQCVe&zMj5VqVgD$?&!WMP@#&zSKndMa$#WS#LEEL8jw9zr7qpGp%5?z#x!ePTvHKZe28Z-uJ9s&$uueDF66Rt^*ERBTJppd@#-#LB#wAzSnq?g!qCVqD62LQgB#zT$?jMrTBPyDzxb3%xjxVjnVE%k?E$kN^#SapH$9TuVts58!QHAhp2knhvpJ2$68ZmeU2*Yg5=tN^R+jkSET5wtegg_jbcu$_VerHyy$eqMBeS=2$64V&3BQx@pvCu&s@ApqMeeXAeYdS&B9TYduEzjaJA5EnHXYH48ZEJ5vaQ!MJTMdCYX=HxYCGzTzHy88Myy7@BX7fXvnLpa9%RgkpFE%#MdgDKc&uWH5L@F$SPWFvaa+mFFXPwmpNYh6&Uh?b5tVV9ub_NHyHY#N6nb9_sW9j6dYN6?VU3pjMW7T96-Qrq$h*?rj$qHz_NfAgpB^BprVq3xK#Y8%AGN&8G9ksDZjpjY@7rxE^7D2uwjRtJjkZjEJ45EZHtq8Xn^z5tzvyQ7e3TG-5-weZ6MkfjsfZ7vJHys_4_Thn$&LhSwtsmBh#uG+Vd7X#J9BU!&cUkUcDKN!E6LTFC4+aG6n7K%JMYaHTrWuveAzAm!uqg*JGAqy_Cx7!KeNjk?9*6gbnTQ$6mH!w7mS^%5UecZDaZ#wYuP3KnZ7UbwpD2JGrU?pyz&seYw=*M+WgBXSk-?ag4sZ?tw53mNz-2LF&Aqf-vzd8267w5D$CM78+fUm7vVxgAtB?xbjhxD5NzH3EY^+7N5@&8nMFX7tCZU_qk#+T&!G_YV3shPt=djc2s-r6yAk7ddJGTe7XchKASeBJjYGs6JgTrjk!9dDVJAJ2+jFasvCVBHsVR-&%=H_9U!ny*sW#=FQB*pqRPU!G8TBReM9gGSV?V#RqcR$Kqy%zr_@5&vYw@y-U36N3=A^?=8wdzL*6nAf6wB92J&2X8VhawttME%c6ba$hFX8hsKw+*%A#$h+Rtb_LZE@HP#SN5QVxP#-P!dgteMuGP8$vLP#bQ!C6qQbz_Mv7cYrnGZ!T?3=eX8ew@!YN#TyZ7j&=j#p$Pq9MQRQ9z=r&kVX=n?3q#+ptSt5s7sn@fjbc4Hgmqv283%Yh2H7swr^EnkGJF#DAD3", 73000)
}

function validate(name, pass){
  for(i=0; i<admins.length; i++){
    if(name==admins[i]["name"] && pass==admins[i]["pass"]){
      return true;
    }
  }
  return false;
}
