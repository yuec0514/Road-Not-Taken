import * as T from 'three';
import {CharacterRig} from './character';
import type {Initial} from './model';

/** Entry-only preview. No map, navigation, seasons or life simulation. */
export class PortraitPreview {
 scene=new T.Scene();camera=new T.PerspectiveCamera(30,240/280,.1,20);
 renderer:T.WebGLRenderer;rig?:CharacterRig;elapsed=0;last=0;reduceMotion=false;pixel=2;
 constructor(canvas:HTMLCanvasElement){
  this.renderer=new T.WebGLRenderer({canvas,antialias:true,alpha:true});
  this.renderer.setSize(240,280,false);this.camera.position.set(0,2,7.2);this.camera.lookAt(0,1.45,0);
  this.scene.add(new T.HemisphereLight(0xfff6ef,0x9c8aaf,2.3));
  const light=new T.DirectionalLight(0xffebd5,2);light.position.set(-3,5,4);this.scene.add(light);
 }
 update(initial:Initial){this.rig?.dispose();if(this.rig)this.scene.remove(this.rig.group);this.rig=new CharacterRig(initial);this.scene.add(this.rig.group);this.render();}
 resize(){const scale=this.pixel===1?2:this.pixel===3?.6:1;this.renderer.setSize(Math.round(240*scale),Math.round(280*scale),false);this.render();}
 render(){this.renderer.setRenderTarget(null);this.renderer.render(this.scene,this.camera);}
 thumbnail(canvas:HTMLCanvasElement,initial:Initial){
  const renderer=this.renderer,width=180,height=210,target=new T.WebGLRenderTarget(width,height),scene=new T.Scene(),rig=new CharacterRig(initial),camera=this.camera.clone();
  camera.aspect=width/height;camera.updateProjectionMatrix();scene.add(rig.group,new T.HemisphereLight(0xfff6ef,0x9c8aaf,2.3));
  const light=new T.DirectionalLight(0xffebd5,2);light.position.set(-3,5,4);scene.add(light);rig.group.rotation.y=.12;
  target.texture.colorSpace=T.SRGBColorSpace;const pixels=new Uint8Array(width*height*4);renderer.setRenderTarget(target);renderer.clear();renderer.render(scene,camera);renderer.readRenderTargetPixels(target,0,0,width,height,pixels);renderer.setRenderTarget(null);
  canvas.width=width;canvas.height=height;const context=canvas.getContext('2d');if(context){const frame=context.createImageData(width,height);for(let y=0;y<height;y++)frame.data.set(pixels.subarray((height-y-1)*width*4,(height-y)*width*4),y*width*4);context.putImageData(frame,0,0);}
  rig.dispose();target.dispose();this.render();
 }
 frame=(time:number)=>{const dt=Math.min(Math.max(0,(time-this.last)/1000),.05);this.last=time;this.elapsed+=dt;
  if(this.rig){this.rig.group.rotation.y=this.reduceMotion?0:Math.sin(this.elapsed*.6)*.3;this.rig.animate(this.reduceMotion?0:dt,0,this.reduceMotion?0:this.elapsed);}
  if(document.body.dataset.mode==='setup')this.render();requestAnimationFrame(this.frame);
 };
}
