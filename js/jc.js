function pita(pon) {
    
    
    
    if (pon == 0) {
        hand = 1;
    }
    else if (pon == 1) {
        hand = 1;
        
    }
    else if (pon == 2) {
        hand = 2;
        
    }
    else if(pon==3){
        hand = 3*2;
    }
    else if(pon==4){
        hand = 4*3*2;
    }
    else if(pon==5){
        hand = 5*4*3*2;
    }
    else if(pon==6){
        hand = 6*5*4*3*2;
    }
    else if(pon==7){
        hand = 7*6*5*4*3*2;
    }
    else if(pon==8){
        hand = 8*7*6*5*4*3*2;
    }
    else if(pon==9){
        hand = 9*8*7*6*5*4*3*2;
    }
    
    alert(pon+'の階乗は'+hand+'です');
    
    
}
