export type Day={date:string;code:number;max:number;min:number;rain:number;precip:number;wind:number};
export type Place={id:string;name:string;category:string;lat:number;lon:number;km:number;url:string};
export type EventItem={id:string;name:string;date:string;time?:string;venue?:string;url:string;image?:string};
export const label=(c:number)=>c===0?"Clear sky":[1,2].includes(c)?"Partly cloudy":c===3?"Overcast":[45,48].includes(c)?"Fog":[51,53,55,56,57].includes(c)?"Drizzle":[61,63,65,66,67,80,81,82].includes(c)?"Rain":[71,73,75,77,85,86].includes(c)?"Snow":[95,96,99].includes(c)?"Thunderstorm":"Variable";
export const emoji=(c:number)=>c===0?"☀️":[1,2].includes(c)?"🌤️":[3,45,48].includes(c)?"☁️":[51,53,55,56,57].includes(c)?"🌦️":[61,63,65,66,67,80,81,82].includes(c)?"🌧️":[71,73,75,77,85,86].includes(c)?"❄️":[95,96,99].includes(c)?"⛈️":"🌡️";
export const dayLabel=(d:string)=>new Intl.DateTimeFormat("en-IN",{weekday:"short",day:"numeric",month:"short"}).format(new Date(d+"T12:00:00"));
