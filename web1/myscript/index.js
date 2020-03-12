var html="";
var monthh=["Month", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "ept", "Oct", "Nov", "Dec"];
var language=["English (UK)","Tiếng Việt","中文(台灣)","한국어","日本語",
            "Français (France)","ภาษาไทย","Español","Português (Brasil)",
            "Deutsch","Italiano"];
var footer=["Sign Up", "Log In", "Messenger", "Facebook Lite", "Watch ",
            "People", "Pages", "Page categories", "Places", "Games", 
            "Locations", "Marketplace", "Groups", "Instagram", "Local",
            "Fundraisers", "Services", "About", "Create ad", "Create Page",
            "Developers", "Careers", "Privacy", "Cookies", 'AdChoices<img src="img/tamgiac.png"></img>',
            "Terms", "Help"];

for (let index = 1; index < 32; index++) {
    if (index===12) {
        html+='<option value="'+index+'" selected="1">'+index+'</option>';  
    }
    html+='<option value="'+index+'">'+index+'</option>'
}
document.getElementById("day").innerHTML=html;

html="";
monthh.forEach(element => {
    if (element==="Mar") {
        html+='<option value="'+element+'" selected="1">'+element+'</option>';  
    }
    html+='<option value="'+element+'">'+element+'</option>'
});
document.getElementById("month").innerHTML=html;

html="";
for (let index = 1905; index < 2020; index++) {
    if (index===1995) {
        html+='<option value="'+index+'" selected="1">'+index+'</option>';  
    }
    html+='<option value="'+index+'">'+index+'</option>'
}
document.getElementById("year").innerHTML=html;

html="";
for (let index = 0; index < language.length; index++) {
    html+='<li><a class="listItem">'+language[index]+'</a></li>';
}
html+='<li><button class="bonus"><img class="add" src="img/add.png" ></img></button></li>';
document.getElementById("language").innerHTML=html;

html="";
footer.forEach(element => {
    html+='<li><a class="lastList">'+element+'</a></li>';
});
document.getElementById("lilast").innerHTML=html;