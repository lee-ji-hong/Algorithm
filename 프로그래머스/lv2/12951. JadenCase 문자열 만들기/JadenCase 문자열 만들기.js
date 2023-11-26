function capitalize(str) {
	return str.charAt(0).toUpperCase()+ str.slice(1);
}
function solution(s) {
    var answer = '';
    let element = s.split(" ");

    for( let i =0; i<element.length; i++){
        answer += i === element.length-1 ? capitalize(element[i].toLowerCase()) : capitalize(element[i].toLowerCase()) + ' '
        // if(i === element.length-1){
        //     answer += capitalize(element[i].toLowerCase()) 
        // }else {
        //     answer += capitalize(element[i].toLowerCase()) + ' ';
        // }
    }
    return answer;
}
