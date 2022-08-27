function getSeason(){
    let getStrangerSeason = document.getElementById("stranger").value;
    if(getStrangerSeason=="season2"){
        document.getElementById("str1").style.display = "none";
        document.getElementById("str2").style.display = "block";
        document.getElementById("str3").style.display = "none";
        document.getElementById("str4").style.display = "none";
    }
    else if(getStrangerSeason=="season1"){
        document.getElementById("str1").style.display = "block";
        document.getElementById("str2").style.display = "none";
        document.getElementById("str3").style.display = "none";
        document.getElementById("str4").style.display = "none";
    }
    else if(getStrangerSeason=="season3"){
        document.getElementById("str1").style.display = "none";
        document.getElementById("str2").style.display = "none";
        document.getElementById("str3").style.display = "block";
        document.getElementById("str4").style.display = "none";
    }
    else if(getStrangerSeason=="season4"){
        document.getElementById("str1").style.display = "none";
        document.getElementById("str2").style.display = "none";
        document.getElementById("str3").style.display = "none";
        document.getElementById("str4").style.display = "block";
    }
}
