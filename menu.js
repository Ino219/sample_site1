
var schedule=new Map([["name","SCHEDULE"],["adress","STARDUST.NEW.html"]]);
var lineup=new Map([["name","LINE UP"],["adress","STARDUST.LINEUP.html"]]);
var p_schedule=new Map([["name","SCHEDULE"],["adress","STARDUST.SCHEDULE.html"]]);
var p_new=new Map([["name","WHAT'S NEW"],["adress","STARDUST.WHAT.html"]]);

var game_sub=[schedule,lineup];
var prize_sub=[p_schedule,p_new];

var tops=new Map([["name","TOP"],["adress","index.html"],["sub","false"]]);
var access=new Map([["name","ACCESS"],["adress","STARDUST.ACCESS.html"],["sub","false"]]);
var game=new Map([["name","GAME"],["adress","#"],["sub","true"],["sub_menu",game_sub]]);
var prize=new Map([["name","PRIZE"],["adress","#"],["sub","true"],["sub_menu",prize_sub]]);
var twitter=new Map([["name","TWITTER"],["adress","#"],["sub","false"]]);

var menu=[tops,access,game,prize,twitter];

$(function(){
      var li;      
      $.each(menu,function(i,value){
        li=$("<li><a href='"+value.get("adress")+"'>"+value.get("name")+"</a></li>");
        if(value.get("sub")=="false"){
        li.appendTo($("#menu"));
        }else if(value.get("sub")=="true"){
          var t_array=value.get("sub_menu");
          var ul=$("<ul></ul>");
          $.each(t_array,function(j,val){
            var s_li=$("<li><a href='"+val.get("adress")+"'>"+val.get("name")+"</a></li>");
            s_li.appendTo(ul);
          })
          ul.appendTo(li);
          li.appendTo($("#menu"));
        }else{
          console.log("ng");
        }
      })
    })