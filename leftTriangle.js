/**We are using a function mountainBuild and passing 
 * @parameter width specifies the width of the mountain we want to print
 * @parameter height specifies the height of the mountain.
 */
 function mountainBuild(width,height){
	let totalRows=width
	let mountain=""
	for (let i = 0; i <=totalRows; i++) {
		for (let j = 0; j < i; j++) {
			mountain+="*"
			
		}
		mountain+="\n"
	}
	console.log(mountain)
}
/** here we are writing the main function inside which we are calling our mountainBuild function */
function main(){
	mountainBuild(10,10)
}

main()