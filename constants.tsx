import React from 'react';
import { InfoGrade, TransportOption } from './types';

// SVGs
export const Icons = {
  Map: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 21 15 18 9 21 3 18 3 6"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="6" x2="15" y2="18"/></svg>,
  Train: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="12" height="16" rx="2"/><line x1="10" y1="4" x2="10" y2="20"/><line x1="14" y1="4" x2="14" y2="20"/><line x1="6" y1="10" x2="18" y2="10"/></svg>,
  Mountain: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>,
  Alert: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>,
  Bed: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>,
  CloudRain: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="14.899" x2="4" y2="14.899"/><line x1="4" y1="10.101" x2="4" y2="10.101"/><line x1="12" y1="8.101" x2="12" y2="8.101"/><line x1="20" y1="14.899" x2="20" y2="14.899"/><line x1="20" y1="10.101" x2="20" y2="10.101"/><path d="M12 2v2"/><path d="M12 12v2"/><path d="M12 20v2"/><path d="M20 10a5 5 0 0 0-5-5h-1.1"/><path d="M4 10a5 5 0 0 1 5-5h1.1"/><path d="M8 14a5 5 0 0 1 5 5v1"/></svg>,
  Check: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
};

export const transportData: TransportOption[] = [
  {
    origin: 'Beijing',
    mode: '高铁 (G字头)',
    duration: '4.5 - 5 小时',
    costEstimate: '¥500 - ¥550 (二等座)',
    details: [
      '出发：北京西站',
      '到达：华山北站 (直达)',
      '班次：频次较高',
      '建议：提前2周购票，推荐 G651 / G663 次列车。'
    ],
    recommendationLevel: 'High'
  },
  {
    origin: 'Beijing',
    mode: '夕发朝至卧铺 (Z字头)',
    duration: '一整夜 (~10小时)',
    costEstimate: '¥150 - ¥300',
    details: [
      '优势：节省一晚酒店费用',
      '时间：Z19 (20:40发) -> 次日07:35到，出站直奔景区',
      '警告：睡眠质量差可能影响次日高强度爬山'
    ],
    recommendationLevel: 'Medium'
  },
  {
    origin: 'Shenzhen',
    mode: '飞机 + 高铁',
    duration: '3小时飞行 + 40分钟高铁',
    costEstimate: '¥800 - ¥1200+',
    details: [
      '飞：深圳宝安 (SZX) -> 西安咸阳 (XIY)',
      '转：机场线/地铁至西安北站',
      '铁：西安北 -> 华山北 (30-40分钟，班次极多)',
      '提示：周五晚飞西安住一晚，周六早高铁去华山最稳妥。'
    ],
    recommendationLevel: 'High'
  }
];

export const weatherInfo = {
  dateRange: "11月下旬 - 12月上旬",
  tempRange: "-5°C 至 8°C",
  wind: "山顶强风 (4-6级)",
  conditions: "干燥、寒冷、背阴处可能有结冰",
  warnings: [
    "日落较早 (约17:30)，务必在天黑前下撤至索道口。",
    "西峰索道可能因大风停运，必须关注【华山旅游服务平台】实时公告。",
    "日落后气温骤降，体感温度极低，切勿轻视保暖。"
  ]
};

export const gearList = [
  { item: "手套 (劳保/防滑)", importance: "Critical", reason: "必备！抓铁链极冷，防止冻伤和磨破手。" },
  { item: "防滑登山鞋/运动鞋", importance: "Critical", reason: "台阶可能有霜冻或暗冰，禁止穿板鞋/皮鞋。" },
  { item: "冲锋衣+羽绒内胆", importance: "Critical", reason: "山顶风大温低，洋葱式穿衣法最佳。" },
  { item: "头灯/手电", importance: "High", reason: "如下山延误，夜路无灯非常危险。" },
  { item: "护膝", importance: "Medium", reason: "下山台阶数千级，保护膝盖。" },
  { item: "高热量补给", importance: "High", reason: "士力架/牛肉干/巧克力。山上食物贵且不好吃。" }
];