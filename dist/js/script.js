const clanList=["kamon_aburame.svg","kamon_akaba.svg","kamon_akimichi.svg","kamon_aniki.svg","kamon_ao.svg","kamon_eshimuro.svg","kamon_hyuga.svg","kamon_inuzuka.svg","kamon_ishida.svg","kamon_kakikubari.svg","kamon_kato.svg","kamon_kenta.svg","kamon_kurama.svg","kamon_mitokado.svg","kamon_morino.svg","kamon_munefuda.svg","kamon_nara.svg","kamon_sarutobi.svg","kamon_senju.svg","kamon_shimadoku.svg","kamon_shimura.svg","kamon_takeda.svg","kamon_uchiha.svg","kamon_utatane.svg","kamon_yamanaka.svg"],clanBar=document.getElementsByClassName("clan-bar")[0];for(let a=0;a<10;a++)clanList.forEach((a=>{const n=document.createElement("img");n.src=`img/clans/${a}`,n.className="clan-bar__img",clanBar.appendChild(n)}));
