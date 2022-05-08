var names_of_people = [];
    
function submit()
{
    var GuestName = document.getElementById("name1").value;
	names_of_people.push(GuestName);
	console.log(GuestName);    
    console.log(names_of_people);
    var lenght_of_name = names_of_people.length;
    console.log(lenght_of_name);
	document.getElementById("display_name").innerHTML=names_of_people.toString();
   }



function show()
{
	var i= names_of_people.join("<br>");
	console.log(names_of_people);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sort_button").style.display="block";
	
}


function sorting()
	{
		names_of_people.sort()        
		
		console.log(names_of_people);
	
		var display_names_of_people = [];
	
		var length_of_name_of_people_ = name_of_people.length;
		console.log(length_of_name_of_people);
	
		for  (var k = 0; k <length_of_name_of_people_; k++)
		{
			display_name_of_people_sorting.push("<h4>NAME -" + name_of_the_people_[k] + " </h4>" );
			console.log(display_name_of_people_array_sorting);
	
		}
		var remove_commas = display_name_of_people_sorting.join("")
		 console.log(remove_commas);
	
	
		 
	 document.getElementById("display_name_without_commas").innerHTML = remove_commas;
	
		var i= names_of_people.join("<br>");
		console.log(names_of_people);		
		document.getElementById("sorted").innerHTML=i.toString();
		}


function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<names_of_people.length; j++)
		{
			if(s==names_of_people[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}
