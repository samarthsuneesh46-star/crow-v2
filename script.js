function go(id){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById(id).classList.add('active');}
const notes=document.getElementById('notes');
if(notes){notes.value=localStorage.getItem('notes')||'';notes.oninput=()=>localStorage.setItem('notes',notes.value);}
function check1(){if(document.getElementById('correct1').checked){go('m2');}else{document.getElementById('msg1').innerText='Incorrect. Review the evidence and try again.';}}
function check2(){if(document.getElementById('correct2').checked){localStorage.setItem('case1Solved','true');document.getElementById('case1').innerText='✓ Case 1 – The Stolen Necklace';go('closed');}else{document.getElementById('msg2').innerText='Incorrect. Review the evidence and try again.';}}