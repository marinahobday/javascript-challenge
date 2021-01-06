// from data.js
// creat constant variables
const tableData = data;
const tbody = d3.select("tbody");

// create table space first into html
// then append data to each row
function tabby(data){
    tbody.html("");
    data.forEach((rowwy)=>{
        const row = tbody.append("tr");
        Object.values(rowwy).forEach((val)=>{
            let cell= row.append("td");
            cell.text(val);
        }
    );
});
}

// create filter function for date
// only show filtered rows
function click(){
    const date= d3.select("#datetime").property("value");
    let filtereddata = tableData;
    if (date){
        filtereddata = filtereddata.filter(row => row.datetime === date);
    }
    tabby(filtereddata); 
}

// in order to work in html...
d3.selectAll("#filter-btn").on("click", click)
tabby(tableData);

