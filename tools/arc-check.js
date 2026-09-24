/* Pacing check. Not loaded by the game: paste into the console on a running
   index.html (after pressing Begin) on a FRESH save. A steady bot (a swipe
   every 0.55s through a random cell, a greedy shop visit every minute) plays
   the first scale and reports the minutes to each boss and to the zoom-out.
   Re-run this after changing SCALE_INCOME, prices or anything that feeds the
   dish - income compounds, so the bar is not linear in time.
   Measured 2026-09-24 at 375x812: bosses ~3.3/4.6/5.8/6.1 min, scale 6.2 min. */
(function(){
  const dt=1/60, t0=el, at=[];
  let sw=0, shop=60;
  const ob=window.banner;
  window.banner=function(x){ if(/^(DARTER|BULWARK|HYDRA|WARDEN)$/.test(x)) at.push(((el-t0)/60).toFixed(1)); return ob(x); };
  try{
    for(let i=0;i<60*60*30 && !canPrestige();i++){
      step(dt);
      if($("sheet").classList.contains("on")) closeSheet();
      if((sw-=dt)<=0){
        sw=0.55;
        const pool=balls.filter(b=>!b.gone&&!(b.arrive>0));
        const boss=pool.find(b=>b.kind==="boss");
        const t=boss&&(boss.open||boss.stag>0)?boss:pool[Math.floor(Math.random()*pool.length)];
        if(t){ const a=Math.random()*6.28;
          sweep(t.x-Math.cos(a)*80,t.y-Math.sin(a)*80,t.x+Math.cos(a)*80,t.y+Math.sin(a)*80); }
      }
      if((shop-=dt)<=0){
        shop=60;
        for(;;){ const k=UPK.filter(k=>!maxed(k)).sort((a,b)=>cost(a)-cost(b))[0];
          if(!k||G.bio<cost(k)) break; G.bio-=cost(k); G.up[k]++; }
      }
    }
  } finally { window.banner=ob; }
  console.assert(at.length===4, "not every boss arrived: "+at.join(","));
  console.log("arc check: bosses at "+at.join(" / ")+" min, scale ready at "+((el-t0)/60).toFixed(1)+" min");
})();
