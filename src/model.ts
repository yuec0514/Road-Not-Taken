export type Stats = [number, number, number];
export const names = ['自主感', '胜任感', '关系感'];
export type Context = 'rent' | 'local' | 'fresh';
export const contexts = {
 rent: {name:'独自租住',text:'刚毕业，房租需要自己承担。工坊试工多耗 1 份精力。',energy:7},
 local: {name:'暂住亲友家',text:'有人接住你的日常。邻里帮忙少耗 1 份精力，但别人也期待你的回应。',energy:6},
 fresh: {name:'带着积蓄迁来',text:'生活暂有余裕，街区却很陌生。初始精力较充裕。',energy:8}
};
export interface Initial {context:Context; stats:Stats; color:string; body:number; height:number; face:number; accessory:number; seed:number}
export interface Entry {id:string;choice:string;cost:number;result:string;before:Stats;after:Stats;trace:string;appearance:string;parallel:string[]}
export interface State {initial:Initial;stats:Stats;energy:number;turn:number;done:string[];flags:string[];traces:string[];log:Entry[];ended:boolean;npcTick:number}
export function weather(seed:number,id:string) {let h=seed|0; for(const c of id) h=Math.imul(h^c.charCodeAt(0),16777619);return (h>>>0)%3;}
