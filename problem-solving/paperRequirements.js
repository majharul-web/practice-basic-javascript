// paperRequirements.js

function paperRequirements(book1Qty, book2Qty, book3Qty) {
    const firstBookPerPage = 100;
    const secondBookPerPage = 200;
    const thirdBookPerPage = 300;

    const firstBookTotalPage = firstBookPerPage * book1Qty;
    const secondBookTotalPage = secondBookPerPage * book2Qty;
    const thirdBookTotalPage = thirdBookPerPage * book3Qty;

    let totalPrintPage = firstBookTotalPage + secondBookTotalPage + thirdBookTotalPage;
    return totalPrintPage;
}

const finalPageQty = paperRequirements(3, 5, 2);
console.log(finalPageQty);