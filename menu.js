const flavors=[
{id:'lotus',name:'اللوتس',description:'نكهة بسكويت اللوتس الأصلية، كريمية وغنية.'},
{id:'crunchy',name:'الكرانشي',description:'قرمشة الكراميل والتوفي لنكهة ممتعة.'},
{id:'pecan',name:'البيكان',description:'بيكان محمّص مكرمل لمذاق غني.',premium:true},
{id:'pistachio',smallPrice:4,premium:true,name:'البيستاشيو',description:'طعم الفستق مع قطع الفستق المقرمشة.'},
{id:'nescafe',name:'النسكافيه',description:'مزيج القهوة الغني لعشاق المذاق المميز.'},
{id:'kinder',name:'الكندر',description:'شوكولاتة كندر الحليبية مع قطع كندر.',premium:true},
{id:'oreo',name:'الأوريو',description:'كريمة أوريو مع قطع البسكويت المقرمشة.'}];
const packages=[{id:'mini20',name:'ميني بوكس · 20 حبة صغيرة',size:'small',count:20},{id:'mini30',name:'ميني بوكس · 30 حبة صغيرة',size:'small',count:30},{id:'large6',name:'بوكس كبير · 6 حبات كبيرة',size:'large',count:6},{id:'large10',name:'بوكس كبير · 10 حبات كبيرة',size:'large',count:10}];
function piecePrice(flavor,size){return size==='small'?(flavor.smallPrice??(flavor.premium?4:3)):(flavor.premium?8:7);}
function boxPrice(pack,counts){return flavors.reduce((sum,f,i)=>sum+piecePrice(f,pack.size)*counts[i],0);}
if(typeof module!=='undefined')module.exports={flavors,packages,piecePrice,boxPrice};
