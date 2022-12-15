/**printing a figure of diamond by taking the following parameters 
 * @param height 
 * @param width 
 */
function draw_diamond(height, width){
    let stars = 0;
    /**declaring an array to store star values for the first half of moutain pattern*/
    let string = [];  
 
    /**printing moutain pattern for the first half of the rows*/
    for(let row= 0;row<height/2;row++){
            let txt = "";
            stars = Math.round((row*(width/height))+1);
            string.push(stars);
            let totspaces = (width-stars)/2;        
            let prespaces = Math.ceil(totspaces);        
            let postspaces = Math.floor(totspaces);      
                
        /**printing spaces present in the diamond */
            for(let spaces=0;spaces<prespaces;spaces++){
                        
                    txt += " ";
            }
                
        /**printing stars */    
            for(let star=0;star<stars;star++){
                
                    txt += "*";
            }
            for(let spaces=0;spaces<postspaces;spaces++){
                txt += " ";
                
            }
            console.log(txt);
    }
    var starsarraylength = string.length;
    //* subtracting 1 from length of array length is odd /* 
    //* This is to obtain the diamond shape - thickest in the middle */

    if(string.length%2==1){
        starsarraylength--;
    }
    
    for(let arrindex =starsarraylength-1;arrindex>=0;arrindex--){
        let txt="";
        stars = string[arrindex];        
        let totspaces = (width-stars)/2;        
        let prespaces = Math.ceil(totspaces);        
        let postspaces = Math.floor(totspaces);  
         
        for(let spaces=0;spaces<prespaces;spaces++){
                        
            txt += " ";
    }
        
    
    for(let star=0;star<stars;star++){
        
            txt += "*";
    }
    for(let spaces=0;spaces<postspaces;spaces++){
        txt += " ";
        
    }
    /**the final output will get stored here */ 
    console.log(txt);
    }
    
}
function main(){
    draw_diamond(20,20)
}
main()