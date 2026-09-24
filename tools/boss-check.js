/* Boss check. Not loaded by the game: paste into the console on a running
   index.html (after pressing Begin). It fights each boss with a bot that reads
   the open/shut state the way a player would, and throws if a fight stalls,
   pays out wrong, or skips a phase. Mutates the current save's progress. */
(function(){
  const dt=1/60, out=[];
  for(let n=0;n<BOSSES.length;n++){
    for(const b of balls.slice()) remove(b);
    BOSSQ.bt=-1; G.bossMark=n; G.chests=0; G.earned=0;
    for(let i=0;i<10;i++) ventBall(spawnTier());
    for(let i=0;i<60;i++) step(dt);
    G.earned=nextScaleCost()*BOSSES[n].at+1;
    let t=0, boss=null;
    while(!boss && t<4){ step(dt); t+=dt; boss=balls.find(b=>b.kind==="boss"&&!b.gone); }
    console.assert(boss, BOSSES[n].nm+" never arrived");
    if(!boss) continue;
    const hp=boss.hp; boss.lastHit=-9; strike(boss,undefined,{x:boss.x,y:boss.y+40},true);
    console.assert(boss.hp===hp, "a swipe landed during the climb");
    let cd=0, ph=new Set(); t=0;
    while(boss.kind==="boss" && !boss.gone && t<90){
      step(dt); t+=dt; cd-=dt; ph.add(boss.ph|0);
      if(cd>0 || boss.arrive>0) continue;
      cd=0.5;
      if(boss.open||boss.stag>0){ boss.lastHit=-9; strike(boss,undefined,{x:boss.x-40,y:boss.y},true); }
      else if(boss.need>0){             // cut the nearest cell: feeds the armour, makes merges by the hydra
        let best=null,bd=1e9;
        for(const b of balls) if(b.kind!=="boss"&&!b.gone){ const d=Math.hypot(b.x-boss.x,b.y-boss.y); if(d<bd){bd=d;best=b;} }
        if(best){ best.lastHit=-9; strike(best,undefined,null,true); }
      }
    }
    const ok=boss.kind!=="boss"||boss.gone;
    console.assert(ok, BOSSES[n].nm+" still standing after 90s");
    console.assert(G.bossMark===n+1 && G.chests===1, BOSSES[n].nm+" paid out wrong");
    if(BOSSES[n].phases) console.assert(ph.size===3, "warden skipped a phase");
    if(n<BOSSES.length-1) console.assert(G.earned<nextScaleCost()*BOSSES[n+1].at, "the purse armed the next boss");
    out.push(BOSSES[n].nm+" "+t.toFixed(1)+"s");
  }
  try{ closeSheet(); }catch(e){}
  G.chests=0;
  console.log("boss check: "+out.join(", "));
})();
