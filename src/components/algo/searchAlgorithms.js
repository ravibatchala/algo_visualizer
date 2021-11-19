
//========================LINEAR SEARCH ANIMATION GENERATOR=======================//

export function getLinerSearchAnimation(array, key){
    let animation = [];
    for(let i = 0; i < array.length; i++){
        animation.push([i, false]);
        animation.push([i, false]);
        if(array[i] === key){
            animation.push([i, true]);
            break;
        }
    }
    return animation;
}

//============================BINARY SEARCH ANIMATION GENERATOR===================//

export function getBinarySearchAnimation(array, key){
    let animation = [];
    let start = 0;
    let end = array.length-1;
    let mid = Math.floor((start+end) / 2);
    while(start <= end){
        mid = Math.floor((start+end) / 2);
        animation.push([mid, false, start, end]);
        animation.push([mid, false, start, end]);
        if(array[mid] === key){
            animation.push([mid, true, mid, mid]);
            console.log(mid);
            break;
        }
        else if(array[mid] > key){
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
    }
    return animation;
}

