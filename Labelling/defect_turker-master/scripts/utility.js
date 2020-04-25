function remove_ignored() {
    var final_arr = []
    az.hold_value.combo_for_csv.forEach(function(elem) {
        if (!elem.includes('NOT')) {
            final_arr.push(elem)
        }
    })
    return (final_arr)
}

function chunk_array(arr, split_percentage) {
    res = []
    indexToSplit = Math.round(arr.length * split_percentage)
    var arr_1 = arr.slice(0, indexToSplit);
    var arr_2 = arr.slice(indexToSplit + 1);
    res.push(arr_1)
    res.push(arr_2)
    return(res)
}