// Schreibe alle IDs raus, welche zuerst drei Buchstaben und dann drei Zahlen haben.

const ids = ['csd101', '123ftu', 'dkkdk01', 'lld897', '111111'];

const valid_id = getOnlyValidIds(ids);

console.log(valid_id);

function getOnlyValidIds(array){
    let validIDs = [];
    array.forEach(id => {
        if(checkId(id)){
            validIDs.push(id);
        }});
    return validIDs;
}

function checkId(id){
    if(id.match(/^([a-z]|[A-Z]){3}\d{3}$/)){
        return true;
    }else{
        return false;
    }
}
