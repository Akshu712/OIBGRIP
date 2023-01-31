var l=[];
    var c=0;
    var c1=0;
    function addd() {
        var t=document.getElementById("title").value;
        var d=document.getElementById("description").value;
        if(t.length==0 && d.length==0){
            document.getElementById("blank").innerHTML="*Please enter the Title and Description";
        }
        else if(t.length==0 && d.length!=0){
            document.getElementById("blank").innerHTML="*Please enter the Title";
        }
        else if(t.length!=0 && d.length==0){
            document.getElementById("blank").innerHTML="*Please enter the Description";
        }
        else{
            document.getElementById("blank").innerHTML="";
        l.push(t);
        c1="com"+c;
        document.getElementById("addedtasks").innerHTML+=
            `<div id="${c}" class="tasks" >
                <div class="titt" id="tit"> ${t}</div>
                <div class="desc" id="des"> ${d}</div>
                <div class="btn1"><button id="${c1}" style="background-color:brown; border:red ;color:white" onClick="completed(${c})">Completed</button></div>
                <div class="btn2"><button onClick="delfun(${c})">delete</button></div>
            </div>`
            c=c+1;
          document.getElementById("title").value="";
        document.getElementById("description").value="";

        }
    }
    function delfun(n){
        document.getElementById(n).remove();
        document.getElementById(n).style.display="none";
        document.getElementById(a).style.display="none";

    }
    
    function completed(n){ 
         console.log(n);      
        
        let back = document.getElementById("com"+n).style.backgroundColor;
        console.log(back);
        if(back=="rgb(243, 114, 114)"){
            document.getElementById("com"+n).style.backgroundColor="#51d251";
            document.getElementById("com"+n).style.border="green";
            document.getElementById("com"+n).innerHTML="Done";
        }
        else{
            document.getElementById("com"+n).style.backgroundColor="#f37272";
            document.getElementById("com"+n).style.border="red";
            document.getElementById("com"+n).innerHTML="Completed";
        }
    }
