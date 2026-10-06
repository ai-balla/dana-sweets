const assert=require('node:assert/strict'),fs=require('fs'),vm=require('vm');
const {flavors,packages,piecePrice,boxPrice}=require('../menu.js');
for(const f of flavors){assert.equal(piecePrice(f,'small'),f.premium?4:3);assert.equal(piecePrice(f,'large'),f.premium?8:7);}
for(const p of packages){const a=flavors.map(()=>0);a[0]=p.count;assert.equal(boxPrice(p,a),p.count*(p.size==='small'?3:7));a[0]=0;a[2]=p.count;assert.equal(boxPrice(p,a),p.count*(p.size==='small'?4:8));}
assert.equal(boxPrice(packages[0],[10,0,0,0,0,10,0]),70);
const nodes={},events={};function node(id){return nodes[id]??={value:'',open:false,textContent:'',innerHTML:'',addEventListener(t,fn){events[id+':'+t]=fn},scrollIntoView(){},focus(){},showModal(){this.open=true},close(){this.open=false}};}
const form=node('order-form');form.elements={date:{},customer:{value:'اختبار'},address:{value:'جدة حي الروضة شارع الأمير'}};form.checkValidity=()=>true;let url;
const ctx={document:{getElementById:node,querySelector:node,querySelectorAll:()=>[],body:{classList:{add(){},remove(){}}}},FormData:class{get(k){return {customer:'اختبار',address:'جدة حي الروضة شارع الأمير',date:'2026-12-01',notes:'تجربة'}[k]}},Date,window:{open(u){url=u}},console};vm.createContext(ctx);vm.runInContext(fs.readFileSync(require('path').join(__dirname,'../menu.js'),'utf8')+'\n'+fs.readFileSync(require('path').join(__dirname,'../app.js'),'utf8'),ctx);
events['add-box:click']();assert.equal(vm.runInContext('cart.length',ctx),0,'incomplete box rejected');
vm.runInContext('counts=[10,0,0,0,0,10,0]',ctx);events['add-box:click']();assert.equal(vm.runInContext('totals().price',ctx),70);assert.equal(vm.runInContext('count()',ctx),0);
events['order-items:click']({target:{closest:s=>s==='[data-cart]'?{dataset:{cart:'0',delta:'1'}}:null}});assert.equal(vm.runInContext('totals().price',ctx),140);assert.equal(vm.runInContext('totals().pieces',ctx),40);
events['order-form:submit']({preventDefault(){}});const u=new URL(url);assert.equal(u.pathname,'/966507448979');assert(u.searchParams.get('text').includes('140 ريال'));assert(u.searchParams.get('text').includes('الكندر: 10'));
events['order-items:click']({target:{closest:s=>s==='[data-remove]'?{dataset:{remove:'0'}}:null}});assert.equal(vm.runInContext('totals().price',ctx),0);
console.log('PASS: all 7 flavor prices, 4 box sizes, mixed box pricing, incomplete-box guard, quantity totals, removal, WhatsApp recipient and price breakdown.');
