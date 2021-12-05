Name_array=[];
function submit()
{
    var name1=document.getElementById("n1").value;
    var name2=document.getElementById("n2").value;
    var name3=document.getElementById("n3").value;
    var name4=document.getElementById("n4").value;

    Name_array.push(name1);
    Name_array.push(name2);
    Name_array.push(name3);
    Name_array.push(name4);

    console.log(Name_array);
document.getElementById("display_name").innerHTML=Name_array;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}
function sorting()
{
    Name_array.sort();
    console.log(Name_array);
    document.getElementById("display_name").innerHTML=Name_array;
}
