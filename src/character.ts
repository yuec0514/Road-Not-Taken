import * as T from 'three';
import {contexts,type Initial,type State} from './model';

/** Geometry and motion are local to the rig; the outer group owns navigation. */
export class CharacterRig {
 group=new T.Group();torso=new T.Group();head=new T.Group();arms=[new T.Group(),new T.Group()];legs=[new T.Group(),new T.Group()];
 cargo=new T.Group();phase=0;reaction=0;loaded:boolean;glasses:boolean;leaf:boolean;fatigue:number;
 private materials:T.Material[]=[];private geometries:T.BufferGeometry[]=[];
 constructor(public initial:Initial,public state?:State,public props:{book?:boolean;photo?:boolean}={}){
  const stats=state?.stats||initial.stats;
  this.loaded=!!state?.flags.includes('parcel');this.glasses=initial.accessory===1||stats[1]>=5;this.leaf=initial.accessory===2||stats[0]>=5;
  this.fatigue=state?1-state.energy/contexts[initial.context].energy:0;
  const width=.65+initial.body*.11+stats[2]*.035,height=1+initial.height*.18+stats[1]*.05;
  this.group.add(this.torso);this.torso.position.y=this.loaded?.64:.83;
  const body=this.sphere(this.torso,0,.18,0,.67,initial.color,1);body.scale.set(width,this.loaded?.75:1.02,width*.8);
  this.head.position.set(0,this.loaded?height*.68:height*.82,.02);this.torso.add(this.head);
  const skin=this.sphere(this.head,0,0,0,.47,0xf0ceaf,1);skin.scale.set(1,1.04,.94);
  const cap=this.mesh(new T.SphereGeometry(.48,8,4,0,Math.PI*2,0,Math.PI/2),0x625c78);cap.position.set(0,.16,-.025);this.head.add(cap);
  this.box(this.head,0,.17,.17,.69,.11,.58,0x625c78);
  for(const side of [-1,1]){this.sphere(this.head,side*.16,.02,.413,.065,0x423d52,1);this.sphere(this.head,side*.27,-.09,.38,.055,0xdba99c,1);}
  if(initial.face===1){const smile=this.mesh(new T.TorusGeometry(.1,.018,4,10,Math.PI),0x795569);smile.rotation.z=Math.PI;smile.position.set(0,-.12,.45);this.head.add(smile);}else this.box(this.head,0,-.14,.45,.15,.025,.025,0x795569);
  for(let n=0;n<2;n++){
   const side=n===0?-1:1,leg=this.legs[n],arm=this.arms[n];
   leg.position.set(side*(this.loaded?.31:.25),.48,0);this.group.add(leg);
   this.box(leg,0,-.18,0,.27,.4,.3,0x74677e);this.box(leg,0,-.37,.08,.3,.16,.43,0x554c63);
   arm.position.set(side*(width*.66+.11),.43,0);this.torso.add(arm);
   this.box(arm,0,-.22,0,.24,.48,.27,initial.color);this.sphere(arm,0,-.48,.015,.145,0xefc9a5,1);
  }
  if(this.glasses){for(const side of [-1,1]){const ring=this.mesh(new T.TorusGeometry(.135,.028,5,12),0x504557);ring.position.set(side*.165,.025,.46);this.head.add(ring);}this.box(this.head,0,.035,.46,.1,.035,.04,0x504557);}
  if(this.leaf)this.addLeaf(this.head,.35,.5,.05,.45);
  this.torso.add(this.cargo);buildParcel(this.cargo,this);this.cargo.position.set(0,.2,-.64);this.cargo.visible=this.loaded;
  if(this.loaded){for(const side of [-1,1])this.box(this.torso,side*.32,.27,.48,.09,.92,.065,0xe8d4b3);}
  if(props.book){this.box(this.arms[0],0,-.41,.15,.43,.55,.13,0x8d799e);this.box(this.arms[0],0,-.41,.23,.33,.42,.03,0xe9d9b5);}
  if(props.photo){this.box(this.arms[0],0,-.4,.2,.47,.42,.04,0xf5e7d0);this.box(this.arms[0],0,-.4,.23,.34,.28,.03,0x9eb9ab);}
  for(const trace of new Set(state?.traces||[]))this.trace(trace);
  if(state?.flags.includes('invited')){const medal=this.mesh(new T.CylinderGeometry(.18,.18,.065,12),0xe2b85f);medal.rotation.x=Math.PI/2;medal.position.set(.25,.38,.52);this.torso.add(medal);}
  this.group.scale.setScalar(1.12);
 }
 mesh(geometry:T.BufferGeometry,color:T.ColorRepresentation){const material=new T.MeshStandardMaterial({color,roughness:.92,flatShading:true});const m=new T.Mesh(geometry,material);m.castShadow=true;this.materials.push(material);this.geometries.push(geometry);return m;}
 box(parent:T.Object3D,x:number,y:number,z:number,w:number,h:number,d:number,color:T.ColorRepresentation){const m=this.mesh(new T.BoxGeometry(w,h,d),color);m.position.set(x,y,z);parent.add(m);return m;}
 sphere(parent:T.Object3D,x:number,y:number,z:number,r:number,color:T.ColorRepresentation,detail=0){const m=this.mesh(new T.IcosahedronGeometry(r,detail),color);m.position.set(x,y,z);parent.add(m);return m;}
 addLeaf(parent:T.Object3D,x:number,y:number,z:number,size:number){const leaf=this.sphere(parent,x,y,z,1,0x699b7c,1);leaf.scale.set(size*.3,size,size*.15);leaf.rotation.z=-.65;const second=this.sphere(parent,x+.12,y-.1,z,1,0x96b48a);second.scale.set(size*.27,size*.65,size*.13);second.rotation.z=.8;}
 trace(trace:string){
  if(trace==='邮票贴片'){this.box(this.torso,-.22,.15,.51,.38,.32,.055,0xf2e1be);this.box(this.torso,-.22,.15,.55,.24,.21,.025,0xc18d88);}
  if(trace==='肩头压痕')for(const side of [-1,1]){const band=this.box(this.torso,side*.33,.49,.38,.11,.48,.055,0x77728a);band.rotation.z=side*.2;}
  if(trace==='袖口线迹'||trace==='手心补丁')for(const arm of this.arms)for(let k=0;k<3;k++){const stitch=this.box(arm,-.075+k*.075,-.22,.15,.035,.18,.035,0xf2d18c);stitch.rotation.z=.45;}
  if(trace==='珊瑚色结绳'){const arm=this.arms[1];for(const side of [-1,1]){const loop=this.mesh(new T.TorusGeometry(.115,.04,4,10),0xda8c8f);loop.position.set(side*.09,-.4,.16);arm.add(loop);}this.box(arm,0,-.55,.15,.09,.3,.06,0xda8c8f);}
  if(trace==='叶片发饰')this.addLeaf(this.head,-.34,.38,.18,.27);
  if(trace==='河岸风纹')for(const leg of this.legs)this.box(leg,0,-.24,.18,.3,.13,.06,0xd5c3a0);
  if(trace==='一枚空白贴纸')this.box(this.torso,.24,-.12,.5,.27,.23,.045,0xe6d7c4);
 }
 animate(dt:number,distance:number,time:number,action:string|null=null,wave=false){
  this.phase+=distance*(this.loaded?7.8:6.4);this.reaction=Math.max(0,this.reaction-dt);
  const walking=distance>.0001,stride=walking?Math.sin(this.phase):0;
  for(let n=0;n<2;n++){const side=n===0?1:-1;this.legs[n].rotation.x=stride*side*(this.loaded?.28:.62);this.arms[n].rotation.x=-stride*side*(this.loaded?.12:.52)-(this.loaded?.6:0);this.arms[n].rotation.z=(n===0?1:-1)*(this.loaded?.23:.05);}
  this.torso.rotation.x=(this.loaded?.25:0)+this.fatigue*.09;this.torso.rotation.z=walking?Math.cos(this.phase)*.035:Math.sin(time*1.6)*(.012+this.fatigue*.015);
  this.head.rotation.x=this.loaded?.12:Math.sin(time*.8)*.025+this.fatigue*.08;
  this.group.position.y=(walking?Math.abs(Math.cos(this.phase))*(this.loaded?.025:.065):Math.sin(time*2)*.016)+Math.sin(this.reaction*14)*this.reaction*.1;
  if(wave&&!walking){this.arms[1].rotation.z=-2.1+Math.sin(time*7)*.3;this.arms[1].rotation.x=-.1;this.head.rotation.z=Math.sin(time*2)*.04;}else this.head.rotation.z=0;
  if(action){
   const beat=Math.sin(time*12);
   if(action==='plant'){this.group.position.y-=.22;this.torso.rotation.x+=.65;this.legs[0].rotation.x=-.6;this.legs[1].rotation.x=.55;this.arms.forEach(a=>a.rotation.x=-.35+beat*.14);}
   else if(action==='try'){this.torso.rotation.x+=.22;this.arms[0].rotation.x=-.65;this.arms[1].rotation.x=-1.55+beat*.5;}
   else if(action==='help'){this.torso.rotation.x+=.12;this.arms[0].rotation.x=-1.25;this.arms[1].rotation.x=-.65+beat*.14;}
   else if(action==='pass'||action==='around'){this.arms[1].rotation.x=-.4;this.arms[1].rotation.z=-1.7+beat*.15;}
   else {this.torso.rotation.x+=.25;this.arms[0].rotation.x=-1.1+beat*.1;this.arms[1].rotation.x=-1.1-beat*.1;}
  }
 }
 dispose(){this.materials.forEach(m=>m.dispose());this.geometries.forEach(g=>g.dispose());}
}

/** One parcel shape for the character, the transfer flight and the receiving table. */
export function buildParcel(parent:T.Object3D,factory:{box(parent:T.Object3D,x:number,y:number,z:number,w:number,h:number,d:number,color:T.ColorRepresentation):T.Object3D}){
 factory.box(parent,0,0,0,1.03,1.03,.68,0xbd966c);factory.box(parent,0,0,.355,1.06,.12,.04,0xf0d9b6);factory.box(parent,0,0,-.355,1.06,.12,.04,0xf0d9b6);factory.box(parent,0,.53,0,.13,.04,.72,0xf0d9b6);factory.box(parent,0,0,.38,.13,1.06,.035,0xf0d9b6);factory.box(parent,.23,.25,.4,.28,.24,.04,0xf7e9ce);
}
