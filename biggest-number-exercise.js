//Find the biggest number:

function find_biggest(list) {
    // page a has the list
    page_a = list
    // page b has the biggest number so far
    page_b = list[0];
    // go through the page a numbers one at a time
    for (let i = 0; i < page_a.length; i++) {
        console.log("checking number: " + page_a[i])
        let current_number = list[i];
        if (current_number > page_b) {
            console.log(current_number + " is bigger");
            page_b = current_number;
        }
    }
    console.log("biggest number: " + page_b);
}

find_biggest([1, 3, 2, 5, 4]);