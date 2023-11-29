function skillMember(){
    var member = document.getElementById("member");
    var memberValue = member.value;
    if(memberValue.length == 0){
        document.getElementById("memberError").innerHTML = "Please enter member";
        member.style.border = "1px solid red";
        return false;
    }else{
        document.getElementById("memberError").innerHTML = "";
        member.style.border = "1px solid #ced4da";
        return true;
    }
}