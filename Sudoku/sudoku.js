var r = [];
var c = [];
var b = [];
var rn = 0;
var cn = 0;
var bn = 0;

for (let i = 0; i < 9; i++) {
    r[i] = [];
    c[i] = [];
    b[i] = [];
}

function createTable() {
    document.write('<table border="2">');
    for (var i = 0; i < 3; i++) {
        document.write('<tr>');
        for (var j = 0; j < 3; j++) {
            rn = i * 3 + j; 
            document.write('<tr>'); 

            for (var k = 0; k < 3; k++) {
                if (rn < 3) {
                    bn = 0;
                } else if (rn < 6) {
                    bn = 3;
                } else {
                    bn = 6;
                }
                while (true) {
                    var random = Math.floor(Math.random() * 9) + 1;
                    var row = rowChecker(rn, random);
                    if (row) {
                        continue;
                    }
                    var col = colChecker(k + j * 3, random); 
                    if (col) {
                        continue;
                    }
                    var box = boxChecker(bn + k % 3, random); 
                    if (box) {
                        continue;
                    }
                    break;
                }
                document.write('<td>' + random + '</td>');
                r[rn].push(random);
                c[k + j * 3].push(random); 
                b[bn].push(random);
            }
            document.write('</tr>');
        }
        document.write('</tr>');
    }
    document.write('</table>');
}

function rowChecker(row_num, rand) {
    return r[row_num].includes(rand);
}

function colChecker(col_num, rand) {
    return c[col_num].includes(rand);
}

function boxChecker(box_num, rand) {
    return b[box_num].includes(rand);
}

createTable();


_____________________________________________________

// var r=[]
// var c=[]
// var b=[]
// var rn=0
// var cn=0
// var bn=0
// for (let i=0;i<9;i++){
//     r[i]=[]
// }
// for (let i=0;i<9;i++){
//     c[i]=[]
// }
// for (let i=0;i<9;i++){
//     b[i]=[]
// }
// function createtable(){
//     document.writeln(<table border="2">)
//     for (var i =0; i< 3 ; i++){
//         document.writeln(<tr>)
//         for (var j=0;j<3;j++){
//             rn=rn+1
//             document.writeln(<tr>)
//             for (var k=0;k<3;k++){
//                 if(rn<3){bn=0} else {if(rn<6){bn=3} else{bn=6}}
//                 while (true){
//                 var random = Math.floor(Math.random()*(9-1+1))+1;
//                     var row=rowchecker(rn,random)
//                     if(row)
//                     {
//                         continue
//                     }
//                     var col=colchecker(k,random)
//                     if(col){
//                         continue
//                     }
//                     var box=boxchecker(bn,random)
//                     if(box)
//                     {
//                         continue
//                     }
//                     break
//                 }
//                 document.writeln(<td> +random+ </td>)
//                 r[rn].push(random)
//                 c[k].push(random)
//                 b[bn].push(random)
//             }
//             for (var k=0;k<3;k++){
//                 while (true){
//                     var random = Math.floor(Math.random()*(9-1+1))+1;
//                         var row=rowchecker(rn,random)
//                         if(row)
//                         {
//                             continue
//                         }
//                         var col=colchecker(k,random)
//                         if(col){
//                             continue
//                         }
//                         var box=boxchecker(bn,random)
//                         if(box)
//                         {
//                             continue
//                         }
//                         break
//                     }
//                     document.writeln(<td> +random+ </td>)
//                     r[rn].push(random)
//                     c[k+3].push(random)
//                     if(rn<3){bn=1} else {if(rn<6){bn=4} else{bx=7}}
//                     b[bn].push(random)
//             }
//             for (var k=0;k<3;k++){
//                 while (true){
//                     var random = Math.floor(Math.random()*(9-1+1))+1;
//                         var row=rowchecker(rn,random)
//                         if(row)
//                         {
//                             continue
//                         }
//                         var col=colchecker(k,random)
//                         if(col){
//                             continue
//                         }
//                         var box=boxchecker(bn,random)
//                         if(box)
//                         {
//                             continue
//                         }
//                         break
//                     }
//                     document.writeln(<td> +random+ </td>)
//                     r[rn].push(random)
//                     c[k+6].push(random)
//                     if(rn<3){bn=2} else {if(rn<6){bn=5} else{bx=8}}
//                     b[bn].push(random)
//             }
//             document.writeln(</tr>)
//         }
//     document.writeln(</tr>)
//     }
//     document.writeln(</table>)
// }
// createtable()
// function rowchecker(row_num,rand){
//     for(let i=0;i<r[row_num].length;i++){
//         if(rand==r[row_num][i])
//         {
//             return true
//         }
//     }
//     return false
// }
// function colchecker(col_num,rand){
//     for(let i=0;i<c[col_num].length;i++){
//         if(rand==c[col_num][i])
//         {
//             return true
//         }
//     }
//     return false
// }
// function boxchecker(box_num,rand){
//     for(let i=0;i<b[box_num].length;i++){
//         if(rand==b[box_num][i])
//         {
//             return true
//         }
//     }
//     return false
// }
